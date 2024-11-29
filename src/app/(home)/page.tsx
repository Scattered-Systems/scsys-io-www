/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimatedCard } from '@/components/animated/card';
import { ContentSection } from '@/components/common/content';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const runtime = 'edge';

const HomePage: React.FC = () => {
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <ContentSection className="min-h-screen" flavor="secondary">
        <AnimatedCard>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
          </CardContent>
        </AnimatedCard>
      </ContentSection>
      <div>
        <motion.button whileTap={{ scale: 0.95 }} onClick={handleClick}>
          {show ? 'Remove' : 'Add'}
        </motion.button>
      </div>
      <AnimatePresence>
        <ContentSection className="min-h-screen" flavor="secondary">
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
