import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import {
  openGraphImages,
  openGraphLocale,
  openGraphName,
  openGraphType,
  twitterCard,
  twitterCreator,
  twitterImages,
} from '@/lib/shared-metadata';
import { cn } from '@/lib/utils';

import { fontSans } from './fonts';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.URL),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'Tailwind', 'Shadcn', 'Template'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.URL,
    },
  ],
  openGraph: {
    ...openGraphName,
    ...openGraphImages,
    ...openGraphLocale,
    ...openGraphType,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    ...twitterCard,
    ...twitterCreator,
    ...twitterImages,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
