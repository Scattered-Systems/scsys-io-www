/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - not-found.tsx
 */
// imports
import Link from 'next/link';
import { ctaSecondary } from '@/components/site/cta';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center'>
      <div className='relative z-10 flex flex-col items-center'>
        <h1 className='site-heading'>Page not found.</h1>
        <p className='label-mono mt-4 text-muted-foreground'>Error 404</p>
        <p className='mt-5 max-w-sm leading-relaxed text-muted-foreground'>
          We couldn&apos;t find the page you requested.
        </p>
        <Link href='/' className={`${ctaSecondary} mt-10`}>
          <ArrowLeft aria-hidden className='size-4' />
          Back home
        </Link>
      </div>
    </div>
  );
}
NotFound.displayName = 'NotFound';
