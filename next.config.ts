import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/DigitalPinoy',
  assetPrefix: '/DigitalPinoy/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
