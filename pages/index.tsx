import Layout from '../components/Layout/Layout';
import React from 'react';
import Intro from '../components/home/Intro/Intro';
import About from '../components/home/About/About';
import Projects from '../components/home/Projects/Projects';
import Experience from '../components/home/Experience/Experience';
import Blog from '../components/home/Blog/Blog';
import Contact from '../components/home/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Layout>
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </Layout>
    </div>
  );
}
