import { NextRequest, NextResponse } from 'next/server';
import { startOfMonth, lastDayOfMonth, formatISO } from 'date-fns';
import { ozonSellerApi } from '@/lib/api/ozon-seller-api';
import { TotalsReportPageQueries } from '@/lib/query/params';

type DateQueryT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody['date'];
type PostingNumberQueryT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody['posting_number'];
type TransactionTypeQueryT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody['transaction_type'];

type QueryT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody;

class QueryBuilder {
  searchParams: URLSearchParams;

  constructor(searchParams: URLSearchParams) {
    this.searchParams = searchParams;
  }

  getDateQuery(): DateQueryT {
    return {
      from:
        this.searchParams.get(TotalsReportPageQueries.dateFrom) ??
        formatISO(startOfMonth(new Date())),
      to:
        this.searchParams.get(TotalsReportPageQueries.dateTo) ??
        formatISO(lastDayOfMonth(new Date())),
    };
  }

  getPostingNumberQuery(): PostingNumberQueryT {
    return this.searchParams.get(TotalsReportPageQueries.postingNumber) ?? '';
  }

  getTransactionTypeQuery(): TransactionTypeQueryT {
    return (
      (this.searchParams.get(
        TotalsReportPageQueries.transactionType
      ) as TransactionTypeQueryT) ?? 'all'
    );
  }

  getQuery(): QueryT {
    return {
      date: this.getDateQuery(),
      posting_number: this.getPostingNumberQuery(),
      transaction_type: this.getTransactionTypeQuery(),
    };
  }
}

type ResultT =
  ProxyServerApiDefinitions.Paths.FinanceTransactionTotals.Get.Responses.$200;

export async function GET(
  request: NextRequest
): Promise<NextResponse<ResultT>> {
  const searchParams = request.nextUrl.searchParams;

  const queryBuilder = new QueryBuilder(searchParams);

  const { result } = await ozonSellerApi.getFinanceTransactionTotalsReport(
    queryBuilder.getQuery()
  );

  return NextResponse.json(result);
}
