"use server";

import { TavilyClient } from "@agentic/tavily";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MAX_RESULTS, type WebSearchProps } from "./web-search";

const tavily = new TavilyClient();

interface WebSearchResultItemProps {
  url: string;
  title: string;
  content: string;
  raw_content?:
    | string
    /** The relevance score of the search result. */
    | undefined;
  score: string;
}

interface WebSearchResultProps {
  results: Array<WebSearchResultItemProps>;
  query: string;
  answer?:
    | string
    /** A list of query related image urls. */
    | undefined;
  images?:
    | string[]
    /** A list of suggested research follow up questions related to original query. */
    | undefined;
  follow_up_questions?:
    | string[]
    /** How long it took to generate a response. */
    | undefined;
  response_time: string;
}

export const WebSearchResult = async ({ query }: WebSearchProps) => {
  try {
    const data: WebSearchResultProps = await tavily.search({
      query: query,
      include_images: true,
      max_results: MAX_RESULTS,
    });
    return (
      <div className="grid grid-cols-1 gap-4">
        {data.results.map((item: WebSearchResultItemProps, index) => (
          <Link
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 bg-background hover:bg-neutral-200 cursor-pointer border rounded-xl w-fit flex flex-row gap-3 items-start"
          >
            <div className="relative aspect-square size-16 rounded-l-xl">
              <Image
                alt={item.title}
                src={data.images ? data.images[index] : ""}
                width={200}
                height={200}
                className="absolute z-20 inset-0 object-cover size-full rounded-l-xl bg-neutral-800"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute z-10 inset-0 flex items-center justify-center bg-neutral-800 rounded-l-xl">
                <Globe className="size-7 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col text-left h-full justify-center items-center px-2 max-w-sm">
              <h3 className="font-medium text-sm line-clamp-2 text-ellipsis">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch web search results", error);
    return "Error fetching web search results.";
  }
};
