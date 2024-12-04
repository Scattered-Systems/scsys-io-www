/*
  Appellation: page <about>
  Contrib: @FL03
*/
import * as React from 'react';
import About from '@/features/about/data/about.mdx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const runtime = 'edge';

const Page: React.FC = () => {
  return (
    <>
      <Card className="flex flex-col flex-1 w-full">
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>A little bit about us!</CardDescription>
        </CardHeader>
        <CardContent>
          <About />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
Page.displayName = 'AboutPage';


export default Page;