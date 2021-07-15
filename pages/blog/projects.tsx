import React from 'react';
import Projects from '../../containers/blog/Projects/Projects';
import getProjects from '../api/projects';
import Head from 'next/head';

const projectsPage = ({ isDarkMode, projects }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`A list of project's I've built so far. Currently working on ${projects[0].title}`}
        />
        <meta
          name="keywords"
          content="Wesley Lim, software engineer, React, Singapore, NTU, computer science, projects, blog"
        />
      </Head>
      <Projects projects={projects} darkMode={isDarkMode} />
    </>
  );
};

export async function getStaticProps(context) {
  const projects = await getProjects(10);
  return {
    props: { projects: projects },
  };
}

export default projectsPage;
