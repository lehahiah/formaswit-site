'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Lock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-[1400px] transition-all duration-500 ease-out">
        <div
          className={cn(
            'relative rounded-[32px] backdrop-blur-lg border border-white/20 overflow-hidden shadow-lg transition-all duration-500 ease-out',
            isScrolled
              ? 'bg-white/25 backdrop-blur-xl shadow-2xl border-white/30'
              : 'bg-white/15 hover:bg-white/25'
          )}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#1FA09D] to-transparent opacity-70" />

          <div className="relative flex items-center justify-between px-4 sm:px-8 py-3.5 gap-3">
            {/* --- LOGO --- */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/logo-formaswift-rect copy.png"
                alt="FormaSwift"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* --- MENU DESKTOP --- */}
            <nav className="hidden lg:flex items-center gap-6 font-semibold text-gray-900">
              <Link href="/accompagnement" className="hover:text-[#1FA09D] transition-colors">
                Accompagnement
              </Link>
              <Link href="/formations" className="hover:text-[#1FA09D] transition-colors">
                Formations & Tutorat
              </Link>
              <Link href="/studio" className="hover:text-[#1FA09D] transition-colors">
                Studio & Ressources
              </Link>

              {/* --- ESPACE APPRENANT distinctif --- */}
              <a
                href="https://academy-formaswift.bolt.host"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#1FA09D] border border-[#1FA09D] px-3 py-1.5 rounded-xl hover:bg-[#1FA09D] hover:text-white transition-all shadow-sm"
              >
                <Lock size={16} />
                <span>Espace Apprenant</span>
              </a>

              {/* --- BOUTON CONTACT --- */}
              <Link
                href="/contact"
                className="ml-2 bg-[#1FA09D] text-white px-4 py-2 rounded-xl hover:bg-[#168a87] transition-all shadow-md hover:shadow-lg"
              >
                Nous contacter
              </Link>
            </nav>

            {/* --- MENU MOBILE --- */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#1FA09D] text-white transition hover:bg-[#168a87]"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MENU MOBILE --- */}
      {isMenuOpen && (
        <div className="fixed top-[90px] left-4 right-4 bg-white/95 rounded-2xl shadow-xl p-4 z-[9998] lg:hidden">
          <nav className="flex flex-col gap-3 font-semibold text-gray-800">
            <Link href="/accompagnement" onClick={() => setIsMenuOpen(false)}>
              Accompagnement
            </Link>
            <Link href="/formations" onClick={() => setIsMenuOpen(false)}>
              Formations & Tutorat
            </Link>
            <Link href="/studio" onClick={() => setIsMenuOpen(false)}>
              Studio & Ressources
            </Link>

            {/* --- ESPACE APPRENANT MOBILE --- */}
            <a
              href="https://academy-formaswift.bolt.host"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#1FA09D] border border-[#1FA09D] py-2 rounded-xl hover:bg-[#1FA09D] hover:text-white transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Lock size={16} />
              <span>Espace Apprenant</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#1FA09D] text-white text-center py-2 rounded-xl mt-2"
            >
              Nous contacter
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
