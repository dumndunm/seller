'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { urlFactory } from '@/lib/url-factory';
import { useI18n } from '@/lib/i18n/client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const createLinkCn = (isActive: boolean) =>
  cn(
    'text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer w-full',
    isActive && 'text-foreground'
  );

export const Navigation: FC = () => {
  const i18n = useI18n();

  const currentPathname = usePathname();

  const data = useMemo(() => {
    return [
      {
        href: urlFactory.overviewPage(),
        children: i18n.common.navigation_overviewTitle,
      },
      {
        href: urlFactory.reportsPage(),
        children: i18n.common.navigation_reportsTitle,
        items: [
          {
            href: urlFactory.transactionTotalsReportPage(),
            children: i18n.reports.reports_transactionTotals_title,
          },
        ],
      },
      {
        href: urlFactory.settingsPage(),
        children: i18n.common.navigation_settingsTitle,
      },
    ];
  }, [i18n]);

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {data.map(({ href, children, items }) =>
        !items ? (
          <Link
            key={href}
            href={href}
            className={createLinkCn(currentPathname.includes(href))}
          >
            {children}
          </Link>
        ) : (
          <DropdownMenu key={href}>
            <DropdownMenuTrigger asChild>
              <span className={createLinkCn(currentPathname.includes(href))}>
                {children}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
              <DropdownMenuGroup>
                {items.map(({ href, children }) => (
                  <DropdownMenuItem key={href}>
                    <Link
                      href={href}
                      className={createLinkCn(currentPathname.includes(href))}
                    >
                      {children}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      )}
    </nav>
  );
};
