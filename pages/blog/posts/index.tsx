import React from 'react';
import Posts from '../../../containers/blog/Posts/Posts';
import getPosts from '../../api/posts/getPosts';
import Head from 'next/head';

const index = ({ posts, isDarkMode }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          property="description"
          content="Wesley Lim's Blog posts - I write about technologies that interest me, and occasionally pen down my thoughts."
        />
        <meta
          name="keywords"
          content="Wesley Lim, wesley lim cher fong, blog posts, NTU, nanyang technological university, software engineer, Singapore, computer science"
        />
      </Head>
      <Posts posts={posts} darkMode={isDarkMode} />
    </>
  );
};

export async function getStaticProps(context) {
  const posts = await getPosts();
  return {
    props: { posts: posts },
  };
}

export default index;
