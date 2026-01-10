import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mentions Légales | FormaSwift',
  description: 'Mentions légales de FormaSwift - Informations légales, conditions d\'utilisation et données de l\'entreprise.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-20 lg:pt-24 section-padding bg-white">
          <div className="container max-w-4xl">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
              Mentions légales
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2>Informations légales</h2>
              <p>
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                pour la Confiance dans l'économie numérique, dite L.C.E.N., et aux articles L.123-1 et suivants 
                du Code de commerce, il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.
              </p>

              <h3>Éditeur du site</h3>
              <p>
                <strong>{SITE_CONFIG.contact.company}</strong><br />
                Entrepreneur individuel, micro-entreprise<br />
                Adresse : {SITE_CONFIG.contact.address}<br />
                SIREN : {SITE_CONFIG.contact.siren}<br />
                SIRET : {SITE_CONFIG.contact.siret}<br />
                TVA : {SITE_CONFIG.contact.tva}<br />
                TVA non applicable art. 293B CGI
              </p>

              <h3>Directeur de la publication</h3>
              <p>
                Julie BOURDAIS, en qualité de dirigeante.
              </p>

              <h3>Contact</h3>
              <p>
                Email : {SITE_CONFIG.contact.email}
              </p>

              <h3>Hébergement</h3>
              <p>
                Ce site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <h2>Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>

              <h2>Liens hypertextes</h2>
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de FormaSwift.
              </p>

              <h2>Cookies</h2>
              <p>
                Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques 
                et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site 
                que vous visitez.
              </p>

              <h2>Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
                d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. 
                Pour exercer ces droits, contactez-nous à l'adresse : {SITE_CONFIG.contact.email}
              </p>

              <h2>Droit applicable</h2>
              <p>
                Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit 
                français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec 
                de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents 
                pour connaître de ce litige.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}