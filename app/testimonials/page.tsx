import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials.json';

export const metadata: Metadata = {
  title: 'Témoignages Clients | FormaSwift',
  description: 'Découvrez les témoignages de nos clients satisfaits. Plus de 500 professionnels formés avec 95% de satisfaction. Avis authentiques sur nos formations.',
  openGraph: {
    title: 'Témoignages Clients | FormaSwift',
    description: 'Découvrez les témoignages de nos clients satisfaits. Plus de 500 professionnels formés avec 95% de satisfaction.',
  },
};

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Témoignages clients
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Découvrez ce que nos clients pensent de nos formations et de notre accompagnement
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">95%</div>
                <div className="text-gray-600">Taux de satisfaction</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">500+</div>
                <div className="text-gray-600">Professionnels formés</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">4.9/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {(testimonials || []).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center border-t border-gray-100 pt-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {testimonial.role}
                      </div>
                      {testimonial.company && (
                        <div className="text-secondary font-medium text-sm">
                          {testimonial.company}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Laurent Petit',
                  company: 'StartupTech',
                  rating: 5,
                  quote: 'Formation très pratique et directement applicable. Nos équipes ont gagné en efficacité dès la première semaine.',
                },
                {
                  name: 'Céline Moreau',
                  company: 'ConseilPro',
                  rating: 5,
                  quote: 'L\'accompagnement post-formation est exceptionnel. FormaSwift nous suit vraiment dans la durée.',
                },
                {
                  name: 'David Chen',
                  company: 'InnovCorp',
                  rating: 5,
                  quote: 'Méthode pédagogique innovante et formateurs experts. Je recommande vivement FormaSwift.',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-secondary text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Rejoignez nos clients satisfaits
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Découvrez comment FormaSwift peut transformer vos formations et développer les compétences de vos équipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Demander une consultation
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