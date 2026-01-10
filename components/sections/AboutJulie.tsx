import Link from 'next/link';

export default function AboutJulie() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Halo de fond doux */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
              Qui suis-je ?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Photo animée */}
            <div className="text-center lg:text-left">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/Juliepaysage.jpg"
                    alt="Julie Bourdais - Fondatrice de FormaSwift"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-2">
                Julie Bourdais
              </h3>
              <p className="text-accent font-medium mb-1">
                Fondatrice de FormaSwift
              </p>
              <p className="text-gray-600 text-sm">
                Experte des organismes de formation
              </p>
            </div>

            {/* Texte de présentation */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-accent/10 font-serif">"</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10">
                    Je suis <strong>Julie Bourdais</strong>. Depuis plus de 15 ans, j’accompagne et je pilote
                    des projets dans les organismes de formation : direction d’OF, création de CFA,
                    gestion administrative et financière, qualité (Qualiopi), RH et digitalisation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Avec <strong>FormaSwift</strong>, j’ai choisi de transformer cette expérience en une
                    offre tournée vers l’efficacité et la simplicité. Nous travaillons aussi avec des
                    partenaires spécialisés (administratif, pédagogie, digital learning, qualité) pour
                    proposer des solutions concrètes, prêtes à l’emploi, et des accompagnements sur mesure
                    adaptés aux besoins des OF.
                  </p>
                </div>

                {/* Bouton LinkedIn */}
                <div className="text-center">
                  <Link
                    href="https://www.linkedin.com/in/julie-bourdais-9a285055/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#1FA09D] hover:bg-[#178b89] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Me retrouver sur LinkedIn</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
