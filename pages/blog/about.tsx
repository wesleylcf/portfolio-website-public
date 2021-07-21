import React from 'react';
import About from '../../containers/blog/About/About';
import Head from 'next/head';

const index = ({ isDarkMode }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Wesley Lim's blog - All about me, my accomplishments, and my aspirations for the future"
        />
        <meta
          name="keywords"
          content="Wesley Lim blog, software engineer, React, Singapore, NTU, computer science, projects, blog, about me"
        />
      </Head>
      <About darkMode={isDarkMode} />
    </>
  );
};

export default index;
