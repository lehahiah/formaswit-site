import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'CGV / CGU | FormaSwift',
  description: 'Conditions générales de vente et d’utilisation du site FormaSwift - Prestations, formations et espace apprenant.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConditionsGeneralesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-20 lg:pt-24 section-padding bg-white">
          <div className="container max-w-4xl">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
              Conditions Générales de Vente et d’Utilisation (CGV / CGU)
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2>Article 1 - Objet</h2>
              <p>
                Les présentes conditions générales de vente et d’utilisation (ci-après « CGV / CGU ») régissent l’ensemble des relations entre 
                <strong> {SITE_CONFIG.contact.company}</strong>, ci-après dénommée « FormaSwift », et toute personne (client, utilisateur ou apprenant)
                naviguant sur le site <strong>formaswift.fr</strong>, utilisant l’espace apprenant ou sollicitant une prestation de formation, d’accompagnement ou de conseil.
              </p>

              <h2>Article 2 - Produits et services</h2>
              <p>
                FormaSwift propose :
              </p>
              <ul>
                <li>Des prestations de conseil et d’accompagnement Qualiopi ;</li>
                <li>Des formations professionnelles (présentiel, distanciel ou e-learning) ;</li>
                <li>Des guides, outils et produits numériques à usage pédagogique ou administratif ;</li>
                <li>Des objets et goodies à visée promotionnelle (Audit & Coffee, etc.).</li>
              </ul>
              <p>
                Toute prestation spécifique fait l’objet d’un devis, d’une convention de formation ou d’un contrat précisant les conditions particulières.
              </p>

              <h2>Article 3 - Accès au site et espace apprenant</h2>
              <p>
                L’accès au site est libre pour les pages publiques. L’accès à l’espace apprenant est réservé aux utilisateurs disposant d’un identifiant personnel fourni par FormaSwift.
                L’utilisateur s’engage à préserver la confidentialité de ses identifiants et à signaler toute utilisation non autorisée.  
                FormaSwift se réserve le droit de suspendre l’accès à l’espace apprenant en cas de non-respect des présentes CGU.
              </p>

              <h2>Article 4 - Commandes et inscription</h2>
              <p>
                Les commandes peuvent être passées :
              </p>
              <ul>
                <li>Par email à : {SITE_CONFIG.contact.email}</li>
                <li>Via les plateformes partenaires (Payhip, Notion, etc.)</li>
              </ul>
              <p>
                Toute commande implique l’acceptation sans réserve des présentes CGV / CGU.  
                La validation de la commande entraîne obligation de paiement.
              </p>

              <h2>Article 5 - Prix et facturation</h2>
              <p>
                Les prix sont exprimés en euros, toutes taxes comprises pour les particuliers, hors taxes pour les professionnels assujettis à la TVA.  
                FormaSwift se réserve le droit de modifier ses tarifs à tout moment, sans effet rétroactif sur les commandes déjà validées.
              </p>

              <h2>Article 6 - Paiement</h2>
              <p>
                Le paiement s’effectue :
              </p>
              <ul>
                <li>Par carte bancaire via une plateforme sécurisée (Stripe, Payhip, etc.) ;</li>
                <li>Par virement bancaire pour les prestations sur devis ;</li>
                <li>Par chèque sur demande.</li>
              </ul>

              <h2>Article 7 - Droit de rétractation</h2>
              <p>
                Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas :
              </p>
              <ul>
                <li>aux contenus numériques fournis immédiatement après achat ;</li>
                <li>aux formations déjà entamées avec l’accord du client ;</li>
                <li>aux prestations de service pleinement exécutées avant la fin du délai de rétractation.</li>
              </ul>
              <p>
                En cas d’inscription à une formation à distance non encore démarrée, le client peut exercer son droit de rétractation dans un délai de 14 jours à compter de la signature du contrat.
              </p>

              <h2>Article 8 - Annulation, report et force majeure</h2>
              <p>
                Toute demande d’annulation doit être formulée par écrit.  
                En cas de force majeure (maladie, grève, panne réseau, etc.), FormaSwift pourra reporter ou annuler la prestation sans indemnité, en proposant une reprogrammation.
              </p>

              <h2>Article 9 - Propriété intellectuelle</h2>
              <p>
                Tous les contenus du site et des formations (textes, vidéos, visuels, guides, supports, outils) sont protégés par le Code de la propriété intellectuelle.
                Toute reproduction, diffusion, modification ou exploitation sans autorisation écrite est strictement interdite.
              </p>

              <h2>Article 10 - Responsabilités</h2>
              <p>
                FormaSwift s’engage à assurer la qualité de ses contenus et la fiabilité de ses informations.  
                Sa responsabilité ne peut être engagée en cas d’interruption de service, de perte de données, ou de tout dommage indirect lié à l’utilisation du site ou de l’espace apprenant.
              </p>

              <h2>Article 11 - Protection des données</h2>
              <p>
                FormaSwift traite les données personnelles conformément au RGPD.  
                Pour plus d’informations, consultez la <a href="/politique-confidentialite" className="text-[#1FA09D] underline">Politique de confidentialité</a>.
              </p>

              <h2>Article 12 - Médiation et litiges</h2>
              <p>
                En cas de litige, le client doit adresser une réclamation écrite à FormaSwift.  
                Si aucun accord amiable n’est trouvé, le client consommateur peut saisir le médiateur de la consommation :
              </p>
              <p>
                <strong>Médiation de la consommation – C&C Médiation</strong><br />
                49 rue de Ponthieu, 75008 Paris<br />
                Site : <a href="https://www.cc-mediateurconso-banque.fr" target="_blank" className="text-[#1FA09D] underline">www.cc-mediateurconso-banque.fr</a>
              </p>
              <p>
                Les litiges sont soumis au droit français. En cas de désaccord persistant, les tribunaux compétents seront ceux du ressort du siège social de FormaSwift.
              </p>

              <h2>Article 13 - Modification des CGV / CGU</h2>
              <p>
                FormaSwift se réserve le droit de modifier à tout moment les présentes CGV / CGU pour les adapter à la législation ou à l’évolution de ses services.
                La version applicable est celle en vigueur à la date de consultation du site.
              </p>

              <h2>Article 14 - Contact</h2>
              <p>
                Pour toute question relative aux présentes CGV / CGU :
              </p>
              <ul>
                <li>Email : {SITE_CONFIG.contact.email}</li>
                <li>Adresse : {SITE_CONFIG.contact.address}</li>
              </ul>

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
