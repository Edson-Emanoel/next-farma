import type { ReactNode } from "react";

import { ManagementLayoutShell } from "./management-layout-shell";

export default function ShiftManagementLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ManagementLayoutShell>{children}</ManagementLayoutShell>;
}
