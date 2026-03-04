// (info)/layout.tsx
import { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='container mx-auto flex-1 h-full w-full'>{children}</div>
  );
}
Layout.displayName = 'InfoLayout';
