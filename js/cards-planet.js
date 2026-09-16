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
          </g>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
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
          <rect x="66" y="212" width="120" height="24" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="126" y="229" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#2b2118">MAX 6961 m</text>
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
          <path d="M16 104C46 96 78 100 104 98H148C176 100 208 96 238 104V116H16Z" fill="#2f7a6b" opacity=".45"></path>
          <path d="M104 98C80 132 52 168 16 196V222H238V196C202 168 174 132 148 98Z" fill="#c87a46" opacity=".5"></path>
          <path d="M104 98C80 132 52 168 16 196" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M148 98C174 132 202 168 238 196" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M16 196C60 172 86 138 104 98H16Z" fill="#2f7a6b" opacity=".55"></path>
          <path d="M238 196C194 172 168 138 148 98H238Z" fill="#2f7a6b" opacity=".55"></path>
          <g fill="#3f7a4e" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
            <ellipse cx="34" cy="124" rx="20" ry="13"></ellipse>
            <ellipse cx="62" cy="140" rx="18" ry="12"></ellipse>
            <ellipse cx="30" cy="160" rx="17" ry="11"></ellipse>
            <ellipse cx="56" cy="176" rx="15" ry="10"></ellipse>
            <ellipse cx="218" cy="124" rx="20" ry="13"></ellipse>
            <ellipse cx="192" cy="142" rx="18" ry="12"></ellipse>
            <ellipse cx="222" cy="162" rx="17" ry="11"></ellipse>
            <ellipse cx="196" cy="178" rx="15" ry="10"></ellipse>
          </g>
          <g fill="#3f7a4e" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round">
            <path d="M92 150C104 144 128 144 140 150C128 158 104 158 92 150Z"></path>
            <path d="M118 176C132 170 160 170 174 176C160 185 132 185 118 176Z"></path>
            <path d="M74 190C86 185 106 185 118 190C106 197 86 197 74 190Z"></path>
          </g>
          <path d="M16 200C58 192 100 204 142 196C184 188 214 200 238 194V222H16Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M16 200C58 192 100 204 142 196C184 188 214 200 238 194" fill="none" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="2.4"></path>
          <g fill="none" stroke="#46697a" stroke-opacity=".5" stroke-width="1.4">
            <path d="M28 212C66 206 104 214 142 208M160 216C186 212 212 216 232 212"></path>
          </g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".45" stroke-width="1.6">
            <path d="M74 122C96 128 120 128 142 122M64 158C92 166 128 166 156 158"></path>
          </g>
          <g transform="translate(120 186) scale(.9)">
            <path d="M-18 0H18L12 7H-12Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-4 0V-11" stroke="#2b2118" stroke-width="2.2" stroke-linecap="round"></path>
            <circle cx="-4" cy="-15" r="3.6" fill="#2b2118"></circle>
            <path d="M-4 -8C-8 -6 -10 -3 -10 0M-4 -8C0 -6 2 -3 2 0" fill="none" stroke="#2b2118" stroke-width="2" stroke-linecap="round"></path>
          </g>
          <path d="M16 112C38 106 58 108 74 112" fill="none" stroke="#5b4a36" stroke-width="5" stroke-linecap="round"></path>
          <g transform="translate(74 106)">
            <path d="M-4 0C-16 -2 -24 -12 -24 -24C-24 -36 -15 -44 -2 -44C8 -44 16 -39 19 -32L22 -20C19 -8 10 -1 -2 0Z" fill="#2b2118"></path>
            <path d="M-20 -6C-30 4 -38 10 -44 12C-38 2 -32 -6 -28 -12Z" fill="#2b2118"></path>
            <path d="M19 -32C34 -37 50 -33 55 -24C49 -14 33 -12 22 -20Z" fill="#e08a3c" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M24 -26C34 -29 44 -27 50 -23" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></path>
            <circle cx="6" cy="-32" r="3.6" fill="#faf4e6"></circle>
            <circle cx="7" cy="-32" r="1.6" fill="#2b2118"></circle>
            <path d="M-6 0V6M2 0V6" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          ${box(252, 'III')}
        </g>
        ${plus(876)}

        <g transform="translate(888 130)" data-num="3">
          <rect width="252" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <circle cx="50" cy="52" r="28" fill="#f6f2ea" opacity=".8"></circle>
          <circle cx="50" cy="52" r="44" fill="#f6f2ea" opacity=".35"></circle>
          <path d="M16 120L42 88L64 106L86 76L110 102L132 82L158 104L184 74L210 100L236 84V150H16Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M94 152C104 118 126 74 158 40C174 72 188 118 198 152C172 160 120 160 94 152Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.3">
            <path d="M157 46C148 86 138 120 130 150M159 48C168 88 176 124 180 150M126 104C140 114 158 116 172 110"></path>
          </g>
          <g fill="#3f7a4e" opacity=".38">
            <ellipse cx="118" cy="140" rx="11" ry="6"></ellipse>
            <ellipse cx="178" cy="138" rx="10" ry="5"></ellipse>
            <ellipse cx="142" cy="84" rx="7" ry="4"></ellipse>
          </g>
          <path d="M16 156C38 130 56 118 74 120L88 148Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M236 152C216 126 198 116 182 118L172 146Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M44 180C54 158 76 148 104 146C140 143 178 146 204 154C216 158 222 168 224 180Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <g>
            <g><rect x="66" y="149" width="12" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M66.7 150.3 h10" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="83" y="150" width="10" height="8" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M83.7 151.3 h8" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="102" y="149" width="8" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M102.7 150.3 h6" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="123" y="150" width="12" height="8" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M123.7 151.3 h10" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="140" y="149" width="10" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M140.7 150.3 h8" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="159" y="150" width="8" height="8" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M159.7 151.3 h6" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="180" y="149" width="12" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M180.7 150.3 h10" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="60" y="160" width="13" height="10" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M60.7 161.3 h11" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="78" y="161" width="11" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M78.7 162.3 h9" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="98" y="160" width="9" height="10" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M98.7 161.3 h7" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="156" y="161" width="9" height="9" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M156.7 162.3 h7" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <g><rect x="178" y="160" width="13" height="10" fill="#ede1c4" stroke="#2b2118" stroke-width="1.2"></rect><path d="M178.7 161.3 h11" stroke="#5b4a36" stroke-opacity=".5" stroke-width="1.5"></path></g>
            <path d="M96 149L104 139L112 149Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
            <path d="M168 149L176 139L184 149Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.2" stroke-linejoin="round"></path>
          </g>
          <g>
            <path d="M30 180 C80 175 164 175 214 180 L214 186 C164 181 80 181 30 186 Z" fill="#3f7a4e" opacity=".45"></path>
            <path d="M30 186 C80 181 164 181 214 186 L214 190 C164 185 80 185 30 190 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M25 190 C75 185 170 185 220 190 L220 196 C170 191 75 191 25 196 Z" fill="#3f7a4e" opacity=".45"></path>
            <path d="M25 196 C75 191 170 191 220 196 L220 200 C170 195 75 195 25 200 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M20 200 C70 195 176 195 226 200 L226 206 C176 201 70 201 20 206 Z" fill="#3f7a4e" opacity=".45"></path>
            <path d="M20 206 C70 201 176 201 226 206 L226 210 C176 205 70 205 20 210 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
            <path d="M15 210 C65 205 182 205 232 210 L232 216 C182 211 65 211 15 216 Z" fill="#3f7a4e" opacity=".45"></path>
            <path d="M15 216 C65 211 182 211 232 216 L232 220 C182 215 65 215 15 220 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4">
            <path d="M132 180V216M126 190H138M126 200H138M126 210H138"></path>
          </g>
          <g transform="translate(64 206) scale(.62)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="4.5" stroke-linecap="round"><path d="M-12 -2V12M-2 0V12M10 0V12M18 -2V12"></path></g>
            <path d="M-16 -8C-16 -15 -11 -19 -4 -19H14C20 -19 23 -15 23 -8V-3C23 1 21 2 17 2H-12C-15 2 -16 0 -16 -3Z"></path>
            <path d="M-14 -11C-19 -16 -22 -23 -21 -30C-20 -36 -14 -38 -10 -34C-7 -31 -6 -26 -7 -20L-8 -12Z"></path>
            <path d="M-21 -30C-23 -36 -22 -41 -19 -43C-17 -39 -17 -34 -18 -31ZM-13 -33C-10 -38 -7 -40 -4 -39C-6 -35 -8 -32 -9 -29Z"></path>
          </g>
          <path d="M16 216H238" stroke="#2b2118" stroke-width="2"></path>
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
          <path d="M14 196H146V186H14Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M22 186H138V176H22Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M30 176H130V166H30Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M40 166V120H120V166Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-width="1.3" fill="#ede1c4">
            <rect x="46" y="124" width="7" height="42"></rect><rect x="60" y="124" width="7" height="42"></rect>
            <rect x="74" y="124" width="7" height="42"></rect><rect x="88" y="124" width="7" height="42"></rect>
            <rect x="102" y="124" width="7" height="42"></rect>
          </g>
          <path d="M36 120L80 96L124 120Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M62 116H98" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          <g fill="#2f7a6b" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M58 96C58 76 68 60 80 52C92 60 102 76 102 96Z"></path>
            <path d="M34 120C34 110 38 102 44 98C50 102 54 110 54 120Z"></path>
            <path d="M106 120C106 110 110 102 116 98C122 102 126 110 126 120Z"></path>
          </g>
          <path d="M80 52V40M74 44h12" stroke="#2b2118" stroke-width="2" stroke-linecap="round"></path>
          <path d="M44 98V90M116 98V90" stroke="#2b2118" stroke-width="1.6"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1.2">
            <path d="M66 92C70 78 76 68 80 62M94 92C90 78 84 68 80 62"></path>
          </g>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 208C56 200 104 200 134 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'I')}
        </g>
        ${plus(232)}

        <g transform="translate(244 130)" data-num="1">
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
          ${box(160, 'II')}
        </g>
        ${plus(416)}

        <g transform="translate(428 130)" data-num="2">
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
          ${box(160, 'III')}
        </g>
        ${plus(600)}

        <g transform="translate(612 130)" data-num="3">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M28 176V96C28 92 30 90 33 90C36 90 38 92 38 96V176Z"></path>
            <path d="M122 176V96C122 92 124 90 127 90C130 90 132 92 132 96V176Z"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.3">
            <rect x="26" y="118" width="14" height="5"></rect><rect x="120" y="118" width="14" height="5"></rect>
            <rect x="26" y="142" width="14" height="5"></rect><rect x="120" y="142" width="14" height="5"></rect>
          </g>
          <path d="M28 90L33 76L38 90Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M122 90L127 76L132 90Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M44 176V146C44 138 50 132 58 132H102C110 132 116 138 116 146V176Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M52 134C52 122 62 114 80 114C98 114 108 122 108 134Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M58 116C58 96 68 82 80 82C92 82 102 96 102 116C92 121 68 121 58 116Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M80 82V72" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M76 68C78 65 82 65 84 68C82 67.4 78 67.4 76 68Z" fill="#d8b657" stroke="#2b2118" stroke-width="1"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2">
            <path d="M62 176v-18a8 8 0 0 1 16 0v18Z"></path>
            <path d="M86 176v-14a6 6 0 0 1 12 0v14Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M52 146H108M66 106C70 98 74 94 80 92M94 106C90 98 86 94 80 92"></path>
          </g>
          <rect x="7" y="176" width="146" height="67" fill="#2d4b86" opacity=".35"></rect>
          <rect x="7" y="176" width="146" height="67" fill="url(#pE-h)"></rect>
          <path d="M7 176H153" stroke="#2b2118" stroke-width="1.8"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.4">
            <path d="M14 192C38 186 62 194 86 188M94 206C118 200 140 208 150 204"></path>
          </g>
          <g transform="translate(112 196)">
            <path d="M-18 0H18L12 8H-12Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-2 0V-14H10L-2 -7" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <path d="M7 214H153" stroke="#2b2118" stroke-width="2"></path>
          ${box(160, 'IV')}
        </g>
        ${plus(784)}

        <g transform="translate(796 130)" data-num="4">
          <rect width="160" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M18 196V112H142V196Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M14 112H146V100H14Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M18 100H142V92H18Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5">
            <rect x="24" y="118" width="12" height="78"></rect>
            <rect x="46" y="118" width="12" height="78"></rect>
            <rect x="68" y="118" width="12" height="78"></rect>
            <rect x="90" y="118" width="12" height="78"></rect>
            <rect x="112" y="118" width="12" height="78"></rect>
            <rect x="130" y="118" width="12" height="78"></rect>
          </g>
          <g stroke="#2b2118" stroke-opacity=".28" stroke-width="1">
            <path d="M28 118v78M32 118v78M50 118v78M54 118v78M72 118v78M76 118v78M94 118v78M98 118v78M116 118v78M120 118v78M134 118v78M138 118v78"></path>
          </g>
          <g transform="translate(80 92)" fill="#2b2118">
            <path d="M-30 0V-8H30V0Z"></path>
            <g stroke="#2b2118" stroke-width="3.4" stroke-linecap="round" fill="none">
              <path d="M-22 -8V-18M-14 -8V-18M-6 -8V-18M2 -8V-18"></path>
            </g>
            <path d="M-26 -18C-26 -24 -20 -28 -12 -28H6C12 -28 16 -24 16 -18Z"></path>
            <path d="M-20 -28C-20 -34 -16 -37 -12 -37C-8 -37 -4 -34 -4 -28Z"></path>
            <path d="M-6 -28C-6 -35 -2 -39 3 -39C8 -39 12 -35 12 -28Z"></path>
            <path d="M16 -20C22 -22 26 -26 26 -30C26 -33 23 -34 21 -32C19 -30 18 -26 17 -23Z"></path>
            <path d="M22 -34C26 -38 30 -38 31 -35C29 -33 25 -32 22 -32Z"></path>
            <circle cx="24" cy="-31" r="1.4" fill="#faf4e6"></circle>
          </g>
          <path d="M14 196H146" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 208C56 200 104 200 134 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(160, 'V')}
        </g>
        ${plus(968)}

        <g transform="translate(980 130)" data-num="5">
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
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M18 214V166H40V214Z"></path><path d="M16 166L29 154L42 166Z"></path>
            <path d="M44 214V176H64V214Z"></path><path d="M42 176L54 166L66 176Z"></path>
            <path d="M256 214V162H278V214Z"></path><path d="M254 162L267 150L280 162Z"></path>
            <path d="M282 214V174H302V214Z"></path><path d="M280 174L292 164L304 174Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1">
            <rect x="23" y="174" width="6" height="8"></rect><rect x="31" y="174" width="6" height="8"></rect>
            <rect x="23" y="192" width="6" height="8"></rect><rect x="31" y="192" width="6" height="8"></rect>
            <rect x="262" y="172" width="6" height="8"></rect><rect x="270" y="172" width="6" height="8"></rect>
            <rect x="262" y="192" width="6" height="8"></rect><rect x="270" y="192" width="6" height="8"></rect>
          </g>
          <path d="M64 214C72 184 88 160 112 148C136 136 164 138 186 150C208 162 222 186 228 214Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".16" stroke-width="2.2">
            <path d="M92 200C98 176 112 158 132 148M180 156C196 168 208 188 212 208"></path>
          </g>
          <path d="M110 214C118 198 130 186 146 180" fill="none" stroke="#e6d9be" stroke-opacity=".6" stroke-width="3"></path>
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M112 150V116H136V150Z"></path>
            <path d="M136 150V126H180V150Z"></path>
            <path d="M180 150V110H204V150Z"></path>
            <path d="M148 126V100H172V126Z"></path>
          </g>
          <g fill="#2b2118">
            <path d="M112 116h5v-6h5v6h5v-6h5v6h4v-4h-24Z"></path>
            <path d="M180 110h5v-6h5v6h5v-6h5v6h4v-4h-24Z"></path>
            <path d="M148 100h5v-6h5v6h5v-6h5v6h4v-4h-24Z"></path>
          </g>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.3">
            <path d="M118 150v-14a6 6 0 0 1 12 0v14Z"></path>
            <path d="M186 150v-14a6 6 0 0 1 12 0v14Z"></path>
            <path d="M152 150v-16a8 8 0 0 1 16 0v16Z"></path>
          </g>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.1">
            <rect x="142" y="132" width="7" height="9"></rect><rect x="166" y="132" width="7" height="9"></rect>
            <rect x="156" y="106" width="7" height="9"></rect>
          </g>
          <path d="M160 100V78" stroke="#2b2118" stroke-width="2"></path>
          <path d="M160 78H188V90H160Z" fill="#2d4b86" stroke="#2b2118" stroke-width="1.3"></path>
          <path d="M160 78L188 90M188 78L160 90" stroke="#f6f2ea" stroke-width="2.4"></path>
          <path d="M16 214H304" stroke="#2b2118" stroke-width="2"></path>
          ${box(320, 'I')}
        </g>
        ${plus(410)}

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M150 214V64H206V214Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <g fill="#e6d9be" stroke="#2b2118" stroke-width="1.3">
            <rect x="158" y="80" width="16" height="26" rx="8"></rect>
            <rect x="182" y="80" width="16" height="26" rx="8"></rect>
            <rect x="158" y="120" width="16" height="26" rx="8"></rect>
            <rect x="182" y="120" width="16" height="26" rx="8"></rect>
            <rect x="158" y="160" width="16" height="26" rx="8"></rect>
            <rect x="182" y="160" width="16" height="26" rx="8"></rect>
          </g>
          <path d="M146 64H210V54H146Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></path>
          <path d="M154 54V32H202V54Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.2">
            <path d="M162 54V42a6 6 0 0 1 12 0v12Z"></path>
            <path d="M182 54V42a6 6 0 0 1 12 0v12Z"></path>
          </g>
          <path d="M150 32H206L178 14Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M178 14V6" stroke="#2b2118" stroke-width="2"></path>
          <circle cx="178" cy="4" r="2.6" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M40 214V120C40 108 52 100 74 100H146V214Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="#5b4a36" stroke="#2b2118" stroke-width="1.4">
            <path d="M60 214V178c0-10 7-17 16-17s16 7 16 17v36Z"></path>
          </g>
          <g fill="#e6d9be" stroke="#2b2118" stroke-width="1.2">
            <rect x="48" y="120" width="14" height="22" rx="7"></rect>
            <rect x="104" y="120" width="14" height="22" rx="7"></rect>
            <rect x="124" y="120" width="14" height="22" rx="7"></rect>
          </g>
          <path d="M40 120C56 106 86 100 110 100" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.3"></path>
          <g transform="translate(240 176)">
            <path d="M0 38V6" stroke="#5b4a36" stroke-width="6" stroke-linecap="round"></path>
            <circle cx="0" cy="-10" r="26" fill="#3f7a4e" stroke="#2b2118" stroke-width="1.7"></circle>
            <g fill="#d8b657" stroke="#2b2118" stroke-width="1"><circle cx="-12" cy="-14" r="4"></circle><circle cx="8" cy="-4" r="4"></circle><circle cx="4" cy="-22" r="4"></circle></g>
          </g>
          <g transform="translate(286 200)">
            <path d="M0 24V4" stroke="#5b4a36" stroke-width="5" stroke-linecap="round"></path>
            <circle cx="0" cy="-8" r="18" fill="#3f7a4e" stroke="#2b2118" stroke-width="1.6"></circle>
            <g fill="#d8b657" stroke="#2b2118" stroke-width="1"><circle cx="-8" cy="-10" r="3.4"></circle><circle cx="6" cy="-2" r="3.4"></circle></g>
          </g>
          <g transform="translate(92 206)">
            <path d="M-2 0C-16 -6 -24 -16 -22 -26C-20 -36 -12 -42 -4 -42C4 -42 10 -36 12 -26C14 -16 10 -6 -2 0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M-18 -16C-10 -12 2 -12 8 -16" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"></path>
            <path d="M-6 -42C-8 -50 -6 -56 -2 -58L4 -56C6 -50 4 -44 2 -42Z" fill="#2b2118"></path>
            <circle cx="0" cy="-64" r="5.4" fill="#2b2118"></circle>
            <path d="M-4 -68C-4 -72 4 -72 6 -68C4 -70 -2 -70 -4 -68Z" fill="#2b2118"></path>
            <path d="M2 -56C10 -60 16 -68 16 -76" fill="none" stroke="#2b2118" stroke-width="3.6" stroke-linecap="round"></path>
            <path d="M-4 -54C-14 -56 -20 -62 -22 -70" fill="none" stroke="#2b2118" stroke-width="3.6" stroke-linecap="round"></path>
            <path d="M16 -76C20 -80 24 -80 26 -77C23 -74 19 -74 16 -76Z" fill="#d8b657" stroke="#2b2118" stroke-width="1"></path>
          </g>
          <path d="M16 214H304" stroke="#2b2118" stroke-width="2"></path>
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
          <path d="M152 172C156 160 162 152 168 147C174 152 180 160 184 172C174 178 162 178 152 172Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M160 151C164 147 172 147 176 151C172 154 169 152 167 154C165 156 163 154 160 151Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.2"></path>
          <path d="M168 147C170 134 176 124 184 118C178 126 176 136 176 145" fill="none" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2"></path>
          <path d="M162 133C168 125 180 121 188 123" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1.8"></path>
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
