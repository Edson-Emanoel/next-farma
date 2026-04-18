import { PeopleIcon, PillIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import { EmptyStateCard } from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Medicações",
  description: "Gerencie medicações dos seus pacientes.",
};

export default function MedicationsPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={PillIcon}
        title="Medicações"
        description="Gerencie medicações dos seus pacientes."
      />

      <p className="mb-4 text-sm text-slate-400">
        Selecione um paciente para acessar a aba <strong>Medicações</strong>.
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
