export interface ServiceCard {
  title: string;
  description: string;
  extra?: string;
}

export const PME_SERVICES: ServiceCard[] = [
  {
    title: "Gestion de la croissance",
    description:
      "Votre entreprise est en pleine croissance, mais vos processus peinent à suivre ? Vous avez l'impression de tout porter sur vos épaules, de manquer de temps et de prendre des décisions dans l'urgence, sans une vision claire de votre situation financière ?\n\nGabriela vous aide à reprendre le contrôle. Elle vous apporte une vision claire de votre situation financière et un plan d'implémentation d'outils de gestion et de processus adaptés pour améliorer vos décisions et soutenir une croissance durable.",
  },
  {
    title: "Implantation d'outils de gestion et ERP",
    description:
      "Votre entreprise a dépassé les limites de ses outils actuels ? Vos données sont dispersées, vos processus sont inefficaces et vous manquez de visibilité pour prendre des décisions éclairées ?\n\nGabriela vous accompagne dans l'implantation et l'optimisation de solutions ERP. De l'analyse de vos besoins à la mise en œuvre, elle vous aide à structurer vos processus, fiabiliser vos données financières et tirer pleinement parti de votre ERP.",
    extra: "ERP intégrés : Microsoft Dynamics 365, NetSuite, Sage, Acomba, QuickBooks et Business Central",
  },
  {
    title: "Redressement financier",
    description:
      "Votre entreprise existe depuis plusieurs années, mais elle rencontre des difficultés en termes de performance, de rentabilité ou d'efficacité ? Vous stagnez et vous ne savez pas où se situent les blocages ? Vous souhaitez comprendre ce qui freine la performance et mettre en place des solutions concrètes ?\n\nGabriela Dima vous propose un plan d'amélioration réaliste pour remettre l'entreprise sur de meilleures bases financières et organisationnelles et la remettre en mouvement. Elle vous aide à protéger ce qui a été construit.",
  },
  {
    title: "Achat d'entreprises et acquisition",
    description:
      "Vous traversez une étape importante, comme une transmission, une acquisition, une préparation à la vente, une réorganisation ou une forte expansion ? Vous recherchez un accompagnement pour rendre votre entreprise plus stable, plus lisible et plus transférable ?\n\nGabriela Dima vous donnera les outils nécessaires pour sécuriser la transition, protéger la valeur de l'entreprise et rendre l'organisation plus durable.",
  },
];

export const STARTUP_POINTS: string[] = [
  "Votre chiffre d'affaires augmente, mais vos marges stagnent ? Avec l'accompagnement de Gabriela Dima, vous bénéficierez d'une meilleure visibilité sur vos marges, vous choisirez les bons outils de gestion et prendrez des décisions plus éclairées.",
  "Obtenez les outils financiers et les prévisions nécessaires pour croître de façon durable pendant que vous vous concentrez sur vos ventes.",
  "Transformez vos données financières en décisions concrètes pour stabiliser et éventuellement accélérer votre développement.",
];
