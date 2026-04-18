import Link from "next/link";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  PeopleIcon,
  SaveIcon,
} from "@/app/dashboard/components/icons";

import { InfoStrip, PrimaryButton, SectionCard, SecondaryButton } from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Gestão de Escala",
  description: "Monte a grade mensal da equipe.",
};

const legendItems = [
  { label: "M Manhã", tone: "bg-sky-500/16 text-sky-300" },
  { label: "T Tarde", tone: "bg-amber-500/16 text-amber-300" },
  { label: "N Noite", tone: "bg-violet-500/16 text-violet-300" },
  { label: "F Folga", tone: "bg-emerald-500/16 text-emerald-300" },
  { label: "FE Férias", tone: "bg-orange-500/16 text-orange-300" },
  { label: "EX Extra", tone: "bg-slate-500/20 text-slate-300" },
  { label: "LM Licença médica", tone: "bg-rose-500/16 text-rose-300" },
  { label: "TR Treinamento", tone: "bg-cyan-500/16 text-cyan-300" },
];

export default function ShiftManagementMonthPage() {
  return (
    <>
      <InfoStrip
        icon={PeopleIcon}
        action={
          <Link
            href="/escala"
            className="text-sm font-medium text-sky-300 transition hover:text-sky-200"
          >
            Ir para Minha Escala (pessoal)
          </Link>
        }
      >
        <strong>Modo Equipe</strong>: Você está montando a escala dos seus
        funcionários.
      </InfoStrip>

      <SectionCard className="mb-4">
        <div className="grid gap-4 xl:grid-cols-[190px_minmax(0,1fr)]">
          <div className="flex items-center justify-between rounded-[1rem] border border-white/8 bg-[#0a1620] px-4 py-3">
            <button className="text-slate-400 transition hover:text-white">
              <ChevronLeftIcon />
            </button>
            <span className="text-2xl leading-none font-semibold tracking-[-0.04em] text-white">
              Abril 2026
            </span>
            <button className="text-slate-400 transition hover:text-white">
              <ChevronRightIcon />
            </button>
          </div>

          <div className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                placeholder="Hospital"
                className="rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <input
                placeholder="Unidade / setor"
                className="rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <SecondaryButton>Atribuir em lote</SecondaryButton>
              <SecondaryButton>Férias</SecondaryButton>
              <SecondaryButton className="gap-2">
                <CopyIcon />
                Copiar semana
              </SecondaryButton>
              <SecondaryButton>Repetir mês anterior</SecondaryButton>
              <SecondaryButton className="gap-2">
                <SaveIcon />
                Salvar
              </SecondaryButton>
              <PrimaryButton>PDF</PrimaryButton>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="mb-4 min-h-[200px]">
        <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-dashed border-white/6 bg-slate-950/10 px-6 py-10 text-center">
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-sky-500/14 text-sky-300">
              <PeopleIcon />
            </div>
            <h2 className="mt-5 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
              Cadastre sua equipe primeiro
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Adicione enfermeiros e técnicos para montar a escala em segundos.
            </p>
            <PrimaryButton href="/gestao-escala/equipe" className="mt-6">
              Cadastrar equipe
            </PrimaryButton>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-[0.14em]">
            Legenda:
          </span>
          {legendItems.map((item) => (
            <span
              key={item.label}
              className={`rounded-full px-3 py-1 font-medium ${item.tone}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </SectionCard>
    </>
  );
}
