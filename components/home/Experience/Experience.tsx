import React from 'react';
import Section from '../../Layout/HorizontalSection/HorizontalSection';
import Card from '../../cards/Card/Card';
import styles from './experience.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';
import SkillBarCard from '../../cards/SkillBarCard/SkillBarCard';

const Experience = ({ darkMode }) => {
  const skills = [
    {
      skill: 'React',
      confidence: 80,
    },
    {
      skill: 'Javascript',
      confidence: 80,
      color: {
        bar: 'white',
        title: { background: 'turquoise', text: 'slate-gray' },
      },
    },
    { skill: 'Python', confidence: 80 },
    { skill: 'Express', confidence: 80 },
    { skill: 'Node.js', confidence: 60 },
    { skill: 'C++', confidence: 60 },
  ];

  return (
    <Section>
      <Main order={0}>
        <HeadingCard
          number="03"
          content="Experience"
          order={0}
          darkMode={darkMode}
        ></HeadingCard>
        <Card side="center" padding="0 5vw">
          <p>
            I'm currently waiting to start my university term/in year one, and
            have no prior internships. However, I'm
            <span
              className={`${
                darkMode ? utilStyles.ColorP : utilStyles.ColorTLight
              }`}
            >
              {' '}
              actively looking for internships for this summer!{' '}
            </span>
            The libraries I've recently worked with are{` `}
            <u>React, Next, Redux, Express, Commander.</u>
            {` `}
            The libraries I've worked with in the past are{` `}
            <u>Graphql, Sequelize, Mongoose</u>
          </p>
        </Card>
        <div className={styles.ButtonContainer}>
          <ImportantButton
            darkMode={darkMode}
            href="mailto:wesleylim.work@gmail.com"
            isTextComponent
          >
            Get in touch!
          </ImportantButton>
          <ImportantButton
            darkMode={darkMode}
            href="mailto:wesleylim.work@gmail.com"
            isTextComponent
          >
            Grab a copy of my resume!
          </ImportantButton>
        </div>
      </Main>
      <Aside order={1}>
        <SkillBarCard skills={skills} darkMode={darkMode} />
      </Aside>
    </Section>
  );
};

export default Experience;
