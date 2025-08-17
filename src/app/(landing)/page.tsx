/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';

import dynamic from 'next/dynamic';

export default function Page() {
  const Animation = dynamic(async () => await import('@/components/animated/black-hole/view'), { ssr: false });
  return (
    <div className="relative h-full w-full z-0">
      <Animation className="z-0 w-full h-full " />
    </div>
  );
};
Page.displayName = 'HomePage';

