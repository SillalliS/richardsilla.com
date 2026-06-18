import Link from "next/link";
import { site } from "@/lib/content";

type ActionLinksProps = {
  currentPage?: "home" | "work" | "how-i-think";
  className?: string;
};

const activeClass = "button-primary bg-neutral-950 !text-white";
const inactiveClass = "button-secondary";

export function ActionLinks({
  className = "",
  currentPage = "home",
}: ActionLinksProps) {
  const isHome = currentPage === "home";
  const isWork = currentPage === "work";
  const isHowIThink = currentPage === "how-i-think";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link className={isHome || isWork ? activeClass : inactiveClass} href="/work">
        {isHome ? "View Work" : "Work"}
      </Link>
      <Link
        className={isHowIThink ? activeClass : inactiveClass}
        href="/how-i-think"
      >
        How I Think
      </Link>
      <a
        className="button-secondary"
        href={site.linkedin}
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
      <a className="button-secondary" href={`mailto:${site.email}`}>
        Email
      </a>
    </div>
  );
}
