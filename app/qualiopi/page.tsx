import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CalendarButton from '@/components/CalendarButton';

export const metadata: Metadata = {
  title: 'Accompagnement Qualité & Certification Qualiopi | FormaSwift',
  description:
    'FormaSwift accompagne les organismes de formation dans une démarche qualité globale : certification Qualiopi, conformité D²OF, amélioration continue et structuration documentaire. Une approche humaine et pragmatique, centrée sur vos pratiques.',
  openGraph: {
    title: 'Accompagnement Qualité & Certification Qualiopi | FormaSwift',
    description:
      'Audit, accompagnement et structuration Qualiopi pour les organismes de formation. FormaSwift agit au-delà du référentiel pour une qualité vivante et durable.',
    images: ['/images/photopagequaliopi2.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function QualiopiPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* SECTION HERO */}
        <section className="relative flex items-center justify-center h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/photopagequaliopi2.jpg"
              alt="Réunion autour de la démarche qualité et de la certification Qualiopi"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-md px-10 py-12 text-center max-w-3xl">
            <h1 className="font-heading font-bold text-5xl text-primary mb-4">
              Structurer & faire vivre votre démarche qualité
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Bien plus qu’une conformité : une qualité ancrée dans vos pratiques,
              vos valeurs et votre quotidien d’organisme de formation.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-20 bg-white">
          <div className="container max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Pourquoi choisir FormaSwift pour structurer et faire vivre votre démarche qualité ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chez FormaSwift, la qualité ne se limite pas à la certification Qualiopi. 
              Elle englobe tout ce qui fait la fiabilité, la clarté et la cohérence de votre organisation.
              Nous travaillons à la source — sur vos pratiques, vos outils et votre fonctionnement — 
              pour que la conformité devienne une conséquence naturelle, que ce soit pour Qualiopi,
              D²OF ou les contrôles financeurs.  
              Notre approche s’inspire à la fois du Référentiel National Qualité et des 
              modèles d’amélioration continue (PDCA, ISO, Lean Management), afin que votre système 
              qualité reste vivant, utile et adapté à votre réalité.
            </p>
          </div>
        </section>

        {/* MISSIONS */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Ce que nous pouvons faire ensemble
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>🧭 Accompagnement complet à la certification Qualiopi.</li>
                <li>📋 Audit blanc ou préparation à l’audit de surveillance.</li>
                <li>💬 Animation de revues qualité, suivi des indicateurs et plans d’amélioration continue.</li>
                <li>🧩 Refonte ou création de votre système documentaire et de vos processus internes.</li>
                <li>📂 Structuration de l’archivage numérique et des preuves Qualiopi / D²OF.</li>
                <li>📈 Mise en place d’un pilotage qualité clair, vivant et collaboratif.</li>
              </ul>
              <p className="text-gray-700 mt-6 leading-relaxed">
                Notre accompagnement ne se limite pas au référentiel Qualiopi : 
                il intègre les exigences des financeurs publics (D²OF, OPCO, France Travail)
                et s’appuie sur des pratiques reconnues de l’amélioration continue.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Référente qualité externalisée
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Vous manquez de temps ou de ressources pour piloter la qualité ?
                FormaSwift peut devenir votre référente qualité externalisée, pour un suivi
                continu et adapté à votre structure. Vous restez concentré sur votre cœur
                de métier, nous veillons sur la conformité, l’amélioration continue et la cohérence globale.
              </p>
            </div>
          </div>
        </section>

        {/* OUTILS */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Construire vos outils, pas en acheter de nouveaux
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Notre accompagnement intègre une réflexion sur vos outils existants : 
              comment mieux les utiliser, les automatiser ou les simplifier. 
              Si besoin, nous développons ensemble des outils légers en no-code
              pour vous aider à piloter votre qualité au quotidien — sans logiciel supplémentaire inutile.
            </p>
          </div>
        </section>

        {/* KITS */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Des modèles oui, mais jamais tout faits
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous proposons des packs de procédures et de trames pour vous aider à démarrer —
              mais une vraie démarche qualité ne se copie pas.  
              Ensemble, nous construisons votre propre mallette qualité :
              adaptée à votre fonctionnement, vos équipes et vos valeurs.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-white text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Parlons de votre démarche qualité — bien au-delà de Qualiopi
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              La qualité ne s’arrête pas à une certification.  
              Ensemble, nous construirons un système clair, efficient et évolutif,
              capable de répondre aux exigences Qualiopi, D²OF ou des financeurs,
              tout en simplifiant votre quotidien.  
              Une qualité qui vous ressemble, au service de votre structure et de vos apprenants.
            </p>

            <CalendarButton />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
