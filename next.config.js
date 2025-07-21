const headers = require("./security");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: false,
  swcMinify: true,

  images: {
    unoptimized: false,
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "test.hallelujahgospel.org",
      "hallelujahgospel.org",
      "www.facebook.com",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
});
