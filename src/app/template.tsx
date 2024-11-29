/*
  Appellation: template <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  Appbar,
  AppbarLeading,
  AppbarLogo,
  AppbarTitle,
  AppbarTrailing,
} from '@/components/common/appbar';
import { AppLogo } from '@/components/common/icons';
import { ScrollIndicator } from '@/components/animated/scroll-indicator';
import { ThemeToggle } from '@/components/common/theme';

const AppTemplate: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {

  return (
    <div>
      <Appbar variant="default">
        <AppbarLeading>
          <AppbarLogo>
            <motion.div
              transition={{duration: 2}}
              whileHover={{
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                repeatCount: Infinity,
                rotate: [0, -45, 90, 180, 0],
                scale: [1, 1.25, 1.0, 0.75, 1],
              }}
            >
              <AppLogo />
            </motion.div>
          </AppbarLogo>
          <AppbarTitle className="text-lg font-semibold">scsys</AppbarTitle>
        </AppbarLeading>
        <AppbarTrailing>
          <ThemeToggle />
        </AppbarTrailing>
      </Appbar>
      <main className="container mx-auto flex flex-col space-y-4 w-full px-4 py-2">
        {children}
      </main>
      <ScrollIndicator flavor="blue" position="bottom" />
    </div>
  );
};
AppTemplate.displayName = 'AppTemplate';

export const runtime = 'edge';

export default AppTemplate;