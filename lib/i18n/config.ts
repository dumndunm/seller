import { i18nLocales } from '.';
import type { I18nLocaleT } from '.';

type i18nConfigT = {
  locales: Array<I18nLocaleT>;
  defaultLocale: I18nLocaleT;
};

export const i18nConfig: i18nConfigT = {
  locales: Object.values(i18nLocales),
  defaultLocale: i18nLocales.en,
};
