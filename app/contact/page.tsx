import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroPage from '@/components/shared/HeroPage';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | FormaSwift',
  description: 'Contactez Julie pour vos besoins d\'accompagnement, guides et formations pour organismes de formation. Réponse rapide garantie.',
  openGraph: {
    title: 'Contact | FormaSwift',
    description: 'Contactez Julie pour vos besoins d\'accompagnement, guides et formations pour organismes de formation.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroPage
          title="Contactez-"
          highlightedWord="nous"
          subtitle="Un projet ? Des questions ? Échangeons sur vos besoins !"
          bgImage="/images/main carte copy.png"
          showCTA={false}
        />

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-8">
                  Décrivez-nous votre situation et vos objectifs. Nous vous recontacterons sous 48h avec un premier diagnostic gratuit.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                  Nos coordonnées
                </h2>
                <p className="text-gray-600 mb-8">
                  N'hésitez pas à nous contacter directement pour toute question ou demande d'information.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-accent hover:text-accent/80 transition-colors duration-300"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <span className="text-accent">
                        {SITE_CONFIG.contact.phone}
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        {SITE_CONFIG.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Disponibilité</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Lundi - Vendredi : 9h00 - 18h00</p>
                        <p>Réponse sous 48h en semaine</p>
                        <p className="text-sm text-gray-500 mt-2">Pour une réponse plus rapide, privilégiez WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href={SITE_CONFIG.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={SITE_CONFIG.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={SITE_CONFIG.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={SITE_CONFIG.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-gray-900 mb-2">Temps de réponse</h3>
                  <p className="text-gray-600 text-sm">
                    Nous nous engageons à vous répondre sous 48h en semaine.
                    Pour les demandes urgentes, privilégiez WhatsApp plutôt que le message répondeur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}