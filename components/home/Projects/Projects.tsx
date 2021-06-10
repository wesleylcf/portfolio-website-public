import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../cards/ProjectCard/ProjectCard';
import Card from '../../cards/Card/Card';
import Section from '../../Layout/Section/Section';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';

const Projects = () => {
  return (
    <Section>
      <Main order={1}>
        <HeadingCard number="02" content="Projects" order={0} />
        <Card side="center">
          <ProjectCard
            heading="Journalify"
            languages={['React', 'Express']}
            description="A code/markdown editor that can be
            launched from the CLI or online"
            imageSrc="jj.jpg"
          />
          <ProjectCard
            heading="Journalify"
            languages={['React', 'Express']}
            description="A code/markdown editor that can be
              launched from the CLI or online"
            imageSrc="jj.jpg"
          />
          <ImportantButton href="/Projects">See all projects</ImportantButton>
        </Card>
      </Main>
      <Aside order={0}>
        <div
          style={{
            width: '30vw',
            height: '40vh',
            backgroundColor: 'slategrey',
          }}
        ></div>
      </Aside>
    </Section>
  );
};

export default Projects;
