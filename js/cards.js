/* Raadselkaarten als atlasplaten, overgenomen uit de Claude Design-projecten:
   Plaat I (Plaat.dc.html), Plaat II en IV (Raadselplaten B-E.dc.html),
   Plaat III herzien (2a) en Plaat V herzien (2b).
   De vakken I, II, III… zijn tegelijk de volgorde waarin de lijn de letter tekent.
   data-num="0" enz. markeert het vak (of bij raadsel D het label) van elk nummer: dat licht op bij de hint van dat nummer. */
(function () {
  let seq = 0;

  /* Geeft alle id's in een plaat een uniek voorvoegsel, zodat dezelfde plaat twee keer
     op één pagina kan staan (zijpaneel + vergroting) zonder dat patronen elkaar storen. */
  function scoped(svg) {
    const P = `pl${++seq}`;
    const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    return ids.reduce((s, id) => s
      .split(`id="${id}"`).join(`id="${P}-${id}"`)
      .split(`#${id})`).join(`#${P}-${id})`)
      .split(`"#${id}"`).join(`"#${P}-${id}"`), svg);
  }

  const CARDS = {
    /* Plaat I — raadsel A (W) */
    A: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat I — Raadsel A" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pA-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="pA-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
          <pattern id="pA-h2" width="8" height="4" patternUnits="userSpaceOnUse"><path d="M0 2H8" stroke="#46697a" stroke-opacity=".6" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#pA-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT I</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL A · V PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <path d="M16 180H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M30 196C62 186 134 186 166 196" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M40 212C70 204 126 204 156 212" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1"></path>
          <polygon points="98,50 170,180 26,180" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2"></polygon>
          <path d="M98 54L128 178M98 54L74 178" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <polygon points="98,50 110,74 98,86 86,74" fill="#faf4e6" stroke="#2b2118" stroke-width="1.6"></polygon>
          <path d="M98 44V18" stroke="#2b2118" stroke-width="2"></path>
          <polygon points="98,13 104,25 92,25" fill="#2b2118"></polygon>
          <text x="116" y="32" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#9e3b28">MAX</text>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M258 245v20M248 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-3 98 120)">
            <rect x="26" y="82" width="144" height="76" fill="#f1e7d3" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.2"></rect>
            <text x="98" y="114" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="16" letter-spacing="1" fill="#2b2118">1/20/13/N</text>
            <text x="98" y="142" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="16" letter-spacing="1" fill="#2b2118">103/44/23/E</text>
          </g>
          <circle cx="98" cy="188" r="7" fill="none" stroke="#a8812f" stroke-width="1.6"></circle>
          <path d="M98 176v-4M98 200v4M86 188h-4M110 188h4" stroke="#a8812f" stroke-width="1.4"></path>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M478 245v20M468 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M8 243V216C14 214 46 180 80 168C106 159 130 190 146 142C154 118 170 124 188 116V243Z" fill="#ede1c4" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.1"></path>
          <path d="M8 243V228C40 210 74 198 106 206C134 213 152 176 188 158V243Z" fill="#e6d9be" stroke="#2b2118" stroke-opacity=".25" stroke-width="1.1"></path>
          <path d="M26 138C56 112 92 106 120 118" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <path d="M14 154C50 120 100 112 138 128" fill="none" stroke="#2b2118" stroke-opacity=".14" stroke-width="1.2"></path>
          <path d="M14 196C46 164 80 152 106 164C130 175 146 128 180 110L180 122C146 142 130 190 106 180C80 168 46 180 14 214Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></path>
          <path d="M14 205C46 173 80 161 106 172C130 183 146 136 180 118" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <rect x="9" y="187" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="33" y="167" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="57" y="154" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="80" y="150" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="118" y="154" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="134" y="139" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="170" y="101" width="11" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="93" y="140" width="26" height="40" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="93" y="130" width="8" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="102" y="130" width="8" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="111" y="130" width="8" height="10" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="102" y="152" width="8" height="13" rx="4" fill="#2b2118"></rect>
          <rect x="146" y="106" width="24" height="36" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="146" y="97" width="7" height="9" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="154" y="97" width="7" height="9" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="162" y="97" width="8" height="9" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.4"></rect>
          <rect x="154" y="117" width="7" height="11" rx="3.5" fill="#2b2118"></rect>
          <path d="M44 166V116" stroke="#2b2118" stroke-width="1.8"></path>
          <rect x="44" y="116" width="30" height="19" fill="#9e3b28"></rect>
          <circle cx="51" cy="123" r="2.6" fill="#d8b657"></circle>
          <circle cx="59" cy="120" r="1.5" fill="#d8b657"></circle>
          <circle cx="63" cy="125" r="1.5" fill="#d8b657"></circle>
          <circle cx="59" cy="130" r="1.5" fill="#d8b657"></circle>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        <path d="M698 245v20M688 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="16" y="52" width="164" height="166" fill="#dbe6e5"></rect>
          <rect x="16" y="52" width="164" height="80" fill="url(#pA-h)"></rect>
          <rect x="16" y="132" width="164" height="86" fill="url(#pA-h2)"></rect>
          <path d="M16 132H70L98 208L126 132H180V218H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2"></path>
          <path d="M26 152H62M134 152H170M32 172H72M124 172H164" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M16 52H180" stroke="#2b2118" stroke-width="2"></path>
          <path d="M26 40C54 32 142 32 170 40" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M98 60V190" stroke="#2b2118" stroke-width="2"></path>
          <polygon points="98,201 92,189 104,189" fill="#2b2118"></polygon>
          <text x="112" y="78" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#9e3b28">MIN</text>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M918 245v20M908 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#dbe6e5"></rect>
          <rect width="196" height="250" fill="url(#pA-h)"></rect>
          <path d="M0 40H70L60 132L0 168Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></path>
          <path d="M196 40H126L136 132L196 168Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2"></path>
          <path d="M84 26C76 70 92 132 84 214" fill="none" stroke="#46697a" stroke-width="1.3"></path>
          <path d="M98 26C90 70 106 132 98 214" fill="none" stroke="#46697a" stroke-width="1.3"></path>
          <path d="M112 26C104 70 120 132 112 214" fill="none" stroke="#46697a" stroke-width="1.3"></path>
          <g transform="translate(8 50)">
            <rect width="54" height="11.3" fill="#f6f2ea"></rect><rect y="11.3" width="54" height="11.3" fill="#2d4b86"></rect><rect y="22.6" width="54" height="11.4" fill="#9e3b28"></rect>
            <rect width="54" height="34" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <g transform="translate(134 50)">
            <rect width="54" height="34" fill="#23324f"></rect>
            <g fill="#ffcf4d">
              <polygon points="8.7,10.6 10.7,13.5 8.7,16.4 6.7,13.5"></polygon>
              <polygon points="15.2,12.6 17.2,15.5 15.2,18.4 13.2,15.5"></polygon>
              <polygon points="18.3,15.6 20.3,18.5 18.3,21.4 16.3,18.5"></polygon>
              <polygon points="21.4,18.8 23.4,21.7 21.4,24.6 19.4,21.7"></polygon>
              <polygon points="21.1,23.2 23.1,26.1 21.1,29 19.1,26.1"></polygon>
              <polygon points="28.2,25.4 30.2,28.3 28.2,31.2 26.2,28.3"></polygon>
              <polygon points="31.1,21.8 33.1,24.7 31.1,27.6 29.1,24.7"></polygon>
              <polygon points="44.3,1 47.9,6.2 44.3,11.4 40.7,6.2"></polygon>
            </g>
            <rect width="54" height="34" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
          </g>
          <circle cx="98" cy="112" r="13" fill="none" stroke="#9e3b28" stroke-width="2.4"></circle>
          <path d="M98 92v10M98 122v10M78 112h10M108 112h10" stroke="#9e3b28" stroke-width="2"></path>
          <circle cx="98" cy="112" r="3" fill="#9e3b28"></circle>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">V</text>
        </g>

        <path d="M60 440H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="474" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="474" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">I → V</text>
      </svg>`),

    /* Plaat II — raadsel B (L) */
    B: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat II — Raadsel B" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pB-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="pB-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
          <filter id="pB-ink" color-interpolation-filters="sRGB">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 .169  0 0 0 0 .129  0 0 0 0 .094  -.333 -.333 -.333 0 1" result="m"></feColorMatrix>
            <feComposite in="m" in2="SourceGraphic" operator="in"></feComposite>
          </filter>
          <clipPath id="pB-p3"><rect width="320" height="250"></rect></clipPath>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#pB-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT II</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL B · III PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(60 130)" data-num="0">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-3 160 118)">
            <rect x="42" y="70" width="236" height="96" fill="#f1e7d3" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.2"></rect>
            <text x="160" y="108" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="19" letter-spacing="1" fill="#2b2118">13/16/21/S</text>
            <text x="160" y="142" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="19" letter-spacing="1" fill="#2b2118">132/50/24/E</text>
          </g>
          <circle cx="160" cy="196" r="8" fill="none" stroke="#a8812f" stroke-width="1.8"></circle>
          <path d="M160 182v-5M160 210v5M146 196h-5M174 196h5" stroke="#a8812f" stroke-width="1.6"></path>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M410 245v20M400 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(440 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g transform="translate(120 62) scale(.3)"><path d="M-58,30 C-86,30 -86,-6 -60,-8 C-62,-36 -26,-48 -8,-28 C4,-54 52,-52 54,-16 C80,-18 88,30 58,30 Z" fill="#faf4e6" stroke="#2b2118" stroke-width="7" stroke-linejoin="round"></path></g>
          <g transform="translate(190 48) scale(.34)"><path d="M-58,30 C-86,30 -86,-6 -60,-8 C-62,-36 -26,-48 -8,-28 C4,-54 52,-52 54,-16 C80,-18 88,30 58,30 Z" fill="#faf4e6" stroke="#2b2118" stroke-width="7" stroke-linejoin="round"></path></g>
          <g transform="translate(258 64) scale(.27)"><path d="M-58,30 C-86,30 -86,-6 -60,-8 C-62,-36 -26,-48 -8,-28 C4,-54 52,-52 54,-16 C80,-18 88,30 58,30 Z" fill="#faf4e6" stroke="#2b2118" stroke-width="7" stroke-linejoin="round"></path></g>
          <polygon points="150,112 270,112 292,196 128,196" fill="#e3d2ae" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></polygon>
          <path d="M146 140H274M140 164H280" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.4"></path>
          <path d="M16 196H304" stroke="#2b2118" stroke-width="2"></path>
          <path d="M34 212C86 202 214 202 272 212" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <path d="M48 228C96 220 208 220 258 228" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1"></path>
          <g transform="translate(26 114) scale(.42)">
            <path fill="#2b2118" d="M178,52 C172,58 165,61 158,62 C150,66 146,76 146,86
              L164,101 C168,104 170,110 166,112 C163,113 160,110 156,107 L147,101
              C151,120 153,140 146,152 C150,162 146,172 140,178
              L170,182 C180,183 183,190 176,193 L112,193 C104,193 101,186 106,180
              C96,172 92,160 94,150 C70,162 40,180 6,192 C30,174 60,150 82,136
              C76,110 90,80 112,62 C120,54 126,46 130,42
              L121,12 C121,5 130,5 135,14 L142,34 L146,12 C148,6 157,8 156,17 L153,40
              C163,42 173,45 178,52 Z"></path>
            <circle cx="157" cy="49" r="3.2" fill="#faf4e6"></circle>
          </g>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="320" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M790 245v20M780 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(820 130)" data-num="2">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <g clip-path="url(#pB-p3)">
            <rect x="16" y="150" width="288" height="72" fill="#dbe6e5"></rect>
            <rect x="16" y="150" width="288" height="72" fill="url(#pB-h)"></rect>
            <image href="img/opera-house.png" x="67" y="2" width="207" height="207" filter="url(#pB-ink)"></image>
            <path d="M16 150H304" stroke="#2b2118" stroke-width="2"></path>
            <path d="M30 172C68 164 122 180 160 172C198 164 252 180 290 172" fill="none" stroke="#46697a" stroke-width="1.6"></path>
            <path d="M30 196C68 188 122 204 160 196C198 188 252 204 290 196" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="1.6"></path>
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

    /* Plaat III herzien (2a) — raadsel C (R) */
    C: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 540" role="img" aria-label="Plaat III — Raadsel C" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pC2-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="pC2-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
          <clipPath id="pC2-deer">
            <path d="M74 116C76 104 86 98 104 98H128C146 98 156 108 156 122C156 134 148 142 130 142H96C80 142 72 130 72 122Z"></path>
            <path d="M86 110C70 108 58 100 50 86L38 98C46 116 66 128 84 130Z"></path>
            <path d="M52 88C36 84 18 94 12 108C16 120 32 124 48 118C58 114 60 100 58 90Z"></path>
            <path d="M56 108C56 122 60 132 68 136C66 122 64 116 64 106Z"></path>
          </clipPath>
          <g id="pC2-col">
            <rect x="-14" y="-3" width="28" height="7" fill="#faf4e6" stroke="#2b2118" stroke-width="1.6"></rect>
            <rect x="-9" y="4" width="18" height="34" fill="#faf4e6" stroke="#2b2118" stroke-width="1.6"></rect>
            <path d="M-3 7V35M3 7V35" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></path>
            <rect x="-12" y="38" width="24" height="7" fill="#faf4e6" stroke="#2b2118" stroke-width="1.6"></rect>
          </g>
        </defs>
        <rect width="1200" height="540" fill="#f1e7d3"></rect>
        <rect width="1200" height="540" fill="url(#pC2-g)"></rect>
        <rect x="16" y="16" width="1168" height="508" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="488" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
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
          <rect x="16" y="118" width="164" height="88" fill="#dbe6e5"></rect>
          <rect x="16" y="118" width="164" height="88" fill="url(#pC2-h)"></rect>
          <path d="M16 118H84L70 142H16Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M112 118H180V154L150 146L130 130Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></path>
          <path d="M30 164C50 156 62 172 82 164" fill="none" stroke="#46697a" stroke-width="2"></path>
          <path d="M104 186C124 178 136 194 156 186" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="2"></path>
          <use href="#pC2-col" x="0" y="0" transform="translate(48 72)"></use>
          <use href="#pC2-col" x="0" y="0" transform="translate(146 72)"></use>
          <path d="M146 34V70" stroke="#2b2118" stroke-width="2"></path>
          <rect x="146" y="34" width="34" height="24" fill="#f6f2ea"></rect>
          <rect x="146" y="50" width="34" height="8" fill="#9e3b28"></rect>
          <g fill="#9e3b28">
            <rect x="156" y="42" width="14" height="8"></rect>
            <rect x="156" y="38" width="3.5" height="4"></rect>
            <rect x="161.2" y="36.5" width="3.6" height="5.5"></rect>
            <rect x="166.5" y="38" width="3.5" height="4"></rect>
          </g>
          <path d="M163 50v5" stroke="#a8812f" stroke-width="1.4"></path>
          <circle cx="163" cy="56" r="2" fill="#a8812f"></circle>
          <rect x="146" y="34" width="34" height="24" fill="none" stroke="#2b2118" stroke-width="1.2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M258 245v20M248 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(280 130)" data-num="1">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <polygon points="70,40 98,28 126,40 98,52" fill="#f6f2ea" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></polygon>
          <polygon points="70,40 70,70 98,82 98,52" fill="#dbe6e5" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></polygon>
          <polygon points="126,40 126,70 98,82 98,52" fill="#c7dbe4" stroke="#2b2118" stroke-width="1.8" stroke-linejoin="round"></polygon>
          <path d="M78 44l10 4M112 60v8" stroke="#f6f2ea" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"></path>
          <g fill="#9e3b28">
            <rect x="80" y="100" width="36" height="10" rx="5"></rect>
            <rect x="93" y="87" width="10" height="36" rx="5"></rect>
          </g>
          <rect x="16" y="150" width="164" height="58" fill="#dbe6e5"></rect>
          <rect x="16" y="150" width="164" height="58" fill="url(#pC2-h)"></rect>
          <path d="M44 178C52 158 72 146 98 146C124 146 144 158 152 178Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M60 166C76 156 104 154 124 162" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          <path d="M24 190C40 182 52 198 68 190" fill="none" stroke="#46697a" stroke-width="2"></path>
          <path d="M126 198C142 190 154 204 170 198" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="2"></path>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="196" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>
        <path d="M478 245v20M468 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(500 130)" data-num="2">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g stroke="#46697a" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round">
            <path d="M34 44v8M30 48h8M126 38v8M122 42h8M56 76v8M52 80h8M168 92v8M164 96h8M40 112v8M36 116h8"></path>
          </g>
          <path d="M16 154C36 134 54 132 72 146C86 156 100 154 114 142C130 128 152 132 180 154Z" fill="#dbe6e5" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.2"></path>
          <g fill="none" stroke="#2b2118" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M62 78C64 62 74 46 90 36C94 33 98 32 102 34"></path>
            <path d="M66 60C60 52 54 48 48 48"></path>
            <path d="M68 50C66 40 68 32 74 28"></path>
            <path d="M80 42C80 34 84 28 88 26"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M54 78C54 62 58 48 72 36C76 32 80 30 84 30"></path>
            <path d="M54 72C46 66 38 64 32 66"></path>
            <path d="M50 66C44 58 38 54 32 54"></path>
            <path d="M56 54C52 44 50 38 52 32"></path>
            <path d="M66 40C66 32 68 26 72 22"></path>
          </g>
          <g fill="none" stroke="#2b2118" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M88 138L84 158L90 178"></path>
            <path d="M100 140L98 158L102 178"></path>
            <path d="M130 140L136 156L130 168L132 178"></path>
            <path d="M144 138L150 154L144 166L146 178"></path>
          </g>
          <g fill="#2b2118">
            <path d="M74 116C76 104 86 98 104 98H128C146 98 156 108 156 122C156 134 148 142 130 142H96C80 142 72 130 72 122Z"></path>
            <path d="M156 114C162 110 166 104 166 98C162 102 158 106 154 108Z"></path>
            <path d="M86 110C70 108 58 100 50 86L38 98C46 116 66 128 84 130Z"></path>
            <path d="M52 88C36 84 18 94 12 108C16 120 32 124 48 118C58 114 60 100 58 90Z"></path>
            <path d="M56 80C60 70 68 68 72 70C70 78 66 84 58 86Z"></path>
            <path d="M56 108C56 122 60 132 68 136C66 122 64 116 64 106Z"></path>
          </g>
          <ellipse cx="15" cy="110" rx="4" ry="3" fill="#0f0b07"></ellipse>
          <circle cx="44" cy="100" r="2.1" fill="#faf4e6"></circle>
          <g clip-path="url(#pC2-deer)" fill="#f6f2ea">
            <path d="M10 112C22 106 36 106 46 110C36 120 22 122 10 118Z"></path>
            <path d="M44 86C48 104 58 120 86 134C72 116 58 100 52 84Z"></path>
            <path d="M52 104C52 124 58 134 70 142C66 124 62 116 62 102Z"></path>
            <path d="M68 120C82 100 106 92 130 94C148 96 160 104 166 118C152 106 130 102 108 104C90 106 76 110 68 120Z"></path>
          </g>
          <path d="M16 168C40 156 60 170 90 164C120 158 152 172 180 162V208H16Z" fill="#f6f2ea" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.6"></path>
          <path d="M28 186C56 180 96 182 122 188" fill="none" stroke="#46697a" stroke-opacity=".25" stroke-width="1.4"></path>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">III</text>
        </g>
        <path d="M698 245v20M688 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(720 130)" data-num="3">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <path d="M64 54H132L124 158C122 180 112 192 98 192C84 192 74 180 72 158Z" fill="#2b2118"></path>
          <path d="M64 54C64 36 132 36 132 54L130 86H66Z" fill="#efe3c8" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M66 68C80 60 116 60 130 68" fill="none" stroke="#2b2118" stroke-opacity=".2" stroke-width="1.6"></path>
          <path d="M64 54H132L124 158C122 180 112 192 98 192C84 192 74 180 72 158Z" fill="none" stroke="#2b2118" stroke-width="2.6" stroke-linejoin="round"></path>
          <g transform="translate(102 132)">
            <path d="M-20 30C-20 -6 -8 -28 18 -38" fill="none" stroke="#d8b657" stroke-width="5.5" stroke-linecap="round"></path>
            <path d="M18 -38C12 -10 2 18 -20 30" fill="none" stroke="#d8b657" stroke-width="5.5" stroke-linecap="round"></path>
            <path d="M-13 24V-12M-7 20V-18M-1 15V-24M5 9V-29M11 2V-33" stroke="#d8b657" stroke-opacity=".9" stroke-width="2"></path>
            <path d="M-24 30h10" stroke="#d8b657" stroke-width="5.5" stroke-linecap="round"></path>
          </g>
          <path d="M78 140C76 158 82 172 92 180" fill="none" stroke="#faf4e6" stroke-opacity=".3" stroke-width="5" stroke-linecap="round"></path>
          <path d="M118 108C119 132 116 152 110 168" fill="none" stroke="#faf4e6" stroke-opacity=".16" stroke-width="4" stroke-linecap="round"></path>
          <ellipse cx="98" cy="196" rx="32" ry="6" fill="#2b2118" opacity=".14"></ellipse>
          <text x="98" y="212" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="3" fill="#6b5943">HET EILAND</text>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">IV</text>
        </g>
        <path d="M918 245v20M908 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(940 130)" data-num="4">
          <rect width="196" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="182" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <path d="M20 200C34 186 60 178 98 178C136 178 162 186 176 200Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M34 192C58 184 138 184 162 192" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1.2"></path>
          <rect x="24" y="106" width="148" height="54" fill="#5b4a36"></rect>
          <path d="M18 84L74 52L130 84Z" fill="#ede1c4" stroke="#2b2118" stroke-width="2.2" stroke-linejoin="round"></path>
          <path d="M32 80L74 56L116 80Z" fill="#e3d2ae" stroke="#2b2118" stroke-opacity=".5" stroke-width="1.4"></path>
          <path d="M18 84H150L162 90L172 84V96H18Z" fill="#ede1c4" stroke="#2b2118" stroke-width="2" stroke-linejoin="round"></path>
          <rect x="20" y="96" width="152" height="10" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8"></rect>
          <g stroke="#2b2118" stroke-opacity=".35" stroke-width="1.4">
            <path d="M40 97v8M64 97v8M88 97v8M112 97v8M136 97v8M160 97v8"></path>
          </g>
          <g fill="#faf4e6" stroke="#2b2118" stroke-width="1.6">
            <rect x="26.0" y="106" width="11.5" height="54"></rect>
            <rect x="42.5" y="106" width="11.5" height="54"></rect>
            <rect x="59.0" y="106" width="11.5" height="54"></rect>
            <rect x="75.5" y="106" width="11.5" height="54"></rect>
            <rect x="92.0" y="106" width="11.5" height="54"></rect>
            <rect x="108.5" y="106" width="11.5" height="54"></rect>
            <rect x="125.0" y="106" width="11.5" height="54"></rect>
            <rect x="141.5" y="106" width="11.5" height="54"></rect>
            <rect x="158.0" y="106" width="11.5" height="54"></rect>
          </g>
          <path d="M31.7 111v44M48.2 111v44M64.7 111v44M81.2 111v44M97.7 111v44M114.2 111v44M130.7 111v44M147.2 111v44M163.7 111v44" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></path>
          <rect x="22" y="160" width="152" height="8" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8"></rect>
          <rect x="18" y="168" width="160" height="8" fill="#ede1c4" stroke="#2b2118" stroke-width="1.8"></rect>
          <rect x="66" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="98" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">V</text>
        </g>

        <path d="M60 440H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="474" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="474" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">I → V</text>
      </svg>`),

    /* Plaat IV — raadsel D (D) */
    D: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 700" role="img" aria-label="Plaat IV — Raadsel D" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pD-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
        </defs>
        <rect width="1200" height="700" fill="#f1e7d3"></rect>
        <rect width="1200" height="700" fill="url(#pD-g)"></rect>
        <rect x="16" y="16" width="1168" height="668" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="648" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT IV</text>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL D · II PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <!-- tekening iets kleiner en gecentreerd tussen de lijnen (y 92–600) -->
        <g transform="translate(43 11) scale(.94)">
        <path d="M285.0,324.0 Q277.1,325.3 274.8,332.3 Q272.5,339.3 270.1,354.0 Q267.7,368.7 265.2,383.5 Q262.8,398.2 262.7,405.9 Q262.6,413.7 257.5,424.8 Q252.3,435.9 251.5,438.3 Q250.7,440.8 258.3,449.1 Q266.0,457.5 269.2,465.6 Q272.5,473.7 280.9,478.4 Q289.3,483.1 296.8,491.8 Q304.3,500.5 305.4,507.9 Q306.4,515.2 311.6,522.0 Q316.8,528.8 324.9,537.3 Q333.0,545.8 345.3,553.8 Q357.5,561.7 366.5,564.7 Q375.4,567.7 387.2,569.7 Q399.0,571.6 405.9,577.8 Q412.8,584.0 420.3,583.8 Q427.8,583.6 431.9,581.8 Q436.0,580.1 441.4,578.8 Q446.8,577.4 452.1,573.4 Q457.4,569.3 463.6,568.7 Q469.8,568.0 480.5,565.7 Q491.2,563.5 500.2,558.7 Q509.3,554.0 517.7,550.9 Q526.2,547.9 527.4,536.7 Q528.7,525.5 531.0,518.5 Q533.3,511.5 535.5,500.5 Q537.6,489.6 535.4,484.2 Q533.3,478.8 534.0,472.1 Q534.8,465.4 546.5,461.5 Q558.2,457.6 559.4,454.1 Q560.5,450.6 562.5,441.6 Q564.6,432.6 570.2,430.5 Q575.8,428.5 591.5,433.8 Q607.2,439.0 613.4,435.2 Q619.6,431.4 642.2,435.1 Q664.9,438.7 680.4,440.0 Q695.9,441.3 712.6,450.7 Q729.3,460.2 751.7,467.6 Q774.1,475.1 784.2,474.6 Q794.3,474.0 807.3,472.5 Q820.2,471.0 832.0,473.0 Q843.7,474.9 853.8,474.4 Q864.0,473.9 871.8,472.6 Q879.7,471.4 887.0,471.9 Q894.3,472.3 901.6,472.8 Q908.9,473.3 916.1,474.1 Q923.2,475.0 930.1,476.9 Q936.9,478.8 939.9,475.9 Q942.8,472.9 944.6,467.7 Q946.3,462.5 946.8,454.9 Q947.4,447.3 948.4,439.8 Q949.3,432.4 948.4,426.3 Q947.5,420.1 944.3,413.2 Q941.1,406.4 931.2,391.4 Q921.2,376.5 918.5,369.7 Q915.8,363.0 905.2,357.5 Q894.6,352.0 887.9,342.1 Q881.3,332.1 872.9,327.4 Q864.6,322.7 850.6,319.9 Q836.5,317.2 832.2,308.0 Q827.8,298.8 824.6,286.0 Q821.3,273.3 813.0,268.6 Q804.6,263.9 785.5,261.4 Q766.5,258.9 752.4,256.2 Q738.4,253.5 731.8,243.5 Q725.2,233.6 712.9,225.6 Q700.7,217.6 695.1,211.9 Q689.6,206.2 698.6,201.4 Q707.6,196.7 711.1,186.2 Q714.6,175.7 709.2,162.2 Q703.7,148.8 685.8,142.8 Q667.9,136.8 646.1,127.7 Q624.3,118.5 614.8,117.2 Q605.2,116.0 599.5,125.7 Q593.8,135.5 592.5,146.7 Q591.3,158.0 586.7,164.2 Q582.2,170.5 565.3,168.7 Q548.5,167.0 536.1,174.5 Q523.6,182.0 503.4,183.1 Q483.2,184.1 467.4,186.7 Q451.7,189.2 437.1,188.2 Q422.5,187.2 412.4,187.8 Q402.2,188.3 397.2,188.5 Q392.1,188.8 386.2,188.8 Q380.2,188.7 377.0,195.4 Q373.8,202.1 373.3,209.7 Q372.7,217.3 367.0,227.0 Q361.3,236.8 352.0,245.3 Q342.6,253.9 341.7,261.3 Q340.7,268.8 348.2,279.0 Q355.7,289.3 344.6,297.3 Q333.5,305.2 326.7,310.7 Q319.9,316.2 306.4,319.5 Q292.9,322.8 285.0,324.0 Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="4" stroke-linejoin="round"></path>
        <path d="M250.7,440.8 Q266.0,457.5 269.2,465.6 Q272.5,473.7 280.9,478.4 Q289.3,483.1 296.8,491.8 Q304.3,500.5 305.4,507.9 Q306.4,515.2 311.6,522.0 Q316.8,528.8 324.9,537.3 Q333.0,545.8 345.3,553.8 Q357.5,561.7 366.5,564.7 Q375.4,567.7 387.2,569.7 Q399.0,571.6 405.9,577.8 Q412.8,584.0 420.3,583.8 Q427.8,583.6 431.9,581.8 Q436.0,580.1 441.4,578.8 Q446.8,577.4 452.1,573.4 Q457.4,569.3 463.6,568.7 Q469.8,568.0 480.5,565.7 Q491.2,563.5 500.2,558.7 Q509.3,554.0 517.7,550.9 Q526.2,547.9 527.4,536.7 Q528.7,525.5 531.0,518.5 Q533.3,511.5 535.5,500.5 Q537.6,489.6 535.4,484.2 L533.3,478.8" fill="none" stroke="#46697a" stroke-width="7" stroke-linecap="round"></path>
        <path d="M263.4,438.3 Q278.6,454.3 281.7,462.0 Q284.9,469.8 293.2,474.2 Q301.5,478.7 308.8,486.9 Q316.2,495.2 317.1,502.3 Q318.0,509.4 323.0,515.8 Q328.1,522.3 335.9,530.4 Q343.8,538.5 355.6,546.0 Q367.5,553.4 376.3,556.1 Q385.0,558.8 396.4,560.5 Q407.8,562.1 414.4,568.0 Q420.9,573.9 428.2,573.5 Q435.5,573.1 439.5,571.3 Q443.5,569.5 448.7,568.0 Q454.0,566.6 459.2,562.5 Q464.4,558.4 470.3,557.6 Q476.3,556.8 486.5,554.2 Q496.8,551.7 505.4,546.8 Q514.1,541.9 522.1,538.7 Q530.1,535.5 531.5,524.4 Q532.9,513.2 535.3,506.2 Q537.6,499.2 539.9,488.3 Q542.2,477.4 540.4,472.2 L538.7,467.0" fill="none" stroke="#46697a" stroke-opacity=".7" stroke-width="6" stroke-linecap="round"></path>
        <path d="M276.2,435.8 Q291.2,451.0 294.2,458.5 Q297.3,465.9 305.5,470.0 Q313.7,474.2 320.9,482.1 Q328.1,489.9 328.8,496.7 Q329.6,503.5 334.5,509.6 Q339.3,515.8 346.9,523.5 Q354.5,531.2 366.0,538.1 Q377.5,545.1 386.0,547.6 Q394.5,550.0 405.6,551.3 Q416.7,552.6 422.9,558.2 Q429.1,563.8 436.2,563.2 Q443.3,562.6 447.1,560.7 Q451.0,558.9 456.1,557.3 Q461.2,555.8 466.3,551.6 Q471.4,547.4 477.1,546.5 Q482.8,545.5 492.6,542.8 Q502.4,540.0 510.6,534.9 Q518.9,529.8 526.4,526.5 Q534.0,523.1 535.6,512.0 Q537.2,500.9 539.5,493.9 Q541.9,486.9 544.3,476.1 Q546.8,465.3 545.4,460.2 L544.1,455.2" fill="none" stroke="#46697a" stroke-opacity=".45" stroke-width="6" stroke-linecap="round"></path>
        <path d="M235.9,443.6 Q251.4,461.2 254.8,469.7 Q258.2,478.2 266.7,483.2 Q275.2,488.2 282.9,497.5 Q290.6,506.7 291.8,514.3 Q293.0,522.0 298.4,529.1 Q303.8,536.3 312.2,545.3 Q320.6,554.3 333.3,562.8 Q346.0,571.3 355.2,574.6 Q364.5,577.9 376.6,580.3 Q388.8,582.6 396.1,589.1 Q403.3,595.7 411.1,595.7 Q418.9,595.6 423.1,594.0 Q427.3,592.3 432.9,591.1 Q438.5,589.9 443.9,586.0 Q449.4,582.0 455.8,581.5 Q462.3,581.0 473.5,579.0 Q484.7,577.0 494.2,572.5 Q503.7,567.9 512.7,565.1 Q521.7,562.2 522.7,550.9 Q523.8,539.6 526.1,532.7 Q528.4,525.7 530.4,514.7 Q532.3,503.7 529.7,498.1 L527.0,492.5" fill="none" stroke="#2b2118" stroke-opacity=".8" stroke-width="3" stroke-dasharray="12 10" stroke-linecap="round"></path>
        <!-- pijl gecentreerd op het midden van het werelddeel -->
        <g transform="translate(16 0)">
        <line x1="476.0" y1="399.1" x2="658.0" y2="399.1" stroke="#2b2118" stroke-width="5" stroke-linecap="round"></line>
        <circle cx="476.0" cy="399.1" r="6" fill="#2b2118"></circle>
        <polygon points="684.0,399.1 658.0,409.1 658.0,389.1" fill="#2b2118"></polygon>
        <path d="M476.0 389.1V353.1" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.6" stroke-dasharray="5 5"></path>
        <path d="M684.0 389.1V353.1" stroke="#2b2118" stroke-opacity=".45" stroke-width="1.6" stroke-dasharray="5 5"></path>
        <g data-num="0">
        <rect x="422.0" y="307.1" width="108" height="46" fill="#f1e7d3" stroke="#2b2118" stroke-width="3"></rect>
        <text x="476.0" y="340.1" text-anchor="middle" font-family="'EB Garamond',serif" font-size="28" font-weight="600" letter-spacing="2" fill="#2b2118">MAR</text>
        </g>
        <g data-num="1">
        <rect x="622.0" y="307.1" width="124" height="46" fill="#f1e7d3" stroke="#2b2118" stroke-width="3"></rect>
        <text x="684.0" y="340.1" text-anchor="middle" font-family="'EB Garamond',serif" font-size="28" font-weight="600" letter-spacing="2" fill="#2b2118">TOGO</text>
        </g>
        </g>
        </g>

        <path d="M60 600H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="634" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
      </svg>`),

    /* Plaat V herzien (2b, zonder Honduras) — raadsel E (O) */
    E: () => scoped(`
      <svg class="riddle-svg" viewBox="0 0 1200 800" role="img" aria-label="Plaat V — Raadsel E" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pE2-g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#2b2118" stroke-opacity=".09" stroke-width="1"></path></pattern>
          <pattern id="pE2-h" width="8" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5H8" stroke="#46697a" stroke-opacity=".4" stroke-width="1"></path></pattern>
          <g id="pE2-star"><polygon points="0,-6 4.5,0 0,6 -4.5,0"></polygon></g>
        </defs>
        <rect width="1200" height="800" fill="#f1e7d3"></rect>
        <rect width="1200" height="800" fill="url(#pE2-g)"></rect>
        <rect x="16" y="16" width="1168" height="768" fill="none" stroke="#2b2118" stroke-width="3"></rect>
        <rect x="26" y="26" width="1148" height="748" fill="none" stroke="#2b2118" stroke-opacity=".35" stroke-width="1"></rect>
        <text x="60" y="72" font-family="'EB Garamond',serif" font-size="26" font-weight="600" letter-spacing="6" fill="#2b2118">PLAAT V</text>
        <g>
          <rect x="250" y="44" width="54" height="34" fill="#f6f2ea"></rect>
          <g fill="#9e3b28">
            <rect x="250" y="44" width="54" height="2.6"></rect><rect x="250" y="49.2" width="54" height="2.6"></rect>
            <rect x="250" y="54.4" width="54" height="2.6"></rect><rect x="250" y="59.6" width="54" height="2.6"></rect>
            <rect x="250" y="64.8" width="54" height="2.6"></rect><rect x="250" y="70" width="54" height="2.6"></rect>
            <rect x="250" y="75.2" width="54" height="2.6"></rect>
          </g>
          <rect x="250" y="44" width="22" height="18" fill="#2d4b86"></rect>
          <rect x="250" y="44" width="54" height="34" fill="none" stroke="#2b2118" stroke-width="1.4"></rect>
        </g>
        <text x="1140" y="72" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" letter-spacing="3" fill="#6b5943">RAADSEL E · II PLAATSEN</text>
        <path d="M60 92H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <g transform="translate(220 130)" data-num="0">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <image href="img/guatemala-wapen.png" x="136" y="13" width="49" height="46" preserveAspectRatio="xMidYMid meet"></image>
          <path d="M16 204H304" stroke="#2b2118" stroke-width="2"></path>
          <g fill="#e3d2ae" stroke="#2b2118" stroke-width="2" stroke-linejoin="round">
            <polygon points="70,204 250,204 240,182 80,182"></polygon>
            <polygon points="80,182 240,182 230,160 90,160"></polygon>
            <polygon points="90,160 230,160 220,138 100,138"></polygon>
            <polygon points="100,138 220,138 210,116 110,116"></polygon>
            <polygon points="110,116 210,116 202,96 118,96"></polygon>
            <rect x="136" y="66" width="48" height="30"></rect>
          </g>
          <rect x="146" y="96" width="28" height="108" fill="#ede1c4" stroke="#2b2118" stroke-width="2"></rect>
          <path d="M146 116h28M146 138h28M146 160h28M146 182h28" stroke="#2b2118" stroke-opacity=".35" stroke-width="1.2"></path>
          <path d="M34 220C86 210 214 210 272 220" fill="none" stroke="#2b2118" stroke-opacity=".3" stroke-width="1"></path>
          <text x="160" y="228" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="14" letter-spacing="4" fill="#6b5943">TIKAL</text>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <rect width="320" height="250" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">I</text>
        </g>
        <path d="M600 245v20M590 255h20" stroke="#2b2118" stroke-opacity=".55" stroke-width="1.6"></path>

        <g transform="translate(660 130)" data-num="1">
          <rect width="320" height="250" fill="#faf4e6" stroke="#2b2118" stroke-width="2"></rect>
          <rect x="7" y="7" width="306" height="236" fill="none" stroke="#2b2118" stroke-opacity=".28" stroke-width="1"></rect>
          <g transform="rotate(-2 160 125)">
            <rect x="60" y="75" width="200" height="100" fill="#f6f2ea"></rect>
            <rect x="60" y="75" width="200" height="20" fill="#2d4b86"></rect>
            <rect x="60" y="115" width="200" height="20" fill="#2d4b86"></rect>
            <rect x="60" y="155" width="200" height="20" fill="#2d4b86"></rect>
            <polygon points="60,75 147,125 60,175" fill="#9e3b28"></polygon>
            <polygon points="88,110 100,125 88,140 76,125" fill="#f6f2ea"></polygon>
            <rect x="60" y="75" width="200" height="100" fill="none" stroke="#2b2118" stroke-width="1.8"></rect>
          </g>
          <rect x="128" y="236" width="64" height="27" fill="#f1e7d3" stroke="#2b2118" stroke-width="2"></rect>
          <text x="160" y="255" text-anchor="middle" font-family="'EB Garamond',serif" font-size="18" font-weight="600" letter-spacing="2" fill="#2b2118">II</text>
        </g>

        <path d="M60 408H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>

        <rect x="120" y="424" width="960" height="262" fill="#ede1c4"></rect>
        <g transform="translate(120 424)">
          <g transform="translate(20 22)">
            <svg x="0" y="0" width="300" height="218" viewBox="30 35 220 160" preserveAspectRatio="xMidYMid slice">
              <rect width="335" height="250" fill="#dbe6e5"></rect>
              <rect width="335" height="250" fill="url(#pE2-h)"></rect>
              <g stroke="#2b2118" stroke-opacity=".12" stroke-width="1">
                <path d="M24 0V250M84 0V250M143 0V250M203 0V250M263 0V250M323 0V250"></path>
                <path d="M0 39H335M0 105H335M0 171H335M0 236H335"></path>
              </g>
              <path d="M0 198L25 214L70 227L90 220L117 243L134 250L221 250L225 237L193 225L173 225L165 204L164 190L175 168L182 151L147 154L139 158L132 173L114 189L91 195L70 181L50 142L54 92L55 68L86 49L150 55L156 58L158 50L167 36L177 34L212 38L227 51L232 68L239 87L250 104L261 95L256 60L246 36L249 20L269 0L0 0Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
              <path d="M203 146L215 133L234 129L257 130L281 139L299 150L316 156L332 167L311 172L291 162L272 150L245 145L221 143Z" fill="#e3d2ae" stroke="#2b2118" stroke-width="1.6" stroke-linejoin="round"></path>
              <g>
                <circle cx="148" cy="208" r="15" fill="#f1e7d3" stroke="#2b2118" stroke-width="2.4"></circle>
                <text x="148" y="214" text-anchor="middle" font-family="'EB Garamond',serif" font-size="16" font-weight="600" fill="#2b2118">I</text>
              </g>
            </svg>
            <rect width="300" height="218" fill="none" stroke="#2b2118" stroke-width="2"></rect>
          </g>

          <!-- tekst gecentreerd in de ruimte rechts van het kaartje (x 320–960) -->
          <g transform="translate(320 22)">
            <path d="M80 70H560" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
            <text x="320" y="112" text-anchor="middle" font-family="'EB Garamond',serif" font-size="19" letter-spacing="3" fill="#2b2118">DE KUST VAN DE GOLF</text>
            <text x="320" y="140" text-anchor="middle" font-family="'EB Garamond',serif" font-size="19" letter-spacing="3" fill="#2b2118">SLUIT DE LIJN</text>
          </g>
        </g>

        <rect x="120" y="424" width="960" height="262" fill="none" stroke="#2b2118" stroke-opacity=".55" stroke-width="2"></rect>
        <path d="M60 700H1140" stroke="#2b2118" stroke-opacity=".45" stroke-width="1"></path>
        <text x="60" y="734" font-family="'EB Garamond',serif" font-size="17" letter-spacing="2" fill="#6b5943">GEOSEARCH · ATLAS DER RAADSELS</text>
        <text x="1140" y="734" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2" fill="#6b5943">GESLOTEN LETTER</text>
      </svg>`),
  };

  window.GeoCards = CARDS;
})();
