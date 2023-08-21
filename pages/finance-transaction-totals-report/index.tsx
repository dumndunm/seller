import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
// prettier-ignore
import { PageContainer, PageHeader, PageTitle, PageDescription, PageContent } from '@/components/page';
import {
  FinanceTransactionTotalsCalendarDateRangePicker,
  FinanceTransactionTotalsDataTable,
} from '@/entities/finance-transaction-totals/components';

type TransactionTotalsReportPagePropsT = {
  params: RouterParamsT;
};

export default async function TransactionTotalsReportPage({
  params,
}: TransactionTotalsReportPagePropsT) {
  const i18nDict = await importI18nDict(params.locale);

  return (
    <PageContainer>
      <PageHeader>
        <div>
          <PageTitle>
            {i18nDict.common.pages_transactionTotalsReport_title}
          </PageTitle>
          <PageDescription>
            {i18nDict.common.pages_transactionTotalsReport_description}
          </PageDescription>
        </div>
      </PageHeader>
      <PageContent>
        <FinanceTransactionTotalsCalendarDateRangePicker />
        <FinanceTransactionTotalsDataTable />
      </PageContent>
    </PageContainer>
  );
}
