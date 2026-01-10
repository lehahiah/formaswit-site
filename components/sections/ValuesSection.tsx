'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Lightbulb, Unlock, GraduationCap, Handshake } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Humanité',
    description:
      'Chaque projet commence par une rencontre. Comprendre avant de conseiller, écouter avant d’agir. C’est la base d’un accompagnement juste, sincère et durable.',
    color: 'from-[#1FA09D]/20 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Exemplarité',
    description:
      'Être repère, c’est d’abord être cohérent. Agir avec intégrité, respecter les règles, tenir parole. La crédibilité naît de l’exemple, pas du discours.',
    color: 'from-[#40514E]/20 to-transparent',
  },
  {
    icon: Lightbulb,
    title: 'Créativité responsable',
    description:
      'Sortir du cadre sans perdre le sens. Transformer les contraintes en leviers, inventer sans dénaturer. La créativité utile, au service de l’humain.',
    color: 'from-[#0da8b0]/25 to-transparent',
  },
  {
    icon: Unlock,
    title: 'Émancipation',
    description:
      'Donner les moyens d’agir, de comprendre, de choisir. Partager les outils et les savoirs pour que chacun progresse en autonomie.',
    color: 'from-[#11999E]/25 to-transparent',
  },
  {
    icon: GraduationCap,
    title: 'Apprentissage continu',
    description:
      'J’apprends autant que je transmets. Chaque rencontre nourrit ma pratique et celle de FormaSwift. Parce qu’une organisation apprenante, c’est un collectif vivant.',
    color: 'from-[#16c6cc]/25 to-transparent',
  },
  {
    icon: Handshake,
    title: 'Charte d’engagement FormaSwift',
    description:
      'Un accompagnement n’a de sens que s’il repose sur des valeurs partagées. Collaborer avec FormaSwift, c’est s’engager ensemble à placer l’humain, la justesse et le progrès au cœur de nos actions.',
    color: 'from-[#1FA09D] to-[#0d7d82]',
    isEngagement: true,
  },
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Halo décoratif */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-4">
            Nos valeurs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celles qui guident FormaSwift au quotidien. Celles que je partage avec mes partenaires, 
            et que je recherche chez les clients que j’accompagne.  
            Parce qu’un projet réussi, c’est avant tout une vision commune de l’humain et du travail juste.
          </p>
        </div>

        {/* Grille des valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${value.color} hover:-translate-y-1 ${
                  value.isEngagement ? 'text-white' : 'bg-white'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                    value.isEngagement
                      ? 'bg-white/20 border border-white/30'
                      : 'bg-accent/10'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      value.isEngagement ? 'text-white' : 'text-accent'
                    }`}
                  />
                </div>

                <h3
                  className={`font-heading font-semibold text-xl mb-3 ${
                    value.isEngagement ? 'text-white' : 'text-anthracite'
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    value.isEngagement ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {value.description}
                </p>

                {value.isEngagement && (
                  <div className="mt-6">
                    <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                      <p className="text-white/90 mb-4">
                        💬 <strong>On est prêts à travailler ensemble ?</strong><br />
                        Si ces valeurs résonnent chez vous, on a déjà un bon point commun.  
                        Parlez-moi de votre projet, et voyons comment on peut le faire grandir ensemble.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          href="/contact"
                          className="bg-white text-accent font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-md text-center"
                        >
                          Discutons-en
                        </Link>
                        <Link
                          href="/accompagnement"
                          className="text-white border border-white/60 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-white/10 text-center"
                        >
                          Découvrir mes accompagnements
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Phrase de transition */}
        <div className="text-center mt-14">
          <p className="text-gray-600 italic">
            Ensemble, on avance avec les mêmes repères : humanité, exigence et confiance.
          </p>
        </div>
      </div>
    </section>
  );
}
