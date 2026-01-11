import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Script from 'next/script';

import CookiebotListener from '../components/CookiebotListener';
import siteUrl from '~/utils/siteUrl';
import "~/public/main-assets/css/fonts.css";
const defaultTitle = 'Task-in Marine | Marine Survey & Engineering';
const defaultDescription =
  'Task-in Marine provides marine engineering, vessel surveys, cargo expertise, and compliance audits for shipowners and operators. Reliable, Class-ready solutions worldwide.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Task-in Marine',
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: 'Task-in Marine',
    images: [
      {
        url: `${siteUrl}/main-assets/img/logo-white.svg`,
        width: 600,
        height: 315,
        alt: 'Task-in Marine - Marine Survey & Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/main-assets/img/logo-white.svg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/main-assets/image/favicon.svg" />
        <style dangerouslySetInnerHTML={{
          __html: `#CookiebotWidget, .CookiebotWidget { display: none !important; }`
        }} />
      </head>
      <body>
        <CookiebotListener />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="2fdaf1eb-b7fc-43d9-a068-51cd2275d45e"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="afterInteractive"
        />
                  {children}
                </body>
              </html>
              );
}
