/* Vierde raadselset, eindwoord OUR. Zelfde opbouw als js/riddles.js:
   targets staan in de volgorde waarin de lijn de letter tekent, elk met een exact punt
   (voor de oplossingslijn) en zones [lat, lng, straal in km] waarbinnen een klik goed telt.
   coast: [] bij raadsel B betekent: de letter sluit met een rechte lijn van het laatste doel terug naar I. */
window.GeoRiddlesOur = [
  {
    id: 'A',
    letter: 'R',
    position: 3,
    targets: [
      { key: 'angkor', name: { nl: 'Angkor Wat (Cambodja)', en: 'Angkor Wat (Cambodia)' },
        point: [13.4125, 103.8670], zones: [[13.4125, 103.8670, 350]],
        hint: {
          nl: 'Een tempel met vijf torens als maïskolven, weerspiegeld in zijn eigen slotgracht. De grootste tempel ter wereld, in Cambodja.',
          en: 'A temple with five towers like corn cobs, mirrored in its own moat. The largest temple in the world, in Cambodia.',
        } },
      { key: 'gobi', name: { nl: 'Gobiwoestijn', en: 'Gobi Desert' },
        point: [43.5, 103.5],
        zones: [[43.5, 103.5, 450], [43.2, 107.8, 400], [43.0, 99.5, 400]],
        hint: {
          nl: 'Een koude woestijn met kamelen met twee bulten en ronde vilten tenten. Ze ligt tussen Mongolië en Noord-China.',
          en: 'A cold desert with two-humped camels and round felt tents. It lies between Mongolia and northern China.',
        } },
      { key: 'seoul', name: { nl: 'Seoul (Zuid-Korea)', en: 'Seoul (South Korea)' },
        point: [37.5665, 126.9780], zones: [[37.5665, 126.9780, 400]],
        hint: {
          nl: 'Een paleispoort met een gebogen dak, onder een witte vlag met een rood-blauwe cirkel en vier zwarte tekens.',
          en: 'A palace gate with a curved roof, under a white flag with a red-and-blue circle and four black marks.',
        } },
      { key: 'chengdu', name: { nl: 'Chengdu (China)', en: 'Chengdu (China)' },
        point: [30.5728, 104.0668], zones: [[30.5728, 104.0668, 400]],
        hint: {
          nl: 'Een zwart-witte beer die bamboe eet. Hij leeft alleen in de bergen rond deze stad in het binnenland van China.',
          en: 'A black-and-white bear that eats bamboo. It lives only in the mountains around this city in inland China.',
        } },
      { key: 'taipei', name: { nl: 'Taipei (Taiwan)', en: 'Taipei (Taiwan)' },
        point: [25.0330, 121.5654], zones: [[25.0330, 121.5654, 400]],
        hint: {
          nl: 'Een toren die op een bamboestengel lijkt, met acht stukken op elkaar. Hij staat op het eiland ten oosten van China.',
          en: 'A tower that looks like a bamboo stalk, with eight sections stacked up. It stands on the island east of China.',
        } },
    ],
    hints: {
      nl: [
        'Vijf plekken in Oost- en Zuidoost-Azië. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'I en II liggen recht boven elkaar: dat is de rechtopstaande streep.',
        'IV ligt weer op die streep, halverwege: daar sluit de bocht van bovenaan. Van IV loopt de laatste lijn schuin naar beneden naar V.',
      ],
      en: [
        'Five places in East and South-East Asia. The line runs from I to V, but you can place the numbers in any order.',
        'I and II lie straight above one another: that is the upright stroke.',
        'IV lies back on that stroke, halfway up: that is where the bend from the top closes. From IV the last line runs diagonally down to V.',
      ],
    },
  },
  {
    id: 'B',
    letter: 'O',
    position: 1,
    targets: [
      { key: 'dubai', name: { nl: 'Dubai (Burj Khalifa)', en: 'Dubai (Burj Khalifa)' },
        point: [25.1972, 55.2744], zones: [[25.1972, 55.2744, 400]],
        hint: {
          nl: 'De hoogste toren ter wereld, een spits van glas die uit de woestijn omhoogsteekt aan de Perzische Golf.',
          en: 'The tallest tower in the world, a glass spire rising out of the desert on the Persian Gulf.',
        } },
      { key: 'maldives', name: { nl: 'Malediven', en: 'Maldives' },
        point: [3.2028, 73.2207], zones: [[3.2028, 73.2207, 450]],
        hint: {
          nl: 'Ringen van koraal met huisjes op palen boven turkoois water. Honderden lage eilandjes ten zuidwesten van India.',
          en: 'Rings of coral with huts on stilts above turquoise water. Hundreds of low islets south-west of India.',
        } },
      { key: 'seychelles', name: { nl: 'Seychellen', en: 'Seychelles' },
        point: [-4.6796, 55.4920], zones: [[-4.6796, 55.4920, 400]],
        hint: {
          nl: 'Ronde granieten rotsblokken op een wit strand, met een reuzenschildpad eronder. Een eilandengroep ten noordoosten van Madagaskar.',
          en: 'Round granite boulders on a white beach, with a giant tortoise below them. An island group north-east of Madagascar.',
        } },
      { key: 'kilimanjaro', name: { nl: 'Kilimanjaro', en: 'Kilimanjaro' },
        point: [-3.0674, 37.3556], zones: [[-3.0674, 37.3556, 400]],
        hint: {
          nl: 'Een alleenstaande berg met een platte, besneeuwde top boven de savanne met giraffen. De hoogste berg van Afrika.',
          en: 'A lone mountain with a flat, snowy top above the savanna with giraffes. The highest mountain in Africa.',
        } },
      { key: 'mecca', name: { nl: 'Mekka (de Kaäba)', en: 'Mecca (the Kaaba)' },
        point: [21.4225, 39.8262], zones: [[21.4225, 39.8262, 400]],
        hint: {
          nl: 'Een zwarte kubus met een gouden band, midden op een ronde binnenplaats met bogen. De pelgrimsstad in het westen van Saoedi-Arabië.',
          en: 'A black cube with a golden band, in the middle of a round courtyard with arches. The pilgrim city in the west of Saudi Arabia.',
        } },
    ],
    // geen kustlijn: de letter sluit met een rechte lijn van V terug naar I
    coast: [],
    hints: {
      nl: [
        'Vijf plekken in een ring rond dezelfde oceaan. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'Bij V is de letter nog niet af: van daar keert de lijn in een rechte lijn terug naar I.',
        'Staan alle vijf de nummers op de kaart? Klik dan vlak naast nummer I: dat extra punt sluit de ring.',
      ],
      en: [
        'Five places in a ring around the same ocean. The line runs from I to V, but you can place the numbers in any order.',
        'At V the letter is not finished: from there the line runs straight back to I.',
        'All five numbers on the map? Then click right beside number I: that extra point closes the ring.',
      ],
    },
  },
  {
    id: 'C',
    letter: 'U',
    position: 2,
    targets: [
      { key: 'bergen', name: { nl: 'Bergen (Noorwegen)', en: 'Bergen (Norway)' },
        point: [60.3913, 5.3221], zones: [[60.3913, 5.3221, 300]],
        hint: {
          nl: 'Steile rotswanden met watervallen die recht in een diepe, smalle zeearm vallen. De havenstad van de fjorden aan de westkust van Noorwegen.',
          en: 'Steep cliffs with waterfalls dropping straight into a deep, narrow arm of the sea. The harbour city of the fjords on Norway’s west coast.',
        } },
      { key: 'eiffel', name: { nl: 'Eiffeltoren, Parijs', en: 'Eiffel Tower, Paris' },
        point: [48.8584, 2.2945], zones: [[48.8584, 2.2945, 300]],
        hint: {
          nl: 'Een ijzeren toren van driehonderd meter hoog. Hij staat in maar één stad ter wereld.',
          en: 'An iron tower three hundred metres high. It stands in only one city in the world.',
        } },
      { key: 'barcelona', name: { nl: 'Barcelona (Spanje)', en: 'Barcelona (Spain)' },
        point: [41.3874, 2.1686], zones: [[41.3874, 2.1686, 350]],
        hint: {
          nl: 'Een kerk met hoge, spitse torens die na meer dan honderd jaar nog altijd niet af is; de bouwkraan staat er nog. In de grootste stad aan de Spaanse oostkust.',
          en: 'A church with tall, pointed towers that is still not finished after more than a hundred years; the crane is still there. In the biggest city on Spain’s east coast.',
        } },
      { key: 'rome', name: { nl: 'Colosseum, Rome', en: 'Colosseum, Rome' },
        point: [41.8902, 12.4922], zones: [[41.8902, 12.4922, 350]],
        hint: {
          nl: 'Een rond stadion van bogen op bogen, waar tweeduizend jaar geleden gladiatoren vochten. Het staat in de hoofdstad van Italië.',
          en: 'A round stadium of arches upon arches, where gladiators fought two thousand years ago. It stands in the capital of Italy.',
        } },
      { key: 'stockholm', name: { nl: 'Stockholm (Zweden)', en: 'Stockholm (Sweden)' },
        point: [59.3293, 18.0686], zones: [[59.3293, 18.0686, 350]],
        hint: {
          nl: 'Een rood houten huisje met witte hoeken tussen de dennen, bij een blauwe vlag met een geel kruis. Klik op de hoofdstad van dat land.',
          en: 'A red wooden cottage with white corners among the pines, beside a blue flag with a yellow cross. Click the capital of that country.',
        } },
    ],
    hints: {
      nl: [
        'Vijf plekken in Europa. De lijn loopt van I naar V, maar je mag de nummers in elke volgorde plaatsen.',
        'I, II en III liggen bijna recht onder elkaar: dat is de linkerkant van de letter.',
        'Van III loopt de lijn naar rechts langs de onderkant en dan weer schuin omhoog naar V.',
      ],
      en: [
        'Five places in Europe. The line runs from I to V, but you can place the numbers in any order.',
        'I, II and III lie almost straight below one another: that is the left side of the letter.',
        'From III the line runs right along the bottom and then diagonally up again to V.',
      ],
    },
  },
];

window.GeoFinalWordOur = 'OUR';
