/**
 * Created At: 2025.05.05:09:59:14
 * @author - @FL03
 * @file - platform-navbar.tsx
 */
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
// project
import { cn } from '@/lib/utils';
// hooks
import { useIsMobile } from '@/hooks/use-mobile';
// components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type Href = React.ComponentProps<typeof Link>['href'];

type NavLinkItemT = { href: Href; label: string };

type LinkTreeT = Record<
  string,
  {
    id?: string;
    name?: string;
    label?: string;
    data: NavLinkItemT[];
  }
>;

const NavLink: React.FC<
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
    React.PropsWithChildren<{
      href?: Href;
      leading?: React.ReactNode;
    }>
> = ({ className, children, leading, href = '#', ...props }) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        {...props}
        className={cn(
          'inline-flex flex-nowrap items-center gap-1 text-base text-nowrap px-2 py-1 rounded-lg',
          'transition-all duration-200 ease-in-out hover:opacity-80 hover:ring hover:ring-accent/10 inset-0.5',
        )}
        href={href}
      >
        {leading && (
          <div className='leading-none tracking-tight'>{leading}</div>
        )}
        {children}
      </Link>
    </NavigationMenuLink>
  );
};
NavLink.displayName = 'NavLink';

export const PlatformNavbar: React.FC<
  Omit<React.ComponentPropsWithoutRef<typeof NavigationMenu>, 'id' | 'children'>
> = ({ className, ...props }) => {
  // use the isMobile hook to determine if the user is on a mobile device
  const isMobile = useIsMobile();
  // render the menu items for the platform dropdown
  const linkTree: LinkTreeT = {
    platform: {
      name: 'Platform',
      data: [
        {
          href: '/ecosystem',
          label: 'Ecosystem',
        },
        {
          href: '/connect',
          label: 'Connect',
        },
      ],
    },
  };
  // render the component
  return (
    <NavigationMenu
      {...props}
      id='platform-navbar'
      className={cn('flex flex-nowrap w-full', className)}
    >
      <NavigationMenuList>
        {!isMobile && (
          <NavigationMenuItem>
            <NavLink href='/'>Home</NavLink>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <NavLink href='/about'>About</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            autoFocus={false}
            className='items-center justify-center bg-accent text-accent-foreground hover:bg-accent/75 h-8'
          >
            Platform
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-48 gap-2'>
              {linkTree['platform'].data.map(({ href, label }, index) => (
                <li
                  key={index}
                  className='flex flex-nowrap w-full items-center gap-1'
                >
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
PlatformNavbar.displayName = 'PlatformNavbar';

export default PlatformNavbar;
