import { AlertIcon } from "./icons";

export function AlertBanner() {
  return (
    <div className="rounded-[1.4rem] border border-amber-400/14 bg-[linear-gradient(180deg,rgba(31,35,28,0.88),rgba(29,35,30,0.82))] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/14 text-amber-300">
          <AlertIcon />
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold text-white">
            Alergias registradas em 1 paciente
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-950/40 px-2.5 py-1 text-xs font-medium text-amber-200/80">
              Elenice
            </span>
            <span className="rounded-full bg-slate-950/40 px-2.5 py-1 text-xs font-medium text-amber-200/80">
              Dipirona
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
