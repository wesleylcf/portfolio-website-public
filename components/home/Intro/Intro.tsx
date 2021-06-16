import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import Card from '../../cards/Card/Card';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
import Main from '../../Layout/Main/Main';
import Aside from '../../Layout/Aside/Aside';
import Animate from '../../Layout/Animate/Animate';

interface IntroProps {
  darkMode: boolean;
  isMobile: boolean;
}

const intro: React.FC<IntroProps> = ({ darkMode, isMobile }) => {
  return (
    <HorizontalSection>
      <Main order={0}>
        <Card side="center">
          <header>
            <Animate delay={isMobile ? 0 : 1}>
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
            </Animate>
          </header>
        </Card>
      </Main>
      <Aside order={1}>
        <Card side="center" flexBasis="50%" padding="0 3vw">
          <Animate delay={isMobile ? 0.5 : 1.25}>
            <p>
              I am first-year at the Nanyang Technological University in
              Singapore, studying Computer Science. I am passionate about web
              development, and software-engineering in general.
            </p>
            <p
              className={darkMode ? utilStyles.ColorT : utilStyles.ColorTLight}
            >
              Currently, I'm waiting for the university term to start !
            </p>
          </Animate>
          <Animate delay={isMobile ? 1 : 1.4}>
            <ImportantButton
              darkMode={darkMode}
              href="mailto:wesleylim.work@gmail.com"
              isTextComponent
            >
              Get in touch!
            </ImportantButton>
          </Animate>
        </Card>
      </Aside>
    </HorizontalSection>
  );
};

export default intro;
