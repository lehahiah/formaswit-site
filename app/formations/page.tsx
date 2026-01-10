import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Play, Users, UserCheck, Clock, CheckCircle, ExternalLink, Mail, Video, GraduationCap, Sparkles, Network, HandHeart, Heart, Package, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation Assistant OF & Référent Qualité | E-learning Organisme Formation',
  description:
    'Formations pour organismes de formation : assistant OF, référent qualité, référent handicap. Modules e-learning, ingénierie AFEST, tutorat personnalisé. Webinaires BPJEPS, DEJEPS, IA, gestion administrative. Interventions jury titres professionnels.',
  keywords: [
    'formation assistant organisme formation',
    'formation référent qualité',
    'formation assistant OF',
    'e-learning organisme formation',
    'tutorat assistant formation',
    'AFEST',
    'ingénierie AFEST',
    'formation référent handicap',
    'webinaire organisme formation',
    'formation BPJEPS',
    'formation DEJEPS',
    'UC1 UC2',
    'gestion projet formation',
    'jury titre professionnel',
    'IA organisme formation',
    'digitalisation OF',
    'FormaSwift',
  ],
  openGraph: {
    title: 'Formation Assistant OF & Référent Qualité | E-learning Organisme Formation',
    description:
      'Formations pour organismes de formation : assistant OF, référent qualité, référent handicap. Modules e-learning, AFEST, tutorat, webinaires BPJEPS/DEJEPS.',
  },
};

export default function FormationsPage() {
  const differentiators = [
    "Formations ancrées dans l'expérience terrain",
    'Formats courts et pratiques (pas de théorie inutile)',
    'Accessibles en ligne ou en présentiel',
    'Possibilité d’intégrer vos cas réels et vos outils',
    'Tutorat individualisé pour sécuriser la montée en compétences',
  ];

  return (
    <div>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Formations FormaSwift"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/60"></div>
          </div>

          <div className="container relative z-10 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-accent">Formations</span> pour vos équipes
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Des formats variés pour développer les compétences de vos équipes : modules e-learning,
              interventions sur mesure, tutorat et webinaires pratiques.
            </p>

            <a
              href="https://calendar.app.google/dwfC7F7LMHqXcSsT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 hover:shadow-lg hover:shadow-[#1FA09D]/30 transition-all duration-300"
            >
              📚 Découvrir nos formations
            </a>
          </div>
        </section>

        {/* Formations en partenariat */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Formations en partenariat
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Certaines formations sont co-animées ou co-construites avec des partenaires spécialisés
                pour croiser les expertises et enrichir les approches. Ces collaborations permettent
                d’aborder des thématiques transversales essentielles à la qualité de vie au travail et au
                management responsable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Parmi ces thématiques : la QVCT (Qualité de Vie et Conditions de Travail), la prévention
                des RPS (Risques Psychosociaux), le management collaboratif, la communication bienveillante
                et la posture du manager facilitateur. Ces formations s’adressent aux dirigeants, responsables
                qualité, coordinateurs pédagogiques ou formateurs souhaitant développer leurs compétences humaines
                et managériales.
              </p>
            </div>
          </div>
        </section>

        {/* Formations en ligne */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Play className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Formations en ligne
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Modules e-learning courts avec vidéos, fiches mémo et quiz. Podcasts pratiques pour
                  sensibiliser vos équipes rapidement. Accès en ligne, à votre rythme.
                </p>

                <a href="/catalogue" className="btn-primary inline-flex items-center space-x-2">
                  <span>Voir le catalogue</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Modules courts et pratiques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Vidéos + fiches mémo + quiz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Podcasts pratiques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Accès 24h/24, 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations sur mesure */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">
                      AFEST (Action de Formation En Situation de Travail)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">Présentiel ou distanciel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">Intervention sur vos outils réels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">Formats adaptés à vos contraintes</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Formations sur mesure
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Interventions adaptées à vos besoins réels : AFEST, présentiel, distanciel ou mixte. Nous
                  travaillons directement sur vos outils et vos cas concrets.
                </p>

                <a href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                  <span>Demander un devis</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorat */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                  Tutorat individualisé
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Accompagnement personnalisé pour sécuriser la prise de poste : assistant OF, référent
                  qualité, coordinateur pédagogique. Suivi régulier adapté à votre rythme.
                </p>

                <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Suivi personnalisé sur plusieurs semaines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Accompagnement à la prise de poste</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Retours réguliers et ajustements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Autonomie progressive garantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinaires */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Webinaires thématiques
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sessions courtes et interactives sur des sujets concrets : Qualiopi, BPJEPS/DEJEPS, gestion
                administrative, outils digitaux, IA pour les OF...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent/30 transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">BPJEPS / DEJEPS</h3>
                <p className="text-gray-600 mb-4">
                  UC1, UC2, gestion de projet, ingénierie pédagogique
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>1h30 - 2h</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent/30 transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">IA & Digitalisation</h3>
                <p className="text-gray-600 mb-4">
                  Utiliser l'IA pour gagner du temps, automatiser, innover
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>1h - 1h30</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent/30 transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">
                  Gestion administrative
                </h3>
                <p className="text-gray-600 mb-4">
                  Outils, process, optimisation des tâches quotidiennes
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>1h - 1h30</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="/contact" className="btn-accent inline-flex items-center space-x-2">
                <span>S'inscrire aux webinaires</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Nos différenciateurs */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
                Ce qui fait la différence
              </h2>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent/30 transition-all"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Prêt à former vos équipes ?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Parlons de vos besoins en formation. Nous construirons ensemble un parcours adapté à vos
                objectifs et à vos contraintes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendar.app.google/dwfC7F7LMHqXcSsT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <span>Réserver un appel</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a href="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
                  <span>Nous contacter</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
