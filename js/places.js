/* Plekken die de zoekbalk altijd (ook zonder internet) vindt: de antwoorden van de raadsels
   en de gebieden eromheen, met Nederlandse en Engelse schrijfwijzen.
   Alles wat hier niet in staat, zoekt de app online op (OpenStreetMap). */
(function () {
  const P = (nl, en, aliases, point, zoom) => ({ name: { nl, en }, aliases: [nl, en, ...aliases], point, zoom });

  const PLACES = [
    // raadsel A
    P('Mount Everest', 'Mount Everest', ['everest', 'mont everest', 'chomolungma', 'sagarmatha'], [27.9881, 86.925], 10),
    P('Himalaya', 'Himalayas', ['himalaya', 'himalayagebergte'], [28.6, 84.0], 5),
    P('Nepal', 'Nepal', [], [28.3, 84.1], 6),
    P('Singapore', 'Singapore', ['singapur'], [1.3521, 103.8198], 10),
    P('Chinese Muur', 'Great Wall of China', ['grote muur', 'grote muur van china', 'muur van china', 'great wall', 'chinese wall', 'mutianyu', 'badaling'], [40.4319, 116.5704], 11),
    P('China', 'China', [], [35.9, 104.2], 4),
    P('Peking', 'Beijing', [], [39.9042, 116.4074], 9),
    P('Marianentrog', 'Mariana Trench', ['marianen trog', 'marianentrog', 'marianas trench', 'challenger deep', 'challengerdiepte'], [11.35, 142.2], 6),
    P('Marianen', 'Mariana Islands', ['noordelijke marianen', 'northern mariana islands', 'marianeneilanden'], [16.5, 145.7], 6),
    P('Guam', 'Guam', [], [13.44, 144.79], 9),
    P('Diomedeseilanden', 'Diomede Islands', ['diomede', 'diomede eilanden', 'grote diomede', 'kleine diomede', 'big diomede', 'little diomede'], [65.78, -169.0], 9),
    P('Beringstraat', 'Bering Strait', ['straat van bering'], [65.75, -168.9], 6),
    P('Alaska', 'Alaska', [], [64.2, -152.5], 4),
    // raadsel B
    P('Jim Jim Falls', 'Jim Jim Falls', ['jim jim', 'jim jim waterval'], [-13.2726, 132.8399], 12),
    P('Kakadu', 'Kakadu National Park', ['kakadu national park', 'nationaal park kakadu'], [-12.9, 132.6], 8),
    P('Uluru', 'Uluru', ['ayers rock', 'ayersrock', 'uluru ayers rock'], [-25.3444, 131.0369], 11),
    P('Operagebouw van Sydney', 'Sydney Opera House', ['operagebouw', 'opera van sydney', 'opera sydney', 'sydney opera', 'opera house'], [-33.8568, 151.2153], 15),
    P('Sydney', 'Sydney', [], [-33.8688, 151.2093], 10),
    P('Australië', 'Australia', [], [-25.3, 133.8], 4),
    // raadsel C
    P('Straat van Gibraltar', 'Strait of Gibraltar', ['zuilen van hercules', 'pillars of hercules'], [35.97, -5.6], 9),
    P('Gibraltar', 'Gibraltar', ['rots van gibraltar', 'rock of gibraltar'], [36.1408, -5.3536], 12),
    P('Spanje', 'Spain', ['espana'], [40.2, -3.6], 5),
    P('IJsland', 'Iceland', ['ysland'], [64.9, -18.6], 6),
    P('Finland', 'Finland', ['suomi'], [64.5, 26.0], 5),
    P('Lapland', 'Lapland', ['lappi', 'fins lapland', 'finnish lapland'], [67.9, 25.7], 6),
    P('Rovaniemi', 'Rovaniemi', [], [66.5039, 25.7294], 10),
    P('Kerstmandorp', 'Santa Claus Village', ['kerstman dorp', 'santa claus village rovaniemi'], [66.5436, 25.8473], 13),
    P('Ierland', 'Ireland', ['eire', 'republiek ierland', 'republic of ireland'], [53.4, -8.0], 6),
    P('Griekenland', 'Greece', ['hellas'], [39.0, 22.5], 6),
    P('Athene', 'Athens', ['athina'], [37.9838, 23.7275], 10),
    P('Akropolis', 'Acropolis', ['akropolis van athene', 'acropolis of athens', 'parthenon'], [37.9715, 23.7257], 15),
    // raadsel D
    P('Marokko', 'Morocco', ['maroc'], [31.8, -7.1], 5),
    P('Mali', 'Mali', [], [17.6, -4.0], 5),
    P('Togo', 'Togo', [], [8.6, 0.9], 6),
    P('Sahara', 'Sahara', ['saharawoestijn', 'sahara desert'], [23.4, 1.0], 4),
    // raadsel E
    P('Tikal', 'Tikal', [], [17.222, -89.623], 14),
    P('Guatemala', 'Guatemala', [], [15.6, -90.3], 6),
    P('Cuba', 'Cuba', [], [21.7, -79.5], 6),
    P('Havana', 'Havana', ['havanna', 'la habana'], [23.1136, -82.3666], 10),
    P('Golf van Mexico', 'Gulf of Mexico', ['mexicaanse golf', 'golfo de mexico'], [25.0, -90.0], 5),
    P('Mexico', 'Mexico', [], [23.6, -102.5], 4),
    P('Yucatán', 'Yucatán', ['schiereiland yucatan', 'yucatan peninsula'], [19.6, -89.0], 6),
    P('Florida', 'Florida', [], [27.8, -81.7], 6),
  ];

  // "IJsland", "ijsland" en "de Chinese Muur" worden allemaal hetzelfde
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ').trim()
    .replace(/^(de|het|the) /, '').replace(/^mt /, 'mount ');

  const index = new Map();
  PLACES.forEach((p) => p.aliases.forEach((a) => {
    const k = norm(a);
    if (!index.has(k)) index.set(k, p);
    index.set(k.replace(/ /g, ''), index.get(k.replace(/ /g, '')) || p);
  }));

  window.GeoPlaces = {
    lookup(query, lang) {
      const k = norm(query);
      const p = index.get(k) || index.get(k.replace(/ /g, ''));
      return p ? { name: p.name[lang] || p.name.nl, lat: p.point[0], lng: p.point[1], zoom: p.zoom } : null;
    },
  };
})();
