import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}
  },
};

if (
  process.env.NEXT_PUBLIC_BUILD_OUTPUT_TYPE === 'standalone' ||
  process.env.NEXT_PUBLIC_BUILD_OUTPUT_TYPE === 'docker'
) {
  nextConfig.output = 'standalone';
}

export default nextConfig;
