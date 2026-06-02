/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/hero
 * @file - field.tsx
 *
 * Client boundary for the hero WebGL scene. `next/dynamic` + `ssr:false` keeps
 * `three` out of the server bundle and the initial client payload; the scene
 * chunk only loads after first paint. CSS glows render underneath as the
 * progressive-enhancement fallback (the whole field is decorative, so it's
 * `aria-hidden`).
 */
'use client';
// imports
import * as React from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
// project
import { cn } from '@/lib/utils';

const Scene = dynamic(() => import('./scene'), {
  ssr: false,
  loading: () => null,
});

export const LatticeField: React.FC<{ className?: string }> = ({
  className,
}) => {
  const reduce = useReducedMotion();
  const { resolvedTheme } = useTheme();

  // `Scene` is `ssr:false`, so it only renders on the client (after first
  // paint) — no mounted-gate needed, and no hydration mismatch from the theme.
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      {/* atmosphere — always present, even if WebGL never loads */}
      <div className="glow-radial absolute inset-0 opacity-80" />
      <div className="glow-violet absolute inset-0 translate-x-1/4 opacity-70" />
      <Scene dark={resolvedTheme !== 'light'} reducedMotion={!!reduce} />
    </div>
  );
};
LatticeField.displayName = 'LatticeField';

export default LatticeField;
