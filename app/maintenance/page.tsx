export default function Maintenance() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#40514e] via-[#11999e] to-[#16c6cc] text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-6">🚧 Site en construction</h1>
      <p className="text-xl mb-8">
        Notre site sera bientôt en ligne. <br />
        En attendant, retrouvez-nous sur LinkedIn ou contactez-nous directement.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.linkedin.com/in/julie-bourdais-9a285055/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAAuxiooBcJD8uQN1kUdOa8BlAs-DahzOirg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-[#11999e] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Suivez-nous sur LinkedIn
        </a>

        <a
          href="/contact"
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#11999e] transition"
        >
          Nous contacter
        </a>
      </div>
    </main>
  );
}
