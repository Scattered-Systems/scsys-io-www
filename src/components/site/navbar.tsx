/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - navbar.tsx
 */
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
// project
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';
import { ctaPrimary } from '@/components/site/cta';
import { ScsysLogo } from '@/components/site/logo';
import { ThemeToggle } from '@/components/site/theme-toggle';

const MENU_ID = 'site-mobile-menu';
const HASH_IDS = SITE.nav
  .filter((n) => n.href.startsWith('#'))
  .map((n) => n.href.slice(1));

/** Fixed, scroll-aware navigation with an IntersectionObserver scrollspy. */
export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus(); // return focus to the trigger
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const els = HASH_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          scrolled
            ? 'border-b border-border bg-background/70 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            aria-label={`${SITE.title} — home`}
            className="group flex items-center gap-2.5"
          >
            <ScsysLogo
              aria-hidden
              className="size-7 transition-transform duration-700 ease-out group-hover:rotate-[120deg]"
            />
            <span className="font-display text-lg tracking-tight">
              {SITE.name}
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {SITE.nav.map((link) => {
              const isActive =
                link.href.startsWith('#') && active === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'label-mono relative rounded-md px-3 py-2 transition-colors hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                  {link.soon && (
                    <>
                      <sup aria-hidden className="ml-0.5 text-primary">
                        ◦
                      </sup>
                      <span className="sr-only"> (coming soon)</span>
                    </>
                  )}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={SITE.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(ctaPrimary, 'hidden px-4 py-2 lg:inline-flex')}
            >
              Launch
              <ArrowUpRight className="size-4" />
            </a>
            <ThemeToggle />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={MENU_ID}
              className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && <MobileMenu active={active} onClose={close} />}
      </AnimatePresence>
    </>
  );
};
Navbar.displayName = 'Navbar';

const MobileMenu: React.FC<{ active: string; onClose: () => void }> = ({
  active,
  onClose,
}) => {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  // focus the close button on open; trap Tab; Escape closes
  React.useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const root = dialogRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <m.div
      ref={dialogRef}
      id={MENU_ID}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex flex-col bg-background/97 backdrop-blur-xl md:hidden"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <span className="font-display text-lg">{SITE.name}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid size-9 place-items-center rounded-md text-muted-foreground hover:text-foreground"
        >
          <X className="size-5" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-24">
        {SITE.nav.map((link, i) => {
          const isActive =
            link.href.startsWith('#') && active === link.href.slice(1);
          return (
            <m.div
              key={link.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 + i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-baseline justify-between border-b border-border py-4"
              >
                <span
                  className={cn(
                    'font-display text-3xl font-light tracking-tight',
                    isActive && 'text-primary',
                  )}
                >
                  {link.label}
                </span>
                <span className="label-mono text-muted-foreground">
                  0{i + 1}
                  {link.soon && (
                    <>
                      <sup aria-hidden className="ml-1 text-primary">
                        soon
                      </sup>
                      <span className="sr-only"> (coming soon)</span>
                    </>
                  )}
                </span>
              </Link>
            </m.div>
          );
        })}
        <m.a
          href={SITE.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.06 + SITE.nav.length * 0.05 }}
          className={cn(ctaPrimary, 'mt-8 w-fit')}
        >
          Launch the portal
          <ArrowUpRight className="size-4" />
        </m.a>
      </nav>
    </m.div>
  );
};
MobileMenu.displayName = 'MobileMenu';

export default Navbar;
