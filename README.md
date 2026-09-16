# GeoSearch

Een geografische puzzel: trek lijnen op de wereldkaart en ontdek de letters die op onze aarde geschreven staan. Per reis een handvol raadsels, evenveel letters, één eindwoord.

Er zijn vier reizen, elk met een eigen eindwoord: vijf raadsels in de eerste, vier in de tweede, zes in de derde en drie in de vierde. Je kiest ze op het startscherm; elke reis houdt haar eigen voortgang bij. Wie alle vier de eindwoorden vindt, krijgt het slot van het spel te zien.

**Speel online:** https://keanuvanhoutte.github.io/GeoSearch-game/

## Zo werkt het

1. Bekijk de plaat van een raadsel: vlaggen, tekeningen en symbolen wijzen naar plekken op aarde.
2. Klik die plekken aan op de kaart, in elke volgorde. Bij het controleren krijgt elke juiste plek het nummer van haar vak (I, II, III…) en worden de punten verbonden tot een letter.
3. Vul de letter in. Met alle letters samen vind je het eindwoord.

Vast? Kies zelf een hint: over het hele raadsel of voor één nummer. Lukt het echt niet, dan kun je per nummer de oplossing tonen. De scheiding tussen plaat en kaart is te verslepen.

Werkt op computer en gsm. Het satellietbeeld en het zoeken van plekken hebben internet nodig.

## Bestanden

- `GeoSearch game.html`: de game
- `index.html`: stuurt de online link door naar de game
- `css/`, `js/`, `img/`: opmaak, code (raadsels, platen, teksten, zoeken) en afbeeldingen
- Per reis een paar met de raadsels en de platen: `js/riddles.js` + `js/cards.js`, en zo ook `-blue`, `-planet` en `-our`
- `js/puzzle.js`: kiest welke reis actief is
