import { NextRequest, NextResponse } from 'next/server';
import { formatISO, startOfMonth, endOfMonth } from 'date-fns';
import { FinanceTransactionTotalsQueriesEnum } from '@/entities/finance-transaction-totals/models';
import { TransactionTypeEnum } from '@/entities/transaction-type/models';
import { ozonSellerApi } from '@/lib/api/ozon-seller-api';
import type {
  GetFinanceRealizationReportDataT,
  GetFinanceTransactionTotalsReportDataT,
} from '@/lib/api/ozon-seller-api/models';
import type {
  GetFinanceTransactionListAllReportQueryT,
  GetFinanceOverviewReportResponseT,
} from '@/lib/api/proxy-server-api/models';
import { proxyServerApi } from '@/lib/api/proxy-server-api';

type QueryBuilderResultT = GetFinanceRealizationReportDataT &
  GetFinanceTransactionListAllReportQueryT &
  GetFinanceTransactionTotalsReportDataT;

class QueryBuilder {
  searchParams: URLSearchParams;

  constructor(searchParams: URLSearchParams) {
    this.searchParams = searchParams;
  }

  // getStartDate(): DateISOStringT {
  //   const date = this.searchParams.get(
  //     FinanceTransactionTotalsQueriesEnum.startDate
  //   );
  //   return date || formatISO(startOfMonth(new Date()));
  // }

  // getEndDate(): DateISOStringT {
  //   const date = this.searchParams.get(
  //     FinanceTransactionTotalsQueriesEnum.endDate
  //   );
  //   return date || formatISO(endOfMonth(new Date()));
  // }

  // getDate(): QueryBuilderResultT['date'] {
  //   return {
  //     from: this.getStartDate(),
  //     to: this.getEndDate(),
  //   };
  // }

  // getPostingNumber(): QueryBuilderResultT['posting_number'] {
  //   return (
  //     this.searchParams.get(
  //       FinanceTransactionTotalsQueriesEnum.postingNumber
  //     ) ?? ''
  //   );
  // }

  // getTransactionType(): QueryBuilderResultT['transaction_type'] {
  //   return (
  //     this.searchParams.get(
  //       FinanceTransactionTotalsQueriesEnum.transactionType
  //     ) ?? TransactionTypeEnum.all
  //   );
  // }

  // getQuery(): QueryBuilderResultT {
  //   return {
  //     date: this.getDate(),
  //     posting_number: this.getPostingNumber(),
  //     transaction_type: this.getTransactionType(),
  //   };
  // }

  getFinanceRealizationReportQuery(): GetFinanceRealizationReportDataT {
    return {
      date: '2023-07',
    };
  }

  getFinanceTransactionListAllReportQuery(): GetFinanceTransactionListAllReportQueryT {
    return {
      startDate: formatISO(endOfMonth(new Date())),
      endDate: formatISO(endOfMonth(new Date())),
      // TODO
    };
  }

  getFinanceTransactionTotalsReportQuery(): GetFinanceTransactionTotalsReportDataT {
    return {
      date: {
        from: formatISO(endOfMonth(new Date())),
        to: formatISO(endOfMonth(new Date())),
      },
    };
  }
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<GetFinanceOverviewReportResponseT>> {
  const searchParams = request.nextUrl.searchParams;

  const queryBuilder = new QueryBuilder(searchParams);

  const [financeRealization, financeTransactionList, financeTransactionTotals] =
    await Promise.all([
      ozonSellerApi.getFinanceRealizationReport(
        queryBuilder.getFinanceRealizationReportQuery()
      ),
      proxyServerApi.getFinanceTransactionListAllReport(
        queryBuilder.getFinanceTransactionListAllReportQuery()
      ),
      ozonSellerApi.getFinanceTransactionTotalsReport(
        queryBuilder.getFinanceTransactionTotalsReportQuery()
      ),
    ]);

  return NextResponse.json({});
}
