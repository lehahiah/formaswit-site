'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AlertTriangle, ArrowLeft, Mail, Send, Loader2, CheckCircle } from 'lucide-react';

export default function NotFound() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    intendedPage: '',
    email: '',
    needHelp: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Signalement 404',
          email: formData.email,
          phone: '',
          message: `Page recherchée : ${formData.intendedPage}\n\nBesoin d'un renseignement : ${formData.needHelp ? 'Oui' : 'Non'}\n\nMessage : ${formData.message || 'Aucun message supplémentaire'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      setIsSubmitted(true);
      setFormData({
        intendedPage: '',
        email: '',
        needHelp: false,
        message: '',
      });
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>

              {/* Error Code */}
              <div className="mb-4">
                <span className="text-8xl font-bold text-gray-300">404</span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Oups ! Page introuvable
              </h1>

              {/* Message */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                On apprend tous de ses erreurs... même les sites web !
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 text-left">
                <p className="text-blue-800 mb-2">
                  <strong>Cette page n'existe pas ou n'est plus disponible.</strong>
                </p>
                <p className="text-blue-700 text-sm">
                  Si vous pensez qu'il s'agit d'une erreur ou d'un lien mort, vous pouvez nous le signaler ci-dessous. Nous corrigerons ça au plus vite !
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/" className="btn-primary">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn-secondary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Signaler cette erreur
                </button>
              </div>

              {/* Report Form */}
              {isOpen && !isSubmitted && (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mt-8 text-left animate-in fade-in slide-in-from-top-4 duration-300">
                  <h2 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                    Signaler cette erreur
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Merci de nous aider à améliorer notre site ! Vos retours sont précieux.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Intended Page */}
                    <div>
                      <label htmlFor="intendedPage" className="block text-sm font-medium text-gray-700 mb-2">
                        Quelle page cherchiez-vous ? *
                      </label>
                      <input
                        type="text"
                        id="intendedPage"
                        name="intendedPage"
                        value={formData.intendedPage}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        placeholder="Ex: Page sur les formations Qualiopi"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        placeholder="votre@email.fr"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Need Help Checkbox */}
                    <div>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="needHelp"
                          checked={formData.needHelp}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-2 focus:ring-accent/50"
                          disabled={isSubmitting}
                        />
                        <span className="text-sm text-gray-700">
                          Au passage, j'ai besoin d'un renseignement
                        </span>
                      </label>
                    </div>

                    {/* Message (conditional) */}
                    {formData.needHelp && (
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Votre question ou besoin
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent resize-vertical"
                          placeholder="Décrivez votre besoin..."
                          disabled={isSubmitting}
                        />
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Envoi...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Envoyer</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={isSubmitting}
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-900 text-lg mb-2">
                    Merci pour votre signalement !
                  </h3>
                  <p className="text-green-700 text-sm">
                    Nous allons corriger ce problème rapidement. Si vous avez demandé un renseignement, nous vous recontacterons sous 48h.
                  </p>
                </div>
              )}

              {/* Helpful Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Pages populaires :</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/services" className="text-accent hover:text-accent/80 text-sm underline">
                    Nos services
                  </Link>
                  <Link href="/produits" className="text-accent hover:text-accent/80 text-sm underline">
                    Nos produits
                  </Link>
                  <Link href="/formations" className="text-accent hover:text-accent/80 text-sm underline">
                    Formations
                  </Link>
                  <Link href="/blog" className="text-accent hover:text-accent/80 text-sm underline">
                    Blog
                  </Link>
                  <Link href="/guides" className="text-accent hover:text-accent/80 text-sm underline">
                    Guides gratuits
                  </Link>
                  <Link href="/contact" className="text-accent hover:text-accent/80 text-sm underline">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
