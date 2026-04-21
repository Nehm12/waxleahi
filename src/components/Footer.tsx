"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Image
                src="/logo.png"
                alt="WA XLE AHI Logo"
                width={70}
                height={70}
                className="rounded-md"
              />
              <span>WA XLE AHI</span>
            </div>
            <p className="text-brand-light/80 text-sm leading-relaxed">
              Service de courses à domicile 24h/24, 7j/7 pour seniors, PMR et personnes en difficulté.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-orange">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="/localisations" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Zones Desservies
                </Link>
              </li>
              <li>
                <Link href="/application-mobile" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Application
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-orange">Zones Desservies</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-brand-light/80">▪ Cotonou</li>
              <li className="text-brand-light/80">▪ Calavi</li>
              <li className="text-brand-light/80">▪ Parakou</li>
              <li className="text-brand-light/80">▪ Porto-Novo</li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-orange">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="text-brand-light/80">
                <p className="font-semibold mb-1">WhatsApp</p>
                <a href="https://wa.me/22967123456" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
                  +229 67 12 34 56
                </a>
              </div>
              <div className="text-brand-light/80">
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:contact@waxleahi.com" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
                  contact@waxleahi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-light/20 pt-8">
          <div className="text-center text-brand-light/60 text-sm">
            <p>&copy; {currentYear} WA XLE AHI. Tous droits réservés.</p>
            <p className="mt-2">Service de courses à domicile • 24h/24 • 7j/7</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
