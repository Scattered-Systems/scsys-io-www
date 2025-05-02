/**
 * Created At: 2025-04-04:16:00:40
 * @author - @FL03
 * @description - Scaffold Component
 * @file - scaffold.tsx
 */
'use client';
// imports
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
// project
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

// variants
const scaffoldVariants = cva('gap-2 relative w-full', {
  defaultVariants: {
    flavor: 'default',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: 'bg-background text-foreground',
      accent: 'bg-accent text-accent-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
    variant: {
      default: '',
      rounded: 'rounded',
    },
  },
});

type ScaffoldContext = {
  isMobile: boolean;
};

const ScaffoldContext = React.createContext<ScaffoldContext | null>(null);

export const useScaffold = () => {
  const ctx = React.useContext(ScaffoldContext);
  if (!ctx) {
    throw new Error('useScaffold must be used within a ScaffoldProvider');
  }
  return ctx;
};

type ScaffoldVariants = VariantProps<typeof scaffoldVariants>;

type ScaffoldProps = {
  asChild?: boolean;
} & ScaffoldVariants;

// ScaffoldProvider
export const ScaffoldProvider = React.forwardRef<
  HTMLDivElement,
  Readonly<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>>
>(({ children, className, ...props }, ref) => {
  const isMobile = useIsMobile();
  // declare the memoized values for the scaffold provider
  const ctx = React.useMemo(() => ({ isMobile }), [isMobile]);
  return (
    <ScaffoldContext.Provider value={ctx}>
      <div
        ref={ref}
        className={cn('flex-1 h-full w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScaffoldContext.Provider>
  );
});
ScaffoldProvider.displayName = 'ScaffoldProvider';

// Scaffold
export const Scaffold = React.forwardRef<
  HTMLDivElement,
  Readonly<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> &
    ScaffoldProps
>(({ asChild, className, flavor, variant, ...props }, ref) => {
  // declare the slot component
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp
      ref={ref}
      className={cn(
        scaffoldVariants({ flavor, variant }),
        'relative w-full min-h-full flex flex-col flex-1',
        className
      )}
      {...props}
    />
  );
});
Scaffold.displayName = 'Scaffold';

// Scaffold Content
export const ScaffoldContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  // handle asChild
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp
      ref={ref}
      className={cn(
        'bg-inherit text-inherit flex-1 py-2 px-4 min-h-full w-full',
        className
      )}
      {...props}
    />
  );
});
ScaffoldContent.displayName = 'ScaffoldContent';

// Scaffold Header
export const ScaffoldHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  // handle asChild
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp ref={ref} className={cn('top-0 w-full flex', className)} {...props} />
  );
});
ScaffoldHeader.displayName = 'ScaffoldHeader';

// Scaffold Footer
export const ScaffoldFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  // handle asChild
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp
      ref={ref}
      className={cn('bottom-0 w-full flex flex-shrink items-center', className)}
      {...props}
    />
  );
});
ScaffoldFooter.displayName = 'ScaffoldFooter';

// Scaffold Leading
export const ScaffoldLeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  // handle asChild
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp
      ref={ref}
      className={cn(
        'mr-auto h-full max-w-md flex flex-1 flex-col gap-2',
        className
      )}
      {...props}
    />
  );
});
ScaffoldLeading.displayName = 'ScaffoldLeading';

// Scaffold Trailing
export const ScaffoldTrailing = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  // handle asChild
  const Comp = asChild ? Slot : 'div';
  // render the component
  return (
    <Comp
      ref={ref}
      className={cn(
        'ml-auto h-full max-w-md flex flex-1 flex-col gap-2',
        className
      )}
      {...props}
    />
  );
});
ScaffoldTrailing.displayName = 'ScaffoldTrailing';
