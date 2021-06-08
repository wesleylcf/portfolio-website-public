import React from 'react';
import Section from '../../Layout/Section/Section';
import Card from '../../cards/Card/Card';
import utilStyles from '../../../styles/utils.module.css';

const Contact = () => {
  return (
    <>
      <header>
        <h1 className={utilStyles.headingLg}>
          <span className={utilStyles.ColorT}>4.</span> Blog
        </h1>
      </header>
      <Section>
        <Card>
          <header>
            <h1 className={utilStyles.ColorT}>Blog post 1</h1>
          </header>
        </Card>
        <Card>
          <header>
            <h1 className={utilStyles.ColorP}>Blog post 2</h1>
          </header>
        </Card>
        <Card>
          <header>
            <h1 className={utilStyles.ColorA}>Blog post 3</h1>
          </header>
        </Card>
      </Section>
    </>
  );
};

export default Contact;
