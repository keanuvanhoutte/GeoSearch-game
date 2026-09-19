/* Plekken die de zoekbalk altijd (ook zonder internet) vindt: de antwoorden van de raadsels
   en de gebieden eromheen, met Nederlandse en Engelse schrijfwijzen.
   Alles wat hier niet in staat, zoekt de app online op (OpenStreetMap). */
(function () {
  const P = (nl, en, aliases, point, zoom) => ({ name: { nl, en }, aliases: [nl, en, ...aliases], point, zoom });

  const PLACES = [
    // raadsel A
    P('Mount Everest', 'Mount Everest', ['everest', 'mont everest', 'chomolungma', 'sagarmatha'], [27.9881, 86.925], 10),
    P('Himalaya', 'Himalayas', ['himalaya', 'himalayagebergte'], [28.6, 84.0], 5),
    P('Nepal', 'Nepal', ['himalaya nepal', 'kathmandu', 'katmandu'], [28.3, 84.1], 6),
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

    /* tweede reis */
    // raadsel A
    P('Vancouver', 'Vancouver', [], [49.2827, -123.1207], 10),
    P('Canada', 'Canada', [], [56.1, -106.3], 3),
    P('Golden Gate Bridge', 'Golden Gate Bridge', ['golden gate', 'goldengate'], [37.8199, -122.4783], 13),
    P('San Francisco', 'San Francisco', ['frisco'], [37.7749, -122.4194], 10),
    P('Mexico-Stad', 'Mexico City', ['mexico stad', 'ciudad de mexico', 'mexico-city'], [19.4326, -99.1332], 9),
    P('Kaap Canaveral', 'Cape Canaveral', ['canaveral', 'kennedy space center', 'cape kennedy'], [28.5729, -80.6490], 10),
    P('Niagarawatervallen', 'Niagara Falls', ['niagara', 'niagara watervallen', 'niagarafalls'], [43.0799, -79.0747], 11),
    // raadsel B
    P('Piramides van Gizeh', 'Pyramids of Giza', ['gizeh', 'giza', 'piramides', 'pyramids', 'cheopspiramide', 'sfinx', 'sphinx'], [29.9773, 31.1325], 12),
    P('Caïro', 'Cairo', ['cairo', 'kairo'], [30.0444, 31.2357], 9),
    P('Egypte', 'Egypt', [], [26.8, 30.8], 5),
    P('Nijl', 'Nile', ['de nijl', 'river nile'], [26.0, 32.0], 5),
    P('Victoriawatervallen', 'Victoria Falls', ['victoria falls', 'victoria watervallen', 'mosi-oa-tunya'], [-17.9243, 25.8572], 11),
    P('Zambia', 'Zambia', [], [-13.1, 27.8], 5),
    P('Zimbabwe', 'Zimbabwe', [], [-19.0, 29.9], 5),
    P('Madagaskar', 'Madagascar', ['madagascar'], [-18.8, 46.9], 5),
    P('Antananarivo', 'Antananarivo', ['tananarive'], [-18.8792, 47.5079], 9),
    // raadsel C
    P('Lissabon', 'Lisbon', ['lisboa'], [38.7223, -9.1393], 10),
    P('Portugal', 'Portugal', [], [39.5, -8.0], 6),
    P('Loch Ness', 'Loch Ness', ['lochness', 'nessie', 'meer van loch ness'], [57.3229, -4.4244], 10),
    P('Schotland', 'Scotland', [], [56.8, -4.2], 5),
    P('Stockholm', 'Stockholm', ['stadshuset', 'stadhuis van stockholm', 'nobelprijs', 'nobel'], [59.3293, 18.0686], 9),
    P('Zweden', 'Sweden', ['sverige'], [62.2, 15.5], 4),
    P('Eiffeltoren', 'Eiffel Tower', ['eiffel toren', 'tour eiffel', 'eiffel'], [48.8584, 2.2945], 14),
    P('Parijs', 'Paris', [], [48.8566, 2.3522], 10),
    P('Vesuvius', 'Mount Vesuvius', ['vesuvio', 'monte vesuvio', 'pompeii', 'pompeji', 'pompei'], [40.8210, 14.4260], 11),
    P('Napels', 'Naples', ['napoli'], [40.8518, 14.2681], 10),
    P('Helsinki', 'Helsinki', ['finland'], [60.1699, 24.9384], 9),
    P('Brussel', 'Brussels', ['brussels', 'bruxelles', 'belgie', 'belgium', 'atomium'], [50.8503, 4.3517], 10),
    P('Londen', 'London', ['london', 'engeland', 'england', 'big ben', 'verenigd koninkrijk'], [51.5074, -0.1278], 10),
    P('Wenen', 'Vienna', ['vienna', 'wien', 'oostenrijk', 'austria', 'stephansdom'], [48.2082, 16.3738], 10),
    P('Porto', 'Porto', ['oporto', 'port', 'portwijn', 'port wine'], [41.1579, -8.6291], 10),
    P('Zwarte Zee', 'Black Sea', ['black sea', 'zwarte zee', 'krim', 'crimea'], [43.4, 34.3], 5),
    P('Tsjernobyl', 'Chernobyl', ['chernobyl', 'tsjernobil', 'pripjat', 'pripyat', 'oekraine', 'ukraine'], [51.3890, 30.0990], 10),
    P('Bhutan', 'Bhutan', ['bhoetan', 'thimphu', 'timphu', 'paro', 'druk yul', 'donderdraak', 'land van de donderdraak', 'tijgernest', 'tiger nest', "tiger's nest", 'taktsang'], [27.5, 90.5], 7),
    P('Oslo', 'Oslo', ['noorwegen', 'norway'], [59.9139, 10.7522], 9),
    P('Istanbul', 'Istanbul', ['istanboel', 'turkije', 'turkey', 'bosporus'], [41.0082, 28.9784], 9),
    P('Berlijn', 'Berlin', ['berlin', 'duitsland', 'germany', 'brandenburger tor'], [52.5200, 13.4050], 9),
    P('Warschau', 'Warsaw', ['warsaw', 'warszawa', 'polen', 'poland'], [52.2297, 21.0122], 9),
    P('Edinburgh', 'Edinburgh', ['schotland', 'scotland', 'edinburgh castle'], [55.9533, -3.1883], 9),
    P('Sevilla', 'Seville', ['seville', 'andalusie', 'giralda'], [37.3891, -5.9845], 9),
    P('Sicilië', 'Sicily', ['sicilie', 'sicily', 'etna', 'palermo', 'catania'], [37.6000, 14.0150], 7),
    P('Madrid', 'Madrid', [], [40.4168, -3.7038], 9),
    P('Barcelona', 'Barcelona', ['sagrada familia'], [41.3874, 2.1686], 10),
    P('Kopenhagen', 'Copenhagen', ['copenhagen', 'kobenhavn', 'kleine zeemeermin', 'little mermaid'], [55.6761, 12.5683], 10),
    P('Denemarken', 'Denmark', ['danmark'], [56.1, 9.5], 6),
    P('Mont-Saint-Michel', 'Mont-Saint-Michel', ['mont saint michel', 'montsaintmichel'], [48.6361, -1.5115], 12),
    P('Frankrijk', 'France', [], [46.6, 2.4], 5),
    P('Venetië', 'Venice', ['venetie', 'venezia', 'san marco'], [45.4408, 12.3155], 11),
    P('Italië', 'Italy', ['italie', 'italia'], [42.8, 12.6], 5),
    // raadsel D
    P('Oeralgebergte', 'Ural Mountains', ['oeral', 'ural', 'urals', 'oeral gebergte'], [55.0, 59.5], 5),
    P('Jekaterinenburg', 'Yekaterinburg', ['ekaterinburg', 'jekaterinburg'], [56.8389, 60.6057], 9),
    P('Moskou', 'Moscow', ['moskva', 'rode plein', 'red square', 'kremlin'], [55.7539, 37.6208], 10),
    P('Rusland', 'Russia', [], [61.5, 60.0], 3),
    P('Petra', 'Petra', ['petra jordanie', 'petra jordan'], [30.3285, 35.4444], 12),
    P('Jordanië', 'Jordan', ['jordanie'], [31.2, 36.5], 6),
    P('Persepolis', 'Persepolis', ['persepolis iran', 'takht-e jamshid'], [29.9356, 52.8916], 12),
    P('Iran', 'Iran', ['perzië', 'perzie', 'persia'], [32.4, 53.7], 5),
    P('Mekka', 'Mecca', ['mecca', 'makkah', 'kaaba', 'kaäba'], [21.4225, 39.8262], 11),
    P('Saoedi-Arabië', 'Saudi Arabia', ['saoedi arabie', 'saudi-arabie'], [23.9, 45.1], 5),
    P('Mumbai', 'Mumbai', ['bombay', 'gateway of india'], [18.9220, 72.8347], 10),
    P('India', 'India', [], [22.4, 79.0], 4),
    P('Lhasa', 'Lhasa', ['potala', 'potalapaleis', 'potala palace'], [29.6570, 91.1170], 10),
    P('Kathmandu', 'Kathmandu', ['katmandu', 'nepal', 'boudhanath', 'boeddhanath', 'stoepa'], [27.7172, 85.3240], 10),
    P('Tibet', 'Tibet', [], [31.5, 88.0], 5),
    P('Mount Fuji', 'Mount Fuji', ['fuji', 'fujiyama', 'fuji san', 'berg fuji'], [35.3606, 138.7274], 10),
    P('Japan', 'Japan', ['nippon'], [36.5, 138.2], 5),
    P('Baikalmeer', 'Lake Baikal', ['baikal', 'meer baikal', 'baikalmeer', 'baikal lake', 'siberie', 'siberia', 'diepste meer', 'deepest lake'], [53.5, 108.2], 6),
    P('Siberië', 'Siberia', ['siberie'], [60.0, 100.0], 3),
    P('Taj Mahal', 'Taj Mahal', ['tajmahal', 'agra'], [27.1751, 78.0421], 13),
    P('Borobudur', 'Borobudur', ['boroboedoer'], [-7.6079, 110.2038], 13),
    P('Bali', 'Bali', ['denpasar', 'tanah lot', 'ubud', 'rijstterrassen'], [-8.3405, 115.0920], 9),
    P('Java', 'Java', ['jawa'], [-7.5, 110.0], 7),
    P('Indonesië', 'Indonesia', ['indonesie'], [-2.5, 118.0], 4),
    P('Manilla', 'Manila', ['manila'], [14.5995, 120.9842], 10),
    P('Filipijnen', 'Philippines', ['filippijnen', 'philippines', 'luzon'], [14.0, 121.5], 6),

    /* derde reis */
    P('Mount Rushmore', 'Mount Rushmore', ['rushmore'], [43.8791, -103.4591], 12),
    P('Vrijheidsbeeld', 'Statue of Liberty', ['statue of liberty', 'liberty island', 'new york'], [40.6892, -74.0445], 12),
    P('Chicago', 'Chicago', ['cloud gate', 'the bean', 'windy city', 'winderige stad'], [41.8781, -87.6298], 10),
    P('Great Blue Hole', 'Great Blue Hole', ['blue hole', 'belize'], [17.3159, -87.5347], 11),
    P('Chichén Itzá', 'Chichén Itzá', ['chichen itza', 'chichen', 'itza', 'itzá', 'yucatan', 'maya', 'mayapiramide'], [20.6843, -88.5678], 11),
    P('Aconcagua', 'Aconcagua', ['andes', 'andesgebergte', 'hoogste berg van amerika'], [-32.6532, -70.0109], 10),
    P('Bogotá', 'Bogotá', ['bogota'], [4.7110, -74.0721], 9),
    P('Colombia', 'Colombia', [], [4.6, -74.3], 5),
    P('Monding van de Amazone', 'Mouth of the Amazon', ['amazonemonding', 'belem', 'amazone', 'monding amazone', 'amazonerivier'], [-1.4558, -48.5039], 7),
    P('Machu Picchu', 'Machu Picchu', ['machupicchu', 'inca stad', 'incastad', 'verloren stad van de inca', 'lost city of the incas', 'verloren stad', 'lost city', 'inca', 'incas', 'inca rijk', 'inkarijk'], [-13.1631, -72.5450], 12),
    P('Peru', 'Peru', [], [-9.2, -75.0], 5),
    P('Sri Lanka', 'Sri Lanka', ['ceylon', 'colombo'], [6.9271, 79.8612], 8),
    P('K2', 'K2', ['karakorum', 'karakoram'], [35.8808, 76.5133], 9),
    P('Kuala Lumpur', 'Kuala Lumpur', ['petronas', 'maleisie', 'malaysia'], [3.1390, 101.6869], 10),
    P('Terracottaleger', 'Terracotta Army', ['terracotta', 'xian', 'xi an', 'terracottaleger'], [34.3841, 109.2785], 11),
    P('Noordkaap', 'North Cape', ['nordkapp', 'north cape'], [71.1706, 25.7833], 9),
    P('Noorwegen', 'Norway', ['norge'], [62.0, 9.0], 4),
    P('Bakoe', 'Baku', ['baku', 'azerbeidzjan', 'azerbaijan'], [40.4093, 49.8671], 9),
    P('Kaspische Zee', 'Caspian Sea', ['caspian', 'kaspische'], [41.5, 50.5], 5),
    P('Lalibela', 'Lalibela', ['ethiopie', 'ethiopia'], [12.0317, 39.0417], 11),
    P('Tsjaadmeer', 'Lake Chad', ['tsjaad', 'chad', 'lake chad'], [13.0, 14.3], 7),
    P('Congorivier', 'Congo River', ['congo', 'kinshasa'], [-4.3276, 15.3136], 8),
    P('Victoriameer', 'Lake Victoria', ['lake victoria', 'victoria meer'], [-1.0, 33.0], 6),
    P('Sossusvlei', 'Sossusvlei', ['namib', 'namibwoestijn', 'namib desert', 'namibie'], [-24.7272, 15.2903], 9),
    P('Krugerpark', 'Kruger Park', ['kruger', 'kruger national park'], [-24.0, 31.5], 8),
    P('Santorini', 'Santorini', ['thira', 'oia'], [36.3932, 25.4615], 10),
    P('Bagdad', 'Baghdad', ['baghdad', 'irak', 'iraq'], [33.3152, 44.3661], 9),

    /* vierde reis */
    P('Angkor Wat', 'Angkor Wat', ['angkor', 'cambodja', 'cambodia'], [13.4125, 103.8670], 12),
    P('Mongolië', 'Mongolia', ['mongolie', 'mongolia', 'ulaanbaatar', 'oelan bator', 'gobi', 'gobiwoestijn', 'gobi desert'], [46.9, 103.8], 5),
    P('Pyongyang', 'Pyongyang', ['pjongjang', 'pyongjang', 'noord-korea', 'north korea', 'mansudae'], [39.0392, 125.7625], 9),
    P('Seoul', 'Seoul', ['seoel', 'zuid-korea', 'south korea'], [37.5665, 126.9780], 9),
    P('Chengdu', 'Chengdu', ['panda', 'reuzenpanda'], [30.5728, 104.0668], 9),
    P('Taipei', 'Taipei', ['taiwan', 'taipei 101'], [25.0330, 121.5654], 9),
    P('Dubai', 'Dubai', ['burj khalifa', 'burj', 'khalifa', 'emiraten', 'verenigde arabische emiraten', 'uae'], [25.1972, 55.2744], 10),
    P('Malediven', 'Maldives', ['maldiven', 'maldives', 'male'], [3.2028, 73.2207], 7),
    P('Seychellen', 'Seychelles', ['seychelles', 'reuzenschildpad', 'reuzenschildpadden', 'schildpadeiland', 'schildpaddeneiland', 'eiland van de reuzenschildpadden', 'giant tortoise', 'giant tortoises', 'tortoise island', 'mahe', 'praslin'], [-4.6796, 55.4920], 8),
    P('Kilimanjaro', 'Kilimanjaro', ['kilimandjaro', 'kili', 'uhuru', 'tanzania', 'hoogste berg van afrika', 'highest mountain in africa'], [-3.0674, 37.3556], 9),
    P('Mekka', 'Mecca', ['mecca', 'makkah', 'kaaba', 'kaba', 'pelgrimsoord', 'pelgrimsstad', 'bedevaartsoord', 'bedevaart', 'hadj', 'grote moskee', 'masjid al haram', 'al haram'], [21.4225, 39.8262], 11),
    P('Bergen', 'Bergen', ['fjorden', 'fjords', 'noorse fjorden'], [60.3913, 5.3221], 9),
    P('Colosseum', 'Colosseum', ['rome', 'roma', 'colosseum rome'], [41.8902, 12.4922], 13),
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
