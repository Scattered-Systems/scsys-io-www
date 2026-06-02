/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app/(public)
 * @file - layout.tsx
 */
import { PropsWithChildren } from 'react';

/** Readable, navbar-offset container for the standalone info pages. */
export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-28 pt-32">{children}</div>
  );
}
Layout.displayName = 'InfoLayout';
