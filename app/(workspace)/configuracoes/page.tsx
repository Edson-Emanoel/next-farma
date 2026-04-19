import {
  LogOutIcon,
  MoonIcon,
  SaveIcon,
  SettingsIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import { SectionCard, SecondaryButton } from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Configurações",
  description: "Sua identificação profissional e preferências.",
};

export default function SettingsPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={SettingsIcon}
        title="Configurações"
        description="Sua identificação profissional e preferências"
        backHref="/dashboard"
      />

      <div className="space-y-4">
        <SectionCard>
          <div className="mb-5 flex items-start justify-between gap-3">
            <h2 className="text-2xl leading-none font-semibold tracking-[-0.04em] text-white">
              Identificação profissional
            </h2>
            <button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              <SaveIcon />
              Salvar
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Nome completo
              </span>
              <input
                defaultValue="Edson Emanoel"
                className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                COREN
              </span>
              <input
                placeholder="Ex.: COREN-SP 123456"
                className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                E-mail
              </span>
              <input
                defaultValue="edson.teste@gmail.com"
                className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none"
              />
            </label>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Estes dados são usados no rodapé das evoluções exportadas em PDF.
          </p>
        </SectionCard>

        <SectionCard>
          <h2 className="text-2xl leading-none font-semibold tracking-[-0.04em] text-white">
            Aparência
          </h2>
          <button className="mt-5 flex w-full items-center justify-between rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-4 text-left">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <MoonIcon />
              Tema escuro
            </span>
            <span className="text-sm text-slate-400">Toque para alternar</span>
          </button>
        </SectionCard>

        <SectionCard>
          <h2 className="text-2xl leading-none font-semibold tracking-[-0.04em] text-white">
            Conta
          </h2>
          <SecondaryButton className="mt-5 gap-2 rounded-[1rem] border-rose-500/18 bg-rose-500/12 text-white hover:border-rose-500/28 hover:text-white">
            <LogOutIcon />
            Sair
          </SecondaryButton>
        </SectionCard>
      </div>
    </section>
  );
}
