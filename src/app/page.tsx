/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';
import * as React from 'react';
import { Appbar, AppbarLeading, AppbarLogo, AppbarTitle} from '@/components/common/appbar';
import { AppLogo } from '@/components/common/icons';
import { motion } from 'motion/react';

const HomeHero: React.FC = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Welcome to scsys</h1>
      <p className="text-sm text-gray-500">
        Get started by editing{' '}
        <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded font-semibold">
          src/app/page.tsx
        </code>
        .
      </p>
    </section>
  );
}

const HomePage: React.FC = () => {
  return (
    <>
      <Appbar variant="default">
        <AppbarLeading>
          <AppbarLogo>
            <AppLogo />
          </AppbarLogo>
          <AppbarTitle className="text-lg font-semibold">scsys</AppbarTitle>
        </AppbarLeading>
      </Appbar>
      <main className="container mx-auto flex flex-col px-4 py-2 text-foreground">
        <motion.div
          animate={{
            opacity: 1,
            scale: 0.75,
            transition: { duration: 0.5 },
          }}
          initial={{ backgroundColor: 'rgb(255, 0, 0)', opacity: 0 }}
          whileInView={{ backgroundColor: 'rgb(0, 255, 255)', opacity: 1 }}
        >
          <span className="bg-blue-500 block rounded-xl w-8 h-8" />
        </motion.div>
        <motion.div
          className="w-8 h-8 bg-blue-500 rounded-xl"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <HomeHero />
      </main>
    </>
  );
};
HomePage.displayName = 'HomePage';


export const runtime = 'edge';

export default HomePage;