import { AlertBanner } from "@/app/dashboard/components/alert-banner";
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { EmptyEvolutionsCard } from "@/app/dashboard/components/empty-evolutions-card";
import { QuickActions } from "@/app/dashboard/components/quick-actions";
import { RecentPatients } from "@/app/dashboard/components/recent-patients";
import { SummaryGrid } from "@/app/dashboard/components/summary-grid";
import {
  quickActions,
  recentPatients,
  summaryCards,
} from "@/app/dashboard/data";

export const metadata = {
  title: "Nurse Assist | Dashboard",
  description: "Painel clínico com visão rápida do plantão.",
};

export default function DashboardPage() {
  return (
    <section className="pt-1">
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
  );
}
