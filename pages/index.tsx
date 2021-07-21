import React from 'react';
import Intro from '../containers/home/Intro/Intro';
import getPosts from './api/posts/getPosts';
import getProjects from './api/projects';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const AboutLazy = dynamic(() => import('../containers/home/About/About'));
const ProjectsLazy = dynamic(
  () => import('../containers/home/Projects/Projects')
);
const ExperienceLazy = dynamic(
  () => import('../containers/home/Experience/Experience')
);
const BlogLazy = dynamic(() => import('../containers/home/Blog/Blog'));
const ContactLazy = dynamic(() => import('../containers/home/Contact/Contact'));

const Home = ({ isDarkMode, isMobile, posts, projects }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Wesley Lim is a software engineer experienced in web development using React/Next with Typescript, currently pursuing Computer Science at the Nanyang Technological University(year 1) in Singapore..."
        />
        <meta
          name="keywords"
          content="Wesley Lim, software engineer, React, Singapore, NTU, computer science, nanyang technological university"
        />
      </Head>
      <Intro darkMode={isDarkMode} isMobile={isMobile} />
      <AboutLazy darkMode={isDarkMode} isMobile={isMobile} />
      <ProjectsLazy
        darkMode={isDarkMode}
        projects={projects}
        isMobile={isMobile}
      />
      <ExperienceLazy darkMode={isDarkMode} isMobile={isMobile} />
      <BlogLazy darkMode={isDarkMode} isMobile={isMobile} posts={posts} />
      <ContactLazy darkMode={isDarkMode} />
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
