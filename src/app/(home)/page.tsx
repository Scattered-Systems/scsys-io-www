/*
  Appellation: page <root>
  Contrib: @FL03
*/

import * as React from 'react';
import { ParticleFieldHeader } from '@/components/animated/particle/particle-hero';

export const runtime = 'edge';

const pageData = {
  title: 'Scattered-Systems', // 'Scattered-Systems';
  description: 'Empowering the next generation of internet-based experiences',
};

const Page: React.FC = () => {
  const { title, description } = pageData;
  return (
    <ParticleFieldHeader
      className="rounded-sm text-foreground flex flex-col flex-1"
      flavor="blueOrange"
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="text-lg font-semibold text-muted-foreground">
        {description}
      </span>
    </ParticleFieldHeader>
  );
};
Page.displayName = 'HomePage';

export default Page;
