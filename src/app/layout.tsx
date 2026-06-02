/**
 * Created At: 2025-04-03:17:30:51
 * @author - @FL03
 * @directory - src/app
 * @file - layout.tsx
 */
// imports
import type { Metadata, Viewport } from 'next';
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
// project
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';
import { Providers } from '@/components/site/providers';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { Hud } from '@/components/site/hud';
import { ScrollProgress } from '@/components/site/scroll-progress';
// stylesheet(s)
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// editorial display face — characterful high-contrast serif
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

/** The root layout for the application. */
export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative z-0 min-h-screen w-full antialiased',
          geistSans.variable,
          geistMono.variable,
          fraunces.variable,
        )}
      >
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Hud />
          <Navbar />
          <main id="content" className="relative">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" />
        </Providers>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#101319' },
    { media: '(prefers-color-scheme: light)', color: '#f4f6f8' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE.url),
  title: { absolute: SITE.title, template: `%s · ${SITE.short}` },
  applicationName: SITE.title,
  description: `${SITE.author.company} — ${SITE.tagline} ${SITE.intro}`,
  category: 'Technology',
  creator: SITE.author.company,
  publisher: SITE.author.company,
  authors: [
    { name: SITE.author.name, url: SITE.author.companyUrl },
    { name: SITE.author.company, url: SITE.url },
  ],
  keywords: [
    'Scattered-Systems',
    'scsys',
    'cloud clusters',
    'Eryon',
    'orchestration',
    'distributed systems',
    'topology',
    'neo-Riemannian',
    'Rust',
    'WebAssembly',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description: SITE.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.tagline,
    creator: '@jo3mccain',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/icon1.png', type: 'image/png' },
  ],
};
