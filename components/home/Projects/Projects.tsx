import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../cards/ProjectCard/ProjectCard';
import Card from '../../cards/Card/Card';
import Section from '../../Layout/HorizontalSection/HorizontalSection';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';

const Projects = ({ darkMode }) => {
  return (
    <Section>
      <Main>
        <HeadingCard number="02" content="Projects" order={0} />
        <Card side="center">
          <ProjectCard
            heading="Journalify"
            languages={['React', 'Express', 'Typescript', 'Commander']}
            description="A code/markdown editor that is
            launched from the CLI and saves to the user's machine"
            imageSrc="jj.jpg"
          />
          <ProjectCard
            heading="Journalify"
            languages={['Next.js', 'mongoDB', 'Typescript']}
            description="A web app version of Journalify that allows sharing of Journals"
            imageSrc="jj.jpg"
          />
          <ImportantButton darkMode={darkMode} href="/Projects">
            All Projects
          </ImportantButton>
        </Card>
      </Main>
      <Aside>
        <div
          style={{
            width: '20vw',
            height: '40vh',
            backgroundColor: 'slategrey',
            color: 'black',
          }}
        >
          Insert Something!
        </div>
      </Aside>
    </Section>
  );
};

export default Projects;
