import { AlertIcon, ArrowRightIcon } from "./icons";

type RecentPatient = {
  name: string;
  unit: string;
  status: string;
  accent: string;
};

type RecentPatientsProps = {
  patients: RecentPatient[];
};

export function RecentPatients({ patients }: RecentPatientsProps) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pacientes recentes
        </h2>
        <button className="shrink-0 text-sm font-semibold text-sky-400 transition hover:text-sky-300">
          Ver todos
        </button>
      </div>

      <div className="overflow-hidden rounded-[1.25rem] border border-white/6 bg-[linear-gradient(180deg,rgba(19,35,46,0.94),rgba(16,30,40,0.92))] shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:rounded-[1.6rem]">
        {patients.map((patient, index) => (
          <PatientRow
            key={patient.name}
            {...patient}
            bordered={index !== patients.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function PatientRow({
  name,
  unit,
  status,
  accent,
  bordered,
}: RecentPatient & { bordered: boolean }) {
  return (
    <article
      className={`flex items-center gap-3 px-4 py-4 sm:gap-4 ${
        bordered ? "border-b border-white/6" : ""
      }`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-xs font-semibold text-sky-300`}
      >
        {initials(name)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-base font-semibold text-white">{name}</p>
          {name === "Elenice Almeida" ? (
            <span className="text-amber-300">
              <AlertIcon />
            </span>
          ) : null}
        </div>
        <div className="mt-1 flex min-w-0 flex-col items-start gap-1 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
          <span className="rounded-full bg-sky-500/14 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-sky-300">
            {unit}
          </span>
          {status ? <span className="min-w-0 break-words">{status}</span> : null}
        </div>
      </div>

      <button className="shrink-0 text-slate-500 transition hover:text-white">
        <ArrowRightIcon />
      </button>
    </article>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
