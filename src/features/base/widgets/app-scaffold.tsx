/*
  Appellation: layout <(home)>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
// project
import { Url } from '@/types';
import { cn } from '@/utils';
// components
import {
  Appbar,
  AppbarContent,
  AppbarLeading,
  AppbarLogo,
  AppbarTitle,
  AppbarTrailing,
} from '@/common/appbar';
import { AppLogo } from '@/common/icons';
import { ThemeToggle } from '@/common/theme';
import { Button } from '@/ui/button';

const MenuLink: React.FC<
  React.ComponentProps<typeof Button> & {
    description?: string;
    href: Url;
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
      <Link href={href} about={description}>
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
    { href: '/blog', name: 'Blog', label: 'blog' },
  ];
  return (
    <div className={cn('relative h-full w-full', className)}>
      <header className="w-full max-h-[10%]">
        <Appbar variant="secondary">
          <AppbarLeading>
            <AppbarLogo>
              <AppLogo />
            </AppbarLogo>
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
            <ThemeToggle />
            <MenuLink href="https://app.scsys.io/auth/login" name="Login" variant="default"/>
          </AppbarTrailing>
        </Appbar>
      </header>
      <main className="h-full w-full p-2 flex flex-col flex-1">{children}</main>
    </div>
  );
};
AppScaffold.displayName = 'AppScaffold';

export default AppScaffold;
