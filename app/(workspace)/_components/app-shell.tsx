import type { ReactNode } from "react";

import { AppSidebar } from "./app-sidebar";

export function WorkspaceShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top_left,_rgba(15,134,201,0.12),_transparent_18%),linear-gradient(180deg,_#07131b_0%,_#07141c_100%)] text-slate-50">
      <div className="lg:grid lg:grid-cols-[204px_minmax(0,1fr)]">
        <AppSidebar />
        <main className="min-w-0 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
