import React from 'react';
import Image from 'next/image';
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
      <Aside order={1}>
        <Image
          src="/images/me2.jpg"
          width={100}
          height={134}
          className={utilStyles.borderCircle}
        ></Image>
      </Aside>
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
            <q
              className={
                darkMode ? utilStyles.QuoteDark : utilStyles.QuoteLight
              }
            >
              Always leave the campground cleaner than you found it
            </q>{' '}
            <p>
              I use the MERN stack for my projects (Mongodb, Express, React,
              Nodejs) with Typescript. For general programming, I use Python and
              C++, and I'm familiar with Java.
            </p>
          </div>
        </Card>
        <div className={styles.ButtonContainer}>
          <ImportantButton darkMode={darkMode} href="/about" isTextComponent>
            More about me
          </ImportantButton>
        </div>
      </Main>
    </Section>
  );
};

export default About;
