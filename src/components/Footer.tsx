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
            <p className="text-brand-light/80 text-sm leading-relaxed mb-6">
              Service de courses à domicile 24h/24, 7j/7 pour seniors, PMR et personnes en difficulté.
            </p>
            {/* Social Networks - Improved Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/profile.php?id=61573290561776"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-orange/20 hover:bg-brand-orange/40 rounded-lg flex items-center justify-center text-brand-orange transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.707-.2-3.227-.2-3.065 0-5.27 1.875-5.27 5.313V8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/waxleahi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-orange/20 hover:bg-brand-orange/40 rounded-lg flex items-center justify-center text-brand-orange transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@waxleahi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-orange/20 hover:bg-brand-orange/40 rounded-lg flex items-center justify-center text-brand-orange transition-all duration-300 hover:scale-110"
                title="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74H2.4a6.6 6.6 0 0 0 7.56 4.23 6.52 6.52 0 0 0 5.44-6.88v-5.13a9.36 9.36 0 0 0 5.59 1.31V9.63a4.85 4.85 0 0 1-.9-.06z" />
                </svg>
              </a>
            </div>
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
                <Link href="/carriere" className="text-brand-light/80 hover:text-brand-orange transition-colors text-sm">
                  Carrière
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
                <a href="https://wa.me/0144456703" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
                  01 44 45 67 03
                </a>
              </div>
              <div className="text-brand-light/80">
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:waxleahi@gmail.com" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
                  waxleahi@gmail.com
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
