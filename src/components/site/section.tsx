/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - section.tsx
 */
// imports
import * as React from 'react';
// project
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

/** A numbered, mono-eyebrow + serif-title block that opens a section. */
export const SectionHeader: React.FC<{
  index?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}> = ({ index, eyebrow, title, description, className }) => (
  <header className={cn('flex flex-col gap-5', className)}>
    {(index || eyebrow) && (
      <Reveal className="label-mono flex items-center gap-3 text-primary">
        {index && <span>[ {index} ]</span>}
        <span className="h-px w-8 bg-border" />
        {eyebrow && <span className="text-muted-foreground">{eyebrow}</span>}
      </Reveal>
    )}
    {title && (
      <Reveal delay={0.06}>
        <h2 className="font-display text-4xl font-light tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
    )}
    {description && (
      <Reveal delay={0.12}>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      </Reveal>
    )}
  </header>
);
SectionHeader.displayName = 'SectionHeader';

/** Semantic section shell with consistent rhythm and scroll offset. */
export const Section: React.FC<
  React.PropsWithChildren<{
    id?: string;
    className?: string;
    containerClassName?: string;
  }>
> = ({ id, className, containerClassName, children }) => (
  <section
    id={id}
    className={cn('relative scroll-mt-20 py-24 sm:py-32', className)}
  >
    <div className={cn('mx-auto w-full max-w-6xl px-6', containerClassName)}>
      {children}
    </div>
  </section>
);
Section.displayName = 'Section';

export default Section;
