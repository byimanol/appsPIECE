import createMiddleware from 'next-intl/middleware';



export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  localePrefix: 'never',
  localeDetection: false,
  defaultLocale: 'en',
  domains: [
    {
      domain: 'appspiece.com',
      defaultLocale: 'en',
      locales: ['en'],
    },
    {
      domain: 'es.appspiece.com',
      defaultLocale: 'es',
      locales: ['es'],
    },
  ],
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
  matcher: [
    '/((?!api|_next/static|_next/image|robots.txt|ads.txt|favicon-32x32.png|apple-touch-icon.png|favicon-16x16.png|safari-pinned-tab.svg|site.webmanifest|images/books|icons|manifest).*)'
  ]
};

