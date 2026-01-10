#!/bin/bash

echo "🧹 Suppression du cache Next.js..."
rm -rf .next/cache

echo "📦 Nettoyage node_modules/.cache si présent..."
rm -rf node_modules/.cache

echo "🚀 Lancement d'un build propre..."
npx next build