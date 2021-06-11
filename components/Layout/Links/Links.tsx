import React from 'react';
import StyledLink from '../../buttons/StyledLink/StyledLink';
import ImportantButton from '../../buttons/ImportantButton/ImportantButton';

const Links = ({ darkMode }) => {
  return (
    <>
      <StyledLink url="/about" content="About" />
      <StyledLink url="/projects" content="Projects" />
      <StyledLink url="/experience" content="Experience" />
      <StyledLink url="/contact" content="Contact" />
      <div style={{ margin: '1vh 2vw' }}>
        <ImportantButton href="/blog" darkMode={darkMode}>
          Blog
        </ImportantButton>
      </div>
    </>
  );
};

export default Links;
