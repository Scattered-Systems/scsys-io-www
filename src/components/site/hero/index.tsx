import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { LatticeField } from './field';
import { ctaPrimary, ctaSecondary } from '@/components/site/cta';

export const Hero = () => (
  <section
    id='top'
    className='relative border-b border-border pt-36 pb-16 sm:pt-48 sm:pb-20'
  >
    <div className='site-container'>
      <h1 className='hero-title max-w-6xl'>
        {SITE.hero.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
      <div className='mt-12 grid items-end gap-10 md:grid-cols-[1.3fr_1fr]'>
        <div>
          <p className='max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl'>
            {SITE.intro}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a href={SITE.hero.primary.href} className={ctaPrimary}>
              {SITE.hero.primary.label}
              <ArrowDown aria-hidden className='size-4' />
            </a>
            <a href={SITE.hero.secondary.href} className={ctaSecondary}>
              {SITE.hero.secondary.label}
              <ArrowUpRight aria-hidden className='size-4' />
            </a>
          </div>
        </div>
        <LatticeField />
      </div>
      <p className='mt-12 text-sm text-muted-foreground'>{SITE.hero.note}</p>
    </div>
  </section>
);
export default Hero;
