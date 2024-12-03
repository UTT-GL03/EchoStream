# EchoStream
## Choix du sujet
L’écoute de la musique en streaming représente une activité quotidienne pour beaucoup d'entre nous, car elle peut facilement être pratiquée en parallèle d’autres tâches comme le travail ou les trajets quotidiens.  
  
Au-delà de cet usage personnel, le streaming musical a connu une adoption massive. Il est devenu l’un des moyens les plus populaires de consommer de la musique, remplaçant largement les formats physiques et offrant une accessibilité mondiale.
## Utilité sociale
La musique en streaming joue un rôle important sur :  
- le plan médico-social car l’écoute de la musique peut améliorer le bien-être, aider à gérer le stress et l’anxiété, favoriser la motivation, la concentration, et même contribuer à la méditation. Elle a un impact positif sur la santé mentale et émotionnelle.
- Le développement territorial car Le streaming permet aux artistes issus de régions éloignées d’atteindre un public mondial. Cela leur offre des opportunités sans précédent pour se faire connaître, dépassant les limites géographiques traditionnelles.
## Effets de la numérisation
Un des avantages majeurs du streaming musical pour l'environnement est qu'il a remplacé des technologies plus anciennes comme les CD et les MP3, qui impliquaient une production physique et donc des émissions de plastique. De plus, il se positionne comme une alternative plus respectueuse de l’environnement aux festivals ou concerts, qui génèrent des impacts importants liés aux déplacements.  
Cependant, cette substitution aux pratiques anciennes engendre aussi un important effet rebond. La numérisation de la musique a bouleversé son mode de consommation. Avec l'accès facile à des millions de titres, la consommation de musique a fortement augmenté. Là où, en 2016, un album CD coûtait environ 10 dollars, aujourd’hui, pour ce même montant, il est possible d’avoir accès à des millions de titres pendant un mois via une plateforme de streaming.  
  
Cette évolution pose des questions écologiques et économiques, on peut se demander:  
- si le streaming peut encourager la surconsommation de musique, car on peut désormais écouter des morceaux partout et à tout moment,
- si les fonctionnalités de ces plateformes, telles que les storys des artistes ou les playlistes personnalisées qui encouragent à écouter toujours plus différent, sont utiles.  

Il est essentiel de réfléchir à des fonctionnalités plus équilibrées et moins gourmandes en ressources, tout en se questionnant sur leur activation par défaut.
## Scénario 1 : "Lancer une musique recommandée"
1. L'utilisateur se rend sur un site web de streaming en ligne
2. Il accepte les cookies
3. Il lance la première musique qui lui est proposée
4. Il regarde les autres musiques proposées sur la page d'accueil mais rien ne l'intéresse, il stoppe donc sa navigation.

## Scénario 2 : "Rechercher une musique spécifique"
1. L'utilisateur se rend sur un site web de streaming en ligne
2. Il accepte les cookies
3. Il recherche une musique
4. Il lance la musique trouvée

### Résultat
Les résultat de la platforme deezer et Musicme : [Voir la preview du fichier HTML](https://utt-gl03.github.io/EchoStream/benchmarks/scenario1/benchmark.html)

Les résultats de la plateforme spotify sont différents, la stucture de la page fait que nous ne pouvons pas utiliser le cli de GreenIT donc nous avons utilisé l'extension chrome et changer le protocole car il fallait absolument créer un compte pour écouter de la musique. On précise que cet outil marche de la manière suivante : il va garder toutes les requêtes qui sont faites dans l'analyse, donc si nous faisons une analyse à chaque étape nous allons mesurer les mêmes requêtes plusieurs fois. Pour y remedier nous allons juste faire l'analyse à la fin du scénario.

#### Scénario spotify :
##### Premier scénario :
1. Se rendre sur le site web et se connecter
2. Lancer la première musique proposée 
3. Regarder les autres musiques proposées sur la page d'accueil mais ne rien trouver.

##### Deuxième scénario :
1. Se rendre sur le site web et se connecter
2. Rechercher une musique précise
3. Lancer l'écoute de cette musique 

Resultat :  ![Capture d'écran 2024-10-15 172913](https://github.com/user-attachments/assets/3939adf0-0d86-498c-a1af-dc7b6a0e08f5)  
(le résultat d'en bas est particulièrement désastreux, c'est le premier scénario, le site propose des vidéos et gifs par rapport à l'actualité des artistes ce qui est particulièrement couteux en ressources)


## Scénario : Streaming d'une musique
Malheuresement l'outil GreenIT ne mesure que sur l'instant T, donc si on veut mesurer l'impact du streaming sur tout le long de l'écoute d'une musique on va devoir le faire à la main via l'outil debug réseau.

On rappelle que les requêtes quand on clique sur la musique sont prises en compte dans les scénarios différents, ici on cherche juste à voir l'impact du streaming qu'on n'a pas pu calculer auparavant.

Pour spotify on observe une requête de 325 ko toutes les 10 secondes, donc pour une chanson de 3 minutes on a 18 requêtes et 5 850 ko de données transmises.

Pour deezer on observe une requête de 278 octets toutes les 30 secondes, donc pour une chanson de 3 minutes on a 5 requêtes et 1,390 ko de données trransmises.

Pour musicme on observe une requête de 413 octets toutes les 30 secondes, donc pour une chanson de 3 minutes on a 5 requêtes et 2,065 ko de données transmises.

## Maquette de l'interface et échantillon de données

Nous avons vu lors de nos scénarios qu'avoir des playlists personnalisées était une des fonctionnalités particulierement gourmandes. Nous avons donc opté pour un protype qui se base uniquement sur des genres de musiques qui auraient été choisis par l'utilisateur, tout en gardant toute l'usabilité d'un site de streaming de music.

Nous avons retenu deux pages type :
- celle avec les playlist par genre que l'utilisateur a choisi,
- celle d'une playlist (avec les musiques dedans et les artistes de ce genre).

![mockup](frontend/mockup.png)  

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec dummy-json). Ces données sont générés aléatoirement et permettent d'identifier une musique, cepandant on ne peut pas générer un fichier audio donc on utilise un URL qui vient de la base de données Pixabay (voir [modele de données](frontend/sample_data.hbs)).

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour le premier prototype : 
- notre base de données reste statique et dans le frontend,
- les fonctionnalités implémentés sont celles uniquement requises pour le scénario 1 ('Rechercher une musique et l'écouter).

Ce scénario nécéssite de pouvoir rechercher parmi une liste de musiques et de l'écouter.

### Page recherche

Nous avons développer une page avec une barre de recherche et une liste de musiques de manière très simpliste.

![Capture d'écran 2024-10-29 170600](https://github.com/user-attachments/assets/0fb92cfe-7919-4a54-9d5e-01a32880ede8)  
Fig.2: Prototype de la page de recherche.

Pour l'instant nous avons choisi d'utiliser la librairie lucid-react essentiellement pour sa fonction de recherche qui permet de prototyper rapidement sans se lancer dans la conception d'un algorithme de recherche. Il s'avère que cette librairie permet aussi d'ajouter des élèments graphiques pour des contrôleurs de média, fonctions qui peuvent être assurées de manière minimaliste par le html 5. 

On a donc voulu voir quel était l'impact d'utiliser les fonctions qui ne sont pas nécessaire car déjà existante avec l'argument 'controller' que propose la balise <audio> ou <media> de html mais qui rend le site plus joli. Les sites de streaming sont avant tout des commerces il est donc évident que ces sites soient épurés et jolis pour qu'ils soient quand même pertinents, donc regardons les différences et ce que ça coûte.
Nous utilisons aussi tailwind.css pour le style général de la page pour générer du css personnalisé.

Nous pouvons donc ici mesurer l'impact général de la page et donc de nos choix de framework, utiliser react et les librairies pour gagner du temps sur les fonctionnalités et l'esthéthisme font que cela peut manquer d'optimisation donc peut-être plus de requêtes, peut-être du code inutile donc un DOM plus grand que nécessaire :

Nous avons donc utilisé simplement l'extension chrome de GreenIT pour voir de manière très simple l'impact de nos choix en mesurant :
- la version dev et build du site web avec l'utilisations des balises html par défaut,
- les mêmes versions avec l'utilisation de lucid-react pour les élèments de contrôle de média et pour la barre de recherche.

![Capture d'écran 2024-10-29 172507](https://github.com/user-attachments/assets/72af5e44-4452-4b2b-a514-3b0860a3eb63)  
Fig.3: Résultat des 4 tests.

Ce qu'on lit de ces résultats c'est que les versions dev du site web sont déjà assez imposantes pour le peu qu'il y a et la différence entre utliser des librairies pour le design uniquement est significative (autour de 20% de différence).

Cependant une fois build la page est déjà beaucoup plus moderée et en plus la différence entre les deux versions ne se voit quasiment pas. On peut donc se dire que ça ne change pas grand chose avec la librairie lucid-react d'utiliser des fonctions importées pour gérer des élements de designs. 

Au final on se sait pas encore toutes les fonctionnalités qu'on utilisera ou n'utilisera pas pour finir le projet mais on peut se dire qu'on peut se sentir libre d'utiliser ou non cette librairie comme on veut car l'impact sera dérisoire.

### Execution du scénario principal

Nous pouvons donc éxecuter notre scénario principal et voir l'impact de l'utilisation de notre site comparé à nos concurrents :

[Voir la preview du fichier html](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/scenario2/EchoStream.html)

## Prototype n°2 : Fonctionnalités pour le scénario prioritaire avec données statiques chargées de manière dynamique

### Chargement dynamique des données

Dans cette seconde version du prototype, les données sont désormais chargées dynamiquement par le frontend.
En utilisant le même scénario qqu'avec la première version du prototype, nous n'avons qu'une seule requête supplémentaire par page consultée.

[Voir la preview du fichier html](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2/EchoStream.html)

### Optimisation du nombre de requêtes

Nous nous sommes rendus compte qu'une requête était faite pour chaque musique lorsque nous chargions la mage pour charger le fichier mp3.
Nous avons donc modifié notre application pour ne charger le fichier mp3 que lorsque nous lançons la musqique. Nous perdons quelques informations non nécessaires comme la durée de la musique mais nous gagnons un nombre important de requête.

[Voir la preview du fichier html](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/dynamicData_scen2_optiRequetes/EchoStream.html)

### Changement de l'outil d'analyse

Après avoir discuté de la méthode de calcul qu'utilise GreenIT, nous nous sommes demandés si cette manière de calculer était vraiment pertinente ? En résumé GreenIT vise à calculer l'impact global de l'utilisation d'un site internet, que ce soit l'impact de l'achat ou la production du téléphone utilisé, l'alimentation des serveurs, la construction duréseau, etc. Au final même si l'outil est pratique et permet de se rendre compte des impacts des utilisations de la technologie, il ne nous aide pas vraiment à voir l'impact strictement lié à l'utilisation de notre site. 
On utilisera donc GreenFrame, un outil qui permet de calculer uniquement l'impact énergétique lié à l'utilisation de notre application web.

On veut donc re-créer un échantillon d'analyse des sites concurrents pour pouvoir comparer ce qui est comparable avec le nouvel outil, voici les résultats de l'analyse simple de la première page du site :

![Capture d'écran 2024-11-12 163127](https://github.com/user-attachments/assets/3124cedc-2501-43fb-b5a7-0279412c784c)  
__Fig.1__: Résultat de Spotify

![Capture d'écran 2024-11-12 163520](https://github.com/user-attachments/assets/7ab482d9-83b9-4aa2-aaa5-be6c9949967b)  
__Fig.2__: Résultat de Deezer

![Capture d'écran 2024-11-12 163624](https://github.com/user-attachments/assets/53d6db26-01d5-463a-8512-6e96722bcac7)  
__Fig.3__: Résultat de MusicMe

On fait ensuite les modifications pour faire les tests à chaque push dans notre projet GreenFrame. On peut voir des résultats qui nous disent que notre site consomme très peu de ressource, essentiellement du temps d'écran, la seule fonctionnalité qui peut est celle de la recherche donc très peu de CPU utilisé. Ce sont donc des résultats très concluants par rapport aux concurrents.

![Capture d'écran 2024-11-12 174747](https://github.com/user-attachments/assets/21d6b884-99e8-41fb-90a7-4bff0ccf34d5)  
__Fig.4__: Résultat de notre prototype V.2

Nous avons ensuite mesuré l'impact de la partie serveur de notre prototype. On peut voir qu'il est insignifant, effectivement nous n'avons pas de streaming, ni de transformations ou calcul à faire dans le serveur qui ne fait que relayer les données qui sont stockées. Donc logiquement le seul pic de consommation est au lancement du site.

![Capture d'écran 2024-11-12 175123](https://github.com/user-attachments/assets/02277dd5-2ba6-450d-9293-dfeb058f94f8)  
__Fig.5__: Résultat de notre prototype V.2 coté serveur 

## Prototype n°3 : Fonctionnalités pour le scénario prioritaire avec données stockées dans une base de données

Pour la V3 de notre prototype, nous voulons que les données soient stockées dans une base de données en ligne (CouchDB). L'interêt d'une base de données dynamique est de pouvoir rajouter facilement des musiques. On pourrait même imaginer comme on le voulait un formulaire pour que les gens rajoutent eux même leur musique dans l'application.

![Capture d'écran 2024-11-19 171407](https://github.com/user-attachments/assets/fc2ecb9b-3c1b-48cd-a62f-1187cb111d90)  
__Fig.6__: Résultat de notre prototype V.2 


![image](https://github.com/user-attachments/assets/51b8db95-6d01-458f-936b-7d6fa91f767d)  
__Fig.7__: Résultat de notre prototype V.3

On n'observe pas de différence dans l'utilisation du réseau via notre sécnario green frame, cela est dû au fait que dans notre scénario principal, nous récupérons toutes les musiques. Cependant pour de futurs scénarios cette base de données nous permettra de faire des requêtes spécifiques (pour ne demander qu'une seule musique par exemple, ou un seul style de musique) et ainsi de réduire le réseau utilisé. On remarque cependant une augmentation de l'usuage du CPU lié au fonctionnement de la base de donnée sur un docker. Cette modification de notre prototype a l'air à priori néfaste écologiquement mais deviendra à l'avenir une meilleure solution.

![Capture d'écran 2024-11-19 171624](https://github.com/user-attachments/assets/db711e7e-821d-4585-abb2-68c6014e8aac)  
__Fig.8__: Résultat de notre prototype V.3 coté backend

## Prototype n°4 : Fonctionnalités pour le scénario prioritaire avec filtrage des données

### Passage à l'échelle

Dans le cas d'una application de streaming de musique, l'augmentation de données se traduit par une augmentation du nombre de musiques. Le poids des musiques ne va pas changer, il y en aura juste plus. Il est cependant nécessaire d'avoir une grande liberté de choix pour être compétitif donc une grande base de données. 

L'augmentation du volume de musiques semble fifficile à apréhender mais il paraît assez évident que ce marché est en pleine expension et qu'il ne sera pas linéaire dans les prochaines années.

### Évolution de l'impact environnemental avant correction

La figure 9 illustre l'impact du passage à l'échelle de 10 musiques à 1000 musiques (donc multiplier par 100 de manière arbitraire).
On voit une grande augmentation du temps d'écran, effectivement on a qu'une seule page donc toutes les musiques sont affichées sur l'écran d'acceuil. On n'observe aucun changement sur le côté client ce qui est logique. Sur le côté serveur on voit une augmentation de 250% au niveau du cpu pour traiter la data supplémentaire et aussi une augmentation conséquence au niveau réseau.

![Capture d'écran 2024-11-26 154741](https://github.com/user-attachments/assets/e88237fa-1035-47ad-a730-3701d14fab9f)  
__Fig.9__ : Évolution de l'impact de la consultation de la page d'acceuil en passant de 10 musiques à 1000 musiques.

### Prise en compte du passage à l'échelle

Nos résultats montrent qu'on a beaucoup trop de musiques affichées sur notre site, on veut donc filtrer les musiques qu'on va afficher, en l'occurence par date de sortie pour afficher les musiques les plus récentes à l'utilisateur. 

Pour réaliser cela nous devons indexer notre base de donnée pour réaliser une requête dans la base de donnée. Du coup, dans notre cas, on va l'indexer en fonction de l'attribut release_date.

### Évolution de l'impact environnemental après correction

Nous pouvons voir les effets positifs de nos changements de manière drastique. La dernière verion est toujours un peu plus néfaste qu'avant mais le résultat vient surtout du fait qu'on affiche 100 musiques au lieu de 10, mais nous avons bien 1000 musiques dans la base de données. Dans les prochaines versions nous améliorerons notre application pour pouvoir accéder aux 1000 musiques sans pour autant les afficher (notamment en améliorant notre outil de recherche).

![Capture d'écran 2024-11-26 171712](https://github.com/user-attachments/assets/1a25ffab-8b4f-470e-9e76-fc9a650d8e80)  
__Fig.10__ : Evolution de l'impact de notre application au cours des dernieres versions.

Quand on regarde les résultats plus attentivement, on voit effectivement la consommation de l'écran tombe, mais aussi qu'il consomme beaucoup moins pour accéder à la base de données grâce à notre indexation qui a amelioré l'efficacité de la BDD. Et ensuite on consomme moins de ressources en réseau car évidemment on n'affiche plus que 100 musiques au lieu de 1000.

![Capture_decran_2024-11-26_172301](https://github.com/user-attachments/assets/f49948d3-9dfd-4c54-bad0-8a36616e866c)  
__Fig.11__ : Impact de la page d'acceuil avec les 100 musiques les plus récentes affichées

## Prototype n°5: Evolution de notre fonction recherche

### Changement dans la BDD

Au cours de notre dernier prototype où nous avons augmenté la taille de notre BDD, nous avons rencontré un problème. En effet, avant le changement, nous affichions toute la BDD dans notre page d'accueuil et avions une fonction de recherche depuis les titres affichés. Quand nous avons multiplié les titres, nous ne pouvions plus afficher tous les titres de la BDD car cela avait un impact très négatif, mais du coup nous ne pouvions rechercher que dans les 100 titres les plus récents affichés et non pas dans toute notre BDD.

Pour résoudre ce problème nous avons modifié notre fonction de recherche pour que, lorsque l'on tape dans la barre de recherche, l'application va envoyer une requête à la base de donnée pour trouver les titres avec le préfixe correspondant à la recherche. Cependant avant nous avions un index en fonction de la date de sortie vu que nous affichions les titres les plus récents, or on fait maintenant une requête en fonction des titres. Donc pour optimiser la recherche on a fait un nouvel index sur l'attribut "title" de notre BDD. Lorsque la barre de recherche est vide et donc qu'on affiche les titres les plus récents, on a une requête avec un tri par date et donc couchDB utilise l'index by_date. Mais si la barre de recherche contient quelque chose, on utilise juste le filtre sur le titre et donc couchDB utilise l'index by_title.
Nous avons utilisé cette solution car couchDB ne fonctionnait pas avec un seul index unique sur 2 attributs (date et titre). Nous avons estimé que lorsque l'utilisateur charge la page pour la première fois, il est plutôt interessé par les dernières sorties, alors que lorsqu'il effectue une recherche, il sait ce qu'il veut et la date a donc peu d'importance.

Après analyse des résultats, ils se sont améliorés logiquement car on a pu diminuer le nombre de musiques afficher à l'acceuil de 100 à 20.
![Capture d'écran 2024-12-03 161220](https://github.com/user-attachments/assets/ef603576-261f-4c29-b36c-8ca9d9eec102)
__Fig.12__ : Impact de la page d'acceuil avec la nouvelle fonction de recherche.

### Changement de l'alogorithme et analyse green IT

Notre algorithme actuel fait une recherche à chaque fois qu'on tape dans la barre de recherche, ce qui peut vite être contraignant car il fait pleins de requêtes qui peuvent être considérées inutiles. On a donc modifié la recherche pour ne faire la requête que lorsque l'utilisateur appuie sur entrée. Cependant l'impact de ce changement ne peut pas vraiment être vu grâce a greenFrame, on a donc utilisé l'extension greenIT pour voir la différence entre les deux versions.
![image](https://github.com/user-attachments/assets/a7f9b2e0-fd63-40a6-8db9-4b63894c413a)

__Fig.13__ : Impact d'une recherche de musique avant changement

![image](https://github.com/user-attachments/assets/a982d2a4-9ad0-4e6b-bc9a-e5cafb90bba6)
__Fig.14__ : Impact d'une recherche de musique après changement

## Prototype n°6: Ajout de fonctionnalités sur la page d'accueil

### Proposition d'une musique aléatoire

Initialement, nous souhaitions proposer à l'utilisateur une musique sélectionnée aléatoirement parmi les musiques sorties récemment. Nous avons donc ajouter cette fonctionnalité dans le footer de notre page web. Parmi les 20 musiques les plus récentes retournées par la première requête à la BDD, une est sélectionnée aléatoirement et affichée en bas de la page. Ainsi, si l'utilisateur a du mal à se décider sur la musique qu'il souhaite écouter, il peut utiliser cette fonctionnalité.
Le résultat avec GreenFrame est quasiment identique au précédent.

![greenframe ajout de musique aléatoire](https://github.com/user-attachments/assets/d4b8adff-4d28-4bb3-9a2e-e0d3eadb4172)
__Fig.14__ : Impact GreenFrame de la page d'accueil après changement


