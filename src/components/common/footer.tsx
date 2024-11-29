/*
  Appellation: footer <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { cn } from '@/utils';

type FooterProps = {};

// Footer
export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FooterProps
>(({ className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn('flex w-full px-4 py-2', className)}
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
      className={cn('w-full m-auto', className)}
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
      className={cn('w-[1/5] my-auto mr-auto block', className)}
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
        'w-[1/5] my-auto ml-auto',
        className
      )}
      {...props}
    />
  );
});
FooterTrailing.displayName = 'FooterTrailing';