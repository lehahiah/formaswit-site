'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, Clock, Users, MapPin, Euro, GraduationCap, Filter, Search, Calendar } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const categories = [
  'Tous',
  'Assistant(e) de formation',
  'Référent handicap',
  'Référent qualité',
  'CCN des organismes de formation',
  'Logiciel FormDev',
  'Autre',
];

export default function CataloguePage() {
  const [formations, setFormations] = useState<any[]>([]);
  const [filterCategory, setFilterCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
          .from('formations')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching formations:', error);
        } else {
          setFormations(data || []);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  const filteredFormations = formations.filter((formation) => {
    const matchesCategory = filterCategory === 'Tous' || formation.category === filterCategory;
    const matchesSearch =
      searchTerm === '' ||
      formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (formation.description && formation.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <BookOpen className="w-16 h-16 text-accent" />
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                Catalogue de formations
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Découvrez nos formations dédiées aux organismes de formation
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Rechercher une formation..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filtrer par catégorie:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        filterCategory === category
                          ? 'bg-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Formations List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-accent border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Chargement des formations...</p>
              </div>
            ) : filteredFormations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFormations.map((formation) => (
                  <div
                    key={formation.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20"
                  >
                    <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700">
                          {formation.category}
                        </span>
                        {!formation.available && (
                          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                            À venir
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                        {formation.title}
                      </h3>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {formation.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {formation.duration_hours && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-accent" />
                            <span>{formation.duration_hours}h</span>
                          </div>
                        )}
                        {formation.format && (
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-accent" />
                            <span>{formation.format}</span>
                          </div>
                        )}
                        {formation.max_participants && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-accent" />
                            <span>Max {formation.max_participants} participants</span>
                          </div>
                        )}
                      </div>

                      {formation.price_ttc && (
                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-accent">
                              {formation.price_ttc}€
                            </div>
                            <div className="text-xs text-gray-500">TTC</div>
                          </div>
                          <a
                            href="/contact"
                            className="btn-primary text-sm"
                          >
                            Demander un devis
                          </a>
                        </div>
                      )}

                      {!formation.available && (
                        <div className="border-t border-gray-100 pt-4">
                          <button
                            disabled
                            className="w-full bg-gray-100 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                          >
                            Bientôt disponible
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl">
                <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                  Catalogue en cours de construction
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Nous préparons actuellement notre catalogue de formations détaillées. Revenez bientôt pour découvrir l'ensemble de notre offre !
                </p>
                <p className="text-gray-600 mb-6">
                  En attendant, découvrez nos thématiques de formation :
                </p>
                <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto mb-8">
                  <span className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                    Assistant(e) de formation
                  </span>
                  <span className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                    Référent handicap
                  </span>
                  <span className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                    Référent qualité
                  </span>
                  <span className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                    CCN des organismes de formation
                  </span>
                  <span className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                    Logiciel FormDev
                  </span>
                </div>
                <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Contactez-nous pour vos besoins</span>
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-accent/10 to-secondary/10">
          <div className="container">
            <div className="bg-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-xl">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
                Formation sur mesure
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Vous ne trouvez pas la formation qu'il vous faut ? Nous concevons des parcours sur-mesure adaptés à vos besoins spécifiques.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Demander une formation sur mesure
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
