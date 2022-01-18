import React, { useState, useEffect } from 'react';
import Intro from '../containers/home/Intro/Intro';
import About from '../containers/home/About/About';
import Projects from '../containers/home/Projects/Projects';
import Experience from '../containers/home/Experience/Experience';
import Blog from '../containers/home/Blog/Blog';
import Contact from '../containers/home/Contact/Contact';
import getPosts from './api/posts/getPosts';
import getProjects from './api/projects';
import Head from 'next/head';

const BaseOffsetY = 999;

const Home = ({ isDarkMode, isMobile, posts, projects, scrollY }) => {
  const [maxScrollY, setMaxScrollY] = useState(() => {
    if (typeof scrollY === 'undefined') return undefined;
    return scrollY;
  });
  useEffect(() => {
    if (scrollY > maxScrollY) {
      setMaxScrollY(scrollY);
    }
  }, [scrollY]);
  return (
    <>
      <Head>
        <meta
          name="description"
          property="description"
          content="Wesley Lim (Cher Fong)'s personal/portfolio website. I am currently studying computer science at Nanyang Technological University, and aspire to be a software engineer in the (near) future"
        />
        <meta
          name="keywords"
          content="Wesley Lim, Wesley lim cher fong, personal website, ntu, nanyang technological university, software engineer, computer science, Singapore"
        />
        <meta
          property="og:title"
          content="Wesley's personal/portfolio website"
        />
        <meta property="og:url" content="https://wesleylim.com/" />
        <meta property="og:image" content="/images/Vdark.svg" />
      </Head>
      <Intro darkMode={isDarkMode} isMobile={isMobile} />
      <About darkMode={isDarkMode} isMobile={isMobile} />
      <Projects
        isDarkMode={isDarkMode}
        projects={projects}
        isMobile={isMobile}
        offsetToRender={BaseOffsetY}
        scrollY={maxScrollY}
      />
      <Experience
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        offsetToRender={BaseOffsetY * 2}
        scrollY={maxScrollY}
      />
      <Blog
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        posts={posts}
        scrollY={maxScrollY}
        offsetToRender={BaseOffsetY * 3}
      />
      <Contact
        isDarkMode={isDarkMode}
        scrollY={maxScrollY}
        offsetToRender={BaseOffsetY * 4}
      />
    </>
  );
};

export async function getStaticProps(context) {
  const posts = await getPosts(3);
  const projects = await getProjects(2);
  return {
    props: { posts: posts, projects: projects },
  };
}

export default Home;
