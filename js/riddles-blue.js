/* Tweede raadselset, eindwoord BLUE. Zelfde opbouw als js/riddles.js:
   targets staan in de volgorde waarin de lijn de letter tekent, elk met een exact punt
   (voor de oplossingslijn) en zones [lat, lng, straal in km] waarbinnen een klik goed telt.
   Het nummer van een doel (I, II, III…) is het vak op de plaat; de speler kiest zelf de volgorde.
   coast: [] bij raadsel C betekent: de letter sluit met een rechte lijn van het laatste doel terug naar I.
   Raadsel D tekent een kleine letter e: eerst de dwarsstreep, dan linksom de lus eromheen. */
window.GeoRiddlesBlue = [
  {
    id: 'A',
    letter: 'U',
    position: 3,
    targets: [
      { key: 'vancouver', name: { nl: 'Vancouver', en: 'Vancouver' },
        point: [49.2839, -123.1183], zones: [[49.2839, -123.1183, 400]],
        hint: {
          nl: 'Coördinaten in graden/minuten/seconden. Typ ze in het zoekvak boven de kaart. Je komt uit in een havenstad aan de westkust van Canada.',
          en: 'Coordinates in degrees/minutes/seconds. Type them into the search box above the map. You end up in a harbour city on the west coast of Canada.',
        } },
      { key: 'goldengate', name: { nl: 'Golden Gate Bridge, San Francisco', en: 'Golden Gate Bridge, San Francisco' },
        point: [37.8199, -122.4783], zones: [[37.8199, -122.4783, 350]],
        hint: {
          nl: 'Een rode hangbrug in de mist. Ze hangt over de doorgang naar de baai van een stad in Californië.',
          en: 'A red suspension bridge in the fog. It spans the gateway to the bay of a city in California.',
        } },
      { key: 'mexicocity', name: { nl: 'Mexico-Stad', en: 'Mexico City' },
        point: [19.4326, -99.1332], zones: [[19.4326, -99.1332, 450]],
        hint: {
          nl: 'Een adelaar op een cactus met een slang in zijn bek: dat staat midden op de vlag van dit land. De ster boven de wolkenkrabbers wijst naar de hoofdstad, niet naar het land.',
          en: 'An eagle on a cactus with a snake in its beak: that sits in the middle of this flag. The star above the skyline points to the capital, not to the country.',
        } },
      { key: 'canaveral', name: { nl: 'Kaap Canaveral (Kennedy Space Center)', en: 'Cape Canaveral (Kennedy Space Center)' },
        point: [28.5729, -80.6490], zones: [[28.5729, -80.6490, 400]],
        hint: {
          nl: 'Een raket stijgt op tussen de palmbomen. Vanaf deze kaap in Florida vertrekken de raketten naar de ruimte.',
          en: 'A rocket lifts off between the palm trees. From this cape in Florida the rockets leave for space.',
        } },
      { key: 'niagara', name: { nl: 'Niagarawatervallen', en: 'Niagara Falls' },
        point: [43.0799, -79.0747], zones: [[43.0799, -79.0747, 400]],
        hint: {
          nl: 'Een brede waterval in de vorm van een hoefijzer, tussen een esdoornblad en de sterrenvlag: hij ligt precies op de grens van twee landen.',
          en: 'A wide horseshoe-shaped waterfall, between a maple leaf and the stars and stripes: it lies right on the border between two countries.',
        } },
    ],
    hints: {
      nl: [
        'Vijf plekken, allemaal in Noord- en Midden-Amerika. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'Twee plekken liggen aan de Grote Oceaan, twee aan de Atlantische kant, en één ligt onderaan tussen die twee in.',
      ],
      en: [
        'Five places, all in North and Central America. The line runs from I to V, but you can place the numbers in any order.',
        'Two places lie on the Pacific side, two on the Atlantic side, and one sits at the bottom between them.',
      ],
    },
  },
  {
    id: 'B',
    letter: 'L',
    position: 2,
    targets: [
      { key: 'giza', name: { nl: 'Piramides van Gizeh', en: 'Pyramids of Giza' },
        point: [29.9773, 31.1325], zones: [[29.9773, 31.1325, 450]],
        hint: {
          nl: 'Drie puntige koningsgraven en een leeuw met een mensenhoofd, in het zand naast de langste rivier van het werelddeel.',
          en: 'Three pointed royal tombs and a lion with a human head, in the sand beside the longest river of the continent.',
        } },
      { key: 'victoriafalls', name: { nl: 'Victoriawatervallen', en: 'Victoria Falls' },
        point: [-17.9243, 25.8572], zones: [[-17.9243, 25.8572, 400]],
        hint: {
          nl: 'Coördinaten: typ ze in het zoekvak boven de kaart. Je komt uit bij een enorme waterval, ver in het zuiden.',
          en: 'Coordinates: type them into the search box above the map. You end up at an enormous waterfall, far to the south.',
        } },
      { key: 'madagascar', name: { nl: 'Madagaskar', en: 'Madagascar' },
        point: [-18.8792, 47.5079], zones: [[-18.8792, 47.5079, 500], [-22.5, 45.5, 450], [-15.0, 49.5, 400]],
        hint: {
          nl: 'Een maki met een zwart-wit geringde staart. In het wild leeft hij alleen op dit lange eiland, ten oosten van het vasteland.',
          en: 'A lemur with a black-and-white ringed tail. In the wild it lives only on this long island, east of the mainland.',
        } },
    ],
    hints: {
      nl: ['Drie plekken in en bij Afrika. De lijn loopt van I via II naar III.'],
      en: ['Three places in and around Africa. The line runs from I via II to III.'],
    },
  },
  {
    id: 'C',
    letter: 'B',
    position: 1,
    targets: [
      { key: 'madrid', name: { nl: 'Madrid (Spanje)', en: 'Madrid (Spain)' },
        point: [40.4168, -3.7038], zones: [[40.4168, -3.7038, 400]],
        hint: {
          nl: 'Een stier die in een arena vol toeschouwers op een rode doek afstormt. Het land dat het grootste deel van het schiereiland in het zuidwesten van Europa beslaat; klik midden in dat land, op de hoofdstad.',
          en: 'A bull charging a red cloth in an arena full of spectators. The country that fills most of the peninsula in the south-west of Europe; click the middle of that country, on its capital.',
        } },
      { key: 'lochness', name: { nl: 'Loch Ness (Schotland)', en: 'Loch Ness (Scotland)' },
        point: [57.3229, -4.4244], zones: [[57.3229, -4.4244, 400]],
        hint: {
          nl: 'Een lang, smal meer tussen de heuvels van de Schotse Hooglanden, met een beroemd monster erin.',
          en: 'A long, narrow lake between the hills of the Scottish Highlands, with a famous monster in it.',
        } },
      { key: 'copenhagen', name: { nl: 'Kopenhagen (Denemarken)', en: 'Copenhagen (Denmark)' },
        point: [55.6761, 12.5683], zones: [[55.6761, 12.5683, 350]],
        hint: {
          nl: 'Gekleurde grachthuizen aan een oude haven, met een houten zeilboot en de rood-witte kruisvlag. Klik op de hoofdstad van dat land.',
          en: 'Coloured canal houses along an old harbour, with a wooden sailing boat and the red-and-white cross flag. Click the capital of that country.',
        } },
      { key: 'montsaintmichel', name: { nl: 'Mont-Saint-Michel (Frankrijk)', en: 'Mont-Saint-Michel (France)' },
        point: [48.6361, -1.5115], zones: [[48.6361, -1.5115, 300]],
        hint: {
          nl: 'Een abdij met een spitse toren op een rotseiland in een baai: bij eb loop je ernaartoe, bij vloed staat ze in zee. Aan de noordwestkust van Frankrijk.',
          en: 'An abbey with a pointed spire on a rocky island in a bay: at low tide you walk to it, at high tide it stands in the sea. On the north-west coast of France.',
        } },
      { key: 'venice', name: { nl: 'Venetië (Italië)', en: 'Venice (Italy)' },
        point: [45.4408, 12.3155], zones: [[45.4408, 12.3155, 300]],
        hint: {
          nl: 'Een gondel in een smalle gracht tussen oude huizen, met een hoge klokkentoren. De stad in het noordoosten van Italië die op het water is gebouwd.',
          en: 'A gondola in a narrow canal between old houses, with a tall bell tower. The city in the north-east of Italy that is built on the water.',
        } },
    ],
    // geen kustlijn: de letter sluit met een rechte lijn van V terug naar I
    coast: [],
    hints: {
      nl: [
        'Vijf plekken in Europa. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'I en II liggen recht boven elkaar: samen vormen zij de rechtopstaande streep van de letter.',
        'IV ligt vlak naast die streep, precies halverwege. Daar knikt de letter in het midden.',
        'Bij V is de letter nog niet af: klik vlak naast nummer I. Dat extra punt sluit de lijn.',
      ],
      en: [
        'Five places in Europe. The line runs from I to V, but you can place the numbers in any order.',
        'I and II lie straight above one another: together they form the upright stroke of the letter.',
        'IV lies right beside that stroke, exactly halfway. That is where the letter bends in the middle.',
        'At V the letter is not finished: click right beside number I. That extra point closes the line.',
      ],
    },
  },
  {
    id: 'D',
    letter: 'E',
    position: 4,
    targets: [
      { key: 'nepal', name: { nl: 'Nepal', en: 'Nepal' },
        point: [28.3, 84.1],
        zones: [[28.3, 84.1, 200], [27.7, 85.3, 240], [27.6, 86.4, 260], [27.0, 87.5, 260]],
        hint: {
          nl: 'Het smalle bergland tussen India en Tibet, waar de hoogste bergen ter wereld staan. In het dal hangen gebedsvlaggetjes aan een witte koepel met twee grote ogen erop.',
          en: 'The narrow mountain country between India and Tibet, home to the highest mountains on earth. In the valley prayer flags hang from a white dome with two big eyes painted on it.',
        } },
      { key: 'fuji', name: { nl: 'Mount Fuji (Japan)', en: 'Mount Fuji (Japan)' },
        point: [35.3606, 138.7274], zones: [[35.3606, 138.7274, 400]],
        hint: {
          nl: 'Een volmaakt gevormde vulkaan met een brede besneeuwde top, achter een rode poort: met 3776 meter de hoogste berg van Japan, en de heilige berg van dat land.',
          en: 'A perfectly shaped volcano with a broad snowy top, behind a red gate: at 3776 metres the highest mountain in Japan, and that country’s sacred mountain.',
        } },
      { key: 'baikal', name: { nl: 'Baikalmeer (Siberië)', en: 'Lake Baikal (Siberia)' },
        point: [53.5000, 108.2000],
        zones: [[53.5, 108.2, 450], [51.8, 105.0, 350], [55.4, 109.6, 400]],
        hint: {
          nl: 'Siberië, net ten noorden van Mongolië: daar ligt het diepste meer ter wereld, 1642 meter diep. ’s Winters ligt er meterdik ijs op, met zeehonden die erop liggen te zonnen. Klik ergens op dat lange sikkelvormige meer.',
          en: 'Siberia, just north of Mongolia: there lies the deepest lake in the world, 1642 metres deep. In winter metres-thick ice covers it, with seals basking on top. Click anywhere on that long crescent-shaped lake.',
        } },
      { key: 'tajmahal', name: { nl: 'Taj Mahal (India)', en: 'Taj Mahal (India)' },
        point: [27.1751, 78.0421], zones: [[27.1751, 78.0421, 400]],
        hint: {
          nl: 'Een wit marmeren grafpaleis met een grote koepel, vier minaretten en een spiegelvijver ervoor. Het staat in het noorden van India.',
          en: 'A white marble tomb palace with a big dome, four minarets and a reflecting pool in front. It stands in the north of India.',
        } },
      { key: 'bali', name: { nl: 'Bali (Indonesië)', en: 'Bali (Indonesia)' },
        point: [-8.3405, 115.0920], zones: [[-8.3405, 115.0920, 350]],
        hint: {
          nl: 'Een tempelpoort die middendoor gespleten is, met groene rijstvelden eromheen en een vulkaan erachter. Het bekendste vakantie-eiland van Indonesië, vlak ten oosten van Java.',
          en: 'A temple gate split down the middle, with green rice fields around it and a volcano behind. Indonesia’s best-known holiday island, just east of Java.',
        } },
      { key: 'manila', name: { nl: 'Manilla (Filipijnen)', en: 'Manila (Philippines)' },
        point: [14.5995, 120.9842], zones: [[14.5995, 120.9842, 450]],
        hint: {
          nl: 'Een eilandenrijk van meer dan zevenduizend eilanden aan de rand van de Stille Oceaan: een lang smal eiland in het westen, een zwerm kleine eilanden in het midden en een groot eiland in het zuiden. Klik op de hoofdstad, op het grootste eiland in het noorden.',
          en: 'An island nation of more than seven thousand islands on the edge of the Pacific Ocean: a long narrow island in the west, a swarm of small ones in the middle and a big island in the south. Click the capital, on the largest island in the north.',
        } },
    ],
    hints: {
      nl: [
        'Zes plekken in Azië. De lijn loopt van I naar VI, maar je mag de nummers in elke volgorde plaatsen.',
        'Deze keer vormt de lijn een kléine letter, geen hoofdletter.',
        'I en II vormen samen de dwarsstreep. Vanaf II loopt de lijn linksom rond: over III naar IV, dan omlaag naar V en zo naar VI.',
        'Tussen VI en II blijft een opening. Daar staat de letter open.',
      ],
      en: [
        'Six places in Asia. The line runs from I to VI, but you can place the numbers in any order.',
        'This time the line forms a lower-case letter, not a capital.',
        'I and II together make the crossbar. From II the line runs anticlockwise: over III to IV, then down to V and on to VI.',
        'Between VI and II a gap is left open. That is where the letter opens.',
      ],
    },
  },
];

window.GeoFinalWordBlue = 'BLUE';
