import { cn } from '@/lib/utils';

type PageDescriptionPropsT = {
  className?: string;
};

export const PageDescription: FC<PropsWithChildren<PageDescriptionPropsT>> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn('text-lg text-muted-foreground block max-w-2xl', className)}
    >
      {children}
    </span>
  );
};
