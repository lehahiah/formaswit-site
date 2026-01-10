'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Palette, Cog, Play, BarChart } from 'lucide-react';
import { METHOD_STEPS } from '@/lib/constants';

const iconMap = {
  search: Search,
  palette: Palette,
  cog: Cog,
  play: Play,
  barChart: BarChart,
};

export default function Method() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = document.querySelectorAll('.method-step');
    steps.forEach(step => observer.observe(step));

    return () => {
      steps.forEach(step => observer.unobserve(step));
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Notre méthode éprouvée
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus structuré en 5 étapes pour garantir l'efficacité et la mesure de vos formations
          </p>
        </div>

        {/* Method Steps */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {METHOD_STEPS.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={step.id}
                  data-index={index}
                  className={`method-step relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Mobile Timeline */}
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                  
                  {/* Step Content */}
                  <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    {/* Step Number & Icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 relative z-10">
                        {step.id}
                      </div>
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
              Prêt à transformer vos formations ?
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez comment notre méthode peut s'adapter à vos besoins spécifiques
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Demander une consultation gratuite
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}