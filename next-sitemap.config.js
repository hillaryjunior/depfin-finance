

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
    "/auth",
    
    "/account",
   
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",

        disallow: ["/account", "/auth/login", "/auth/register"],
      },
    ],
  },
};
