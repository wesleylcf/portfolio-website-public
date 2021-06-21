import React from 'react';
import Projects from '../../containers/blog/Projects/Projects';

const projectsPage = ({ isDarkMode }) => {
  const projects = [
    {
      url: '',
      heading: 'Journalify (web app)',
      languages: 'nextJS mongodb Typescript',
      description:
        'A web app version of Journalify which allows users to share their journals. Journals are created from a markdown and code editor built on the browser',
    },
    {
      url: '',
      heading: 'Journalify',
      languages: 'React Express Typescript Commander',
      description:
        "A code/markdown editor that is launched from the CLI and saves to the user's machine",
    },
  ];
  return (
    <>
      <Projects projects={projects} darkMode={isDarkMode} />
    </>
  );
};

export default projectsPage;
