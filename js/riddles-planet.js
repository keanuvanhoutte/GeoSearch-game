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
          nl: 'Een reusachtige spiegelende boon op de oever van een groot meer, voor een skyline met twee zwarte torens met dubbele antennes. De grootste stad aan het Michiganmeer.',
          en: 'A giant mirrored bean on the shore of a great lake, in front of a skyline with two black towers with twin antennas. The biggest city on Lake Michigan.',
        } },
      { key: 'chichen', name: { nl: 'Chichén Itzá (Mexico)', en: 'Chichén Itzá (Mexico)' },
        point: [20.6843, -88.5678], zones: [[20.6843, -88.5678, 380]],
        hint: {
          nl: 'Een stenen trappiramide van negen lagen met een steile trap aan elke kant en een tempeltje bovenop, midden in de jungle van de Maya’s. Hij staat op het schiereiland Yucatán in Mexico.',
          en: 'A stone step pyramid of nine layers with a steep staircase on each side and a little temple on top, deep in the jungle of the Maya. It stands on the Yucatán peninsula in Mexico.',
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
      { key: 'bhutan', name: { nl: 'Bhutan', en: 'Bhutan' },
        point: [27.4728, 89.6390], zones: [[27.45, 90.40, 240]],
        hint: {
          nl: 'Een klein koninkrijk in de Himalaya met een witte draak op de vlag. Het telt zijn geluk in plaats van zijn geld en hangt zijn kloosters tegen de rotswand.',
          en: 'A small kingdom in the Himalayas with a white dragon on its flag. It counts its happiness instead of its money and hangs its monasteries on the cliffs.',
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
      { key: 'zwartezee', name: { nl: 'Zwarte Zee', en: 'Black Sea' },
        point: [43.4, 34.3],
        zones: [[43.4, 34.3, 380], [44.6, 37.6, 300], [42.4, 30.4, 300], [41.9, 41.2, 260], [45.2, 31.2, 280]],
        hint: {
          nl: 'Een grote binnenzee tussen Europa en Azië, die alleen via een smalle straat bij Istanbul met de oceaan verbonden is. Van bovenaf steekt het schiereiland de Krim er als een ruit in.',
          en: 'A large inland sea between Europe and Asia, linked to the ocean only by a narrow strait at Istanbul. From the north the Crimean peninsula juts into it like a diamond.',
        } },
      { key: 'tsjernobyl', name: { nl: 'Tsjernobyl (Oekraïne)', en: 'Chernobyl (Ukraine)' },
        point: [51.3890, 30.0990], zones: [[51.3890, 30.0990, 260]],
        hint: {
          nl: 'Een kerncentrale die in 1986 ontplofte. De stad ernaast staat sindsdien leeg: een reuzenrad dat nooit heeft gedraaid, een verlaten flat, en niemand die er nog woont. Het ligt in het noorden van Oekraïne.',
          en: 'A nuclear power station that exploded in 1986. The town beside it has stood empty ever since: a Ferris wheel that never turned, an abandoned block of flats, and nobody living there. It lies in the north of Ukraine.',
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
      { key: 'brussel', name: { nl: 'Brussel (België)', en: 'Brussels (Belgium)' },
        point: [50.8503, 4.3517], zones: [[50.8503, 4.3517, 150]],
        hint: {
          nl: 'Een reusachtig model van een ijzerkristal: negen glimmende bollen aan stalen buizen, gebouwd voor een wereldtentoonstelling. Het staat in de hoofdstad van België, waar ook de Europese Unie zetelt.',
          en: 'A giant model of an iron crystal: nine shining spheres on steel tubes, built for a world fair. It stands in the capital of Belgium, home of the European Union.',
        } },
      { key: 'warschau', name: { nl: 'Warschau (Polen)', en: 'Warsaw (Poland)' },
        point: [52.2297, 21.0122], zones: [[52.2297, 21.0122, 290]],
        hint: {
          nl: 'Een zware torenflat met een spits uit de jaren vijftig boven de stad, en daarnaast een oude markt met smalle gekleurde huizen die na de oorlog opnieuw is opgebouwd. De hoofdstad van Polen.',
          en: 'A heavy 1950s tower block with a spire looming over the city, and beside it an old market square of narrow coloured houses rebuilt after the war. The capital of Poland.',
        } },
      { key: 'oslo', name: { nl: 'Oslo (Noorwegen)', en: 'Oslo (Norway)' },
        point: [59.9139, 10.7522], zones: [[59.9139, 10.7522, 330]],
        hint: {
          nl: 'Een operagebouw als een witte ijsschots die schuin uit het water oprijst, aan het eind van een lange fjord. De hoofdstad van Noorwegen.',
          en: 'An opera house like a white ice floe sloping up out of the water, at the end of a long fjord. The capital of Norway.',
        } },
      { key: 'londen', name: { nl: 'Londen (Engeland)', en: 'London (England)' },
        point: [51.5074, -0.1278], zones: [[51.5074, -0.1278, 150]],
        hint: {
          nl: 'Een hoge klokkentoren met vier wijzerplaten naast het parlement aan de rivier, met rode dubbeldekkerbussen op de brug ervoor. De hoofdstad van het Verenigd Koninkrijk.',
          en: 'A tall clock tower with four faces beside the parliament on the river, with red double-decker buses on the bridge in front. The capital of the United Kingdom.',
        } },
      { key: 'napels', name: { nl: 'Napels (Vesuvius)', en: 'Naples (Vesuvius)' },
        point: [40.8518, 14.2681], zones: [[40.8518, 14.2681, 300]],
        hint: {
          nl: 'Een vulkaan met een dubbele top die tweeduizend jaar geleden de stad Pompeji onder de as bedolf. Klik op de havenstad aan de baai eronder, in het zuiden van Italië.',
          en: 'A volcano with a double summit that buried the city of Pompeii under ash two thousand years ago. Click the harbour city on the bay below it, in southern Italy.',
        } },
      { key: 'wenen', name: { nl: 'Wenen (Oostenrijk)', en: 'Vienna (Austria)' },
        point: [48.2082, 16.3738], zones: [[48.2082, 16.3738, 240]],
        hint: {
          nl: 'Een gotische kathedraal met een dak vol gekleurde ruitjes en één hoge spits, met paardenkoetsen op het plein ervoor. De hoofdstad van Oostenrijk, de stad van de walsen.',
          en: 'A gothic cathedral with a roof of coloured diamond tiles and one tall spire, with horse-drawn carriages on the square in front. The capital of Austria, the city of waltzes.',
        } },
    ],
    hints: {
      nl: [
        'Zes plekken in Europa. De lijn loopt van I naar VI, maar je mag de nummers in elke volgorde plaatsen.',
        'Deze keer vormt de lijn een kléine letter, geen hoofdletter.',
        'I en II vormen samen de dwarsstreep. Vanaf II loopt de lijn linksom rond: over III naar IV, dan omlaag naar V en zo naar VI.',
        'Tussen VI en II blijft een opening. Daar staat de letter open.',
      ],
      en: [
        'Six places in Europe. The line runs from I to VI, but you can place the numbers in any order.',
        'This time the line forms a lower-case letter, not a capital.',
        'I and II together make the crossbar. From II the line runs anticlockwise: over III to IV, then down to V and on to VI.',
        'Between VI and II a gap is left open. That is where the letter opens.',
      ],
    },
  },
  {
    id: 'F',
    letter: 'L',
    position: 2,
    targets: [
      { key: 'edinburgh', name: { nl: 'Edinburgh (Schotland)', en: 'Edinburgh (Scotland)' },
        point: [55.9533, -3.1883], zones: [[55.9533, -3.1883, 330]],
        hint: {
          nl: 'Een burcht boven op een zwarte rots midden in de stad, met doedelzakspelers in geruite rokken ervoor. De hoofdstad van Schotland.',
          en: 'A castle on top of a black crag in the middle of the city, with bagpipers in tartan kilts in front of it. The capital of Scotland.',
        } },
      { key: 'porto', name: { nl: 'Porto (Portugal)', en: 'Porto (Portugal)' },
        point: [41.1579, -8.6291], zones: [[41.1579, -8.6291, 220]],
        hint: {
          nl: 'Een stad aan een riviermonding met een hoge ijzeren boogbrug. In de kelders aan de overkant rijpt de zoete rode wijn die naar de stad is genoemd — en het land trouwens ook.',
          en: 'A city at a river mouth with a tall iron arch bridge. In the cellars across the water ripens the sweet red wine named after the city — and so, in fact, is the country.',
        } },
      { key: 'sicilie', name: { nl: 'Sicilië', en: 'Sicily' },
        point: [37.6000, 14.0150],
        zones: [[37.6, 14.015, 220], [37.5, 15.0, 160], [38.1, 13.36, 160]],
        hint: {
          nl: 'Het driehoekige eiland dat de punt van de Italiaanse laars lijkt weg te schoppen, met de grootste vuurspuwende berg van Europa erop.',
          en: 'The triangular island that looks as if the toe of the Italian boot is kicking it away, with the biggest fire-spitting mountain in Europe on it.',
        } },
    ],
    hints: {
      nl: [
        'Drie plekken in Europa. De lijn loopt van I naar III, maar je mag de nummers in elke volgorde plaatsen.',
        'I en II liggen bijna recht boven elkaar: dat is de rechtopstaande streep van de letter.',
        'Van II loopt de voet naar rechts, naar III.',
      ],
      en: [
        'Three places in Europe. The line runs from I to III, but you can place the numbers in any order.',
        'I and II lie almost straight above one another: that is the upright stroke of the letter.',
        'From II the foot runs to the right, to III.',
      ],
    },
  },
];

window.GeoFinalWordPlanet = 'PLANET';
