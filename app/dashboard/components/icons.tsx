import type { SVGProps } from "react";

function iconProps(): SVGProps<SVGSVGElement> {
  return {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
}

export function PulseBadgeIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M8 3v5a4 4 0 0 0 8 0V3" />
      <path d="M10 3v5" />
      <path d="M14 3v5" />
      <path d="M12 12v9" />
      <path d="M12 21a4 4 0 0 0 4-4v-1" />
      <path d="M16 12a3 3 0 1 0 0 6" />
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="11" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="17" width="7" height="4" rx="1.5" />
    </svg>
  );
}

export function PeopleIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M15 3.13a3.5 3.5 0 0 1 0 6.74" />
    </svg>
  );
}

export function NotesIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

export function PillIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z" />
      <path d="m8 8 8 8" />
    </svg>
  );
}

export function PrescriptionIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function HistoryIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 3v6h6" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-.4-1.1 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2.8a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.1-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2.8a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 .4 1.1 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.26.3.4.65.4 1v.1a2 2 0 1 1 0 4H19.7a1.7 1.7 0 0 0-1.1.4 1.7 1.7 0 0 0-.6 1Z" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function AlertIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function GridIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="4" y="4" width="6" height="6" rx="1.2" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m12 3.5 2.8 5.67 6.27.91-4.54 4.43 1.07 6.25L12 17.8l-5.6 2.96 1.07-6.25-4.54-4.43 6.27-.91Z" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function SaveIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="M17 21v-8H7v8" />
      <path d="M7 3v5h8" />
    </svg>
  );
}

export function LogOutIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function ActivityIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}

export function BeakerIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M10 2v6l-5 8a4 4 0 0 0 3.4 6h7.2A4 4 0 0 0 19 16l-5-8V2" />
      <path d="M8 2h8" />
      <path d="M7 14h10" />
    </svg>
  );
}

export function ChecklistIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="m4 6 1.5 1.5L7.5 5" />
      <path d="m4 12 1.5 1.5L7.5 11" />
    </svg>
  );
}

export function CupIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M7 6h8v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4Z" />
      <path d="M15 7h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 19h6" />
    </svg>
  );
}

export function PalmtreeIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M12 21v-8" />
      <path d="M12 13c-1-3-4-5-7-5 2.5-1 5.5-.6 8 1" />
      <path d="M12 13c1-3 4-5 7-5-2.5-1-5.5-.6-8 1" />
      <path d="M12 13c-2.5-2.5-3-6-2-9 2 1 3.5 3.5 4 6" />
    </svg>
  );
}

export function BarChartIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20v-3" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function SwapIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M7 7h11" />
      <path d="m14 4 4 3-4 3" />
      <path d="M17 17H6" />
      <path d="m10 14-4 3 4 3" />
    </svg>
  );
}

export function PrinterIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M6 9V4h12v5" />
      <rect x="6" y="14" width="12" height="6" rx="1" />
      <rect x="3" y="9" width="18" height="7" rx="2" />
    </svg>
  );
}
