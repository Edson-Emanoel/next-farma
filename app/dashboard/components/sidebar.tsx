import type { ComponentType } from "react";

import { PulseBadgeIcon } from "./icons";

type SidebarItem = {
  label: string;
  icon: ComponentType;
  active?: boolean;
};

type DashboardSidebarProps = {
  items: SidebarItem[];
};

export function DashboardSidebar({ items }: DashboardSidebarProps) {
  return (
    <aside className="flex flex-col border-r border-white/6 bg-[linear-gradient(180deg,rgba(10,25,35,0.98),rgba(8,22,31,0.98))] lg:h-dvh">
      <div className="border-b border-white/6 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/18 text-sky-300">
            <PulseBadgeIcon />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[1.05rem] font-semibold leading-none text-white">
              Nurse Assist
            </p>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
              Pro
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-1 px-2 py-3">
        {items.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-auto border-t border-white/6 p-2">
        <div className="flex items-center gap-3 rounded-[1rem] bg-white/3 px-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-300">
            MO
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Maria Oliveira
            </p>
            <p className="truncate text-xs text-slate-400">maria22@g...</p>
          </div>
          <div className="text-slate-500">◦</div>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ active = false, icon: Icon, label }: SidebarItem) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-[0.95rem] px-3 py-3 text-left transition ${
        active
          ? "bg-sky-500/16 text-sky-300 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.08)]"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="shrink-0">
        <Icon />
      </span>
      <span className="truncate text-sm font-medium">{label}</span>
    </button>
  );
}
