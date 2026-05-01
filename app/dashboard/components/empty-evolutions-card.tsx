import { NotesIcon } from "./icons";

export function EmptyEvolutionsCard() {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Evoluções recentes
        </h2>
        <button className="shrink-0 text-sm font-semibold text-sky-400 transition hover:text-sky-300">
          Ver histórico
        </button>
      </div>

      <div className="flex min-h-[220px] items-center justify-center rounded-[1.25rem] border border-white/6 bg-[linear-gradient(180deg,rgba(19,35,46,0.94),rgba(16,30,40,0.92))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:min-h-[246px] sm:rounded-[1.6rem] sm:p-6">
        <div className="w-full rounded-[1rem] border border-dashed border-white/6 bg-slate-950/10 px-4 py-8 text-center sm:rounded-[1.35rem] sm:px-6 sm:py-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[1rem] bg-sky-500/14 text-sky-300 sm:h-14 sm:w-14 sm:rounded-[1.2rem]">
            <NotesIcon />
          </div>
          <h2 className="mt-5 text-2xl leading-tight font-semibold text-white sm:text-[2rem] sm:leading-none sm:tracking-[-0.05em]">
            Sem evoluções hoje
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Registre a primeira evolução do seu plantão.
          </p>
          <button className="mt-6 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
            + Nova evolução
          </button>
        </div>
      </div>
    </section>
  );
}
