/*
  Appellation: template <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  Appbar,
  AppbarContent,
  AppbarLeading,
  AppbarLogo,
  AppbarTitle,
  AppbarTrailing,
} from '@/components/common/appbar';
import { AppLogo } from '@/components/common/icons';
import { ThemeToggle } from '@/components/common/theme';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { sitemap } from '@/config';

export const runtime = 'edge';

const PageTemplate = ({
  children,
}: Readonly<React.PropsWithChildren>) => {
  const title = 'scsys'; // 'Scattered-Systems';
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Appbar flavor="primary">
        <AppbarLeading>
          <AppbarLogo>
            <motion.div
              transition={{ duration: 2 }}
              whileHover={{
                rotate: [0, -15, 15, -45, 0],
                scale: [1, 1.25, 1.0, 0.75, 1],
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <AppLogo />
            </motion.div>
          </AppbarLogo>
          <AppbarTitle className="text-lg font-semibold">{title}</AppbarTitle>
        </AppbarLeading>
        <AppbarContent>
          <NavigationMenu>
            <NavigationMenuList>
              {sitemap.pages.map(({ href, title }) => {
                return (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuLink
                      href={href}
                      className="transition-colors hover:underline"
                    >
                      {title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </AppbarContent>
        <AppbarTrailing>
          <ThemeToggle />
        </AppbarTrailing>
      </Appbar>
      <main className="flex flex-col flex-1">{children}</main>
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
