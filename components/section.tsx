type SectionProps = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  intro?: string;
  title?: string;
};

export function Section({
  children,
  className = "",
  eyebrow,
  intro,
  title,
}: SectionProps) {
  return (
    <section className={`border-t border-neutral-200 py-10 sm:py-12 ${className}`}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
