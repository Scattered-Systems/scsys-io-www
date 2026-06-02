/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/app
 * @file - page.tsx
 */
// project
import { Hero } from '@/components/site/hero';
import { Proton } from '@/components/site/sections/proton';
import { Eryon } from '@/components/site/sections/eryon';
import { Ecosystem } from '@/components/site/sections/ecosystem';
import { About } from '@/components/site/sections/about';
import { Contact } from '@/components/site/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Proton />
      <Eryon />
      <Ecosystem />
      <About />
      <Contact />
    </>
  );
}
Home.displayName = 'HomePage';
