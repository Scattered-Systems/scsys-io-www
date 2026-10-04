/**
 * Created At: 2025.05.02:23:10:22
 * @author - @FL03
 * @directory - src/app/(public)/error
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import Link from 'next/link';
import { ctaSecondary } from '@/components/site/cta';
import { ArrowLeft } from 'lucide-react';

type RouteProps = {
  searchParams: Promise<{ message?: string; status?: string | number }>;
};

export default async function Page({ searchParams }: RouteProps) {
  const { message = 'An unexpected error occurred.', status = 500 } =
    await searchParams;

  return (
    <article className='text-center'>
      <h1 className='site-heading'>Something went wrong.</h1>
      <p className='label-mono mt-4 text-destructive'>Error {status}</p>
      <p className='mt-5 text-muted-foreground'>{message}</p>
      <Link href='/' className={`${ctaSecondary} mt-10`}>
        <ArrowLeft aria-hidden className='size-4' />
        Back home
      </Link>
    </article>
  );
}
Page.displayName = 'ErrorPage';

export async function generateMetadata({
  searchParams,
}: RouteProps): Promise<Metadata> {
  const { status = 500 } = await searchParams;
  return {
    title: 'Error',
    description: `An error (${status}) occurred while processing your request.`,
  };
}
