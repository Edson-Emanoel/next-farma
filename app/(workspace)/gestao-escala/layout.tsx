import type { ReactNode } from "react";

import { TabsNav } from "../_components/tabs-nav";
import { managementTabs } from "../_lib/navigation";

export default function ShiftManagementLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="mx-auto max-w-[860px] pb-8">
      <TabsNav items={managementTabs} />
      {children}
    </section>
  );
}
