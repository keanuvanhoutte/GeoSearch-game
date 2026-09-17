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
          <path d="M126 62L150 206M126 62L96 206" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.3"></path>
          <g transform="translate(60 60)" fill="#2b2118">
            <path d="M-36 0C-26 -9 -13 -12 -5 -7L0 -14L5 -7C13 -12 26 -9 36 0C23 -3 11 2 5 7H-5C-11 2 -23 -3 -36 0Z"></path>
            <circle cx="0" cy="-15" r="4.5"></circle>
            <path d="M3 -18L9 -19L4 -14Z"></path>
          </g>
          <path d="M16 206H238" stroke="#2b2118" stroke-width="2"></path>
          <rect x="66" y="212" width="120" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="126" y="229" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#2b2118">MAX 6961 m</text>
          <text transform="translate(52 186) rotate(-54)" font-family="'EB Garamond',serif" font-size="13" letter-spacing="4" fill="#2b2118" fill-opacity=".45">ANDES</text>
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
          <rect x="7" y="7" width="238" height="236" fill="#e6d9be"></rect>
          <path d="M214 7C222 40 232 80 238 120C242 152 242 196 238 243H245V7Z" fill="#c7dbe4"></path>
          <path d="M214 7C222 40 232 80 238 120C242 152 242 196 238 243" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"></path>
          <path d="M74.2 30.0 L126.0 43.0 L171.3 56.0 L203.6 62.5 L223.0 75.5 L232.7 95.0 L216.6 121.0 L203.6 147.0 L171.3 166.5 L126.0 160.0 L87.2 153.5 L54.8 140.5 L28.9 121.0 L19.2 95.0 L28.9 69.0 L54.8 49.5 Z" fill="#3f7a4e" opacity=".3"></path>
          <path d="M151.9 30.0 L190.7 39.8 L200.4 56.0 L203.6 65.8 L216.6 75.5 L239.2 85.2 L255.4 101.5 L281.3 121.0" fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.6"></path>
          <path d="M31.5 108.0 L45.1 100.2 L51.6 96.3 L74.2 91.8 L100.1 90.5 L138.9 89.2 L164.8 85.9 L190.7 82.7 L213.3 78.4" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M90.4 56.0 L100.1 65.1 L116.3 72.9 L132.5 83.3 L138.9 89.2" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M106.6 143.8 L109.8 127.5 L122.8 111.2 L135.7 98.9 L146.0 90.5" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M77.5 130.8 L93.6 117.8 L113.0 104.8 L128.6 93.0" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M56.1 124.2 L74.2 111.2 L96.9 100.2 L111.8 91.1" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M155.1 134.0 L158.3 114.5 L161.6 98.2 L170.0 85.2" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M181.0 140.5 L185.5 117.8 L188.1 98.2 L190.7 84.0" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M216.6 153.5 L214.0 127.5 L210.1 101.5 L208.2 81.3" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M48.4 137.2 L45.1 124.2 L31.5 108.0" fill="none" stroke="#2d4b86" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="212.7" cy="76.8" r="17" fill="none" stroke="#9e3b28" stroke-width="2.6"></circle>
          <g transform="translate(52 200) scale(.62)">
            <path d="M-4 0C-16 -2 -24 -12 -24 -24C-24 -36 -15 -44 -2 -44C8 -44 16 -39 19 -32L22 -20C19 -8 10 -1 -2 0Z" fill="#2b2118"></path>
            <path d="M-20 -6C-30 4 -38 10 -44 12C-38 2 -32 -6 -28 -12Z" fill="#2b2118"></path>
            <path d="M19 -32C34 -37 50 -33 55 -24C49 -14 33 -12 22 -20Z" fill="#e08a3c" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <circle cx="6" cy="-32" r="3.6" fill="#faf4e6"></circle>
            <circle cx="7" cy="-32" r="1.6" fill="#2b2118"></circle>
            <path d="M-6 0V6M2 0V6" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          <g fill="#2b2118" fill-opacity=".45" font-family="'EB Garamond',serif" letter-spacing="2.5">
            <text transform="translate(96 88) rotate(9)" font-size="11">${lang === 'en' ? 'AMAZON' : 'AMAZONE'}</text>
          </g>
          <g fill="#2b2118" fill-opacity=".3" font-family="'EB Garamond',serif" font-size="7.5" letter-spacing="1.5">
            <text x="26" y="150">${lang === 'en' ? 'ANDES' : 'ANDES'}</text>
            <text transform="translate(236 168) rotate(-90)">${lang === 'en' ? 'ATLANTIC' : 'ATLANTISCHE OCEAAN'}</text>
            <text x="120" y="212">${lang === 'en' ? 'RAINFOREST' : 'REGENWOUD'}</text>
          </g>
          <g fill="#3f7a4e" opacity=".55">
            <ellipse cx="60" cy="182" rx="13" ry="8"></ellipse>
            <ellipse cx="86" cy="192" rx="11" ry="7"></ellipse>
            <ellipse cx="150" cy="188" rx="12" ry="7"></ellipse>
            <ellipse cx="176" cy="198" rx="10" ry="6"></ellipse>
            <ellipse cx="40" cy="96" rx="11" ry="7"></ellipse>
          </g>
          <text x="213" y="108" text-anchor="middle" font-family="'EB Garamond',serif" font-size="8" letter-spacing="1.5" fill="#9e3b28">${lang === 'en' ? 'MOUTH' : 'MONDING'}</text>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <clipPath id="mp"><rect x="7" y="7" width="238" height="236"></rect></clipPath>
          <g clip-path="url(#mp)">
          <rect x="7" y="7" width="238" height="236" fill="#f6f2ea"></rect>
          <g fill="#dbe6e5" opacity=".5"><ellipse cx="54" cy="36" rx="38" ry="9"></ellipse><ellipse cx="92" cy="28" rx="22" ry="6"></ellipse><ellipse cx="46" cy="86" rx="30" ry="7"></ellipse><ellipse cx="228" cy="52" rx="26" ry="7"></ellipse></g>
          <path d="M7 146C18 132 26 124 34 126C42 128 46 138 54 134C64 129 74 110 86 104C96 110 102 124 110 136C116 145 120 150 124 154V160H7Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M7 180C16 166 26 154 36 150C48 145 56 132 68 122C82 133 96 152 106 170C112 180 116 186 120 190V196H7Z" fill="#3f7a4e" fill-opacity=".2" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.1"><path d="M68 126C74 142 80 158 88 172M66 128C60 142 52 158 44 170"></path></g>
          <path d="M116 166C124 142 134 122 146 110C156 122 164 142 170 164Z" fill="#3f7a4e" fill-opacity=".3" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"><path d="M40 62C46 56 50 56 54 60C58 56 62 56 68 62"></path><path d="M72 84C76 80 79 80 82 83C85 80 88 80 92 84"></path></g>
          <path d="M124 176C134 156 146 128 160 96C170 72 180 46 187 28C188 24 189 21 190 19C192 26 195 40 198 52C200 58 201 60 203 62C208 92 218 130 228 156C232 166 238 174 244 180V186H124Z" fill="#3f7a4e" fill-opacity=".45" stroke="#2b2118" stroke-width="2.1" stroke-linejoin="round"></path>
          <path d="M190 19C192 26 195 40 198 52C200 58 201 60 203 62C208 92 218 130 228 156C232 166 238 174 244 180V186H198C198 150 193 96 188 19Z" fill="#2b2118" fill-opacity=".13"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.3"><path d="M190 26C184 58 176 100 166 140M191 28C196 60 205 104 215 146M158 106C170 118 190 122 206 116M148 140C166 154 200 156 220 148M136 168C158 178 200 180 226 172"></path></g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".42" stroke-width="1.2"><path d="M181 44C185 41 191 41 197 45M177 58C183 54 194 55 202 59M173 72C180 67 197 68 206 74"></path></g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1"><rect x="182" y="66" width="6" height="5"></rect><rect x="190" y="67" width="5" height="4"></rect></g>
          <path d="M180 72C186 68 196 68 200 72" fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.2"></path>
          <path d="M7 243C10 214 18 194 32 180L22 243Z" fill="#3f7a4e" fill-opacity=".28"></path>
          <path d="M245 243C242 216 234 198 222 186L234 243Z" fill="#3f7a4e" fill-opacity=".28"></path>
          <path d="M7 226C16 206 30 194 48 187C72 178 98 174 128 173C158 172 184 177 206 186C224 193 238 206 245 228V243H7Z" fill="#e6d9be" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M30 200C58 188 90 182 128 182C166 182 198 189 224 202" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2"></path>
          <path d="M98 204C98 191 108 184 126 184C144 184 154 191 154 204C142 209 112 209 98 204Z" fill="#3f7a4e" fill-opacity=".4"></path>
          <path d="M36 171L46 164.3L56 171Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M39.5 171L45 165.6" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M38 180h16v-9h-16Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M38.7 177h14.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M38.7 174h14.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M43.44 180L44.56 173.9L47.44 173.9L48.56 180Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M57.2 180.6h13v-7h-13Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M57.9 178.3h11.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M57.9 175.9h11.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M63.18 180.6v-7" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M73.4 180h15v-7h-15Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M74.1 177.7h13.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M74.1 175.3h13.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M78.5 180L79.55 175.2L82.25 175.2L83.3 180Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M91.6 180.6h12v-9h-12Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M92.3 177.6h10.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M92.3 174.6h10.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M97.12 180.6v-9" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M152 180h14v-9h-14Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M152.7 177h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M152.7 174h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M158.4 180v-9" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M169.2 180.6h12v-7h-12Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M169.9 178.3h10.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M169.9 175.9h10.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M174.7 180.6v-7" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M184.4 180h16v-7h-16Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M185.1 177.7h14.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M185.1 175.3h14.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M189.8 180L191 175.2L193.8 175.2L195 180Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M30 194h20v-10h-20Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M30.7 190.7h18.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M30.7 187.3h18.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M36.8 194L38.2 187.2L41.8 187.2L43.2 194Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M54 194.6h15v-8h-15Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M54.7 191.9h13.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M54.7 189.3h13.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M59.1 194.6L60.15 189.2L62.85 189.2L63.9 194.6Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M71 186L82 178.4L93 186Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          <path d="M74.5 186L81 179.9" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M73 194h18v-8h-18Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M73.7 191.3h16.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M73.7 188.7h16.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M79.12 194L80.38 188.6L83.62 188.6L84.88 194Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M95 194.6h14v-10h-14Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M95.7 191.3h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M95.7 187.9h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M101.4 194.6v-10" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M156 194h17v-10h-17Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M156.7 190.7h15.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M156.7 187.3h15.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M161.8 194L163 187.2L166 187.2L167.2 194Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M177 194.6h14v-8h-14Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M177.7 191.9h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M177.7 189.3h12.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M183.4 194.6v-8" stroke="#5b4a36" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M195 194h20v-8h-20Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.25" stroke-linejoin="round"></path>
          <path d="M195.7 191.3h18.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M195.7 188.7h18.6" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"></path>
          <path d="M201.8 194L203.2 188.6L206.8 188.6L208.2 194Z" fill="#2b2118" fill-opacity=".5"></path>
          <path d="M198 196C198 186 205 180 214 180C223 180 230 186 230 196V201H198Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <g fill="none" stroke="#5b4a36" stroke-opacity=".32" stroke-width="1"><path d="M199 190C205 186 223 186 229 190M198 196H230"></path></g>
          <g stroke="#2b2118" stroke-opacity=".38" stroke-width="1.2" fill="none"><path d="M118 178V206M136 178V206"></path><path d="M118 181h18"></path><path d="M118 186h18"></path><path d="M118 191h18"></path><path d="M118 196h18"></path><path d="M118 201h18"></path><path d="M118 206h18"></path></g>
          <path d="M26 206 Q126 192 224 206 L224 211 Q126 197 26 211 Z" fill="#3f7a4e" fill-opacity=".45"></path>
          <path d="M26 211 Q126 197 224 211 L224 220 Q126 206 26 220 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".22" stroke-width="1"><path d="M40 216.6v8"></path><path d="M62 214.8v8"></path><path d="M84 213.5v8"></path><path d="M106 212.7v8"></path><path d="M128 212.5v8"></path><path d="M150 212.8v8"></path><path d="M172 213.7v8"></path><path d="M194 215v8"></path></g>
          <path d="M17 220 Q126 206 233 220 L233 225 Q126 211 17 225 Z" fill="#3f7a4e" fill-opacity=".45"></path>
          <path d="M17 225 Q126 211 233 225 L233 234 Q126 220 17 234 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".22" stroke-width="1"><path d="M31 231.5v8"></path><path d="M53 229.4v8"></path><path d="M75 227.9v8"></path><path d="M97 227v8"></path><path d="M119 226.5v8"></path><path d="M141 226.6v8"></path><path d="M163 227.3v8"></path><path d="M185 228.4v8"></path><path d="M207 230.1v8"></path></g>
          <path d="M10 234 Q126 220 240 234 L240 239 Q126 225 10 239 Z" fill="#3f7a4e" fill-opacity=".45"></path>
          <path d="M10 239 Q126 225 240 239 L240 248 Q126 234 10 248 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".22" stroke-width="1"><path d="M24 246.2v8"></path><path d="M46 244v8"></path><path d="M68 242.4v8"></path><path d="M90 241.2v8"></path><path d="M112 240.6v8"></path><path d="M134 240.5v8"></path><path d="M156 241v8"></path><path d="M178 242v8"></path><path d="M200 243.5v8"></path><path d="M222 245.6v8"></path></g>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1.4" fill="none"><path d="M60 205v40M54 213h12M54 227h12M54 241h12M192 207v38M186 215h12M186 229h12M186 243h12"></path></g>
          <g transform="translate(38 230) scale(.58)" fill="#2b2118"><g stroke="#2b2118" stroke-width="4.5" stroke-linecap="round"><path d="M-12 -2V12M-2 0V12M10 0V12M18 -2V12"></path></g><path d="M-16 -8C-16 -15 -11 -19 -4 -19H14C20 -19 23 -15 23 -8V-3C23 1 21 2 17 2H-12C-15 2 -16 0 -16 -3Z"></path><path d="M-14 -11C-19 -16 -22 -23 -21 -30C-20 -36 -14 -38 -10 -34C-7 -31 -6 -26 -7 -20L-8 -12Z"></path><path d="M-21 -30C-23 -36 -22 -41 -19 -43C-17 -39 -17 -34 -18 -31ZM-13 -33C-10 -38 -7 -40 -4 -39C-6 -35 -8 -32 -9 -29Z"></path><circle cx="-19" cy="-27" r="1.4" fill="#f6f2ea"></circle></g>
          </g>
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
          <path d="M26 146L26 20L214 20Z" fill="#d8b657"></path>
          <path d="M26 146L214 146L214 20Z" fill="#c87a46"></path>
          <path d="M26 146L214 20" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.2"></path>
          <g transform="translate(120 83) rotate(-33.9) scale(.55) translate(-9 21)">
          <g fill="none" stroke="#2b2118" stroke-linecap="round"><path d="M-58 2C-64 14 -72 18 -80 16" stroke-width="11"></path><path d="M-18 2C-24 14 -18 22 -8 22" stroke-width="11"></path><path d="M16 -2C12 12 4 18 -6 16" stroke-width="11"></path><path d="M48 -10C46 4 54 12 64 12" stroke-width="11"></path></g>
          <g fill="none" stroke="#f6f2ea" stroke-linecap="round"><path d="M-58 2C-64 14 -72 18 -80 16" stroke-width="6.5"></path><path d="M-18 2C-24 14 -18 22 -8 22" stroke-width="6.5"></path><path d="M16 -2C12 12 4 18 -6 16" stroke-width="6.5"></path><path d="M48 -10C46 4 54 12 64 12" stroke-width="6.5"></path></g>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-80 16l-4 6M-80 16l1 7M-80 16l5 5"></path></g>
          <circle cx="-79" cy="27" r="5.5" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-8 22l-4 6M-8 22l1 7M-8 22l5 5"></path></g>
          <circle cx="-7" cy="33" r="5.5" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M-6 16l-4 6M-6 16l1 7M-6 16l5 5"></path></g>
          <circle cx="-5" cy="27" r="5.5" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M64 12l-4 6M64 12l1 7M64 12l5 5"></path></g>
          <circle cx="65" cy="23" r="5.5" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
          <path d="M-104 6C-116 2 -126 6 -128 16C-130 26 -122 32 -116 28C-112 25 -112 20 -116 19C-119 18 -121 20 -121 23" fill="none" stroke="#2b2118" stroke-width="7" stroke-linecap="round"></path>
          <path d="M-104 6C-116 2 -126 6 -128 16C-130 26 -122 32 -116 28C-112 25 -112 20 -116 19C-119 18 -121 20 -121 23" fill="none" stroke="#f6f2ea" stroke-width="3.6" stroke-linecap="round"></path>
          <path d="M-103.3 4.1 L-99.9 4.3 L-96.9 4.6 L-94.2 4.7 L-91.5 4.6 L-89.0 4.2 L-86.6 3.7 L-84.1 3.1 L-81.7 2.2 L-79.3 1.3 L-76.9 0.2 L-74.4 -1.0 L-71.9 -2.3 L-69.4 -3.6 L-66.7 -5.0 L-64.0 -6.4 L-61.2 -7.8 L-58.4 -9.2 L-55.4 -10.5 L-52.2 -11.7 L-49.0 -12.8 L-45.6 -13.7 L-42.0 -14.4 L-38.3 -14.8 L-34.4 -15.0 L-30.4 -14.8 L-26.6 -14.4 L-23.6 -14.0 L-21.1 -13.8 L-18.7 -13.8 L-16.4 -14.0 L-14.2 -14.3 L-12.1 -14.7 L-9.9 -15.3 L-7.7 -15.9 L-5.6 -16.7 L-3.3 -17.5 L-1.1 -18.4 L1.2 -19.4 L3.6 -20.4 L6.1 -21.5 L8.7 -22.6 L11.4 -23.6 L14.1 -24.7 L17.1 -25.7 L20.1 -26.6 L23.3 -27.4 L26.6 -28.1 L30.1 -28.6 L33.7 -28.9 L37.5 -29.0 L41.4 -28.9 L45.2 -28.6 L46.9 -28.4 L48.3 -28.3 L49.5 -28.2 L50.7 -28.1 L51.8 -28.1 L52.9 -28.1 L53.8 -28.1 L54.8 -28.1 L55.6 -28.1 L56.4 -28.2 L57.2 -28.3 L57.9 -28.4 L58.7 -28.5 L59.3 -28.6 L60.0 -28.7 L60.7 -28.9 L61.3 -29.0 L62.0 -29.2 L62.7 -29.4 L63.4 -29.6 L64.1 -29.9 L64.8 -30.1 L65.6 -30.4 L66.4 -30.7 L67.3 -31.0 L68.2 -31.3 L75.8 -10.7 L74.9 -10.3 L74.0 -10.0 L73.0 -9.6 L72.0 -9.3 L71.0 -8.9 L69.9 -8.6 L68.9 -8.3 L67.8 -8.0 L66.7 -7.7 L65.5 -7.4 L64.3 -7.2 L63.1 -7.0 L61.8 -6.8 L60.6 -6.6 L59.3 -6.5 L57.9 -6.4 L56.5 -6.3 L55.1 -6.3 L53.7 -6.3 L52.2 -6.4 L50.7 -6.5 L49.2 -6.6 L47.6 -6.8 L45.9 -6.9 L44.2 -7.2 L42.8 -7.4 L39.8 -7.8 L37.2 -7.9 L34.7 -7.9 L32.3 -7.8 L29.9 -7.5 L27.5 -7.1 L25.2 -6.7 L22.9 -6.1 L20.6 -5.4 L18.2 -4.7 L15.8 -3.8 L13.4 -3.0 L10.9 -2.1 L8.3 -1.2 L5.7 -0.2 L2.9 0.6 L0.1 1.5 L-2.8 2.2 L-5.8 2.9 L-8.9 3.4 L-12.1 3.8 L-15.5 3.9 L-18.9 3.9 L-22.5 3.6 L-26.1 3.1 L-29.4 2.4 L-32.4 1.8 L-35.0 1.4 L-37.6 1.3 L-40.1 1.4 L-42.7 1.6 L-45.3 2.0 L-47.9 2.6 L-50.5 3.3 L-53.1 4.1 L-55.8 5.0 L-58.6 6.0 L-61.3 7.1 L-64.1 8.1 L-67.0 9.2 L-69.9 10.2 L-72.9 11.1 L-75.9 11.9 L-79.0 12.6 L-82.1 13.1 L-85.3 13.4 L-88.6 13.4 L-91.9 13.1 L-95.2 12.5 L-98.5 11.5 L-101.8 10.1 L-104.7 7.9 Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.4" stroke-linejoin="round"></path>
          <path d="M-85.1 3.2L-83.3 -3.5L-78.4 1.3M-67.2 -5.0L-66.5 -11.9L-60.8 -7.8M-45.5 -14.0L-42.7 -20.3L-38.5 -14.8M-22.2 -13.9L-18.7 -19.8L-15.2 -13.8M-6.7 -16.4L-5.3 -23.2L-0.0 -18.7M10.8 -23.6L12.2 -30.4L17.5 -25.8M34.0 -29.1L37.6 -35.0L41.0 -29.0M48.3 -28.2L52.1 -34.1L55.3 -27.9M54.5 -28.0L57.2 -34.3L61.4 -28.8" fill="#f6f2ea" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.2"><path d="M-73.0 10.6L-74.8 5.9M-56.0 4.6L-58.0 -0.0M-40.2 0.9L-40.8 -4.1M-22.4 3.1L-22.0 -1.9M-2.9 1.8L-4.2 -3.1M13.2 -3.4L11.4 -8.1M27.4 -7.6L26.4 -12.5M42.9 -7.9L43.4 -12.9M52.2 -6.9L52.4 -11.9M60.5 -7.1L59.9 -12.1"></path></g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"><path d="M64 -28C54 -38 42 -42 32 -40C40 -32 50 -26 62 -22Z"></path><path d="M60 -14C50 -16 40 -14 34 -10C42 -7 52 -7 60 -8Z"></path></g>
          <path d="M64 -26C70 -44 92 -52 106 -43C114 -37 120 -31 128 -29C135 -27 136 -20 129 -18C123 -17 116 -21 110 -23L107 -14C103 -5 90 -3 82 -9C74 -15 66 -18 64 -26Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.4" stroke-linejoin="round"></path>
          <path d="M104 -13C111 -9 118 -7 124 -7C129 -6 128 0 122 1C111 3 101 -3 97 -9Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <g fill="#2b2118"><path d="M110 -22l5 3-6 2Z"></path><path d="M116 -9l5 3-6 2Z"></path></g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"><path d="M84 -44C80 -58 86 -70 98 -72C92 -62 89 -52 90 -42Z"></path><path d="M74 -38C68 -48 70 -58 78 -62C76 -53 76 -45 79 -38Z"></path></g>
          <path d="M129 -22C138 -25 145 -19 145 -12" fill="none" stroke="#2b2118" stroke-width="1.8" stroke-linecap="round"></path>
          <path d="M101 1C99 9 93 15 85 15C89 8 91 3 91 -2Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <circle cx="92" cy="-32" r="3.4" fill="#2b2118"></circle>
          <path d="M84 -38C88 -41 94 -41 98 -38" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          </g>
          <rect x="26" y="20" width="188" height="126" fill="none" stroke="#2b2118" stroke-width="2"></rect>
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
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M16 120V78H46V120Z"></path><path d="M14 78L31 64L48 78Z"></path>
            <path d="M50 120V86H76V120Z"></path><path d="M48 86L63 74L78 86Z"></path>
            <path d="M150 120V82H178V120Z"></path><path d="M148 82L164 68L180 82Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1">
            <rect x="22" y="88" width="7" height="9"></rect><rect x="33" y="88" width="7" height="9"></rect>
            <rect x="22" y="104" width="7" height="9"></rect><rect x="33" y="104" width="7" height="9"></rect>
            <rect x="56" y="96" width="7" height="9"></rect><rect x="66" y="96" width="7" height="9"></rect>
            <rect x="156" y="92" width="7" height="9"></rect><rect x="167" y="92" width="7" height="9"></rect>
            <rect x="156" y="106" width="7" height="9"></rect><rect x="167" y="106" width="7" height="9"></rect>
          </g>
          <path d="M16 120H180V128H16Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M16 196H180M16 190H180" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4"></path>
          <g transform="translate(98 190)">
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
          <path d="M28 214C76 206 120 206 168 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="none" stroke="#3f7a4e" stroke-opacity=".45" stroke-width="2.4">
            <path d="M22 40C40 30 58 44 76 34M110 30C128 20 148 34 166 24"></path>
          </g>
          <g fill="#f6f2ea">
            <circle cx="40" cy="62" r="2"></circle><circle cx="70" cy="50" r="1.6"></circle>
            <circle cx="120" cy="58" r="2"></circle><circle cx="152" cy="46" r="1.6"></circle>
            <circle cx="96" cy="72" r="1.8"></circle><circle cx="58" cy="86" r="1.6"></circle>
            <circle cx="140" cy="84" r="1.8"></circle>
          </g>
          <rect x="16" y="176" width="164" height="44" fill="#2d4b86" opacity=".4"></rect>
          <rect x="16" y="176" width="164" height="44" fill="url(#pD-h)"></rect>
          <path d="M16 176H180" stroke="#2b2118" stroke-width="1.6" stroke-opacity=".5"></path>
          <path d="M20 176V128C20 116 34 106 60 104C96 101 140 104 166 112C176 115 180 122 180 130V176Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M20 128C20 116 34 106 60 104C96 101 140 104 166 112C176 115 180 122 180 130C160 122 120 116 88 118C60 120 34 124 20 128Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".35" stroke-width="2">
            <path d="M34 176V140M58 176V134M84 176V132M110 176V134M136 176V138M160 176V144"></path>
          </g>
          <g transform="translate(100 104)">
            <circle cx="0" cy="-20" r="19" fill="none" stroke="#2b2118" stroke-width="2.4"></circle>
            <path d="M-19 -20H19M0 -39V-1" fill="none" stroke="#2b2118" stroke-width="1.6"></path>
            <path d="M-16 -30C-8 -26 8 -26 16 -30M-16 -10C-8 -14 8 -14 16 -10" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <path d="M-12 -35C-6 -30 -6 -10 -12 -5M12 -35C6 -30 6 -10 12 -5" fill="none" stroke="#2b2118" stroke-opacity=".6" stroke-width="1.4"></path>
            <path d="M0 -1V0" stroke="#2b2118" stroke-width="3"></path>
          </g>
          <g transform="translate(44 60)">
            <circle cx="0" cy="0" r="16" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8"></circle>
            <path d="M0 -16V-20M0 16V20M-16 0H-20M16 0H20" stroke="#2b2118" stroke-width="1.6" stroke-linecap="round"></path>
            <text x="0" y="-4" text-anchor="middle" font-family="'EB Garamond',serif" font-size="13" font-weight="600" fill="#9e3b28">N</text>
            <path d="M0 -10L4 6L0 2L-4 6Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></path>
          </g>
          <path d="M16 220H180" stroke="#2b2118" stroke-width="2"></path>
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
          <path d="M16 196C40 188 66 190 92 194C120 198 150 194 180 188V196Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.3"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M104 196V132H176V196Z"></path>
            <path d="M100 132H180L172 118H108Z"></path>
          </g>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M120 196V132M140 196V132M160 196V132M104 154H176M104 176H176"></path>
          </g>
          <path d="M126 118V96H150V118Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M132 96V64H144V96Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5"></path>
          <g stroke="#9e3b28" stroke-width="2.6" fill="none">
            <path d="M138 64V52"></path>
          </g>
          <g transform="translate(138 42)">
            <circle r="11" fill="#d8b657" stroke="#2b2118" stroke-width="1.5"></circle>
            <g fill="#2b2118">
              <path d="M0 0L-3.2 -9.4A10 10 0 0 1 3.2 -9.4Z"></path>
              <path d="M0 0L9.6 -2.8A10 10 0 0 1 6.4 7.4Z"></path>
              <path d="M0 0L-6.4 7.4A10 10 0 0 1 -9.6 -2.8Z"></path>
            </g>
            <circle r="2.6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1"></circle>
          </g>
          <g transform="translate(56 158)">
            <circle r="34" fill="none" stroke="#9e3b28" stroke-width="2.4"></circle>
            <circle r="7" fill="#e6d9be" stroke="#2b2118" stroke-width="1.6"></circle>
            <g stroke="#9e3b28" stroke-width="1.8" fill="none">
              <path d="M0 -34V-7M29.4 17V17M0 -7L0 -34M6 -3.5L29.4 -17M-6 -3.5L-29.4 -17M6 3.5L29.4 17M-6 3.5L-29.4 17M0 7V34"></path>
            </g>
            <g fill="#9e3b28" stroke="#2b2118" stroke-width="1.1">
              <rect x="-6" y="-40" width="12" height="9" rx="2"></rect>
              <rect x="23" y="-24" width="12" height="9" rx="2"></rect>
              <rect x="23" y="16" width="12" height="9" rx="2"></rect>
              <rect x="-6" y="32" width="12" height="9" rx="2"></rect>
              <rect x="-35" y="16" width="12" height="9" rx="2"></rect>
              <rect x="-35" y="-24" width="12" height="9" rx="2"></rect>
            </g>
            <path d="M0 34V44" stroke="#2b2118" stroke-width="2.4"></path>
            <path d="M-14 44H14" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          <g fill="none" stroke="#3f7a4e" stroke-opacity=".5" stroke-width="2">
            <path d="M20 196C24 186 22 176 18 170M30 196C34 188 33 180 30 174M180 196C176 188 177 180 180 174"></path>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 210C76 202 120 202 168 210" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
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
          <g fill="#c7dbe4" stroke="#2b2118" stroke-width="1.9">
            <circle cx="80" cy="46" r="15"></circle>
            <circle cx="40" cy="86" r="15"></circle>
            <circle cx="120" cy="86" r="15"></circle>
            <circle cx="80" cy="96" r="15"></circle>
            <circle cx="40" cy="140" r="15"></circle>
            <circle cx="120" cy="140" r="15"></circle>
            <circle cx="80" cy="150" r="15"></circle>
            <circle cx="80" cy="196" r="15"></circle>
          </g>
          <g stroke="#2b2118" stroke-width="5" fill="none">
            <path d="M80 46L40 86M80 46L120 86M80 46V96M40 86L80 96M120 86L80 96M40 86V140M120 86V140M80 96V150M40 140L80 150M120 140L80 150M80 150V196M40 140L80 196M120 140L80 196"></path>
          </g>
          <g fill="#c7dbe4" stroke="#2b2118" stroke-width="1.9">
            <circle cx="80" cy="46" r="15"></circle>
            <circle cx="40" cy="86" r="15"></circle>
            <circle cx="120" cy="86" r="15"></circle>
            <circle cx="80" cy="96" r="15"></circle>
            <circle cx="40" cy="140" r="15"></circle>
            <circle cx="120" cy="140" r="15"></circle>
            <circle cx="80" cy="150" r="15"></circle>
            <circle cx="80" cy="196" r="15"></circle>
          </g>
          <g fill="#f6f2ea" opacity=".6">
            <circle cx="75" cy="41" r="4"></circle><circle cx="35" cy="81" r="4"></circle>
            <circle cx="115" cy="81" r="4"></circle><circle cx="75" cy="91" r="4"></circle>
            <circle cx="35" cy="135" r="4"></circle><circle cx="115" cy="135" r="4"></circle>
            <circle cx="75" cy="145" r="4"></circle><circle cx="75" cy="191" r="4"></circle>
          </g>
          <path d="M14 212H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 224C56 216 104 216 134 224" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'I')}
        </g>
        ${plus(232)}
        <g transform="translate(244 130)" data-num="1">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M92 196V96H128V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M98 96V74H122V96Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M104 74V58H116V74Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M110 58V34" stroke="#2b2118" stroke-width="2.4"></path>
          <circle cx="110" cy="32" r="2.4" fill="#2b2118"></circle>
          <path d="M86 116H134V108H86Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M100 116v80M110 116v80M120 116v80M92 132h36M92 152h36M92 172h36"></path>
          </g>
          <g stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M18 196V150H36V196Z" fill="#9e3b28"></path>
            <path d="M16 150L27 138L38 150Z" fill="#5b4a36"></path>
            <path d="M38 196V142H56V196Z" fill="#d8b657"></path>
            <path d="M36 142L47 130L58 142Z" fill="#5b4a36"></path>
            <path d="M58 196V152H76V196Z" fill="#ede1c4"></path>
            <path d="M56 152L67 140L78 152Z" fill="#5b4a36"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1">
            <rect x="23" y="158" width="7" height="9"></rect><rect x="23" y="176" width="7" height="9"></rect>
            <rect x="43" y="150" width="7" height="9"></rect><rect x="43" y="168" width="7" height="9"></rect>
            <rect x="63" y="160" width="7" height="9"></rect><rect x="63" y="178" width="7" height="9"></rect>
          </g>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 208C56 200 104 200 134 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'II')}
        </g>
        ${plus(416)}
        <g transform="translate(428 130)" data-num="2">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M7 120C22 100 40 92 58 96C72 99 82 108 88 120Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M84 120C96 102 112 94 128 98C140 101 148 110 153 120Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"></path>
          <rect x="7" y="150" width="146" height="93" fill="#2d4b86" opacity=".38"></rect>
          <rect x="7" y="150" width="146" height="93" fill="url(#pE-h)"></rect>
          <path d="M7 150H153" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M20 150L104 104H138V150Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2">
            <path d="M44 138L104 106M64 128L104 106M84 118L104 106"></path>
          </g>
          <rect x="104" y="112" width="32" height="30" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.4"></rect>
          <g stroke="#2b2118" stroke-opacity=".35" stroke-width="1.1">
            <path d="M114 112v30M124 112v30M104 122h32M104 132h32"></path>
          </g>
          <path d="M20 150H138" stroke="#2b2118" stroke-width="1.8"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".55" stroke-width="1.4">
            <path d="M16 166C40 160 64 168 88 162M92 186C116 180 140 188 148 184"></path>
          </g>
          <g transform="translate(46 180)">
            <path d="M-16 0H16L11 8H-11Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-2 0V-14H9L-2 -7" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'III')}
        </g>
        ${plus(600)}
        <g transform="translate(612 130)" data-num="3">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M60 196V150H146V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g fill="#e6d9be" stroke="#2b2118" stroke-width="1.2">
            <path d="M68 150v-8c0-3 2-5 4-5s4 2 4 5v8Z"></path>
            <path d="M84 150v-8c0-3 2-5 4-5s4 2 4 5v8Z"></path>
            <path d="M100 150v-8c0-3 2-5 4-5s4 2 4 5v8Z"></path>
            <path d="M116 150v-8c0-3 2-5 4-5s4 2 4 5v8Z"></path>
            <path d="M132 150v-8c0-3 2-5 4-5s4 2 4 5v8Z"></path>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.1">
            <path d="M66 196v-24c0-4 3-7 7-7s7 3 7 7v24Z"></path>
            <path d="M92 196v-24c0-4 3-7 7-7s7 3 7 7v24Z"></path>
            <path d="M118 196v-24c0-4 3-7 7-7s7 3 7 7v24Z"></path>
          </g>
          <path d="M22 196V70H54V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M22 108H54M22 150H54M30 150v46M46 150v46"></path>
          </g>
          <rect x="26" y="78" width="24" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <g stroke="#2b2118" stroke-width="1.6" fill="none" stroke-linecap="round">
            <path d="M38 90V82M38 90l7 4"></path>
          </g>
          <circle cx="38" cy="90" r="1.8" fill="#2b2118"></circle>
          <path d="M18 70H58L38 44Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M38 44V32" stroke="#2b2118" stroke-width="2"></path>
          <circle cx="38" cy="30" r="2.4" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <g fill="#2b2118">
            <path d="M22 70h5v-6h4v6h5v-6h4v6h5v-6h4v6h5"></path>
          </g>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(96 210)">
            <path d="M-34 0V-26C-34 -30 -31 -32 -27 -32H27C31 -32 34 -30 34 -26V0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-34 -16H34" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path>
            <g fill="#dbe6e5" stroke="#2b2118" stroke-width="1.1">
              <rect x="-29" y="-28" width="16" height="9"></rect><rect x="-9" y="-28" width="16" height="9"></rect><rect x="11" y="-28" width="16" height="9"></rect>
              <rect x="-29" y="-13" width="16" height="9"></rect><rect x="-9" y="-13" width="16" height="9"></rect><rect x="11" y="-13" width="16" height="9"></rect>
            </g>
            <circle cx="-20" cy="2" r="5.5" fill="#2b2118"></circle>
            <circle cx="20" cy="2" r="5.5" fill="#2b2118"></circle>
          </g>
          <path d="M14 214H146" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'IV')}
        </g>
        ${plus(784)}
        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M18 150C34 118 52 92 68 80C78 88 84 96 90 104C98 92 108 84 118 82C132 96 144 122 152 150Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M104 92C110 86 126 86 132 92C126 96 120 93 116 96C112 99 108 96 104 92Z" fill="#5b4a36" opacity=".35"></path>
          <path d="M118 82C120 70 126 60 134 54C128 62 126 72 126 80" fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="2"></path>
          <path d="M112 70C118 62 130 58 138 60" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.6"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3">
            <path d="M68 84C76 104 84 126 90 148M118 86C126 106 134 126 140 148"></path>
          </g>
          <rect x="7" y="150" width="146" height="93" fill="#2d4b86" opacity=".35"></rect>
          <rect x="7" y="150" width="146" height="93" fill="url(#pE-h)"></rect>
          <path d="M7 150H153" stroke="#2b2118" stroke-width="1.8"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M20 150V132H36V150Z"></path>
            <path d="M40 150V138H54V150Z"></path>
          </g>
          <path d="M18 132L28 124L38 132Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.6" fill="#f6f2ea">
            <rect x="22" y="176" width="7" height="34"></rect>
            <rect x="38" y="176" width="7" height="34"></rect>
            <rect x="54" y="176" width="7" height="34"></rect>
          </g>
          <path d="M16 176H68V170H16Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M16 210H68" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.4">
            <path d="M84 184C108 178 132 186 150 182M92 202C116 196 138 204 152 200"></path>
          </g>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'V')}
        </g>
        ${plus(968)}
        <g transform="translate(980 130)" data-num="5">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M52 196V128H120V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M48 128L86 96L124 128Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g fill="#3f7a4e">
            <path d="M62 120l6-6 6 6-6 6Z"></path><path d="M80 112l6-6 6 6-6 6Z"></path><path d="M98 120l6-6 6 6-6 6Z"></path>
            <path d="M71 128l6-6 6 6-6 6Z"></path><path d="M89 128l6-6 6 6-6 6Z"></path>
          </g>
          <g fill="#d8b657">
            <path d="M71 112l5-5 5 5-5 5Z"></path><path d="M91 112l5-5 5 5-5 5Z"></path>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2">
            <path d="M60 196v-22c0-5 4-9 9-9s9 4 9 9v22Z"></path>
            <path d="M96 196v-18c0-4 3-7 7-7s7 3 7 7v18Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1">
            <rect x="82" y="140" width="9" height="14" rx="4.5"></rect>
          </g>
          <path d="M20 196V116H44V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M18 116L32 40L46 116Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".35" stroke-width="1.1" fill="none">
            <path d="M22 100H42M24 84H40M27 66H37M20 140H44M20 166H44"></path>
          </g>
          <path d="M32 40V28" stroke="#2b2118" stroke-width="2"></path>
          <circle cx="32" cy="26" r="2.4" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(112 206)">
            <g stroke="#2b2118" stroke-width="3.4" stroke-linecap="round" fill="none">
              <path d="M-14 -10V-2M-6 -10V-2M6 -12V-2M14 -12V-2"></path>
            </g>
            <path d="M-18 -14C-18 -20 -14 -24 -6 -24H8C14 -24 18 -20 18 -14C18 -11 16 -10 13 -10H-14C-17 -10 -18 -11 -18 -14Z" fill="#2b2118"></path>
            <path d="M18 -18C24 -20 28 -24 28 -28C28 -31 25 -32 23 -30C21 -28 20 -24 19 -21Z" fill="#2b2118"></path>
            <path d="M24 -32C28 -36 32 -36 33 -33C31 -31 27 -30 24 -30Z" fill="#2b2118"></path>
            <circle cx="26" cy="-29" r="1.3" fill="#faf4e6"></circle>
            <path d="M-30 -22H-18M-30 -22L-34 -14H-22Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
            <circle cx="-28" cy="-10" r="4" fill="none" stroke="#2b2118" stroke-width="2"></circle>
          </g>
          <path d="M14 214H146" stroke="#2b2118" stroke-width="2"></path>
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
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M232 214V150H252V214Z"></path><path d="M230 150L242 138L254 150Z"></path>
            <path d="M254 214V160H272V214Z"></path><path d="M252 160L263 149L274 160Z"></path>
            <path d="M274 214V146H294V214Z"></path><path d="M272 146L284 134L296 146Z"></path>
            <path d="M296 214V166H312V214Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1">
            <rect x="236" y="160" width="6" height="8"></rect><rect x="244" y="160" width="6" height="8"></rect>
            <rect x="236" y="180" width="6" height="8"></rect><rect x="244" y="180" width="6" height="8"></rect>
            <rect x="258" y="170" width="6" height="8"></rect><rect x="258" y="188" width="6" height="8"></rect>
            <rect x="278" y="156" width="6" height="8"></rect><rect x="286" y="156" width="6" height="8"></rect>
            <rect x="278" y="176" width="6" height="8"></rect><rect x="286" y="176" width="6" height="8"></rect>
            <rect x="300" y="178" width="6" height="8"></rect>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.1">
            <rect x="234" y="132" width="5" height="7"></rect><rect x="246" y="132" width="5" height="7"></rect>
            <rect x="276" y="128" width="5" height="7"></rect><rect x="288" y="128" width="5" height="7"></rect>
          </g>
          <path d="M16 214V196C30 190 44 188 58 190L70 214Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M40 214C48 184 62 160 84 146C104 133 130 130 152 138C176 146 194 168 202 214Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".16" stroke-width="2.2">
            <path d="M62 204C68 180 80 160 98 148M160 148C176 160 188 182 192 208M120 210C124 186 130 168 140 154"></path>
          </g>
          <path d="M48 214C60 200 74 190 92 184" fill="none" stroke="#e6d9be" stroke-opacity=".55" stroke-width="3"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M86 148V118H108V148Z"></path>
            <path d="M108 148V126H150V148Z"></path>
            <path d="M150 148V112H174V148Z"></path>
            <path d="M118 126V98H144V126Z"></path>
            <path d="M174 148V130H196V148Z"></path>
          </g>
          <g fill="#2b2118">
            <path d="M86 118h4v-5h4v5h4v-5h4v5h4v-3H86Z"></path>
            <path d="M150 112h4v-5h4v5h4v-5h4v5h4v-3h-20Z"></path>
            <path d="M118 98h4v-5h4v5h4v-5h4v5h4v-5h4v5h2v-3h-26Z"></path>
            <path d="M174 130h4v-5h4v5h4v-5h4v5h4v-3h-20Z"></path>
          </g>
          <path d="M104 148C104 138 110 132 118 132C126 132 132 138 132 148Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.4"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2">
            <path d="M92 148v-14a5 5 0 0 1 10 0v14Z"></path>
            <path d="M158 148v-14a5 5 0 0 1 10 0v14Z"></path>
            <path d="M180 148v-10a4 4 0 0 1 8 0v10Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1">
            <rect x="124" y="106" width="6" height="9"></rect><rect x="134" y="106" width="6" height="9"></rect>
            <rect x="136" y="132" width="6" height="9"></rect>
          </g>
          <path d="M131 98V78" stroke="#2b2118" stroke-width="2"></path>
          <path d="M131 78H160V90H131Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M131 78L160 90M160 78L131 90" stroke="#f6f2ea" stroke-width="2.6"></path>
          <g transform="translate(96 208)">
            <path d="M-5 0V-12" stroke="#2b2118" stroke-width="3.4" stroke-linecap="round"></path>
            <path d="M-11 -12H1L3 0H-13Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M-11 -6H3" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.1"></path>
            <path d="M-5 -12V-26" stroke="#2b2118" stroke-width="7" stroke-linecap="round"></path>
            <circle cx="-5" cy="-32" r="5" fill="#2b2118"></circle>
            <path d="M-11 -34C-11 -38 -8 -40 -5 -40C-2 -40 1 -38 1 -34Z" fill="#2b2118"></path>
            <path d="M-1 -26C6 -28 12 -34 14 -42" fill="none" stroke="#2b2118" stroke-width="2.6" stroke-linecap="round"></path>
            <path d="M2 -22C10 -22 16 -26 18 -32" fill="none" stroke="#2b2118" stroke-width="2.2" stroke-linecap="round"></path>
            <path d="M14 -42L18 -48M18 -32L24 -34" stroke="#2b2118" stroke-width="2" stroke-linecap="round"></path>
            <path d="M0 -24C6 -20 10 -16 12 -10" fill="none" stroke="#5b4a36" stroke-width="5" stroke-linecap="round"></path>
          </g>
          <path d="M16 214H304" stroke="#2b2118" stroke-width="2"></path>
          ${box(320, 'I')}
        </g>
        ${plus(410)}

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="164" width="306" height="79" fill="#2d4b86" opacity=".4"></rect>
          <rect x="7" y="164" width="306" height="79" fill="url(#pF-h)"></rect>
          <path d="M7 164H313" stroke="#2b2118" stroke-width="1.6" stroke-opacity=".5"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M16 164V116H40V164Z"></path><path d="M14 116L28 104L42 116Z"></path>
            <path d="M42 164V124H64V164Z"></path><path d="M40 124L53 113L66 124Z"></path>
            <path d="M66 164V108H88V164Z"></path><path d="M64 108L77 96L90 108Z"></path>
            <path d="M90 164V128H110V164Z"></path><path d="M88 128L100 117L112 128Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1">
            <rect x="21" y="126" width="6" height="8"></rect><rect x="30" y="126" width="6" height="8"></rect>
            <rect x="21" y="144" width="6" height="8"></rect><rect x="30" y="144" width="6" height="8"></rect>
            <rect x="47" y="134" width="6" height="8"></rect><rect x="56" y="134" width="6" height="8"></rect>
            <rect x="71" y="118" width="6" height="8"></rect><rect x="80" y="118" width="6" height="8"></rect>
            <rect x="71" y="140" width="6" height="8"></rect><rect x="80" y="140" width="6" height="8"></rect>
            <rect x="96" y="140" width="6" height="8"></rect>
          </g>
          <path d="M120 164V96H136V164Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M258 164V96H274V164Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M112 96H282V88H112Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7"></path>
          <path d="M120 152C132 108 168 88 197 88C226 88 262 108 274 152C258 120 226 104 197 104C168 104 136 120 120 152Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1.3">
            <path d="M140 96V116M160 96V104M197 96V88M234 96V104M254 96V116"></path>
            <path d="M128 130V96M266 130V96"></path>
          </g>
          <path d="M112 152H282V146H112Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M150 146V128M180 146V120M214 146V120M244 146V128"></path>
          </g>
          <g transform="translate(176 198)">
            <path d="M-46 0C-40 10 40 10 46 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M-46 0H46" stroke="#2b2118" stroke-width="1.6"></path>
            <g fill="#c87a46" stroke="#2b2118" stroke-width="1.4">
              <rect x="-34" y="-16" width="20" height="16" rx="4"></rect>
              <rect x="-10" y="-16" width="20" height="16" rx="4"></rect>
              <rect x="14" y="-16" width="20" height="16" rx="4"></rect>
            </g>
            <g stroke="#2b2118" stroke-opacity=".4" stroke-width="1"><path d="M-34 -8h20M-10 -8h20M14 -8h20"></path></g>
            <path d="M0 -16V-52" stroke="#2b2118" stroke-width="2.4"></path>
            <path d="M0 -50C14 -46 22 -38 24 -28H0Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-46 2C-52 6 -56 10 -58 14" fill="none" stroke="#2b2118" stroke-width="2" stroke-linecap="round"></path>
          </g>
          <g transform="translate(276 206)">
            <path d="M-12 0C-12 -10 -8 -16 0 -18C8 -16 12 -10 12 0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-12 0C-12 8 -6 12 0 12C6 12 12 8 12 0" fill="none" stroke="#2b2118" stroke-width="1.6"></path>
            <path d="M0 12V22M-9 22H9" stroke="#2b2118" stroke-width="2.2" stroke-linecap="round"></path>
          </g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.5">
            <path d="M20 182C44 176 68 184 92 178M18 226C42 220 68 228 94 222M226 232C250 226 276 234 300 228"></path>
          </g>
          <path d="M16 236H304" stroke="#2b2118" stroke-width="2"></path>
          ${box(320, 'II')}
        </g>
        ${plus(790)}

        <g transform="translate(820 130)" data-num="2">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="306" height="236" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="306" height="236" fill="url(#pF-h)"></rect>
          <path d="M183.4 24.0 L177.6 49.0 L204.9 79.0 L204.9 106.5 L201.0 131.5 L192.4 151.5 L203.8 146.5 L222.5 129.0 L250.7 104.0 L253.8 76.5 L246.0 49.0 L232.3 24.0 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M192.0 146.5 L171.7 179.0 L171.7 211.5 L140.5 219.0 L97.5 199.0 L68.2 176.5 L67.0 154.0 L93.6 144.0 L124.8 149.0 L156.1 151.5 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M191.5 148C193 152 194 156 194 160" fill="none" stroke="#f6f2ea" stroke-opacity=".9" stroke-width="3"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3">
            <path d="M96 168C116 160 140 158 160 162M92 190C114 198 140 202 160 198M196 60C202 78 206 98 202 118"></path>
          </g>
          <path d="M152 172C156 158 163 148 170 142C178 149 184 159 188 172C176 180 163 180 152 172Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M160 150C165 145 175 145 180 150C175 154 171 151 168 153C165 155 163 153 160 150Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M170 142C172 128 178 116 188 108C180 118 178 130 178 140" fill="none" stroke="#2b2118" stroke-opacity=".55" stroke-width="2.4"></path>
          <path d="M164 128C170 118 184 114 194 116" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.8"></path>
          <path d="M176 168C181 176 184 186 184 194" fill="none" stroke="#9e3b28" stroke-opacity=".65" stroke-width="2.6" stroke-linecap="round"></path>
          <path d="M100 178C112 172 128 170 142 172M96 192C110 198 130 200 146 196" fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1.3"></path>
          <text transform="translate(246 62) rotate(56)" font-family="'EB Garamond',serif" font-size="11" letter-spacing="3" fill="#2b2118" fill-opacity=".45">${lang === 'en' ? 'ITALY' : 'ITALIË'}</text>
          <text x="196" y="152" font-family="'EB Garamond',serif" font-size="7" letter-spacing="1.5" fill="#2b2118" fill-opacity=".38">${lang === 'en' ? 'STRAIT' : 'STRAAT'}</text>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.6">
            <path d="M22 96C42 88 62 96 82 88M20 214C40 206 62 214 84 206M226 200C248 192 274 200 298 192M258 40C276 32 296 38 306 34"></path>
          </g>
          ${box(320, 'III')}
        </g>

        ${foot(440, 'I → III')}
      </svg>`),
  };

  window.GeoCardsPlanet = CARDS;
})();
