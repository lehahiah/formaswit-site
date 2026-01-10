'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import ContactFormClient from '@/components/forms/ContactFormClient';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'; // 🔹 Ajout en haut des imports
import Link from 'next/link';
import {
  Calendar,
  CheckCircle,
  ClipboardList,
  FileText,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Wrench,
  Zap,
  ChevronDown,
} from 'lucide-react';

// --- Thèmes pour les accordéons WhatsApp Pro ---
const whatsappThemes = [
  {
    title: '🎯 Qualiopi & D²OF',
    items: [
      'Je dois faire mon BPF, je mets quoi dans ce cadre exactement ?',
      'On a un audit de surveillance Qualiopi, est-ce que ce point-là peut bloquer ?',
      "On sous-traite un formateur, est-ce qu'on doit le déclarer / le référencer ?",
      "Quel type de preuve est attendu pour l'indicateur X ?",
    ],
  },
  {
    title: '🗂️ Administration & RH',
    items: [
      "On doit classer un nouveau poste dans la convention collective des OF (IDCC 1516), tu nous aides à le faire proprement ?",
      "Tu peux relire notre fiche de poste / contrat avant qu'on l'envoie ?",
      "On doit préparer les convocations et les émargements pour un financement OPCO, on oublie rien ?",
    ],
  },
  {
    title: '💻 Digitalisation & outils',
    items: [
      'Comment on paramètre FormDev pour générer automatiquement les mails aux stagiaires ?',
      'On veut une arborescence partagée propre pour nos dossiers, tu valides notre nommage ?',
      "On peut automatiser le suivi des présences sans rajouter un logiciel payant ?",
    ],
  },
  {
    title: '💶 Financements & obligations',
    items: [
      "On doit déposer l'action dans Kairos / EDOF / Chorus Pro, on coche quoi ?",
      'On peut être pris en charge sur ce type de formation ?',
      "C'est quoi la règle exacte de l'OPCO sur ce cas ?",
    ],
  },
];

export default function TarifsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const CALENDAR_LINK = 'https://calendar.app.google/dwfC7F7LMHqXcSsT7';

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Tarifs &"
          highlightedWord="Formules"
          subtitle="Des solutions d'accompagnement adaptées à vos besoins et votre budget"
          bgImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          showCTA={false}
        />

        {/* SECTION TARIFS QUALITE & CERTIFICATION */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl px-6 text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Des interventions sur mesure : qualité, conformité, organisation,
              digitalisation, administratif et pédagogie.
              <br />
              Chaque mission débute par un diagnostic et une évaluation de vos
              besoins avant devis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 hover:shadow-lg hover:shadow-[#1FA09D]/30 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>📅 Réserver un appel découverte</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/30 font-semibold px-6 py-3 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Demander un devis</span>
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              Tous les montants sont indiqués hors taxes. <br />
              Les tarifs sont adaptés selon votre taille, vos outils et votre
              degré d’autonomie.
            </p>
          </div>
        </section>

        {/* SECTION WHATSAPP PRO */}
        <section className="py-20 relative bg-gradient-to-b from-white/0 via-gray-50/60 to-white/0">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                L’abonnement WhatsApp Pro FormaSwift 💬
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Votre canal direct, sans rendez-vous formel.  
                Je réponds à vos questions du quotidien, je vous alerte en cas de nouveauté réglementaire,  
                et je vous évite les mauvaises surprises.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 p-8 lg:p-10">
              <ul className="text-gray-700 text-base space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Réponses sous 24h ouvrées à vos questions opérationnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Jusqu’à 3 membres de votre équipe connectés sur le même groupe</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Veille ciblée envoyée directement (Qualiopi, OPCO, RH, digitalisation…)</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Alertes pratiques pour rester conforme sans tout surveiller</span>
                </li>
              </ul>

              <div className="space-y-4 mb-10">
                {whatsappThemes.map((theme, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        {theme.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          openIndex === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`px-5 pb-4 text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                        openIndex === idx
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <ul className="space-y-2 pt-2">
                        {theme.items.map((q, qIdx) => (
                          <li key={qIdx} className="flex gap-2">
                            <Zap className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 p-6 text-center">
                <p className="text-gray-800 text-lg font-medium mb-2">
                  Abonnement WhatsApp Pro
                </p>
                <p className="text-gray-900 text-xl font-bold mb-4">
                  à partir de <span className="text-primary font-extrabold">180 € / mois HT</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:bg-[#178B89] hover:scale-105"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>📲 Parler de l’abonnement</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/30 font-semibold px-6 py-3 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Demander une proposition</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT FINAL */}
        <section className="py-24 relative bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Diagnostic initial offert */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-100 shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Diagnostic initial offert
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  On prend 20 minutes pour comprendre votre structure, votre contexte
                  et vos priorités.  
                  Ensuite seulement, je vous propose une piste d’accompagnement adaptée —  
                  ou rien du tout si vous n’en avez pas besoin.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:bg-[#178B89] hover:scale-105"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>📅 Réserver un appel découverte</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/30 font-semibold px-6 py-3 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Demander un devis personnalisé</span>
                  </Link>
                </div>
              </div>

              {/* Formulaire */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-100 shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vous préférez nous écrire ?
                </h3>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  Dites-nous où vous en êtes aujourd’hui et ce que vous souhaitez sécuriser ou améliorer en priorité.  
                  On vous répond rapidement.
                </p>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <ContactFormClient />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>     {/* --- SECTION TEMOIGNAGES --- */}
<section className="relative py-24 bg-white overflow-hidden">
  {/* Fond photo doux */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      alt="collaboration professionnelle"
      className="w-full h-full object-cover opacity-15"
    />
    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
  </div>

  <div className="relative z-10">
    {/* --- Carousel sans doublon de titre --- */}
    <div className="max-w-6xl mx-auto px-4">
      <TestimonialsCarousel />
    </div>

 
  </div>
</section>



      <Footer />
    </>
  );
}
