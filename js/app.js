(function () {
  const RIDDLES = window.GeoRiddles;
  const TEXT = window.GeoText;
  const CARDS = window.GeoCards;
  const FINAL = window.GeoFinalWord;
  const STORE_KEY = 'geosearch-v1';
  const SPLIT_KEY = 'geosearch-split'; // breedte van de plaatkolom, door de speler versleept
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const SVG_NS = 'http://www.w3.org/2000/svg';
  // Elk raadsel start op dezelfde wereldkaart: het werelddeel zoekt de speler zelf.
  const START_VIEW = { center: [20, 10], zoom: 2 };

  const app = document.getElementById('app');
  const $ = (sel, root = document) => root.querySelector(sel);

  /* ---------- state ---------- */
  // pts/res/given: per nummer (index = doel), null zolang dat nummer niet op de kaart staat.
  // extra: vrije punten na de nummers, om een gesloten letter (D, O) langs de kust af te maken.
  // seen: geopende hints ('g0' = algemene hint, 't2' = hint voor nummer III). sol: nummers waarvan de oplossing getoond is.
  function freshState() {
    const r = {};
    RIDDLES.forEach((q) => { r[q.id] = { pts: [], res: [], given: [], extra: [], seen: [], sol: [], found: false, revealed: false, letter: null }; });
    return { lang: 'nl', r, final: false };
  }
  function loadState() {
    const base = freshState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && saved.r) {
        base.lang = saved.lang === 'en' ? 'en' : 'nl';
        base.final = !!saved.final;
        RIDDLES.forEach((q) => {
          const old = saved.r[q.id] || {};
          const s = base.r[q.id];
          s.letter = old.letter || null;
          s.revealed = !!old.revealed;
          // oudere versies bewaarden enkel een aantal hints: die beginnen opnieuw
          if (Array.isArray(old.seen)) s.seen = old.seen.filter((k) => typeof k === 'string');
          if (Array.isArray(old.sol)) s.sol = old.sol.filter((i) => Number.isInteger(i) && i >= 0 && i < q.targets.length);
        });
      }
    } catch (e) { /* geen opslag beschikbaar */ }
    return base;
  }
  let state = loadState();
  // Geplaatste punten worden niet bewaard tussen bezoeken: een raadsel opent nooit met punten.
  // Letters, hints, getoonde oplossingen en taal blijven wel bewaard.
  const save = () => {
    try {
      const r = {};
      Object.entries(state.r).forEach(([id, s]) => { r[id] = { ...s, pts: [], res: [], given: [], extra: [], found: false }; });
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
  const TRASH_ICON = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"></path></svg>';

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

  /* Beoordeelt de punten, in welke volgorde de speler ze ook plaatste. Een punt is [lat, lng, extra km speling].
     Een punt op de juiste plek van een ander nummer krijgt het nummer van die plek.
     order[nummer] = index van het punt dat daar komt · res[nummer] = ok (juist) / near (dichtbij) / miss (nog niet goed) */
  function evaluate(riddle, pts) {
    const score = (p, j) => Math.min(...riddle.targets[j].zones.map(([lat, lng, r]) => distKm(p, [lat, lng]) / (r + (p[2] || 0))));
    const order = pts.map((p, i) => (p && score(p, i) < 1 ? i : null)); // al juist bij het eigen nummer: blijft staan
    const left = pts.map((p, i) => (p && order[i] === null ? i : -1)).filter((i) => i >= 0);
    // de rest schuift naar een vrij nummer waarvan het op de plek ligt, de beste match eerst
    const pairs = [];
    left.forEach((i) => order.forEach((o, j) => { if (o === null && score(pts[i], j) < 1) pairs.push([score(pts[i], j), i, j]); }));
    pairs.sort((a, b) => a[0] - b[0]).forEach(([, i, j]) => { if (order[j] === null && !order.includes(i)) order[j] = i; });
    // punten die nergens juist liggen: eigen nummer als dat vrij is, anders het nummer dat een verschoven punt vrijmaakte
    left.filter((i) => !order.includes(i)).forEach((i) => {
      const k = order[i];
      order[k === null ? i : order[k] === null ? k : order.indexOf(null)] = i;
    });
    const found = order.map((old, j) => old !== null && score(pts[old], j) < 1);
    const res = order.map((old, j) => {
      if (old === null) return null;
      if (found[j]) return 'ok';
      return riddle.targets.some((_, k) => !found[k] && score(pts[old], k) < NEAR_FACTOR) ? 'near' : 'miss';
    });
    return { order, res };
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
    // Op het startscherm is "Start spel" de enige weg het spel in: daar geen raadsels of eindwoord in de zijbalk.
    const home = active.type === 'home';
    const rows = RIDDLES.map((q) => {
      const s = state.r[q.id];
      const isActive = active.type === 'riddle' && active.id === q.id;
      const status = s.letter ? t('stSolved') : isActive ? t('stBusy') : '';
      const cls = `${s.letter ? 'solved' : ''} ${isActive ? 'current' : ''}`;
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
        ${home ? '' : `
        <nav class="side-block" aria-label="${t('progress')}">
          <div class="side-label">${t('progress')}</div>
          <div class="prows">${rows}</div>
        </nav>`}
        ${active.hintsHtml || ''}
        <div class="side-bottom">
          ${home ? '' : finalBtn}
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
    const upcoming = nextUnsolved(-1);
    const startHref = upcoming ? `#/raadsel/${upcoming.id}` : '#/finale';
    const steps = [1, 2, 3].map((n) => `
      <li><span class="step-num">${n}</span><div><b>${t(`how${n}t`)}</b><span class="step-text">${t(`how${n}`)}</span></div></li>`).join('');

    renderShell({ type: 'home' }, `
      <div class="home">
        <span class="pill">${t('tagline')}</span>
        <div class="home-hero">
          <div>
            <h1>${t('introHello')}</h1>
            <p class="lead">${t('intro')}</p>
          </div>
          <a class="btn gold big" href="${startHref}">${t('start')} →</a>
        </div>
        <ol class="steps">${steps}</ol>
      </div>`, 'main-home');
  }

  /* ---------- raadsel ---------- */
  let map = null;

  function destroyMap() {
    // eerst lopende zoom-animaties stoppen, anders gooit Leaflet een fout na het verwijderen
    if (map) { map.stop(); map.remove(); map = null; }
  }
  const refitMap = () => { if (map) map.invalidateSize({ debounceMoveend: true }); };

  /* Versleepbare scheiding tussen plaat en kaart. De breedte blijft bewaard voor alle raadsels. */
  const SPLIT_MIN = 300, MAP_MIN = 380;
  function setupSplitter() {
    const body = $('#rbody'), bar = $('#splitter');
    let frame = 0;
    const bounds = () => {
      const cs = getComputedStyle(body);
      const inner = body.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      return { left: body.getBoundingClientRect().left + parseFloat(cs.paddingLeft), max: Math.max(SPLIT_MIN, inner - bar.offsetWidth - MAP_MIN) };
    };
    const current = () => Math.round($('.rleft').getBoundingClientRect().width);
    const apply = (px) => {
      if (px) body.style.setProperty('--left', `${Math.round(Math.max(SPLIT_MIN, Math.min(px, bounds().max)))}px`);
      else body.style.removeProperty('--left');
      bar.setAttribute('aria-valuenow', String(current()));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(refitMap);
    };
    const store = (px) => { try { if (px) localStorage.setItem(SPLIT_KEY, String(px)); else localStorage.removeItem(SPLIT_KEY); } catch (e) { /* ignore */ } };
    let saved = 0;
    try { saved = parseInt(localStorage.getItem(SPLIT_KEY), 10) || 0; } catch (e) { /* ignore */ }
    bar.setAttribute('aria-valuemin', String(SPLIT_MIN));
    apply(saved);

    bar.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      bar.setPointerCapture(e.pointerId);
      const grab = e.clientX - bar.getBoundingClientRect().left;
      const { left } = bounds();
      document.body.classList.add('resizing');
      const move = (ev) => apply(ev.clientX - grab - left);
      const up = () => {
        bar.removeEventListener('pointermove', move);
        bar.removeEventListener('pointerup', up);
        bar.removeEventListener('pointercancel', up);
        document.body.classList.remove('resizing');
        store(current());
      };
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', up);
      bar.addEventListener('pointercancel', up);
    });
    // dubbelklik zet de standaardbreedte terug
    bar.addEventListener('dblclick', () => { apply(0); store(0); });
    bar.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 80 : 30;
      const next = { ArrowLeft: current() - step, ArrowRight: current() + step, Home: SPLIT_MIN, End: bounds().max }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      apply(next);
      store(current());
    });
  }

  function renderRiddle(id) {
    const idx = RIDDLES.findIndex((q) => q.id === id);
    if (idx < 0) { location.hash = '#/'; return; }
    const q = RIDDLES[idx];
    const s = state.r[q.id];
    const prev = RIDDLES[idx - 1], next = RIDDLES[idx + 1];
    const general = q.hints[state.lang];
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
              ? `<a class="btn gold grow" href="#/raadsel/${nq.id}">${t('nextRiddle')} →</a>`
              : `<a class="btn gold grow" href="#/finale">${t('toFinal')} →</a>`}
          </div>
        </div>
        <div class="places-card">
          <div class="card-label">${t('foundPlaces')}</div>
          <ol class="places">${q.targets.map((tg, i) => `<li><span>${ROMAN[i]}</span>${esc(tg.name[state.lang])}</li>`).join('')}</ol>
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
          <div class="hint-tabs" id="hint-tabs" role="tablist" aria-label="${t('hintsTitle')}">
            <button class="hint-tab wide" type="button" role="tab" data-tab="g" aria-controls="hint-body">${t('tabGeneral')}</button>
            ${q.targets.map((_, i) => `<button class="hint-tab" type="button" role="tab" data-tab="${i}" aria-controls="hint-body" aria-label="${t('pointN', { n: ROMAN[i] })}">${ROMAN[i]}</button>`).join('')}
          </div>
          <p class="hints-pick" id="hints-pick">${t('hintsPick')}</p>
          <div class="hint-body" id="hint-body" role="tabpanel" aria-live="polite" hidden></div>
          <button class="hint-full" type="button" id="solution">${t('showSolution')}</button>
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
        <div class="num-tray" role="group" aria-label="${t('trayLabel')}">
          ${q.targets.map((_, i) => `<button type="button" class="num-chip" data-chip="${i}" title="${t('chipHelp')}" aria-label="${t('pointN', { n: ROMAN[i] })}" aria-pressed="false">${ROMAN[i]}</button>`).join('')}
        </div>
        <div class="tool-group">
          <button type="button" id="undo" title="${t('undo')}" aria-label="${t('undo')}">↶</button>
          <button type="button" id="clear" title="${t('clear')}" aria-label="${t('clear')}">${TRASH_ICON}</button>
        </div>
        <span class="spacer"></span>
        <button type="button" class="btn gold" id="check">✓ ${t('checkPoints')}</button>
      </div>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

    renderShell({ type: 'riddle', id: q.id, hintsHtml }, `
      <div class="rhead">
        <a class="sq-btn ${prev ? '' : 'disabled'}" href="${prev ? `#/raadsel/${prev.id}` : '#/'}" aria-label="${t('prev')}">←</a>
        <div class="rhead-text"><h1>${t('riddle')} ${q.id}</h1><p>${placesLine(q)}</p></div>
        <a class="sq-btn" href="${next ? `#/raadsel/${next.id}` : '#/finale'}" aria-label="${t('next')}">→</a>
      </div>
      <div class="rbody" id="rbody">
        <div class="rleft">
          <button class="plate-card" type="button" id="card" aria-label="${t('enlarge')}">
            ${CARDS[q.id](state.lang)}
            <span class="zoom-chip">⤢ ${t('enlarge')}</span>
          </button>
          ${left}
        </div>
        <div class="splitter" id="splitter" role="separator" aria-orientation="vertical" tabindex="0" aria-label="${t('splitter')}" title="${t('splitter')}"><span></span></div>
        <div class="mapbox ${solved ? 'is-solved' : ''}">
          <div id="map"></div>
          ${controls}
        </div>
      </div>`, 'main-riddle');

    $('#card').addEventListener('click', () => openLightbox(q.id));
    setupSplitter();
    const mapApi = setupMap(q, s, solved);
    if (solved) return;

    /* Hints om uit te kiezen: wie op "Algemeen" of een nummer klikt, krijgt meteen die hint.
       Lukt het met de hint van een nummer echt niet, dan kan de oplossing van enkel dat nummer getoond worden. */
    const toggle = $('#hints-toggle'), panel = $('#hints-panel'), howto = $('#howto'), body = $('#hint-body');
    let tab = null; // nog niets gekozen
    let cooling = false; // korte pauze na elke klik, zodat een dubbelklik niet meteen de volgende stap geeft
    const seen = (key) => s.seen.includes(key);
    const unlock = (key) => { if (!seen(key)) { s.seen.push(key); save(); } };

    // het vak van het gekozen nummer licht op in de plaat
    const plateNums = [...document.querySelectorAll('#card [data-num]')].filter((g) => +g.dataset.num < q.targets.length);

    function renderHints(animate) {
      const count = general.filter((_, i) => seen(`g${i}`)).length + q.targets.filter((_, i) => seen(`t${i}`)).length;
      $('#hints-count').textContent = $('#hints-card-count').textContent = `${count}/${general.length + q.targets.length}`;
      panel.querySelectorAll('.hint-tab').forEach((el, k) => {
        const key = el.dataset.tab, on = key === String(tab);
        el.setAttribute('aria-selected', String(on));
        el.tabIndex = on || (tab === null && k === 0) ? 0 : -1;
        el.classList.toggle('seen', key === 'g' ? general.some((_, i) => seen(`g${i}`)) : seen(`t${key}`));
        el.classList.toggle('sol', key !== 'g' && s.sol.includes(+key));
      });
      plateNums.forEach((g) => {
        const on = !panel.hidden && g.dataset.num === String(tab);
        if (on && !g.querySelector('.num-hit')) {
          const b = g.getBBox();
          const hit = document.createElementNS(SVG_NS, 'rect');
          hit.setAttribute('class', 'num-hit');
          [['x', b.x - 8], ['y', b.y - 8], ['width', b.width + 16], ['height', b.height + 16]].forEach(([k, v]) => hit.setAttribute(k, v));
          g.append(hit);
        }
        g.classList.toggle('focus', on);
      });

      $('#hints-pick').hidden = tab !== null;
      body.hidden = tab === null;
      if (tab === null) return;
      if (tab === 'g') {
        const open = general.filter((_, i) => seen(`g${i}`));
        const more = general.some((_, i) => !seen(`g${i}`));
        body.innerHTML = `
          <ol class="hint-list">${open.map((h, i) => `<li><span class="hint-num">${String(i + 1).padStart(2, '0')}</span><p class="hint-text">${esc(h)}</p></li>`).join('')}</ol>
          ${more ? `<button class="btn outline hint-more" type="button" data-act="general">${t('moreGeneral')}</button>` : ''}`;
      } else {
        const n = ROMAN[tab], tg = q.targets[tab];
        body.innerHTML = `
          <div class="hint-view"><span class="hint-num">${n}</span><p class="hint-text">${esc(tg.hint[state.lang])}</p></div>
          ${s.sol.includes(tab)
            ? `<div class="sol-box">
                 <span class="card-label">${t('solNumTitle', { n })}</span>
                 <b>${esc(tg.name[state.lang])}</b>
                 <button class="btn outline" type="button" data-act="place">${t('putOnMap')}</button>
               </div>`
            : `<button class="btn outline hint-more" type="button" data-act="solution">${t('solNumBtn', { n })}</button>`}`;
      }
      if (animate) { body.classList.remove('new'); void body.offsetWidth; body.classList.add('new'); }
    }

    const showHints = (open) => {
      panel.hidden = !open;
      howto.hidden = open;
      toggle.setAttribute('aria-expanded', String(open));
      renderHints();
      if (open) panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
    renderHints();
    toggle.addEventListener('click', () => showHints(panel.hidden));
    $('#hints-close').addEventListener('click', () => { showHints(false); toggle.focus(); });

    const tabs = $('#hint-tabs');
    const selectTab = (key, focus) => {
      tab = key === 'g' ? 'g' : +key;
      // kiezen is vragen: de eerste algemene hint of de hint van dat nummer komt meteen
      if (tab === 'g') { if (!general.some((_, i) => seen(`g${i}`))) unlock('g0'); } else unlock(`t${tab}`);
      cooling = true;
      setTimeout(() => { cooling = false; }, 800);
      renderHints(true);
      if (focus) panel.querySelector(`.hint-tab[data-tab="${key}"]`).focus();
    };
    tabs.addEventListener('click', (e) => {
      const el = e.target.closest('.hint-tab');
      if (el) selectTab(el.dataset.tab);
    });
    tabs.addEventListener('keydown', (e) => {
      const keys = ['g', ...q.targets.map((_, i) => String(i))];
      const step = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (!step) return;
      e.preventDefault();
      const cur = tab === null ? -1 : keys.indexOf(String(tab));
      selectTab(keys[(cur + step + keys.length) % keys.length], true);
    });

    body.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn || cooling) return;
      const act = btn.dataset.act;
      if (act === 'place') { mapApi.placeSolution(tab); return; }
      if (act === 'general') {
        const nextHint = general.findIndex((_, i) => !seen(`g${i}`));
        if (nextHint < 0) return;
        unlock(`g${nextHint}`);
      } else if (act === 'solution') {
        if (!s.sol.includes(tab)) { s.sol.push(tab); save(); }
        mapApi.placeSolution(tab);
      }
      cooling = true;
      setTimeout(() => { cooling = false; }, 800);
      renderHints(true);
      // met het toetsenbord blijft de focus in de hintkaart
      if (e.detail === 0) { const f = body.querySelector('[data-act]'); if (f) f.focus(); }
    });
    // Enter ingedrukt houden herhaalt de klik niet
    body.addEventListener('keydown', (e) => { if (e.repeat && e.target.closest('[data-act]')) e.preventDefault(); });

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
    const self = map; // na een zoekopdracht of dialoog: zit de speler nog op deze kaart?

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
          icon: L.divIcon({ className: '', html: `<span class="sol-pin">${ROMAN[i]}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }),
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
      return null;
    }

    const N = q.targets.length;
    if (s.pts.length !== N) { s.pts = Array(N).fill(null); s.res = Array(N).fill(null); s.given = []; s.extra = []; }
    const drawn = L.layerGroup().addTo(map);
    const searchLayer = L.layerGroup().addTo(map);
    const history = []; // toestand vóór elke wijziging, voor ↶
    let extraTold = false; // uitleg over extra punten één keer per bezoek
    let chosen = null; // aangeklikt nummer (nog niet op de kaart) dat bij de volgende kaartklik geplaatst wordt
    let dragged = false; // net een nummer gesleept: de klik die daarop volgt kiest geen nummer

    const toast = (msg, kind = 'info') => {
      const el = $('#toast');
      if (!el) return;
      el.textContent = msg;
      el.className = `toast show ${kind}`;
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => el.classList.remove('show'), 6500);
    };
    const hideToast = () => { const el = $('#toast'); if (el) el.classList.remove('show'); };

    const placed = () => s.pts.map((p, i) => (p ? i : -1)).filter((i) => i >= 0);
    const firstFree = () => s.pts.findIndex((p) => !p);
    const allPlaced = () => firstFree() < 0;
    const lineClosed = () => {
      const last = s.extra[s.extra.length - 1], start = s.pts[0];
      return !!(last && start && last[0] === start[0] && last[1] === start[1]);
    };
    const remember = () => {
      history.push({ pts: s.pts.map((p) => p && [...p]), res: [...s.res], given: [...s.given], extra: s.extra.map((p) => [...p]) });
      if (history.length > 100) history.shift();
    };

    function redraw() {
      drawn.clearLayers();
      /* Volle lijnen enkel tussen opeenvolgende nummers; ontbreekt er een nummer, dan is er daar geen lijn.
         Extra punten trekken de lijn verder vanaf het laatste nummer, zodra alle nummers staan. */
      const nodeLL = (nd) => (nd.extra ? s.extra[nd.i] : s.pts[nd.i]);
      const groups = [[]];
      s.pts.forEach((p, i) => {
        if (p) groups[groups.length - 1].push({ extra: false, i });
        else groups.push([]);
      });
      if (!allPlaced()) groups.push([]);
      s.extra.forEach((_, i) => groups[groups.length - 1].push({ extra: true, i }));
      const segs = groups.filter((g) => g.length > 1).map((nodes) => {
        const ll = nodes.map(nodeLL);
        return { nodes, lines: [
          L.polyline(ll, { color: '#0b1a2c', weight: 6, opacity: 0.45, interactive: false }).addTo(drawn),
          L.polyline(ll, { color: '#ff6b4a', weight: 3, lineJoin: 'round', interactive: false }).addTo(drawn),
        ] };
      });
      // de lijnen bewegen mee tijdens het slepen
      const follow = (nd, marker) => () => segs.forEach((sg) => {
        if (!sg.nodes.some((x) => x.extra === nd.extra && x.i === nd.i)) return;
        const ll = sg.nodes.map((x) => (x.extra === nd.extra && x.i === nd.i ? marker.getLatLng() : nodeLL(x)));
        sg.lines.forEach((l) => l.setLatLngs(ll));
      });

      placed().forEach((i) => {
        const cls = [s.res[i] || '', s.given.includes(i) ? 'given' : ''].join(' ');
        const marker = L.marker(s.pts[i], {
          draggable: true,
          keyboard: false,
          riseOnHover: true,
          zIndexOffset: 500,
          icon: L.divIcon({ className: '', html: `<span class="pin ${cls}">${ROMAN[i]}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }),
        }).addTo(drawn);
        marker.on('dragstart', () => { map.closePopup(); hideToast(); });
        marker.on('drag', follow({ extra: false, i }, marker));
        marker.on('dragend', () => { const ll = marker.getLatLng(); setPoint(i, ll.lat, ll.lng); });
        marker.on('click', () => openPinMenu(false, i, marker));
      });
      s.extra.forEach((p, i) => {
        const marker = L.marker(p, {
          draggable: true,
          keyboard: false,
          icon: L.divIcon({ className: '', html: '<span class="pin extra"></span>', iconSize: [16, 16], iconAnchor: [8, 8] }),
        }).addTo(drawn);
        marker.on('dragstart', () => { map.closePopup(); hideToast(); });
        marker.on('drag', follow({ extra: true, i }, marker));
        marker.on('dragend', () => moveExtra(i, marker.getLatLng()));
        marker.on('click', () => openPinMenu(true, i, marker));
      });

      if (chosen !== null && s.pts[chosen]) chosen = null;
      document.querySelectorAll('.num-chip[data-chip]').forEach((el) => {
        const i = +el.dataset.chip;
        el.className = `num-chip ${s.pts[i] ? 'placed' : ''} ${s.res[i] || ''} ${chosen === i ? 'chosen' : ''}`;
        el.setAttribute('aria-pressed', String(chosen === i));
      });
      $('#undo').disabled = !history.length;
      $('#clear').disabled = !placed().length && !s.extra.length;
    }

    // Andere punten houden hun kleur; enkel een nieuw of verplaatst punt is nog niet gecontroleerd.
    const pointAt = (lat, lng) => [round(lat), round(lng), clickTolKm(lat, map.getZoom())];

    function setPoint(i, lat, lng) {
      remember();
      s.pts[i] = pointAt(lat, lng);
      s.res[i] = null;
      s.given = s.given.filter((j) => j !== i);
      if (chosen === i) { chosen = null; hideToast(); }
      redraw();
    }

    // Een nummer dat nog niet op de kaart staat kiezen: de volgende klik op de kaart zet dat nummer.
    function choose(i) {
      if (s.pts[i]) return; // staat al op de kaart: verslepen volstaat
      chosen = chosen === i ? null : i;
      redraw();
      if (chosen !== null) toast(t('chosen', { n: ROMAN[i] }));
      else hideToast();
    }

    // Een extra punt vlak bij punt I (tot 24 px) komt precies op punt I: zo sluit de lijn netjes.
    function snap(ll) {
      const start = s.pts[0];
      if (start && map.latLngToContainerPoint(ll).distanceTo(map.latLngToContainerPoint(start)) <= 24) return [start[0], start[1]];
      return [round(ll.lat), round(ll.lng)];
    }
    function addExtra(ll) {
      remember();
      s.extra.push(snap(ll));
      redraw();
      if (!extraTold && !lineClosed()) { extraTold = true; toast(t('extraPlaced')); }
    }
    function moveExtra(i, ll) {
      remember();
      s.extra[i] = snap(ll);
      redraw();
    }

    function removePoint(extra, i) {
      remember();
      if (extra) s.extra.splice(i, 1);
      else {
        s.pts[i] = null;
        s.res[i] = null;
        s.given = s.given.filter((j) => j !== i);
      }
      redraw();
    }

    function closeLine() {
      remember();
      s.extra.push([s.pts[0][0], s.pts[0][1]]);
      redraw();
    }

    // Oplossing van één nummer: het punt komt op de juiste plek en de kaart vliegt erheen.
    function placeSolution(i) {
      if (map !== self) return;
      const [lat, baseLng] = q.targets[i].point;
      // zelfde wereldkopie als het dichtstbijzijnde nummer, zodat de lijn niet rond de aarde loopt
      const near = placed().filter((j) => j !== i).sort((a, b) => Math.abs(a - i) - Math.abs(b - i))[0];
      const lng = near === undefined ? baseLng : baseLng + 360 * Math.round((s.pts[near][1] - baseLng) / 360);
      remember();
      s.pts[i] = [lat, lng, 0];
      s.res[i] = 'ok';
      if (!s.given.includes(i)) s.given.push(i);
      redraw();
      map.flyTo([lat, lng], Math.min(Math.max(map.getZoom(), 4), 6), { duration: 1.2 });
      toast(t('solPlaced', { n: ROMAN[i] }), 'good');
    }

    function openPinMenu(extra, i, marker) {
      const canClose = !extra && i === 0 && q.coast && s.extra.length && allPlaced() && !lineClosed();
      const menu = document.createElement('div');
      menu.className = 'pin-pop';
      menu.innerHTML = `<b>${extra ? t('extraPoint') : t('pointN', { n: ROMAN[i] })}</b>
        ${canClose ? `<button type="button" class="btn gold" data-act="close">✓ ${t('closeLine')}</button>` : ''}
        <button type="button" class="btn outline" data-act="remove">✕ ${t('remove')}</button>`;
      menu.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-act]');
        if (!btn) return;
        map.closePopup();
        if (btn.dataset.act === 'close') closeLine();
        else removePoint(extra, i);
      });
      L.popup({ className: 'search-popup', offset: [0, extra ? -6 : -12], closeButton: false, autoPan: false })
        .setLatLng(marker.getLatLng()).setContent(menu).openOn(map);
    }

    // Klik op de kaart: het gekozen nummer, anders het eerste vrije, daarna (bij een kust) extra punten.
    // De volgorde maakt niet uit: bij het controleren krijgt een juiste plek het nummer van haar vak.
    map.on('click', (e) => {
      const i = chosen !== null ? chosen : firstFree();
      if (i >= 0) setPoint(i, e.latlng.lat, e.latlng.lng);
      else if (q.coast) addExtra(e.latlng);
      else toast(t('allPlaced'), 'plain');
    });

    /* Nummers slepen van de balk onder de kaart, rechtstreeks op de kaart. */
    const overMap = (ev) => {
      const el = document.elementFromPoint(ev.clientX, ev.clientY);
      return !!el && !!el.closest('#map') && !el.closest('.leaflet-control');
    };
    function dragNumber(e, i, source) {
      if (e.button !== 0) return;
      e.preventDefault();
      const x0 = e.clientX, y0 = e.clientY;
      let ghost = null;
      const move = (ev) => {
        if (ev.pointerId !== e.pointerId) return;
        if (!ghost) {
          if (Math.hypot(ev.clientX - x0, ev.clientY - y0) < 6) return; // nog maar een klik
          ghost = document.createElement('span');
          ghost.className = 'pin drag-ghost';
          ghost.textContent = ROMAN[i];
          document.body.appendChild(ghost);
          source.classList.add('dragging');
          document.body.classList.add('dragging-num');
          map.closePopup();
          hideToast();
        }
        ghost.style.left = `${ev.clientX}px`;
        ghost.style.top = `${ev.clientY}px`;
        ghost.classList.toggle('over', overMap(ev));
      };
      const end = (ev) => {
        if (ev.pointerId !== e.pointerId) return;
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', end);
        window.removeEventListener('pointercancel', end);
        if (!ghost) return;
        ghost.remove();
        source.classList.remove('dragging');
        document.body.classList.remove('dragging-num');
        dragged = true;
        setTimeout(() => { dragged = false; }, 0);
        if (ev.type === 'pointerup' && map === self && overMap(ev)) {
          const ll = map.mouseEventToLatLng(ev);
          setPoint(i, ll.lat, ll.lng);
        }
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
    }
    document.querySelectorAll('.num-chip[data-chip]').forEach((el) => {
      el.addEventListener('pointerdown', (e) => dragNumber(e, +el.dataset.chip, el));
      el.addEventListener('click', () => { if (!dragged) choose(+el.dataset.chip); });
    });

    $('#undo').addEventListener('click', () => {
      const prev = history.pop();
      if (!prev) return;
      Object.assign(s, prev);
      map.closePopup();
      redraw();
    });

    $('#clear').addEventListener('click', async () => {
      if (!placed().length && !s.extra.length) return;
      const ok = await askConfirm({ title: t('clearTitle'), text: t('clearText'), cancel: t('cancel'), ok: t('clearOk'), danger: true });
      if (!ok || map !== self) return;
      remember();
      s.pts = Array(N).fill(null);
      s.res = Array(N).fill(null);
      s.given = [];
      s.extra = [];
      redraw();
    });

    $('#check').addEventListener('click', () => {
      if (!placed().length) { toast(t('placeFirst'), 'plain'); return; }
      const { order, res } = evaluate(q, s.pts);
      const renumbered = order.some((old, j) => old !== null && old !== j);
      if (renumbered) {
        remember(); // met ↶ komen de oude nummers terug
        const pts = s.pts;
        s.pts = order.map((old) => (old === null ? null : pts[old]));
        s.given = s.given.map((old) => order.indexOf(old)).filter((j) => j >= 0);
      }
      s.res = res;
      redraw();
      // extra punten worden niet beoordeeld
      const f = res.filter((r) => r === 'ok').length, total = N;
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
      // één melding met alles: hoeveel plekken, en wat de kleuren betekenen
      const count = (r) => s.res.filter((x) => x === r).length;
      const msg = [
        t('found', { f, t: total }),
        renumbered ? t('renumbered') : '',
        count('near') ? t('nearPts') : '',
        count('miss') ? t('missPts') : '',
        s.pts.some((p) => !p) ? t('notPlaced') : '',
      ].filter(Boolean).join(' ');
      line.textContent = msg;
      line.className = 'answer-status';
      toast(msg, count('near') ? 'near' : f ? 'good' : 'plain');
    });

    $('#solution').addEventListener('click', async () => {
      if (!s.revealed) {
        const ok = await askConfirm({ title: t('solutionTitle'), text: t('solutionText'), cancel: t('solutionCancel'), ok: t('showSolution') });
        if (!ok || map !== self) return;
      }
      s.revealed = true;
      save();
      drawSolution(true);
      toast(t('revealed'));
    });

    // Zoekresultaat: vlieg erheen en toon een gouden ring. De speler kiest zelf welk nummer daar komt.
    function showResult(hit) {
      // kies de wereldkopie die het dichtst bij het huidige beeld ligt, zodat lijnen niet rond de aarde lopen
      const shift = 360 * Math.round((map.getCenter().lng - hit.lng) / 360);
      const lat = hit.lat, lng = hit.lng + shift;
      searchLayer.clearLayers();
      const pop = document.createElement('div');
      pop.className = 'search-pop';
      const fillPop = () => {
        const suggest = chosen !== null ? chosen : firstFree();
        pop.innerHTML = `<b>${esc(hit.name)}</b><span class="pop-label">${t('placeAs')}</span>
          <div class="pop-nums">${q.targets.map((_, i) => `<button type="button" class="num-chip ${s.pts[i] ? 'placed' : ''} ${i === suggest ? 'suggest' : ''}" data-i="${i}" aria-label="${t('pointN', { n: ROMAN[i] })}">${ROMAN[i]}</button>`).join('')}</div>`;
        pop.querySelectorAll('[data-i]').forEach((btn) => btn.addEventListener('click', () => {
          setPoint(+btn.dataset.i, lat, lng);
          searchLayer.clearLayers();
        }));
      };
      fillPop();
      const marker = L.marker([lat, lng], {
        keyboard: false,
        icon: L.divIcon({ className: '', html: '<span class="search-pin"></span>', iconSize: [36, 36], iconAnchor: [18, 18] }),
      }).addTo(searchLayer);
      marker.bindPopup(pop, { className: 'search-popup', offset: [0, -14], minWidth: Math.max(190, N * 42 + 8) });
      marker.on('popupopen', fillPop);

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
    return { placeSolution };
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
