import type { DefaultRequestShapeT, RequestT } from './request';

export class RequestError extends Error {
  request: RequestT<DefaultRequestShapeT>;

  constructor(request: RequestT<DefaultRequestShapeT>, message: string) {
    super(`Request error: ${message || ''}`);

    this.request = request;

    // fix for instanceof
    // https://github.com/microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, RequestError.prototype);
  }
}

// General 4xx or 5xx HTTP error
export class ApiRequestError<E> extends RequestError {
  statusCode: number;

  response: E;

  constructor(
    request: RequestT<DefaultRequestShapeT>,
    statusCode: number,
    response: E
  ) {
    super(request, `HTTP status code ${statusCode}`);

    this.statusCode = statusCode;
    this.response = response;

    // fix for instanceof
    // https://github.com/microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, ApiRequestError.prototype);
  }
}

export class NetworkRequestError extends RequestError {
  constructor(request: RequestT<DefaultRequestShapeT>, error: Error) {
    super(request, `Network error: ${error.message}`);

    // fix for instanceof
    // https://github.com/microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, NetworkRequestError.prototype);
  }
}

export class TimeoutRequestError extends RequestError {
  constructor(request: RequestT<DefaultRequestShapeT>) {
    super(request, 'Timeout error');

    // fix for instanceof
    // https://github.com/microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, TimeoutRequestError.prototype);
  }
}

export class JsonParseRequestError extends RequestError {
  statusCode: number;

  response: string;

  constructor(
    request: RequestT<DefaultRequestShapeT>,
    statusCode: number,
    response: string,
    parseError: Error
  ) {
    super(request, `JSON parse error: ${parseError.message}`);

    this.statusCode = statusCode;
    this.response = response;

    this.message = parseError.message;

    // fix for instanceof
    // https://github.com/microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, JsonParseRequestError.prototype);
  }
}

export type AnyRequestErrorT<E = any> =
  | ApiRequestError<E>
  | NetworkRequestError
  | TimeoutRequestError
  | JsonParseRequestError;

export const checkIsTimeoutRequestError = (
  error: Error | null | undefined
): error is TimeoutRequestError => {
  return Boolean(error) && error instanceof TimeoutRequestError;
};

export const checkIsJsonParseRequestError = (
  error: Error | null | undefined
): error is JsonParseRequestError => {
  return Boolean(error) && error instanceof JsonParseRequestError;
};

export const checkIsNetworkRequestError = (
  error: Error | null | undefined
): error is NetworkRequestError => {
  return Boolean(error) && error instanceof NetworkRequestError;
};

export const checkIsApiRequestError = <T = any>(
  error: Error | null | undefined
): error is ApiRequestError<T> => {
  return Boolean(error) && error instanceof ApiRequestError;
};

export const checkIsRequestError = <T = any>(
  error: Error | null | undefined
): error is AnyRequestErrorT<T> => {
  return (
    checkIsTimeoutRequestError(error) ||
    checkIsJsonParseRequestError(error) ||
    checkIsNetworkRequestError(error) ||
    checkIsApiRequestError(error)
  );
};
