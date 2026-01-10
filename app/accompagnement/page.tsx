'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import {
  Target,
  BookOpen,
  FileText,
  Settings,
  Palette,
  Zap,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Qualiopi & démarches qualité',
    emoji: '🎯',
    description:
      'Audit, préparation et suivi de votre certification Qualiopi. Analyse des indicateurs, structuration des preuves, simplification des process, animation des revues qualité et accompagnement à l’audit de surveillance.',
    highlight:
      'La qualité ne se résume pas à Qualiopi : nous construisons ensemble une démarche vivante, utile et adaptée à votre réalité.',
    color: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: FileText,
    title: 'Structuration administrative & process internes',
    emoji: '🗂️',
    description:
      'Optimisation de votre organisation : nomenclature documentaire, procédures, automatisation, suivi administratif, planification. Nous structurons vos dossiers pour plus de fluidité et de traçabilité.',
    highlight:
      'Un gain de temps considérable, une équipe plus autonome et des preuves prêtes pour vos audits.',
    color: 'from-green-500/10 to-emerald-500/10',
    iconColor: 'text-green-600',
  },
  {
    icon: BookOpen,
    title: 'Ingénierie pédagogique & e-learning',
    emoji: '📘',
    description:
      'Conception ou refonte de parcours de formation, adaptation e-learning, scénarisation pédagogique, accompagnement à la digitalisation.',
    highlight:
      'Des formations plus claires, engageantes et alignées avec les besoins de vos publics.',
    color: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-600',
  },
  {
    icon: Settings,
    title: 'Digitalisation & outils de gestion',
    emoji: '💻',
    description:
      'Paramétrage de vos outils (FormDev, Notion, Drive, CRM...), automatisation de vos mails et process, appui à la transition numérique sans surcoût logiciel inutile.',
    highlight:
      'Faire mieux avec ce que vous avez déjà : le digital au service de l’efficacité, pas de la complexité.',
    color: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-600',
  },
  {
    icon: Users,
    title: 'Appui RH & obligations sociales',
    emoji: '🤝',
    description:
      'Lecture et mise en pratique de la convention collective des organismes de formation (IDCC 1516), classification des emplois, obligations RH, temps de travail, avantages sociaux. Appui pédagogique, pas juridique.',
    highlight:
      'Comprendre vos obligations pour agir en toute sérénité, sans interprétation hasardeuse des textes.',
    color: 'from-rose-500/10 to-red-500/10',
    iconColor: 'text-rose-600',
  },
  {
    icon: Palette,
    title: 'Dossiers d’habilitation & financements',
    emoji: '📝',
    description:
      'Aide à la rédaction de dossiers d’habilitation (Jeunesse & Sport, RS/RNCP), compréhension des critères, préparation des preuves et formalisation.',
    highlight:
      'Un accompagnement ciblé pour sécuriser vos démarches et valoriser vos formations.',
    color: 'from-teal-500/10 to-emerald-500/10',
    iconColor: 'text-teal-600',
  },
];

const formules = [
  {
    icon: Zap,
    title: 'Mission ponctuelle',
    description:
      'Une intervention ciblée pour répondre à un besoin immédiat : mise à jour documentaire, audit blanc, création d’outil, rédaction de dossier d’habilitation...',
    examples: [
      'Audit blanc Qualiopi ou D²OF',
      'Refonte du manuel qualité',
      'Création de procédures types',
      'Rédaction de dossier d’habilitation Jeunesse & Sport',
    ],
  },
  {
    icon: Clock,
    title: 'Renfort temporaire',
    description:
      'Accompagnement sur une période définie (quelques heures par semaine ou par mois). Idéal pour franchir un cap ou soulager votre équipe.',
    examples: [
      'Support administratif récurrent',
      'Suivi des financements et OPCO',
      'Accompagnement à la digitalisation',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Accompagnement global / Référente externalisée',
    description:
      'Pilotage complet de votre démarche qualité et de vos processus internes. Animation des revues qualité, suivi des audits, amélioration continue, plan d’action annuel.',
    examples: [
      'Référente qualité externalisée',
      'Pilotage des audits et non-conformités',
      'Structuration documentaire annuelle',
    ],
  },
];

export default function AccompagnementPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* HERO */}
        <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/photopagequaliopi2.jpg"
              alt="Accompagnement organismes de formation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/60"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Accompagnement <span className="text-accent">sur mesure</span> pour les organismes de formation
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Conseil, structuration, Qualiopi, RH, digitalisation et outils : une approche globale et pragmatique pour faire évoluer votre organisme.
            </p>
         <a
  href="https://calendar.app.google/dwfC7F7LMHqXcSsT7"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 hover:shadow-lg hover:shadow-[#1FA09D]/30 transition-all duration-300"
>
  📅 Réserver un appel découverte
</a>

          </div>
        </section>

        {/* FORMULES */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trois niveaux d’accompagnement selon vos besoins
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Du conseil ponctuel à la gestion externalisée de votre démarche qualité — FormaSwift s’adapte à votre rythme, vos ressources et vos objectifs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {formules.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent/30 transition-all hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                    <p className="text-gray-600 mb-4">{f.description}</p>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      {f.examples.map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5" /> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROBLÉMATIQUES AVEC ACCORDÉONS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Des réponses concrètes à vos questions du quotidien
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Explorez les thématiques selon vos besoins : Qualiopi, RH, digitalisation ou financements.
            </p>

            <div className="space-y-6">

              {/* Accordéon 1 - Qualiopi */}
              <details className="group bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    🎯 Qualiopi & D²OF
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>💡 Remplir correctement le BPF et éviter les erreurs fréquentes.</p>
                  <p>💡 Préparer un audit Qualiopi ou D²OF sans stress.</p>
                  <p>💡 Identifier les preuves pertinentes selon vos indicateurs.</p>
                  <p>💡 Comprendre les règles de sous-traitance et d’habilitation.</p>
                  <p>💡 Mettre en place un suivi qualité efficace et pérenne.</p>
                </div>
              </details>

              {/* Accordéon 2 - Administration & RH */}
              <details className="group bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    🗂️ Administration & RH
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>💡 Lire et comprendre la convention collective des OF (IDCC 1516).</p>
                  <p>💡 Définir les temps de travail, classifications et fiches de poste.</p>
                  <p>💡 Organiser la gestion administrative des stagiaires et formateurs.</p>
                  <p>💡 Créer une nomenclature et des modèles de documents harmonisés.</p>
                  <p>💡 Structurer les échanges entre direction, qualité et pédagogie.</p>
                </div>
              </details>

              {/* Accordéon 3 - Digitalisation & financements */}
              <details className="group bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    💻 Digitalisation & financements
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>💡 Paramétrer FormDev et automatiser vos mails de suivi.</p>
                  <p>💡 Gérer vos déclarations sur Kairos, EDOF ou Chorus Pro.</p>
                  <p>💡 Créer des outils no-code sur mesure selon vos besoins.</p>
                  <p>💡 Comprendre les référencements et financements (France Travail, OPCO).</p>
                  <p>💡 Mettre en place une veille utile et ciblée sans surcharge d’infos.</p>
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Notre expertise à votre service
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-accent/30 transition-all hover:-translate-y-2"
                  >
                    <div className={`bg-gradient-to-br ${s.color} p-6`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{s.emoji}</div>
                          <h3 className="font-semibold text-lg text-gray-900">{s.title}</h3>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Icon className={`w-6 h-6 ${s.iconColor}`} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{s.description}</p>
                      <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          <strong>Objectif :</strong> {s.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABONNEMENT WHATSAPP PRO */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-primary mb-6">
              L’abonnement WhatsApp Pro FormaSwift 💬
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Un accompagnement de proximité, pensé pour les dirigeants et équipes d’organismes de formation.  
              Vous gardez un <strong>contact direct avec moi</strong> via un groupe WhatsApp privé pour poser vos questions du quotidien.  
              <br />
              <strong>Je vous conseille, je vous oriente, je vous alerte — mais je ne fais pas à votre place.</strong>
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl shadow-lg p-10 border border-primary/20">
              <ul className="text-left mx-auto max-w-lg space-y-3 text-gray-700">
                <li>✅ Réponses sous 24h ouvrées à vos questions opérationnelles</li>
                <li>✅ Accès à une veille personnalisée selon votre profil et vos besoins</li>
                <li>✅ Partage régulier d’alertes : financements, Qualiopi, OPCO, réglementaire</li>
                <li>✅ Groupe WhatsApp privé (1 à 3 membres de votre équipe)</li>
                <li>✅ Conseils contextuels selon votre secteur et votre maturité qualité</li>
              </ul>
              <p className="text-gray-600 mt-6 text-sm">
                💡 Idéal pour les structures autonomes qui veulent un <strong>appui expert continu</strong> et une <strong>veille proactive</strong> sans repasser par des rendez-vous formels.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:bg-[#178B89] hover:scale-105"
                >
                  📲 Découvrir les formules d’abonnement
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VEILLE */}
        <section className="py-12 bg-gray-50 text-center">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                La veille FormaSwift : ciblée, utile, et sans surcharge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                En tant qu’abonné, vous recevez directement sur WhatsApp des alertes personnalisées :  
                actualités Qualiopi, évolution des obligations D²OF, nouveautés OPCO, CPF, RH ou outils de gestion (FormDev, Chorus Pro, Kairos…).  
                <br /><br />
                Vous gagnez du temps, vous restez à jour — sans jamais vous noyer dans l’information.
              </p>
              <div className="text-sm text-gray-500">
                📬 Possibilité de choisir vos thématiques de veille selon vos priorités : Qualité, RH, Financements, Digitalisation.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION QUALIOPI INTÉGRÉE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Notre expertise Qualiopi & Démarche Qualité
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La qualité ne se limite pas à la certification Qualiopi. Elle englobe tout ce qui fait la fiabilité,
                la clarté et la cohérence de votre organisation.
              </p>
            </div>

            <div className="space-y-6">
              <details className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    🎯 Certification Qualiopi complète
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>✓ Accompagnement complet à la certification Qualiopi</p>
                  <p>✓ Audit blanc ou préparation à l'audit de surveillance</p>
                  <p>✓ Animation de revues qualité et suivi des indicateurs</p>
                  <p>✓ Refonte ou création de votre système documentaire</p>
                  <p>✓ Structuration de l'archivage numérique et des preuves</p>
                </div>
              </details>

              <details className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    📈 Référente qualité externalisée
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>✓ Pilotage complet de votre démarche qualité</p>
                  <p>✓ Animation des revues qualité et plans d'amélioration</p>
                  <p>✓ Suivi continu adapté à votre structure</p>
                  <p>✓ Conformité D²OF, OPCO, France Travail</p>
                  <p>✓ Vous restez concentré sur votre cœur de métier</p>
                </div>
              </details>

              <details className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200 rounded-xl shadow-sm p-6 hover:border-primary/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none text-left">
                  <span className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    🛠️ Outils & amélioration continue
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 space-y-3 pl-2">
                  <p>✓ Optimisation de vos outils existants (FormDev, Notion, Drive)</p>
                  <p>✓ Automatisation de vos processus qualité</p>
                  <p>✓ Développement d'outils no-code sur mesure</p>
                  <p>✓ Mallette qualité adaptée à votre fonctionnement</p>
                  <p>✓ Approche inspirée PDCA, ISO, Lean Management</p>
                </div>
              </details>
            </div>

            <div className="mt-12 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-8 text-center border-2 border-accent/20">
              <p className="text-gray-800 text-lg mb-6">
                <strong className="text-primary">Notre approche :</strong> Une qualité vivante, utile et adaptée à votre réalité.
                Bien plus qu'une conformité, nous construisons ensemble un système qui vous ressemble.
              </p>
              <a
                href="https://calendar.app.google/dwfC7F7LMHqXcSsT7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition-all duration-200"
              >
                📞 Échanger sur votre démarche qualité
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous avez un projet ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Parlons de vos besoins, de votre organisation actuelle et des pistes d’optimisation possibles.
              </p>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34qNSCjIcUOUkKouNJx31bp8NxHG9KqAdWGoJAhaZ_CZbhVe0Lcn1qm2gdhg-M62eTS0he_46W?gv=true"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary transition-all duration-200"
              >
                📞 Réserver un appel découverte
              </a>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
