import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
    window.history.scrollRestoration = 'manual';
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
