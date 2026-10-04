import { Hero } from '@/components/site/hero';
import { Proton } from '@/components/site/sections/proton';
import { Reaction } from '@/components/site/sections/reaction';
import { Eryon } from '@/components/site/sections/eryon';
import { Ecosystem } from '@/components/site/sections/ecosystem';
import { About } from '@/components/site/sections/about';
import { Contact } from '@/components/site/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Proton />
      <Reaction />
      <Eryon />
      <About />
      <Contact />
    </>
  );
}
