import Link from "next/link";
import { Footer } from "@/components/footer";
import { HighlightCard } from "@/components/case-card";
import { Nav } from "@/components/nav";
import { Section } from "@/components/section";
import { home, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <section className="py-16 sm:py-24">
          <p className="inline-flex border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
            {site.version}
          </p>
          <p className="mt-10 text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            {home.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {home.heroTitle}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-700 sm:text-xl sm:leading-9">
            {home.heroSubtitle}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg">
            {home.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="button-primary" href="/work">
              View Work
            </Link>
            <Link className="button-secondary" href="/how-i-think">
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
        </section>

        <Section title="Proof Points">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.proof.map((item) => (
              <li
                className="border-t border-neutral-200 pt-4 text-base leading-7 text-neutral-700"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Operating Impact">
          <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {home.metrics.map((metric) => (
              <div className="bg-white p-6" key={metric.label}>
                <p className="text-4xl font-semibold tracking-tight text-neutral-950">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          intro="Selected examples of product judgment across AI, operations, platforms, and marketplaces."
          title="Selected Work"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {home.highlights.map((item) => (
              <HighlightCard
                blurb={item.blurb}
                key={item.title}
                metric={item.metric}
                title={item.title}
              />
            ))}
          </div>
        </Section>

        <section className="border-t border-neutral-200 py-16 sm:py-20">
          <p className="max-w-3xl text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Built as a dogfood version. Shipped first, improved through
            feedback.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
