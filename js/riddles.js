/* Raadseldata volgens "Uitleg bij Geosearch.docx".
   targets: in de volgorde waarin de lijn de letter tekent. Elk doel heeft een exact punt
   (voor de oplossingslijn) en zones [lat, lng, straal in km] waarbinnen een punt goed telt.
   De stralen zijn ruim gekozen: een gok in de buurt van de juiste plek telt ook.
   Het nummer van een doel (I, II, III…) is het vak op de plaat; de speler kiest zelf in welke volgorde hij ze plaatst.
   hint: de hint voor dat ene nummer. hints: algemene hints over het hele raadsel.
   coast: kustlijn van het laatste doel terug naar het eerste, die de letter afmaakt. */
window.GeoRiddles = [
  {
    id: 'A',
    letter: 'W',
    position: 1,
    targets: [
      { key: 'everest', name: { nl: 'Mount Everest', en: 'Mount Everest' },
        point: [27.988, 86.925], zones: [[27.988, 86.925, 500]],
        hint: {
          nl: 'Een berg met een pijl omhoog en MAX. Het hoogste punt op aarde.',
          en: 'A mountain with an arrow up and MAX. The highest point on earth.',
        } },
      { key: 'singapore', name: { nl: '1/20/13/N/103/44/23/E (Singapore)', en: '1/20/13/N/103/44/23/E (Singapore)' },
        point: [1.337, 103.740], zones: [[1.337, 103.740, 500]],
        hint: {
          nl: 'Coördinaten in graden/minuten/seconden. Typ ze in het zoekvak boven de kaart.',
          en: 'Coordinates in degrees/minutes/seconds. Type them into the search box above the map.',
        } },
      // de hele Muur telt: van Shanhaiguan aan zee tot het westelijke fort Jiayuguan
      { key: 'greatwall', name: { nl: 'Chinese Muur', en: 'Great Wall of China' },
        point: [40.4345, 116.5606],
        zones: [[40.4345, 116.5606, 500], [40.0, 119.75, 300], [40.2, 113.0, 350], [38.3, 109.7, 350],
          [38.5, 106.3, 300], [38.0, 102.6, 300], [39.8, 98.2, 300]],
        hint: {
          nl: 'Een kronkelende muur met wachttorens en een rode vlag met gele sterren. Een wereldberoemd bouwwerk.',
          en: 'A winding wall with watchtowers and a red flag with yellow stars. A world-famous structure.',
        } },
      { key: 'mariana', name: { nl: 'Marianentrog', en: 'Mariana Trench' },
        point: [11.35, 142.2], zones: [[11.35, 142.2, 600], [14.5, 146.5, 500], [19.5, 147.5, 500]],
        hint: {
          nl: 'De pijl wijst tot onder de zeebodem, met MIN. Het diepste punt van de zee.',
          en: 'The arrow points below the sea floor, with MIN. The deepest point of the sea.',
        } },
      { key: 'diomede', name: { nl: 'Diomedeseilanden', en: 'Diomede Islands' },
        point: [65.78, 191.0], zones: [[65.78, -169.0, 500]],
        hint: {
          nl: 'Het rode kruis ligt in de zeestraat tussen twee kusten. Links de Russische vlag, rechts die van Alaska.',
          en: 'The red cross sits in the strait between two coasts. The Russian flag on the left, Alaska on the right.',
        } },
    ],
    hints: {
      nl: ['Vijf vakken, vijf plekken. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.'],
      en: ['Five panels, five places. The line runs from I to V, but you can place the numbers in any order.'],
    },
  },
  {
    id: 'B',
    letter: 'L',
    position: 4,
    targets: [
      { key: 'kakadu', name: { nl: '13/16/21/S/132/50/24/E (Jim Jim Falls, Kakadu)', en: '13/16/21/S/132/50/24/E (Jim Jim Falls, Kakadu)' },
        point: [-13.2726, 132.8399], zones: [[-13.2726, 132.8399, 400]],
        hint: {
          nl: 'Coördinaten: typ ze in het zoekvak boven de kaart. Je komt uit bij een waterval.',
          en: 'Coordinates: type them into the search box above the map. You will end up at a waterfall.',
        } },
      { key: 'uluru', name: { nl: 'Uluru (Ayers Rock)', en: 'Uluru (Ayers Rock)' },
        point: [-25.345, 131.036], zones: [[-25.345, 131.036, 450]],
        hint: {
          nl: 'Kangoeroe + wolken boven een platte, rode rotsberg midden in de woestijn. De beroemdste rots van het land, heilig voor de Aboriginals.',
          en: 'Kangaroo + clouds above a flat, red rock mountain in the middle of the desert. The most famous rock in the country, sacred to the Aboriginal people.',
        } },
      { key: 'opera', name: { nl: 'Operagebouw van Sydney', en: 'Sydney Opera House' },
        point: [-33.857, 151.215], zones: [[-33.857, 151.215, 350]],
        hint: {
          nl: 'Het silhouet aan het water is een wereldberoemd concertgebouw.',
          en: 'The silhouette by the water is a world-famous concert hall.',
        } },
    ],
    hints: {
      nl: ['Drie plekken, allemaal in hetzelfde land.'],
      en: ['Three places, all in the same country.'],
    },
  },
  {
    id: 'C',
    letter: 'R',
    position: 3,
    targets: [
      { key: 'spain', name: { nl: 'Straat van Gibraltar (zuidwestpunt van Europa)', en: 'Strait of Gibraltar (south-west tip of Europe)' },
        point: [36.01, -5.60], zones: [[36.8, -6.5, 550], [40.0, -4.0, 650]],
        hint: {
          nl: 'Twee zuilen aan een smalle zeestraat, met de vlag van Gibraltar. Het uiterste zuidwesten.',
          en: 'Two pillars by a narrow strait, with the flag of Gibraltar. The far south-west.',
        } },
      { key: 'iceland', name: { nl: 'IJsland', en: 'Iceland' },
        point: [64.9, -18.6], zones: [[64.9, -18.6, 600]],
        hint: {
          nl: 'Een rebus. Een ijsblok + een eiland = …',
          en: 'A rebus. An ice block + an island = …',
        } },
      { key: 'finland', name: { nl: 'Finland (Lapland, Rovaniemi)', en: 'Finland (Lapland, Rovaniemi)' },
        point: [66.5, 25.7], zones: [[61.5, 25.0, 400], [65.5, 26.5, 450], [68.5, 26.0, 350]],
        hint: {
          nl: 'Een rendier in de sneeuw, in het hoge noorden waar de Kerstman woont. Steek de zee over naar dat land.',
          en: 'A reindeer in the snow, far up north where Santa Claus lives. Cross the sea to that country.',
        } },
      { key: 'ireland', name: { nl: 'Ierland', en: 'Ireland' },
        point: [53.4, -8.0], zones: [[53.4, -8.0, 450]],
        hint: {
          nl: 'Een pint stout met een gouden harp. Het eiland van de groen-wit-oranje vlag.',
          en: 'A pint of stout with a golden harp. The island of the green-white-orange flag.',
        } },
      { key: 'greece', name: { nl: 'Akropolis, Athene (Griekenland)', en: 'Acropolis, Athens (Greece)' },
        point: [38.0, 23.7], zones: [[38.5, 23.5, 650]],
        hint: {
          nl: 'Een tempel op een rotsplateau, in het uiterste zuidoosten van het werelddeel.',
          en: 'A temple on a rocky plateau, in the far south-east of the continent.',
        } },
    ],
    hints: {
      nl: ['Het vlaggetje bovenaan vertelt in welk werelddeel je zoekt.'],
      en: ['The small flag at the top tells you which part of the world to search.'],
    },
  },
  {
    id: 'D',
    letter: 'D',
    position: 5,
    targets: [
      { key: 'morocco', name: { nl: 'Marokko', en: 'Morocco' },
        point: [31.8, -7.1], zones: [[34.0, -5.0, 450], [31.0, -7.5, 550]],
        hint: {
          nl: 'MAR: de pijl vertrekt in een land waarvan de naam zo begint.',
          en: 'MOR: the arrow starts in a country whose name begins like that.',
        } },
      { key: 'togo', name: { nl: 'Togo', en: 'Togo' },
        point: [8.6, 0.9], zones: [[8.2, 1.0, 500]],
        hint: {
          nl: 'TOGO: de pijl eindigt in een land met die naam.',
          en: 'TOGO: the arrow ends in a country with that name.',
        } },
    ],
    // West-Afrikaanse kust van Togo terug naar Marokko
    coast: [
      [6.13, 1.22], [5.55, -0.20], [4.74, -2.09], [5.25, -4.00], [4.37, -7.72], [6.31, -10.80],
      [8.48, -13.23], [9.51, -13.71], [11.00, -15.10], [12.33, -16.73], [13.45, -16.58], [14.72, -17.50],
      [16.03, -16.50], [18.08, -16.03], [19.37, -16.53], [20.77, -17.05], [23.70, -15.95], [26.13, -14.49],
      [27.94, -12.93], [29.38, -10.17], [30.42, -9.62], [31.51, -9.77],
    ],
    hints: {
      nl: [
        'De grote tekening is een werelddeel dat op zijn zij ligt.',
        'De golfjes en de stippellijn tonen het stuk kust waar de letter ligt.',
        'Onderweg loopt je lijn dwars door een groot land in de Sahel: Mali.',
        'De rechte lijn vormt samen met de kustlijn de letter.',
      ],
      en: [
        'The big drawing is a continent lying on its side.',
        'The little waves and the dotted line show the stretch of coast where the letter lies.',
        'On the way, your line cuts straight through a large country in the Sahel: Mali.',
        'The straight line together with the coastline forms the letter.',
      ],
    },
  },
  {
    id: 'E',
    letter: 'O',
    position: 2,
    targets: [
      { key: 'tikal', name: { nl: 'Tikal (Guatemala)', en: 'Tikal (Guatemala)' },
        point: [17.222, -89.623], zones: [[17.222, -89.623, 400], [18.0, -92.5, 550], [15.5, -90.3, 350], [20.5, -89.0, 370], [19.5, -97.0, 450]],
        hint: {
          nl: 'Een trappiramide in het regenwoud, met het wapen van Guatemala. TIKAL.',
          en: 'A step pyramid in the rainforest, with the coat of arms of Guatemala. TIKAL.',
        } },
      { key: 'cuba', name: { nl: 'Cuba', en: 'Cuba' },
        point: [23.1, -82.4], zones: [[23.0, -82.4, 350], [22.0, -79.5, 350], [20.5, -76.0, 400]],
        hint: {
          nl: 'Een vlag met blauwe strepen, een rode driehoek en één witte ster: een eiland.',
          en: 'A flag with blue stripes, a red triangle and one white star: an island.',
        } },
    ],
    // kust van de Golf van Mexico: van Cuba via Florida en Texas terug naar Mexico
    coast: [
      [24.55, -81.80], [25.15, -81.10], [26.14, -81.80], [27.60, -82.75], [29.14, -83.03], [29.68, -85.00],
      [30.15, -85.75], [30.33, -87.20], [30.23, -88.03], [30.39, -88.90], [29.15, -89.25], [29.23, -90.00],
      [29.50, -91.90], [29.70, -93.87], [29.30, -94.80], [28.60, -95.90], [27.80, -97.10], [25.95, -97.15],
      [23.80, -97.75], [22.25, -97.80], [20.95, -97.35], [19.20, -96.13], [18.77, -95.75], [18.15, -94.43],
      [18.55, -92.65],
    ],
    hints: {
      nl: [
        'Het vlaggetje bovenaan vertelt op welk continent je zoekt.',
        'Trek de lijn van I naar II. De kust van de golf sluit de lijn tot een gesloten letter.',
        'De golf is de Golf van Mexico. Zoek ze op in het zoekvak.',
        'Volg vanaf Cuba de kust langs Florida, Texas en Mexico terug naar Tikal. Na II is elke klik een extra punt.',
      ],
      en: [
        'The small flag at the top tells you which continent to search.',
        'Draw the line from I to II. The coast of the gulf closes the line into a closed letter.',
        'The gulf is the Gulf of Mexico. Look it up in the search box.',
        'From Cuba, follow the coast past Florida, Texas and Mexico back to Tikal. After II, every click adds an extra point.',
      ],
    },
  },
];

window.GeoFinalWord = 'WORLD';
