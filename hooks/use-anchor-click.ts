"use client";

import { usePathname } from "next/navigation";
import { type MouseEvent } from "react";

export function useAnchorClick(href: string) {
  const pathname = usePathname();

  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    if (href === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const hash = href.split("#")[1];
    const target = hash ? document.getElementById(hash) : null;
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
}
