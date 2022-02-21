import '../sass/base/global.scss'
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router  = useRouter();
   const url = `http://depfinfinance.co.za/${router.route}`;
  return (

      <Component {...pageProps} cononical={url} key={url} />
    
  );
}

export default MyApp
