import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brothers-bartenders.pl",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;