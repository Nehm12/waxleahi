"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CoverageMap = dynamic(
  () => import("@/components/CoverageMap"),
  {
    ssr: false,
    loading: () => <p>Chargement carte...</p>,
  }
);


const serveredAreas = [
  {
    city: "Cotonou",
    coverage: 100,
    zones: [
      "Cotonou Centre",
      "Mènontin",
      "Cadjèhoun",
      "Akron",
      "Ganhi",
      "Vèdoko",
      "Gbégamey",
      "Wègba",
      "Agla",
      "Dékon",
      "Saint-Michel",
      "Coussin",
    ],
  },
  {
    city: "Calavi",
    coverage: 95,
    zones: [
      "Calavi Centre",
      "Zè",
      "Togbin",
      "Ouidah Route",
      "Abomey Calavi",
      "Tévèdjrè",
      "Akassato",
      "Fifadji",
      "Kpanroun",
      "Gakondo",
    ],
  },
  {
    city: "Porto-Novo",
    coverage: 85,
    zones: [
      "Porto-Novo Centre",
      "Akron",
      "Gakondo",
      "Sixpovodji",
      "Godomey",
      "Sèmè-Kpodji",
      "Ouèga",
      "Dassa Zoumè",
    ],
  },
  {
    city: "Parakou",
    coverage: 80,
    zones: [
      "Parakou Centre",
      "Sèmè-Kpodji",
      "Ouèga",
      "Borgou",
      "Bembèrèkè",
      "Nikki",
      "Kandi",
    ],
  },
  {
    city: "Abomey",
    coverage: 75,
    zones: [
      "Abomey Centre",
      "Abomey Calavi",
      "Bohicon",
      "Zagnanado",
      "Agbangnizoun",
    ],
  },
  {
    city: "Natitingou",
    coverage: 70,
    zones: ["Natitingou Centre", "Boukoumbé", "Toucountouna", "Copargo"],
  },
];

export default function LocalisationsPage() {
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);
  const [searchZone, setSearchZone] = useState("");

  const selectedCity = serveredAreas[selectedCityIndex];
  const filteredZones = selectedCity.zones.filter((zone) =>
    zone.toLowerCase().includes(searchZone.toLowerCase())
  );

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-cover bg-center overflow-hidden">
        <img
          src="/hero2.jpg"
          alt="Zones de couverture WA XLE AHI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange font-semibold text-xs rounded-full mb-3">
              NOS ZONES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light mb-4 leading-tight">
              Zones Desservies Partout
            </h1>
            <p className="text-base sm:text-lg text-brand-light/80 leading-relaxed max-w-xl">
              Nous couvrons les principales villes et quartiers du Bénin avec disponibilité 24h/24.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-light rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-orange mb-2">6</div>
              <p className="text-gray-700 font-semibold text-sm">Villes principales</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-orange mb-2">60+</div>
              <p className="text-gray-700 font-semibold text-sm">Quartiers couverts</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-orange mb-2">24h/24</div>
              <p className="text-gray-700 font-semibold text-sm">Disponibilité totale</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-orange mb-2">100%</div>
              <p className="text-gray-700 font-semibold text-sm">Couverture rapide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              COUVERTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Explorez Nos Zones
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Découvrez tous les quartiers et zones où nous livrons avec la meilleure qualité
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cities Selector */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {serveredAreas.map((area, index) => (
                  <button
                    key={area.city}
                    onClick={() => setSelectedCityIndex(index)}
                    className={`w-full text-left px-5 py-3 rounded-lg font-semibold transition-all text-sm ${
                      selectedCityIndex === index
                        ? "bg-brand-orange text-white shadow-md"
                        : "bg-white text-brand-dark hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{area.city}</span>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-opacity-20 bg-white">
                        {area.coverage}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* City Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-2xl font-bold text-brand-dark">
                      {selectedCity.city}
                    </h3>
                    <span className="text-brand-orange font-bold text-lg">
                      {selectedCity.coverage}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-brand-orange h-full transition-all duration-500"
                      style={{ width: `${selectedCity.coverage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">Couverture de la ville</p>
                </div>

                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Rechercher un quartier..."
                    value={searchZone}
                    onChange={(e) => setSearchZone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:border-brand-orange focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {filteredZones.length} quartier(s) desservi(s)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredZones.map((zone) => (
                      <div
                        key={zone}
                        className="group flex items-center gap-2 px-3 py-2.5 bg-brand-light rounded-lg border border-gray-200 hover:border-brand-orange/40 transition-all"
                      >
                        <svg
                          className="w-4 h-4 text-brand-orange flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-gray-700 font-medium text-sm">
                          {zone}
                        </span>
                      </div>
                    ))}
                  </div>

                  {filteredZones.length === 0 && (
                    <div className="text-center py-6">
                      <p className="text-gray-500 text-sm">Aucun quartier trouvé</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    Livraison disponible dans cette ville 24h/24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              CARTE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Couverture par Région
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Cliquez sur les marqueurs pour voir les détails de chaque zone couverte
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <CoverageMap />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-brand-light rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-brand-dark mb-4 text-sm">Légende</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    📍
                  </div>
                  <span className="text-sm text-gray-700">Marqueur de ville couverte</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-2 bg-brand-orange rounded"></div>
                  <span className="text-sm text-gray-700">Taux de couverture</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-brand-dark mb-4 text-sm">Informations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Cliquez sur les marqueurs pour plus de détails
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Disponibilité 24h/24 dans toutes les zones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Request */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              DEMANDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
              Votre Zone n'est Pas Couverte ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Signalez-nous votre localisation et nous étudierons rapidement votre demande
            </p>
          </div>

          <form className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-brand-dark font-semibold mb-1 text-sm">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-brand-dark font-semibold mb-1 text-sm">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+229 XX XX XX XX"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-brand-dark font-semibold mb-1 text-sm">
                  Ville / Quartier
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mènontin"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-brand-dark font-semibold mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:border-brand-orange focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold py-2.5 rounded-lg transition-all text-sm"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Votre quartier est couvert ?
          </h2>
          <p className="text-brand-light/80 mb-6 text-sm leading-relaxed">
            Commandez dès maintenant via WhatsApp
          </p>
          <a
            href="https://wa.me/0144456703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-2.5 px-8 rounded-lg transition-all text-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.797 5.753-3.986 9.425 1.51 6.932 8.181 11.384 15.112 9.874 6.32-1.331 11.159-6.948 11.159-13.393 0-3.59-1.408-6.955-3.989-9.474-2.576-2.52-6.102-3.91-9.829-3.81zm0-2.008c4.632-.275 9.008 1.494 12.147 4.978 3.14 3.485 4.764 8.11 4.573 12.737-1.992 9.133-10.463 15.335-19.597 13.344C3.67 19.95-1.992 12.845.894 4.477 2.671-1.09 8.538-2.415 13.051-2.029z" />
            </svg>
            Commander sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
