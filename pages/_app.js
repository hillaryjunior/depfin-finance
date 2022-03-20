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
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  const router  = useRouter();
  
  return (
    <>
      <Head>
        <link rel="canonical" href={`${SITE_URL}` + router?.asPath}></link>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps}  />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp
