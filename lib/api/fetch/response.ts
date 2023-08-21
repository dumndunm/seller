import type { AnyRequestErrorT } from './errors';

export type ApiResponseT<D = any, E = any> =
  | {
      error: null;
      data: D;
    }
  | {
      error: AnyRequestErrorT<E>;
      data: null;
    };
