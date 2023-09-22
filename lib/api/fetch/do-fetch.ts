import queryString from 'query-string';

import {
  ApiRequestError,
  JsonParseRequestError,
  NetworkRequestError,
  TimeoutRequestError,
} from './errors';
import type { DefaultRequestShapeT, RequestInitT, RequestT } from './request';
import type { ApiResponseT } from './response';

const DEFAULT_TIMEOUT = 30 * 1000; /* TODO move to lib/units or ~ */

const checkIsErrorStatusCode = (statusCode: number | undefined): boolean => {
  if (statusCode === undefined) {
    return false;
  }

  return statusCode < 200 || statusCode >= 400;
};

const createTimeoutPromise = (
  request: RequestT<DefaultRequestShapeT>
): Promise<void> => {
  return new Promise((_, reject): void => {
    setTimeout(() => {
      const timeoutError = new TimeoutRequestError(request);

      reject(timeoutError);
    }, request.timeout || DEFAULT_TIMEOUT);
  });
};

const fetchClient = (
  request: RequestT<DefaultRequestShapeT>
): ReturnType<typeof fetch> => {
  const { url, query, data, method, headers, credentials } = request;

  const fetchRequest: RequestInitT = {
    method,
    headers,
  };

  let urlWithQuery = url;
  if (query) {
    urlWithQuery += `?${queryString.stringify(query, { skipNull: true })}`;
  }

  if (credentials) {
    fetchRequest.credentials = credentials;
  }

  if (data) {
    fetchRequest.body = JSON.stringify(data);
    fetchRequest.headers = {
      ...fetchRequest.headers,
      'Content-Type':
        fetchRequest.headers?.['Content-Type'] || 'application/json',
    };
  }

  return fetch(urlWithQuery, { ...fetchRequest, cache: 'no-cache' });
};

const checkIsJSONContentType = (headerValue: string | null): boolean => {
  return Boolean(headerValue?.toLowerCase().includes('json'));
};

const doFetch = async <D, E = any>(
  request: RequestT<DefaultRequestShapeT>
): Promise<ApiResponseT<D, E>> => {
  const { mock } = request;

  if (mock) {
    if (!checkIsErrorStatusCode(mock.statusCode)) {
      return { error: null, data: mock.response };
    }

    const mockApiError = new ApiRequestError(
      request,
      mock.statusCode || 0,
      mock.response
    );
    return { error: mockApiError, data: null };
  }

  try {
    const response = await Promise.race([
      createTimeoutPromise(request),
      fetchClient(request),
    ]);

    // for type checking
    if (!response) {
      throw new Error('Empty response and error!');
    }

    // Sometimes API responds with empty string, JSON parse won't work here, but it's fine
    const responseBodyText = await response.text();

    let parsedResponseBody: string | D | E = responseBodyText;

    const contentTypeHeaderValue =
      response.headers.get('content-type') ||
      response.headers.get('Content-Type');
    if (
      checkIsJSONContentType(contentTypeHeaderValue) &&
      responseBodyText.length > 0
    ) {
      try {
        parsedResponseBody = JSON.parse(responseBodyText);
      } catch (error) {
        const apiError = new JsonParseRequestError(
          request,
          response.status,
          responseBodyText,
          error as Error
        );
        return { error: apiError, data: null };
      }
    }

    if (checkIsErrorStatusCode(response.status)) {
      const apiError = new ApiRequestError(
        request,
        response.status,
        parsedResponseBody as E
      );
      return { error: apiError, data: null };
    }

    return {
      error: null,
      data: parsedResponseBody as D,
    };
  } catch (error) {
    if (error instanceof TimeoutRequestError) {
      return {
        error,
        data: null,
      };
    }

    return {
      error: new NetworkRequestError(request, error as Error),
      data: null,
    };
  }
};

export { doFetch };
