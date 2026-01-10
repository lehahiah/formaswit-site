'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-cta-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const benefits = [
    'Consultation gratuite personnalisée',
    'Devis détaillé sous 48h',
    'Accompagnement de A à Z',
    'Garantie de satisfaction'
  ];

  return (
    <section id="final-cta-section" className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className={`text-center text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Heading */}
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Prêt à révolutionner vos formations ?
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les entreprises qui ont choisi l'excellence avec FormaSwift. 
            Transformez vos équipes dès aujourd'hui.
          </p>

          {/* Benefits List */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/contact"
              className="group bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-secondary flex items-center space-x-2"
            >
              <span>Commencer maintenant</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-secondary"
            >
              Découvrir nos services
            </Link>
          </div>

          {/* Trust Indicator */}
          <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/80 text-sm">
              ✨ Plus de 500 professionnels formés • 95% de satisfaction • Depuis 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}