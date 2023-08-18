import { NextRequest, NextResponse } from 'next/server';
import { ozonSellerApi } from '@/lib/api/ozon-seller-api';

export async function GET(
  request: NextRequest
): Promise<
  NextResponse<OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.Responses.$200>
> {
  const searchParams = request.nextUrl.searchParams;

  const result = await ozonSellerApi.getFinanceTransactionTotalsReport({
    date: {
      from: searchParams.get('fromDate') ?? '2023-07-01T00:00:00.000Z',
      to: searchParams.get('toDate') ?? '2023-07-31T00:00:00.000Z',
    },
    posting_number: searchParams.get('posting_number') ?? '',
    transaction_type: (searchParams.get('transaction_type') ??
      'all') as OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody['transaction_type'],
  });

  return NextResponse.json(result);
}
