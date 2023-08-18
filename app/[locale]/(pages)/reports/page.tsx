import type { Metadata } from 'next';

import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import { PageContent } from '@/components/page-content';
import { PageTitle } from '@/components/page-title';

type GenerateReportsPageMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateReportsPageMetadataPropsT): Promise<Metadata> {
  const i18nDict = await importI18nDict(params.locale);

  return {
    title: i18nDict.metadata.reportsPageMetadata_title,
  };
}

type ReportsPagePropsT = {
  params: RouterParamsT;
};

export default async function ReportsPage({ params }: ReportsPagePropsT) {
  const i18nDict = await importI18nDict(params.locale);

  return (
    <PageContent>
      <div className="flex items-center justify-between space-y-2">
        <PageTitle>{i18nDict.common.reportsPage_title}</PageTitle>
      </div>
      <div className="space-y-4"></div>
    </PageContent>
  );
}
