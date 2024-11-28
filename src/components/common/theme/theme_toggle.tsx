/*
    Appellation: theme_toggle <components>
    Contrib: FL03 <jo3mccain@icloud.com>
*/
import * as React from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/utils/cn';

export interface ThemeToggleProps
  extends React.PropsWithRef<React.ComponentProps<'button'>> {
  lightIcon?: any;
  darkIcon?: any;
  size?: 'default' | 'icon' | 'sm' | 'lg' | null;
  variant?:
    | 'default'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'secondary'
    | null;
}

export function ThemeToggle({
  className,
  size,
  variant,
  darkIcon,
  lightIcon,
  ...props
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const isDark = () => resolvedTheme === 'dark';
  darkIcon = darkIcon ?? <Moon height={24} width={24} />;
  lightIcon = lightIcon ?? <Sun height={24} width={24} />;

  const icon = (mode?: string) =>
    mode === 'system' || mode === 'dark' ? darkIcon : lightIcon;

  function onClick() {
    setTheme(isDark() ? 'light' : 'dark');
  }

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn('relative w-full', className)}
            onClick={onClick}
            size={size ?? 'icon'}
            variant={variant ?? 'ghost'}
            {...props}
          >
            {icon(resolvedTheme)}
            <span className="sr-only">Theme mode toggle</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle the theme mode ({resolvedTheme})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ThemeToggle;
