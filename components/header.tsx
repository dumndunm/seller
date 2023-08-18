import { TeamSwitcher } from '@/components/team-switcher';
import { Navigation } from '@/components/navigation';
import { SearchInput } from '@/components/search-input';
import { UserMenu } from '@/components/user-menu';

export const Header: FC = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <div className="mx-6">
          <Navigation />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <SearchInput />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
