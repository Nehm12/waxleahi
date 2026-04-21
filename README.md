# 🚀 WA XLE AHI - Plateforme Web & API

Service de courses à domicile 24h/24, 7j/7 pour seniors, PMR et personnes en difficulté.

## 📁 Structure du Projet

```
waxleahi/
├── src/                    # Front-end Next.js
│   ├── app/               # Pages principales
│   │   ├── page.tsx       # Accueil
│   │   ├── equipe/        # Page Équipe
│   │   ├── localisations/  # Page Localisations
│   │   ├── application-mobile/  # Page Application
│   │   └── contact/       # Page Contact
│   └── components/        # Composants réutilisables
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── WhatsAppButton.tsx
├── backend/               # API FastAPI
│   ├── main.py           # Application principale
│   ├── requirements.txt   # Dépendances Python
│   └── .env.example      # Configuration d'exemple
└── public/               # Assets statiques
```

## 🛠️ Installation & Lancement

### Front-end (Next.js)

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
npm run start

# L'application sera disponible à http://localhost:3000
```

### Back-end (FastAPI)

```bash
# Aller dans le dossier backend
cd backend

# Activer l'environnement virtuel (Linux/Mac)
source venv/bin/activate

# Ou sur Windows
venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Lancer le serveur FastAPI
python main.py

# Ou avec uvicorn directement
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# L'API sera disponible à http://localhost:8000
# Documentation Swagger à http://localhost:8000/docs
```

## 📱 Pages disponibles

- **Accueil** (/) - Présentation du service WA XLE AHI
- **Équipe** (/equipe) - Présentation de l'équipe et valeurs
- **Localisations** (/localisations) - Zones desservies et demande de couverture
- **Application Mobile** (/application-mobile) - Fonctionnalités et téléchargement
- **Contact** (/contact) - Formulaire de contact et FAQ

## 🔌 Endpoints API

### Health Check
- `GET /` - Information sur l'API
- `GET /health` - Vérifier la santé du service

### Contact & Support
- `POST /api/contact` - Envoyer un message de contact
- `POST /api/coverage-request` - Demander une couverture dans une nouvelle zone

### Commandes
- `POST /api/orders` - Créer une nouvelle commande

### Information
- `GET /api/zones` - Obtenir les zones desservies
- `GET /api/team` - Obtenir les informations de l'équipe

## 🎨 Design & Couleurs

- **Vert Foncé** (#1f3d2b) - Couleur principale
- **Orange** (#f58442) - Couleur d'accent
- **Fond Clair** (#fdfaf6) - Fond principal

## 📝 Configuration

### Front-end
- Next.js 14+ avec App Router
- Tailwind CSS pour les styles
- TypeScript pour la sécurité des types

### Back-end
- FastAPI pour l'API REST
- CORS configuré pour accepter les requêtes du front-end
- Pydantic pour la validation des données

## 🚀 Déploiement

### Front-end (Vercel)
```bash
npm run build
# Déployer sur Vercel ou votre hébergement préféré
```

### Back-end (Heroku, Railway, ou serveur personnel)
```bash
# Vérifier que requirements.txt est à jour
pip freeze > backend/requirements.txt

# Déployer le dossier backend
```

## 📞 Contact & Support

- **WhatsApp** : +212 XXX XXX XXX
- **Email** : contact@waxleahi.com
- **Téléphone** : Disponible 24h/24, 7j/7

## 📄 Licence

© 2026 WA XLE AHI. Tous droits réservés.

---

**WA XLE AHI** - Service de proximité pour tous, jour et nuit. ❤️
