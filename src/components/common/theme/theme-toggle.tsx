/**
 * Created At: 2025.06.22:14:03:57
 * @author - @FL03
 * @file - theme-toggle.tsx
 */
'use client';
// imports
import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
// project
import { logger } from '@/lib/logger';
import { cn } from '@/lib/utils';
// components
import { Button } from '@/components/ui/button';

export const ThemeButton: React.FC<
  Omit<
    React.ComponentPropsWithRef<typeof Button>,
    'children' | 'title' | 'onClick'
  > & {
    lightIcon?: React.ReactNode;
    darkIcon?: React.ReactNode;
    showLabel?: boolean;
  }
> = ({
  ref,
  className,
  size = 'icon',
  variant = 'ghost',
  darkIcon = <MoonIcon />,
  lightIcon = <SunIcon />,
  showLabel,
  ...props
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const isDark = () => resolvedTheme === 'dark';

  const renderIcon = () => {
    switch (resolvedTheme) {
      case 'dark':
        return darkIcon;
      default:
        return lightIcon;
    }
  };

  function handleOnChange() {
    setTheme(isDark() ? 'light' : 'dark');
    // log the theme change
    logger.debug(`Theme changed to ${isDark() ? 'light' : 'dark'}`);
  }

  function onClick(event?: React.BaseSyntheticEvent) {
    // prevent the default behavior of the event
    event?.preventDefault();
    // stop the event from propagating up to parent elements
    event?.stopPropagation();
    // trigger the theme change
    setTheme(isDark() ? 'light' : 'dark');
  }

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted, setMounted]);

  if (!mounted || !resolvedTheme) return null;

  return (
    <Button
      {...props}
      ref={ref}
      className={cn('relative w-full', className)}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      <div className="leading-none tracking-tight h-4 w-4">{renderIcon()}</div>
      <span className={showLabel ? 'not-sr-only' : 'sr-only'}>Theme</span>
    </Button>
  );
};
ThemeButton.displayName = 'ThemeButton';

export default ThemeButton;
