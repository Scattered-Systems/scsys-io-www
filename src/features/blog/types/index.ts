/**
 * Created At: 2026.09.02:19:47:42
 * @author - @FL03
 * @directory - src/features/blog/types
 * @file - index.ts
 */
/** The `metadata` every post in `src/features/blog/posts/<slug>.mdx` must export. */
export type PostMeta = {
  title: string;
  /** ISO date, e.g. `2026-10-20`; posts are listed newest first. */
  date: string;
  description: string;
};
