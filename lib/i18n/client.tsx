'use client';

import { createContext, useContext } from 'react';
import type { I18nDictT } from '.';

const I18nContext = createContext<I18nDictT>(null!);

export const useI18n = (): I18nDictT => {
  return useContext(I18nContext);
};

type I18nProviderPropsT = {
  i18nDict: I18nDictT;
};

export const I18nProvider: FC<PropsWithChildren<I18nProviderPropsT>> = ({
  children,
  i18nDict,
}) => {
  return (
    <I18nContext.Provider value={i18nDict}>{children}</I18nContext.Provider>
  );
};
