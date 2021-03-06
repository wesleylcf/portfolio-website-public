import React from 'react';
import About from '../../containers/blog/About/About';
import Head from 'next/head';

const index = ({ isDarkMode }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          property="description"
          content="Wesley Lim Cher Fong's blog - About me, my accomplishments, and my aspirations for the future"
        />
        <meta
          name="keywords"
          content="Wesley Lim, blog, wesley lim cher fong, ntu, nanyang technological university, software engineer, computer science, Singapore"
        />
      </Head>
      <About darkMode={isDarkMode} />
    </>
  );
};

export default index;
