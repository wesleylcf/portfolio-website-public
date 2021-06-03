import React from 'react';
import StyledLink from '../StyledLink/StyledLink';

const Links = () => {
  return (
    <>
      <StyledLink url="/about" content="About" />
      <StyledLink url="/projects" content="Projects" />
      <StyledLink url="/experience" content="Experience" />
      <StyledLink url="/contact" content="Contact" />
    </>
  );
};

export default Links;
