import { defineMcp } from "@lovable.dev/mcp-js";
import listArticlesTool from "./tools/list-articles";
import getArticleTool from "./tools/get-article";
import getProfileTool from "./tools/get-profile";

export default defineMcp({
  name: "ashish-sinha-mcp",
  title: "Ashish Sinha — AI Product Leader",
  version: "0.1.0",
  instructions:
    "Read-only tools for Ashish Sinha's site (ai-product-paris.lovable.app). Use `get_profile` for bio and links, `list_articles` to enumerate writing, and `get_article` to fetch a full article by slug.",
  tools: [listArticlesTool, getArticleTool, getProfileTool],
});
