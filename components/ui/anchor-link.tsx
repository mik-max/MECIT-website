"use client";

import Link from "next/link";
import { useAnchorClick } from "@/hooks/use-anchor-click";

/**
 * Drop-in replacement for Next.js <Link> that smoothly scrolls to
 * anchor sections on the home page without putting "#" in the URL bar.
 */
export function AnchorLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = useAnchorClick(href);

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
