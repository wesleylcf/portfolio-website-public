import React from 'react';
import Projects from '../../containers/blog/Projects/Projects';
import getProjects from '../api/projects';

const projectsPage = ({ isDarkMode, projects }) => {
  return (
    <>
      <Projects projects={projects} darkMode={isDarkMode} />
    </>
  );
};

export async function getStaticProps(context) {
  const projects = await getProjects();
  return {
    props: { projects: projects },
  };
}

export default projectsPage;
