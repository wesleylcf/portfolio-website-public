import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [scrollY, setScrollY] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.scrollY;
  });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.innerWidth < 800;
  });
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const onChangeColorTheme = () => {
    if (!isDarkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    setIsDarkMode(!isDarkMode);
  };
  let links;
  let socialLinks;
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
    socialLinks = [
      'https://www.linkedin.com/in/wesley-lim-cher-fong/',
      'https://www.instagram.com/wesleylcf/',
      'https://github.com/wesleylcf',
    ];
  } else if ((router.pathname = '/blog')) {
    links = {
      navLinks: [
        { linkTo: '/blog/about', content: 'About' },
        { linkTo: '/blog/projects', content: 'Projects' },
        { linkTo: '/blog/posts', content: 'Posts' },
        ,
        {
          button: true,
          linkTo: '/',
          content: 'Home',
        },
      ],
      linkInitialAnimateDelay: 0,
      linkAnimateDelayIncrement: 0.1,
    };
    socialLinks = [
      'https://www.linkedin.com/in/wesley-lim-cher-fong/',
      'https://www.instagram.com/wesleylcf/',
      'https://github.com/wesleylcf',
    ];
  }
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, []);
  let title = 'Wesley Lim - Home';

  if (router.pathname !== '/') {
    const routeArray = router.route.split('/');
    const requiredTitle = routeArray[routeArray.length - 1];
    if (requiredTitle === '[name]') {
      title = undefined;
    } else {
      const processedTitle =
        requiredTitle.charAt(0).toUpperCase() + requiredTitle.slice(1);
      if (processedTitle === 'Posts') {
        title = 'Wesley Lim - ' + 'Blog ' + processedTitle;
      } else {
        title = 'Wesley Lim - ' + processedTitle;
      }
    }
  }
  return (
    <>
      <Head>
        {title ? <title>{title}</title> : null}
        <meta name="author" content="Wesley Lim Cher Fong" />
        <link rel="icon" href="/favicon.svg"></link>
      </Head>
      <Layout
        links={links}
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        setIsMobile={(bool) => setIsMobile(bool)}
        onChangeColorTheme={onChangeColorTheme}
        atPage={router.pathname}
        socialLinks={socialLinks}
        scrollY={scrollY}
        setScrollY={setScrollY}
      >
        <Component
          {...pageProps}
          isDarkMode={isDarkMode}
          isMobile={isMobile}
          scrollY={scrollY}
        />
      </Layout>
    </>
  );
}

export default MyApp;
