import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import Card from '../../../components/cards/Card/Card';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import Main from '../../../components/Layout/Main/Main';
import Aside from '../../../components/Layout/Aside/Aside';
import Animate from '../../../components/Layout/Animate/Animate';

interface IntroProps {
  darkMode: boolean;
  isMobile: boolean;
}

const intro: React.FC<IntroProps> = ({ darkMode, isMobile }) => {
  return (
    <HorizontalSection dividerId="about">
      <Main order={0}>
        <Card side="center">
          <header id="intro">
            <Animate delay={isMobile ? 0 : 1}>
              <Animate delay={isMobile ? 0.2 : 1}>
                <h1
                  className={utilStyles.headingXl}
                  style={darkMode ? { color: 'turquoise' } : { color: 'teal' }}
                >
                  Hi,
                </h1>
              </Animate>
              <Animate delay={isMobile ? 0.4 : 1.2}>
                <h1
                  className={utilStyles.heading2Xl}
                  style={darkMode ? { color: '#ffafaf' } : { color: '#ce8e8e' }}
                >
                  I'm
                </h1>
              </Animate>
              <Animate delay={isMobile ? 0.6 : 1.4}>
                <h1
                  className={utilStyles.heading3Xl}
                  style={
                    darkMode
                      ? { color: 'lightgray' }
                      : { color: 'rgb(61, 69, 77)' }
                  }
                >
                  Wesley
                </h1>
              </Animate>
            </Animate>
          </header>
        </Card>
      </Main>
      <Aside order={1}>
        <Card side="center" flexBasis="50%" padding="0 3vw">
          <Animate delay={isMobile ? 0.8 : 1.6}>
            <p>
              I am a first-year studying Computer Science at the Nanyang
              Technological University in Singapore. I am passionate about web
              development, and software-engineering in general.
            </p>
            <p
              className={darkMode ? utilStyles.ColorT : utilStyles.ColorTLight}
            >
              Currently, I'm waiting for the university term to start !
            </p>
          </Animate>
          <Animate delay={isMobile ? 1 : 1.8}>
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
