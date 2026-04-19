import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

type EmptyStateProps = {
  icon: ComponentType;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionTone?: "primary" | "danger";
  minHeightClassName?: string;
};

type StatCardProps = {
  icon: ComponentType;
  label: string;
  value: string;
  detail: string;
  accent?: string;
};

type InfoStripProps = {
  icon: ComponentType;
  tone?: "blue" | "green";
  children: ReactNode;
  action?: ReactNode;
};

export function SectionCard({
  children,
  className = "",
}: Readonly<SectionCardProps>) {
  return (
    <section
      className={`rounded-[1.55rem] border border-white/7 bg-[linear-gradient(180deg,rgba(19,35,46,0.96),rgba(16,30,40,0.94))] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:p-5 ${className}`}
    >
      {children}
    </section>
  );
}

export function EmptyStateCard({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref = "#",
  actionTone = "primary",
  minHeightClassName = "min-h-[240px]",
}: Readonly<EmptyStateProps>) {
  const actionClassName =
    actionTone === "danger"
      ? "bg-rose-500/12 text-white hover:bg-rose-500/18"
      : "bg-sky-500 px-5 text-white hover:brightness-110";

  return (
    <SectionCard className={`${minHeightClassName} flex items-center justify-center`}>
      <div className="w-full rounded-[1.35rem] border border-dashed border-white/6 bg-slate-950/10 px-6 py-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-sky-500/14 text-sky-300">
          <Icon />
        </div>
        <h2 className="mt-5 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          {description}
        </p>

        {actionLabel ? (
          <Link
            href={actionHref}
            className={`mt-6 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition ${actionClassName}`}
          >
            {actionLabel}
          </Link>
        ) : null}
      </div>
    </SectionCard>
  );
}

export function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  accent = "bg-sky-500/16 text-sky-300",
}: Readonly<StatCardProps>) {
  return (
    <SectionCard className="h-full">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accent}`}
        >
          <Icon />
        </div>
        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {label}
          </p>
          <p className="mt-3 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
            {value}
          </p>
          <p className="mt-2 text-sm text-slate-400">{detail}</p>
        </div>
      </div>
    </SectionCard>
  );
}

export function InfoStrip({
  icon: Icon,
  tone = "blue",
  children,
  action,
}: Readonly<InfoStripProps>) {
  const toneClassName =
    tone === "green"
      ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-100"
      : "border-sky-400/18 bg-sky-500/10 text-slate-100";

  return (
    <div
      className={`mb-4 flex flex-col gap-2 rounded-full border px-4 py-3 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between ${toneClassName}`}
    >
      <p className="inline-flex items-center gap-2 font-medium">
        <Icon />
        {children}
      </p>
      {action ? <div className="text-sky-300">{action}</div> : null}
    </div>
  );
}

export function PrimaryButton({
  children,
  href,
  className = "",
}: Readonly<{
  children: ReactNode;
  href?: string;
  className?: string;
}>) {
  const classes = `inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

export function SecondaryButton({
  children,
  className = "",
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-white/18 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
}
