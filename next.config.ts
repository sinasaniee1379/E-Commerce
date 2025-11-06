import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24,
    domains: ["fakestoreapi.com"],
    unoptimized: true,
  },
};

export default nextConfig;
