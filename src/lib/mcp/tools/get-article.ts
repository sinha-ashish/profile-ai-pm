import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getArticle } from "@/lib/articles";

export default defineTool({
  name: "get_article",
  title: "Get article",
  description: "Fetch the full text of a single article by its slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Article slug, e.g. '80-40-rule'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const a = getArticle(slug);
    if (!a) {
      return {
        content: [{ type: "text", text: `No article found with slug "${slug}".` }],
        isError: true,
      };
    }
    const body = a.paragraphs.join("\n\n");
    const text = `# ${a.title}\n\n_${a.dateLabel} · ${a.readingTime}_\n\n${body}`;
    return {
      content: [{ type: "text", text }],
      structuredContent: {
        slug: a.slug,
        title: a.title,
        isoDate: a.isoDate,
        dateLabel: a.dateLabel,
        readingTime: a.readingTime,
        paragraphs: a.paragraphs,
        url: `https://ai-product-paris.lovable.app/writing/${a.slug}`,
      },
    };
  },
});
