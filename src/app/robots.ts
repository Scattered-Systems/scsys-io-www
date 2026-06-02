/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - robots.ts
 */
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
