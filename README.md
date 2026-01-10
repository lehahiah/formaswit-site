# FormaSwift - Site Vitrine

Site vitrine professionnel pour FormaSwift, spécialiste de l'accompagnement des organismes de formation.

## 🚀 Technologies utilisées

- **Next.js 13** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes
- **Vercel** - Déploiement et hébergement

## 📋 Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Animations et micro-interactions
- ✅ Formulaire de contact avec validation
- ✅ SEO optimisé (meta tags, sitemap, robots.txt)
- ✅ Accessibilité WCAG AA
- ✅ Performance optimisée
- ✅ Palette de couleurs FormaSwift
- ✅ Pages : Accueil, Services, Produits, Formations, Goodies, À propos, Témoignages, Contact, Mentions légales

## 🎨 Palette de couleurs

```css
/* Couleurs principales FormaSwift */
--primary: #40514e;      /* Vert-gris primaire */
--secondary: #11999e;    /* Cyan primaire */
--accent: #16c6cc;       /* Accent */
--text-secondary: #576d69; /* Texte foncé secondaire */
--text-dark: #293533;    /* Fond sombre */
```

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd formaswift-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linting ESLint
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise une API route Next.js (`/api/contact`). Pour l'envoi d'emails en production, vous devez configurer un service d'email :

### Option 1: Nodemailer avec SMTP
```bash
# Variables d'environnement (.env.local)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@formaswift.com
```

### Option 2: SendGrid
```bash
# Variables d'environnement (.env.local)
SENDGRID_API_KEY=your-sendgrid-api-key
CONTACT_EMAIL=contact@formaswift.com
```

### Option 3: Resend (recommandé)
```bash
# Variables d'environnement (.env.local)
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=contact@formaswift.com
```

## 🚀 Déploiement sur Vercel

### Déploiement automatique
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement dans le dashboard Vercel
3. Le déploiement se fait automatiquement à chaque push

### Déploiement manuel
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
```

### Variables d'environnement Vercel
Dans le dashboard Vercel, ajoutez :
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (pour Nodemailer)
- Ou `SENDGRID_API_KEY` (pour SendGrid)  
- Ou `RESEND_API_KEY` (pour Resend)
- `CONTACT_EMAIL`

### Export statique pour hébergement simple
Le site est configuré pour l'export statique :
```bash
npm run build
# Les fichiers statiques seront dans le dossier 'out/'
```
## 📁 Structure du projet

```
├── app/                    # App Router Next.js 13
│   ├── (pages)/           # Pages groupées
│   │   ├── services/      # Page services
│   │   ├── produits/      # Page produits digitaux
│   │   ├── formations/    # Page formations
│   │   ├── goodies/       # Page goodies
│   │   ├── a-propos/      # Page à propos
│   │   ├── temoignages/   # Page témoignages
│   │   └── contact/       # Page contact
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── sitemap.ts        # Sitemap dynamique
├── components/            # Composants React
│   ├── forms/            # Formulaires
│   ├── layout/           # Header, Footer
│   ├── sections/         # Sections de pages
│   └── ui/               # Composants UI (shadcn)
├── data/                 # Données JSON
│   ├── services.json     # Services
│   ├── products.json     # Produits digitaux
│   ├── courses.json      # Formations
│   ├── testimonials.json # Témoignages
│   └── partners.json     # Partenaires
├── lib/                  # Utilitaires
│   ├── constants.ts      # Constantes
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
    ├── images/           # Images
    └── robots.txt        # Robots.txt
```

## 🎯 SEO et Performance

### SEO
- ✅ Meta tags optimisés
- ✅ Open Graph et Twitter Cards
- ✅ Sitemap XML automatique
- ✅ Robots.txt configuré
- ✅ Structure sémantique HTML
- ✅ Schema.org markup (à implémenter si besoin)

### Performance
- ✅ Images optimisées avec next/image
- ✅ Lazy loading automatique
- ✅ CSS optimisé avec Tailwind
- ✅ Bundle JavaScript optimisé
- ✅ Fonts optimisées (Inter + Poppins)

### Accessibilité
- ✅ Contrastes WCAG AA respectés
- ✅ Navigation au clavier
- ✅ ARIA labels
- ✅ Focus states visibles
- ✅ Skip links

## 📝 Personnalisation du contenu

### Modifier les services
Éditez le fichier `data/services.json` :
```json
{
  "id": 1,
  "title": "Nouveau Service",
  "description": "Description du service...",
  "icon": "target",
  "bullets": ["Fonctionnalité 1", "Fonctionnalité 2"]
}
```

### Modifier les produits
Éditez le fichier `data/products.json` :
```json
{
  "id": 1,
  "title": "Nouveau Produit",
  "category": "Guide PDF",
  "description": "Description du produit...",
  "priceTTC": 49,
  "format": "PDF téléchargeable",
  "featured": true
}
```

### Modifier les formations
Éditez le fichier `data/courses.json` :
```json
{
  "id": 1,
  "title": "Nouvelle Formation",
  "duration": "2 jours",
  "format": "Présentiel ou distanciel",
  "price": 890,
  "objectives": ["Objectif 1", "Objectif 2"],
  "featured": true
}
```
### Modifier les témoignages
Éditez le fichier `data/testimonials.json` :
```json
{
  "id": 4,
  "name": "Nouveau Client",
  "role": "Poste",
  "company": "Entreprise",
  "rating": 5,
  "quote": "Témoignage...",
  "avatar": "/images/testimonials/avatar.jpg"
}
```

### Modifier les informations de contact
Éditez le fichier `lib/constants.ts` :
```typescript
export const SITE_CONFIG = {
  contact: {
    email: 'nouveau@email.com',
    phone: '+33 X XX XX XX XX',
    address: 'Nouvelle adresse...',
  },
};
```

## 🔧 Maintenance

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update

# Mise à jour majeure (attention aux breaking changes)
npx npm-check-updates -u
npm install
```

### Monitoring
- Utilisez Vercel Analytics pour le monitoring
- Configurez des alertes pour les erreurs 500
- Surveillez les performances avec Lighthouse

## 📞 Support

Pour toute question technique ou demande de modification :
- Email : contact@formaswift.com
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind : https://tailwindcss.com/docs

---

**FormaSwift** - Des solutions concrètes pour la formation et l'efficacité pédagogique ✨