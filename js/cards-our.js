/* Raadselkaarten van de vierde reis (eindwoord OUR), in dezelfde atlasstijl als js/cards.js.
   De vakken I, II, III… zijn tegelijk de volgorde waarin de lijn de letter tekent.
   data-num="0" enz. markeert het vak van elk nummer: dat licht op bij de hint van dat nummer. */
(function () {
  let seq = 0;

  function scoped(svg) {
    const P = `ou${++seq}`;
    const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    return ids.reduce((s, id) => s
      .split(`id="${id}"`).join(`id="${P}-${id}"`)
      .split(`#${id})`).join(`#${P}-${id})`)
      .split(`"#${id}"`).join(`"#${P}-${id}"`), svg);
  }

  const grid = (p) => `<pattern id="${p}-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>`;
  const hatch = (p) => `<pattern id="${p}-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>`;
  const frame = (p, h, title, sub) => `
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
  const box = (w, r) => `
          <rect x="7" y="7" width="${w - 14}" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="${w}" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="${w / 2 - 32}" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="${w / 2}" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">${r}</text>`;
  const plus = (x) => `<path d="M${x} 245v20M${x - 10} 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>`;

  const CARDS = {
    /* Plaat I — raadsel A (R) · Oost- en Zuidoost-Azië */
    A: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat I — Raadsel A" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('oA')}${hatch('oA')}</defs>
        ${frame('oA', 540, 'PLAAT I', 'RAADSEL A · V PLAATSEN')}

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="186" width="164" height="30" fill="#dbe6e5"></rect>
          <rect x="16" y="186" width="164" height="30" fill="url(#oA-h)"></rect>
          <g opacity=".14" fill="#2b2118">
            <path d="M44 186L52 214L60 186Z"></path>
            <path d="M136 186L144 214L152 186Z"></path>
            <path d="M68 186L74 204L80 186Z"></path>
            <path d="M116 186L122 204L128 186Z"></path>
          </g>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M64 152L65 128C66 114 69 106 74 96C79 106 82 114 83 128L84 152Z"></path>
            <path d="M112 152L113 128C114 114 117 106 122 96C127 106 130 114 131 128L132 152Z"></path>
            <path d="M39 150L40 124C41 112 45 105 52 98C59 105 63 112 64 124L65 150Z"></path>
            <path d="M131 150L132 124C133 112 137 105 144 98C151 105 155 112 156 124L157 150Z"></path>
            <path d="M80 150L81 112C82 92 88 76 98 56C108 76 114 92 115 112L116 150Z"></path>
            <path d="M32 168H164V148H32Z"></path>
            <path d="M20 186H176V166H20Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".38" stroke-width="1.2">
            <path d="M84 140h28M85 130h26M86 120h24M88 110h20M90 100h16M92 88h12M94 76h9"></path>
            <path d="M42 140h20M43 132h18M45 124h15M47 116h11M49 108h7"></path>
            <path d="M134 140h20M135 132h18M137 124h15M139 116h11M141 108h7"></path>
            <path d="M66 142h12M67 134h11M69 126h9M71 116h6"></path>
            <path d="M118 142h12M119 134h11M120 126h9M121 116h6"></path>
          </g>
          <path d="M98 56V44M52 98V90M144 98V90M74 96V88M122 96V88" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".32" stroke-width="1.1">
            <path d="M32 154H164M20 172H176"></path>
            <path d="M38 168v-12M50 168v-12M62 168v-12M74 168v-12M86 168v-12M98 168v-12M110 168v-12M122 168v-12M134 168v-12M146 168v-12M158 168v-12"></path>
            <path d="M26 186v-12M38 186v-12M50 186v-12M62 186v-12M74 186v-12M122 186v-12M134 186v-12M146 186v-12M158 186v-12M170 186v-12"></path>
          </g>
          <path d="M88 186V172H108V186Z" fill="#2b2118" opacity=".55"></path>
          <path d="M86 186H110V216H86Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M86 196H110M86 206H110" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1"></path>
          <path d="M24 200C40 196 56 202 72 199M124 199C140 202 156 196 172 200" fill="none" stroke="#46697a" stroke-opacity=".55" stroke-width="1.5"></path>
          <path d="M16 216H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M24 172H172" stroke="#2b2118" stroke-opacity=".16" stroke-width="6"></path>
          <g transform="translate(16 84) scale(1.093)">
            <rect width="150" height="75" fill="#9e3b28"></rect>
            <rect x="50" width="50" height="75" fill="#2d4b86"></rect>
            <g fill="#d8b657">
              <path d="M25 6.5C22.6 10.5 21.8 15 22.6 19.5H27.4C28.2 15 27.4 10.5 25 6.5Z"></path>
              <path d="M18.6 10C17 13.5 16.8 16.8 17.8 19.5H20.4C19.4 16.4 18.8 13.2 18.6 10Z"></path>
              <path d="M31.4 10C33 13.5 33.2 16.8 32.2 19.5H29.6C30.6 16.4 31.2 13.2 31.4 10Z"></path>
              <circle cx="25" cy="23.5" r="3"></circle>
              <path d="M21 28C21 31.5 22.8 33.5 25 33.5C27.2 33.5 29 31.5 29 28C28.3 30.3 26.8 31.3 25 31.3C23.2 31.3 21.7 30.3 21 28Z"></path>
              <path d="M16.5 34.5H33.5L25 41.5Z"></path>
              <path d="M16.4 42.5H33.6V45.5H16.4Z"></path>
              <circle cx="25" cy="51.5" r="5"></circle>
              <path d="M16.4 57.5H33.6V60.5H16.4Z"></path>
              <path d="M16.5 67H33.5L25 61.5Z"></path>
              <rect x="11.6" y="34.5" width="2.8" height="32.5"></rect>
              <rect x="35.6" y="34.5" width="2.8" height="32.5"></rect>
            </g>
            <path d="M20 51.5A2.5 2.5 0 0 1 25 51.5A2.5 2.5 0 0 0 30 51.5" fill="none" stroke="#9e3b28" stroke-width="1.6"></path>
            <rect width="150" height="75" fill="none" stroke="#2b2118" stroke-width="1.8"></rect>
          </g>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(98 212) scale(1.14) translate(-98 -212)">
          <path d="M26 212H170V198H26Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M44 198H152V158H44Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.1">
            <path d="M44 172H152M44 186H152M72 172v-14M100 172v-14M126 172v-14M58 186v-14M86 186v-14M114 186v-14M140 186v-14"></path>
          </g>
          <g transform="translate(80 158)">
            <g fill="#a8812f" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
              <path d="M-11 0L-10 -31C-10 -38 -8 -43 -4 -45H4C8 -43 10 -38 10 -31L11 0Z"></path>
              <path d="M-11 -43C-11 -51.5 -6.5 -56 0 -56C6.5 -56 11 -51.5 11 -43Z"></path>
              <circle cx="0" cy="-60" r="5.4"></circle>
              <path d="M-8 -52C-14 -53 -20 -52 -25 -54L-26 -49C-20 -46 -14 -46 -8 -46Z"></path>
            </g>
            <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
              <path d="M0 -44V-4M-6 -40L-8 -6M6 -40L8 -6M-4 -53L0 -46L4 -53"></path>
            </g>
          </g>
          <g transform="translate(120 158)">
            <g fill="#a8812f" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
              <path d="M-11 0L-10 -31C-10 -38 -8 -43 -4 -45H4C8 -43 10 -38 10 -31L11 0Z"></path>
              <path d="M-11 -43C-11 -51.5 -6.5 -56 0 -56C6.5 -56 11 -51.5 11 -43Z"></path>
              <circle cx="0" cy="-60" r="5.4"></circle>
              <path d="M-9 -50C-13 -46 -15 -40 -15 -34L-10 -33C-9 -39 -8 -43 -6 -46Z"></path>
            </g>
            <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
              <path d="M0 -44V-4M-6 -40L-8 -6M6 -40L8 -6M-4 -53L0 -46L4 -53"></path>
            </g>
          </g>
          <g fill="#2b2118" opacity=".6">
            <g transform="translate(54 212)"><circle cx="0" cy="-10" r="2"></circle><path d="M-2.6 -8C-2.4 -5 -2 -2 -1.8 0H1.8C2 -2 2.4 -5 2.6 -8Z"></path></g>
            <g transform="translate(66 212)"><circle cx="0" cy="-10" r="2"></circle><path d="M-2.6 -8C-2.4 -5 -2 -2 -1.8 0H1.8C2 -2 2.4 -5 2.6 -8Z"></path></g>
            <g transform="translate(134 212)"><circle cx="0" cy="-10" r="2"></circle><path d="M-2.6 -8C-2.4 -5 -2 -2 -1.8 0H1.8C2 -2 2.4 -5 2.6 -8Z"></path></g>
            <g transform="translate(146 212)"><circle cx="0" cy="-10" r="2"></circle><path d="M-2.6 -8C-2.4 -5 -2 -2 -1.8 0H1.8C2 -2 2.4 -5 2.6 -8Z"></path></g>
          </g>
          </g>
          <path d="M16 212H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(124 20)">
            <rect width="52" height="34" fill="#9e3b28"></rect>
            <g fill="#d8b657">
              <path d="M0 -5.1L1.24 -1.71L4.85 -1.57L2.0 0.65L2.99 4.12L0 2.11L-2.99 4.12L-2.0 0.65L-4.85 -1.57L-1.24 -1.71Z" transform="translate(8.7 8.5)"></path>
              <path d="M0 -1.7L0.41 -0.57L1.62 -0.53L0.67 0.22L1.0 1.38L0 0.7L-1.0 1.38L-0.67 0.22L-1.62 -0.53L-0.41 -0.57Z" transform="translate(17.3 3.4)"></path>
              <path d="M0 -1.7L0.41 -0.57L1.62 -0.53L0.67 0.22L1.0 1.38L0 0.7L-1.0 1.38L-0.67 0.22L-1.62 -0.53L-0.41 -0.57Z" transform="translate(20.8 6.8)"></path>
              <path d="M0 -1.7L0.41 -0.57L1.62 -0.53L0.67 0.22L1.0 1.38L0 0.7L-1.0 1.38L-0.67 0.22L-1.62 -0.53L-0.41 -0.57Z" transform="translate(20.8 11.9)"></path>
              <path d="M0 -1.7L0.41 -0.57L1.62 -0.53L0.67 0.22L1.0 1.38L0 0.7L-1.0 1.38L-0.67 0.22L-1.62 -0.53L-0.41 -0.57Z" transform="translate(17.3 15.3)"></path>
            </g>
            <rect width="52" height="34" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <g opacity=".55">
            <path d="M16 152L46 106L70 136L100 94L130 134L152 112L180 150V160H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          </g>
          <path d="M16 154C50 146 84 154 118 150C146 147 166 154 180 152" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <g stroke="#3f7a4e" stroke-width="3" fill="none" stroke-linecap="round">
            <path d="M26 200V74M38 200V100M170 200V82M180 200V108"></path>
            <path d="M26 114C19 108 14 106 9 108M26 142C19 136 14 134 9 136M38 128C45 122 52 120 57 122M38 156C45 150 52 148 57 150"></path>
            <path d="M170 122C163 116 158 114 153 116M170 150C163 144 158 142 153 144M180 138C173 132 168 130 163 132"></path>
          </g>
          <g stroke="#3f7a4e" stroke-opacity=".55" stroke-width="1.4" fill="none">
            <path d="M23 90h6M23 114h6M23 138h6M23 162h6M23 186h6"></path>
            <path d="M35 112h6M35 140h6M35 168h6"></path>
            <path d="M167 98h6M167 122h6M167 146h6M167 170h6"></path>
            <path d="M177 120h6M177 152h6M177 184h6"></path>
          </g>
          <g transform="translate(150 198) scale(.46)">
            <g fill="#2b2118">
              <ellipse cx="-18" cy="-14" rx="10" ry="14"></ellipse>
              <ellipse cx="22" cy="-16" rx="10" ry="14"></ellipse>
            </g>
            <ellipse cx="2" cy="-36" rx="28" ry="26" fill="#f6f2ea" stroke="#2b2118" stroke-width="3.6"></ellipse>
            <ellipse cx="2" cy="-74" rx="24" ry="23" fill="#f6f2ea" stroke="#2b2118" stroke-width="3.6"></ellipse>
            <circle cx="-17" cy="-91" r="9" fill="#2b2118"></circle>
            <circle cx="21" cy="-91" r="9" fill="#2b2118"></circle>
            <ellipse cx="-9" cy="-78" rx="8" ry="9" fill="#2b2118" transform="rotate(-18 -9 -78)"></ellipse>
            <ellipse cx="13" cy="-78" rx="8" ry="9" fill="#2b2118" transform="rotate(18 13 -78)"></ellipse>
            <circle cx="-7" cy="-79" r="2.4" fill="#faf4e6"></circle>
            <circle cx="15" cy="-79" r="2.4" fill="#faf4e6"></circle>
            <ellipse cx="2" cy="-64" rx="4.6" ry="3.6" fill="#2b2118"></ellipse>
            <path d="M-4 -58C0 -54 6 -54 9 -58" fill="none" stroke="#2b2118" stroke-width="2.6"></path>
          </g>
          <g transform="translate(84 200) scale(.96)">
            <g fill="#2b2118">
              <ellipse cx="-22" cy="-16" rx="12" ry="16"></ellipse>
              <ellipse cx="26" cy="-18" rx="12" ry="16"></ellipse>
            </g>
            <path d="M-28 -44C-42 -50 -50 -62 -50 -74" fill="none" stroke="#2b2118" stroke-width="11" stroke-linecap="round"></path>
            <ellipse cx="2" cy="-40" rx="34" ry="30" fill="#f6f2ea" stroke="#2b2118" stroke-width="2"></ellipse>
            <ellipse cx="2" cy="-84" rx="28" ry="26" fill="#f6f2ea" stroke="#2b2118" stroke-width="2"></ellipse>
            <circle cx="-22" cy="-104" r="10" fill="#2b2118"></circle>
            <circle cx="26" cy="-104" r="10" fill="#2b2118"></circle>
            <ellipse cx="-11" cy="-88" rx="9" ry="10" fill="#2b2118" transform="rotate(-18 -11 -88)"></ellipse>
            <ellipse cx="15" cy="-88" rx="9" ry="10" fill="#2b2118" transform="rotate(18 15 -88)"></ellipse>
            <circle cx="-9" cy="-89" r="2.6" fill="#faf4e6"></circle>
            <circle cx="17" cy="-89" r="2.6" fill="#faf4e6"></circle>
            <ellipse cx="2" cy="-74" rx="5" ry="4" fill="#2b2118"></ellipse>
            <path d="M-6 -66C-2 -62 6 -62 10 -66" fill="none" stroke="#2b2118" stroke-width="1.6"></path>
            <path d="M-50 -70C-53 -84 -53 -96 -50 -108" fill="none" stroke="#3f7a4e" stroke-width="3.4" stroke-linecap="round"></path>
            <path d="M-52 -96C-60 -100 -66 -106 -67 -113M-51 -88C-43 -93 -37 -99 -36 -106" fill="none" stroke="#3f7a4e" stroke-width="2.6" stroke-linecap="round"></path>
            <path d="M-54 -90h7M-54 -102h7" fill="none" stroke="#3f7a4e" stroke-opacity=".6" stroke-width="1.3"></path>
          </g>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 214C68 206 128 206 168 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6">
            <rect x="24" y="152" width="28" height="32"></rect>
            <rect x="146" y="144" width="30" height="40"></rect>
          </g>
          <g stroke="#2b2118" stroke-opacity=".25" stroke-width="1">
            <path d="M31 152v32M38 152v32M45 152v32M153 144v40M160 144v40M167 144v40"></path>
          </g>
          <path d="M66 184H130V172H66Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M74 184V172M86 184V172M110 184V172M122 184V172" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <g fill="#c7dbe4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M83 184H113L119 170H77Z"></path>
            <path d="M83 170H113L119 156H77Z"></path>
            <path d="M83 156H113L119 142H77Z"></path>
            <path d="M83 142H113L119 128H77Z"></path>
            <path d="M83 128H113L119 114H77Z"></path>
            <path d="M83 114H113L119 100H77Z"></path>
            <path d="M83 100H113L119 86H77Z"></path>
            <path d="M83 86H113L119 72H77Z"></path>
          </g>
          <path d="M86 72H110L106 50H90Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M98 50V26" stroke="#2b2118" stroke-width="2.6"></path>
          <circle cx="98" cy="25" r="2.2" fill="#2b2118"></circle>
          <g stroke="#2b2118" stroke-opacity=".28" stroke-width="1">
            <path d="M91 184V72M105 184V72"></path>
          </g>
          <path d="M16 184H180" stroke="#2b2118" stroke-width="2"></path>
          <rect x="74" y="192" width="48" height="26" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="98" y="211" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="17" letter-spacing="2" fill="#2b2118">101</text>
          ${box(196, 'V')}
        </g>

        ${foot(440, 'I → V')}
      </svg>`),

    /* Plaat II — raadsel B (O) · ring rond de Indische Oceaan, gesloten letter */
    B: (lang) => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 700" role="img" aria-label="Plaat II — Raadsel B" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('oB')}${hatch('oB')}</defs>
        ${frame('oB', 700, 'PLAAT II', 'RAADSEL B · V PLAATSEN')}

                <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 194C44 188 70 190 96 194C122 198 152 194 180 188V194Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5">
            <rect x="26" y="150" width="22" height="44"></rect>
            <rect x="148" y="140" width="24" height="54"></rect>
          </g>
          <g stroke="#2b2118" stroke-opacity=".28" stroke-width="1">
            <path d="M33 194v-44M40 194v-44M26 162h22M26 176h22"></path>
            <path d="M154 194v-54M160 194v-54M166 194v-54M148 154h24M148 168h24M148 182h24"></path>
          </g>
          <path d="M62 194V168H70V150H78V132H84V112H89V92H93V60H95.5V46H100.5V60H103V92H107V116H112V140H118V158H126V176H134V194Z" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M98 46V14" stroke="#2b2118" stroke-width="2.6" stroke-linecap="round"></path>
          <path d="M98 30V14" stroke="#2b2118" stroke-width="1.4"></path>
          <g stroke="#2b2118" stroke-opacity=".26" stroke-width="1">
            <path d="M68 194v-24M76 194v-42M82 194v-60M87 194v-80M92 194v-100M98 194v-146M104 194v-100M109 194v-76M115 194v-52M122 194v-34M130 194v-16"></path>
            <path d="M70 168H134M78 150H126M84 132H118M89 116H112M93 92H107M95.5 60H103"></path>
          </g>
          <path d="M16 194H180" stroke="#2b2118" stroke-width="2"></path>
          <rect x="48" y="202" width="100" height="26" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="98" y="220" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="14" letter-spacing="2" fill="#2b2118">MAX 828 m</text>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

                <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="118" width="182" height="125" fill="#c7dbe4"></rect>
          <rect x="7" y="118" width="182" height="125" fill="url(#oB-h)"></rect>
          <g transform="translate(20 18)">
            <rect width="52" height="34" fill="#9e3b28"></rect>
            <rect x="11" y="7" width="30" height="20" fill="#2f7a6b"></rect>
            <circle cx="23" cy="17" r="7" fill="#f6f2ea"></circle>
            <circle cx="25.8" cy="17" r="5.8" fill="#2f7a6b"></circle>
            <rect width="52" height="34" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <path d="M96 118C102 110 112 106 122 106C132 106 142 110 148 118Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g transform="translate(122 108) scale(.62)" stroke="#2b2118" stroke-width="3" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -10 -2 -20 2 -30"></path>
            <path d="M2 -30C-5 -37 -13 -37 -18 -32M2 -30C9 -37 17 -36 21 -30M2 -30C-3 -39 -2 -46 3 -50M2 -30C9 -33 15 -30 17 -25"></path>
          </g>
          <path d="M160 118C164 112 172 109 180 110V118Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M7 118H189" stroke="#2b2118" stroke-width="1.8"></path>
          <g stroke="#2b2118" stroke-width="2.2" stroke-linecap="round"><path d="M26 220V196M46 220V196M66 220V196"></path></g>
          <path d="M14 196H78V188H14Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g transform="translate(122 196)">
            <g stroke="#2b2118" stroke-width="2.6" stroke-linecap="round"><path d="M-34 26V0M-16 26V-2M16 26V-2M34 26V0"></path></g>
            <path d="M-42 0H42L36 -20H-36Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <path d="M-40 -20H40L0 -50Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
            <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"><path d="M-28 -27H28M-21 -33H21M-13 -40H13"></path></g>
            <rect x="-9" y="-19" width="18" height="19" fill="#5b4a36" stroke="#2b2118" stroke-width="1.3"></rect>
            <path d="M-42 4H42" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          </g>
          <g fill="none" stroke="#46697a" stroke-opacity=".45" stroke-width="1.4">
            <path d="M20 150C44 144 68 152 92 148M110 160C132 156 156 162 176 156M16 232C56 224 120 224 176 232"></path>
          </g>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

                <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="182" height="236" fill="url(#oB-h)"></rect>
          <path d="M18 40C32 32 50 36 60 42C72 49 90 48 102 42C116 35 136 36 148 44" fill="none" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1.6"></path>
          <path d="M104 74C110 66 122 62 134 64C144 66 150 70 154 76C140 80 116 80 104 74Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <g transform="translate(130 64) scale(.42)" stroke="#2b2118" stroke-width="3.4" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -12 -2 -24 2 -36"></path>
            <path d="M2 -36C-6 -44 -14 -44 -19 -38M2 -36C10 -44 18 -42 22 -36M2 -36C-4 -46 -2 -54 4 -58"></path>
          </g>
          <path d="M30 84C36 78 46 76 54 78C60 79 64 82 66 86C56 89 38 89 30 84Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".7" stroke-width="1.3" stroke-linejoin="round"></path>
          <ellipse cx="98" cy="178" rx="84" ry="56" fill="#c7dbe4" opacity=".7"></ellipse>
          <path d="M22 178C22 154 42 132 70 126C88 122 112 123 130 130C156 140 174 158 174 178C174 202 146 224 112 227C86 229 58 223 42 212C29 203 22 191 22 178Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M78 142C92 134 118 134 136 142C148 147 152 154 148 160C138 168 108 170 90 164C76 159 70 148 78 142Z" fill="#3f7a4e" opacity=".38"></path>
          <path d="M84 140C92 136 104 134 116 135M96 166C108 167 124 165 136 160" fill="none" stroke="#3f7a4e" stroke-opacity=".5" stroke-width="1.4"></path>
          <g stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round">
            <path d="M22 168C19 152 28 136 46 131C62 127 80 136 85 150C89 163 79 173 60 175C42 177 25 176 22 168Z" fill="#e3d2ae"></path>
            <path d="M46 131C62 127 80 136 85 150C89 163 79 173 60 175C52 176 45 176 39 176C58 170 70 158 66 145C63 137 55 132 46 131Z" fill="#5b4a36" opacity=".26" stroke="none"></path>
            <path d="M82 154C79 143 87 131 99 129C110 127 120 134 121 145C122 155 113 161 101 161C91 161 84 160 82 154Z" fill="#e3d2ae"></path>
            <path d="M99 129C110 127 120 134 121 145C122 155 113 161 101 161C97 161 93 161 90 161C103 157 110 148 106 139C104 133 102 130 99 129Z" fill="#5b4a36" opacity=".26" stroke="none"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1.2">
            <path d="M30 160C31 148 38 139 48 136M88 148C89 141 94 135 100 133"></path>
          </g>
          <g fill="#2b2118" opacity=".1">
            <ellipse cx="54" cy="174" rx="32" ry="5"></ellipse>
            <ellipse cx="102" cy="160" rx="19" ry="4"></ellipse>
          </g>
          <g transform="translate(152 186) scale(.82)" stroke="#2b2118" stroke-width="3.4" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -14 -2 -30 2 -44"></path>
            <path d="M2 -44C-6 -53 -16 -53 -21 -46M2 -44C10 -53 20 -51 24 -44M2 -44C-4 -55 -2 -64 4 -68M2 -44C10 -48 18 -44 20 -38"></path>
          </g>
          <g transform="translate(172 202) scale(.66)" stroke="#2b2118" stroke-width="3.6" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -14 -2 -30 2 -44"></path>
            <path d="M2 -44C-6 -53 -16 -53 -21 -46M2 -44C10 -53 20 -51 24 -44M2 -44C-4 -55 -2 -64 4 -68"></path>
          </g>
          <g transform="translate(40 206)" fill="#2b2118" opacity=".85">
            <circle cx="0" cy="-42" r="5.2"></circle>
            <path d="M-5.2 -36C-5.2 -27 -4.3 -20 -3.4 -16H3.4C4.3 -20 5.2 -27 5.2 -36Z"></path>
            <path d="M-3 -16L-4.1 0H-1.3L-0.5 -16Z"></path>
            <path d="M3 -16L4.1 0H1.3L0.5 -16Z"></path>
            <path d="M5.2 -33C8.6 -29 10.5 -25 10.5 -20" fill="none" stroke="#2b2118" stroke-width="2.3" stroke-linecap="round"></path>
            <path d="M-5.2 -33C-8.6 -29 -9.6 -25 -9.6 -20" fill="none" stroke="#2b2118" stroke-width="2.3" stroke-linecap="round"></path>
          </g>
          <g transform="translate(118 212) scale(-1.04 1.04)">
            <path d="M-34 0C-34 -19 -22 -30 0 -30C22 -30 34 -19 34 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
            <g fill="none" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.3">
              <path d="M-21 -23C-15 -27 -7 -29 0 -29C7 -29 15 -27 21 -23"></path>
              <path d="M-11 -28C-12 -22 -12 -12 -11 -2M11 -28C12 -22 12 -12 11 -2M-24 -13C-16 -14 -8 -14 0 -14C8 -14 16 -14 24 -13"></path>
            </g>
            <path d="M34 -12C46 -14 54 -21 54 -29C54 -35 48 -38 42 -35C38 -33 36 -27 36 -21Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <circle cx="47" cy="-29" r="1.8" fill="#faf4e6"></circle>
            <g stroke="#5b4a36" stroke-width="8" stroke-linecap="round"><path d="M-22 0V6M18 0V6"></path></g>
          </g>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".75" stroke-width="1.6">
            <path d="M12 194C20 202 24 212 24 222M184 188C176 198 172 210 172 220M62 234C78 240 124 240 142 234"></path>
          </g>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

                <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M8 192C22 178 38 172 52 174C64 176 72 182 78 192Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M16 192C32 166 52 128 74 108C84 99 102 99 112 108C128 128 142 166 156 192Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M61 120C69 107 77 100 93 100C109 100 117 107 125 120C113 126 99 121 90 125C80 129 69 126 61 120Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3">
            <path d="M34 162C52 146 70 136 86 132M98 134C112 142 126 160 138 178"></path>
          </g>
          <path d="M142 192C146 174 152 160 160 152C163 157 166 154 168 159C172 169 178 181 184 192Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M152 176C156 168 160 162 164 158" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2"></path>
          <g stroke="#2b2118" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M132 192V162"></path>
            <path d="M132 166C124 159 118 157 112 158M132 162C140 155 148 153 156 155"></path>
          </g>
          <path d="M106 158C124 147 154 146 168 154C152 158 136 156 124 158C116 160 110 160 106 158Z" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g transform="translate(46 192) scale(.76)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="5" stroke-linecap="round"><path d="M-14 -2V-30M-4 0V-30M14 0V-30M22 -2V-30"></path></g>
            <path d="M-20 -34C-20 -44 -14 -50 -2 -50H18C28 -50 32 -44 32 -34V-28C32 -24 29 -23 25 -23H-14C-18 -23 -20 -25 -20 -29Z"></path>
            <path d="M-16 -46C-20 -62 -22 -80 -21 -93" fill="none" stroke="#2b2118" stroke-width="9" stroke-linecap="round"></path>
            <ellipse cx="-24" cy="-98" rx="9" ry="5.5" transform="rotate(-24 -24 -98)"></ellipse>
            <path d="M-31 -101C-36 -103 -40 -102 -41 -99C-38 -97 -34 -97 -31 -98Z"></path>
            <path d="M-27 -104V-111M-19 -102V-109" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
            <path d="M32 -32C38 -30 42 -22 40 -14C39 -10 36 -9 35 -12C37 -18 37 -26 31 -28Z"></path>
            <circle cx="-25" cy="-100" r="1.5" fill="#faf4e6"></circle>
          </g>
          <path d="M16 192H180" stroke="#2b2118" stroke-width="2"></path>
          <rect x="44" y="200" width="108" height="26" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
          <text x="98" y="218" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="14" letter-spacing="2" fill="#2b2118">MAX 5895 m</text>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

                <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4">
            <path d="M28 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M46 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M64 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M82 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M100 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M118 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M136 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
            <path d="M154 150v-16c0-4.5 3.6-8 8-8s8 3.5 8 8v16Z"></path>
          </g>
          <path d="M22 150H178" stroke="#2b2118" stroke-width="1.6"></path>
          <g transform="translate(30 62)">
            <rect x="-6" y="34" width="12" height="54" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
            <rect x="-9" y="28" width="18" height="7" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></rect>
            <rect x="-4" y="12" width="8" height="16" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></rect>
            <path d="M-6 12C-6 6 0 2 0 -3C0 2 6 6 6 12Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <g transform="translate(166 62)">
            <rect x="-6" y="34" width="12" height="54" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
            <rect x="-9" y="28" width="18" height="7" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></rect>
            <rect x="-4" y="12" width="8" height="16" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></rect>
            <path d="M-6 12C-6 6 0 2 0 -3C0 2 6 6 6 12Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <ellipse cx="98" cy="208" rx="82" ry="28" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6"></ellipse>
          <ellipse cx="98" cy="208" rx="66" ry="21" fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.1"></ellipse>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9">
            <g transform="translate(161.8 213.4)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(144.7 222.8)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(115.1 228.3)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(80.9 228.3)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(51.3 222.8)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(34.2 213.4)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(34.2 202.6)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(51.3 193.2)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(80.9 187.7)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(115.1 187.7)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(144.7 193.2)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(161.8 202.6)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(142.0 208.0)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(129.1 217.9)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(98.0 222.0)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(66.9 217.9)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(54.0 208.0)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(66.9 198.1)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(98.0 194.0)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
            <g transform="translate(129.1 198.1)"><circle cy="-7.4" r="2.2"></circle><path d="M-2.7 -5.4C-2.4 -2.6 -2.1 0 -2.1 0H2.1C2.1 0 2.4 -2.6 2.7 -5.4Z"></path></g>
          </g>
          <g transform="translate(98 178) scale(.86)">
            <polygon points="-26,-16 0,-28 26,-16 0,-4" fill="#3a2f24" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></polygon>
            <polygon points="-26,-16 0,-4 0,36 -26,24" fill="#2b2118"></polygon>
            <polygon points="26,-16 0,-4 0,36 26,24" fill="#17120d"></polygon>
            <polygon points="-26,0 0,12 0,21 -26,9" fill="#d8b657"></polygon>
            <polygon points="26,0 0,12 0,21 26,9" fill="#b8942f"></polygon>
          </g>
          ${box(196, 'V')}
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

        ${foot(600, 'GESLOTEN LETTER')}
      </svg>`),

    /* Plaat III — raadsel C (U) · Europa */
    C: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat III — Raadsel C" xmlns="http://www.w3.org/2000/svg">
        <defs>${grid('oC')}${hatch('oC')}</defs>
        ${frame('oC', 540, 'PLAAT III', 'RAADSEL C · V PLAATSEN')}
        <g>
          <rect x="250" y="44" width="54" height="34" fill="#2d4b86" stroke="#2b2118" stroke-width="1.4"></rect>
          <g fill="#d8b657">
            <circle cx="277" cy="50" r="1.8"></circle><circle cx="282.5" cy="51.5" r="1.8"></circle><circle cx="286.5" cy="55.5" r="1.8"></circle>
            <circle cx="288" cy="61" r="1.8"></circle><circle cx="286.5" cy="66.5" r="1.8"></circle><circle cx="282.5" cy="70.5" r="1.8"></circle>
            <circle cx="277" cy="72" r="1.8"></circle><circle cx="271.5" cy="70.5" r="1.8"></circle><circle cx="267.5" cy="66.5" r="1.8"></circle>
            <circle cx="266" cy="61" r="1.8"></circle><circle cx="267.5" cy="55.5" r="1.8"></circle><circle cx="271.5" cy="51.5" r="1.8"></circle>
          </g>
        </g>

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M74 178C84 158 94 142 104 134C114 142 124 158 134 178Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M94 148C99 141 109 141 114 148C110 152 105 149 102 151C99 153 97 151 94 148Z" fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".4" stroke-width="1"></path>
          <path d="M16 44L38 34L54 68L68 58L84 104L96 142L100 178H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M180 60L160 50L146 84L132 74L118 118L108 152L106 178H180Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M16 44L38 34L47 52C36 55 26 52 16 57Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <path d="M180 60L160 50L152 68C162 71 172 68 180 72Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <g fill="none" stroke="#2b2118" stroke-opacity=".22" stroke-width="1.2">
            <path d="M28 66C34 98 38 140 40 176M44 92C48 126 52 154 54 176M76 120C80 146 82 162 84 176"></path>
            <path d="M168 80C164 110 160 146 158 176M146 98C142 130 138 156 136 176M122 132C120 152 118 166 118 176"></path>
          </g>
          <path d="M58 64C56 94 56 132 58 178H68C68 132 68 94 66 64Z" fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.1"></path>
          <path d="M60 78V170M64 86V166" fill="none" stroke="#2b2118" stroke-opacity=".18" stroke-width="1"></path>
          <ellipse cx="63" cy="179" rx="13" ry="4.5" fill="#f6f2ea" opacity=".85"></ellipse>
          <rect x="16" y="178" width="164" height="40" fill="#2d4b86" opacity=".4"></rect>
          <rect x="16" y="178" width="164" height="40" fill="url(#oC-h)"></rect>
          <path d="M16 178H180" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.5">
            <path d="M22 198C44 192 66 200 88 195M108 208C130 202 154 210 174 204"></path>
          </g>
          <g transform="translate(124 192)">
            <path d="M-20 0H20L14 9H-14Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-4 0V-18H10L-4 -9" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-24 4C-30 6 -34 8 -38 12" fill="none" stroke="#f6f2ea" stroke-opacity=".7" stroke-width="1.4"></path>
          </g>
          <path d="M16 218H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g stroke="#46697a" stroke-opacity=".3" stroke-width="1.6" fill="none">
            <path d="M22 60C34 52 48 58 54 64"></path>
            <path d="M140 46C152 38 166 44 172 50"></path>
          </g>
          <g stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2">
            <path d="M94 56L102 94M102 56L94 94"></path>
            <path d="M88 100L108 142M108 100L88 142"></path>
            <path d="M78 150L118 196M118 150L78 196"></path>
            <path d="M84 118H112M70 172H126"></path>
          </g>
          <g stroke="#2b2118" fill="none" stroke-width="2.4" stroke-linejoin="round">
            <path d="M98 30V48"></path>
            <path d="M92 48H104"></path>
            <path d="M94 48L88 98H108L102 48Z"></path>
            <path d="M88 98L78 148H118L108 98Z"></path>
            <path d="M78 148L58 200H138L118 148Z"></path>
          </g>
          <path d="M72 200C78 176 118 176 124 200Z" fill="#faf4e6" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 214C76 206 120 206 162 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M85.0 124.0 L93.0 30.0 L103.0 30.0 L111.0 124.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M86.9 110.6 H109.1" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M88.1 97.1 H107.9" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M89.2 83.7 H106.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M90.4 70.3 H105.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M91.5 56.9 H104.5" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M92.7 43.4 H103.3" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M93.0 110.8 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M103.0 110.8 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M93.7 92.0 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M102.3 92.0 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M94.4 73.2 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M101.6 73.2 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M95.0 56.3 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M101.0 56.3 v-5.2" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M89.0 65.7 H107.0" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M91.8 30.0 L98.0 19.0 L104.2 30.0 Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="98.0" cy="16.0" r="2.4" fill="#2f7a6b" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M98 16V6M93 11H103" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
          <path d="M31.0 126.0 L36.6 84.0 L43.4 84.0 L49.0 126.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M32.6 120.0 H47.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M33.4 114.0 H46.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M34.2 108.0 H45.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M35.0 102.0 H45.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M35.8 96.0 H44.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M36.6 90.0 H43.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M36.5 120.1 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M43.5 120.1 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M37.0 111.7 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M43.0 111.7 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M37.5 103.3 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M42.5 103.3 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M37.9 95.8 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M42.1 95.8 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M33.5 100.0 H46.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M35.4 84.0 L40.0 73.0 L44.6 84.0 Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="40.0" cy="70.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M53.0 124.0 L58.6 58.0 L65.4 58.0 L71.0 124.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M54.6 114.6 H69.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M55.4 105.1 H68.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M56.2 95.7 H67.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M57.0 86.3 H67.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M57.8 76.9 H66.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M58.6 67.4 H65.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M58.5 114.8 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M65.5 114.8 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M59.0 101.6 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M65.0 101.6 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M59.5 88.4 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M64.5 88.4 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M59.9 76.5 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M64.1 76.5 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M55.5 83.1 H68.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M57.4 58.0 L62.0 47.0 L66.6 58.0 Z" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="62.0" cy="44.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M75.0 122.0 L80.6 44.0 L87.4 44.0 L93.0 122.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M76.6 110.9 H91.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M77.4 99.7 H90.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M78.2 88.6 H89.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M79.0 77.4 H89.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M79.8 66.3 H88.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M80.6 55.1 H87.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M80.5 111.1 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M87.5 111.1 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M81.0 95.5 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M87.0 95.5 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M81.5 79.9 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M86.5 79.9 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M81.9 65.8 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M86.1 65.8 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M77.5 73.6 H90.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M79.4 44.0 L84.0 33.0 L88.6 44.0 Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="84.0" cy="30.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M103.0 122.0 L108.6 44.0 L115.4 44.0 L121.0 122.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M104.6 110.9 H119.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M105.4 99.7 H118.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M106.2 88.6 H117.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M107.0 77.4 H117.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M107.8 66.3 H116.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M108.6 55.1 H115.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M108.5 111.1 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M115.5 111.1 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M109.0 95.5 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M115.0 95.5 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M109.5 79.9 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M114.5 79.9 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M109.9 65.8 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M114.1 65.8 v-4.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M105.5 73.6 H118.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M107.4 44.0 L112.0 33.0 L116.6 44.0 Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="112.0" cy="30.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M125.0 124.0 L130.6 58.0 L137.4 58.0 L143.0 124.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M126.6 114.6 H141.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M127.4 105.1 H140.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M128.2 95.7 H139.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M129.0 86.3 H139.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M129.8 76.9 H138.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M130.6 67.4 H137.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M130.5 114.8 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M137.5 114.8 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M131.0 101.6 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M137.0 101.6 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M131.5 88.4 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M136.5 88.4 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M131.9 76.5 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M136.1 76.5 v-3.6" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M127.5 83.1 H140.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M129.4 58.0 L134.0 47.0 L138.6 58.0 Z" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="134.0" cy="44.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M147.0 126.0 L152.6 84.0 L159.4 84.0 L165.0 126.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M148.6 120.0 H163.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M149.4 114.0 H162.6" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M150.2 108.0 H161.8" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M151.0 102.0 H161.0" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M151.8 96.0 H160.2" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M152.6 90.0 H159.4" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <path d="M152.5 120.1 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M159.5 120.1 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M153.0 111.7 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M159.0 111.7 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M153.5 103.3 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M158.5 103.3 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M153.9 95.8 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M158.1 95.8 v-2.3" stroke="#2b2118" stroke-opacity=".5" stroke-width="2.2" stroke-linecap="round"></path>
          <path d="M149.5 100.0 H162.5" stroke="#2b2118" stroke-opacity=".45" stroke-width="2.4"></path>
          <path d="M151.4 84.0 L156.0 73.0 L160.6 84.0 Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          <circle cx="156.0" cy="70.0" r="2.4" fill="#9e3b28" stroke="#2b2118" stroke-width="1"></circle>
          <path d="M28 200V132C28 126 58 120 98 120C138 120 168 126 168 132V200Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M28 136C58 130 138 130 168 136" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></path>
          <g fill="#2b2118" opacity=".3">
            <circle cx="40" cy="127" r="1.7"></circle><circle cx="52" cy="125" r="1.7"></circle><circle cx="64" cy="124" r="1.7"></circle>
            <circle cx="76" cy="123" r="1.7"></circle><circle cx="120" cy="123" r="1.7"></circle><circle cx="132" cy="124" r="1.7"></circle>
            <circle cx="144" cy="125" r="1.7"></circle><circle cx="156" cy="127" r="1.7"></circle>
          </g>
          <circle cx="98" cy="150" r="12" fill="#faf4e6" stroke="#2b2118" stroke-width="1.6"></circle>
          <g stroke="#2b2118" stroke-opacity=".45" stroke-width="1"><path d="M98 138v24M86 150h24M89.5 141.5l17 17M106.5 141.5l-17 17"></path></g>
          <path d="M98 133L104 139H92Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.1" stroke-linejoin="round"></path>
          <path d="M84 200V180C84 170 90 162 98 156C106 162 112 170 112 180V200Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M98 200V166" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.2"></path>
          <path d="M52 200V182C52 174 56 168 61 164C66 168 70 174 70 182V200Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M126 200V182C126 174 130 168 135 164C140 168 144 174 144 182V200Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M42 200v-62M78 200v-40M118 200v-40M154 200v-62M34 168h14M148 168h14"></path>
          </g>
          <g fill="#2b2118" opacity=".22">
            <circle cx="42" cy="152" r="2"></circle><circle cx="42" cy="162" r="2"></circle>
            <circle cx="154" cy="152" r="2"></circle><circle cx="154" cy="162" r="2"></circle>
            <circle cx="78" cy="176" r="1.8"></circle><circle cx="118" cy="176" r="1.8"></circle>
          </g>
          <g stroke="#2b2118" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M178 200V34"></path>
            <path d="M178 42H146M178 54H164M152 42V54"></path>
            <path d="M169 54V74"></path>
          </g>
          <path d="M162 74H176V88H162Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></path>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 214C76 206 120 206 162 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(98 196) scale(1.04) translate(-98 -196)">
          <path d="M20.0 184.0 L23.0 187.0 L26.0 188.2 L29.0 189.1 L32.0 189.9 L35.0 190.5 L38.0 191.0 L41.0 191.5 L44.0 191.9 L47.0 192.3 L50.0 192.7 L53.0 193.0 L56.0 193.3 L59.0 193.5 L62.0 193.8 L65.0 194.0 L68.0 194.2 L71.0 194.3 L74.0 194.5 L77.0 194.6 L80.0 194.7 L83.0 194.8 L86.0 194.9 L89.0 194.9 L92.0 195.0 L95.0 195.0 L98.0 195.0 L101.0 195.0 L104.0 195.0 L107.0 194.9 L110.0 194.9 L113.0 194.8 L116.0 194.7 L119.0 194.6 L122.0 194.5 L125.0 194.3 L128.0 194.2 L131.0 194.0 L134.0 193.8 L137.0 193.5 L140.0 193.3 L143.0 193.0 L146.0 192.7 L149.0 192.3 L152.0 191.9 L155.0 191.5 L158.0 191.0 L161.0 190.5 L164.0 189.9 L167.0 189.1 L170.0 188.2 L173.0 187.0 L176.0 184.0 L176.0 188.0 L176.0 188.0 L173.0 191.0 L170.0 192.2 L167.0 193.1 L164.0 193.9 L161.0 194.5 L158.0 195.0 L155.0 195.5 L152.0 195.9 L149.0 196.3 L146.0 196.7 L143.0 197.0 L140.0 197.3 L137.0 197.5 L134.0 197.8 L131.0 198.0 L128.0 198.2 L125.0 198.3 L122.0 198.5 L119.0 198.6 L116.0 198.7 L113.0 198.8 L110.0 198.9 L107.0 198.9 L104.0 199.0 L101.0 199.0 L98.0 199.0 L95.0 199.0 L92.0 199.0 L89.0 198.9 L86.0 198.9 L83.0 198.8 L80.0 198.7 L77.0 198.6 L74.0 198.5 L71.0 198.3 L68.0 198.2 L65.0 198.0 L62.0 197.8 L59.0 197.5 L56.0 197.3 L53.0 197.0 L50.0 196.7 L47.0 196.3 L44.0 195.9 L41.0 195.5 L38.0 195.0 L35.0 194.5 L32.0 193.9 L29.0 193.1 L26.0 192.2 L23.0 191.0 L20.0 188.0 Z" fill="#e6d9be" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M20 184.0 L20 104.0 A78 9.0 0 0 0 128.0 95.7 L132.0 116.5 L137.0 108.9 L143.0 126.5 L149.0 121.0 L154.0 130.6 L163.0 128.2 L176.0 131.2 L176 184.0 A78 11.0 0 0 1 20 184.0 Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M20 104.0 L24 101.2 L24 187.5 L20 184.0Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
          <g fill="#5b4a36" opacity=".34" stroke="#2b2118" stroke-opacity=".3" stroke-width=".7">
            <path d="M18.8 140.4 V122.6 A2.1 2.1 0 0 1 23.1 122.6 V140.4 Z"></path>
            <path d="M18.8 163.7 V145.9 A2.1 2.1 0 0 1 23.1 145.9 V163.7 Z"></path>
            <path d="M18.8 184.5 V169.1 A2.1 2.1 0 0 1 23.1 169.1 V184.5 Z"></path>
            <path d="M23.8 140.4 V123.8 A4.7 4.7 0 0 1 33.2 123.8 V140.4 Z"></path>
            <path d="M23.8 165.4 V148.8 A4.7 4.7 0 0 1 33.2 148.8 V165.4 Z"></path>
            <path d="M23.8 187.7 V173.7 A4.7 4.7 0 0 1 33.2 173.7 V187.7 Z"></path>
            <path d="M35.5 140.5 V125.3 A7.4 7.4 0 0 1 50.2 125.3 V140.5 Z"></path>
            <path d="M35.5 166.8 V151.6 A7.4 7.4 0 0 1 50.2 151.6 V166.8 Z"></path>
            <path d="M35.5 190.4 V178.0 A7.4 7.4 0 0 1 50.2 178.0 V190.4 Z"></path>
            <path d="M53.3 140.5 V126.3 A9.3 9.3 0 0 1 71.9 126.3 V140.5 Z"></path>
            <path d="M53.3 167.9 V153.7 A9.3 9.3 0 0 1 71.9 153.7 V167.9 Z"></path>
            <path d="M53.3 192.3 V181.1 A9.3 9.3 0 0 1 71.9 181.1 V192.3 Z"></path>
            <path d="M75.5 140.5 V126.9 A10.3 10.3 0 0 1 96.1 126.9 V140.5 Z"></path>
            <path d="M75.5 168.4 V154.8 A10.3 10.3 0 0 1 96.1 154.8 V168.4 Z"></path>
            <path d="M75.5 193.4 V182.7 A10.3 10.3 0 0 1 96.1 182.7 V193.4 Z"></path>
            <path d="M99.9 140.5 V126.9 A10.3 10.3 0 0 1 120.5 126.9 V140.5 Z"></path>
            <path d="M99.9 168.4 V154.8 A10.3 10.3 0 0 1 120.5 154.8 V168.4 Z"></path>
            <path d="M99.9 193.4 V182.7 A10.3 10.3 0 0 1 120.5 182.7 V193.4 Z"></path>
            <path d="M124.1 167.9 V153.7 A9.3 9.3 0 0 1 142.7 153.7 V167.9 Z"></path>
            <path d="M124.1 192.3 V181.1 A9.3 9.3 0 0 1 142.7 181.1 V192.3 Z"></path>
            <path d="M145.8 166.8 V151.6 A7.4 7.4 0 0 1 160.5 151.6 V166.8 Z"></path>
            <path d="M145.8 190.4 V178.0 A7.4 7.4 0 0 1 160.5 178.0 V190.4 Z"></path>
            <path d="M162.8 165.4 V148.8 A4.7 4.7 0 0 1 172.2 148.8 V165.4 Z"></path>
            <path d="M162.8 187.7 V173.7 A4.7 4.7 0 0 1 172.2 173.7 V187.7 Z"></path>
            <path d="M172.9 163.7 V145.9 A2.1 2.1 0 0 1 177.2 145.9 V163.7 Z"></path>
            <path d="M172.9 184.5 V169.1 A2.1 2.1 0 0 1 177.2 169.1 V184.5 Z"></path>
          </g>
          <g fill="#2b2118" opacity=".74">
            <path d="M19.5 140.4 V122.0 A1.5 1.5 0 0 1 22.5 122.0 V140.4 Z"></path>
            <path d="M19.5 163.7 V145.2 A1.5 1.5 0 0 1 22.5 145.2 V163.7 Z"></path>
            <path d="M19.5 184.5 V168.5 A1.5 1.5 0 0 1 22.5 168.5 V184.5 Z"></path>
            <path d="M25.1 140.4 V122.4 A3.4 3.4 0 0 1 31.9 122.4 V140.4 Z"></path>
            <path d="M25.1 165.4 V147.4 A3.4 3.4 0 0 1 31.9 147.4 V165.4 Z"></path>
            <path d="M25.1 187.7 V172.3 A3.4 3.4 0 0 1 31.9 172.3 V187.7 Z"></path>
            <path d="M37.6 140.5 V123.1 A5.2 5.2 0 0 1 48.1 123.1 V140.5 Z"></path>
            <path d="M37.6 166.8 V149.5 A5.2 5.2 0 0 1 48.1 149.5 V166.8 Z"></path>
            <path d="M37.6 190.4 V175.8 A5.2 5.2 0 0 1 48.1 175.8 V190.4 Z"></path>
            <path d="M56.0 140.5 V123.6 A6.6 6.6 0 0 1 69.2 123.6 V140.5 Z"></path>
            <path d="M56.0 167.9 V151.0 A6.6 6.6 0 0 1 69.2 151.0 V167.9 Z"></path>
            <path d="M56.0 192.3 V178.4 A6.6 6.6 0 0 1 69.2 178.4 V192.3 Z"></path>
            <path d="M78.5 140.5 V123.9 A7.3 7.3 0 0 1 93.1 123.9 V140.5 Z"></path>
            <path d="M78.5 168.4 V151.8 A7.3 7.3 0 0 1 93.1 151.8 V168.4 Z"></path>
            <path d="M78.5 193.4 V179.7 A7.3 7.3 0 0 1 93.1 179.7 V193.4 Z"></path>
            <path d="M102.9 140.5 V123.9 A7.3 7.3 0 0 1 117.5 123.9 V140.5 Z"></path>
            <path d="M102.9 168.4 V151.8 A7.3 7.3 0 0 1 117.5 151.8 V168.4 Z"></path>
            <path d="M102.9 193.4 V179.7 A7.3 7.3 0 0 1 117.5 179.7 V193.4 Z"></path>
            <path d="M126.8 167.9 V151.0 A6.6 6.6 0 0 1 140.0 151.0 V167.9 Z"></path>
            <path d="M126.8 192.3 V178.4 A6.6 6.6 0 0 1 140.0 178.4 V192.3 Z"></path>
            <path d="M147.9 166.8 V149.5 A5.2 5.2 0 0 1 158.4 149.5 V166.8 Z"></path>
            <path d="M147.9 190.4 V175.8 A5.2 5.2 0 0 1 158.4 175.8 V190.4 Z"></path>
            <path d="M164.1 165.4 V147.4 A3.4 3.4 0 0 1 170.9 147.4 V165.4 Z"></path>
            <path d="M164.1 187.7 V172.3 A3.4 3.4 0 0 1 170.9 172.3 V187.7 Z"></path>
            <path d="M173.5 163.7 V145.2 A1.5 1.5 0 0 1 176.5 145.2 V163.7 Z"></path>
            <path d="M173.5 184.5 V168.5 A1.5 1.5 0 0 1 176.5 168.5 V184.5 Z"></path>
          </g>
          <g fill="#ede1c4" stroke="#2b2118" stroke-opacity=".45" stroke-width=".7">
            <path d="M27.3 119.1 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M27.3 144.0 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M27.3 169.0 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M41.6 117.9 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M41.6 144.2 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M41.6 170.6 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M61.4 117.0 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M61.4 144.4 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M61.4 171.8 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M84.6 116.6 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M84.6 144.5 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M84.6 172.4 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M109.0 116.6 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M109.0 144.5 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M109.0 172.4 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M132.2 144.4 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M132.2 171.8 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M152.0 144.2 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M152.0 170.6 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M166.3 144.0 h2.4 v3.4 h-2.4 Z"></path>
            <path d="M166.3 169.0 h2.4 v3.4 h-2.4 Z"></path>
          </g>
          <g fill="#5b4a36" opacity=".45">
            <rect x="20.2" y="108.8" width="1.6" height="5.0" rx=".6"></rect>
            <rect x="27.5" y="106.6" width="2.0" height="5.3" rx=".6"></rect>
            <rect x="41.3" y="104.7" width="3.1" height="5.6" rx=".6"></rect>
            <rect x="60.7" y="103.3" width="3.9" height="5.9" rx=".6"></rect>
            <rect x="83.7" y="102.6" width="4.3" height="6.0" rx=".6"></rect>
            <rect x="108.1" y="102.6" width="4.3" height="6.0" rx=".6"></rect>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".32" stroke-width="1.6" stroke-linecap="round">
            <path d="M20.0 118.0 L23.0 116.5 L26.0 115.9 L29.0 115.4 L32.0 115.1 L35.0 114.8 L38.0 114.5 L41.0 114.2 L44.0 114.0 L47.0 113.8 L50.0 113.7 L53.0 113.5 L56.0 113.4 L59.0 113.2 L62.0 113.1 L65.0 113.0 L68.0 112.9 L71.0 112.8 L74.0 112.8 L77.0 112.7 L80.0 112.6 L83.0 112.6 L86.0 112.6 L89.0 112.5 L92.0 112.5 L95.0 112.5 L98.0 112.5 L101.0 112.5 L104.0 112.5 L107.0 112.5 L110.0 112.6 L113.0 112.6 L116.0 112.6 L119.0 112.7 L122.0 112.8 L125.0 112.8 L128.0 112.9 L137.0 113.2"></path>
            <path d="M20.0 141.2 L23.0 141.3 L26.0 141.3 L29.0 141.3 L32.0 141.4 L35.0 141.4 L38.0 141.4 L41.0 141.4 L44.0 141.4 L47.0 141.4 L50.0 141.4 L53.0 141.4 L56.0 141.5 L59.0 141.5 L62.0 141.5 L65.0 141.5 L68.0 141.5 L71.0 141.5 L74.0 141.5 L77.0 141.5 L80.0 141.5 L83.0 141.5 L86.0 141.5 L89.0 141.5 L92.0 141.5 L95.0 141.5 L98.0 141.5 L101.0 141.5 L104.0 141.5 L107.0 141.5 L110.0 141.5 L113.0 141.5 L116.0 141.5 L119.0 141.5 L122.0 141.5 L125.0 141.5 L128.0 141.5 L131.0 141.5 L134.0 141.5 L137.0 141.5 L140.0 141.5 L143.0 141.4 L146.0 141.4 L149.0 141.4 L152.0 141.4 L155.0 141.4 L158.0 141.4 L161.0 141.4 L164.0 141.4 L167.0 141.3 L170.0 141.3 L173.0 141.3 L176.0 141.2"></path>
            <path d="M20.0 163.6 L23.0 165.2 L26.0 165.9 L29.0 166.4 L32.0 166.7 L35.0 167.1 L38.0 167.4 L41.0 167.6 L44.0 167.9 L47.0 168.1 L50.0 168.3 L53.0 168.4 L56.0 168.6 L59.0 168.7 L62.0 168.8 L65.0 168.9 L68.0 169.0 L71.0 169.1 L74.0 169.2 L77.0 169.3 L80.0 169.3 L83.0 169.4 L86.0 169.4 L89.0 169.5 L92.0 169.5 L95.0 169.5 L98.0 169.5 L101.0 169.5 L104.0 169.5 L107.0 169.5 L110.0 169.4 L113.0 169.4 L116.0 169.3 L119.0 169.3 L122.0 169.2 L125.0 169.1 L128.0 169.0 L131.0 168.9 L134.0 168.8 L137.0 168.7 L140.0 168.6 L143.0 168.4 L146.0 168.3 L149.0 168.1 L152.0 167.9 L155.0 167.6 L158.0 167.4 L161.0 167.1 L164.0 166.7 L167.0 166.4 L170.0 165.9 L173.0 165.2 L176.0 163.6"></path>
            <path d="M20.0 182.8 L23.0 185.7 L26.0 186.9 L29.0 187.8 L32.0 188.5 L35.0 189.1 L38.0 189.6 L41.0 190.1 L44.0 190.5 L47.0 190.9 L50.0 191.2 L53.0 191.5 L56.0 191.8 L59.0 192.1 L62.0 192.3 L65.0 192.5 L68.0 192.7 L71.0 192.8 L74.0 193.0 L77.0 193.1 L80.0 193.2 L83.0 193.3 L86.0 193.4 L89.0 193.4 L92.0 193.5 L95.0 193.5 L98.0 193.5 L101.0 193.5 L104.0 193.5 L107.0 193.4 L110.0 193.4 L113.0 193.3 L116.0 193.2 L119.0 193.1 L122.0 193.0 L125.0 192.8 L128.0 192.7 L131.0 192.5 L134.0 192.3 L137.0 192.1 L140.0 191.8 L143.0 191.5 L146.0 191.2 L149.0 190.9 L152.0 190.5 L155.0 190.1 L158.0 189.6 L161.0 189.1 L164.0 188.5 L167.0 187.8 L170.0 186.9 L173.0 185.7 L176.0 182.8"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".16" stroke-width="1">
            <path d="M34.3 117.1 V188.5"></path>
            <path d="M51.9 116.0 V190.9"></path>
            <path d="M73.9 115.2 V192.5"></path>
            <path d="M98.4 115.0 V193.0"></path>
            <path d="M122.8 115.3 V192.5"></path>
            <path d="M144.8 126.9 V190.9"></path>
            <path d="M162.2 130.4 V188.4"></path>
            <path d="M173.3 132.6 V185.2"></path>
          </g>
          </g>
          <ellipse cx="98" cy="206" rx="90" ry="8" fill="#2b2118" opacity=".07"></ellipse>
          <g fill="#2b2118" opacity=".45">
            <g transform="translate(28 212)"><circle cy="-7.5" r="1.7"></circle><path d="M-2.2 -5.6C-2 -3.2 -1.7 0 -1.7 0H1.7C1.7 0 2 -3.2 2.2 -5.6Z"></path></g>
            <g transform="translate(37 213)"><circle cy="-7.5" r="1.7"></circle><path d="M-2.2 -5.6C-2 -3.2 -1.7 0 -1.7 0H1.7C1.7 0 2 -3.2 2.2 -5.6Z"></path></g>
            <g transform="translate(166 211)"><circle cy="-7.5" r="1.7"></circle><path d="M-2.2 -5.6C-2 -3.2 -1.7 0 -1.7 0H1.7C1.7 0 2 -3.2 2.2 -5.6Z"></path></g>
          </g>
          <path d="M16 216H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(126 16)">
            <rect width="50" height="31" fill="#2d4b86"></rect>
            <rect x="15" width="8" height="31" fill="#d8b657"></rect>
            <rect y="11.5" width="50" height="8" fill="#d8b657"></rect>
            <rect width="50" height="31" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <path d="M150 190V152H176V190Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M156 152V116H170V152Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M154 116H172L163 104Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></path>
          <path d="M157 104L163 66L169 104Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g stroke="#2b2118" stroke-opacity=".55" stroke-width="1.1" fill="none">
            <path d="M158.6 94H167.4M159.8 84H166.2M160.8 75H165.2"></path>
            <path d="M157 104L166.2 84M169 104L159.8 84M158.6 94L165.2 75M167.4 94L160.8 75"></path>
          </g>
          <path d="M163 66V54M159.5 58H166.5" stroke="#2b2118" stroke-width="1.8" stroke-linecap="round"></path>
          <path d="M64 190V134 H82 V190Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M62 134 L73 123 L84 134 Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <rect x="66.3" y="146" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="75.3" y="146" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="66.3" y="162" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="75.3" y="162" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <path d="M82 190V126 H98 V190Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M80 126 L90 115 L100 126 Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <rect x="83.8" y="138" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="91.8" y="138" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="83.8" y="154" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="91.8" y="154" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <path d="M98 190V132 H116 V190Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M96 132 L107 121 L118 132 Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <rect x="100.3" y="144" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="109.3" y="144" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="100.3" y="160" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="109.3" y="160" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <path d="M116 190V124 H132 V190Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M114 124 L124 113 L134 124 Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <rect x="117.8" y="136" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="125.8" y="136" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="117.8" y="152" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="125.8" y="152" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <path d="M132 190V136 H150 V190Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M130 136 L141 125 L152 136 Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <rect x="134.3" y="148" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="143.3" y="148" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="134.3" y="164" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <rect x="143.3" y="164" width="4.5" height="7" fill="#f6f2ea" stroke="#2b2118" stroke-width="0.9"></rect>
          <path d="M26 190V62H58V190Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1"><rect x="32" y="82" width="7" height="11"></rect><rect x="45" y="82" width="7" height="11"></rect><rect x="32" y="110" width="7" height="11"></rect><rect x="45" y="110" width="7" height="11"></rect><rect x="32" y="138" width="7" height="11"></rect><rect x="45" y="138" width="7" height="11"></rect><rect x="32" y="166" width="7" height="11"></rect><rect x="45" y="166" width="7" height="11"></rect></g>
          <path d="M22 62H62V54H22Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.5"></path>
          <path d="M28 54V34H56V54Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <g fill="#5b4a36" opacity=".8">
            <path d="M32 54V42C32 38.5 34 36.5 36 36.5C38 36.5 40 38.5 40 42V54Z"></path>
            <path d="M44 54V42C44 38.5 46 36.5 48 36.5C50 36.5 52 38.5 52 42V54Z"></path>
          </g>
          <path d="M24 34L42 18L60 34Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <path d="M42 18V8" stroke="#2b2118" stroke-width="2"></path>
          <circle cx="42" cy="7" r="2.4" fill="#d8b657" stroke="#2b2118" stroke-width="1"></circle>
          <g fill="#d8b657" stroke="#2b2118" stroke-width="0.9" stroke-linejoin="round">
            <path d="M28 32v-5l2.5 2.5L33 26l2.5 3.5L38 27v5Z"></path>
            <path d="M36 21v-5l2.5 2.5L41 15l2.5 3.5L46 16v5Z"></path>
            <path d="M46 32v-5l2.5 2.5L51 26l2.5 3.5L56 27v5Z"></path>
          </g>
          <rect x="16" y="190" width="164" height="32" fill="#2d4b86" opacity=".4"></rect>
          <rect x="16" y="190" width="164" height="32" fill="url(#oC-h)"></rect>
          <path d="M16 190H180" stroke="#2b2118" stroke-width="2"></path>
          <g fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.4">
            <path d="M22 202C44 197 66 205 88 200M104 214C126 209 150 216 172 211"></path>
          </g>
          <g transform="translate(112 204)">
            <path d="M-17 0H17L12 8H-12Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
            <path d="M-2 0V-13H9L-2 -6" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <path d="M16 222H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'V')}
        </g>

        ${foot(440, 'I → V')}
      </svg>`),
  };

  window.GeoCardsOur = CARDS;
})();
