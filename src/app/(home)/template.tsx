/*
  Appellation: template <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Appbar,
  AppbarContent,
  AppbarLeading,
  AppbarLogo,
  AppbarTitle,
  AppbarTrailing,
} from '@/components/common/appbar';
import { AppLogo } from '@/components/common/icons';
import { ScrollIndicator } from '@/components/animated/scroll-indicator';
import { ThemeToggle } from '@/components/common/theme';
import { Footer, FooterContent, FooterLeading, FooterTrailing } from '@/components/common/footer';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from '@/components/ui/navigation-menu';
import { sitemap } from '@/lib/data/sitemap';

export const runtime = 'edge';

const PageTemplate: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {
  const title =  'scsys'; // 'Scattered-Systems';
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Appbar variant="secondary">
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  key={0}
                  href="/"
                  className="px-2 hover:italic"
                >
                  Home
                </NavigationMenuLink>
                <NavigationMenuLink
                  key={2}
                  href="#about"
                  className="px-2 hover:italic"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </AppbarContent>
        <AppbarTrailing>
          <ThemeToggle />
        </AppbarTrailing>
      </Appbar>
      <main className="container mx-auto flex flex-col flex-1 space-y-4 px-4 py-2">
        {children}
      </main>
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;