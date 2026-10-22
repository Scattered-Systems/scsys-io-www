/**
 * Created At: 2026.09.02:19:47:46
 * @author - @FL03
 * @directory - src/features/blog/utils
 * @file - index.ts
 */
import type { MDXModule } from 'mdx/types';
import type { PostMeta } from '../types';

// Published posts, keyed by slug. To publish `posts/my-post.mdx`, add
// `import * as myPost from '../posts/my-post.mdx';` and `'my-post': myPost,`.
// Static imports, not a dynamic `import()`, so the build works with zero posts.
const POSTS: Record<string, MDXModule> = {};

export const POST_SLUGS = Object.keys(POSTS);

export function getPost(slug: string) {
  const mod = POSTS[slug];
  if (!mod) throw new Error(`no post with slug "${slug}"`);
  const meta = mod.metadata as Partial<PostMeta> | undefined;
  // fail the build rather than publish a post with a broken header
  if (
    !meta?.title ||
    !meta.description ||
    !/^\d{4}-\d{2}-\d{2}$/.test(meta.date ?? '')
  ) {
    throw new Error(
      `posts/${slug}.mdx must export metadata { title, date: 'YYYY-MM-DD', description }`,
    );
  }
  return { slug, meta: meta as PostMeta, Content: mod.default };
}

export const getPosts = () =>
  POST_SLUGS.map(getPost).sort((a, b) =>
    b.meta.date.localeCompare(a.meta.date),
  );

export const formatPostDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  });
