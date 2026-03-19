// import createMiddleware from 'next-intl/middleware';
// // import { routing } from './src/i18n/config';

// export default createMiddleware({
//   locales,
//   localeDetection: false,
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ar|en)/:path*'],
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const middleware = createMiddleware({
  ...routing, 
  localePrefix: 'never', // Hides local from URLs
});

export default middleware;

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
