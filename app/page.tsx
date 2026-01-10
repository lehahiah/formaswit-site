import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FocusBlocks from '@/components/sections/FocusBlocks';
import AboutJulie from '@/components/sections/AboutJulie';
import Approach from '@/components/sections/Approach';
import ValuesSection from '@/components/sections/ValuesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TrustedBy from '@/components/sections/TrustedBy';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import FreeResources from '@/components/sections/FreeResources';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FormaSwift - Spécialiste des Organismes de Formation',
  description: 'FormaSwift : Spécialiste passionnée des organismes de formation avec 15 ans d\'expérience. Accompagnement personnalisé, optimisation des processus et développement de la qualité.',
  keywords: [
    'spécialiste organisme formation',
    'consultant formation professionnelle',
    'accompagnement organisme formation',
    'optimisation processus formation',
    'qualité organisme formation',
    'Qualiopi',
    'Julie Bourdais',
    'FormaSwift',
    'OPCO',
    'gestion administrative formation',
    'développement OF'
  ],
  openGraph: {
    title: 'FormaSwift - Spécialiste des Organismes de Formation',
    description: 'Spécialiste passionnée des organismes de formation avec 15 ans d\'expérience. Accompagnement personnalisé et solutions concrètes.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
 <main id="main-content">
  <Hero />
  <FocusBlocks />
  <AboutJulie />
   <Approach />
  <ValuesSection />   {/* 👈 Nouvelle section Mes valeurs */}
  <WhyChooseUs />
  <PortfolioSection />
  <TrustedBy />
  <TestimonialsCarousel />
  <FreeResources />

      </main>
      <Footer />
    </>
  );
}