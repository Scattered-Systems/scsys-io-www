/**
 * Created At: 2025.08.11:21:07:18
 * @author - @FL03
 * @file - platform/provider.tsx
 */
'use client';
// imports
import { ThemeProvider } from 'next-themes';
import React, { PropsWithChildren } from 'react';

type ProviderProps = {
  defaultTheme?: string;
};

export const PlatformProvider: React.FC<PropsWithChildren<ProviderProps>> = ({
  children,
  defaultTheme = 'system',
}) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      attribute='class'
      defaultTheme={defaultTheme}
      storageKey='theme'
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  );
};
PlatformProvider.displayName = 'PlatformProvider';

export default PlatformProvider;
