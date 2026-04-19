"use client";

import {
  ChevronDownIcon,
  PeopleIcon,
  SaveIcon,
} from "@/app/dashboard/components/icons";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { z } from "zod";

import { buildValidatedSubmitHandler } from "../_lib/form-submit";
import { DatePickerField } from "./date-picker-field";
import { PageHeader } from "./page-header";
import { CpfInput } from "./cpf-input";
import { PhoneInput } from "./phone-input";
import { PrimaryButton, SecondaryButton, SectionCard } from "./ui";

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

const patientFormSchema = z.object({
  fullName: z.string().trim().min(1),
  birthDate: z.string().trim().min(1),
  sex: z.string().trim().min(1),
  currentUnit: z.string().trim().min(1),
  admissionDate: z.string().trim().min(1),
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

export function NewPacienteForm() {
  const handleSubmit = buildValidatedSubmitHandler(patientFormSchema);

  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        backHref="/pacientes"
        backLabel="Voltar para pacientes"
        description="Preencha os dados essenciais para iniciar o acompanhamento."
        icon={PeopleIcon}
        title="Novo paciente"
      />

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormSection title="Identificação">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Nome completo *">
              <TextInput name="fullName" placeholder="Nome do paciente" />
            </FormField>
            <FormField label="Número de prontuário">
              <TextInput name="recordNumber" placeholder="Ex: 004512" />
            </FormField>
            <FormField label="Data de nascimento">
              <DatePickerField defaultValue="2026-04-19" name="birthDate" />
            </FormField>
            <FormField label="Sexo">
              <SelectField defaultValue="" name="sex">
                <option value="" disabled>
                  Selecione
                </option>
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Outro</option>
                <option>Prefiro não informar</option>
              </SelectField>
            </FormField>
            <FormField label="CPF (opcional)">
              <CpfInput name="cpf" />
            </FormField>
            <FormField label="Telefone Familiar">
              <PhoneInput name="familyPhone" />
            </FormField>
          </div>

          <FormField label="Nome do familiar">
            <TextInput name="familyContactName" placeholder="Nome de um Familiar" />
          </FormField>
          
        </FormSection>

        <FormSection title="Internação">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Unidade atual">
              <SelectField defaultValue="Enfermaria" name="currentUnit">
                <option>Enfermaria</option>
                <option>UTI</option>
                <option>Urgência / Emergência</option>
                <option>Pediatria</option>
                <option>Maternidade</option>
              </SelectField>
            </FormField>
            <FormField label="Médico responsável">
              <TextInput name="responsibleDoctor" placeholder="Nome do responsável" />
            </FormField>
            <FormField label="Leito">
              <TextInput name="bed" placeholder="Ex: A-12" />
            </FormField>
            <FormField label="Quarto">
              <TextInput name="room" placeholder="Ex: 204" />
            </FormField>
            <FormField label="Data de admissão">
              <DatePickerField defaultValue="2026-04-19" name="admissionDate" />
            </FormField>
            <FormField label="Diagnóstico principal">
              <TextInput name="mainDiagnosis" placeholder="Motivo da internação" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="Clínico">
          <div className="grid gap-4 md:grid-cols-3">
            <FormField label="Peso">
              <TextInput name="weight" placeholder="0" suffix="kg" />
            </FormField>
            <FormField label="Altura">
              <TextInput name="height" placeholder="0,00" suffix="m" />
            </FormField>
            <FormField label="Alergias">
              <TextInput name="allergies" placeholder="Nega / dipirona..." />
            </FormField>
          </div>

          <FormField label="Observações gerais">
            <TextAreaField
              name="generalNotes"
              placeholder="Informações clínicas importantes, restrições e cuidados."
            />
          </FormField>
        </FormSection>

        <div className="flex items-center justify-end gap-3 pt-2">
          <SecondaryButton className="px-5 py-3" href="/pacientes">
            Cancelar
          </SecondaryButton>
          <PrimaryButton className="gap-2 px-5">
            <SaveIcon />
            Salvar paciente
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
}
