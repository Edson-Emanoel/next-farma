import { GridIcon } from "@/app/dashboard/components/icons";

import { CalculatorWorkspace } from "../_components/calculator-workspace";
import { PageHeader } from "../_components/page-header";

export const metadata = {
  title: "Nurse Assist | Calculadora",
  description: "Cálculo rápido e seguro para bomba infusora.",
};

export default function CalculatorPage() {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <PageHeader
        icon={GridIcon}
        title="Calculadora de Infusão Contínua"
        description="Cálculo rápido e seguro para bomba infusora"
      />

      <CalculatorWorkspace />
    </section>
  );
}
