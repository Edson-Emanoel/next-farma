import {
  ChecklistIcon,
  PlusIcon,
  SwapIcon,
} from "@/app/dashboard/components/icons";

import { PageHeader } from "../../_components/page-header";
import {
  EmptyStateCard,
  PrimaryButton,
  SecondaryButton,
} from "../../_components/ui";

const filterTabs = ["Próximos", "Todos", "Extras", "Anteriores"];

export const metadata = {
  title: "Nurse Assist | Plantões",
  description: "Lista completa, filtros, duplicação rápida e trocas.",
};

export default function ScaleShiftsPage() {
  return (
    <>
      <PageHeader
        icon={ChecklistIcon}
        title="Plantões"
        description="Lista completa, filtros, duplicação rápida e trocas."
        actions={
          <div className="flex flex-wrap gap-3">
            <SecondaryButton className="gap-2" href="/gestao-escala">
              <SwapIcon />
              Troca
            </SecondaryButton>
            <PrimaryButton className="gap-2" href="/escala/plantoes/novo">
              <PlusIcon />
              Novo plantão
            </PrimaryButton>
          </div>
        }
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {filterTabs.map((tab, index) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              index === 0
                ? "bg-sky-500 text-white"
                : "bg-white/6 text-slate-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <EmptyStateCard
        icon={ChecklistIcon}
        title="Nenhum plantão"
        description="Adicione seu primeiro plantão para começar a organizar a escala."
        actionLabel="+ Novo plantão"
        actionHref="/escala/plantoes/novo"
        minHeightClassName="min-h-[220px]"
      />
    </>
  );
}
