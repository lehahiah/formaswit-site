'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import CTATarifs from '@/components/shared/CTATarifs';
import { Coffee, Gift, ExternalLink, ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    title: 'Mug Dream Team Qualité',
    description: 'Pour célébrer votre équipe qualité qui assure au quotidien',
    image: 'https://cdn1.tpop.com/files/03aed2d5/6165c9e2/visual_Blanc_1237327324.jpg?1761031717',
    link: 'https://audit-coffee.tpopsite.com/product/mug-dream-team-qualite',
  },
  {
    title: 'Mug Qualiopi m\'a pas tué',
    description: 'Un clin d\'œil humoristique pour ceux qui ont survécu à l\'audit',
    image: 'https://cdn1.tpop.com/files/03aed2d5/bd13cdf1/visual_Blanc_1237327324.jpg?1761030594',
    link: 'https://audit-coffee.tpopsite.com/product/mug-qualiopi-ma-pas-tue',
  },
  {
    title: 'Stickers objets voyageurs',
    description: 'Pour identifier vos projecteurs, câbles et matériel prêtés aux formateurs',
    image: 'https://cdn1.tpop.com/files/03aed2d5/a52f79df/carre_2893659376_medium.jpg?1757343352',
    link: 'https://audit-coffee.tpopsite.com/collection/stickers-pour-objets-voyageurs',
  },
  {
    title: 'Mugs personnalisables',
    description: 'Créez vos propres mugs avec votre logo et vos messages',
    image: 'https://cdn.tpop.com/files/03aed2d5/tpopsite/products/d3d9446802a44259755d38e6d163e820/isa-conforme.png',
    link: 'https://audit-coffee.tpopsite.com/collection/personnalisable',
  },
];

export default function AuditCoffeePage() {
  const handleDiscoverClick = () => {
    window.open('https://audit-coffee.tpopsite.com/', '_blank');
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Audit &"
          highlightedWord="Coffee"
          subtitle="Goodies et objets personnalisés pour valoriser votre organisme de formation"
          bgImage="/images/image.png"
          ctaText="🛒 Découvrir la boutique"
          ctaUrl="https://audit-coffee.tpopsite.com/"
        />

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Créez du lien avec vos équipes et vos stagiaires
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Des objets personnalisés qui renforcent votre image de marque et créent une expérience mémorable. Entre humour et praticité, trouvez le goodie parfait pour votre organisme de formation.
              </p>
              <div className="bg-accent/10 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Mugs humoristiques, stickers pour matériel, créations personnalisées...</strong><br />
                  De quoi rendre vos audits plus légers et votre quotidien mieux organisé !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Nos produits phares
              </h2>
              <p className="text-xl text-gray-600">
                Une sélection de goodies qui font la différence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 group"
                >
                  <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-600">
                Un processus simple pour vos commandes personnalisées
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  Choisissez
                </h3>
                <p className="text-gray-600">
                  Sélectionnez vos produits préférés dans notre catalogue
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  Personnalisez
                </h3>
                <p className="text-gray-600">
                  Ajoutez votre logo, vos couleurs et vos messages
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  Recevez
                </h3>
                <p className="text-gray-600">
                  Vos goodies personnalisés livrés chez vous
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-accent/10 to-secondary/10">
          <div className="container">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
                Pourquoi travailler avec FormaSwift ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
              
              <div className="bg-white/50 rounded-lg p-6 mb-8">
                <p className="text-gray-600">
                  Vous avez une question ou un projet ? Écrivez-nous à{' '}
                  <a 
                    href="mailto:julie@formaswift.com" 
                    className="text-accent font-medium hover:text-accent/80 transition-colors duration-300"
                  >
                    julie@formaswift.com
                  </a>
                  {' '}ou via le{' '}
                  <a 
                    href="/contact" 
                    className="text-accent font-medium hover:text-accent/80 transition-colors duration-300"
                  >
                    formulaire de contact
                  </a>
                  .
                </p>
              </div>
              
              <Coffee className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Prêt à découvrir notre catalogue ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explorez tous nos produits et créez vos goodies personnalisés sur notre boutique en ligne.
              </p>
              <button
                onClick={handleDiscoverClick}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Découvrir la boutique</span>
                <ExternalLink className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Redirection vers audit-coffee.tpopsite.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}