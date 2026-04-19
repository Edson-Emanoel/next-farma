import { PulseBadgeIcon } from "./icons";

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-13 w-13 items-center justify-center rounded-full bg-blue-500/18 text-blue-300 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
          <PulseBadgeIcon />
        </div>
        <div>
          <h1 className="text-[2.2rem] leading-none font-semibold tracking-[-0.05em] text-white md:text-[2.7rem]">
            Bom dia, Edson
          </h1>
          <p className="mt-2 text-base text-slate-400">
            Sábado, 18 de abril · 11:14
          </p>
        </div>
      </div>

      <div className="rounded-full border border-white/6 bg-white/4 px-4 py-2 text-sm font-medium text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
        <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 align-middle" />
        Sincronizado
      </div>
    </header>
  );
}
