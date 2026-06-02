/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - about.tsx
 */
// imports
// project
import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { ScsysLogo } from '@/components/site/logo';

export const About = () => (
  <Section id="about" className="border-t border-border bg-card/30">
    <div className="grid gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-5">
        <SectionHeader
          index="04"
          eyebrow="About"
          title={
            <>
              Systems shouldn&apos;t feel{' '}
              <span className="italic text-primary">scattered.</span>
            </>
          }
        />
        <Reveal delay={0.1}>
          <div className="relative mt-12 hidden aspect-square w-full max-w-xs items-center justify-center rounded-2xl border border-border bg-background/40 md:flex">
            <div className="glow-radial absolute inset-0 opacity-50" />
            <ScsysLogo
              aria-hidden
              className="relative size-28 animate-drift border-0"
            />
            <span className="label-mono absolute bottom-4 left-4 text-muted-foreground">
              {SITE.short} · {SITE.author.alias}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="md:col-span-7">
        <div className="space-y-6">
          {SITE.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {SITE.facts.map((fact) => (
              <div key={fact.label} className="bg-card p-5">
                <dt className="label-mono text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </Section>
);
About.displayName = 'About';

export default About;
