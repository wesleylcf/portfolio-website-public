import React from 'react';
import Card from '../../../components/cards/Card/Card';
import styles from './experience.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import Main from '../../../components/Layout/Main/Main';
import Aside from '../../../components/Layout/Aside/Aside';
import SkillBarCard from '../../../components/cards/SkillBarCard/SkillBarCard';
import Animate from '../../../components/Layout/Animate/Animate';

const Experience = ({ isDarkMode, isMobile }) => {
  const skills = [
    {
      skill: 'React',
      confidence: 80,
    },
    {
      skill: 'Javascript',
      confidence: 80,
    },
    { skill: 'Python', confidence: 80 },
    { skill: 'Node.js', confidence: 60 },
    { skill: 'C++', confidence: 60 },
  ];

  return (
    <>
      <Main order={0}>
        <HeadingCard
          number="03"
          content="Experience"
          order={0}
          darkMode={isDarkMode}
        ></HeadingCard>
        <Card side="center" padding="0 5vw">
          <Animate delay={0.3}>
            <p>
              I'm currently waiting to start my university term/in year one, and
              have no prior internships. However, I'm
              <span
                className={`${
                  isDarkMode ? utilStyles.ColorP : utilStyles.ColorTLight
                }`}
              >
                {' '}
                actively looking for internships for this summer!{' '}
              </span>
              The technologies I often work with are{` `}
              <u>React/NextJS, Redux, Typescript,</u>
              {` `}
              while those that I recently explored, or am exploring are{` `}
              <u>nestJS, Graphql, micro-services</u>
            </p>
          </Animate>
        </Card>
        {/* <div className={styles.ButtonContainer}>
          <Animate delay={isMobile ? 0.4 : 0.7}>
            <ImportantButton darkMode={isDarkMode} href="/resume">
              Grab a copy of my resume!
            </ImportantButton>
          </Animate>
        </div> */}
      </Main>
      <Aside order={1}>
        <SkillBarCard
          skills={skills}
          darkMode={isDarkMode}
          isMobile={isMobile}
        />
      </Aside>
    </>
  );
};

export default Experience;
