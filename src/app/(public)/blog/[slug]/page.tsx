import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ctaSecondary } from '@/components/site/cta';
import { formatPostDate, getPost, POST_SLUGS } from '@/features/blog';

type Props = { params: Promise<{ slug: string }> };

// every post is prerendered at build. Unknown slugs 404 via notFound() below:
// `dynamicParams = false` makes the OpenNext Worker 404 real posts too.
export const generateStaticParams = () => POST_SLUGS.map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!POST_SLUGS.includes(slug)) notFound();
  const { meta } = getPost(slug);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: meta.title,
      description: meta.description,
      url: `/blog/${slug}`,
      publishedTime: meta.date,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!POST_SLUGS.includes(slug)) notFound();
  const { meta, Content } = getPost(slug);
  return (
    <article>
      <time dateTime={meta.date} className='label-mono text-muted-foreground'>
        {formatPostDate(meta.date)}
      </time>
      <h1 className='site-heading mt-4'>{meta.title}</h1>
      <div className='mt-10 max-w-prose space-y-6'>
        <Content />
      </div>
      <Link href='/blog' className={`${ctaSecondary} mt-16`}>
        <ArrowLeft aria-hidden className='size-4' />
        All posts
      </Link>
    </article>
  );
}
