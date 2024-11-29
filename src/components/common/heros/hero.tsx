/*
  Appellation: hero <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const heroVariants = cva(
  'flex flex-col items-center justify-center w-full h-full',
  {
    variants: {
      flavor: {
        default: 'bg-primary-foreground text-foreground',
        accent: 'bg-accent text-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      flavor: 'default',
      variant: 'default',
    },
  }
);

export const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof heroVariants>
>(({ className, flavor, variant, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(heroVariants({ flavor, variant }), className)}
      {...props}
    />
  );
});
Hero.displayName = 'Hero';
