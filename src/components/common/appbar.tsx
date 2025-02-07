/*
    Appellation: appbar <module>
    Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const appBarVariants = cva(
  'w-full z-50 flex flex-row flex-nowrap w-full items-center gap-2 lg:gap-4 px-2 py-1 inset-0',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        inherit: 'bg-inherit text-inherit',
        accent: 'bg-accent text-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
      rounded: {
        default: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      size: {
        default: 'h-1/12',
        sm: 'h-12',
        md: 'h-16',
        lg: 'h-20',
      },
      position: {
        default: 'sticky top-0',
        bottom: 'sticky bottom-0',
        top: 'sticky top-0',
        topCenter: 'sticky top-0 left-1/2 transform -translate-x-1/2',
      },
    },
    defaultVariants: {
      position: 'default',
      rounded: 'default',
      size: 'default',
      variant: 'default',
    },
  }
);

type AppbarContext = {
  centerTitle: boolean;
};

const AppbarContext = React.createContext<AppbarContext>({
  centerTitle: false,
});

// Appbar
const Appbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof appBarVariants> & { centerTitle?: boolean }
>(({ className, centerTitle, position, size, variant, ...props }, ref) => {
  centerTitle = centerTitle ?? false;

  const contextValue = React.useMemo(() => ({ centerTitle }), [centerTitle]);

  return (
    <AppbarContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn(appBarVariants({ position, size, variant }), className)}
        {...props}
      />
    </AppbarContext.Provider>
  );
});
Appbar.displayName = 'Appbar';

// AppbarContent
const AppbarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full flex flex-row flex-1 flex-nowrap gap-2 items-center',
      className
    )}
    {...props}
  />
));
AppbarContent.displayName = 'AppbarContent';

// AppbarLeading
const AppbarLeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'inline-flex max-w-sm items-center gap-2',
      className
    )}
    {...props}
  />
));
AppbarLeading.displayName = 'AppbarLeading';

// AppbarTrailing
const AppbarTrailing = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row flex-shrink flex-nowrap space-x-2 items-center justify-items-center justify-end',
      className
    )}
    {...props}
  />
));
AppbarTrailing.displayName = 'AppbarTrailing';

const AppbarLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('h-full w-8 my-auto', className)} {...props} />
));
AppbarLogo.displayName = 'AppbarLogo';

const AppbarTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { centerTitle } = React.useContext(AppbarContext);
  return (
    <h1
      ref={ref}
      className={cn(
        'text-lg font-semibold',
        centerTitle && 'absolute left-1/2 transform -translate-x-1/2',
        className
      )}
      {...props}
    />
  );
});
AppbarTitle.displayName = 'AppbarTitle';

const AppbarActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center space-x-2', className)}
    {...props}
  />
));
AppbarActions.displayName = 'AppbarActions';

// AppbarSection
const AppbarSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row flex-grow flex-nowrap space-x-2 items-center justify-items-center',
      className
    )}
    {...props}
  />
));
AppbarSection.displayName = 'AppbarSection';

export {
  Appbar,
  AppbarActions,
  AppbarContent,
  AppbarLeading,
  AppbarLogo,
  AppbarTitle,
  AppbarTrailing,
};
