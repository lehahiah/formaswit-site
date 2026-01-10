import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Target, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | FormaSwift',
  description: 'Découvrez FormaSwift, expert en formation professionnelle depuis 2020. Notre mission : transformer vos besoins en compétences concrètes avec des parcours rapides et mesurables.',
  openGraph: {
    title: 'À Propos | FormaSwift',
    description: 'Découvrez FormaSwift, expert en formation professionnelle depuis 2020. Notre mission : transformer vos besoins en compétences concrètes.',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque formation, avec des contenus de qualité et des méthodes éprouvées.',
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Un accompagnement personnalisé et un suivi continu pour garantir votre réussite.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Nous intégrons les dernières innovations pédagogiques pour des formations engageantes.',
    },
    {
      icon: TrendingUp,
      title: 'Résultats',
      description: 'Des formations mesurables avec un impact concret sur vos performances professionnelles.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Professionnels formés' },
    { number: '50+', label: 'Entreprises partenaires' },
    { number: '95%', label: 'Taux de satisfaction' },
    { number: '4', label: 'Années d\'expérience' },
  ];

  const team = [
    {
      name: 'Sarah Martin',
      role: 'Directrice & Fondatrice',
      description: '15 ans d\'expérience en ingénierie pédagogique et management d\'équipes.',
    },
    {
      name: 'Thomas Dubois',
      role: 'Expert Formation Digitale',
      description: 'Spécialiste des technologies éducatives et des classes virtuelles interactives.',
    },
    {
      name: 'Marie Leroy',
      role: 'Consultante RH',
      description: 'Experte en développement des compétences et accompagnement professionnel.',
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
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                À propos de FormaSwift
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Depuis 2020, nous transformons la formation professionnelle avec des parcours rapides, concrets et mesurables.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Notre mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Chez FormaSwift, nous croyons que la formation doit être <strong>rapide, concrète et mesurable</strong>. 
                  Notre mission est de transformer vos besoins en compétences réelles, avec des parcours sur-mesure 
                  qui s'adaptent à votre contexte professionnel.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nous accompagnons les entreprises dans leur développement en proposant des solutions de formation 
                  innovantes qui allient efficacité pédagogique et flexibilité organisationnelle.
                </p>
                <div className="space-y-3">
                  {[
                    'Formations sur-mesure adaptées à vos enjeux',
                    'Méthodes pédagogiques innovantes et engageantes',
                    'Accompagnement personnalisé de A à Z',
                    'Mesure d\'impact et optimisation continue'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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
                Les principes qui guident notre approche et notre engagement envers nos clients
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

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Notre équipe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des experts passionnés au service de votre développement professionnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-secondary to-accent text-white">
          <div className="container text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment FormaSwift peut transformer vos formations et développer les compétences de vos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                Nous contacter
              </a>
              <a href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Nos services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}