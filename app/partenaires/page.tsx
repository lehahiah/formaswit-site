import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ExternalLink, Users, Building } from 'lucide-react';

export default function PartenairesPage() {
  const partners = [
    {
      id: 1,
      name: 'Formdev',
      description: 'Solution complète de gestion des formations et suivi qualité.',
      website: 'https://www.form-dev.fr/',
      logo: '/images/partners/formdev-logo.svg', // Placeholder
      available: true,
    },
    {
      id: 2,
      name: 'Qualibo',
      description: 'Portage Qualiopi et accompagnement pour les formateurs indépendants.',
      website: 'https://dbo.fr/portage-qualiopi/',
      logo: '/images/partners/qualibo-logo.svg', // Placeholder
      available: true,
    },
    {
      id: 3,
      name: 'À venir…',
      description: 'Nouveaux partenariats en préparation pour élargir nos solutions.',
      website: '#',
      logo: null,
      available: false,
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Users className="w-16 h-16 text-accent" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Nos partenaires
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Nous travaillons en collaboration avec des acteurs engagés dans la qualité, la pédagogie et l'innovation
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-anthracite leading-relaxed">
                <strong>Un réseau de partenaires experts</strong> pour vous offrir des solutions complètes : 
                gestion administrative, portage Qualiopi, outils digitaux. Ensemble, nous répondons à tous vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center ${
                    !partner.available ? 'opacity-60' : 'hover:border-accent/20'
                  }`}
                >
                  {/* Logo */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    {partner.available ? (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <Building className="w-10 h-10 text-primary" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <Building className="w-10 h-10 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-xl text-anthracite mb-4">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* CTA Button */}
                  {partner.available ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      <span>Découvrir</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center space-x-2 bg-gray-300 text-gray-500 font-medium px-6 py-3 rounded-lg cursor-not-allowed">
                      <span>Bientôt disponible</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-6">
                Vous souhaitez devenir partenaire ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de partenaires et développons ensemble des solutions innovantes pour les organismes de formation.
              </p>
              <a
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center space-x-2"
              >
                <span>Nous contacter</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}