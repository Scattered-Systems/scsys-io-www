/*
  Appellation: page <module>
  Contrib: @FL03
*/
import * as React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-center">Error</h1>
      <p className="text-lg text-center">
        An error occurred while trying to load this page.
      </p>
    </div>
  );
};
NotFoundPage.displayName = 'NotFoundPage';

export const runtime = 'edge';

export default NotFoundPage;
