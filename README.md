# Site Web - Loft & Keys Properties
## Soirée Exclusive d'Opportunité

Site web pour l'événement exclusif du 21 novembre 2025 au Fleuve Congo Hôtel.

---

## 📁 Structure du Projet

```
loft/
├── index.html          # Page principale
├── styles.css          # Styles et design
├── script.js           # Interactivité JavaScript
├── images/             # Dossier des images
│   └── README.md       # Instructions pour les images
└── README.md           # Ce fichier
```

---

## 🚀 Comment Lancer le Site

### Méthode 1 : Double-clic
1. Ouvrez le dossier `loft`
2. Double-cliquez sur le fichier `index.html`
3. Le site s'ouvrira dans votre navigateur par défaut

### Méthode 2 : Serveur local (Recommandé)
Si vous avez Python installé :

```bash
# Ouvrez PowerShell dans le dossier loft
cd "c:\Users\icone\OneDrive\Pictures\loft"

# Lancez un serveur local
python -m http.server 8000
```

Puis ouvrez votre navigateur à : `http://localhost:8000`

### Méthode 3 : Avec VS Code
1. Installez l'extension "Live Server"
2. Faites clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

---

## 🖼️ Images Requises

Placez ces images dans le dossier `images/` :

- `logo.png` - Logo Loft & Keys Properties
- `hero.jpg` - Image principale
- `event-showcase.jpg` - Pour le cadre diamant
- `entrance.jpg` - Hall d'accueil
- `stage.jpg` - Scène principale
- `conference.jpg` - Salle de conférence
- `auditorium.jpg` - Auditorium
- `building-1.jpg` - Immeuble Dubai
- `pool.jpg` - Piscine de luxe
- `interior.jpg` - Intérieur moderne

> **Note :** Le site fonctionnera même sans les images, mais il sera plus beau avec !

---

## ✨ Fonctionnalités

✅ **Design Responsive** - S'adapte à tous les écrans (mobile, tablette, desktop)  
✅ **Navigation Smooth** - Défilement fluide entre les sections  
✅ **Menu Mobile** - Menu hamburger pour mobile  
✅ **Animations** - Animations au scroll et au survol  
✅ **Formulaire de Contact** - Confirmation de présence  
✅ **Galerie Interactive** - Lightbox pour agrandir les images  
✅ **Timeline** - Programme détaillé de la soirée  

---

## 🎨 Palette de Couleurs

- **Vert Foncé Principal :** `#0d3d3d`
- **Vert Très Foncé :** `#082525`
- **Or :** `#d4a556`
- **Or Clair :** `#e8c589`
- **Beige :** `#f5ddb8`
- **Blanc :** `#ffffff`

---

## 📱 Sections du Site

1. **Hero** - Section d'accueil avec titre et image principale
2. **Introduction** - Texte de présentation
3. **À Propos** - Présentation de Loft & Keys Properties
4. **Programme** - Timeline détaillée de la soirée
5. **Galerie** - Photos de l'événement
6. **Contact** - Formulaire de confirmation + coordonnées
7. **Footer** - Informations et liens

---

## 🔧 Personnalisation

### Modifier les Couleurs
Éditez le fichier `styles.css` et changez les variables CSS au début :

```css
:root {
    --primary-green: #0d3d3d;
    --gold: #d4a556;
    /* etc. */
}
```

### Modifier le Contenu
Éditez le fichier `index.html` et modifiez le texte directement.

### Ajouter des Animations
Le fichier `script.js` contient toutes les interactions.

---

## 📧 Contact

- **Email :** info@loftandkeys.com
- **Téléphone :** +971 4553 5283
- **Événement :** 21 Novembre 2025 - Fleuve Congo Hôtel

---

## 💻 Technologies Utilisées

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Montserrat)

---

## 📝 Notes

- Le formulaire envoie actuellement un email via `mailto:`
- Pour une version production, connectez-le à un backend
- Toutes les animations sont optimisées pour la performance
- Le site est entièrement responsive

---

**Créé pour Loft & Keys Properties - 2025**
