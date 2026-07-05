import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Ashish Sinha's professional profile: role, location, focus areas, and key links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Ashish Sinha",
      jobTitle: "Enterprise AI Product Leader",
      location: "Paris, France",
      summary:
        "Senior AI Product Leader. 9 years scaling enterprise AI from prototype to production. €30M portfolio governance, 15+ GenAI use cases shipped.",
      focus: [
        "Enterprise AI delivery",
        "GenAI governance",
        "Product strategy for AI squads",
      ],
      links: {
        website: "https://ai-product-paris.lovable.app/",
        linkedin: "https://www.linkedin.com/in/sinha-ashish/",
        resume: "https://rxresu.me/five.summers/senior-product-manager",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
