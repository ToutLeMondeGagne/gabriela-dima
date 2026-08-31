import testimonialRomain from "@/assets/testimonial-romain.jpg";
import testimonialHeidy  from "@/assets/testimonial-heidy.jpg";

export interface Testimonial {
  paragraphs: string[];
  name: string;
  role: string;
  linkedin: string;
  photo: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    paragraphs: [
      "Madame Dima a été d'un roc et d'une fiabilité exceptionnelle dans ses tâches de comptable et de financière. J'ai eu le privilège d'avoir des conseils éclairés et connaisseurs de sa part tout au long de notre temps ensemble. Gabriella Dima a une vision pointue, méticuleuse et même dévouée de la comptabilité qui permet à tout dirigeant d'être équipé, éclairé et accompagné dans son travail.",
      "Gabriella Dima a été de toutes les batailles, première à prendre les dossiers difficiles, à se porter volontaire pour aider les autres et s'est impliquée fortement à rendre notre organisation plus efficace, plus organisée et plus forte.",
    ],
    name: "Romain Duguay",
    role: "Directeur général, Société Saint-Vincent-de-Paul — Montréal",
    linkedin: "https://www.linkedin.com/in/romainduguay/",
    photo: testimonialRomain,
  },
  {
    paragraphs: [
      "Gabriela a su rapidement comprendre notre réalité d'affaires et nous apporter un accompagnement à la fois rigoureux, pragmatique et adapté à notre structure. Elle ne se limite pas à l'analyse des chiffres : elle aide à organiser l'information, à clarifier les priorités et à rendre les données financières réellement utiles pour la gestion quotidienne et les décisions stratégiques.",
      "Nous avons particulièrement apprécié son professionnalisme, sa fiabilité et sa capacité à vulgariser des enjeux financiers complexes sans les simplifier à l'excès.",
    ],
    name: "Heidy Pinsonneault-Grenier",
    role: "Fondatrice et dirigeante d'agence, HP & Associés",
    linkedin: "https://www.linkedin.com/in/heidy-pinsonneault-grenier-322b2653/",
    photo: testimonialHeidy,
  },
];
