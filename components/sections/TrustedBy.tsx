'use client';

import { motion, type Variants } from 'framer-motion';
import { Handshake, Network, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function TrustedBy() {
  const blocks = [
    {
      icon: Handshake,
      title: 'Collaborations durables',
      description:
        "Certaines collaborations ont débuté comme des missions d’accompagnement avant d’évoluer vers de véritables partenariats basés sur la confiance, la qualité et le partage d’expériences.",
      partners: [
        {
          name: 'dbO Formation',
          detail:
            'Initialement cliente pour un accompagnement Qualiopi, la collaboration se poursuit aujourd’hui autour du portage, de la qualité et de l’accompagnement des formateurs indépendants.',
        },
        {
          name: 'AFIPH Emploi Compétences',
          detail:
            'Client accompagnée sur la structuration et la préparation à l’audit Qualiopi, le lien se poursuit à travers des actions communes sur l’inclusion, la sensibilisation au handicap et la communication en FALC.',
        },
        {
          name: 'FormDev',
          link: 'https://www.form-dev.fr/',
          detail:
            'Partenaire technique avec qui je collabore régulièrement sur l’évolution des outils, les retours utilisateurs et l’animation de webinaires dédiés aux organismes de formation.',
          bonus:
            '💡 1 mois d’essai offert (au lieu de 15 jours) en précisant le code parrain “Julie@formaswift.com”.',
        },
      ],
    },
    {
      icon: Network,
      title: 'Réseaux et engagement',
      description:
        "Un ancrage professionnel fort au sein de réseaux actifs sur l’inclusion, la pédagogie et la transformation du secteur de la formation.",
      partners: [
        {
          name: 'Réseau des Référents Handicap (RHF)',
          detail:
            'Participation aux ateliers et formations de la Ressource Handicap Formation (Agefiph) pour renforcer les pratiques inclusives et le partage entre pairs.',
        },
        {
          name: 'Via Compétences – AURA',
          detail:
            'Réseau régional de professionnels de la formation. Autoformation et veille régulières sur les financements, l’AFEST et l’ingénierie de formation.',
        },
      ],
    },
    {
      icon: Lightbulb,
      title: 'Veille et montée en compétence',
      description:
        "Une démarche d’apprentissage continue pour rester à la croisée de l’innovation pédagogique, de la qualité et des outils numériques.",
      partners: [
        {
          name: 'Unow – IA & RH',
          link: 'https://api.unow.fr/certificate/551224736471436526',
          detail:
            'Formation sur l’intégration responsable de l’intelligence artificielle dans les pratiques RH et formatives.',
        },
        {
          name: 'LinkedIn Learning',
          detail:
            'Formations régulières sur la pédagogie, la collaboration, les émotions au travail et la dynamique d’équipe.',
        },
      ],
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="trusted-by"
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Halo décoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[clamp(200px,35vw,500px)] h-[clamp(200px,35vw,500px)] bg-accent/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[clamp(180px,30vw,450px)] h-[clamp(180px,30vw,450px)] bg-accent/10 rounded-full blur-[130px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-anthracite mb-3">
            Un écosystème apprenant et engagé
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Des partenariats solides, un réseau professionnel vivant et une veille continue
            pour faire progresser la formation.
          </p>
        </motion.div>

        {/* Blocs principaux */}
        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-anthracite">
                    {block.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {block.description}
                </p>
                <ul className="space-y-2">
                  {block.partners.map((p, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-snug">
                      {p.link ? (
                        <Link
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent font-medium hover:underline"
                        >
                          {p.name}
                        </Link>
                      ) : (
                        <span className="font-medium text-anthracite">{p.name}</span>
                      )}
                      <span className="text-gray-500"> – {p.detail}</span>
                      {'bonus' in p && p.bonus && (
                        <p className="text-xs text-accent italic mt-1 pl-4">
                          {p.bonus}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="text-gray-500 text-sm italic mt-10">
          Parce qu'on apprend toujours mieux ensemble.
        </p>
      </div>
    </section>
  );
}
