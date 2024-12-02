/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { ParticleFieldHeader } from '@/components/animated/particle/particle-hero';

export const runtime = 'edge';

const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col flex-1 w-full p-4">
      <ParticleFieldHeader className="bg-gradient-to-br from-background/80 to-background rounded-full text-foreground">
        <h1 className="text-4xl font-bold">
          Scattered-Systems
        </h1>
        <span className="text-lg font-semibold text-muted-foreground">
          Empowering the next generation of internet-based experiences.
        </span>
      </ParticleFieldHeader>
    </div>
  );
};
HomePage.displayName = 'HomePage';

export default HomePage;
