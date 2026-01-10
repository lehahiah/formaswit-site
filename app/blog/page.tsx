import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog Organisme Formation | Conseils Qualiopi, RH, Référent Qualité & Handicap',
  description: 'Blog expert organisme de formation : conseils Qualiopi, référent qualité, référent handicap, sous-traitance, fiches de poste, veille réglementaire. Actualités et bonnes pratiques OF par Julie Bourdais - FormaSwift.',
  keywords: [
    'blog organisme formation',
    'conseils Qualiopi',
    'référent qualité',
    'référent handicap',
    'sous-traitance formation',
    'fiche de poste OF',
    'IDCC 1516',
    'veille réglementaire formation',
    'bonnes pratiques OF',
    'actualités formation professionnelle',
    'FormaSwift blog'
  ],
  openGraph: {
    title: 'Blog Organisme Formation | Conseils Qualiopi, RH & Qualité',
    description: 'Blog expert organisme de formation : conseils Qualiopi, référent qualité, référent handicap, sous-traitance et bonnes pratiques OF.',
  },
};

// Articles de blog
const blogPosts = [
  {
    id: 12,
    title: 'Sous-traitance CPF : êtes-vous à jour avant le 30 novembre ?',
    excerpt: 'La campagne de déclaration 2025 se clôture le 30 novembre. Ce qu\'il faut déclarer sur EDOF, les cas à inclure ou non, et les points clés à vérifier.',
    category: 'Veille',
    author: 'Julie',
    date: '2024-11-02',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    readTime: '4 min',
    slug: 'sous-traitance-cpf-declaration-2025',
  },
  {
    id: 6,
    title: "PLF 2026 – Formation professionnelle : ce qu'il faut retenir pour les organismes de formation",
    excerpt: "Budgets globalement stables, mais resserrement des critères d'éligibilité et contrôle renforcé. Synthèse complète des mesures impactant les OF.",
    category: 'Veille',
    author: 'Julie',
    date: '2024-10-27',
    image: 'https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    readTime: '5 min',
    slug: 'plf-2026-formation-professionnelle-organismes',
  },
];

const categories = ['Tous', 'Qualiopi', 'RH', 'Pédagogie', 'Veille', 'Qualité'];

const categoryColors = {
  'Qualiopi': 'bg-blue-100 text-blue-700',
  'RH': 'bg-green-100 text-green-700',
  'Pédagogie': 'bg-purple-100 text-purple-700',
  'Veille': 'bg-orange-100 text-orange-700',
  'Qualité': 'bg-pink-100 text-pink-700',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Blog FormaSwift
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Actualités, conseils et bonnes pratiques pour les organismes de formation
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20 group"
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    {/* Category */}
                    <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-semibold text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors duration-300 group/link"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* LinkedIn CTA */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto border-2 border-accent/20">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Suivez-moi sur LinkedIn
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Je privilégie désormais la communication sur LinkedIn pour partager mes conseils, actualités et retours d'expérience en temps réel.
              </p>
              <a
                href="https://fr.linkedin.com/in/julie-bourdais-9a285055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Suivre sur LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}