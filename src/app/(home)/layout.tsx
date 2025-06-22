/*
  Appellation: layout <(home)>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
// components
import {
  AppScaffold
} from '@/components/platform';

export default function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  
  return (
    <AppScaffold>
      {children}
    </AppScaffold>
  );
}
Layout.displayName = 'PageLayout';
