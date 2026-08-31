import { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import { sanityClient, urlFor } from "@/lib/sanity";

interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  paragraphs: string[];
  linkedin?: string;
  photo?: { asset: { _ref: string } };
}

const QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id, name, role, paragraphs, linkedin, photo
}`;

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<SanityTestimonial[]>([]);

  useEffect(() => {
    sanityClient.fetch<SanityTestimonial[]>(QUERY).then(setTestimonials);
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section id="temoignages" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue">Témoignages</span>
            <h2 className="mt-3 font-display text-4xl leading-tight">Ce que disent les dirigeants.</h2>
            <p className="mt-4 text-navy/60">
              La confiance est le pilier de toute collaboration financière durable.
            </p>
          </div>

          <div className="space-y-6 md:w-2/3">
            {testimonials.map((t) => (
              <figure key={t._id} className="rounded-3xl bg-bg p-8 ring-1 ring-navy/5">
                <blockquote className="space-y-4 font-display text-lg italic leading-relaxed text-navy/85">
                  {t.paragraphs.map((para, i) => (
                    <p key={i}>"{para}"</p>
                  ))}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  {t.photo && (
                    <img
                      src={urlFor(t.photo).width(96).height(96).url()}
                      alt={t.name}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover shadow ring-2 ring-white"
                    />
                  )}
                  <div className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-navy/55">{t.role}</div>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-navy/30 transition-colors hover:text-blue"
                      aria-label={`LinkedIn de ${t.name}`}
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
