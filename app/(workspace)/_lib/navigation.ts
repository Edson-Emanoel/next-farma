import type { ComponentType } from "react";

import {
  CalendarIcon,
  DashboardIcon,
  GridIcon,
  HistoryIcon,
  NotesIcon,
  PeopleIcon,
  PillIcon,
  PrescriptionIcon,
  SettingsIcon,
} from "@/app/dashboard/components/icons";

export type NavigationItem = {
  label: string;
  href: string;
  icon: ComponentType;
  matches?: string[];
};

export const appNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { label: "Pacientes", href: "/pacientes", icon: PeopleIcon },
  { label: "Evolução", href: "/evolucao", icon: NotesIcon },
  { label: "Medicações", href: "/medicacoes", icon: PillIcon },
  { label: "Prescrições", href: "/prescricoes", icon: PrescriptionIcon },
  { label: "Escala", href: "/escala", icon: CalendarIcon },
  {
    label: "Gestão de Escala",
    href: "/gestao-escala",
    icon: CalendarIcon,
    matches: ["/gestao-escala"],
  },
  { label: "Calculadora", href: "/calculadora", icon: GridIcon },
  { label: "Histórico", href: "/historico", icon: HistoryIcon },
  { label: "Configurações", href: "/configuracoes", icon: SettingsIcon },
];

export const managementTabs = [
  {
    label: "Grade Mensal",
    href: "/gestao-escala",
    iconName: "calendar" as const,
  },
  {
    label: "Equipe",
    href: "/gestao-escala/equipe",
    iconName: "people" as const,
  },
  {
    label: "Escalas Salvas",
    href: "/gestao-escala/escalas-salvas",
    iconName: "prescription" as const,
  },
];

export const profileSummary = {
  initials: "EE",
  name: "Edson Emanuel",
  email: "edson.teste@gmail.com",
};

export const personalScaleTabs = [
  {
    label: "Minha Escala",
    href: "/escala",
    iconName: "briefcase" as const,
  },
  {
    label: "Calendário",
    href: "/escala/calendario",
    iconName: "calendar" as const,
  },
  {
    label: "Plantões",
    href: "/escala/plantoes",
    iconName: "checklist" as const,
  },
  {
    label: "Folgas",
    href: "/escala/folgas",
    iconName: "cup" as const,
  },
  {
    label: "Férias",
    href: "/escala/ferias",
    iconName: "palmtree" as const,
  },
  {
    label: "Banco de Horas",
    href: "/escala/banco-horas",
    iconName: "clock" as const,
  },
  {
    label: "Relatórios",
    href: "/escala/relatorios",
    iconName: "chart" as const,
  },
  {
    label: "Configurações",
    href: "/escala/configuracoes",
    iconName: "settings" as const,
  },
];
