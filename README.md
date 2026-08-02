# DocuFlow Landing — Site de démo & demande de test

Site vitrine DocuFlow avec formulaire de demande de test. Les demandes sont envoyées par email et enregistrées dans un fichier Excel.

## 🏗️ Architecture

```
docuflow-landing/
├── frontend/          → Landing page (Vercel)
└── backend/           → API email + Excel (Render)
```

## 🚀 Déploiement

### 1. Backend (Render)

1. Créez un service **Web Service** sur Render
2. Connectez le repo et pointez le dossier `docuflow-landing/backend`
3. Build : `npm install`
4. Start : `npm start`
5. Variables d'environnement :
   | Variable | Valeur |
   |---|---|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `chabidaniel093@gmail.com` |
   | `SMTP_PASS` | *(votre mot de passe d'application Gmail)* |
   | `MAIL_TO` | `chabidaniel093@gmail.com` |
   | `DATA_DIR` | `/var/data` |
6. Ajoutez un **disk** : mountPath `/var/data`, 1 Go (persistance Excel)

### 2. Frontend (Vercel)

1. Importez le projet, racine : `docuflow-landing/frontend`
2. Build : `npm run build` (Vercel détecte Vite automatiquement)
3. Variable d'environnement :
   | Variable | Valeur |
   |---|---|
   | `VITE_API_URL` | `https://votre-backend.onrender.com` |

## 🖥️ Développement local

```bash
# Backend (port 3002)
cd docuflow-landing/backend
cp .env.example .env  # configurez SMTP_PASS
npm install
npm run dev

# Frontend (port 4174)
cd docuflow-landing/frontend
npm install
npm run dev
```

Le frontend proxy `/api` vers `127.0.0.1:3002` en dev.

## 📊 Fichier Excel

- Emplacement : `docuflow-landing/backend/data/demandes.xlsx`
- Colonnes : Date | Nom complet | Email | Entreprise | Poste | Fonctionnalités | Message
- En production (Render), il est stocké sur le disque persistant `/var/data`

## 📧 Emails (2 automatiques)

1. **Notification au propriétaire** : Chaque demande est envoyée à `chabidaniel093@gmail.com` avec un template HTML élégant reprenant toutes les informations.
2. **Confirmation au demandeur** : Le testeur reçoit automatiquement un email « ✅ Demande bien reçue » avec récapitulatif de sa demande — c'est votre confirmation.
