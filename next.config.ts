/*
  Appellation: next.config <module>
  Contrib: @FL03
*/
import createMDX from '@next/mdx';

const nextConfig: import('next').NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    turbo: {},
  },
};

if (
  process.env.NEXT_PUBLIC_BUILD_OUTPUT_TYPE === 'standalone' ||
  process.env.NEXT_PUBLIC_BUILD_OUTPUT_TYPE === 'docker'
) {
  nextConfig.output = 'standalone';
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);