import { FolderIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { EmptyStateCard } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Escalas salvas",
  description: "Histórico das escalas que você publicou ou deixou em rascunho.",
};

export default function ShiftManagementSavedPage() {
  return (
    <>
      <PageHeader
        icon={FolderIcon}
        title="Escalas salvas"
        description="Histórico das escalas que você publicou ou deixou em rascunho."
      />

      <EmptyStateCard
        icon={FolderIcon}
        title="Você ainda não salvou nenhuma escala mensal."
        description=""
        actionLabel="Criar grade do mês"
        actionHref="/gestao-escala"
        minHeightClassName="min-h-[170px]"
      />
    </>
  );
}
