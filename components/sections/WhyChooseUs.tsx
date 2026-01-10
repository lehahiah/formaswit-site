'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: MessageSquare,
      title: 'Une approche qui part du réel',
      description:
        "Chaque organisme a son histoire, ses valeurs, ses forces. Avant toute chose, j’écoute et j’observe. Mon rôle : comprendre votre fonctionnement, clarifier vos besoins et construire à partir de ce qui existe déjà.",
    },
    {
      icon: Lightbulb,
      title: 'Des idées, des outils, du sens',
      description:
        "L’organisation n’est pas une contrainte, c’est un langage. J’aime traduire vos besoins en solutions simples et concrètes : modèles, process, visuels, méthodes. Toujours au service de vos équipes et de votre identité.",
    },
    {
      icon: Leaf,
      title: 'Un accompagnement qui fait grandir',
      description:
        "La qualité, c’est une culture commune, pas une norme à cocher. Mon objectif : vous rendre autonome. Chaque projet est une transmission, une montée en compétence, une étape de plus vers la clarté et la sérénité.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Halos discrets pour effet vivant */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-16 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl lg:text-4xl text-anthracite mb-4"
          >
            Pourquoi travailler avec FormaSwift ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Parce qu’avant de transformer, il faut comprendre.  
            Parce qu’un accompagnement n’a de sens que s’il s’adapte à votre réalité.
          </motion.p>
        </div>

        {/* Les 3 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-anthracite mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Encart final “signature” */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 border border-accent/20 rounded-2xl shadow-inner p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>FormaSwift, c’est une manière d’accompagner autrement :</strong>  
            avec exigence, écoute et créativité.  
            On clarifie, on simplifie, on partage des méthodes, et surtout… on avance ensemble.
          </p>

          <p className="text-sm text-accent font-medium">
            ✳ Parce qu’un accompagnement réussi, c’est quand vos idées prennent forme et continuent de vivre sans moi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
