import { Linkedin, Download, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoFooter from "@/assets/barane-logo-footer-transparent.png";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-[var(--ivory)]/70 border-t border-[var(--gold)]/15">
      <div className="px-6 lg:px-16 py-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <img src={logoFooter} alt="BARANE INVEST" className="h-20 w-auto object-contain" />
            </div>
            <p className="mt-8 text-sm leading-relaxed max-w-sm">
              Société marocaine multi-sectorielle. Construction, infrastructure, logistique,
              équipement industriel et support mines & carrières.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Société</h4>
            <ul className="space-y-3 font-display text-xl text-[var(--ivory)]">
              <li>
                <Link to="/about" className="hover:text-[var(--gold)] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/activites" className="hover:text-[var(--gold)] transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link to="/secteurs" className="hover:text-[var(--gold)] transition-colors">
                  Secteurs
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Offre</h4>
            <ul className="space-y-3 font-display text-xl text-[var(--ivory)]">
              <li>
                <Link to="/catalogue" className="hover:text-[var(--gold)] transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">
                  Mines
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--gold)] transition-colors">
                  Devis
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>Casablanca · Maroc</li>
              <li>
                <a href="tel:+212661656042" className="hover:text-[var(--gold)]">
                  +212 661 65 60 42
                </a>
              </li>
              <li>
                <a href="mailto:contact@baraneinvest.com" className="hover:text-[var(--gold)]">
                  contact@baraneinvest.com
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center justify-between gap-4 border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] px-5 py-4 transition-all w-full max-w-xs group"
            >
              <span className="eyebrow text-[var(--gold)] group-hover:text-[var(--navy-deep)]">
                Profil entreprise
              </span>
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--ivory)]/10 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs eyebrow text-[var(--ivory)]/40">
            © {new Date().getFullYear()} BARANE INVEST
          </p>
          <div className="flex items-center gap-6 text-xs eyebrow text-[var(--ivory)]/40">
            <a href="#" className="hover:text-[var(--gold)]">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[var(--gold)]">
              Confidentialité
            </a>
            <a
              href="https://www.linkedin.com/company/baraneinvest"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--gold)] flex items-center gap-2"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
