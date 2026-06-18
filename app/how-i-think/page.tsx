import { ActionLinks } from "@/components/action-links";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { thinkingSections } from "@/lib/content";

export default function HowIThinkPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            How I Think
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Product work is decision work.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            I look for the operating logic behind the feature request: the
            incentives, constraints, data, workflow, and platform leverage that
            determine whether a product decision can scale.
          </p>
        </header>
        <ActionLinks className="mt-8" currentPage="how-i-think" />

        <div className="mt-16 border-t border-neutral-200">
          {thinkingSections.map((section, index) => (
            <section
              className="grid gap-5 border-b border-neutral-200 py-10 lg:grid-cols-[160px_1fr]"
              key={section.title}
            >
              <p className="text-sm font-medium text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                  {section.body}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
