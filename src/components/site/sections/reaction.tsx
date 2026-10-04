import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { Section } from '@/components/site/section';
import { ctaSecondary } from '@/components/site/cta';

export const Reaction = () => (
  <Section id='reaction' className='border-b border-border'>
    <div className='grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-24'>
      <h2 className='site-heading'>
        {SITE.reaction.name}
        <span className='mt-5 block max-w-lg text-2xl font-normal tracking-normal sm:text-3xl'>
          {SITE.reaction.title}
        </span>
      </h2>
      <div>
        <p className='text-lg text-muted-foreground'>{SITE.reaction.lede}</p>
        <p className='mt-5 text-muted-foreground'>{SITE.reaction.detail}</p>
        <span className='site-status mt-5'>{SITE.reaction.status}</span>
        <div className='mt-8'>
          <a href={SITE.reaction.cta.href} className={ctaSecondary}>
            {SITE.reaction.cta.label}
            <ArrowUpRight aria-hidden className='size-4' />
          </a>
        </div>
      </div>
    </div>
  </Section>
);
export default Reaction;
