/*
  Appellation: black-hole-canvas <module>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/utils';


export const BlackHoleView: React.FC<Omit<React.ComponentProps<"div">, "children">> = ({ className, ...props }) => {
  const Canvas = dynamic(() => import('./canvas'), {
    ssr: false,
  });
  return (
    <div  className={cn("w-full h-full", className)} {...props}>
      <Canvas/>
    </div>
  );
}
BlackHoleView.displayName = 'BlackHoleView';

export default BlackHoleView;