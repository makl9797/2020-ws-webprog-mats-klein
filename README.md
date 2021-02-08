Name: Mats Klein

Matrikelnummer: 630302

E-Mail: mats.klein@stud.hs-flensburg.de

Info: Ich hatte bereits den Laborschein bei Wolfang Tepper gemacht, deshalb habe ich auch nicht so genau auf die Fristen der Meilensteine geachtet.

Anleitung:

Das Projekt ist nach dem MEVN Technologie-Stack gebaut und benutzt somit Vue, Express, NodeJS und MongoDB. NodeJS sollte somit vorher installiert sein.
Für ein schnelleres Laden der Tweets empfiehlt es sich mongoDB Lokal laufen zu lassen. Es funktioniert aber auch mit einer Datenbank aus der Cloud.

1. Das Projekt clonen

2. Den Befehl "npm install" zum installieren der Packages im Ordner 2020-WS-WebProg-Mats-Klein\Projekt\client ausführen

3. Den Befehl "npm run serve" zum starten des Client-Servers im Ordner 2020-WS-WebProg-Mats-Klein\Projekt\client ausführen

4. Den Befehl "npm install" zum installieren der Packages im Ordner 2020-WS-WebProg-Mats-Klein\Projekt\server ausführen

5. Eine server-config.json Datei im Ordner 2020-WS-WebProg-Mats-Klein\Projekt\server erstellen. Dafür sollte die 2020-WS-WebProg-Mats-Klein\Projekt\client\server-config.json.sample Datei als Vorlage genutzt werden.
   In dieser müssen der Link zur Mongo-DB und der Bearer Token für die Twitter API angegeben werden.

6. Den Befehl "npm run server" zum starten des Backend-Servers im Ordner 2020-WS-WebProg-Mats-Klein\Projekt\server ausführen

7. Webseite über http://localhost:8080/ aufrufen

Quellen:

Quelle 1:
In Datei : 2020-WS-WebProg-Mats-Klein\Projekt\client\public\index.html
Font und Icon Link hinzugefügt
Font-Autor: Google
Font-Adresse : https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900
Icon-Autor: Google
MaterialDesign-Icon Adresse: https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css

Quelle 2:
2020-WS-WebProg-Mats-Klein\Projekt\client\src\auth\index.js
Authentication Wrapper von Auth0 aus dem Tutorial von Auth0 - https://auth0.com/docs/quickstart/spa/vuejs
Angepasst an das Projekt, so dass es funktioniert (TypeScript Errors vom ESLinter unterdrückt) 

Quelle 3:
In Datei : 2020-WS-WebProg-Mats-Klein\Projekt\client\src\components\TheHeader.vue
Wolken Hintergrundbild - Bild-Adresse: https://images.pexels.com/photos/3742709/pexels-photo-3742709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
Original-Quelle: https://www.pexels.com/photo/white-clouds-and-blue-sky-3742709/
Autor: Andrew Beatson
License: Free to Use (Laut Website)

Quelle 4: 
In Datei: 2020-WS-WebProg-Mats-Klein\Projekt\client\src\assets\pound-box.svg
Original-Quelle: https://materialdesignicons.com/icon/pound-box
Autor: Austin Andrews
Als SVG-Datei heruntergeladen




