'use client';

import { useState } from 'react';
import { X, Download, Loader2 } from 'lucide-react';

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideName: string;
  pdfPath: string;
}

export default function GuideDownloadModal({
  isOpen,
  onClose,
  guideName,
  pdfPath,
}: GuideDownloadModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/guide-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          guideName,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement');
      }

      setSuccess(true);

      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfPath.split('/').pop() || 'guide.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          onClose();
          setEmail('');
          setSuccess(false);
        }, 1000);
      }, 500);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
            <Download className="w-6 h-6 text-accent" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">
            Télécharger le guide
          </h2>
          <p className="text-gray-600 text-sm">
            Entrez votre email pour recevoir et télécharger <strong>{guideName}</strong>
          </p>
        </div>

        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800 text-sm font-medium">
              Merci ! Votre téléchargement va commencer...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Télécharger le guide</span>
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Vos données sont protégées et ne seront jamais partagées.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
