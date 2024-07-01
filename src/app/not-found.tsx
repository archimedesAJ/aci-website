import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeIcon } from '@radix-ui/react-icons';

import {
  openGraphImages,
  openGraphLocale,
  openGraphName,
  openGraphType,
  twitterCard,
  twitterCreator,
  twitterImages,
} from '@/lib/shared-metadata';
import { Button } from '@/components/ui/button';

const title = 'Page Not Found';
const description = 'Oops! The page you are looking for cannot be found.';

export const metadata: Metadata = {
  openGraph: {
    ...openGraphName,
    ...openGraphImages,
    ...openGraphLocale,
    ...openGraphType,
    title,
    description,
  },
  twitter: {
    ...twitterCard,
    ...twitterCreator,
    ...twitterImages,
    title,
    description,
  },
};

export default function NotFound() {
  return (
    <main className="container grid min-h-dvh place-content-center place-items-center gap-4 py-4 md:gap-8 md:py-8">
      <div className="grid place-items-center gap-2">
        <h2 className="text-balance">Oops! Page not found</h2>
      </div>
      <Button asChild size={'lg'}>
        <Link href="/">
          <HomeIcon className="size-4" />
          <span>GO HOME</span>
        </Link>
      </Button>
    </main>
  );
}
