'use client';

import { QueryParamProvider } from 'use-query-params';
import { NextAdapterApp } from '@/lib/query/adapter/next-adapter-app';

export const QueryParamsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  );
};
