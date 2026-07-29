import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav-links";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            {SITE.description}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative overflow-hidden border-t">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-4xl leading-none font-black tracking-tight whitespace-nowrap text-[#DBDADB] select-none sm:left-1/3 sm:translate-x-0 sm:text-5xl md:text-6xl lg:text-8xl"
          >
            {SITE.name}
          </span>
          <p className="relative z-10">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="relative z-10">{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
