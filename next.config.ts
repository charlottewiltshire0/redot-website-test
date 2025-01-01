import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.redotengine.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/qqvmmpgb/production/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/news/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
