import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import AccessibilityToolbar from '@/components/ui/accessibility-toolbar';
import CookieBanner from '@/components/ui/cookie-banner';
import WhatsAppWidget from '@/components/ui/whatsapp-widget';
import BackToMenu from '@/components/ui/back-to-menu';


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'FormaSwift - Expert Organisme de Formation | Qualiopi, Qualité & Accompagnement OF',
    template: '%s | FormaSwift'
  },
  description: 'Expert organisme de formation avec 15 ans d\'expérience. Accompagnement Qualiopi, référent qualité externalisé, formations assistants OF, guides pratiques RGPD et outils pédagogiques. Spécialisée gestion administrative, certification et digitalisation des OF en Isère et France.',
  keywords: [
    'organisme de formation',
    'expert organisme formation',
    'accompagnement organisme formation',
    'Qualiopi',
    'certification Qualiopi',
    'audit Qualiopi',
    'référent qualité externalisé',
    'référent qualité OF',
    'consultant OF',
    'assistant formation',
    'formation assistant OF',
    'gestion administrative OF',
    'OPCO',
    'CPF',
    'France Compétences',
    'RGPD formation',
    'guide RGPD OF',
    'digitalisation organisme formation',
    'IA pour organisme formation',
    'référent handicap',
    'accessibilité handicap formation',
    'AFEST',
    'ingénierie formation',
    'tutorat formation',
    'e-learning',
    'formation professionnelle',
    'Julie Bourdais',
    'FormaSwift',
    'Isère',
    'Grenoble',
    'Lyon',
    'Auvergne-Rhône-Alpes',
    'webinaire organisme formation',
    'jury titre professionnel',
    'BPJEPS',
    'DEJEPS',
    'no-code formation',
    'outils pédagogiques'
  ],
  authors: [{ name: 'FormaSwift' }],
  creator: 'FormaSwift',
  publisher: 'FormaSwift',
  category: 'Formation professionnelle',
  classification: 'Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://formaswift.netlify.app'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: 'FormaSwift - Expert Organisme de Formation | Qualiopi & Accompagnement OF',
    description: 'Expert organisme de formation avec 15 ans d\'expérience. Accompagnement Qualiopi, référent qualité externalisé, formations, guides pratiques et outils pour les OF. Interventions en Isère et toute la France.',
    url: 'https://formaswift.netlify.app',
    siteName: 'FormaSwift',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FormaSwift - Spécialiste des Organismes de Formation',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FormaSwift - Expert Organisme de Formation | Qualiopi',
    description: 'Expert organisme de formation avec 15 ans d\'expérience. Accompagnement Qualiopi, référent qualité externalisé, formations, guides pratiques et outils pour les OF.',
    images: ['/og-image.jpg'],
    creator: '@formaswift',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msapplication-TileColor': '#16c6cc',
    'theme-color': '#16c6cc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#16c6cc" />
        <meta name="msapplication-TileColor" content="#16c6cc" />
        <meta name="theme-color" content="#16c6cc" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://payhip.com" />
        <link rel="dns-prefetch" href="https://audit-coffee.tpopsite.com" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "FormaSwift",
              "description": "Expert organisme de formation - Accompagnement Qualiopi, référent qualité externalisé, formations assistants OF, guides pratiques et outils pédagogiques. Spécialisée gestion administrative, certification et digitalisation des organismes de formation.",
              "url": "https://formaswift.fr",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "45.3918",
                  "longitude": "5.3468"
                },
                "geoRadius": "500000"
              },
              "priceRange": "$$",
              "logo": "https://formaswift.fr/images/logo-formaswift-rect copy.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-7-66-02-54-51",
                "contactType": "customer service",
                "email": "julie@formaswift.fr",
                "availableLanguage": "French"
              },
              "founder": {
                "@type": "Person",
                "name": "Julie Bourdais",
                "jobTitle": "Expert Qualiopi et Formatrice",
                "worksFor": {
                  "@type": "Organization",
                  "name": "FormaSwift"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "310 Rue du Lavoir",
                "addressLocality": "Apprieu",
                "postalCode": "38140",
                "addressCountry": "FR"
              },
              "sameAs": [
                "https://linkedin.com/company/formaswift",
                "https://facebook.com/formaswift"
              ],
              "serviceType": [
                "Accompagnement Qualiopi",
                "Référent qualité externalisé",
                "Formation assistant organisme de formation",
                "Audit organisme de formation",
                "Conseil certification OF",
                "Gestion administrative OF",
                "Digitalisation organisme formation",
                "Formation RGPD",
                "Ingénierie AFEST",
                "Tutorat formation",
                "Webinaire organisme formation",
                "Outils pédagogiques no-code"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services FormaSwift",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Accompagnement Qualiopi",
                      "description": "Préparation et accompagnement certification Qualiopi pour organismes de formation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Référent qualité externalisé",
                      "description": "Mission de référent qualité externalisé pour votre organisme de formation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Formations pour OF",
                      "description": "Formations e-learning et sur mesure pour assistants formation et référents qualité"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <AccessibilityToolbar />
        <CookieBanner />
        <WhatsAppWidget />
        <BackToMenu />
      </body>
    </html>
  );
}