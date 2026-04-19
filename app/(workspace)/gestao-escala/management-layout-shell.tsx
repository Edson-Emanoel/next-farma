"use client";

import type { ReactNode } from "react";
import { useSelectedLayoutSegments } from "next/navigation";

import { TabsNav } from "../_components/tabs-nav";
import { managementTabs } from "../_lib/navigation";

export function ManagementLayoutShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const segments = useSelectedLayoutSegments();
  const shouldHideTabs = segments[0] === "equipe" && segments[1] === "novo";

  return (
    <section className="mx-auto max-w-[860px] pb-8">
      {shouldHideTabs ? null : <TabsNav items={managementTabs} />}
      {children}
    </section>
  );
}
