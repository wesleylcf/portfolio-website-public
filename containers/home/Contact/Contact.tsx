import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import VerticalSection from '../../../components/Layout/VerticalSection/VerticalSection';
import HorizontalSection from '../../../components/Layout/HorizontalSection/HorizontalSection';
import Card from '../../../components/cards/Card/Card';
import HeadingCard from '../../../components/cards/HeadingCard/HeadingCard';
import ImportantButton from '../../../components/buttons/ImportantButton/ImportantButton';
import Animate from '../../../components/Layout/Animate/Animate';

const Contact = ({ darkMode }) => {
  return (
    <VerticalSection hideBorder>
      <HeadingCard
        number="05"
        content="Get in touch"
        order={0}
        darkMode={darkMode}
      />
      <HorizontalSection hideBorder margin="0" minHeight="55vh">
        <Card
          side="center"
          showBackground
          darkMode={darkMode}
          borderRadius="15px 15px 15px 15px"
          margin="1vh 1vw"
          flexBasis="45%"
          padding="0 2vw"
        >
          <h1
            className={`${utilStyles.headingMd} ${
              darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the interested Recruiter
          </h1>
          <p>I'm currently looking for internships for the coming summer! </p>
          <ImportantButton
            href="mailto:wesleylim.work@gmail.com"
            darkMode={darkMode}
          >
            Say Hi
          </ImportantButton>
        </Card>
        <Card
          side="center"
          showBackground
          darkMode={darkMode}
          borderRadius="15px 15px 15px 15px"
          margin="1vh 1vw"
          flexBasis="45%"
          padding="0 2vw"
        >
          <h1
            className={`${utilStyles.headingMd} ${
              darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the curious Visitor
          </h1>
          <p>
            Thanks for reading up till here! If you're interested I write a lot
            more at my blog:
          </p>
          <ImportantButton href="/blog" darkMode={darkMode}>
            Blog
          </ImportantButton>
        </Card>
      </HorizontalSection>
    </VerticalSection>
  );
};

export default Contact;
