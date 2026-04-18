import {
  PeopleIcon,
  PrescriptionIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import { EmptyStateCard } from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Prescrições",
  description: "Cuidados e templates por unidade.",
};

export default function PrescriptionsPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={PrescriptionIcon}
        title="Prescrições de enfermagem"
        description="Cuidados e templates por unidade."
      />

      <p className="mb-4 text-sm text-slate-400">
        Selecione um paciente para acessar a aba <strong>Prescrições</strong>.
      </p>

      <EmptyStateCard
        icon={PeopleIcon}
        title="Sem pacientes ainda"
        description="Cadastre um paciente para começar."
        actionLabel="Novo paciente"
        minHeightClassName="min-h-[280px]"
      />
    </section>
  );
}
