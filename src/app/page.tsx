/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - page.tsx
 */
// project
import { Hero } from '@/components/site/hero';
import { Portal } from '@/components/site/sections/portal';
import { Eryon } from '@/components/site/sections/eryon';
import { Platform } from '@/components/site/sections/platform';
import { About } from '@/components/site/sections/about';
import { Contact } from '@/components/site/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Portal />
      <Eryon />
      <Platform />
      <About />
      <Contact />
    </>
  );
}
Home.displayName = 'HomePage';
