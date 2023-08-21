// import { PassportAuthProvider } from 'utils/api/auth-providers/passport-auth-provider';
import {
  HTTPMethodEnum,
  type DefaultRequestShapeT,
  type RequestT,
} from '../fetch/request';
// import { checkIsNotAuthorizedError } from '@/lib/api/proxy-api/errors';
// import { NotAuthorizedErrorCodeEnum } from '@/lib/api/proxy-api/models';

// import type { ApiAuthProviderI } from '../auth-providers/base-interface';
import { doFetch } from '../fetch/do-fetch';
import type { ApiResponseT } from '../fetch/response';

import type {
  GetFinanceRealizationReportQueryT,
  GetFinanceRealizationReportResponseT,
  GetFinanceTransactionListReportQueryT,
  GetFinanceTransactionListReportResponseT,
  GetFinanceTransactionListAllReportQueryT,
  GetFinanceTransactionListAllReportResponseT,
  GetFinanceTransactionTotalsReportQueryT,
  GetFinanceTransactionTotalsReportResponseT,
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

  getFinancerealizationReport = async (
    query: GetFinanceRealizationReportQueryT
  ): Promise<GetFinanceRealizationReportResponseT> => {
    const response = await this.doFetch<GetFinanceRealizationReportResponseT>({
      method: HTTPMethodEnum.get,
      url: '/reports/finance/realization',
      query,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data;
  };

  getFinanceTransactionListReport = async (
    query: GetFinanceTransactionListReportQueryT
  ): Promise<GetFinanceTransactionListReportResponseT> => {
    const response =
      await this.doFetch<GetFinanceTransactionListReportResponseT>({
        method: HTTPMethodEnum.get,
        url: '/reports/finance/transaction/list',
        query,
      });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data;
  };

  getFinanceTransactionListAllReport = async (
    query: GetFinanceTransactionListAllReportQueryT
  ): Promise<GetFinanceTransactionListAllReportResponseT> => {
    const response =
      await this.doFetch<GetFinanceTransactionListAllReportResponseT>({
        method: HTTPMethodEnum.get,
        url: '/reports/finance/transaction/list/all',
        query,
      });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data;
  };

  getFinanceTransactionTotalsReport = async (
    query: GetFinanceTransactionTotalsReportQueryT
  ): Promise<GetFinanceTransactionTotalsReportResponseT> => {
    const response =
      await this.doFetch<GetFinanceTransactionTotalsReportResponseT>({
        method: HTTPMethodEnum.get,
        url: '/reports/finance/transaction/totals',
        query,
      });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data;
  };
}

// const authProvider = PassportAuthProvider.getInstance();
const proxyServerApi = new ProxyServerApi(
  // authProvider,
  'http://localhost:3000/api'
);

export { ProxyServerApi, proxyServerApi };
