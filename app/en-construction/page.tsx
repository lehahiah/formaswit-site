import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Construction, ArrowLeft, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page en construction | FormaSwift',
  description: 'Cette page est en cours de construction. Nous travaillons activement pour vous offrir le meilleur contenu.',
};

export default function EnConstructionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Construction className="w-12 h-12 text-accent" />
              </div>

              {/* Title */}
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
                Page en construction
              </h1>

              {/* Message */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                On fait tout pour que les travaux avancent !
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 text-left">
                <p className="text-blue-800 mb-4">
                  <strong>Cette page sera bientôt disponible.</strong> Nous y travaillons activement pour vous offrir le meilleur contenu et les meilleures fonctionnalités.
                </p>
                <p className="text-blue-700 text-sm">
                  En attendant, vous pouvez explorer nos autres pages ou nous contacter directement pour toute question.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/" className="btn-primary">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous contacter
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <h2 className="font-semibold text-gray-900 mb-4">
                  Besoin d'un renseignement ?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
                  <a
                    href="mailto:contact@formaswift.com"
                    className="flex items-center space-x-2 hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>contact@formaswift.com</span>
                  </a>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <a
                    href="https://wa.me/33660653486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>06 60 65 34 86</span>
                  </a>
                </div>
              </div>

              {/* Helpful Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Pages qui pourraient vous intéresser :</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/services" className="text-accent hover:text-accent/80 text-sm underline">
                    Nos services
                  </Link>
                  <Link href="/produits" className="text-accent hover:text-accent/80 text-sm underline">
                    Nos produits
                  </Link>
                  <Link href="/formations" className="text-accent hover:text-accent/80 text-sm underline">
                    Formations
                  </Link>
                  <Link href="/blog" className="text-accent hover:text-accent/80 text-sm underline">
                    Blog
                  </Link>
                  <Link href="/a-propos" className="text-accent hover:text-accent/80 text-sm underline">
                    À propos
                  </Link>
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
