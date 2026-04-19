import Link from "next/link";

import {
  ActivityIcon,
  CalendarIcon,
  ClockIcon,
  FolderIcon,
  PlusIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import {
  PrimaryButton,
  SectionCard,
  SecondaryButton,
  StatCard,
} from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Escala",
  description: "Resumo do mês, próximos compromissos e ações rápidas.",
};

export default function ScalePage() {
  return (
    <>
      <PageHeader
        icon={CalendarIcon}
        title="Minha Escala"
        description="Resumo do mês, próximos compromissos e ações rápidas."
        actions={
          <div className="flex flex-wrap gap-3">
            <PrimaryButton className="gap-2" href="/escala/plantoes/novo">
              <PlusIcon />
              Plantão
            </PrimaryButton>
            <PrimaryButton
              className="gap-2 bg-emerald-400 hover:brightness-110"
              href="/escala/folgas/nova"
            >
              <PlusIcon />
              Folga
            </PrimaryButton>
            <SecondaryButton className="gap-2" href="/escala/ferias/nova">
              <PlusIcon />
              Férias
            </SecondaryButton>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={CalendarIcon}
          label="Próximo plantão"
          value="—"
          detail="Nenhum agendado"
        />
        <StatCard
          icon={FolderIcon}
          label="Próxima folga"
          value="—"
          detail="Sem folgas planejadas"
          accent="bg-emerald-500/16 text-emerald-300"
        />
        <StatCard
          icon={ActivityIcon}
          label="Férias"
          value="—"
          detail="Não programadas"
        />
        <StatCard
          icon={ClockIcon}
          label="Horas no mês"
          value="0h"
          detail="0h extras"
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <SectionCard>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Próximos plantões
            </h2>
            <Link
              href="/escala/plantoes"
              className="text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-4 rounded-[1rem] border border-white/6 bg-[#0a1620] px-4 py-7 text-center text-sm text-slate-400">
            Nenhum plantão agendado este mês.
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Alertas
          </h2>
          <div className="mt-4 rounded-[1rem] border border-white/6 bg-[#0a1620] px-4 py-7 text-sm text-slate-400">
            Tudo certo, sem conflitos.
          </div>
        </SectionCard>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <SectionCard>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Plantões extras
          </p>
          <p className="mt-4 text-4xl leading-none font-semibold tracking-[-0.05em] text-white">
            0
          </p>
          <p className="mt-2 text-sm text-slate-400">0h · R$ 0,00</p>
        </SectionCard>

        <SectionCard>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Folgas no mês
          </p>
          <p className="mt-4 text-4xl leading-none font-semibold tracking-[-0.05em] text-white">
            0
          </p>
          <p className="mt-2 text-sm text-slate-400">Total registrado</p>
        </SectionCard>

        <SectionCard>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Banco de horas
          </p>
          <p className="mt-4 text-4xl leading-none font-semibold tracking-[-0.05em] text-white">
            +0h
          </p>
          <p className="mt-2 text-sm text-slate-400">Configure sua meta</p>
        </SectionCard>
      </div>
    </>
  );
}
