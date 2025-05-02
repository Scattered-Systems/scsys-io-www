/*
  Appellation: header <module>
  Contrib: @FL03
*/

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headerVariants = cva(
  'w-full',
  {
    defaultVariants: {
      flavor: 'default',
      variant: 'default',
    },
    variants: {
      flavor: {
        default: 'bg-background text-foreground',
        accent: 'bg-accent text-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
      variant: {
        default: 'block min-h-screen',
      },
    },
  }
);

type HeaderProps = {};

// Header
export const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof headerVariants> &
    HeaderProps
>(({ className, flavor, variant, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(headerVariants({ flavor, variant }), className)}
      {...props}
    />
  );
});
Header.displayName = 'Header';


