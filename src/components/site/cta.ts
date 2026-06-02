/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - cta.ts
 *
 * Shared call-to-action recipes so every primary/secondary action across the
 * site speaks one shape + hover vocabulary (compose with `cn`).
 */

/** Solid cyan pill with a subtle lift on hover. */
export const ctaPrimary =
  'inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5';

/** Bordered pill that warms to the accent on hover (pairs with an arrow nudge). */
export const ctaSecondary =
  'group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary';
