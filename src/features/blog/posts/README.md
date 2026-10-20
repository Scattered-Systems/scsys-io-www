# Journal posts

Each post is one MDX file here, named by its URL slug: `my-post.mdx` is served at `/blog/my-post`.

1. Create `src/features/blog/posts/<slug>.mdx`:

   ```mdx
   export const metadata = {
     title: 'Post title',
     date: '2026-10-20',
     description: 'One sentence shown in the journal list and link previews.',
   };

   Body in Markdown. JSX components work too.
   ```

2. Register it in `POSTS` in `src/features/blog/utils/index.ts` (an import line plus one entry; the comment there shows the exact form).

Posts are prerendered at build time, so a post goes live when its PR is merged and deployed. The build fails if a registered post's `metadata` is incomplete.
