// import { PassportAuthProvider } from 'utils/api/auth-providers/passport-auth-provider';
import {
  HTTPMethodEnum,
  type DefaultRequestShapeT,
  type RequestT,
} from '@/lib/api/fetch/request';
// import { checkIsNotAuthorizedError } from '@/lib/api/proxy-api/errors';
// import { NotAuthorizedErrorCodeEnum } from '@/lib/api/proxy-api/models';

// import type { ApiAuthProviderI } from '../auth-providers/base-interface';
import { doFetch } from '@/lib/api/fetch/do-fetch';
import type { ApiResponseT } from '@/lib/api/fetch/response';

import type {
  GetFinanceTransactionTotalsReportQueryT,
  GetFinanceTransactionTotalsReportResultT,
} from './models';

const DEFAULT_TIMEOUT = 30 * 1000;

type SellerProxyApiFetchOptionsT = {
  isDisabledUpdateSession?: boolean;
};

class ProxyServerApi {
  private basepath: string;

  // private authProvider: ApiAuthProviderI;

  constructor(/* authProvider: ApiAuthProviderI, */ basepath: string) {
    // this.authProvider = authProvider;
    this.basepath = basepath;
  }

  doFetch = async <D, E = any>(
    request: RequestT<DefaultRequestShapeT>,
    options?: SellerProxyApiFetchOptionsT
  ): Promise<ApiResponseT<D, E>> => {
    // const authHeaders = await this.authProvider.getAuthHeaders();

    const { headers, url, timeout, ...restRequest } = request;

    const response = await doFetch<D, E>({
      ...restRequest,
      url: `${this.basepath}${url}`,
      headers: {
        ...headers,
        // ...authHeaders,
      },
      timeout: timeout || DEFAULT_TIMEOUT,
    });

    // if (
    //   checkIsNotAuthorizedError(response.error) &&
    //   response.error.response.code ===
    //     NotAuthorizedErrorCodeEnum.needUpdateSession &&
    //   !options?.isDisabledUpdateSession
    // ) {
    //   await this.authProvider.update();

    //   return this.doFetch<D, E>(request, {
    //     isDisabledUpdateSession: true,
    //   });
    // }

    return response;
  };

  getFinanceTransactionTotalsReport = async (
    query: GetFinanceTransactionTotalsReportQueryT
  ): Promise<GetFinanceTransactionTotalsReportResultT> => {
    const { error, data } =
      await this.doFetch<GetFinanceTransactionTotalsReportResultT>({
        method: HTTPMethodEnum.get,
        url: '/reports/finance/totals',
        query,
      });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };
}

// const authProvider = PassportAuthProvider.getInstance();
const proxyServerApi = new ProxyServerApi(
  // authProvider,
  'http://localhost:3000/api'
);

export { ProxyServerApi, proxyServerApi };
