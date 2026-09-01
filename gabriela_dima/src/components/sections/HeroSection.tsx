import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import gabrielaPortrait from "@/assets/gabriela-portrait.png";
import { PROFILE } from "@/data/contact";
import { useSiteContent } from "@/lib/useSiteContent";

export function HeroSection() {
  const content = useSiteContent();
  const hero = content?.hero;

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-10 lg:pb-32 lg:pt-16">
      <div className="absolute -right-32 -top-32 size-[500px] rounded-full bg-blue/5 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        {/* Text */}
        <div className="animate-reveal space-y-8">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance lg:text-7xl">
            <span className="text-blue">{hero?.sloganLine1 ?? "La rigueur d'une ingénieure."}</span><br />
            <i className="text-blue">{hero?.sloganLine2 ?? "La vision d'une experte."}</i><br />
            {hero?.sloganLine3 ?? "Au service de votre croissance."}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-navy/70 text-pretty">
            {hero?.description ?? "Je vous aide à établir les structures financières nécessaires pour atteindre vos ambitions de croissance."}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/reserver"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-lg shadow-navy/25 transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {hero?.ctaButton ?? "Réserver un appel découverte"} <ArrowRight className="size-4" />
            </Link>
            <a
              href="#services"
              className="rounded-full border border-navy/15 bg-white px-7 py-4 font-semibold transition-colors hover:bg-navy/5"
            >
              {hero?.ctaSecondary ?? "Découvrir mes services"}
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="animate-reveal [animation-delay:200ms] relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-navy/5">
            <img
              src={gabrielaPortrait}
              alt={`Portrait de ${PROFILE.name}, ${PROFILE.credentials}`}
              width={1024}
              height={1280}
              className="size-full object-cover"
            />
          </div>

          <div className="absolute -left-4 bottom-12 sm:-left-8">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-navy/5">
              <div className="font-display text-3xl font-bold text-blue">{hero?.yearsValue ?? PROFILE.yearsExperience}</div>
              <div className="text-[11px] font-semibold uppercase leading-tight tracking-wider text-navy/60">
                {hero?.yearsLabel ?? "Années\nd'expérience"}
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-12 rounded-full bg-navy px-5 py-2 text-sm font-bold text-white shadow-lg sm:-right-4">
            {PROFILE.credentials}
          </div>
        </div>
      </div>
    </section>
  );
}
