import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "146.59.63.145",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;