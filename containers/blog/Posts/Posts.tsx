import React from 'react';

const Posts = () => {
  return <div></div>;
};

export async function getStaticProps(context) {
  const db = fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`
  );
  console.log(db);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Posts;
