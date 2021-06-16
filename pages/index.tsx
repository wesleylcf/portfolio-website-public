import Layout from '../components/Layout/Layout';
import React, { useState, useEffect } from 'react';
import Intro from '../components/home/Intro/Intro';
import About from '../components/home/About/About';
import Projects from '../components/home/Projects/Projects';
import Experience from '../components/home/Experience/Experience';
import Blog from '../components/home/Blog/Blog';
import Contact from '../components/home/Contact/Contact';
import ToggleButton from '../components/buttons/ToggleButton/ToggleButton';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  // useEffect(() => {
  //   // document.body.classList.add('dark');
  //   if (!isDarkMode) {
  //     // document.body.classList.add('light');
  //     // document.body.classList.remove('dark');
  //     document.getElementsByTagName('body')[0].style.backgroundColor =
  //       'papayawhip';
  //     document.getElementsByTagName('body')[0].style.color = 'rgb(61, 69, 77);';
  //   } else {
  //     // document.body.classList.add('dark');
  //     // document.body.classList.remove('light');
  //     document.getElementsByTagName('body')[0].style.backgroundColor =
  //       '#222222';
  //     document.getElementsByTagName('body')[0].style.color = 'slate-gray';
  //   }
  // }, [isDarkMode]);

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
      }, 1500);
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
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [timeSinceLastHide]);

  const onChangeColorTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log('changed mode!');
  };
  return (
    <div>
      <Layout
        darkMode={isDarkMode}
        onChangeColor={onChangeColorTheme}
        hideComponents={hideComponents}
        isModal={isModal}
        isMobile={isMobile}
        onClickMenu={onClickMenu}
      >
        <Intro darkMode={isDarkMode} isMobile={isMobile} />
        <About darkMode={isDarkMode} />
        <Projects darkMode={isDarkMode} />
        <Experience darkMode={isDarkMode} />
        <Blog darkMode={isDarkMode} />
        <Contact darkMode={isDarkMode} />
      </Layout>
      <ToggleButton hide={hideComponents} onChangeColor={onChangeColorTheme} />
    </div>
  );
}
