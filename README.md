# EnSiGma-master
#The game's map is based on leaflet library!


EnSigma is a map enigma containing a  quest in a spesific geografic zone.
The goal of the enigma is to recover all the objects that are scattered over the geographic area.


## Getting Started

Clone this repository in your local server. (htdocs folder if using MAMP)

### Prerequisites

Make sur to have mySQL running well in order to create the database, run your command console and type

```
cd C:\MAMP\bin\mysql\bin
```
If MAMP is installed somewhere else change the path.

```
mysql.exe -u "your username" -p "your password"
```

Assuming everything works fine and your server (Apache Server in our case) is running just make sure it runs on the right port of localhost. 

```

### Installing

In your data base system create a database named "ensigma".
Now open "ensigma.sql" file with a text editor and copy what's writen inside and paste it into your sql query line.
Browse through the database to check its integrity or run some basic queries to view the rows.



## Deployment
***Make sure that your database is connected to the right Host and port !
If that's not the case change the port in index.php, get-joueurs.php and ObjetsEnigme.php

Now that the database is set and the website is well deployed on your local server, all that is left is 
to browse an url like: 
```
http://localhost/EnSIGma-master/
***Make sure to specify the port if it is different than 80 !
```

## Built With

* [Leaflet]- API for web mapping
* [Howler]- Audio Library for Js
* [Bootstrap]- Custom Styles
* [JQuery]- JavaScript Library
* [Ajax]-  jQuery library
* [MySQL]-  Version 5.7.24
* [PHP]-  Version 7.4.1



## Authors

* **Bouazzaoui Houda** - *Initial work* - [HoudaBouazzaouis](https://github.com/HoudaBouazzaoui)
* **Bnikkou Soukayna** - *Initial work* - [Bnikkou](https://github.com/Bnikkou)


End.
##Specifications:
Sur Chrome et Mozilla Firefox l'émission des sons nécessite le re-telechargement des audios (deux fenêtres s'affiche: infos sur le lien téléchargé et dupliquer le lien de téléchargement).
Penser à ouvrir le projet avec Microsoft edge.
