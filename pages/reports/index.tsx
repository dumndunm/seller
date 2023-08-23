import Link from 'next/link';

import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import { urlFactory } from '@/lib/url-factory';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageContent,
} from '@/components/page';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

type ReportsPagePropsT = {
  params: RouterParamsT;
};

export default async function ReportsPage({ params }: ReportsPagePropsT) {
  const i18nDict = await importI18nDict(params.locale);

  const reports = [
    {
      href: urlFactory.financeOverviewReportPage(),
      title: i18nDict.reports.reports_financeOverview_title,
      description: i18nDict.reports.reports_financeOverview_description,
    },
    {
      href: urlFactory.financeRealizationReportPage(),
      title: i18nDict.reports.reports_financeRealization_title,
      description: i18nDict.reports.reports_financeRealization_description,
    },
    {
      href: urlFactory.financeTransactionListReportPage(),
      title: i18nDict.reports.reports_financeTransactionList_title,
      description: i18nDict.reports.reports_financeTransactionList_description,
    },
    {
      href: urlFactory.financeTransactionTotalsReportPage(),
      title: i18nDict.reports.reports_financeTransactionTotals_title,
      description:
        i18nDict.reports.reports_financeTransactionTotals_description,
    },
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{i18nDict.common.pages_reports_title}</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reports.map(({ href, title, description }) => (
            <Link key={href} href={href}>
              <Card className="h-[160px] bg-background transition-colors hover:bg-accent hover:text-accent-foreground">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </PageContent>
    </PageContainer>
  );
}
