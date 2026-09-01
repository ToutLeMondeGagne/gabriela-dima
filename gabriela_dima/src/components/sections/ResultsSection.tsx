import { useSiteContent } from "@/lib/useSiteContent";

export function ResultsSection() {
  const content = useSiteContent();
  const kpis = content?.kpis;

  if (!kpis?.length) return null;

  return (
    <section id="resultats" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">Résultats</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">
            Impact mesurable sur nos partenaires.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi._key}
              className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 font-display text-5xl font-bold text-blue">{kpi.value}</div>
              <div className="mb-4 font-display text-xl">{kpi.label}</div>
              <p className="text-sm leading-relaxed text-navy/60">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
