import { AlertBanner } from "./components/alert-banner";
import { DashboardHeader } from "./components/dashboard-header";
import { DashboardSidebar } from "./components/sidebar";
import { EmptyEvolutionsCard } from "./components/empty-evolutions-card";
import { QuickActions } from "./components/quick-actions";
import { RecentPatients } from "./components/recent-patients";
import { SummaryGrid } from "./components/summary-grid";
import {
  quickActions,
  recentPatients,
  sidebarItems,
  summaryCards,
} from "./data";

export const metadata = {
  title: "Nurse Assist | Dashboard",
  description: "Painel clínico com visão rápida do plantão.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top_left,_rgba(17,113,173,0.12),_transparent_18%),linear-gradient(180deg,_#07171f_0%,_#081820_100%)] text-slate-50">
      <div className="mx-auto grid min-h-dvh max-w-[1410px] lg:grid-cols-[218px_minmax(0,1fr)]">
        <DashboardSidebar items={sidebarItems} />

        <section className="min-w-0 px-5 py-5 md:px-7 lg:px-8">
          <DashboardHeader />

          <div className="mt-7 space-y-5">
            <SummaryGrid cards={summaryCards} />
            <AlertBanner />
            <QuickActions actions={quickActions} />

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.92fr)]">
              <RecentPatients patients={recentPatients} />
              <EmptyEvolutionsCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
