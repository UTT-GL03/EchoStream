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
2. il accepte les cookies
3. Il lance la première musique qui lui est proposée
4. Il regarde les autres musiques proposées sur la page d'accueil mais rien ne l'intéresse, il stoppe donc sa navigation.

## Scénario 2 : "Rechercher une musique spécifique"
1. L'utilisateur se rend sur un site web de streaming en ligne
2. il accepte les cookies
3. Il recherche une musique
4. Il lance la musique trouvée

### Résultat
Les résultat de la platforme deezer et Musicme : [Voir la preview du fichier HTML](https://utt-gl03.github.io/EchoStream/benchmarks/scenario1/benchmark.html)

Les résultats de la plateforme spotify sont différents, la stucture de la page fait que c'est dure de pouvoir utiliser le cli de green it donc on a utilisé l'extension chrome et changer le protocole car il fallait absolument créer un compte pour écouter de la musique. On précise que cet outil marche de la manière suivante : il va garder toutes les requetes qui sont faites dans l'analyse, si on fait donc une analyse à chaque étape nous allons mesurer les mêmes requetes pluisieurs fois. Pour y remedier nous allons juste faire l'analyse à la fin du scénario.

#### Scénario spotify :
##### Premier scénario :
1. Se rendre sur le site web et se connecter
2. Lancer la première musique proposée 
3. Scroller jusqu'en bas de la page pour trouver une autre musique mais ne trouvera rien

##### Deuxième scénario :
1. Se rendre sur le site web et se connecter
2. Rechercher une musique précise
3. Lancer l'écoute de cette musique 

Resultat :  ![Capture d'écran 2024-10-15 172913](https://github.com/user-attachments/assets/3939adf0-0d86-498c-a1af-dc7b6a0e08f5)
(le résultat d'en bas est particulièrement désastreux, c'est le premier scénario, le site propose des vidéos et gifs par rapport à l'actualité des artistes ce qui est particulièrement couteux)


## Scénario : Streaming d'une musique
Malheuresement l'outil greenIT mesure que sur l'instant T, donc si on veut mesurer l'impact du streaming sur tout le long de l'écoute d'une musique on va devoire le faire à la main via l'outil debbug réseau.

On rappelle que les requetes quand on clique sur la musique sont pris en compte dans les scénarios différents, ici on cherche juste à voir l'impact du streaming qu'on a pas pu calculer auparavent.

Pour spotify on observe une requete de 325 ko toutes les 10 secondes, donc pour une chanson de 3 minutes on a 18 requetes et 5 850 ko de données transmis.

Pour deezer on une requete de 278 octets toutes les 30 secondes, donc pour une chanson de 3 minutes on a 5 requetes et 1,390 ko de données trransmis.

Pour musicme on une requête de 413 octets toutes les 30 secondes, donc pour une chanson de 3 minutes on a 5 requetes et 2,065 ko de données transmis.

## Maquette de l'interface et échantillon de données

Nous avons vu lors de nos scénarios qu'avoir des playlists personnalisés étaient des fonctionnalités particulierement gourmande. Nous avons donc opté pour un protype qui se base uniquement sur des genres de musiques qui aurait été choisi par l'utilisateur, tout en gardant toute l'usabilité d'un site de streaming de music.

Nous avons retenue deux pages type :
- celle avec les playlist par genre que l'utilisateur a choisi
- celle d'une playlist (avec les musiques dedans et les artistes de ce genre)

![mockup](frontend/mockup.png)

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec dummy-json). Ces données sont générés aléatoirement et permettent d'identifier une musique, cepandant on ne peut pas générer un fichier audio donc on génère un URI pour simuler le fichier mp3 qu'on utilisera (voir [modele de données](frontend/sample_data.hbs)).

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour le premier prototype : 
- Notre base de données reste statique et dans le frontend
- Les fonctionnalités implémentés sont celles uniquement requises pour le scénario 1 ('Rechercher une musique et l'écouter)

Ce scénario nécéssite de pouvoir rechercher parmis une liste de musique et de l'écouter.

### Page recherche

Nous avons dévelloper une page avec une barre de recherche et une liste de musique de manière très simpliste.

![Capture d'écran 2024-10-29 170600](https://github.com/user-attachments/assets/0fb92cfe-7919-4a54-9d5e-01a32880ede8)
Fig.2: Prototype de la page de recherche.

Pour l'instant nous avons choisi d'utiliser la librairie lucid-react essentiellement pour sa fonction de recherche qui permet de prototyper rapidement sans se lancer dans la conception d'un algorithme de recherche. Il s'avère que cette librairie permet aussi d'ajouter des élèments graphiques pour des controleurs de média, fonction qui peuvent être assurer de manière minimaliste par le html 5. 

On a donc voulu voir quel était l'impact d'utiliser les fonctions qui ne sont pas nécessaire car déjà existante avec l'argument 'controller' que propose la balise <audio> ou <media> de html mais qui rend le site plus jolie. Car les sites de streaming sont avant tout des commerces il est donc évident que ces sites soit épurés et jolie pour qu'il soit quand même pertinent, donc regardons les différences et ce que ça coûte.
Nous utilisons aussi tailwind.css pour le style générale de la page pour générer du css personnalisé .

Nous pouvons donc ici mesurer l'impact général de la page et donc de nos choix de framwork, utilisé react et les librairies pour gagner du temps sur les fonctionnalités et l'esthéthisme font que cela peut manquer d'optimisation donc peut-être plus de requête, peut être du code inutile donc un DOM plus grand que nécessaire:

Nous avons donc utilisé simplement l'extension chrome de green it pour voir de manière très simple l'impact de nos choix en mesurant deux foix deux version du site :
- Une fois la version dev du site web et une fois la version build du site web et donc comment il sera au final
- Une version avec l'utilisation de lucid-react pour les élèments de controle de média et une version avec lucid-react juste pour la barre de recherche.

![Capture d'écran 2024-10-29 172507](https://github.com/user-attachments/assets/72af5e44-4452-4b2b-a514-3b0860a3eb63)
Fig.3: Résultat des 4 tests .

Ce qu'on lit de ses résultats c'est que les versions dev du site web sont déjà assez imposante pour le peu qu'il y a et la différence entre utliser des librairies pour le design uniquement est significative (autour de 20% de différence).

Cependant une fois build la page est déjà beaucoup plus moderé et en plus la différence entre les deux versions ne ce voit quasiment pas. On peut donc ce dire que ça ne change pas grand chose avec la librairie lucid-react d'utiliser des fonctions importé pour gérer des élements de designs. 

Au final on se sait pas encore toutes les fonctionnalités qu'on utilisera ou utilisera pas pour finir le projet mais on peut se dire qu'on peut se sentir libre d'utiliser ou non cette librairie comme on veut car l'impact sera dérisoire.

### Execution du scénario principale

Nous pouvons donc éxecuter notre scénario principale et voir l'impact de l'utilsation de notre site comparé à nos concurrents :

[Voir la preview du fichier html](https://utt-gl03.github.io/EchoStream/benchmarks/EchoStream/scenario2/benchmark.html)
