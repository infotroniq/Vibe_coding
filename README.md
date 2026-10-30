# Cloud Direct

Site vitrine en français pour **Cloud Direct**, destiné au domaine **cloudirect.fr**. HTML, CSS et JavaScript natifs : aucun PHP, dépendance ou compilation.

## Aperçu local

Depuis le dossier du dépôt :

```sh
python3 -m http.server 8000
```

Ouvrir http://localhost:8000. Les fichiers peuvent aussi être ouverts directement dans un navigateur.

## Publication

Copier les fichiers du site sur un hébergement statique avec HTTPS. Configurer les DNS de `cloudirect.fr` selon les instructions de l’hébergeur et rediriger `www` vers le domaine principal. Le dépôt contient aussi un favicon, un fichier robots et un sitemap.

## À confirmer avant la mise en ligne

- L’adresse `contact@cloudirect.fr` est une adresse proposée, **non vérifiée**. Créer cette boîte ou modifier `contactEmail` dans [script.js](./script.js).
- Compléter les informations légales de l’éditeur et de l’hébergeur dans la fenêtre « Informations du site » de [index.html](./index.html), à partir des informations réelles de l’entreprise. Le contenu actuel signale explicitement qu’elles restent à renseigner.
- Valider les prestations présentées avec l’entreprise. Aucun tarif, avis client, certification ou chiffre commercial fictif n’est affiché.

Le formulaire utilise `mailto:` : il prépare un message dans la messagerie du visiteur et nécessite un client de messagerie configuré. Il n’envoie pas d’e-mail côté serveur. Aucun cookie, outil d’analyse, police distante ou service tiers n’est utilisé.

## Personnalisation

- Textes et sections : [index.html](./index.html).
- Couleurs, mise en page et responsive : [style.css](./style.css).
- Menu mobile, contact et fenêtre d’informations : [script.js](./script.js).
