/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/components/site
 * @file - providers.tsx
 */
'use client';
// imports
import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'motion/react';

/**
 * Client provider stack for the site: theme resolution (next-themes) wrapping
 * a `LazyMotion` boundary so every `m.*` component shares a single, tree-shaken
 * feature bundle (`domAnimation`) instead of pulling the full motion runtime.
 */
export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
  </ThemeProvider>
);

Providers.displayName = 'Providers';

export default Providers;
