/*
    Appellation: clock <components>
    Contrib: @FL03
*/
'use client';
import * as React from 'react';
import { cn } from '@/utils/helpers';

interface ClockProps {
  key?: any;
  locals?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
}

type ClockContext = {
  time?: boolean;
};

const ClockContext = React.createContext<ClockContext>({});

const DigitalClock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ClockProps
>(({ className, locals, options, ...props }, ref) => {
  locals = locals ?? 'en-US';

  options = options ?? {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString(locals, options)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString(locals, options));
    }, 1000 * 30);

    return () => clearInterval(interval);
  }, [locals, options, setTime]);

  return (
    <span
      ref={ref}
      className={cn('text-foreground font-semibold px-4 py-2 w-fit', className)}
      {...props}
    >
      {time}
    </span>
  );
});
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
