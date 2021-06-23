import React from 'react';
import Posts from '../../../containers/blog/Posts/Posts';
import getPosts from '../../api/posts/getPosts';

const index = ({ posts, isDarkMode }) => {
  return (
    <>
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
