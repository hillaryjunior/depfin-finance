import '../sass/base/global.scss'
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { SITE_URL } from "../constants";
import Script from 'next/script';
import { useEffect } from 'react';
let persistor = persistStore(store);
import * as gtag from "../lib/gtag";
import * as gtm from "../lib/googleTagManager";
import { NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
    useEffect(() => {
      const handleRouteChange = (url) => {
        // gtag.pageview(url);
        gtm.pageView(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  
  return (
    <>
      <Head>
        <link rel="canonical" href={`${SITE_URL}` + router?.asPath}></link>
      </Head>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      /> */}
      <Script
        defer
        src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
        integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
        crossOrigin="anonymous"
      ></Script>
{/* 
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QZ17S0VLG');
          `,
        }}
      /> */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4LX88L');`,
        }}
      />
      <NextUIProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NextUIProvider>
    </>
  );
}

export default MyApp
