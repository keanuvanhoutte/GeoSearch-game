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
          <path d="M16 214C24 176 40 140 62 116C88 88 132 78 168 88C204 98 228 132 236 214Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.4">
            <path d="M30 210C38 180 50 154 66 136M212 212C206 178 196 150 182 130M106 214C110 192 114 176 120 164"></path>
          </g>
          <g>
            <path d="M62.1 100.0 C43.9 101.3 40.0 118.2 43.1 126.5 L36.9 132.2 L44.2 134.8 C45.2 144.7 58.2 152.0 68.6 152.0 C85.5 149.4 92.0 128.6 80.3 102.6 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M62.1 100.0 C43.9 101.3 40.0 118.2 42.6 122.9 C47.8 109.9 63.4 104.7 80.3 102.6 Z" fill="#2b2118" opacity=".42"></path>
            <circle cx="52.5" cy="124.4" r="2.3" fill="#2b2118"></circle>
            <path d="M46.8 120.8 C49.9 118.2 55.1 118.2 58.2 120.3" fill="none" stroke="#2b2118" stroke-opacity=".7" stroke-width="1.5"></path>
            <path d="M47.3 139.0 C53.0 141.1 58.2 140.6 62.1 138.5" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <path d="M108.2 99.0 C90.8 100.2 87.0 116.5 90.0 124.5 L84.0 130.0 L91.0 132.5 C92.0 142.0 104.5 149.0 114.5 149.0 C130.8 146.5 137.0 126.5 125.8 101.5 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M108.2 99.0 C90.8 100.2 87.0 116.5 89.5 121.0 C94.5 108.5 109.5 103.5 125.8 101.5 Z" fill="#2b2118" opacity=".42"></path>
            <circle cx="99.0" cy="122.5" r="2.2" fill="#2b2118"></circle>
            <path d="M93.5 119.0 C96.5 116.5 101.5 116.5 104.5 118.5" fill="none" stroke="#2b2118" stroke-opacity=".7" stroke-width="1.5"></path>
            <path d="M94.0 136.5 C99.5 138.5 104.5 138.0 108.2 136.0" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <path d="M154.4 106.0 C137.6 107.2 134.0 122.8 136.9 130.5 L131.1 135.8 L137.8 138.2 C138.8 147.3 150.8 154.0 160.4 154.0 C176.0 151.6 182.0 132.4 171.2 108.4 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M154.4 106.0 C137.6 107.2 134.0 122.8 136.4 127.1 C141.2 115.1 155.6 110.3 171.2 108.4 Z" fill="#2b2118" opacity=".42"></path>
            <circle cx="145.5" cy="128.6" r="2.2" fill="#2b2118"></circle>
            <path d="M140.2 125.2 C143.1 122.8 147.9 122.8 150.8 124.7" fill="none" stroke="#2b2118" stroke-opacity=".7" stroke-width="1.5"></path>
            <path d="M140.7 142.0 C146.0 143.9 150.8 143.4 154.4 141.5" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <circle cx="145.5" cy="128.6" r="4.6" fill="none" stroke="#2b2118" stroke-width="1.4"></circle>
            <path d="M150.1 128.6 H155.6" stroke="#2b2118" stroke-width="1.3"></path>
            <path d="M198.4 112.0 C181.6 113.2 178.0 128.8 180.9 136.5 L175.1 141.8 L181.8 144.2 C182.8 153.3 194.8 160.0 204.4 160.0 C220.0 157.6 226.0 138.4 215.2 114.4 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M198.4 112.0 C181.6 113.2 178.0 128.8 180.4 133.1 C185.2 121.1 199.6 116.3 215.2 114.4 Z" fill="#2b2118" opacity=".42"></path>
            <circle cx="189.5" cy="134.6" r="2.2" fill="#2b2118"></circle>
            <path d="M184.2 131.2 C187.1 128.8 191.9 128.8 194.8 130.7" fill="none" stroke="#2b2118" stroke-opacity=".7" stroke-width="1.5"></path>
            <path d="M184.7 148.0 C190.0 149.9 194.8 149.4 198.4 147.5" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <path d="M182.8 146.1 C183.3 158.8 197.2 164.8 207.3 161.2 C204.4 155.2 194.8 153.8 182.8 146.1 Z" fill="#2b2118" opacity=".5"></path>
          </g>
          <g fill="#3f7a4e" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
            <path d="M26 214L38 184L50 214Z"></path>
            <path d="M46 214L56 190L66 214Z"></path>
            <path d="M190 214L202 186L214 214Z"></path>
            <path d="M212 214L222 192L232 214Z"></path>
          </g>
          <path d="M16 214H236" stroke="#2b2118" stroke-width="2"></path>
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
            <rect x="26" y="120" width="26" height="60"></rect>
            <rect x="56" y="136" width="18" height="44"></rect>
            <rect x="126" y="112" width="22" height="68"></rect>
            <rect x="196" y="128" width="26" height="52"></rect>
            <rect x="226" y="146" width="18" height="34"></rect>
          </g>
          <path d="M78 180V118H88V100H98V88H110V106H122V180Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M101 88V60M107 88V66" stroke="#2b2118" stroke-width="2.2"></path>
          <path d="M152 180L160 110H178L186 180Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M163 110V84M175 110V88" stroke="#2b2118" stroke-width="2.2"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2">
            <path d="M157 138H181M155 160H183"></path>
            <path d="M157 138L181 160M181 138L157 160M155 160L183 180M183 160L155 180"></path>
          </g>
          <g fill="#2b2118" opacity=".25">
            <rect x="32" y="130" width="5" height="7"></rect><rect x="42" y="130" width="5" height="7"></rect>
            <rect x="32" y="148" width="5" height="7"></rect><rect x="42" y="148" width="5" height="7"></rect>
            <rect x="61" y="146" width="5" height="7"></rect><rect x="61" y="162" width="5" height="7"></rect>
            <rect x="83" y="128" width="5" height="7"></rect><rect x="92" y="112" width="5" height="7"></rect>
            <rect x="101" y="100" width="5" height="7"></rect><rect x="112" y="118" width="5" height="7"></rect>
            <rect x="83" y="150" width="5" height="7"></rect><rect x="101" y="130" width="5" height="7"></rect>
            <rect x="112" y="146" width="5" height="7"></rect><rect x="92" y="146" width="5" height="7"></rect>
            <rect x="131" y="124" width="5" height="7"></rect><rect x="139" y="124" width="5" height="7"></rect>
            <rect x="131" y="144" width="5" height="7"></rect><rect x="139" y="144" width="5" height="7"></rect>
            <rect x="202" y="140" width="5" height="7"></rect><rect x="212" y="140" width="5" height="7"></rect>
            <rect x="202" y="158" width="5" height="7"></rect><rect x="212" y="158" width="5" height="7"></rect>
          </g>
          <path d="M16 180H238V194H16Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6"></path>
          <rect x="16" y="194" width="222" height="28" fill="#2d4b86" opacity=".42"></rect>
          <rect x="16" y="194" width="222" height="28" fill="url(#pA-h)"></rect>
          <path d="M16 194H238" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".55" stroke-width="1.5">
            <path d="M24 206C56 200 90 208 122 202M140 214C172 208 206 216 232 210"></path>
          </g>
          <g transform="translate(196 206)">
            <path d="M-16 0H16L11 8H-11Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-2 0V-16H9L-2 -8" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <g transform="translate(66 180)">
            <path d="M-34 0C-34 -20 -19 -32 0 -32C19 -32 34 -20 34 0C22 6 -22 6 -34 0Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
            <path d="M-13 0C-11 -9 -6 -13 0 -13C6 -13 11 -9 13 0C8 3 -8 3 -13 0Z" fill="#46697a" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-24 -11C-19 -21 -9 -27 0 -27" fill="none" stroke="#f6f2ea" stroke-width="4.5" stroke-linecap="round"></path>
            <path d="M15 -24C22 -20 27 -13 29 -6" fill="none" stroke="#f6f2ea" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"></path>
            <g fill="none" stroke="#46697a" stroke-opacity=".55" stroke-width="1.3">
              <path d="M-28 -6C-18 -10 -6 -12 6 -11M-22 -16C-14 -21 -4 -24 6 -24M8 -18C16 -16 22 -12 26 -6"></path>
            </g>
            <g fill="#46697a" opacity=".45">
              <rect x="-20" y="-20" width="4" height="9"></rect><rect x="-12" y="-24" width="4" height="13"></rect>
              <rect x="-5" y="-22" width="4" height="11"></rect><rect x="4" y="-21" width="4" height="10"></rect>
              <rect x="12" y="-17" width="4" height="7"></rect>
            </g>
            <path d="M-34 0C-22 6 22 6 34 0" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          </g>
          <rect x="150" y="204" width="86" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="193" y="221" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="1.5" fill="#2b2118">WINDY CITY</text>
          <g fill="none" stroke="#46697a" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round">
            <path d="M138 60C152 54 166 62 180 56M150 74C164 68 178 76 192 70M128 46C140 40 152 46 164 42"></path>
          </g>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <text x="126" y="40" text-anchor="middle" font-family="'EB Garamond',serif" font-size="20" font-style="italic" letter-spacing="3" fill="#2b2118" fill-opacity=".7">Itzá</text>
          <g fill="#3f7a4e" opacity=".35">
            <ellipse cx="34" cy="150" rx="26" ry="18"></ellipse>
            <ellipse cx="62" cy="158" rx="22" ry="14"></ellipse>
            <ellipse cx="216" cy="148" rx="26" ry="18"></ellipse>
            <ellipse cx="190" cy="158" rx="22" ry="14"></ellipse>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M30 196H222L212 180H40Z"></path>
            <path d="M40 180H212L203 165H49Z"></path>
            <path d="M49 165H203L194 150H58Z"></path>
            <path d="M58 150H194L185 136H67Z"></path>
            <path d="M67 136H185L177 123H75Z"></path>
            <path d="M75 123H177L169 111H83Z"></path>
            <path d="M83 111H169L162 100H90Z"></path>
            <path d="M90 100H162L155 90H97Z"></path>
            <path d="M97 90H155L148 81H104Z"></path>
          </g>
          <path d="M104 81H148V58H104Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M100 58H152L148 48H104Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M118 81V64C118 61 121 59 126 59C131 59 134 61 134 64V81Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M108 78V62M144 78V62M126 48V42"></path>
          </g>
          <path d="M108 196V81H144V196Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1.2">
            <path d="M108 188H144M108 178H144M108 168H144M108 158H144M108 148H144M108 138H144M108 128H144M108 118H144M108 108H144M108 98H144M108 88H144"></path>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M100 196V186C100 182 103 179 107 179V196Z"></path>
            <path d="M152 196V186C152 182 149 179 145 179V196Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.1">
            <path d="M60 180H100M152 180H192M70 165H100M152 165H182"></path>
          </g>
          <path d="M16 196H238" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 210C86 202 172 202 220 210" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <rect x="88" y="206" width="76" height="22" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5"></rect>
          <text x="126" y="222" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="2" fill="#2b2118">UNESCO</text>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat II — raadsel B (P) · Zuid-Amerika */
    B: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat II — Raadsel B" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pB')}${hatch('pB')}</defs>
        ${frame('pB', 1200, 540, 'PLAAT II', 'RAADSEL B · IV PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 206L66 108L94 148L126 60L164 140L192 112L238 206Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M126 60L150 116C142 110 134 118 126 114C118 110 112 118 104 112Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M66 108L82 134C76 130 70 134 64 130Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M126 62L145 172M126 62L102 172" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.3"></path>
          <g transform="translate(60 60)" fill="#2b2118">
            <path d="M-36 0C-26 -9 -13 -12 -5 -7L0 -14L5 -7C13 -12 26 -9 36 0C23 -3 11 2 5 7H-5C-11 2 -23 -3 -36 0Z"></path>
            <circle cx="0" cy="-15" r="4.5"></circle>
            <path d="M3 -18L9 -19L4 -14Z"></path>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          <rect x="66" y="212" width="120" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="126" y="229" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#2b2118">MAX 6961 m</text>
          <text x="126" y="192" text-anchor="middle" font-family="'EB Garamond',serif" font-size="17" font-weight="600" letter-spacing="7" fill="#2b2118" fill-opacity=".6">ANDES</text>
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
          <rect x="14" y="20.0" width="224" height="164.3" fill="#dbe6e5" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></rect>
          <rect x="14" y="20.0" width="224" height="164.3" fill="url(#pB-h)"></rect>
          <clipPath id="kaart"><rect x="14" y="20.0" width="224" height="164.3"></rect></clipPath>
          <g clip-path="url(#kaart)">
          <path d="M18.0 26.8 L29.8 26.4 L37.6 26.4 L40.8 30.1 L40.4 34.1 L38.8 42.2 L38.8 46.6 L43.1 51.8 L47.5 54.2 L53.3 52.2 L57.7 52.6 L63.6 55.4 L65.9 55.8 L69.4 52.6 L71.0 48.6 L73.8 46.2 L79.3 45.0 L85.9 40.6 L86.7 45.4 L86.3 47.8 L91.0 46.2 L93.0 43.8 L94.2 44.6 L100.5 48.6 L107.5 47.8 L111.9 49.8 L115.0 48.2 L120.5 47.4 L124.4 47.8 L128.0 51.4 L132.3 56.2 L136.2 59.7 L139.0 62.9 L142.9 66.1 L148.0 66.5 L155.5 66.9 L161.3 70.0 L164.9 73.2 L168.0 81.0 L171.2 83.8 L170.8 89.7 L173.5 90.8 L175.9 92.8 L177.1 95.2 L179.8 92.4 L186.9 94.8 L193.5 99.5 L204.5 101.1 L216.3 104.2 L222.2 109.3 L229.3 112.5 L230.5 121.2 L224.2 131.1 L216.3 141.2 L214.4 149.3 L211.6 161.6 L209.3 171.1 L206.5 178.3 L91.8 178.3 L91.0 162.8 L82.8 157.4 L73.0 151.3 L67.9 145.2 L62.4 133.1 L55.7 121.2 L49.4 113.7 L49.0 109.7 L52.6 103.0 L49.8 98.3 L49.8 93.6 L53.3 85.7 L58.1 82.6 L63.6 73.9 L62.0 62.1 L60.4 58.1 L55.3 54.6 L51.8 60.9 L45.5 57.4 L37.6 54.2 L31.0 50.2 L26.6 42.2 L20.0 37.4 L18.0 35.7 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M170.0 90.1 L172.7 88.9 L176.7 90.8 L175.5 93.6 L171.9 94.4 L168.8 92.4 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-width=".9" stroke-linejoin="round"><path d="M40.8 30.1 L24.7 38.2"></path><path d="M38.8 46.6 L31.0 45.8"></path><path d="M43.1 51.8 L42.0 58.1"></path><path d="M63.6 55.4 L61.6 61.3"></path><path d="M87.5 43.0 L81.6 46.6 L83.2 55.4 L84.8 62.1 L95.0 65.3 L102.4 65.3 L101.3 72.4 L104.8 85.0"></path><path d="M104.8 85.0 L94.6 85.0 L94.2 90.5 L95.0 94.4 L93.0 106.2"></path><path d="M58.1 84.2 L63.2 86.5 L71.8 88.5"></path><path d="M71.8 88.5 L78.9 93.6 L88.7 99.1 L93.0 106.2"></path><path d="M52.6 103.0 L56.1 107.4 L60.0 101.5 L66.3 98.3 L71.8 93.2 L71.8 88.5"></path><path d="M132.3 56.2 L129.5 61.3 L129.1 69.2"></path><path d="M129.1 69.2 L120.9 73.9 L114.2 73.2 L116.2 81.8 L104.8 85.0"></path><path d="M129.1 69.2 L133.5 74.7 L145.6 81.8"></path><path d="M142.9 66.1 L139.7 73.9 L145.6 81.8"></path><path d="M145.6 81.8 L151.9 80.6"></path><path d="M155.5 66.9 L151.9 80.6"></path><path d="M151.9 80.6 L159.8 81.0 L164.9 73.2"></path><path d="M93.0 106.2 L78.1 118.4 L82.0 126.8 L88.7 129.1 L90.7 133.1 L94.2 133.1"></path><path d="M94.2 133.1 L97.7 139.2 L96.5 145.2 L95.8 153.3 L94.6 159.5 L91.0 162.8"></path><path d="M94.2 133.1 L100.5 130.3 L111.1 129.1 L113.0 137.1 L124.8 143.2 L131.1 149.3 L138.6 154.6 L139.7 168.2 L139.0 170.3"></path><path d="M94.6 159.5 L97.3 165.7 L99.7 174.1 L100.9 178.3"></path><path d="M139.0 170.3 L121.7 178.3"></path><path d="M139.0 170.3 L140.1 178.3"></path></g>
          <g fill="none" stroke="#2d4b86" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M78.9 107.0 L71.0 107.4 L63.2 109.3"></path><path d="M78.9 107.0 L73.8 117.2 L78.9 131.1"></path><path d="M113.0 102.2 L96.5 95.6 L80.8 87.3"></path><path d="M131.9 101.8 L122.1 95.6 L104.4 89.7 L102.4 81.8"></path><path d="M124.4 95.2 L129.1 78.7"></path><path d="M126.4 105.0 L112.3 119.2 L94.6 127.2"></path><path d="M109.1 99.9 L92.6 117.2 L82.0 125.2"></path><path d="M136.6 103.0 L116.6 124.4 L110.7 132.3"></path><path d="M152.7 99.1 L141.7 117.2 L143.7 133.1"></path><path d="M162.5 96.0 L160.2 115.3 L159.4 137.1"></path></g>
          <path d="M78.9 107.0 L88.7 103.8 L93.0 106.2 L108.3 102.6 L113.4 103.0 L131.9 101.8 L137.8 102.2 L147.6 99.5 L152.7 99.1 L161.3 97.1 L164.1 95.6 L168.8 91.6 L171.2 89.7" fill="none" stroke="#2d4b86" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
          <circle cx="171.2" cy="90.8" r="13" fill="none" stroke="#9e3b28" stroke-width="2.6"></circle>
          <circle cx="171.2" cy="90.8" r="17" fill="none" stroke="#9e3b28" stroke-opacity=".35" stroke-width="1.2" stroke-dasharray="3 3"></circle>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <clipPath id="ic"><rect x="7" y="7" width="238" height="236"></rect></clipPath>
          <g clip-path="url(#ic)">
          <path d="M167.9 59.1L190.0 62.0L167.9 64.9ZM167.2 70.0L178.2 76.0L165.7 75.7ZM163.7 80.4L181.4 94.0L160.8 85.5ZM157.7 89.6L164.2 100.2L153.6 93.7ZM149.5 96.8L158.0 117.4L144.4 99.7ZM139.7 101.7L140.0 114.2L134.0 103.2ZM128.9 103.9L126.0 126.0L123.1 103.9ZM118.0 103.2L112.0 114.2L112.3 101.7ZM107.6 99.7L94.0 117.4L102.5 96.8ZM98.4 93.7L87.8 100.2L94.3 89.6ZM91.2 85.5L70.6 94.0L88.3 80.4ZM86.3 75.7L73.8 76.0L84.8 70.0ZM84.1 64.9L62.0 62.0L84.1 59.1ZM84.8 54.0L73.8 48.0L86.3 48.3ZM88.3 43.6L70.6 30.0L91.2 38.5ZM94.3 34.4L87.8 23.8L98.4 30.3ZM102.5 27.2L94.0 6.6L107.6 24.3ZM112.3 22.3L112.0 9.8L118.0 20.8ZM123.1 20.1L126.0 -2.0L128.9 20.1ZM134.0 20.8L140.0 9.8L139.7 22.3ZM144.4 24.3L158.0 6.6L149.5 27.2ZM153.6 30.3L164.2 23.8L157.7 34.4ZM160.8 38.5L181.4 30.0L163.7 43.6ZM165.7 48.3L178.2 48.0L167.2 54.0Z" fill="#d8b657" fill-opacity=".85" stroke="#a8812f" stroke-width=".8"></path>
          <circle cx="126" cy="62" r="42" fill="#d8b657" fill-opacity=".85" stroke="#a8812f" stroke-width="1.2"></circle>
          <path d="M150 200V160C164 150 176 124 188 98C192 90 194 84 196 80C200 90 204 108 212 126C222 146 234 156 245 160V200Z" fill="#3f7a4e" fill-opacity=".35" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M7 156H88V168H7Z" fill="#3f7a4e" fill-opacity=".3" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <path d="M7 168H82V180H7Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <path d="M7 180H76V192H7Z" fill="#3f7a4e" fill-opacity=".3" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <path d="M7 192H70V204H7Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-opacity=".6" stroke-width="1"><path d="M176 170h12v8h-12Z"></path><path d="M192 166h10v12h-10Z"></path><path d="M206 172h14v6h-14Z"></path></g>
          <path d="M7 200H245V243H7Z" fill="#e3d2ae"></path>
          <path d="M7 200H245" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.3"></path>
          <path d="M98 88C90 112 84 146 82 184H170C168 146 162 112 154 88Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M86 176H166" stroke="#d8b657" stroke-width="3"></path>
          <g stroke="#d8b657" stroke-width="1.2"><path d="M84 184v5"></path><path d="M88 184v5"></path><path d="M92 184v5"></path><path d="M96 184v5"></path><path d="M100 184v5"></path><path d="M104 184v5"></path><path d="M108 184v5"></path><path d="M112 184v5"></path><path d="M116 184v5"></path><path d="M120 184v5"></path><path d="M124 184v5"></path><path d="M128 184v5"></path><path d="M132 184v5"></path><path d="M136 184v5"></path><path d="M140 184v5"></path><path d="M144 184v5"></path><path d="M148 184v5"></path><path d="M152 184v5"></path><path d="M156 184v5"></path><path d="M160 184v5"></path><path d="M164 184v5"></path><path d="M168 184v5"></path></g>
          <g fill="#b88557" stroke="#2b2118" stroke-width="1.4"><path d="M112 168H122V196H112Z"></path><path d="M130 168H140V196H130Z"></path></g>
          <g stroke="#9e3b28" stroke-width="1.3"><path d="M112 174v6"></path><path d="M115 174v6"></path><path d="M118 174v6"></path><path d="M121 174v6"></path><path d="M131 174v6"></path><path d="M134 174v6"></path><path d="M137 174v6"></path><path d="M140 174v6"></path></g>
          <g fill="#9e3b28"><rect x="110" y="172" width="14" height="3"></rect><rect x="128" y="172" width="14" height="3"></rect></g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2"><path d="M108 196H125L126 201H107Z"></path><path d="M127 196H144L145 201H126Z"></path></g>
          <path d="M111 196L117 190M120 196L117 190M130 196L135 190M139 196L135 190" stroke="#5b4a36" stroke-width="1"></path>
          <clipPath id="tu"><path d="M104 86H148L154 170H98Z"></path></clipPath>
          <path d="M104 86H148L154 170H98Z" fill="#f6f2ea"></path>
          <g clip-path="url(#tu)"><rect x="96.0" y="86.0" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M100.0 86.0l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="104.0" y="86.0" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><rect x="106.5" y="88.8" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="112.0" y="86.0" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M112.0 90.3h8M116.0 86.0v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="120.0" y="86.0" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M121.0 87.3h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="128.0" y="86.0" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M132.0 86.0l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="136.0" y="86.0" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><rect x="138.5" y="88.8" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="144.0" y="86.0" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M144.0 90.3h8M148.0 86.0v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="152.0" y="86.0" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M153.0 87.3h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="96.0" y="94.6" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><rect x="98.5" y="97.4" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="104.0" y="94.6" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M104.0 98.9h8M108.0 94.6v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="112.0" y="94.6" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M113.0 95.9h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="120.0" y="94.6" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M124.0 94.6l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="128.0" y="94.6" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><rect x="130.5" y="97.4" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="136.0" y="94.6" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M136.0 98.9h8M140.0 94.6v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="144.0" y="94.6" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M145.0 95.9h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="152.0" y="94.6" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M156.0 94.6l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="96.0" y="103.2" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M96.0 107.5h8M100.0 103.2v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="104.0" y="103.2" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M105.0 104.5h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="112.0" y="103.2" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M116.0 103.2l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="120.0" y="103.2" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><rect x="122.5" y="106.0" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="128.0" y="103.2" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M128.0 107.5h8M132.0 103.2v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="136.0" y="103.2" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M137.0 104.5h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="144.0" y="103.2" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M148.0 103.2l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="152.0" y="103.2" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><rect x="154.5" y="106.0" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="96.0" y="111.8" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M97.0 113.1h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="104.0" y="111.8" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M108.0 111.8l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="112.0" y="111.8" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><rect x="114.5" y="114.6" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="120.0" y="111.8" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M120.0 116.1h8M124.0 111.8v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="128.0" y="111.8" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M129.0 113.1h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="136.0" y="111.8" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M140.0 111.8l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="144.0" y="111.8" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><rect x="146.5" y="114.6" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="152.0" y="111.8" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M152.0 116.1h8M156.0 111.8v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="96.0" y="120.4" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M100.0 120.4l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="104.0" y="120.4" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><rect x="106.5" y="123.2" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="112.0" y="120.4" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M112.0 124.7h8M116.0 120.4v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="120.0" y="120.4" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M121.0 121.7h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="128.0" y="120.4" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M132.0 120.4l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="136.0" y="120.4" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><rect x="138.5" y="123.2" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="144.0" y="120.4" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M144.0 124.7h8M148.0 120.4v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="152.0" y="120.4" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M153.0 121.7h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="96.0" y="129.0" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><rect x="98.5" y="131.8" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="104.0" y="129.0" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M104.0 133.3h8M108.0 129.0v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="112.0" y="129.0" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M113.0 130.3h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="120.0" y="129.0" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M124.0 129.0l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="128.0" y="129.0" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><rect x="130.5" y="131.8" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="136.0" y="129.0" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M136.0 133.3h8M140.0 129.0v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="144.0" y="129.0" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M145.0 130.3h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="152.0" y="129.0" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M156.0 129.0l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="96.0" y="137.6" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M96.0 141.9h8M100.0 137.6v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="104.0" y="137.6" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M105.0 138.9h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="112.0" y="137.6" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M116.0 137.6l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="120.0" y="137.6" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><rect x="122.5" y="140.4" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="128.0" y="137.6" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M128.0 141.9h8M132.0 137.6v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="136.0" y="137.6" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M137.0 138.9h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="144.0" y="137.6" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M148.0 137.6l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="152.0" y="137.6" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><rect x="154.5" y="140.4" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="96.0" y="146.2" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M97.0 147.5h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="104.0" y="146.2" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M108.0 146.2l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="112.0" y="146.2" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><rect x="114.5" y="149.0" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="120.0" y="146.2" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M120.0 150.5h8M124.0 146.2v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="128.0" y="146.2" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M129.0 147.5h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="136.0" y="146.2" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M140.0 146.2l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="144.0" y="146.2" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><rect x="146.5" y="149.0" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="152.0" y="146.2" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M152.0 150.5h8M156.0 146.2v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="96.0" y="154.8" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M100.0 154.8l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="104.0" y="154.8" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><rect x="106.5" y="157.6" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="112.0" y="154.8" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><path d="M112.0 159.1h8M116.0 154.8v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="120.0" y="154.8" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M121.0 156.1h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="128.0" y="154.8" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M132.0 154.8l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="136.0" y="154.8" width="8" height="8.6" fill="#2d4b86" stroke="#2b2118" stroke-width=".5"></rect><rect x="138.5" y="157.6" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="144.0" y="154.8" width="8" height="8.6" fill="#9e3b28" stroke="#2b2118" stroke-width=".5"></rect><path d="M144.0 159.1h8M148.0 154.8v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="152.0" y="154.8" width="8" height="8.6" fill="#2b2118" stroke="#2b2118" stroke-width=".5"></rect><path d="M153.0 156.1h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="96.0" y="163.4" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><rect x="98.5" y="166.2" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="104.0" y="163.4" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M104.0 167.7h8M108.0 163.4v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="112.0" y="163.4" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M113.0 164.7h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="120.0" y="163.4" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M124.0 163.4l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path><rect x="128.0" y="163.4" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><rect x="130.5" y="166.2" width="3" height="3" fill="#f6f2ea" fill-opacity=".8"></rect><rect x="136.0" y="163.4" width="8" height="8.6" fill="#d8b657" stroke="#2b2118" stroke-width=".5"></rect><path d="M136.0 167.7h8M140.0 163.4v8.6" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1"></path><rect x="144.0" y="163.4" width="8" height="8.6" fill="#3f7a4e" stroke="#2b2118" stroke-width=".5"></rect><path d="M145.0 164.7h3v3h3v3" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="1"></path><rect x="152.0" y="163.4" width="8" height="8.6" fill="#c87a46" stroke="#2b2118" stroke-width=".5"></rect><path d="M156.0 163.4l4 4.3-4 4.3-4-4.3Z" fill="#f6f2ea" fill-opacity=".8"></path></g>
          <path d="M104 86H148L126 116Z" fill="#9e3b28" stroke="#d8b657" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M104 86H148L154 170H98Z" fill="none" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <circle cx="126" cy="104" r="8" fill="#d8b657" stroke="#2b2118" stroke-width="1.3"></circle>
          <circle cx="126" cy="104" r="4" fill="none" stroke="#a8812f" stroke-width="1"></circle>
          <path d="M104 88C96 96 92 110 92 128" fill="none" stroke="#2b2118" stroke-width="11" stroke-linecap="round"></path>
          <path d="M104 88C96 96 92 110 92 128" fill="none" stroke="#b88557" stroke-width="7.6" stroke-linecap="round"></path>
          <path d="M148 88C158 96 164 104 168 96" fill="none" stroke="#2b2118" stroke-width="11" stroke-linecap="round"></path>
          <path d="M148 88C158 96 164 104 168 96" fill="none" stroke="#b88557" stroke-width="7.6" stroke-linecap="round"></path>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="1"><rect x="87" y="118" width="10" height="4"></rect><rect x="160" y="96" width="8" height="4" transform="rotate(-30 164 98)"></rect></g>
          <path d="M90 28V200" stroke="#2b2118" stroke-width="5" stroke-linecap="round"></path>
          <path d="M90 28V200" stroke="#a8812f" stroke-width="2.6" stroke-linecap="round"></path>
          <path d="M90.0 17.0L92.2 22.1L97.8 21.5L94.5 26.0L97.8 30.5L92.2 29.9L90.0 35.0L87.8 29.9L82.2 30.5L85.5 26.0L82.2 21.5L87.8 22.1Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="92" cy="130" r="5.5" fill="#b88557" stroke="#2b2118" stroke-width="1.4"></circle>
          <circle cx="169" cy="92" r="5.5" fill="#b88557" stroke="#2b2118" stroke-width="1.4"></circle>
          <path d="M163 74H177L175 90H165Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M164 80H176" stroke="#a8812f" stroke-width="1"></path>
          <path d="M121 78H131V88H121Z" fill="#b88557" stroke="#2b2118" stroke-width="1.2"></path>
          <path d="M111 56C111 44 118 40 126 40C134 40 141 44 141 56V78C137 74 135 68 135 62H117C117 68 115 74 111 78Z" fill="#2b2118"></path>
          <ellipse cx="126" cy="66" rx="11" ry="13" fill="#b88557" stroke="#2b2118" stroke-width="1.7"></ellipse>
          <g fill="#2b2118"><ellipse cx="121.5" cy="68" rx="1.6" ry="1.2"></ellipse><ellipse cx="130.5" cy="68" rx="1.6" ry="1.2"></ellipse></g>
          <path d="M126 69L124 74H127M122.5 78C124.5 79 127.5 79 129.5 78" fill="none" stroke="#2b2118" stroke-width="1.2" stroke-linecap="round"></path>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="1.3"><circle cx="112" cy="68" r="6"></circle><circle cx="140" cy="68" r="6"></circle></g>
          <g fill="none" stroke="#a8812f" stroke-width="1"><circle cx="112" cy="68" r="3"></circle><circle cx="140" cy="68" r="3"></circle></g>
          <path d="M111 50C118 47 134 47 141 50V56C134 53 118 53 111 56Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M112 52.5C120 50.5 132 50.5 140 52.5" fill="none" stroke="#d8b657" stroke-width="1.2" stroke-dasharray="2 1.5"></path>
          <rect x="118" y="55" width="16" height="3" fill="#d8b657" stroke="#2b2118" stroke-width=".8"></rect>
          <g stroke="#9e3b28" stroke-width="1.6"><path d="M119.0 58V64"></path><path d="M121.0 58V64"></path><path d="M123.0 58V64"></path><path d="M125.0 58V64"></path><path d="M127.0 58V64"></path><path d="M129.0 58V64"></path><path d="M131.0 58V64"></path><path d="M133.0 58V64"></path></g>
          <path d="M124 48L121 32L126 36L125 18L130 34L131 48Z" fill="#d8b657" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M121 48C116 38 114 26 118 12C122 22 124 36 124 48Z" fill="#2b2118" stroke="#2b2118" stroke-width="1"></path>
          <path d="M131 48C132 36 136 24 142 14C143 28 138 40 134 48Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M138 18L136 30" stroke="#2b2118" stroke-width="1.2"></path>
          <g transform="translate(46 198) scale(.62)" fill="#2b2118"><g stroke="#2b2118" stroke-width="4.5" stroke-linecap="round"><path d="M-12 -2V12M-2 0V12M10 0V12M18 -2V12"></path></g><path d="M-16 -8C-16 -15 -11 -19 -4 -19H14C20 -19 23 -15 23 -8V-3C23 1 21 2 17 2H-12C-15 2 -16 0 -16 -3Z"></path><path d="M-14 -11C-19 -16 -22 -23 -21 -30C-20 -36 -14 -38 -10 -34C-7 -31 -6 -26 -7 -20L-8 -12Z"></path><path d="M-21 -30C-23 -36 -22 -41 -19 -43C-17 -39 -17 -34 -18 -31ZM-13 -33C-10 -38 -7 -40 -4 -39C-6 -35 -8 -32 -9 -29Z"></path><circle cx="-19" cy="-27" r="1.4" fill="#f6f2ea"></circle><path d="M-6 -19H12V-12H-6Z" fill="#9e3b28"></path></g>
          </g>
          <text x="126" y="224" text-anchor="middle" font-family="'EB Garamond',serif" font-size="12.5" font-weight="600" letter-spacing="2.4" fill="#9e3b28">${lang === 'en' ? 'LOST INCA CITY' : 'VERLOREN INCASTAD'}</text>
          <rect x="7" y="7" width="238" height="236" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></rect>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat III — raadsel C (N) · Azië */
    C: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat III — Raadsel C" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pC')}${hatch('pC')}</defs>
        ${frame('pC', 1200, 540, 'PLAAT III', 'RAADSEL C · IV PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <clipPath id="zee"><rect x="7" y="7" width="238" height="236"></rect></clipPath>
          <g clip-path="url(#zee)">
            <rect x="7" y="7" width="238" height="236" fill="#dbe6e5"></rect>
            <rect x="7" y="7" width="238" height="236" fill="url(#pC-h)"></rect>
            <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.5">
              <path d="M150 244C170 238 192 246 214 240M96 176C110 170 124 176 134 172M212 44C224 38 236 42 242 38"></path>
            </g>
            <path d="M-63.2 -71.7 L-40.7 3.3 L-18.2 40.7 L0.5 78.2 L8.0 108.1 L23.0 138.1 L47.3 150.1 L69.8 123.1 L109.1 105.1 L114.8 93.2 L133.9 66.9 L131.6 22.0 L148.5 -15.5 L152.2 -71.7 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <text x="26" y="128" font-family="'EB Garamond',serif" font-size="10" letter-spacing="2.5" fill="#2b2118" fill-opacity=".45">INDIA</text>
            <g transform="translate(70 96)">
              <path d="M0 0V-52" stroke="#2b2118" stroke-width="2.4"></path>
              <rect x="0" y="-52" width="44" height="10" fill="#e08a3c"></rect>
              <rect x="0" y="-42" width="44" height="10" fill="#f6f2ea"></rect>
              <rect x="0" y="-32" width="44" height="10" fill="#3f7a4e"></rect>
              <circle cx="22" cy="-37" r="4.2" fill="none" stroke="#2d4b86" stroke-width="1.6"></circle>
              <g stroke="#2d4b86" stroke-width=".8">
                <path d="M22 -41.2v8.4M17.8 -37h8.4M19 -40l6 6M25 -40l-6 6"></path>
              </g>
              <rect x="0" y="-52" width="44" height="30" fill="none" stroke="#2b2118" stroke-width="1.3"></rect>
            </g>
            <path d="M113 100C118 103 122 107 127 110" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4" stroke-dasharray="3 3"></path>
            <g transform="translate(58 216) scale(.5)">
              <g fill="#5b4a36" stroke="#2b2118" stroke-width="2.6" stroke-linejoin="round">
                <path d="M23 -44h12a3 3 0 0 1 3 3V0H23Z"></path>
                <path d="M41 -44h12a3 3 0 0 1 3 3V0H41Z"></path>
                <path d="M-17 -44h12a3 3 0 0 1 3 3V0H-17Z"></path>
                <path d="M3 -44h12a3 3 0 0 1 3 3V0H3Z"></path>
              </g>
              <path d="M50 -56C58 -52 59 -38 54 -28" fill="none" stroke="#5b4a36" stroke-width="4.5" stroke-linecap="round"></path>
              <path d="M55 -32C59 -28 59 -21 56 -17" fill="none" stroke="#2b2118" stroke-width="3.4" stroke-linecap="round"></path>
              <path d="M-22 -50C-22 -70 -10 -82 8 -82H28C44 -82 52 -70 52 -54C52 -44 47 -40 40 -40H-14C-20 -40 -22 -43 -22 -50Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2.6" stroke-linejoin="round"></path>
              <ellipse cx="-34" cy="-64" rx="17" ry="19" fill="#5b4a36" stroke="#2b2118" stroke-width="2.6"></ellipse>
              <path d="M-45 -58C-54 -50 -57 -32 -53 -16C-51 -9 -44 -9 -44 -17C-46 -30 -46 -46 -39 -54Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2.4" stroke-linejoin="round"></path>
              <path d="M-42 -46C-48 -42 -52 -36 -53 -28" fill="none" stroke="#f6f2ea" stroke-width="4" stroke-linecap="round"></path>
              <ellipse cx="-19" cy="-62" rx="15" ry="18" fill="#4a3b2a" stroke="#2b2118" stroke-width="2.4"></ellipse>
              <circle cx="-38" cy="-70" r="2.4" fill="#f6f2ea"></circle>
            </g>
            <path d="M147.0 84.5 L156.0 95.0 L172.8 113.8 L185.2 131.4 L193.4 147.5 L203.5 164.3 L207.3 194.3 L193.4 216.8 L181.1 223.5 L161.6 231.0 L147.4 226.9 L141.0 211.2 L133.1 193.2 L132.7 183.1 L128.6 153.1 L138.4 130.6 L128.6 111.9 L139.9 98.8 L139.1 90.9 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
            <g stroke="#3f7a4e" stroke-opacity=".5" stroke-width="2.4" fill="none">
              <path d="M150 146C160 153 167 164 170 177M144 170C153 177 159 187 161 198M168 134C176 140 181 148 184 156"></path>
            </g>
          </g>
          <rect x="7" y="7" width="238" height="236" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></rect>
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
          <g transform="translate(96 18)">
            <rect width="60" height="30" fill="#f6f2ea"></rect>
            <g fill="#9e3b28">
              <rect y="0" width="60" height="2.14"></rect><rect y="4.28" width="60" height="2.14"></rect>
              <rect y="8.56" width="60" height="2.14"></rect><rect y="12.84" width="60" height="2.14"></rect>
              <rect y="17.12" width="60" height="2.14"></rect><rect y="21.4" width="60" height="2.14"></rect>
              <rect y="25.68" width="60" height="2.14"></rect>
            </g>
            <rect width="34" height="17" fill="#2d4b86"></rect>
            <circle cx="13" cy="8.5" r="5.4" fill="#d8b657"></circle>
            <circle cx="15.6" cy="8.5" r="4.4" fill="#2d4b86"></circle>
            <path d="M22 8.5L23.1 5.2L24.2 8.5L27.5 8.5L24.8 10.5L25.9 13.8L23.1 11.8L20.3 13.8L21.4 10.5L18.7 8.5Z" fill="#d8b657"></path>
            <rect width="60" height="30" fill="none" stroke="#2b2118" stroke-width="1.3"></rect>
          </g>
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
          <clipPath id="bt"><rect x="7" y="7" width="238" height="236"></rect></clipPath>
          <g clip-path="url(#bt)">
          <path d="M20 154L20 14L232 14Z" fill="#d8b657"></path>
          <path d="M20 154L232 154L232 14Z" fill="#c87a46"></path>
          <clipPath id="vl"><rect x="20" y="14" width="212" height="140"></rect></clipPath><g clip-path="url(#vl)">
          <g transform="translate(126.0 84.0) rotate(-33.44) scale(.66) translate(-8 24)">
          <g fill="none" stroke="#2b2118" stroke-linecap="round"><path d="M-60 2C-66 14 -74 20 -84 18" stroke-width="11"></path><path d="M-20 0C-26 12 -20 22 -10 24" stroke-width="11"></path><path d="M14 -4C10 10 2 16 -8 16" stroke-width="11"></path><path d="M48 -12C46 4 54 12 66 12" stroke-width="11"></path></g>
          <g fill="none" stroke="#f6f2ea" stroke-linecap="round"><path d="M-60 2C-66 14 -74 20 -84 18" stroke-width="7"></path><path d="M-20 0C-26 12 -20 22 -10 24" stroke-width="7"></path><path d="M14 -4C10 10 2 16 -8 16" stroke-width="7"></path><path d="M48 -12C46 4 54 12 66 12" stroke-width="7"></path></g>
          <path d="M-62.0 10.0c-5 3 -9 2 -12 -2c4 0 6 -2 7 -5Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-84 18q-6 2 -7 8M-84 18q-2 5 -1 10M-84 18q2 5 5 9M-84 18q5 1 8 6"></path></g>
          <path d="M-88 28c-3 -4 -1 -8 2 -10c0 3 2 4 3 6c1 -3 3 -4 5 -4c-1 3 0 6 -2 8Z" fill="#9e3b28" stroke="#2b2118" stroke-width=".9"></path>
          <circle cx="-83" cy="31" r="5.6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></circle>
          <circle cx="-83" cy="31" r="2.4" fill="none" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M-22.0 8.0c-5 3 -9 2 -12 -2c4 0 6 -2 7 -5Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-10 24q-6 2 -7 8M-10 24q-2 5 -1 10M-10 24q2 5 5 9M-10 24q5 1 8 6"></path></g>
          <path d="M-14 34c-3 -4 -1 -8 2 -10c0 3 2 4 3 6c1 -3 3 -4 5 -4c-1 3 0 6 -2 8Z" fill="#9e3b28" stroke="#2b2118" stroke-width=".9"></path>
          <circle cx="-9" cy="37" r="5.6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></circle>
          <circle cx="-9" cy="37" r="2.4" fill="none" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M12.0 4.0c-5 3 -9 2 -12 -2c4 0 6 -2 7 -5Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-8 16q-6 2 -7 8M-8 16q-2 5 -1 10M-8 16q2 5 5 9M-8 16q5 1 8 6"></path></g>
          <path d="M-12 26c-3 -4 -1 -8 2 -10c0 3 2 4 3 6c1 -3 3 -4 5 -4c-1 3 0 6 -2 8Z" fill="#9e3b28" stroke="#2b2118" stroke-width=".9"></path>
          <circle cx="-7" cy="29" r="5.6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></circle>
          <circle cx="-7" cy="29" r="2.4" fill="none" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M46.0 -4.0c-5 3 -9 2 -12 -2c4 0 6 -2 7 -5Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M66 12q-6 2 -7 8M66 12q-2 5 -1 10M66 12q2 5 5 9M66 12q5 1 8 6"></path></g>
          <path d="M62 22c-3 -4 -1 -8 2 -10c0 3 2 4 3 6c1 -3 3 -4 5 -4c-1 3 0 6 -2 8Z" fill="#9e3b28" stroke="#2b2118" stroke-width=".9"></path>
          <circle cx="67" cy="25" r="5.6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></circle>
          <circle cx="67" cy="25" r="2.4" fill="none" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M-110 8C-120 2 -130 4 -134 12C-138 20 -132 28 -124 26C-120 25 -119 20 -123 18" fill="none" stroke="#2b2118" stroke-width="7" stroke-linecap="round"></path>
          <path d="M-110 8C-120 2 -130 4 -134 12C-138 20 -132 28 -124 26C-120 25 -119 20 -123 18" fill="none" stroke="#f6f2ea" stroke-width="3.6" stroke-linecap="round"></path>
          <path d="M-132 10C-142 4 -146 -6 -142 -14C-138 -8 -134 -6 -130 -6C-134 -12 -132 -20 -126 -24C-126 -16 -122 -10 -120 -6Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-95.1 6.9) rotate(-3.8) scale(0.74)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-84.7 2.9) rotate(-22.6) scale(0.77)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-73.1 -3.9) rotate(-28.0) scale(0.81)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-59.6 -11.5) rotate(-22.9) scale(0.84)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-43.5 -16.9) rotate(-7.6) scale(0.87)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-25.8 -16.8) rotate(8.6) scale(0.90)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-16.1 -17.3) rotate(-8.6) scale(0.94)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(-6.8 -20.3) rotate(-19.7) scale(0.97)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(3.7 -24.9) rotate(-21.9) scale(1.00)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(16.3 -29.6) rotate(-15.3) scale(1.04)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(31.7 -32.3) rotate(-1.9) scale(1.07)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(46.8 -31.3) rotate(7.3) scale(1.10)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(52.1 -30.9) rotate(2.7) scale(1.14)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(56.0 -31.0) rotate(-3.2) scale(1.17)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(59.1 -31.4) rotate(-9.6) scale(1.20)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path transform="translate(61.9 -32.0) rotate(-15.4) scale(1.23)" d="M4 1C2 -6 -4 -10 -11 -10C-7 -7 -6 -4 -6 1Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M-108.9 6.1 L-106.0 6.5 L-103.6 7.0 L-101.3 7.3 L-99.2 7.3 L-97.1 7.2 L-95.1 6.9 L-93.1 6.4 L-91.0 5.8 L-89.0 5.0 L-86.9 4.0 L-84.7 2.9 L-82.5 1.7 L-80.2 0.4 L-77.9 -1.0 L-75.5 -2.4 L-73.1 -3.9 L-70.5 -5.5 L-67.9 -7.0 L-65.2 -8.6 L-62.5 -10.1 L-59.6 -11.5 L-56.6 -12.9 L-53.5 -14.1 L-50.3 -15.3 L-46.9 -16.2 L-43.5 -16.9 L-39.8 -17.4 L-36.1 -17.6 L-32.2 -17.5 L-28.5 -17.1 L-25.8 -16.8 L-23.8 -16.6 L-21.8 -16.6 L-19.8 -16.8 L-18.0 -17.0 L-16.1 -17.3 L-14.3 -17.8 L-12.4 -18.3 L-10.6 -18.9 L-8.7 -19.6 L-6.8 -20.3 L-4.8 -21.1 L-2.8 -22.0 L-0.7 -23.0 L1.5 -23.9 L3.7 -24.9 L6.0 -25.9 L8.4 -26.9 L10.9 -27.9 L13.5 -28.8 L16.3 -29.6 L19.1 -30.4 L22.1 -31.1 L25.2 -31.6 L28.4 -32.1 L31.7 -32.3 L35.2 -32.4 L38.7 -32.2 L42.4 -31.9 L45.7 -31.4 L46.8 -31.3 L48.0 -31.2 L49.1 -31.1 L50.1 -31.0 L51.1 -30.9 L52.1 -30.9 L52.9 -30.9 L53.8 -30.9 L54.6 -30.9 L55.3 -31.0 L56.0 -31.0 L56.7 -31.0 L57.3 -31.1 L57.9 -31.2 L58.5 -31.3 L59.1 -31.4 L59.7 -31.5 L60.2 -31.6 L60.8 -31.7 L61.4 -31.8 L61.9 -32.0 L62.5 -32.2 L63.1 -32.3 L63.7 -32.5 L64.3 -32.7 L65.0 -32.9 L65.7 -33.2 L66.4 -33.4 L67.1 -33.7 L67.9 -34.0 L76.1 -12.0 L75.3 -11.7 L74.5 -11.4 L73.6 -11.1 L72.8 -10.8 L71.9 -10.5 L71.0 -10.2 L70.1 -9.9 L69.2 -9.6 L68.2 -9.3 L67.2 -9.0 L66.2 -8.8 L65.2 -8.6 L64.1 -8.3 L63.1 -8.1 L62.0 -8.0 L60.8 -7.8 L59.7 -7.7 L58.5 -7.6 L57.3 -7.5 L56.1 -7.5 L54.9 -7.5 L53.6 -7.5 L52.3 -7.5 L51.0 -7.6 L49.6 -7.7 L48.2 -7.8 L46.8 -8.0 L45.4 -8.1 L43.9 -8.4 L42.3 -8.6 L39.4 -9.1 L37.0 -9.4 L34.7 -9.6 L32.5 -9.6 L30.3 -9.5 L28.2 -9.3 L26.2 -9.0 L24.2 -8.7 L22.1 -8.2 L20.1 -7.7 L18.0 -7.1 L16.0 -6.4 L13.9 -5.7 L11.7 -4.9 L9.5 -4.1 L7.3 -3.2 L5.0 -2.4 L2.7 -1.6 L0.2 -0.8 L-2.3 0.0 L-4.8 0.7 L-7.5 1.4 L-10.3 1.9 L-13.1 2.3 L-16.1 2.5 L-19.1 2.6 L-22.2 2.6 L-25.4 2.3 L-28.6 1.8 L-31.5 1.1 L-34.1 0.6 L-36.4 0.3 L-38.8 0.3 L-41.1 0.4 L-43.5 0.6 L-45.9 1.1 L-48.4 1.6 L-50.9 2.3 L-53.4 3.2 L-55.9 4.2 L-58.5 5.2 L-61.1 6.3 L-63.7 7.5 L-66.3 8.7 L-69.0 9.9 L-71.7 11.1 L-74.4 12.3 L-77.2 13.4 L-79.9 14.4 L-82.8 15.3 L-85.6 16.0 L-88.5 16.5 L-91.5 16.8 L-94.4 16.9 L-97.4 16.7 L-100.4 16.2 L-103.3 15.3 L-106.1 14.0 L-108.8 12.4 L-111.1 9.9 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.4" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width=".9"><path transform="translate(-99.5 9.8) rotate(7.6)" d="M0 -1.4A1.4 1.4 0 0 0 0 1.4"></path><path transform="translate(-99.9 12.4) rotate(7.6)" d="M0 -1.4A1.4 1.4 0 0 0 0 1.4"></path><path transform="translate(-92.6 9.3) rotate(-8.7)" d="M0 -1.7A1.7 1.7 0 0 0 0 1.7"></path><path transform="translate(-92.2 12.4) rotate(-8.7)" d="M0 -1.7A1.7 1.7 0 0 0 0 1.7"></path><path transform="translate(-85.7 7.1) rotate(-20.0)" d="M0 -1.9A1.9 1.9 0 0 0 0 1.9"></path><path transform="translate(-84.5 10.5) rotate(-20.0)" d="M0 -1.9A1.9 1.9 0 0 0 0 1.9"></path><path transform="translate(-78.6 3.7) rotate(-26.2)" d="M0 -2.1A2.1 2.1 0 0 0 0 2.1"></path><path transform="translate(-76.9 7.2) rotate(-26.2)" d="M0 -2.1A2.1 2.1 0 0 0 0 2.1"></path><path transform="translate(-71.2 -0.5) rotate(-28.0)" d="M0 -2.3A2.3 2.3 0 0 0 0 2.3"></path><path transform="translate(-69.2 3.3) rotate(-28.0)" d="M0 -2.3A2.3 2.3 0 0 0 0 2.3"></path><path transform="translate(-63.4 -4.8) rotate(-26.2)" d="M0 -2.5A2.5 2.5 0 0 0 0 2.5"></path><path transform="translate(-61.3 -0.7) rotate(-26.2)" d="M0 -2.5A2.5 2.5 0 0 0 0 2.5"></path><path transform="translate(-55.0 -8.7) rotate(-20.7)" d="M0 -2.6A2.6 2.6 0 0 0 0 2.6"></path><path transform="translate(-53.3 -4.1) rotate(-20.7)" d="M0 -2.6A2.6 2.6 0 0 0 0 2.6"></path><path transform="translate(-46.0 -11.6) rotate(-11.5)" d="M0 -2.7A2.7 2.7 0 0 0 0 2.7"></path><path transform="translate(-45.0 -6.5) rotate(-11.5)" d="M0 -2.7A2.7 2.7 0 0 0 0 2.7"></path><path transform="translate(-36.2 -12.7) rotate(1.1)" d="M0 -2.9A2.9 2.9 0 0 0 0 2.9"></path><path transform="translate(-36.3 -7.3) rotate(1.1)" d="M0 -2.9A2.9 2.9 0 0 0 0 2.9"></path><path transform="translate(-26.6 -11.7) rotate(8.6)" d="M0 -3.0A3.0 3.0 0 0 0 0 3.0"></path><path transform="translate(-27.5 -6.1) rotate(8.6)" d="M0 -3.0A3.0 3.0 0 0 0 0 3.0"></path><path transform="translate(-19.6 -11.4) rotate(-2.1)" d="M0 -3.1A3.1 3.1 0 0 0 0 3.1"></path><path transform="translate(-19.4 -5.6) rotate(-2.1)" d="M0 -3.1A3.1 3.1 0 0 0 0 3.1"></path><path transform="translate(-13.2 -12.4) rotate(-11.5)" d="M0 -3.2A3.2 3.2 0 0 0 0 3.2"></path><path transform="translate(-12.0 -6.5) rotate(-11.5)" d="M0 -3.2A3.2 3.2 0 0 0 0 3.2"></path><path transform="translate(-6.9 -14.2) rotate(-18.2)" d="M0 -3.3A3.3 3.3 0 0 0 0 3.3"></path><path transform="translate(-5.0 -8.3) rotate(-18.2)" d="M0 -3.3A3.3 3.3 0 0 0 0 3.3"></path><path transform="translate(-0.6 -16.6) rotate(-21.7)" d="M0 -3.4A3.4 3.4 0 0 0 0 3.4"></path><path transform="translate(1.7 -10.7) rotate(-21.7)" d="M0 -3.4A3.4 3.4 0 0 0 0 3.4"></path><path transform="translate(5.9 -19.4) rotate(-21.9)" d="M0 -3.5A3.5 3.5 0 0 0 0 3.5"></path><path transform="translate(8.3 -13.4) rotate(-21.9)" d="M0 -3.5A3.5 3.5 0 0 0 0 3.5"></path><path transform="translate(12.9 -22.1) rotate(-18.9)" d="M0 -3.5A3.5 3.5 0 0 0 0 3.5"></path><path transform="translate(15.0 -15.9) rotate(-18.9)" d="M0 -3.5A3.5 3.5 0 0 0 0 3.5"></path><path transform="translate(20.5 -24.4) rotate(-13.0)" d="M0 -3.6A3.6 3.6 0 0 0 0 3.6"></path><path transform="translate(22.0 -17.9) rotate(-13.0)" d="M0 -3.6A3.6 3.6 0 0 0 0 3.6"></path><path transform="translate(28.9 -25.9) rotate(-4.9)" d="M0 -3.6A3.6 3.6 0 0 0 0 3.6"></path><path transform="translate(29.5 -19.1) rotate(-4.9)" d="M0 -3.6A3.6 3.6 0 0 0 0 3.6"></path><path transform="translate(38.2 -26.0) rotate(4.4)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(37.7 -19.1) rotate(4.4)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(46.0 -25.0) rotate(7.3)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(45.2 -18.1) rotate(7.3)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(49.6 -24.6) rotate(4.7)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(49.1 -17.7) rotate(4.7)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(52.8 -24.5) rotate(1.6)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(52.6 -17.5) rotate(1.6)" d="M0 -3.7A3.7 3.7 0 0 0 0 3.7"></path><path transform="translate(55.5 -24.5) rotate(-1.9)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(55.8 -17.5) rotate(-1.9)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(58.0 -24.7) rotate(-5.8)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(58.7 -17.7) rotate(-5.8)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(60.2 -25.0) rotate(-9.6)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(61.4 -18.0) rotate(-9.6)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(62.3 -25.4) rotate(-13.3)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(63.9 -18.5) rotate(-13.3)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(64.3 -25.9) rotate(-16.4)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(66.3 -19.2) rotate(-16.4)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(66.4 -26.6) rotate(-18.7)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path><path transform="translate(68.7 -19.9) rotate(-18.7)" d="M0 -3.8A3.8 3.8 0 0 0 0 3.8"></path></g>
          <path d="M-89.0 14.4L-83.6 13.0L-78.2 11.0L-72.9 8.7L-67.7 6.2L-62.4 3.7L-57.2 1.3L-52.0 -0.7L-46.8 -2.2L-41.6 -3.1L-36.4 -3.2L-30.9 -2.5L-25.1 -1.5L-19.3 -1.2L-13.7 -1.6L-8.5 -2.6L-3.5 -3.9L1.2 -5.5L5.7 -7.2L10.1 -8.9L14.5 -10.5L18.8 -11.9L23.1 -13.0L27.6 -13.8L32.3 -14.1L37.3 -14.0L43.0 -13.2L45.9 -12.8L48.6 -12.5L51.2 -12.3L53.6 -12.2L55.9 -12.2L58.1 -12.3L60.3 -12.5L62.3 -12.8L64.2 -13.2L66.1 -13.6L67.8 -14.1L69.5 -14.6L71.2 -15.2" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"><path d="M66 -30C56 -42 42 -46 30 -42C40 -36 48 -30 60 -24Z"></path><path d="M70 -36C68 -50 60 -58 50 -60C54 -50 58 -42 64 -32Z"></path><path d="M60 -16C48 -18 38 -14 30 -8C40 -6 50 -7 60 -10Z"></path></g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width=".9"><path d="M58 -30C50 -36 42 -38 36 -38M60 -14C52 -13 44 -11 38 -9M66 -38C62 -46 58 -50 54 -52"></path></g>
          <path d="M64 -26C70 -44 92 -52 106 -43C114 -37 120 -31 128 -29C135 -27 137 -21 130 -18C124 -16 117 -20 111 -22L108 -14C104 -5 90 -3 82 -9C74 -15 66 -18 64 -26Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.4" stroke-linejoin="round"></path>
          <path d="M108 -15C114 -11 120 -9 126 -9C131 -8 130 -2 124 -1C113 1 102 -4 98 -10Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M110 -18C118 -16 124 -14 132 -16C130 -12 124 -11 118 -12C114 -13 111 -15 110 -18Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width=".8"><path d="M114 -21l2 4 2 -4Z"></path><path d="M120 -20l2 4 2 -4Z"></path><path d="M126 -19l2 3 2 -3Z"></path><path d="M112 -9l2 -4 2 4Z"></path><path d="M118 -8l2 -4 2 4Z"></path></g>
          <path d="M128 -29C132 -33 134 -30 131 -27" fill="none" stroke="#2b2118" stroke-width="1.4"></path>
          <ellipse cx="92" cy="-33" rx="4.4" ry="3.4" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></ellipse>
          <circle cx="93" cy="-33" r="2" fill="#2b2118"></circle>
          <path d="M82 -38C88 -44 98 -44 104 -38C98 -40 92 -40 88 -36Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M110 -38C114 -36 116 -32 116 -28" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"><path d="M84 -44C80 -58 86 -70 98 -74C92 -64 90 -54 91 -43Z"></path><path d="M89 -58C94 -62 100 -62 104 -58C98 -58 94 -56 91 -53Z"></path><path d="M74 -38C68 -48 70 -60 78 -64C76 -55 76 -46 79 -38Z"></path></g>
          <path d="M130 -24C142 -30 150 -24 148 -14C146 -6 154 -2 160 -6" fill="none" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          <path d="M130 -24C142 -30 150 -24 148 -14C146 -6 154 -2 160 -6" fill="none" stroke="#f6f2ea" stroke-width="1" stroke-linecap="round"></path>
          <path d="M122 -4C128 6 124 14 116 16C122 18 128 16 132 10" fill="none" stroke="#2b2118" stroke-width="2" stroke-linecap="round"></path>
          <path d="M100 0C98 8 92 14 84 15C88 8 90 3 90 -2Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M92 2C92 8 90 11 86 13" fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width=".9"></path>
          </g></g>
          <rect x="20" y="14" width="212" height="140" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 243C14 222 26 202 44 190C62 178 84 176 104 184C120 190 132 206 140 228V243Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M132 243C136 216 146 190 162 172C172 161 186 158 196 166C208 176 218 196 226 218C231 232 234 239 236 243Z" fill="#5b4a36" fill-opacity=".5" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.3"><path d="M186 172C188 196 192 220 200 240M172 182C170 204 166 224 158 240M204 186C212 202 218 218 222 236"></path></g>
          <g transform="translate(166 196)">
          <g stroke="#5b4a36" stroke-width="2.6" stroke-linecap="round"><path d="M-14 26V40M-2 26V44M10 26V42"></path></g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"><path d="M-22 26V-4H4V26Z"></path><path d="M4 26V4H24V26Z"></path><path d="M-38 26V6H-22V26Z"></path></g>
          <g fill="#9e3b28" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"><path d="M-27 -4H9L1 -14H-19Z"></path><path d="M0 4H29L22 -4H5Z"></path><path d="M-42 6H-18L-23 -1H-37Z"></path></g>
          <g fill="#9e3b28" fill-opacity=".8"><rect x="-22" y="0" width="26" height="3"></rect><rect x="4" y="8" width="20" height="3"></rect></g>
          <g stroke="#2b2118" stroke-width="1.4"><path d="M-9 -14V-22M13 -4V-10"></path></g>
          <circle cx="-9" cy="-24" r="2.6" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <circle cx="13" cy="-12" r="2.2" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <g fill="#2b2118" fill-opacity=".55"><rect x="-18" y="8" width="5" height="8"></rect><rect x="-9" y="8" width="5" height="8"></rect><rect x="0" y="8" width="4" height="8"></rect><rect x="-18" y="19" width="5" height="6"></rect><rect x="-9" y="19" width="5" height="6"></rect><rect x="9" y="14" width="5" height="8"></rect><rect x="18" y="14" width="5" height="8"></rect><rect x="-34" y="14" width="5" height="8"></rect></g>
          <path d="M-38 26H24" stroke="#2b2118" stroke-width="1.5"></path>
          </g>
          <path d="M134 238C144 228 154 222 166 222" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4" stroke-dasharray="4 3"></path>
          <g fill="none" stroke="#f6f2ea" stroke-width="3" stroke-linecap="round" stroke-opacity=".85"><path d="M120 232C140 228 160 234 180 230M150 242C168 238 190 244 210 240M96 220C110 217 124 221 136 218"></path></g>
          <path d="M20 196C52 210 90 204 128 186" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path>
          <rect x="16.0" y="196.0" width="9" height="11" fill="#2d4b86" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="34.0" y="202.1" width="9" height="11" fill="#f6f2ea" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="52.0" y="205.1" width="9" height="11" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="70.0" y="205.0" width="9" height="11" fill="#3f7a4e" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="88.0" y="201.8" width="9" height="11" fill="#d8b657" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="106.0" y="195.4" width="9" height="11" fill="#2d4b86" stroke="#2b2118" stroke-width="1"></rect>
          <rect x="124.0" y="186.0" width="9" height="11" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></rect>
          </g>
          <rect x="7" y="7" width="238" height="236" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></rect>
          ${box(252, 'IV')}
        </g>

        ${foot(440, 'I → IV')}
      </svg>`),

    /* Plaat IV — raadsel D (A) · Europa */
    D: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat IV — Raadsel D" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pD')}${hatch('pD')}</defs>
        ${frame('pD', 1200, 540, 'PLAAT IV', 'RAADSEL D · V PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <clipPath id="tr"><rect x="7" y="7" width="182" height="236"></rect></clipPath>
          <g clip-path="url(#tr)">
          <path d="M10 229.0V121.0H40V229.0Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M8 121.0L25.0 111.0L42 121.0Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="16.0" y="129.0" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="28.0" y="129.0" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="16.0" y="145.0" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="28.0" y="145.0" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <path d="M42 223.9V119.9H70V223.9Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M40 119.9L56.0 109.9L72 119.9Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="48.0" y="127.9" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="58.0" y="127.9" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="48.0" y="143.9" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="58.0" y="143.9" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <g stroke="#2d4b86" stroke-opacity=".35" stroke-width=".8"><path d="M43 128.9h26"></path><path d="M43 133.9h26"></path><path d="M43 138.9h26"></path><path d="M43 143.9h26"></path><path d="M43 148.9h26"></path><path d="M43 153.9h26"></path><path d="M43 158.9h26"></path></g>
          <path d="M72 218.8V114.8H102V218.8Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M70 114.8L87.0 104.8L104 114.8Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="78.0" y="122.8" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="90.0" y="122.8" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="78.0" y="138.8" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="90.0" y="138.8" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <path d="M104 213.7V101.7H132V213.7Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M102 101.7L118.0 91.7L134 101.7Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="110.0" y="109.7" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="120.0" y="109.7" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="110.0" y="125.7" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="120.0" y="125.7" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <path d="M134 208.6V96.6H164V208.6Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M132 96.6L149.0 86.6L166 96.6Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="140.0" y="104.6" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="152.0" y="104.6" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="140.0" y="120.6" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="152.0" y="120.6" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <path d="M166 203.5V95.5H194V203.5Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M164 95.5L180.0 85.5L196 95.5Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <rect x="172.0" y="103.5" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="182.0" y="103.5" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="172.0" y="119.5" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <rect x="182.0" y="119.5" width="6" height="8" fill="#2b2118" fill-opacity=".45"></rect>
          <g stroke="#2d4b86" stroke-opacity=".35" stroke-width=".8"><path d="M167 104.5h26"></path><path d="M167 109.5h26"></path><path d="M167 114.5h26"></path><path d="M167 119.5h26"></path><path d="M167 124.5h26"></path><path d="M167 129.5h26"></path><path d="M167 134.5h26"></path><path d="M167 139.5h26"></path></g>
          <path d="M7 216.0L189 186.0V243H7Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M7 220.0L189 190.0" stroke="#2b2118" stroke-width="2.2"></path>
          <g stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"><path d="M14 218.8l-3 6"></path><path d="M26 216.9l-3 6"></path><path d="M38 214.9l-3 6"></path><path d="M50 212.9l-3 6"></path><path d="M62 210.9l-3 6"></path><path d="M74 209.0l-3 6"></path><path d="M86 207.0l-3 6"></path><path d="M98 205.0l-3 6"></path><path d="M110 203.0l-3 6"></path><path d="M122 201.0l-3 6"></path><path d="M134 199.1l-3 6"></path><path d="M146 197.1l-3 6"></path><path d="M158 195.1l-3 6"></path><path d="M170 193.1l-3 6"></path><path d="M182 191.2l-3 6"></path></g>
          <path d="M7 126.0L189 96.0" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path>
          <path d="M16 243C60 232 120 226 189 214" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <g transform="translate(98 200.0) rotate(-9.36)">
            <path d="M-62 0V-52C-62 -58 -58 -62 -50 -62H50C58 -62 62 -58 62 -52V0Z" fill="#d8b657" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M-62 -18H62" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"></path>
            <path d="M-62 -44H62" fill="none" stroke="#9e3b28" stroke-width="5"></path>
            <g fill="#dbe6e5" stroke="#2b2118" stroke-width="1.3">
              <rect x="-56" y="-38" width="22" height="17" rx="2"></rect>
              <rect x="-30" y="-38" width="22" height="17" rx="2"></rect>
              <rect x="8" y="-38" width="22" height="17" rx="2"></rect>
              <rect x="34" y="-38" width="22" height="17" rx="2"></rect>
            </g>
            <rect x="-6" y="-38" width="12" height="38" fill="#5b4a36" stroke="#2b2118" stroke-width="1.3"></rect>
            <g stroke="#2b2118" stroke-width="1.2" fill="none"><path d="M-45 -21v-17M-19 -21v-17M19 -21v-17M45 -21v-17"></path></g>
            <path d="M-62 -52H62" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
            <circle cx="-38" cy="4" r="8" fill="#2b2118"></circle>
            <circle cx="38" cy="4" r="8" fill="#2b2118"></circle>
            <circle cx="-38" cy="4" r="3" fill="#e6d9be"></circle>
            <circle cx="38" cy="4" r="3" fill="#e6d9be"></circle>
            <path d="M0 -62V-74M0 -74C-10 -76 -18 -80 -24 -86" fill="none" stroke="#2b2118" stroke-width="2.2" stroke-linecap="round"></path>
            <path d="M-30 -88H30" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.6"></path>
            <path d="M-56 -56h14v6h-14Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1"></path>
          </g>
          </g>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="none" stroke="#3f7a4e" stroke-opacity=".45" stroke-width="2.4"><path d="M92 30C110 20 128 34 146 24M112 46C130 36 150 48 176 38"></path></g>
          <g fill="#f6f2ea"><circle cx="120" cy="60" r="1.6"></circle><circle cx="150" cy="54" r="1.6"></circle><circle cx="172" cy="70" r="1.6"></circle><circle cx="100" cy="72" r="1.6"></circle><circle cx="84" cy="24" r="1.6"></circle><circle cx="30" cy="110" r="1.6"></circle></g>
          <rect x="7" y="178" width="182" height="65" fill="#2d4b86" opacity=".4"></rect>
          <rect x="7" y="178" width="182" height="65" fill="url(#pD-h)"></rect>
          <path d="M7 178H189" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          <path d="M7 178V140C22 134 40 132 60 132H160C172 132 182 136 189 142V178Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M7 140C22 134 40 132 60 132H160C172 132 182 136 189 142V148C176 142 164 140 150 141C120 143 60 142 30 146C20 147 12 148 7 150Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <g stroke="#f6f2ea" stroke-opacity=".3" stroke-width="2"><path d="M20 178V152"></path><path d="M36 178V153"></path><path d="M52 178V154"></path><path d="M68 178V155"></path><path d="M84 178V156"></path><path d="M100 178V152"></path><path d="M116 178V153"></path><path d="M132 178V154"></path><path d="M148 178V155"></path><path d="M164 178V156"></path><path d="M180 178V152"></path></g>
          <path d="M96 132V124H124V132Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M100 124L106 116H114L120 124Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M110 116V118" stroke="#2b2118" stroke-width="2.4"></path>
          <circle cx="110" cy="92" r="26" fill="#faf4e6" fill-opacity=".4" stroke="#2b2118" stroke-width="2.4"></circle>
          <ellipse cx="110" cy="92" rx="9" ry="26" fill="none" stroke="#2b2118" stroke-width="1.5"></ellipse>
          <ellipse cx="110" cy="92" rx="18" ry="26" fill="none" stroke="#2b2118" stroke-width="1.5"></ellipse>
          <path d="M110 66V118" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M90.3 75H129.7" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M85.3 84H134.7" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M84.0 92H136.0" stroke="#2b2118" stroke-width="2"></path>
          <path d="M85.3 100H134.7" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M90.3 109H129.7" stroke="#2b2118" stroke-width="1.3"></path>
          <circle cx="110" cy="66" r="3" fill="#2b2118"></circle>
          <circle cx="44" cy="70" r="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <circle cx="44" cy="70" r="19" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1"></circle>
          <path d="M53.2 60.8L46.8 72.8L41.2 67.2Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1"></path>
          <path d="M53.2 79.2L41.2 72.8L46.8 67.2Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1"></path>
          <path d="M34.8 79.2L41.2 67.2L46.8 72.8Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1"></path>
          <path d="M34.8 60.8L46.8 67.2L41.2 72.8Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1"></path>
          <path d="M44.0 49.0L49.0 70.0L39.0 70.0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M65.0 70.0L44.0 75.0L44.0 65.0Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M44.0 91.0L39.0 70.0L49.0 70.0Z" fill="#2b2118" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M23.0 70.0L44.0 65.0L44.0 75.0Z" fill="#faf4e6" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <circle cx="44" cy="70" r="2.4" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <text x="44" y="42" text-anchor="middle" font-family="'EB Garamond',serif" font-size="17" font-weight="600" fill="#9e3b28">N</text>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="#e6d9be"></rect>
          <path d="M33.0 169.2 L61.2 164.5 L100.8 158.2 L129.0 161.3 L151.6 159.8 L174.2 156.6 L175.3 139.4 L149.3 122.1 L125.6 101.7 L118.8 92.3 L107.5 100.1 L91.7 115.8 L80.4 112.7 L73.6 92.3 L62.3 87.6 L55.6 81.3 L40.9 98.5 L29.6 119.0 L20.5 140.9 L21.6 155.1 L30.7 164.5 Z" fill="#2d4b86" fill-opacity=".55" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M33.0 169.2 L61.2 164.5 L100.8 158.2 L129.0 161.3 L151.6 159.8 L174.2 156.6 L175.3 139.4 L149.3 122.1 L125.6 101.7 L118.8 92.3 L107.5 100.1 L91.7 115.8 L80.4 112.7 L73.6 92.3 L62.3 87.6 L55.6 81.3 L40.9 98.5 L29.6 119.0 L20.5 140.9 L21.6 155.1 L30.7 164.5 Z" fill="url(#pD-h)" stroke="none"></path>
          <g fill="none" stroke="#2b2118" stroke-width="1.8">
            <path d="M33 169C30 175 28 182 30 188M33 169C37 174 39 180 38 186"></path>
          </g>
          <path d="M28 190C30 196 36 199 42 197C46 195 46 190 42 188C38 186 32 186 28 190Z" fill="#2d4b86" fill-opacity=".55" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <circle cx="33" cy="176" r="12" fill="none" stroke="#9e3b28" stroke-width="2"></circle>
          <path d="M42 184L52 196" stroke="#9e3b28" stroke-width="2.4" stroke-linecap="round"></path>
          <text x="56" y="204" font-family="'EB Garamond',serif" font-size="7" letter-spacing="1.5" fill="#9e3b28" fill-opacity=".85">ISTANBUL</text>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".45" stroke-width="1.5">
            <path d="M60 142C80 136 104 136 124 142M74 152C92 148 114 148 130 152"></path>
          </g>
          <text x="100" y="150" text-anchor="middle" font-family="'EB Garamond',serif" font-size="11" letter-spacing="3.5" fill="#f6f2ea" fill-opacity=".85">${lang === 'en' ? 'BLACK M33.0 169.2 L61.2 164.5 L100.8 158.2 L129.0 161.3 L151.6 159.8 L174.2 156.6 L175.3 139.4 L149.3 122.1 L125.6 101.7 L118.8 92.3 L107.5 100.1 L91.7 115.8 L80.4 112.7 L73.6 92.3 L62.3 87.6 L55.6 81.3 L40.9 98.5 L29.6 119.0 L20.5 140.9 L21.6 155.1 L30.7 164.5 Z' : 'ZWARTE ZEE'}</text>
          <g fill="#2b2118" fill-opacity=".38" font-family="'EB Garamond',serif" font-size="8" letter-spacing="2">
            <text x="46" y="82">${lang === 'en' ? 'UKRAINE' : 'OEKRAÏNE'}</text>
            <text x="120" y="196">${lang === 'en' ? 'TURKEY' : 'TURKIJE'}</text>
            <text x="134" y="90">${lang === 'en' ? 'CAUCASUS' : 'KAUKASUS'}</text>
          </g>
          <text x="84" y="106" text-anchor="middle" font-family="'EB Garamond',serif" font-size="7" letter-spacing="1.5" fill="#2b2118" fill-opacity=".55">${lang === 'en' ? 'CRIMEA' : 'KRIM'}</text>
          <g transform="translate(152 128)">
            <path d="M-14 0H14L9 7H-9Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M-2 0V-12H8L-2 -6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          </g>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M86 150C88 128 90 110 88 94H108C106 110 108 128 110 150Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M92 140C94 124 96 110 95 98M104 140C102 124 102 110 102 98" fill="none" stroke="#d8b657" stroke-width="2"></path>
          <ellipse cx="98" cy="100" rx="30" ry="7" fill="#c87a46" stroke="#2b2118" stroke-width="1.4"></ellipse>
          <path d="M52 72C44 62 50 48 62 48C62 34 78 26 90 32C96 20 116 20 122 32C134 26 150 34 148 48C160 50 164 64 154 72C160 82 150 94 138 90C132 98 114 100 106 94C98 100 78 100 72 92C60 96 48 86 52 72Z" fill="#e08a3c" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M66 70C74 62 86 64 90 72M104 60C112 52 126 54 130 64M84 48C90 42 100 42 104 48" fill="none" stroke="#d8b657" stroke-width="2.4" stroke-linecap="round"></path>
          <path d="M78 82C88 78 100 80 106 86M118 80C126 76 136 78 140 82" fill="none" stroke="#9e3b28" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"></path>
          <path d="M40 158C44 146 58 142 70 148C78 140 92 142 98 150C106 142 122 144 128 152C138 146 154 150 156 160Z" fill="#5b4a36" fill-opacity=".45" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path>
          <path d="M7 158H189" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.2"></path>
          <path d="M98 146L154 234H42Z" fill="#d8b657" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"></path>
          <path d="M98 158L143 228H53Z" fill="none" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M102.0 210.9L106.5 218.7A17 17 0 0 1 89.5 218.7L94.0 210.9A8 8 0 0 0 102.0 210.9Z" fill="#2b2118"></path>
          <path d="M90.0 204.0L81.0 204.0A17 17 0 0 1 89.5 189.3L94.0 197.1A8 8 0 0 0 90.0 204.0Z" fill="#2b2118"></path>
          <path d="M102.0 197.1L106.5 189.3A17 17 0 0 1 115.0 204.0L106.0 204.0A8 8 0 0 0 102.0 197.1Z" fill="#2b2118"></path>
          <circle cx="98" cy="204" r="5" fill="#2b2118"></circle>
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
    E: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat V — Raadsel E" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pE')}${hatch('pE')}</defs>
        ${frame('pE', 1200, 540, 'PLAAT V', 'RAADSEL E · VI PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          <path d="M77.0 170.0V214M83.0 170.0V214" stroke="#2b2118" stroke-width="3"></path>
          <g stroke="#2b2118" stroke-width="6.5" stroke-linecap="round"><path d="M43.4 78.2L96.9 115.0"></path><path d="M133.5 82.8L96.9 115.0"></path><path d="M80.0 162.0L96.9 115.0"></path><path d="M80.0 104.0L96.9 115.0"></path><path d="M80.0 46.0L43.4 78.2"></path><path d="M80.0 104.0L43.4 78.2"></path><path d="M43.4 78.2L26.5 125.2"></path><path d="M80.0 46.0L133.5 82.8"></path><path d="M80.0 104.0L133.5 82.8"></path><path d="M80.0 104.0L80.0 46.0"></path><path d="M80.0 104.0L80.0 162.0"></path><path d="M80.0 162.0L26.5 125.2"></path><path d="M80.0 104.0L26.5 125.2"></path><path d="M133.5 82.8L116.6 129.8"></path><path d="M80.0 162.0L116.6 129.8"></path><path d="M80.0 104.0L116.6 129.8"></path><path d="M80.0 46.0L63.1 93.0"></path><path d="M80.0 104.0L63.1 93.0"></path><path d="M63.1 93.0L26.5 125.2"></path><path d="M63.1 93.0L116.6 129.8"></path></g>
          <g stroke="#dbe6e5" stroke-width="3.4" stroke-linecap="round"><path d="M43.4 78.2L96.9 115.0"></path><path d="M133.5 82.8L96.9 115.0"></path><path d="M80.0 162.0L96.9 115.0"></path><path d="M80.0 104.0L96.9 115.0"></path><path d="M80.0 46.0L43.4 78.2"></path><path d="M80.0 104.0L43.4 78.2"></path><path d="M43.4 78.2L26.5 125.2"></path><path d="M80.0 46.0L133.5 82.8"></path><path d="M80.0 104.0L133.5 82.8"></path><path d="M80.0 104.0L80.0 46.0"></path><path d="M80.0 104.0L80.0 162.0"></path><path d="M80.0 162.0L26.5 125.2"></path><path d="M80.0 104.0L26.5 125.2"></path><path d="M133.5 82.8L116.6 129.8"></path><path d="M80.0 162.0L116.6 129.8"></path><path d="M80.0 104.0L116.6 129.8"></path><path d="M80.0 46.0L63.1 93.0"></path><path d="M80.0 104.0L63.1 93.0"></path><path d="M63.1 93.0L26.5 125.2"></path><path d="M63.1 93.0L116.6 129.8"></path></g>
          <g stroke="#2b2118" stroke-width="2.4" fill="none"><path d="M23.5 133.2L14.5 214M29.5 133.2L38.5 214"></path><path d="M113.6 137.8L104.6 214M119.6 137.8L128.6 214"></path></g>
          <circle cx="96.9" cy="115.0" r="11.2" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M85.7 116.0C91.3 120.0 102.5 120.0 108.1 116.0" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M96.9 103.8V126.2" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="92.6" cy="110.3" rx="3.4" ry="2.2" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="43.4" cy="78.2" r="11.6" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M31.8 79.2C37.6 83.4 49.2 83.4 55.0 79.2" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M43.4 66.6V89.7" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="39.0" cy="73.3" rx="3.5" ry="2.3" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="133.5" cy="82.8" r="12.6" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M120.9 83.8C127.2 88.5 139.8 88.5 146.1 83.8" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M133.5 70.2V95.4" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="128.7" cy="77.6" rx="3.8" ry="2.5" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="80.0" cy="46.0" r="13.0" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M67.0 47.0C73.5 51.9 86.5 51.9 93.0 47.0" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M80.0 33.0V59.0" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="75.1" cy="40.5" rx="3.9" ry="2.6" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="80.0" cy="162.0" r="13.0" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M67.0 163.0C73.5 167.8 86.5 167.8 93.0 163.0" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M80.0 149.0V175.0" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="75.1" cy="156.5" rx="3.9" ry="2.6" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="80.0" cy="104.0" r="13.0" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M67.0 105.0C73.5 109.8 86.5 109.8 93.0 105.0" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M80.0 91.0V117.0" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="75.1" cy="98.5" rx="3.9" ry="2.6" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="26.5" cy="125.2" r="13.4" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M13.1 126.2C19.8 131.2 33.2 131.2 39.9 126.2" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M26.5 111.8V138.6" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="21.4" cy="119.5" rx="4.0" ry="2.7" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="116.6" cy="129.8" r="14.4" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M102.2 130.8C109.4 136.3 123.8 136.3 131.0 130.8" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M116.6 115.4V144.3" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="111.1" cy="123.8" rx="4.3" ry="2.9" fill="#f6f2ea" opacity=".85"></ellipse>
          <circle cx="63.1" cy="93.0" r="14.8" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7"></circle>
          <path d="M48.3 94.0C55.7 99.7 70.5 99.7 77.9 94.0" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M63.1 78.2V107.8" stroke="#2b2118" stroke-opacity=".22" stroke-width="1"></path>
          <ellipse cx="57.5" cy="86.8" rx="4.4" ry="3.0" fill="#f6f2ea" opacity=".85"></ellipse>
          <path d="M60 214V204H100V214Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.3"></path>
          ${box(160, 'I')}
        </g>
        ${plus(232)}
        <g transform="translate(244 130)" data-num="1">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="30" text-anchor="middle" font-family="'EB Garamond',serif" font-size="11.5" font-weight="600" letter-spacing="1.6" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'HOMELAND OF' : 'THUISLAND'}</text>
          <text x="80" y="45" text-anchor="middle" font-family="'EB Garamond',serif" font-size="11.5" font-weight="600" letter-spacing="1.6" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'CHOPIN' : 'VAN CHOPIN'}</text>
          <g transform="translate(80 0) scale(.86) translate(-80 24)">
          <path d="M34 146L128 146L150 102L60 112Z" fill="#2b2118" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M62 116L144 106" stroke="#f6f2ea" stroke-opacity=".25" stroke-width="1.4"></path>
          <path d="M112 146L126 112" stroke="#a8812f" stroke-width="2"></path>
          <path d="M22 146H140C146 146 150 150 150 156V162H22Z" fill="#2b2118" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M26 150H146" stroke="#f6f2ea" stroke-opacity=".25" stroke-width="1"></path>
          <path d="M8 148H30V158H8Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3"></path>
          <g stroke="#2b2118" stroke-width=".8"><path d="M11 148V158"></path><path d="M14 148V158"></path><path d="M17 148V158"></path><path d="M20 148V158"></path><path d="M23 148V158"></path><path d="M26 148V158"></path><path d="M29 148V158"></path></g>
          <g fill="#2b2118"><rect x="12.6" y="148" width="1.8" height="6"></rect><rect x="15.6" y="148" width="1.8" height="6"></rect><rect x="21.6" y="148" width="1.8" height="6"></rect><rect x="24.6" y="148" width="1.8" height="6"></rect><rect x="27.6" y="148" width="1.8" height="6"></rect></g>
          <path d="M6 146H32" stroke="#2b2118" stroke-width="2"></path>
          <g fill="#2b2118"><path d="M28 162H36L34 206H30Z"></path><path d="M134 162H142L140 206H136Z"></path></g>
          <path d="M74 162V196M80 162V196" stroke="#2b2118" stroke-width="2"></path>
          <path d="M68 196H86V200H68Z" fill="#2b2118"></path>
          <g fill="#d8b657" stroke="#2b2118" stroke-width=".8"><rect x="70" y="200" width="4" height="3"></rect><rect x="75" y="200" width="4" height="3"></rect><rect x="80" y="200" width="4" height="3"></rect></g>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="1"><circle cx="32" cy="208" r="2.5"></circle><circle cx="138" cy="208" r="2.5"></circle></g>
          </g>
          <g fill="#2b2118"><ellipse cx="60" cy="86" rx="4.5" ry="3.2" transform="rotate(-20 60 86)"></ellipse><ellipse cx="76" cy="80" rx="4.5" ry="3.2" transform="rotate(-20 76 80)"></ellipse><ellipse cx="106" cy="74" rx="4.5" ry="3.2" transform="rotate(-20 106 74)"></ellipse></g>
          <path d="M64 85V64M80 79V58M64 64L80 58M64 69L80 63M110 73V52C114 56 118 58 120 64" fill="none" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'II')}
        </g>
        ${plus(416)}
        <g transform="translate(428 130)" data-num="2">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="28" text-anchor="middle" font-family="'EB Garamond',serif" font-size="10" font-weight="600" letter-spacing="1.1" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'CAPITAL OF THE' : 'HOOFDSTAD VAN HET'}</text>
          <text x="80" y="41" text-anchor="middle" font-family="'EB Garamond',serif" font-size="10" font-weight="600" letter-spacing="1.1" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'NORTHERNMOST' : 'MEEST NOORDELIJKE'}</text>
          <text x="80" y="54" text-anchor="middle" font-family="'EB Garamond',serif" font-size="10" font-weight="600" letter-spacing="1.1" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'COUNTRY OF THE EU' : 'LAND VAN DE EU'}</text>
          <rect x="30" y="108" width="100" height="68" fill="#2d4b86" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M80.0 115.8L81.0 118.6L84.0 118.7L81.6 120.5L82.5 123.4L80.0 121.7L77.5 123.4L78.4 120.5L76.0 118.7L79.0 118.6Z" fill="#d8b657" stroke="#f6f2ea" stroke-width="1"></path>
          <path d="M91.0 118.7L92.0 121.6L95.0 121.6L92.6 123.5L93.5 126.3L91.0 124.6L88.5 126.3L89.4 123.5L87.0 121.6L90.0 121.6Z" fill="#d8b657"></path>
          <path d="M99.1 126.8L100.1 129.6L103.0 129.7L100.7 131.5L101.5 134.4L99.1 132.7L96.6 134.4L97.4 131.5L95.1 129.7L98.1 129.6Z" fill="#d8b657"></path>
          <path d="M102.0 137.8L103.0 140.6L106.0 140.7L103.6 142.5L104.5 145.4L102.0 143.7L99.5 145.4L100.4 142.5L98.0 140.7L101.0 140.6Z" fill="#d8b657"></path>
          <path d="M99.1 148.8L100.1 151.6L103.0 151.7L100.7 153.5L101.5 156.4L99.1 154.7L96.6 156.4L97.4 153.5L95.1 151.7L98.1 151.6Z" fill="#d8b657"></path>
          <path d="M91.0 156.9L92.0 159.7L95.0 159.8L92.6 161.6L93.5 164.5L91.0 162.8L88.5 164.5L89.4 161.6L87.0 159.8L90.0 159.7Z" fill="#d8b657"></path>
          <path d="M80.0 159.8L81.0 162.6L84.0 162.7L81.6 164.5L82.5 167.4L80.0 165.7L77.5 167.4L78.4 164.5L76.0 162.7L79.0 162.6Z" fill="#d8b657"></path>
          <path d="M69.0 156.9L70.0 159.7L73.0 159.8L70.6 161.6L71.5 164.5L69.0 162.8L66.5 164.5L67.4 161.6L65.0 159.8L68.0 159.7Z" fill="#d8b657"></path>
          <path d="M60.9 148.8L61.9 151.6L64.9 151.7L62.6 153.5L63.4 156.4L60.9 154.7L58.5 156.4L59.3 153.5L57.0 151.7L59.9 151.6Z" fill="#d8b657"></path>
          <path d="M58.0 137.8L59.0 140.6L62.0 140.7L59.6 142.5L60.5 145.4L58.0 143.7L55.5 145.4L56.4 142.5L54.0 140.7L57.0 140.6Z" fill="#d8b657"></path>
          <path d="M60.9 126.8L61.9 129.6L64.9 129.7L62.6 131.5L63.4 134.4L60.9 132.7L58.5 134.4L59.3 131.5L57.0 129.7L59.9 129.6Z" fill="#d8b657"></path>
          <path d="M69.0 118.7L70.0 121.6L73.0 121.6L70.6 123.5L71.5 126.3L69.0 124.6L66.5 126.3L67.4 123.5L65.0 121.6L68.0 121.6Z" fill="#d8b657"></path>
          <path d="M80 60L90 84H83V104H77V84H70Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <text x="99" y="74" font-family="'EB Garamond',serif" font-size="15" font-weight="600" fill="#9e3b28">N</text>
          <path d="M7 214C30 200 56 196 80 200C104 204 130 198 153 190V214Z" fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.2"></path>
          <path d="M22.0 184.0L30.0 197.0H26.0L33.0 210.0H11.0L18.0 197.0H14.0Z" fill="#3f7a4e" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M38.0 189.6L44.4 200.0H41.2L46.8 210.4H29.2L34.8 200.0H31.6Z" fill="#3f7a4e" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M126.0 186.8L133.2 198.5H129.6L135.9 210.2H116.1L122.4 198.5H118.8Z" fill="#3f7a4e" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M142.0 181.2L150.8 195.5H146.4L154.1 209.8H129.9L137.6 195.5H133.2Z" fill="#3f7a4e" stroke="#2b2118" stroke-width="1" stroke-linejoin="round"></path>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'III')}
        </g>
        ${plus(600)}
        <g transform="translate(612 130)" data-num="3">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="200" width="146" height="14" fill="#2d4b86" opacity=".35"></rect>
          <path d="M86 200V130H153V200Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.2"><path d="M90 130V118L93 110L96 118V130Z"></path><path d="M102 130V118L105 110L108 118V130Z"></path><path d="M114 130V118L117 110L120 118V130Z"></path><path d="M126 130V118L129 110L132 118V130Z"></path><path d="M138 130V118L141 110L144 118V130Z"></path></g>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1"><path d="M92 136V196"></path><path d="M98 136V196"></path><path d="M104 136V196"></path><path d="M110 136V196"></path><path d="M116 136V196"></path><path d="M122 136V196"></path><path d="M128 136V196"></path><path d="M134 136V196"></path><path d="M140 136V196"></path><path d="M146 136V196"></path></g>
          <path d="M86 150H153M86 172H153" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
          <g fill="#2b2118" fill-opacity=".45"><path d="M94 160v-6a2 2 0 0 1 4 0v6Z"></path><path d="M94 184v-6a2 2 0 0 1 4 0v6Z"></path><path d="M106 160v-6a2 2 0 0 1 4 0v6Z"></path><path d="M106 184v-6a2 2 0 0 1 4 0v6Z"></path><path d="M118 160v-6a2 2 0 0 1 4 0v6Z"></path><path d="M118 184v-6a2 2 0 0 1 4 0v6Z"></path><path d="M130 160v-6a2 2 0 0 1 4 0v6Z"></path><path d="M130 184v-6a2 2 0 0 1 4 0v6Z"></path><path d="M142 160v-6a2 2 0 0 1 4 0v6Z"></path><path d="M142 184v-6a2 2 0 0 1 4 0v6Z"></path></g>
          <path d="M40 200V96H80V200Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.8"></path>
          <g stroke="#2b2118" stroke-opacity=".5" stroke-width="1"><path d="M45 104V196"></path><path d="M50 104V196"></path><path d="M55 104V196"></path><path d="M60 104V196"></path><path d="M65 104V196"></path><path d="M70 104V196"></path><path d="M75 104V196"></path></g>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1"><path d="M40 112H80"></path><path d="M40 126H80"></path><path d="M40 140H80"></path><path d="M40 154H80"></path><path d="M40 168H80"></path><path d="M40 182H80"></path><path d="M40 196H80"></path></g>
          <path d="M36 96V56H84V96Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M36 60H84M36 92H84" stroke="#2b2118" stroke-width="1.2"></path>
          <circle cx="60" cy="76" r="15" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <circle cx="60" cy="76" r="12" fill="none" stroke="#2b2118" stroke-width=".8"></circle>
          <g stroke="#2b2118" stroke-width="1.1"><path d="M70.0 76.0L72.0 76.0"></path><path d="M68.7 81.0L70.4 82.0"></path><path d="M65.0 84.7L66.0 86.4"></path><path d="M60.0 86.0L60.0 88.0"></path><path d="M55.0 84.7L54.0 86.4"></path><path d="M51.3 81.0L49.6 82.0"></path><path d="M50.0 76.0L48.0 76.0"></path><path d="M51.3 71.0L49.6 70.0"></path><path d="M55.0 67.3L54.0 65.6"></path><path d="M60.0 66.0L60.0 64.0"></path><path d="M65.0 67.3L66.0 65.6"></path><path d="M68.7 71.0L70.4 70.0"></path></g>
          <path d="M60 76L60 67M60 76L66 79" stroke="#2b2118" stroke-width="1.6" stroke-linecap="round"></path>
          <g fill="#a8812f"><path d="M38 58l4 4h-4Z"></path><path d="M82 58l-4 4h4Z"></path><path d="M38 94l4-4h-4Z"></path><path d="M82 94l-4-4h4Z"></path></g>
          <path d="M38 56V38H82V56Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.6"></path>
          <g fill="#2b2118" fill-opacity=".65"><path d="M42 54V44a3 3 0 0 1 6 0V54Z"></path><path d="M51 54V44a3 3 0 0 1 6 0V54Z"></path><path d="M60 54V44a3 3 0 0 1 6 0V54Z"></path><path d="M69 54V44a3 3 0 0 1 6 0V54Z"></path><path d="M78 54V44a3 3 0 0 1 6 0V54Z"></path></g>
          <path d="M36 38L60 10L84 38Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g fill="#a8812f" stroke="#2b2118" stroke-width="1"><path d="M36 38V26L39 20L42 26V38Z"></path><path d="M78 38V26L81 20L84 26V38Z"></path></g>
          <g fill="#d8b657"><rect x="50" y="26" width="4" height="4"></rect><rect x="66" y="26" width="4" height="4"></rect><rect x="58" y="20" width="4" height="4"></rect></g>
          <path d="M60 10V2" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M57 4H63M60 0V6" stroke="#a8812f" stroke-width="1.6"></path>
          <path d="M7 200H153" stroke="#2b2118" stroke-width="1.6"></path>
          <g transform="translate(116 226)"><path d="M-26 0V-22C-26 -25 -24 -27 -21 -27H22C25 -27 26 -25 26 -22V0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.5"></path><g fill="#dbe6e5" stroke="#2b2118" stroke-width=".9"><rect x="-22" y="-24" width="10" height="7"></rect><rect x="-8" y="-24" width="10" height="7"></rect><rect x="6" y="-24" width="10" height="7"></rect><rect x="-22" y="-12" width="10" height="7"></rect><rect x="-8" y="-12" width="10" height="7"></rect><rect x="6" y="-12" width="10" height="7"></rect></g><circle cx="-15" cy="1" r="4" fill="#2b2118"></circle><circle cx="15" cy="1" r="4" fill="#2b2118"></circle></g>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'IV')}
        </g>
        ${plus(784)}
        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M92 58C80 58 74 48 80 40C74 30 86 20 96 26C100 14 118 14 122 26C134 22 144 32 138 42C146 50 138 62 126 58C120 66 102 66 92 58Z" fill="#5b4a36" fill-opacity=".55" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M104 90C102 80 100 70 104 60M112 90C114 78 116 70 114 60" fill="none" stroke="#5b4a36" stroke-opacity=".6" stroke-width="5" stroke-linecap="round"></path>
          <g fill="#5b4a36" fill-opacity=".5"><circle cx="40" cy="70" r="1.4"></circle><circle cx="52" cy="88" r="1.4"></circle><circle cx="30" cy="100" r="1.4"></circle><circle cx="62" cy="64" r="1.4"></circle><circle cx="46" cy="112" r="1.4"></circle><circle cx="24" cy="80" r="1.4"></circle><circle cx="70" cy="96" r="1.4"></circle></g>
          <path d="M40 176L92 92H124L153 150V176Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M92 92C100 98 116 98 124 92" fill="#e08a3c" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M104 96C100 116 94 130 86 150M114 96C120 114 126 128 134 146" fill="none" stroke="#e08a3c" stroke-width="3" stroke-linecap="round"></path>
          <path d="M104 96C100 116 94 130 86 150M114 96C120 114 126 128 134 146" fill="none" stroke="#d8b657" stroke-width="1.1" stroke-linecap="round"></path>
          <path d="M7 176H153V200H7Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M12 172H64V176H12Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></path>
          <path d="M10 140H66L38 126Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M12 140H64V145H12Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1"><rect x="16" y="145" width="5" height="27"></rect><rect x="26" y="145" width="5" height="27"></rect><rect x="36" y="145" width="5" height="27"></rect><rect x="46" y="145" width="5" height="27"></rect><rect x="56" y="145" width="5" height="27"></rect></g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1"><rect x="76" y="160" width="5" height="16"></rect><rect x="86" y="154" width="5" height="22"></rect><path d="M74 154H93V158H74Z"></path><rect x="100" y="166" width="5" height="10"></rect></g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.1"><path d="M112 176V164H130V176Z"></path><path d="M132 176V168H148V176Z"></path></g>
          <g fill="#2b2118" fill-opacity=".5"><path d="M118 176v-6a2 2 0 0 1 4 0v6Z"></path><path d="M137 176v-4a2 2 0 0 1 4 0v4Z"></path></g>
          <path d="M7 190C30 186 52 192 78 188C104 184 128 190 153 186V200H7Z" fill="#5b4a36" fill-opacity=".3"></path>
          <path d="M7 200H153" stroke="#2b2118" stroke-width="2"></path>
          <text x="80" y="226" text-anchor="middle" font-family="'EB Garamond',serif" font-size="14" font-weight="600" letter-spacing="3" fill="#9e3b28">${lang === 'en' ? 'BURIED' : 'BEDOLVEN'}</text>
          ${box(160, 'V')}
        </g>
        ${plus(968)}
        <g transform="translate(980 130)" data-num="5">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <text x="80" y="30" text-anchor="middle" font-family="'EB Garamond',serif" font-size="11.5" font-weight="600" letter-spacing="1.6" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'CAPITAL' : 'HOOFDSTAD'}</text>
          <text x="80" y="45" text-anchor="middle" font-family="'EB Garamond',serif" font-size="11.5" font-weight="600" letter-spacing="1.6" fill="#2b2118" fill-opacity=".8">${lang === 'en' ? 'OF MUSIC' : 'VAN DE MUZIEK'}</text>
          <g stroke="#2b2118" stroke-opacity=".7" stroke-width="1"><path d="M14 84H146"></path><path d="M14 94H146"></path><path d="M14 104H146"></path><path d="M14 114H146"></path><path d="M14 124H146"></path></g>
          <path d="M34 134C28 134 26 128 30 124C34 120 40 124 38 130C36 138 22 136 20 124C18 112 30 102 40 94C46 88 46 76 40 74C34 74 32 84 34 96L40 142C41 148 36 150 33 146" fill="none" stroke="#2b2118" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path>
          <ellipse cx="66" cy="119" rx="5.2" ry="3.8" transform="rotate(-20 66 119)" fill="#2b2118"></ellipse>
          <path d="M70.6 118V93" stroke="#2b2118" stroke-width="1.6"></path>
          <ellipse cx="84" cy="109" rx="5.2" ry="3.8" transform="rotate(-20 84 109)" fill="#2b2118"></ellipse>
          <path d="M88.6 108V83" stroke="#2b2118" stroke-width="1.6"></path>
          <ellipse cx="102" cy="114" rx="5.2" ry="3.8" transform="rotate(-20 102 114)" fill="#2b2118"></ellipse>
          <path d="M106.6 113V88" stroke="#2b2118" stroke-width="1.6"></path>
          <ellipse cx="122" cy="99" rx="5.2" ry="3.8" transform="rotate(-20 122 99)" fill="#2b2118"></ellipse>
          <path d="M126.6 98V73" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M70.6 92L88.6 82M70.6 97L88.6 87" stroke="#2b2118" stroke-width="3"></path>
          <path d="M126.6 72C131 76 136 78 138 86" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <circle cx="80" cy="178" r="20" fill="#d8b657" stroke="#2b2118" stroke-width="1.8"></circle>
          <g fill="#2b2118"><circle cx="73" cy="173" r="2.2"></circle><circle cx="87" cy="173" r="2.2"></circle></g>
          <path d="M67 169L76 164M93 169L84 164" stroke="#2b2118" stroke-width="1.6" stroke-linecap="round"></path>
          <path d="M71 190C75 184 85 184 89 190" fill="none" stroke="#2b2118" stroke-width="1.8" stroke-linecap="round"></path>
          <path d="M72 177C68 183 67 188 71 190C75 190 76 185 72 177Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1"></path>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'VI')}
        </g>

        ${foot(440, 'I → VI')}
      </svg>`),

    /* Plaat VI — raadsel F (L) */
    F: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat VI — Raadsel F" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('pF')}${hatch('pF')}</defs>
        ${frame('pF', 1200, 540, 'PLAAT VI', 'RAADSEL F · III PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <pattern id="tartan" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#9e3b28"></rect><rect width="5" height="14" fill="#2b2118" fill-opacity=".45"></rect><rect width="14" height="5" fill="#2b2118" fill-opacity=".45"></rect><rect x="9" width="1.2" height="14" fill="#3f7a4e"></rect><rect y="9" width="14" height="1.2" fill="#3f7a4e"></rect><rect x="11.5" width=".8" height="14" fill="#d8b657"></rect><rect y="11.5" width="14" height=".8" fill="#d8b657"></rect></pattern>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.2" stroke-opacity=".7"><path d="M150 214V186H168V214Z"></path><path d="M170 214V178H186V214Z"></path><path d="M188 214V190H204V214Z"></path><path d="M206 214V182H222V214Z"></path></g>
          <g fill="#c87a46" stroke="#2b2118" stroke-width="1" stroke-opacity=".7"><path d="M148 186L159 178L170 186Z"></path><path d="M168 178L178 170L188 178Z"></path><path d="M186 190L196 182L206 190Z"></path><path d="M204 182L214 174L224 182Z"></path></g>
          <path d="M16 214C22 196 30 168 36 146C40 132 44 124 50 120H176C186 126 196 140 208 160C216 174 224 196 232 214Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.3"><path d="M42 150L50 170L46 196M62 128L70 150L64 176L70 206M96 124L92 150L100 172M130 124L136 146L130 170M164 124L170 150L186 176"></path></g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".15" stroke-width="2"><path d="M30 190C36 170 40 150 46 134M200 176C192 160 184 146 176 134"></path></g>
          <path d="M20 214C60 206 120 206 160 214" fill="#3f7a4e" fill-opacity=".35"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"><path d="M48 124V100H78V124Z"></path><path d="M76 124V90H118V124Z"></path><path d="M116 124V74H134V124Z"></path><path d="M132 124V96H160V124Z"></path><path d="M150 128V112C150 106 162 104 176 106C186 108 190 114 190 122V128Z"></path></g>
          <path d="M44 124H180" stroke="#2b2118" stroke-width="1.6"></path>
          <g fill="#2b2118"><path d="M48 100h4v-5h4v5h4v-5h4v5h4v-5h4v5h4v-3H48Z"></path><path d="M76 90h4v-5h4v5h4v-5h4v5h4v-5h4v5h4v-5h4v5h6v-3H76Z"></path><path d="M116 74h3v-5h3v5h3v-5h3v5h3v-5h3v5v-3H116Z"></path><path d="M132 96h4v-5h4v5h4v-5h4v5h4v-5h4v5h4v-3H132Z"></path><path d="M150 112h4v-4h4v4h4v-4h4v4h4v-4h4v4h4v-4h4v4h4v-2H150Z"></path></g>
          <g fill="#2b2118" fill-opacity=".55"><rect x="54" y="106" width="4" height="7"></rect><rect x="66" y="106" width="4" height="7"></rect><path d="M82 116v-12a3 3 0 0 1 6 0v12Z"></path><path d="M94 116v-12a3 3 0 0 1 6 0v12Z"></path><path d="M106 116v-12a3 3 0 0 1 6 0v12Z"></path><rect x="122" y="82" width="5" height="8"></rect><rect x="122" y="100" width="5" height="8"></rect><rect x="138" y="102" width="4" height="7"></rect><rect x="148" y="102" width="4" height="7"></rect><rect x="160" y="114" width="4" height="4"></rect><rect x="170" y="114" width="4" height="4"></rect><rect x="180" y="116" width="4" height="4"></rect></g>
          <path d="M125 70V46" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M125 46H151V62H125Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.2"></path>
          <path d="M125 46L151 62M151 46L125 62" stroke="#f6f2ea" stroke-width="2.4"></path>
          <g transform="translate(276 214)">
          <path d="M-13 -40V-6H-5V-40ZM5 -40V-6H13V-40Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M-13 -34H-5M5 -34H13" stroke="#9e3b28" stroke-width="3"></path>
          <path d="M-15 0C-15 -4 -12 -6 -8 -6H-4V0ZM4 0V-6H8C12 -6 15 -4 15 0Z" fill="#2b2118"></path>
          <path d="M-19 -88H19L24 -44C12 -40 -12 -40 -24 -44Z" fill="url(#tartan)" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1"><path d="M-12 -84L-15 -44M-4 -86L-5 -42M4 -86L5 -42M12 -84L15 -44"></path></g>
          <path d="M19 -88L24 -44L18 -45L15 -86Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></path>
          <path d="M-8 -84C-8 -78 -6 -64 0 -60C6 -64 8 -78 8 -84Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3"></path>
          <g fill="#2b2118"><circle cx="-3" cy="-72" r="1.6"></circle><circle cx="3" cy="-72" r="1.6"></circle><circle cx="0" cy="-66" r="1.6"></circle></g>
          <path d="M-20 -92H20V-86H-20Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.2"></path>
          <rect x="-4" y="-92" width="8" height="6" fill="#d8b657" stroke="#2b2118" stroke-width="1"></rect>
          <path d="M-18 -134H18L20 -92H-20Z" fill="#2b2118" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M-6 -134L0 -110L6 -134Z" fill="#f6f2ea"></path>
          <path d="M-3 -130H3L0 -124Z" fill="#2b2118"></path>
          <path d="M-17 -132C-26 -124 -28 -108 -26 -92M17 -132C26 -124 28 -108 26 -92" fill="none" stroke="#2b2118" stroke-width="8" stroke-linecap="round"></path>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.2"><circle cx="-26" cy="-89" r="4"></circle><circle cx="26" cy="-89" r="4"></circle></g>
          <path d="M-18 -134L6 -134L20 -100L12 -96Z" fill="url(#tartan)" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M-4 -140H4V-133H-4Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1"></path>
          <ellipse cx="0" cy="-150" rx="9" ry="11" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5"></ellipse>
          <path d="M-9 -150C-9 -140 -5 -136 0 -136C5 -136 9 -140 9 -150C6 -145 -6 -145 -9 -150Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.1"></path>
          <g fill="#2b2118"><circle cx="-3.5" cy="-153" r="1.2"></circle><circle cx="3.5" cy="-153" r="1.2"></circle></g>
          <path d="M-12 -158C-12 -168 12 -170 14 -160C12 -158 -8 -156 -12 -158Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M-11 -159H12" stroke="url(#tartan)" stroke-width="2.4"></path>
          <circle cx="2" cy="-167" r="3" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          </g>
          <path d="M16 214H304" stroke="#2b2118" stroke-width="2"></path>
          ${box(320, 'I')}
        </g>
        ${plus(410)}

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(40 150)">
          <ellipse cx="0" cy="0" rx="30" ry="34" fill="#c87a46" fill-opacity=".45" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></ellipse>
          <ellipse cx="0" cy="0" rx="20" ry="23" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></ellipse>
          <path d="M-30 -8H30M-30 8H30" stroke="#2b2118" stroke-opacity=".35" stroke-width="2"></path>
          </g>
          <g transform="translate(272 150)">
          <ellipse cx="0" cy="0" rx="30" ry="34" fill="#c87a46" fill-opacity=".45" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></ellipse>
          <ellipse cx="0" cy="0" rx="20" ry="23" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></ellipse>
          <path d="M-30 -8H30M-30 8H30" stroke="#2b2118" stroke-opacity=".35" stroke-width="2"></path>
          </g>
          <path d="M16 206H304V214H16Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M116 206V114C116 98 126 92 130 84V50H146V84C150 92 160 98 160 114V206Z" fill="#2b2118" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M128 50V36H148V50Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M126 50H150" stroke="#2b2118" stroke-width="2.4"></path>
          <path d="M121 118C121 108 126 102 130 98" fill="none" stroke="#f6f2ea" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"></path>
          <rect x="119" y="124" width="38" height="64" fill="#f1e7d3" stroke="#a8812f" stroke-width="1.4"></rect>
          <g transform="translate(138 160)" fill="#2b2118"><ellipse cx="0" cy="-22" rx="11" ry="2.6"></ellipse><path d="M-5 -23C-5 -30 5 -30 5 -23Z"></path><path d="M-4 -20C-8 -12 -12 0 -13 14H11C10 2 8 -10 4 -20Z"></path><path d="M4 -14L12 -18" stroke="#2b2118" stroke-width="1.6"></path><path d="M11 -23L15 -23L13.5 -18H12.5Z" fill="#9e3b28"></path></g>
          <text x="138" y="182" text-anchor="middle" font-family="'EB Garamond',serif" font-size="6.4" font-weight="600" letter-spacing=".6" fill="#2b2118">SANDEMAN</text>
          <text x="138" y="134" text-anchor="middle" font-family="'EB Garamond',serif" font-size="6" letter-spacing="1" fill="#9e3b28">PORTO</text>
          <g transform="translate(212 206)">
          <path d="M-16 0H16" stroke="#2b2118" stroke-width="2.6" stroke-linecap="round"></path>
          <path d="M0 0V-34" stroke="#2b2118" stroke-width="2.4"></path>
          <path d="M-16 -86C-18 -66 -14 -44 0 -36C14 -44 18 -66 16 -86Z" fill="#faf4e6" fill-opacity=".6" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M-16.6 -68C-15 -52 -10 -42 0 -38C10 -42 15 -52 16.6 -68Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></path>
          <path d="M-16.6 -68C-8 -65 8 -65 16.6 -68" fill="none" stroke="#c87a46" stroke-width="1.4"></path>
          <path d="M-10 -80C-11 -68 -8 -56 -4 -48" fill="none" stroke="#f6f2ea" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          <g transform="translate(252 200) rotate(-12)"><rect x="-6" y="-6" width="12" height="12" rx="2" fill="#c87a46" stroke="#2b2118" stroke-width="1.2"></rect></g>
          ${box(320, 'II')}
        </g>
        ${plus(790)}

        <g transform="translate(820 130)" data-num="2">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="306" height="236" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="306" height="236" fill="url(#pF-h)"></rect>
          <path d="M287.7 24.0 L280.6 32.1 L269.5 51.3 L259.2 66.3 L252.0 85.4 L243.3 101.4 L244.1 111.4 L253.6 128.4 L250.4 136.3 L259.2 144.3 L245.7 159.2 L244.1 173.1 L247.3 182.0 L232.2 179.0 L224.3 178.0 L204.4 171.1 L190.1 156.2 L176.7 145.3 L152.1 141.3 L134.6 131.4 L123.5 124.4 L101.3 113.4 L83.8 101.4 L64.0 93.4 L45.0 86.4 L32.3 71.4 L36.2 59.3 L37.8 49.2 L47.3 38.2 L56.1 33.1 L61.6 45.2 L68.0 48.2 L77.5 39.2 L83.8 36.1 L94.9 39.2 L106.0 39.2 L102.9 31.1 L120.3 40.2 L133.0 53.3 L144.9 52.3 L158.4 47.2 L180.6 44.2 L200.5 44.2 L215.5 35.1 L232.2 37.1 L244.1 31.1 L254.4 24.0 L256.0 29.1 L269.5 26.0 L277.4 22.0Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#3f7a4e" stroke-opacity=".45" stroke-width="2"><path d="M70 70C80 62 92 64 100 70M120 80C132 72 146 74 154 82M160 60C172 54 184 56 192 62M150 108C160 100 172 102 180 110M92 92C100 86 110 88 116 94"></path></g>
          <g transform="translate(214 92) scale(1.12)">
          <path d="M-30 6L-6 -30H6L30 6Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M-6 -30H6L14 -18C8 -14 4 -20 0 -16C-4 -20 -8 -14 -14 -18Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M2 -26C4 -14 8 -4 14 4" fill="none" stroke="#e08a3c" stroke-width="2.6" stroke-linecap="round"></path>
          <path d="M-2 -32C-8 -42 -4 -50 -12 -58C-4 -56 -2 -48 2 -44C2 -52 8 -56 6 -64C14 -56 10 -46 6 -34Z" fill="#5b4a36" fill-opacity=".5" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.1"></path>
          </g>
          <text x="254" y="112" font-family="'EB Garamond',serif" font-size="10" font-weight="600" letter-spacing="2" fill="#2b2118" fill-opacity=".7">ETNA</text>
          <text x="118" y="206" text-anchor="middle" font-family="'EB Garamond',serif" font-size="13" letter-spacing="5" fill="#2d4b86" fill-opacity=".85">${lang === 'en' ? 'MEDITERRANEAN SEA' : 'MIDDELLANDSE ZEE'}</text>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".6" stroke-width="1.6"><path d="M20 150C36 144 52 150 68 144M40 226C56 220 74 226 90 220M270 210C282 204 296 210 306 206M180 226C196 220 212 226 228 220"></path></g>
          ${box(320, 'III')}
        </g>

        ${foot(440, 'I → III')}
      </svg>`),
  };

  window.GeoCardsPlanet = CARDS;
})();
