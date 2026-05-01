"use client";

import { useState } from "react";

import {
  ActivityIcon,
  AlertIcon,
  BeakerIcon,
  ChevronDownIcon,
  ClockIcon,
  CopyIcon,
  PillIcon,
  SaveIcon,
} from "@/app/dashboard/components/icons";

import { DecimalInput } from "./masked-inputs";
import { PrimaryButton, SectionCard, SecondaryButton } from "./ui";

const calculatorModes = [
  { key: "bic", title: "Infusão contínua", subtitle: "BIC mcg/kg/min", icon: ActivityIcon },
  { key: "peso", title: "Dose por peso", subtitle: "mg/kg", icon: PillIcon },
  { key: "gotas", title: "Gotas/min", subtitle: "gtt", icon: ClockIcon },
  { key: "mlh", title: "mL/hora", subtitle: "BIC simples", icon: ActivityIcon },
  { key: "diluicao", title: "Diluição", subtitle: "concentração", icon: BeakerIcon },
];

export function CalculatorWorkspace() {
  const [mode, setMode] = useState("bic");
  const [doseUnit, setDoseUnit] = useState("mcg/kg/min");
  const [solutionUnit, setSolutionUnit] = useState("mg/mL");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {calculatorModes.map((item) => {
          const active = item.key === mode;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setMode(item.key)}
              className={`inline-flex items-center gap-3 rounded-[1rem] border px-4 py-3 text-left transition ${
                active
                  ? "border-sky-400/30 bg-sky-500 text-white"
                  : "border-white/8 bg-[rgba(18,33,44,0.95)] text-slate-200 hover:border-white/14"
              }`}
            >
              <item.icon />
              <span>
                <span className="block text-sm font-semibold">{item.title}</span>
                <span
                  className={`block text-xs ${
                    active ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {item.subtitle}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_270px]">
        <div className="space-y-4">
          <SectionCard>
            <div className="flex items-center gap-2">
              <BeakerIcon />
              <h2 className="text-lg font-semibold text-white">Medicamento</h2>
              <span className="rounded-full bg-white/6 px-2 py-0.5 text-xs text-slate-400">
                Opcional
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Selecione um preset para auto-preencher diluição padrão
            </p>
            <label className="relative mt-2 block">
              <select className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 pr-16 text-sm text-white outline-none">
                <option>Selecionar medicamento (opcional)</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center text-slate-400">
                <ChevronDownIcon />
              </span>
            </label>
          </SectionCard>

          <SectionCard>
            <div className="flex items-center gap-2">
              <PillIcon />
              <h2 className="text-lg font-semibold text-white">
                Dados do paciente e prescrição
              </h2>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Dose prescrita
                </span>
                <DecimalInput
                  className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none"
                  decimalPlaces={3}
                  defaultValue="0,1"
                  maxIntegerDigits={5}
                  name="dose"
                />
              </label>

              <label className="relative block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Unidade da dose
                </span>
                <select
                  value={doseUnit}
                  onChange={(event) => setDoseUnit(event.target.value)}
                  className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 pr-16 text-sm text-white outline-none"
                >
                  <option>mcg/kg/min</option>
                  <option>mg/kg/h</option>
                  <option>mcg/min</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center pt-7 text-slate-400">
                  <ChevronDownIcon />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Peso do paciente
                </span>
                <div className="flex items-center rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3">
                  <DecimalInput
                    className="w-full bg-transparent text-sm text-white outline-none"
                    decimalPlaces={1}
                    defaultValue="80"
                    maxIntegerDigits={3}
                    name="weight"
                  />
                  <span className="text-sm text-slate-400">kg</span>
                </div>
              </label>

              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_88px]">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Concentração da solução
                  </span>
                  <DecimalInput
                    className="w-full rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm text-white outline-none"
                    decimalPlaces={4}
                    defaultValue="0,016"
                    maxIntegerDigits={5}
                    name="concentration"
                  />
                </label>

                <label className="relative block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Unidade
                  </span>
                  <select
                    value={solutionUnit}
                    onChange={(event) => setSolutionUnit(event.target.value)}
                    className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 pr-16 text-sm text-white outline-none"
                  >
                    <option>mg/mL</option>
                    <option>mcg/mL</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center pt-7 text-slate-400">
                    <ChevronDownIcon />
                  </span>
                </label>
              </div>
            </div>
          </SectionCard>

          <SectionCard className="border-sky-500/30 bg-[linear-gradient(180deg,rgba(14,36,52,0.98),rgba(16,36,45,0.98))]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              <ActivityIcon />
              Velocidade da BIC
            </p>

            <div className="mt-8 flex items-end gap-3">
              <p className="text-5xl leading-none font-semibold tracking-[-0.06em] text-white">
                —
              </p>
              <span className="pb-1 text-4xl font-medium text-slate-400">
                mL/h
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1rem] border border-white/8 bg-[#0b1620] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Dose total
                </p>
                <p className="mt-3 text-lg text-white">— mcg/h</p>
              </div>

              <div className="rounded-[1rem] border border-white/8 bg-[#0b1620] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Por minuto
                </p>
                <p className="mt-3 text-lg text-white">— mcg/min</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton className="gap-2">
                <SaveIcon />
                Salvar cálculo
              </PrimaryButton>
              <SecondaryButton className="gap-2">
                <CopyIcon />
                Copiar resultado
              </SecondaryButton>
              <SecondaryButton className="gap-2">
                <ClockIcon />
                Novo cálculo
              </SecondaryButton>
            </div>
          </SectionCard>

          <div className="space-y-3">
            <div className="rounded-[1rem] border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
              <p className="inline-flex items-center gap-2">
                <AlertIcon />
                Informe o peso do paciente para calcular.
              </p>
            </div>

            <div className="rounded-[1rem] border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
              <p className="inline-flex items-center gap-2">
                <AlertIcon />
                Informe a concentração da solução.
              </p>
            </div>
          </div>

          <SectionCard>
            <div className="flex items-center justify-between gap-3">
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                <ActivityIcon />
                Passo a passo do cálculo
              </h2>
              <span className="text-slate-500">^</span>
            </div>

            <div className="mt-4 rounded-[1rem] border border-white/6 bg-[#0b1620] px-4 py-6">
              <p className="font-mono text-sm text-slate-400">
                Preencha os campos para visualizar o cálculo detalhado.
              </p>
            </div>
          </SectionCard>

          <p className="text-center text-xs text-slate-500">
            Ferramenta auxiliar. Sempre confirmar protocolo institucional e
            prescrição médica.
          </p>
        </div>

        <SectionCard className="h-fit">
          <div className="flex items-center gap-2">
            <ClockIcon />
            <h2 className="text-lg font-semibold text-white">Histórico</h2>
          </div>

          <div className="mt-4 rounded-[1rem] border border-white/6 bg-[#0b1620] px-4 py-6 text-sm text-slate-400">
            Seus últimos cálculos salvos aparecerão aqui.
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
