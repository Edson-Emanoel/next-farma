import { PeopleIcon, PlusIcon } from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import { EmptyStateCard, PrimaryButton } from "../../_components/ui";

export const metadata = {
  title: "Nurse Assist | Equipe",
  description: "Cadastro rápido dos profissionais para montar a escala.",
};

export default function ShiftManagementTeamPage() {
  return (
    <>
      <PageHeader
        icon={PeopleIcon}
        title="Equipe"
        description="Cadastro rápido dos profissionais para montar a escala."
        actions={
          <PrimaryButton className="gap-2" href="/gestao-escala/equipe/novo">
            <PlusIcon />
            Novo
          </PrimaryButton>
        }
      />

      <EmptyStateCard
        icon={PeopleIcon}
        title="Nenhum funcionário cadastrado ainda."
        description=""
        actionLabel="+ Cadastrar primeiro"
        actionHref="/gestao-escala/equipe/novo"
        minHeightClassName="min-h-[170px]"
      />
    </>
  );
}
