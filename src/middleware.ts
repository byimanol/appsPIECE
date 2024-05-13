import createMiddleware from 'next-intl/middleware';



export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  localePrefix: 'never',
  localeDetection: false,
  defaultLocale: 'en',
  domains: [
    {
      domain: 'localhost',
      defaultLocale: 'en',
      locales: ['en'],
    },
    {
      domain: 'es.localhost',
      defaultLocale: 'es',
      locales: ['es'],
    },
  ],
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
  matcher: [
    '/((?!api|_next/static|_next/image|robots.txt|ads.txt|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  ]
};