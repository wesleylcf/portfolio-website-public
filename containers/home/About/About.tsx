import React from 'react';
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import Section from '../../../components/Layout/HorizontalSection/HorizontalSection';
import Card from '../../../components/cards/Card/Card';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import Main from '../../../components/Layout/Main/Main';
import Aside from '../../../components/Layout/Aside/Aside';
import Animate from '../../../components/Layout/Animate/Animate';

const About = ({ darkMode, isMobile }) => {
  return (
    <Section dividerId="projects">
      <Aside order={1}>
        <Animate delay={isMobile ? 0.25 : 0.9}>
          <Image
            src="/images/me.jpg"
            width={110}
            height={125}
            className={utilStyles.borderCircle}
            alt="photo of a very handsome wesley lim cher fong"
            title="photo of a very handsome wesley lim cher fong"
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
            <Animate delay={0.25}>
              <p>
                I picked up programming serving National Service in the Air
                Force. Eventually, I decided on web development, as I found
                building web applications challenging yet fun. I am a fan of
                Robert C. Martin and my work philosophy is:
              </p>
              <q
                className={
                  darkMode ? utilStyles.QuoteDark : utilStyles.QuoteLight
                }
              >
                Always leave the campground cleaner than you found it
              </q>{' '}
              <p>
                I most often use the MERN stack with Typescript for my projects
                (Mongodb, Express, React, Nodejs). For general programming, I
                use Python and C/C++.
              </p>
            </Animate>
          </div>
        </Card>
        <div className={styles.ButtonContainer}>
          <Animate delay={0.25}>
            <ImportantButton darkMode={darkMode} href="/blog/about">
              More about me
            </ImportantButton>
          </Animate>
        </div>
      </Main>
    </Section>
  );
};

export default About;
