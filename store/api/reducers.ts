import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { processApiError } from '@/store/api/process-api-error';
import type { DefaultRequestShapeT, RequestT } from '@/lib/api/fetch/request';
import { proxyServerApi } from '@/lib/api/proxy-server-api';
import { allQueryCacheTags } from '@/lib/rtq-helpers';

const customProxyApiBaseQuery: BaseQueryFn<
  RequestT<DefaultRequestShapeT>,
  unknown,
  unknown
> = async (request) => {
  const result = await proxyServerApi.doFetch(request);

  if (result.error) {
    processApiError(result.error);
    return { error: result.error };
  }

  return { data: result.data };
};

export const rootApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: retry(customProxyApiBaseQuery, {
    maxRetries: 3,
  }),
  tagTypes: allQueryCacheTags,
  endpoints: () => ({}),
});
