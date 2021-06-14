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
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [isDarkMode]);
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
      >
        <Intro darkMode={isDarkMode} />
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
