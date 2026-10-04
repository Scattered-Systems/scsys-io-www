import { ArrowDownRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { Section, SectionHeader } from '@/components/site/section';

export const Ecosystem = () => (
  <Section id='ecosystem'>
    <div className='grid gap-8 md:grid-cols-2 md:gap-20'>
      <SectionHeader title={SITE.ecosystem.title} />
      <p className='max-w-xl text-lg text-muted-foreground'>
        {SITE.ecosystem.lede}
      </p>
    </div>
    <div className='mt-12 grid gap-x-10 md:grid-cols-3'>
      {SITE.ecosystem.projects.map((project) => (
        <a key={project.name} href={project.href} className='site-product-link'>
          <div className='flex items-center justify-between gap-4'>
            <h3 className='text-3xl font-medium tracking-tight'>
              {project.name}
            </h3>
            <ArrowDownRight aria-hidden className='size-5 text-structural' />
          </div>
          <p className='mt-3 font-medium'>{project.role}</p>
          <p className='mt-3 text-muted-foreground'>{project.description}</p>
          <span className='site-status mt-6'>{project.status}</span>
        </a>
      ))}
    </div>
    <p className='mt-5 max-w-3xl text-sm text-muted-foreground'>
      {SITE.ecosystem.note}
    </p>
  </Section>
);
export default Ecosystem;
