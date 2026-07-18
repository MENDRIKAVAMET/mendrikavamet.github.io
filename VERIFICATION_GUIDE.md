# ✔️ Guide de Vérification - Portfolio 3D

Utilisez ce guide pour vérifier que tout fonctionne correctement avant le déploiement.

---

## 🔍 Phase 1 : Vérification de l'Installation

### Étape 1.1 - Dépendances
```bash
# Vérifier que toutes les dépendances sont installées
npm list

# Vous devriez voir:
# ├── @react-three/drei@10.7.7
# ├── @react-three/fiber@9.6.1
# ├── framer-motion@12.42.2
# ├── react@19.2.6
# ├── react-dom@19.2.6
# └── three@0.185.1
```

✅ **Tous les packages présents?** → Continuer

❌ **Package manquant?** → Installer: `npm install [package]`

### Étape 1.2 - Vérifier les fichiers
```bash
# Ces fichiers doivent exister:
src/components/Scene3D.jsx
src/components/ParticleField.jsx
src/components/Navigation.jsx
src/components/Navigation.css
src/config/portfolioConfig.js
src/hooks/usePortfolio.js
src/utils/animations.js
src/App.jsx
src/App.css
src/index.css
```

✅ **Tous les fichiers présents?** → Continuer

---

## 🚀 Phase 2 : Test de Démarrage

### Étape 2.1 - Lancer le serveur dev
```bash
npm run dev
```

✅ **Pas d'erreurs?** → Le serveur tourne

❌ **Erreur?** → Voir section Troubleshooting

### Étape 2.2 - Vérifier le navigateur
1. Ouvrez http://localhost:5173
2. Attendez 3-5 secondes pour le chargement 3D

✅ **Vous voyez:**
- Fond noir/bleu foncé ✓
- Particules bleues en mouvement ✓
- Navigation en haut ✓
- Contenu scrollable ✓

❌ **Canvas noir/vide?** → Voir Troubleshooting

### Étape 2.3 - Tester les Interactions
```
Test 1: Scroll
- Scrollez la page
- La caméra 3D doit bouger (subtle)
- ✅ Les particules doivent avoir un mouvement vertical

Test 2: Souris
- Bougez votre souris
- Les particules doivent "suivre" la souris
- ✅ La caméra doit tourner légèrement

Test 3: Navigation
- Cliquez sur "About"
- Page doit scroll vers la section
- ✅ Indicateur doit passer sur "About"
```

---

## 🎨 Phase 3 : Vérification du Design

### Étape 3.1 - Vérification des Couleurs
Ouvrez `src/index.css` et vérifiez:

```css
:root {
  --primary: #8899ff      /* Doit être bleu */
  --secondary: #ff6b9d    /* Doit être rose */
  --accent: #00d4ff       /* Doit être cyan */
}
```

✅ **Couleurs correctes dans le navigateur?** → OK

❌ **Couleurs bizarres?** → Rafraîchir (Ctrl+F5)

### Étape 3.2 - Vérification des Sections
Scrollez et vérifiez:

```
□ Hero Section
  ├── ✅ Titre visible
  ├── ✅ Subtitle visible
  └── ✅ 2 boutons fonctionnels

□ About Section
  ├── ✅ Titre "About Me"
  ├── ✅ 3 cartes visibles
  └── ✅ Texte lisible

□ Projects Section
  ├── ✅ Titre "Featured Projects"
  ├── ✅ 3+ projet cards
  └── ✅ Tags visibles

□ Contact Section
  ├── ✅ Titre "Get In Touch"
  ├── ✅ Formulaire visible
  └── ✅ Bouton "Send Message"
```

✅ **Toutes les sections présentes?** → Continuer

---

## 📱 Phase 4 : Test Responsive

### Étape 4.1 - Desktop (>1024px)
```
F12 → Toggle device toolbar (Ctrl+Shift+M) → Responsive
Sélectionner: Desktop ou 1440x900

✅ Vérifier:
  - Canvas remplit 100% de l'écran
  - Contenu scrollable
  - Navigation visible
  - Particules animées
  - Pas de horizontal scroll
```

### Étape 4.2 - Tablet (768-1024px)
```
F12 → Toggle device toolbar → iPad
✅ Vérifier:
  - Layout adapté (pas de texte découpé)
  - Navigation responsive
  - Padding correct
  - Images visible
```

### Étape 4.3 - Mobile (<768px)
```
F12 → Toggle device toolbar → iPhone X
✅ Vérifier:
  - Layout mobile OK
  - Navigation mobile friendly
  - Boutons cliquables
  - Pas de horizontal scroll
  - Formulaire adapté
```

---

## ⚡ Phase 5 : Performance Check

### Étape 5.1 - Vérifier les FPS
Ouvrir DevTools (F12) → Console

```javascript
// Copier-coller ceci dans la console:
let frameCount = 0;
let lastTime = performance.now();
function measureFPS() {
  frameCount++;
  const currentTime = performance.now();
  if (currentTime >= lastTime + 1000) {
    console.log(`FPS: ${frameCount}`);
    frameCount = 0;
    lastTime = currentTime;
  }
  requestAnimationFrame(measureFPS);
}
measureFPS();
```

✅ **FPS > 50 sur desktop?** → Performance OK

❌ **FPS < 30?** → Réduire particules (voir Phase 6)

### Étape 5.2 - Vérifier les Erreurs Console
F12 → Console tab

✅ **Pas d'erreurs rouges?** → OK

❌ **Des erreurs?** → Note l'erreur, voir Troubleshooting

### Étape 5.3 - Vérifier la Taille du Bundle
```bash
npm run build
```

```
dist/index.html        ~5KB
dist/index-[hash].js   ~400KB (main bundle)
dist/index-[hash].css  ~30KB
```

✅ **Taille raisonnable?** → OK

---

## 🔧 Phase 6 : Optimisation (Si Nécessaire)

### Si c'est lent (FPS < 30):

**Réduire les particules:**
```javascript
// src/components/ParticleField.jsx (ligne 13)
const particleCountRef = useRef(800);  // Au lieu de 1500
```

**Désactiver mouse interaction:**
```javascript
// src/components/Scene3D.jsx (ligne ~70)
const mouseInfluence = 0;  // Au lieu de 2
```

**Réduire le blur:**
```css
/* src/components/Navigation.css (ligne ~10) */
backdrop-filter: blur(3px);  /* Au lieu de 10px */
```

---

## ✨ Phase 7 : Vérification de Personnalisation

### Étape 7.1 - Votre Info
Ouvrir: `src/config/portfolioConfig.js`

```javascript
personal: {
  name: 'VOTRE NOM',           // ← Changé?
  title: 'VOTRE TITRE',        // ← Changé?
  email: 'votre@email.com',    // ← Changé?
}
```

✅ **Votre info affichée dans le hero?** → OK

### Étape 7.2 - Vos Couleurs
Vérifier `src/index.css` variables

✅ **Vos couleurs utilisées partout?** → OK

### Étape 7.3 - Vos Projets
Vérifier section Projects dans App.jsx

✅ **Vos projets affichés?** → OK

---

## 📋 Phase 8 : Avant le Déploiement

### Checklist Finale
```
□ npm run dev fonctionne
□ Canvas 3D visible
□ Particules animées
□ Navigation fonctionne
□ Sections visibles
□ Responsive OK (mobile/tablet/desktop)
□ FPS > 50 sur desktop
□ Pas d'erreurs console
□ Votre info affichée
□ Vos couleurs présentes
□ Vos projets visibles
□ Formulaire visible
□ Pas de contenu découpé
□ Tous les liens fonctionnent
□ Images chargées correctement
□ Pas d'erreurs 404 (F12 → Network)
```

✅ **Tout coché?** → Prêt à déployer!

### Build de Production
```bash
npm run build
```

✅ **Build réussi (pas d'erreurs)?** → Continuer

### Tester le Build
```bash
npm run preview
```

Ouvrez http://localhost:4173

✅ **Fonctionne comme en dev?** → OK

---

## 🐛 Troubleshooting

### Canvas 3D noir/pas d'affichage
**Cause:** Erreur WebGL, dépendance manquante

**Solutions:**
```bash
# Vérifier les erreurs
npm install three @react-three/fiber @react-three/drei

# Rafraîchir
Ctrl+F5
```

### Lag/FPS bas
**Cause:** Trop de particules

**Solution:**
```javascript
// Réduire les particules
const particleCountRef = useRef(500);
```

### Contenu invisible
**Cause:** Z-index incorrect

**Solution:**
Vérifier que `.content` a `z-index: 100`

### Images manquantes
**Cause:** Chemin incorrect

**Solution:**
```jsx
// Bonne syntaxe
<img src="/images/mon-image.jpg" />

// Mauvaise syntaxe
<img src="images/mon-image.jpg" />  // ❌
```

### Scroll ne fonctionne pas
**Cause:** Contenu trop court

**Solution:**
Ajouter du contenu pour dépasser 100vh

### Erreur build "Module not found"
**Cause:** Import incorrect

**Solution:**
```javascript
// Bon
import Scene3D from './components/Scene3D';

// Mauvais
import Scene3D from '/components/Scene3D';  // ❌
```

---

## ✅ Checklist de Déploiement

Avant de déployer sur Netlify/Vercel:

```
Phase 1 (Installation)
□ npm install réussi
□ Tous les fichiers présents
□ Pas d'erreurs TypeScript

Phase 2 (Test Dev)
□ npm run dev fonctionne
□ Pas d'erreurs console
□ Interactions OK

Phase 3 (Design)
□ Couleurs correctes
□ Toutes sections visibles
□ Texte lisible

Phase 4 (Responsive)
□ Desktop OK
□ Tablet OK
□ Mobile OK

Phase 5 (Performance)
□ FPS > 50
□ Pas d'erreurs console
□ Pas de memory leak

Phase 6 (Contenu)
□ Votre info correcte
□ Vos projets affichés
□ Formulaire visible

Phase 7 (Build)
□ npm run build OK
□ npm run preview OK
□ Aucune erreur build

Phase 8 (Final)
□ Prêt à déployer
□ Repository pushé
□ Domain configuré (optionnel)
```

---

## 🎉 Résumé

Si tout est ✅, vous êtes prêt à déployer!

**Prochaines étapes:**
1. Consulter [CHECKLIST.md](CHECKLIST.md) pour le déploiement
2. Déployer sur Netlify ou Vercel
3. Configurer un domaine personnalisé (optionnel)
4. Partager votre portfolio! 🎉

---

**Besoin d'aide?** Consultez:
- [README_PORTFOLIO_3D.md](README_PORTFOLIO_3D.md)
- [PORTFOLIO_3D_GUIDE.md](PORTFOLIO_3D_GUIDE.md)
- [QUICK_START.md](QUICK_START.md)

**Bonne vérification! ✨**
