import Layout from '../components/Layout/Layout';
import React, { useState, useEffect, useContext } from 'react';
import Intro from '../components/home/Intro/Intro';
import About from '../components/home/About/About';
import Projects from '../components/home/Projects/Projects';
import Experience from '../components/home/Experience/Experience';
import Blog from '../components/home/Blog/Blog';
import Contact from '../components/home/Contact/Contact';
import ToggleButton from '../components/buttons/ToggleButton/ToggleButton';
import ThemeContext from '../contexts/ThemeContext';

export default function Home() {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.darkMode;
  const changeColorTheme = theme.changeColorTheme;

  const [scrollY, setScrollY] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.scrollY;
  });
  const [hideComponents, setHideComponents] = useState(() => {
    if (typeof scrollY === 'undefined') return undefined;
    return false;
  });
  const [timeSinceLastHide, setTimeSinceLastHide] = useState(
    new Date().getTime()
  );
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return window.innerWidth < 800;
  });
  const [isModal, setIsModal] = useState(() => {
    if (typeof isMobile === 'undefined') return undefined;
    return false;
  });
  const links = {
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

  useEffect(() => {
    const viewportListener = () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
        setIsModal(false);
      } else {
        setIsMobile(false);
        setIsModal(false);
      }
    };
    window.addEventListener('resize', viewportListener);
    return () => {
      window.removeEventListener('resize', viewportListener);
    };
  }, [isMobile, isModal]);

  const onClickMenu = () => {
    setIsModal(!isModal);
  };
  useEffect(() => {
    let timer: any;
    const scrollListener = () => {
      if (window.scrollY > scrollY) {
        setHideComponents(true);
      } else {
        setHideComponents(false);
      }
      setScrollY(window.scrollY);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setTimeSinceLastHide(new Date().getTime());
      }, 1000);
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(timer);
    };
  }, [hideComponents, scrollY]);

  useEffect(() => {
    let timer: any;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setHideComponents(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeSinceLastHide]);

  return (
    <div>
      <Layout
        darkMode={isDarkMode}
        hideComponents={hideComponents}
        isModal={isModal}
        isMobile={isMobile}
        onClickMenu={onClickMenu}
        links={links}
      >
        <Intro darkMode={isDarkMode} isMobile={isMobile} />
        <About darkMode={isDarkMode} />
        <Projects darkMode={isDarkMode} />
        <Experience darkMode={isDarkMode} />
        <Blog darkMode={isDarkMode} isMobile={isMobile} />
        <Contact darkMode={isDarkMode} />
      </Layout>
      <ToggleButton hide={hideComponents} onChangeColor={changeColorTheme} />
    </div>
  );
}
