'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import testimonials from '@/data/testimonials.json';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TemoignagesPage() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen text-gray-900">
        {/* --- HERO --- */}
        <section className="relative py-24 text-center overflow-hidden">
          {/* Fond photo douce */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="équipe en réunion"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          </div>

          {/* Texte hero */}
          <div className="relative z-10 px-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 drop-shadow-sm">
              Témoignages clients
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Merci à toutes celles et ceux qui font vivre FormaSwift au quotidien :  
              partenaires, formateurs, dirigeants, responsables qualité et RH.
            </p>
          </div>
        </section>

        {/* --- LISTE DES TÉMOIGNAGES --- */}
        <section className="container mx-auto max-w-5xl px-6 py-16 space-y-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg border transition-all duration-500 hover:shadow-2xl ${
                i % 2 === 0
                  ? 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-100'
                  : 'bg-gradient-to-br from-[#E8FAF9] via-white to-[#F8FFFF] border-[#C7F0ED]/60'
              }`}
            >
              <div className="p-10">
                <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
                <p className="text-xl italic leading-relaxed text-gray-800 mb-8">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shadow-inner">
                    {t.name
                      ? t.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)
                          .toUpperCase()
                      : '?'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
{/* --- SECTION ENTRE PAIRS --- */}
<section className="py-24 bg-gradient-to-b from-[#EEF9F8] via-white to-[#F9FFFF] relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>
  <div className="container mx-auto max-w-5xl px-6 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Entre pairs, on avance ensemble 🤝
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Merci à celles et ceux qui contribuent à faire évoluer les pratiques de la formation 
        en partageant, commentant ou relayant nos contenus sur LinkedIn.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* --- Carte 1 --- */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <p className="text-gray-800 italic mb-6 leading-relaxed">
          “Merci Julie pour ces informations précieuses, où l’on cherche la voie encore et toujours 
          pour sensibiliser et accompagner au mieux les salariés dans la gestion de leur parcours professionnel.”
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center font-bold text-[#0A66C2]">
            ML
          </div>
          <div>
            <p className="font-semibold text-gray-900">Marie-L. G.</p>
            <p className="text-sm text-gray-600">Formatrice, accompagnatrice RH</p>
          </div>
        </div>
      </div>

      {/* --- Carte 2 --- */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <p className="text-gray-800 italic mb-6 leading-relaxed">
          “Merci pour cette infographie qui met en valeur la mission du référent handicap en organisme de formation 
          et la place centrale qu’il occupe dans un OF.”
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center font-bold text-[#0A66C2]">
            JR
          </div>
          <div>
            <p className="font-semibold text-gray-900">Jérôme R.</p>
            <p className="text-sm text-gray-600">Chargé de projet handicap et inclusion</p>
          </div>
        </div>
      </div>

      {/* --- Carte 3 --- */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <p className="text-gray-800 italic mb-6 leading-relaxed">
          “Tellement vrai Julie. On réduit encore trop souvent le rôle du référent qualité 
          à une simple collecte de preuves, alors qu’il s’agit d’une fonction stratégique 
          au cœur du développement des organismes de formation.”
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center font-bold text-[#0A66C2]">
            CA
          </div>
          <div>
            <p className="font-semibold text-gray-900">Christina A.</p>
            <p className="text-sm text-gray-600">Chargée de projets Formation & Qualité</p>
          </div>
        </div>
      </div>

      {/* --- Carte 4 --- */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <p className="text-gray-800 italic mb-6 leading-relaxed">
          “Merci Julie pour vos publications et vos travaux de veille au sujet de la formation professionnelle.”
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center font-bold text-[#0A66C2]">
            VJ
          </div>
          <div>
            <p className="font-semibold text-gray-900">Véronique J.</p>
            <p className="text-sm text-gray-600">Accompagnatrice en bilans professionnels & de compétences</p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <a
        href="https://fr.linkedin.com/in/julie-bourdais-9a285055"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-[#0A66C2] font-semibold border border-[#0A66C2]/40 px-6 py-3 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
      >
        Echangez avec Julie sur Linkedin
      </a>
    </div>
  </div>
</section>

        {/* --- SECTION APPEL À TÉMOIGNAGE --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-24 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1FA09D]/10 via-[#1FA09D]/5 to-transparent" />
          <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Vous avez collaboré avec FormaSwift ?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Partagez votre expérience : vos retours aident d’autres structures à
              choisir un accompagnement qualité et digitalisation plus humain, plus clair.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 transition-all duration-300"
            >
              Laisser un témoignage
            </a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
