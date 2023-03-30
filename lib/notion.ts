import { Client } from "@notionhq/client";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  created: string;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (process.env.NOTION_DATABASE_ID === undefined) {
    throw new Error("Notion database ID is not defined.");
  }
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      date: {
        is_not_empty: true,
      },
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
  });
  const blogPosts: BlogPost[] = response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Name.title[0].plain_text,
    slug: page.properties.Slug.rich_text[0].plain_text,
    created: formatDate(page.properties.Published.date.start),
  }));
  return blogPosts;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 3600 * 24));
  if (days == 0) return "Today";
  else if (days == 1) return "Yesterday";
  else if (days < 7) return `${days} days ago`;
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

const { NotionToMarkdown } = require("notion-to-md");
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPost = async (slug: string) => {
  if (process.env.NOTION_DATABASE_ID === undefined) {
    throw new Error("Notion database ID is not defined.");
  }
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page: any = response.results[0];
  const metadata: BlogPost = {
    id: page.id,
    slug: page.properties.Slug.rich_text[0].plain_text,
    title: page.properties.Name.title[0].plain_text,
    created: formatDate(page.properties.Published.date.start),
  };
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata: metadata,
    content: mdString,
  };
};
