// pages/_app.js - Optimized version
import "../sass/base/global.scss";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { persistStore } from "redux-persist";
import * as fbPixel from "../lib/fbPixel";
import * as gtm from "../lib/googleTagManager";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script"; // Add this import

// Optimize dynamic imports
const PersistGate = dynamic(
  () =>
    import("redux-persist/integration/react").then((mod) => mod.PersistGate),
  { ssr: false, loading: () => null }
);

const Fab = dynamic(() => import("../utils/Fab"), {
  ssr: false,
  loading: () => null, // Remove loading component for better performance
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize only once, remove duplicate
    fbPixel.init();

    const handleRouteChange = (url) => {
      gtm.pageView(url);
      fbPixel.pageView();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Critical meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Use next/script for better performance */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload" // Load when user is about to interact
      />

      <NextUIProvider>
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)} loading={null}>
            <Component {...pageProps} />
            <Fab />
          </PersistGate>
        </Provider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
