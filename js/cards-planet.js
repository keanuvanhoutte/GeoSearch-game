/* Raadselkaarten van de derde reis (eindwoord PLANET), in dezelfde atlasstijl als js/cards.js.
   De vakken I, II, III… zijn tegelijk de volgorde waarin de lijn de letter tekent.
   data-num="0" enz. markeert het vak van elk nummer: dat licht op bij de hint van dat nummer. */
(function () {
  let seq = 0;

  function scoped(svg) {
    const P = `pt${++seq}`;
    const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    return ids.reduce((s, id) => s
      .split(`id="${id}"`).join(`id="${P}-${id}"`)
      .split(`#${id})`).join(`#${P}-${id})`)
      .split(`"#${id}"`).join(`"#${P}-${id}"`), svg);
  }

  /* gedeelde stukjes */
  const grid = (p) => `<pattern id="${p}-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>`;
  const hatch = (p) => `<pattern id="${p}-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>`;
  const frame = (p, w, h, title, sub) => `
        <rect width="1200" height="${h}" fill="#f1e7d3"></rect>
        <rect width="1200" height="${h}" fill="url(#${p}-g)"></rect>
        <rect x="16" y="16" width="1168" height="${h - 32}" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="${h - 52}" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">${title}</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">${sub}</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>`;
  const foot = (y, right) => `
        <path d="M60 ${y}H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="${y + 34}" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="${y + 34}" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">${right}</text>`;
  // vak met label: w = breedte van het vak, r = romeins cijfer
  const box = (w, r) => `
          <rect x="7" y="7" width="${w - 14}" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="${w}" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="${w / 2 - 32}" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="${w / 2}" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">${r}</text>`;
  const plus = (x) => `<path d="M${x} 245v20M${x - 10} 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>`;

  const CARDS = {
    /* Plaat I — raadsel A (T) · Noord- en Midden-Amerika */
    A: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat I — Raadsel A" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pA')}${hatch('pA')}</defs>
        ${frame('pA', 1200, 540, 'PLAAT I', 'RAADSEL A · IV PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 206C26 152 46 112 80 96C112 80 152 80 184 98C216 116 230 156 238 206Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M40 150C62 130 96 122 126 124M100 186C130 176 168 178 196 190" fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.3"></path>
          <g>
            <g transform="translate(56 142) scale(1.15)"><path d="M6 -24C-6 -24 -14 -16 -14 -4C-15 0 -18 2 -19 4L-26 11L-19 13L-21 18C-18 20 -16 20 -14 19L-17 25C-14 30 -8 32 -2 31C8 29 16 21 18 9C20 -6 16 -20 6 -24Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path><path d="M2 -22C-6 -20 -11 -14 -12 -6" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path><circle cx="-8" cy="-2" r="1.7" fill="#2b2118"></circle><path d="M-13 1C-11 -1 -7 -2 -4 -1" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path></g>
            <g transform="translate(104 134) scale(1.15)"><path d="M6 -24C-6 -24 -14 -16 -14 -4C-15 0 -18 2 -19 4L-26 11L-19 13L-21 18C-18 20 -16 20 -14 19L-17 25C-14 30 -8 32 -2 31C8 29 16 21 18 9C20 -6 16 -20 6 -24Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path><path d="M2 -22C-6 -20 -11 -14 -12 -6" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path><circle cx="-8" cy="-2" r="1.7" fill="#2b2118"></circle><path d="M-13 1C-11 -1 -7 -2 -4 -1" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path></g>
            <g transform="translate(152 140) scale(1.15)"><path d="M6 -24C-6 -24 -14 -16 -14 -4C-15 0 -18 2 -19 4L-26 11L-19 13L-21 18C-18 20 -16 20 -14 19L-17 25C-14 30 -8 32 -2 31C8 29 16 21 18 9C20 -6 16 -20 6 -24Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path><path d="M2 -22C-6 -20 -11 -14 -12 -6" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path><circle cx="-8" cy="-2" r="1.7" fill="#2b2118"></circle><path d="M-13 1C-11 -1 -7 -2 -4 -1" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path></g>
            <g transform="translate(198 148) scale(1.1)"><path d="M6 -24C-6 -24 -14 -16 -14 -4C-15 0 -18 2 -19 4L-26 11L-19 13L-21 18C-18 20 -16 20 -14 19L-17 25C-14 30 -8 32 -2 31C8 29 16 21 18 9C20 -6 16 -20 6 -24Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path><path d="M2 -22C-6 -20 -11 -14 -12 -6" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path><circle cx="-8" cy="-2" r="1.7" fill="#2b2118"></circle><path d="M-13 1C-11 -1 -7 -2 -4 -1" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path></g>
          </g>
          <g fill="#2f7a6b" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M34 206L48 176L62 206Z"></path>
            <path d="M52 206L66 168L80 206Z"></path>
            <path d="M186 206L200 172L214 206Z"></path>
            <path d="M206 206L220 180L234 206Z"></path>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          ${box(252, 'I')}
        </g>
        ${plus(324)}

        <g transform="translate(336 130)" data-num="1">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="196" width="220" height="22" fill="#dbe6e5"></rect>
          <rect x="16" y="196" width="220" height="22" fill="url(#pA-h)"></rect>
          <path d="M90 196V168H162V196Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M100 168V140H152V168Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"><path d="M114 140v28M138 140v28"></path></g>
          <g transform="translate(126 140)" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M-21 0L-12 -58H12L21 0Z"></path>
            <path d="M-12 -58C-12 -67 -6 -73 0 -73C6 -73 12 -67 12 -58Z"></path>
            <path d="M-12 -54L-28 -46L-24 -37L-8 -46Z"></path>
            <path d="M-38 -54L-21 -62L-14 -42L-31 -34Z"></path>
            <path d="M8 -66L20 -102" stroke-width="7" stroke-linecap="round"></path>
            <circle cx="0" cy="-83" r="9.5"></circle>
          </g>
          <g transform="translate(126 57)" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
            <path d="M0 -14L2 -22L-2 -22ZM12 -10L18 -16L14 -19ZM-12 -10L-18 -16L-14 -19ZM17 0L25 -2L23 -6ZM-17 0L-25 -2L-23 -6Z"></path>
          </g>
          <g transform="translate(146 38)">
            <path d="M-7 12H7L5 0H-5Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M0 -2C-6 -8 -4 -18 0 -24C4 -18 6 -8 0 -2Z" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <path d="M24 206C60 200 100 210 136 204C172 198 210 208 230 204" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.5"></path>
          ${box(252, 'II')}
        </g>
        ${plus(600)}

        <g transform="translate(612 130)" data-num="2">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <rect x="26" y="98" width="28" height="88"></rect>
            <rect x="60" y="66" width="22" height="120"></rect>
            <rect x="88" y="110" width="30" height="76"></rect>
            <rect x="124" y="84" width="26" height="102"></rect>
            <rect x="156" y="104" width="30" height="82"></rect>
            <rect x="192" y="122" width="26" height="64"></rect>
          </g>
          <path d="M66 66V48M76 66V48" stroke="#2b2118" stroke-width="2"></path>
          <g fill="#2b2118" opacity=".28">
            <rect x="32" y="108" width="5" height="7"></rect><rect x="43" y="108" width="5" height="7"></rect>
            <rect x="32" y="126" width="5" height="7"></rect><rect x="43" y="126" width="5" height="7"></rect>
            <rect x="65" y="78" width="5" height="7"></rect><rect x="73" y="78" width="5" height="7"></rect>
            <rect x="65" y="96" width="5" height="7"></rect><rect x="73" y="96" width="5" height="7"></rect>
            <rect x="65" y="114" width="5" height="7"></rect><rect x="73" y="114" width="5" height="7"></rect>
            <rect x="95" y="122" width="5" height="7"></rect><rect x="107" y="122" width="5" height="7"></rect>
            <rect x="130" y="96" width="5" height="7"></rect><rect x="140" y="96" width="5" height="7"></rect>
            <rect x="130" y="116" width="5" height="7"></rect><rect x="140" y="116" width="5" height="7"></rect>
            <rect x="163" y="116" width="5" height="7"></rect><rect x="175" y="116" width="5" height="7"></rect>
            <rect x="198" y="134" width="5" height="7"></rect><rect x="208" y="134" width="5" height="7"></rect>
          </g>
          <path d="M16 186H238" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(126 186)">
            <path d="M-56 0C-56 -28 -31 -48 0 -48C31 -48 56 -28 56 0Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
            <path d="M-20 0C-18 -12 -9 -19 0 -19C9 -19 18 -12 20 0Z" fill="#46697a" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-38 -16C-30 -30 -16 -39 -2 -40" fill="none" stroke="#f6f2ea" stroke-width="5" stroke-linecap="round"></path>
            <path d="M24 -36C34 -31 42 -22 46 -12" fill="none" stroke="#f6f2ea" stroke-opacity=".6" stroke-width="3.5" stroke-linecap="round"></path>
          </g>
          <path d="M30 198C70 192 110 202 150 196C190 190 216 200 228 196" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="238" height="236" fill="#c7dbe4"></rect>
          <rect x="7" y="7" width="238" height="236" fill="url(#pA-h)"></rect>
          <ellipse cx="126" cy="118" rx="92" ry="74" fill="#dbe6e5" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.6"></ellipse>
          <ellipse cx="126" cy="118" rx="70" ry="56" fill="#e8f1ef" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4"></ellipse>
          <circle cx="126" cy="118" r="42" fill="#2d4b86" stroke="#2b2118" stroke-width="2.4"></circle>
          <circle cx="126" cy="118" r="30" fill="#23324f"></circle>
          <circle cx="126" cy="118" r="17" fill="#141d2e"></circle>
          <g stroke="#46697a" stroke-opacity=".5" stroke-width="1.4" fill="none">
            <path d="M46 68C62 58 84 54 104 56M206 168C190 180 168 186 146 184"></path>
          </g>
          <g transform="translate(200 206)">
            <path d="M-20 0H20L13 10H-13Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M0 0V-26" stroke="#2b2118" stroke-width="2"></path>
            <path d="M2 -24L16 -4H2Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          </g>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat II — raadsel B (P) · Zuid-Amerika */
    B: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat II — Raadsel B" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pB')}${hatch('pB')}</defs>
        ${frame('pB', 1200, 540, 'PLAAT II', 'RAADSEL B · IV PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 206L66 108L94 148L126 60L164 140L192 112L238 206Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M126 60L150 116C142 110 134 118 126 114C118 110 112 118 104 112Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M66 108L82 134C76 130 70 134 64 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M126 62L150 206M126 62L96 206" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.3"></path>
          <g transform="translate(60 60)" fill="#2b2118">
            <path d="M-36 0C-26 -9 -13 -12 -5 -7L0 -14L5 -7C13 -12 26 -9 36 0C23 -3 11 2 5 7H-5C-11 2 -23 -3 -36 0Z"></path>
            <circle cx="0" cy="-15" r="4.5"></circle>
            <path d="M3 -18L9 -19L4 -14Z"></path>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 220C86 212 172 212 220 220" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(252, 'I')}
        </g>
        ${plus(324)}

        <g transform="translate(336 130)" data-num="1">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 200L56 150L84 176L118 140L150 178L182 152L238 200Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.4" stroke-linejoin="round"></path>
          <g transform="rotate(-2 126 72)">
            <rect x="50" y="38" width="152" height="68" fill="#d8b657"></rect>
            <rect x="50" y="72" width="152" height="17" fill="#2d4b86"></rect>
            <rect x="50" y="89" width="152" height="17" fill="#9e3b28"></rect>
            <rect x="50" y="38" width="152" height="68" fill="none" stroke="#2b2118" stroke-width="1.6"></rect>
          </g>
          <g transform="translate(126 206)">
            <path d="M0 0C-2 -26 -6 -46 -14 -62" fill="none" stroke="#3f7a4e" stroke-width="4" stroke-linecap="round"></path>
            <g fill="#3f7a4e" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
              <path d="M-3 -22C-18 -26 -30 -20 -34 -10C-22 -8 -10 -12 -3 -22Z"></path>
              <path d="M-6 -38C6 -46 20 -44 26 -34C14 -30 2 -32 -6 -38Z"></path>
              <path d="M-10 -52C-24 -58 -36 -54 -40 -44C-28 -40 -16 -44 -10 -52Z"></path>
            </g>
            <g fill="#9e3b28" stroke="#2b2118" stroke-width="1.1">
              <circle cx="4" cy="-26" r="5"></circle><circle cx="12" cy="-20" r="5"></circle>
              <circle cx="-16" cy="-46" r="5"></circle><circle cx="-8" cy="-14" r="5"></circle>
              <circle cx="18" cy="-38" r="5"></circle>
            </g>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          ${box(252, 'II')}
        </g>
        ${plus(600)}

        <g transform="translate(612 130)" data-num="2">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 134C60 122 100 138 140 130C180 122 216 136 238 130V218H16Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M16 134C60 122 100 138 140 130C180 122 216 136 238 130V218H16Z" fill="url(#pB-h)"></path>
          <g fill="#2f7a6b" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M22 132L36 100L50 132Z"></path>
            <path d="M44 130L60 92L76 130Z"></path>
            <path d="M150 128L166 94L182 128Z"></path>
            <path d="M176 130L192 98L208 130Z"></path>
            <path d="M204 128L218 102L232 128Z"></path>
          </g>
          <path d="M16 112C38 106 60 106 78 110" fill="none" stroke="#5b4a36" stroke-width="5" stroke-linecap="round"></path>
          <g fill="#3f7a4e" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round">
            <path d="M30 110C24 102 26 94 34 92C38 98 38 106 34 110Z"></path>
            <path d="M54 108C50 100 54 92 62 92C64 98 62 106 58 109Z"></path>
          </g>
          <g transform="translate(78 104)">
            <path d="M-4 0C-16 -2 -24 -12 -24 -24C-24 -36 -15 -44 -2 -44C8 -44 16 -39 19 -32L22 -20C19 -8 10 -1 -2 0Z" fill="#2b2118"></path>
            <path d="M-20 -6C-30 4 -38 10 -44 12C-38 2 -32 -6 -28 -12Z" fill="#2b2118"></path>
            <path d="M19 -32C34 -37 50 -33 55 -24C49 -14 33 -12 22 -20Z" fill="#e08a3c" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M24 -26C34 -29 44 -27 50 -23" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></path>
            <circle cx="6" cy="-32" r="3.6" fill="#faf4e6"></circle>
            <circle cx="7" cy="-32" r="1.6" fill="#2b2118"></circle>
            <path d="M-6 0V6M2 0V6" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          <path d="M28 168C68 160 108 172 148 164C188 156 214 168 230 164" fill="none" stroke="#46697a" stroke-opacity=".6" stroke-width="1.5"></path>
          <path d="M28 196C68 188 108 200 148 192C188 184 214 196 230 192" fill="none" stroke="#46697a" stroke-opacity=".45" stroke-width="1.5"></path>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M118 156L168 40L220 156Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M168 40L184 78C178 74 172 80 166 76C160 72 156 78 152 74Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M16 156L58 96L96 156Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M22 206H230L220 188H32Z"></path>
            <path d="M32 188H220L210 170H42Z"></path>
            <path d="M42 170H210L200 154H52Z"></path>
          </g>
          <g fill="#faf4e6" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
            <path d="M66 154V138H90V154Z"></path><path d="M64 138L78 128L92 138Z"></path>
            <path d="M100 154V140H122V154Z"></path><path d="M98 140L111 130L124 140Z"></path>
            <path d="M134 154V142H152V154Z"></path><path d="M132 142L143 133L154 142Z"></path>
          </g>
          <g transform="translate(60 190)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="4" stroke-linecap="round"><path d="M-12 -2V12M-2 0V12M10 0V12M18 -2V12"></path></g>
            <path d="M-16 -8C-16 -15 -11 -19 -4 -19H14C20 -19 23 -15 23 -8V-3C23 1 21 2 17 2H-12C-15 2 -16 0 -16 -3Z"></path>
            <path d="M-14 -11C-19 -16 -22 -23 -21 -30C-20 -36 -14 -38 -10 -34C-7 -31 -6 -26 -7 -20L-8 -12Z"></path>
            <path d="M-21 -30C-23 -36 -22 -41 -19 -43C-17 -39 -17 -34 -18 -31ZM-13 -33C-10 -38 -7 -40 -4 -39C-6 -35 -8 -32 -9 -29Z"></path>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat III — raadsel C (N) · Azië */
    C: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat III — Raadsel C" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pC')}${hatch('pC')}</defs>
        ${frame('pC', 1200, 540, 'PLAAT III', 'RAADSEL C · IV PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="238" height="236" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="238" height="236" fill="url(#pC-h)"></rect>
          <path d="M92 34C110 36 124 52 130 74C136 96 134 124 126 148C118 172 104 194 92 204C86 209 80 206 76 197C66 178 56 152 54 124C52 96 58 66 68 50C74 39 83 33 92 34Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <g stroke="#3f7a4e" stroke-opacity=".55" stroke-width="2.2" fill="none">
            <path d="M70 76C82 82 92 94 96 108M68 104C80 110 90 122 94 136M72 132C84 138 94 150 98 164"></path>
          </g>
          <g transform="translate(176 150)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="8" stroke-linecap="round"><path d="M-14 8V36M0 10V36M18 10V36M30 8V36"></path></g>
            <path d="M-22 -10C-22 -22 -14 -28 0 -28H22C34 -28 40 -20 40 -8V4C40 10 36 12 30 12H-16C-21 12 -22 9 -22 4Z"></path>
            <path d="M-22 -8C-34 -10 -42 -18 -42 -28C-42 -36 -36 -40 -29 -37C-24 -35 -22 -29 -22 -22Z"></path>
            <ellipse cx="-24" cy="-16" rx="11" ry="13"></ellipse>
            <path d="M-40 -32C-48 -28 -52 -18 -52 -6C-52 2 -46 4 -44 -2C-42 -12 -40 -24 -38 -30Z"></path>
            <path d="M40 -2C48 0 52 8 50 18C48 24 44 26 42 22C45 14 45 6 39 2Z"></path>
            <circle cx="-34" cy="-30" r="1.8" fill="#faf4e6"></circle>
          </g>
          ${box(252, 'I')}
        </g>
        ${plus(324)}

        <g transform="translate(336 130)" data-num="1">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 200L62 126L92 160L126 46L164 154L196 118L238 200Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M126 46L156 130C146 122 136 132 126 126C116 120 108 132 96 124Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M126 48L158 200M126 48L92 200" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3"></path>
          <g stroke="#46697a" stroke-opacity=".35" stroke-width="1.8" fill="none">
            <path d="M28 70C46 60 66 66 78 76M180 56C198 46 218 52 230 62"></path>
          </g>
          <path d="M16 200H238" stroke="#2b2118" stroke-width="2"></path>
          <text x="126" y="226" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="16" letter-spacing="1" fill="#6b5943">K2</text>
          ${box(252, 'II')}
        </g>
        ${plus(600)}

        <g transform="translate(612 130)" data-num="2">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="238" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M62 202V88C62 76 70 66 84 66C98 66 106 76 106 88V202Z"></path>
            <path d="M146 202V88C146 76 154 66 168 66C182 66 190 76 190 88V202Z"></path>
          </g>
          <path d="M84 66V36M168 66V36" stroke="#2b2118" stroke-width="2.6"></path>
          <circle cx="84" cy="34" r="3" fill="#2b2118"></circle>
          <circle cx="168" cy="34" r="3" fill="#2b2118"></circle>
          <rect x="106" y="120" width="40" height="12" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M112 132V202M140 132V202" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2">
            <path d="M62 100h44M62 122h44M62 144h44M62 166h44M62 184h44"></path>
            <path d="M146 100h44M146 122h44M146 144h44M146 166h44M146 184h44"></path>
            <path d="M76 66v136M92 68v134M160 66v136M176 68v134"></path>
          </g>
          <path d="M16 202H238" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 216C86 208 172 208 220 216" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <rect x="94" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="126" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="120" width="220" height="90" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></rect>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
            <g transform="translate(62 146) scale(0.7)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(104 146) scale(0.7)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(146 146) scale(0.7)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(188 146) scale(0.7)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
          </g>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <g transform="translate(46 188) scale(0.95)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(90 188) scale(0.95)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(134 188) scale(0.95)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(178 188) scale(0.95)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
            <g transform="translate(218 188) scale(0.95)"><path d="M-13 0V-30C-13 -38 -8 -43 0 -43C8 -43 13 -38 13 -30V0Z"></path><path d="M-13 -34L-19 -8H-13ZM13 -34L19 -8H13Z"></path><circle cx="0" cy="-52" r="8.5"></circle><path d="M-4 -60C-4 -65 4 -65 4 -60Z"></path></g>
          </g>
          <g fill="#2b2118">
            <circle cx="43" cy="137" r="1.5"></circle><circle cx="49" cy="137" r="1.5"></circle>
            <circle cx="87" cy="137" r="1.5"></circle><circle cx="93" cy="137" r="1.5"></circle>
            <circle cx="131" cy="137" r="1.5"></circle><circle cx="137" cy="137" r="1.5"></circle>
            <circle cx="175" cy="137" r="1.5"></circle><circle cx="181" cy="137" r="1.5"></circle>
            <circle cx="215" cy="137" r="1.5"></circle><circle cx="221" cy="137" r="1.5"></circle>
          </g>
          <path d="M16 188H236" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"></path>
          <path d="M16 212H236L226 196H26Z" fill="#c8b490" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M16 120H236" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.6"></path>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat IV — raadsel D (A) · Europa */
    D: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat IV — Raadsel D" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pD')}${hatch('pD')}</defs>
        ${frame('pD', 1200, 540, 'PLAAT IV', 'RAADSEL D · V PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 210L180 130V210Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.4"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5">
            <rect x="20" y="56" width="26" height="30"></rect><rect x="52" y="48" width="26" height="30"></rect>
            <rect x="84" y="40" width="26" height="30"></rect><rect x="116" y="32" width="26" height="30"></rect>
            <rect x="148" y="24" width="26" height="30"></rect>
          </g>
          <g stroke="#2d4b86" stroke-opacity=".5" stroke-width="1.6" fill="none">
            <path d="M26 62l14 18M40 62L26 80M58 54l14 18M72 54L58 72M90 46l14 18M104 46L90 64M122 38l14 18M136 38L122 56M154 30l14 18M168 30L154 48"></path>
          </g>
          <g transform="translate(96 170)">
            <path d="M-54 0V-46C-54 -54 -48 -58 -38 -58H38C48 -58 54 -54 54 -46V0Z" fill="#d8b657" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <rect x="-46" y="-50" width="30" height="24" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.5"></rect>
            <rect x="-8" y="-50" width="30" height="24" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.5"></rect>
            <rect x="28" y="-50" width="20" height="24" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.5"></rect>
            <rect x="-54" y="-14" width="108" height="8" fill="#9e3b28"></rect>
            <circle cx="-32" cy="6" r="9" fill="#2b2118"></circle>
            <circle cx="30" cy="6" r="9" fill="#2b2118"></circle>
            <path d="M0 -58V-72M-14 -72h28" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <path d="M16 186L180 106" stroke="#2b2118" stroke-width="2"></path>
          <path d="M16 206L180 126" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.4"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="150" width="164" height="68" fill="#dbe6e5"></rect>
          <rect x="16" y="150" width="164" height="68" fill="url(#pD-h)"></rect>
          <circle cx="146" cy="70" r="18" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.6"></circle>
          <path d="M16 150V120L64 108L104 118L140 112V150Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M16 136C44 128 80 132 116 126" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <g transform="translate(70 108)">
            <path d="M0 0V-16" stroke="#2b2118" stroke-width="3"></path>
            <circle cx="0" cy="-34" r="18" fill="none" stroke="#2b2118" stroke-width="3"></circle>
            <ellipse cx="0" cy="-34" rx="7.5" ry="18" fill="none" stroke="#2b2118" stroke-width="1.8"></ellipse>
            <path d="M-18 -34H18M-16 -43H16M-16 -25H16" stroke="#2b2118" stroke-width="1.5"></path>
          </g>
          <path d="M24 176C48 168 72 184 96 176C120 168 148 184 172 176" fill="none" stroke="#46697a" stroke-width="1.6"></path>
          <path d="M24 198C48 190 72 206 96 198C120 190 148 206 172 198" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="186" width="164" height="32" fill="#dbe6e5"></rect>
          <rect x="16" y="186" width="164" height="32" fill="url(#pD-h)"></rect>
          <g fill="#2d4b86" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M42 186V96C42 74 54 58 62 50C70 58 82 74 82 96V186Z"></path>
            <path d="M80 186V84C80 60 92 42 100 34C108 42 120 60 120 84V186Z"></path>
            <path d="M118 186V100C118 78 128 62 136 54C144 62 154 78 154 100V186Z"></path>
          </g>
          <g fill="#9e3b28" opacity=".75">
            <path d="M46 150C52 132 56 116 62 104C68 116 74 132 78 150Z"></path>
            <path d="M86 140C92 118 96 100 100 88C106 100 112 118 116 140Z"></path>
            <path d="M122 152C128 134 132 120 136 110C142 120 148 134 150 152Z"></path>
          </g>
          <g stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.2">
            <path d="M50 170h24M88 170h24M126 170h22M50 158h24M88 156h24M126 162h22"></path>
          </g>
          <g stroke="#2b2118" stroke-width="2" fill="none">
            <path d="M20 186V140M34 186V140M20 140h14M22 152l10 12M32 152l-10 12"></path>
            <path d="M27 140V128M20 128h14"></path>
          </g>
          <path d="M16 186H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M24 204C48 198 72 210 96 204C120 198 148 210 172 204" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.5"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(98 48)">
            <polygon points="0,-16 3.9,-5 15.2,-5 6.1,2 9.4,13 0,6 -9.4,13 -6.1,2 -15.2,-5 -3.9,-5" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></polygon>
          </g>
          <g transform="translate(48 192)">
            <rect x="-13" y="-46" width="26" height="46" fill="#efe3c8" stroke="#2b2118" stroke-width="1.7"></rect>
            <path d="M-15 -46C-15 -60 -9 -67 0 -80C9 -67 15 -60 15 -46Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-10 -55C-6 -62 6 -62 10 -55" fill="none" stroke="#f6f2ea" stroke-opacity=".55" stroke-width="1.8"></path>
            <path d="M0 -80V-89M-4 -85h8" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <g transform="translate(98 192)">
            <rect x="-16" y="-58" width="32" height="58" fill="#efe3c8" stroke="#2b2118" stroke-width="1.7"></rect>
            <path d="M-19 -58C-19 -74 -11 -83 0 -98C11 -83 19 -74 19 -58Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-12 -69C-6 -78 6 -78 12 -69" fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.8"></path>
            <path d="M0 -98V-108M-5 -103h10" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <g transform="translate(148 192)">
            <rect x="-13" y="-46" width="26" height="46" fill="#efe3c8" stroke="#2b2118" stroke-width="1.7"></rect>
            <path d="M-15 -46C-15 -60 -9 -67 0 -80C9 -67 15 -60 15 -46Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-10 -55C-6 -62 6 -62 10 -55" fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.8"></path>
            <path d="M0 -80V-89M-4 -85h8" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <g fill="#9e3b28" stroke="#2b2118" stroke-width="1.2">
            <rect x="18" y="184" width="12" height="9"></rect><rect x="42" y="184" width="12" height="9"></rect>
            <rect x="66" y="184" width="12" height="9"></rect><rect x="90" y="184" width="12" height="9"></rect>
            <rect x="114" y="184" width="12" height="9"></rect><rect x="138" y="184" width="12" height="9"></rect>
            <rect x="160" y="184" width="12" height="9"></rect>
          </g>
          <rect x="16" y="192" width="164" height="28" fill="#9e3b28" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M50 192v28M98 192v28M146 192v28" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(116 176)">
            <path d="M-26 0L-16 -54H16L26 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M-18 -44H18" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.3"></path>
            <path d="M-16 -54C-16 -62 -8 -66 0 -66C8 -66 16 -62 16 -54Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <g stroke="#2b2118" stroke-width="3" fill="#faf4e6" stroke-linejoin="round">
              <path d="M0 -62L-46 -96L-40 -104L4 -70Z"></path>
              <path d="M0 -62L34 -108L42 -102L8 -56Z"></path>
              <path d="M0 -62L46 -28L40 -20L-4 -54Z"></path>
              <path d="M0 -62L-34 -16L-42 -22L-8 -68Z"></path>
            </g>
            <circle cx="0" cy="-62" r="5" fill="#2b2118"></circle>
          </g>
          <path d="M16 176H180" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(44 200)">
            <circle cx="-14" cy="0" r="12" fill="none" stroke="#2b2118" stroke-width="2.4"></circle>
            <circle cx="16" cy="0" r="12" fill="none" stroke="#2b2118" stroke-width="2.4"></circle>
            <path d="M-14 0L-4 -18H10L16 0M-4 -18L-10 -18M10 -18V-24M4 -24h12" fill="none" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <g transform="translate(150 196)">
            <path d="M-20 12C-20 0 -14 -6 -8 -6M0 12C0 -2 6 -10 14 -12" fill="none" stroke="#3f7a4e" stroke-width="2.4"></path>
            <path d="M-8 -6C-14 -12 -12 -20 -6 -22C-1 -24 3 -19 2 -12C1 -8 -3 -5 -8 -6Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M14 -12C8 -19 10 -28 16 -30C22 -32 26 -26 25 -19C24 -15 19 -11 14 -12Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <path d="M28 214C72 206 128 206 170 214" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1"></path>
          ${box(196, 'V')}
        </g>

        ${foot(440, 'I → V')}
      </svg>`),

    /* Plaat V — raadsel E (E) · Afrika */
    E: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat V — Raadsel E" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pE')}${hatch('pE')}</defs>
        ${frame('pE', 1200, 540, 'PLAAT V', 'RAADSEL E · VI PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="14" y="52" width="132" height="150" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M22 60h116v134H22Z" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          <path d="M62 68H98V104H134V140H98V186H62V140H26V104H62Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M70 76H90V112H126V132H90V178H70V132H34V112H70Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M74 88H86M74 100H86M98 118H118M42 118H62M74 144H86M74 158H86" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.3"></path>
          <path d="M14 202H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 214C56 206 104 206 134 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'I')}
        </g>
        ${plus(232)}

        <g transform="translate(244 130)" data-num="1">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M22 60C48 44 96 46 122 66C142 82 144 114 130 138C114 166 74 180 46 166C22 154 12 122 16 96C18 78 18 68 22 60Z" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="2" stroke-dasharray="8 7"></path>
          <path d="M52 96C70 86 94 90 104 104C114 118 110 140 96 148C80 158 58 152 50 138C42 124 42 104 52 96Z" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M52 96C70 86 94 90 104 104C114 118 110 140 96 148C80 158 58 152 50 138C42 124 42 104 52 96Z" fill="url(#pE-h)"></path>
          <g stroke="#3f7a4e" stroke-width="2" fill="none" stroke-linecap="round">
            <path d="M34 168C34 154 32 144 28 136M42 170C42 156 42 146 46 138M120 160C120 148 122 138 126 130"></path>
          </g>
          <g transform="translate(78 126)">
            <path d="M-18 0H18L12 8H-12Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M0 0V-18M0 -18L10 -6H0" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <path d="M14 200H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 212C56 204 104 204 134 212" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'II')}
        </g>
        ${plus(416)}

        <g transform="translate(428 130)" data-num="2">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 104C34 94 62 108 90 100C118 92 140 104 153 100V142H7Z" fill="#8a6a4a" stroke="#2b2118" stroke-width="1.7"></path>
          <g fill="#2f7a6b" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round">
            <path d="M14 102L26 72L38 102Z"></path><path d="M32 100L46 64L60 100Z"></path>
            <path d="M104 98L118 66L132 98Z"></path><path d="M124 100L138 74L152 100Z"></path>
            <path d="M68 96L80 70L92 96Z"></path>
          </g>
          <path d="M18 120C44 112 70 124 96 116C122 108 138 118 150 114" fill="none" stroke="#f6f2ea" stroke-opacity=".35" stroke-width="1.6"></path>
          <path d="M7 142H153" stroke="#2b2118" stroke-width="1.8"></path>
          <g transform="translate(80 206) scale(.85)" fill="#2b2118">
            <path d="M-30 -6C-42 -14 -46 -30 -40 -42C-36 -50 -28 -50 -26 -42L-22 -18Z"></path>
            <path d="M30 -6C42 -14 46 -30 40 -42C36 -50 28 -50 26 -42L22 -18Z"></path>
            <path d="M-28 0C-30 -16 -26 -34 -14 -42C-4 -48 10 -48 20 -42C30 -34 32 -16 28 0Z"></path>
            <path d="M-16 -46C-16 -60 -9 -68 1 -68C11 -68 18 -60 18 -47C18 -38 12 -33 4 -33H-4C-11 -33 -16 -38 -16 -46Z"></path>
            <path d="M-10 -44C-10 -52 -5 -56 1 -56C7 -56 12 -52 12 -44C12 -38 7 -35 1 -35C-5 -35 -10 -38 -10 -44Z" fill="#5b4a36"></path>
            <circle cx="-4" cy="-47" r="2" fill="#faf4e6"></circle>
            <circle cx="6" cy="-47" r="2" fill="#faf4e6"></circle>
            <path d="M-3 -41h8" stroke="#2b2118" stroke-width="1.4"></path>
          </g>
          <path d="M20 218C50 210 110 210 140 218" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1"></path>
          ${box(160, 'III')}
        </g>
        ${plus(600)}

        <g transform="translate(612 130)" data-num="3">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 100C34 90 58 100 84 96C110 92 136 100 153 96V243H7Z" fill="#dbe6e5"></path>
          <path d="M7 100C34 90 58 100 84 96C110 92 136 100 153 96V243H7Z" fill="url(#pE-h)"></path>
          <path d="M7 100C34 90 58 100 84 96C110 92 136 100 153 96" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M14 72L44 44L66 66L92 38L118 68L146 72" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.4" stroke-linejoin="round"></path>
          <g transform="translate(78 168)">
            <path d="M-44 0C-36 14 -20 20 0 20C20 20 36 14 44 0C32 -4 18 -6 0 -6C-18 -6 -32 -4 -44 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-6 -6V-52" stroke="#2b2118" stroke-width="2.4"></path>
            <path d="M-4 -50L18 -14H-4Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-8 -44L-26 -14H-8Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          </g>
          <path d="M18 204C44 196 70 208 96 200C122 192 138 202 150 198" fill="none" stroke="#46697a" stroke-opacity=".6" stroke-width="1.4"></path>
          <path d="M22 124C34 118 44 124 54 120" fill="none" stroke="#46697a" stroke-opacity=".45" stroke-width="1.4"></path>
          ${box(160, 'IV')}
        </g>
        ${plus(784)}

        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <circle cx="126" cy="46" r="16" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.5"></circle>
          <path d="M7 198C24 160 44 118 70 96C84 84 96 90 104 108C116 134 134 172 153 198Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M70 96C82 118 92 152 100 198" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.6"></path>
          <path d="M7 198C26 172 48 146 72 134" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.4"></path>
          <path d="M14 214C46 206 108 206 146 214" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1"></path>
          <path d="M14 198H146" stroke="#2b2118" stroke-width="2"></path>
          <g stroke="#2b2118" stroke-width="3.4" fill="none" stroke-linecap="round">
            <path d="M46 198V148"></path>
            <path d="M46 160C38 152 30 150 24 152M46 152C54 142 62 138 70 140M46 172C38 166 32 164 26 166M46 146C42 136 40 130 42 124M46 146C52 138 58 134 64 132"></path>
          </g>
          ${box(160, 'V')}
        </g>
        ${plus(968)}

        <g transform="translate(980 130)" data-num="5">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <circle cx="108" cy="86" r="26" fill="#ffcf4d" stroke="#2b2118" stroke-width="1.6"></circle>
          <g stroke="#2b2118" stroke-width="2.6" fill="none" stroke-linecap="round">
            <path d="M34 186V128"></path>
            <path d="M34 134C22 126 14 122 8 122M34 130C46 120 58 116 70 118"></path>
          </g>
          <path d="M4 120C20 110 50 108 74 116" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g transform="translate(106 186)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="5" stroke-linecap="round"><path d="M-14 -2V-30M-4 0V-30M14 0V-30M22 -2V-30"></path></g>
            <path d="M-20 -34C-20 -44 -14 -50 -2 -50H18C28 -50 32 -44 32 -34V-28C32 -24 29 -23 25 -23H-14C-18 -23 -20 -25 -20 -29Z"></path>
            <path d="M-16 -46C-20 -62 -22 -80 -21 -93" fill="none" stroke="#2b2118" stroke-width="9" stroke-linecap="round"></path>
            <ellipse cx="-24" cy="-98" rx="9" ry="5.5" transform="rotate(-24 -24 -98)"></ellipse>
            <path d="M-31 -101C-36 -103 -40 -102 -41 -99C-38 -97 -34 -97 -31 -98Z"></path>
            <path d="M-27 -104V-111M-19 -102V-109" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
            <path d="M32 -32C38 -30 42 -22 40 -14C39 -10 36 -9 35 -12C37 -18 37 -26 31 -28Z"></path>
            <circle cx="-25" cy="-100" r="1.5" fill="#faf4e6"></circle>
          </g>
          <path d="M14 186H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 200C56 192 104 192 134 200" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'VI')}
        </g>

        ${foot(440, 'I → VI')}
      </svg>`),

    /* Plaat VI — raadsel F (L) */
    F: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat VI — Raadsel F" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pF')}${hatch('pF')}</defs>
        ${frame('pF', 1200, 540, 'PLAAT VI', 'RAADSEL F · III PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(250 60)">
            <path d="M0 0V96" stroke="#2b2118" stroke-width="3"></path>
            <path d="M0 -4L8 -40C4 -44 -4 -44 -8 -40Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M0 -40V-52" stroke="#2b2118" stroke-width="2"></path>
          </g>
          <rect x="30" y="104" width="240" height="66" fill="#2f7a6b" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="30" y="94" width="240" height="12" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4">
            <rect x="40" y="116" width="10" height="44"></rect><rect x="60" y="116" width="10" height="44"></rect>
            <rect x="80" y="116" width="10" height="44"></rect><rect x="100" y="116" width="10" height="44"></rect>
            <rect x="120" y="116" width="10" height="44"></rect><rect x="140" y="116" width="10" height="44"></rect>
            <rect x="160" y="116" width="10" height="44"></rect><rect x="180" y="116" width="10" height="44"></rect>
            <rect x="200" y="116" width="10" height="44"></rect><rect x="220" y="116" width="10" height="44"></rect>
            <rect x="240" y="116" width="10" height="44"></rect><rect x="258" y="116" width="10" height="44"></rect>
          </g>
          <g fill="#d8b657" opacity=".8">
            <rect x="52" y="124" width="6" height="12"></rect><rect x="92" y="124" width="6" height="12"></rect>
            <rect x="132" y="124" width="6" height="12"></rect><rect x="172" y="124" width="6" height="12"></rect>
            <rect x="212" y="124" width="6" height="12"></rect><rect x="250" y="124" width="6" height="12"></rect>
          </g>
          <rect x="24" y="170" width="252" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7"></rect>
          <rect x="16" y="180" width="288" height="38" fill="#dbe6e5"></rect>
          <rect x="16" y="180" width="288" height="38" fill="url(#pF-h)"></rect>
          <path d="M16 180H304" stroke="#2b2118" stroke-width="2"></path>
          <path d="M30 202C74 194 130 208 176 200C222 192 272 204 292 200" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
          ${box(320, 'I')}
        </g>
        ${plus(410)}

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="168" width="288" height="50" fill="#2d4b86" opacity=".5"></rect>
          <rect x="16" y="168" width="288" height="50" fill="url(#pF-h)"></rect>
          <path d="M16 168C40 150 70 146 104 152C140 158 176 150 214 140C250 130 284 134 304 146V168Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="#faf4e6" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <rect x="40" y="112" width="40" height="40"></rect>
            <rect x="88" y="98" width="34" height="54"></rect>
            <rect x="130" y="116" width="46" height="34"></rect>
            <rect x="186" y="96" width="38" height="48"></rect>
            <rect x="232" y="110" width="44" height="34"></rect>
          </g>
          <g fill="#2d4b86" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M40 112C40 96 50 86 60 86C70 86 80 96 80 112Z"></path>
            <path d="M130 116C130 102 141 94 153 94C165 94 176 102 176 116Z"></path>
            <path d="M232 110C232 96 243 88 254 88C265 88 276 96 276 110Z"></path>
          </g>
          <g stroke="#2b2118" stroke-width="1.8">
            <path d="M60 86V76M153 94V84M254 88V78"></path>
            <path d="M54 80h12M147 88h12M248 82h12"></path>
          </g>
          <g fill="#2d4b86" opacity=".85">
            <rect x="96" y="112" width="8" height="12"></rect><rect x="108" y="112" width="8" height="12"></rect>
            <rect x="96" y="132" width="8" height="12"></rect><rect x="108" y="132" width="8" height="12"></rect>
            <rect x="194" y="110" width="8" height="12"></rect><rect x="208" y="110" width="8" height="12"></rect>
            <rect x="194" y="128" width="8" height="12"></rect><rect x="208" y="128" width="8" height="12"></rect>
          </g>
          <path d="M30 196C74 188 130 202 176 194C222 186 272 198 292 194" fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.8"></path>
          ${box(320, 'II')}
        </g>
        ${plus(790)}

        <g transform="translate(820 130)" data-num="2">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <circle cx="252" cy="58" r="20" fill="none" stroke="#d8b657" stroke-width="4"></circle>
          <circle cx="262" cy="52" r="20" fill="#faf4e6"></circle>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <rect x="40" y="132" width="64" height="72"></rect>
            <rect x="120" y="120" width="86" height="84"></rect>
            <rect x="220" y="140" width="56" height="64"></rect>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M120 120C120 96 140 78 163 78C186 78 206 96 206 120Z"></path>
            <path d="M40 132C40 116 54 104 72 104C90 104 104 116 104 132Z"></path>
            <path d="M220 140C220 126 232 116 248 116C264 116 276 126 276 140Z"></path>
          </g>
          <g stroke="#2b2118" stroke-width="2" fill="none">
            <path d="M163 78V62M72 104V90M248 116V102"></path>
            <path d="M166 58a5 5 0 1 1-4-5 4 4 0 1 0 4 5Z" fill="#d8b657"></path>
            <path d="M75 86a4 4 0 1 1-3.2-4 3.2 3.2 0 1 0 3.2 4Z" fill="#d8b657"></path>
            <path d="M251 98a4 4 0 1 1-3.2-4 3.2 3.2 0 1 0 3.2 4Z" fill="#d8b657"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <rect x="24" y="104" width="16" height="100"></rect>
            <path d="M22 104h20l-10-16Z"></path>
            <rect x="286" y="116" width="16" height="88"></rect>
            <path d="M284 116h20l-10-16Z"></path>
          </g>
          <g fill="#5b4a36">
            <path d="M136 204v-40c0-10 8-18 18-18s18 8 18 18v40Z"></path>
            <path d="M56 204v-28c0-8 6-14 14-14s14 6 14 14v28Z"></path>
            <path d="M236 204v-26c0-7 5-12 12-12s12 5 12 12v26Z"></path>
          </g>
          <path d="M16 204H304" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(298 204)" stroke="#2b2118" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M-8 0C-10 -20 -10 -38 -6 -54"></path>
            <path d="M-6 -54C-16 -64 -28 -64 -34 -56M-6 -54C4 -64 14 -62 18 -54M-6 -54C-14 -66 -12 -76 -6 -82M-6 -54C4 -60 12 -56 14 -48"></path>
          </g>
          <path d="M34 218C86 210 214 210 286 218" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(320, 'III')}
        </g>

        ${foot(440, 'I → III')}
      </svg>`),
  };

  window.GeoCardsPlanet = CARDS;
})();
