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
  "w-full rounded-[8px] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

const shiftFormSchema = z.object({
  shiftDate: z.string().trim().min(1),
  startTime: z.string().trim().min(1),
  endTime: z.string().trim().min(1),
  unitSector: z.string().trim().min(1),
  hospital: z.string().trim().min(1),
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
      <span className="mb-1 block text-[0.72rem] font-medium text-slate-300">
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
        className={`${fieldBaseClassName} appearance-none pr-16 ${className}`}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-5 inline-flex items-center text-slate-400">
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

function OptionPill({
  children,
  active = false,
}: Readonly<{ children: ReactNode; active?: boolean }>) {
  return (
    <button
      type="button"
      className={`rounded-full px-3 py-2 text-sm transition ${
        active
          ? "bg-sky-500 text-white"
          : "bg-white/6 text-slate-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

const shiftTypes = [
  "Manhã (07h-13h)",
  "Tarde (13h-19h)",
  "Noite (19h-07h)",
  "12x36 Dia (07h-19h)",
  "12x36 Noite (19h-07h)",
  "24 horas",
  "Plantão extra",
  "Sobreaviso",
  "Home care visita",
  "Personalizado",
];

export function NewPlantaoForm() {
  const handleSubmit = buildValidatedSubmitHandler(shiftFormSchema);

  return (
    <section className="mx-auto flex max-w-[460px] justify-center pb-8 pt-1">
      <FormSection title="Novo plantão" className="w-full rounded-[1.75rem] p-5 sm:p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-400">
              Defina o tipo, horário e local deste plantão.
            </p>
            <Link
              href="/escala/plantoes"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Fechar
            </Link>
          </div>

          <FormField label="Tipo de plantão">
            <div className="flex flex-wrap gap-2">
              {shiftTypes.map((type, index) => (
                <OptionPill key={type} active={index === 0}>
                  {type}
                </OptionPill>
              ))}
            </div>
          </FormField>

          <div className="flex flex-col gap-2 rounded-[1.15rem] border border-sky-400/12 bg-sky-500/6 p-4">
            <FormField label="Data">
              <DatePickerField defaultValue="2026-04-19" name="shiftDate" />
            </FormField>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Início">
                <TextInput defaultValue="07:00" name="startTime" type="time" />
              </FormField>

              <FormField label="Fim">
                <TextInput defaultValue="13:00" name="endTime" type="time" />
              </FormField>
            </div>
          </div>

          <FormField label="Unidade / setor">
            <SelectField defaultValue="" name="unitSector">
              <option value="" disabled>
                Selecionar
              </option>
              <option>Enfermaria</option>
              <option>UTI</option>
              <option>Centro cirúrgico</option>
              <option>Home care</option>
            </SelectField>
          </FormField>

          <FormField label="Local / hospital">
            <TextInput name="hospital" placeholder="Ex: Hospital Santa Casa" />
          </FormField>

          <FormField label="Setor / observação rápida">
            <TextInput name="sectorNote" placeholder="Ex: Box 3, Ala A" />
          </FormField>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white">
              <input
                type="checkbox"
                name="extraShift"
                className="h-4 w-4 accent-sky-500"
              />
              Plantão extra
            </label>
            <label className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white">
              <input
                type="checkbox"
                name="availableForSwap"
                className="h-4 w-4 accent-sky-500"
              />
              Disponível para troca
            </label>
          </div>

          <FormField label="Observações">
            <TextAreaField name="notes" placeholder="Algo importante deste plantão" />
          </FormField>

          <div className="flex items-center justify-end gap-3 pt-1">
            <SecondaryButton className="px-5 py-3" href="/escala/plantoes">
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
