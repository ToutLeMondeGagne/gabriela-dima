import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export function CtaSection() {
  const content = useSiteContent();
  const cta = content?.cta;

  return (
    <section className="bg-navy px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="font-display text-4xl text-balance text-white md:text-6xl">
          {cta?.title ?? "Prêt à faire évoluer votre entreprise ?"}
        </h2>
        <p className="text-lg text-white/70">
          {cta?.subtitle ?? "Réservez une consultation stratégique initiale — sans frais et sans engagement."}
        </p>
        <Link
          to="/reserver"
          className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-navy shadow-xl shadow-black/20 transition-transform hover:scale-105 active:scale-95"
        >
          <Calendar className="size-5" />
          {cta?.buttonText ?? "Planifier une rencontre"}
        </Link>
      </div>
    </section>
  );
}
