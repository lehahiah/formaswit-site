'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Gift, Coffee, BookOpen, Sticker, Image, Package } from 'lucide-react';

const goodiesCategories = [
  {
    title: 'Mugs personnalisés',
    icon: Coffee,
    description: 'Mugs avec votre logo et messages motivants pour vos équipes',
    items: ['Mug "Formateur Expert"', 'Mug "Qualité & Excellence"', 'Mug personnalisé avec logo'],
    price: 'À partir de 12€',
  },
  {
    title: 'Carnets et supports',
    icon: BookOpen,
    description: 'Carnets, blocs-notes et supports pédagogiques personnalisés',
    items: ['Carnet de formation', 'Bloc-notes Qualiopi', 'Agenda formateur'],
    price: 'À partir de 8€',
  },
  {
    title: 'Stickers pédagogiques',
    icon: Sticker,
    description: 'Stickers ludiques et éducatifs pour dynamiser vos formations',
    items: ['Pack stickers motivation', 'Stickers Qualiopi', 'Stickers personnalisés'],
    price: 'À partir de 15€',
  },
  {
    title: 'Affiches et posters',
    icon: Image,
    description: 'Affiches mémo et posters éducatifs pour vos espaces de formation',
    items: ['Poster processus Qualiopi', 'Affiche bonnes pratiques', 'Mémo RGPD'],
    price: 'À partir de 25€',
  },
  {
    title: 'Packs cadeaux formateurs',
    icon: Package,
    description: 'Coffrets cadeaux complets pour récompenser vos formateurs',
    items: ['Pack Starter Formateur', 'Pack Expert Qualité', 'Pack Personnalisé'],
    price: 'À partir de 45€',
  },
  {
    title: 'Objets promotionnels',
    icon: Gift,
    description: 'Objets publicitaires pour promouvoir votre organisme de formation',
    items: ['Clés USB personnalisées', 'Stylos gravés', 'Badges et pins'],
    price: 'À partir de 5€',
  },
];

export default function GoodiesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Goodies & Objets personnalisés
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Objets personnalisés, supports visuels et packs cadeaux pour valoriser votre organisme de formation
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Nos catégories de produits
              </h2>
              <p className="text-xl text-gray-600">
                Des objets personnalisés pour tous vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goodiesCategories.map((category, index) => {
                const IconComponent = category.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 group"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Items */}
                    <ul className="space-y-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-secondary">
                        {category.price}
                      </span>
                      <button 
                        onClick={() => alert(`Produit "${category.title}" ajouté au panier ! (Fonctionnalité e-commerce à implémenter)`)}
                        className="text-xs bg-secondary hover:bg-secondary/90 text-white px-3 py-1 rounded transition-colors duration-300"
                      >
                        Voir les modèles
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Produits populaires
              </h2>
              <p className="text-xl text-gray-600">
                Nos goodies les plus demandés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Mug "Formateur Expert"',
                  price: '15€',
                  description: 'Mug céramique 350ml avec message motivant',
                  image: '/images/goodies/mug-formateur.jpg',
                },
                {
                  name: 'Pack Starter Formateur',
                  price: '49€',
                  description: 'Carnet + stylo + stickers + mug dans un coffret',
                  image: '/images/goodies/pack-starter.jpg',
                },
                {
                  name: 'Poster Processus Qualiopi',
                  price: '29€',
                  description: 'Affiche A2 plastifiée avec processus détaillé',
                  image: '/images/goodies/poster-qualiopi.jpg',
                },
                {
                  name: 'Carnet de Formation',
                  price: '12€',
                  description: 'Carnet A5 avec pages structurées pour formations',
                  image: '/images/goodies/carnet-formation.jpg',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-secondary/20"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <Gift className="w-8 h-8 text-secondary/50" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-secondary">
                      {product.price}
                    </span>
                    <button className="text-xs bg-secondary hover:bg-secondary/90 text-white px-3 py-1 rounded transition-colors duration-300">
                      Commander
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Order Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <Gift className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Commande personnalisée
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Vous avez un projet spécifique ? Nous créons vos objets personnalisés selon vos besoins et votre charte graphique.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-secondary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-sm text-gray-600">Échangeons sur vos besoins et votre budget</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Création</h3>
                  <p className="text-sm text-gray-600">Nous concevons vos objets personnalisés</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-secondary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Livraison</h3>
                  <p className="text-sm text-gray-600">Réception de vos goodies personnalisés</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Demander un devis
                </a>
                <a href="tel:+33123456789" className="btn-secondary">
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}