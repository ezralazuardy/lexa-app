import { MAX_RESULTS } from "@/components/web-search";
import { TavilyClient } from "@agentic/tavily";
import { tool } from "ai";
import { z } from "zod";

const tavily = new TavilyClient();

export const webSearch = tool({
  description:
    "If user explicitly needs to search information on the web/internet, use this tool to supply the information. Otherwise, don't use this tool.",
  parameters: z.object({
    query: z.string(),
  }),
  execute: async ({ query }) => {
    return await tavily.search({
      query: query,
      include_images: true,
      max_results: MAX_RESULTS,
    });
  },
});
