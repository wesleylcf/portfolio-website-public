import React from 'react';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Card from '../../../components/cards/Card/Card';
import Main from '../../../components/Layout/Main/Main';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';

interface ProjectsProps {
  projects: {
    url: string;
    heading: string;
    languages: string;
    description: string;
  }[];
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, darkMode }) => {
  return (
    <VerticalSection>
      <Main>
        {projects.map((project, index) => {
          let heading;
          if (index === 0) {
            heading = (
              <HeadingCard
                number="Current"
                content="project"
                darkMode={darkMode}
                order={0}
              />
            );
          } else if (index === 1) {
            heading = (
              <HeadingCard
                number="Completed"
                content="projects"
                darkMode={darkMode}
                order={0}
              />
            );
          } else {
            heading = null;
          }
          return (
            <>
              {heading}
              <Card
                side="center"
                key={index}
                showBackground
                darkMode={darkMode}
                borderRadius="15px"
              >
                <h1
                  className={`${utilStyles.headingMd} ${
                    darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
                  }`}
                >
                  {project.heading}
                </h1>
                <p
                  className={
                    darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
                  }
                >
                  {project.languages}
                </p>
                <p>{project.description}</p>
                <ImportantButton href={project.url} darkMode={darkMode}>
                  View Project
                </ImportantButton>
              </Card>
            </>
          );
        })}
      </Main>
    </VerticalSection>
  );
};

export default Projects;
