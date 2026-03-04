/**
 * Created At: 2025.08.17:15:26:38
 * @author - @FL03
 * @file - next.config.ts
 */
// imports
import { NextConfig } from 'next';
import { RemotePattern } from 'next/dist/shared/lib/image-config';
import createMDX from '@next/mdx';

const nextBuildOutput = (): NextConfig['output'] => {
  const value =
    process.env['NEXT_PUBLIC_BUILD_OUTPUT'] ?? process.env['BUILD_OUTPUT'];
  return value === 'export' || value === 'standalone' ? value : undefined;
};

function nextConfigImages({
  supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL,
} = {}): NextConfig['images'] {
  let remotePatterns: (URL | RemotePattern)[] = [
    {
      hostname: 'images.unsplash.com',
      pathname: '/**',
      protocol: 'https',
    },
    {
      hostname: 'avatars.githubusercontent.com',
      pathname: '/**',
      protocol: 'https',
    },
  ];
  // if a supabase project url is available, add it to the remote patterns
  if (supabaseProjectUrl) {
    try {
      const url = new URL(supabaseProjectUrl);
      remotePatterns.push({
        hostname: url.hostname,
        pathname: '/storage/**',
        protocol: 'https',
      });
    } catch (error) {
      console.error('Invalid Supabase URL:', supabaseProjectUrl, error);
    }
  }

  return {
    remotePatterns,
  };
}

const nextConfig: NextConfig = {
  compress: true,
  reactCompiler: true,
  images: nextConfigImages(),
  output: nextBuildOutput(),
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
