export type NavLink = {
  label: string;
  href: string;
};

// Hrefs point at anchors on the home page for now (single-page layout).
// Swap a href back to its route (e.g. "/about") once that section gets its own dedicated page.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#service" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];
