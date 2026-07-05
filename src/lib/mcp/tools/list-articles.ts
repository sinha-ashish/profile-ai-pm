import { defineTool } from "@lovable.dev/mcp-js";
import { articles } from "@/lib/articles";

export default defineTool({
  name: "list_articles",
  title: "List articles",
  description: "List all articles written by Ashish Sinha on ai-product-paris, with slug, title, publish date, and reading time.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      isoDate: a.isoDate,
      dateLabel: a.dateLabel,
      readingTime: a.readingTime,
      url: `https://ai-product-paris.lovable.app/writing/${a.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items },
    };
  },
});
