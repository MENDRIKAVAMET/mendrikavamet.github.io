# 📑 Index des Fichiers - Portfolio 3D

Guide de navigation pour trouver rapidement le fichier à modifier.

---

## 🎯 Fichiers à Personnaliser (Par Priorité)

### 🔴 PRIORITÉ 1 - Essentiels
| Fichier | Quoi Faire | Impact |
|---------|-----------|---------|
| [`src/config/portfolioConfig.js`](#config) | Mettre à jour nom, title, email | **Haut** |
| [`src/index.css`](#colors) (lignes 10-13) | Changer les couleurs du thème | **Haut** |
| [`src/App.jsx`](#app) (section Projects) | Ajouter vos 3-6 projets | **Haut** |

### 🟠 PRIORITÉ 2 - Importants
| Fichier | Quoi Faire | Impact |
|---------|-----------|---------|
| [`src/App.jsx`](#app) (section Hero) | Personnaliser le titre/subtitle | **Moyen** |
| [`src/App.jsx`](#app) (section About) | Écrire votre bio | **Moyen** |
| [`src/App.jsx`](#app) (section Contact) | Ajouter votre email | **Moyen** |
| [`public/`](#assets) | Ajouter vos images/assets | **Moyen** |

### 🟡 PRIORITÉ 3 - Optimisations
| Fichier | Quoi Faire | Impact |
|---------|-----------|---------|
| [`src/components/ParticleField.jsx`](#particles) (ligne 13) | Ajuster nb particules | **Faible** |
| [`src/components/Scene3D.jsx`](#camera) (ligne ~45) | Ajuster caméra/lumières | **Faible** |
| [`src/components/Navigation.jsx`](#navigation) | Ajouter/modifier sections | **Faible** |

---

## 📁 Structure Complète

```
valisoamendrika.github.io-main/
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx              ← Canvas 3D principal
│   │   ├── ParticleField.jsx        ← Galaxie de particules
│   │   ├── Navigation.jsx           ← Barre de navigation
│   │   └── Navigation.css           ← Styles navigation
│   ├── config/
│   │   └── portfolioConfig.js       ← ⭐ CONFIG PRINCIPALE
│   ├── hooks/
│   │   └── usePortfolio.js          ← Hooks réutilisables
│   ├── utils/
│   │   └── animations.js            ← Constantes animations
│   ├── examples/
│   │   ├── advanced-examples.jsx    ← 10 exemples avancés
│   │   └── advanced-examples.css
│   ├── App.jsx                      ← 📄 Structure portfolio
│   ├── App.css                      ← Styles sections
│   ├── index.css                    ← 🎨 Styles globaux
│   ├── main.jsx
│   └── assets/
│
├── public/
│   └── images/                      ← 📷 Vos images ici
│
├── QUICK_START.md                   ← Démarrage rapide (5 min)
├── README_PORTFOLIO_3D.md           ← Guide complet d'utilisation
├── PORTFOLIO_3D_GUIDE.md            ← Documentation technique
├── CHECKLIST.md                     ← Checklist déploiement
├── GENERATION_REPORT.md             ← Rapport détaillé
├── VERIFICATION_GUIDE.md            ← Guide de vérification
├── FILES_INDEX.md                   ← Ce fichier
│
├── package.json
├── vite.config.js
├── index.html
└── ...
```

---

## 📝 Guide Détaillé des Fichiers

### <a id="config"></a>1️⃣ **src/config/portfolioConfig.js** ⭐ IMPORTANT

**Quoi:** Configuration centralisée du portfolio

**Sections principales:**
```javascript
// Ligne 5-10: Votre info
personal: {
  name: 'Votre Nom',                  // ← CHANGEZ ICI
  title: 'Creative Developer',         // ← ICI
  email: 'votre.email@example.com',   // ← ICI
}

// Ligne 13-18: Thème couleurs
theme: {
  primary: '#8899ff',
  secondary: '#ff6b9d',
  accent: '#00d4ff',
}

// Ligne 80-100: Vos projets
projects: {
  items: [
    { title: 'Project 1', ... },      // ← AJOUTEZ VOS PROJETS
    { title: 'Project 2', ... },
  ]
}
```

**À Modifier:**
- [ ] `name`, `title`, `email`
- [ ] Couleurs du thème
- [ ] Projets dans `projects.items`

---

### <a id="colors"></a>2️⃣ **src/index.css** (Lignes 10-13)

**Quoi:** Variables CSS du thème

```css
:root {
  --primary: #8899ff;        /* Couleur principale CHANGEZ */
  --secondary: #ff6b9d;      /* Couleur secondaire */
  --accent: #00d4ff;         /* Accent */
}
```

**Impact:** Tout le site change de couleur automatiquement

---

### <a id="app"></a>3️⃣ **src/App.jsx** (Sections à Modifier)

**Section Hero (ligne ~25):**
```jsx
<h1 className="hero-title">
  <span className="gradient-text">Creative</span> Developer
  {/* ← CHANGEZ "Creative Developer" */}
</h1>
<p className="hero-subtitle">
  Building immersive digital experiences with React & Three.js
  {/* ← CHANGEZ VOTRE SUBTITLE */}
</p>
```

**Section About (ligne ~50):**
```jsx
<div className="about-card">
  <h3>Frontend Specialist</h3>
  {/* ← CHANGEZ TITRE */}
  <p>Expert in React, Three.js...</p>
  {/* ← CHANGEZ DESCRIPTION */}
</div>
```

**Section Projects (ligne ~75):**
```jsx
{[1, 2, 3].map((i) => (
  {/* ← CHANGEZ LE NOMBRE (ex: [1,2,3,4,5,6]) */}
  <div className="project-card">
    <h3>Project Title {i}</h3>
    {/* ← CHANGEZ TITRE */}
    <p>Description...</p>
    {/* ← CHANGEZ DESCRIPTION */}
    <div className="project-tags">
      <span>React</span>
      {/* ← CHANGEZ TAGS */}
    </div>
  </div>
))}
```

**Section Contact (ligne ~110):**
```jsx
<form className="contact-form">
  <input placeholder="Your Name" />
  <input placeholder="Your Email" />
  <textarea placeholder="Your Message" rows="5"></textarea>
  {/* ← TESTER QUAND PRÊT */}
</form>
```

---

### <a id="particles"></a>4️⃣ **src/components/ParticleField.jsx** (Ligne 13)

**Quoi:** Configuration des particules 3D

```javascript
const particleCountRef = useRef(1500);  // ← NOMBRE DE PARTICULES

// Changer à:
// 500 = Très léger (mobile)
// 800 = Léger (optimisé)
// 1500 = Normal (défaut)
// 2000+ = Lourd (desktop haut-end)
```

**Aussi modifier (ligne ~20):**
```javascript
color: 0x8899ff,  // ← Couleur des particules (hex sans #)
size: 0.15,       // ← Taille des particules
```

---

### <a id="camera"></a>5️⃣ **src/components/Scene3D.jsx**

**Caméra (ligne ~28):**
```javascript
<PerspectiveCamera
  position={[0, 0, 15]}    // ← Position initiale [x, y, z]
  fov={60}                 // ← Champ de vision (30-90)
/>
```

**Lumières (ligne ~34-48):**
```javascript
<ambientLight intensity={0.6} color={0x8899ff} />  // ← Éclairement général
<directionalLight intensity={1.2} color={0xffffff} />  // ← Ombre
<pointLight intensity={0.8} color={0xff6b9d} />  // ← Ambiance

// Intensité: 0-2
// Color: 0xrrggbb (hexadécimal)
```

**Mouse/Scroll Réaction:**
```javascript
const mouseInfluence = 2;      // ← Force attraction souris
const scrollSensitivity = 0.0002;  // ← Sensibilité scroll
```

---

### <a id="navigation"></a>6️⃣ **src/components/Navigation.jsx**

**Sections du menu (ligne ~80):**
```javascript
{['hero', 'about', 'projects', 'contact'].map((item) => (
  // ← AJOUTER/RETIRER DES SECTIONS ICI
  <li key={item}>
    <button>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
  </li>
))}
```

---

### <a id="assets"></a>7️⃣ **public/** (Vos Images)

**Chemin:** `public/images/`

**Utilisation dans App.jsx:**
```jsx
<img src="/images/mon-image.jpg" alt="Description" />
```

**Types:** JPG, PNG, WebP, SVG

---

## 🎨 Fichiers de Style

### `src/App.css` - Styles des Sections

**Sections principales:**
- `.hero-section` - Section héro
- `.about-section` - About
- `.projects-grid` - Projets
- `.contact-section` - Contact
- `.btn` - Boutons
- `.form-input` - Formulaire

### `src/Navigation.css` - Styles Navbar

- `.navbar` - Barre fixe
- `.nav-link` - Liens menu
- `.active-indicator` - Underline active

---

## 📚 Fichiers de Documentation

| Fichier | Temps de Lecture | Pour Qui |
|---------|-----------------|----------|
| `QUICK_START.md` | 5 min | Démarrage rapide |
| `README_PORTFOLIO_3D.md` | 15 min | Vue d'ensemble complète |
| `PORTFOLIO_3D_GUIDE.md` | 20 min | Deep dive technique |
| `CHECKLIST.md` | 10 min | Avant déploiement |
| `VERIFICATION_GUIDE.md` | 10 min | Tests avant déploiement |
| `GENERATION_REPORT.md` | 5 min | Ce qui a été généré |

---

## 🚀 Workflow Typique

```
1. Lire QUICK_START.md                    ← Commencez ici
   ↓
2. Modifier portfolioConfig.js            ← Votre info
   ↓
3. Changer index.css (couleurs)          ← Votre thème
   ↓
4. Personnaliser App.jsx (sections)      ← Votre contenu
   ↓
5. Ajouter images dans public/           ← Vos assets
   ↓
6. Tester avec npm run dev               ← Vérifier
   ↓
7. Consulter VERIFICATION_GUIDE.md       ← Tests
   ↓
8. Consulter CHECKLIST.md                ← Déployer
   ↓
9. npm run build && déployer             ← Live! 🎉
```

---

## 🔍 Recherche Rapide

**Je veux changer...** → **Aller à**

| Quoi | Fichier |
|------|---------|
| Mon nom/email | `config/portfolioConfig.js` |
| Les couleurs | `index.css` (lignes 10-13) |
| Le titre hero | `App.jsx` (ligne ~27) |
| Mes projets | `App.jsx` (ligne ~75) |
| Le nombre de particules | `components/ParticleField.jsx` (ligne 13) |
| Les lumières 3D | `components/Scene3D.jsx` (ligne ~34) |
| Les sections du menu | `components/Navigation.jsx` (ligne ~80) |
| Les animations | `utils/animations.js` |
| Le formulaire | `App.jsx` (ligne ~110) |
| L'About section | `App.jsx` (ligne ~50) |

---

## 📊 Taille des Fichiers (Approximatif)

```
Scene3D.jsx              ~200 lignes
ParticleField.jsx        ~150 lignes
Navigation.jsx           ~120 lignes
App.jsx                  ~150 lignes
portfolioConfig.js       ~180 lignes
usePortfolio.js          ~180 lignes
animations.js            ~280 lignes
App.css                  ~400 lignes
index.css                ~150 lignes
Navigation.css           ~100 lignes
```

---

## ⚠️ Fichiers À NE PAS Modifier

Sauf si vous savez ce que vous faites:

```
❌ main.jsx              - Entry point
❌ vite.config.js        - Config build
❌ package.json          - Dépendances
❌ advanced-examples.jsx - Exemples seulement
```

---

## 📞 Aide Rapide

**Problème** → **Consulter**

| Problème | Fichier |
|----------|---------|
| Pas de 3D | QUICK_START.md |
| Lag/Lent | PORTFOLIO_3D_GUIDE.md |
| Design cassé | VERIFICATION_GUIDE.md |
| Déploiement | CHECKLIST.md |
| Comment faire X | PORTFOLIO_3D_GUIDE.md ou README_PORTFOLIO_3D.md |

---

## 🎯 Résumé pour Démarrer

1. Ouvrir **`src/config/portfolioConfig.js`**
2. Changer `name`, `title`, `email`
3. Ouvrir **`src/index.css`** (lignes 10-13)
4. Changer les couleurs
5. Ouvrir **`src/App.jsx`**
6. Modifier le Hero, About, Projects
7. Ajouter vos images dans **`public/images/`**
8. Tester: `npm run dev`
9. Lire **`VERIFICATION_GUIDE.md`** avant déploiement
10. Déployer! 🚀

---

**Tout est clair?** → Commencez par `QUICK_START.md`!

**Besoin de détails?** → Consultez `README_PORTFOLIO_3D.md`!

**Prêt à déployer?** → Lisez `CHECKLIST.md`!

**Bonne chance! 🎉**
