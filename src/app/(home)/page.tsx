/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ContentSection } from '@/components/common/content';
import { Hero } from '@/components/common/heros';

export const runtime = 'edge';

const HomeHeader: React.FC = () => {
  return (
    <Hero id="header" className="min-h-screen">
      <div className="flex flex-col flex-1 space-y-2 justify-start justify-items-center">
        <div className="block w-full my-auto">
          <h1 className="font-semibold text-2xl">Scattered-Systems, LLC</h1>
          <span>
            A privately owned entity focused on curating the next generation of
            internet-based experiences.
          </span>
        </div>
      </div>
    </Hero>
  );
}

const HomePage: React.FC = () => {
  // initialize any defaults
  // setup the `show` state
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <HomeHeader/>
      <AnimatePresence>
        <ContentSection className="min-h-screen" flavor="secondary">
          <div className="flex flex-row flex-nowrap justify-items-center justify-center">
            <motion.button className="bg-primary text-primary-foreground rounded-xl px-4 py-2 items-center text-center w-fit min-w-6 border border-foreground shadow-inner drop-shadow" whileTap={{ scale: 0.95 }} onClick={handleClick}>
              {show ? 'Remove' : 'Add'}
            </motion.button>
          </div>
          {show && (
            <motion.div
              className="m-auto block h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-500 to-green-600"
              exit={{ opacity: 0, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          )}
        </ContentSection>
      </AnimatePresence>
    </>
  );
};
HomePage.displayName = 'HomePage';

export default HomePage;
