'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type NavigationMenuLinkPropsT = {
  href: string;
  isActive: boolean;
};

export const NavigationMenuLink: FC<
  PropsWithChildren<NavigationMenuLinkPropsT>
> = ({ children, href, isActive }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors text-muted-foreground hover:text-primary',
        isActive && 'text-foreground'
      )}
    >
      {children}
    </Link>
  );
};
