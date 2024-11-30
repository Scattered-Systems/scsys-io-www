/*
  Appellation: footer <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

// FooterVariant
const footerVariant = cva('flex px-4 py-2', {
  defaultVariants: {
    flavor: 'default',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: 'bg-background text-foreground border-background',
      accent: 'bg-accent text-accent-foreground border-accent',
      card: 'bg-card text-card-foreground border-card',
      primary: 'bg-primary text-primary-foreground border-primary',
      secondary: 'bg-secondary text-secondary-foreground border-secondary',
    },
    variant: {
      default: 'rounded shadow-inner drop-shadow',
      card: 'rounded-xl shadow-inner drop-shadow',
      hero: 'rounded-none shadow-none drop-shadow-none',
    },
  }
});

// FooterProps
type FooterProps = {};

// Footer
export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariant> & FooterProps
>(({ className, flavor, variant, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(footerVariant({ flavor, variant }), className)}
      {...props}
    />
  );
});
Footer.displayName = 'Footer';

// FooterContent
export const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('w-full', className)}
      {...props}
    />
  );
});
FooterContent.displayName = 'FooterContent';

// FooterLeading
export const FooterLeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mr-auto my-auto w-fit max-w-sm', className)}
      {...props}
    />
  );
});
FooterLeading.displayName = 'FooterLeading';

// FooterTrailing
export const FooterTrailing = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'ml-auto my-auto w-fit max-w-sm',
        className
      )}
      {...props}
    />
  );
});
FooterTrailing.displayName = 'FooterTrailing';