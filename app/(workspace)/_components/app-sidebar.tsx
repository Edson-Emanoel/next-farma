"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  MenuIcon,
  PulseBadgeIcon,
  SettingsIcon,
  XIcon,
} from "@/app/dashboard/components/icons";

import { appNavigation, profileSummary } from "../_lib/navigation";

function isActive(pathname: string, href: string, matches?: string[]) {
  if (pathname === href) {
    return true;
  }

  return matches?.some((match) => pathname.startsWith(match)) ?? false;
}

export function AppSidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = (
    <>
      <nav
        id="app-navigation"
        className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-3 lg:space-y-1"
      >
        {appNavigation.map((item) => {
          const active = isActive(pathname, item.href, item.matches);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center gap-3 rounded-[0.95rem] px-3 py-3 text-left transition lg:w-full ${
                active
                  ? "bg-sky-500/16 text-sky-300 shadow-[inset_3px_0_0_0_rgb(14_165_233)]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="shrink-0">
                <item.icon />
              </span>
              <span className="truncate text-sm font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/6 p-2">
        <div className="flex items-center gap-3 rounded-[1rem] bg-white/3 px-3 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-300">
            {profileSummary.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {profileSummary.name}
            </p>
            <p className="truncate text-xs text-slate-400">
              {profileSummary.email}
            </p>
          </div>
          <Link
            href="/configuracoes"
            className="rounded-full p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
            aria-label="Abrir configurações"
            onClick={() => setMenuOpen(false)}
          >
            <SettingsIcon />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <aside className="sticky top-0 z-40 border-b border-white/6 bg-[linear-gradient(180deg,rgba(10,25,35,0.98),rgba(8,22,31,0.98))] lg:static lg:border-r lg:border-b-0">
      <div className="flex flex-col lg:sticky lg:top-0 lg:h-dvh">
        <div className="border-b border-white/6 px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/18 text-sky-300">
                <PulseBadgeIcon />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[1.05rem] leading-none font-semibold text-white">
                  Nurse Assist
                </p>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  Pro
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-slate-200 transition hover:bg-white/8 hover:text-white lg:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="app-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
          {navigation}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/55 backdrop-blur-sm transition-opacity lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(82vw,320px)] flex-col border-r border-white/8 bg-[linear-gradient(180deg,rgba(10,25,35,0.98),rgba(8,22,31,0.98))] shadow-[28px_0_70px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/6 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/18 text-sky-300">
              <PulseBadgeIcon />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[1.05rem] leading-none font-semibold text-white">
                Nurse Assist
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                Pro
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-slate-200 transition hover:bg-white/8 hover:text-white"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <XIcon />
          </button>
        </div>

        {navigation}
      </div>
    </aside>
  );
}
