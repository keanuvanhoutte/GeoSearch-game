/* Derde raadselset, eindwoord PLANET. Zelfde opbouw als js/riddles.js:
   targets staan in de volgorde waarin de lijn de letter tekent, elk met een exact punt
   (voor de oplossingslijn) en zones [lat, lng, straal in km] waarbinnen een klik goed telt.
   Bij raadsel A en D loopt de lijn even over zichzelf terug; dat hoort zo. */
window.GeoRiddlesPlanet = [
  {
    id: 'A',
    letter: 'T',
    position: 6,
    targets: [
      { key: 'rushmore', name: { nl: 'Mount Rushmore', en: 'Mount Rushmore' },
        point: [43.8791, -103.4591], zones: [[43.8791, -103.4591, 400]],
        hint: {
          nl: 'Vier presidentenkoppen die uit een granieten bergwand zijn gehouwen, in de Black Hills van South Dakota.',
          en: 'Four presidents’ heads carved out of a granite mountain face, in the Black Hills of South Dakota.',
        } },
      { key: 'liberty', name: { nl: 'Vrijheidsbeeld, New York', en: 'Statue of Liberty, New York' },
        point: [40.6892, -74.0445], zones: [[40.6892, -74.0445, 350]],
        hint: {
          nl: 'Een groen standbeeld met een fakkel en een kroon met stralen, op een eiland in de haven van de grootste stad van het land.',
          en: 'A green statue with a torch and a spiked crown, on an island in the harbour of the country’s biggest city.',
        } },
      { key: 'chicago', name: { nl: 'Chicago', en: 'Chicago' },
        point: [41.8781, -87.6298], zones: [[41.8781, -87.6298, 350]],
        hint: {
          nl: 'Een reusachtige spiegelende boon op een plein voor de wolkenkrabbers, aan de oever van het Michiganmeer.',
          en: 'A giant mirrored bean on a square in front of the skyscrapers, on the shore of Lake Michigan.',
        } },
      { key: 'bluehole', name: { nl: 'Great Blue Hole (Belize)', en: 'Great Blue Hole (Belize)' },
        point: [17.3159, -87.5347], zones: [[17.3159, -87.5347, 350]],
        hint: {
          nl: 'Een volmaakt rond, diepblauw gat midden in een lichtblauw koraalrif, voor de kust van Belize.',
          en: 'A perfectly round, deep blue hole in the middle of a pale blue coral reef, off the coast of Belize.',
        } },
    ],
    hints: {
      nl: [
        'Vier plekken in Noord- en Midden-Amerika. De lijn loopt van I naar IV, maar je mag de nummers in elke volgorde plaatsen.',
        'I, II en III liggen bijna op één lijn van west naar oost: samen vormen ze de bovenbalk.',
        'Van III loopt de lijn recht naar beneden naar IV. Tussen II en III gaat de lijn even over zichzelf terug; dat hoort zo.',
      ],
      en: [
        'Four places in North and Central America. The line runs from I to IV, but you can place the numbers in any order.',
        'I, II and III lie almost on one west-to-east line: together they form the top bar.',
        'From III the line runs straight down to IV. Between II and III the line doubles back over itself; that is meant to happen.',
      ],
    },
  },
  {
    id: 'B',
    letter: 'P',
    position: 1,
    targets: [
      { key: 'aconcagua', name: { nl: 'Aconcagua', en: 'Aconcagua' },
        point: [-32.6532, -70.0109], zones: [[-32.6532, -70.0109, 400]],
        hint: {
          nl: 'De hoogste berg van heel Amerika, met een condor erboven. Hij staat in de Andes, op de grens van Argentinië en Chili.',
          en: 'The highest mountain in all of the Americas, with a condor above it. It stands in the Andes, on the border of Argentina and Chile.',
        } },
      { key: 'bogota', name: { nl: 'Bogotá (Colombia)', en: 'Bogotá (Colombia)' },
        point: [4.7110, -74.0721], zones: [[4.7110, -74.0721, 400]],
        hint: {
          nl: 'Een geel-blauw-rode vlag en een koffietak met rode bessen: het koffieland in het noordwesten van het werelddeel. Klik op de hoofdstad, hoog in de bergen.',
          en: 'A yellow-blue-red flag and a coffee branch with red berries: the coffee country in the north-west of the continent. Click its capital, high in the mountains.',
        } },
      { key: 'amazon', name: { nl: 'Monding van de Amazone', en: 'Mouth of the Amazon' },
        point: [-1.4558, -48.5039], zones: [[-1.4558, -48.5039, 500]],
        hint: {
          nl: 'Daar waar de grootste rivier ter wereld in de oceaan stroomt, met toekans in het regenwoud. Ze mondt uit op de evenaar, aan de oostkant.',
          en: 'Where the largest river in the world flows into the ocean, with toucans in the rainforest. It reaches the sea on the equator, on the eastern side.',
        } },
      { key: 'machupicchu', name: { nl: 'Machu Picchu (Peru)', en: 'Machu Picchu (Peru)' },
        point: [-13.1631, -72.5450], zones: [[-13.1631, -72.5450, 400]],
        hint: {
          nl: 'Een verloren stad van de Inca’s met terrassen, hoog op een bergkam tussen twee steile toppen. Er lopen lama’s rond.',
          en: 'A lost Inca city with terraces, high on a ridge between two steep peaks. Llamas walk around it.',
        } },
    ],
    hints: {
      nl: [
        'Vier plekken in Zuid-Amerika. De lijn loopt van I naar IV, maar je mag de nummers in elke volgorde plaatsen.',
        'I en II liggen recht boven elkaar: dat is de rechtopstaande streep van de letter.',
        'IV ligt precies op die streep, halverwege. De bocht rechtsboven sluit daar weer aan.',
      ],
      en: [
        'Four places in South America. The line runs from I to IV, but you can place the numbers in any order.',
        'I and II lie straight above one another: that is the upright stroke of the letter.',
        'IV lies exactly on that stroke, halfway up. The bend at the top right closes back onto it.',
      ],
    },
  },
  {
    id: 'C',
    letter: 'N',
    position: 4,
    targets: [
      { key: 'srilanka', name: { nl: 'Sri Lanka', en: 'Sri Lanka' },
        point: [6.9271, 79.8612], zones: [[6.9271, 79.8612, 400]],
        hint: {
          nl: 'Een druppelvormig eiland vol theeplantages, met olifanten. Het hangt onder aan de punt van India.',
          en: 'A teardrop-shaped island full of tea plantations, with elephants. It hangs below the tip of India.',
        } },
      { key: 'k2', name: { nl: 'K2', en: 'K2' },
        point: [35.8808, 76.5133], zones: [[35.8808, 76.5133, 400]],
        hint: {
          nl: 'K2: de op één na hoogste berg ter wereld, een steile piramide van steen en ijs in het Karakorumgebergte.',
          en: 'K2: the second-highest mountain in the world, a steep pyramid of rock and ice in the Karakoram range.',
        } },
      { key: 'kualalumpur', name: { nl: 'Kuala Lumpur (Maleisië)', en: 'Kuala Lumpur (Malaysia)' },
        point: [3.1390, 101.6869], zones: [[3.1390, 101.6869, 400]],
        hint: {
          nl: 'Een tweelingtoren met een brug tussen de twee helften, in de hoofdstad van Maleisië, vlak bij de evenaar.',
          en: 'Twin towers with a bridge between them, in the capital of Malaysia, right near the equator.',
        } },
      { key: 'xian', name: { nl: 'Terracottaleger, Xi’an (China)', en: 'Terracotta Army, Xi’an (China)' },
        point: [34.3841, 109.2785], zones: [[34.3841, 109.2785, 400]],
        hint: {
          nl: 'Duizenden kleien soldaten in rijen in een kuil, begraven bij het graf van de eerste keizer van China.',
          en: 'Thousands of clay soldiers in rows in a pit, buried by the tomb of the first emperor of China.',
        } },
    ],
    hints: {
      nl: [
        'Vier plekken in Azië. De lijn loopt van I naar IV, maar je mag de nummers in elke volgorde plaatsen.',
        'I en II vormen samen de linkerpoot, III en IV de rechterpoot. Daartussen loopt een schuine lijn.',
      ],
      en: [
        'Four places in Asia. The line runs from I to IV, but you can place the numbers in any order.',
        'I and II form the left stroke, III and IV the right stroke. A slanted line runs between them.',
      ],
    },
  },
  {
    id: 'D',
    letter: 'A',
    position: 3,
    targets: [
      { key: 'lisbon', name: { nl: 'Lissabon (Portugal)', en: 'Lisbon (Portugal)' },
        point: [38.7223, -9.1393], zones: [[38.7223, -9.1393, 400]],
        hint: {
          nl: 'Een gele tram die tegen een steile straat vol tegeltjes op klimt. De hoofdstad in het uiterste westen van het werelddeel.',
          en: 'A yellow tram climbing a steep street full of painted tiles. The capital in the far west of the continent.',
        } },
      { key: 'nordkapp', name: { nl: 'Noordkaap (Noorwegen)', en: 'North Cape (Norway)' },
        point: [71.1706, 25.7833], zones: [[71.1706, 25.7833, 400]],
        hint: {
          nl: 'Een stalen wereldbol op een kale klif boven de zee, waar de zon ’s zomers nooit ondergaat. Het noordelijkste punt van het werelddeel.',
          en: 'A steel globe on a bare cliff above the sea, where the sun never sets in summer. The northernmost point of the continent.',
        } },
      { key: 'baku', name: { nl: 'Bakoe (Azerbeidzjan)', en: 'Baku (Azerbaijan)' },
        point: [40.4093, 49.8671], zones: [[40.4093, 49.8671, 400]],
        hint: {
          nl: 'Drie torens in de vorm van vlammen, naast oude oliepompen aan de westoever van de grootste binnenzee ter wereld.',
          en: 'Three towers shaped like flames, beside old oil pumps on the west shore of the largest inland sea in the world.',
        } },
      { key: 'moscow', name: { nl: 'Moskou (Rode Plein)', en: 'Moscow (Red Square)' },
        point: [55.7539, 37.6208], zones: [[55.7539, 37.6208, 400]],
        hint: {
          nl: 'Kleurige uivormige koepels naast een rode muur met een rode ster. De hoofdstad van het grootste land ter wereld.',
          en: 'Colourful onion domes beside a red wall with a red star. The capital of the largest country in the world.',
        } },
      { key: 'amsterdam', name: { nl: 'Amsterdam', en: 'Amsterdam' },
        point: [52.3676, 4.9041], zones: [[52.3676, 4.9041, 300]],
        hint: {
          nl: 'Een molen, tulpen en een fiets bij het water. De hoofdstad van het lage land aan de Noordzee.',
          en: 'A windmill, tulips and a bicycle by the water. The capital of the low country on the North Sea.',
        } },
    ],
    hints: {
      nl: [
        'Vijf plekken in Europa en aan de rand ervan. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'II ligt helemaal bovenaan: dat is de punt. I en III zijn de twee voeten.',
        'IV en V vormen samen de dwarsbalk. Tussen III en IV loopt de lijn even over zichzelf terug; dat hoort zo.',
      ],
      en: [
        'Five places in Europe and on its edge. The line runs from I to V, but you can place the numbers in any order.',
        'II is right at the top: that is the point. I and III are the two feet.',
        'IV and V together make the crossbar. Between III and IV the line doubles back over itself; that is meant to happen.',
      ],
    },
  },
  {
    id: 'E',
    letter: 'E',
    position: 5,
    targets: [
      { key: 'lalibela', name: { nl: 'Lalibela (Ethiopië)', en: 'Lalibela (Ethiopia)' },
        point: [12.0317, 39.0417], zones: [[12.0317, 39.0417, 400]],
        hint: {
          nl: 'Een kerk in de vorm van een kruis, niet gebouwd maar naar beneden uitgehakt in de rots. Ze ligt in het hoogland van Ethiopië.',
          en: 'A church shaped like a cross, not built but carved downwards into the rock. It lies in the highlands of Ethiopia.',
        } },
      { key: 'chad', name: { nl: 'Tsjaadmeer', en: 'Lake Chad' },
        point: [13.0, 14.3], zones: [[13.0, 14.3, 400]],
        hint: {
          nl: 'Een meer midden in de Sahel dat almaar kleiner wordt: de stippellijn laat zien hoe groot het vroeger was.',
          en: 'A lake in the middle of the Sahel that keeps shrinking: the dotted line shows how big it used to be.',
        } },
      { key: 'congo', name: { nl: 'Congorivier (Kinshasa)', en: 'Congo River (Kinshasa)' },
        point: [-4.3276, 15.3136], zones: [[-4.3276, 15.3136, 400]],
        hint: {
          nl: 'Een brede, bruine rivier dwars door het grootste regenwoud van het werelddeel, met gorilla’s. Klik waar hij door de evenaarsjungle naar het zuiden buigt.',
          en: 'A wide, brown river straight through the continent’s largest rainforest, with gorillas. Click where it bends south through the equatorial jungle.',
        } },
      { key: 'victorialake', name: { nl: 'Victoriameer', en: 'Lake Victoria' },
        point: [-1.0, 33.0], zones: [[-1.0, 33.0, 400]],
        hint: {
          nl: 'Het grootste meer van het werelddeel, waar drie landen aan grenzen. Vissers varen er met houten boten op de evenaar.',
          en: 'The biggest lake of the continent, bordered by three countries. Fishermen sail wooden boats on it, right on the equator.',
        } },
      { key: 'sossusvlei', name: { nl: 'Sossusvlei (Namibwoestijn)', en: 'Sossusvlei (Namib Desert)' },
        point: [-24.7272, 15.2903], zones: [[-24.7272, 15.2903, 400]],
        hint: {
          nl: 'Reusachtige roodoranje zandduinen met zwarte dode bomen ervoor, in de oudste woestijn ter wereld aan de zuidwestkust.',
          en: 'Enormous red-orange sand dunes with black dead trees in front, in the oldest desert in the world on the south-west coast.',
        } },
      { key: 'kruger', name: { nl: 'Krugerpark (Zuid-Afrika)', en: 'Kruger Park (South Africa)' },
        point: [-24.0, 31.5], zones: [[-24.0, 31.5, 350]],
        hint: {
          nl: 'Olifanten en giraffen bij een paraplu-acacia in de ondergaande zon: het beroemdste wildpark in het noordoosten van Zuid-Afrika.',
          en: 'Elephants and giraffes by an umbrella acacia in the setting sun: the most famous game park in the north-east of South Africa.',
        } },
    ],
    hints: {
      nl: [
        'Zes plekken in Afrika. De lijn loopt van I naar VI, maar je mag de nummers in elke volgorde plaatsen.',
        'II, III en V liggen bijna recht boven elkaar: samen vormen zij de rechtopstaande streep.',
        'Vanaf die streep lopen drie lijnen naar rechts: naar I bovenaan, naar IV in het midden en naar VI onderaan.',
      ],
      en: [
        'Six places in Africa. The line runs from I to VI, but you can place the numbers in any order.',
        'II, III and V lie almost straight above one another: together they form the upright stroke.',
        'From that stroke three lines run to the right: to I at the top, to IV in the middle and to VI at the bottom.',
      ],
    },
  },
  {
    id: 'F',
    letter: 'L',
    position: 2,
    targets: [
      { key: 'petersburg', name: { nl: 'Sint-Petersburg (Rusland)', en: 'Saint Petersburg (Russia)' },
        point: [59.9386, 30.3141], zones: [[59.9386, 30.3141, 400]],
        hint: {
          nl: 'Een lang groen-wit paleis van de tsaren aan een brede rivier, met een gouden spits ernaast. De stad ligt aan de Oostzee.',
          en: 'A long green-and-white palace of the tsars on a wide river, with a golden spire beside it. The city lies on the Baltic Sea.',
        } },
      { key: 'santorini', name: { nl: 'Santorini (Griekenland)', en: 'Santorini (Greece)' },
        point: [36.3932, 25.4615], zones: [[36.3932, 25.4615, 350]],
        hint: {
          nl: 'Spierwitte huisjes met blauwe koepels op een steile kraterrand, hoog boven een diepblauwe zee.',
          en: 'Snow-white houses with blue domes on a steep crater rim, high above a deep blue sea.',
        } },
      { key: 'baghdad', name: { nl: 'Bagdad (Irak)', en: 'Baghdad (Iraq)' },
        point: [33.3152, 44.3661], zones: [[33.3152, 44.3661, 400]],
        hint: {
          nl: 'De stad van duizend-en-één-nacht, met koepels en minaretten en dadelpalmen aan de Tigris.',
          en: 'The city of the Thousand and One Nights, with domes and minarets and date palms on the Tigris.',
        } },
    ],
    hints: {
      nl: ['Drie plekken. De lijn loopt van I recht naar beneden naar II en dan naar rechts naar III.'],
      en: ['Three places. The line runs from I straight down to II and then right to III.'],
    },
  },
];

window.GeoFinalWordPlanet = 'PLANET';
