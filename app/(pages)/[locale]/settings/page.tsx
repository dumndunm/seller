import type { Metadata } from 'next';
import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import SettingsPage from '@/pages/settings';

type GenerateMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateMetadataPropsT): Promise<Metadata> {
  const i18nDict = await importI18nDict(params.locale);
  return {
    title: i18nDict.metadata.settingsPageMetadata_title,
  };
}

export default SettingsPage;
