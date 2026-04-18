import { HistoryIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../_components/page-header";
import { EmptyStateCard } from "../_components/ui";

export const metadata = {
  title: "Nurse Assist | Histórico",
  description: "Suas últimas evoluções e registros.",
};

export default function HistoryPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={HistoryIcon}
        title="Histórico"
        description="Suas últimas evoluções e registros."
      />

      <EmptyStateCard
        icon={HistoryIcon}
        title="Sem registros"
        description="Suas atividades aparecerão aqui."
        minHeightClassName="min-h-[180px]"
      />
    </section>
  );
}
