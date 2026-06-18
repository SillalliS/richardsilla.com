import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-neutral-500">
          {site.name} · Senior Product Leader
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            className="transition hover:text-neutral-950"
            href={site.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="transition hover:text-neutral-950"
            href={`mailto:${site.email}`}
          >
            Email
          </a>
          {site.resume.visible ? (
            <a
              className="transition hover:text-neutral-950"
              href={site.resume.href}
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
