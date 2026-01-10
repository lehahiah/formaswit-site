'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/heroaccueil.jpg"
          alt="Travail collaboratif en organisme de formation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dégradé turquoise plus profond */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B3D3D]/90 via-[#1FA09D]/75 to-transparent"></div>

      {/* Halo lumineux doux */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#1FA09D]/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#0B3D3D]/25 rounded-full blur-[130px]"></div>
      </div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 25 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 container px-6 sm:px-12 lg:px-20 max-w-4xl text-left"
      >
        {/* Titre */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
          <span className="block">Ensemble, on fait</span>
          <span className="block text-[#E8FCFB] font-extrabold">vivre vos formations</span>
        </h1>

        {/* Texte d'accroche */}
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
          FormaSwift accompagne les organismes de formation, formateurs et structures d’apprentissage
          dans leur démarche qualité, leur digitalisation et la structuration de leurs processus.
        </p>

        {/* Boutons d’action (sans animation) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/accompagnement"
            className="bg-white text-[#1FA09D] hover:bg-[#1FA09D] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-md flex items-center gap-2"
          >
            <span>Découvrir nos accompagnements</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/formations"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-300 flex items-center gap-2"
          >
            <span>Explorer nos formations</span>
          </Link>
        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
