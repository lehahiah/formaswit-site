'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800 text-gray-300 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        {/* --- Logo encadré --- */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
            <img
              src="/images/logo-formaswift-rect copy.png"
              alt="Logo FormaSwift"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* --- Liens principaux --- */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          <Link href="/accompagnement" className="hover:text-[#1FA09D] transition">
            Accompagnement
          </Link>
          <Link href="/formations" className="hover:text-[#1FA09D] transition">
            Formations & Tutorat
          </Link>
          <Link href="/studio" className="hover:text-[#1FA09D] transition">
            Studio & Ressources
          </Link>
          <Link href="/tarifs" className="hover:text-[#1FA09D] transition">
            Tarifs
          </Link>
          <Link href="/temoignages" className="hover:text-[#1FA09D] transition">
            Témoignages
          </Link>
          <Link href="/blog" className="hover:text-[#1FA09D] transition">
            Blog
          </Link>
          <a
            href="https://academy-formaswift.bolt.host"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1FA09D] transition"
          >
            Espace Apprenant
          </a>
          <Link href="/contact" className="hover:text-[#1FA09D] transition">
            Contact
          </Link>
        </div>

        {/* --- Mentions légales et RGPD --- */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-4">
          <Link href="/mentions-legales" className="hover:text-[#1FA09D] transition">
            Mentions légales
          </Link>
          <span>•</span>
          <Link href="/politique-confidentialite" className="hover:text-[#1FA09D] transition">
            Politique de confidentialité
          </Link>
          <span>•</span>
          <Link href="/conditions-generales" className="hover:text-[#1FA09D] transition">
            CGV / CGU
          </Link>
        </div>

        {/* --- Mention de copyright --- */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} <span className="text-white font-semibold">FormaSwift</span> — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
