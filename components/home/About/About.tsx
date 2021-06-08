import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import styles from './about.module.css';
import Section from '../../Layout/Section/Section';
import Card from '../../cards/Card/Card';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const About = () => {
  return (
    <Section>
      <Card>
        <header>
          <h1 className={utilStyles.headingLg}>
            <span className={utilStyles.ColorT}>1.</span> About me
          </h1>
        </header>
        <main>
          <h1 className={utilStyles.ColorT}>Technologies/Languages</h1>
          <ul className={utilStyles.Unordered}>
            <li>
              For most of my projects I use the MERN(
              <span className={utilStyles.ColorP}>
                Mongodb, Express, React, Nodejs
              </span>
              ) stack, with{' '}
              <span className={utilStyles.ColorP}>Typescript</span>
            </li>
            <li>
              For general programming, I use{' '}
              <span className={utilStyles.ColorP}>Python and C++</span>, and I'm
              familiar with <span className={utilStyles.ColorP}>Java</span>
            </li>
          </ul>
          <h1 className={utilStyles.ColorA}>Work ethic</h1>
          <p>
            I am a huge fan of Robert C. Martin and live by the Boy Scouts Rule
            :
          </p>
          <div className={utilStyles.Quote}>
            <q>Always leave the campground cleaner than you found it</q>
          </div>
          <p>
            As an aspiring software engineer, I believe in the virtue of not
            rushing to roll out feature after feature, but taking time to really
            consider the relationships between each component, and ensuring
            components can be easily changed in the future.
          </p>
          <h1 className={utilStyles.ColorP}>The journey</h1>
          <p>
            I picked up programming while serving my National Service in the Air
            Force, where I took several introductory courses to get a sense of
            direction on the skills I should pick up. Ultimately, I decided on
            web development, as I found the concept of creating web applications
            from reusable components interesting.
          </p>
          <ImportantButton href="/about">More about me</ImportantButton>
        </main>
      </Card>
    </Section>
  );
};

export default About;
