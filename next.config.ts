import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Skip ESLint checks during production builds
  },
};

export default nextConfig;
