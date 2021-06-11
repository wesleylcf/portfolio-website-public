import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import Section from '../../Layout/HorizontalSection/HorizontalSection';
import Card from '../../cards/Card/Card';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';

const About = ({ darkMode }) => {
  return (
    <Section>
      <Main order={0}>
        <HeadingCard
          number="01"
          content="About me"
          order={0}
          darkMode={darkMode}
        />
        <Card side="flex-end" flexBasis="60%" padding="0 5vw">
          <div className={styles.Container}>
            <p>
              I picked up programming while serving National Service in the Air
              Force. Eventually, I decided on web development, as I found
              designing applications from reusable components challenging yet
              fulfilling. I am a huge fan of Robert C. Martin and my work
              philosophy is:
            </p>
            <q className={utilStyles.Quote}>
              Always leave the campground cleaner than you found it
            </q>{' '}
            <p>
              For my projects I use the MERN stack ( Mongodb, Express, React,
              Nodejs), with Typescript. For general programming, I use Python
              and C++, and I'm familiar with Java.
            </p>
          </div>
        </Card>
        <div className={styles.ButtonContainer}>
          <ImportantButton darkMode={darkMode} href="/about">
            More about me
          </ImportantButton>
        </div>
      </Main>
      <Aside order={1}>
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

export default About;
