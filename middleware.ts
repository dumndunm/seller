import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { i18nConfig } from '@/lib/i18n/config';

const createRedirectURL = (paths: Array<string>, search: string): string => {
  return ['/']
    .concat(
      paths
        .map((path) => {
          return path.replace(/^\//, '');
        })
        .join('/')
    )
    .concat(search)
    .join('');
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const lang = request.headers.get('accept-language') ?? undefined;

    const langMatcher = new Negotiator({
      headers: {
        'accept-language': lang,
      },
    });

    const languages = langMatcher.languages(i18nConfig.locales);

    const locale = match(
      languages,
      i18nConfig.locales,
      i18nConfig.defaultLocale
    );

    const origin = request.nextUrl.origin;
    const search = request.nextUrl.search;

    return NextResponse.redirect(
      new URL(createRedirectURL([locale, pathname], search), origin)
    );
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
