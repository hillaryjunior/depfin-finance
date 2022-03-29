

module.exports = {
  siteUrl: "https://depfinfinance.co.za/",
  changefreq: "daily",
  priority: 1.0,
  sitemapSize: 5000,
  generateRobotsTxt: true,
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
  alternateRefs: [],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",

        disallow: ["/account", "/auth/login", "auth/register"],
      },
    ],
    additionalSitemaps: [],
  },
};
