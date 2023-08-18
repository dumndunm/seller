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
  GetFinanceTransactionTotalsReportDataT,
  GetFinanceTransactionTotalsReportResultT,
} from './models';

const DEFAULT_TIMEOUT = 30 * 1000;

type SellerProxyApiFetchOptionsT = {
  isDisabledUpdateSession?: boolean;
};

class OzonSellerApi {
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
    body: GetFinanceTransactionTotalsReportDataT
  ): Promise<GetFinanceTransactionTotalsReportResultT> => {
    const { error, data } =
      await this.doFetch<GetFinanceTransactionTotalsReportResultT>({
        method: HTTPMethodEnum.post,
        url: '/v3/finance/transaction/totals',
        data: body,
        headers: {
          'client-id': '250423',
          'api-key': 'a11256e3-5a0b-44c6-9382-3178453a7aa6',
        },
      });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };
}

// const authProvider = PassportAuthProvider.getInstance();
const ozonSellerApi = new OzonSellerApi(
  // authProvider,
  'https://api-seller.ozon.ru'
);

export { OzonSellerApi, ozonSellerApi };
