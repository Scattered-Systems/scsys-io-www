/*
  Appellation: page <root>
  Contrib: @FL03
*/
'use client';
import * as React from 'react';
import { Appbar, AppbarLeading, AppbarLogo, AppbarTitle} from '@/components/common/appbar';
import { AppLogo } from '@/components/common/icons';

const HomePage: React.FC = () => {
  return (
    <div className="block min-h-full w-full">
      <Appbar variant="default">
        <AppbarLeading>
          <AppbarLogo>
            <AppLogo/>
          </AppbarLogo>
          <AppbarTitle className="text-lg font-semibold">scsys</AppbarTitle>
        </AppbarLeading>
      </Appbar>
      <main className="container mx-auto flex flex-col px-4 py-2">
        <section>
          <h1 className="text-2xl font-semibold">Welcome to scsys</h1>
          <p className="text-sm text-gray-500">
            Get started by editing <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded font-semibold">src/app/page.tsx</code>.
          </p>
        </section>
      </main>
    </div>
  );
};
HomePage.displayName = 'HomePage';


export const runtime = 'edge';

export default HomePage;