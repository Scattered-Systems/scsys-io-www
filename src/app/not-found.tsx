/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - not-found.tsx
 */
// imports
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="glow-radial absolute inset-0 opacity-50" />
      <div className="relative z-10 flex flex-col items-center">
        <p className="label-mono text-primary">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,8rem)] font-light leading-none tracking-tight">
          Off the lattice.
        </h1>
        <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
          This node doesn&apos;t exist — no edge leads here yet.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back home
        </Link>
      </div>
    </div>
  );
}
NotFound.displayName = 'NotFound';
