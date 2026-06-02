/**
 * Created At: 2025.08.17:15:46:07
 * @author - @FL03
 * @directory - src/app/(public)/blog
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Notes on topology, harmonic orchestration, and building Eryon — coming soon.',
};

export default function Page() {
  return (
    <article className="relative">
      <div aria-hidden className="glow-radial absolute inset-0 -z-10 opacity-40" />
      <p className="label-mono text-primary">[ Journal ]</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-balance sm:text-6xl">
        The journal is warming up.
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
        Field notes on topology, harmonic orchestration, and the engineering
        behind Eryon and the portal. Nothing published yet — the first entries
        are being composed.
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
Page.displayName = 'JournalPage';
