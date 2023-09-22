import type { Metadata } from 'next';
import type { RouterParamsT } from '@/lib/router';
import { importI18nDict } from '@/lib/i18n/server';
import ReportsPage from '@/pages/reports';

type GenerateMetadataPropsT = {
  params: RouterParamsT;
};

export async function generateMetadata({
  params,
}: GenerateMetadataPropsT): Promise<Metadata> {
  const i18nDict = await importI18nDict(params.locale);
  return {
    title: i18nDict.metadata.reportsPageMetadata_title,
  };
}

export default ReportsPage;
