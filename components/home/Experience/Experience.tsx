import React from 'react';
import Section from '../../Layout/Section/Section';
import Card from '../../cards/Card/Card';
import styles from './experience.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';
import SkillBar from 'react-skillbars';

const Experience = () => {
  const skills = [
    {
      type: 'React',
      level: 80,
    },
    { type: 'Javascript', level: 80 },
    { type: 'Python', level: 80 },
    { type: 'Express', level: 80 },
    { type: 'Node.js', level: 60 },
    { type: 'C++', level: 60 },
  ];
  const skillBarColors = {
    bar: 'blanched-almond',
    title: { text: '#ffafaf', background: 'slate-gray' },
  };
  return (
    <Section>
      <Main order={0}>
        <HeadingCard number="03" content="Experience" order={0}></HeadingCard>
        <Card side="center">
          <p>
            I'm currently waiting to start my university term/in year one, and
            have no prior internships. However, I'm
            <span className={utilStyles.ColorT}>
              {' '}
              actively looking for internships for this summer!
            </span>
            The libraries I've recently worked with are
            <span className={utilStyles.ColorP}>
              {' '}
              React, Next, Redux, Express, Commander.
            </span>
            The libraries I've worked with in the past are
            <span className={utilStyles.ColorPMild}>
              {' '}
              Graphql, Sequelize, Mongoose
            </span>
          </p>
          <div className={styles.ButtonContainer}>
            <ImportantButton href="mailto:wesleylim.work@gmail.com">
              Get in touch!
            </ImportantButton>
            <ImportantButton href="mailto:wesleylim.work@gmail.com">
              Grab a copy of my resume!
            </ImportantButton>
          </div>
        </Card>
      </Main>
      <Aside order={1}>
        <div
          style={{
            width: '30vw',
            height: '30vh',
            backgroundColor: 'slategrey',
          }}
        ></div>
      </Aside>
    </Section>
  );
};

export default Experience;
