import {
  BarChartIcon,
  ChevronDownIcon,
  PrinterIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { PrimaryButton, SecondaryButton, SectionCard, StatCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Relatórios",
  description: "Exporte sua escala em PDF ou Excel.",
};

export default function ScaleReportsPage() {
  return (
    <>
      <PageHeader
        icon={BarChartIcon}
        title="Relatórios"
        description="Exporte sua escala em PDF ou Excel."
      />

      <SectionCard className="mb-4">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,180px)_minmax(0,180px)_auto]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Mês
            </span>
            <div className="relative">
              <select className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 pr-16 text-sm text-white outline-none">
                <option>Abril</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center text-slate-400">
                <ChevronDownIcon />
              </span>
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Ano
            </span>
            <div className="relative">
              <select className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 pr-16 text-sm text-white outline-none">
                <option>2026</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center text-slate-400">
                <ChevronDownIcon />
              </span>
            </div>
          </label>

          <div className="flex flex-wrap items-end gap-3">
            <PrimaryButton className="gap-2">
              <PrinterIcon />
              PDF / Imprimir
            </PrimaryButton>
            <SecondaryButton>Excel (CSV)</SecondaryButton>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BarChartIcon} label="Horas trabalhadas" value="0h" detail="" />
        <StatCard icon={BarChartIcon} label="Plantões extras" value="0" detail="" />
        <StatCard icon={BarChartIcon} label="Folgas" value="0" detail="" />
        <StatCard icon={BarChartIcon} label="Ganhos extras" value="R$ 0,00" detail="" />
      </div>

      <SectionCard className="mt-4 overflow-hidden px-0 py-0">
        <div className="border-b border-white/6 px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Resumo
          </h2>
        </div>

        <div className="space-y-4 px-5 py-5 text-sm text-slate-300">
          <p>
            Período: <strong>Abril de 2026</strong>
          </p>
          <p>Total de plantões: 0 (0h)</p>
          <p>Plantões extras: 0 (0h, R$ 0,00)</p>
          <p>Folgas: 0</p>
          <p>Períodos de férias: 0</p>
        </div>
      </SectionCard>

      <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300">
        <PrinterIcon />
        Imprimir página
      </button>
    </>
  );
}
