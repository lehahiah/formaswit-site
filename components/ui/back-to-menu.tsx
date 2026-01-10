'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function BackToMenu() {
  const pathname = usePathname();
  
  // Ne pas afficher sur la page d'accueil
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-24 left-4 z-40">
      <Link
        href="/"
        className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-primary font-medium px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border border-gray-200"
        aria-label="Retour au menu principal"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <Home className="w-5 h-5" />
        <span className="hidden sm:inline">Menu</span>
      </Link>
    </div>
  );
}