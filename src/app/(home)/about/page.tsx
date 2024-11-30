/*
  Appellation: page <about>
  Contrib: @FL03
*/
import * as React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const runtime = 'edge';

const AboutPage: React.FC = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            About
          </CardTitle>
        </CardHeader>
      </Card>
      <section></section>
    </>
  );
}
AboutPage.displayName = 'AboutPage';


export default AboutPage;