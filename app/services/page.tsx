import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Target, Users, Cog, Award, Shield, Folder, Book, Zap, Megaphone, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import services from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Nos Services | FormaSwift',
  description: 'Découvrez nos 10 services pour optimiser votre organisme de formation : accompagnement, conseil, digitalisation, conformité et bien plus.',
  openGraph: {
    title: 'Nos Services | FormaSwift',
    description: 'Découvrez nos 10 services pour optimiser votre organisme de formation : accompagnement, conseil, digitalisation, conformité et bien plus.',
  },
};

const iconMap = {
  target: Target,
  users: Users,
  cog: Cog,
  award: Award,
  shield: Shield,
  folder: Folder,
  book: Book,
  zap: Zap,
  megaphone: Megaphone,
  gift: Gift,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden min-h-[50vh] flex items-center">
          {/* Bandeau foncé en haut */}
          <div className="absolute top-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-b from-primary/95 to-transparent z-10"></div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Services formation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-secondary/40"></div>
          </div>

          <div className="container relative z-20">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-white/50">
              <div className="flex justify-center mb-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-accent via-secondary to-accent rounded-full"></div>
              </div>

              <h1 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-gray-900 text-center">
                Nos <span className="text-secondary font-extrabold">services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
                10 services complets pour optimiser votre organisme de formation et assurer votre conformité
              </p>

              <div className="flex justify-center mt-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-accent via-secondary to-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {(services || []).map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {((service as any).bullets || []).map((bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors duration-300 group"
                      >
                        <span>En savoir plus</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Besoin d'un accompagnement personnalisé ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour un diagnostic gratuit et découvrez comment optimiser votre organisme de formation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Demander un diagnostic gratuit
                </a>
                <a href="/temoignages" className="btn-secondary">
                  Voir les témoignages
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