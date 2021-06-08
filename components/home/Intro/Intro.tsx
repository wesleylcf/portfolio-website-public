import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import Card from '../../cards/Card/Card';
import styles from './intro.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Section from '../../Layout/Section/Section';

const intro = () => {
  return (
    <Section>
      <Card>
        <header className={`${styles.Header} slide-right`}>
          <h1 className={utilStyles.headingXl} style={{ color: 'turquoise' }}>
            Hi
          </h1>
          <h1 className={utilStyles.heading2Xl} style={{ color: '#ffafaf' }}>
            I'm
          </h1>
          <h1 className={utilStyles.heading3Xl} style={{ color: 'slate-grey' }}>
            Wesley
          </h1>
        </header>
      </Card>

      <Card>
        <article>
          <p>
            I am first-year at the Nanyang Technological University in
            Singapore, studying Computer Science.
            <br /> I am passionate about web development, and
            software-engineering in general.
            <br />
            The stack I'm most experienced in is MERN(Mongo, Express, React,
            NodeJS)
          </p>
          <ImportantButton href="mailto:wesleylim.work@gmail.com">
            Get in touch!
          </ImportantButton>
        </article>
      </Card>
    </Section>
  );
};

export default intro;
