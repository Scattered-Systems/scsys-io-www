/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { ParticleFieldHeader } from '@/components/animated/particle/particle-hero';

export const runtime = 'edge';

const HomePage: React.FC = () => {

  return <ParticleFieldHeader count={100}/>;
};
HomePage.displayName = 'HomePage';

export default HomePage;
