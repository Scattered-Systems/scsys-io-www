/*
  Appellation: centered <misc>
  Contrib: @FL03
*/
import * as React from 'react';
import { cn } from '@/utils';

// Centered
export const Centered = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col flex-1 w-full items-center justify-items-center justify-center',
        className
      )}
      {...props}
    />
  );
});
Centered.displayName = 'Centered';

