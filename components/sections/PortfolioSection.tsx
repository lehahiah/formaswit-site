'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Settings, Award, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

function PortfolioComponent() {
  const categories = [
    {
      icon: FileText,
      title: 'Gestion administrative & financière',
      description:
        "Structurer, automatiser et fiabiliser la gestion des actions de formation : tableaux de bord, documents types, suivi des financements et conformité réglementaire.",
      projects: [
        { title: 'Tableaux de suivi & outils administratifs', image: '/portfolio/outils-internes.png' },
        { title: 'Espace interne RH & communication', image: '/portfolio/site-interne.png' },
      ],
    },
    {
      icon: Settings,
      title: 'Organisation & stratégie réglementaire',
      description:
        "Accompagnement à la mise en conformité : référencement sur Kairos et Carif-Oref, structuration documentaire, veille collaborative et automatisations.",
      projects: [
        { title: 'Tableau de veille collaborative', image: '/portfolio/veille-collaborative.png' },
        { title: 'Base documentaire Notion GED', image: '/portfolio/notion-ged.png' },
      ],
    },
    {
      icon: Award,
      title: 'Qualité & audit',
      description:
        "Former et appuyer les référents qualité : procédures personnalisées, kits facilitateurs, ateliers collaboratifs et préparation à l’audit Qualiopi.",
      projects: [
        { title: 'Procédures & processus Qualiopi', image: '/portfolio/procedures-qualite.png' },
        { title: 'Guide facilitateur', image: '/portfolio/guide-facilitateur.png' },
      ],
    },
    {
      icon: Lightbulb,
      title: 'Innovation pédagogique',
      description:
        "Imaginer et créer des supports innovants : e-learning, jeux pédagogiques, podcasts immersifs et intégration de l’IA dans les pratiques formatives.",
      projects: [
        { title: 'Jeu Enjeux : les échanges', image: '/portfolio/jeu-enjeux.png' },
        { title: 'FormaSwift GPT – Expert CCN', image: '/portfolio/gpt-ccn.png' },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, categories.length]);

  const next = () => setIndex((prev) => (prev + 1) % categories.length);
  const prev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <motion.section
      id="portfolio"
      className="section-padding bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-anthracite mb-3">
          Quelques réalisations concrètes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Chaque projet est né d’un besoin réel, d’une rencontre, d’un défi.  
          J’aime transformer les idées en outils utiles, les processus en pratiques concrètes.
        </p>

        {/* --- Carrousel principal --- */}
        <div
          className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white shadow-sm"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center py-10 px-6"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = categories[index].icon;
                    return <Icon className="w-5 h-5 text-accent" />;
                  })()}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-anthracite">
                  {categories[index].title}
                </h3>
              </div>
              <p className="text-gray-600 max-w-3xl text-sm md:text-base mb-8">
                {categories[index].description}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {categories[index].projects.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-[300px] md:w-[400px]"
                  >
                    <div className="relative w-full h-[230px] rounded-t-2xl overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 90vw, 40vw"
                      />
                    </div>
                    <div className="py-3 text-center">
                      <h4 className="font-semibold text-sm md:text-base text-anthracite">
                        {p.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Flèches */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-accent hover:text-white text-accent rounded-full p-2 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-accent hover:text-white text-accent rounded-full p-2 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-6 mb-3">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

const PortfolioSection = dynamic(() => Promise.resolve(PortfolioComponent), { ssr: false });
export default PortfolioSection;
