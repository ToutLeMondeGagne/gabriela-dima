export interface Kpi {
  value: string;
  label: string;
  description: string;
}

export const KPIS: Kpi[] = [
  {
    value: "+35%",
    label: "Croissance accélérée",
    description: "Optimisation des marges opérationnelles d'une PME manufacturière en 12 mois.",
  },
  {
    value: "12M$",
    label: "Acquisition réussie",
    description: "Accompagnement stratégique de bout en bout du processus d'achat d'un compétiteur.",
  },
  {
    value: "-22%",
    label: "Optimisation financière",
    description: "Réduction des coûts de structure sans perte de talent ni qualité de service.",
  },
];
