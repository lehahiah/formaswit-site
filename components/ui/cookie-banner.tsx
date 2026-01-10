'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('formaswift-cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('formaswift-cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    
    // Ici vous pourriez initialiser Google Analytics, etc.
    console.log('Tous les cookies acceptés');
  };

  const acceptNecessaryOnly = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('formaswift-cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    
    console.log('Cookies nécessaires uniquement');
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('formaswift-cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
    
    console.log('Préférences sauvegardées:', consent);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 z-40" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-4 lg:p-6">
        <div className="container max-w-6xl mx-auto">
          {!showSettings ? (
            // Vue principale
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Respect de votre vie privée
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                    analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                    cookies accepter.{' '}
                    <a 
                      href="/mentions-legales" 
                      className="text-accent hover:text-accent/80 underline"
                    >
                      En savoir plus
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                >
                  Nécessaires uniquement
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          ) : (
            // Vue paramètres
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-accent" />
                  Paramètres des cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Cookies nécessaires */}
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      Cookies nécessaires
                    </h4>
                    <p className="text-xs text-gray-600">
                      Indispensables au fonctionnement du site (navigation, formulaires, sécurité)
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-accent rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>
                
                {/* Cookies analytiques */}
                <div className="flex items-start justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      Cookies analytiques
                    </h4>
                    <p className="text-xs text-gray-600">
                      Nous aident à comprendre comment vous utilisez le site (Google Analytics)
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                        preferences.analytics ? 'bg-accent' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
                
                {/* Cookies marketing */}
                <div className="flex items-start justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      Cookies marketing
                    </h4>
                    <p className="text-xs text-gray-600">
                      Personnalisent les publicités et mesurent l'efficacité des campagnes
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                        preferences.marketing ? 'bg-accent' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                >
                  Annuler
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  Sauvegarder mes préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}