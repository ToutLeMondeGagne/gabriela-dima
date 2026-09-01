import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PROFILE } from "@/data/contact";
import logoSrc from "@/assets/logo.png";

export function BookingNavbar() {
  return (
    <nav className="border-b border-navy/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 shrink-0 rounded-full overflow-hidden shadow-md">
            <img
              src={logoSrc}
              aria-hidden
              className="logo-icon size-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[17px] font-bold tracking-tight text-navy">
              {PROFILE.name}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-navy/70">
              {PROFILE.credentials} · CFO virtuelle
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
        >
          <ArrowLeft className="size-4" />
          Retour à l'accueil
        </Link>
      </div>
    </nav>
  );
}
