'use client';

import { useState, useEffect } from 'react';
import { Accessibility, Plus, Minus, Eye, EyeOff, Volume2, VolumeX } from 'lucide-react';

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const readPageContent = () => {
    if (!speechSynthesis) return alert('La lecture vocale n’est pas supportée par votre navigateur.');

    if (isReading) {
      speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const textContent = mainContent.innerText;
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.rate = 0.8;
    utterance.volume = 0.8;
    utterance.pitch = 1;

    const voices = speechSynthesis.getVoices();
    const frenchVoice = voices.find((voice) => voice.lang.startsWith('fr'));
    if (frenchVoice) utterance.voice = frenchVoice;

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    speechSynthesis.speak(utterance);
  };

  return (
    <>
      {/* ✅ Bouton d'ouverture toujours visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[10000] bg-[#1FA09D] text-white p-3 rounded-full shadow-lg 
        hover:bg-[#178b88] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1FA09D]/50
        right-4 top-4 sm:top-5 sm:right-5 md:right-6 md:top-6
        md:hover:scale-105
        accessibility-button"
        aria-label="Ouvrir les options d'accessibilité"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* ✅ Barre d'outils */}
      {isOpen && (
        <div
          className="fixed z-[9999] bg-white border border-gray-200 rounded-lg shadow-xl p-4 
          min-w-[280px] right-4 top-20 sm:top-24 md:top-28"
        >
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Accessibility className="w-5 h-5 mr-2" />
            Accessibilité
          </h3>

          <div className="space-y-4">
            {/* Taille du texte */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taille du texte ({fontSize}%)
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-sm text-gray-600">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Contraste élevé */}
            <button
              onClick={toggleHighContrast}
              className={`w-full flex items-center justify-between p-3 rounded-md transition-all ${
                highContrast
                  ? 'bg-[#1FA09D] text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span className="flex items-center">
                {highContrast ? (
                  <EyeOff className="w-4 h-4 mr-2" />
                ) : (
                  <Eye className="w-4 h-4 mr-2" />
                )}
                Contraste élevé
              </span>
              <span className="text-sm">{highContrast ? 'Activé' : 'Désactivé'}</span>
            </button>

            {/* Lecture vocale */}
            <button
              onClick={readPageContent}
              disabled={!speechSynthesis}
              className={`w-full flex items-center justify-between p-3 rounded-md transition-all ${
                !speechSynthesis
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : isReading
                  ? 'bg-red-100 hover:bg-red-200 text-red-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span className="flex items-center">
                {isReading ? (
                  <VolumeX className="w-4 h-4 mr-2" />
                ) : (
                  <Volume2 className="w-4 h-4 mr-2" />
                )}
                {isReading ? 'Arrêter la lecture' : 'Lire la page'}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center text-sm text-gray-500 hover:text-gray-700"
          >
            Fermer
          </button>
        </div>
      )}

      {/* ✅ Correction mobile - évite le conflit avec le widget WhatsApp */}
      <style jsx>{`
        @media (max-width: 640px) {
          .accessibility-button {
            bottom: 90px !important;
            top: auto !important;
          }
        }
      `}</style>
    </>
  );
}
