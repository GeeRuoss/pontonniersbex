# Pontonniers de Bex

Site du Club des Pontonniers de Bex (Chablais vaudois). Reconstruction du site Framer en HTML/CSS/JS vanilla, hébergé sur GitHub Pages.

## Stack
- HTML/CSS/JS vanilla, aucun build
- Polices : Montserrat (titres) + Manrope (titres doux, nav, boutons) + Inter (corps), via Google Fonts
- Accent : bleu `#0099FF` (repris du site Framer)
- Hébergement : GitHub Pages, domaine `www.pontonniersbex.ch` (l'apex `pontonniersbex.ch` redirige en 301 vers www)

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
Push sur `main` → GitHub Pages sert la racine. Le fichier `CNAME` fixe le domaine `www.pontonniersbex.ch`.

⚠️ **Ne jamais supprimer ni écraser le fichier `CNAME`** (pas de force-push sur `main`) : il est géré par les réglages GitHub Pages, et le perdre décroche le domaine custom et casse le certificat HTTPS.

**Historique certificat (21/08/2026)** : le certificat de l'apex `pontonniersbex.ch` était bloqué chez GitHub à l'état `authorization_created` depuis le 29/06 (DNS pourtant valide). GitHub indexe les certificats par nom de domaine : retirer/remettre le domaine ne fait que *reprendre* l'enregistrement cassé. La bascule du domaine principal sur `www.pontonniersbex.ch` a créé un enregistrement neuf et débloqué l'émission. Le certificat couvre les deux noms (`www` + apex).

---
Designed by Ruoss! Communication
