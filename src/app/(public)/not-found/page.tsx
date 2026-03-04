/**
 * Created At: 2025.08.17:01:22:19
 * @author - @FL03
 * @file - note-found/page.tsx
 */
'use client';
// imports
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-1 h-full w-full items-center justify-center'>
      <div className='flex flex-col'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </div>
    </div>
  );
}
Page.displayName = 'NotFound';
