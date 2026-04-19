"use client";

import Link from "next/link";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
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
} from "./ui";
import { buildValidatedSubmitHandler } from "../_lib/form-submit";
import { DatePickerField } from "./date-picker-field";

type FormSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

type FormFieldProps = {
  label: string;
  children: ReactNode;
  hint?: string;
  className?: string;
};

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
};

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const fieldBaseClassName =
  "w-full rounded-[1rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

const vacationFormSchema = z.object({
  startDate: z.string().trim().min(1),
  endDate: z.string().trim().min(1),
  status: z.string().trim().min(1),
});

function FormSection({
  title,
  children,
  className = "",
}: Readonly<FormSectionProps>) {
  return (
    <SectionCard className={`space-y-4 ${className}`}>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {children}
    </SectionCard>
  );
}

function FormField({
  label,
  children,
  hint,
  className = "",
}: Readonly<FormFieldProps>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[0.72rem] font-medium text-slate-300">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-2 block text-xs text-slate-500">{hint}</span> : null}
    </label>
  );
}

function TextInput({ className = "", suffix, ...props }: Readonly<TextInputProps>) {
  if (suffix) {
    return (
      <div className="relative">
        <input {...props} className={`${fieldBaseClassName} pr-10 ${className}`} />
        <span className="pointer-events-none absolute inset-y-0 right-4 inline-flex items-center text-xs text-slate-400">
          {suffix}
        </span>
      </div>
    );
  }

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

function TextAreaField({ className = "", ...props }: Readonly<TextAreaProps>) {
  return (
    <textarea
      {...props}
      className={`${fieldBaseClassName} min-h-[104px] resize-none ${className}`}
    />
  );
}

export function NewFeriasForm() {
  const handleSubmit = buildValidatedSubmitHandler(vacationFormSchema);

  return (
    <section className="mx-auto flex max-w-[410px] justify-center pb-8 pt-1">
      <FormSection title="Novas férias" className="w-full rounded-[1.75rem] p-5 sm:p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-end">
            <Link
              href="/escala/ferias"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Fechar
            </Link>
          </div>

          <div className="rounded-[1.2rem] border border-emerald-400/16 bg-emerald-500/7 p-4">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-emerald-200/80">
              Planejamento
            </p>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <FormField label="Início">
                <DatePickerField defaultValue="2026-04-19" name="startDate" />
              </FormField>
              <FormField label="Fim">
                <DatePickerField defaultValue="2026-04-19" name="endDate" />
              </FormField>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-[1rem] border border-white/8 bg-[#08131b] px-4 py-3">
            <div>
              <p className="text-[0.72rem] font-medium text-slate-300">
                Total previsto
              </p>
              <p className="mt-1 text-lg font-semibold text-white">1 dia</p>
            </div>
            <div className="rounded-full bg-emerald-500/14 px-3 py-1 text-xs font-semibold text-emerald-200">
              Planejada
            </div>
          </div>

          <FormField label="Dias vendidos / abono">
            <TextInput defaultValue="0" inputMode="numeric" name="soldDays" />
          </FormField>

          <FormField label="Status">
            <SelectField defaultValue="Planejada" name="status">
              <option>Planejada</option>
              <option>Aprovada</option>
              <option>Em andamento</option>
              <option>Concluída</option>
            </SelectField>
          </FormField>

          <FormField label="Observações">
            <TextAreaField
              name="notes"
              placeholder="Algum detalhe sobre divisão, aprovação ou cobertura do período."
            />
          </FormField>

          <div className="flex items-center justify-end gap-3 pt-1">
            <SecondaryButton className="px-5 py-3" href="/escala/ferias">
              Cancelar
            </SecondaryButton>
            <PrimaryButton className="gap-2 px-5">
              <SaveIcon />
              Salvar
            </PrimaryButton>
          </div>
        </form>
      </FormSection>
    </section>
  );
}
