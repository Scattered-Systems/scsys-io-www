/**
 * Created At: 2025.08.17:01:22:19
 * @author - @FL03
 * @directory - src/app/(public)/not-found
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import Link from 'next/link';
import { ctaSecondary } from '@/components/site/cta';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = { title: 'Not Found' };

export default function Page() {
  return (
    <article className='text-center'>
      <h1 className='site-heading'>Page not found.</h1>
      <p className='label-mono mt-4 text-muted-foreground'>Error 404</p>
      <p className='mt-5 text-muted-foreground'>
        Could not find the requested resource.
      </p>
      <Link href='/' className={`${ctaSecondary} mt-10`}>
        <ArrowLeft aria-hidden className='size-4' />
        Back home
      </Link>
    </article>
  );
}
Page.displayName = 'NotFoundRoute';
