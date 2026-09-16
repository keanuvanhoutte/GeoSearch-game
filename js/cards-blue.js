/* Raadselkaarten van de tweede reis (eindwoord BLUE), in dezelfde atlasstijl als js/cards.js.
   De vakken I, II, III… zijn tegelijk de volgorde waarin de lijn de letter tekent.
   data-num="0" enz. markeert het vak van elk nummer: dat licht op bij de hint van dat nummer. */
(function () {
  let seq = 0;

  /* Geeft alle id's in een plaat een uniek voorvoegsel, zodat dezelfde plaat twee keer
     op één pagina kan staan (zijpaneel + vergroting) zonder dat patronen elkaar storen. */
  function scoped(svg) {
    const P = `bl${++seq}`;
    const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    return ids.reduce((s, id) => s
      .split(`id="${id}"`).join(`id="${P}-${id}"`)
      .split(`#${id})`).join(`#${P}-${id})`)
      .split(`"#${id}"`).join(`"#${P}-${id}"`), svg);
  }

  const CARDS = {
    /* Plaat I — raadsel A (U) · Amerika */
    A: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat I — Raadsel A" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bA-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="bA-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
          <pattern id="bA-h2" width="8" height="4" patternUnits="userSpaceOnUse"><path d="M0 2H8" stroke="#46697a" stroke-opacity=".55" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#bA-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT I</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL A · V PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-3 98 120)">
            <rect x="18" y="82" width="160" height="76" fill="#f1e7d3" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.2"></rect>
            <text x="98" y="114" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="1" fill="#2b2118">49/17/02/N</text>
            <text x="98" y="142" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="1" fill="#2b2118">123/07/06/W</text>
          </g>
          <circle cx="98" cy="188" r="7" fill="none" stroke="#a8812f" stroke-width="1.6"></circle>
          <path d="M98 176v-4M98 200v4M86 188h-4M110 188h4" stroke="#a8812f" stroke-width="1.4"></path>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M258 245v20M248 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="150" width="164" height="68" fill="#dbe6e5"></rect>
          <rect x="16" y="150" width="164" height="68" fill="url(#bA-h)"></rect>
          <path d="M24 46C56 38 82 54 112 46C138 39 160 48 176 44" fill="none" stroke="#46697a" stroke-opacity=".3" stroke-width="2"></path>
          <path d="M22 70C54 62 80 78 110 70C136 63 158 72 174 68" fill="none" stroke="#46697a" stroke-opacity=".16" stroke-width="2"></path>
          <path d="M16 126L56 56Q98 138 140 56L180 126" fill="none" stroke="#9e3b28" stroke-width="3"></path>
          <g stroke="#9e3b28" stroke-width="1.6">
            <path d="M30 102V146M42 81V146M70 79V146M84 92V146M98 97V146M112 92V146M126 79V146M154 81V146M166 102V146"></path>
          </g>
          <rect x="50" y="52" width="10" height="94" fill="#9e3b28"></rect>
          <rect x="136" y="52" width="10" height="94" fill="#9e3b28"></rect>
          <path d="M50 76h10M50 100h10M50 124h10M136 76h10M136 100h10M136 124h10" stroke="#faf4e6" stroke-width="2"></path>
          <rect x="16" y="145" width="164" height="7" fill="#9e3b28"></rect>
          <path d="M24 176C48 168 72 184 96 176C120 168 148 184 172 176" fill="none" stroke="#46697a" stroke-width="1.6"></path>
          <path d="M24 198C48 190 72 206 96 198C120 190 148 206 172 198" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M478 245v20M468 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-2 98 58)">
            <rect x="36" y="28" width="124" height="60" fill="#f6f2ea"></rect>
            <rect x="36" y="28" width="41.3" height="60" fill="#3f7a4e"></rect>
            <rect x="118.7" y="28" width="41.3" height="60" fill="#9e3b28"></rect>
            <g transform="translate(98 58)" fill="#2b2118">
              <ellipse cx="0" cy="12" rx="6" ry="8"></ellipse>
              <ellipse cx="-7" cy="8" rx="3.6" ry="5.4" transform="rotate(-25 -7 8)"></ellipse>
              <ellipse cx="7" cy="9" rx="3.6" ry="5.4" transform="rotate(25 7 9)"></ellipse>
              <path d="M-2 3C-5 -1 -10 -3 -16 -4C-11 -8 -6 -8 -2 -5Z"></path>
              <path d="M4 3C7 -1 12 -4 17 -5C15 0 12 3 9 4Z"></path>
              <path d="M-3 -5C-3 -9 -1 -12 2 -12C5 -12 7 -9 7 -5L5 6H-3Z"></path>
              <circle cx="4" cy="-14" r="3.2"></circle>
              <path d="M6 -16L12 -17L7 -12Z"></path>
              <path d="M12 -17C16 -18 17 -14 21 -15" fill="none" stroke="#2b2118" stroke-width="1.7" stroke-linecap="round"></path>
            </g>
            <rect x="36" y="28" width="124" height="60" fill="none" stroke="#2b2118" stroke-width="1.6"></rect>
          </g>
          <polygon points="104,109 107.3,117.5 116.4,118 109.3,123.7 111.6,132.5 104,127.6 96.4,132.5 98.7,123.7 91.6,118 100.7,117.5" fill="#9e3b28" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></polygon>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <rect x="22" y="164" width="22" height="32"></rect>
            <rect x="48" y="150" width="18" height="46"></rect>
            <rect x="70" y="170" width="22" height="26"></rect>
            <rect x="96" y="142" width="16" height="54"></rect>
            <rect x="116" y="160" width="24" height="36"></rect>
            <rect x="144" y="152" width="20" height="44"></rect>
          </g>
          <g fill="#2b2118" opacity=".3">
            <rect x="27" y="170" width="4" height="5"></rect><rect x="35" y="170" width="4" height="5"></rect>
            <rect x="27" y="181" width="4" height="5"></rect><rect x="35" y="181" width="4" height="5"></rect>
            <rect x="53" y="157" width="4" height="5"></rect><rect x="60" y="157" width="4" height="5"></rect>
            <rect x="53" y="168" width="4" height="5"></rect><rect x="60" y="168" width="4" height="5"></rect>
            <rect x="53" y="179" width="4" height="5"></rect><rect x="60" y="179" width="4" height="5"></rect>
            <rect x="75" y="177" width="4" height="5"></rect><rect x="83" y="177" width="4" height="5"></rect>
            <rect x="100" y="149" width="4" height="5"></rect><rect x="106" y="149" width="4" height="5"></rect>
            <rect x="100" y="160" width="4" height="5"></rect><rect x="106" y="160" width="4" height="5"></rect>
            <rect x="100" y="171" width="4" height="5"></rect><rect x="106" y="171" width="4" height="5"></rect>
            <rect x="100" y="182" width="4" height="5"></rect><rect x="106" y="182" width="4" height="5"></rect>
            <rect x="121" y="167" width="4" height="5"></rect><rect x="129" y="167" width="4" height="5"></rect>
            <rect x="121" y="179" width="4" height="5"></rect><rect x="129" y="179" width="4" height="5"></rect>
            <rect x="149" y="159" width="4" height="5"></rect><rect x="157" y="159" width="4" height="5"></rect>
            <rect x="149" y="171" width="4" height="5"></rect><rect x="157" y="171" width="4" height="5"></rect>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <text x="98" y="216" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="12" letter-spacing="3" fill="#6b5943">${lang === 'en' ? 'CAPITAL' : 'HOOFDSTAD'}</text>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        <path d="M698 245v20M688 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g stroke="#a8812f" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round">
            <path d="M30 40v8M26 44h8M160 56v8M156 60h8M44 70v6M41 73h6"></path>
          </g>
          <rect x="16" y="196" width="164" height="22" fill="#dbe6e5"></rect>
          <rect x="16" y="196" width="164" height="22" fill="url(#bA-h2)"></rect>
          <g stroke="#2b2118" stroke-width="2" fill="none">
            <path d="M132 196V72M146 196V72"></path>
            <path d="M132 88h14M132 110h14M132 132h14M132 154h14M132 176h14"></path>
          </g>
          <path d="M84 60C92 44 100 44 108 60V150H84Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M84 118h24" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4"></path>
          <circle cx="96" cy="86" r="6" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.8"></circle>
          <path d="M84 150L72 176H84Z" fill="#9e3b28" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M108 150L120 176H108Z" fill="#9e3b28" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <rect x="84" y="150" width="24" height="26" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M88 176C90 190 94 196 96 206C98 196 102 190 104 176Z" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2">
            <circle cx="66" cy="196" r="13"></circle><circle cx="50" cy="201" r="9"></circle>
            <circle cx="122" cy="198" r="11"></circle><circle cx="138" cy="203" r="7"></circle>
          </g>
          <g transform="translate(30 196)" stroke="#2b2118" stroke-width="2" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -16 -2 -30 2 -44"></path>
            <path d="M2 -44C-6 -52 -15 -52 -20 -46"></path>
            <path d="M2 -44C10 -52 19 -50 23 -44"></path>
            <path d="M2 -44C-4 -54 -2 -62 4 -66"></path>
            <path d="M2 -44C10 -48 17 -44 19 -38"></path>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M918 245v20M908 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="76" width="164" height="142" fill="#dbe6e5"></rect>
          <rect x="16" y="76" width="164" height="28" fill="#c7dbe4"></rect>
          <path d="M16 104H52L46 190H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M180 104H144L150 190H180Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M22 126C30 138 34 152 36 168M170 126C162 138 158 152 156 168" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2"></path>
          <rect x="52" y="104" width="92" height="82" fill="#c7dbe4"></rect>
          <g stroke="#46697a" stroke-opacity=".5" stroke-width="1.4">
            <path d="M60 106V182M70 106V186M80 106V182M90 106V188M100 106V182M110 106V186M120 106V182M130 106V186M140 106V182"></path>
          </g>
          <path d="M16 104H180" stroke="#2b2118" stroke-width="2.4"></path>
          <path d="M26 92C50 86 74 98 98 92C122 86 150 98 172 92" fill="none" stroke="#46697a" stroke-opacity=".6" stroke-width="1.6"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2">
            <circle cx="70" cy="190" r="14"></circle><circle cx="98" cy="194" r="18"></circle>
            <circle cx="128" cy="190" r="14"></circle><circle cx="48" cy="196" r="10"></circle><circle cx="150" cy="196" r="10"></circle>
          </g>
          <g transform="translate(20 20)">
            <rect width="46" height="28" fill="#f6f2ea"></rect>
            <rect width="12" height="28" fill="#9e3b28"></rect>
            <rect x="34" width="12" height="28" fill="#9e3b28"></rect>
            <g transform="translate(23 14)"><path d="M0 -11L1.6 -6.4L5.6 -7.4L4.4 -3.4L9 -1.6L6.4 0.6L8 4L3.4 3L3 5.6L0.6 3L1 10L-1 10L-0.6 3L-3 5.6L-3.4 3L-8 4L-6.4 0.6L-9 -1.6L-4.4 -3.4L-5.6 -7.4L-1.6 -6.4Z" fill="#9e3b28"></path></g>
            <rect width="46" height="28" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <g transform="translate(130 20)">
            <rect width="46" height="28" fill="#f6f2ea"></rect>
            <g fill="#9e3b28">
              <rect y="0" width="46" height="2"></rect><rect y="4" width="46" height="2"></rect>
              <rect y="8" width="46" height="2"></rect><rect y="12" width="46" height="2"></rect>
              <rect y="16" width="46" height="2"></rect><rect y="20" width="46" height="2"></rect>
              <rect y="24" width="46" height="2"></rect>
            </g>
            <rect width="19" height="14" fill="#2d4b86"></rect>
            <g fill="#f6f2ea"><circle cx="5" cy="4" r="1"></circle><circle cx="10" cy="4" r="1"></circle><circle cx="15" cy="4" r="1"></circle><circle cx="7.5" cy="8" r="1"></circle><circle cx="13" cy="8" r="1"></circle><circle cx="5" cy="11" r="1"></circle><circle cx="10" cy="11" r="1"></circle><circle cx="15" cy="11" r="1"></circle></g>
            <rect width="46" height="28" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">V</text>
        </g>

        <path d="M60 440H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="474" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="474" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">I → V</text>
      </svg>`),

    /* Plaat II — raadsel B (L) · Afrika */
    B: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat II — Raadsel B" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bB-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="bB-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#bB-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT II</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL B · III PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <circle cx="262" cy="56" r="17" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.8"></circle>
          <polygon points="128,70 206,196 50,196" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></polygon>
          <path d="M128 72L168 194" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          <polygon points="222,104 280,196 164,196" fill="#ede1c4" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></polygon>
          <path d="M222 106L251 194" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2"></path>
          <polygon points="286,142 318,196 254,196" fill="#e6d9be" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></polygon>
          <g transform="translate(30 196)">
            <path d="M0 0V-9C0 -13 4 -15 9 -15H50V0Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M14 -15V0M30 -15V0" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
            <path d="M26 0V-26C26 -32 31 -36 39 -36H100C107 -36 111 -32 111 -26V0Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <g transform="translate(42 -36)">
              <path d="M-19 0L-14 -22C-12 -31 -6 -36 0 -36C6 -36 12 -31 14 -22L19 0Z" fill="#ede1c4" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
              <path d="M-9 -27C-9 -32 9 -32 9 -27L10 -10C10 -4 -10 -4 -10 -10Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
              <circle cx="-4" cy="-22" r="1.8" fill="#2b2118"></circle>
              <circle cx="4" cy="-22" r="1.8" fill="#2b2118"></circle>
              <path d="M-3 -11h6" stroke="#2b2118" stroke-width="1.3"></path>
              <path d="M-15 -18h-2M15 -18h2M-17 -9h-2M17 -9h2" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.2"></path>
            </g>
          </g>
          <path d="M16 196H304" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 212C86 202 214 202 272 212" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M48 228C96 220 208 220 258 228" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1"></path>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="320" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M410 245v20M400 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-3 160 118)">
            <rect x="42" y="70" width="236" height="96" fill="#f1e7d3" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.2"></rect>
            <text x="160" y="108" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="19" letter-spacing="1" fill="#2b2118">17/55/28/S</text>
            <text x="160" y="142" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="19" letter-spacing="1" fill="#2b2118">25/51/24/E</text>
          </g>
          <circle cx="160" cy="196" r="8" fill="none" stroke="#a8812f" stroke-width="1.8"></circle>
          <path d="M160 182v-5M160 210v5M146 196h-5M174 196h5" stroke="#a8812f" stroke-width="1.6"></path>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M790 245v20M780 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(820 130)" data-num="2">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="16" width="288" height="218" fill="#dbe6e5"></rect>
          <rect x="16" y="16" width="288" height="218" fill="url(#bB-h)"></rect>
          <path d="M138.9 26.0 L142.9 31.7 L149.6 41.8 L150.3 51.1 L151.7 62.6 L155.5 70.5 L155.8 79.8 L152.4 84.2 L146.9 97.1 L142.9 107.1 L141.1 115.0 L134.7 131.5 L130.0 145.9 L126.6 163.1 L121.1 177.5 L116.4 193.3 L111.6 207.6 L107.6 214.1 L97.4 217.7 L83.3 222.0 L75.6 218.4 L68.2 213.4 L64.8 201.9 L63.0 189.7 L58.0 176.1 L59.4 164.6 L61.4 155.9 L71.6 146.6 L74.3 135.8 L71.6 124.4 L68.2 111.4 L70.2 99.9 L71.6 92.8 L73.6 86.6 L86.5 79.8 L94.0 74.8 L102.8 69.8 L116.4 62.6 L121.8 52.6 L126.6 43.9 L133.4 35.3 L136.1 29.6 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M133 41C121 62 112 95 108 127C104 156 99 180 97 199" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.6"></path>
          <path d="M126 60C132 66 138 74 142 84M112 104C118 110 124 118 128 128M102 150C108 156 113 164 117 174" fill="none" stroke="#2b2118" stroke-opacity=".16" stroke-width="1.2"></path>
          <path d="M97 199C94 205 92 212 92 218" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3"></path>
          <g transform="translate(212 42)">
            <path d="M28 168C56 158 70 132 66 104C62 74 42 54 20 48" fill="none" stroke="#f6f2ea" stroke-width="15" stroke-linecap="round"></path>
            <path d="M28 168C56 158 70 132 66 104C62 74 42 54 20 48" fill="none" stroke="#2b2118" stroke-width="15" stroke-dasharray="10 11"></path>
            <ellipse cx="0" cy="122" rx="31" ry="42" fill="#e6d9be" stroke="#2b2118" stroke-width="2"></ellipse>
            <path d="M-12 100C-6 112 6 112 12 100" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.6"></path>
            <path d="M-23 52C-30 38 -23 30 -12 38Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M23 52C30 38 23 30 12 38Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <circle cx="0" cy="66" r="29" fill="#f6f2ea" stroke="#2b2118" stroke-width="2"></circle>
            <circle cx="-11" cy="62" r="9" fill="#2b2118"></circle>
            <circle cx="11" cy="62" r="9" fill="#2b2118"></circle>
            <circle cx="-8.5" cy="59" r="2.6" fill="#faf4e6"></circle>
            <circle cx="13.5" cy="59" r="2.6" fill="#faf4e6"></circle>
            <path d="M-8 78C-4 88 4 88 8 78Z" fill="#2b2118"></path>
          </g>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="320" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>

        <path d="M60 440H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="474" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="474" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">I → III</text>
      </svg>`),

    /* Plaat III — raadsel C (B) · Europa, gesloten letter */
    C: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 700" role="img" aria-label="Plaat III — Raadsel C" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bC-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="bC-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="700" fill="#f1e7d3"></rect>
        <rect width="1200" height="700" fill="url(#bC-g)"></rect>
        <rect x="16" y="16" width="1168" height="668" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="648" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT III</text>
        <g>
          <rect x="250" y="44" width="54" height="34" fill="#2d4b86" stroke="#2b2118" stroke-width="1.4"></rect>
          <g fill="#d8b657">
            <circle cx="277" cy="50" r="1.8"></circle><circle cx="282.5" cy="51.5" r="1.8"></circle><circle cx="286.5" cy="55.5" r="1.8"></circle>
            <circle cx="288" cy="61" r="1.8"></circle><circle cx="286.5" cy="66.5" r="1.8"></circle><circle cx="282.5" cy="70.5" r="1.8"></circle>
            <circle cx="277" cy="72" r="1.8"></circle><circle cx="271.5" cy="70.5" r="1.8"></circle><circle cx="267.5" cy="66.5" r="1.8"></circle>
            <circle cx="266" cy="61" r="1.8"></circle><circle cx="267.5" cy="55.5" r="1.8"></circle><circle cx="271.5" cy="51.5" r="1.8"></circle>
          </g>
        </g>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL C · V PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <path d="M10 30C40 18 156 18 186 30V88C156 76 40 76 10 88Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".9" stroke-width="0.9">
            <circle cx="16" cy="43.2" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="28" cy="45.3" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="40" cy="47.1" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="52" cy="48.5" r="3.1" fill="#d8b657"></circle>
            <circle cx="64" cy="49.7" r="3.1" fill="#ede1c4"></circle>
            <circle cx="76" cy="50.4" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="88" cy="50.9" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="100" cy="51.0" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="112" cy="50.8" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="124" cy="50.2" r="3.1" fill="#d8b657"></circle>
            <circle cx="136" cy="49.3" r="3.1" fill="#ede1c4"></circle>
            <circle cx="148" cy="48.1" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="160" cy="46.5" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="172" cy="44.6" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="22" cy="60.3" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="34" cy="62.2" r="3.1" fill="#d8b657"></circle>
            <circle cx="46" cy="63.9" r="3.1" fill="#ede1c4"></circle>
            <circle cx="58" cy="65.1" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="70" cy="66.1" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="82" cy="66.7" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="94" cy="67.0" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="106" cy="66.9" r="3.1" fill="#d8b657"></circle>
            <circle cx="118" cy="66.5" r="3.1" fill="#ede1c4"></circle>
            <circle cx="130" cy="65.8" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="142" cy="64.8" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="154" cy="63.4" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="166" cy="61.6" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="178" cy="59.6" r="3.1" fill="#d8b657"></circle>
            <circle cx="16" cy="75.2" r="3.1" fill="#ede1c4"></circle>
            <circle cx="28" cy="77.3" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="40" cy="79.1" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="52" cy="80.5" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="64" cy="81.7" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="76" cy="82.4" r="3.1" fill="#d8b657"></circle>
            <circle cx="88" cy="82.9" r="3.1" fill="#ede1c4"></circle>
            <circle cx="100" cy="83.0" r="3.1" fill="#dbe6e5"></circle>
            <circle cx="112" cy="82.8" r="3.1" fill="#f6f2ea"></circle>
            <circle cx="124" cy="82.2" r="3.1" fill="#e3d2ae"></circle>
            <circle cx="136" cy="81.3" r="3.1" fill="#c7dbe4"></circle>
            <circle cx="148" cy="80.1" r="3.1" fill="#d8b657"></circle>
            <circle cx="160" cy="78.5" r="3.1" fill="#ede1c4"></circle>
            <circle cx="172" cy="76.6" r="3.1" fill="#dbe6e5"></circle>
          </g>
          <path d="M10 30C40 18 156 18 186 30" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M10 88C40 76 156 76 186 88L186 112C156 100 40 100 10 112Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M32 82v24M56 79v24M80 77v24M104 77v24M128 78v24M152 80v24M172 84v24"></path>
          </g>
          <path d="M10 88C40 76 156 76 186 88" fill="none" stroke="#f6f2ea" stroke-width="3.4"></path>
          <path d="M10 112C40 100 156 100 186 112V222H10Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".14" stroke-width="1.2">
            <path d="M10 134C44 124 152 124 186 134M10 160C44 150 152 150 186 160M10 190C44 180 152 180 186 190"></path>
          </g>
          <ellipse cx="134" cy="200" rx="40" ry="6" fill="#2b2118" opacity=".12"></ellipse>
          <ellipse cx="42" cy="200" rx="16" ry="4" fill="#2b2118" opacity=".12"></ellipse>
          <g transform="translate(136 198) scale(.95)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="6" stroke-linecap="round" fill="none">
              <path d="M-6 -24C-14 -16 -22 -9 -30 -4"></path>
              <path d="M2 -22C-2 -13 -6 -7 -10 -2"></path>
              <path d="M22 -22C27 -14 29 -7 29 -2"></path>
              <path d="M30 -24C36 -16 41 -9 43 -4"></path>
            </g>
            <path d="M32 -46C42 -46 47 -36 45 -25C44 -19 39 -18 39 -24C41 -33 39 -40 31 -41Z"></path>
            <path d="M-10 -52C4 -56 24 -54 33 -45C40 -38 40 -23 32 -19C20 -13 -8 -15 -17 -22C-24 -28 -22 -45 -10 -52Z"></path>
            <path d="M-10 -54C-18 -59 -27 -59 -33 -54C-26 -52 -18 -51 -12 -50Z"></path>
            <path d="M-12 -52C-24 -54 -36 -50 -44 -42L-52 -32C-54 -28 -50 -25 -47 -29L-40 -36C-32 -40 -20 -38 -12 -36Z"></path>
            <path d="M-38 -46C-46 -52 -56 -55 -63 -51L-60 -45C-53 -47 -45 -45 -39 -42Z"></path>
            <path d="M-33 -49C-37 -59 -45 -65 -53 -65L-52 -58C-45 -57 -39 -52 -35 -46Z"></path>
            <path d="M-24 -44C-29 -47 -33 -47 -35 -44C-31 -42 -28 -42 -25 -42Z"></path>
            <ellipse cx="-49" cy="-31" rx="3.6" ry="2.6" transform="rotate(20 -49 -31)" fill="#5b4a36"></ellipse>
            <circle cx="-33" cy="-43" r="1.9" fill="#faf4e6"></circle>
          </g>
          <g fill="#2b2118" opacity=".12">
            <ellipse cx="98" cy="198" rx="10" ry="3"></ellipse>
            <ellipse cx="172" cy="196" rx="8" ry="2.6"></ellipse>
          </g>
          <g transform="translate(40 198)">
            <g stroke="#2b2118" stroke-width="4.5" stroke-linecap="round" fill="none">
              <path d="M-3 -24V-2M4 -24V-2"></path>
            </g>
            <path d="M-7 -26C-8 -38 -6 -46 0 -50C6 -46 8 -38 7 -26Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-6 -30H6" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.2"></path>
            <circle cx="0" cy="-55" r="5" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></circle>
            <path d="M-7 -58C-7 -63 -4 -66 0 -66C4 -66 7 -63 7 -58Z" fill="#2b2118"></path>
            <path d="M6 -46C14 -46 20 -44 24 -40" fill="none" stroke="#2b2118" stroke-width="3.4" stroke-linecap="round"></path>
            <path d="M22 -42C34 -38 40 -24 36 -4C28 -12 18 -20 12 -30Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M24 -36C30 -28 33 -18 33 -10" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          </g>
          <path d="M10 222H186" stroke="#2b2118" stroke-width="2"></path>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M258 245v20M248 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 130C40 100 66 96 90 118C110 136 130 100 156 96C168 94 176 104 180 116V150H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M30 126C48 112 66 114 80 124" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2"></path>
          <rect x="16" y="150" width="164" height="68" fill="#dbe6e5"></rect>
          <rect x="16" y="150" width="164" height="68" fill="url(#bC-h)"></rect>
          <path d="M16 150H180" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#2b2118" stroke-width="7" stroke-linecap="round">
            <path d="M52 182C58 170 68 170 74 182"></path>
            <path d="M84 184C90 172 100 172 106 184"></path>
          </g>
          <path d="M120 188C114 164 120 142 136 136" fill="none" stroke="#2b2118" stroke-width="9" stroke-linecap="round"></path>
          <ellipse cx="146" cy="133" rx="13" ry="8" fill="#2b2118" transform="rotate(-12 146 133)"></ellipse>
          <circle cx="151" cy="130" r="2" fill="#faf4e6"></circle>
          <path d="M28 200C52 194 76 206 100 200C124 194 150 206 172 200" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M478 245v20M468 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M20 150V82L32 70L44 82V150Z" fill="#9e3b28"></path>
            <path d="M44 150V90L56 78L68 90V150Z" fill="#d8b657"></path>
            <path d="M68 150V80L80 68L92 80V150Z" fill="#f6f2ea"></path>
            <path d="M92 150V92L104 80L116 92V150Z" fill="#3f7a4e"></path>
            <path d="M116 150V84L128 72L140 84V150Z" fill="#2d4b86"></path>
            <path d="M140 150V94L152 82L164 94V150Z" fill="#9e3b28"></path>
          </g>
          <g fill="#faf4e6" opacity=".8">
            <rect x="28" y="96" width="8" height="10"></rect><rect x="28" y="118" width="8" height="10"></rect>
            <rect x="52" y="104" width="8" height="10"></rect><rect x="52" y="126" width="8" height="10"></rect>
            <rect x="76" y="94" width="8" height="10"></rect><rect x="76" y="116" width="8" height="10"></rect>
            <rect x="100" y="106" width="8" height="10"></rect><rect x="100" y="128" width="8" height="10"></rect>
            <rect x="124" y="98" width="8" height="10"></rect><rect x="124" y="120" width="8" height="10"></rect>
            <rect x="148" y="108" width="8" height="10"></rect><rect x="148" y="130" width="8" height="10"></rect>
          </g>
          <rect x="16" y="150" width="164" height="68" fill="#dbe6e5"></rect>
          <rect x="16" y="150" width="164" height="68" fill="url(#bC-h)"></rect>
          <path d="M16 150H180" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(96 188)">
            <path d="M-34 0C-28 9 -18 13 0 13C18 13 28 9 34 0C26 -3 14 -4 0 -4C-14 -4 -26 -3 -34 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-6 -4V-54" stroke="#2b2118" stroke-width="3"></path>
            <path d="M-8 -50L-26 -12H-8Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-4 -46L12 -14H-4Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          </g>
          <g transform="translate(150 44)">
            <path d="M0 0V50" stroke="#2b2118" stroke-width="2.4"></path>
            <rect x="2" y="2" width="30" height="20" fill="#9e3b28"></rect>
            <rect x="2" y="10" width="30" height="4" fill="#f6f2ea"></rect>
            <rect x="10" y="2" width="4" height="20" fill="#f6f2ea"></rect>
            <rect x="2" y="2" width="30" height="20" fill="none" stroke="#2b2118" stroke-width="1.2"></rect>
          </g>
          <path d="M24 206C48 200 72 212 96 206C120 200 148 212 172 206" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        <path d="M698 245v20M688 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="176" width="164" height="42" fill="#dbe6e5"></rect>
          <rect x="16" y="176" width="164" height="42" fill="url(#bC-h)"></rect>
          <g transform="translate(98 176)">
            <path d="M-56 0C-47 -8 -38 -22 -30 -34C-22 -46 -12 -53 0 -53C12 -53 22 -46 30 -34C38 -22 47 -8 56 0Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M-38 -14C-30 -24 -20 -32 -8 -36M36 -18C29 -28 20 -35 10 -38" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
            <path d="M-46 -14H46V-26H-46Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
              <path d="M-40 -26V-38L-33 -45L-26 -38V-26Z"></path>
              <path d="M-25 -26V-34L-18 -41L-11 -34V-26Z"></path>
              <path d="M12 -26V-37L19 -44L26 -37V-26Z"></path>
              <path d="M27 -26V-32L34 -39L41 -32V-26Z"></path>
            </g>
            <path d="M-12 -26V-62H12V-26Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-8 -62H8V-80H-8Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M0 -126L7 -80H-7Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <circle cx="0" cy="-130" r="3.4" fill="#d8b657" stroke="#2b2118" stroke-width="1.2"></circle>
            <g fill="#2b2118" opacity=".32">
              <rect x="-8" y="-56" width="4" height="7"></rect><rect x="-2" y="-56" width="4" height="7"></rect><rect x="4" y="-56" width="4" height="7"></rect>
              <rect x="-8" y="-42" width="4" height="7"></rect><rect x="-2" y="-42" width="4" height="7"></rect><rect x="4" y="-42" width="4" height="7"></rect>
              <rect x="-36" y="-36" width="3" height="5"></rect><rect x="-20" y="-33" width="3" height="5"></rect>
              <rect x="16" y="-35" width="3" height="5"></rect><rect x="31" y="-31" width="3" height="5"></rect>
              <rect x="-40" y="-23" width="4" height="6"></rect><rect x="-24" y="-23" width="4" height="6"></rect>
              <rect x="20" y="-23" width="4" height="6"></rect><rect x="36" y="-23" width="4" height="6"></rect>
            </g>
          </g>
          <path d="M16 176H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M16 208C44 208 56 192 66 180" fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.6" stroke-dasharray="7 6"></path>
          <path d="M24 196C48 190 72 202 96 196C120 190 148 202 172 196" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M918 245v20M908 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g>
            <rect x="142" y="60" width="22" height="94" fill="#9e3b28" stroke="#2b2118" stroke-width="1.7"></rect>
            <path d="M146 72v16M153 72v16M160 72v16" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
            <rect x="139" y="50" width="28" height="11" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></rect>
            <path d="M139 50L153 24L167 50Z" fill="#3f7a4e" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M20 154V98H54V154Z"></path>
            <path d="M54 154V86H88V154Z"></path>
            <path d="M88 154V106H120V154Z"></path>
            <path d="M120 154V94H142V154Z"></path>
          </g>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.2">
            <path d="M28 134v-16a6 6 0 0 1 12 0v16Z"></path>
            <path d="M62 126v-16a6 6 0 0 1 12 0v16Z"></path>
            <path d="M96 140v-14a6 6 0 0 1 12 0v14Z"></path>
            <path d="M126 130v-16a6 6 0 0 1 12 0v16Z"></path>
          </g>
          <rect x="16" y="154" width="164" height="64" fill="#dbe6e5"></rect>
          <rect x="16" y="154" width="164" height="64" fill="url(#bC-h)"></rect>
          <path d="M16 154H180" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(88 186)" fill="#2b2118">
            <path d="M-48 0C-42 8 -30 12 0 12C30 12 42 8 48 0C40 -3 26 -5 0 -5C-26 -5 -40 -3 -48 0Z"></path>
            <path d="M-48 0C-54 -6 -56 -14 -53 -20C-49 -15 -47 -8 -46 -2Z"></path>
            <path d="M48 0C53 -4 55 -10 53 -14C49 -10 47 -6 46 -2Z"></path>
          </g>
          <g transform="translate(112 186)">
            <path d="M-18 -36L14 -4" stroke="#2b2118" stroke-width="2.6" stroke-linecap="round"></path>
            <path d="M-6 -30h12l4 26h-20Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-6 -24h13M-7 -16h15M-8 -8h17" stroke="#2b2118" stroke-width="1.8"></path>
            <circle cx="0" cy="-38" r="6" fill="#2b2118"></circle>
            <path d="M-11 -44h22v3h-22Z" fill="#2b2118"></path>
          </g>
          <path d="M24 208C48 202 72 214 96 208C120 202 148 214 172 208" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">V</text>
        </g>

        <rect x="120" y="424" width="960" height="132" fill="#ede1c4"></rect>
        <g transform="translate(120 424)">
          <circle cx="60" cy="66" r="19" fill="#f1e7d3" stroke="#2b2118" stroke-width="2.4"></circle>
          <text x="60" y="73" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" fill="#2b2118">V</text>
          <path d="M88 66H182" stroke="#2b2118" stroke-width="3" stroke-dasharray="12 10" stroke-linecap="round"></path>
          <polygon points="210,66 184,76 184,56" fill="#2b2118"></polygon>
          <circle cx="240" cy="66" r="19" fill="#f1e7d3" stroke="#2b2118" stroke-width="2.4"></circle>
          <text x="240" y="73" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" fill="#2b2118">I</text>
          <path d="M300 22V110" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <text x="660" y="58" text-anchor="middle" font-family="'EB Garamond',serif" font-size="19" letter-spacing="3" fill="#2b2118">${lang === 'en' ? 'THE LETTER IS CLOSED' : 'DE LETTER IS GESLOTEN'}</text>
          <text x="660" y="88" text-anchor="middle" font-family="'EB Garamond',serif" font-size="19" letter-spacing="3" fill="#2b2118">${lang === 'en' ? 'FROM V STRAIGHT BACK TO I' : 'VAN V RECHT TERUG NAAR I'}</text>
        </g>
        <rect x="120" y="424" width="960" height="132" fill="none" stroke="#2b2118" stroke-opacity=".55" stroke-width="2"></rect>

        <path d="M60 600H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="634" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="634" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">GESLOTEN LETTER</text>
      </svg>`),

    /* Plaat IV — raadsel D (kleine e) · Azië */
    D: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat IV — Raadsel D" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bD-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="bD-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#bD-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT IV</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL D · VI PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 150L34 112L52 134L78 100L104 132L126 114L153 150Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M70 108L78 100L86 108C82 111 78 109 74 111Z" fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <g stroke="#2b2118" stroke-opacity=".5" stroke-width="1.1" fill="none">
            <path d="M80 70C58 78 36 90 16 106M80 70C102 78 124 90 144 106"></path>
          </g>
          <g stroke="#2b2118" stroke-width=".8">
            <rect x="34" y="88" width="8" height="10" fill="#2d4b86" transform="rotate(-20 38 93)"></rect>
            <rect x="48" y="80" width="8" height="10" fill="#f6f2ea" transform="rotate(-16 52 85)"></rect>
            <rect x="62" y="74" width="8" height="10" fill="#9e3b28" transform="rotate(-10 66 79)"></rect>
            <rect x="90" y="74" width="8" height="10" fill="#3f7a4e" transform="rotate(10 94 79)"></rect>
            <rect x="104" y="80" width="8" height="10" fill="#d8b657" transform="rotate(16 108 85)"></rect>
            <rect x="118" y="88" width="8" height="10" fill="#2d4b86" transform="rotate(20 122 93)"></rect>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M18 196H142V184H18Z"></path>
            <path d="M26 184H134V174H26Z"></path>
            <path d="M34 174H126V166H34Z"></path>
          </g>
          <path d="M42 166C42 140 56 124 80 124C104 124 118 140 118 166Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M56 140C64 132 72 129 80 129C88 129 96 132 104 140" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          <path d="M60 124H100V100H60Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g>
            <path d="M64 112C67 108 73 108 76 112C73 116 67 116 64 112Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
            <path d="M84 112C87 108 93 108 96 112C93 116 87 116 84 112Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
            <ellipse cx="70" cy="112" rx="1.9" ry="2.6" fill="#2b2118"></ellipse>
            <ellipse cx="90" cy="112" rx="1.9" ry="2.6" fill="#2b2118"></ellipse>
            <path d="M63 107C67 104 73 104 77 107M83 107C87 104 93 104 97 107" fill="none" stroke="#2b2118" stroke-width="1.2"></path>
            <path d="M80 116C77 118 77 121 80 122C83 121 83 118 80 116Z" fill="#2b2118"></path>
            <circle cx="80" cy="105" r="1.6" fill="#9e3b28"></circle>
          </g>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
            <path d="M68 100H92L90 92H70Z"></path>
            <path d="M70 92H90L88 84H72Z"></path>
            <path d="M72 84H88L86 76H74Z"></path>
          </g>
          <path d="M68 76H92L80 66Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M80 66V60" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 208C56 200 104 200 134 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M232 245v20M222 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(244 130)" data-num="1">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M18 92C34 84 50 94 64 88" fill="none" stroke="#46697a" stroke-opacity=".3" stroke-width="2"></path>
          <path d="M96 76C112 68 128 78 142 72" fill="none" stroke="#46697a" stroke-opacity=".3" stroke-width="2"></path>
          <path d="M10 198C32 172 54 132 68 108C72 100 88 100 92 108C106 132 128 172 150 198Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M46 144C52 130 60 116 68 105C72 97 88 97 92 105C100 116 108 130 114 144C106 140 100 146 92 142C84 138 76 146 68 142C60 138 54 148 46 144Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M40 176C56 168 70 178 84 172" fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.2"></path>
          <path d="M14 198H146" stroke="#2b2118" stroke-width="2"></path>
          <rect x="34" y="204" width="92" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="80" y="221" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#2b2118">MAX 3776 m</text>
          <path d="M56 198V150M104 198V150" stroke="#9e3b28" stroke-width="6" stroke-linecap="round"></path>
          <rect x="50" y="158" width="60" height="7" fill="#9e3b28" stroke="#2b2118" stroke-width="1.2"></rect>
          <path d="M42 140C58 134 102 134 118 140L118 150C102 145 58 145 42 150Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M416 245v20M406 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(428 130)" data-num="2">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 140L30 100L48 124L74 88L100 126L122 106L153 140Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M74 88L83 106H65Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M30 100L37 114H23Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <rect x="7" y="140" width="146" height="76" fill="#dbe6e5"></rect>
          <rect x="7" y="140" width="146" height="76" fill="url(#bD-h)"></rect>
          <path d="M7 140H153" stroke="#2b2118" stroke-width="2"></path>
          <path d="M24 192L34 172H104L120 192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g transform="translate(72 172)" fill="#2b2118">
            <path d="M-28 0C-28 -8 -20 -14 -8 -14C4 -14 14 -10 20 -3C22 -1 21 0 19 0Z"></path>
            <circle cx="18" cy="-13" r="8"></circle>
            <circle cx="21" cy="-15" r="1.7" fill="#faf4e6"></circle>
            <path d="M-28 -1C-35 -3 -40 -8 -38 -13C-33 -11 -30 -6 -28 -3Z"></path>
          </g>
          <path d="M18 206C40 200 62 210 84 204C106 198 126 208 142 204" fill="none" stroke="#46697a" stroke-opacity=".6" stroke-width="1.4"></path>
          <path d="M134 146V196" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-dasharray="4 4"></path>
          <path d="M134 202L130 192H138Z" fill="#2b2118" opacity=".55"></path>
          <rect x="28" y="214" width="104" height="20" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5"></rect>
          <text x="80" y="228" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11.5" letter-spacing="1.5" fill="#2b2118">${lang === 'en' ? '1642 m DEEP' : '1642 m DIEP'}</text>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        <path d="M600 245v20M590 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(612 130)" data-num="3">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5">
            <rect x="24" y="118" width="9" height="66"></rect>
            <rect x="127" y="118" width="9" height="66"></rect>
          </g>
          <path d="M21 118H36L28.5 104Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M124 118H139L131.5 104Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M24 136h9M127 136h9M24 158h9M127 158h9" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.1"></path>
          <rect x="44" y="130" width="72" height="54" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M46 130C46 122 49 117 53 113C57 117 60 122 60 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M100 130C100 122 103 117 107 113C111 117 114 122 114 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M58 130C58 112 66 100 80 90C94 100 102 112 102 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M80 90V78" stroke="#2b2118" stroke-width="1.8"></path><circle cx="80" cy="76" r="2.4" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2"></circle>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.2">
            <path d="M50 184v-20a6 6 0 0 1 12 0v20Z"></path>
            <path d="M98 184v-20a6 6 0 0 1 12 0v20Z"></path>
          </g>
          <path d="M68 184V152C68 142 92 142 92 152V184Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M74 184V157C74 150 86 150 86 157V184Z" fill="#2b2118"></path>
          <rect x="20" y="184" width="120" height="10" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6"></rect>
          <path d="M14 194H146" stroke="#2b2118" stroke-width="2"></path>
          <rect x="52" y="196" width="56" height="24" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="52" y="196" width="56" height="24" fill="url(#bD-h)"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M784 245v20M774 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="150" width="146" height="93" fill="#c7dbe4"></rect>
          <rect x="7" y="150" width="146" height="93" fill="url(#bD-h)"></rect>
          <path d="M7 150H153" stroke="#2b2118" stroke-width="1.6" stroke-opacity=".6"></path>
          <path d="M100 150C108 142 120 138 132 139C140 140 146 144 150 150Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M34 178C36 158 44 146 58 142H104C118 146 126 158 128 178C110 184 52 184 34 178Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2">
            <path d="M44 174C46 162 50 152 58 146M116 174C114 162 110 152 102 146M80 180V150"></path>
          </g>
          <path d="M60 142H100V132H60Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M52 132H108L98 120H62Z"></path>
            <path d="M58 120H102L92 108H68Z"></path>
            <path d="M64 108H96L86 96H74Z"></path>
          </g>
          <path d="M80 96V86" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M77 86H83L80 80Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".75" stroke-width="1.8">
            <path d="M14 190C26 184 40 190 52 186M110 188C122 182 134 188 146 184M20 210C36 204 54 210 70 206M92 212C108 206 126 212 142 208"></path>
          </g>
          <ellipse cx="81" cy="180" rx="50" ry="6" fill="#f6f2ea" opacity=".5"></ellipse>
          <g transform="translate(126 147) scale(.6)" stroke="#2b2118" stroke-width="3.2" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -12 -2 -24 2 -36"></path>
            <path d="M2 -36C-6 -44 -14 -44 -19 -38M2 -36C10 -44 18 -42 22 -36M2 -36C-4 -46 -2 -54 4 -58"></path>
          </g>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">V</text>
        </g>
        <path d="M968 245v20M958 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(980 130)" data-num="5">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="146" height="236" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="146" height="236" fill="url(#bD-h)"></rect>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M50 62C61 56 75 60 81 70C87 80 82 91 76 99C70 107 73 118 66 126C59 134 46 132 42 123C38 114 43 104 43 94C43 81 40 68 50 62Z"></path>
            <path d="M104 80C114 75 125 81 125 91C125 100 116 105 109 102C100 98 97 87 100 82Z"></path>
            <path d="M22 106C30 100 40 105 41 113C42 122 34 128 26 125C17 122 15 111 22 106Z"></path>
            <path d="M92 134C102 128 117 134 119 146C121 157 110 165 98 161C88 157 82 145 86 139Z"></path>
            <path d="M40 148C52 142 67 148 67 158C67 169 54 175 44 171C33 167 32 154 40 148Z"></path>
            <path d="M70 180C82 173 99 180 103 192C107 204 94 213 82 209C70 205 63 190 70 180Z"></path>
            <path d="M120 166C128 161 137 166 138 174C139 183 131 189 123 187C114 185 113 170 120 166Z"></path>
          </g>
          <g transform="translate(60 94)">
            <polygon points="0,-9 2.2,-2.8 8.6,-2.8 3.4,1.1 5.4,7.3 0,3.5 -5.4,7.3 -3.4,1.1 -8.6,-2.8 -2.2,-2.8" fill="#9e3b28" stroke="#2b2118" stroke-width="1.1" stroke-linejoin="round"></polygon>
          </g>
          <g transform="translate(14 16)">
            <rect width="46" height="30" fill="#2d4b86"></rect>
            <rect y="15" width="46" height="15" fill="#9e3b28"></rect>
            <polygon points="0,0 25,15 0,30" fill="#f6f2ea"></polygon>
            <circle cx="8" cy="15" r="3.6" fill="#d8b657"></circle>
            <g stroke="#d8b657" stroke-width="1.1" stroke-linecap="round">
              <path d="M8 9.4V7M8 20.6V23M4.4 15H2M11.6 15H14M5.5 12.5L3.8 10.8M10.5 17.5L12.2 19.2M10.5 12.5L12.2 10.8M5.5 17.5L3.8 19.2"></path>
            </g>
            <g fill="#d8b657"><circle cx="2.8" cy="3.2" r="1.2"></circle><circle cx="2.8" cy="26.8" r="1.2"></circle><circle cx="21.5" cy="15" r="1.2"></circle></g>
            <rect width="46" height="30" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">VI</text>
        </g>

        <path d="M60 440H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="474" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="474" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">I → VI · ${lang === 'en' ? 'SMALL LETTER' : 'KLEINE LETTER'}</text>
      </svg>`),
  };

  window.GeoCardsBlue = CARDS;
})();
