/**
 * Created At: 2025.08.17:01:22:19
 * @author - @FL03
 * @directory - src/app/(public)/not-found
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = { title: 'Not Found' };

export default function Page() {
  return (
    <article className="text-center">
      <p className="label-mono text-primary">Error 404</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-6xl">
        Off the lattice.
      </h1>
      <p className="mt-5 text-muted-foreground">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </article>
  );
}
Page.displayName = 'NotFoundRoute';
