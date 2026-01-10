export const metadata = {
  title: 'Politique de confidentialité - FormaSwift',
  description: 'Politique de confidentialité du site FormaSwift - gestion des données personnelles et conformité RGPD.',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 text-[#3D3D3D] leading-relaxed">
      <h1 className="text-3xl font-bold text-[#1FA09D] mb-6">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : octobre 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p>La présente politique de confidentialité a pour objectif d’informer les visiteurs et utilisateurs du site <strong>formaswift.fr</strong> sur la manière dont FormaSwift collecte, utilise et protège leurs données personnelles, conformément au RGPD et à la loi Informatique et Libertés.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Responsable du traitement</h2>
      <p><strong>FormaSwift</strong>, représentée par <strong>Julie Bourdais</strong>, Directrice.<br />
      Email : <a href="mailto:contact@formaswift.fr" className="text-[#1FA09D] underline">contact@formaswift.fr</a></p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Données collectées</h2>
      <ul className="list-disc list-inside">
        <li>Formulaire de contact : nom, prénom, e-mail, message.</li>
        <li>Espace apprenant : identifiants, historique de formation.</li>
        <li>Données de navigation : adresse IP, navigateur, pages consultées.</li>
        <li>Newsletter : adresse e-mail (si abonnement).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Finalités du traitement</h2>
      <p>Les données sont utilisées pour répondre aux demandes, gérer les accès à l’espace apprenant, informer les utilisateurs et assurer la maintenance du site.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Base légale</h2>
      <p>Les traitements reposent sur le consentement, l’exécution d’un contrat ou l’intérêt légitime de FormaSwift.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Durée de conservation</h2>
      <ul className="list-disc list-inside">
        <li>Formulaire de contact : 12 mois</li>
        <li>Espace apprenant : durée de la formation + 3 ans</li>
        <li>Cookies et logs : 13 mois</li>
        <li>Newsletter : jusqu’à désinscription</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Destinataires</h2>
      <p>Les données sont destinées à FormaSwift et à ses sous-traitants : Bolt/Vercel (hébergement), Squarespace (domaine), Google Workspace (messagerie, stockage).</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Sécurité</h2>
      <p>Les données sont stockées sur des serveurs sécurisés. Des mesures techniques et organisationnelles garantissent la confidentialité et l’intégrité des informations.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Cookies</h2>
      <p>Des cookies fonctionnels et de mesure d’audience peuvent être utilisés. Vous pouvez les gérer via les paramètres de votre navigateur.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Vos droits</h2>
      <p>Conformément au RGPD, vous pouvez demander l’accès, la rectification, la suppression ou la portabilité de vos données.  
      Contact : <a href="mailto:contact@formaswift.fr" className="text-[#1FA09D] underline">contact@formaswift.fr</a></p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Modification</h2>
      <p>FormaSwift se réserve le droit de modifier cette politique. La date de dernière mise à jour figure en haut de page.</p>
    </main>
  );
}
