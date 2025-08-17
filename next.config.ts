/*
  Appellation: next.config <module>
  Contrib: @FL03
*/
import createMDX from '@next/mdx';
import { NextConfig } from 'next';

const buildOutput = (): NextConfig['output'] => {
  for (const i in ['NEXT_PUBLIC_BUILD_OUTPUT_TYPE', 'BUILD_OUTPUT']) {
    const envVar = process.env[i];
    switch (envVar) {
      case 'standalone':
        case 'output':
          return envVar as NextConfig['output'];
      default:
        continue;
    }
  }
  return undefined;
}

const nextConfig: NextConfig  = {
  compact: true,
  output: buildOutput(),
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);