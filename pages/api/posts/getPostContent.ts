import { Client } from '@notionhq/client';
import { Block } from '@notionhq/client/build/src/api-types';

const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export type Annotation = Array<string | boolean | unknown>;

export interface PageBlock {
  type: Block['type'] | 'line_spacing' | 'code' | 'image';
  content?: string;
  link?: string | null;
  href?: string | null;
  annotations?: Annotation[];
  indentLevel: number;
}

async function getBlock(
  blockId,
  type = null,
  isPreviousBlockUnsupported,
  indentationLevel
) {
  const blocks = await notion.blocks.children.list({ block_id: blockId });
  let result = [];
  for (let block of blocks.results) {
    let child = null;
    let blocks = [];
    if (block.type === 'unsupported') {
      blocks.push({ type: 'unsupported' });
      isPreviousBlockUnsupported = true;
    } else if (block[`${block.type}`].text.length === 0) {
      blocks.push({ type: 'line_spacing' });
    } else {
      // Push the current block's content
      for (let textBlock of block[block.type].text) {
        blocks.push({
          type: type ? type : block.type,
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
          indentLevel: indentationLevel,
          hasChildren: block.has_children,
        });
      }
    }
    // if there are children or unsupported blocks
    if (block.has_children) {
      if (isPreviousBlockUnsupported) {
        switch (block[block.type].text[0].plain_text) {
          case 'code':
            child = await getBlock(
              block.id,
              'code',
              isPreviousBlockUnsupported,
              indentationLevel
            );
            break;
          case 'image':
            child = await getBlock(
              block.id,
              'image',
              isPreviousBlockUnsupported,
              indentationLevel
            );
            break;
          default:
            child = { type: 'error' };
        }
        blocks = child[0];
      } else {
        child = await getBlock(
          block.id,
          null,
          isPreviousBlockUnsupported,
          indentationLevel + 1
        );
      }
    }
    result.push(blocks);
    if (child && !isPreviousBlockUnsupported) {
      for (let block of child) {
        result.push(block);
      }
    }
    isPreviousBlockUnsupported = block.type === 'unsupported' ? true : false;
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
  const pageContent = await getBlock(pageId, null, false, 0);
  return pageContent;
}
