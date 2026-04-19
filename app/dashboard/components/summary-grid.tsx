import type { ComponentType } from "react";
import { AnimatedMetricValue } from "./animated-metric-value";

type SummaryCard = {
  title: string;
  value: string;
  detail: string;
  tone: string;
  icon: ComponentType;
};

type SummaryGridProps = {
  cards: SummaryCard[];
};

export function SummaryGrid({ cards }: SummaryGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard key={card.title} {...card} />
      ))}
    </div>
  );
}

function shouldAnimateValue(value: string) {
  return /^-?\d+(?:[.,]\d+)?$/.test(value);
}

function SummaryCard({ title, value, detail, tone, icon: Icon }: SummaryCard) {
  return (
    <article className="rounded-[1.5rem] border border-white/6 bg-[linear-gradient(180deg,rgba(20,36,48,0.92),rgba(17,31,42,0.9))] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tone}`}
        >
          <Icon />
        </div>

        <div className="min-w-0">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {title}
          </p>
          <p className="mt-1 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
            {shouldAnimateValue(value) ? (
              <AnimatedMetricValue value={value} />
            ) : (
              value
            )}
          </p>
          <p className="mt-1.5 text-sm text-slate-500">{detail}</p>
        </div>
      </div>
    </article>
  );
}
