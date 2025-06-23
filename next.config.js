// const headers = require('./security')
// module.exports = {
//   reactStrictMode: true,
//   trailingSlash: false,

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

  // images: {
  //   loader: 'akamai',
  //   path: '',
  //   domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com'],
  // },

//  images: {
//   domains: [
//     'res.cloudinary.com',
//     'firebasestorage.googleapis.com',
//     'test.hallelujahgospel.org',
//     'hallelujahgospel.org' 
//   ],
// },



//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers,
//       },
//     ]
//   },
// }



// const headers = require('./security');

// module.exports = {
//   reactStrictMode: true,
//   trailingSlash: false,

//   images: {
//     domains: [
//       'res.cloudinary.com',
//       'firebasestorage.googleapis.com',
//       'test.hallelujahgospel.org',
//       'hallelujahgospel.org',
//       'www.facebook.com',
//     ],
//   },

//   async headers() {
//     return [
//       // ✅ Your global security headers
//       {
//         source: '/(.*)',
//         headers,
//       },
//       // ✅ Add proper cache headers for static files
//       {
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
// };



const headers = require('./security')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: false,
  swcMinify: true,

  images: {
       unoptimized: true, 
    domains: [
      'res.cloudinary.com',
      'firebasestorage.googleapis.com',
      'test.hallelujahgospel.org',
      'hallelujahgospel.org',
      'www.facebook.com',
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
})



