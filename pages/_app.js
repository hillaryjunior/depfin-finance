import '../sass/base/global.scss'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import { SITE_URL } from '../constants'
import Script from 'next/script'
import { useEffect } from 'react'
let persistor = persistStore(store)
import * as gtag from '../lib/gtag'
import * as gtm from '../lib/googleTagManager'
import * as fbPixel from '../lib/fbPixel'
import { NextUIProvider } from '@nextui-org/react'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    // Initialize Facebook Pixel
    fbPixel.init()

    const handleRouteChange = (url) => {
      // gtag.pageview(url);
      gtm.pageView(url)
      // Track page view with Facebook Pixel
      fbPixel.pageView()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        {/* <link rel="canonical" href={`${SITE_URL}` + router?.asPath + }></link> */}
      </Head>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-N4LX88L`}
      /> */}
      <Script
        defer
        strategy='afterInteractive'
        src='https://use.fontawesome.com/releases/v5.0.13/js/all.js'
        integrity='sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe'
        crossOrigin='anonymous'
      ></Script>

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GTM-N4LX88L');
          `,
        }}
      />
      <Script
        id='gtm-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4LX88L');`,
        }}
      />

      {/* Facebook Meta Pixel Base Code */}
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1243356307431724');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1243356307431724&ev=PageView&noscript=1'
        />
      </noscript>

      <NextUIProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NextUIProvider>
    </>
  )
}

export default MyApp






// import '../sass/base/global.scss'
// // import { AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import { Provider } from 'react-redux'
// import store from '../redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// import 'react-toastify/dist/ReactToastify.css'
// import Head from 'next/head'
// import Script from 'next/script'
// import { useEffect } from 'react'
// import * as gtm from '../lib/googleTagManager'
// import * as fbPixel from '../lib/fbPixel'
// import { NextUIProvider } from '@nextui-org/react'

// let persistor = persistStore(store)

// function MyApp({ Component, pageProps }) {
//   const router = useRouter()

//   useEffect(() => {
//     // Facebook Pixel
//     fbPixel.init()

//     const handleRouteChange = (url) => {
//       gtm.pageView(url)
//       fbPixel.pageView()
//     }

//     router.events.on('routeChangeComplete', handleRouteChange)
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange)
//     }
//   }, [router.events])

//   return (
//     <>
//       <Head>{/* Optional Canonical tag */}</Head>

//       {/* ✅ FontAwesome */}
//       <Script
//         defer
//         strategy='afterInteractive'
//         src='https://use.fontawesome.com/releases/v5.0.13/js/all.js'
//         integrity='sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe'
//         crossOrigin='anonymous'
//       />

//       {/* ✅ GTM */}
//       <Script
//         id='gtm-init'
//         strategy='afterInteractive'
//         dangerouslySetInnerHTML={{
//           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-N4LX88L');`,
//         }}
//       />

//       {/* ✅ Facebook Pixel */}
//       <Script
//         id='fb-pixel'
//         strategy='afterInteractive'
//         dangerouslySetInnerHTML={{
//           __html: `
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '1243356307431724'); 
//             fbq('track', 'PageView');
//           `,
//         }}
//       />
//       <noscript>
//         <Image
//           alt=''
//           height='1'
//           width='1'
//           style={{ display: 'none' }}
//           src='https://www.facebook.com/tr?id=1243356307431724&ev=PageView&noscript=1'
//         />
//       </noscript>

//       <NextUIProvider>
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <Component {...pageProps} />
//           </PersistGate>
//         </Provider>
//       </NextUIProvider>
//     </>
//   )
// }

// export default MyApp
