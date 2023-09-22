'use client';

import { useI18n } from '@/lib/i18n/provider';
import { useSession, signOut } from 'next-auth/react';
import { useCallback } from 'react';
import { SessionStatusEnum } from '@/entities/session/models';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { splitAndGetFirstLetters } from '@/entities/user/utils';

const generateHashByUserName = (userName: string) => {
  let hashStr = '';
  for (const char of userName) {
    hashStr += char.trim().toLowerCase();
  }
  return hashStr;
};

export const UserMenu: FC = () => {
  const i18n = useI18n();
  const session = useSession();

  const userName = session.data?.user?.name;
  const userEmail = session.data?.user?.email ?? i18n.common.unknownEmail;
  const userAvatarSrc =
    session.data?.user?.image ??
    (userName
      ? `https://avatar.vercel.sh/${generateHashByUserName(userName)}.png`
      : '');

  const handleSignIn = useCallback(() => {}, []);

  const handleSignOut = useCallback(() => {
    signOut({
      callbackUrl: '/',
    });
  }, []);

  if (session.status === SessionStatusEnum.unauthenticated) {
    return (
      <Button variant="ghost" onClick={handleSignIn}>
        {i18n.common.signIn}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userAvatarSrc} alt={i18n.common.userAvatar_alt} />
            <AvatarFallback>
              {userName ? splitAndGetFirstLetters(userName) : '?'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userName ?? i18n.common.unknownUser}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          {i18n.common.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
