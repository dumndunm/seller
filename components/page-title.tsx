import { cn } from '@/lib/utils';

export function PageTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn('text-3xl font-bold tracking-tight', className)}>
      {children}
    </h2>
  );
}
