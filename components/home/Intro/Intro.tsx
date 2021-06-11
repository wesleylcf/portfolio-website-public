import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import Card from '../../cards/Card/Card';
import styles from './intro.module.css';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';

const intro = ({ darkMode }) => {
  return (
    <HorizontalSection>
      <Main order={0}>
        <Card side="center">
          <header className={`slide-right`}>
            <h1
              className={utilStyles.headingXl}
              style={darkMode ? { color: 'turquoise' } : { color: 'teal' }}
            >
              Hi,
            </h1>
            <h1
              className={utilStyles.heading2Xl}
              style={darkMode ? { color: '#ffafaf' } : { color: '#ce8e8e' }}
            >
              I'm
            </h1>
            <h1
              className={utilStyles.heading3Xl}
              style={
                darkMode
                  ? { color: 'slate-grey' }
                  : { color: 'rgb(61, 69, 77)' }
              }
            >
              Wesley
            </h1>
          </header>
        </Card>
      </Main>
      <Aside order={1}>
        {' '}
        <Card side="center" flexBasis="50%" padding="0 3vw">
          <div>
            <p>
              I am first-year at the Nanyang Technological University in
              Singapore, studying Computer Science. I am passionate about web
              development, and software-engineering in general.
            </p>
            <p>Currently, I'm waiting for the university term to start !</p>
          </div>

          <ImportantButton
            darkMode={darkMode}
            href="mailto:wesleylim.work@gmail.com"
          >
            Get in touch!
          </ImportantButton>
        </Card>
      </Aside>
    </HorizontalSection>
  );
};

export default intro;
