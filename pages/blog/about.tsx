import React from 'react';
import About from '../../containers/blog/About/About';

const index = ({ isDarkMode }) => {
  return (
    <>
      <About darkMode={isDarkMode} />
    </>
  );
};

export default index;
