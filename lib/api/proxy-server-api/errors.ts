import type { ApiRequestError } from '@/lib/api/fetch/errors';
import { checkIsApiRequestError } from '@/lib/api/fetch/errors';

import type { NotAuthorizedErrorT } from './models';

export const checkIsNotAuthorizedError = (
  error: Error | null | undefined,
): error is ApiRequestError<NotAuthorizedErrorT> => {
  return (
    checkIsApiRequestError<NotAuthorizedErrorT>(error) &&
    error.statusCode === 401 &&
    !!error.response?.code
  );
};
