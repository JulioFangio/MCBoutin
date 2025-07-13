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

## 📞 Contact & Support

Pour toute question technique ou modification, contactez l'équipe de développement.

---

**Développé avec ❤️ pour Marie-Christine Boutin**
