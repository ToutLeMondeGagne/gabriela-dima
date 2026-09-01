import { Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import gabrielaPortrait from "@/assets/gabriela-portrait.png";
import { PROFILE } from "@/data/contact";
import { useSiteContent } from "@/lib/useSiteContent";

export function AboutSection() {
  const content = useSiteContent();
  const about = content?.about;

  const credentialsList = about?.credentialsList ?? PROFILE.credentialsList;

  return (
    <section id="apropos" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-navy/5">
            <img
              src={gabrielaPortrait}
              alt={`${PROFILE.name} en consultation`}
              loading="lazy"
              width={1024}
              height={1280}
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">À propos</span>
          <h2 className="font-display text-4xl lg:text-5xl">
            {about?.title ?? "Une expertise ancrée dans la performance et la clarté"}
          </h2>

          <div className="space-y-3">
            <p className="text-lg leading-relaxed text-navy/70">
              {about?.mainText ?? "Titulaire d'un MBA en finance et d'un DESS en comptabilité de management de l'Université du Québec à Montréal (UQAM), Gabriela Dima est membre de l'Ordre des CPA du Canada depuis 2011."}
            </p>
            {about?.approachText && (
              <p className="text-lg leading-relaxed text-navy/70">{about.approachText}</p>
            )}
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {credentialsList.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-bg p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-blue" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/reserver"
            className="inline-flex items-center gap-2 font-semibold text-navy transition-all hover:gap-3"
          >
            {about?.ctaText ?? "Discutons de vos défis"} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
