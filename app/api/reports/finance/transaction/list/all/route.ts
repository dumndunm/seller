import { NextRequest, NextResponse } from 'next/server';
import { formatISO, startOfMonth, endOfMonth } from 'date-fns';
import { FinanceTransactionTotalsQueriesEnum } from '@/entities/finance-transaction-totals/models';
import { TransactionTypeEnum } from '@/entities/transaction-type/models';
import { ozonSellerApi } from '@/lib/api/ozon-seller-api';
import type { FinanceTransactionListOperationT } from '@/entities/finance-transaction-list/models';
import type { GetFinanceTransactionListReportDataT } from '@/lib/api/ozon-seller-api/models';
import type { GetFinanceTransactionListReportResponseT } from '@/lib/api/proxy-server-api/models';
import { Counter } from '@/lib/counter';

type QueryBuilderResultT = GetFinanceTransactionListReportDataT;

class QueryBuilder {
  searchParams: URLSearchParams;

  initialPage = 1;
  maxPageSize = 1000;

  constructor(searchParams: URLSearchParams) {
    this.searchParams = searchParams;
  }

  getStartDate(): DateISOStringT {
    const date = this.searchParams.get(
      FinanceTransactionTotalsQueriesEnum.startDate
    );
    return date || formatISO(startOfMonth(new Date()));
  }

  getEndDate(): DateISOStringT {
    const date = this.searchParams.get(
      FinanceTransactionTotalsQueriesEnum.endDate
    );
    return date || formatISO(endOfMonth(new Date()));
  }

  getDate(): NonNullable<QueryBuilderResultT['filter']>['date'] {
    return {
      from: this.getStartDate(),
      to: this.getEndDate(),
    };
  }

  getPostingNumber(): NonNullable<
    QueryBuilderResultT['filter']
  >['posting_number'] {
    return (
      this.searchParams.get(
        FinanceTransactionTotalsQueriesEnum.postingNumber
      ) ?? ''
    );
  }

  getTransactionType(): NonNullable<
    QueryBuilderResultT['filter']
  >['transaction_type'] {
    return (
      this.searchParams.get(
        FinanceTransactionTotalsQueriesEnum.transactionType
      ) ?? TransactionTypeEnum.all
    );
  }

  getQuery(page: number = this.initialPage): QueryBuilderResultT {
    return {
      filter: {
        date: this.getDate(),
        posting_number: this.getPostingNumber(),
        transaction_type: this.getTransactionType(),
      },
      page,
      page_size: this.maxPageSize,
    };
  }
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<GetFinanceTransactionListReportResponseT>> {
  const searchParams = request.nextUrl.searchParams;

  const queryBuilder = new QueryBuilder(searchParams);

  const { result } = await ozonSellerApi.getFinanceTransactionListReport(
    queryBuilder.getQuery()
  );
  if (!result) {
    return NextResponse.json({
      operations: [],
    });
  }

  let operations: Array<FinanceTransactionListOperationT> =
    result.operations || [];
  let currentPageCounter = new Counter(queryBuilder.initialPage);

  while (currentPageCounter.current !== result.page_count ?? 1) {
    currentPageCounter.tick();

    const { result } = await ozonSellerApi.getFinanceTransactionListReport(
      queryBuilder.getQuery(currentPageCounter.current)
    );
    if (!result) {
      break;
    }

    operations = operations.concat(result.operations || []);
  }

  return NextResponse.json({ operations });
}
