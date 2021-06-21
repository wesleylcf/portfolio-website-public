import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.innerWidth < 800;
  });
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    console.log(router.pathname);
    window.history.scrollRestoration = 'manual';
  }, [router.pathname]);
  const onChangeColorTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log('changed mode!');
  };
  let links;
  if (router.pathname === '/') {
    links = {
      navLinks: [
        { linkTo: '#about', content: 'About' },
        { linkTo: '#projects', content: 'Projects' },
        { linkTo: '#experience', content: 'Experience' },
        { linkTo: '#contact', content: 'Contact' },
        { button: true, linkTo: '/blog', content: 'Blog' },
      ],
      linkInitialAnimateDelay: 0.05,
      linkAnimateDelayIncrement: 0.15,
    };
  } else if ((router.pathname = '/blog')) {
    links = {
      navLinks: [
        { linkTo: '#about', content: 'About' },
        { linkTo: '#projects', content: 'Projects' },
        { linkTo: '#posts', content: 'Experience' },
        ,
        {
          button: true,
          linkTo: 'mailto:wesleylim.work@gmail.com',
          content: 'Contact me!',
        },
      ],
      linkInitialAnimateDelay: 0.05,
      linkAnimateDelayIncrement: 0.15,
    };
  }
  console.log('pagerender');
  return (
    <Layout
      links={links}
      isDarkMode={isDarkMode}
      isMobile={isMobile}
      setIsMobile={(bool) => setIsMobile(bool)}
      onChangeColorTheme={onChangeColorTheme}
    >
      <Component {...pageProps} isDarkMode={isDarkMode} isMobile={isMobile} />
    </Layout>
  );
}

export default MyApp;
