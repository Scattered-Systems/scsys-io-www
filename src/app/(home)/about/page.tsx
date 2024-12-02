/*
  Appellation: page <about>
  Contrib: @FL03
*/
import * as React from 'react';
import About from '@/features/about/data/about.mdx';
import ContentSection from '@/components/common/content';

export const runtime = 'edge';

const AboutPage: React.FC = () => {
  return (
    <ContentSection flavor="accent">
      <About />
    </ContentSection>
  );
}
AboutPage.displayName = 'AboutPage';


export default AboutPage;