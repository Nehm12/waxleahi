"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Local Image */}
      <section className="relative min-h-96 md:h-screen bg-cover bg-center overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Service de livraison express à domicile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 sm:py-0">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-light mb-6 leading-tight">
              Vos courses à domicile
              <span className="text-brand-orange block">24h/24 • 7j/7</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-light/90 mb-8 leading-relaxed">
              Service premium pour seniors, personnes à mobilité réduite et tous ceux qui ont besoin d'aide. Commandez simplement, nous livrons où vous êtes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/0144456703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-all hover:shadow-lg text-center"
              >
                Commander Maintenant
              </a>
              <Link
                href="/application-mobile"
                className="inline-block border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 font-bold py-4 px-8 rounded-lg transition-all text-center bg-brand-dark/20"
              >
                Télécharger l'App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - IMPROVED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-light via-white to-brand-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange font-semibold text-sm rounded-full mb-4">
              NOS AVANTAGES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
              Pourquoi choisir WA XLE AHI ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Un service de delivery innovant pensé pour vous, avec qualité, rapidité et fiabilité garanties à chaque commande.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-2">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                01
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Disponibilité 24/7</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nous sommes toujours là pour vous, même la nuit et les jours fériés. Votre besoin, notre priorité.
              </p>
              <div className="flex items-center text-brand-orange font-semibold group-hover:translate-x-2 transition-transform">
                <span>En savoir plus</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-2">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                02
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Service Premium</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Équipe bienveillante et expérimentée. Sélection minutieuse pour votre satisfaction garantie.
              </p>
              <div className="flex items-center text-brand-orange font-semibold group-hover:translate-x-2 transition-transform">
                <span>En savoir plus</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-2">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                03
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-8 group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 transition-all">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Rapide & Fiable</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Livraison express, tarifs transparents, sans minimum de commande. L'efficacité au service du client.
              </p>
              <div className="flex items-center text-brand-orange font-semibold group-hover:translate-x-2 transition-transform">
                <span>En savoir plus</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA Below Features */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">Découvrez comment nous rendons vos courses plus faciles</p>
            <a href="#services" className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-lg">
              Voir tous les services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - IMPROVED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark text-brand-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange font-semibold text-sm rounded-full mb-4">
              NOS CHIFFRES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Nos résultats en chiffres
            </h2>
            <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
              Des statistiques qui parlent de notre engagement envers vous
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-brand-orange/20 hover:border-brand-orange/50 transition-all hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-6xl font-bold text-brand-orange mb-3">1000+</div>
                <p className="text-brand-light/90 font-semibold text-lg">Clients satisfaits</p>
                <p className="text-brand-light/60 text-sm mt-2">Qui nous font confiance chaque jour</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-brand-orange/20 hover:border-brand-orange/50 transition-all hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-6xl font-bold text-brand-orange mb-3">4</div>
                <p className="text-brand-light/90 font-semibold text-lg">Zones principales</p>
                <p className="text-brand-light/60 text-sm mt-2">Cotonou, Calavi, Parakou, Porto-Novo</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-brand-orange/20 hover:border-brand-orange/50 transition-all hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-6xl font-bold text-brand-orange mb-3">24h</div>
                <p className="text-brand-light/90 font-semibold text-lg">Disponibilité</p>
                <p className="text-brand-light/60 text-sm mt-2">Service sans interruption</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-brand-orange/20 hover:border-brand-orange/50 transition-all hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-6xl font-bold text-brand-orange mb-3">100%</div>
                <p className="text-brand-light/90 font-semibold text-lg">Livraison assurée</p>
                <p className="text-brand-light/60 text-sm mt-2">Garantie de satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - IMPROVED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-brand-light/30 to-white" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange font-semibold text-sm rounded-full mb-4">
              NOS SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
              Des services adaptés à vos besoins
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Nous proposons une gamme complète de services de livraison pour répondre à tous vos besoins
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 - Supermarché */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Courses au Supermarché</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Accès à Carrefour, Auchan et autres enseignes. Sélection de vos produits préférés livrés rapidement.</p>
                
                <Link href="/contact" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-600 group-hover:translate-x-2 transition-transform">
                  <span>Demander ce service</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 - Pharmacie */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2-5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Pharmacie & Médicaments</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Accès aux pharmacies de garde 24h/24. Livraison urgente de médicaments et produits de santé.</p>
                
                <Link href="/contact" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-600 group-hover:translate-x-2 transition-transform">
                  <span>Demander ce service</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 - Artisans */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12a5 5 0 1110 0A5 5 0 017 12z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Artisans Locaux</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Boulanger, boucher, primeur. Soutien du commerce local avec livraison à domicile.</p>
                
                <Link href="/contact" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-600 group-hover:translate-x-2 transition-transform">
                  <span>Demander ce service</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 - Express */}
            <div className="group relative bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-brand-orange/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Livraison Express</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Courses urgentes en 1h maximum. Disponible même aux heures creuses et jours fériés.</p>
                
                <Link href="/contact" className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-600 group-hover:translate-x-2 transition-transform">
                  <span>Demander ce service</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Services CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg font-semibold">Des besoins spécifiques ? Contactez notre équipe</p>
            <Link href="/contact" className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:shadow-lg">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - IMPROVED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark text-brand-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange font-semibold text-sm rounded-full mb-6">
              PRÊT À COMMANDER ?
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
            Vos courses, livrées en quelques clics
          </h2>
          
          <p className="text-xl text-brand-light/80 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            Rejoignez des milliers de clients satisfaits qui nous font confiance. Commandez maintenant et recevez vos courses rapidement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/0144456703"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:shadow-2xl hover:shadow-brand-orange/50"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.797 5.753-3.986 9.425 1.51 6.932 8.181 11.384 15.112 9.874 6.32-1.331 11.159-6.948 11.159-13.393 0-3.59-1.408-6.955-3.989-9.474-2.576-2.52-6.102-3.91-9.829-3.81zm0-2.008c4.632-.275 9.008 1.494 12.147 4.978 3.14 3.485 4.764 8.11 4.573 12.737-1.992 9.133-10.463 15.335-19.597 13.344C3.67 19.95-1.992 12.845.894 4.477 2.671-1.09 8.538-2.415 13.051-2.029z" />
              </svg>
              Commander sur WhatsApp
            </a>
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 font-bold py-4 px-10 rounded-xl transition-all"
            >
              <span>Nous contacter</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-center text-brand-light/70">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Fiable</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Rapide & Efficace</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Service Premium</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
