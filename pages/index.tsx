import React from 'react';
import Intro from '../containers/home/Intro/Intro';
import About from '../containers/home/About/About';
import Projects from '../containers/home/Projects/Projects';
import Experience from '../containers/home/Experience/Experience';
import Blog from '../containers/home/Blog/Blog';
import Contact from '../containers/home/Contact/Contact';
import getPosts from './api/posts/getPosts';
import getProjects from './api/projects';

const Home = ({ isDarkMode, isMobile, posts, projects }) => {
  return (
    <>
      <Intro darkMode={isDarkMode} isMobile={isMobile} />
      <About darkMode={isDarkMode} isMobile={isMobile} />
      <Projects darkMode={isDarkMode} projects={projects} isMobile={isMobile} />
      <Experience darkMode={isDarkMode} isMobile={isMobile} />
      <Blog darkMode={isDarkMode} isMobile={isMobile} posts={posts} />
      <Contact darkMode={isDarkMode} />
    </>
  );
};

export async function getStaticProps(context) {
  const posts = await getPosts();
  const projects = await getProjects(2);
  return {
    props: { posts: posts, projects: projects },
  };
}

export default Home;
