/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - portal.tsx
 */
// imports
import * as React from 'react';
import {
  Activity,
  ArrowUpRight,
  AudioLines,
  Boxes,
  Layers,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
// project
import { cn } from '@/lib/utils';
import { SITE, type Feature } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { ctaPrimary } from '@/components/site/cta';

const ICONS: Record<string, LucideIcon> = {
  Activity,
  AudioLines,
  Boxes,
  Layers,
  ShieldCheck,
  Workflow,
};

export const Portal = () => (
  <Section id="portal" className="border-t border-border">
    <SectionHeader
      index="01"
      eyebrow={SITE.portal.eyebrow}
      title={
        <>
          Your cloud, <span className="italic text-primary">composed.</span>
        </>
      }
      description={SITE.portal.lede}
    />

    <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {SITE.portal.features.map((feature, i) => (
        <Reveal key={feature.index} delay={i * 0.04}>
          <FeatureCard feature={feature} />
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.1} className="mt-12">
      <a
        href={SITE.portal.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(ctaPrimary, 'group px-7 py-3.5')}
      >
        {SITE.portal.cta.label}
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </Reveal>
  </Section>
);
Portal.displayName = 'Portal';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = ICONS[feature.icon] ?? Boxes;
  return (
    <div className="group flex h-full flex-col gap-5 bg-card p-6 transition-colors hover:bg-card/60">
      <div className="flex items-center justify-between">
        <Icon
          aria-hidden
          className="size-5 text-primary transition-transform duration-300 group-hover:scale-110"
        />
        <span className="label-mono text-muted-foreground/50">
          {feature.index}
        </span>
      </div>
      <div>
        <h3 className="font-display text-xl font-light tracking-tight">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
FeatureCard.displayName = 'FeatureCard';

export default Portal;
