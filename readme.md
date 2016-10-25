# Project Webshop
## Installatie instructies
1. Installeer Node (https://nodejs.org/en/download/)
2. Voeg nodejs toe aan het path van windows (http://stackoverflow.com/questions/20992723/npm-is-not-recognized-as-internal-or-external-command-operable-program-or-bat#answer-21923238)
3. Open Command line en update Node (om zeker te zijn dat je de laatste versie hebt) met het commando:
 ```
 npm install npm@latest -g
 ```
4. Installeer Gulp met het volgende commando:
 ```
 npm install --global gulp
 ```
5. Ga in je command line naar de map van deze Git Repository en voer het volgende command uit:
 ```
 npm install
 ```
6. Alle nodige programma's zijn nu geïnstalleerd. Ga in je command line naar de map van deze Repository en voer het volgende command uit:
 ```
 gulp
 ```
Gulp houd nu je SASS bestanden in de gaten. Als je hier een wijziging in maakt en opslaat zullen de bestanden automatisch naar CSS wordt gecompileerd
