import React, { Fragment } from 'react';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import Card from '../../../components/cards/Card/Card';
import Main from '../../../components/Layout/Main/Main';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import { Project } from '../../../pages/api/projects';
import NotionText from '../../../components/notion/NotionText/NotionText';

interface ProjectsProps {
  projects: Project[];
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
                number=""
                content="Current"
                darkMode={darkMode}
                order={0}
              />
            );
          } else if (index === 1) {
            heading = (
              <HeadingCard
                number=""
                content="Completed"
                darkMode={darkMode}
                order={0}
              />
            );
          } else {
            heading = null;
          }
          return (
            <Fragment key={index}>
              {heading}
              <Card
                side="center"
                showBackground
                darkMode={darkMode}
                borderRadius="15px"
              >
                <h1
                  className={`${utilStyles.headingMd} ${
                    darkMode ? utilStyles.ColorT : utilStyles.ColorTLight
                  }`}
                >
                  {project.title}
                </h1>
                <p
                  className={
                    darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
                  }
                >
                  {project.tags.replaceAll(' ', ' / ')}
                </p>
                <p>{project.description}</p>
                {project.link === 'not deployed' ? (
                  <p>(Not deployed)</p>
                ) : (
                  <ImportantButton
                    href={project.link}
                    darkMode={darkMode}
                    isProjectComponent
                  >
                    View Project
                  </ImportantButton>
                )}
              </Card>
            </Fragment>
          );
        })}
      </Main>
    </VerticalSection>
  );
};

export default Projects;
