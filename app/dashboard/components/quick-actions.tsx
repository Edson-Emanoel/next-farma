import type { ComponentType } from "react";
import Link from "next/link";

type QuickAction = {
  label: string;
  description: string;
  tone: string;
  icon: ComponentType;
  href: string;
};

type QuickActionsProps = {
  actions: QuickAction[];
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Ações rápidas
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {actions.map((action) => (
          <QuickActionCard key={action.label} {...action} />
        ))}
      </div>
    </section>
  );
}

function QuickActionCard({
  label,
  description,
  tone,
  icon: Icon,
  href,
}: QuickAction) {
  return (
    <Link
      href={href}
      className="flex h-full flex-col items-center justify-center rounded-[1.35rem] border border-white/6 bg-[linear-gradient(180deg,rgba(20,36,48,0.92),rgba(17,31,42,0.9))] px-5 py-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-white/10"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${tone}`}
      >
        <Icon />
      </div>
      <p className="mt-5 text-[1.35rem] leading-none font-semibold tracking-[-0.04em] text-white">
        {label}
      </p>
      {description ? (
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      ) : null}
    </Link>
  );
}
