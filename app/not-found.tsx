"use client";

import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent">
        404
      </div>
      <h1 className={`size-4 text-xl font-regular ${Open_Sans.className}`}>
        Something&apos;s Missing
      </h1>
      <p className="text-md font-light text-neutral-600">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mt-12 flex justify-center gap-4">
        <Button onClick={() => router.back()} variant="default" size="lg">
          Go back
        </Button>
        <Button onClick={() => router.push("/")} variant="ghost" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
