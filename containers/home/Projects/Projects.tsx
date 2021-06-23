import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../../components/cards/ProjectCard/ProjectCard';
import Card from '../../../components/cards/Card/Card';
import Section from '../../../components/Layout/HorizontalSection/HorizontalSection';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import Main from '../../../components/Layout/Main/Main';
import Aside from '../../../components/Layout/Aside/Aside';
import Animate from '../../../components/Layout/Animate/Animate';

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
          />
          <ProjectCard
            heading="Journalify (web app)"
            languages={['Next.js', 'mongoDB', 'Typescript']}
            description="A web app version of Journalify which allows users share their Journals"
            imageSrc="jj.jpg"
          />
          <ImportantButton darkMode={darkMode} href="/blog/projects">
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
