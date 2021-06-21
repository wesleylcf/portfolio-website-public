import React from 'react';
import Posts from '../../../containers/blog/Posts/Posts';

const index = () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  (async () => {
    const blockId = '16d8004e5f6a42a6981151c22ddada12';
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
    console.log(response);
  })();
  return <div></div>;
};

export default index;
