"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-dark/90 text-brand-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nous Contacter</h1>
          <p className="text-xl text-brand-light/80">
            Une question ? Besoin d'aide ? Nous sommes là pour vous, 24h/24, 7j/7
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Moyens de Nous Contacter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Le moyen le plus rapide. Réponse instantanée, disponible 24h/24.
              </p>
              <a
                href="https://wa.me/22967123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Écrire sur WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-4 font-semibold">+229 67 12 34 56</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.609l2.01 1.006a1 1 0 00.502.609l2.01 1.006a1 1 0 001.097-.209l3.124-3.124a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-3.124 3.124a1 1 0 00-.209 1.097l1.07 2.14a1 1 0 00.609.502l2.01 1.006a1 1 0 00.609.502l1.498 4.493a1 1 0 00.684.948H19a2 2 0 012 2v1a2 2 0 01-2 2h-1a16 16 0 01-16-16V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Appel Direct</h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous directement pour une conversation personnalisée.
              </p>
              <a
                href="tel:+22967123456"
                className="inline-block bg-brand-dark hover:bg-brand-dark/90 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Appeler Maintenant
              </a>
              <p className="text-sm text-gray-600 mt-4 font-semibold">24h/24 - 7j/7</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                Envoyez-nous vos questions ou commentaires par email.
              </p>
              <a
                href="mailto:contact@waxleahi.com"
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Envoyer Email
              </a>
              <p className="text-sm text-gray-600 mt-4 font-semibold">contact@waxleahi.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-12">
            Formulaire de Contact
          </h2>

          <form onSubmit={handleSubmit} className="bg-brand-light rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-brand-dark font-semibold mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-brand-dark font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-brand-dark font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-brand-dark font-semibold mb-2">
                  Sujet *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
                >
                  <option value="">-- Sélectionnez un sujet --</option>
                  <option value="general">Demande générale</option>
                  <option value="courses">Problème de courses</option>
                  <option value="livraison">Problème de livraison</option>
                  <option value="devenir-livreur">Devenir livreur</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-brand-dark font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-dark to-brand-dark/90 hover:from-brand-dark/90 hover:to-brand-dark text-white font-bold py-4 rounded-lg transition-all hover:shadow-lg"
            >
              Envoyer le Message
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
                <p className="text-green-700 font-semibold">
                  Merci ! Votre message a été envoyé. Nous vous répondrons rapidement.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-dark mb-16">
            Questions Fréquemment Posées
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Quelles sont les zones desservies ?",
                answer: "Nous desservons Cotonou, Calavi, Parakou et Porto-Novo. Consultez notre page Localisations pour vérifier si votre zone exacte est couverte.",
              },
              {
                question: "Quels sont les frais de livraison ?",
                answer: "Les frais dépendent de votre localisation et de l'heure de la commande. Pas de minimum de commande. Tarif transparent dès la commande via l'app ou WhatsApp.",
              },
              {
                question: "Comment puis-je devenir livreur ?",
                answer: "Nous recrutons régulièrement des livreurs. Contactez-nous via le formulaire ou WhatsApp pour connaître les conditions et modalités.",
              },
              {
                question: "Livrez-vous le dimanche et la nuit ?",
                answer: "Oui ! Nous livrons 24h/24, 7j/7, même le dimanche et jours fériés. C'est notre force et notre engagement.",
              },
              {
                question: "Comment puis-je signaler un problème avec ma livraison ?",
                answer: "Contactez-nous immédiatement via WhatsApp ou téléphone. Nous traitons les problèmes en priorité et en urgence.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-orange"
              >
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-dark/90 text-brand-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Besoin d'aide immédiate ?
          </h2>
          <p className="text-lg text-brand-light/80 mb-8">
            Notre équipe est disponible 24h/24 sur WhatsApp
          </p>
          <a
            href="https://wa.me/22967123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg transition-all hover:shadow-lg text-lg"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
