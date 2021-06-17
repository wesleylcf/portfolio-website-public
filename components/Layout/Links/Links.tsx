import React from 'react';
import StyledLink from '../../buttons/StyledLink/StyledLink';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Animate from '../Animate/Animate';

const Links = ({ darkMode, isMobile }) => {
  return (
    <>
      <StyledLink
        url="#about"
        content="About"
        isMobile={isMobile}
        animationDelay={isMobile ? 0 : 0.2}
      />

      <StyledLink
        url="#projects"
        content="Projects"
        isMobile={isMobile}
        animationDelay={isMobile ? 0 : 0.35}
      />

      <StyledLink
        url="#experience"
        content="Experience"
        isMobile={isMobile}
        animationDelay={isMobile ? 0 : 0.5}
      />

      <StyledLink
        url="#contact"
        content="Contact"
        isMobile={isMobile}
        animationDelay={isMobile ? 0 : 0.65}
      />

      <Animate delay={isMobile ? 0 : 0.8}>
        <ImportantButton href="/blog" darkMode={darkMode}>
          Blog
        </ImportantButton>
      </Animate>
    </>
  );
};

export default Links;
