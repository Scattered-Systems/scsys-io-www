/*
  Appellation: loading <screens>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export const Loading: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <section
      {...props}
      ref={ref}
      className="z-50 inset-0 bg-background text-foreground flex h-full items-center"
    >
      <div className="flex flex-1 items-center justify-center m-auto">
        <div
          className={cn(
            className,
            'w-16 h-16 border-t-2 border-b-2 border-gray-800 rounded-full animate-spin'
          )}
        />
      </div>
    </section>
  );
};
Loading.displayName = 'Loading';

export const CustomLoading: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  ref,
  className,
  ...props
}) => {
  return <div ref={ref} className={cn('', className)} {...props} />;
};
CustomLoading.displayName = 'CustomLoading';
