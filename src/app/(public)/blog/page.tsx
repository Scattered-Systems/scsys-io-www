import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SITE } from '@/lib/config';
import { ctaSecondary } from '@/components/site/cta';
import { formatPostDate, getPosts } from '@/features/blog';

export const metadata: Metadata = {
  title: 'Journal',
  description: SITE.journal.description,
};
export default function Page() {
  const posts = getPosts();
  return (
    <article>
      <h1 className='site-heading'>{SITE.journal.title}</h1>
      <p className='mt-6 max-w-prose text-lg text-muted-foreground'>
        {SITE.journal.description}
      </p>
      {posts.length === 0 ? (
        <p className='mt-10 border-y border-border py-8 text-muted-foreground'>
          {SITE.journal.empty}
        </p>
      ) : (
        <ul className='mt-10 divide-y divide-border border-y border-border'>
          {posts.map(({ slug, meta }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className='group block py-8'>
                <time
                  dateTime={meta.date}
                  className='label-mono text-muted-foreground'
                >
                  {formatPostDate(meta.date)}
                </time>
                <h2 className='mt-2 font-display text-2xl font-light group-hover:text-primary'>
                  {meta.title}
                </h2>
                <p className='mt-2 max-w-prose text-muted-foreground'>
                  {meta.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link href='/' className={`${ctaSecondary} mt-10`}>
        <ArrowLeft aria-hidden className='size-4' />
        Back home
      </Link>
    </article>
  );
}
