import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { RouterParamsT } from '@/lib/router';
import { i18nConfig } from '@/lib/i18n/config';
import { importI18nDict } from '@/lib/i18n/server';
import { I18nProvider } from '@/lib/i18n/client';
import { StoreProvider } from '@/lib/store/provider';
import { QueryParamsProvider } from '@/lib/query/provider';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18nConfig.locales;
}

export const metadata: Metadata = {};

type RootLayoutPropsT = {
  params: RouterParamsT;
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutPropsT>) {
  const i18nDict = await importI18nDict(params.locale);

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <I18nProvider i18nDict={i18nDict}>
          <StoreProvider>
            <QueryParamsProvider>
              <Header />
              <main className="hidden flex-col md:flex">{children}</main>
            </QueryParamsProvider>
          </StoreProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
