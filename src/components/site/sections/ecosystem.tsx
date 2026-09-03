/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - ecosystem.tsx
 */
// imports
// project
import { cn } from '@/lib/utils';
import { SITE, type EcosystemProject } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';

// cyan stays the only saturated signal (reserved for what's being built);
// other states differentiate by weight/treatment rather than new hues
const STATUS: Record<
  EcosystemProject['status'],
  { label: string; className: string }
> = {
  building: { label: 'Building', className: 'border-primary/30 text-primary' },
  design: { label: 'In design', className: 'border-border text-foreground/70' },
  planned: {
    label: 'Planned',
    className: 'border-dashed border-border text-muted-foreground',
  },
};

export const Ecosystem = () => (
  <Section id="ecosystem">
    <SectionHeader
      index="03"
      eyebrow={SITE.ecosystem.eyebrow}
      title={
        <>
          A substrate, and what it makes{' '}
          <span className="italic text-primary">possible.</span>
        </>
      }
      description={SITE.ecosystem.lede}
    />

    <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {SITE.ecosystem.projects.map((project, i) => {
        const status = STATUS[project.status];
        return (
          <Reveal key={project.name} delay={i * 0.04}>
            <div className="flex h-full flex-col gap-3 bg-card p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-light tracking-tight">
                  {project.name}
                </h3>
                <span
                  className={cn(
                    'label-mono shrink-0 rounded-full border px-2 py-0.5',
                    status.className,
                  )}
                >
                  {status.label}
                </span>
              </div>
              <span className="label-mono text-primary">{project.tagline}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>

    {/* infinite, pause-on-hover marquee — CSS only */}
    <div className="mask-fade-x relative mt-12 overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {[...SITE.ecosystem.principles, ...SITE.ecosystem.principles].map(
          (principle, i) => (
            <span
              key={`${principle}-${i}`}
              className="flex items-center gap-8 font-display text-2xl font-light text-muted-foreground/50"
            >
              {principle}
              <span className="size-1.5 rounded-full bg-primary/40" />
            </span>
          ),
        )}
      </div>
    </div>
  </Section>
);
Ecosystem.displayName = 'Ecosystem';

export default Ecosystem;
