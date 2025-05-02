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
  React.ComponentProps<typeof Button> & {
    description?: string;
    href: React.ComponentProps<typeof Link>['href'];
    icon?: React.ReactNode;
    name?: React.ReactNode;
  }
> = ({
  className,
  description,
  href,
  name = '',
  size = 'default',
  variant = 'link',
  ...props
}) => {
  return (
    <Button
      asChild
      className={cn('transition-colors hover:underline', className)}
      size={size}
      variant={variant}
      {...props}
    >
      <Link
        href={href}
        about={description}
        className="inline-flex items-center px-2"
      >
        <span>{name}</span>
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
    <div className={cn('relative h-full w-full', className)}>
      <header className="flex flex-nowrap w-full items-center h-16 px-2">
        <Appbar>
          <AppbarLeading className="gap-2">
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
          <AppbarTrailing>
            <ThemeButton />
            <MenuLink
              href="https://workout.scsys.io/auth/login"
              name="Login"
              variant="link"
              className="hover:bg-primary/80 hover:text-primary/80"
            />
          </AppbarTrailing>
        </Appbar>
      </header>
      <main className="min-h-full w-full p-2 flex flex-col flex-1">{children}</main>
    </div>
  );
};
AppScaffold.displayName = 'AppScaffold';

export default AppScaffold;
