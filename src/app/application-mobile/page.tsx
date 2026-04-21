"use client";


import Link from "next/link";

const features = [
  {
    icon: "shopping",
    title: "Commande Facile",
    description: "Interface intuitive pour commander vos courses en quelques clics.",
  },
  {
    icon: "location",
    title: "Suivi en Temps Réel",
    description: "Suivez votre livraison en direct jusqu'à votre porte.",
  },
  {
    icon: "history",
    title: "Historique Complet",
    description: "Retrouvez facilement vos listes précédentes pour recommander.",
  },
  {
    icon: "support",
    title: "Support 24/7",
    description: "Support immédiat en cas de besoin ou question.",
  },
  {
    icon: "lock",
    title: "Paiement Sécurisé",
    description: "Plusieurs moyens de paiement, tous sécurisés et protégés.",
  },
  {
    icon: "bell",
    title: "Notifications",
    description: "Soyez informé des promos, livraisons et nouveautés.",
  },
];

const steps = [
  {
    number: "01",
    title: "Télécharger",
    description: "Récupérez l'app sur Google Play ou l'App Store.",
  },
  {
    number: "02",
    title: "Créer Compte",
    description: "Inscrivez-vous avec votre numéro et vos préférences.",
  },
  {
    number: "03",
    title: "Composer Liste",
    description: "Composez votre liste de courses ou choisissez parmi les favoris.",
  },
  {
    number: "04",
    title: "Valider",
    description: "Confirmez votre adresse de livraison et le mode de paiement.",
  },
  {
    number: "05",
    title: "Suivre",
    description: "Suivez votre livraison en direct sur la carte.",
  },
  {
    number: "06",
    title: "Recevoir",
    description: "Votre livreur arrive avec vos courses en parfait état.",
  },
];

function IconShopping() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconHistory() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function renderIcon(icon: string) {
  switch(icon) {
    case "shopping": return <IconShopping />;
    case "location": return <IconLocation />;
    case "history": return <IconHistory />;
    case "support": return <IconSupport />;
    case "lock": return <IconLock />;
    case "bell": return <IconBell />;
    default: return null;
  }
}

export default function ApplicationMobilePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-dark/90 text-brand-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Application Mobile
                <span className="text-brand-orange block">WA XLE AHI</span>
              </h1>
              <p className="text-xl text-brand-light/80 mb-8">
                Vos courses à domicile en quelques clics, disponible 24h/24. Téléchargez maintenant et recevez -10% sur votre première commande.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-dark hover:bg-brand-dark/90 border-2 border-white text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18v-2H3V6z" />
                  </svg>
                  Google Play
                </button>
                <button className="bg-brand-dark hover:bg-brand-dark/90 border-2 border-white text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 13.5c-.91 0-1.64.7-1.64 1.56s.73 1.56 1.64 1.56 1.64-.7 1.64-1.56-.73-1.56-1.64-1.56z" />
                  </svg>
                  App Store
                </button>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="flex justify-center">
              <div className="relative w-64 h-96 bg-gradient-to-br from-brand-orange to-brand-orange/60 rounded-3xl shadow-2xl flex items-center justify-center border-8 border-brand-light/20">
                <div className="text-center text-brand-light">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-2xl font-bold">WA XLE AHI</p>
                  <p className="text-sm mt-2">Courses 24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Fonctionnalités Principales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all border-t-4 border-brand-orange"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Comment Ça Marche ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-dark to-brand-dark/80 rounded-full flex items-center justify-center text-4xl font-bold text-brand-orange mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Tarifs Transparents
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Plan */}
            <div className="bg-white rounded-xl p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Standard</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-dark">Prix réels</span>
                <p className="text-gray-600">+ frais de service</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-gray-700">Livraison en 1-2h</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-gray-700">Pas de minimum</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-gray-700">24h/24, 7j/7</span>
                </li>
              </ul>
              <button className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-bold py-3 rounded-lg transition-all">
                Télécharger
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-dark/90 rounded-xl p-8 shadow-lg border-2 border-brand-orange text-brand-light">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Premium</h3>
                <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold">POPULAIRE</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">-20%</span>
                <p className="text-brand-light/80">sur frais de service</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>Livraison rapide 30-45 min</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>Priorité support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>Offres exclusives</span>
                </li>
              </ul>
              <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 rounded-lg transition-all">
                Devenir Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Avis de Nos Utilisateurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mme Marie",
                age: 78,
                text: "Excellent service ! Même à minuit, j'ai pu avoir mon lait. L'équipe est tellement gentille et professionnelle.",
              },
              {
                name: "M. Pierre",
                age: 82,
                text: "Je ne peux plus me déplacer. WA XLE AHI m'a rendu mon autonomie. Service impeccable !",
              },
              {
                name: "Mme Sophie",
                age: 45,
                text: "Maman est rassurée de pouvoir commander ses courses quand elle veut. Service excellent et fiable.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-brand-light rounded-xl p-8 shadow-md border-l-4 border-brand-orange"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.age} ans</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-dark/90 text-brand-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-brand-light/80 mb-8">
            Téléchargez l'application et recevez -10% sur votre première commande
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-all hover:shadow-lg">
              Télécharger Maintenant
            </button>
            <Link
              href="/contact"
              className="inline-block border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 font-bold py-4 px-8 rounded-lg transition-all"
            >
              Des Questions ?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
