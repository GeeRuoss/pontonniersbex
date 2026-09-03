# Pontonniers de Bex

Site du Club des Pontonniers de Bex (Chablais vaudois). Reconstruction du site Framer en HTML/CSS/JS vanilla, hébergé sur Netlify.

## Stack
- HTML/CSS/JS vanilla, aucun build
- Polices : Montserrat (titres) + Manrope (titres doux, nav, boutons) + Inter (corps), via Google Fonts
- Accent : bleu `#0099FF` (repris du site Framer)
- Hébergement : **Netlify** (projet `pontonniersbex`), domaine principal `www.pontonniersbex.ch` ; l'apex `pontonniersbex.ch` redirige en 301 vers www. HTTPS Let's Encrypt automatique (apex + www).

## Structure
```
index.html            Accueil
societe.html          La Société (qui sommes-nous)
programme.html        Programme de la saison
photos.html           Galerie (grille + lightbox)
news.html             Actualités (3ème correction du Rhône)
liens.html            Liens utiles
contact.html          Contact (téléphone + email, sans formulaire)
404.html              Page d'erreur
css/style.css         Styles partagés
js/main.js            Nav mobile, scroll-reveal, lightbox
assets/img/           Images (hero, logo, logo-white, galerie, news)
```

## Notes
- **Contact** : téléphone et email uniquement (pas de formulaire), comme le site d'origine.
- **Liens sociaux** : Instagram et Facebook pointent vers les pages génériques tant que les vraies URL du club ne sont pas fournies.
- Design, contenu et photos repris de l'ancien site Framer (navbar, polices Montserrat/Manrope, accent bleu).

## Déploiement
Push sur `main` → Netlify publie la racine du repo telle quelle (`netlify.toml` : `publish = "."`, aucun build). Les URLs sans extension (`/societe` → `societe.html`) et `404.html` sont gérées nativement.

⚠️ **Plan Netlify gratuit = 300 crédits/mois, plafond dur** : 15 crédits par déploiement de production (= chaque push sur `main`), 20 crédits par Go de bande passante. Quota épuisé = site suspendu jusqu'au mois suivant. **Grouper les modifications** (une branche, un seul merge) et surveiller Team → Usage & billing. Ne jamais renommer le projet Netlify (son nom est la cible du CNAME `www`).

### DNS (zone chez Infomaniak — ne pas déplacer, la messagerie y vit)
- `pontonniersbex.ch` A → `75.2.60.5` (load balancer Netlify — un seul enregistrement A, jamais d'AAAA)
- `www` CNAME → `pontonniersbex.netlify.app`
- MX, SPF, DKIM, DMARC, autoconfig, autodiscover, Amazon SES : **ne jamais y toucher** (emails `@pontonniersbex.ch`)
- TXT `_github-pages-challenge-geeruoss` : conservé (garde le domaine vérifié côté GitHub)

### Historique
- **29/06 → 03/09/2026** : hébergé sur GitHub Pages, mais GitHub n'a jamais émis le certificat HTTPS du domaine custom (état `authorization_created` puis `new`, sans fin), alors que le DNS était valide. Cause : panne de la file de provisioning Pages fin août 2026, jamais annoncée, plusieurs domaines touchés ([discussion #205765](https://github.com/orgs/community/discussions/205765)). Aucun site resté sur Pages n'a obtenu son certificat.
- **03/09/2026** : migration vers Netlify. Certificat Let's Encrypt émis **10 minutes** après la bascule DNS. Le repo GitHub reste la source de vérité.

---
Designed by Ruoss! Communication
