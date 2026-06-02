/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - footer.tsx
 */
// imports
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
// project
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';
import { ScsysLogo } from '@/components/site/logo';

const YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className="relative border-t border-border">
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label={`${SITE.title} — home`}
            className="flex items-center gap-2.5"
          >
            <ScsysLogo aria-hidden className="size-7" />
            <span className="font-display text-lg tracking-tight">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 font-display text-2xl font-light leading-snug tracking-tight text-balance">
            {SITE.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterColumn label="Index">
            {SITE.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                {link.soon && (
                  <>
                    <span aria-hidden className="text-primary">
                      {' '}
                      ◦
                    </span>
                    <span className="sr-only"> (coming soon)</span>
                  </>
                )}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn label="Elsewhere">
            {SITE.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
                {social.href.startsWith('http') && (
                  <span className="sr-only"> (opens in new tab)</span>
                )}
                <ArrowUpRight
                  aria-hidden
                  className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            ))}
          </FooterColumn>

          <FooterColumn label="Contact" className="col-span-2 sm:col-span-1">
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {SITE.email}
            </a>
            <span className="text-sm text-muted-foreground">
              {SITE.author.company}
            </span>
          </FooterColumn>
        </div>
      </div>

      {/* oversized wordmark band */}
      <div
        aria-hidden
        className="mask-fade-x pointer-events-none mt-14 select-none overflow-hidden"
      >
        <span className="block font-display text-[16vw] font-light leading-none tracking-tighter text-foreground/[0.04]">
          {SITE.name}
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono text-muted-foreground">
          © {YEAR} {SITE.author.company}
        </p>
        <p className="label-mono text-muted-foreground/70">
          Next.js · React · Three.js · Eryon
        </p>
      </div>
    </div>
  </footer>
);
Footer.displayName = 'Footer';

const FooterColumn: React.FC<
  React.PropsWithChildren<{ label: string; className?: string }>
> = ({ label, className, children }) => (
  <div className={cn('flex flex-col gap-3', className)}>
    <h2 className="label-mono text-foreground/50">{label}</h2>
    {children}
  </div>
);
FooterColumn.displayName = 'FooterColumn';

export default Footer;
