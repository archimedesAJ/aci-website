import { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // add your pages routes ['', '/about', '/etc']
  const routes = [''].map((route) => ({
    url: `${siteConfig.URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
