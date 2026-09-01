import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/data/contact";
import logoSrc from "@/assets/logo.png";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-navy/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        <a href="/#top" className="flex items-center gap-3">
          {/* Golden circle icon zoomed from the brand logo */}
          <div className="size-10 shrink-0 rounded-full overflow-hidden shadow-md">
            <img
              src={logoSrc}
              aria-hidden
              className="logo-icon size-full object-cover"
            />
          </div>

          {/* Name + sub-label */}
          <div className="leading-tight">
            <div className="font-display text-[17px] font-bold tracking-tight text-navy">
              {PROFILE.name}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-navy/70">
              {PROFILE.credentials} · CFO virtuelle
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/#top"         className="text-navy/70 transition-colors hover:text-navy">Accueil</a>
          <a href="/#services"    className="text-navy/70 transition-colors hover:text-navy">Services</a>
          <a href="/#apropos"     className="text-navy/70 transition-colors hover:text-navy">À propos</a>
          <a href="/#temoignages" className="text-navy/70 transition-colors hover:text-navy">Témoignages</a>
          <Link
            to="/reserver"
            className="rounded-full bg-navy px-5 py-2.5 text-white transition-colors hover:opacity-90"
          >
            Réserver un appel
          </Link>
        </div>

      </div>
    </nav>
  );
}
