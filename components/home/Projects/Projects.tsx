import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../cards/ProjectCard/ProjectCard';
import Card from '../../cards/Card/Card';
import Section from '../../Layout/HorizontalSection/HorizontalSection';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';
import Animate from '../../Layout/Animate/Animate';

const Projects = ({ darkMode }) => {
  return (
    <Section dividerId="experience">
      <Main order={1}>
        <HeadingCard
          number="02"
          content="Projects"
          order={0}
          darkMode={darkMode}
        />
        <Card side="center">
          <ProjectCard
            heading="Journalify"
            languages={['React', 'Express', 'Typescript', 'Commander']}
            description="A code/markdown editor that is
            launched from the CLI and saves to the user's machine"
            imageSrc="jj.jpg"
            darkMode
          />
          <ProjectCard
            heading="Journalify"
            languages={['Next.js', 'mongoDB', 'Typescript']}
            description="A web app version of Journalify that allows sharing of Journals"
            imageSrc="jj.jpg"
            darkMode
          />
          <ImportantButton darkMode={darkMode} href="/Projects">
            All Projects
          </ImportantButton>
        </Card>
      </Main>
      <Aside order={0}>
        <div
          className={darkMode ? utilStyles.BigQuote : utilStyles.BigQuoteLight}
        >
          <Animate delay={0.9}>
            <q>
              For the things we have to learn before we can do them, we learn by
              doing them
            </q>
            {` `}- Aristotle
          </Animate>
        </div>
      </Aside>
    </Section>
  );
};

export default Projects;
