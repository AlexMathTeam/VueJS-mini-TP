# VueJS-mini-TP

## Résumé:
Le but de ce projet est de proposer une application web permettant aux utilisateurs de chercher et créer des restaurants enregistrer dans une base de donnée.
Il se base sur les TP 1, 2 et 3 en cours de Javascript et HTML 5 de Monsieur Buffa.

## Client

### Technologie
- Javascript
- Framework VueJS
- VueRouter
- VueX

### NPM Package:
- [Vuetify](https://vuetifyjs.com): Librairie UI pour VueJS;
- [Vue Leaflet](https://vue2-leaflet.netlify.app): Librairie UI/UX pour la création de carte et manipulation de carte (la carte d'OpenStreetMap a était utiisé);

### API:
- [Lorem Picsum](https://picsum.photos): est une API permettant d'obtenir des images de manière aléatoire.

## Serveur

### Technologie
- Javascript
- NodeJS

### NPM Package:
- [nominatim-geocoder](https://www.npmjs.com/package/nominatim-geocoder): Librairie permettant d'utiliser l'[API Nomination](https://nominatim.org) qui permet de d'obtenir des informations au tour des coordonnées et adresse.
- [mongodb](https://www.npmjs.com/package/mongodb): Pilote permettant que communiquer et d'échanger avec une base de donnée MongoDB.


## Lancer l'application web



## Accueil
- L'acceuil possède 1 barre de recherche. Dans le chargement de la page, on y voit la premiere barre de recherche qui se situe au milieu de l'écran. Ensuite, lorsqu’on descend la page celle-ci disparait pour laisser place a la barre de recherche dans le menu. 
En cherchant un mot dans la barre de recherche, celle-ci nous ramène automatiquement sur la page Restaurants. Cela permet de trouver le ou les restaurants souhaités..

- Dans l’accueil nous trouvons également des fonctionnalités telles que des images de restaurants, les noms ainsi que les types de cuisines. Les restaurants défilent de manière aléatoire. Lorsqu’on en sélectionne un, cela nous ramène automatiquement sur la fiche détaillée de ce restaurant.


## Ajout Restaurant
- Dans la page ajouter, on y trouve un formulaire demandant des informations précises sur le restaurant auprès du restaurateur afin de permettre  l'enregistrement de celui ci sur le site. Dans le formulaire on y retrouve: le nom, la cuisine, la ville et l'adresse. Lorsque l'utilisateur clique sur Valider, la page fait appel au serveur pour enregistrer le restaurant dans la base de donnée. 
Lors de l'ajout du restaurant, le serveur fait appel à l'[API Nomination](https://nominatim.org) qui récupere alors l'adresse du restaurant et retourne la position GPS du restaurant.

## Autour de vous
- La page affiche en plein écran une map qui se concentre automatiquement sur la position de l'utilisateur. Sur cette carte, nous avons décidé d’afficher 1000 restaurants car en charger plus prendrait trop de temps. Il est possible cliquer sur tout les points de localisation représentant les restaurants afin d’être rediriger sur le fiche détail du restaurant. Nous avons utilisé la librairie [Vue Leaflet](https://vue2-leaflet.netlify.app)
