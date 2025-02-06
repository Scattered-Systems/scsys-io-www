/*
  Appellation: page <error>
  Contrib: @FL03
*/
'use client';

export default function Page() {
  return (
    <div className="h-full w-full flex flex-1 flex-col">
      <div className="container mx-auto">
        <h2>Error</h2>
        <p>An error occurred while trying to load this page.</p>
      </div>
    </div>
  );
}
Page.displayName = 'ErrorPage';