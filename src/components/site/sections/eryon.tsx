import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';

export const Eryon = () => (
  <Section id='eryon' className='border-b border-border'>
    <div className='grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-24'>
      <SectionHeader title={SITE.eryon.title} />
      <div>
        <p className='text-lg text-muted-foreground'>{SITE.eryon.lede}</p>
        <p className='mt-5 text-sm text-muted-foreground'>{SITE.eryon.note}</p>
        <a
          href={SITE.eryon.cta.href}
          className='site-link mt-6 inline-flex min-h-11 items-center'
        >
          {SITE.eryon.cta.label}
        </a>
      </div>
    </div>
  </Section>
);
export default Eryon;
