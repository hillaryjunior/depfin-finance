import '../sass/base/global.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import * as gtm from '../lib/googleTagManager'
import * as fbPixel from '../lib/fbPixel'
import { persistStore } from 'redux-persist'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css'

const persistor = persistStore(store)

// 🔹 Dynamic imports for performance
const PersistGate = dynamic(
  () => import('redux-persist/integration/react').then(mod => mod.PersistGate),
  { ssr: false }
)

const NextUIProvider = dynamic(
  () => import('@nextui-org/react').then(mod => mod.NextUIProvider),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    fbPixel.init()
    const handleRouteChange = (url) => {
      // ✅ Delay analytics to reduce main-thread blocking
      setTimeout(() => {
        gtm.pageView(url)
        fbPixel.pageView()
      }, 300)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      {/* ✅ Lazy-load Google Tag Manager */}
      {/* <Script
        id='gtm-init'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4LX88L');`,
        }}
      /> */}

      {/* ✅ Lazy-load Facebook Pixel */}
      {/* <Script
        id='fb-pixel'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1243356307431724'); 
          fbq('track', 'PageView');`,
        }}
      /> */}

      <NextUIProvider>
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NextUIProvider>
    </>
  )
}

export default MyApp
