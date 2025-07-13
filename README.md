# Site Web de Marie-Christine Boutin - Thérapeute

Un site web moderne et élégant pour Marie-Christine Boutin, thérapeute spécialisée en thérapie individuelle, relationnelle et familiale.

## 🚀 Stack Technique

### Framework & Technologies
- **Astro 5.10.2** - Framework de site statique avec intégration React
- **React 19.1.0** - Bibliothèque pour les composants interactifs
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS 4.1.3** - Framework CSS utility-first
- **Netlify Forms** - Gestion des formulaires de contact

### Composants UI
- **Radix UI** - Composants accessibles (Dialog, Navigation Menu, Slot)
- **Lucide React** - Icônes modernes et élégantes
- **Class Variance Authority** - Gestion des variantes de composants

### Intégrations
- **Google Places API** - Affichage des avis clients Google
- **Axios** - Client HTTP pour les requêtes API
- **Sharp** - Optimisation des images

## 🎨 Design & Couleurs

### Palette de Couleurs
- **Rose principal** : `#E879F9` (couleur signature)
- **Rose clair** : `#F3E8FF` (backgrounds)
- **Blanc** : `#FFFFFF` (textes et backgrounds)
- **Noir** : `#000000` (textes principaux)
- **Gris** : `#6B7280` (textes secondaires)

### Typographie
- **Police principale** : Système par défaut optimisée pour la lisibilité
- **Classe custom** : `.whoami-text` pour une cohérence typographique

### Éléments visuels
- **Scrollbar personnalisée** en rose
- **Animations fluides** sur les mots-clés défilants
- **Cartes flip 3D** pour les activités
- **Images optimisées** avec Sharp (formes décoratives)

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Activities.tsx   # Section activités avec cartes flip
│   ├── Avis.tsx        # Avis Google via API
│   ├── Contact.tsx     # Formulaire Netlify + carte
│   ├── Footer.tsx      # Footer avec 3 collaborateurs
│   ├── IntroScreen.tsx # Écran d'introduction animé
│   ├── Keywords.tsx    # Mots-clés défilants
│   ├── Navbar.tsx      # Navigation responsive
│   ├── WhoAmI.tsx      # Section présentation
│   └── ui/            # Composants UI réutilisables
├── layouts/
│   └── main.astro     # Layout principal
├── pages/
│   ├── index.astro    # Page d'accueil
│   └── api/
│       └── google-reviews.ts # API Google Places
├── services/
│   └── googlePlaces.ts # Service Google Places
├── styles/
│   └── global.css     # Styles globaux et animations
└── utils/
    └── testGoogleAPI.ts # Tests API Google
```

## 🛠 Installation et Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd MCBoutin

# Installer les dépendances
npm install

# Optimiser les images (optionnel)
node optimize-images.mjs

# Optimiser les vidéos (nécessite FFmpeg)
node optimize-video.mjs
```

### Variables d'environnement
Créer un fichier `.env` à la racine :
```env
GOOGLE_PLACES_API_KEY=votre_clé_api_google_places
PLACE_ID=votre_place_id_google
```

### Commandes de développement
```bash
# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

Le site sera accessible sur `http://localhost:4321`

## 🌐 Déploiement Netlify

### Configuration pour Netlify
1. **Build Command** : `npm run build`
2. **Publish Directory** : `dist`
3. **Node Version** : 18+

### Variables d'environnement Netlify
Ajouter dans les paramètres Netlify :
- `GOOGLE_PLACES_API_KEY`
- `PLACE_ID`

### Netlify Forms
Le formulaire de contact utilise Netlify Forms (100 emails/mois gratuits).
Aucune configuration supplémentaire requise.

## ✨ Fonctionnalités

### Sections principales
- **🎬 Intro Screen** - Animation d'entrée élégante
- **👋 Qui suis-je** - Présentation avec image et forme décorative
- **🔑 Mots-clés** - Animation de défilement horizontal
- **💼 Activités** - Cartes interactives flip 3D
- **⭐ Avis** - Intégration Google Reviews API
- **📧 Contact** - Formulaire Netlify + carte Google Maps
- **🦶 Footer** - Trois collaborateurs avec logos

### Fonctionnalités techniques
- **Responsive Design** - Optimisé mobile, tablette, desktop
- **Animations CSS** - Transitions fluides et modernes
- **SEO Optimisé** - Structure HTML sémantique
- **Performance** - Images optimisées, code splitté
- **Accessibilité** - Composants Radix UI accessibles

## 🎯 Optimisations

### Images
- **Compression automatique** avec Sharp
- **Format WebP** pour les navigateurs compatibles
- **Lazy loading** natif
- **Tailles responsives** avec `clamp()`

### Performance
- **Code splitting** automatique avec Astro
- **CSS minimal** avec Tailwind CSS
- **Animations GPU** pour la fluidité
- **Cache optimisé** pour les assets statiques

## 🖼️ Optimisation des Images

Le projet inclut un script d'optimisation automatique des images utilisant **Sharp**.

### Utilisation
```bash
# Optimiser toutes les images PNG dans public/
node optimize-images.mjs
```

### Configuration actuelle
- **Format source** : PNG
- **Taille de sortie** : 800x600 pixels
- **Suffixe** : `-min.png`
- **Compression** : PNG optimisée

### Images optimisées
- `forme1.png` → `forme1-min.png`
- `forme2.png` → `forme2-min.png`
- `forme3.png` → `forme3-min.png`
- `forme4.png` → `forme4-min.png`

### Personnalisation
Pour modifier les paramètres d'optimisation, éditez `optimize-images.mjs` :
```javascript
.resize(800, 600)  // Changer la taille
.png({ quality: 80 })  // Ajuster la qualité
```

## 🎬 Optimisation des Vidéos

Le projet inclut un script d'optimisation automatique des vidéos utilisant **FFmpeg**.

### Prérequis
```bash
# Installer FFmpeg (Windows avec winget)
winget install FFmpeg

# Redémarrer le terminal ou recharger PATH
```

### Utilisation
```bash
# Optimiser automatiquement GIFMCB.mp4
node optimize-video.mjs
```

### Résultats d'optimisation
- **Vidéo originale** : `GIFMCB.mp4` (14.9 MB)
- **Vidéo optimisée** : `GIFMCB-optimized.mp4` (2.33 MB)
- **Réduction** : 83.6% de la taille (6x plus rapide)

### Commandes manuelles FFmpeg
Si vous préférez optimiser manuellement :

```bash
# Compression recommandée (équilibre qualité/taille)
ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 28 -preset fast -movflags +faststart public/GIFMCB-optimized.mp4

# Compression agressive (taille minimale)
ffmpeg -i public/GIFMCB.mp4 -vcodec libx264 -crf 35 -preset ultrafast -vf "scale=1280:720" public/GIFMCB-compressed.mp4

# Format WebM (meilleure compression)
ffmpeg -i public/GIFMCB.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 public/GIFMCB.webm
```

### Paramètres d'optimisation utilisés
- **Codec** : H.264 (libx264)
- **CRF** : 28 (qualité optimale)
- **Preset** : fast (équilibre vitesse/compression)
- **Movflags** : +faststart (optimisation streaming)

### Bénéfices
- ⚡ **6x plus rapide** à charger
- 💾 **83.6% d'économie de bande passante**
- 📱 **Meilleure expérience mobile**
- 🎯 **SEO amélioré** (vitesse de chargement)
- 💰 **Coûts réduits** sur Netlify

## � Performances et Optimisations

### Résultats d'optimisation
- **Images PNG** : Réduction moyenne de 70-80% avec Sharp
- **Vidéo principale** : 14.9 MB → 2.33 MB (83.6% de réduction)
- **Temps de chargement** : Amélioration de 6x sur l'IntroScreen
- **Bundle JavaScript** : Code splitting automatique avec Astro
- **CSS** : Optimisation Tailwind avec purge automatique

### Métriques de performance
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 3s (vidéo optimisée)
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3s

### Optimisations techniques
- **Preload metadata** pour les vidéos
- **Lazy loading** natif pour les images
- **Responsive images** avec clamp()
- **GPU animations** pour la fluidité
- **Service Worker** ready (Astro compatible)

## 📞 Contact & Support

Pour toute question technique ou modification, contactez l'équipe de développement.

---

**Développé avec ❤️ pour Marie-Christine Boutin**
