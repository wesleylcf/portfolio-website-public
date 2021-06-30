import { Client } from '@notionhq/client';
import { Block } from '@notionhq/client/build/src/api-types';

const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export type Annotation = Array<string | boolean | unknown>;

export interface PageBlock {
  type: Block['type'] | 'line_spacing' | 'code';
  content?: string;
  link?: string | null;
  href?: string | null;
  annotations?: Annotation[];
}

async function getBlock(blockId, isCodeBlock) {
  let isCode = isCodeBlock;
  const blocks = await notion.blocks.children.list({ block_id: blockId });
  let result = [];
  for (let block of blocks.results) {
    let blocks = [];
    if (block.type === 'unsupported') {
      blocks.push({ type: 'unsupported' });
    } else if (block[`${block.type}`].text.length === 0) {
      blocks.push({ type: 'line_spacing' });
    } else if (!block.has_children) {
      for (let textBlock of block[block.type].text) {
        blocks.push({
          type: isCode ? 'code' : block.type,
          content: isCode ? textBlock.plain_text : textBlock.plain_text,
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
    } else {
      if (isCode) {
        const child = await getBlock(block.id, true);
        blocks = child[0];
      } else {
        const child = await getBlock(block.id, false);
        blocks.push(child);
      }
    }
    result.push(blocks);
    isCode = block.type === 'unsupported' ? true : false;
  }
  return result;
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
  const pageId = rowData.results[0].properties.name['title'][0].mention.page.id;
  const pageContent = await getBlock(pageId, false);
  return pageContent;
}
