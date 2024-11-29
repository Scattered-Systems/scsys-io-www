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
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from '@/components/ui/navigation-menu';
import { sitemap } from '@/lib/data/sitemap';

export const runtime = 'edge';

const PageTemplate: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {

  return (
    <div>
      <Appbar variant="default">
        <AppbarLeading>
          <AppbarLogo>
            <motion.div
              transition={{ duration: 2 }}
              whileHover={{
                rotate: [0, -45, 90, 180, 0],
                scale: [1, 1.25, 1.0, 0.75, 1],
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <AppLogo />
            </motion.div>
          </AppbarLogo>
          <AppbarTitle className="text-lg font-semibold">scsys</AppbarTitle>
        </AppbarLeading>
        <AppbarContent>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {sitemap.pages.map(({ href, title }) => {
                  return (
                    <NavigationMenuLink key={href} href={href} className="px-2 hover:italic">
                      {title}
                    </NavigationMenuLink>
                  );
                })}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </AppbarContent>
        <AppbarTrailing>
          <ThemeToggle />
        </AppbarTrailing>
      </Appbar>
      <main className="container mx-auto flex flex-col space-y-4 w-full px-4 py-2">
        {children}
      </main>
      <Footer className="bg-secondary text-secondary-foreground">
        <FooterLeading className="mr-auto">
          <div className="font-semibold transition-all">
            Scattered-Systems, LLC
          </div>
          <div className="text-muted-foreground">
            Empowering the next generation of internet-based experiences.
          </div>
        </FooterLeading>
        <FooterContent className="">
          <div className="inline-block m-auto">
            <span className="w-full text-muted-foreground">
              © 2024 Scattered-Systems, LLC
            </span>
            <span className="text-muted-foreground">All Rights Reserved</span>
          </div>
        </FooterContent>
        <FooterTrailing className="">
          <Link
            href="https://github.com/FL03"
            className="w-full text-end justify-items-center"
          >
            FL03
          </Link>
          <div className="text-xs text-gray-500">Software Development</div>
        </FooterTrailing>
      </Footer>
      <ScrollIndicator
        className="bg-gradient-to-br from-blue-500 to-green-600 "
        position="fixedBottom"
      />
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;