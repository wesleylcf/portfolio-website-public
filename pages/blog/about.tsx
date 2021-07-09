import React from 'react';
import About from '../../containers/blog/About/About';

const index = ({ isDarkMode, isMobile }) => {
  return (
    <>
      <About darkMode={isDarkMode} isMobile={isMobile} />
    </>
  );
};

export default index;
