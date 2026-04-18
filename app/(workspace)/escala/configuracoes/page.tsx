import { SettingsIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { PrimaryButton, SectionCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Configurações da Escala",
  description: "Personalize sua jornada, valor por hora e preferências.",
};

export default function ScaleSettingsPage() {
  return (
    <>
      <PageHeader
        icon={SettingsIcon}
        title="Configurações da Escala"
        description="Personalize sua jornada, valor por hora e preferências."
      />

      <SectionCard>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Horas contratadas / mês
            </span>
            <div className="flex items-center rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3">
              <input
                defaultValue="160"
                className="w-full bg-transparent text-sm text-white outline-none"
              />
              <span className="text-sm text-slate-400">h</span>
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Valor por hora (R$)
            </span>
            <input
              placeholder="Ex: 35.00"
              className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Unidade padrão
            </span>
            <select className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none">
              <option>Selecionar</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Local padrão (hospital)
            </span>
            <input
              placeholder="Ex: Hospital Santa Casa"
              className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Dias de férias por ano
            </span>
            <div className="flex items-center rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3">
              <input
                defaultValue="30"
                className="w-full bg-transparent text-sm text-white outline-none"
              />
              <span className="text-sm text-slate-400">dias</span>
            </div>
          </label>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Lembretes
          </p>

          <div className="mt-3 space-y-3">
            <label className="flex items-center gap-3 rounded-[1rem] border border-white/8 bg-white/2 px-4 py-3 text-sm text-white">
              <input type="checkbox" defaultChecked className="accent-sky-500" />
              Avisar plantão no dia anterior
            </label>

            <label className="flex items-center gap-3 rounded-[1rem] border border-white/8 bg-white/2 px-4 py-3 text-sm text-white">
              <input type="checkbox" defaultChecked className="accent-sky-500" />
              Alertar muitos plantões consecutivos
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <PrimaryButton>Salvar configurações</PrimaryButton>
        </div>
      </SectionCard>
    </>
  );
}
