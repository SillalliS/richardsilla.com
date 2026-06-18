import Link from "next/link";
import { site } from "@/lib/content";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How I Think", href: "/how-i-think" },
  { label: "Work", href: "/work" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <Link
          className="text-sm font-semibold tracking-tight text-neutral-950"
          href="/"
        >
          {site.shortName}
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-neutral-600">
          {navItems.map((item) => (
            <Link className="transition hover:text-neutral-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            className="transition hover:text-neutral-950"
            href={`mailto:${site.email}`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
