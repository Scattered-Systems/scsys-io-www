/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/hero
 * @file - index.tsx
 */
// imports
import { ArrowDown, ArrowUpRight } from 'lucide-react';
// project
import { SITE } from '@/lib/config';
import { Reveal } from '@/components/site/reveal';
import { LatticeField } from '@/components/site/hero/field';
import { ctaPrimary, ctaSecondary } from '@/components/site/cta';

export const Hero = () => (
  <section
    id="top"
    className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
  >
    <LatticeField />
    {/* faint engineering grid, faded toward the edges */}
    <div
      aria-hidden
      className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_70%_at_50%_45%,black,transparent)]"
    />

    <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16">
      <Reveal className="label-mono flex items-center gap-3 text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" />
        {SITE.author.company}
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.75rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight text-balance">
          Your own cloud,{' '}
          <span className="italic text-primary">at any scale.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {SITE.intro}
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={SITE.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaPrimary}
        >
          Request early access
          <ArrowUpRight aria-hidden className="size-4" />
        </a>
        <a href="#eryon" className={ctaSecondary}>
          Explore Eryon
          <ArrowDown
            aria-hidden
            className="size-4 transition-transform group-hover:translate-y-0.5"
          />
        </a>
      </Reveal>

      <Reveal
        delay={0.32}
        className="label-mono mt-12 flex items-center gap-3 text-muted-foreground"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        Eryon substrate · in development
      </Reveal>
    </div>

    {/* scroll cue */}
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-full max-w-6xl items-center gap-3 px-6"
    >
      <span className="label-mono text-muted-foreground/70">Scroll</span>
      <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>
  </section>
);
Hero.displayName = 'Hero';

export default Hero;
