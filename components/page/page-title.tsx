import { cn } from '@/lib/utils';

type PageTitlePropsT = {
  className?: string;
};

export const PageTitle: FC<PropsWithChildren<PageTitlePropsT>> = ({
  children,
  className,
}) => {
  return (
    <h2 className={cn('text-3xl font-bold tracking-tight', className)}>
      {children}
    </h2>
  );
};
