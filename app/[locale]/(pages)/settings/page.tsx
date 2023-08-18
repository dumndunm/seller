import type { Metadata } from 'next';

import { PageTitle } from '@/components/page-title';
import { PageContent } from '@/components/page-content';
import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';

type GenerateSettingsPageMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateSettingsPageMetadataPropsT): Promise<Metadata> {
  const i18nMetadataDict = (await importI18nDict(params.locale)).metadata;
  return {
    title: i18nMetadataDict.settingsPageMetadata_title,
  };
}

type SettingsPagePropsT = {
  params: RouterParamsT;
};

export default async function SettingsPage({ params }: SettingsPagePropsT) {
  const i18nCommonDict = (await importI18nDict(params.locale)).common;

  return (
    <PageContent>
      <div className="flex items-center justify-between space-y-2">
        <PageTitle>{i18nCommonDict.settingsPage_title}</PageTitle>
      </div>
    </PageContent>
  );
}
