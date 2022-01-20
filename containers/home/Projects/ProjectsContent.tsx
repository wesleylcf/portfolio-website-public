import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import ProjectCard from '../../../components/cards/ProjectCard/ProjectCard';
import Card from '../../../components/cards/Card/Card';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import Main from '../../../components/Layout/Main/Main';
import Aside from '../../../components/Layout/Aside/Aside';
import Animate from '../../../components/Layout/Animate/Animate';

const Projects = ({ isDarkMode, projects, isMobile }) => {
  return (
    <>
      <Main order={1}>
        <HeadingCard
          number="02"
          content="Projects"
          order={0}
          darkMode={isDarkMode}
        />
        <Card side="center">
          {projects.map(({ title, tags, description, link }, index) => {
            return (
              <ProjectCard
                heading={title}
                languages={tags}
                description={description}
                imageSrc={title.replace(/\s+/g, '-')}
                key={index}
                linkTo={link}
                isDarkMode={isDarkMode}
                isMobile={isMobile}
              />
            );
          })}
          <Animate delay={0.2}>
            <ImportantButton darkMode={isDarkMode} href="/blog/projects">
              All Projects
            </ImportantButton>
          </Animate>
        </Card>
      </Main>
      <Aside order={0}>
        <div
          className={
            isDarkMode ? utilStyles.BigQuote : utilStyles.BigQuoteLight
          }
        >
          <Animate delay={isMobile ? 0.3 : 0.9}>
            <q>
              For the things we have to learn before we can do them, we learn by
              doing them
            </q>
            {` `}- Aristotle
          </Animate>
        </div>
      </Aside>
    </>
  );
};

export default Projects;
