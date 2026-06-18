import { ActionLinks } from "@/components/action-links";
import { CaseCard } from "@/components/case-card";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { workItems } from "@/lib/content";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            Work
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Product leadership across AI, platforms, marketplaces, and global
            experiences.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            These are representative examples of how I frame product work:
            understand the operating system, choose the leverage point, and
            drive measurable outcomes through teams and platforms.
          </p>
        </header>
        <ActionLinks className="mt-8" currentPage="work" />

        <div className="mt-16">
          {workItems.map((item) => (
            <CaseCard
              context={item.context}
              decision={item.decision}
              key={item.title}
              outcome={item.outcome}
              title={item.title}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
