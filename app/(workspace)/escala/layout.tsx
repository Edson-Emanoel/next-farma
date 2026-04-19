import type { ReactNode } from "react";

import { TabsNav } from "../_components/tabs-nav";
import { personalScaleTabs } from "../_lib/navigation";

export default function PersonalScaleLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="mx-auto max-w-[1120px] pb-8">
      <TabsNav items={personalScaleTabs} />

      {children}
    </section>
  );
}
