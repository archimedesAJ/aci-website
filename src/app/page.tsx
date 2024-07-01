import type { Metadata } from 'next';

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
import ThemeSwitcher from '@/components/common/theme-switcher';

const title = siteConfig.name;
const description = siteConfig.description;
const url = '/';

export const metadata: Metadata = {
  openGraph: {
    ...openGraphName,
    ...openGraphImages,
    ...openGraphLocale,
    ...openGraphType,
    title,
    description,
    url,
  },
  twitter: {
    ...twitterCard,
    ...twitterCreator,
    ...twitterImages,
    title,
    description,
  },
};

export default function Page() {
  return <ThemeSwitcher />;
}
