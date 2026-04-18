import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { ArrowLeftIcon } from "@/app/dashboard/components/icons";

type PageHeaderProps = {
  icon: ComponentType;
  title: string;
  description: string;
  eyebrow?: string;
  actions?: ReactNode;
  backHref?: string;
  backLabel?: string;
};

export function PageHeader({
  icon: Icon,
  title,
  description,
  eyebrow,
  actions,
  backHref,
  backLabel = "Início",
}: PageHeaderProps) {
  return (
    <header className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        {backHref ? (
          <Link
            href={backHref}
            className="mb-3 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeftIcon />
            {backLabel}
          </Link>
        ) : null}

        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500/18 text-sky-300 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
            <Icon />
          </div>
          <div>
            <h1 className="text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white sm:text-[2.5rem]">
              {title}
            </h1>
            <p className="mt-2 text-base text-slate-400">{description}</p>
          </div>
        </div>
      </div>

      {actions ? <div className="shrink-0">{actions}</div> : null}
    </header>
  );
}
