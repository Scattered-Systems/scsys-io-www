/*
  Appellation: scroll-indicator <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion, useScroll } from 'motion/react';
import { cn } from '@/utils/cn';

const indicatorVariants = cva('block min-h-2 w-full z-50', {
  defaultVariants: {
    flavor: 'default',
    position: 'fixedBottom',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: '',
      foreground: 'bg-foreground',
      accent: 'bg-accent',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      destructive: 'bg-destructive',
      amber: 'bg-amber-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
    },
    position: {
      fixedBottom: 'fixed bottom-0',
      fixedTop: 'fixed top-0',
    },
    variant: {
      default: '',
    },
  },
});

export const ScrollsIndicator: React.FC<
  HTMLMotionProps<'div'> & VariantProps<typeof indicatorVariants>
> = ({ className, flavor, position, variant, ...props }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        indicatorVariants({ flavor, position, variant }),
        className
      )}
      style={{ originX: 0, scaleX: scrollYProgress }}
      {...props}
    />
  );
};
export const ScrollIndicator = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & VariantProps<typeof indicatorVariants>
>(({ className, flavor, position, variant, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        indicatorVariants({ flavor, position, variant }),
        className
      )}
      style={{ originX: 0, scaleX: scrollYProgress }}
      {...props}
    />
  );
});
ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
