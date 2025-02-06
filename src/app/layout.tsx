/*
  Appellation: layout <root>
  Contrib: @FL03
*/
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import '@/assets/styles/globals.css';

export default async function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  const cookieStore = await cookies();

  const prefferedTheme = cookieStore.get('theme')?.value || 'system';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative antialiased bg-background text-foreground min-h-svh w-full h-full p-0 m-0">
        <ThemeProvider
          enableColorScheme
          enableSystem
          attribute="class"
          defaultTheme={prefferedTheme}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
RootLayout.displayName = 'RootLayout';

export const metadata: Metadata = {
  applicationName: 'Scattered-Systems',
  authors: [
    {
      name: 'FL03',
      url: 'https://github.com/FL03',
    },
    {
      name: 'Scattered-Systems, LLC',
      url: 'https://github.com/scattered-systems',
    },
  ],
  category: 'Technology',
  classification: 'Software Development',
  creator: 'Scattered-Systems, LLC',
  description: 'Empowering the next generationg of internet-based experiences.',
  generator: 'scsys',
  icons: [
    {
      sizes: '16x16',
      type: 'image/x-svg',
      url: '/favico.svg',
    },
  ],
  keywords: [
    'scsys',
    'scattered-systems',
    'software',
    'development',
    'technology',
  ],
  title: { default: 'Scattered-Systems', template: '%s | scsys' },
};
