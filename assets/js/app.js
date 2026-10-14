/* DMFT Work Monitoring Portal, Ramgarh - application shell: storage, session, router, GIGW header/footer, accessibility controls. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  var KEY = "dmft-rmg-demo-v6", SKEY = "dmft-rmg-session", PKEY = "dmft-rmg-prefs";
  App.views = {};
  App.storageOk = true;

  // ---------- Storage (all access wrapped; the app still runs without storage) ----------
  function getItem(k) { try { return window.localStorage.getItem(k); } catch (e) { App.storageOk = false; return null; } }
  function setItem(k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { App.storageOk = false; return false; } }
  function delItem(k) { try { window.localStorage.removeItem(k); } catch (e) { App.storageOk = false; } }
  App.load = function () {
    var raw = getItem(KEY), db = null;
    if (raw) { try { db = JSON.parse(raw); } catch (e) { db = null; } }
    if (!db || !db.meta || db.meta.version !== 6) { db = DM.generate(); App.db = db; App.save(); }
    App.db = db;
  };
  App.save = function () { if (!App.db) return; if (!setItem(KEY, JSON.stringify(App.db))) App.storageOk = false; };
  App.resetDemo = function () {
    delItem(KEY); App.db = DM.generate(); App.save();
    App.toast(App.t("Demo data reset to the original sample data set."));
    App.render();
  };
  App.addHi({ "Demo data reset to the original sample data set.": "डेमो डाटा मूल नमूना डाटा सेट पर रीसेट किया गया।" });
  function prefs() { var r = getItem(PKEY); try { return r ? JSON.parse(r) : {}; } catch (e) { return {}; } }
  function savePrefs(p) { setItem(PKEY, JSON.stringify(p)); }

  // ---------- Session (simulated authentication for the demo) ----------
  App.session = null;
  App.loadSession = function () { var r = getItem(SKEY); try { App.session = r ? JSON.parse(r) : null; } catch (e) { App.session = null; } };
  App.signIn = function (roleKey, username) {
    var r = DM.role(roleKey), u = App.db.users.filter(function (x) { return x.username === username; })[0] || App.db.users.filter(function (x) { return x.role === roleKey; })[0];
    App.session = { role: roleKey, username: u ? u.username : r.user, desig: u ? u.desig : DM.desig(r.desig, { dept: r.dept, block: r.block }), since: App.nowTs(), last: Date.now() };
    setItem(SKEY, JSON.stringify(App.session));
    App.db.loginHistory.unshift({ ts: App.nowTs(), user: App.session.username, role: roleKey, ip: "10.24.8.17", device: navigator.userAgent.indexOf("Edg/") >= 0 ? "Edge / Windows" : "Chrome / Windows", result: "ok" });
    if (u) u.lastLogin = App.nowTs();
    App.log("login", { en: "Signed in with OTP", hi: "ओटीपी से लॉगिन" });
    App.save();
  };
  App.signOut = function (expired) {
    if (App.session) App.log("logout", { en: expired ? "Session expired (idle)" : "Signed out", hi: expired ? "सत्र समाप्त (निष्क्रिय)" : "लॉगआउट" });
    App.session = null; delItem(SKEY); App.save();
    location.hash = "#/login";
    if (expired) setTimeout(function () { App.toast(App.t("Session expired. Please sign in again."), false); }, 100);
  };
  App.role = function () { return App.session ? DM.role(App.session.role) : null; };
  // Permission level for module key: F full, A act/approve, V view, N none
  App.perm = function (mod) {
    if (!App.session) return "N";
    var s = DM.PERMS[App.session.role] || "", i = DM.MODULES.map(function (m) { return m.k; }).indexOf(mod);
    return i >= 0 ? s.charAt(i) || "N" : "N";
  };
  App.can = function (mod, lvl) { var p = App.perm(mod); if (lvl === "view") return p !== "N"; if (lvl === "act") return p === "F" || p === "A"; return p === "F"; };

  // ---------- Idle timeout (15 min; warning at 13 min) ----------
  var IDLE = 15 * 60 * 1000, WARN = 13 * 60 * 1000, warnEl = null;
  function touch() { if (App.session) { App.session.last = Date.now(); } }
  ["click", "keydown", "mousemove", "touchstart"].forEach(function (ev) { document.addEventListener(ev, App.debounce(function () { touch(); if (warnEl) { warnEl.remove(); warnEl = null; } }, 400), { passive: true }); });
  setInterval(function () {
    if (!App.session) return;
    var idle = Date.now() - (App.session.last || Date.now());
    if (idle > IDLE) { if (warnEl) { warnEl.remove(); warnEl = null; } App.signOut(true); return; }
    if (idle > WARN && !warnEl) App.showIdleWarning();
  }, 10000);
  App.showIdleWarning = function () {
    if (warnEl) return;
    warnEl = document.createElement("div"); warnEl.className = "idle-warn";
    warnEl.innerHTML = '<div class="note warn" role="alert" style="box-shadow:var(--shadow-lg);background:#fff">' + App.icon("clock") + '<div><strong>' + App.esc(App.t("Your session is about to expire")) + "</strong><br>" + App.esc(App.t("For security, you will be signed out after 15 minutes of inactivity.")) + ' <button class="btn sm" type="button" style="margin-left:8px">' + App.esc(App.t("Stay signed in")) + "</button></div></div>";
    document.body.appendChild(warnEl);
    warnEl.querySelector("button").addEventListener("click", function () { touch(); warnEl.remove(); warnEl = null; });
  };

  // ---------- Router ----------
  // Route table: pattern -> view name. Views register via App.view(name, def).
  App.view = function (name, def) { App.views[name] = def; };
  var ROUTES = [
    ["", "home"], ["home", "home"], ["p/:id", "publicProject"], ["page/:slug", "page"], ["login", "login"],
    ["dashboard", "dashboard"], ["projects", "projects"], ["projects/new", "newRequest"], ["project/:id", "project"],
    ["contractors", "contractors"], ["contractor/:id", "contractor"], ["inspections", "inspections"], ["map", "map"],
    ["pendency", "pendency"], ["ai", "ai"], ["reports", "reports"], ["import", "import"], ["users", "users"], ["field", "field"]
  ];
  App.parseHash = function () {
    var h = location.hash.replace(/^#\/?/, ""), q = {}, qi = h.indexOf("?");
    if (qi >= 0) { h.slice(qi + 1).split("&").forEach(function (kv) { if (!kv) return; var a = kv.split("="); q[decodeURIComponent(a[0])] = decodeURIComponent((a[1] || "").replace(/\+/g, " ")); }); h = h.slice(0, qi); }
    var parts = h.split("/").filter(Boolean);
    for (var i = 0; i < ROUTES.length; i++) {
      var pat = ROUTES[i][0].split("/").filter(Boolean);
      if (pat.length !== parts.length) continue;
      var params = {}, ok = true;
      for (var j = 0; j < pat.length; j++) { if (pat[j].charAt(0) === ":") params[pat[j].slice(1)] = decodeURIComponent(parts[j]); else if (pat[j] !== parts[j]) { ok = false; break; } }
      if (ok) return { name: ROUTES[i][1], params: params, query: q, path: h };
    }
    return { name: "notfound", params: {}, query: q, path: h };
  };
  App.go = function (hash) { if (location.hash === hash) App.render(); else location.hash = hash; };
  App.setQuery = function (q) {
    var r = App.route, parts = [];
    for (var k in q) if (q[k] !== "" && q[k] != null) parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(q[k]));
    var h = "#/" + r.path + (parts.length ? "?" + parts.join("&") : "");
    history.replaceState(null, "", h); App.route = App.parseHash();
  };

  // ---------- Shell rendering ----------
  function utilityBar() {
    var p = prefs(), fs = p.fs || "m";
    return '<div class="utility"><div class="container">' +
      '<div class="u-left"><span>' + App.esc(App.t("Government of Jharkhand")) + "</span><span>" + App.esc(App.t("District Administration, Ramgarh")) + "</span></div>" +
      '<div class="u-right">' +
      '<a class="u-link" href="#main" data-skip>' + App.icon("arrow-right", "sm") + '<span class="ul-txt">' + App.esc(App.t("Skip to main content")) + "</span></a>" +
      '<a class="u-link" href="#/page/screen-reader">' + App.icon("a11y", "sm") + '<span class="ul-txt">' + App.esc(App.t("Screen Reader Access")) + "</span></a>" +
      '<span class="u-sep" aria-hidden="true"></span>' +
      '<div class="fs-group" role="group" aria-label="Text size"><button type="button" data-fs="s" aria-pressed="' + (fs === "s") + '" aria-label="' + App.esc(App.t("Decrease text size")) + '">A-</button><button type="button" data-fs="m" aria-pressed="' + (fs === "m") + '" aria-label="' + App.esc(App.t("Reset text size")) + '">A</button><button type="button" data-fs="l" aria-pressed="' + (fs === "l") + '" aria-label="' + App.esc(App.t("Increase text size")) + '">A+</button></div>' +
      '<button type="button" class="icon-btn" data-hc aria-pressed="' + (!!p.hc) + '" aria-label="' + App.esc(App.t("High contrast")) + '" title="' + App.esc(App.t("High contrast")) + '">' + App.icon("contrast") + "</button>" +
      '<span class="u-sep" aria-hidden="true"></span>' +
      '<div class="lang-group" role="group" aria-label="' + App.esc(App.t("Language")) + '"><button type="button" data-lang="en" lang="en" aria-current="' + (App.lang === "en") + '">English</button><button type="button" data-lang="hi" lang="hi" aria-current="' + (App.lang === "hi") + '">हिन्दी</button></div>' +
      "</div></div></div>";
  }
  function identity(kind) {
    var right = "";
    if (kind === "officer" && App.session) {
      var r = App.role(), initials = App.session.username.slice(0, 2).toUpperCase();
      right = '<div class="id-right"><span class="session-pill" title="' + App.esc(App.t("Auto sign-out after 15 min idle")) + '">' + App.icon("lock", "sm") + App.esc(App.t("Auto sign-out after 15 min idle")) + "</span>" +
        '<div class="user-chip"><span class="av" aria-hidden="true">' + App.esc(initials) + '</span><span class="uc-t"><strong>' + App.esc(App.L(App.session.desig)) + "</strong><span>" + App.esc(App.L(r)) + " | " + App.esc(App.session.username) + "</span></span>" +
        '<button type="button" class="icon-btn" data-logout aria-label="' + App.esc(App.t("Logout")) + '" title="' + App.esc(App.t("Logout")) + '">' + App.icon("logout") + "</button></div></div>";
    } else {
      right = '<div class="id-right"><form class="id-search" role="search" data-pubsearch><label class="sr-only" for="pubQ">' + App.esc(App.t("Search project ID, name, village")) + '</label><input id="pubQ" name="q" type="search" placeholder="' + App.esc(App.t("Search project ID, name, village")) + '"><button type="submit">' + App.icon("search", "sm") + App.esc(App.t("Search")) + "</button></form></div>";
    }
    return '<div class="identity"><div class="container">' +
      (kind === "officer" ? '<button type="button" class="icon-btn menu-toggle" data-menu aria-label="' + App.esc(App.t("Open menu")) + '" aria-expanded="false" aria-controls="sideNav">' + App.icon("menu") + "</button>" : "") +
      '<a class="brand" href="#/' + (kind === "officer" ? "dashboard" : "") + '">' +
      '<svg class="brandmark" role="img" aria-label="DMFT Ramgarh"><use href="#brandmark"/></svg>' +
      '<span class="bt"><span class="bt-hi" lang="hi">डीएमएफटी कार्य अनुश्रवण पोर्टल, रामगढ़</span><span class="bt-en" lang="en">DMFT Work Monitoring Portal, Ramgarh</span><span class="bt-sub">' + App.esc(App.t("District Mineral Foundation Trust, Ramgarh")) + " | " + App.esc(App.t("Government of Jharkhand")) + "</span></span></a>" +
      right + "</div></div>";
  }
  function pubNav(active) {
    var items = [["", "home", "Home"], ["#/?view=projects", "projects", "Projects"], ["#/map", "map", "Project Map"], ["#/page/help", "help", "Help"]];
    var h = '<nav class="pubnav" aria-label="' + App.esc(App.t("Main navigation")) + '"><div class="container">';
    h += '<a href="#/"' + (active === "home" ? ' aria-current="page"' : "") + ">" + App.icon("home") + App.esc(App.t("Public Dashboard")) + "</a>";
    h += '<a href="#/?sec=projects">' + App.icon("folder") + App.esc(App.t("Projects")) + "</a>";
    h += '<a href="#/?sec=map">' + App.icon("map") + App.esc(App.t("Project Map")) + "</a>";
    h += '<a href="#/?sec=completed">' + App.icon("check") + App.esc(App.t("Completed Works")) + "</a>";
    h += '<a href="#/page/help"' + (active === "page" ? ' aria-current="page"' : "") + ">" + App.icon("help") + App.esc(App.t("Help")) + "</a>";
    h += '<span class="spacer"></span><a class="login-cta" href="#/login">' + App.icon("lock") + App.esc(App.t("Officer Login")) + "</a>";
    return h + "</div></nav>";
  }
  App.NAV = [
    { g: "Main", items: [["dashboard", "dashboard", "Dashboard", "dashboard"], ["projects", "folder", "All Projects", "dashboard"], ["projects/new", "plus", "New Work Request", "request"], ["map", "map", "GIS Map", "dashboard"]] },
    { g: "Monitoring", items: [["inspections", "clipboard", "Inspections", "inspection"], ["pendency", "pending", "Delay & Pendency", "dashboard"], ["contractors", "building", "Contractors", "execution"], ["field", "phone", "Field App", "progress"]] },
    { g: "Analytics", items: [["ai", "sparkle", "Ask DMFT AI", "ai"], ["reports", "chart", "Reports & MIS", "reports"], ["import", "upload", "Data Import", "import"]] },
    { g: "Administration", items: [["users", "users", "Users & Roles", "users"]] }
  ];
  function sideNav(active) {
    var r = App.role(), h = '<nav class="side" id="sideNav" aria-label="' + App.esc(App.t("Officer navigation")) + '">';
    h += '<div class="s-role"><strong>' + App.esc(App.L(r)) + "</strong>" + App.esc(App.t("Jurisdiction")) + ": " + App.esc(App.scopeLabel()) + "</div>";
    var pend = 0; try { pend = DM.pendency(App.db).filter(function (x) { return x.over; }).length; } catch (e) { pend = 0; }
    App.NAV.forEach(function (g) {
      var items = g.items.filter(function (it) { return App.can(it[3], "view"); });
      if (!items.length) return;
      h += '<div class="s-group">' + App.esc(App.t(g.g)) + "</div>";
      items.forEach(function (it) {
        var cur = active === it[0] || (it[0] === "projects" && (active === "project")) || (it[0] === "contractors" && active === "contractor");
        h += '<a href="#/' + it[0] + '"' + (cur ? ' aria-current="page"' : "") + ">" + App.icon(it[1]) + "<span>" + App.esc(App.t(it[2])) + "</span>" + (it[0] === "pendency" && pend ? '<span class="badge-n" aria-label="' + pend + ' SLA breaches">' + pend + "</span>" : "") + "</a>";
      });
    });
    h += '<div class="s-group">' + App.esc(App.t("Session")) + "</div>";
    h += '<a href="#/" data-public>' + App.icon("globe") + "<span>" + App.esc(App.t("Public Dashboard")) + "</span></a>";
    h += '<a href="#" data-reset>' + App.icon("sync") + "<span>" + App.esc(App.t("Reset demo data")) + "</span></a>";
    h += '<a href="#" data-logout>' + App.icon("logout") + "<span>" + App.esc(App.t("Logout")) + "</span></a>";
    return h + "</nav>";
  }
  function footer(compact) {
    var pol = [["website-policies", "Website Policies"], ["terms", "Terms & Conditions"], ["privacy", "Privacy Policy"], ["copyright", "Copyright Policy"], ["hyperlinking", "Hyperlinking Policy"], ["accessibility", "Accessibility Statement"]];
    var help = [["help", "Help"], ["faq", "FAQ"], ["sitemap", "Sitemap"], ["screen-reader", "Screen Reader Access"], ["contact", "Contact Us"], ["feedback", "Feedback"]];
    var h = '<footer class="footer">';
    if (!compact) {
      h += '<div class="container"><div><div class="f-brand"><svg role="img" aria-label="DMFT Ramgarh"><use href="#brandmark-dark"/></svg><div><strong>' + App.esc(App.t("DMFT Work Monitoring Portal, Ramgarh")) + "</strong>" + App.esc(App.t("District Mineral Foundation Trust, Ramgarh")) + "<br>" + App.esc(App.t("Block-B, District Planning Office, Collectorate Building, Chhatarmaru, Ramgarh, Jharkhand 825101")) + "<br>" + App.icon("phone", "sm") + " 06553-231359</div></div></div>";
      h += '<div><h2>' + App.esc(App.t("Policies")) + "</h2><ul>" + pol.map(function (x) { return '<li><a href="#/page/' + x[0] + '">' + App.esc(App.t(x[1])) + "</a></li>"; }).join("") + "</ul></div>";
      h += '<div><h2>' + App.esc(App.t("Help")) + "</h2><ul>" + help.map(function (x) { return '<li><a href="#/page/' + x[0] + '">' + App.esc(App.t(x[1])) + "</a></li>"; }).join("") + "</ul></div>";
      h += '<div><h2>' + App.esc(App.t("Related Sites")) + '</h2><ul><li><a href="#/page/related" title="' + App.esc(App.t("External link - not opened in the offline prototype")) + '">' + App.esc(App.t("Government of Jharkhand")) + " " + App.icon("external", "sm") + '</a></li><li><a href="#/page/related">' + App.esc(App.t("District Ramgarh")) + " " + App.icon("external", "sm") + '</a></li><li><a href="#/page/related">' + App.esc(App.t("Ministry of Mines - PMKKKY")) + " " + App.icon("external", "sm") + "</a></li></ul></div></div>";
    }
    h += '<div class="footer-bottom"><div class="container"><span>' + App.esc(App.t("Content owned and maintained by DMFT, Ramgarh")) + "</span><span>" + App.esc(App.t("Last updated")) + ": <strong>" + App.date(App.today()) + "</strong></span><span>" + App.esc(App.t("Visitors")) + ": <strong>1,24,806</strong> (" + App.esc(App.t("illustrative")) + ")</span><span>" + App.esc(App.t("Best viewed in current Chrome, Edge, Firefox and Safari")) + "</span><span>" + App.esc(App.t("Working prototype submitted by Nevaeh Technology Pvt. Ltd.")) + "</span></div></div>";
    return h + "</footer>";
  }

  App.crumbs = function (items) {
    return '<nav class="crumbs" aria-label="' + App.esc(App.t("Breadcrumb")) + '"><ol>' + items.map(function (it, i) { return i === items.length - 1 ? '<li aria-current="page">' + App.esc(it[0]) + "</li>" : '<li><a href="' + it[1] + '">' + App.esc(it[0]) + "</a></li>"; }).join("") + "</ol></nav>";
  };
  App.pageHead = function (title, sub, actions, crumbs) {
    return (crumbs ? App.crumbs(crumbs) : "") + '<div class="page-head"><div><h1>' + App.esc(title) + "</h1>" + (sub ? '<p class="ph-sub">' + sub + "</p>" : "") + '</div><div class="ph-actions">' + App.sampleTag() + (actions || "") + "</div></div>";
  };

  // ---------- Render ----------
  App.render = function () {
    App.destroyCharts();
    (App.cleanupMaps || []).forEach(function (m) { try { m.remove(); } catch (e) { /* detached */ } }); App.cleanupMaps = [];
    if (App.cleanup) { try { App.cleanup(); } catch (e) { /* view cleanup */ } App.cleanup = null; }
    var route = App.route = App.parseHash();
    var v = App.views[route.name] || App.views.notfound;
    var kind = v.kind || "officer";
    if (kind === "officer" && !App.session) { location.replace("#/login?next=" + encodeURIComponent(route.path)); return; }
    if (kind === "officer" && v.perm && !App.can(v.perm, "view")) { v = App.views.denied; }
    document.documentElement.lang = App.lang;
    App.chartDefaults();
    var root = document.getElementById("app");
    var top = '<div class="tricolour" aria-hidden="true"></div><div class="demo-banner">' + App.icon("info") + App.esc(App.t("Bid prototype for the District Level Proposal Evaluation Committee, Ramgarh. All projects, firms, amounts and records shown are sample data for demonstration.")) + "</div>";
    var html = top + utilityBar() + identity(kind === "officer" ? "officer" : "public");
    if (kind === "officer") {
      html += '<div class="shell">' + sideNav(route.name) + '<main id="main" class="content" tabindex="-1"></main></div>' + footer(true);
    } else {
      html += pubNav(route.name) + '<main id="main" tabindex="-1"></main>' + footer(false);
    }
    root.innerHTML = html;
    if (!App.storageOk) { var m0 = document.getElementById("main"); m0.insertAdjacentHTML("beforebegin", ""); }
    var main = document.getElementById("main");
    document.title = (v.title ? v.title(route) + " | " : "") + App.t("DMFT Work Monitoring Portal, Ramgarh");
    try { v.render(main, route); }
    catch (e) { main.innerHTML = '<div class="note err">' + App.icon("warning") + "<div><strong>Error</strong><br>" + App.esc(e.message) + "</div></div>"; if (window.console) console.error(e); }
    if (!App.storageOk) main.insertAdjacentHTML("afterbegin", '<div class="note warn" style="margin-bottom:12px">' + App.icon("info") + "<span>" + App.esc(App.t("Browser storage is unavailable; changes will last only until the page is reloaded.")) + "</span></div>");
    document.body.classList.remove("nav-open");
    if (!route.query.keepScroll) window.scrollTo(0, 0);
  };

  // ---------- Global events ----------
  function applyPrefs() {
    var p = prefs();
    document.documentElement.style.setProperty("--fs", p.fs === "s" ? "14px" : p.fs === "l" ? "18px" : "16px");
    document.body.classList.toggle("hc", !!p.hc);
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-fs],[data-hc],[data-lang],[data-logout],[data-reset],[data-menu],[data-skip]");
    if (!t) { if (document.body.classList.contains("nav-open") && !e.target.closest(".side")) document.body.classList.remove("nav-open"); return; }
    var p = prefs();
    if (t.hasAttribute("data-fs")) { p.fs = t.getAttribute("data-fs"); savePrefs(p); applyPrefs(); App.render(); }
    else if (t.hasAttribute("data-hc")) { p.hc = !p.hc; savePrefs(p); applyPrefs(); App.render(); }
    else if (t.hasAttribute("data-lang")) { App.lang = t.getAttribute("data-lang"); p.lang = App.lang; savePrefs(p); var y = window.scrollY; App.render(); window.scrollTo(0, y); }
    else if (t.hasAttribute("data-logout")) { e.preventDefault(); App.signOut(false); }
    else if (t.hasAttribute("data-reset")) { e.preventDefault(); App.confirm(App.t("Reset demo data"), App.t("Reset all demo changes and restore the original sample data?"), App.t("Reset"), App.resetDemo, true); }
    else if (t.hasAttribute("data-menu")) { e.stopPropagation(); var open = !document.body.classList.contains("nav-open"); document.body.classList.toggle("nav-open", open); t.setAttribute("aria-expanded", String(open)); if (open) { var f = document.querySelector(".side a"); if (f) f.focus(); } }
    else if (t.hasAttribute("data-skip")) { e.preventDefault(); var m = document.getElementById("main"); if (m) m.focus(); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("nav-open")) document.body.classList.remove("nav-open"); });
  document.addEventListener("submit", function (e) {
    var f = e.target.closest("[data-pubsearch]"); if (!f) return;
    e.preventDefault(); var q = f.querySelector("input").value.trim(); location.hash = "#/?sec=projects&q=" + encodeURIComponent(q);
  });
  window.addEventListener("hashchange", function () { App.render(); });

  // Generic fallbacks
  App.view("notfound", { kind: "public", title: function () { return App.t("Page not found"); }, render: function (m) {
    m.innerHTML = '<div class="container" style="padding:48px 24px"><h1>' + App.esc(App.t("Page not found")) + "</h1><p>" + App.esc(App.t("The page you requested does not exist in this prototype.")) + '</p><a class="btn" href="#/">' + App.esc(App.t("Go to home")) + "</a></div>"; } });
  App.view("denied", { kind: "officer", title: function () { return App.t("Access denied"); }, render: function (m) {
    m.innerHTML = App.pageHead(App.t("Access denied"), "") + '<div class="note warn">' + App.icon("lock") + "<div>" + App.esc(App.t("You do not have access to this module.")) + " " + App.esc(App.t("Your role")) + ": <strong>" + App.esc(App.L(App.role())) + '</strong>. <a href="#/login">' + App.esc(App.t("Switch role")) + "</a></div></div>"; } });
  App.addHi({ "Access denied": "पहुँच अस्वीकृत" });

  // ---------- Boot ----------
  App.boot = function () {
    document.getElementById("sprite").innerHTML = App.sprite();
    var p = prefs(); App.lang = p.lang === "hi" ? "hi" : "en";
    var qs = location.search ? location.search.slice(1).split("&") : [];
    // Presenter / screenshot shortcuts: ?lang=hi, ?as=<role>, ?fresh=1 (fresh sample data)
    var Q = {}; qs.forEach(function (kv) { var a = kv.split("="); Q[a[0]] = decodeURIComponent(a[1] || ""); });
    if (Q.lang === "hi" || Q.lang === "en") App.lang = Q.lang;
    if (Q.fresh === "1") delItem(KEY);
    App.load();
    App.loadSession();
    if (Q.as && DM.role(Q.as)) App.signIn(Q.as, DM.role(Q.as).user);
    if (App.session) App.session.last = Date.now();
    applyPrefs();
    if (Q.hc === "1") document.body.classList.add("hc");
    App.render();
  };
})();
