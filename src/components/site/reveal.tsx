/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - reveal.tsx
 */
'use client';
// imports
import * as React from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';
// project
import { cn } from '@/lib/utils';

export type RevealProps = React.PropsWithChildren<{
  className?: string;
  /** Stagger offset, in seconds. */
  delay?: number;
  /** Travel distance on the y-axis before settling, in px. */
  y?: number;
  /** Replay every time it enters the viewport instead of only once. */
  repeat?: boolean;
}>;

/**
 * Scroll-triggered reveal. Drives `m.div` from an `useInView` boolean rather
 * than `whileInView` so it works under the `domAnimation` feature bundle, and
 * collapses to a no-op (content visible, no transform) under reduced motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 18,
  repeat = false,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: !repeat, margin: '0px 0px -12% 0px' });
  const reduce = useReducedMotion();

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
};
Reveal.displayName = 'Reveal';

export default Reveal;
