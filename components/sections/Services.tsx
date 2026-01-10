'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, Users, Cog, Award, Shield, Folder, Book, Zap, Megaphone, Gift, ArrowRight } from 'lucide-react';
import services from '@/data/services.json';

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

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Nos services de formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche complète pour transformer vos besoins en compétences concrètes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {(services || []).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={service.id}
                data-index={index}
                className={`service-card group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-secondary/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {((service as any).bullets || []).slice(0, 3).map((bullet: string, i: number) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors duration-300 group/link"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Voir tous nos services</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}