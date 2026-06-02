/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - scroll-progress.tsx
 */
'use client';
// imports
import { m, useScroll, useSpring } from 'motion/react';

/** A hairline cyan bar pinned to the top edge, tracking page scroll. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-primary shadow-[0_0_12px_var(--brand-glow)]"
    />
  );
};
ScrollProgress.displayName = 'ScrollProgress';

export default ScrollProgress;
