import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function getPage(req, res) {
  const name = req.query.name.replaceAll('-', ' ');

  console.log(name);
  const rowData = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'name',
      text: {
        contains: name,
      },
    },
  });
  const pageId = rowData.results[0].properties.link['rich_text'][0].plain_text;
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  console.log('------------');
  const pageContent = blocks.results.map((block) => {
    if (block[`${block.type}`].text.length === 0) {
      return { type: 'line_space' };
    }
    return {
      blockId: block.id,
      type: block.type,
      content:
        block[`${block.type}`].text.length !== 0
          ? block[`${block.type}`].text[0].plain_text
          : '',
      createdAt: block.created_time.substring(0, 10),
    };
  });
  res.status(200).send(pageContent);
}
