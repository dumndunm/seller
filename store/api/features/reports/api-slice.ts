import {
  defaultHandleQueryStarted,
  // defaultOnError,
} from '@/store/api/process-query';
import { rootApiSlice } from '@/store/api/reducers';
import type { RequestT } from '@/lib/api/fetch/request';
import { HTTPMethodEnum } from '@/lib/api/fetch/request';
import {
  /* createHandleQueryStarted, */ queryCacheTags,
} from '@/lib/rtq-helpers';

import type {
  GetFinanceTransactionTotalsReportQueryT,
  GetFinanceTransactionTotalsReportRequestT,
  GetFinanceTransactionTotalsReportResponseT,
} from './model';

export const apiSlice = rootApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getFinanceTransactionTotalsReport: build.query<
      GetFinanceTransactionTotalsReportResponseT,
      GetFinanceTransactionTotalsReportQueryT | void
    >({
      query: ({
        query,
        data,
      }: GetFinanceTransactionTotalsReportRequestT): RequestT<GetFinanceTransactionTotalsReportRequestT> => ({
        url: '/reports/finance/totals',
        method: HTTPMethodEnum.post,
        query: query || {},
        data,
      }),
      providesTags: () => {
        return [{ type: queryCacheTags.test }];
      },
      onQueryStarted: defaultHandleQueryStarted,
    }),
  }),
});
