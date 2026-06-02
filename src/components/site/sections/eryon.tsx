/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - eryon.tsx
 */
// imports
// project
import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';

export const Eryon = () => (
  <Section
    id="eryon"
    className="relative overflow-hidden border-t border-border bg-card/30"
  >
    {/* harmonic violet wash, offset to the right edge */}
    <div
      aria-hidden
      className="glow-violet pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-60"
    />

    <div className="relative z-10 grid gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-5">
        <SectionHeader
          index="02"
          eyebrow={SITE.eryon.eyebrow}
          title={
            <>
              A substrate that thinks in{' '}
              <span className="italic text-brand-violet">chords.</span>
            </>
          }
          description={SITE.eryon.lede}
        />

        {/* a quiet tie-in to the lattice in the hero */}
        <Reveal delay={0.16}>
          <div className="mt-10 rounded-2xl border border-brand-violet/25 bg-background/40 p-6">
            <span className="label-mono text-brand-violet">
              The lattice, explained
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The mesh in the hero is a generalized Tonnetz — pitch-class
              vertices, triangular triads, wrapped on a torus. Each lit triangle
              is a cluster state; every flip across an edge is a P · L · R
              transformation, the cheapest possible move to the next chord.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="md:col-span-7">
        <div className="space-y-6">
          {SITE.eryon.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {SITE.eryon.principles.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 bg-card p-6">
                <span className="font-display text-2xl font-light text-brand-violet">
                  {principle.index}
                </span>
                <h3 className="font-display text-lg font-light tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
Eryon.displayName = 'Eryon';

export default Eryon;
