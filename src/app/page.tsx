/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimatedCard } from '@/components/animated/card';
import { ContentSection } from '@/components/common/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage: React.FC = () => {

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
      <ContentSection className="min-h-screen" flavor="secondary">
        <motion.div
          transition={{ duration: 2 }}
          whileHover={{
            cursor: 'pointer',
            rotate: [0, -45, 90, 180, 0],
            scale: [1, 0.95, 1, 1.05, 1],
            
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </ContentSection>
      <AnimatePresence>
        <section className="min-h-screen rounded shadow-inner drop-shadow bg-accent text-accent-foreground"></section>
      </AnimatePresence>
    </>
  );
};
HomePage.displayName = 'HomePage';

export const runtime = 'edge';

export default HomePage;
