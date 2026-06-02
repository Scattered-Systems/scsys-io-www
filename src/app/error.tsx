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
    <div className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="glow-radial absolute inset-0 opacity-40" />
      <div className="relative z-10 flex flex-col items-center">
        <p className="label-mono text-destructive">
          Error{error.digest ? ` · ${error.digest}` : ''}
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,9vw,6rem)] font-light leading-none tracking-tight">
          Something dissonant.
        </h1>
        <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
          An unexpected error interrupted the orchestration. Try again, or head
          back home.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <RotateCw className="size-4 transition-transform group-hover:rotate-90" />
            Try again
          </button>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
GlobalError.displayName = 'GlobalError';
