const headers = require('./security')
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,

  // create exportPathMap

  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" },
  //     "/personal/business/loan/apply": {
  //       page: "/personal/business/loan/apply",
  //     },
  //     "/apply": {
  //       page: "/personal/business/loan/apply",
  //     },
  //     "/complaints": { page: "/complaints" },
  //     "/contact": { page: "/contact" },
  //     "/faqs": { page: "/faqs" },
  //     "/privacypolicy": { page: "/privacypolicy" },
  //     "/sitemap": { page: "/sitemap" },

  //     "/solutions": { page: "/solutions" },
  //     "/terms": { page: "/terms" },
  //     "/conflictofinterest": { page: "/conflictofinterest" },
  //     "/auth/login": { page: "/auth/login" },
  //     "/auth/reset": { page: "/auth/reset" },
  //     "/auth/profile": { page: "/auth/profile" },
  //   };
  // },

  images: {
    loader: 'akamai',
    path: '',
    domains: ['res.cloudinary.com'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },
}
