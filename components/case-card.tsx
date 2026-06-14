type HighlightCardProps = {
  blurb: string;
  metric?: string;
  title: string;
};

type WorkCaseCardProps = {
  context: string;
  decision: string;
  outcome: string;
  title: string;
};

export function HighlightCard({ blurb, metric, title }: HighlightCardProps) {
  return (
    <article className="rounded-sm border border-neutral-200 p-6">
      <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-neutral-600">{blurb}</p>
      {metric ? (
        <p className="mt-6 text-sm font-semibold text-neutral-950">{metric}</p>
      ) : null}
    </article>
  );
}

export function CaseCard({
  context,
  decision,
  outcome,
  title,
}: WorkCaseCardProps) {
  return (
    <article className="border-t border-neutral-200 py-10 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>
      <dl className="mt-7 grid gap-6 lg:grid-cols-3">
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
            Context
          </dt>
          <dd className="mt-3 text-base leading-7 text-neutral-600">
            {context}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
            Decision
          </dt>
          <dd className="mt-3 text-base leading-7 text-neutral-600">
            {decision}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
            Outcome
          </dt>
          <dd className="mt-3 text-base leading-7 text-neutral-600">
            {outcome}
          </dd>
        </div>
      </dl>
    </article>
  );
}
