import Link from 'next/link';
import { SITE } from '@/lib/config';
import { ScsysLogo } from './logo';

export const Footer = () => (
  <footer className='border-t border-border bg-card'>
    <div className='site-container py-12'>
      <div className='grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]'>
        <div>
          <Link
            href='/'
            aria-label={`${SITE.name} — home`}
            className='inline-flex min-h-11 items-center'
          >
            <ScsysLogo aria-hidden='true' />
          </Link>
          <p className='mt-3 text-sm text-muted-foreground'>{SITE.name}</p>
          <p className='mt-5 max-w-xs text-lg'>{SITE.tagline}</p>
        </div>
        <nav
          aria-label='Footer navigation'
          className='flex flex-col items-start'
        >
          {SITE.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='inline-flex min-h-11 items-center text-sm text-muted-foreground hover:underline'
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav aria-label='Elsewhere' className='flex flex-col items-start'>
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
              className='inline-flex min-h-11 items-center text-sm text-muted-foreground hover:underline'
            >
              {social.label}
              {social.href.startsWith('http') && (
                <span className='sr-only'> (opens in new tab)</span>
              )}
            </a>
          ))}
        </nav>
      </div>
      <div className='mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
        <p>
          © {new Date().getFullYear()} {SITE.author.company}
        </p>
        <nav aria-label='Legal' className='flex gap-6'>
          <Link
            href='/privacy'
            className='inline-flex min-h-11 items-center hover:underline'
          >
            Privacy
          </Link>
          <Link
            href='/terms'
            className='inline-flex min-h-11 items-center hover:underline'
          >
            Terms
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);
export default Footer;
