import {
  ChevronDownIcon,
  PeopleIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import {
  EmptyStateCard,
  PrimaryButton,
  SectionCard,
  SecondaryButton,
} from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Pacientes",
  description: "Gerencie sua lista de pacientes.",
};

export default function PatientsPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={PeopleIcon}
        title="Pacientes"
        description="Gerencie sua lista de pacientes."
        actions={
          <PrimaryButton className="gap-2">
            <PlusIcon />
            Novo paciente
          </PrimaryButton>
        }
      />

      <SectionCard className="mb-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_150px_110px]">
          <label className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-slate-400">
            <SearchIcon />
            <input
              placeholder="Buscar por nome, diagnóstico, leito..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>

          <select className="inline-flex items-center justify-between rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm font-medium text-white">
            <option value="Todas">Todas as unidades</option>
            <option value="Enfermaria">Enfermaria</option>
            <option value="Emergencia">Urgência / Emergência</option>
            <option value="Uti">UTI</option>
            <option value="Pediatria">Pediatria</option>
            <option value="CentroCirurgico">Centro Cirúrgico</option>
            <option value="HomeCare">Home Care</option>
            <option value="ClinicaMedica">Clínica Médica</option>
            <option value="ClinicaCirurgica">Clínica Cirúrgica</option>
            <option value="Maternidade">Maternidade</option>
            <option value="UnidadePersonalizada">Unidade Personalizada</option>
          </select>

          <select className="inline-flex items-center justify-between rounded-[1rem] border border-white/10 bg-[#0a1620] px-4 py-3 text-sm font-medium text-white">
            <option value="MaisRecentes">Mais recentes</option>
            <option value="NomeAZ">Nome A - Z</option>
            <option value="PorUnidade">Por unidade</option>
          </select>

          <SecondaryButton className="gap-2 rounded-[1rem] py-3">
            <StarIcon />
            Favoritos
          </SecondaryButton>
        </div>
      </SectionCard>

      <EmptyStateCard
        icon={PeopleIcon}
        title="Sem pacientes ainda"
        description="Cadastre seu primeiro paciente para começar a usar todas as funcionalidades."
        actionLabel="+ Cadastrar paciente"
        minHeightClassName="min-h-[280px]"
      />
    </section>
  );
}
