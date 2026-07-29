"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav-links";
import { SITE } from "@/constants/site";
import { Button } from "@/components/ui/button";

// Scrolls to the section smoothly without ever putting a "#" in the address bar.
function useAnchorClick(href: string) {
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
  const handleContactClick = useAnchorClick("/#contact");

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          {SITE.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-orange-600 text-white hover:bg-orange-500">
            <Link href="/#contact" onClick={handleContactClick}>
              Let&apos;s Talk
            </Link>
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
            <Link
              href="/#contact"
              onClick={(event) => {
                handleContactClick(event);
                setOpen(false);
              }}
            >
              Let&apos;s Talk
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
