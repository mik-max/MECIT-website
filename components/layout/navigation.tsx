"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav-links";
import { SITE } from "@/constants/site";
import { IMAGES } from "@/constants/images";
import { Button } from "@/components/ui/button";
import { useAnchorClick } from "@/hooks/use-anchor-click";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const handleAnchorClick = useAnchorClick(href);

  return (
    <Link
      href={href}
      onClick={(event) => {
        handleAnchorClick(event);
        onClick?.();
      }}
      className="group relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label={SITE.legalName} className="flex items-center">
          <Image
            src={IMAGES.logo}
            alt={SITE.legalName}
            width={1080}
            height={804}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-orange-600 text-white hover:bg-orange-500">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setOpen(false)}
            />
          ))}
          <Button asChild className="mt-2 bg-orange-600 text-white hover:bg-orange-500">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
