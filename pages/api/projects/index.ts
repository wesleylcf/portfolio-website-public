import { Client } from "@notionhq/client";

export interface Project {
  title: string;
  tags: string;
  description: string;
  link: string;
  showcaseLink?: string;
}

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;

export default async function getProjects(maxItems) {
  const MAX_ITEMS_PER_VIEW = maxItems;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "name", direction: "descending" }],
  });
  const projects: Project[] = [];
  let itemsAdded = 0;
  for (let project of response.results) {
    if (itemsAdded === MAX_ITEMS_PER_VIEW) {
      break;
    }
    projects.push({
      title: project.properties.name["title"][0].plain_text,
      tags: project.properties.tags["rich_text"][0].plain_text,
      description: project.properties.description["rich_text"][0].plain_text,
      link: project.properties.link["rich_text"][0].plain_text,
      showcaseLink:
        project.properties.showcaseLink["rich_text"].length > 0
          ? project.properties.showcaseLink["rich_text"][0].plain_text
          : null,
    });
    itemsAdded += 1;
  }
  return projects;
}
