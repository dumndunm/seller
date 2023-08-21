import { NextRequest, NextResponse } from 'next/server';
import { format } from 'date-fns';
import { FinanceRealizationQueriesEnum } from '@/entities/finance-realization/models';
import { ozonSellerApi } from '@/lib/api/ozon-seller-api';
import type { GetFinanceRealizationReportDataT } from '@/lib/api/ozon-seller-api/models';
import type { GetFinanceRealizationReportResponseT } from '@/lib/api/proxy-server-api/models';

type QueryBuilderResultT = GetFinanceRealizationReportDataT;

class QueryBuilder {
  searchParams: URLSearchParams;

  constructor(searchParams: URLSearchParams) {
    this.searchParams = searchParams;
  }

  getQuery(): QueryBuilderResultT {
    return {
      date:
        this.searchParams.get(FinanceRealizationQueriesEnum.date) ??
        format(new Date(), 'YYYY-MM'),
    };
  }
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<GetFinanceRealizationReportResponseT>> {
  const searchParams = request.nextUrl.searchParams;

  const queryBuilder = new QueryBuilder(searchParams);

  const { result } = await ozonSellerApi.getFinanceRealizationReport(
    queryBuilder.getQuery()
  );

  // ozon-seller-api openapi mistake `Type 'FinanceRealizationReportHeader[]' has no properties in common with type 'FinanceRealizationReportHeader'`
  // @ts-expect-error
  return NextResponse.json(result);
}
