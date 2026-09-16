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
          <g transform="translate(136 198) scale(.85)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="7.5" stroke-linecap="round" fill="none">
              <path d="M-14 -30C-16 -20 -17 -10 -17 -3"></path>
              <path d="M-5 -30C-4 -20 -3 -10 -3 -3"></path>
              <path d="M24 -30C25 -20 25 -10 25 -3"></path>
              <path d="M33 -30C35 -20 36 -10 36 -3"></path>
            </g>
            <g fill="#2b2118">
              <path d="M-21 -4h8l1 6h-10Z"></path><path d="M-9 -4h8l1 6h-10Z"></path>
              <path d="M21 -4h8l1 6h-10Z"></path><path d="M32 -4h8l1 6h-10Z"></path>
            </g>
            <path d="M36 -52C45 -50 49 -38 46 -26C45 -20 40 -20 41 -26C43 -34 42 -44 34 -47Z"></path>
            <ellipse cx="8" cy="-40" rx="30" ry="19"></ellipse>
            <ellipse cx="-10" cy="-50" rx="17" ry="12"></ellipse>
            <path d="M-16 -58L-38 -47L-33 -29L-12 -30Z"></path>
            <path d="M-36 -48C-46 -48 -56 -42 -60 -34C-62 -30 -60 -25 -56 -24L-47 -24C-41 -26 -37 -32 -35 -38Z"></path>
            <path d="M-45 -43C-54 -48 -62 -58 -61 -69L-53 -66C-53 -58 -49 -50 -41 -43Z"></path>
            <path d="M-36 -47C-39 -56 -37 -66 -30 -72L-25 -65C-29 -60 -31 -53 -31 -45Z"></path>
            <path d="M-30 -42C-25 -45 -21 -44 -19 -41C-23 -39 -27 -38 -30 -38Z"></path>
            <ellipse cx="-57" cy="-27" rx="4.6" ry="3.2" transform="rotate(16 -57 -27)" fill="#5b4a36"></ellipse>
            <circle cx="-45" cy="-38" r="2.2" fill="#faf4e6"></circle>
            <path d="M-34 -29C-38 -25 -38 -21 -34 -19" fill="none" stroke="#2b2118" stroke-width="3.6" stroke-linecap="round"></path>
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
          <g transform="translate(14 14)">
            <path d="M0 0L26 14H12L30 32H0Z" fill="#9e3b28" stroke="#2d4b86" stroke-width="3" stroke-linejoin="round"></path>
            <path d="M0 0L26 14H12L30 32H0Z" fill="none" stroke="#2b2118" stroke-width="1.1" stroke-linejoin="round"></path>
            <path d="M6 10C6 7 8.5 5 11 5C9.5 7 9.5 10 11 12C8.5 12 6 13 6 10Z" fill="#f6f2ea"></path>
            <circle cx="9" cy="24" r="3.4" fill="#f6f2ea"></circle>
            <g stroke="#f6f2ea" stroke-width="1.2"><path d="M9 18.6V20M9 28v1.4M3.6 24H5M13 24h1.4M5.2 20.2l1 1M12.8 27.8l-1-1M12.8 20.2l-1 1M5.2 27.8l1-1"></path></g>
          </g>
          <path d="M7 168L24 120L38 140L58 92L76 126L92 104L112 142L128 120L153 168Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round">
            <path d="M58 92L68 112C63 114 58 111 53 113Z"></path>
            <path d="M92 104L100 120C96 122 92 119 88 121Z"></path>
            <path d="M24 120L31 133C28 134 24 132 20 134Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2">
            <path d="M58 92L48 140M58 92L70 146M92 104L86 142M92 104L102 144M24 120L18 150"></path>
          </g>
          <path d="M7 172C30 160 52 168 74 162C98 156 122 166 153 160V182H7Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".5" stroke-width="1.1" fill="none">
            <path d="M80 106C58 114 34 126 14 142M80 106C102 114 126 126 146 142"></path>
          </g>
          <g stroke="#2b2118" stroke-width=".8">
            <rect x="30" y="126" width="7" height="9" fill="#2d4b86" transform="rotate(-22 33 130)"></rect>
            <rect x="44" y="119" width="7" height="9" fill="#f6f2ea" transform="rotate(-17 47 123)"></rect>
            <rect x="58" y="113" width="7" height="9" fill="#9e3b28" transform="rotate(-10 61 117)"></rect>
            <rect x="95" y="113" width="7" height="9" fill="#3f7a4e" transform="rotate(10 98 117)"></rect>
            <rect x="109" y="119" width="7" height="9" fill="#d8b657" transform="rotate(17 112 123)"></rect>
            <rect x="123" y="126" width="7" height="9" fill="#2d4b86" transform="rotate(22 126 130)"></rect>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M30 196H130V186H30Z"></path>
            <path d="M38 186H122V178H38Z"></path>
          </g>
          <path d="M48 178C48 158 58 146 80 146C102 146 112 158 112 178Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M60 158C66 152 72 150 80 150C88 150 94 152 100 158" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          <path d="M64 146H96V126H64Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g>
            <path d="M67 136C69.5 132.5 74.5 132.5 77 136C74.5 139.5 69.5 139.5 67 136Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
            <path d="M83 136C85.5 132.5 90.5 132.5 93 136C90.5 139.5 85.5 139.5 83 136Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
            <ellipse cx="72" cy="136" rx="1.7" ry="2.3" fill="#2b2118"></ellipse>
            <ellipse cx="88" cy="136" rx="1.7" ry="2.3" fill="#2b2118"></ellipse>
            <path d="M66 131.5C69 129 75 129 78 131.5M82 131.5C85 129 91 129 94 131.5" fill="none" stroke="#2b2118" stroke-width="1.1"></path>
            <path d="M80 139C77.5 140.8 77.5 143.4 80 144.4C82.5 143.4 82.5 140.8 80 139Z" fill="#2b2118"></path>
            <circle cx="80" cy="129" r="1.5" fill="#9e3b28"></circle>
          </g>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
            <path d="M70 126H90L88.5 119H71.5Z"></path>
            <path d="M71.5 119H88.5L87 112H73Z"></path>
            <path d="M73 112H87L85.5 105H74.5Z"></path>
          </g>
          <path d="M70 105H90L80 96Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M80 96V90" stroke="#2b2118" stroke-width="1.7"></path>
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
          <g transform="translate(14 14)">
            <rect width="44" height="9" fill="#f6f2ea"></rect>
            <rect y="9" width="44" height="9" fill="#2d4b86"></rect>
            <rect y="18" width="44" height="9" fill="#9e3b28"></rect>
            <rect width="44" height="27" fill="none" stroke="#2b2118" stroke-width="1.3"></rect>
          </g>
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
          <path d="M37.0 192V128.0 H43.0 V192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M35.4 144.0 H44.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M35.4 160.0 H44.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M35.4 176.0 H44.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M34.8 128.0 H45.2" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M36.0 128.0 C36.0 118.0 44.0 118.0 44.0 128.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M40.0 118.0 V111.0" stroke="#2b2118" stroke-width="1.6"></path>
          <circle cx="40.0" cy="109.0" r="1.8" fill="#d8b657" stroke="#2b2118" stroke-width=".9"></circle>
          <path d="M117.0 192V128.0 H123.0 V192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M115.4 144.0 H124.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M115.4 160.0 H124.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M115.4 176.0 H124.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M114.8 128.0 H125.2" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M116.0 128.0 C116.0 118.0 124.0 118.0 124.0 128.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M120.0 118.0 V111.0" stroke="#2b2118" stroke-width="1.6"></path>
          <circle cx="120.0" cy="109.0" r="1.8" fill="#d8b657" stroke="#2b2118" stroke-width=".9"></circle>
          <path d="M42 192V150L54 136H106L118 150V192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M42 150H118" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          <path d="M60 192V138H100V192Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M66 192V168C66 157 71 149 80 143C89 149 94 157 94 168V192Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M80 192V150" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.1"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round">
            <path d="M50 168V160C50 155 52.5 151 56 149C59.5 151 62 155 62 160V168Z"></path>
            <path d="M98 168V160C98 155 100.5 151 104 149C107.5 151 110 155 110 160V168Z"></path>
            <path d="M50 190V180C50 175 52.5 171 56 169C59.5 171 62 175 62 180V190Z"></path>
            <path d="M98 190V180C98 175 100.5 171 104 169C107.5 171 110 175 110 180V190Z"></path>
          </g>
          <path d="M66 138H94V128H66Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M62 130C54 112 62 90 80 80C98 90 106 112 98 130C90 135 70 135 62 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M70 126C68 110 73 96 80 88C87 96 92 110 90 126" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <path d="M80 80V64" stroke="#2b2118" stroke-width="2"></path>
          <circle cx="80" cy="62" r="2.6" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M77 58C79 55 83 55 85 58C83 57.5 81 57.5 79 58Z" fill="#d8b657" stroke="#2b2118" stroke-width=".9"></path>
          <g><path d="M47.0 138.0 H59.0 V132.6 H47.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3"></path><path d="M46.0 132.6 C46.0 124.2 60.0 124.2 60.0 132.6 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path><path d="M53.0 124.2 V119.4" stroke="#2b2118" stroke-width="1.3"></path></g>
          <g><path d="M101.0 138.0 H113.0 V132.6 H101.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3"></path><path d="M100.0 132.6 C100.0 124.2 114.0 124.2 114.0 132.6 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path><path d="M107.0 124.2 V119.4" stroke="#2b2118" stroke-width="1.3"></path></g>
          <path d="M18.0 192V112.0 H26.0 V192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M16.4 132.0 H27.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M16.4 152.0 H27.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M16.4 172.0 H27.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M15.8 112.0 H28.2" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M17.0 112.0 C17.0 102.0 27.0 102.0 27.0 112.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M22.0 102.0 V95.0" stroke="#2b2118" stroke-width="1.6"></path>
          <circle cx="22.0" cy="93.0" r="1.8" fill="#d8b657" stroke="#2b2118" stroke-width=".9"></circle>
          <path d="M134.0 192V112.0 H142.0 V192Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M132.4 132.0 H143.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M132.4 152.0 H143.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M132.4 172.0 H143.6" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M131.8 112.0 H144.2" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M133.0 112.0 C133.0 102.0 143.0 102.0 143.0 112.0 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M138.0 102.0 V95.0" stroke="#2b2118" stroke-width="1.6"></path>
          <circle cx="138.0" cy="93.0" r="1.8" fill="#d8b657" stroke="#2b2118" stroke-width=".9"></circle>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M12 200H148V192H12Z"></path>
            <path d="M8 208H152V200H8Z"></path>
          </g>
          <rect x="42" y="212" width="76" height="20" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="42" y="212" width="76" height="20" fill="url(#bD-h)"></rect>
          <g opacity=".3">
            <path d="M66 214C64 220 70 228 80 230C90 228 96 220 94 214Z" fill="#f6f2ea"></path>
          </g>
          <path d="M14 216C26 220 34 226 36 234M146 216C134 220 126 226 124 234" fill="none" stroke="#3f7a4e" stroke-opacity=".45" stroke-width="2"></path>
          <rect x="7" y="7" width="146" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="160" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="48" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M784 245v20M774 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(14 14)">
            <rect width="44" height="13.5" fill="#9e3b28"></rect>
            <rect y="13.5" width="44" height="13.5" fill="#f6f2ea"></rect>
            <rect width="44" height="27" fill="none" stroke="#2b2118" stroke-width="1.3"></rect>
          </g>
          <path d="M74 140C88 112 106 82 120 64C134 82 150 112 158 140Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M108 74C113 69 127 69 132 74C127 79 122 76 120 78C118 80 113 78 108 74Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M120 64C122 56 127 50 133 46C129 52 127 58 127 64" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.4"></path>
          <path d="M7 140C16 126 28 118 42 121C54 124 62 131 66 140Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M7 140H153V196H7Z" fill="#3f7a4e" opacity=".38"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.3">
            <path d="M7 154C40 148 120 148 153 154M7 172C40 166 120 166 153 172M7 188C40 182 120 182 153 188"></path>
          </g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".55" stroke-width="1.3">
            <path d="M7 150C40 144 120 144 153 150M7 168C40 162 120 162 153 168M7 184C40 178 120 178 153 184"></path>
          </g>
          <path d="M10 208H150V196H10Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M72 196V102L64 102V114L58 114V128L52 128V144L46 144V162L40 162V180L34 180V196Z"></path>
            <path d="M88 196V102L96 102V114L102 114V128L108 128V144L114 144V162L120 162V180L126 180V196Z"></path>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.3">
            <path d="M62 102h11v-7h-11Z"></path>
            <path d="M87 102h11v-7h-11Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".38" stroke-width="1.2">
            <path d="M38 186H70M44 168H70M50 150H70M56 134H70M62 120H70"></path>
            <path d="M90 186H122M90 168H116M90 150H110M90 134H104M90 120H98"></path>
          </g>
          <g fill="#2b2118" opacity=".12">
            <path d="M72 196V102H75V196Z"></path>
          </g>
          <path d="M72 196H88V188H72Z" fill="#5b4a36" opacity=".3"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2">
            <path d="M61 196v-9c0-2.6 2-4.4 4.5-4.4S70 184.4 70 187v9Z"></path>
            <circle cx="65.5" cy="180" r="2.6"></circle>
            <path d="M90 196v-9c0-2.6 2-4.4 4.5-4.4S99 184.4 99 187v9Z"></path>
            <circle cx="94.5" cy="180" r="2.6"></circle>
          </g>
          <g transform="translate(22 196) scale(.62)" stroke="#2b2118" stroke-width="4" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -14 -2 -30 2 -44"></path>
            <path d="M2 -44C-6 -53 -16 -53 -21 -46M2 -44C10 -53 20 -51 24 -44M2 -44C-4 -55 -2 -64 4 -68"></path>
          </g>
          <g transform="translate(142 196) scale(.58)" stroke="#2b2118" stroke-width="4.2" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -14 -2 -30 2 -44"></path>
            <path d="M2 -44C-6 -53 -16 -53 -21 -46M2 -44C10 -53 20 -51 24 -44M2 -44C-4 -55 -2 -64 4 -68"></path>
          </g>
          <path d="M14 208H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 220C56 212 104 212 134 220" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
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
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M64.1 32.8 L80.0 36.9 L86.6 54.5 L81.3 69.5 L78.7 79.0 L85.3 88.5 L98.6 96.6 L110.5 100.7 L105.2 107.4 L95.9 102.0 L89.3 97.9 L80.0 95.2 L72.0 102.0 L64.1 92.5 L58.8 84.4 L54.8 74.9 L53.5 64.0 L61.4 54.5 L61.4 41.0 Z"></path>
            <path d="M68.1 102.0 L74.7 108.8 L73.4 118.3 L65.4 119.6 L62.8 110.2 Z"></path>
            <path d="M49.5 134.6 L45.5 144.1 L34.9 156.3 L25.6 164.4 L19.0 171.2 L16.3 168.5 L26.9 159.0 L41.5 146.8 L46.8 131.8 Z"></path>
            <path d="M81.3 125.1 L90.6 133.2 L89.3 142.7 L81.3 144.1 L81.3 135.9 Z"></path>
            <path d="M98.6 137.3 L99.9 146.8 L98.6 157.6 L90.6 161.7 L89.3 150.8 L94.6 141.3 Z"></path>
            <path d="M109.2 131.8 L107.9 145.4 L101.2 156.3 L99.9 150.8 L106.5 138.6 Z"></path>
            <path d="M109.2 146.8 L115.8 154.9 L107.9 154.9 L106.5 148.1 Z"></path>
            <path d="M114.5 129.1 L122.4 137.3 L122.4 146.8 L115.8 142.7 L113.2 133.2 Z"></path>
            <path d="M113.2 114.2 L125.1 115.6 L129.1 127.8 L121.1 131.8 L113.2 123.7 Z"></path>
            <path d="M109.2 152.2 L119.8 160.3 L135.7 168.5 L142.3 186.1 L137.0 199.7 L127.8 209.2 L114.5 203.7 L109.2 191.5 L95.9 184.7 L84.0 187.5 L94.6 176.6 L101.2 168.5 L106.5 160.3 Z"></path>
          </g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".55" stroke-width="1.3">
            <path d="M12 60C24 54 36 58 48 54M112 96C124 90 136 94 148 90M14 200C26 194 40 198 52 194M104 224C116 218 130 222 146 218"></path>
          </g>
          <circle cx="69.4" cy="87.1" r="4" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4"></circle>
          <circle cx="69.4" cy="87.1" r="8.5" fill="none" stroke="#9e3b28" stroke-opacity=".55" stroke-width="1.4"></circle>
          <path d="M14 232H146" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
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
