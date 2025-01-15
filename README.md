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
2. Il lance la première musique qui lui est proposée.  
3. Il regarde les autres musiques proposées sur la page d'accueil, mais rien ne l'intéresse. Il stoppe donc sa navigation.  

---

## Scénario 2 : "Rechercher une musique spécifique"

1. **L'utilisateur** se rend sur un site web de streaming en ligne.
2. Il recherche une musique.
3. Il lance la musique trouvée.

Pour tester les scénarios sur les sites de streaming en ligne. Nous avons dû ajouter une étape "accepter les cookies" dans notre scénario afin de le faire fonctionner.
Nous avons utilisé l'outil **GreenIT** en ligne de commandes pour les services Deezer et MusicMe, qui nous permet de scripter et tester nos scénarios.

### Résultats :
Les résultats des plateformes :  
- [Deezer](https://www.deezer.com/) et [MusicMe](https://www.musicme.com/) : [Scénario 1 : "Lancer une musique recommandée"](https://utt-gl03.github.io/EchoStream/benchmarks/scenario1/benchmark.html).  
- **Spotify** : Les résultats diffèrent en raison de la structure de la page et nécessitent l'utilisation de l'extension Chrome GreenIT.  

---

## Scénario : Streaming d'une musique

Malheureusement, l’outil **GreenIT** mesure uniquement à un **instant T**. Pour évaluer l'impact du streaming sur toute la durée d'écoute, une analyse manuelle via l’outil de débogage réseau est nécessaire.  
Dans certains cas, selon le service et la durée de la musique, le fichier audio est directement chargé entièrement, et il n'y a donc pas toujours de streaming à proprement parlé. Dans d'autres cas, le service va effectuer plusieurs requêtes pour récupérer le son par morceaux.

- **Spotify** : Requêtes de **325 Ko toutes les 10 secondes**, soit 5 850 Ko pour une chanson de 3 minutes.  
- **Deezer** : Requête de **278 octets toutes les 30 secondes**, soit 1,390 Ko pour une chanson de 3 minutes.  
- **MusicMe** : Requête de **413 octets toutes les 30 secondes**, soit 2,065 Ko pour une chanson de 3 minutes.  

---

## Maquette de l'interface et échantillon de données

Lors des scénarios, nous avons constaté qu'avoir des playlists personnalisées était une des fonctionnalités particulièrement gourmandes. Nous avons donc opté pour un prototype basé uniquement sur des genres de musiques choisies par l'utilisateur, tout en gardant l'usabilité d’un site de streaming.  

Nous avons retenu deux pages type pour notre application, nous avons ainsi réalisé les maquettes de :
- la page des playlists par genre,
- la page d'une playlist (avec les musiques dedans et les artistes de ce genre).

![Mockup](frontend/mockup.png)
_Fig.1 : Mockup de notre application._ 

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec dummy-json). Ces données sont générées aléatoirement et permettent d'identifier une musique, cepandant on ne peut pas générer un fichier audio donc on utilise un URL qui vient de la base de données Pixabay (voir [modele de données](frontend/sample_data.hbs)).

> **Liens utiles :**  
> - [Pixabay](https://pixabay.com/) : Base de données pour les URL audio.  
> - [Lucid React](https://react-lucid.hubspotdev.com/) : Librairie utilisée pour le design et les contrôles média. 

---

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour le premier prototype :  
- La base de données est **statique** et incluse dans le frontend. [voir modèle de données](https://github.com/UTT-GL03/EchoStream/blob/main/frontend/sample_data.hbs)
- Les fonctionnalités implémentées se limitent au scénario 1 (*Rechercher une musique et l’écouter*).

Ce scénario nécéssite de pouvoir rechercher parmi une liste de musiques et de l'écouter.
Nous avons développé une page avec une barre de recherche et la liste des musiques.

![Capture d'écran](https://github.com/user-attachments/assets/0fb92cfe-7919-4a54-9d5e-01a32880ede8)  
_Fig.2 : Prototype de la page de recherche._

> **Lien utile :** [Dummy JSON pour générer des données aléatoires](https://dummy-json.com/)

Nous avons choisi d'utiliser la librairie lucid-react essentiellement pour les composants graphiques que cette dernière propose pour les contrôleurs de média. Nous utilisons aussi tailwind.css pour le style général de la page pour générer du css personnalisé. Nous pensons en effet que travailler l'interface utilisateur d'un service de streaming est essentiel pour s'assurer que le client apprécie son utilisation et revienne plus tard. On a donc voulu voir quel était l'impact d'utiliser ces librairies plutôt que les balises <audio> ou <media> de html.

Nous avons donc ici mesurer l'impact général de la page et donc de nos choix de framework, utiliser react et les librairies pour gagner du temps sur les fonctionnalités et l'esthéthisme font que cela peut manquer d'optimisation.

Pour cette mesure, nous avons utilisé l'extension chrome de GreenIT pour voir de manière très simple l'impact de nos choix en mesurant :
- la version de développement et de production du site web avec l'utilisation des balises html par défaut,
- les mêmes versions avec l'utilisation de lucid-react pour les élèments de contrôle de média et pour la barre de recherche.

![Capture d'écran 2024-10-29 172507](https://github.com/user-attachments/assets/72af5e44-4452-4b2b-a514-3b0860a3eb63)  
_Fig.3: Résultat des 4 tests_

Sur cette image nous avons les résultats dans l'ordre :
- de la version de production **sans** lucid-react,
- de la version de développement **sans** lucid-react,
- de la version de production **avec** lucid-react,
- de la version de développement **avec** lucid-react.

Ce qu'on lit de ces résultats c'est que les versions de développement du site web ont déjà un impact significatif. On remarque qu'utiliser des librairies pour le design uniquement a un impact asses significatif (environ 20% de différence).

Cependant une fois compilée la page est déjà beaucoup plus moderée et en plus la différence entre les deux versions ne se voit quasiment pas. On peut donc se dire que cela ne change pas grand chose avec la librairie lucid-react d'utiliser des fonctions importées pour gérer des élements de designs. 

Au final on ne connait pas encore toutes les fonctionnalités qu'on utilisera ou n'utilisera pas pour finir le projet mais on peut se dire qu'on peut se sentir libre d'utiliser ou non cette librairie comme on veut car l'impact sera dérisoire.

---

### Execution du scénario principal

Nous pouvons donc éxecuter notre scénario principal et voir l'impact de l'utilisation de notre site comparé à nos concurrents. 

[Scénario 2 : "Rechercher une musique spécifique" - 1ère itération](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/scenario2/EchoStream.html)

---


## Prototype n°2 : Fonctionnalités pour le scénario prioritaire avec données statiques chargées de manière dynamique

### Chargement dynamique des données

Dans cette seconde version du prototype, les données sont désormais chargées dynamiquement par le frontend.  
En utilisant le même scénario qu'avec la première version du prototype, nous n'avons qu'une seule requête supplémentaire par page consultée.

[Scénario 2 : "Rechercher une musique spécifique" - 2ème itération](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2/EchoStream.html)

### Optimisation du nombre de requêtes

Nous nous sommes rendus compte qu'une requête était faite pour chaque musique lorsque nous chargions la page pour charger le fichier MP3.  
Nous avons donc modifié notre application pour **ne charger le fichier MP3 que lorsque nous lançons la musique**. Nous perdons quelques informations non nécessaires comme la durée de la musique, mais le nombre de requêtes a fortement diminué, ce qui très positif.

[Scénario 2 : "Rechercher une musique spécifique" - 3ème itération](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2_optiRequetes/EchoStream.html)

### Changement de l'outil d'analyse

Après avoir discuté de la méthode de calcul qu'utilise GreenIT, nous avons décidé d'utilisé une autre méthode afin de calculer l'impact de notre application. En effet GreenIT vise à calculer l'impact global de l'utilisation d'un site internet, que ce soit l'impact de l'achat ou la production du téléphone utilisé, l'alimentation des serveurs, la construction duréseau, etc. Cependant dans notre cas nous souhaitons plutôt connaître l'impact strictement lié à l'utilisation de notre site. 
Dans la suite du projet, nous utiliserons donc GreenFrame, un outil qui permet de calculer uniquement l'impact énergétique lié à l'utilisation de notre application web.

On veut donc re-créer un échantillon d'analyse des sites concurrents pour pouvoir comparer ce qui est comparable avec le nouvel outil, voici les résultats de l'analyse simple de la première page du site :

![Capture d'écran 2024-11-12 163127](https://github.com/user-attachments/assets/3124cedc-2501-43fb-b5a7-0279412c784c)  
_Fig.4: Résultat de Spotify_

![Capture d'écran 2024-11-12 163520](https://github.com/user-attachments/assets/7ab482d9-83b9-4aa2-aaa5-be6c9949967b)  
_Fig.5: Résultat de Deezer_

![Capture d'écran 2024-11-12 163624](https://github.com/user-attachments/assets/53d6db26-01d5-463a-8512-6e96722bcac7)  
_Fig.6: Résultat de MusicMe_ 

On remarque ici une consommation très élevée au niveau du CPU, du réseau et de l'écran. Cependant, les impacts de la mémoire et du disque sont quasiment nuls.

On fait ensuite les modifications pour faire les tests de GreenFrame automatiquement à chaque fois que l'on modifie notre dépôt de projet GitHub. On peut voir des résultats qui nous disent que notre site consomme très peu de ressource, essentiellement du temps d'écran, la seule fonctionnalité qui a un impact significatif est celle de la recherche donc très peu de CPU utilisé. Ce sont donc des résultats très concluants par rapport aux concurrents.

Ce qui fait que nos résultats sont bien meilleurs est le fait que nous nous sommes concentrés sur la fonctionnalité essentielle de l'écoute de la musique, et non sur des fonctionnalités superflues. En réalité presque la totalité de notre impact vient de l'écran. On se rend donc ici bien compte que l'affichage des informations est la première barrière à une application écologique.

![Capture d'écran 2024-11-12 174747](https://github.com/user-attachments/assets/21d6b884-99e8-41fb-90a7-4bff0ccf34d5)  
_Fig.7: Résultat de notre prototype V.2_

Nous avons ensuite mesuré l'impact de la partie serveur de notre prototype. On peut voir qu'il est insignifant. En effet cela est en partie dû au fait que nous avons décider de charger directement le fichier mp3 au complet. Bien qu'avoir un système de streaming permet de limiter l'impact, ce n'est pas pour les fichiers audio que cela est le plus impactant car un fichier audio n'est pas particulièrement volumineux (contrairement à un film par exemple). L'essentiel est surtout de ne pas charger le fichier tant que le musique n'est pas lue. Nous n'avons pas non plus de transformations ou calcul à faire dans le serveur qui ne fait que relayer les données qui sont stockées. Donc logiquement le seul pic de consommation est au lancement du site.

![Capture d'écran 2024-11-12 175123](https://github.com/user-attachments/assets/02277dd5-2ba6-450d-9293-dfeb058f94f8)  
_Fig.8: Résultat de notre prototype V.2 côté serveur_

---

## Prototype n°3 : Fonctionnalités pour le scénario prioritaire avec données stockées dans une base de données

Pour la V3 de notre prototype, nous voulons que les données soient stockées dans une base de données en ligne (**CouchDB**).  
L'intérêt d'une base de données dynamique est de pouvoir rajouter facilement des musiques. On pourrait même imaginer, comme on le voulait, un formulaire pour que les gens rajoutent eux-mêmes leur musique dans l'application.

![Capture d'écran 2024-11-19 171407](https://github.com/user-attachments/assets/fc2ecb9b-3c1b-48cd-a62f-1187cb111d90)  
_Fig.9: Résultat de notre prototype V.2_

![image](https://github.com/user-attachments/assets/51b8db95-6d01-458f-936b-7d6fa91f767d)  
_Fig.10: Résultat de notre prototype V.3_

On n'observe pas de différence dans l'utilisation du réseau via notre scénario GreenFrame. Cela est dû au fait que, dans notre scénario principal, nous récupérons toutes les musiques. Cependant, pour de futurs scénarios, cette base de données nous permettra de faire des requêtes spécifiques (par exemple, pour ne demander qu'une seule musique ou un seul style de musique) et ainsi de réduire le réseau utilisé.  

On remarque cependant une augmentation de l'usage du CPU liée au fonctionnement de la base de données sur un Docker. Cette modification de notre prototype a l'air, à priori, néfaste écologiquement mais deviendra à l'avenir une meilleure solution.

![Capture d'écran 2024-11-19 171624](https://github.com/user-attachments/assets/db711e7e-821d-4585-abb2-68c6014e8aac)  
_Fig.11: Résultat de notre prototype V.3 côté backend_


---

## Prototype n°4 : Fonctionnalités pour le scénario prioritaire avec filtrage des données

### 📈 Passage à l'échelle

Dans le cas d'une application de streaming de musique, **l'augmentation des données** se traduit par une augmentation du nombre de musiques. Le poids des musiques ne change pas, mais leur volume total augmente. Il est nécessaire d'avoir une grande base de données pour offrir une liberté de choix compétitive.  

Cependant, ce marché étant en pleine expansion, **la gestion des données ne sera pas linéaire dans les prochaines années**.

---

### 📉 Évolution de l'impact environnemental avant correction

La figure ci-dessous illustre **l'impact du passage de 10 musiques à 1 000 musiques** (multiplié par 100 de manière arbitraire).  
Dans un premier temps, au niveau du **Temps d’écran**, l'augmentation importante due à l'affichage de toutes les musiques sur la page d'accueil.  
Pour la **Consommation réseau et CPU**, il y a une hausse significative liée au traitement des données supplémentaires.

![Capture d'écran 2024-11-26 154741](https://github.com/user-attachments/assets/e88237fa-1035-47ad-a730-3701d14fab9f)  
_Fig.12 : Évolution de l'impact de la consultation de la page d'accueil en passant de 10 musiques à 1 000 musiques._

---

### ✅ Prise en compte du passage à l'échelle

Pour résoudre ce problème, nous avons décidé de **filtrer les musiques affichées sur la page d'accueil** en
- triant les musiques **par date de sortie**, et seules les plus récentes sont affichées à l’utilisateur,
- indexant la base de données en fonction de l’attribut `release_date` pour optimiser cette requête.  

---

### 🌍 Évolution de l'impact environnemental après correction

Les résultats montrent des **effets positifs significatifs** après la correction :  
- La version corrigée est légèrement plus gourmande qu'avant, car **100 musiques sont affichées au lieu de 10**.  
- Cependant, nous avons bien **1 000 musiques** dans la base de données, prêtes à être utilisées pour de futurs scénarios.

Dans les prochaines versions nous améliorerons notre application pour pouvoir accéder aux 1000 musiques sans pour autant les afficher (notamment en améliorant notre outil de recherche).

![Capture d'écran 2024-11-26 171712](https://github.com/user-attachments/assets/1a25ffab-8b4f-470e-9e76-fc9a650d8e80)  
_Fig.13 : Évolution de l'impact de notre application au cours des dernières versions._

En observant de plus près :  
- la **consommation écran** a une réduction importante grâce au filtrage des musiques,
- l'**accès à la base de données** est optimisé grâce à l'indexation, réduisant les ressources nécessaires,
- la *consommation réseau** est réduite avec seulement 100 musiques affichées.  

![Capture d'écran 2024-11-26 172301](https://github.com/user-attachments/assets/f49948d3-9dfd-4c54-bad0-8a36616e866c)  
_Fig.14 : Impact de la page d'accueil avec les 100 musiques les plus récentes affichées._


## Prototype n°5 : Évolution de notre fonction recherche

### **Changement dans la BDD**

Au cours de notre dernier prototype, où nous avons augmenté la taille de notre BDD, nous avons rencontré un problème.  
**Avant le changement** nous affichions **toute la BDD** sur notre page d'accueil et avions une fonction de recherche sur les titres affichés. Avec l'augmentation du nombre de titres, il n’était plus possible d’afficher toute la BDD, car cela avait un **impact très négatif**. Par conséquent, la recherche ne fonctionnait que sur les **100 titres les plus récents affichés**, et non pas sur toute la BDD.

La **Solution mise en place** : Lorsque l'utilisateur écrit quelque chose dans la barre de recherche, l'application envoie une **requête spécifique à la base de données** pour trouver les titres correspondant au **préfixe** recherché. Un **nouvel index** a été créé sur l’attribut **"title"** pour optimiser cette recherche. Si la barre de recherche est vide, la requête utilise un tri par date grâce à l'index **by_date**. Sinon, l’index **by_title** est utilisé.  

Les **Avantages** de cette démarche sont que :  
- avec un index simple (plutôt qu’un double index), nous avons un **meilleur impact écologique**,
- lors du premier chargement de la page, l’utilisateur voit les **titres les plus récents**, 
- lorsqu’il effectue une recherche, il obtient des résultats précis, et **la date des titres devient secondaire**.

**Résultats** :  
Après analyse, les résultats se sont logiquement améliorés. Le nombre de musiques affichées à l’accueil est passé de **100 à 20**, tout en permettant un accès à **1000 musiques via la recherche**.

![Capture d'écran 2024-12-03 161220](https://github.com/user-attachments/assets/ef603576-261f-4c29-b36c-8ca9d9eec102)  
_Fig.15 : Impact de la page d'accueil avec la nouvelle fonction de recherche._

---

### **Changement de l'algorithme et analyse Green IT**

Notre algorithme actuel effectuait une recherche à chaque fois qu’un caractère était tapé dans la barre de recherche, ce qui générait **beaucoup de requêtes inutiles**.  

**Amélioration apportée** :  
- La recherche n'est déclenchée que lorsque l'utilisateur appuie sur la touche **"Entrée"**.  

**Mesure de l'impact** :  
- L’impact de ce changement ne peut pas être mesuré avec **GreenFrame**, nous avons donc utilisé l’extension **GreenIT** pour observer les différences.  

![image](https://github.com/user-attachments/assets/a7f9b2e0-fd63-40a6-8db9-4b63894c413a)  
_Fig.16 : Impact d'une recherche avant changement._  

![image](https://github.com/user-attachments/assets/a982d2a4-9ad0-4e6b-bc9a-e5cafb90bba6)  
_Fig.17 : Impact d'une recherche après changement._

**Nous observons** qu'avec ce nouveau comportement, nous avons une réduction des requêtes envoyées. Par exemple, en tapant **4 caractères**, nous effectuons **1 seule requête** au lieu de **4 requêtes**, ce qui représente un **gain de 3 requêtes**.

---

## Prototype n°6 : Ajout de fonctionnalités sur la page d'accueil

### **Proposition d'une musique aléatoire**

**Contexte** :  Nous souhaitions proposer à l'utilisateur une **musique aléatoire** parmi les titres les plus récents.  

**Mise en place** : Parmi les **20 musiques les plus récentes** retournées par la requête à la BDD, une est sélectionnée aléatoirement et affichée en bas de la page.  

**Objectif** : Aider l'utilisateur indécis à découvrir une musique facilement.  

**Impact** : Les résultats GreenFrame montrent que cette fonctionnalité a **un impact négligeable** par rapport à la version précédente.

![greenframe ajout de musique aléatoire](https://github.com/user-attachments/assets/d4b8adff-4d28-4bb3-9a2e-e0d3eadb4172)  
_Fig.18 : Impact GreenFrame de la page d'accueil avec proposition d'une musique aléatoire._

---

### **Groupement des musiques par genre**

**Contexte** : Actuellement, les musiques sont triées uniquement par **date de sortie**.  

**Améliorations apportées** :  
- Les musiques sont désormais **groupées par genre** pour aider l’utilisateur à mieux se repérer.  
- L'indexation par genre dans la BDD s’est avérée trop coûteuse en terme d’impact, nous avons donc opté pour un **groupement côté frontend** après le tri par date et titre avec **Mango**.  

**Résultat** : Cette méthode présente un **impact écologique acceptable**, bien que visible.  

![greenframe groupement par genre](https://github.com/user-attachments/assets/93f1766e-bba2-4d62-8123-221f2c56add3)  
_Fig.19 : Impact GreenFrame de la page d'accueil après groupement par genre._

---

## Prototype n°7 : Ajout d'une deuxième page comme prévu dans le mock-up

### **Description de la nouvelle page**

**Objectif** : Cette page permet à l'utilisateur d’écouter des musiques d’un genre sélectionné, tout en limitant l’**effet rebond** discuté en début de projet.  

**La page contient** :  
- une liste des **musiques liées au genre sélectionné**, 
- une liste des **artistes associés à ce genre**.  

### **Implémentation technique**

1. **Refactorisation du code** : Le code a été décomposé en plusieurs composants réutilisables pour simplifier les futures évolutions.  

2. **Gestion de plusieurs pages** : Utilisation de **React Router** pour passer d'une page à l'autre.  

3. **Indexation des données** : Un nouvel index a été ajouté sur les genres, car la fonction de recherche n’est pas présente sur cette page.  

**Résultats GreenFrame** :  
- Le score général du site a presque doublé, mais cela s’explique par l’ajout d’un **nouveau scénario**.  
- En réalité, la nouvelle page a un impact similaire, voire légèrement inférieur à la page principale.

![Capture d'écran 2024-12-10 172059](https://github.com/user-attachments/assets/9f2c5a37-1d02-4c30-bfa6-f7e0de951254)  
_Fig.20 : Impact GreenFrame de la page principale après modifications._

![Capture d'écran 2024-12-10 172051](https://github.com/user-attachments/assets/ae4c7661-c0ad-4a0a-b05f-f4b44bbc64fe)  
_Fig.21 : Impact GreenFrame de la page pour une catégorie._

---

## Prototype n°8 : Fonctionnalités mineures et refactor

### **Suppression d'un attribut dans la base de données**

**Contexte** :
Un attribut inutile, **"duration"**, était présent dans nos données, bien que cette information soit déjà contenue dans les fichiers MP3.  

**Action** :  
Suppression de cet attribut, réduisant la **taille des données transmises** lors des requêtes.  

**Résultat** : 
L’impact sur la consommation CPU est très légèrement réduit.

![image](https://github.com/user-attachments/assets/54629036-8b7c-41ff-aead-d34c5729ad08)  
_Fig.21 : Impact GreenFrame après suppression de l'attribut "duration."_

---

### **Correction du bouton "mute"**

**Problème** : 
Le bouton "mute" ne fonctionnait qu’après le chargement complet de la musique.  

**Solution** : 
Correction de ce bug, sans impact mesurable sur GreenFrame.

---

### **Changement de la page catégorie**

**Problème initial** : 
Afficher toutes les musiques d’un genre sur une page consommait trop de ressources (écran et réseau).  

**Solution** :  
- La page affiche désormais les **10 premières musiques** et leurs artistes associés.  
- Une fonctionnalité permet de charger davantage de musiques grâce à l’utilisation du **"bookmark"** de CouchDB, évitant des requêtes globales inefficaces.

**Impact** : 
On ne constate pas d'impact direct sur greenFrame puisque de base on avait paramétré la requete pour ne prendre que 10 musiques et les artistes liées, or maintenant quand on charge la page on n'afiche encore que 10 musiques et les artisrtes liées, or maintenant on peut accèder à **toute la base de donnée** de manière **efficiente** et **sur demande** de l'utilisateur pour convenir à ses besoins. Etant donnée que les scénarios greenframe ne sont pas assez poussé on ne voit **pas de changement**.

## Conclusion

La conception d'applications web durables repose sur plusieurs bonnes pratiques que nous avons mises en place dans le projet EchoStream.  
Tout d'abord nous avons **analyser** les problèmes de nos concurrents afin de ne pas répéter les mêmes erreurs et éviter les fonctionnalités ayant le plus fort impact. Nous avons **minimiser les ressources chargées** dans notre application pour ne charger une musique que lorsqu'elle est écoutée. Sur le même principe, la **pagination** est très importante afin de ne récupérer qu'une partie des données de la base et limiter l'utilisation du réseau et du CPU. Il est également important **d'optimiser ses requêtes** en utilisant notamment des index appropriés (c'est ce que nous avons fait avec `release_date` et `title`). Enfin, la **suppression des fonctionnalités non essentielles** permet de se concentrer sur ce qui est vraiment utile pour l'utilisateur et évite un impact négatif inutile.

Avec le projet EchoStream, nous retenons que des applications performantes peuvent être réalisées sans sacrifier l'**éco-responsabilité**, en privilégiant des fonctionnalités réellement utiles et la gestion judicieuse des ressources.
