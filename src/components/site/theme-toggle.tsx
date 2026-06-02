/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - theme-toggle.tsx
 */
'use client';
// imports
import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
// project
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/** A ghost icon button that toggles between the light and dark themes. */
export const ThemeToggle: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, ...props }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // theme is unknown until after hydration — render a neutral slot first to
  // avoid an icon mismatch between server and client
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== 'light';
  // until mounted, the theme is unknown — render a stable, neutral label so the
  // server and first client render agree (no hydration mismatch)
  const label = mounted
    ? `Switch to ${isDark ? 'light' : 'dark'} theme`
    : 'Toggle theme';

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label={label}
      className={cn('text-muted-foreground hover:text-foreground', className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      {...props}
    >
      {mounted ? (
        isDark ? (
          <MoonIcon className="size-4" />
        ) : (
          <SunIcon className="size-4" />
        )
      ) : (
        <span className="size-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
