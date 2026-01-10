import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Package, Sparkles, Heart, HandHeart, Network, CheckCircle, Clock, MapPin, ArrowRight, Mail, Gift, Gamepad2, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ateliers Organisme Formation | Matrice RACI, Handicap, Aidance & Outils No-Code',
  description: 'Ateliers participatifs pour organismes de formation : matrice RACI qualité, fresque handicap, sensibilisation aidance. Animation sur site ou kits autonomes. Outil gratuit entretiens annuels. Création petits outils no-code : tableaux de bord, jeux pédagogiques.',
  keywords: [
    'atelier organisme formation',
    'matrice RACI qualité',
    'fresque handicap',
    'sensibilisation handicap formation',
    'aidance formation',
    'intelligence collective OF',
    'kit facilitateur',
    'animation atelier',
    'jeu pédagogique',
    'entretien annuel',
    'no-code formation',
    'outil pédagogique',
    'tableau de bord formation',
    'Glide',
    'FormaSwift'
  ],
  openGraph: {
    title: 'Ateliers Organisme Formation | Matrice RACI, Handicap, Aidance & Outils No-Code',
    description: 'Ateliers participatifs pour organismes de formation : matrice RACI, handicap, aidance. Outils no-code personnalisés et jeu gratuit entretiens annuels.',
  },
};

export default function AteliersKitsPage() {
  const ateliers = [
    {
      icon: Network,
      title: 'Matrice RACI pour la qualité',
      description: 'Atelier participatif en intelligence collective pour clarifier les rôles et responsabilités de chacun dans votre démarche qualité',
      duration: '3h',
      participants: '6-12 personnes',
      benefits: [
        'Clarification des rôles de chaque membre de l\'équipe',
        'Identification des responsabilités qualité',
        'Amélioration de la communication interne',
        'Matrice RACI personnalisée livrée',
      ],
      color: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: HandHeart,
      title: 'Fresque de sensibilisation au handicap',
      description: 'Atelier ludique et collaboratif pour mieux comprendre les différents types de handicap et adapter vos formations',
      duration: '2h30',
      participants: '6-15 personnes',
      benefits: [
        'Compréhension des différents handicaps',
        'Sensibilisation des équipes',
        'Identification des adaptations possibles',
        'Kit de bonnes pratiques fourni',
      ],
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Heart,
      title: 'Fresque de sensibilisation à l\'aidance',
      description: 'Atelier de sensibilisation pour comprendre les enjeux des aidants et adapter vos pratiques de formation',
      duration: '2h30',
      participants: '6-15 personnes',
      benefits: [
        'Compréhension du rôle d\'aidant',
        'Identification des besoins spécifiques',
        'Adaptation des modalités de formation',
        'Création d\'un environnement inclusif',
      ],
      color: 'from-rose-500/10 to-orange-500/10',
      iconColor: 'text-rose-600',
    },
  ];

  const formules = [
    {
      title: 'Animation sur site',
      icon: Users,
      description: 'Je me déplace dans votre organisme pour animer l\'atelier',
      features: [
        'Animation par une experte terrain',
        'Matériel et supports fournis',
        'Adaptation à votre contexte',
        'Débriefing et livrables personnalisés',
        'Suivi post-atelier inclus',
      ],
      cta: 'Demander un devis',
      ctaLink: '/contact',
      highlight: true,
    },
    {
      title: 'Kit facilitateur',
      icon: Package,
      description: 'Vous animez l\'atelier vous-même avec un kit complet',
      features: [
        '1h d\'échange préparatoire avec moi',
        'Kit complet prêt à l\'emploi',
        'Guide d\'animation détaillé',
        'Tous les supports à imprimer',
        'Accès à une FAQ et support',
      ],
      cta: 'En savoir plus',
      ctaLink: '/contact',
      highlight: false,
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-accent animate-pulse" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Ateliers et Kits
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
                Dynamisez vos équipes avec des ateliers participatifs
              </p>
              <p className="text-lg text-white/80">
                Animation sur site ou kits facilitateurs pour une autonomie totale
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Nos ateliers participatifs
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Des formats innovants basés sur l'intelligence collective pour engager vos équipes et ancrer les apprentissages
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {ateliers.map((atelier, index) => {
                const IconComponent = atelier.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30 transform hover:-translate-y-2 hover:scale-105 group"
                  >
                    <div className={`bg-gradient-to-br ${atelier.color} p-8 text-center relative`}>
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                        <IconComponent className={`w-8 h-8 ${atelier.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                        {atelier.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {atelier.description}
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-accent" />
                          <span>{atelier.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-accent" />
                          <span>{atelier.participants}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {atelier.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Choisissez votre formule
              </h2>
              <p className="text-xl text-gray-600">
                Selon vos besoins et votre budget, optez pour une animation clé en main ou un kit pour animer en autonomie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {formules.map((formule, index) => {
                const IconComponent = formule.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                      formule.highlight
                        ? 'border-4 border-accent transform scale-105'
                        : 'border border-gray-200 hover:border-accent/50'
                    }`}
                  >
                    {formule.highlight && (
                      <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                        Recommandé
                      </div>
                    )}

                    <div className="p-8">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                        {formule.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {formule.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {formule.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={formule.ctaLink}
                        className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                          formule.highlight
                            ? 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                      >
                        <span>{formule.cta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto border border-accent/20">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Les kits facilitateurs
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Chaque kit comprend une heure d'échange préparatoire avec moi pour vous assurer une animation réussie.
                Je vous transmets toutes les clés pour animer l'atelier en toute confiance !
              </p>
              <p className="text-sm text-gray-500">
                Support disponible par email après réception du kit
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                  Outil gratuit : Jeu pour entretiens annuels
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Réinventez vos entretiens annuels avec un jeu gratuit basé sur l'échange et la collaboration
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="https://lh3.googleusercontent.com/d/11ANl4SQHcKBCI-l5a6n5EZaz9VNSO_mR"
                      alt="Jeu Enjeux Les Échanges pour entretiens annuels"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      100% Gratuit
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-center space-x-2 mb-4">
                      <Gamepad2 className="w-6 h-6 text-green-600" />
                      <h3 className="font-heading font-bold text-2xl text-gray-900">
                        Enjeux : Les Échanges
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Ce jeu réinvente vos entretiens annuels en misant sur l'échange et la collaboration.
                      Grâce à des cartes thématiques (motivation, réussites, défis, projets), des cartes émotions et valeurs,
                      et des questions dédiées au salarié, il facilite une discussion authentique et constructive.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">En 30 minutes ou 1 heure selon vos besoins</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Explorez les points clés de l'année passée</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Définissez ensemble les perspectives d'avenir</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Créez un moment d'écoute et de bienveillance</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-green-800">
                        <strong>Projet réalisé en no-code (Glide)</strong> - Une solution simple et efficace pour transformer vos entretiens.<br />
                        <span className="text-xs">À utiliser depuis un smartphone pour une meilleure expérience</span>
                      </p>
                    </div>

                    <a
                      href="https://enjeux-les-echanges-8hi4.glide.page/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Gift className="w-5 h-5" />
                      <span>Accéder au jeu gratuitement</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Besoin d'un petit outil no-code personnalisé ?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  Comme ce jeu d'entretiens annuels, je peux créer des petits outils no-code adaptés à votre structure :
                  tableaux de bord améliorés, jeux pédagogiques, outils de suivi...
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Je peux créer pour vous :</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Tableaux de bord améliorés</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Jeux pédagogiques interactifs</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Outils de suivi personnalisés</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Formulaires interactifs simples</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Les avantages du no-code :</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Rapide à développer et déployer</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Budget maîtrisé</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Facilement modifiable</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Adapté à vos besoins spécifiques</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Discuter de votre projet no-code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-accent/5 to-secondary/5">
          <div className="container">
            <div className="bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
              </div>

              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Prêt à dynamiser vos équipes ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discutons de vos besoins : ateliers, kits ou outils no-code personnalisés
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Demander un devis</span>
                </a>
                <a
                  href="tel:+33766025451"
                  className="bg-white hover:bg-gray-50 text-secondary border-2 border-secondary font-medium px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>07 66 02 54 51</span>
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Animation possible dans toute la France
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
