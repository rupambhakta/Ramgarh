/* DMFT Work Monitoring Portal, Ramgarh - shared helpers: formatting, icons, photos, modal/toast, charts, export, filters, workflow engine. */
(function () {
  "use strict";
  var App = window.App = window.App || {};
  var DM = window.DM;

  // ---------- Escaping and icons ----------
  App.esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  App.icon = function (n, cls) { return '<svg class="ic' + (cls ? " " + cls : "") + '" aria-hidden="true" focusable="false"><use href="#i-' + n + '"/></svg>'; };
  var P = {
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', close: '<path d="M6 6l12 12M18 6L6 18"/>',
    "chev-down": '<path d="M6.5 9.5l5.5 5.5 5.5-5.5"/>', "chev-right": '<path d="M9.5 6l6 6-6 6"/>', "chev-left": '<path d="M14.5 6l-6 6 6 6"/>',
    "arrow-right": '<path d="M5 12h14M13.5 6.5L19 12l-5.5 5.5"/>', "arrow-left": '<path d="M19 12H5M10.5 6.5L5 12l5.5 5.5"/>',
    external: '<path d="M14 4h6v6M20 4l-8.5 8.5M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>', upload: '<path d="M12 15.5V4.5M7 9l5-5 5 5M5 20h14"/>',
    file: '<path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3.5V8h4.5M9 13h6M9 16.5h6"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>', clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    location: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    phone: '<path d="M6 4h3l1.5 4.2-2 1.4a11 11 0 0 0 5.9 5.9l1.4-2L20 15v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 4.5 5.6 1.5 1.5 0 0 1 6 4z"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>', rupee: '<path d="M7 4.5h10M7 9h10M7 4.5h3.5a4.5 4.5 0 0 1 0 9H7l8 6.5"/>',
    wallet: '<rect x="3.5" y="6" width="17" height="13.5" rx="2"/><path d="M3.5 10h17M15.5 14.5h2"/><path d="M6 6l9-2.5 1 2.5"/>',
    folder: '<path d="M3.5 7A1.5 1.5 0 0 1 5 5.5h4l2 2h8A1.5 1.5 0 0 1 20.5 9v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18z"/>',
    water: '<path d="M12 3.5s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/><path d="M9.3 15a2.7 2.7 0 0 0 2.7 2.7"/>',
    road: '<path d="M8.5 3.5L5 20.5M15.5 3.5L19 20.5M12 4v2.5M12 10v3M12 16.5v3.5"/>', bank: '<path d="M3.5 9.5L12 4.5l8.5 5M5 9.5h14M6.5 9.5v8M10 9.5v8M14 9.5v8M17.5 9.5v8M4 20h16"/>',
    chart: '<path d="M4 20h16M7 17v-6M12 17V7M17 17v-9"/>', table: '<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 9.5v10"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>', info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.8-5"/>', tick: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    warning: '<path d="M12 4l9 15.5H3z"/><path d="M12 10v4M12 16.8v.2"/>', pending: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    contrast: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" stroke="none"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.5 5.5 3.5 8.5s-1.1 5.9-3.5 8.5c-2.4-2.6-3.5-5.5-3.5-8.5s1.1-5.9 3.5-8.5z"/>',
    a11y: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="7.4" r="1.2"/><path d="M7.5 10l4.5 1 4.5-1M12 11v3M12 14l-2.5 4M12 14l2.5 4"/>',
    home: '<path d="M4 11l8-6.5 8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    users: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M16.5 13.5c2.3 0 4 1.8 4 4.5"/>',
    person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"/>',
    map: '<path d="M9 4.5L3.5 6.5v13l5.5-2 6 2 5.5-2v-13l-5.5 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    notice: '<path d="M4 10v4h3l7 4V6l-7 4z"/><path d="M17.5 9.5a3.5 3.5 0 0 1 0 5M7.2 14.2l1.4 4.8"/>',
    shield: '<path d="M12 3.5l7 2.8v5.2c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6.3z"/><path d="M9 12l2.2 2.2 3.8-4"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="9.5" r="1.6"/><path d="M3.5 17l5-5 4 4 2.5-2.5 5.5 5"/>',
    camera: '<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.2l1.5-2h5.6l1.5 2h2.2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="13" r="3.5"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>', lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.5M4.5 12h.5M4.5 17.5h.5"/>', history: '<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4.5V8h3.5M12 8v4.5l3 2"/>',
    help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.7 9.5a2.4 2.4 0 1 1 3.4 2.2c-.7.3-1.1.9-1.1 1.6v.4M12 16.6v.2"/>',
    trend: '<path d="M4 17l5.5-5.5 4 4L20 9"/><path d="M15 9h5v5"/>', plus: '<path d="M12 5v14M5 12h14"/>',
    logout: '<path d="M14 4.5h4.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H14M10 16l4-4-4-4M14 12H4"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    dashboard: '<rect x="3.5" y="3.5" width="7" height="8" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.2"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.2"/><rect x="3.5" y="14.5" width="7" height="6" rx="1.2"/>',
    send: '<path d="M4 12l16-8-6 16-2.5-6.5z"/><path d="M11.5 13.5L20 4"/>', undo: '<path d="M9 7L4.5 11.5 9 16"/><path d="M4.5 11.5H15a4.5 4.5 0 0 1 0 9h-3"/>',
    redo: '<path d="M15 7l4.5 4.5L15 16"/><path d="M19.5 11.5H9a4.5 4.5 0 0 0 0 9h3"/>', return: '<path d="M10 6.5L5 11.5l5 5"/><path d="M5 11.5h10a4 4 0 0 1 4 4v2"/>',
    sparkle: '<path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>', whatsapp: '<path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.6 18.6z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/>',
    sms: '<path d="M5.5 5.5h13a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H9.5L5 20.5V7a1.5 1.5 0 0 1 .5-1.5z"/><path d="M8.5 11h.1M12 11h.1M15.5 11h.1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4L18 18M6 18l1.6-1.6M16.4 7.6L18 6"/>',
    gps: '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/>',
    wifi: '<path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 12.7a7.6 7.6 0 0 1 11 0M9.5 15.8a3.4 3.4 0 0 1 5 0"/><circle cx="12" cy="18.6" r=".9"/>',
    sync: '<path d="M19.5 12a7.5 7.5 0 0 1-13.4 4.6M4.5 12a7.5 7.5 0 0 1 13.4-4.6"/><path d="M18 3.5v4h-4M6 20.5v-4h4"/>',
    building: '<path d="M4.5 20.5V5.5l8-2v17M12.5 8.5h7v12M7 8h3M7 11.5h3M7 15h3M15 12h2M15 15.5h2M3 20.5h18"/>',
    clipboard: '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 3.5h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4"/>',
    flag: '<path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11"/>', key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8.5-8.5M16 7l2.5 2.5M14 9l2 2"/>',
    print: '<path d="M7 8V3.5h10V8M7 17H4.5V9.5A1.5 1.5 0 0 1 6 8h12a1.5 1.5 0 0 1 1.5 1.5V17H17"/><rect x="7" y="13.5" width="10" height="7"/>',
    layers: '<path d="M12 4l8.5 4.5L12 13 3.5 8.5z"/><path d="M3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5"/>'
  };
  App.sprite = function () {
    var s = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">';
    Object.keys(P).forEach(function (k) { s += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + P[k] + "</symbol>"; });
    // Portal text mark (not an official State insignia): navy roundel with "DMFT" and the district name in Hindi.
    s += '<symbol id="brandmark" viewBox="0 0 64 64"><circle cx="32" cy="32" r="31" fill="#0B2545"/><circle cx="32" cy="32" r="27.5" fill="none" stroke="#D9822B" stroke-width="1.6"/><text x="32" y="31" text-anchor="middle" font-size="14.5" font-weight="800" fill="#fff" font-family="Segoe UI, Arial, sans-serif" letter-spacing=".5">DMFT</text><text x="32" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#F3C892" font-family="Nirmala UI, Noto Sans Devanagari, sans-serif">रामगढ़</text></symbol>';
    s += '<symbol id="brandmark-dark" viewBox="0 0 64 64"><circle cx="32" cy="32" r="31" fill="#fff"/><circle cx="32" cy="32" r="27.5" fill="none" stroke="#D9822B" stroke-width="1.6"/><text x="32" y="31" text-anchor="middle" font-size="14.5" font-weight="800" fill="#0B2545" font-family="Segoe UI, Arial, sans-serif" letter-spacing=".5">DMFT</text><text x="32" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8A5600" font-family="Nirmala UI, Noto Sans Devanagari, sans-serif">रामगढ़</text></symbol></svg>';
    return s;
  };

  // ---------- Numbers, money, dates ----------
  App.n = function (x) { return Number(x || 0).toLocaleString("en-IN"); };
  App.inr = function (x) { return "₹ " + Number(Math.round(x || 0)).toLocaleString("en-IN"); };
  App.lakh = function (x, d) { return "₹ " + (Number(x || 0) / 1e5).toLocaleString("en-IN", { minimumFractionDigits: d == null ? 2 : d, maximumFractionDigits: d == null ? 2 : d }) + " " + App.t("L"); };
  App.crore = function (x, d) { return "₹ " + (Number(x || 0) / 1e7).toLocaleString("en-IN", { minimumFractionDigits: d == null ? 2 : d, maximumFractionDigits: d == null ? 2 : d }) + " " + App.t("Cr"); };
  App.money = function (x) { return Math.abs(x) >= 1e7 ? App.crore(x) : App.lakh(x); };
  App.moneyT = function (x) { return '<span title="' + App.inr(x) + '">' + App.money(x) + "</span>"; };
  var MON = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फ़र", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सित", "अक्टू", "नव", "दिस"] };
  App.date = function (s) { if (!s) return "-"; s = String(s); var y = s.slice(0, 4), m = +s.slice(5, 7), d = +s.slice(8, 10); return d + " " + MON[App.lang === "hi" ? "hi" : "en"][m - 1] + " " + y; };
  App.dt = function (s) { if (!s) return "-"; return App.date(s) + ", " + String(s).slice(11, 16); };
  App.nowTs = function () { var d = new Date(), p = DM.util.pad; return DM.util.iso(d) + "T" + p(d.getHours(), 2) + ":" + p(d.getMinutes(), 2) + ":" + p(d.getSeconds(), 2); };
  App.today = function () { return DM.todayISO(); };
  App.ago = function (iso) { return DM.util.diff(String(iso).slice(0, 10), App.today()); };

  // ---------- Labels ----------
  App.blockName = function (c) { var b = DM.block(c); return b ? App.L(b) : c; };
  App.deptName = function (c) { var d = DM.dept(c); return d ? App.L(d) : c; };
  App.deptShort = function (c) { var d = DM.dept(c); return d ? App.L(d.short) : c; };
  App.sectorName = function (c) { var s = DM.sector(c); return s ? App.L(s) : c; };
  App.stageName = function (n) { var s = DM.stage(n); return s ? App.L(s) : ""; };
  App.stageShort = function (n) { var s = DM.stage(n); return s ? App.L(s.s) : ""; };
  App.desig = function (key, p) { if (!key) return "-"; if (typeof key === "object") return App.L(key); return App.L(DM.desig(key, p)); };
  App.tx = function (x) { return App.L(DM.txt(x)); };
  App.pname = function (p) { return App.L(p.name); };
  App.villageName = function (p) { var s = p.sf[1]; return s && s.village ? App.L(s.village) : p.village; };
  App.panchayatName = function (p) { var s = p.sf[1]; return s && s.panchayat ? App.L(s.panchayat) : p.panchayat; };
  App.contractor = function (id) { var c = (App.db.contractors || []).filter(function (x) { return x.id === id; })[0]; return c || null; };
  App.contractorName = function (id) { var c = App.contractor(id); return c ? App.L(c.name) : "-"; };
  App.statusChip = function (k) { var s = DM.STATUS[k]; return s ? '<span class="chip ' + s.cls + '">' + App.esc(App.L(s)) + "</span>" : ""; };
  App.pStatusChip = function (p) { return App.statusChip(DM.dstatus(p)); };
  App.bar = function (pct, fin) { pct = Math.max(0, Math.min(100, +pct || 0)); return '<div class="bar-row"><div class="bar' + (fin ? " fin" : "") + '" role="img" aria-label="' + pct + '%"><i style="width:' + pct + '%"></i></div><span class="bv">' + Math.round(pct) + "%</span></div>"; };
  App.pidLink = function (p) { return '<a class="pid" href="#/project/' + p.id + '">' + App.esc(DM.displayId(p)) + "</a>"; };
  App.sampleTag = function () { return '<span class="sample-tag">' + App.icon("info") + App.esc(App.t("Sample data for demonstration")) + "</span>"; };

  // ---------- Generated "site photo" (SVG, no real imagery) ----------
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  App.photo = function (p, idx, phase, opts) {
    opts = opts || {};
    var w = DM.work(p.workKey) || { sc: "building" }, sc = w.sc, seed = hash(p.id + ":" + idx + ":" + phase), r = function (n) { seed = (Math.imul(seed, 1103515245) + 12345) >>> 0; return seed % n; };
    var hx = 30 + r(40), sky = ["#BFD9EE", "#CFE3F1", "#D7E7F3", "#C4DCEA"][r(4)], grass = ["#8DB36A", "#7FA85C", "#9BBB72"][r(3)], soil = "#B79466";
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">';
    s += '<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + sky + '"/><stop offset="1" stop-color="#EEF5FA"/></linearGradient></defs>';
    s += '<rect width="640" height="400" fill="url(#sk)"/>';
    s += '<circle cx="' + (480 + r(100)) + '" cy="' + (50 + r(30)) + '" r="22" fill="#FFF3C4" opacity=".9"/>';
    s += '<path d="M0 205 Q ' + (90 + hx) + ' ' + (140 + r(30)) + ' 220 190 T 420 ' + (175 + r(20)) + ' T 640 185 V 400 H 0z" fill="#9FB7A0"/>';
    s += '<path d="M0 235 Q 160 ' + (200 + r(20)) + ' 330 228 T 640 220 V 400 H 0z" fill="' + grass + '"/>';
    for (var t = 0; t < 6; t++) { var tx = r(640), ty = 215 + r(20); s += '<rect x="' + (tx - 2) + '" y="' + ty + '" width="4" height="18" fill="#5B4636"/><circle cx="' + tx + '" cy="' + (ty - 4) + '" r="' + (10 + r(6)) + '" fill="#4F7A45"/>'; }
    var done = phase === "after" ? 1 : phase === "during" ? 0.55 : 0;
    if (sc === "road") {
      s += '<path d="M260 240 L380 240 L600 400 L40 400 Z" fill="' + (done ? "#9A9EA3" : soil) + '"/>';
      if (phase === "during") s += '<path d="M260 240 L320 240 L330 400 L40 400 Z" fill="#B79466"/><rect x="380" y="300" width="90" height="46" rx="6" fill="#E3A21A"/><circle cx="395" cy="350" r="16" fill="#333"/><rect x="456" y="318" width="40" height="34" rx="6" fill="#555"/>';
      if (done === 1) for (var k = 0; k < 6; k++) { var y0 = 250 + k * 26; s += '<rect x="' + (318 - k * 2) + '" y="' + y0 + '" width="' + (4 + k) + '" height="' + (12 + k * 2) + '" fill="#F4F4F4"/>'; }
    } else if (sc === "bridge") {
      s += '<path d="M0 300 Q 320 280 640 300 V 400 H 0z" fill="#6E9DBB"/>';
      if (done) { s += '<rect x="40" y="250" width="' + (560 * done) + '" height="18" fill="#A3A7AC"/>'; for (var b = 0; b < 4; b++) if (b / 4 < done + 0.1) s += '<rect x="' + (90 + b * 140) + '" y="268" width="22" height="60" fill="#8E9297"/>'; }
      else s += '<rect x="90" y="290" width="22" height="30" fill="#8E9297" opacity=".5"/>';
    } else if (sc === "water") {
      var hh = done ? 120 * done : 0;
      s += '<rect x="250" y="' + (330 - hh - 70) + '" width="10" height="' + (hh + 70) + '" fill="#6B6F75"/><rect x="330" y="' + (330 - hh - 70) + '" width="10" height="' + (hh + 70) + '" fill="#6B6F75"/>';
      if (done === 1) s += '<rect x="232" y="' + (330 - hh - 120) + '" width="126" height="56" rx="8" fill="#2E73B8"/><rect x="420" y="250" width="120" height="60" fill="#203A5C" transform="skewX(-12)"/><path d="M430 254h100M430 270h100M430 286h100" stroke="#5B7FA8"/>';
      else if (done) s += '<rect x="420" y="270" width="80" height="40" fill="#203A5C" transform="skewX(-12)"/><path d="M230 ' + (330 - hh - 70) + ' l140 0" stroke="#E3A21A" stroke-width="4"/>';
      else s += '<rect x="200" y="300" width="200" height="40" fill="' + soil + '"/>';
    } else if (sc === "dam") {
      s += '<path d="M0 290 Q 320 270 640 290 V 400 H 0z" fill="#6E9DBB"/>';
      s += '<rect x="120" y="' + (300 - 50 * Math.max(done, 0.15)) + '" width="400" height="' + (50 * Math.max(done, 0.15) + 30) + '" fill="#A9A49A"/>';
      if (done === 1) s += '<rect x="120" y="248" width="400" height="8" fill="#8B867D"/>';
    } else if (sc === "solar") {
      var nPole = done === 1 ? 5 : done ? 3 : 0;
      s += '<path d="M200 245 L330 245 L560 400 L80 400 Z" fill="#B0A68F"/>';
      for (var q = 0; q < nPole; q++) { var px = 150 + q * 100, ph = 150 - q * 12; s += '<rect x="' + px + '" y="' + (360 - ph - q * 18) + '" width="6" height="' + ph + '" fill="#555"/><rect x="' + (px - 14) + '" y="' + (352 - ph - q * 18) + '" width="34" height="14" fill="#203A5C"/><circle cx="' + (px + 18) + '" cy="' + (372 - ph - q * 18) + '" r="5" fill="#FFE27A"/>'; }
      if (!nPole) s += '<rect x="220" y="320" width="160" height="22" fill="#6B6F75" opacity=".6"/>';
    } else if (sc === "farm") {
      for (var f = 0; f < 7; f++) s += '<path d="M0 ' + (270 + f * 20) + ' Q 320 ' + (255 + f * 20) + ' 640 ' + (270 + f * 20) + '" stroke="' + (done ? "#5E8E3E" : soil) + '" stroke-width="7" fill="none"/>';
      if (done) s += '<rect x="420" y="' + (230 - 40 * done) + '" width="150" height="' + (40 * done + 50) + '" fill="#D8D2C4"/><path d="M410 ' + (232 - 40 * done) + ' L495 ' + (190 - 40 * done) + ' L580 ' + (232 - 40 * done) + 'z" fill="#B5543C"/>';
    } else { // building / equip
      var bh = 120 * Math.max(done, 0.12), bx = 180, bw = 280;
      s += '<rect x="140" y="330" width="360" height="14" fill="#A39E94"/>';
      s += '<rect x="' + bx + '" y="' + (330 - bh) + '" width="' + bw + '" height="' + bh + '" fill="' + (done === 1 ? "#F2E6CF" : "#C9B9A0") + '"/>';
      if (done >= 0.5) for (var wx = 0; wx < 5; wx++) s += '<rect x="' + (bx + 22 + wx * 52) + '" y="' + (330 - bh + 26) + '" width="30" height="34" fill="' + (done === 1 ? "#5F87BF" : "#8C7B66") + '"/>';
      if (done === 1) { s += '<path d="M' + (bx - 16) + ' ' + (330 - bh) + ' L' + (bx + bw / 2) + ' ' + (330 - bh - 54) + ' L' + (bx + bw + 16) + ' ' + (330 - bh) + 'z" fill="#B5543C"/><rect x="' + (bx + bw / 2 - 18) + '" y="' + (330 - 52) + '" width="36" height="52" fill="#6B4A2F"/>'; if (sc === "equip") s += '<rect x="' + (bx + bw - 60) + '" y="' + (330 - bh - 30) + '" width="40" height="40" rx="4" fill="#fff"/><path d="M' + (bx + bw - 40) + ' ' + (330 - bh - 24) + 'v28M' + (bx + bw - 54) + ' ' + (330 - bh - 10) + 'h28" stroke="#C0392B" stroke-width="7"/>'; }
      else if (done) for (var sx = 0; sx < 6; sx++) s += '<path d="M' + (bx - 10 + sx * 60) + ' 330 V ' + (330 - bh - 40) + '" stroke="#8B6B3E" stroke-width="4"/>' + (sx < 5 ? '<path d="M' + (bx - 10 + sx * 60) + ' ' + (330 - bh - 10) + ' h60" stroke="#8B6B3E" stroke-width="3"/>' : "");
      else s += '<rect x="' + bx + '" y="300" width="70" height="30" fill="#7A6F60"/><rect x="' + (bx + 200) + '" y="310" width="50" height="20" fill="#9A8F80"/>';
    }
    // stamp overlay
    var lat = (opts.lat || p.loc[0]).toFixed(5), lng = (opts.lng || p.loc[1]).toFixed(5), when = opts.date ? opts.date.split("-").reverse().join("-") + " " + (opts.time || "11:20") : "";
    s += '<rect x="0" y="344" width="640" height="56" fill="rgba(10,20,35,.72)"/>';
    s += '<text x="14" y="366" font-family="Segoe UI, Arial, sans-serif" font-size="15" fill="#fff" font-weight="600">Lat ' + lat + ' N   Long ' + lng + ' E</text>';
    s += '<text x="14" y="388" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#DCE6F2">' + App.esc(when ? when + " IST  |  " : "") + App.esc(p.uid || p.reqNo) + "</text>";
    s += '<rect x="12" y="12" rx="4" width="' + (phase.length * 9 + 26) + '" height="26" fill="rgba(10,20,35,.72)"/><text x="25" y="30" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#fff" letter-spacing="1">' + phase.toUpperCase() + "</text>";
    s += '<rect x="526" y="12" rx="4" width="102" height="26" fill="#FDF3E7"/><text x="577" y="30" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#8A5600">SAMPLE PHOTO</text>';
    s += "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
  };
  App.phaseOf = function (pct) { return pct >= 100 ? "after" : pct > 0 ? "during" : "before"; };
  App.coverPhoto = function (p) { var h = p.progress || []; var last = h[h.length - 1]; return App.photo(p, h.length, App.phaseOf(p.physical || 0), last ? { lat: last.lat, lng: last.lng, date: last.date, time: last.time } : {}); };

  // ---------- Toast, modal ----------
  App.toast = function (msg, ok) {
    var box = document.getElementById("toasts"); if (!box) return;
    var t = document.createElement("div"); t.className = "toast" + (ok === false ? "" : " ok"); t.setAttribute("role", "status");
    t.innerHTML = App.icon(ok === false ? "info" : "check") + "<span>" + App.esc(msg) + "</span>"; box.appendChild(t);
    setTimeout(function () { t.remove(); }, 4200);
  };
  App.modal = function (o) {
    var prev = document.activeElement, back = document.createElement("div");
    back.className = "modal-back"; back.innerHTML = '<div class="modal' + (o.wide ? " wide" : "") + '" role="dialog" aria-modal="true" aria-labelledby="mdlT"><div class="modal-h"><h2 id="mdlT">' + App.esc(o.title) + '</h2><button type="button" class="icon-btn" data-close aria-label="' + App.esc(App.t("Close")) + '">' + App.icon("close") + '</button></div><div class="modal-b">' + o.body + "</div>" + (o.foot ? '<div class="modal-f">' + o.foot + "</div>" : "") + "</div>";
    document.body.appendChild(back);
    function close() { back.remove(); document.removeEventListener("keydown", key); if (prev && prev.focus) prev.focus(); }
    function key(e) {
      if (e.key === "Escape") close();
      if (e.key === "Tab") { var f = back.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"); if (!f.length) return; var a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    }
    document.addEventListener("keydown", key);
    back.addEventListener("click", function (e) { if (e.target === back || e.target.closest("[data-close]")) close(); });
    var first = back.querySelector(".modal-b input, .modal-b select, .modal-b textarea, .modal-f .btn"); if (first) setTimeout(function () { first.focus(); }, 30);
    var api = { el: back, close: close };
    if (o.onOpen) o.onOpen(back, api);
    return api;
  };
  App.confirm = function (title, text, okLabel, onOk, danger) {
    App.modal({ title: title, body: "<p>" + App.esc(text) + "</p>", foot: '<button class="btn secondary" data-close type="button">' + App.esc(App.t("Cancel")) + '</button><button class="btn' + (danger ? " danger" : "") + '" type="button" data-ok>' + App.esc(okLabel) + "</button>",
      onOpen: function (el, api) { el.querySelector("[data-ok]").addEventListener("click", function () { api.close(); onOk(); }); } });
  };

  // ---------- Charts (Chart.js, bundled locally) ----------
  App.PAL = ["#2F5FAF", "#C2650A", "#0B8BA3", "#C0392B", "#7B4FB5", "#2F8A4E"];
  App.charts = [];
  App.chart = function (canvas, cfg) {
    if (!window.Chart || !canvas) return null;
    var c = new window.Chart(canvas, cfg); App.charts.push(c); return c;
  };
  // Destroy every live Chart.js instance (tracked list plus the library registry) before the DOM is replaced.
  App.destroyCharts = function () {
    var all = App.charts.slice();
    if (window.Chart && window.Chart.instances) { var reg = window.Chart.instances; Object.keys(reg).forEach(function (k) { if (all.indexOf(reg[k]) < 0) all.push(reg[k]); }); }
    all.forEach(function (c) { try { c.stop(); c.destroy(); } catch (e) { /* instance already released */ } });
    App.charts = [];
  };
  // Navigate from a chart click: stop chart work first and leave the chart's event handler before the route changes.
  App.chartGo = function (hash) {
    App.charts.forEach(function (c) { try { c.stop(); } catch (e) { /* stopped */ } });
    setTimeout(function () { if (location.hash === hash) App.render(); else location.hash = hash; }, 0);
  };
  App.chartDefaults = function () {
    if (!window.Chart) return;
    var C = window.Chart;
    C.defaults.font.family = App.lang === "hi" ? '"Noto Sans Devanagari","Noto Sans",system-ui,sans-serif' : '"Noto Sans","Noto Sans Devanagari",system-ui,sans-serif';
    var hc = document.body.classList.contains("hc");
    C.defaults.font.size = 12; C.defaults.color = hc ? "#FFFFFF" : "#52606D"; C.defaults.borderColor = hc ? "#8C8C8C" : "#E4E7EB";
    if (C.defaults.scale && C.defaults.scale.grid) C.defaults.scale.grid.color = hc ? "#5A5A5A" : "#E4E7EB";
    if (C.defaults.scale && C.defaults.scale.ticks) C.defaults.scale.ticks.color = hc ? "#FFFFFF" : "#52606D";
    C.defaults.plugins.legend.labels.color = hc ? "#FFFFFF" : "#52606D";
    C.defaults.plugins.legend.labels.boxWidth = 12; C.defaults.plugins.legend.labels.boxHeight = 12; C.defaults.plugins.legend.position = "bottom";
    C.defaults.plugins.tooltip.backgroundColor = "#0B2545"; C.defaults.plugins.tooltip.padding = 10; C.defaults.plugins.tooltip.cornerRadius = 6;
    C.defaults.maintainAspectRatio = false; C.defaults.animation = false;
    if (C.defaults.transitions) { ["active", "resize", "show", "hide"].forEach(function (k) { if (C.defaults.transitions[k]) C.defaults.transitions[k].animation = { duration: 0 }; }); }
    C.defaults.elements.bar.borderRadius = 4; C.defaults.elements.bar.borderSkipped = "start";
    C.defaults.datasets.bar.maxBarThickness = 34; C.defaults.datasets.bar.borderColor = "#fff"; C.defaults.datasets.bar.borderWidth = 0;
  };

  // ---------- Export ----------
  App.downloadBlob = function (blob, name) {
    var url = URL.createObjectURL(blob), a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1500);
  };
  // rows: array of arrays (first row = header). sheets: [{name, rows}]
  App.exportXlsx = function (fileName, sheets, title) {
    if (!window.XLSX) { App.toast("Excel library not loaded", false); return; }
    var wb = window.XLSX.utils.book_new();
    sheets.forEach(function (sh) {
      var aoa = [];
      if (title) { aoa.push([title]); aoa.push([App.t("DMFT Work Monitoring Portal, Ramgarh") + " | " + App.t("Sample data for demonstration") + " | " + App.dt(App.nowTs())]); aoa.push([]); }
      aoa = aoa.concat(sh.rows);
      var ws = window.XLSX.utils.aoa_to_sheet(aoa);
      var hdr = sh.rows[0] || []; ws["!cols"] = hdr.map(function (h, i) { var m = String(h).length; sh.rows.slice(1, 60).forEach(function (r) { m = Math.max(m, String(r[i] == null ? "" : r[i]).length); }); return { wch: Math.min(60, m + 2) }; });
      window.XLSX.utils.book_append_sheet(wb, ws, String(sh.name).slice(0, 31));
    });
    window.XLSX.writeFile(wb, fileName);
    App.log("export", { en: "Exported " + fileName, hi: fileName + " निर्यात किया" });
  };
  App.print = function () { window.print(); };

  // ---------- Project filtering (scope item 2 filter list) ----------
  App.FILTER_KEYS = ["q", "pid", "name", "village", "panchayat", "block", "dept", "contractor", "fy", "aaNo", "agrNo", "status", "phys", "fin", "sector", "stage"];
  App.filterProjects = function (list, f) {
    f = f || {};
    var q = (f.q || "").toLowerCase().trim();
    return list.filter(function (p) {
      if (f.block && p.block !== f.block) return false;
      if (f.dept && p.dept !== f.dept) return false;
      if (f.fy && p.fy !== f.fy) return false;
      if (f.sector && p.sector !== f.sector) return false;
      if (f.stage && String(p.stage) !== String(f.stage)) return false;
      if (f.status) { var ds = DM.dstatus(p), st = DM.status(p); if (f.status === "delayed" ? ds !== "delayed" : f.status === "approved" ? !DM.approved(p) : f.status === "pending" ? !(st === "proposed" || st === "approval") : (st !== f.status && ds !== f.status)) return false; if (f.status === "ongoing" && st !== "ongoing") return false; }
      if (f.contractor && !(p.sf[5] && p.sf[5].contractor === f.contractor)) return false;
      if (f.panchayat && p.panchayat !== f.panchayat) return false;
      if (f.village && p.village.toLowerCase().indexOf(f.village.toLowerCase()) < 0 && App.villageName(p).indexOf(f.village) < 0) return false;
      if (f.pid && (DM.displayId(p) + " " + p.reqNo).toLowerCase().indexOf(f.pid.toLowerCase()) < 0) return false;
      if (f.name && (p.name.en.toLowerCase().indexOf(f.name.toLowerCase()) < 0 && p.name.hi.indexOf(f.name) < 0)) return false;
      if (f.aaNo && !(p.sf[4] && String(p.sf[4].aaNo).toLowerCase().indexOf(f.aaNo.toLowerCase()) >= 0)) return false;
      if (f.agrNo && !(p.sf[5] && p.sf[5].agreementNo && p.sf[5].agreementNo.toLowerCase().indexOf(f.agrNo.toLowerCase()) >= 0)) return false;
      if (f.phys) { var pr = f.phys.split("-"); if (p.physical < +pr[0] || p.physical > +pr[1]) return false; }
      if (f.fin) { var fr = f.fin.split("-"), fp = DM.finPct(p); if (fp < +fr[0] || fp > +fr[1]) return false; }
      if (q) {
        var c = App.contractor(p.sf[5] && p.sf[5].contractor);
        var hay = [p.uid, p.reqNo, p.name.en, p.name.hi, p.village, App.villageName(p), p.panchayat, App.blockName(p.block), DM.block(p.block).en, App.deptName(p.dept), DM.dept(p.dept).short.en, c ? c.name.en : "", p.sf[4] && p.sf[4].aaNo, p.sf[5] && p.sf[5].agreementNo].join(" ").toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
  };
  // Role / jurisdiction scoping applied to every list the user sees
  App.scoped = function () {
    var s = App.session, all = App.db.projects; if (!s) return all;
    var r = DM.role(s.role);
    if (r && r.k === "exec") return all.filter(function (p) { return p.dept === r.dept; });
    if (r && r.k === "field") return all.filter(function (p) { return p.block === r.block; });
    return all;
  };
  App.scopeLabel = function () { var s = App.session; if (!s) return ""; var r = DM.role(s.role); return r ? App.L(r.scope) : ""; };

  // ---------- Filter option builders ----------
  App.opts = function (items, sel, allLabel) {
    var h = allLabel === false ? "" : '<option value="">' + App.esc(allLabel || App.t("All")) + "</option>";
    items.forEach(function (it) { h += '<option value="' + App.esc(it[0]) + '"' + (String(sel) === String(it[0]) ? " selected" : "") + ">" + App.esc(it[1]) + "</option>"; });
    return h;
  };
  App.blockOpts = function (sel, all) { return App.opts(DM.BLOCKS.map(function (b) { return [b.code, App.L(b)]; }), sel, all); };
  App.deptOpts = function (sel, all) { return App.opts(DM.DEPTS.map(function (d) { return [d.code, App.L(d)]; }), sel, all); };
  App.fyOpts = function (sel, all) { return App.opts(DM.FYS().map(function (f) { return [f, f]; }), sel, all); };
  App.statusOpts = function (sel, all) { return App.opts(DM.STATUS_ORDER.map(function (k) { return [k, App.L(DM.STATUS[k])]; }), sel, all); };
  App.stageOpts = function (sel, all) { return App.opts(DM.STAGES.map(function (s) { return [s.n, s.n + ". " + App.L(s)]; }), sel, all); };
  App.contractorOpts = function (sel, all) { return App.opts(App.db.contractors.map(function (c) { return [c.id, App.L(c.name)]; }), sel, all); };
  App.sectorOpts = function (sel, all) { return App.opts(DM.SECTORS.map(function (s) { return [s.code, App.L(s)]; }), sel, all); };
  App.panchayatOpts = function (block, sel, all) { var out = []; DM.BLOCKS.forEach(function (b) { if (block && b.code !== block) return; b.panchayats.forEach(function (pp) { out.push([pp.en, App.L(pp) + (block ? "" : " (" + App.L(b) + ")")]); }); }); return App.opts(out, sel, all); };

  // ---------- Activity log and alerts (simulated notifications) ----------
  App.log = function (action, detail, pid) {
    if (!App.db) return;
    App.db.activity.unshift({ ts: App.nowTs(), user: App.session ? App.session.desig : "public", username: App.session ? App.session.username : "-", action: action, pid: pid || null, text: detail || null });
    if (App.db.activity.length > 400) App.db.activity.length = 400;
  };
  // Queue e-mail / SMS / WhatsApp notifications that "would be sent" (scope item 9)
  // Queue e-mail / SMS / WhatsApp notifications only when an SLA is exceeded or a due date is approaching
  // (opts.reason = "sla" | "due"). Movement-time calls without a reason are ignored; duplicates on the same day are skipped.
  App.alertExists = function (type, pid, toKey, channel) {
    var d = App.today();
    return App.db.alerts.some(function (a) { return a.type === type && a.pid === pid && a.to === toKey && a.channel === channel && String(a.ts).slice(0, 10) === d; });
  };
  App.notify = function (type, p, toKey, channels, opts) {
    if (!opts || (opts.reason !== "sla" && opts.reason !== "due")) return 0;
    var n = 0;
    (channels || ["email", "sms"]).forEach(function (c, i) {
      if (App.alertExists(type, p.id, toKey, c)) return;
      n++;
      App.db.alerts.unshift({ id: "AL" + DM.util.pad(App.db.alerts.length + 1, 4) + "N" + i, ts: App.nowTs(), channel: c, type: type, pid: p.id, to: toKey, escalated: !!opts.escalated, status: "queued", live: true });
    });
    return n;
  };
  App.notifyLegacy = function (type, p, toKey, channels) {
    (channels || ["email", "sms"]).forEach(function (c, i) {
      App.db.alerts.unshift({ id: "AL" + DM.util.pad(App.db.alerts.length + 1, 4) + "N" + i, ts: App.nowTs(), channel: c, type: type, pid: p.id, to: toKey, escalated: false, status: "queued", live: true });
    });
  };

  // ---------- Workflow engine: Forward / Return / Revert / Resubmit / Approve (scope item 1) ----------
  App.wf = {
    chain: function (p) { return p.wf ? DM.CHAIN[p.wf.stage] : []; },
    can: function (p, act) {
      if (!p.wf) return false;
      var ch = DM.CHAIN[p.wf.stage], i = p.wf.idx, last = ch.length - 1;
      if (act === "forward") return i < last;
      if (act === "approve") return i === last;
      if (act === "return") return i > 0;
      if (act === "revert") return i > 1;
      if (act === "resubmit") return p.wf.returnedFrom != null && i < p.wf.returnedFrom;
      return false;
    },
    // vals: stage field values captured while approving; returns error string or null
    act: function (p, act, remarks, vals) {
      if (!remarks || !String(remarks).trim()) return App.t("Remarks are mandatory for every file movement.");
      if (!App.wf.can(p, act)) return App.t("This action is not available at the current step.");
      var ch = DM.CHAIN[p.wf.stage], i = p.wf.idx, st = p.wf.stage, now = App.nowTs(), from = ch[i], to = null;
      var user = App.session ? App.session.username : "-";
      if (act === "forward") { to = ch[i + 1]; p.wf.idx = i + 1; }
      if (act === "return") { to = ch[i - 1]; p.wf.returnedFrom = Math.max(p.wf.returnedFrom || 0, i); p.wf.idx = i - 1; }
      if (act === "revert") { to = ch[0]; p.wf.returnedFrom = i; p.wf.idx = 0; }
      if (act === "resubmit") { to = ch[p.wf.returnedFrom]; p.wf.idx = p.wf.returnedFrom; p.wf.returnedFrom = null; }
      if (act === "approve") {
        var err = App.wf.advance(p, st, vals || {}, now);
        if (err) return err;
      }
      p.movements.push({ id: p.movements.length + 1, ts: now, stage: st, action: act, f: from, t: to, r: String(remarks).trim(), u: user });
      if (act !== "approve") { p.pendingAt = ch[p.wf.idx]; p.pendingSince = now; App.notify("file", p, p.pendingAt, ["email", "sms"]); }
      App.log(act, { en: App.stageName(st) && DM.stage(st).en, hi: DM.stage(st).hi }, p.id);
      App.save();
      return null;
    },
    advance: function (p, st, vals, now) {
      var today = now.slice(0, 10), next = st + 1;
      p.sf[st] = p.sf[st] || {};
      for (var k in vals) if (vals[k] !== "" && vals[k] != null) p.sf[st][k] = vals[k];
      if (st === 4) {
        if (!p.sf[4].aaNo) return App.t("Enter the administrative approval number.");
        p.sf[4].aaDate = p.sf[4].aaDate || today; p.sf[4].approvedAmount = +p.sf[4].approvedAmount || (p.sf[3] && p.sf[3].estAmount) || p.estimate; p.sf[4].fy = p.fy;
        if (!p.uid) p.uid = DM.nextUid(App.db, p.fy, p.block);
        p.sf[4].uid = p.uid; p.sf[4].commDate = today;
      }
      if (st === 3) { p.sf[3].taDate = p.sf[3].taDate || today; if (!p.sf[3].estAmount) p.sf[3].estAmount = p.estimate; }
      if (st === 5) { if (!p.sf[5].commencementDate) return App.t("Enter the work commencement date to move to physical progress."); p.physical = p.physical || 0; }
      if (st === 6 && (p.physical || 0) < 100) return App.t("Physical progress can be approved only when it reaches 100%. Until then stages 6 to 9 continue in parallel.");
      if (st === 9 && (p.physical || 0) < 100) { next = 6; }
      if (st === 10) {
        p.sf[10].handoverDate = p.sf[10].handoverDate || today; p.sf[10].completionStatus = { en: "Completed", hi: "पूर्ण" };
        p.wf = null; p.pendingAt = null; p.pendingSince = null; p.stage = 10; return null;
      }
      if (next === 10) { p.sf[10] = p.sf[10] || {}; p.sf[10].completionDate = p.sf[10].completionDate || today; }
      p.stage = next; p.wf = { stage: next, idx: 0, returnedFrom: null }; p.pendingAt = DM.CHAIN[next][0]; p.pendingSince = now;
      App.notify(next === 10 ? "handover" : "approval", p, p.pendingAt, ["email", "sms", "whatsapp"]);
      return null;
    }
  };
  App.addHi({ "Remarks are mandatory for every file movement.": "प्रत्येक फ़ाइल संचलन पर टिप्पणी अनिवार्य है।", "This action is not available at the current step.": "वर्तमान चरण पर यह कार्रवाई उपलब्ध नहीं है।",
    "Enter the administrative approval number.": "प्रशासनिक स्वीकृति संख्या दर्ज करें।", "Physical progress can be approved only when it reaches 100%. Until then stages 6 to 9 continue in parallel.": "भौतिक प्रगति 100% होने पर ही स्वीकृत की जा सकती है। तब तक चरण 6 से 9 साथ-साथ चलते हैं।", "Enter the work commencement date to move to physical progress.": "भौतिक प्रगति चरण हेतु कार्य प्रारंभ दिनांक दर्ज करें।" });

  App.debounce = function (fn, ms) { var t; return function () { var a = arguments, s = this; clearTimeout(t); t = setTimeout(function () { fn.apply(s, a); }, ms || 200); }; };
  App.qs = function (sel, root) { return (root || document).querySelector(sel); };
  App.qsa = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
})();
