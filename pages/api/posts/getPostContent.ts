import { Client } from '@notionhq/client';
import { Block } from '@notionhq/client/build/src/api-types';

const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

const BASE_NOTION_URL_LENGTH = 22;

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export interface PageBlock {
  type: string;
  content: string;
}

export default async function getPostContent(name) {
  const rowData = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'name',
      text: {
        contains: name,
      },
    },
  });

  const pageId = rowData.results[0].properties.name['title'][0].href.substring(
    BASE_NOTION_URL_LENGTH
  );
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  let pageContent: PageBlock[] = [];
  for (let block of blocks.results) {
    let pageBlock;
    if (block[`${block.type}`].text.length === 0) {
      pageBlock = { type: 'line_spacing' };
    } else {
      pageBlock = {
        type: block.type,
        content: block[`${block.type}`].text[0].plain_text,
      };
    }
    pageContent.push(pageBlock);
  }
  return pageContent;
}
