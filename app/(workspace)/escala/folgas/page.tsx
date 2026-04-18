import { CupIcon, PlusIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { EmptyStateCard, PrimaryButton, StatCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Folgas",
  description: "Folgas, licenças e feriados.",
};

export default function ScaleDaysOffPage() {
  return (
    <>
      <PageHeader
        icon={CupIcon}
        title="Folgas"
        description="Folgas, licenças e feriados."
        actions={
          <PrimaryButton className="gap-2">
            <PlusIcon />
            Nova folga
          </PrimaryButton>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={CupIcon} label="Folgas no mês" value="0" detail="" />
        <StatCard icon={CupIcon} label="Programadas" value="0" detail="" />
        <StatCard icon={CupIcon} label="Total registrado" value="0" detail="" />
      </div>

      <div className="mt-4">
        <EmptyStateCard
          icon={CupIcon}
          title="Sem folgas registradas"
          description="Marque suas folgas para ter um controle melhor da sua escala."
          actionLabel="+ Nova folga"
          minHeightClassName="min-h-[220px]"
        />
      </div>
    </>
  );
}
