import { NotesIcon } from "./icons";

export function EmptyEvolutionsCard() {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Evoluções recentes
        </h2>
        <button className="text-sm font-semibold text-sky-400 transition hover:text-sky-300">
          Ver histórico
        </button>
      </div>

      <div className="flex min-h-[246px] items-center justify-center rounded-[1.6rem] border border-white/6 bg-[linear-gradient(180deg,rgba(19,35,46,0.94),rgba(16,30,40,0.92))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
        <div className="w-full rounded-[1.35rem] border border-dashed border-white/6 bg-slate-950/10 px-6 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-sky-500/14 text-sky-300">
            <NotesIcon />
          </div>
          <h2 className="mt-5 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
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
