

module.exports = {
  siteUrl: "https://depfinfinance.co.za",
  changefreq: "weekly",
  priority: 1,
  outDir: "out",
  autoLastmod: true,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: [
    "/404",
    "/_app",
    "/_error",
    "/_document",
    "/500",
    "/pages/auth/login",
    "/pages/auth/passwordreset",
    "/pages/auth/reset",
    "/pages/auth/register",
    "/account",
    "/server-sitemap.xml",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",

        disallow: ["/account", "/auth/login", "auth/register"],
      },
    ],
  },
};
