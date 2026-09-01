import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "@/lib/sanity";

interface SanityPartner {
  _id: string;
  name: string;
  url: string;
  description: string;
  logo?: { asset: { _ref: string } };
}

const QUERY = `*[_type == "partner"] | order(order asc) {
  _id, name, url, description, logo
}`;

export function PartnersSection() {
  const [partners, setPartners] = useState<SanityPartner[]>([]);

  useEffect(() => {
    sanityClient.fetch<SanityPartner[]>(QUERY).then(setPartners);
  }, []);

  if (partners.length === 0) return null;

  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            Partenaires
          </span>
          <h2 className="mt-3 font-display text-3xl text-navy">
            Des collaborations fondées sur la confiance
          </h2>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {partners.map((p) => (
            <div key={p._id} className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-navy/5">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                {p.logo && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <img
                      src={urlFor(p.logo).height(64).url()}
                      alt={p.name}
                      className="h-16 w-auto object-contain"
                    />
                  </a>
                )}
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="font-display text-xl text-navy">{p.name}</h3>
                  <p className="text-sm leading-relaxed text-navy/70">{p.description}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold text-blue hover:underline"
                  >
                    Visiter {new URL(p.url).hostname} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
