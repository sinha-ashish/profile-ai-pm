import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Ashish Sinha's professional profile: role, location, advisory focus, and key links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Ashish Sinha",
      jobTitle: "Enterprise AI Product Leader & Strategic Advisor",
      location: "Paris, France",
      summary:
        "Strategic advisor and enterprise AI product leader. Arbitrage judgement on what to build, what to kill, and what to sequence — grounded in 9 years shipping enterprise AI, €30M portfolio governance, and 15+ GenAI use cases in production.",
      focus: [
        "Advisory & arbitrage judgement on enterprise AI portfolios",
        "Deciding what not to build (scope, risk, run-cost)",
        "GenAI governance and EU AI Act alignment",
        "Enterprise AI delivery from prototype to production",
      ],
      links: {
        website: "https://ai-product-paris.lovable.app/",
        linkedin: "https://www.linkedin.com/in/sinha-ashish/",
        resume: "https://rxresu.me/five.summers/senior-product-manager",
        studio: {
          baselineAi: "https://baseline-ai-psi.lovable.app/",
          horizonGtm: "https://horizon-gtm.lovable.app/",
          semanticReconciliationEngine: "https://the-semantic-reconciliation-engine.lovable.app/",
        },
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
