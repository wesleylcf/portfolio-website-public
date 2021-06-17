import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
    window.history.scrollRestoration = 'manual';
  }, [router.pathname]);
  const onChangeColorTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log('changed mode!');
  };
  return (
    <ThemeProvider
      value={{ darkMode: isDarkMode, changeColorTheme: onChangeColorTheme }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
