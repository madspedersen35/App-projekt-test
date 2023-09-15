# Opsætning af expo - React native Mobil apps

#### Før du kan gå igang skal du have følgende:
1. **Node**
   1. Tjek om det er installeret ved at skrive følgende: `Node -v`,
      Hvis den giver et version nummer som `18.17.1` så er du good to go <br> <br>
   2. Hvis du får `zsh: command not found`, så hent det med homebrew ved først at skrive `brew update && brew upgrade && brew install node`
      3. Hvis du får en `Command not found ` med homebrew, så installer det ved at åbne din terminal og 
         kopier følgende ind i din terminal: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)`
      4. Prøv nu at køre `brew install node`
      5. læs mere på https://brew.sh/index_da
      6. Hvis du får fejl ved brew upgrade, så kig på fejlene og ret dem ( )
   3. Når homebrew har installeret node, så prøv at køre `Node -v` igen
   
2. ****watchman****
   1. Installeres ved at åbne terminalen og køre `brew update && brew upgrade && brew install watchman`
   2.  Kør `watchman --v ` for at tjekke om det er installeret
   3. læs mere på https://facebook.github.io/watchman/docs/install.html 

#### Anvend den officielle guide til at installere expo - guiden findes på følgende link: https://docs.expo.io/get-started/installation/
- OBS - Det er vigtigt at skrive npm install --global expo-cli og IKKE npm install expo-cli

Når installationen er færdig, skal du hente expo-app'en fra din AppStore.

- App-ikonet kan ses på billedet herunder
  
  ![expo](billeder/expoIcon.png)

#### Kør dit først expo projekt!
1. find den mappe du vil oprette dit første projekt, og træk den mappe ned i terminalen, så mappe navnet står til venstre prompten
![img.png](billeder/img.png)

2. Skriv nu `expo init projektnavn` og vælg blank 

3. Find nu dit `projektnavn` og åben det i webstorm, og derefter i webstorms terminal kør 
`npm start`
   ![img.png](billeder/screenshot4.png)
   
4. Nu skal et vindue med expo intefacet åbne og tryk nu på tunnel i venstre side for at scanne din første app.
   ![](billeder/screenshot5.png)
   
5. resultatet skulle være at du skal se denne tekst `Open up App.js to start working on your app!`

6. prøv at ændre i webstorm filen app.js og se teksten ændre sig



### Fejl og løsninger
1. Får du fejl ved installation af watchman, så prøv at afinstallere homebrew og installer det igen : https://github.com/Homebrew/install
   - Kan også løse mange andre problemer med homebrew
2. Kan du ikke køre Tunnel funktionen med expo? --> stop serveren med control + c, også skriv npm install -global @expo/ngrok
3. Problemer med webstorm ikke kan oprette forbindelse: Bliv ved med at opdatere, indtil den opretter forbindelse
4. Kan du ikke installere xcode-select --install, eller går det for langsomt, så hop af eduroam, og gør det på din mobils wifi
5. Har du problemer med, at expo instansen crasher: så prøv at gå ind under indstillinger --> security --> privacy og så  full disk access og tryk watchman af !

[Skærmbillede 2021-09-10 kl  10 00 54](https://user-images.githubusercontent.com/48329669/132821334-3768fa81-2a01-4bbf-8d51-5cfd65161352.png)

