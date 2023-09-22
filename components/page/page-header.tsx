export const PageHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex items-start justify-between mt-1">
      {children}
    </header>
  );
};
