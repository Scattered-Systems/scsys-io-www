/*
  Appellation: layout <root>
  Contrib: @FL03
*/
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
  keywords: ['scsys', 'scattered-systems', 'software', 'development', 'technology'],
  title: { default: 'Scattered-Systems', template: '%s | scsys' },
};

const RootLayout: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
RootLayout.displayName = "RootLayout";

export default RootLayout;