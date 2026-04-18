"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChartIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChecklistIcon,
  ClockIcon,
  CupIcon,
  PeopleIcon,
  PalmtreeIcon,
  PrescriptionIcon,
  SettingsIcon,
} from "@/app/dashboard/components/icons";

type TabItem = {
  label: string;
  href: string;
  iconName?:
    | "calendar"
    | "people"
    | "prescription"
    | "checklist"
    | "cup"
    | "palmtree"
    | "clock"
    | "chart"
    | "settings"
    | "briefcase";
  matches?: string[];
};

type TabsNavProps = {
  items: TabItem[];
};

const iconMap = {
  calendar: CalendarIcon,
  people: PeopleIcon,
  prescription: PrescriptionIcon,
  checklist: ChecklistIcon,
  cup: CupIcon,
  palmtree: PalmtreeIcon,
  clock: ClockIcon,
  chart: BarChartIcon,
  settings: SettingsIcon,
  briefcase: BriefcaseIcon,
};

function isTabActive(pathname: string, href: string, matches?: string[]) {
  if (pathname === href) {
    return true;
  }

  return matches?.some((match) => pathname.startsWith(match)) ?? false;
}

export function TabsNav({ items }: TabsNavProps) {
  const pathname = usePathname();

  return (
    <div className="mb-5 border-b border-white/8">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = isTabActive(pathname, item.href, item.matches);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-t-[1rem] border border-b-0 px-4 py-3 text-sm font-medium transition ${
                active
                  ? "border-sky-400/30 bg-sky-500/18 text-sky-300"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {item.iconName
                ? (() => {
                    const Icon = iconMap[item.iconName];
                    return <Icon />;
                  })()
                : null}
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
