/*
  Appellation: hero <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const heroVariants = cva(
  'w-full',
  {
    variants: {
      flavor: {
        default: 'bg-background text-foreground',
        accent: 'bg-accent text-foreground',
        primary: 'bg-primary text-primary-foreground',
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

// Hero
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

// HeaderContent
export const HeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  );
});
HeroContent.displayName = 'HeroContent';