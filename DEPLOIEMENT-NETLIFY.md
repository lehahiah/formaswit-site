# Guide de Déploiement sur Netlify

Ce guide vous aide à déployer votre site FormaSwift sur Netlify avec un certificat SSL automatique.

## 📋 Prérequis

1. Un compte GitHub (pour connecter votre code)
2. Un compte Netlify (gratuit sur [netlify.com](https://netlify.com))
3. Votre base de données Supabase configurée

## 🚀 Étapes de Déploiement

### 1. Préparer votre dépôt Git

Si ce n'est pas déjà fait, initialisez Git et poussez votre code sur GitHub :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git push -u origin main
```

### 2. Connexion à Netlify

1. Allez sur [netlify.com](https://netlify.com) et connectez-vous
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Choisissez **GitHub** et autorisez Netlify
4. Sélectionnez votre dépôt FormaSwift

### 3. Configuration du Build

Netlify détectera automatiquement Next.js. Vérifiez que les paramètres sont :

- **Build command** : `npm run build`
- **Publish directory** : `.next`
- **Node version** : 18 (configuré automatiquement via netlify.toml)

### 4. Variables d'Environnement

⚠️ **TRÈS IMPORTANT** : Configurez vos variables d'environnement Supabase

1. Dans Netlify, allez dans **Site settings** → **Environment variables**
2. Ajoutez ces deux variables :

```
NEXT_PUBLIC_SUPABASE_URL=https://cljfqaivaultgmsqymgs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsamZxYWl2YXVsdGdtc3F5bWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzMzMDAsImV4cCI6MjA4MzYwOTMwMH0.D6wfL2QMazNrVMEvJH08HcV-a75TZ0tXeThiVDop7zE
```

### 5. Lancer le Déploiement

1. Cliquez sur **"Deploy site"**
2. Netlify va :
   - Installer les dépendances
   - Compiler votre projet Next.js
   - Déployer votre site
   - **Générer automatiquement un certificat SSL gratuit**

### 6. Certificat SSL Automatique

✅ Netlify génère automatiquement un certificat SSL Let's Encrypt :

- **Gratuit et illimité**
- **Renouvellement automatique**
- **HTTPS activé par défaut**
- Aucune configuration manuelle nécessaire

Votre site sera accessible en HTTPS dès le premier déploiement !

### 7. Domaine Personnalisé (Optionnel)

Pour utiliser votre propre domaine (ex: formaswift.com) :

1. Allez dans **Site settings** → **Domain management**
2. Cliquez sur **"Add custom domain"**
3. Suivez les instructions pour configurer vos DNS
4. Le certificat SSL sera automatiquement généré pour votre domaine

#### Configuration DNS Recommandée :

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: votre-site.netlify.app
```

## 🔄 Déploiements Automatiques

Une fois configuré, chaque `git push` sur votre branche `main` déclenchera automatiquement :

1. Un nouveau build
2. Des tests automatiques
3. Un déploiement en production
4. Renouvellement du certificat SSL si nécessaire

## 🔒 Sécurité

Votre site bénéficie automatiquement de :

- ✅ Certificat SSL/TLS (HTTPS)
- ✅ Headers de sécurité (configurés dans netlify.toml)
- ✅ Protection DDoS
- ✅ CDN global pour la performance

## 📊 Monitoring

Dans votre dashboard Netlify :

- **Analytics** : Visiteurs, pages vues
- **Logs** : Erreurs de build et runtime
- **Forms** : Soumissions de formulaires
- **Functions** : Statistiques des API routes

## 🆘 Dépannage

### Le build échoue ?

1. Vérifiez les logs de build dans Netlify
2. Testez localement : `npm run build`
3. Vérifiez que toutes les variables d'environnement sont configurées

### Le site ne charge pas ?

1. Vérifiez que le certificat SSL est actif (peut prendre 1-2 minutes)
2. Videz le cache de votre navigateur
3. Vérifiez les logs de fonction dans Netlify

### Problème de base de données ?

1. Vérifiez que les variables Supabase sont correctement configurées
2. Testez la connexion depuis les logs Netlify
3. Vérifiez les permissions RLS dans Supabase

## 📞 Support

- [Documentation Netlify](https://docs.netlify.com)
- [Forum Netlify](https://answers.netlify.com)
- [Support Supabase](https://supabase.com/docs)

---

**Durée estimée** : 10-15 minutes pour le premier déploiement
**Coût** : Gratuit (plan Netlify Starter inclut SSL et 100GB de bande passante)
