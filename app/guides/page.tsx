'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import CTATarifs from '@/components/shared/CTATarifs';
import GuideDownloadModal from '@/components/forms/GuideDownloadModal';
import { FileText, Package, Play, Wrench, Download, Clock, ShoppingCart, Gift, ExternalLink } from 'lucide-react';

const productFormats = [
  {
    title: 'Guide PDF',
    icon: FileText,
    description: 'Synthétique et actionnable, modèles à copier-coller, checklists',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Template & kits',
    icon: Package,
    description: 'Notion/Docs/etc. prêts à dupliquer, modèles remplis, mode d\'emploi rapide',
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Formation en ligne',
    icon: Play,
    description: 'Plateforme de formation, vidéos courtes, fiches mémo, quiz/cas pratiques',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Apps & outils',
    icon: Wrench,
    description: 'Accès via lien sécurisé, modèles intégrés, aide contextuelle',
    color: 'bg-orange-100 text-orange-700',
  },
];

const freeGuides = [
  {
    id: 1,
    title: 'L\'essentiel du contrat de sous-traitance en organisme de formation',
    category: 'Guide PDF',
    description: 'Ce qu\'il faut vérifier pour rester carré juridiquement quand vous sous-traitez. Modèles de contrat, clauses essentielles, points de vigilance.',
    image: '/images/guides/guide-sous-traitance.svg',
    pdfPath: '/pdfs/Contrat-de-Sous-traitance-Votre-Guide-Essentiel.pdf',
  },
  {
    id: 2,
    title: 'Guide enrichi de l\'auto-évaluation CDC (CPF)',
    category: 'Guide PDF',
    description: 'Auto-évaluation enrichie de la Caisse des Dépôts pour le CPF. Comprendre les exigences, préparer son dossier, éviter les erreurs courantes.',
    image: '/images/guides/guide-cdc.svg',
    pdfPath: '/pdfs/guide-cdc.pdf',
  },
  {
    id: 3,
    title: 'IA Pratique : 50 Prompts essentiels pour votre Organisme de Formation',
    category: 'Guide PDF',
    description: 'Révolutionnez votre organisme de formation avec l\'IA. 50 prompts prêts à l\'emploi pour gagner du temps sur vos tâches quotidiennes.',
    image: '/images/guides/guide-ia-prompts.svg',
    pdfPath: '/pdfs/Guide-IA-Pratique-50-Prompts-essentiels-pour-revolutionner-votre-Organisme-de-Formation.pdf',
  },
];

const paidProducts = [
  {
    id: 'rgpd-pack',
    title: 'Pack RGPD Complet pour Organismes de Formation',
    category: 'Template & kits',
    description: 'Manuel PDF + Espace Notion duplicable avec registre des traitements, politique de confidentialité, charte informatique, clausier RGPD, formulaires de consentement et plan d\'action RGPD spécial OF.',
    price: 97,
    image: 'https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1j51aob3415601ct6dbr1ec31b4er.png',
    payhipUrl: 'https://payhip.com/b/3jDgd',
    features: [
      'Manuel PDF avec vidéo d\'intro',
      'Registre des traitements adapté OF',
      'Politique de confidentialité',
      'Charte informatique',
      'Engagement de confidentialité',
      'Clausier RGPD pour contrats',
      'Formulaires de consentement',
      'Modèles d\'exercice des droits',
      'Plan d\'action RGPD simplifié'
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'L\'essentiel du contrat de sous-traitance',
    category: 'Guide PDF',
    description: 'Version complète avec analyses juridiques approfondies, cas pratiques et accès aux mises à jour.',
    price: 29,
    image: '/images/guides/guide-sous-traitance.svg',
    payhipUrl: '#',
    features: [
      'Guide PDF complet',
      'Modèles de contrat personnalisables',
      'Cas pratiques détaillés',
      'Mises à jour incluses'
    ],
  },
  {
    id: 5,
    title: 'Guide CDC Premium',
    category: 'Guide PDF',
    description: 'Auto-évaluation CDC avec accompagnement vidéo, checklist interactive et support email.',
    price: 39,
    image: '/images/guides/guide-cdc.svg',
    payhipUrl: '#',
    features: [
      'Guide PDF enrichi',
      'Vidéos d\'accompagnement',
      'Checklist interactive',
      'Support email 30 jours'
    ],
  },
  {
    id: 6,
    title: 'Pack IA Formation Pro',
    category: 'Guide PDF',
    description: '100+ prompts pour OF, templates personnalisables et formations vidéo sur l\'utilisation de l\'IA.',
    price: 49,
    image: '/images/guides/guide-ia-prompts.svg',
    payhipUrl: '#',
    features: [
      '100+ prompts professionnels',
      'Templates personnalisables',
      'Formations vidéo',
      'Communauté privée'
    ],
  },
  {
    id: 7,
    title: 'Formation Référent Qualité',
    category: 'Formation en ligne',
    description: 'Comprendre et exercer le rôle de référent qualité dans un organisme de formation. Maîtriser Qualiopi, mettre en place un système qualité efficace.',
    price: 'À venir',
    image: '/images/guides/formation-qualite.svg',
    available: false,
  },
  {
    id: 8,
    title: 'Formation Assistant(e) Formation',
    category: 'Formation en ligne',
    description: 'Module complet pour maîtriser le métier d\'assistant(e) formation. Administration, gestion des dossiers, relation clients, outils digitaux.',
    price: 'À venir',
    image: '/images/guides/formation-assistant.svg',
    available: false,
  },
];

export default function GuidesFormationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<{
    name: string;
    pdfPath: string;
  } | null>(null);

  const handleFreeDownloadClick = (guide: typeof freeGuides[0]) => {
    setSelectedGuide({
      name: guide.title,
      pdfPath: guide.pdfPath,
    });
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Les"
          highlightedWord="Guides Formation"
          subtitle="Guides PDF, templates et ressources prêtes à l'emploi pour optimiser votre organisme de formation"
          bgImage="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          showCTA={false}
        />

        {/* Section Guide Gratuit */}
        <section className="section-padding bg-gradient-to-b from-accent/5 to-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
                <Gift className="w-6 h-6 text-accent" />
                <span className="font-bold text-accent text-lg">OFFRE DE BIENVENUE</span>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Choisissez votre guide gratuit
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Pour découvrir la qualité de nos ressources, choisissez <strong className="text-secondary">un guide gratuit</strong> parmi les trois ci-dessous
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {freeGuides.map((guide) => {
                const formatInfo = productFormats.find(f => f.title === guide.category);
                const IconComponent = formatInfo?.icon || FileText;
                const colorClass = formatInfo?.color || 'bg-gray-100 text-gray-700';

                return (
                  <div
                    key={guide.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/50 relative"
                  >
                    {/* Badge Gratuit */}
                    <div className="absolute top-4 right-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                      GRATUIT
                    </div>

                    <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 ${colorClass}`}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {guide.category}
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 min-h-[3.5rem]">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {guide.description}
                      </p>

                      <button
                        onClick={() => handleFreeDownloadClick(guide)}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Télécharger gratuitement</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Formats */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
                Ce que vous recevez selon le format
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Expertise terrain</h3>
                  <p className="text-gray-600 text-sm">Plus de 15 ans d'expérience dans la direction d'organismes de formation, la gestion administrative, financière, RH et Qualiopi.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Solutions concrètes</h3>
                  <p className="text-gray-600 text-sm">Guides, outils, tutorat et accompagnements directement opérationnels, pensés pour gagner du temps et sécuriser vos pratiques.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Approche personnalisée</h3>
                  <p className="text-gray-600 text-sm">Chaque OF est unique : nous adaptons nos interventions (présentiel, distanciel, AFEST, e-learning) à votre contexte et à vos enjeux.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productFormats.map((format, index) => {
                const IconComponent = format.icon;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${format.color}`}>
                      <IconComponent className="w-3 h-3 mr-1" />
                      {format.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Produits Payants */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Produits premium
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                À venir prochainement
              </p>
              <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg border-2 border-accent/20">
                <p className="text-gray-700 text-lg mb-4">
                  Je peux réaliser pour vous des <strong className="text-secondary">guides internes personnalisés</strong>, des templates sur mesure ou des formations adaptées à vos besoins spécifiques.
                </p>
                <p className="text-gray-600 mb-6">
                  Chaque projet est unique et conçu en fonction de votre contexte, vos enjeux et vos objectifs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Me contacter pour un projet sur mesure
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTATarifs
          title="Besoin d'un accompagnement plus complet ?"
          description="Découvrez nos formules d'accompagnement personnalisé pour votre organisme de formation"
        />

        {/* Section Contact */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 text-center border-2 border-secondary/20">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">
                Une question sur nos produits ?
              </h3>
              <p className="text-gray-700 mb-6">
                Écrivez-nous à{' '}
                <a
                  href="mailto:julie@formaswift.com"
                  className="text-secondary font-semibold hover:text-secondary/80 transition-colors duration-300"
                >
                  julie@formaswift.com
                </a>
                {' '}ou via le{' '}
                <a
                  href="/contact"
                  className="text-secondary font-semibold hover:text-secondary/80 transition-colors duration-300"
                >
                  formulaire de contact
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedGuide && (
        <GuideDownloadModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedGuide(null);
          }}
          guideName={selectedGuide.name}
          pdfPath={selectedGuide.pdfPath}
        />
      )}
    </>
  );
}
