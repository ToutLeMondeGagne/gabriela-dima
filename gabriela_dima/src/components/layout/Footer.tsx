import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Calendar } from "lucide-react";
import { CONTACT, PROFILE } from "@/data/contact";
import logoSrc from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-navy/10 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 overflow-hidden rounded-full">
            <img src={logoSrc} alt="" className="logo-icon size-full object-cover" />
          </div>
          <div>
            <div className="font-display text-[17px] font-bold text-navy">{PROFILE.name}</div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-navy/60">
              {PROFILE.credentials} · Partenaire de croissance
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-navy/70 transition-colors hover:text-blue"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href={CONTACT.emailHref}
            className="inline-flex items-center gap-2 text-navy/70 transition-colors hover:text-blue"
          >
            <Mail className="size-4" /> {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-navy/70 transition-colors hover:text-blue"
          >
            <Phone className="size-4" /> {CONTACT.phone}
          </a>
          <Link
            to="/reserver"
            className="inline-flex items-center gap-2 text-navy/70 transition-colors hover:text-blue"
          >
            <Calendar className="size-4" /> Réserver
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-navy/5 pt-6 text-center text-xs text-navy/40">
        © {new Date().getFullYear()} {PROFILE.name} Consultante. Tous droits réservés.
      </div>
    </footer>
  );
}
