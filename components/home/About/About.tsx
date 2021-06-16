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
import Animate from '../../Layout/Animate/Animate';

const About = ({ darkMode }) => {
  return (
    <Section>
      <Aside order={1}>
        <Animate delay={0.9}>
          <Image
            src="/images/me2.jpg"
            width={100}
            height={134}
            className={utilStyles.borderCircle}
          ></Image>
        </Animate>
      </Aside>
      <Main order={0}>
        <HeadingCard
          number="01"
          content="About me"
          order={0}
          darkMode={darkMode}
        />

        <Card side="center" flexBasis="60%" padding="0 5vw">
          <div className={styles.Content}>
            <Animate delay={0.3}>
              <p>
                I picked up programming while serving National Service in the
                Air Force. Eventually, I decided on web development, as I found
                designing applications from reusable components challenging yet
                fulfilling. I am a fan of Robert C. Martin and my work
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
                Nodejs) with Typescript. For general programming, I use Python
                and C++, and I'm familiar with Java.
              </p>
            </Animate>
          </div>
        </Card>
        <div className={styles.ButtonContainer}>
          <Animate delay={0.3}>
            <ImportantButton darkMode={darkMode} href="/about" isTextComponent>
              More about me
            </ImportantButton>
          </Animate>
        </div>
      </Main>
    </Section>
  );
};

export default About;
