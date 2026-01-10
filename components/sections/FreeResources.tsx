'use client';

import { useState } from 'react';
import { Download, FileText, CheckSquare, Mail, X } from 'lucide-react';

export default function FreeResources() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{ title: string; type: string } | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resources = [
    {
      icon: FileText,
      color: 'accent',
      title: 'Procédures prêtes à l’emploi',
      subtitle: 'Des modèles clairs pour cadrer vos pratiques et gagner du temps.',
      items: [
        'Procédure accueil des apprenants en situation de handicap',
        'Procédure gestion des absences',
      ],
      type: 'procédure',
    },
    {
      icon: CheckSquare,
      color: 'secondary',
      title: 'Checklists de contrôle express',
      subtitle: 'Des grilles simples pour vos auto-audits et vos contrôles CPF.',
      items: ['Checklist audit Qualiopi', 'Checklist contrôles CPF'],
      type: 'checklist',
    },
  ];

  const handleDownload = (resource: { title: string; type: string }) => {
    setSelectedResource(resource);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setIsSubmitted(false);
        setEmail('');
        setSelectedResource(null);
      }, 2000);
    }, 1000);
  };

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-4">
              Ressources gratuites
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Des outils concrets pour simplifier votre gestion et anticiper vos audits Qualiopi.  
              <span className="block text-gray-500 text-xs mt-1">+ de 1000 téléchargements par des organismes de formation certifiés.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((r, index) => {
              const Icon = r.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <div
                    className={`w-16 h-16 bg-${r.color}/10 rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 text-${r.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-anthracite mb-2">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{r.subtitle}</p>
                  <ul className="space-y-3 mb-6">
                    {r.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-700 text-sm">
                        <div className={`w-2 h-2 bg-${r.color} rounded-full mt-2 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleDownload({ title: r.title, type: r.type })}
                    className={`w-full bg-${r.color} hover:bg-${r.color}/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300`}
                  >
                    <Download className="w-5 h-5" />
                    <span>Télécharger</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-anthracite mb-4 text-center">
                  Télécharger : {selectedResource.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Laissez votre email pour recevoir instantanément votre ressource gratuite.
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@entreprise.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent mb-4"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Télécharger maintenant'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-anthracite mb-4">
                  Merci !
                </h3>
                <p className="text-gray-600">
                  Votre ressource a été envoyée à <strong>{email}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
