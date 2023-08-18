import type { Metadata } from 'next';

import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import { proxyServerApi } from '@/lib/api/proxy-server-api';
import { PageContent } from '@/components/page-content';
import { PageTitle } from '@/components/page-title';
import { TransactionTotalsDataTable } from '@/components/transaction-totals-data-table';
import {
  TotalsReportPageQueries,
  TotalsReportPageQueriesT,
} from '@/lib/query/params';

type GenerateTotalsReportPageMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateTotalsReportPageMetadataPropsT): Promise<Metadata> {
  const i18nDict = await importI18nDict(params.locale);

  return {
    title: i18nDict.metadata.totalsReportPageMetadata_title,
  };
}

type TotalsReportPageSearchParamsT = {
  dateFrom: TotalsReportPageQueriesT['dateFrom'];
  dateTo: TotalsReportPageQueriesT['dateTo'];
};

type TotalsReportPagePropsT = {
  params: RouterParamsT;
  searchParams: TotalsReportPageSearchParamsT;
};

export default async function TotalsReportPage({
  params,
  searchParams,
}: TotalsReportPagePropsT) {
  const i18nDict = await importI18nDict(params.locale);

  const data = await proxyServerApi.getFinanceTransactionTotalsReport(
    searchParams
  );

  return (
    <PageContent>
      <div className="flex items-center justify-between space-y-2">
        <PageTitle>{i18nDict.common.totalsReportPage_title}</PageTitle>
      </div>
      <div className="space-y-4">
        <TransactionTotalsDataTable data={data} />
      </div>
    </PageContent>
  );
}
