'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/lib/config';
import { ScsysLogo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { ctaPrimary } from './cta';

const MENU_ID = 'site-mobile-menu';
const HASH_IDS = SITE.nav
  .filter((link) => link.href.startsWith('/#'))
  .map((link) => link.href.slice(2));

export const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const close = () => dialogRef.current?.close();

  React.useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px' },
    );
    HASH_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus();
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (desktop.matches) dialog.close();
    };
    desktop.addEventListener('change', onResize);
    return () => {
      desktop.removeEventListener('change', onResize);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [open]);

  const current = (href: string) =>
    href.startsWith('/#')
      ? pathname === '/' && active === href.slice(2)
      : pathname === href;

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background'>
        <nav
          aria-label='Main navigation'
          className='site-container flex min-h-20 items-center justify-between gap-4'
        >
          <Link
            href='/'
            aria-label={`${SITE.name} — home`}
            className='inline-flex min-h-11 items-center'
          >
            <ScsysLogo aria-hidden='true' />
          </Link>
          <div className='hidden items-center lg:flex'>
            {SITE.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  current(link.href)
                    ? link.href.startsWith('/#')
                      ? 'location'
                      : 'page'
                    : undefined
                }
                className='site-nav-link'
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <a
              href={SITE.cta.href}
              className={`${ctaPrimary} hidden lg:inline-flex`}
            >
              {SITE.cta.label}
            </a>
            <ThemeToggle />
            <button
              ref={triggerRef}
              type='button'
              onClick={() => setOpen(true)}
              aria-label='Open menu'
              aria-haspopup='dialog'
              aria-expanded={open}
              aria-controls={MENU_ID}
              className='site-icon-button lg:hidden'
            >
              <Menu aria-hidden className='size-5' />
            </button>
          </div>
        </nav>
      </header>
      {/* Native modal provides inert background, Tab containment and Escape. */}
      <dialog
        ref={dialogRef}
        id={MENU_ID}
        aria-label='Site menu'
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        className='fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-background p-0 text-foreground backdrop:bg-background'
      >
        <div className='site-container flex h-20 items-center justify-between border-b border-border'>
          <ScsysLogo />
          <button
            ref={closeRef}
            type='button'
            onClick={close}
            aria-label='Close menu'
            className='site-icon-button'
          >
            <X aria-hidden className='size-5' />
          </button>
        </div>
        <nav
          aria-label='Mobile navigation'
          className='site-container flex flex-col py-8'
        >
          {SITE.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={
                current(link.href)
                  ? link.href.startsWith('/#')
                    ? 'location'
                    : 'page'
                  : undefined
              }
              className='border-b border-border py-5 text-2xl hover:underline'
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.cta.href}
            onClick={close}
            className={`${ctaPrimary} mt-8 self-start`}
          >
            {SITE.cta.label}
          </a>
        </nav>
      </dialog>
    </>
  );
};
export default Navbar;
