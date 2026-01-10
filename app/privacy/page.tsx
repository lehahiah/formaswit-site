import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | FormaSwift',
  description: 'Politique de confidentialité de FormaSwift - Comment nous collectons, utilisons et protégeons vos données personnelles.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-20 lg:pt-24 section-padding bg-white">
          <div className="container max-w-4xl">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
              Politique de confidentialité
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Chez FormaSwift, nous nous engageons à protéger et respecter votre vie privée. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.
              </p>

              <h2>1. Informations que nous collectons</h2>
              
              <h3>Données collectées directement</h3>
              <ul>
                <li><strong>Informations de contact :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Informations professionnelles :</strong> entreprise, poste, secteur d'activité</li>
                <li><strong>Messages :</strong> contenu des formulaires de contact et communications</li>
              </ul>

              <h3>Données collectées automatiquement</h3>
              <ul>
                <li><strong>Données techniques :</strong> adresse IP, type de navigateur, système d'exploitation</li>
                <li><strong>Données de navigation :</strong> pages visitées, durée de visite, source de trafic</li>
                <li><strong>Cookies :</strong> préférences utilisateur, données de session (selon votre consentement)</li>
              </ul>

              <h2>2. Comment nous utilisons vos données</h2>
              
              <h3>Finalités du traitement</h3>
              <ul>
                <li>Répondre à vos demandes de contact et d'information</li>
                <li>Vous proposer nos services de formation</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des informations sur nos formations (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>

              <h3>Base légale</h3>
              <p>
                Nous traitons vos données personnelles sur la base de :
              </p>
              <ul>
                <li><strong>Votre consentement</strong> pour l'envoi de communications marketing</li>
                <li><strong>L'exécution d'un contrat</strong> pour la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> pour améliorer nos services</li>
                <li><strong>Le respect d'obligations légales</strong> (comptabilité, fiscalité)</li>
              </ul>

              <h2>3. Partage de vos données</h2>
              <p>
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                sauf dans les cas suivants :
              </p>
              <ul>
                <li><strong>Prestataires de services :</strong> hébergement, email, analytics (sous contrat de confidentialité)</li>
                <li><strong>Obligations légales :</strong> si requis par la loi ou une autorité compétente</li>
                <li><strong>Avec votre consentement explicite</strong></li>
              </ul>

              <h2>4. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre :
              </p>
              <ul>
                <li>L'accès non autorisé</li>
                <li>La divulgation</li>
                <li>La modification</li>
                <li>La destruction</li>
              </ul>

              <h2>5. Conservation des données</h2>
              <p>
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                pour lesquelles elles ont été collectées :
              </p>
              <ul>
                <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données de formation :</strong> durée légale de conservation des documents de formation</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              </ul>

              <h2>6. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>

              <h3>Exercer vos droits</h3>
              <p>
                Pour exercer vos droits, contactez-nous à l'adresse : <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
              </p>
              <p>
                Nous nous engageons à répondre à votre demande dans un délai d'un mois.
              </p>

              <h2>7. Cookies</h2>
              <p>
                Notre site utilise des cookies avec votre consentement pour améliorer votre expérience. 
                Un bandeau de consentement vous permet de choisir quels cookies accepter.
              </p>

              <h3>Types de cookies utilisés</h3>
              <ul>
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site (avec votre accord)</li>
                <li><strong>Cookies marketing :</strong> pour personnaliser les publicités (avec votre accord)</li>
              </ul>
              
              <p>
                Vous pouvez modifier vos préférences de cookies à tout moment en supprimant les données 
                de votre navigateur, ce qui fera réapparaître le bandeau de consentement.
              </p>

              <h2>8. Transferts internationaux</h2>
              <p>
                Certains de nos prestataires peuvent être situés en dehors de l'Union européenne. 
                Dans ce cas, nous nous assurons que des garanties appropriées sont en place pour 
                protéger vos données personnelles.
              </p>

              <h2>9. Modifications de cette politique</h2>
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour.
              </p>

              <h2>10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement 
                de vos données personnelles, contactez-nous :
              </p>
              <ul>
                <li>Email : <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a></li>
                <li>Téléphone : {SITE_CONFIG.contact.phone}</li>
                <li>Adresse : {SITE_CONFIG.contact.address}</li>
              </ul>

              <p>
                Vous avez également le droit de déposer une plainte auprès de la Commission Nationale 
                de l'Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos 
                données personnelles constitue une violation du RGPD.
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