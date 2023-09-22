import type { Metadata } from 'next';
import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import TransactionTotalsReportPage from '@/pages/finance-transaction-totals-report';

type GenerateMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateMetadataPropsT): Promise<Metadata> {
  const i18nDict = await importI18nDict(params.locale);
  return {
    title: i18nDict.metadata.totalsReportPageMetadata_title,
  };
}

export default TransactionTotalsReportPage;
