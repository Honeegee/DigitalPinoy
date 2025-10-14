import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/digital-pinoy-museum',
  assetPrefix: '/digital-pinoy-museum/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
