'use client';

import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/provider';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { SessionStatusEnum } from '@/entities/session/models';
import { urlFactory } from '@/lib/url-factory';
import Link from 'next/link';

const createLinkCn = (isActive: boolean) =>
  cn(
    'text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer w-full',
    isActive && 'text-foreground'
  );

export const Navigation: FC = () => {
  const i18n = useI18n();

  // @ts-expect-error
  const currentPathname: string = usePathname();
  const session = useSession();

  const data = useMemo(() => {
    if (session.status !== SessionStatusEnum.authenticated) {
      return [];
    }

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
  }, [i18n, session]);

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
