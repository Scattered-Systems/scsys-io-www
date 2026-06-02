/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - sitemap.ts
 */
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
