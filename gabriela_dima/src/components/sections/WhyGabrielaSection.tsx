import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import executiveDesk from "@/assets/executive-desk.jpg";
import { useSiteContent } from "@/lib/useSiteContent";

export function WhyGabrielaSection() {
  const content = useSiteContent();
  const why = content?.whyGabriela;

  const features = why?.features ?? [
    { _key: "f1", title: "Approche humaine", description: "Une écoute active pour comprendre vos enjeux profonds, bien au-delà des chiffres." },
    { _key: "f2", title: "Solutions concrètes", description: "Pas de théorie. Uniquement des outils actionnables dès la prochaine réunion." },
    { _key: "f3", title: "Accompagnement personnalisé", description: "Chaque entreprise est unique. Mes conseils s'adaptent à votre réalité, pas l'inverse." },
    { _key: "f4", title: "Résultats mesurables", description: "Un impact direct sur votre rentabilité, votre trésorerie et votre capacité de croissance." },
  ];

  return (
    <section className="bg-navy px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                Pourquoi Gabriela
              </span>
              <h2 className="font-display text-4xl lg:text-5xl">
                {why?.title ?? "L'excellence financière alliée à l'approche humaine."}
              </h2>
              {why?.intro && (
                <p className="leading-relaxed text-white/75">{why.intro}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f._key} className="rounded-2xl bg-white/10 p-5">
                  <div className="mb-3 flex size-7 items-center justify-center rounded-lg bg-blue/20">
                    <Check className="size-4 text-blue" />
                  </div>
                  <h3 className="mb-1 font-semibold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{f.description}</p>
                </div>
              ))}
            </div>

            <Link
              to="/reserver"
              className="inline-flex items-center gap-2 font-semibold text-blue transition-all hover:gap-3"
            >
              Discutons de votre projet <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-full shadow-2xl ring-1 ring-white/10">
              <img
                src={executiveDesk}
                alt="Outils financiers et stratégiques"
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-4 text-navy shadow-xl">
              <div className="font-display text-2xl font-bold text-blue">100%</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">
                Confidentialité
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
