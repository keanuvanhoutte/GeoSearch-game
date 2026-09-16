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
      { key: 'mongolia', name: { nl: 'Mongolië', en: 'Mongolia' },
        point: [46.9, 103.8],
        zones: [[46.9, 103.8, 450], [47.9, 107.5, 420], [45.3, 99.0, 400], [48.8, 97.5, 380], [47.5, 113.0, 420], [44.3, 109.5, 380]],
        hint: {
          nl: 'Een vlag met drie banen — rood, blauw, rood — en op de linkerbaan een gouden teken met vlammen, een zon en een maan. Het land van Genghis Khan, ingeklemd tussen Rusland en China.',
          en: 'A flag with three bands — red, blue, red — and on the left band a golden sign with flames, a sun and a moon. The land of Genghis Khan, wedged between Russia and China.',
        } },
      { key: 'pyongyang', name: { nl: 'Pyongyang (Noord-Korea)', en: 'Pyongyang (North Korea)' },
        point: [39.0392, 125.7625], zones: [[39.0392, 125.7625, 350]],
        hint: {
          nl: 'Twee reusachtige bronzen standbeelden van de vroegere leiders kijken uit over een plein, met een muurschildering van een besneeuwde berg erachter; de mensen eronder lijken piepklein. Het land voert een rode vlag met een witte cirkel en een rode ster. Klik op de hoofdstad van Noord-Korea.',
          en: 'Two gigantic bronze statues of the former leaders look out over a square, with a mural of a snow-capped mountain behind them; the people below them look tiny. The country flies a red flag with a white circle and a red star. Click the capital of North Korea.',
        } },
      { key: 'chengdu', name: { nl: 'Chengdu (China)', en: 'Chengdu (China)' },
        point: [30.5728, 104.0668], zones: [[30.5728, 104.0668, 400]],
        hint: {
          nl: 'Een zwart-witte beer die bijna niets anders eet dan bamboe. In het wild leeft hij nergens ter wereld behalve in de bamboebergen van Sichuan, in het westen van China. Klik op de miljoenenstad daar, met haar beroemde pandacentrum.',
          en: 'A black-and-white bear that eats almost nothing but bamboo. In the wild it lives nowhere on earth except the bamboo mountains of Sichuan, in western China. Click the city of millions there, with its famous panda centre.',
        } },
      { key: 'taipei', name: { nl: 'Taipei (Taiwan)', en: 'Taipei (Taiwan)' },
        point: [25.0330, 121.5654], zones: [[25.0330, 121.5654, 400]],
        hint: {
          nl: 'Een glazen toren van acht stukken op elkaar, als een bamboestengel. Zijn naam is een getal: zoveel verdiepingen telt hij. Hij was ooit de hoogste ter wereld en staat in de grootste stad van het eiland ten oosten van China.',
          en: 'A glass tower of eight stacked sections, like a bamboo stalk. Its name is a number: that is how many floors it has. It was once the tallest in the world and stands in the biggest city of the island east of China.',
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
          nl: 'De hoogste toren ter wereld: een spits van glas die in trapjes uit de woestijn omhoogsteekt, 828 meter hoog. Hij staat aan de Perzische Golf.',
          en: 'The tallest tower in the world: a glass spire stepping up out of the desert, 828 metres high. It stands on the Persian Gulf.',
        } },
      { key: 'maldives', name: { nl: 'Malediven', en: 'Maldives' },
        point: [3.2028, 73.2207], zones: [[3.2028, 73.2207, 450]],
        hint: {
          nl: 'Huisjes met rieten daken op palen boven turkoois water, bij een rode vlag met een groen vlak en een witte maansikkel. Honderden lage koraaleilandjes ten zuidwesten van India.',
          en: 'Huts with thatched roofs on stilts above turquoise water, beside a red flag with a green panel and a white crescent. Hundreds of low coral islets south-west of India.',
        } },
      { key: 'seychelles', name: { nl: 'Seychellen', en: 'Seychelles' },
        point: [-4.6796, 55.4920], zones: [[-4.6796, 55.4920, 400]],
        hint: {
          nl: 'Ronde granieten rotsblokken op een wit strand, met reuzenschildpadden die er vrij rondlopen: landschildpadden zo groot als een kind. Een eilandengroep in de Indische Oceaan, ten noordoosten van Madagaskar.',
          en: 'Round granite boulders on a white beach, with giant tortoises roaming free: land tortoises as big as a child. An island group in the Indian Ocean, north-east of Madagascar.',
        } },
      { key: 'kilimanjaro', name: { nl: 'Kilimanjaro', en: 'Kilimanjaro' },
        point: [-3.0674, 37.3556], zones: [[-3.0674, 37.3556, 400]],
        hint: {
          nl: 'Een alleenstaande vulkaan met eeuwige sneeuw op zijn platte top, 5895 meter hoog: geen berg in heel Afrika komt hoger. Eronder ligt de savanne met giraffen en acaciabomen.',
          en: 'A lone volcano with permanent snow on its flat top, 5895 metres high: no mountain in all of Africa rises higher. Below lies the savanna with giraffes and acacia trees.',
        } },
      { key: 'mecca', name: { nl: 'Mekka (de Kaäba)', en: 'Mecca (the Kaaba)' },
        point: [21.4225, 39.8262], zones: [[21.4225, 39.8262, 400]],
        hint: {
          nl: 'Een zwarte kubus met een gouden band, midden op een plein waar pelgrims in witte kleren in kringen omheen lopen. Het pelgrimsoord in het westen van Saoedi-Arabië.',
          en: 'A black cube with a golden band, in the middle of a courtyard where pilgrims in white robes walk in circles around it. The pilgrimage site in the west of Saudi Arabia.',
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
          nl: 'Een rode bakstenen toren met drie gouden kronen op de spits, en ernaast de smalle gekleurde huizen van de oude stad aan het water. In dat stadhuis wordt elk jaar het Nobelprijsdiner gehouden; het staat in de hoofdstad van het land met de blauw-gele vlag.',
          en: 'A red brick tower with three golden crowns on its spire, and beside it the narrow coloured houses of the old town on the water. The Nobel Prize banquet is held in that city hall every year; it stands in the capital of the country with the blue-and-yellow flag.',
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
