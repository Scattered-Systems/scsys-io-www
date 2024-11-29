/*
  Appellation: scroll-indicator <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority'; 
import { HTMLMotionProps, motion, useScroll, } from 'motion/react';
import { cn } from '@/utils/cn';

const indicatorVariants = cva('block min-h-2 w-full sticky z-50', {
  defaultVariants: {
    flavor: 'default',
    position: 'bottom',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: '',
      foreground: 'bg-foreground text-foreground border-foreground',
      accent: 'bg-accent text-accent-foreground border-accent',
      primary: 'bg-primary text-primary-foreground border-primary',
      secondary: 'bg-secondary text-secondary-foreground border-secondary',
      destructive: 'bg-destructive text-destructive-foreground border-destructive',
      amber: 'bg-amber-500 text-amber-50 border-amber-500',
      blue: 'bg-blue-500 text-blue-50 border-blue-500',
      green: 'bg-green-500 text-green-50 border-green-500',
      red: 'bg-red-500 text-red-50 border-red-500',
      yellow: 'bg-yellow-500 text-yellow-50 border-yellow-500',
    },
    position: {
      top: 'top-0',
      bottom: 'bottom-0',
    },
    variant: {
      default: '',
    },
  }
})

export const ScrollIndicator: React.FC<HTMLMotionProps<'div'> & VariantProps<typeof indicatorVariants>> = ({
  className,
  flavor,
  position,
  variant,
  ...props
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(indicatorVariants({ flavor, position, variant }), className)}
      style={{ scaleX: scrollYProgress }}
      {...props}
    />
  );
};
ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;