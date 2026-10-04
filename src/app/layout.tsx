import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/config';
import { Providers } from '@/components/site/providers';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
      <body className='relative min-h-screen antialiased'>
        <Providers>
          <a href='#content' className='skip-link'>
            Skip to content
          </a>
          <Navbar />
          <main id='content' tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF7' },
    { media: '(prefers-color-scheme: dark)', color: '#141618' },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE.url),
  title: { absolute: SITE.title, template: `%s · ${SITE.short}` },
  applicationName: SITE.title,
  description: SITE.intro,
  category: 'Technology',
  creator: SITE.author.company,
  publisher: SITE.author.company,
  authors: [{ name: SITE.author.company, url: SITE.url }],
  keywords: [
    'Scattered-Systems',
    'scsys',
    'Proton',
    'Reaction',
    'Eryon',
    'digital workspace',
    'distributed systems',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description: SITE.intro,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.intro,
    creator: '@scsys_io',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon0.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};
