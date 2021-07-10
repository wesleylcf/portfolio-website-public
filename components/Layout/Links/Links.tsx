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
  onClickMenu?: () => void;
}

const Links: React.FC<LinkProps> = ({
  darkMode,
  isMobile,
  navLinks,
  linkInitialAnimateDelay,
  linkAnimateDelayIncrement,
  atPage,
  onClickMenu,
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
              <ImportantButton
                href={link.linkTo}
                darkMode={darkMode}
                isMobile={isMobile}
              >
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
            darkMode={darkMode}
            onClickMenu={onClickMenu}
          />
        );
      })}
    </>
  );
};

export default Links;
