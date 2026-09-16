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
          <path d="M103 28L112 45L120 68L127 96L134 126L139 154L140 172L134 191L124 207L112 220L100 222L90 213L84 199L77 181L71 159L68 137L66 120L72 110L62 96L57 79L58 65L67 52L79 40Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M96 52C104 76 111 110 114 142C116 172 111 198 104 214" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.4"></path>
          <path d="M66 74C76 82 84 94 88 108M75 152C84 160 91 172 94 186" fill="none" stroke="#2b2118" stroke-opacity=".16" stroke-width="1.2"></path>
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
          <g transform="rotate(-2 98 46)">
            <rect x="42" y="24" width="112" height="44" fill="#9e3b28"></rect>
            <rect x="42" y="35" width="112" height="22" fill="#d8b657"></rect>
            <rect x="42" y="24" width="112" height="44" fill="none" stroke="#2b2118" stroke-width="1.6"></rect>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M32 210C68 202 128 202 164 210" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <g transform="translate(104 196)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="8" stroke-linecap="round">
              <path d="M-24 -4V-40M-8 -4V-40M20 -4V-40M34 -4V-40"></path>
            </g>
            <path d="M-32 -60C-32 -72 -23 -80 -8 -80H30C44 -80 50 -70 50 -56V-46C50 -40 46 -38 39 -38H-24C-30 -38 -32 -42 -32 -50Z"></path>
            <path d="M50 -58C58 -56 63 -46 60 -34C58 -26 53 -24 51 -29C54 -38 54 -48 48 -53Z"></path>
            <path d="M-28 -78C-42 -80 -56 -80 -68 -74C-78 -69 -82 -60 -78 -54C-74 -48 -64 -48 -56 -52C-46 -57 -36 -62 -28 -62Z"></path>
            <path d="M-66 -76C-74 -84 -86 -90 -94 -88C-88 -84 -80 -78 -74 -71Z"></path>
            <path d="M-42 -80C-44 -90 -40 -100 -32 -104C-34 -96 -34 -88 -32 -80Z"></path>
            <circle cx="-56" cy="-68" r="2.6" fill="#faf4e6"></circle>
          </g>
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
          <path d="M14 200C28 178 46 166 80 166C114 166 132 178 146 200Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M26 178L32 138H62V178Z" fill="#f6f2ea"></path>
            <path d="M134 178L128 138H98V178Z" fill="#f6f2ea"></path>
            <path d="M62 178V104L66 96H94L98 104V178Z" fill="#9e3b28"></path>
            <rect x="64" y="87" width="32" height="10" fill="#5b4a36"></rect>
          </g>
          <path d="M66 87L72 79H88L94 87Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g fill="#2b2118">
            <rect x="38" y="148" width="5" height="8"></rect><rect x="48" y="148" width="5" height="8"></rect>
            <rect x="38" y="162" width="5" height="8"></rect><rect x="48" y="162" width="5" height="8"></rect>
            <rect x="107" y="148" width="5" height="8"></rect><rect x="117" y="148" width="5" height="8"></rect>
            <rect x="107" y="162" width="5" height="8"></rect><rect x="117" y="162" width="5" height="8"></rect>
            <rect x="68" y="112" width="5" height="9"></rect><rect x="78" y="112" width="5" height="9"></rect><rect x="88" y="112" width="5" height="9"></rect>
            <rect x="68" y="131" width="5" height="9"></rect><rect x="78" y="131" width="5" height="9"></rect><rect x="88" y="131" width="5" height="9"></rect>
            <rect x="68" y="150" width="5" height="9"></rect><rect x="78" y="150" width="5" height="9"></rect><rect x="88" y="150" width="5" height="9"></rect>
          </g>
          <path d="M14 52C48 70 112 70 146 52" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path>
          <g stroke="#2b2118" stroke-width=".9">
            <rect x="28" y="59" width="9" height="11" fill="#2d4b86"></rect>
            <rect x="46" y="64" width="9" height="11" fill="#f6f2ea"></rect>
            <rect x="64" y="67" width="9" height="11" fill="#9e3b28"></rect>
            <rect x="84" y="67" width="9" height="11" fill="#3f7a4e"></rect>
            <rect x="102" y="64" width="9" height="11" fill="#d8b657"></rect>
            <rect x="120" y="59" width="9" height="11" fill="#2d4b86"></rect>
          </g>
          <path d="M14 200H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 212C56 204 104 204 134 212" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
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
          <path d="M60 120C64 112 68 106 70 102C74 95 86 95 90 102C92 106 96 112 100 120C94 116 88 121 80 118C72 115 66 124 60 120Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M40 176C56 168 70 178 84 172" fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.2"></path>
          <path d="M14 198H146" stroke="#2b2118" stroke-width="2"></path>
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
          <path d="M7 146L34 104L50 124L74 96L98 126L120 108L153 146Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.3" stroke-linejoin="round"></path>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M16 196H144L136 182H24Z"></path>
            <path d="M24 182H136L128 168H32Z"></path>
            <path d="M32 168H128L120 154H40Z"></path>
            <path d="M40 154H120L112 142H48Z"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
            <path d="M48 142H112L106 132H54Z"></path>
            <path d="M54 132H106L100 122H60Z"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.2">
            <path d="M52 142C52 135 55 131 58 131C61 131 64 135 64 142Z"></path>
            <path d="M68 142C68 135 71 131 74 131C77 131 80 135 80 142Z"></path>
            <path d="M84 142C84 135 87 131 90 131C93 131 96 135 96 142Z"></path>
            <path d="M100 142C100 135 103 131 106 131C109 131 112 135 112 142Z"></path>
            <path d="M60 132C60 125 63 121 66 121C69 121 72 125 72 132Z"></path>
            <path d="M88 132C88 125 91 121 94 121C97 121 100 125 100 132Z"></path>
          </g>
          <path d="M68 122C68 108 73 98 80 98C87 98 92 108 92 122Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M80 98V88" stroke="#2b2118" stroke-width="1.6"></path><circle cx="80" cy="86" r="2.2" fill="#ede1c4" stroke="#2b2118" stroke-width="1.1"></circle>
          <g stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"><path d="M74 196V142M86 196V142"></path></g>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 208C56 200 104 200 134 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
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
