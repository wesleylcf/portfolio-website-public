import React from 'react';
import Projects from '../../containers/blog/Projects/Projects';
import getProjects from '../api/projects';
import Head from 'next/head';
import { Project } from '../../pages/api/projects';

interface ProjectsProps {
  projects: Project[];
  isDarkMode: boolean;
}

const projectsPage: React.FC<ProjectsProps> = ({ isDarkMode, projects }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Wesley Lim's Projects - A list of projects I've completed so far. I'm Currently working on ${projects[0].title} - ${projects[0].description}`}
        />
        <meta
          name="keywords"
          content="Wesley Lim, Wesley lim cher fong, blog, ntu, nanyang technological university, software engineer, computer science, Singapore"
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
