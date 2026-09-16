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

  const active = LIST.find((p) => p.id === id);
  window.GeoRiddles = active.riddles;
  window.GeoCards = active.cards;
  window.GeoFinalWord = active.word;

  // sleutel waaronder app.js de voortgang van één reis bewaart
  const storeKey = (pid) => (pid === 'world' ? 'geosearch-v1' : `geosearch-v1-${pid}`);

  window.GeoPuzzle = {
    id: active.id,
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
    select(next) {
      if (next === active.id || !LIST.some((p) => p.id === next)) return;
      try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
      location.hash = '#/';
      location.reload();
    },
  };
})();
