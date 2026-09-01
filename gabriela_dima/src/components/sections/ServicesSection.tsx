import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity";

interface SanityService {
  _id: string;
  title: string;
  description: string;
  extra?: string;
}

const QUERY = `*[_type == "service"] | order(order asc) { _id, title, description, extra }`;

function FlipCard({ title, description, extra }: Omit<SanityService, "_id">) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-72 cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-pressed={flipped}
    >
      <div className={`flip-card-inner rounded-3xl${flipped ? " is-flipped" : ""}`}>
        <div className="flip-card-front flex flex-col items-center justify-center gap-6 rounded-3xl border-2 bg-white p-8 text-center shadow-sm" style={{ borderColor: "#c9a227" }}>
          <h3 className="font-display text-xl leading-snug">{title}</h3>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            En savoir plus →
          </span>
        </div>
        <div className="flip-card-back flex flex-col gap-3 rounded-3xl bg-navy p-8 text-white">
          <button
            className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white/80"
            onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
          >
            <ArrowLeft className="size-3" /> Retour
          </button>
          <div className="space-y-3 overflow-y-auto text-sm leading-relaxed text-white/85">
            {description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {extra && (
              <p className="mt-2 rounded-xl bg-white/10 px-4 py-3 text-xs text-white/70">{extra}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [services, setServices] = useState<SanityService[]>([]);

  useEffect(() => {
    sanityClient.fetch<SanityService[]>(QUERY).then(setServices);
  }, []);

  if (services.length === 0) return null;

  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">Services offerts</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">
            Une expertise adaptée à chaque étape.
          </h2>
          <div className="mt-6 h-1 w-20 bg-blue" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <FlipCard key={s._id} title={s.title} description={s.description} extra={s.extra} />
          ))}
        </div>
      </div>
    </section>
  );
}
