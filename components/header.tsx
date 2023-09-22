import { Navigation } from '@/components/navigation';
import { UserMenu } from '@/components/user-menu';

export const Header: FC = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="mx-6">
          <Navigation />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
