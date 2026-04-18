import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { SectionCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Calendário",
  description: "Toque em qualquer dia para adicionar plantão, folga ou férias.",
};

const weekdayLabels = ["D", "S", "T", "Q", "Q", "S", "S"];
const calendarDays = [
  [29, true],
  [30, true],
  [31, true],
  [1, false],
  [2, false],
  [3, false],
  [4, false],
  [5, false],
  [6, false],
  [7, false],
  [8, false],
  [9, false],
  [10, false],
  [11, false],
  [12, false],
  [13, false],
  [14, false],
  [15, false],
  [16, false],
  [17, false],
  [18, false],
  [19, false],
  [20, false],
  [21, false],
  [22, false],
  [23, false],
  [24, false],
  [25, false],
  [26, false],
  [27, false],
  [28, false],
  [29, false],
  [30, false],
  [1, true],
  [2, true],
] as const;

const legendItems = [
  { label: "Plantão dia", color: "bg-sky-400" },
  { label: "Plantão noite", color: "bg-violet-400" },
  { label: "Extra", color: "bg-amber-400" },
  { label: "Folga", color: "bg-emerald-400" },
  { label: "Férias", color: "bg-orange-400" },
  { label: "Conflito", color: "bg-rose-400" },
];

export default function ScaleCalendarPage() {
  return (
    <>
      <PageHeader
        icon={CalendarIcon}
        title="Calendário"
        description="Toque em qualquer dia para adicionar plantão, folga ou férias."
      />

      <SectionCard>
        <div className="mb-5 flex items-center justify-between">
          <button className="text-slate-500 transition hover:text-white">
            <ChevronLeftIcon />
          </button>
          <h2 className="text-[2rem] leading-none font-semibold tracking-[-0.04em] text-white">
            Abril 2026
          </h2>
          <button className="text-slate-500 transition hover:text-white">
            <ChevronRightIcon />
          </button>
        </div>

        <div className="mb-4 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {weekdayLabels.map((label, index) => (
            <span key={`${label}-${index}`} className="py-2">
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map(([day, outsideMonth], index) => {
            const selected = day === 18 && !outsideMonth;

            return (
              <button
                key={`${day}-${index}`}
                className={`min-h-[104px] rounded-[1rem] border px-3 py-3 text-left transition ${
                  selected
                    ? "border-sky-400 bg-sky-500/6 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.6)]"
                    : "border-white/8 bg-[#13232d] hover:border-white/16"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    outsideMonth ? "text-slate-600" : "text-slate-200"
                  }`}
                >
                  {day}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
          {legendItems.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${item.color}`} />
              {item.label}
            </span>
          ))}
        </div>
      </SectionCard>
    </>
  );
}
