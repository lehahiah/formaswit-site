'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const MAIN_SERVICES = [
  {
    title: 'Accompagnement personnalisé',
    description:
      'Audit Qualiopi, structuration documentaire, digitalisation des processus… Un accompagnement à taille humaine pour faire grandir votre organisme de formation, pas à pas.',
    href: '/accompagnement',
    buttonText: 'Découvrir l’accompagnement',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Formations spécialisées',
    description:
      'Des modules concrets sur la qualité, le tutorat, l’AFEST ou la digitalisation. Chaque formation est construite à partir des besoins du terrain.',
    href: '/formations',
    buttonText: 'Voir les formations',
    image:
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Guides & outils pratiques',
    description:
      'Des ressources prêtes à l’emploi : kits Qualiopi, trames Notion, modèles RGPD, checklists. Pensées pour vous simplifier la vie au quotidien.',
    href: '/guides',
    buttonText: 'Explorer les guides',
    image:
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Goodies & identité visuelle',
    description:
      'Mugs, carnets, stickers ou objets personnalisés… pour faire rayonner votre marque de formation avec bienveillance et originalité.',
    href: '/studio',
    buttonText: 'Découvrir les goodies',
    image:
      'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

export default function FocusBlocks() {
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleBlocks((prev) => Array.from(new Set([...prev, index])));
          }
        });
      },
      { threshold: 0.1 }
    );

    const blocks = document.querySelectorAll('.focus-block');
    blocks.forEach((block) => observer.observe(block));

    return () => {
      blocks.forEach((block) => observer.unobserve(block));
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-[#f9fbfb] to-[#eef6f6]">
      <div className="container">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-4">
            Nos solutions concrètes
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Parce qu’aucun accompagnement ne se ressemble, FormaSwift s’adapte à vos besoins :
            expertise, outils et proximité.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MAIN_SERVICES.map((service, index) => {
            const isVisible = visibleBlocks.includes(index);

            return (
              <Link
                key={index}
                href={service.href}
                data-index={index}
                className={`focus-block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-accent/40 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Image avec filtre turquoise */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1FA09D]/25 mix-blend-multiply"></div>
                </div>

                {/* Contenu texte */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-anthracite mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg font-medium text-sm group-hover:bg-accent/90 transition-colors duration-300">
                    {service.buttonText} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
