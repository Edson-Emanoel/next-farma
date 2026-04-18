import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { SectionCard, StatCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Banco de Horas",
  description: "Acompanhamento de horas trabalhadas, extras e estimativas.",
};

export default function ScaleHourBankPage() {
  return (
    <>
      <PageHeader
        icon={ClockIcon}
        title="Banco de Horas"
        description="Acompanhamento de horas trabalhadas, extras e estimativas."
      />

      <SectionCard className="mb-4">
        <div className="flex items-center justify-between">
          <button className="text-slate-500 transition hover:text-white">
            <ChevronLeftIcon />
          </button>
          <span className="text-2xl leading-none font-semibold tracking-[-0.04em] text-white">
            Abr 2026
          </span>
          <button className="text-slate-500 transition hover:text-white">
            <ChevronRightIcon />
          </button>
        </div>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={ClockIcon}
          label="Trabalhadas"
          value="0h"
          detail="0 plantões"
        />
        <StatCard
          icon={ClockIcon}
          label="Meta contratada"
          value="—"
          detail="Configure em Configurações"
        />
        <StatCard
          icon={ClockIcon}
          label="Saldo"
          value="+0h"
          detail="Acima da meta"
          accent="bg-emerald-500/16 text-emerald-300"
        />
        <StatCard
          icon={ClockIcon}
          label="Extras"
          value="0h"
          detail="R$ 0,00 previsto"
        />
      </div>

      <SectionCard className="mt-4 overflow-hidden px-0 py-0">
        <div className="border-b border-white/6 px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Plantões do mês
          </h2>
        </div>
        <div className="px-5 py-10 text-center text-sm text-slate-400">
          Nenhum plantão neste mês.
        </div>
      </SectionCard>
    </>
  );
}
