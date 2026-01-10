interface HeroPageProps {
  title: string;
  highlightedWord?: string;
  subtitle: string;
  ctaText?: string;
  ctaUrl?: string;
  bgImage: string;
  showCTA?: boolean;
}

export default function HeroPage({
  title,
  highlightedWord,
  subtitle,
  ctaText,
  ctaUrl,
  bgImage,
  showCTA = true,
}: HeroPageProps) {
  return (
    <section className="pt-20 lg:pt-32 pb-16 relative overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        {/* IMAGE DE FOND */}
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* 🔹 OVERLAY SOMBRE POUR LISIBILITÉ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20 mix-blend-multiply"></div>

        {/* 🔹 DÉGRADÉ DE COULEURS EXISTANT */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/60"></div>
      </div>

      <div className="container relative z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          {highlightedWord ? (
            <>
              {title} <span className="text-accent">{highlightedWord}</span>
            </>
          ) : (
            title
          )}
        </h1>

        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>

        {showCTA && ctaText && ctaUrl && (
          <a
            href={ctaUrl}
            target={ctaUrl.startsWith('http') ? '_blank' : undefined}
            rel={ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 hover:shadow-lg hover:shadow-[#1FA09D]/30 transition-all duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
