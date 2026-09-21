"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Bio paragraphs are long — fine on desktop, but a lot to scroll past on
 * mobile. Below `sm`, collapse to a fixed height with a fade-out and a
 * Read more/less toggle; at `sm` and up, always show the full text.
 */
export function FounderBio({ paragraphs }: { paragraphs: string[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={cn(
          "space-y-4 text-justify text-muted-foreground",
          !expanded && "relative max-h-48 overflow-hidden sm:max-h-none"
        )}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent sm:hidden" />
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-3 text-sm font-semibold text-orange-600 hover:text-orange-500 sm:hidden"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
