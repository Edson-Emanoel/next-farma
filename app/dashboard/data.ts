import {
  AlertIcon,
  CalendarIcon,
  DashboardIcon,
  GridIcon,
  HistoryIcon,
  NotesIcon,
  PeopleIcon,
  PillIcon,
  PrescriptionIcon,
  SettingsIcon,
} from "./components/icons";

export const sidebarItems = [
  { label: "Dashboard", icon: DashboardIcon, active: true },
  { label: "Pacientes", icon: PeopleIcon },
  { label: "Evolução", icon: NotesIcon },
  { label: "Medicações", icon: PillIcon },
  { label: "Prescrições", icon: PrescriptionIcon },
  { label: "Escala", icon: CalendarIcon },
  { label: "Gestão de Escala", icon: CalendarIcon },
  { label: "Calculadora", icon: GridIcon },
  { label: "Histórico", icon: HistoryIcon },
  { label: "Configurações", icon: SettingsIcon },
];

export const summaryCards = [
  {
    title: "Pacientes ativos",
    value: "4",
    detail: "0 favoritos",
    tone: "bg-cyan-500/14 text-cyan-300",
    icon: PeopleIcon,
  },
  {
    title: "Evoluções hoje",
    value: "0",
    detail: "registros do plantão",
    tone: "bg-emerald-500/14 text-emerald-300",
    icon: NotesIcon,
  },
  {
    title: "Pacientes com alergias",
    value: "1",
    detail: "atenção redobrada",
    tone: "bg-amber-500/14 text-amber-300",
    icon: AlertIcon,
  },
  {
    title: "Hora atual",
    value: "11:14",
    detail: "sáb.",
    tone: "bg-slate-500/14 text-slate-300",
    icon: HistoryIcon,
  },
];

export const quickActions = [
  {
    label: "Pacientes",
    description: "",
    tone: "bg-blue-500/20 text-blue-300",
    icon: PeopleIcon,
    href: "/pacientes",
  },
  {
    label: "Evolução",
    description: "",
    tone: "bg-emerald-500/20 text-emerald-300",
    icon: NotesIcon,
    href: "/evolucao",
  },
  {
    label: "Medicações",
    description: "",
    tone: "bg-violet-500/20 text-violet-300",
    icon: PillIcon,
    href: "/medicacoes",
  },
  {
    label: "Prescrições",
    description: "",
    tone: "bg-orange-500/20 text-orange-300",
    icon: PrescriptionIcon,
    href: "/prescricoes",
  },
  {
    label: "Calculadora",
    description: "",
    tone: "bg-sky-500/20 text-sky-300",
    icon: GridIcon,
    href: "/calculadora",
  },
  {
    label: "Histórico",
    description: "",
    tone: "bg-pink-500/20 text-pink-300",
    icon: HistoryIcon,
    href: "/historico",
  },
];

export const recentPatients = [
  {
    name: "Breno Martins",
    unit: "ENF",
    status: "",
    accent: "from-sky-500/30 to-sky-500/10",
  },
  {
    name: "Aline Oliveira",
    unit: "URG",
    status: "",
    accent: "from-cyan-500/30 to-cyan-500/10",
  },
  {
    name: "Elenice Almeida",
    unit: "URG",
    status: "Leito A-12 · Paciente em tratamento Oncológico",
    accent: "from-blue-500/30 to-blue-500/10",
  },
  {
    name: "Roberto Sousa",
    unit: "UTI",
    status: "",
    accent: "from-sky-500/30 to-sky-500/10",
  },
];
