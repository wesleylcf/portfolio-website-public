import Layout from '../components/Layout/Layout';
import React, { useState, useEffect, useContext } from 'react';
import Intro from '../containers/home/Intro/Intro';
import About from '../containers/home/About/About';
import Projects from '../containers/home/Projects/Projects';
import Experience from '../containers/home/Experience/Experience';
import Blog from '../containers/home/Blog/Blog';
import Contact from '../containers/home/Contact/Contact';
import ThemeContext from '../contexts/ThemeContext';

export default function Home({ isDarkMode, isMobile }) {
  console.log('indexrender');
  return (
    <>
      <Intro darkMode={isDarkMode} isMobile={isMobile} />
      <About darkMode={isDarkMode} />
      <Projects darkMode={isDarkMode} />
      <Experience darkMode={isDarkMode} />
      <Blog darkMode={isDarkMode} isMobile={isMobile} />
      <Contact darkMode={isDarkMode} />
    </>
  );
}
