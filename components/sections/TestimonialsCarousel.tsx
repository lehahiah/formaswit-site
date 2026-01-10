'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import testimonials from '@/data/testimonials.json';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les retours d’expérience de nos partenaires et clients
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/10" />

            <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg lg:text-xl italic">
              “{currentTestimonial.quote}”
            </blockquote>

            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  {currentTestimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-600 text-sm">{currentTestimonial.role}</div>
                  {currentTestimonial.company && (
                    <div className="text-secondary font-medium text-sm">
                      {currentTestimonial.company}
                    </div>
                  )}
                  {false && (
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-accent hover:text-accent/80 mt-1"
                    >
                      Voir sur LinkedIn
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-colors duration-300"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-colors duration-300"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-secondary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/temoignages"
            className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors duration-300"
          >
            Voir tous les témoignages
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
