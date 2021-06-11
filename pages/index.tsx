import Layout from '../components/Layout/Layout';
import React, { useState, useEffect } from 'react';
import Intro from '../components/home/Intro/Intro';
import About from '../components/home/About/About';
import Projects from '../components/home/Projects/Projects';
import Experience from '../components/home/Experience/Experience';
import Blog from '../components/home/Blog/Blog';
import Contact from '../components/home/Contact/Contact';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
      <Layout darkMode={isDarkMode} onChangeColor={onChangeColorTheme}>
        <Intro darkMode={isDarkMode} />
        <About darkMode={isDarkMode} />
        <Projects darkMode={isDarkMode} />
        <Experience darkMode={isDarkMode} />
        <Blog darkMode={isDarkMode} />
        <Contact darkMode={isDarkMode} />
      </Layout>
    </div>
  );
}
