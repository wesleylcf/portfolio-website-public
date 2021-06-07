import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import Section from '../../Layout/Section/Section';
import Card from '../../Layout/Card/Card';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const About = () => {
  return (
    <Section>
      <Card>
        <header className={utilStyles.headingLg}>
          <span className={styles.Header}>1.</span> About me
        </header>
        <main>
          <h1 className={styles.Me}>My journey</h1>
          <p>
            I starting programming while serving my National Service in the Air
            Force. I took several introductory courses to get a sense of
            direction on the skills I should pick up. Ultimately, I decided on
            web development, as I found the concept of creating web applications
            from reusable components interesting.
          </p>
          <h1 className={styles.Skills}>Technologies/Languages</h1>
          <ul className={styles.Unordered}>
            <li>
              For most of my projects I use the MERN(
              <span className={styles.Skills}>
                Mongodb, Express, React, Nodejs
              </span>
              ) stack, with <span className={styles.Skills}>Typescript</span>
            </li>
            <li>
              For general programming, I use{' '}
              <span className={styles.Skills}>Python and C++</span>, and I'm
              familiar with <span className={styles.Skills}>Java</span>
            </li>
          </ul>
          <h1 className={styles.Work}>Work ethic</h1>
          <p>
            I am a huge fan of Robert C. Martin and live by the Boy Scouts Rule
            :
          </p>
          <div className={styles.Quote}>
            <q>Always leave the campground cleaner than you found it</q>
          </div>
          <p>
            As an aspiring software engineer, I believe in the virtue of not
            rushing to roll out feature after feature, but to consider the
            relationship between each component, and making sure each component
            can be easily changed in the future.
          </p>
          <ImportantButton href="/about">
            {'>'} More about me {'<'}
          </ImportantButton>
        </main>
      </Card>
    </Section>
  );
};

export default About;
