import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// 1. Base locale des articles du blog
const POSTS: Record<
  string,
  {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    date?: string;
  }
> = {
  'plf-2026-formation-professionnelle-organismes': {
    id: 6,
    title:
      "PLF 2026 – Formation professionnelle : ce qu'il faut retenir pour les organismes de formation",
    slug: 'plf-2026-formation-professionnelle-organismes',
    excerpt:
      "Analyse rapide des impacts du projet de loi de finances 2026 sur les OF : financement, obligations, contrôles.",
    date: '2024-10-15',
    content: `
<p>
Le projet de loi de finances (PLF) 2026 comporte plusieurs mesures qui vont impacter
directement le financement et le pilotage de la formation professionnelle. Voici
les points majeurs pour les organismes de formation.
</p>

<h2>1. Renforcement du contrôle des financements</h2>
<p>
[...] Ici ton contenu HTML / texte long de l’article. Tu peux mettre du vrai
contenu quand tu veux.
</p>

<h2>2. Impacts possibles sur les OF</h2>
<ul>
<li>Durcissement des exigences administratives</li>
<li>Attentes renforcées côté traçabilité pédagogique</li>
<li>...</li>
</ul>

<p>
Besoin d'un décryptage adapté à ton organisme ? Contacte-moi.
</p>
    `,
  },

  // --- NOUVEL ARTICLE ---
  'sous-traitance-cpf-declaration-2025': {
    id: 8,
    title: 'Sous-traitance CPF : êtes-vous à jour avant le 30 novembre ?',
    slug: 'sous-traitance-cpf-declaration-2025',
    excerpt:
      'Rappel utile avant la date limite : ce qu\'il faut déclarer sur EDOF, les cas qui relèvent vraiment de la sous-traitance CPF, et ceux qui n\'en font pas partie.',
    date: '2024-11-02',
    content: `
<p>
La campagne de déclaration des sous-traitants <strong>CPF 2025</strong> se clôture le <strong>30 novembre 2025</strong>.  
Tous les organismes référencés sur <strong>Mon Compte Formation</strong> doivent avoir déclaré sur <strong>EDOF</strong> leur recours à la sous-traitance pour la période du 1<sup>er</sup> avril au 31 décembre 2024.
</p>

<h2>Ce que le décret a changé</h2>
<p>
Depuis le <strong>décret n° 2023-1350 du 28 décembre 2023</strong> et l’<strong>arrêté du 3 janvier 2024</strong>, la sous-traitance CPF est strictement encadrée :  
contrat écrit obligatoire (<em>art. R.6333-6-2 du Code du travail</em>), vérification du <strong>NDA</strong> et de la certification <strong>Qualiopi</strong> du sous-traitant,  
plafonnement à <strong>80 % du chiffre d’affaires CPF</strong> et <strong>interdiction de la sous-traitance en cascade</strong>.
</p>

<h2>Sous-traitance ou pas ?</h2>
<p>
Certains cas restent flous : formateur indépendant, expert ponctuel, co-animation, témoignage, achat de contenu e-learning…  
Le carrousel <em>« Sous-traitance ou pas ? »</em> aide à distinguer les interventions à déclarer de celles qui relèvent de simples prestations externes.  
</p>

<h2>À retenir</h2>
<ul>
  <li><strong>Former, évaluer ou accompagner</strong> = sous-traitance CPF</li>
  <li><strong>Héberger, équiper, témoigner</strong> = prestation externe</li>
  <li>Déclaration à effectuer sur <strong>EDOF</strong> avant le 30 novembre 2025</li>
</ul>
<h2>Consultez le carrousel complet</h2>

<a
  href="/pdfs/CPF.pdf"
  target="_blank"
  rel="noopener noreferrer"
  class="block text-center my-8"
>
  <img
    src="/images/IMG-blog-cpf.png"
    alt="Aperçu du carrousel Sous-traitance CPF – FormaSwift"
    class="rounded-xl shadow-md border border-gray-200 mx-auto hover:opacity-90 transition-opacity duration-300 max-w-full w-[700px]"
  />
  <span class="block mt-3 text-[#1FA09D] font-semibold hover:underline">
    ➜ Ouvrir le carrousel complet (PDF)
  </span>
</a>

<h2>Ressources officielles</h2>
<ul>
  <li>
    Tutoriel PDF Caisse des Dépôts :  
    <a href="https://of.moncompteformation.gouv.fr/espace-public/sites/of/files/2025-07/d%C3%A9claration%20de%20sous-traitance_V5.pdf" target="_blank" rel="noopener noreferrer">
      Comment effectuer ma déclaration sur EDOF
    </a>
  </li>

</ul>

<p>
Sources : Décret n° 2023-1350 du 28/12/2023 – Arrêté du 03/01/2024 – Code du travail – Caisse des Dépôts – DREETS – Qualiopi V9 – Référentiel D²OF.
</p>
    `,
  },
};

// 2. Type des params reçus par la page dynamique
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// 3. Métadonnées SEO dynamiques
export function generateMetadata({ params }: BlogPostPageProps) {
  const post = POSTS[params.slug];

  if (!post) {
    return {
      title: 'Article introuvable | Blog FormaSwift',
      description:
        "Cet article n'existe pas ou n'est plus disponible. Découvrez les derniers conseils FormaSwift pour les organismes de formation.",
    };
  }

  return {
    title: `${post.title} | Blog FormaSwift`,
    description:
      post.excerpt ||
      'Actualités, veille et conseils pratiques sur la qualité, la conformité et la formation professionnelle.',
    keywords: [
      'sous-traitance CPF',
      'EDOF',
      'déclaration sous-traitance',
      'Qualiopi',
      'organisme de formation',
      'DREETS',
      'Caisse des Dépôts',
      'FormaSwift',
      'réglementation formation professionnelle',
    ],
    openGraph: {
      title: post.title,
      description:
        post.excerpt ||
        'Actualités, veille et conseils pratiques sur la qualité, la conformité et la formation professionnelle.',
      type: 'article',
      url: `https://www.formaswift.com/blog/${post.slug}`,
      siteName: 'FormaSwift',
      locale: 'fr_FR',
      images: [
        {
          url: 'https://www.formaswift.com/og-image-blog.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@formaswift',
    },
  };
}

// 4. Page dynamique du blog
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = POSTS[params.slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="container py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Article introuvable
            </h1>
            <p className="text-gray-600 mb-8">
              Il est possible que l’article ait été retiré ou que l’URL ait changé.
            </p>
            <a
              href="/blog"
              className="inline-block bg-[#1FA09D] text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-[#178B89] transition-colors"
            >
              ← Voir tous les articles
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        {/* HERO ARTICLE */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-white">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-500 mb-2">
              {post.date ? (
                <span className="font-medium">
                  Publié le{' '}
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              ) : (
                'Actualité formation'
              )}
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* CONTENU */}
        <section className="py-12">
          <div className="container max-w-3xl mx-auto px-6 prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-[#1FA09D]">
            <article
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* CTA bas d'article */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
          <div className="container max-w-3xl mx-auto px-6 text-center rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d’un décryptage adapté à votre organisme ?
            </h2>
            <p className="text-gray-700 mb-6">
              Je peux vous expliquer concrètement ce que ça change pour vous
              (Qualiopi, financements, obligations, risques…)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.app.google/dwfC7F7LMHqXcSsT7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#178B89] hover:scale-105 hover:shadow-lg hover:shadow-[#1FA09D]/30 transition-all duration-300"
              >
                📅 Réserver un appel découverte
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/30 font-semibold px-6 py-3 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
              >
                ✉️ Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// 5. Pour le build statique Netlify : déclarer les slugs existants
export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug,
  }));
}
