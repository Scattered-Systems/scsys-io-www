import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SITE } from '@/lib/config';
import { ctaSecondary } from '@/components/site/cta';

export const metadata: Metadata = {
  title: 'Journal',
  description: SITE.journal.description,
};
export default function Page() {
  return (
    <article>
      <h1 className='site-heading'>{SITE.journal.title}</h1>
      <p className='mt-6 max-w-prose text-lg text-muted-foreground'>
        {SITE.journal.description}
      </p>
      <p className='mt-10 border-y border-border py-8 text-muted-foreground'>
        {SITE.journal.empty}
      </p>
      <Link href='/' className={`${ctaSecondary} mt-10`}>
        <ArrowLeft aria-hidden className='size-4' />
        Back home
      </Link>
    </article>
  );
}
