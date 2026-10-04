import Link from 'next/link';
import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';

export const About = () => (
  <Section id='about' className='bg-card'>
    <div className='grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-24'>
      <SectionHeader title={SITE.aboutTitle} />
      <div>
        {SITE.about.map((paragraph) => (
          <p key={paragraph} className='mb-5 text-lg text-muted-foreground'>
            {paragraph}
          </p>
        ))}
        <Link
          href='/about'
          className='site-link inline-flex min-h-11 items-center'
        >
          About Scattered-Systems
        </Link>
      </div>
    </div>
  </Section>
);
export default About;
