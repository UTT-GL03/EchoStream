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
Les résultat de la platforme deezer et Musicme : [Voir la preview du fichier HTML](https://utt-gl03.github.io/EchoStream/benchmark/benchmark.html)

Les résultats de la plateforme spotify sont différents, la stucture de la page fait que c'est dure de pouvoir utiliser le cli de green it donc on a utilisé l'extension chrome et changer le protocole car il fallait absolument créer un compte pour écouter de la musique.

#### Scénario spotify :
1. Se rendre sur le site web
2. Accepter les cookies
3. Cliquer sur le bouton connecter
4. Renter ses identifiants et se connecter
5. Cliquer sur la page d'un artiste
6. Scroller et cliquer sur la page d'une playlist personnalisé
7. Charger la page de cette même playlist (pour voir la différence d'une page chargé dans le cache ou non)

Resultat :  ![Capture d'écran 2024-10-14 173120](https://github.com/user-attachments/assets/4e675006-89ec-44d9-9c30-9937432bd10a)


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



