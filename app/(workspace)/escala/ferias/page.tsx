import { PalmtreeIcon, PlusIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { EmptyStateCard, PrimaryButton, StatCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Férias",
  description: "Planeje e acompanhe seus períodos de descanso.",
};

export default function ScaleVacationPage() {
  return (
    <>
      <PageHeader
        icon={PalmtreeIcon}
        title="Férias"
        description="Planeje e acompanhe seus períodos de descanso."
        actions={
          <PrimaryButton className="gap-2">
            <PlusIcon />
            Novas férias
          </PrimaryButton>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          icon={PalmtreeIcon}
          label="Próximas férias"
          value="—"
          detail="Sem programação"
        />
        <StatCard
          icon={PalmtreeIcon}
          label="Usadas no ano"
          value="0 dias"
          detail="de 30 disponíveis"
        />
        <StatCard
          icon={PalmtreeIcon}
          label="Saldo"
          value="30 dias"
          detail="restantes em 2026"
          accent="bg-sky-500/16 text-sky-300"
        />
      </div>

      <div className="mt-4">
        <EmptyStateCard
          icon={PalmtreeIcon}
          title="Sem férias planejadas"
          description="Programe suas férias para visualizar tudo no calendário."
          actionLabel="+ Novas férias"
          minHeightClassName="min-h-[220px]"
        />
      </div>
    </>
  );
}
