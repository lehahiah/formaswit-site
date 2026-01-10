'use client';
import { Calendar, ArrowRight } from 'lucide-react';

interface CTATarifsProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
}

export default function CTATarifs({
  title = "Tarifs & devis personnalisés",
  description = "Des formules adaptées à votre structure — au forfait, au temps ou en abonnement. Chaque accompagnement fait l’objet d’un devis sur mesure selon votre besoin.",
  ctaText = "Voir les tarifs",
  ctaUrl = "/tarifs",
  secondaryCtaText = "Réserver un appel découverte",
  secondaryCtaUrl = "https://calendar.app.google/dwfC7F7LMHqXcSsT7",
}: CTATarifsProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-secondary/20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
              <Calendar className="w-6 h-6 text-accent" />
              <span className="font-bold text-accent text-lg">PRÊT À DÉMARRER ?</span>
            </div>

            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaUrl}
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href={secondaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-secondary font-semibold px-8 py-4 rounded-full border-2 border-secondary shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>{secondaryCtaText}</span>
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              💡 Appel découverte gratuit et sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
