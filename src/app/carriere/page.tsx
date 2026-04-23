"use client";

import { useState } from "react";
import Link from "next/link";

const jobListings = [
  {
    id: 1,
    title: "Livreur/Coursier",
    department: "Logistique",
    location: "Cotonou, Calavi",
    type: "CDI/CDD",
    description: "Rejoignez notre équipe de livraison pour apporter nos services aux clients. Vous serez responsable de la livraison rapide et soignée de commandes.",
    requirements: ["Permis de conduire valide", "Véhicule personnel", "Bonne présentation", "Rigueur et ponctualité"],
  },
  {
    id: 2,
    title: "Spécialiste Client",
    department: "Support Client",
    location: "Cotonou",
    type: "CDI",
    description: "Gérez les demandes clients 24h/24 via WhatsApp, téléphone et email. Vous serez le point de contact pour garantir la satisfaction de nos clients.",
    requirements: ["Excellente communication", "Empathie", "Disponibilité", "Maîtrise du français"],
  },
  {
    id: 3,
    title: "Coordinateur Logistique",
    department: "Opérations",
    location: "Cotonou",
    type: "CDI",
    description: "Coordonnez les opérations de livraison et optimisez les routes. Vous serez responsable de l'efficacité de notre réseau logistique.",
    requirements: ["3+ ans d'expérience logistique", "Gestion de projet", "Rigueur organisationnelle", "Connaissance des outils IT"],
  },
  {
    id: 4,
    title: "Développeur Full Stack",
    department: "Tech",
    location: "Cotonou/Télétravail",
    type: "CDI",
    description: "Développez et maintenez notre plateforme. Vous travaillerez sur le frontend React/Next.js et le backend Python.",
    requirements: ["Maîtrise React/Next.js", "Connaissance Python/FastAPI", "Git", "Passion pour l'impact social"],
  },
  {
    id: 5,
    title: "Responsable Marketing",
    department: "Marketing",
    location: "Cotonou",
    type: "CDI",
    description: "Développez notre présence digitale et augmentez notre visibilité. Créez des campagnes marketing impactantes pour toucher nos cibles.",
    requirements: ["2+ ans marketing digital", "Social media management", "Création de contenu", "Analytics"],
  },
];

const benefits = [
  {
    title: "Mission Sociale",
    description: "Contribuer à l'aide des seniors et personnes en difficulté",
    icon: "heart",
  },
  {
    title: "Équipe Bienveillante",
    description: "Travailler dans une atmosphère respectueuse et collaborative",
    icon: "users",
  },
  {
    title: "Flexibilité",
    description: "Horaires adaptés selon les postes et besoins",
    icon: "clock",
  },
  {
    title: "Évolution",
    description: "Possibilités d'évolution et de formation continue",
    icon: "trending",
  },
];

function renderIcon(icon: string) {
  switch(icon) {
    case "heart":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "users":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 8.048M3 12h18M4 21h16a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4z" />
        </svg>
      );
    case "clock":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "trending":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CarrierePage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobId: "",
    cv: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        cv: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("jobId", formData.jobId);
      if (formData.cv) {
        formDataToSend.append("cv", formData.cv);
      }

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitMessage("✅ Candidature reçue avec succès ! Merci de votre intérêt.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          jobId: "",
          cv: null,
        });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage("❌ Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      setSubmitMessage("❌ Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-cover bg-center overflow-hidden">
        <img
          src="/hero2.jpg"
          alt="Rejoignez notre équipe"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange font-semibold text-xs rounded-full mb-3">
              REJOIGNEZ-NOUS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light mb-4 leading-tight">
              Carrière chez WA XLE AHI
            </h1>
            <p className="text-base sm:text-lg text-brand-light/80 leading-relaxed max-w-xl">
              Rejoignez notre mission d'aide aux seniors et personnes en difficulté. Ensemble, créons un impact positif.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              POURQUOI NOUS REJOINDRE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Plus qu'un emploi, une mission
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Chez WA XLE AHI, nous croyons que travailler doit avoir du sens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative bg-brand-light rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-brand-orange/40"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors text-brand-orange">
                  {renderIcon(benefit.icon)}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              POSTES OUVERTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Nos opportunités
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Découvrez les postes disponibles dans nos différents départements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-orange/40 cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">{job.title}</h3>
                      <p className="text-brand-orange font-semibold text-sm">{job.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Profil recherché</p>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-semibold text-xs rounded-full mb-3">
              POSTULEZ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Envoyez votre candidature
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Complétez le formulaire ci-dessous et téléchargez votre CV
            </p>
          </div>

          <div className="bg-brand-light rounded-xl p-8 md:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                  placeholder="Votre nom complet"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                  placeholder="+229 XXXX XXXX"
                />
              </div>

              {/* Job Selection */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Poste recherché *
                </label>
                <select
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                >
                  <option value="">Sélectionnez un poste</option>
                  {jobListings.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title} - {job.department}
                    </option>
                  ))}
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  CV (PDF, DOC, DOCX) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-brand-orange file:text-white hover:file:bg-orange-600"
                  />
                </div>
                {formData.cv && (
                  <p className="text-sm text-gray-600 mt-2">
                    ✅ Fichier sélectionné: {formData.cv.name}
                  </p>
                )}
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-sm font-semibold ${
                  submitMessage.includes("✅") 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg"
              >
                {isSubmitting ? "Envoi en cours..." : "Soumettre ma candidature"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Des questions ?
          </h2>
          <p className="text-brand-light/80 mb-6 text-sm leading-relaxed">
            N'hésitez pas à nous contacter via WhatsApp pour plus d'informations
          </p>
          <a
            href="https://wa.me/0144456703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-lg text-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.797 5.753-3.986 9.425 1.51 6.932 8.181 11.384 15.112 9.874 6.32-1.331 11.159-6.948 11.159-13.393 0-3.59-1.408-6.955-3.989-9.474-2.576-2.52-6.102-3.91-9.829-3.81zm0-2.008c4.632-.275 9.008 1.494 12.147 4.978 3.14 3.485 4.764 8.11 4.573 12.737-1.992 9.133-10.463 15.335-19.597 13.344C3.67 19.95-1.992 12.845.894 4.477 2.671-1.09 8.538-2.415 13.051-2.029z" />
            </svg>
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}
