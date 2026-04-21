"use client";

import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Fondateur & Directeur",
    description: "Visionnaire passionné par l'aide aux seniors et aux personnes en difficulté. 15 ans d'expérience dans le service à la personne.",
    specialties: ["Stratégie", "Leadership", "Service Client"],
    image: "/team/ahmed.jpg",
  },
  {
    id: 2,
    name: "Fatima El Mansouri",
    role: "Responsable Logistique",
    description: "Experte en organisation et gestion des livraisons. Garantit que chaque commande arrive à temps et en parfait état.",
    specialties: ["Logistique", "Organisation", "Qualité"],
    image: "/team/fatima.jpg",
  },
  {
    id: 3,
    name: "Marc Dubois",
    role: "Responsable Client",
    description: "Dédié à écouter et satisfaire les besoins de chaque client. Support disponible 24h/24 sur tous les canaux.",
    specialties: ["Support", "Communication", "Empathie"],
    image: "/team/marc.jpg",
  },
  {
    id: 4,
    name: "Amina Benali",
    role: "Coordinatrice Livraison",
    description: "Garantit que chaque livraison est ponctuelle et soignée. Formation continue de nos livreurs.",
    specialties: ["Livraison", "Coordination", "Fiabilité"],
    image: "/team/amina.jpg",
  },
];

const values = [
  {
    title: "Disponibilité",
    description: "24h/24, 7j/7, même les jours fériés et la nuit.",
    icon: "clock",
  },
  {
    title: "Humanité",
    description: "Chaque client est important, chaque geste compte.",
    icon: "heart",
  },
  {
    title: "Fiabilité",
    description: "Vous pouvez compter sur nous, à chaque fois.",
    icon: "check",
  },
  {
    title: "Qualité",
    description: "Nous respectons vos choix et vos préférences.",
    icon: "star",
  },
];

function IconClock() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function renderIcon(icon: string) {
  switch(icon) {
    case "clock": return <IconClock />;
    case "check": return <IconCheck />;
    case "heart": return <IconHeart />;
    case "star": return <IconStar />;
    default: return null;
  }
}

export default function EquipePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-cover bg-center overflow-hidden">
        <img
          src="/hero2.jpg"
          alt="Notre équipe WA XLE AHI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange font-semibold text-xs rounded-full mb-3">
              NOTRE ÉQUIPE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light mb-4 leading-tight">
              L'équipe engagée à votre service
            </h1>
            <p className="text-base sm:text-lg text-brand-light/80 leading-relaxed max-w-xl">
              Des professionnels passionnés, disponibles 24h/24 pour vous offrir le meilleur service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              NOS VALEURS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Ce qui nous définit
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              À la base de chaque action, des valeurs solides qui guident notre service quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-brand-orange/40"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                  {renderIcon(value.icon)}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              NOTRE ÉQUIPE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Nos Professionnels
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Une équipe de spécialistes dédiée à votre satisfaction et votre bien-être
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-orange/40"
              >
                <div className="relative h-56 overflow-hidden bg-gray-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-brand-dark">{member.name}</h3>
                    <p className="text-brand-orange font-semibold text-xs">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                    {member.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Spécialités</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-xs font-medium rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-light rounded-xl p-8 md:p-10 border border-gray-200">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
                NOTRE ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
                Notre Engagement Qualité
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Équipe formée et bienveillante, respectueuse de la confidentialité",
                "Sélection minutieuse des produits selon vos préférences",
                "Livraison rapide et soignée, même aux heures creuses",
                "Communication claire et réactive sur tous les canaux",
                "Tarifs transparents, sans frais cachés",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-300">
              <p className="text-gray-700 italic font-medium text-sm">
                "Chaque client mérite d'être traité comme un membre de la famille. C'est notre philosophie chez WA XLE AHI."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prêt à nous découvrir ?
          </h2>
          <p className="text-brand-light/80 mb-6 text-sm leading-relaxed">
            Contactez-nous via WhatsApp pour vos premières courses
          </p>
          <a
            href="https://wa.me/22967123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-lg text-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.797 5.753-3.986 9.425 1.51 6.932 8.181 11.384 15.112 9.874 6.32-1.331 11.159-6.948 11.159-13.393 0-3.59-1.408-6.955-3.989-9.474-2.576-2.52-6.102-3.91-9.829-3.81zm0-2.008c4.632-.275 9.008 1.494 12.147 4.978 3.14 3.485 4.764 8.11 4.573 12.737-1.992 9.133-10.463 15.335-19.597 13.344C3.67 19.95-1.992 12.845.894 4.477 2.671-1.09 8.538-2.415 13.051-2.029z" />
            </svg>
            Nous Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
