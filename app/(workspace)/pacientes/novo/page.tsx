import { NewPacienteForm } from "../../_components/newPacienteForm";

export const metadata = {
  title: "Nurse Assist | Novo paciente",
  description: "Cadastre um novo paciente.",
};

export default function NewPatientPage() {
  return <NewPacienteForm />;
}
