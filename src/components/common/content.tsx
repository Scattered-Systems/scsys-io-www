/*
  Appellation: content <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const contentVariants = cva('flex flex-col flex-1 space-y-2 px-4 py-2', {
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

export const ContentSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof contentVariants>
>(({ className, flavor, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        contentVariants({ flavor, variant }),
        className
      )}
      {...props}
    />
  );
});
ContentSection.displayName = 'ContentSection';


export default ContentSection;