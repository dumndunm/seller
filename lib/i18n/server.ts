import 'server-only';
import type { I18nLocaleT } from '.';
import { i18nConfig } from './config';

const i18nDicts = {
  en: async () => ({
    metadata: (await import('../../translations/metadata/en.json')).default,
    common: (await import('../../translations/common/en.json')).default,
    reports: (await import('../../translations/reports/en.json')).default,
  }),
  ru: async () => ({
    metadata: (await import('../../translations/metadata/ru.json')).default,
    common: (await import('../../translations/common/ru.json')).default,
    reports: (await import('../../translations/reports/ru.json')).default,
  }),
};

export const importI18nDict = async (locale: I18nLocaleT) => {
  if (!i18nDicts[locale]) {
    return i18nDicts[i18nConfig.defaultLocale]();
  }
  return i18nDicts[locale]();
};
