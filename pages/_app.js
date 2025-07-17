import '../sass/base/global.scss';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { persistStore } from 'redux-persist';
import * as fbPixel from '../lib/fbPixel';
import * as gtm from '../lib/googleTagManager';
import dynamic from 'next/dynamic';

// Dynamic import only for React components
const PersistGate = dynamic(
  () => import('redux-persist/integration/react').then(mod => mod.PersistGate),
  { ssr: false, loading: () => null }
);

const Fab = dynamic(() => import('../utils/Fab'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    fbPixel.init();
  }, []);

  useEffect(() => {
    fbPixel.init();
    const handleRouteChange = (url) => {
      gtm.pageView(url);
      fbPixel.pageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>




    
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
