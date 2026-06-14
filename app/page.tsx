import Link from "next/link";
import { Footer } from "@/components/footer";
import { HighlightCard } from "@/components/case-card";
import { Nav } from "@/components/nav";
import { Section } from "@/components/section";
import { claudeTrack, home, industries, site } from "@/lib/content";

const metricBars = ["w-[42%]", "w-[58%]", "w-[72%]", "w-[88%]"];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <section className="py-12 sm:py-16">
          <p className="inline-flex border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
            {site.version}
          </p>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            {home.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {home.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700 sm:text-xl sm:leading-9">
            {home.heroSubtitle}
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {home.metrics.map((metric, index) => (
              <div className="bg-white p-5" key={metric.label}>
                <p className="text-3xl font-semibold tracking-tight text-neutral-950">
                  {metric.value}
                </p>
                <div className="mt-4 h-1.5 w-full bg-neutral-100">
                  <div className={`h-full bg-slate-500 ${metricBars[index]}`} />
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-medium !text-white transition hover:bg-neutral-800"
              href="/work"
            >
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
          <div className="mt-7 border-t border-neutral-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
              At a glance
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {home.proof.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section
          className="pt-8 sm:pt-10"
          intro="My product work has moved across industries where platforms, operations, partners, and customer experience all have to work together."
          title="Industries I’ve worked across"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                className="rounded-sm border border-neutral-200 p-5"
                key={industry.title}
              >
                <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
                  {industry.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {industry.body}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="border-t border-neutral-200 py-8 sm:py-10">
          <article className="rounded-sm border border-slate-200 bg-slate-50/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                  {claudeTrack.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-neutral-950">
                  {claudeTrack.title}
                </h2>
              </div>
              <p className="text-sm font-semibold text-neutral-950">
                {claudeTrack.metric}
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
              {claudeTrack.body}
            </p>
          </article>
        </section>

        <Section
          className="pt-8 sm:pt-10"
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

        <section className="border-t border-neutral-200 py-10 sm:py-12">
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
