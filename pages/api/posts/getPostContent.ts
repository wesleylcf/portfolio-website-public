import { Client } from '@notionhq/client';
import { Block } from '@notionhq/client/build/src/api-types';

const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

const BASE_NOTION_URL_LENGTH = 22;

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export type Annotation = Array<string | boolean | unknown>;

export interface PageBlock {
  type: Block['type'] | 'line_spacing';
  content?: string;
  link?: string | null;
  href?: string | null;
  annotations?: Annotation[];
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
  let pageContent: PageBlock[][] = [];
  for (let block of blocks.results) {
    let pageBlock: PageBlock[] = [];
    if (block[`${block.type}`].text.length === 0) {
      pageBlock.push({ type: 'line_spacing' });
    } else {
      for (let textBlock of block[`${block.type}`].text) {
        pageBlock.push({
          type: block.type,
          content: textBlock.plain_text,
          link: textBlock.text.link,
          annotations: Object.entries(textBlock.annotations).filter(
            ([key, value]) => {
              if (value !== false && value !== 'default') {
                return { key, value };
              }
            }
          ),
          href: textBlock.href,
        });
      }
    }
    pageContent.push(pageBlock);
  }
  console.log(pageContent);
  return pageContent;
}
