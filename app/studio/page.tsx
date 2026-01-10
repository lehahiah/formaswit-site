import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import CTATarifs from '@/components/shared/CTATarifs';
import { FileText, Package, Coffee, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Studio FormaSwift | Guides, Kits & Ressources pour Organismes de Formation',
  description:
    'Le Studio FormaSwift : création d’outils, guides et ressources pour les organismes de formation. Téléchargez, adaptez, et découvrez la boutique Audit & Coffee (mugs & goodies).',
  openGraph: {
    title: 'Studio FormaSwift | Guides, Kits & Ressources pour Organismes de Formation',
    description:
      'Le Studio FormaSwift conçoit des outils concrets : guides PDF, templates Notion, kits pratiques, et la boutique Audit & Coffee (mugs & goodies).',
  },
};

const categories = [
  {
    id: 'guides',
    title: 'Guides Formation',
    icon: FileText,
    description:
      'Guides PDF pour simplifier la gestion de votre organisme de formation. Des ressources concrètes, actionnables et à jour des obligations.',
    features: [
      'Guides gratuits (Qualiopi, RGPD, BPF, sous-traitance…)',
      'Guides premium avec trames modifiables',
      'Format PDF opérationnel',
      'Téléchargement instantané'
    ],
    gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    ctaText: 'Découvrir les guides',
    ctaUrl: '/guides', // ✅ lien corrigé
    badge: 'Ressources PDF',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'kits',
    title: 'Kits & Outils Pratiques',
    icon: Package,
    description:
      'Templates Notion, outils no-code et kits thématiques pour structurer et digitaliser votre OF sans complexité. Prêts à l’emploi ou personnalisables.',
    features: [
      'Templates Notion duplicables',
      'Kits Qualiopi et RH clés en main',
      'Fresques et ateliers téléchargeables',
      'Mode d’emploi inclus'
    ],
    gradient: 'from-green-500/20 via-emerald-500/20 to-teal-600/20',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    ctaText: 'Explorer les kits',
    ctaUrl: '/ateliers-kits', // ✅ lien temporaire corrigé
    badge: 'Outils pratiques',
    badgeColor: 'bg-green-500',
  },
  {
    id: 'audit-coffee',
    title: 'Audit & Coffee ☕',
    icon: Coffee,
    description:
      'La boutique officielle FormaSwift : mugs, stickers et goodies autour de la formation, de la qualité et du café. Un clin d’œil à votre quotidien d’organisme de formation.',
    features: [
      'Mugs & goodies thématiques',
      'Idées cadeaux pour l’équipe',
      'Designs autour de Qualiopi, RH, pédagogie',
      'Impression à la demande – livraison rapide'
    ],
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-600/20',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-600',
    ctaText: 'Visiter la boutique',
    ctaUrl: 'https://audit-coffee.tpopsite.com/',
    badge: 'Boutique officielle',
    badgeColor: 'bg-orange-500',
  },
];

export default function StudioPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Le"
          highlightedWord="Studio FormaSwift"
          subtitle="Guides, kits, outils et ressources pratiques pour les organismes de formation"
              bgImage="/images/dreamteam.png"

          showCTA={false}
        />

        {/* --- reste du contenu inchangé --- */}

        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="font-bold text-accent text-lg">CRÉATIONS & RESSOURCES FORMASWIFT</span>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Les outils que je conçois pour faciliter votre quotidien
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guides, kits, templates et la boutique Audit & Coffee — conçus à partir des besoins réels du terrain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {categories.map((category) => {
                const IconComponent = category.icon;

                return (
                  <div
                    key={category.id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-gray-100 hover:border-accent/30"
                  >
                    <div className={`absolute top-4 right-4 z-10 ${category.badgeColor} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                      {category.badge}
                    </div>

                    <div className={`bg-gradient-to-br ${category.gradient} p-8 lg:p-10 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                      <div className={`${category.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className={`w-10 h-10 ${category.iconColor}`} />
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-gray-900 text-center mb-3">
                        {category.title}
                      </h3>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-600 leading-relaxed mb-6 text-center">
                        {category.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-accent mr-3 text-lg">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={category.ctaUrl}
                        target={category.ctaUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`block w-full ${category.iconColor.replace('text-', 'bg-').replace('-600', '-500')} hover:opacity-90 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg text-center`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {category.ctaText}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTATarifs
          title="Envie d'aller plus loin ?"
          description="Découvrez nos accompagnements et formations pour approfondir l’utilisation de ces outils dans votre organisation."
        />
      </main>
      <Footer />
    </>
  );
}
