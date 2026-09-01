/**
 * Seed script — populates Sanity with initial site content.
 *
 * Setup:
 *  1. Go to https://www.sanity.io/manage → your project → API → Tokens
 *  2. Create a token with "Editor" permissions
 *  3. Run: SANITY_TOKEN=your_token node seed.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("❌  Missing SANITY_TOKEN env var. See instructions at top of file.");
  process.exit(1);
}

const client = createClient({
  projectId: "fyq61r33",
  dataset: "production_gabriela",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const documents = [
  // ── Site Content (singleton) ─────────────────────────────────────────────
  {
    _id: "siteContent",
    _type: "siteContent",
    hero: {
      sloganLine1: "La rigueur d'une ingénieure.",
      sloganLine2: "La vision d'une experte.",
      sloganLine3: "Au service de votre croissance.",
      description:
        "Je vous aide à établir les structures financières nécessaires pour atteindre vos ambitions de croissance. Je vous accompagne dans les stratégies qui transformeront vos données financières en outils d'aide à la décision, afin de soutenir votre croissance à terme et une meilleure performance.",
      ctaButton: "Réserver un appel découverte",
      ctaSecondary: "Découvrir mes services",
      yearsValue: "15+",
      yearsLabel: "Années d'expérience",
    },
    about: {
      title: "Une expertise ancrée dans la performance et la clarté",
      mainText:
        "Titulaire d'un MBA en finance et d'un DESS en comptabilité de management de l'Université du Québec à Montréal (UQAM), Gabriela Dima est membre de l'Ordre des CPA du Canada depuis 2011. Sa vision repose sur un constat simple : une entreprise se transforme par une série de bonnes décisions prises au bon moment. Son rôle consiste à apporter la visibilité financière nécessaire pour franchir ces étapes en toute confiance, en mariant rigueur technique et approche pragmatique.",
      approachText:
        "Mon approche : combiner la logique d'une ingénieure et l'expertise financière d'une CPA pour transformer vos défis de croissance en décisions stratégiques.",
      credentialsList: [
        "CPA — Ordre des comptables professionnels",
        "Services financiers et de comptabilité",
        "MBA en gestion stratégique",
        "Services en présentiel et en ligne",
      ],
      ctaText: "Discutons de vos défis",
    },
    whyGabriela: {
      title: "L'excellence financière alliée à l'approche humaine.",
      intro:
        "Mon approche est simple : combiner la logique d'une ingénieure et l'expertise financière d'une CPA pour transformer vos défis de croissance en décisions stratégiques.",
      features: [
        {
          _key: "f1",
          title: "Approche humaine",
          description: "Une écoute active pour comprendre vos enjeux profonds, bien au-delà des chiffres.",
        },
        {
          _key: "f2",
          title: "Solutions concrètes",
          description: "Pas de théorie. Uniquement des outils actionnables dès la prochaine réunion.",
        },
        {
          _key: "f3",
          title: "Accompagnement personnalisé",
          description: "Chaque entreprise est unique. Mes conseils s'adaptent à votre réalité, pas l'inverse.",
        },
        {
          _key: "f4",
          title: "Résultats mesurables",
          description: "Un impact direct sur votre rentabilité, votre trésorerie et votre capacité de croissance.",
        },
      ],
    },
    kpis: [
      {
        _key: "kpi1",
        value: "+35%",
        label: "Croissance accélérée",
        description: "Optimisation des marges opérationnelles d'une PME manufacturière en 12 mois.",
      },
      {
        _key: "kpi2",
        value: "12M$",
        label: "Acquisition réussie",
        description: "Accompagnement stratégique de bout en bout du processus d'achat d'un compétiteur.",
      },
      {
        _key: "kpi3",
        value: "-22%",
        label: "Optimisation financière",
        description: "Réduction des coûts de structure sans perte de talent ni qualité de service.",
      },
    ],
    cta: {
      title: "Prêt à faire évoluer votre entreprise ?",
      subtitle: "Réservez une consultation stratégique initiale — sans frais et sans engagement.",
      buttonText: "Planifier une rencontre",
    },
  },

  // ── Services ─────────────────────────────────────────────────────────────
  {
    _id: "service-1",
    _type: "service",
    order: 1,
    title: "Gestion de la croissance",
    description:
      "Votre entreprise est en pleine croissance, mais vos processus peinent à suivre ? Vous avez l'impression de tout porter sur vos épaules, de manquer de temps et de prendre des décisions dans l'urgence, sans une vision claire de votre situation financière ?\n\nGabriela vous aide à reprendre le contrôle. Elle vous apporte une vision claire de votre situation financière et un plan d'implémentation d'outils de gestion et de processus adaptés pour améliorer vos décisions et soutenir une croissance durable.",
  },
  {
    _id: "service-2",
    _type: "service",
    order: 2,
    title: "Implantation d'outils de gestion et ERP",
    description:
      "Votre entreprise a dépassé les limites de ses outils actuels ? Vos données sont dispersées, vos processus sont inefficaces et vous manquez de visibilité pour prendre des décisions éclairées ?\n\nGabriela vous accompagne dans l'implantation et l'optimisation de solutions ERP. De l'analyse de vos besoins à la mise en œuvre, elle vous aide à structurer vos processus, fiabiliser vos données financières et tirer pleinement parti de votre ERP.",
    extra: "ERP intégrés : Microsoft Dynamics 365, NetSuite, Sage, Acomba, QuickBooks et Business Central",
  },
  {
    _id: "service-3",
    _type: "service",
    order: 3,
    title: "Redressement financier",
    description:
      "Votre entreprise existe depuis plusieurs années, mais elle rencontre des difficultés en termes de performance, de rentabilité ou d'efficacité ? Vous stagnez et vous ne savez pas où se situent les blocages ?\n\nGabriela Dima vous propose un plan d'amélioration réaliste pour remettre l'entreprise sur de meilleures bases financières et organisationnelles. Elle vous aide à protéger ce qui a été construit.",
  },
  {
    _id: "service-4",
    _type: "service",
    order: 4,
    title: "Achat d'entreprises et acquisition",
    description:
      "Vous traversez une étape importante, comme une transmission, une acquisition, une préparation à la vente, une réorganisation ou une forte expansion ? Vous recherchez un accompagnement pour rendre votre entreprise plus stable, plus lisible et plus transférable ?\n\nGabriela Dima vous donnera les outils nécessaires pour sécuriser la transition, protéger la valeur de l'entreprise et rendre l'organisation plus durable.",
  },

  // ── Testimonials (sans photos — à uploader manuellement dans le Studio) ───
  {
    _id: "testimonial-1",
    _type: "testimonial",
    order: 1,
    name: "Romain Duguay",
    role: "Directeur général, Société Saint-Vincent-de-Paul — Montréal",
    linkedin: "https://www.linkedin.com/in/romainduguay/",
    paragraphs: [
      "Madame Dima a été d'un roc et d'une fiabilité exceptionnelle dans ses tâches de comptable et de financière. J'ai eu le privilège d'avoir des conseils éclairés et connaisseurs de sa part tout au long de notre temps ensemble. Gabriella Dima a une vision pointue, méticuleuse et même dévouée de la comptabilité qui permet à tout dirigeant d'être équipé, éclairé et accompagné dans son travail.",
      "Gabriella Dima a été de toutes les batailles, première à prendre les dossiers difficiles, à se porter volontaire pour aider les autres et s'est impliquée fortement à rendre notre organisation plus efficace, plus organisée et plus forte.",
    ],
  },
  {
    _id: "testimonial-2",
    _type: "testimonial",
    order: 2,
    name: "Heidy Pinsonneault-Grenier",
    role: "Fondatrice et dirigeante d'agence, HP & Associés",
    linkedin: "https://www.linkedin.com/in/heidy-pinsonneault-grenier-322b2653/",
    paragraphs: [
      "Gabriela a su rapidement comprendre notre réalité d'affaires et nous apporter un accompagnement à la fois rigoureux, pragmatique et adapté à notre structure. Elle ne se limite pas à l'analyse des chiffres : elle aide à organiser l'information, à clarifier les priorités et à rendre les données financières réellement utiles pour la gestion quotidienne et les décisions stratégiques.",
      "Nous avons particulièrement apprécié son professionnalisme, sa fiabilité et sa capacité à vulgariser des enjeux financiers complexes sans les simplifier à l'excès.",
    ],
  },

  // ── Partners (sans logo — à uploader manuellement dans le Studio) ─────────
  {
    _id: "partner-1",
    _type: "partner",
    order: 1,
    name: "TMG — Tout le Monde Gagne",
    url: "https://tmgconsultation.org",
    description:
      "TMG est une agence web et marketing spécialisée pour les PME et les OBNL à Montréal. C'est en collaboration avec leur équipe que ce site a été conçu — une expertise digitale au service d'une présence en ligne qui reflète fidèlement la valeur d'un accompagnement financier d'exception.",
  },
];

async function seed() {
  console.log("🌱 Seeding Sanity dataset...\n");

  for (const doc of documents) {
    try {
      await client.createOrReplace(doc);
      console.log(`✅  ${doc._type} — ${doc._id}`);
    } catch (err) {
      console.error(`❌  ${doc._type} — ${doc._id}:`, err.message);
    }
  }

  console.log("\n✨ Done! Open the Studio to add photos for testimonials and the TMG logo.");
}

seed();
