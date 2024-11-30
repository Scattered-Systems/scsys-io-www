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
import { ButtonSize, ButtonVariant } from '@/types/cmp';

type ThemeToggleProps = {
  lightIcon?: any;
  darkIcon?: any;
  size?: ButtonSize;
  variant?: ButtonVariant
}
// ThemeSelector
export const ThemeSelector = React.forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ children, className, ...props }, ref) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) return null;
  
  return (
    <select
      ref={ref}
      className={cn(
        'rounded-lg shadow-inner text-foreground bg-accent',
        className
      )}
      onChange={(e) => setTheme(e.target.value)}
      value={theme}
      {...props}
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      {children}
    </select>
  );
});
ThemeSelector.displayName = 'ThemeSelector';

export const ThemeSelectorOption = React.forwardRef<
  HTMLOptionElement,
  React.HTMLAttributes<HTMLOptionElement>
>(({ ...props }, ref) => <option ref={ref} {...props} />);
ThemeSelectorOption.displayName = 'ThemeSelectorOption';

// ThemeToggle
export const ThemeToggle = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & ThemeToggleProps>(({
  className,
  size,
  variant,
  darkIcon,
  lightIcon,
  ...props
}, ref) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const isDark = () => resolvedTheme === 'dark';
  darkIcon = darkIcon ?? <Moon height={24} width={24} />;
  lightIcon = lightIcon ?? <Sun height={24} width={24} />;

  const icon = (mode?: string) =>
    mode === 'system' || mode === 'dark' ? darkIcon : lightIcon;

  const onClick = () => {
    setTheme(isDark() ? 'light' : 'dark');
  }

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted || !resolvedTheme) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            ref={ref}
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
})
ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
