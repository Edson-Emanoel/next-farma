"use client";

import Link from "next/link";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import { z } from "zod";

import {
  ChevronDownIcon,
  SaveIcon,
} from "@/app/dashboard/components/icons";

import {
  PrimaryButton,
  SecondaryButton,
  SectionCard,
} from "../../../_components/ui";
import { buildValidatedSubmitHandler } from "../../../_lib/form-submit";

type FormFieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const fieldBaseClassName =
  "w-full rounded-[0.9rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

const employeeFormSchema = z.object({
  fullName: z.string().trim().min(1),
  role: z.string().trim().min(1),
  workload: z.string().trim().min(1),
  shift: z.string().trim().min(1),
  sectors: z.string().trim().min(1),
  startTime: z.string().trim().min(1),
  endTime: z.string().trim().min(1),
});

function FormField({
  label,
  children,
  className = "",
}: Readonly<FormFieldProps>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[0.72rem] font-medium text-slate-200">
        {label}
      </span>
      {children}
    </label>
  );
}

function TextInput({ className = "", ...props }: Readonly<TextInputProps>) {
  return <input {...props} className={`${fieldBaseClassName} ${className}`} />;
}

function SelectField({ className = "", children, ...props }: Readonly<SelectProps>) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`${fieldBaseClassName} appearance-none pr-12 ${className}`}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 inline-flex items-center text-slate-400">
        <ChevronDownIcon />
      </span>
    </div>
  );
}

export function NewFuncionarioForm() {
  const handleSubmit = buildValidatedSubmitHandler(employeeFormSchema);

  return (
    <section className="mt-4 flex justify-center">
      <SectionCard className="w-full max-w-[420px] rounded-[1.5rem] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[1.6rem] leading-none font-semibold tracking-[-0.04em] text-white">
              Novo funcionário
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Cadastre um profissional para entrar na montagem da escala.
            </p>
          </div>
          <Link
            href="/gestao-escala/equipe"
            className="text-sm text-slate-500 transition hover:text-white"
          >
            Fechar
          </Link>
        </div>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <FormField label="Nome completo *">
            <TextInput
              defaultValue="Ana Souza"
              name="fullName"
              placeholder="Nome do funcionário"
            />
          </FormField>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Cargo">
              <SelectField defaultValue="Enfermeira(o)" name="role">
                <option>Enfermeira(o)</option>
                <option>Técnica(o) de enfermagem</option>
                <option>Coordenadora(or)</option>
                <option>Auxiliar</option>
              </SelectField>
            </FormField>

            <FormField label="Jornada">
              <SelectField defaultValue="" name="workload">
                <option value="" disabled>
                  Selecionar jornada...
                </option>
                <option>6 horas</option>
                <option>12x36</option>
                <option>24x72</option>
                <option>Personalizada</option>
              </SelectField>
            </FormField>

            <FormField label="Turno">
              <SelectField defaultValue="" name="shift">
                <option value="" disabled>
                  Selecione o turno
                </option>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
                <option>Flexível</option>
              </SelectField>
            </FormField>

            <FormField label="Setor(es)">
              <SelectField defaultValue="" name="sectors">
                <option value="" disabled>
                  Selecionar setor(es)...
                </option>
                <option>Enfermaria</option>
                <option>UTI</option>
                <option>Centro cirúrgico</option>
                <option>Emergência</option>
              </SelectField>
            </FormField>

            <FormField label="Hora de entrada">
              <TextInput defaultValue="07:00" name="startTime" type="time" />
            </FormField>

            <FormField label="Hora de saída">
              <TextInput defaultValue="13:00" name="endTime" type="time" />
            </FormField>
          </div>

          <div>
            <p className="mb-2 block text-[0.72rem] font-medium text-slate-200">
              Dias padrão (opcional)
            </p>
            <div className="flex flex-wrap gap-2">
              {weekdays.map((day) => (
                <button
                  key={day}
                  type="button"
                  className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/18 hover:text-white"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <FormField label="Observações (opcional)">
            <TextInput name="notes" placeholder="Ex.: prefere finais de semana livres" />
          </FormField>

          <div className="flex items-center justify-end gap-3 pt-1">
            <SecondaryButton className="px-5 py-2.5" href="/gestao-escala/equipe">
              Cancelar
            </SecondaryButton>
            <PrimaryButton className="gap-2 px-5 py-2.5">
              <SaveIcon />
              Salvar
            </PrimaryButton>
          </div>
        </form>
      </SectionCard>
    </section>
  );
}
