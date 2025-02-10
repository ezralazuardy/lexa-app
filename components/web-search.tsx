import equal from "fast-deep-equal";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

export const MAX_RESULTS = 4;

export interface WebSearchResultItemProps {
  url: string;
  title: string;
  content: string;
  raw_content?:
    | string
    /** The relevance score of the search result. */
    | undefined;
  score: string;
}

export interface WebSearchResultProps {
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

const WebSearchCallContainer = () => {
  return (
    <div className="flex flex-col gap-4 text-muted-foreground animate-pulse pt-1">
      Searching on the web...
    </div>
  );
};

export const WebSearchCall = memo(WebSearchCallContainer, () => true);

const WebSearchResultContainer = ({
  result,
}: {
  result: WebSearchResultProps;
}) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {result.results.map((item: WebSearchResultItemProps, index) => (
        <Link
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 bg-background hover:bg-neutral-200 cursor-pointer border rounded-xl w-full max-w-md flex flex-row gap-3 items-start"
        >
          <div className="relative aspect-square size-16 rounded-l-xl">
            <Image
              alt={item.title}
              src={result.images ? result.images[index] : ""}
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
          <div className="flex flex-col text-left h-full justify-center items-center px-2">
            <h3 className="font-medium text-sm line-clamp-2 text-ellipsis">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const WebSearchResult = memo(
  WebSearchResultContainer,
  (prevProps, nextProps) => {
    if (!equal(prevProps.result, nextProps.result)) return false;
    return true;
  },
);
