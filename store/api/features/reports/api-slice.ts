import { rootApiSlice } from '@/store/api/reducers';
import type { RequestT } from '@/lib/api/fetch/request';
import { HTTPMethodEnum } from '@/lib/api/fetch/request';
import { defaultHandleQueryStarted } from '@/store/api/process-query';

import type {
  GetFinanceRealizationReportQueryT,
  GetFinanceRealizationReportRequestT,
  GetFinanceRealizationReportResponseT,
  GetFinanceTransactionListReportQueryT,
  GetFinanceTransactionListReportRequestT,
  GetFinanceTransactionListReportResponseT,
  GetFinanceTransactionListAllReportQueryT,
  GetFinanceTransactionListAllReportRequestT,
  GetFinanceTransactionListAllReportResponseT,
  GetFinanceTransactionTotalsReportQueryT,
  GetFinanceTransactionTotalsReportRequestT,
  GetFinanceTransactionTotalsReportResponseT,
  GetFinanceOverviewReportQueryT,
  GetFinanceOverviewReportRequestT,
  GetFinanceOverviewReportResponseT,
} from './model';

export const apiSlice = rootApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getFinanceRealizationReport: build.query<
      GetFinanceRealizationReportResponseT,
      GetFinanceRealizationReportQueryT
    >({
      query: (
        query: GetFinanceRealizationReportQueryT
      ): RequestT<GetFinanceRealizationReportRequestT> => ({
        url: '/reports/finance/realization',
        method: HTTPMethodEnum.get,
        query,
      }),
      onQueryStarted: defaultHandleQueryStarted,
    }),
    getFinanceTransactionListReport: build.query<
      GetFinanceTransactionListReportResponseT,
      GetFinanceTransactionListReportQueryT
    >({
      query: (
        query: GetFinanceTransactionListReportQueryT
      ): RequestT<GetFinanceTransactionListReportRequestT> => ({
        url: '/reports/finance/transaction/list',
        method: HTTPMethodEnum.get,
        query,
      }),
      onQueryStarted: defaultHandleQueryStarted,
    }),
    getFinanceTransactionListAllReport: build.query<
      GetFinanceTransactionListAllReportResponseT,
      GetFinanceTransactionListAllReportQueryT
    >({
      query: (
        query: GetFinanceTransactionListAllReportQueryT
      ): RequestT<GetFinanceTransactionListAllReportRequestT> => ({
        url: '/reports/finance/transaction/list/all',
        method: HTTPMethodEnum.get,
        query,
      }),
      onQueryStarted: defaultHandleQueryStarted,
    }),
    getFinanceTransactionTotalsReport: build.query<
      GetFinanceTransactionTotalsReportResponseT,
      GetFinanceTransactionTotalsReportQueryT
    >({
      query: (
        query: GetFinanceTransactionTotalsReportQueryT
      ): RequestT<GetFinanceTransactionTotalsReportRequestT> => ({
        url: '/reports/finance/transaction/totals',
        method: HTTPMethodEnum.get,
        query,
      }),
      onQueryStarted: defaultHandleQueryStarted,
    }),
    getFinanceOverviewReport: build.query<
      GetFinanceOverviewReportResponseT,
      GetFinanceOverviewReportQueryT
    >({
      query: (
        query: GetFinanceOverviewReportQueryT
      ): RequestT<GetFinanceOverviewReportRequestT> => ({
        url: '/reports/finance/overview',
        method: HTTPMethodEnum.get,
        query,
      }),
      onQueryStarted: defaultHandleQueryStarted,
    }),
  }),
});
