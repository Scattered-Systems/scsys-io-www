/*
  Appellation: layout <(home)>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
// project
import { cn } from '@/lib/utils';
// components
import {
  Appbar,
  AppbarContent,
  AppbarLeading,
  AppbarTitle,
  AppbarTrailing,
} from '@/common/appbar';
import { AppLogo } from '@/common/icons';
import { ThemeButton } from '@/common/theme/theme-toggle';
import { Button } from '@/ui/button';

const MenuLink: React.FC<
  Omit<React.ComponentPropsWithRef<typeof Button>, "asChild" | "title"> & React.PropsWithChildren<{
    href: React.ComponentProps<typeof Link>['href'];
    icon?: React.ReactNode;
  }>
> = ({
  className,
  href,
  icon,
  size = 'default',
  variant = 'link',
  ...props
}) => {
  return (
    <Button  {...props} asChild ref={ref} className={cn('', className)} size={size} variant={variant}>
      <Link href={ref} className="inline-flex flex-nowrap items-center gap-2">
        {icon && <div className="h-4 w-4 tracking-tight leading-none">{icon}</div>}
        {children && <span className="text-sm font-medium">{children}</span>}
      </Link>
    </Button>
  );
};
MenuLink.displayName = 'MenuLink';

export const AppScaffold: React.FC<React.ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  const links = [
    { href: '/', name: 'Home', label: 'home' },
    { href: '/about', name: 'About', label: 'about' },
  ];
  return (
    <div className={cn('relative flex flex-col flex-1 w-full min-h-full', className)}>
        <Appbar flavor="default" variant="default">
          <AppbarLeading className="gap-2 items-center">
            <AppLogo className="h-6 w-6"/>
            <AppbarTitle>scsys</AppbarTitle>
          </AppbarLeading>
          <AppbarContent>
            <div className="inline-flex items-center gap-2">
              {links.map((props, index) => (
                <MenuLink key={index} id={props.name} {...props} />
              ))}
            </div>
          </AppbarContent>
          <AppbarTrailing className="inline-flex flex-nowrap items-center justify-end gap-2 ml-auto">
            <ThemeButton />
            <MenuLink
              name="Login"
              variant="link"
              className="hover:bg-primary/80 hover:text-primary/80"
            />
            <Button
              asChild
              className={cn('transition-colors hover:underline', className)}
              size="sm"
              variant="link"
              {...props}
            >
              <Link
              href="https://workout.scsys.io/auth/login"
                className="inline-flex flex-nowrap items-center gap-2"
              >
                <span>Login</span>
              </Link>
            </Button>
          </AppbarTrailing>
        </Appbar>
      <main className="min-h-full w-full flex flex-col flex-1 container mx-auto px-4 py-2">{children}</main>
    </div>
  );
};
AppScaffold.displayName = 'AppScaffold';

export default AppScaffold;
