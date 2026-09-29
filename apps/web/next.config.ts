import path from 'node:path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd(), '../..'),
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@defi-sentinel/domain', '@defi-sentinel/rules'],
};

export default nextConfig;
