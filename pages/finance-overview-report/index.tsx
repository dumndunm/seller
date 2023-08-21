import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
// prettier-ignore
import { PageContainer, PageHeader, PageTitle, PageDescription, PageContent } from '@/components/page';
import {
  FinanceOverviewReportCalendarDateRangePicker,
  FinanceOverviewReportDashboard,
} from '@/entities/finance-overview-report/components';

type OverviewReportPagePropsT = {
  params: RouterParamsT;
};

export default async function FinanceOverviewReportPage({
  params,
}: OverviewReportPagePropsT) {
  const i18nDict = await importI18nDict(params.locale);

  return (
    <PageContainer>
      <PageHeader>
        <div>
          <PageTitle>
            {i18nDict.common.pages_financeOverviewReport_title}
          </PageTitle>
          <PageDescription>
            {i18nDict.common.pages_financeOverviewReport_description}
          </PageDescription>
        </div>
        <FinanceOverviewReportCalendarDateRangePicker />
      </PageHeader>
      <PageContent>
        <FinanceOverviewReportDashboard />
      </PageContent>
    </PageContainer>
  );
}
