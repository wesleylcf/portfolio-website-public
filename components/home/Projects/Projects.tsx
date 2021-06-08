import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../cards/ProjectCard/ProjectCard';
import Card from '../../cards/Card/Card';
import Section from '../../Layout/Section/Section';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const Projects = () => {
  return (
    <Section>
      <Card>
        <header>
          <h1 className={utilStyles.headingLg}>
            <span className={utilStyles.ColorT}>2.</span> Projects
          </h1>
        </header>

        <ProjectCard
          heading="Journalify"
          languages={['React', 'Express']}
          description="A code/markdown editor that has an offline version which is
              launched from the CLI and saves to the user's machine, and an
              online version which allows users to share their journals."
          imageSrc="jj.jpg"
        />
        <ProjectCard
          heading="Journalify"
          languages={['React', 'Express']}
          description="A code/markdown editor that has an offline version which is
              launched from the CLI and saves to the user's machine, and an
              online version which allows users to share their journals."
          imageSrc="jj.jpg"
        />
        <ImportantButton href="/Projects">See all projects</ImportantButton>
      </Card>
    </Section>
  );
};

export default Projects;
