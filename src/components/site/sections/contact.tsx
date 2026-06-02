/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site/sections
 * @file - contact.tsx
 */
// imports
import { ArrowUpRight } from 'lucide-react';
// project
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';
import { Section } from '@/components/site/section';
import { Reveal } from '@/components/site/reveal';
import { ctaPrimary, ctaSecondary } from '@/components/site/cta';

export const Contact = () => (
  <Section
    id="contact"
    className="grain relative overflow-hidden border-t border-border"
  >
    <div
      aria-hidden
      className="glow-radial pointer-events-none absolute inset-0 opacity-60"
    />

    <div className="relative z-10 flex flex-col items-start gap-10">
      <Reveal className="label-mono flex items-center gap-3 text-primary">
        <span>[ 05 ]</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-muted-foreground">Contact</span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.98] tracking-tight text-balance">
          Build your cloud with{' '}
          <span className="italic text-primary">us.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
          Eryon and Proton are early. If you want a personal cloud that scales
          from one device up — or you build serious distributed systems — let’s
          talk.
        </p>
      </Reveal>

      <Reveal
        delay={0.18}
        className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
      >
        <a
          href={SITE.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(ctaPrimary, 'group gap-3 px-7 py-3.5')}
        >
          Request early access
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        <a href={`mailto:${SITE.email}`} className={ctaSecondary}>
          {SITE.email}
        </a>
      </Reveal>

      <Reveal
        delay={0.24}
        className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4"
      >
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
            {social.href.startsWith('http') && (
              <span className="sr-only"> (opens in new tab)</span>
            )}
          </a>
        ))}
      </Reveal>
    </div>
  </Section>
);
Contact.displayName = 'Contact';

export default Contact;
