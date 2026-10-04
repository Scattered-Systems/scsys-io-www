import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { Section } from '@/components/site/section';
import { ctaPrimary } from '@/components/site/cta';

export const Contact = () => (
  <Section id='contact' className='border-t border-border'>
    <div className='flex flex-col items-start justify-between gap-10 md:flex-row md:items-end'>
      <div>
        <h2 className='site-heading'>{SITE.contact.title}</h2>
        <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
          {SITE.contact.description}
        </p>
      </div>
      <a href={SITE.cta.href} className={ctaPrimary}>
        {SITE.email}
        <ArrowUpRight aria-hidden className='size-4' />
      </a>
    </div>
  </Section>
);
export default Contact;
