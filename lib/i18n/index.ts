import type { importI18nDict } from './server';

export type I18nDictT = Awaited<ReturnType<typeof importI18nDict>>;

export const i18nLocales = {
  en: 'en',
  ru: 'ru',
} as const;

export type I18nLocaleT = ValueOf<typeof i18nLocales>;
