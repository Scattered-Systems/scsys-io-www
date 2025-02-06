/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';
import dynamic from 'next/dynamic';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Page() {
  const Animation = dynamic(async () => await import('@/components/animated/black-hole/view'), { ssr: false });
  return (
    <>
      <Animation className="z-0" />
      <div className="z-50 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        {/* <Card className="m-auto ">
          <CardHeader>
            <CardTitle>
              Scattered-Systems
            </CardTitle>
          </CardHeader>
        </Card> */}
      </div>
    </>
  );
};
Page.displayName = 'HomePage';

