import React from 'react';
import utilStyles from '../../../styles/utils.module.css';
import VerticalSection from '../../Layout/VerticalSection/VerticalSection';
import HorizontalSection from '../../Layout/HorizontalSection/HorizontalSection';
import Card from '../../cards/Card/Card';
import HeadingCard from '../../cards/HeadingCard/HeadingCard';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const Contact = ({ darkMode }) => {
  return (
    <VerticalSection hideBorder>
      <HeadingCard
        number="05"
        content="Get in touch"
        order={0}
        darkMode={darkMode}
        id="contact"
      />
      <HorizontalSection hideBorder margin="0" minHeight="55vh">
        <Card
          side="center"
          showBackground
          darkMode={darkMode}
          borderRadius="15px 15px 15px 15px"
          margin="1vh 1vw"
        >
          <h1
            className={`${utilStyles.headingMd} ${
              darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the interested Recruitor
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
        >
          <h1
            className={`${utilStyles.headingMd} ${
              darkMode ? utilStyles.ColorP : utilStyles.ColorPLight
            }`}
          >
            For the curious Visitor
          </h1>
          <p>
            Thanks for reading up till here! If you're interested, I write a lot
            more at my blog!
          </p>
          <ImportantButton href="/blog/me" darkMode={darkMode}>
            Blog
          </ImportantButton>
        </Card>
      </HorizontalSection>
      <p>
        If you have any feedback or spot a bug you can reach me{' '}
        <a href="mailto:wesleylim.work@gmail.com">here</a>!
      </p>
      <footer style={{ position: 'absolute', bottom: '5vh' }}>
        {' '}
        <small>&copy; Copyright 2021, Wesley Lim</small>{' '}
      </footer>
    </VerticalSection>
  );
};

export default Contact;
