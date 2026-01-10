'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Users } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    window.open('https://wa.me/33766025451', '_blank');
  };

  const handleCommunityClick = () => {
    window.open('https://chat.whatsapp.com/CZXdUrKRffJ5Kr2AW8sWWY', '_blank');
  };

  return (
    <>
      {/* Widget flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu déroulant */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 animate-slide-up">
            {/* Logo et titre */}
            <div className="text-center mb-4">
              <img
                src="/logo-formaswift-ombre.png"
                alt="FormaSwift Logo"
                className="h-12 w-auto mx-auto mb-2"
              />
              <h3 className="font-semibold text-gray-900">FormaSwift</h3>
              <p className="text-xs text-gray-600">Spécialiste des organismes de formation</p>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={handleContactClick}
                className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="font-medium text-gray-900 text-sm">Contacter Julie</div>
                  <div className="text-xs text-gray-600">Discussion privée</div>
                </div>
              </button>

              <button
                onClick={handleCommunityClick}
                className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
              >
                <Users className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium text-gray-900 text-sm">Communauté OF</div>
                  <div className="text-xs text-gray-600">Rejoindre le groupe</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Bouton principal */}
        <button
          onClick={toggleWidget}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2"
          aria-label={isOpen ? 'Fermer le menu WhatsApp' : 'Ouvrir le menu WhatsApp'}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
}