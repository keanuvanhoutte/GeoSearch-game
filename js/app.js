(function () {
  const RIDDLES = window.GeoRiddles;
  const TEXT = window.GeoText;
  const CARDS = window.GeoCards;
  const FINAL = window.GeoFinalWord;
  const STORE_KEY = 'geosearch-v1';
  // Elk raadsel start op dezelfde wereldkaart: het werelddeel zoekt de speler zelf.
  const START_VIEW = { center: [20, 10], zoom: 2 };

  const app = document.getElementById('app');
  const $ = (sel, root = document) => root.querySelector(sel);

  /* ---------- state ---------- */
  function freshState() {
    const r = {};
    RIDDLES.forEach((q) => { r[q.id] = { pts: [], res: [], hints: 0, found: false, revealed: false, letter: null }; });
    return { lang: 'nl', r, final: false };
  }
  function loadState() {
    const base = freshState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && saved.r) {
        base.lang = saved.lang === 'en' ? 'en' : 'nl';
        base.final = !!saved.final;
        // oude punten (ook uit eerdere versies) nooit terugzetten
        RIDDLES.forEach((q) => Object.assign(base.r[q.id], saved.r[q.id] || {}, { pts: [], res: [], found: false }));
      }
    } catch (e) { /* geen opslag beschikbaar */ }
    return base;
  }
  let state = loadState();
  // Geplaatste punten worden niet bewaard tussen bezoeken: een raadsel opent nooit met punten.
  // Letters, hints en taal blijven wel bewaard.
  const save = () => {
    try {
      const r = {};
      Object.entries(state.r).forEach(([id, s]) => { r[id] = { ...s, pts: [], res: [], found: false }; });
      localStorage.setItem(STORE_KEY, JSON.stringify({ ...state, r }));
    } catch (e) { /* ignore */ }
  };

  const t = (key, vars = {}) =>
    (TEXT[state.lang][key] || key).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const solvedCount = () => RIDDLES.filter((q) => state.r[q.id].letter).length;
  const placesLine = (q) =>
    t('placesSub', { n: TEXT[state.lang].numbers[q.targets.length] || q.targets.length, p: q.position });
  // Eerstvolgende nog niet opgeloste raadsel na positie fromIdx (loopt rond).
  function nextUnsolved(fromIdx) {
    for (let k = 1; k <= RIDDLES.length; k++) {
      const q = RIDDLES[(fromIdx + k + RIDDLES.length) % RIDDLES.length];
      if (!state.r[q.id].letter) return q;
    }
    return null;
  }

  /* ---------- decoratieve kaarten ---------- */
  const SIDE_ART = `
    <svg viewBox="0 0 300 940" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="940" fill="#0e2740"></rect>
      <g stroke="#7fd0d8" stroke-opacity=".1" stroke-width="1">
        <path d="M0 90H300M0 200H300M0 310H300M0 420H300M0 530H300M0 640H300M0 750H300M0 860H300"></path>
        <path d="M60 0V940M120 0V940M180 0V940M240 0V940"></path>
      </g>
      <g fill="#2f7a6b" stroke="#0a1c2e" stroke-width="2">
        <path d="M-40 170L60 100L160 130L240 95L300 160L310 260L230 330L110 350L10 320L-40 360Z"></path>
        <path d="M150 450L250 430L320 500L330 620L250 710L150 715L100 630L115 520Z"></path>
        <path d="M-30 600L50 570L130 630L140 740L50 810L-30 790Z"></path>
        <path d="M180 820L300 790L360 850L350 940L220 940L170 890Z"></path>
      </g>
      <path d="M70 250L200 500L110 690L260 850" fill="none" stroke="#ffc83d" stroke-opacity=".3" stroke-width="2" stroke-dasharray="7 9"></path>
      <g fill="#ffc83d" fill-opacity=".45"><circle cx="70" cy="250" r="4"></circle><circle cx="200" cy="500" r="4"></circle><circle cx="110" cy="690" r="4"></circle><circle cx="260" cy="850" r="4"></circle></g>
    </svg>`;

  const WON_ART = `
    <svg viewBox="0 0 1440 940" preserveAspectRatio="xMidYMid slice">
      <rect width="1440" height="940" fill="#0e2740"></rect>
      <g stroke="#7fd0d8" stroke-opacity=".12" stroke-width="1">
        <path d="M0 80H1440M0 180H1440M0 280H1440M0 380H1440M0 480H1440M0 580H1440M0 680H1440M0 780H1440M0 880H1440"></path>
        <path d="M120 0V940M240 0V940M360 0V940M480 0V940M600 0V940M720 0V940M840 0V940M960 0V940M1080 0V940M1200 0V940M1320 0V940"></path>
      </g>
      <g fill="#2f7a6b" stroke="#0a1c2e" stroke-width="2">
        <path d="M70 230L230 150L390 180L500 140L600 210L620 330L530 410L380 430L250 400L150 440L70 360Z"></path>
        <path d="M330 470L440 450L520 530L545 650L470 760L360 770L290 680L305 560Z"></path>
        <path d="M760 190L930 150L1080 200L1130 320L1020 410L860 390L760 300Z"></path>
        <path d="M1080 450L1250 420L1380 490L1360 620L1200 660L1090 570Z"></path>
        <path d="M640 560L760 540L800 620L730 690L640 665Z"></path>
      </g>
      <path d="M250 300L470 560L900 250L1210 520L760 700L250 300" fill="none" stroke="#ffc83d" stroke-width="3" stroke-opacity=".9"></path>
      <g fill="#ffc83d"><circle cx="250" cy="300" r="9"></circle><circle cx="470" cy="560" r="9"></circle><circle cx="900" cy="250" r="9"></circle><circle cx="1210" cy="520" r="9"></circle><circle cx="760" cy="700" r="9"></circle></g>
    </svg>`;

  const SEARCH_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="M15.5 15.5L21 21"></path></svg>';
  const BULB_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4"></path><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"></path></svg>';

  /* ---------- geo helpers ---------- */
  function distKm(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
  }

  // Een punt dat niet raak is maar binnen deze factor × de straal ligt, telt als "dichtbij" (oranje).
  const NEAR_FACTOR = 2.5;

  // Een klik is nooit pixelprecies: wie ver uitgezoomd klikt, krijgt extra speling (±12 px, max. 250 km).
  function clickTolKm(lat, zoom) {
    const kmPerPx = (40075 * Math.cos((lat * Math.PI) / 180)) / (256 * 2 ** zoom);
    return Math.min(250, Math.round(12 * kmPerPx));
  }

  /* Wijst elk geplaatst punt toe aan het doel waarvan het (relatief) het dichtst in een zone ligt.
     Een punt is [lat, lng, extra km speling]. */
  function evaluate(riddle, pts) {
    const score = (p, tg) => Math.min(...tg.zones.map(([lat, lng, r]) => distKm(p, [lat, lng]) / (r + (p[2] || 0))));
    const assigned = pts.map((p) => {
      let best = null, bestScore = 1;
      riddle.targets.forEach((tg, i) => {
        const s = score(p, tg);
        if (s < bestScore) { bestScore = s; best = i; }
      });
      return best;
    });
    const found = new Set(assigned.filter((i) => i !== null));
    const near = pts.map((p, k) => assigned[k] === null &&
      riddle.targets.some((tg, i) => !found.has(i) && score(p, tg) < NEAR_FACTOR));
    return { assigned, found, near };
  }

  /* Leest "1/20/13/N/103/44/23/E", "1°20'13"N 103°44'23"E" of "1.337, 103.74". */
  function parseCoord(input) {
    const s = input.trim().toUpperCase().replace(/,(?=\d)/g, '.');
    const hemi = s.match(/[NSZ]/) && s.match(/[EWO]/);
    if (hemi) {
      const m = s.match(/^([\d.\s°'"/:-]+?)\s*[\/\s]*([NSZ])[\/\s,;]*([\d.\s°'"/:-]+?)\s*[\/\s]*([EWO])\s*$/);
      if (!m) return null;
      const dms = (str) => {
        const n = str.split(/[^\d.]+/).filter(Boolean).map(Number);
        if (!n.length || n.some(isNaN)) return NaN;
        return (n[0] || 0) + (n[1] || 0) / 60 + (n[2] || 0) / 3600;
      };
      let lat = dms(m[1]), lng = dms(m[3]);
      if (m[2] !== 'N') lat = -lat;
      if (m[4] === 'W') lng = -lng;
      return valid(lat, lng);
    }
    const n = s.split(/[^\d.\-]+/).filter(Boolean).map(Number);
    if (n.length !== 2) return null;
    return valid(n[0], n[1]);
  }
  const valid = (lat, lng) => (isFinite(lat) && isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? [lat, lng] : null);

  /* ---------- zoeken: coördinaten, bekende plekken, anders online ---------- */
  async function findPlace(query) {
    const c = parseCoord(query);
    if (c) return { name: query, lat: c[0], lng: c[1], zoom: 8 };
    return window.GeoPlaces.lookup(query, state.lang) || searchOnline(query);
  }

  async function fetchJson(url) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 8000);
    try {
      const res = await fetch(url, { signal: ctl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally { clearTimeout(timer); }
  }
  // omtrek [[zuid, west], [noord, oost]], ook als die over de datumgrens loopt
  const box = (s, n, w, e) => [[s, w], [n, e < w ? e + 360 : e]];
  // zoomniveau per soort plek, voor als de omtrek te groot is om in beeld te brengen
  const zoomForRank = (rank) => (rank <= 4 ? 5 : rank <= 8 ? 6 : rank <= 12 ? 8 : rank <= 16 ? 11 : rank <= 20 ? 13 : 15);
  const PHOTON_ZOOM = { country: 5, state: 6, county: 8, city: 11, district: 12, locality: 12, street: 15, house: 16 };

  async function searchOnline(query) {
    const q = encodeURIComponent(query);
    let errors = 0;
    try {
      const [r] = await fetchJson(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=${state.lang},en&q=${q}`);
      if (r) {
        const [s, n, w, e] = r.boundingbox.map(Number);
        return { name: r.name || r.display_name.split(',')[0], lat: +r.lat, lng: +r.lon, zoom: zoomForRank(r.place_rank), bounds: box(s, n, w, e) };
      }
    } catch (err) { errors++; }
    try { // reservedienst
      const { features: [f] = [] } = await fetchJson(`https://photon.komoot.io/api/?limit=1&lang=en&q=${q}`);
      if (f) {
        const [lng, lat] = f.geometry.coordinates, p = f.properties, x = p.extent;
        return { name: p.name || query, lat, lng, zoom: PHOTON_ZOOM[p.type] || 10, bounds: x ? box(x[3], x[1], x[0], x[2]) : null };
      }
    } catch (err) { errors++; }
    if (errors === 2) throw new Error('offline');
    return null;
  }

  /* ---------- dialoogvenster (in plaats van confirm) ---------- */
  const dialog = $('#dialog');
  let dialogResolve = null;
  function askConfirm({ title, text, cancel, ok, danger }) {
    closeDialog(false);
    $('#dialog-title').textContent = title;
    $('#dialog-text').textContent = text;
    $('#dialog-cancel').textContent = cancel;
    const okBtn = $('#dialog-ok');
    okBtn.textContent = ok;
    okBtn.className = `btn ${danger ? 'danger' : 'dark'}`;
    dialog.hidden = false;
    okBtn.focus();
    return new Promise((resolve) => { dialogResolve = resolve; });
  }
  function closeDialog(result) {
    if (dialog.hidden) return;
    dialog.hidden = true;
    const resolve = dialogResolve;
    dialogResolve = null;
    if (resolve) resolve(result);
  }
  $('#dialog-cancel').addEventListener('click', () => closeDialog(false));
  $('#dialog-ok').addEventListener('click', () => closeDialog(true));
  dialog.addEventListener('click', (e) => { if (e.target === dialog) closeDialog(false); });

  async function confirmReset() {
    const ok = await askConfirm({ title: t('resetTitle'), text: t('resetText'), cancel: t('cancel'), ok: t('resetOk'), danger: true });
    if (!ok) return false;
    const lang = state.lang;
    state = freshState();
    state.lang = lang;
    save();
    return true;
  }
  const goHome = () => { if (!location.hash || location.hash === '#/') route(); else location.hash = '#/'; };

  /* ---------- plaat vergroot ---------- */
  const lightbox = $('#lightbox');
  let lbIndex = 0;
  function showPlate(i) {
    lbIndex = (i + RIDDLES.length) % RIDDLES.length;
    const q = RIDDLES[lbIndex];
    $('#lb-plate').innerHTML = CARDS[q.id](state.lang);
    $('#lb-title').textContent = `${t('riddle')} ${q.id}`;
    $('#lb-sub').textContent = placesLine(q);
  }
  function openLightbox(id) {
    showPlate(RIDDLES.findIndex((q) => q.id === id));
    $('#lb-close').setAttribute('aria-label', t('close'));
    $('#lb-prev').setAttribute('aria-label', t('prev'));
    $('#lb-next').setAttribute('aria-label', t('next'));
    lightbox.hidden = false;
    $('#lb-close').focus();
  }
  $('#lb-close').addEventListener('click', () => { lightbox.hidden = true; });
  $('#lb-prev').addEventListener('click', () => showPlate(lbIndex - 1));
  $('#lb-next').addEventListener('click', () => showPlate(lbIndex + 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.hidden = true; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!dialog.hidden) closeDialog(false);
      else lightbox.hidden = true;
    }
    if (!lightbox.hidden && e.key === 'ArrowLeft') showPlate(lbIndex - 1);
    if (!lightbox.hidden && e.key === 'ArrowRight') showPlate(lbIndex + 1);
  });

  /* ---------- zijbalk ---------- */
  // active: { type: 'home' } | { type: 'riddle', id, hintsHtml } | { type: 'final' }
  function sidebar(active) {
    const upcoming = nextUnsolved(-1);
    const rows = RIDDLES.map((q) => {
      const s = state.r[q.id];
      const isActive = active.type === 'riddle' && active.id === q.id;
      const isNext = active.type === 'home' && upcoming && upcoming.id === q.id;
      const status = s.letter ? t('stSolved') : isActive ? t('stBusy') : isNext ? t('stNext') : '';
      const cls = `${s.letter ? 'solved' : ''} ${isActive || isNext ? 'current' : ''}`;
      return `<a class="prow ${cls}" href="#/raadsel/${q.id}" ${isActive ? 'aria-current="page"' : ''}>
        <span class="pbadge">${s.letter || q.id}</span><span class="pname">${t('riddle')} ${q.id}</span>
        ${status ? `<span class="pstatus">${status}</span>` : ''}</a>`;
    }).join('');
    // Eindwoord als knop: de gevonden letters staan hier bewust niet in de juiste volgorde.
    const finalBtn = `
      <a class="prow current final-btn" href="#/finale" ${active.type === 'final' ? 'aria-current="page"' : ''}>
        <span class="pbadge">★</span><span class="pname">${t('finalTile')}</span>
      </a>`;
    const footLink = active.type === 'riddle'
      ? `<a class="side-link" href="#/">${t('home')}</a>`
      : `<button class="side-link" type="button" id="side-reset">${t('reset')}</button>`;

    return `
      <aside class="side">
        <div class="side-art" aria-hidden="true">${SIDE_ART}</div>
        <a class="brand" href="#/"><span class="brand-globe" aria-hidden="true"></span><span class="brand-name notranslate" translate="no">Geo<b>Search</b></span></a>
        <nav class="side-block" aria-label="${t('progress')}">
          <div class="side-label">${t('progress')}</div>
          <div class="prows">${rows}</div>
        </nav>
        ${active.hintsHtml || ''}
        <div class="side-bottom">
          ${finalBtn}
          <div class="side-foot">
            <button class="lang-pill" type="button" id="lang" aria-label="${t('langSwitch')}">${state.lang.toUpperCase()}</button>
            ${footLink}
          </div>
        </div>
      </aside>`;
  }

  function renderShell(active, mainHtml, mainClass) {
    document.documentElement.lang = state.lang;
    app.innerHTML = `<div class="shell">${sidebar(active)}<main class="main ${mainClass}">${mainHtml}</main></div>`;
    $('#lang').addEventListener('click', () => {
      state.lang = state.lang === 'nl' ? 'en' : 'nl';
      save();
      route();
    });
    const reset = $('#side-reset');
    if (reset) reset.addEventListener('click', async () => { if (await confirmReset()) goHome(); });
  }

  /* ---------- menu ---------- */
  function renderHome() {
    const started = RIDDLES.some((q) => state.r[q.id].letter || state.r[q.id].hints);
    const upcoming = nextUnsolved(-1);
    const startHref = upcoming ? `#/raadsel/${upcoming.id}` : '#/finale';
    const steps = [1, 2, 3].map((n) => `
      <li><span class="step-num">${n}</span><div><b>${t(`how${n}t`)}</b><span class="step-text">${t(`how${n}`)}</span></div></li>`).join('');
    const cards = RIDDLES.map((q) => {
      const s = state.r[q.id];
      const isNext = upcoming && upcoming.id === q.id;
      const badge = s.letter
        ? `<span class="badge ok">${t('solved')} · ${s.letter}</span>`
        : isNext ? `<span class="badge next">${t('continueShort')} →</span>` : `<span class="badge">${t('open')}</span>`;
      return `
        <a class="rcard ${isNext ? 'next' : ''}" href="#/raadsel/${q.id}">
          <div class="rcard-plate">${CARDS[q.id](state.lang)}</div>
          <div class="rcard-foot"><span class="rcard-name">${t('riddle')} ${q.id}</span>${badge}</div>
        </a>`;
    }).join('');

    renderShell({ type: 'home' }, `
      <div class="home">
        <span class="pill">${t('tagline')}</span>
        <div class="home-hero">
          <div>
            <h1>${t('introHello')}</h1>
            <p class="lead">${t('intro')}</p>
          </div>
          <a class="btn gold big" href="${startHref}">${started ? t('continue') : t('start')} →</a>
        </div>
        <ol class="steps">${steps}</ol>
        <div class="section-head"><h2>${t('riddles')}</h2><span>${t('solvedOf', { k: solvedCount(), n: RIDDLES.length })}</span></div>
        <div class="rgrid">${cards}</div>
        <a class="final-bar" href="#/finale">
          <span class="fb-star" aria-hidden="true">★</span>
          <span class="fb-text"><b>${t('finalTitle')}</b><small>${t('finalBarSub')}</small></span>
          <span class="fb-word">${state.final ? FINAL : '→'}</span>
        </a>
      </div>`, 'main-home');
  }

  /* ---------- raadsel ---------- */
  let map = null;

  function destroyMap() {
    // eerst lopende zoom-animaties stoppen, anders gooit Leaflet een fout na het verwijderen
    if (map) { map.stop(); map.remove(); map = null; }
  }

  function renderRiddle(id) {
    const idx = RIDDLES.findIndex((q) => q.id === id);
    if (idx < 0) { location.hash = '#/'; return; }
    const q = RIDDLES[idx];
    const s = state.r[q.id];
    const prev = RIDDLES[idx - 1], next = RIDDLES[idx + 1];
    const hints = q.hints[state.lang];
    const solved = !!s.letter;

    const hintsHtml = solved ? '' : `
      <div class="side-block side-hints">
        <button class="hints-toggle" type="button" id="hints-toggle" aria-expanded="false" aria-controls="hints-panel">
          <span class="ht-icon">${BULB_ICON}</span>
          <span>${t('hintsTitle')}</span>
          <span class="ht-count" id="hints-count"></span>
        </button>
      </div>`;

    let left;
    if (solved) {
      const nq = nextUnsolved(idx);
      left = `
        <div class="success-card">
          <div class="success-top">
            <span class="big-letter">${s.letter}</span>
            <div><div class="success-title">${t('letterOk', { l: s.letter })}</div><div class="success-sub">${t('belongsAt', { p: q.position })}</div></div>
          </div>
          <div class="success-actions">
            ${nq
              ? `<a class="btn gold grow" href="#/raadsel/${nq.id}">${t('nextRiddle')} →</a><a class="btn outline" href="#/finale">${t('toFinal')}</a>`
              : `<a class="btn gold grow" href="#/finale">${t('toFinal')} →</a>`}
          </div>
        </div>
        <div class="places-card">
          <div class="card-label">${t('foundPlaces')}</div>
          <ol class="places">${q.targets.map((tg, i) => `<li><span>${i + 1}</span>${esc(tg.name[state.lang])}</li>`).join('')}</ol>
        </div>`;
    } else {
      left = `
        <div class="info-card" id="howto">${t('howto')}</div>
        <section class="hints-card" id="hints-panel" hidden aria-labelledby="hints-card-title">
          <div class="hints-head">
            <span class="ht-icon">${BULB_ICON}</span>
            <b id="hints-card-title">${t('hintsTitle')}</b>
            <span class="hints-card-count" id="hints-card-count"></span>
            <button class="hints-close" type="button" id="hints-close" aria-label="${t('close')}" title="${t('close')}">✕</button>
          </div>
          <p class="hints-empty" id="hints-empty">${t('hintsEmpty')}</p>
          <div class="hint-view" id="hint-view" aria-live="polite">
            <span class="hint-num" id="hint-num"></span>
            <p class="hint-text" id="hint-text"></p>
          </div>
          <div class="hint-nav" id="hint-nav">
            <button class="sq-btn" type="button" id="hint-prev" aria-label="${t('prev')}">←</button>
            <span class="hint-pos" id="hint-pos"></span>
            <button class="sq-btn" type="button" id="hint-next" aria-label="${t('next')}">→</button>
          </div>
          <button class="btn dark hint-btn" type="button" id="hint-btn"></button>
        </section>
        <form class="answer-card" id="answer" autocomplete="off">
          <label class="answer-q" for="letter">${t('letterQ')}</label>
          <div class="answer-row">
            <input id="letter" class="letter-box" maxlength="1" placeholder="?">
            <button class="btn dark" type="submit">${t('check')}</button>
          </div>
          <p class="answer-status" id="answer-status" role="status"></p>
        </form>`;
    }

    const controls = solved ? `<div class="notice">${t('foundAll')}</div>` : `
      <div class="map-top">
        <form class="search" id="search" role="search" autocomplete="off">
          <input id="search-input" type="text" placeholder="${t('search')}" aria-label="${t('search')}" spellcheck="false" enterkeyhint="search">
          <button type="submit" aria-label="${t('search')}" title="${t('search')}">${SEARCH_ICON}</button>
        </form>
      </div>
      <div class="map-bottom">
        <span class="count-pill" id="count"></span>
        <div class="tool-group">
          <button type="button" id="undo" title="${t('undo')}" aria-label="${t('undo')}">↶</button>
          <button type="button" id="clear" title="${t('clear')}" aria-label="${t('clear')}">✕</button>
          <button type="button" id="move" aria-pressed="false">✥ ${t('moveShort')}</button>
        </div>
        <span class="spacer"></span>
        <button type="button" class="btn ghost-light" id="solution">${t('showSolution')}</button>
        <button type="button" class="btn gold" id="check">✓ ${t('checkPoints')}</button>
      </div>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

    renderShell({ type: 'riddle', id: q.id, hintsHtml }, `
      <div class="rhead">
        <a class="sq-btn ${prev ? '' : 'disabled'}" href="${prev ? `#/raadsel/${prev.id}` : '#/'}" aria-label="${t('prev')}">←</a>
        <div class="rhead-text"><h1>${t('riddle')} ${q.id}</h1><p>${placesLine(q)}</p></div>
        <a class="sq-btn" href="${next ? `#/raadsel/${next.id}` : '#/finale'}" aria-label="${t('next')}">→</a>
      </div>
      <div class="rbody">
        <div class="rleft">
          <button class="plate-card" type="button" id="card" aria-label="${t('enlarge')}">
            ${CARDS[q.id](state.lang)}
            <span class="zoom-chip">⤢ ${t('enlarge')}</span>
          </button>
          ${left}
        </div>
        <div class="mapbox ${solved ? 'is-solved' : ''}">
          <div id="map"></div>
          ${controls}
        </div>
      </div>`, 'main-riddle');

    $('#card').addEventListener('click', () => openLightbox(q.id));

    if (!solved) {
      // Hints staan dicht achter de knop "Hints" in de zijbalk. Open verschijnen ze links
      // in de vrije ruimte, op de plek van de uitleg. Er staat altijd maar één hint in beeld:
      // bij het openen de laatst gekregen hint, eerdere hints zijn terug te lezen met ← →.
      const hintBtn = $('#hint-btn'), view = $('#hint-view');
      const toggle = $('#hints-toggle'), panel = $('#hints-panel'), howto = $('#howto');
      let shown = s.hints - 1; // index van de hint die nu in beeld is
      let cooling = false; // korte pauze na elke hint, zodat een dubbelklik geen twee hints geeft
      const updateHints = (animate) => {
        const n = Math.min(s.hints, hints.length);
        shown = Math.max(0, Math.min(shown, n - 1));
        const done = n >= hints.length;
        hintBtn.disabled = done;
        hintBtn.textContent = t(done ? 'noMoreHints' : 'hintBtn');
        $('#hints-count').textContent = $('#hints-card-count').textContent = `${n}/${hints.length}`;
        $('#hints-empty').hidden = n > 0;
        view.hidden = n === 0;
        $('#hint-nav').hidden = n < 2;
        if (!n) return;
        $('#hint-num').textContent = String(shown + 1).padStart(2, '0');
        $('#hint-text').textContent = hints[shown];
        $('#hint-pos').textContent = t('hintOf', { n: shown + 1, t: n });
        $('#hint-prev').disabled = shown === 0;
        $('#hint-next').disabled = shown === n - 1;
        if (animate) { view.classList.remove('new'); void view.offsetWidth; view.classList.add('new'); }
      };
      const showHints = (open) => {
        panel.hidden = !open;
        howto.hidden = open;
        toggle.setAttribute('aria-expanded', String(open));
        if (open) panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      };
      updateHints();
      toggle.addEventListener('click', () => showHints(panel.hidden));
      $('#hints-close').addEventListener('click', () => { showHints(false); toggle.focus(); });
      hintBtn.addEventListener('click', () => {
        if (cooling || s.hints >= hints.length) return;
        s.hints++;
        save();
        shown = s.hints - 1;
        cooling = true;
        setTimeout(() => { cooling = false; }, 800);
        updateHints(true);
      });
      // Enter ingedrukt houden herhaalt de klik niet
      hintBtn.addEventListener('keydown', (e) => { if (e.repeat) e.preventDefault(); });
      $('#hint-prev').addEventListener('click', () => { shown--; updateHints(true); });
      $('#hint-next').addEventListener('click', () => { shown++; updateHints(true); });

      $('#answer').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = $('#letter');
        const val = input.value.trim().toUpperCase();
        if (!val) return;
        if (val === q.letter) {
          s.letter = q.letter;
          save();
          renderRiddle(q.id);
          celebrate($('.success-card'));
        } else {
          const status = $('#answer-status');
          status.textContent = t('letterBad');
          status.className = 'answer-status bad';
          input.classList.remove('shake');
          void input.offsetWidth;
          input.classList.add('shake');
          input.select();
        }
      });
    }

    setupMap(q, s, solved);
  }

  function setupMap(q, s, solved) {
    destroyMap();
    map = L.map('map', {
      center: START_VIEW.center,
      zoom: START_VIEW.zoom,
      minZoom: 2,
      maxBounds: [[-86, -900], [86, 900]],
      maxBoundsViscosity: 1,
      zoomControl: false,
      worldCopyJump: false,
    });
    L.control.zoom({ position: 'topright', zoomInTitle: '+', zoomOutTitle: '−' }).addTo(map);
    const self = map; // na een zoekopdracht: zit de speler nog op deze kaart?

    // satellietbeeld met daarboven altijd de landsgrenzen en namen (geen knoppen om te wisselen)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18, attribution: '&copy; Esri, Maxar, Earthstar Geographics | &copy; OpenStreetMap',
    }).addTo(map);
    // eigen laag tussen satelliet en lijnen/punten: namen vallen nooit over de getekende lijn en vangen geen klikken
    map.createPane('labels');
    map.getPane('labels').style.zIndex = 250;
    map.getPane('labels').style.pointerEvents = 'none';
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18, pane: 'labels',
    }).addTo(map);

    const solutionLayer = L.layerGroup().addTo(map);

    function drawSolution(withLabels, animate = true) {
      solutionLayer.clearLayers();
      const path = q.targets.map((tg) => tg.point);
      // stuk langs de kust: van het laatste doel via de kustlijn terug naar het eerste
      const coast = q.coast ? [path[path.length - 1], ...q.coast, path[0]] : [];
      [path, coast].filter((p) => p.length).forEach((p) =>
        L.polyline(p, { color: '#0b1a2c', weight: 9, opacity: 0.55, interactive: false }).addTo(solutionLayer));
      L.polyline(path, { color: '#ffc83d', weight: 5, className: 'solution-line', interactive: false }).addTo(solutionLayer);
      if (coast.length) L.polyline(coast, { color: '#ffc83d', weight: 5, className: 'solution-coast', interactive: false }).addTo(solutionLayer);
      q.targets.forEach((tg, i) => {
        const m = L.marker(tg.point, {
          keyboard: false,
          icon: L.divIcon({ className: '', html: `<span class="sol-pin">${i + 1}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }),
        }).addTo(solutionLayer);
        m.bindTooltip(esc(tg.name[state.lang]), { permanent: withLabels, direction: 'right', offset: [14, 0], className: 'sol-tip' });
      });
      const bounds = L.latLngBounds(path.concat(coast)).pad(0.2);
      if (animate) map.flyToBounds(bounds, { duration: 1.2 });
      else map.fitBounds(bounds);
    }

    if (solved) {
      // opgelost raadsel: toon de gouden lijn, zonder bedieningsknoppen
      setTimeout(() => { if (map) { map.invalidateSize(); drawSolution(false, false); } }, 60);
      return;
    }

    const drawn = L.layerGroup().addTo(map);
    const searchLayer = L.layerGroup().addTo(map);
    let moving = false; // verplaatsmodus: kaartklikken plaatsen geen nieuwe punten
    let selected = null; // in verplaatsmodus aangetikt punt dat naar de volgende kaartklik gaat

    const toast = (msg, kind = 'info') => {
      const el = $('#toast');
      if (!el) return;
      el.textContent = msg;
      el.className = `toast show ${kind}`;
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => el.classList.remove('show'), 6500);
    };

    function redraw() {
      drawn.clearLayers();
      if (s.pts.length > 1) {
        L.polyline(s.pts, { color: '#0b1a2c', weight: 6, opacity: 0.45, interactive: false }).addTo(drawn);
        L.polyline(s.pts, { color: '#ff6b4a', weight: 3, interactive: false }).addTo(drawn);
      }
      s.pts.forEach((p, i) => {
        let cls = s.res[i] || ''; // kleur van de laatste controle: ok / near / miss
        if (moving) cls += ' movable';
        if (selected === i) cls += ' selected';
        const marker = L.marker(p, {
          draggable: moving,
          keyboard: false,
          zIndexOffset: selected === i ? 1000 : 0,
          icon: L.divIcon({ className: '', html: `<span class="pin ${cls}">${i + 1}</span>`, iconSize: [28, 28], iconAnchor: [14, 14] }),
        }).addTo(drawn);
        marker.on('dragend', () => {
          const ll = marker.getLatLng();
          movePoint(i, ll.lat, ll.lng);
        });
        marker.on('click', () => {
          if (!moving) return;
          selected = selected === i ? null : i;
          redraw();
          if (selected !== null) toast(t('moveSelected', { n: i + 1 }));
        });
      });
      const n = s.pts.length;
      $('#count').textContent = n === 1 ? t('point1') : t('points', { n });
    }

    // Andere punten houden hun kleur; enkel een nieuw of verplaatst punt is nog niet gecontroleerd.
    const pointAt = (lat, lng) => [round(lat), round(lng), clickTolKm(lat, map.getZoom())];

    function addPoint(lat, lng) {
      s.pts.push(pointAt(lat, lng));
      s.res.splice(s.pts.length - 1);
      redraw();
    }

    function movePoint(i, lat, lng) {
      s.pts[i] = pointAt(lat, lng);
      s.res[i] = null;
      selected = null;
      redraw();
    }

    function setMoving(on) {
      moving = on;
      selected = null;
      const btn = $('#move');
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', String(on));
      btn.textContent = on ? `✓ ${t('moveDoneShort')}` : `✥ ${t('moveShort')}`;
      $('#map').classList.toggle('moving', on);
      redraw();
      if (on) toast(t('moveHelp'));
    }

    map.on('click', (e) => {
      if (!moving) { addPoint(e.latlng.lat, e.latlng.lng); return; }
      if (selected !== null) movePoint(selected, e.latlng.lat, e.latlng.lng);
      else toast(t('moveHelp'));
    });

    $('#undo').addEventListener('click', () => { s.pts.pop(); s.res.splice(s.pts.length); selected = null; redraw(); });
    $('#clear').addEventListener('click', () => { s.pts = []; s.res = []; selected = null; redraw(); });
    $('#move').addEventListener('click', () => {
      if (!moving && !s.pts.length) { toast(t('placeFirst'), 'plain'); return; }
      setMoving(!moving);
    });

    $('#check').addEventListener('click', () => {
      if (!s.pts.length) { toast(t('placeFirst'), 'plain'); return; }
      const ev = evaluate(q, s.pts);
      s.res = s.pts.map((_, i) => (ev.assigned[i] !== null ? 'ok' : ev.near[i] ? 'near' : 'miss'));
      selected = null;
      redraw();
      // optionele doelen (zoals Mali) kleuren wel groen, maar tellen niet mee
      const required = q.targets.map((tg, i) => (tg.optional ? null : i)).filter((i) => i !== null);
      const f = required.filter((i) => ev.found.has(i)).length, total = required.length;
      const line = $('#answer-status');
      if (f === total) {
        s.found = true;
        line.textContent = t('foundAll');
        line.className = 'answer-status good';
        drawSolution(false);
        toast(t('foundAll'), 'good');
        if (window.matchMedia('(pointer: fine)').matches) $('#letter').focus({ preventScroll: true });
        return;
      }
      // één melding met alles: hoeveel plekken, en wat oranje en grijs betekenen
      const nearCount = s.res.filter((r) => r === 'near').length;
      const missCount = s.res.filter((r) => r === 'miss').length;
      const msg = [t('found', { f, t: total }), nearCount ? t('nearPts') : '', missCount ? t('missPts') : '']
        .filter(Boolean).join(' ');
      line.textContent = msg;
      line.className = 'answer-status';
      toast(msg, nearCount ? 'near' : f ? 'good' : 'plain');
    });

    $('#solution').addEventListener('click', async () => {
      if (!s.revealed) {
        const ok = await askConfirm({ title: t('solutionTitle'), text: t('solutionText'), cancel: t('solutionCancel'), ok: t('showSolution') });
        if (!ok || !map) return;
      }
      s.revealed = true;
      save();
      drawSolution(true);
      toast(t('revealed'));
    });

    // Zoekresultaat: vlieg erheen en toon een gouden ring. De speler beslist zelf of daar een punt komt.
    function showResult(hit) {
      // kies de wereldkopie die het dichtst bij het huidige beeld ligt, zodat lijnen niet rond de aarde lopen
      const shift = 360 * Math.round((map.getCenter().lng - hit.lng) / 360);
      const lat = hit.lat, lng = hit.lng + shift;
      searchLayer.clearLayers();
      const pop = document.createElement('div');
      pop.className = 'search-pop';
      pop.innerHTML = `<b>${esc(hit.name)}</b><button type="button" class="btn gold">+ ${t('placeHere')}</button>`;
      pop.querySelector('button').addEventListener('click', () => {
        if (moving && selected !== null) movePoint(selected, lat, lng);
        else addPoint(lat, lng);
        searchLayer.clearLayers();
      });
      const marker = L.marker([lat, lng], {
        keyboard: false,
        icon: L.divIcon({ className: '', html: '<span class="search-pin"></span>', iconSize: [36, 36], iconAnchor: [18, 18] }),
      }).addTo(searchLayer);
      marker.bindPopup(pop, { className: 'search-popup', offset: [0, -14], minWidth: 190 });

      const b = hit.bounds;
      if (b && b[1][0] - b[0][0] < 40 && b[1][1] - b[0][1] < 60) {
        map.flyToBounds([[b[0][0], b[0][1] + shift], [b[1][0], b[1][1] + shift]], { maxZoom: 13, duration: 1.2 });
      } else {
        map.flyTo([lat, lng], hit.zoom || 8, { duration: 1.2 });
      }
      let opened = false;
      const open = () => {
        if (opened || map !== self || !searchLayer.hasLayer(marker)) return;
        opened = true;
        marker.openPopup();
      };
      map.once('moveend', open);
      setTimeout(open, 1500);
    }

    let searching = false;
    $('#search').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const input = $('#search-input');
      const query = input.value.trim();
      if (!query || searching) return;
      searching = true;
      form.classList.add('busy');
      let hit = null, failed = false;
      try { hit = await findPlace(query); } catch (err) { failed = true; }
      searching = false;
      form.classList.remove('busy');
      if (map !== self) return; // de speler zit intussen op een ander scherm
      if (hit) { showResult(hit); input.blur(); }
      else toast(failed ? t('searchFail') : t('notFound', { q: query }), 'error');
    });

    // Een raadsel opent altijd op de wereldkaart: geen zoom naar eerdere punten en geen oplossing.
    redraw();
    setTimeout(() => map && map.invalidateSize(), 60);
  }

  const round = (v) => Math.round(v * 10000) / 10000;

  /* ---------- eindwoord ---------- */
  function renderFinal() {
    if (state.final) { renderWon(); return; }
    const rows = [...RIDDLES].sort((a, b) => a.id.localeCompare(b.id));
    const all = solvedCount() === RIDDLES.length;

    renderShell({ type: 'final' }, `
      <div class="final-wrap">
        <div class="final-card">
          <span class="pill">${t('finalTile')}</span>
          <h1>${t('finalTitle')}</h1>
          <p class="lead">${t('finalIntro')}</p>
          <div class="final-grid">
            <div class="key">
              <div class="key-row key-head"><span>${t('colRiddle')}</span><span>${t('colPlace')}</span><span>${t('colLetter')}</span></div>
              ${rows.map((q) => {
                const l = state.r[q.id].letter;
                return `<a class="key-row" href="#/raadsel/${q.id}"><span class="key-id">${q.id}</span><span class="key-pos">${q.position}</span><span><b class="key-letter ${l ? 'on' : ''}">${l || '?'}</b></span></a>`;
              }).join('')}
            </div>
            <form class="final-form" id="final-form" autocomplete="off">
              <label class="final-q" for="final-input">${t('finalQ')}</label>
              <div class="big-slots" aria-hidden="true">
                ${[...FINAL].map((_, i) => `<div class="big-slot"><span data-slot="${i}"></span><small>${i + 1}</small></div>`).join('')}
              </div>
              <div class="final-row">
                <input id="final-input" maxlength="${FINAL.length}">
                <button class="btn gold" type="submit">${t('check')}</button>
              </div>
              <p class="final-status" id="final-feedback" role="status">${all ? t('allLetters') : t('lettersMissing')}</p>
            </form>
          </div>
        </div>
      </div>`, 'main-final');

    const input = $('#final-input');
    const syncSlots = () => {
      const v = input.value.toUpperCase();
      document.querySelectorAll('[data-slot]').forEach((el, i) => {
        el.textContent = v[i] || '';
        el.classList.toggle('filled', !!v[i]);
      });
    };
    input.addEventListener('input', syncSlots);
    syncSlots();

    $('#final-form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value.trim().toUpperCase() === FINAL) {
        state.final = true;
        save();
        renderWon();
        celebrate($('.won-content'), true);
      } else {
        const fb = $('#final-feedback');
        fb.textContent = t('finalBad');
        fb.className = 'final-status bad';
        input.classList.remove('shake');
        void input.offsetWidth;
        input.classList.add('shake');
      }
    });
  }

  /* ---------- gewonnen ---------- */
  function renderWon() {
    document.documentElement.lang = state.lang;
    app.innerHTML = `
      <section class="won">
        <div class="won-art" aria-hidden="true">${WON_ART}</div>
        <div class="won-content">
          <span class="won-pill">${t('wonBadge')}</span>
          <h1>${t('wonTitle')}</h1>
          <p>${t('wonText')}</p>
          <div class="won-letters" aria-label="${FINAL}">${[...FINAL].map((l, i) => `<span style="--i:${i}">${l}</span>`).join('')}</div>
          <div class="won-actions">
            <button class="btn gold big" type="button" id="again">${t('playAgain')}</button>
            <a class="btn ghost-light big" href="#/">${t('backToRiddles')}</a>
          </div>
        </div>
      </section>`;
    $('#again').addEventListener('click', async () => { if (await confirmReset()) goHome(); });
  }

  /* ---------- confetti ---------- */
  function celebrate(el, big = false) {
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = document.createElement('div');
    box.className = 'confetti';
    const colors = ['#ffc83d', '#ff6b4a', '#2ec4b6', '#4f8cff', '#ffffff'];
    const n = big ? 90 : 40;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('i');
      p.style.setProperty('--x', `${(Math.random() - 0.5) * (big ? 900 : 420)}px`);
      p.style.setProperty('--y', `${-120 - Math.random() * (big ? 420 : 220)}px`);
      p.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
      p.style.setProperty('--d', `${0.9 + Math.random() * 0.9}s`);
      p.style.background = colors[i % colors.length];
      box.appendChild(p);
    }
    el.appendChild(box);
    setTimeout(() => box.remove(), 2200);
  }

  /* ---------- router ---------- */
  function route() {
    const hash = location.hash || '#/';
    const m = hash.match(/^#\/raadsel\/([A-E])$/i);
    destroyMap();
    lightbox.hidden = true;
    closeDialog(false);
    if (m) renderRiddle(m[1].toUpperCase());
    else if (hash === '#/finale') renderFinal();
    else renderHome();
    const main = $('.main');
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
