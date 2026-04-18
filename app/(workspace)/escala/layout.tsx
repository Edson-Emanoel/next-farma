import type { ReactNode } from "react";
import Link from "next/link";

import { CalendarIcon } from "@/app/dashboard/components/icons";

import { InfoStrip } from "../_components/ui";
import { TabsNav } from "../_components/tabs-nav";
import { personalScaleTabs } from "../_lib/navigation";

export default function PersonalScaleLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <TabsNav items={personalScaleTabs} />

      <InfoStrip
        icon={CalendarIcon}
        tone="green"
        action={
          <Link
            href="/gestao-escala"
            className="text-sm font-medium text-sky-300 transition hover:text-sky-200"
          >
            Ir para Gestão de Equipe
          </Link>
        }
      >
        <strong>Modo Pessoal</strong>: Plantões, folgas e férias do seu próprio
        expediente.
      </InfoStrip>

      {children}
    </section>
  );
}
