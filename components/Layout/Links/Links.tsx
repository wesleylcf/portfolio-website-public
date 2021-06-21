import React from 'react';
import StyledLink from '../../buttons/StyledLink/StyledLink';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';
import Animate from '../Animate/Animate';

interface LinkProps {
  darkMode: boolean;
  isMobile: boolean;
  navLinks: { linkTo: string; content: string; button?: boolean }[];
  linkInitialAnimateDelay?: number;
  linkAnimateDelayIncrement?: number;
  atPage: string;
}

const Links: React.FC<LinkProps> = ({
  darkMode,
  isMobile,
  navLinks,
  linkInitialAnimateDelay,
  linkAnimateDelayIncrement,
  atPage,
}) => {
  let delay = linkInitialAnimateDelay;

  return (
    <>
      {navLinks.map((link, index) => {
        delay += linkAnimateDelayIncrement;
        if (link.button) {
          return (
            <Animate
              delay={isMobile ? 0 : delay}
              key={atPage === '/blog' ? 'blog' + index : index}
            >
              <ImportantButton href={link.linkTo} darkMode={darkMode}>
                {link.content}
              </ImportantButton>
            </Animate>
          );
        }
        return (
          <StyledLink
            linkTo={link.linkTo}
            content={link.content}
            isMobile={isMobile}
            animationDelay={isMobile ? 0 : delay}
            key={atPage === '/blog' ? 'blog' + index : index}
          />
        );
      })}
    </>
  );
  // return (
  //   <>
  //     <StyledLink
  //       linkTo="#about"
  //       content="About"
  //       isMobile={isMobile}
  //       animationDelay={isMobile ? 0 : 0.2}
  //     />

  //     <StyledLink
  //       linkTo="#projects"
  //       content="Projects"
  //       isMobile={isMobile}
  //       animationDelay={isMobile ? 0 : 0.35}
  //     />

  //     <StyledLink
  //       linkTo="#experience"
  //       content="Experience"
  //       isMobile={isMobile}
  //       animationDelay={isMobile ? 0 : 0.5}
  //     />

  //     <StyledLink
  //       linkTo="#contact"
  //       content="Contact"
  //       isMobile={isMobile}
  //       animationDelay={isMobile ? 0 : 0.65}
  //     />

  //   </.>
  // );
};

export default Links;
