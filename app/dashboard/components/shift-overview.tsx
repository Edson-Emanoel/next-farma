type ShiftMetric = {
  label: string;
  value: string;
  progress: string;
};

type ShiftOverviewProps = {
  metrics: ShiftMetric[];
};

export function ShiftOverview({ metrics }: ShiftOverviewProps) {
  return (
    <div className="rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(17,31,40,0.95),rgba(11,20,27,0.96))] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-400">
            Ritmo do plantão
          </h2>
          <p className="mt-2 max-w-[12ch] text-[2.1rem] leading-tight font-semibold tracking-[-0.05em] text-white">
            Turno tranquilo, mas atento
          </p>
        </div>
        <div className="rounded-full bg-cyan-500/14 px-4 py-2 text-sm font-semibold text-cyan-300">
          78% concluído
        </div>
      </div>

      <div className="mt-7 space-y-4">
        {metrics.map((metric) => (
          <StatusRow key={metric.label} {...metric} />
        ))}
      </div>
    </div>
  );
}

function StatusRow({ label, value, progress }: ShiftMetric) {
  return (
    <div>
      <div className="mb-2.5 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="text-slate-300">{label}</span>
        <span className="font-medium text-slate-400">{value}</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/6">
        <div className={`h-2.5 rounded-full bg-cyan-400 ${progress}`} />
      </div>
    </div>
  );
}
