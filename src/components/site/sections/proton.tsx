import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { Section } from '@/components/site/section';
import { ctaSecondary } from '@/components/site/cta';

export const Proton = () => (
  <Section id='proton' className='border-y border-border bg-card'>
    <div className='grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24'>
      <div>
        <h2 className='site-heading'>
          {SITE.proton.name}
          <span className='mt-5 block text-2xl font-normal tracking-normal sm:text-3xl'>
            {SITE.proton.title}
          </span>
        </h2>
        <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
          {SITE.proton.lede}
        </p>
        <span className='site-status mt-5'>{SITE.proton.status}</span>
        <div className='mt-8'>
          <a href={SITE.proton.cta.href} className={ctaSecondary}>
            {SITE.proton.cta.label}
            <ArrowUpRight aria-hidden className='size-4' />
          </a>
        </div>
      </div>
      <ul className='divide-y divide-border border-y border-border'>
        {SITE.proton.features.map((feature) => (
          <li key={feature.title} className='py-7 first:pt-7'>
            <h3 className='text-xl font-medium'>{feature.title}</h3>
            <p className='mt-3 text-muted-foreground'>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
export default Proton;
