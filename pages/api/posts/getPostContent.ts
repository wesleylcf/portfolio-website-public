import { Client } from "@notionhq/client";
import { Block } from "@notionhq/client/build/src/api-types";
import { id } from "date-fns/locale";

const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export type Annotation = Array<string | boolean | unknown>;

export interface PageBlock {
  type: Block["type"] | "line_spacing" | "code" | "image";
  content?: string;
  link?: string | null;
  href?: string | null;
  annotations?: Annotation[];
  indentLevel: number;
}

async function getBlock(blockId, indentationLevel) {
  const blocks = await notion.blocks.children.list({ block_id: blockId });
  let content = [];
  for (let block of blocks.results) {
    let child = null;
    let blocks = [];
    if (block.type === "unsupported") {
      blocks.push({ type: "unsupported" });
      //@ts-ignore
    } else if (block.type === "image") {
      //@content stores caption, @link stores url
      blocks.push({
        type: "image",
        //@ts-ignore
        content: block.image.caption[0].plain_text,
        //@ts-ignore
        link: block.image.file.url,
      });
      //@ts-ignore
    } else if (block.type === "code") {
      blocks.push({
        type: "code",
        //@ts-ignore
        content: block.code.text[0].plain_text,
      });
    } else if (block[`${block.type}`].text.length === 0) {
      blocks.push({ type: "line_spacing" });
    }
    // text-type blocks such as heading and paragraphs can be processed in a similar way
    else {
      for (let textBlock of block[block.type].text) {
        blocks.push({
          type: block.type,
          content: textBlock.plain_text,
          //@ts-ignore
          link: textBlock.text.link,
          annotations: Object.entries(textBlock.annotations).filter(
            ([key, value]) => {
              if (value !== false && value !== "default") {
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
    if (block.has_children)
      child = await getBlock(block.id, indentationLevel + 1);
    if (child) {
      for (let block of child) {
        content.push(block);
      }
    }
    content.push(blocks);
  }
  return content;
}

export default async function getPostContent(name) {
  const db_rowArray = await notion.databases
    .query({ database_id: databaseId })
    .then((res) => res.results);
  let pageId = null;
  let rowTitleObject = null;
  for (let i = 0; i < db_rowArray.length; i++) {
    rowTitleObject = db_rowArray[i].properties.name["title"][0];
    if (rowTitleObject.plain_text === name)
      pageId = rowTitleObject.mention.page.id;
  }
  if (pageId === null) return null;
  const pageContent = await getBlock(pageId, 0);
  return pageContent;
}
