import type {
  QueryLifecycleApi,
  QueryFulfilledRejectionReason,
} from '@reduxjs/toolkit/dist/query/endpointDefinitions';

type AnyQueryLifecycleApiT = QueryLifecycleApi<TODO, TODO, TODO>;
type RejectReasonT = QueryFulfilledRejectionReason<TODO>;

type OnBeginT<Request> = (
  api: AnyQueryLifecycleApiT,
  query: Request
) => Promise<void>;

type OnSuccessT<Response> = (
  api: AnyQueryLifecycleApiT,
  data: Response
) => Promise<void>;

type OnErrorT = (
  api: AnyQueryLifecycleApiT,
  rejectReason: RejectReasonT
) => Promise<void>;

type ParamsT<Request = any, Response = any> = {
  onBegin?: OnBeginT<Request>;
  onSuccess?: OnSuccessT<Response>;
  onError?: OnErrorT;
};

const createHandleQueryStarted = <Request = any, Response = any>(
  params: ParamsT<Request, Response>
) => {
  const { onBegin, onError, onSuccess } = params;

  return async (query: TODO, api: AnyQueryLifecycleApiT) => {
    if (onBegin) {
      await onBegin(api, query);
    }
    try {
      const { data } = await api.queryFulfilled;

      if (onSuccess) {
        await onSuccess(api, data);
      }
    } catch (error) {
      if (onError) {
        await onError(api, error as RejectReasonT);
      }
    }
  };
};

const queryCacheTags = {
  test: 'test',
} as const;

const allQueryCacheTags = Object.values(queryCacheTags) as Array<string>;

export {
  type OnBeginT,
  type OnSuccessT,
  type OnErrorT,
  createHandleQueryStarted,
  queryCacheTags,
  allQueryCacheTags,
};
