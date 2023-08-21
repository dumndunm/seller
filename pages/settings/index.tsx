import type { Metadata } from 'next';

import { PageTitle } from '@/components/page/page-title';
import { PageContainer } from '@/components/page/page-container';
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
    <PageContainer>
      <div className="flex items-center justify-between space-y-2">
        <PageTitle>{i18nCommonDict.pages_settings_title}</PageTitle>
      </div>
    </PageContainer>
  );
}
