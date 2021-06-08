import React from 'react';
import Section from '../../Layout/Section/Section';
import Card from '../../cards/Card/Card';
import styles from './experience.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const Experience = () => {
  return (
    <Section>
      <Card>
        <header>
          <h1 className={utilStyles.headingLg}>
            <span className={utilStyles.ColorT}>3.</span> Experience
          </h1>
        </header>
        <main className={styles.Main}>
          <div>
            <h2 className={utilStyles.ColorT}>Past internships</h2>
            <p>
              {' '}
              I'm currently waiting to start my university term/in year one, and
              have no prior internships. However, I'm
              <span className={utilStyles.ColorT}>
                {' '}
                actively looking for internships for this summer!
              </span>
            </p>
            <ImportantButton href="mailto:wesleylim.work@gmail.com">
              Get in touch!
            </ImportantButton>
            <ImportantButton href="mailto:wesleylim.work@gmail.com">
              Grab a copy of my resume!
            </ImportantButton>
          </div>
          <div>
            <h2 className={utilStyles.ColorP}>Programming experience</h2>
            <h3>
              <span className={utilStyles.ColorP}>Python</span>
            </h3>
            <p>
              I often use python for general programming like algorithms and
              data structures.
            </p>
            <h3>
              <span className={utilStyles.ColorP}>Javascript</span>
            </h3>

            <p>
              Trivially, I write a lot of Javascript (mostly Typescript) for my
              projects. I believe quite strongly in the value that using
              Typescript provides, such as defensive programming, static-typing,
              and better readability and understanding.
            </p>
            <p>
              The libraries I've recently worked with are
              <span className={utilStyles.ColorP}>
                {' '}
                React, Next, Redux, Express, Commander
              </span>
            </p>
            <p>
              The libraries I've worked with in the past are
              <span className={utilStyles.ColorPMild}>
                {' '}
                Graphql, Sequelize, Mongoose, Socket.io(briefly)
              </span>
            </p>

            <h3>
              <span className={utilStyles.ColorP}>C++</span>
            </h3>
            <p>
              I initially picked up C++ to get that 0ms runtime when practicing
              algorithms. However i actually I learnt a lot of useful concepts
              like C pointers VS smart pointers, allocating on the stack VS
              heap, destructors, copy constructors, and move semantics. I found
              it refreshing as it offers a look on how modern languages work
              under the hood. I also got a glimpse of how code is executed in
              assembly which expands how you think about writing optimized code.
            </p>
            <p>I use C++ whenever I can for algorithms.</p>
          </div>
        </main>
      </Card>
    </Section>
  );
};

export default Experience;
