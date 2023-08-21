'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/provider';
import { urlFactory } from '@/lib/url-factory';

type LinkItemT = {
  href: string;
  children: ReactNode;
};

const createLinkCn = (isActive: boolean) =>
  cn(
    'text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer w-full',
    isActive && 'text-foreground'
  );

export const Navigation: FC = () => {
  const i18n = useI18n();

  // @ts-expect-error
  const currentPathname: string = usePathname();

  const data = useMemo((): Array<LinkItemT> => {
    return [
      {
        href: urlFactory.reportsPage(),
        children: i18n.common.navigation_reportsItem_title,
      },
      {
        href: urlFactory.settingsPage(),
        children: i18n.common.navigation_settingsItem_title,
      },
    ];
  }, [i18n]);

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {data.map(({ href, children }) => (
        <Link
          key={href}
          href={href}
          className={createLinkCn(currentPathname.includes(href))}
        >
          {children}
        </Link>
      ))}
    </nav>
  );
};
