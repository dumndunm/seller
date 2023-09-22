import { retry } from '@reduxjs/toolkit/dist/query/react';
import type { AnyRequestErrorT } from '@/lib/api/fetch/errors';
import { checkIsNetworkRequestError } from '@/lib/api/fetch/errors';

const processApiError = (error: AnyRequestErrorT): void => {
  const shouldRetryRequest = checkIsNetworkRequestError(error);
  if (!shouldRetryRequest) {
    retry.fail(error);
  }
};

export { processApiError };
