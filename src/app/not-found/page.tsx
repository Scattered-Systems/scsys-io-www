/*
  Appellation: page <error>
  Contrib: @FL03
*/
'use client';

export default function Page() {
  return (
    <div className="h-full w-full flex flex-1 flex-col">
      <div className="container mx-auto">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
Page.displayName = 'NotFound';
