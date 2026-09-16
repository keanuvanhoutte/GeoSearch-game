/* Kiest welke raadselset (welke "reis") actief is. Elke reis heeft haar eigen raadsels,
   platen, eindwoord en eigen opgeslagen voortgang. De keuze staat op het startscherm en
   wordt bewaard; wisselen laadt de pagina opnieuw, zodat de app met de andere set start.
   Dit bestand wordt geladen ná riddles(.js/-blue.js) en cards(.js/-blue.js), vóór app.js. */
(function () {
  const KEY = 'geosearch-puzzle';

  const LIST = [
    {
      id: 'world',
      name: { nl: 'Eerste reis', en: 'First journey' },
      riddles: window.GeoRiddles,
      cards: window.GeoCards,
      word: window.GeoFinalWord,
    },
    {
      id: 'blue',
      name: { nl: 'Tweede reis', en: 'Second journey' },
      riddles: window.GeoRiddlesBlue,
      cards: window.GeoCardsBlue,
      word: window.GeoFinalWordBlue,
    },
    {
      id: 'planet',
      name: { nl: 'Derde reis', en: 'Third journey' },
      riddles: window.GeoRiddlesPlanet,
      cards: window.GeoCardsPlanet,
      word: window.GeoFinalWordPlanet,
    },
    {
      id: 'our',
      name: { nl: 'Vierde reis', en: 'Fourth journey' },
      riddles: window.GeoRiddlesOur,
      cards: window.GeoCardsOur,
      word: window.GeoFinalWordOur,
    },
  ].filter((p) => Array.isArray(p.riddles) && p.riddles.length && p.cards && p.word);

  let id = LIST[0].id;
  try {
    const saved = localStorage.getItem(KEY);
    if (LIST.some((p) => p.id === saved)) id = saved;
  } catch (e) { /* geen opslag beschikbaar */ }

  let active = LIST.find((p) => p.id === id);
  const apply = (p) => {
    active = p;
    window.GeoRiddles = p.riddles;
    window.GeoCards = p.cards;
    window.GeoFinalWord = p.word;
  };
  apply(active);

  // sleutel waaronder app.js de voortgang van één reis bewaart
  const storeKey = (pid) => (pid === 'world' ? 'geosearch-v1' : `geosearch-v1-${pid}`);

  window.GeoPuzzle = {
    get id() { return active.id; },
    list: LIST.map((p) => ({ id: p.id, name: p.name, riddles: p.riddles.length, word: p.word })),
    storeKey,
    /* De reizen waarvan het eindwoord al gevonden is. Elke reis bewaart dat apart,
       dus voor het slot van het spel lezen we ze alle vier uit. */
    solved() {
      return LIST.filter((p) => {
        try {
          const saved = JSON.parse(localStorage.getItem(storeKey(p.id)));
          return !!(saved && saved.final);
        } catch (e) { return false; }
      }).map((p) => p.id);
    },
    /* Wisselt van reis zonder de pagina te herladen: de globale raadsels, platen
       en het eindwoord wijzen daarna naar de nieuwe set. app.js tekent zelf opnieuw.
       Geeft false terug als er niets te wisselen viel. */
    select(next) {
      const p = LIST.find((x) => x.id === next);
      if (!p || p.id === active.id) return false;
      apply(p);
      try { localStorage.setItem(KEY, next); } catch (e) { /* geen opslag beschikbaar */ }
      return true;
    },
  };
})();
