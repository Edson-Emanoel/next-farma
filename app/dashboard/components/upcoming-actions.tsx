type UpcomingAction = {
  time: string;
  title: string;
  note: string;
};

type UpcomingActionsProps = {
  items: UpcomingAction[];
};

export function UpcomingActions({ items }: UpcomingActionsProps) {
  return (
    <div className="rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(22,43,55,0.9),rgba(15,31,40,0.9))] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.18)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-400">
          Próximas ações
        </h2>
        <button className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
          Abrir agenda
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <AgendaItem key={`${item.time}-${item.title}`} {...item} />
        ))}
      </div>
    </div>
  );
}

function AgendaItem({ time, title, note }: UpcomingAction) {
  return (
    <article className="flex flex-col gap-4 rounded-[1.55rem] border border-white/6 bg-[linear-gradient(180deg,rgba(14,31,42,0.98),rgba(12,25,34,0.96))] px-4 py-5 sm:flex-row sm:items-center">
      <div className="self-start rounded-[1rem] bg-cyan-500/14 px-3.5 py-2.5 text-sm font-semibold text-cyan-300 sm:self-center">
        {time}
      </div>
      <div className="min-w-0">
        <p className="text-[1.08rem] font-semibold tracking-[-0.02em] text-white">
          {title}
        </p>
        <p className="mt-1.5 text-sm leading-6 text-slate-400">{note}</p>
      </div>
    </article>
  );
}
