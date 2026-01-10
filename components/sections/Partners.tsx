'use client';

import { useEffect, useState } from 'react';
import partners from '@/data/partners.json';

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="partners-section" className="py-12 bg-gray-50">
      <div className="container">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading font-semibold text-2xl text-gray-600 mb-8">
            Ils nous font confiance
          </h2>
          
          {/* Partners Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                >
                  <div className="w-32 h-16 lg:w-40 lg:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <span className="text-gray-600 font-medium text-sm lg:text-base">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                >
                  <div className="w-32 h-16 lg:w-40 lg:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <span className="text-gray-600 font-medium text-sm lg:text-base">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}