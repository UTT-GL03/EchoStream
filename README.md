# EchoStream

---

## Choix du sujet

L’écoute de la musique en streaming représente une activité quotidienne pour **beaucoup d'entre nous**, car elle peut facilement être pratiquée en parallèle d’autres tâches comme le travail ou les trajets quotidiens.  

Au-delà de cet usage personnel, le streaming musical a connu une **adoption massive**. Il est devenu l’un des moyens les plus populaires de consommer de la musique, remplaçant largement les formats physiques et offrant une **accessibilité mondiale**.

---

## Utilité sociale

La musique en streaming joue un rôle important sur :  

- **Le plan médico-social** :  
  *L’écoute de la musique peut améliorer le bien-être, aider à gérer le stress et l’anxiété, favoriser la motivation, la concentration, et même contribuer à la méditation.* Elle a un **impact positif** sur la santé mentale et émotionnelle. [Article sur l'écoute de la musique](https://www.polycliniquedeloreille.com/conseils-sante/musique-effets-cerveau)

- **Le développement territorial** :  
  *Le streaming permet aux artistes issus de régions éloignées d’atteindre un public mondial.* Cela leur offre des **opportunités sans précédent** pour se faire connaître, dépassant les limites géographiques traditionnelles.

---

## Effets de la numérisation

Un des avantages majeurs du streaming musical pour l'environnement est qu'il a remplacé des technologies plus anciennes comme les **CD** et les **MP3**, qui impliquaient une production physique et donc des émissions de plastique. De plus, il se positionne comme une alternative plus respectueuse de l’environnement aux **festivals ou concerts**, qui génèrent des impacts importants liés aux déplacements.  

Cependant, cette substitution aux pratiques anciennes engendre aussi un **important effet rebond** [(article sur l'impact la numérisation)](https://siecledigital.fr/2019/04/10/une-etude-montre-que-la-musique-en-streaming-a-un-impact-sur-lenvironnement/) :  

- **Accessibilité massive** : Avec l'accès facile à des millions de titres, la consommation de musique a fortement augmenté.  
- **Impact économique** : Là où, en 2016, un album CD coûtait environ *15 euros*, aujourd’hui, pour ce même montant, il est possible d’avoir accès à des **millions de titres** pendant un mois via une plateforme de streaming.  

### Questions à se poser :
- *Le streaming peut-il encourager la surconsommation de musique, car on peut désormais écouter des morceaux partout et à tout moment ?*  
- *Les fonctionnalités des plateformes (stories des artistes, playlists personnalisées) sont-elles vraiment utiles ou encouragent-elles une écoute toujours plus diversifiée, mais aussi plus gourmande en ressources ?*  

[**Analyse du leader du marché : spotify**](https://quentinballereau.medium.com/analyse-de-lenvironnement-digital-de-spotify-71764093d361)

---

## Scénario 1 : "Lancer une musique recommandée"

1. **L'utilisateur** se rend sur un site web de streaming en ligne.  
2. Il accepte les cookies.  
3. Il lance la première musique qui lui est proposée.  
4. Il regarde les autres musiques proposées sur la page d'accueil, mais rien ne l'intéresse. Il stoppe donc sa navigation.  

---

## Scénario 2 : "Rechercher une musique spécifique"

1. **L'utilisateur** se rend sur un site web de streaming en ligne.  
2. Il accepte les cookies.  
3. Il recherche une musique.  
4. Il lance la musique trouvée.  

### Résultats :
Les résultats des plateformes :  
- [Deezer](https://www.deezer.com/) et [MusicMe](https://www.musicme.com/) : [Scénario 1 : "Lancer une musique recommandée"](https://utt-gl03.github.io/EchoStream/benchmarks/scenario1/benchmark.html).  
- **Spotify** : Les résultats diffèrent en raison de la structure de la page et nécessitent l'utilisation de l'extension Chrome GreenIT.  

---

## Scénario : Streaming d'une musique

Malheureusement, l’outil **GreenIT** mesure uniquement à un **instant T**. Pour évaluer l'impact du streaming sur toute la durée d'écoute, une analyse manuelle via l’outil de débogage réseau est nécessaire.  

- **Spotify** : Requête de **325 Ko toutes les 10 secondes**, soit 5 850 Ko pour une chanson de 3 minutes.  
- **Deezer** : Requête de **278 octets toutes les 30 secondes**, soit 1,390 Ko pour une chanson de 3 minutes.  
- **MusicMe** : Requête de **413 octets toutes les 30 secondes**, soit 2,065 Ko pour une chanson de 3 minutes.  

---

## Maquette de l'interface et échantillon de données

Lors des scénarios, nous avons constaté qu'avoir des playlists personnalisées était une des fonctionnalités particulièrement gourmandes. Nous avons donc opté pour un prototype basé uniquement sur des genres de musiques choisis par l'utilisateur, tout en gardant l'usabilité d’un site de streaming.  

![Mockup](frontend/mockup.png)
_Fig.1 : Mockup de notre application._

> **Liens utiles :**  
> - [Pixabay](https://pixabay.com/) : Base de données pour les URL audio.  
> - [Lucid React](https://react-lucid.hubspotdev.com/) : Librairie utilisée pour le design et les contrôles média.  

---

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour le premier prototype :  
- La base de données est **statique** et incluse dans le frontend. [voir modèle de données](https://github.com/UTT-GL03/EchoStream/blob/main/frontend/sample_data.hbs)
- Les fonctionnalités implémentées se limitent au scénario 1 (*Rechercher une musique et l’écouter*).  

![Capture d'écran](https://github.com/user-attachments/assets/0fb92cfe-7919-4a54-9d5e-01a32880ede8)  
_Fig.2 : Prototype de la page de recherche._

> **Lien utile :** [Dummy JSON pour générer des données aléatoires](https://dummy-json.com/)

---

## Prototype n°2 : Chargement dynamique des données

- Les données sont désormais **chargées dynamiquement** par le frontend.  
- Une requête supplémentaire est effectuée par page consultée.  

[Scénario 2 : "Rechercher une musique spécifique"](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2/EchoStream.html)

---


## Prototype n°2 : Fonctionnalités pour le scénario prioritaire avec données statiques chargées de manière dynamique

Dans cette seconde version du prototype, les données sont désormais chargées dynamiquement par le frontend.  
En utilisant le même scénario qu'avec la première version du prototype, nous n'avons qu'une seule requête supplémentaire par page consultée.

[Scénario 2 : "Rechercher une musique spécifique"](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2/EchoStream.html)

### Optimisation du nombre de requêtes

Nous nous sommes rendus compte qu'une requête était faite pour chaque musique lorsque nous chargions la page pour charger le fichier MP3.  
Nous avons donc modifié notre application pour **ne charger le fichier MP3 que lorsque nous lançons la musique**. Nous perdons quelques informations non nécessaires comme la durée de la musique, mais nous gagnons un nombre important de requêtes.

[Scénario 2 : "Rechercher une musique spécifique"](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2_optiRequetes/EchoStream.html)

### Changement de l'outil d'analyse

Après avoir discuté de la méthode de calcul qu'utilise GreenIT, nous nous sommes demandés si cette manière de calculer était vraiment pertinente ? En résumé, GreenIT vise à calculer l'impact global de l'utilisation d'un site internet, que ce soit l'impact de l'achat ou la production du téléphone utilisé, l'alimentation des serveurs, la construction du réseau, etc.  

Au final, même si l'outil est pratique et permet de se rendre compte des impacts des utilisations de la technologie, il ne nous aide pas vraiment à voir l'impact strictement lié à l'utilisation de notre site.  
On utilisera donc **GreenFrame**, un outil qui permet de calculer uniquement l'impact énergétique lié à l'utilisation de notre application web.

On veut donc re-créer un échantillon d'analyse des sites concurrents pour pouvoir comparer ce qui est comparable avec le nouvel outil. Voici les résultats de l'analyse simple de la première page du site :

![Capture d'écran 2024-11-12 163127](https://github.com/user-attachments/assets/3124cedc-2501-43fb-b5a7-0279412c784c)  
_Fig.3: Résultat de Spotify_

![Capture d'écran 2024-11-12 163520](https://github.com/user-attachments/assets/7ab482d9-83b9-4aa2-aaa5-be6c9949967b)  
_Fig.4: Résultat de Deezer_

![Capture d'écran 2024-11-12 163624](https://github.com/user-attachments/assets/53d6db26-01d5-463a-8512-6e96722bcac7)  
_Fig.5: Résultat de MusicMe_ 

Nous faisons ensuite les modifications pour faire les tests à chaque push dans notre projet GreenFrame. On peut voir des résultats qui nous disent que notre site consomme très peu de ressources, essentiellement du temps d'écran. La seule fonctionnalité gourmande est celle de la recherche donc très peu de CPU utilisé. Ce sont donc des résultats très concluants par rapport aux concurrents.

![Capture d'écran 2024-11-12 174747](https://github.com/user-attachments/assets/21d6b884-99e8-41fb-90a7-4bff0ccf34d5)  
_Fig.6: Résultat de notre prototype V.2_

Nous avons ensuite mesuré l'impact de la partie serveur de notre prototype. On peut voir qu'il est insignifiant. Effectivement, nous n'avons pas de streaming, ni de transformations ou calcul à faire dans le serveur, qui ne fait que relayer les données qui sont stockées. Logiquement, le seul pic de consommation est au lancement du site.

![Capture d'écran 2024-11-12 175123](https://github.com/user-attachments/assets/02277dd5-2ba6-450d-9293-dfeb058f94f8)  
_Fig.7: Résultat de notre prototype V.2 côté serveur_

---

## Prototype n°3 : Fonctionnalités pour le scénario prioritaire avec données stockées dans une base de données

Pour la V3 de notre prototype, nous voulons que les données soient stockées dans une base de données en ligne (**CouchDB**).  
L'intérêt d'une base de données dynamique est de pouvoir rajouter facilement des musiques. On pourrait même imaginer, comme on le voulait, un formulaire pour que les gens rajoutent eux-mêmes leur musique dans l'application.

![Capture d'écran 2024-11-19 171407](https://github.com/user-attachments/assets/fc2ecb9b-3c1b-48cd-a62f-1187cb111d90)  
_Fig.8: Résultat de notre prototype V.2_

![image](https://github.com/user-attachments/assets/51b8db95-6d01-458f-936b-7d6fa91f767d)  
_Fig.9: Résultat de notre prototype V.3_

On n'observe pas de différence dans l'utilisation du réseau via notre scénario GreenFrame. Cela est dû au fait que, dans notre scénario principal, nous récupérons toutes les musiques. Cependant, pour de futurs scénarios, cette base de données nous permettra de faire des requêtes spécifiques (par exemple, pour ne demander qu'une seule musique ou un seul style de musique) et ainsi de réduire le réseau utilisé.  

On remarque cependant une augmentation de l'usage du CPU liée au fonctionnement de la base de données sur un Docker. Cette modification de notre prototype a l'air, à priori, néfaste écologiquement mais deviendra à l'avenir une meilleure solution.

![Capture d'écran 2024-11-19 171624](https://github.com/user-attachments/assets/db711e7e-821d-4585-abb2-68c6014e8aac)  
_Fig.10: Résultat de notre prototype V.3 côté backend_


---

## Prototype n°4 : Fonctionnalités pour le scénario prioritaire avec filtrage des données

### 📈 Passage à l'échelle

Dans le cas d'une application de streaming de musique, **l'augmentation des données** se traduit par une augmentation du nombre de musiques.  
- Le poids des musiques ne change pas, mais leur volume total augmente.  
- Il est nécessaire d'avoir une grande base de données pour offrir une liberté de choix compétitive.  

Cependant, ce marché étant en pleine expansion, **la gestion des données ne sera pas linéaire dans les prochaines années**.

---

### 📉 Évolution de l'impact environnemental avant correction

La figure ci-dessous illustre **l'impact du passage de 10 musiques à 1 000 musiques** (multiplié par 100 de manière arbitraire) :  
- **Temps d’écran** : Augmentation importante due à l'affichage de toutes les musiques sur la page d'accueil.  
- **Consommation réseau et CPU** : Hausse significative liée au traitement des données supplémentaires.

![Capture d'écran 2024-11-26 154741](https://github.com/user-attachments/assets/e88237fa-1035-47ad-a730-3701d14fab9f)  
_Fig.11 : Évolution de l'impact de la consultation de la page d'accueil en passant de 10 musiques à 1 000 musiques._

---

### ✅ Prise en compte du passage à l'échelle

Pour résoudre ce problème, nous avons décidé de **filtrer les musiques affichées sur la page d'accueil**.  
- Les musiques sont triées **par date de sortie**, et seules les plus récentes sont affichées à l’utilisateur.  
- La base de données a été indexée en fonction de l’attribut `release_date` pour optimiser cette requête.  

---

### 🌍 Évolution de l'impact environnemental après correction

Les résultats montrent des **effets positifs significatifs** après la correction :  
- La version corrigée est légèrement plus gourmande qu'avant, car **100 musiques sont affichées au lieu de 10**.  
- Cependant, nous avons bien **1 000 musiques** dans la base de données, prêtes à être utilisées pour de futurs scénarios.  

![Capture d'écran 2024-11-26 171712](https://github.com/user-attachments/assets/1a25ffab-8b4f-470e-9e76-fc9a650d8e80)  
_Fig.12 : Évolution de l'impact de notre application au cours des dernières versions._

En observant de plus près :  
- **Consommation écran** : Réduction importante grâce au filtrage des musiques.  
- **Accès à la base de données** : Optimisé grâce à l'indexation, réduisant les ressources nécessaires.  
- **Consommation réseau** : Réduction notable avec seulement 100 musiques affichées.  

![Capture d'écran 2024-11-26 172301](https://github.com/user-attachments/assets/f49948d3-9dfd-4c54-bad0-8a36616e866c)  
_Fig.13 : Impact de la page d'accueil avec les 100 musiques les plus récentes affichées._


## Prototype n°5 : Évolution de notre fonction recherche

### **Changement dans la BDD**

Au cours de notre dernier prototype, où nous avons augmenté la taille de notre BDD, nous avons rencontré un problème.  
**Avant le changement** :  
- Nous affichions **toute la BDD** sur notre page d'accueil et avions une fonction de recherche sur les titres affichés.  
- Avec l'augmentation du nombre de titres, il n’était plus possible d’afficher toute la BDD, car cela avait un **impact très négatif**.  
- Par conséquent, la recherche ne fonctionnait que sur les **100 titres les plus récents affichés**, et non pas sur toute la BDD.

**Solution mise en place** :  
- Lorsque l'utilisateur écrit quelque chose dans la barre de recherche, l'application envoie une **requête spécifique à la base de données** pour trouver les titres correspondant au **préfixe** recherché.  
- Un **nouvel index** a été créé sur l’attribut **"title"** pour optimiser cette recherche.  
- Si la barre de recherche est vide, la requête utilise un tri par date grâce à l'index **by_date**. Sinon, l’index **by_title** est utilisé.  

**Avantage** :  
- En maintenant un tri avec un index simple (plutôt qu’un double index), nous avons un **meilleur impact écologique**.  
- Lors du premier chargement de la page, l’utilisateur voit les **titres les plus récents**.  
- Lorsqu’il effectue une recherche, il obtient des résultats précis, et **la date des titres devient secondaire**.

**Résultats** :  
Après analyse, les résultats se sont logiquement améliorés :  
- Le nombre de musiques affichées à l’accueil est passé de **100 à 20**, tout en permettant un accès à **1000 musiques via la recherche**.

![Capture d'écran 2024-12-03 161220](https://github.com/user-attachments/assets/ef603576-261f-4c29-b36c-8ca9d9eec102)  
_Fig.14 : Impact de la page d'accueil avec la nouvelle fonction de recherche._

---

### **Changement de l'algorithme et analyse Green IT**

Notre algorithme actuel effectuait une recherche à chaque fois qu’un caractère était tapé dans la barre de recherche, ce qui générait **beaucoup de requêtes inutiles**.  

**Amélioration apportée** :  
- La recherche n'est déclenchée que lorsque l'utilisateur appuie sur la touche **"Entrée"**.  

**Mesure de l'impact** :  
- L’impact de ce changement ne peut pas être mesuré avec **GreenFrame**, nous avons donc utilisé l’extension **GreenIT** pour observer les différences.  

![image](https://github.com/user-attachments/assets/a7f9b2e0-fd63-40a6-8db9-4b63894c413a)  
_Fig.15 : Impact d'une recherche avant changement._  

![image](https://github.com/user-attachments/assets/a982d2a4-9ad0-4e6b-bc9a-e5cafb90bba6)  
_Fig.16 : Impact d'une recherche après changement._

**Observation** :  
- Avec ce nouveau comportement, nous avons une réduction des requêtes envoyées.  
- Par exemple, en tapant **4 caractères**, nous effectuons **1 seule requête** au lieu de **4 requêtes**, ce qui représente un **gain de 3 requêtes**.

---

## Prototype n°6 : Ajout de fonctionnalités sur la page d'accueil

### **Proposition d'une musique aléatoire**

**Contexte** :  
Nous souhaitions proposer à l'utilisateur une **musique aléatoire** parmi les titres les plus récents.  

**Mise en place** :  
- Parmi les **20 musiques les plus récentes** retournées par la requête à la BDD, une est sélectionnée aléatoirement et affichée en bas de la page.  

**Objectif** :  
Aider l'utilisateur indécis à découvrir une musique facilement.  

**Impact** :  
- Les résultats GreenFrame montrent que cette fonctionnalité a **un impact négligeable** par rapport à la version précédente.

![greenframe ajout de musique aléatoire](https://github.com/user-attachments/assets/d4b8adff-4d28-4bb3-9a2e-e0d3eadb4172)  
_Fig.17 : Impact GreenFrame de la page d'accueil avec proposition d'une musique aléatoire._

---

### **Groupement des musiques par genre**

**Contexte** :  
Actuellement, les musiques sont triées uniquement par **date de sortie**.  

**Amélioration apportée** :  
- Les musiques sont désormais **groupées par genre** pour aider l’utilisateur à mieux se repérer.  
- L'indexation par genre dans la BDD s’est avérée trop coûteuse en termes d’impact, nous avons donc opté pour un **groupement côté frontend** après le tri par date et titre avec **Mango**.  

**Résultat** :  
- Cette méthode présente un **impact écologique acceptable**, bien que visible.  

![greenframe groupement par genre](https://github.com/user-attachments/assets/93f1766e-bba2-4d62-8123-221f2c56add3)  
_Fig.18 : Impact GreenFrame de la page d'accueil après groupement par genre._

---

## Prototype n°7 : Ajout d'une deuxième page comme prévu dans le mock-up

### **Description de la nouvelle page**

**Objectif** :  
Cette page permet à l'utilisateur d’écouter des musiques d’un genre sélectionné, tout en limitant l’**effet rebond** discuté en début de projet.  

**Contenu de la page** :  
- Une liste des **musiques liées au genre sélectionné**.  
- Une liste des **artistes associés à ce genre**.  

### **Implémentation technique**

1. **Refactorisation du code** :  
   - Le code a été décomposé en plusieurs composants réutilisables pour simplifier les futures évolutions.  

2. **Gestion de plusieurs pages** :  
   - Utilisation de **React Router** pour passer d'une page à l'autre.  

3. **Indexation des données** :  
   - Un nouvel index a été ajouté sur les genres, car la fonction de recherche n’est pas présente sur cette page.  

**Résultats GreenFrame** :  
- Le score général du site a presque doublé, mais cela s’explique par l’ajout d’un **nouveau scénario**.  
- En réalité, la nouvelle page a un impact similaire, voire légèrement inférieur à la page principale.

![Capture d'écran 2024-12-10 172059](https://github.com/user-attachments/assets/9f2c5a37-1d02-4c30-bfa6-f7e0de951254)  
_Fig.19 : Impact GreenFrame de la page principale après modifications._

![Capture d'écran 2024-12-10 172051](https://github.com/user-attachments/assets/ae4c7661-c0ad-4a0a-b05f-f4b44bbc64fe)  
_Fig.20 : Impact GreenFrame de la page pour une catégorie._

---

## Prototype n°8 : Fonctionnalités mineures et refactor

### **Suppression d'un attribut dans la base de données**

**Contexte** :  
Un attribut inutile, **"duration"**, était présent dans nos données, bien que cette information soit déjà contenue dans les fichiers MP3.  

**Action** :  
- Suppression de cet attribut, réduisant la **taille des données transmises** lors des requêtes.  

**Résultat** :  
- L’impact sur la consommation CPU est légèrement réduit.

![image](https://github.com/user-attachments/assets/54629036-8b7c-41ff-aead-d34c5729ad08)  
_Fig.21 : Impact GreenFrame après suppression de l'attribut "duration."_

---

### **Correction du bouton "mute"**

**Problème** :  
Le bouton "mute" ne fonctionnait qu’après le chargement complet de la musique.  

**Solution** :  
- Correction de ce bug, sans impact mesurable sur GreenFrame.

---

### **Changement de la page catégorie**

**Problème initial** :  
- Afficher toutes les musiques d’un genre sur une page consommait trop de ressources (écran et réseau).  

**Solution** :  
- La page affiche désormais les **10 premières musiques** et leurs artistes associés.  
- Une fonctionnalité permet de charger davantage de musiques grâce à l’utilisation du **"bookmark"** de CouchDB, évitant des requêtes globales inefficaces.

**Impact** : 
On ne constate pas d'impact direct sur greenFrame puisque de base on avait paramétré la requete pour ne prendre que 10 musiques et les artistes liées, or maintenant quand on charge la page on n'afiche encore que 10 musiques et les artisrtes liées, or maintenant on peut accèder à **toute la base de donnée** de manière **efficiente** et **sur demande** de l'utilisateur pour convenir à ses besoins. Etant donnée que les scénarios greenframe ne sont pas assez poussé on ne voit **pas de changement**.

## Conclusion

La conception d'applications web durables repose sur plusieurs bonnes pratiques que nous avons mises en place dans le projet EchoStream.  
Tout d'abord nous avons **analyser** les problèmes de nos concurrents afin de ne pas répéter les mêmes erreurs et éviter les fonctionnalités ayant le plus fort impact. Nous avons **minimiser les ressources chargées** dans notre application pour ne charger une musique que lorsqu'elle est écoutée. Sur le même principe, la **pagination** est très importante afin de ne récupérer qu'une partie des données de la base et limiter l'utilisation du réseau et du CPU. Il est également important **d'optimiser ses requêtes** en utilisant notamment des index appropriés (c'est ce que nous avons fait avec `release_date` et `title`). Enfin, la **suppression des fonctionnalités non essentielles** permet de se concentrer sur ce qui est vraiment utile pour l'utilisateur et évite un impact négatif inutile.

Avec le projet EchoStream, nous retenons que des applications performantes peuvent être réalisées sans sacrifier l'**éco-responsabilité**, en privilégiant des fonctionnalités réellement utiles et la gestion judicieuse des ressources.
