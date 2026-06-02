/**
 * Created At: 2025.05.28:12:07:02
 * @author - @FL03
 * @directory - src/app/(public)/about
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: `${SITE.author.company} — ${SITE.tagline}`,
};

export default function Page() {
  return (
    <article>
      <p className="label-mono text-primary">[ About ]</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-balance sm:text-6xl">
        {SITE.author.company}
      </h1>

      <div className="mt-8 space-y-6">
        {SITE.about.map((paragraph, i) => (
          <p
            key={i}
            className="max-w-prose text-lg leading-relaxed text-foreground/90"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
        {SITE.facts.map((fact) => (
          <div key={fact.label} className="bg-card p-5">
            <dt className="label-mono text-muted-foreground">{fact.label}</dt>
            <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2">
        {SITE.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={
              social.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            className="label-mono text-muted-foreground transition-colors hover:text-foreground"
          >
            {social.label} — {social.handle}
          </a>
        ))}
      </div>
    </article>
  );
}
Page.displayName = 'AboutPage';
