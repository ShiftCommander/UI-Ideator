<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Application AI Studio

Ce dépôt contient tout le code source et les configurations nécessaires pour exécuter votre application React (générée par AI Studio) en local.

Visualisez votre application sur AI Studio : [https://ai.studio/apps/995b6621-5991-4ac6-a868-6c3d3b651635](https://ai.studio/apps/995b6621-5991-4ac6-a868-6c3d3b651635)

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :
- **Node.js**
- **pnpm** (gestionnaire de paquets utilisé dans ce projet)

## 🚀 Démarrage Rapide

### 1. Installation des dépendances

À la racine du projet, exécutez la commande suivante pour installer toutes les dépendances via `pnpm` :

```bash
pnpm install
```

### 2. Configuration de l'environnement

Pour que l'application puisse communiquer avec l'API Gemini, vous devez configurer votre clé API.

Créez ou modifiez le fichier `.env.local` à la racine du projet pour y ajouter votre clé :

```env
GEMINI_API_KEY=votre_cle_api_ici
```

### 3. Lancement de l'environnement de développement

Démarrez le serveur de développement local :

```bash
pnpm run dev
```
L'application devrait être accessible depuis votre navigateur à l'adresse indiquée dans le terminal (généralement `http://localhost:5173`).

## 🛠 Commandes Disponibles

- `pnpm run dev` : Lance l'application en mode développement.
- `pnpm run build` : Construit l'application optimisée pour la production dans le dossier `dist`.
- `pnpm run preview` : Démarre un serveur web local pour prévisualiser la version de production.
