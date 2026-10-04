/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - error.tsx
 *
 * Root client error boundary — catches render/runtime errors in the route tree
 * and offers a recovery path.
 */
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
import { ctaPrimary, ctaSecondary } from '@/components/site/cta';
import { ArrowLeft, RotateCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset(): void;
}) {
  React.useEffect(() => {
    // surface to the browser console (and any attached reporter)
    console.error(error);
  }, [error]);

  return (
    <div className='relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center'>
      <div className='relative z-10 flex flex-col items-center'>
        <h1 className='site-heading'>Something went wrong.</h1>
        <p className='label-mono mt-4 text-destructive'>
          Error{error.digest ? ` · ${error.digest}` : ''}
        </p>
        <p className='mt-5 max-w-sm leading-relaxed text-muted-foreground'>
          An unexpected error interrupted this page. Try again, or head back
          home.
        </p>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          <button type='button' onClick={reset} className={ctaPrimary}>
            <RotateCw aria-hidden className='size-4' />
            Try again
          </button>
          <Link href='/' className={ctaSecondary}>
            <ArrowLeft aria-hidden className='size-4' />
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
GlobalError.displayName = 'GlobalError';
