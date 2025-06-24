// pages/_app.js
import '../sass/base/global.scss'
import { useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import * as gtm from '../lib/googleTagManager'
import * as fbPixel from '../lib/fbPixel'
import { persistStore } from 'redux-persist'
const persistor = persistStore(store)

// 🔹 Dynamic imports for performance
import dynamic from 'next/dynamic'
const PersistGate = dynamic(() =>
  import('redux-persist/integration/react').then((mod) => mod.PersistGate),
  { ssr: false }
)
const NextUIProvider = dynamic(() =>
  import('@nextui-org/react').then((mod) => mod.NextUIProvider),
  { ssr: false }
)

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    fbPixel.init()
    const handleRouteChange = (url) => {
      gtm.pageView(url)
      fbPixel.pageView()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
     

      {/* ✅ FontAwesome (non-blocking) */}
      <Script
        src='https://use.fontawesome.com/releases/v5.0.13/js/all.js'
        strategy='lazyOnload'
        defer
        async
        crossOrigin='anonymous'
        integrity='sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe'
      />
      

      {/* ✅ Google Tag Manager */}
      <Script
        id='gtm-init'
        strategy='afterInteractive'
        async
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4LX88L');`,
        }}
      />

      {/* ✅ Facebook Pixel */}
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        async
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
          alt='fb-pixel'
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1243356307431724&ev=PageView&noscript=1'
        />
      </noscript>

      {/* ✅ App Context */}
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
