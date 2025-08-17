/**
 * Created At: 2025.08.17:15:26:38
 * @author - @FL03
 * @file - next.config.ts
 */
// imports
import { NextConfig } from 'next';
import createMDX from '@next/mdx';
// plugins
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";

const nextBuildOutput = (): NextConfig["output"] => {
  const value = process.env["NEXT_PUBLIC_BUILD_OUTPUT"] ??
    process.env["BUILD_OUTPUT"];
  return value === "export" || value === "standalone" ? value : undefined;
};

const nextConfig: NextConfig  = {
  compress: true,
  output: nextBuildOutput(),
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMdx],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);