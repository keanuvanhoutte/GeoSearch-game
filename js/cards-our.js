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
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round">
            <path d="M22 166H174L166 150H30Z"></path>
            <path d="M30 150H166L158 134H38Z"></path>
            <path d="M98 134C90 134 86 128 86 118C86 100 92 78 98 62C104 78 110 100 110 118C110 128 106 134 98 134Z"></path>
            <path d="M54 134C48 134 45 129 45 121C45 106 50 90 54 78C58 90 63 106 63 121C63 129 60 134 54 134Z"></path>
            <path d="M142 134C136 134 133 129 133 121C133 106 138 90 142 78C146 90 151 106 151 121C151 129 148 134 142 134Z"></path>
            <path d="M28 134C23 134 21 130 21 123C21 111 25 98 28 88C31 98 35 111 35 123C35 130 33 134 28 134Z"></path>
            <path d="M168 134C163 134 161 130 161 123C161 111 165 98 168 88C171 98 175 111 175 123C175 130 173 134 168 134Z"></path>
          </g>
          <g stroke="#2b2118" stroke-opacity=".38" stroke-width="1.2" fill="none">
            <path d="M88 124h20M90 112h16M92 100h12M94 88h9"></path>
            <path d="M46 126h16M48 116h12M50 106h8M52 96h5"></path>
            <path d="M134 126h16M136 116h12M138 106h8M140 96h5"></path>
            <path d="M22 126h12M24 117h8M26 108h5"></path>
            <path d="M162 126h12M164 117h8M166 108h5"></path>
          </g>
          <path d="M98 62V50M54 78V70M142 78V70" stroke="#2b2118" stroke-width="2"></path>
          <rect x="16" y="166" width="164" height="46" fill="#dbe6e5"></rect>
          <rect x="16" y="166" width="164" height="46" fill="url(#oA-h)"></rect>
          <path d="M16 166H180" stroke="#2b2118" stroke-width="2"></path>
          <g opacity=".3" fill="#2b2118">
            <path d="M86 166C86 178 90 186 98 186C106 186 110 178 110 166Z"></path>
            <path d="M45 166C45 176 48 182 54 182C60 182 63 176 63 166Z"></path>
            <path d="M133 166C133 176 136 182 142 182C148 182 151 176 151 166Z"></path>
          </g>
          <path d="M24 200C48 194 72 204 96 198C120 192 148 202 172 198" fill="none" stroke="#46697a" stroke-opacity=".6" stroke-width="1.5"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 200C40 168 62 150 86 152C110 154 122 136 146 132C162 129 172 140 180 152V200Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M16 200C44 180 70 172 96 176M104 190C124 176 146 166 166 164" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3"></path>
          <g transform="translate(142 174)">
            <path d="M-26 0C-26 -10 -18 -16 0 -16C18 -16 26 -10 26 0Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M-26 -16C-20 -24 -10 -28 0 -28C10 -28 20 -24 26 -16Z" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <rect x="-6" y="-10" width="12" height="10" fill="#9e3b28" stroke="#2b2118" stroke-width="1.2"></rect>
            <path d="M0 -28V-34" stroke="#2b2118" stroke-width="1.6"></path>
          </g>
          <g transform="translate(70 168)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="5" stroke-linecap="round"><path d="M-18 0V30M-8 2V30M12 2V30M22 0V30"></path></g>
            <path d="M-24 -8C-24 -14 -20 -18 -12 -18H16C24 -18 28 -12 28 -4V2C28 6 26 7 22 7H-18C-22 7 -24 5 -24 1Z"></path>
            <path d="M-18 -18C-18 -26 -14 -30 -8 -30C-2 -30 2 -26 2 -18Z"></path>
            <path d="M2 -18C2 -28 6 -34 13 -34C20 -34 24 -28 24 -18Z"></path>
            <path d="M-24 -6C-32 -10 -38 -18 -38 -26C-38 -32 -32 -35 -27 -31C-23 -28 -22 -22 -23 -16Z"></path>
            <path d="M-38 -26C-45 -29 -49 -26 -48 -21C-44 -19 -40 -21 -37 -24Z"></path>
            <path d="M-28 -31C-30 -38 -28 -44 -23 -45C-21 -40 -22 -34 -24 -30Z"></path>
            <circle cx="-42" cy="-24" r="1.6" fill="#faf4e6"></circle>
          </g>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 214C68 206 128 206 168 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(20 20)">
            <rect width="50" height="32" fill="#f6f2ea"></rect>
            <path d="M25 16a8 8 0 0 1 16 0 8 8 0 0 1-16 0" fill="#2d4b86"></path>
            <path d="M25 16a8 8 0 0 0-16 0 8 8 0 0 0 16 0" fill="#9e3b28"></path>
            <g fill="#2b2118">
              <rect x="4" y="5" width="7" height="1.4"></rect><rect x="4" y="8" width="7" height="1.4"></rect>
              <rect x="39" y="5" width="7" height="1.4"></rect><rect x="39" y="8" width="7" height="1.4"></rect>
              <rect x="4" y="23" width="7" height="1.4"></rect><rect x="4" y="26" width="7" height="1.4"></rect>
              <rect x="39" y="23" width="7" height="1.4"></rect><rect x="39" y="26" width="7" height="1.4"></rect>
            </g>
            <rect width="50" height="32" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <rect x="30" y="140" width="136" height="64" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8"></rect>
          <path d="M78 204V158C78 148 86 142 98 142C110 142 118 148 118 158V204Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <g fill="#9e3b28" stroke="#2b2118" stroke-width="1.4">
            <rect x="42" y="152" width="20" height="26"></rect>
            <rect x="134" y="152" width="20" height="26"></rect>
          </g>
          <path d="M14 140C30 122 60 112 98 112C136 112 166 122 182 140Z" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
          <path d="M26 132C46 120 70 116 98 116C126 116 150 120 170 132" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.4"></path>
          <path d="M40 112C58 100 76 94 98 94C120 94 138 100 156 112Z" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
          <path d="M98 94V84" stroke="#2b2118" stroke-width="2"></path>
          <path d="M16 204H180" stroke="#2b2118" stroke-width="2"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g stroke="#3f7a4e" stroke-width="3" fill="none" stroke-linecap="round">
            <path d="M28 200V80M42 200V100"></path>
            <path d="M28 120C20 114 14 112 8 114M28 148C20 142 14 140 8 142M42 134C50 128 58 126 64 128M42 162C50 156 58 154 64 156"></path>
          </g>
          <g transform="translate(112 200)">
            <g fill="#2b2118">
              <ellipse cx="-22" cy="-16" rx="12" ry="16"></ellipse>
              <ellipse cx="26" cy="-18" rx="12" ry="16"></ellipse>
            </g>
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
            <path d="M-32 -36C-42 -40 -50 -46 -54 -54" fill="none" stroke="#3f7a4e" stroke-width="3" stroke-linecap="round"></path>
            <path d="M-54 -54C-60 -50 -64 -44 -64 -38M-54 -54C-56 -62 -54 -70 -48 -74" fill="none" stroke="#3f7a4e" stroke-width="2.4" stroke-linecap="round"></path>
          </g>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 214C68 206 128 206 168 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#c7dbe4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M80 70H116V56H80Z"></path>
            <path d="M76 88H120L116 70H80Z"></path>
            <path d="M76 106H120L120 88H76Z"></path>
            <path d="M74 124H122L122 106H74Z"></path>
            <path d="M72 142H124L124 124H72Z"></path>
            <path d="M70 160H126L126 142H70Z"></path>
            <path d="M68 178H128L128 160H68Z"></path>
            <path d="M66 196H130L130 178H66Z"></path>
          </g>
          <path d="M98 56V30" stroke="#2b2118" stroke-width="2.6"></path>
          <path d="M98 34L102 22H94Z" fill="#2b2118"></path>
          <g stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1">
            <path d="M88 60v136M108 60v136"></path>
          </g>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6">
            <rect x="26" y="168" width="30" height="28"></rect>
            <rect x="140" y="160" width="30" height="36"></rect>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 210C68 202 128 202 168 210" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
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
          <path d="M16 200C44 186 70 188 96 196C122 204 152 198 180 186V200Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          <g fill="#c7dbe4" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round">
            <path d="M86 200V92H110V200Z"></path>
            <path d="M74 200V120H86V200Z"></path>
            <path d="M110 200V132H122V200Z"></path>
            <path d="M62 200V150H74V200Z"></path>
            <path d="M122 200V162H134V200Z"></path>
          </g>
          <path d="M98 92V38" stroke="#2b2118" stroke-width="3"></path>
          <path d="M98 44L102 26H94Z" fill="#2b2118"></path>
          <g stroke="#2b2118" stroke-opacity=".28" stroke-width="1.1">
            <path d="M92 96v100M104 96v100M78 126v70M116 138v58"></path>
          </g>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="1.5">
            <rect x="26" y="176" width="26" height="24"></rect>
            <rect x="148" y="170" width="26" height="30"></rect>
          </g>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 214C68 206 128 206 168 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'I')}
        </g>
        ${plus(258)}

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="#c7dbe4"></rect>
          <rect x="7" y="7" width="182" height="236" fill="url(#oB-h)"></rect>
          <g fill="none" stroke="#e6f0ef" stroke-width="7">
            <ellipse cx="62" cy="62" rx="34" ry="22"></ellipse>
            <ellipse cx="140" cy="106" rx="30" ry="20"></ellipse>
            <ellipse cx="54" cy="150" rx="26" ry="17"></ellipse>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2">
            <ellipse cx="62" cy="62" rx="34" ry="22"></ellipse>
            <ellipse cx="140" cy="106" rx="30" ry="20"></ellipse>
            <ellipse cx="54" cy="150" rx="26" ry="17"></ellipse>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="1.6" stroke-opacity=".5"></path>
          <g transform="translate(120 196)">
            <g stroke="#2b2118" stroke-width="2.4"><path d="M-30 20V0M-12 20V-2M12 20V-2M30 20V0"></path></g>
            <path d="M-36 0H36L30 -18H-30Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <path d="M-34 -18H34L0 -44Z" fill="#c87a46" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <rect x="-8" y="-14" width="16" height="14" fill="#5b4a36" stroke="#2b2118" stroke-width="1.2"></rect>
          </g>
          <g transform="translate(44 196)" stroke="#2b2118" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -14 -2 -28 2 -42"></path>
            <path d="M2 -42C-6 -50 -15 -50 -20 -44M2 -42C10 -50 19 -48 23 -42M2 -42C-4 -52 -2 -60 4 -64M2 -42C10 -46 17 -42 19 -36"></path>
          </g>
          <path d="M24 226C64 218 124 218 172 226" fill="none" stroke="#46697a" stroke-opacity=".5" stroke-width="1.4"></path>
          ${box(196, 'II')}
        </g>
        ${plus(478)}

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="120" fill="#dbe6e5"></rect>
          <rect x="7" y="7" width="182" height="120" fill="url(#oB-h)"></rect>
          <path d="M7 127H189V243H7Z" fill="#f6f2ea"></path>
          <path d="M7 127H189" stroke="#2b2118" stroke-width="1.8"></path>
          <g fill="#e6d9be" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M28 127C28 104 44 88 66 88C88 88 102 104 102 127Z"></path>
            <path d="M104 127C104 112 116 100 132 100C148 100 160 112 160 127Z"></path>
            <path d="M150 127C150 116 158 108 168 108C178 108 186 116 186 127Z"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.3">
            <path d="M44 122C50 110 58 102 70 98M118 122C122 114 128 108 136 106"></path>
          </g>
          <g transform="translate(70 186)">
            <path d="M-34 0C-34 -18 -22 -28 0 -28C22 -28 34 -18 34 0Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.9" stroke-linejoin="round"></path>
            <path d="M-20 -22C-14 -26 -6 -28 0 -28C6 -28 14 -26 20 -22" fill="none" stroke="#2b2118" stroke-opacity=".4" stroke-width="1.4"></path>
            <path d="M-12 -8V0M0 -6V0M12 -8V0" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.3"></path>
            <path d="M34 -12C46 -14 54 -20 54 -28C54 -34 48 -37 42 -34C38 -32 36 -26 36 -20Z" fill="#5b4a36" stroke="#2b2118" stroke-width="1.7" stroke-linejoin="round"></path>
            <circle cx="47" cy="-28" r="1.8" fill="#faf4e6"></circle>
            <g stroke="#5b4a36" stroke-width="6" stroke-linecap="round"><path d="M-20 0V8M16 0V8"></path></g>
          </g>
          <g transform="translate(156 186)" stroke="#2b2118" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M0 0C-2 -16 -2 -32 2 -48"></path>
            <path d="M2 -48C-6 -56 -16 -56 -21 -50M2 -48C10 -56 20 -54 24 -48M2 -48C-4 -58 -2 -66 4 -70M2 -48C10 -52 18 -48 20 -42"></path>
          </g>
          <path d="M16 210C56 202 116 202 164 210" fill="none" stroke="#2b2118" stroke-opacity=".25" stroke-width="1"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M16 186C34 158 54 120 76 104C88 95 108 95 120 104C142 120 162 158 180 186Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M70 110C84 100 112 100 126 110C118 116 106 112 98 116C90 120 78 116 70 110Z" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          <path d="M40 152C60 140 78 136 96 138" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3"></path>
          <g stroke="#2b2118" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M158 186V148"></path>
            <path d="M158 152C146 144 136 142 128 144M158 148C170 140 180 138 188 140"></path>
          </g>
          <path d="M124 142C142 132 176 130 192 138" fill="#2f7a6b" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
          <g transform="translate(50 186) scale(.82)" fill="#2b2118">
            <g stroke="#2b2118" stroke-width="5" stroke-linecap="round"><path d="M-14 -2V-30M-4 0V-30M14 0V-30M22 -2V-30"></path></g>
            <path d="M-20 -34C-20 -44 -14 -50 -2 -50H18C28 -50 32 -44 32 -34V-28C32 -24 29 -23 25 -23H-14C-18 -23 -20 -25 -20 -29Z"></path>
            <path d="M-16 -46C-20 -62 -22 -80 -21 -93" fill="none" stroke="#2b2118" stroke-width="9" stroke-linecap="round"></path>
            <ellipse cx="-24" cy="-98" rx="9" ry="5.5" transform="rotate(-24 -24 -98)"></ellipse>
            <path d="M-31 -101C-36 -103 -40 -102 -41 -99C-38 -97 -34 -97 -31 -98Z"></path>
            <path d="M-27 -104V-111M-19 -102V-109" stroke="#2b2118" stroke-width="2.4" stroke-linecap="round"></path>
            <path d="M32 -32C38 -30 42 -22 40 -14C39 -10 36 -9 35 -12C37 -18 37 -26 31 -28Z"></path>
            <circle cx="-25" cy="-100" r="1.5" fill="#faf4e6"></circle>
          </g>
          <path d="M16 186H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 202C68 194 128 194 168 202" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4">
            <path d="M24 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M44 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M64 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M84 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M104 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M124 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
            <path d="M144 176v-18c0-5 4-9 9-9s9 4 9 9v18Z"></path>
          </g>
          <g transform="translate(34 84)">
            <rect x="-6" y="34" width="12" height="60" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
            <rect x="-9" y="28" width="18" height="7" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></rect>
            <rect x="-4" y="12" width="8" height="16" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></rect>
            <path d="M-6 12C-6 6 0 2 0 -3C0 2 6 6 6 12Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <g transform="translate(162 84)">
            <rect x="-6" y="34" width="12" height="60" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
            <rect x="-9" y="28" width="18" height="7" fill="#ede1c4" stroke="#2b2118" stroke-width="1.4"></rect>
            <rect x="-4" y="12" width="8" height="16" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.4"></rect>
            <path d="M-6 12C-6 6 0 2 0 -3C0 2 6 6 6 12Z" fill="#d8b657" stroke="#2b2118" stroke-width="1.3" stroke-linejoin="round"></path>
          </g>
          <rect x="16" y="176" width="164" height="40" fill="#ede1c4" stroke="#2b2118" stroke-width="1.6"></rect>
          <g transform="translate(98 136)">
            <polygon points="-28,-18 0,-30 28,-18 0,-6" fill="#3a2f24" stroke="#2b2118" stroke-width="1.4" stroke-linejoin="round"></polygon>
            <polygon points="-28,-18 0,-6 0,44 -28,32" fill="#2b2118"></polygon>
            <polygon points="28,-18 0,-6 0,44 28,32" fill="#17120d"></polygon>
            <polygon points="-28,2 0,14 0,24 -28,12" fill="#d8b657"></polygon>
            <polygon points="28,2 0,14 0,24 28,12" fill="#b8942f"></polygon>
          </g>
          <path d="M16 216H180" stroke="#2b2118" stroke-width="2"></path>
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
          <rect x="16" y="168" width="164" height="50" fill="#2d4b86" opacity=".45"></rect>
          <rect x="16" y="168" width="164" height="50" fill="url(#oC-h)"></rect>
          <path d="M16 168V40L44 56L58 44L76 74L86 66L96 100L104 92V168Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M180 168V54L156 70L142 58L124 92L114 84L106 112V168Z" fill="#e6d9be" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M30 60C40 84 44 116 42 150M150 76C142 100 138 128 140 156" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.3"></path>
          <path d="M60 60C62 86 64 120 62 166" fill="none" stroke="#f6f2ea" stroke-width="4" stroke-linecap="round"></path>
          <path d="M16 168H180" stroke="#2b2118" stroke-width="2"></path>
          <g transform="translate(112 190)">
            <path d="M-22 0H22L16 10H-16Z" fill="#9e3b28" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
            <path d="M0 0V-22M0 -22L14 -4H0" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round"></path>
          </g>
          <path d="M24 208C48 202 72 212 96 206C120 200 148 210 172 206" fill="none" stroke="#f6f2ea" stroke-opacity=".5" stroke-width="1.6"></path>
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
          <g fill="#ede1c4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round">
            <path d="M42 200V96C42 82 50 66 54 58C58 66 66 82 66 96V200Z"></path>
            <path d="M70 200V78C70 62 78 44 83 34C88 44 96 62 96 78V200Z"></path>
            <path d="M100 200V72C100 56 108 38 113 28C118 38 126 56 126 72V200Z"></path>
            <path d="M130 200V92C130 78 138 62 142 54C146 62 154 78 154 92V200Z"></path>
          </g>
          <g stroke="#2b2118" stroke-width="1.8">
            <path d="M54 58V50M50 54h8M83 34V26M79 30h8M113 28V20M109 24h8M142 54V46M138 50h8"></path>
          </g>
          <g fill="#2b2118" opacity=".3">
            <ellipse cx="54" cy="120" rx="3.4" ry="5"></ellipse><ellipse cx="54" cy="150" rx="3.4" ry="5"></ellipse>
            <ellipse cx="83" cy="104" rx="3.4" ry="5"></ellipse><ellipse cx="83" cy="140" rx="3.4" ry="5"></ellipse>
            <ellipse cx="113" cy="98" rx="3.4" ry="5"></ellipse><ellipse cx="113" cy="134" rx="3.4" ry="5"></ellipse>
            <ellipse cx="142" cy="116" rx="3.4" ry="5"></ellipse><ellipse cx="142" cy="148" rx="3.4" ry="5"></ellipse>
          </g>
          <g stroke="#2b2118" stroke-width="2" fill="none">
            <path d="M170 200V44M170 44h-30M170 52h-22M156 44v8"></path>
          </g>
          <path d="M16 200H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 214C76 206 120 206 162 214" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'III')}
        </g>
        ${plus(698)}

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M28 194V96C28 80 60 68 98 68C136 68 168 80 168 96V194Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M28 96C28 112 60 122 98 122C136 122 168 112 168 96" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.4"></path>
          <g fill="#faf4e6" stroke="#2b2118" stroke-width="1.3">
            <path d="M38 132v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M58 138v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M78 140v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M98 140v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M118 138v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M138 132v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M38 176v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M58 182v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M78 184v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M98 184v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M118 182v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
            <path d="M138 176v-16c0-4 3-7 7-7s7 3 7 7v16Z"></path>
          </g>
          <path d="M28 96C28 80 60 68 98 68C136 68 168 80 168 96" fill="none" stroke="#2b2118" stroke-width="2"></path>
          <path d="M132 44H176V100C168 88 152 78 132 72Z" fill="#faf4e6"></path>
          <path d="M132 72C150 77 162 85 168 96" fill="none" stroke="#2b2118" stroke-width="1.8"></path>
          <path d="M16 194H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 208C76 200 120 200 162 208" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'IV')}
        </g>
        ${plus(918)}

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(20 20)">
            <rect width="48" height="30" fill="#2d4b86"></rect>
            <rect x="14" width="8" height="30" fill="#d8b657"></rect>
            <rect y="11" width="48" height="8" fill="#d8b657"></rect>
            <rect width="48" height="30" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <g fill="#2f7a6b" stroke="#2b2118" stroke-width="1.5" stroke-linejoin="round">
            <path d="M30 152L44 176H16Z"></path><path d="M30 166L46 196H14Z"></path>
            <path d="M166 146L180 170H152Z"></path><path d="M166 160L182 190H150Z"></path>
          </g>
          <g transform="translate(98 196)">
            <path d="M-46 0V-46H46V0Z" fill="#9e3b28" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M-54 -46L0 -84L54 -46Z" fill="#5b4a36" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
            <rect x="-12" y="-30" width="24" height="30" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.6"></rect>
            <g fill="#dbe6e5" stroke="#f6f2ea" stroke-width="2.4">
              <rect x="-36" y="-36" width="18" height="16"></rect>
              <rect x="18" y="-36" width="18" height="16"></rect>
            </g>
            <path d="M-27 -36v16M-18 -28h-18M27 -36v16M18 -28h18" stroke="#f6f2ea" stroke-width="2"></path>
            <rect x="24" y="-72" width="10" height="16" fill="#5b4a36" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <path d="M16 196H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M28 210C68 202 128 202 168 210" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          ${box(196, 'V')}
        </g>

        ${foot(440, 'I → V')}
      </svg>`),
  };

  window.GeoCardsOur = CARDS;
})();
