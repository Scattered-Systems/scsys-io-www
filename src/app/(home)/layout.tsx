/*
  Appellation: layout <(home)>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
// project
import { Url } from '@/types'
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
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/ui/navigation-menu';

export default function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  const MenuLink: React.FC<
    React.ComponentProps<typeof NavigationMenuItem> & {
      href: Url;
      name: string;
    }
  > = ({ href, name, ...props }) => (
    <NavigationMenuItem {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="transition-colors hover:underline">
          <span>{name}</span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
  return (
    <div className="relative h-full w-full flex flex-1 flex-col">
      <Appbar flavor="primary" className="z-50">
        <AppbarLeading>
          <AppbarLogo>
            <AppLogo />
          </AppbarLogo>
          <AppbarTitle>scsys</AppbarTitle>
        </AppbarLeading>
        <AppbarContent>
          <NavigationMenu>
            <NavigationMenuList>
              <MenuLink href="/" name="Home" id="home" />
              {/* <MenuLink href="/projects" name="Projects" id="projects" /> */}
              <MenuLink href="/blog" name="Blog" id="blog" />
            </NavigationMenuList>
          </NavigationMenu>
        </AppbarContent>
        <AppbarTrailing>
          <ThemeToggle />
        </AppbarTrailing>
      </Appbar>
      <main className="h-full w-full p-2 flex flex-col flex-1">
        {children}
      </main>
    </div>
  );
}
Layout.displayName = 'PageTemplate';
