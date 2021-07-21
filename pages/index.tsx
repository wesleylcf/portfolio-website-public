import React from 'react';
import Intro from '../containers/home/Intro/Intro';
import AboutLazy from '../containers/home/About/About';
import getPosts from './api/posts/getPosts';
import getProjects from './api/projects';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const BaseScrollYToImport = 999;

const ProjectsLazy = dynamic(
  () => import('../containers/home/Projects/Projects'),
  { ssr: false }
);

const ExperienceLazy = dynamic(
  () => import('../containers/home/Experience/Experience'),
  { ssr: false }
);
const BlogLazy = dynamic(() => import('../containers/home/Blog/Blog'), {
  ssr: false,
});
const ContactLazy = dynamic(
  () => import('../containers/home/Contact/Contact'),
  { ssr: false }
);

const Home = ({ isDarkMode, isMobile, posts, projects, scrollY }) => {
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
      {scrollY > BaseScrollYToImport ? (
        <ProjectsLazy
          darkMode={isDarkMode}
          projects={projects}
          isMobile={isMobile}
        />
      ) : null}
      {scrollY > BaseScrollYToImport * 2 ? (
        <ExperienceLazy darkMode={isDarkMode} isMobile={isMobile} />
      ) : null}
      {scrollY > BaseScrollYToImport * 3 ? (
        <BlogLazy darkMode={isDarkMode} isMobile={isMobile} posts={posts} />
      ) : null}
      {scrollY > BaseScrollYToImport * 4 ? (
        <ContactLazy darkMode={isDarkMode} />
      ) : null}
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
