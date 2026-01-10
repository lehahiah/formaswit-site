'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Layers, HeartHandshake } from 'lucide-react';

export default function Approach() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#F8FBFB]">
      {/* Halo lumineux d’ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#1FA09D]/15 rounded-full blur-[160px] animate-pulse-smooth"></div>
        <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-[#0D7D82]/15 rounded-full blur-[180px] animate-pulse-smooth delay-1000"></div>
      </div>

      <div className="container relative z-10 max-w-5xl">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-4">
            Mon approche
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Chaque accompagnement est une rencontre. Une écoute, une lecture fine de votre réalité,
            et un travail commun pour trouver le bon équilibre entre
            <span className="text-accent font-medium"> structure</span>, 
            <span className="text-secondary font-medium"> créativité</span> et 
            <span className="text-accent font-medium"> sens</span>.
          </p>
        </motion.div>

        {/* Corps du texte */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-gray-700 text-base leading-relaxed"
        >
          <p>
            J’interviens comme <strong>personne ressource</strong> : j’observe, j’écoute, je repère ce qui fonctionne déjà,
            et ce qui peut être simplifié, allégé ou transmis autrement. 
            Parfois je guide, parfois je construis à vos côtés, parfois je prends le relais le temps de formaliser.
          </p>

          <p>
            Mon rôle est de <strong>structurer ce qui existe</strong> sans figer ce qui vit.
            D’identifier les points d’appui, les compétences dormantes, les processus à clarifier.
            De transformer le savoir tacite en ressources partageables, au service d’une organisation plus fluide et apprenante.
          </p>

          <div>
            <p>Concrètement, cela peut passer par :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>des temps de formation (AFEST, tutorat, e-learning) ;</li>
              <li>la création d'outils, kits ou supports sur mesure ;</li>
              <li>la mise en conformité documentaire ou réglementaire ;</li>
              <li>ou simplement une <strong>présence de confiance</strong> pour remettre du sens dans les priorités.</li>
            </ul>
          </div>

          <p>
            J’apprends autant que je transmets. Chaque projet m’enrichit et m’inspire pour le suivant.
            Mon objectif reste le même : que votre structure gagne en cohérence, en clarté et en autonomie,
            sans jamais perdre ce qui fait sa singularité humaine.
          </p>
        </motion.div>

        {/* Ligne d’icônes illustratives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-14 text-accent"
        >
          <div className="flex flex-col items-center gap-2">
            <Users className="w-7 h-7" />
            <span className="text-sm text-gray-600">Écoute & co-construction</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Layers className="w-7 h-7" />
            <span className="text-sm text-gray-600">Structure & clarté</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Lightbulb className="w-7 h-7" />
            <span className="text-sm text-gray-600">Créativité & innovation</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartHandshake className="w-7 h-7" />
            <span className="text-sm text-gray-600">Engagement & transmission</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
