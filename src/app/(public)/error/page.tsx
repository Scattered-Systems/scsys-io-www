/**
 * Created At: 2025.05.02:23:10:22
 * @author - @FL03
 * @directory - src/app/(public)/error
 * @file - page.tsx
 */
// imports
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type RouteProps = {
  searchParams: Promise<{ message?: string; status?: string | number }>;
};

export default async function Page({ searchParams }: RouteProps) {
  const { message = 'An unexpected error occurred.', status = 500 } =
    await searchParams;

  return (
    <article className="text-center">
      <p className="label-mono text-destructive">Error {status}</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-6xl">
        Something dissonant.
      </h1>
      <p className="mt-5 text-muted-foreground">{message}</p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
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
