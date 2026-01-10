'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    honeypot: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez saisir un email valide';
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^[\d\s\-\+\(\)\.]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Veuillez saisir un numéro de téléphone valide';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'La description de vos besoins est obligatoire';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Veuillez détailler davantage vos besoins (minimum 10 caractères)';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter le traitement de vos données personnelles pour continuer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (anti-spam)
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
        honeypot: '',
      });
    } catch (error) {
      setErrors({
        general: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-semibold text-green-900 text-lg mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-green-700">
          Merci pour votre demande. Nous vous recontacterons sous 48h avec un premier diagnostic.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* General Error */}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {errors.general}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nom et prénom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors duration-300 ${
            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Jean Dupont"
          disabled={isSubmitting}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email professionnel *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors duration-300 ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="jean.dupont@monof.fr"
          disabled={isSubmitting}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone (optionnel)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors duration-300 ${
            errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="01 23 45 67 89"
          disabled={isSubmitting}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Décrivez vos besoins *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors duration-300 resize-vertical ${
            errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Décrivez votre organisme de formation et vos besoins (ex. : OF de 15 formateurs préparant un audit Qualiopi et souhaitant digitaliser ses processus)..."
          disabled={isSubmitting}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className={`mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-2 focus:ring-secondary/50 ${
              errors.consent ? 'border-red-300' : ''
            }`}
            disabled={isSubmitting}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm text-gray-600">
            <strong>Consentement RGPD *</strong><br />
            J'accepte que FormaSwift collecte et traite mes données personnelles pour répondre à ma demande de contact. 
            Ces données ne seront pas transmises à des tiers et seront conservées 3 ans maximum. 
            Conformément au RGPD, vous disposez d'un droit d\'accès, de rectification et de suppression de vos données.<br />
            <a href="/mentions-legales" className="text-secondary hover:text-secondary/80 underline">
              Consulter nos mentions légales
            </a>
            {' '}•{' '}
            <a href="/privacy" className="text-secondary hover:text-secondary/80 underline">
              Politique de confidentialité
            </a>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi de votre demande...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Envoyer ma demande</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        * Champs obligatoires • Diagnostic gratuit sous 48h en semaine
      </p>
    </form>
  );
}