'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type {
  QueryParamAdapter,
  PartialLocation,
  QueryParamAdapterComponent,
} from 'use-query-params';

export const NextAdapterApp: QueryParamAdapterComponent = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createURL = useCallback(
    ({ search }: PartialLocation): string => {
      return [pathname, search, window.location.hash].filter(Boolean).join('');
    },
    [pathname]
  );

  const adapter = useMemo((): QueryParamAdapter => {
    return {
      get location() {
        return {
          search: searchParams.toString(),
        };
      },
      replace(location) {
        router.replace(createURL(location));
      },
      push(location) {
        router.push(createURL(location));
      },
    };
  }, [searchParams, createURL, router]);

  return children(adapter);
};
