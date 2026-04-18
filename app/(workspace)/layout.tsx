import type { ReactNode } from "react";

import { WorkspaceShell } from "./_components/app-shell";

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <WorkspaceShell>{children}</WorkspaceShell>;
}
