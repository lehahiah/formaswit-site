import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import { Target, Eye, Heart, User, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | FormaSwift',
  description: 'Découvrez FormaSwift : notre mission, vision, valeurs et l\'expertise de notre fondatrice pour accompagner les organismes de formation.',
  openGraph: {
    title: 'À Propos | FormaSwift',
    description: 'Notre mission : rendre la formation rapide, concrète et mesurable. Découvrez notre approche et notre expertise.',
  },
};

export default function AProposPage() {
  const values = [
    {
      icon: Target,
      title: 'Efficacité',
      description: 'Nous privilégions les solutions concrètes et opérationnelles qui apportent des résultats immédiats.',
    },
    {
      icon: Eye,
      title: 'Clarté',
      description: 'Nous simplifions la complexité réglementaire pour la rendre accessible et compréhensible.',
    },
    {
      icon: CheckCircle,
      title: 'Conformité',
      description: 'Nous garantissons le respect des exigences légales et qualité dans tous nos accompagnements.',
    },
    {
      icon: Heart,
      title: 'Transmission',
      description: 'Nous partageons notre expertise pour développer l\'autonomie de nos clients.',
    },
  ];

  const expertise = [
    'Expertise RH et droit social',
    'Spécialiste qualité et Qualiopi',
    'Connaissance approfondie du secteur formation',
    'Maîtrise des outils digitaux et no-code',
    'Expérience en ingénierie pédagogique',
    'Accompagnement personnalisé',
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Qui suis-je ?"
          highlightedWord="Julie Maillard"
          subtitle="Experte en gestion d'organismes de formation : RH, qualité, pédagogie et digitalisation"
          bgImage="/images/julie.png"
          showCTA={false}
        />

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Notre mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Rendre la formation rapide, concrète et mesurable.</strong> 
                  Chez FormaSwift, nous accompagnons les organismes de formation dans leur développement, 
                  leur conformité et leur efficacité.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nous combinons expertise juridique, RH, qualité, pédagogique et digitale pour offrir 
                  des solutions opérationnelles qui transforment les contraintes réglementaires en 
                  opportunités de croissance.
                </p>
                <div className="space-y-3">
                  {[
                    'Accompagnement opérationnel personnalisé',
                    'Solutions digitales innovantes et accessibles',
                    'Formations métier spécialisées',
                    'Veille réglementaire continue'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="text-center">
                  <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-6">
                    Notre vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    <strong>Transformer les obligations réglementaires en leviers de performance</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Nous croyons que la conformité ne doit pas être un frein mais un moteur 
                    d'amélioration continue et d'excellence opérationnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Nos valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre approche et notre engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                  Notre fondatrice
                </h2>
                <p className="text-xl text-gray-600">
                  Une expertise multidisciplinaire au service des organismes de formation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Photo */}
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-xl">
                    <img src="/images/julie.png" alt="Julie Maillard" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-2">
                    Julie Maillard
                  </h3>
                  <p className="text-secondary font-medium">
                    Fondatrice FormaSwift
                  </p>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Forte de plus de 15 ans d'expérience dans la direction et l'accompagnement d'organismes de formation,
                    Julie combine une expertise unique en ressources humaines, qualité Qualiopi, D²OF,
                    ingénierie pédagogique et digitalisation.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Passionnée par l'efficacité opérationnelle et la transmission, elle a créé FormaSwift
                    pour offrir aux organismes de formation des solutions concrètes, pragmatiques et immédiatement
                    opérationnelles. Son approche : transformer les contraintes réglementaires en leviers de performance.
                  </p>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Domaines d'expertise :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {expertise.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
                FormaSwift en chiffres
              </h2>
              <p className="text-xl text-white/90">
                Notre impact auprès des organismes de formation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/90">Professionnels formés</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">95%</div>
                <div className="text-white/90">Taux de satisfaction</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-white/90">Organismes accompagnés</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
                <div className="text-white/90">Audits Qualiopi réussis</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Prêt à optimiser votre organisme de formation ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Découvrez comment FormaSwift peut vous accompagner dans votre développement et votre conformité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Demander un diagnostic gratuit
                </a>
                <a href="/services" className="btn-secondary">
                  Découvrir nos services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}