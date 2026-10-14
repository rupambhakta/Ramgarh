/* Public dashboard (scope 2 public dashboard, scope 3 location, scope 13 GIGW pages). No login required. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM, t = App.t, esc = App.esc;
  App.addHi({
    "Transparency portal": "पारदर्शिता पोर्टल",
    "Every DMFT work in Ramgarh, tracked from request to handover": "रामगढ़ के प्रत्येक डीएमएफटी कार्य का अनुरोध से हस्तांतरण तक अनुश्रवण",
    "Approved works funded by the District Mineral Foundation Trust for mining-affected areas and people of Ramgarh district, with their location, approved amount, physical progress and site photographs.": "रामगढ़ जिले के खनन प्रभावित क्षेत्रों एवं लोगों हेतु जिला खनिज फाउंडेशन ट्रस्ट द्वारा वित्तपोषित स्वीकृत कार्य - उनके स्थान, स्वीकृत राशि, भौतिक प्रगति एवं स्थल फोटो सहित।",
    "Find a project by ID, name, village or block": "आईडी, नाम, ग्राम या प्रखंड से परियोजना खोजें",
    "View all projects": "सभी परियोजनाएँ देखें", "Open project map": "परियोजना मानचित्र खोलें",
    "Approved projects": "स्वीकृत परियोजनाएँ", "Approved amount": "स्वीकृत राशि", "Ongoing works": "प्रगतिरत कार्य", "Completed works": "पूर्ण कार्य",
    "Average physical progress": "औसत भौतिक प्रगति", "Funds released": "जारी राशि", "of approved amount": "स्वीकृत राशि का", "across 6 blocks": "6 प्रखंडों में",
    "As on": "दिनांक", "works in execution": "कार्य निष्पादनाधीन", "handed over to departments": "विभागों को हस्तांतरित", "ongoing and completed works": "प्रगतिरत एवं पूर्ण कार्य",
    "At a glance": "एक नज़र में", "Block-wise works": "प्रखंडवार कार्य", "Projects": "परियोजनाएँ", "completed": "पूर्ण", "ongoing": "प्रगतिरत", "other stages": "अन्य चरण",
    "Completed and ongoing works by block": "प्रखंडवार पूर्ण एवं प्रगतिरत कार्य", "Number of approved projects": "स्वीकृत परियोजनाओं की संख्या",
    "Approved amount by sector": "क्षेत्रवार स्वीकृत राशि", "PMKKKY 2024 sectors, rupees lakh": "पीएमकेकेकेवाई 2024 क्षेत्र, रुपये लाख",
    "View as table": "तालिका के रूप में देखें", "View as chart": "चार्ट के रूप में देखें", "Completed": "पूर्ण", "Ongoing": "प्रगतिरत", "Other": "अन्य", "Rs lakh": "रु. लाख",
    "Project locations": "परियोजना स्थान", "Click a marker for details and site photo.": "विवरण एवं स्थल फोटो हेतु मार्कर पर क्लिक करें।",
    "Project works": "परियोजना कार्य", "Approved works with location, amount, progress and photographs": "स्थान, राशि, प्रगति एवं फोटो सहित स्वीकृत कार्य",
    "All works": "सभी कार्य", "Show more": "और दिखाएँ", "works shown": "कार्य प्रदर्शित", "of": "में से",
    "Recently completed works": "हाल ही में पूर्ण कार्य", "Completed and handed over to the concerned department": "पूर्ण कर संबंधित विभाग को हस्तांतरित",
    "Completed on": "पूर्णता दिनांक", "Handed over on": "हस्तांतरण दिनांक",
    "How the portal works": "पोर्टल कैसे कार्य करता है",
    "Request and recommendation": "अनुरोध एवं अनुशंसा", "Gram Sabha, approvals and DPR": "ग्राम सभा, स्वीकृतियाँ एवं डीपीआर", "Tender and execution": "निविदा एवं निष्पादन",
    "Geo-tagged progress and inspection": "जियो-टैग प्रगति एवं निरीक्षण", "Handover to department": "विभाग को हस्तांतरण",
    "Officer login": "अधिकारी लॉगिन", "For DMFT Cell, departments and field teams": "डीएमएफटी सेल, विभागों एवं क्षेत्र दलों हेतु",
    // Public project page
    "Project details": "परियोजना विवरण", "Public view": "सार्वजनिक दृश्य", "Work details": "कार्य विवरण", "Key dates": "मुख्य तिथियाँ",
    "Administrative approval": "प्रशासनिक स्वीकृति", "Work commenced": "कार्य प्रारंभ", "Scheduled completion": "निर्धारित पूर्णता", "Actual completion": "वास्तविक पूर्णता",
    "Executing department": "निष्पादन विभाग", "Executing agency": "निष्पादन एजेंसी", "Site photographs": "स्थल फोटो", "Geo-tagged, time-stamped photographs uploaded from the field app.": "फील्ड ऐप से अपलोड की गई जियो-टैग एवं समय-अंकित फोटो।",
    "Lifecycle": "जीवनचक्र", "Public documents": "सार्वजनिक दस्तावेज़", "No public documents yet.": "अभी कोई सार्वजनिक दस्तावेज़ नहीं।",
    "Before": "पहले", "During": "दौरान", "After": "बाद में", "Back to public dashboard": "सार्वजनिक डैशबोर्ड पर वापस",
    "This project is not published on the public dashboard.": "यह परियोजना सार्वजनिक डैशबोर्ड पर प्रकाशित नहीं है।",
    "Internal remarks, file notes and officer details are visible only to authorised officers.": "आंतरिक टिप्पणियाँ, फ़ाइल नोट एवं अधिकारी विवरण केवल अधिकृत अधिकारियों को दिखते हैं।",
    "Sector": "क्षेत्र", "No works match your search.": "आपकी खोज से कोई कार्य मेल नहीं खाता।"
  });

  function publicList() { return App.db.projects.filter(function (p) { return DM.approved(p); }); }

  // ---------- Home / public dashboard ----------
  App.view("home", { kind: "public", title: function () { return t("Public Dashboard"); }, render: function (main, route) {
    var list = publicList(), k = DM.kpis(list, App.db), q = route.query;
    var inExec = list.filter(function (p) { var s = DM.status(p); return s === "ongoing"; }).length;
    var completed = list.filter(function (p) { return DM.status(p) === "completed"; });
    var asOn = '<span class="small muted">' + esc(t("As on")) + " " + App.date(App.today()) + "</span>";
    var h = '<section class="hero"><div class="container"><div>' +
      '<p class="kicker">' + esc(t("Transparency portal")) + "</p>" +
      "<h1>" + esc(t("Every DMFT work in Ramgarh, tracked from request to handover")) + "</h1>" +
      '<p class="lede">' + esc(t("Approved works funded by the District Mineral Foundation Trust for mining-affected areas and people of Ramgarh district, with their location, approved amount, physical progress and site photographs.")) + "</p>" +
      '<form class="hero-search" role="search" id="heroSearch"><label class="sr-only" for="heroQ">' + esc(t("Find a project by ID, name, village or block")) + '</label><input id="heroQ" type="search" placeholder="' + esc(t("Find a project by ID, name, village or block")) + '" value="' + esc(q.q || "") + '"><button type="submit">' + App.icon("search", "sm") + " " + esc(t("Search")) + "</button></form>" +
      '<div class="hero-actions"><a class="btn" href="#/?sec=projects">' + App.icon("folder") + esc(t("View all projects")) + '</a><a class="btn secondary" href="#/?sec=map">' + App.icon("map") + esc(t("Open project map")) + '</a><span style="align-self:center">' + App.sampleTag() + "</span></div>" +
      '</div><div class="card" style="padding:0;overflow:hidden"><div id="heroMap" class="map sm" style="border:0;border-radius:0;height:330px" aria-label="' + esc(t("Project locations")) + '"></div><div class="map-cap" style="padding:6px 12px 10px">' + App.icon("info", "sm") + esc(t("Schematic boundaries - sample. Block outlines are approximate and drawn for demonstration; the live portal uses official district / block / panchayat GIS layers.")) + "</div></div>" +
      "</div></section>";

    h += '<section class="pub-section" aria-labelledby="glanceT"><div class="container"><div class="section-head"><div><p class="eyebrow">' + esc(t("At a glance")) + '</p><h2 id="glanceT">' + esc(t("Public Dashboard")) + "</h2></div>" + asOn + "</div>";
    h += '<dl class="kpis">' +
      kpi("folder", t("Approved projects"), App.n(k.total), t("across 6 blocks"), "#123B73") +
      kpi("rupee", t("Approved amount"), App.crore(k.approvedAmount), App.n(k.total) + " " + t("Projects"), "#C2650A") +
      kpi("trend", t("Ongoing works"), App.n(inExec), t("works in execution"), "#2F5FAF") +
      kpi("check", t("Completed works"), App.n(k.completed), t("handed over to departments"), "#2F8A4E") +
      kpi("chart", t("Average physical progress"), k.physAvg + "%", t("ongoing and completed works"), "#0B8BA3") +
      kpi("wallet", t("Funds released"), App.crore(k.expenditure), Math.round(k.expenditure / Math.max(1, k.approvedAmount) * 100) + "% " + t("of approved amount"), "#7B4FB5") + "</dl>";

    // Block tiles
    h += '<h3 style="margin:22px 0 10px">' + esc(t("Block-wise works")) + '</h3><div class="block-tiles">';
    DM.BLOCKS.forEach(function (b) {
      var bl = list.filter(function (p) { return p.block === b.code; }), c = bl.filter(function (p) { return DM.status(p) === "completed"; }).length, o = bl.filter(function (p) { return DM.status(p) === "ongoing"; }).length, amt = 0;
      bl.forEach(function (p) { amt += DM.amount(p); });
      var n = Math.max(1, bl.length);
      h += '<a class="btile" style="text-decoration:none;color:inherit" href="#/?sec=projects&block=' + b.code + '"><h3><span>' + esc(App.L(b)) + '</span><span class="small muted">' + App.crore(amt) + '</span></h3><div class="bt-n">' + bl.length + ' <span class="bt-s">' + esc(t("Projects")) + "</span></div>" +
        '<div class="stack-bar" aria-hidden="true"><i style="width:' + (c / n * 100) + '%;background:#2F8A4E"></i><i style="width:' + (o / n * 100) + '%;background:#2F5FAF"></i></div>' +
        '<div class="bt-s" style="margin-top:6px">' + c + " " + esc(t("completed")) + " | " + o + " " + esc(t("ongoing")) + " | " + (bl.length - c - o) + " " + esc(t("other stages")) + "</div></a>";
    });
    h += "</div>";

    // Charts
    h += '<div class="grid g2" style="margin-top:16px">' +
      chartCard("chBlock", t("Completed and ongoing works by block"), t("Number of approved projects"), "tblBlock") +
      chartCard("chSector", t("Approved amount by sector"), t("PMKKKY 2024 sectors, rupees lakh"), "tblSector") + "</div>";
    h += "</div></section>";

    // Map section
    h += '<section class="pub-section" id="sec-map" aria-labelledby="mapT" style="padding-top:0"><div class="container"><div class="section-head"><div><p class="eyebrow">GIS</p><h2 id="mapT">' + esc(t("Project locations")) + '</h2></div><span class="small muted">' + esc(t("Click a marker for details and site photo.")) + '</span></div><div id="pubMap" class="map"></div><p class="map-cap">' + App.icon("info", "sm") + esc(t("Schematic boundaries - sample. Block outlines are approximate and drawn for demonstration; the live portal uses official district / block / panchayat GIS layers.")) + "</p></div></section>";

    // Projects
    h += '<section class="pub-section" id="sec-projects" aria-labelledby="projT" style="background:#fff;border-top:1px solid var(--rule-2);border-bottom:1px solid var(--rule-2)"><div class="container"><div class="section-head"><div><p class="eyebrow">' + esc(t("Project works")) + '</p><h2 id="projT">' + esc(t("Approved works with location, amount, progress and photographs")) + "</h2></div></div>" +
      '<div class="filters" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr"><div class="field"><label for="pf-q">' + esc(t("Search")) + '</label><input class="input" id="pf-q" type="search" value="' + esc(q.q || "") + '" placeholder="' + esc(t("Find a project by ID, name, village or block")) + '"></div>' +
      '<div class="field"><label for="pf-b">' + esc(t("Block")) + '</label><select class="input" id="pf-b">' + App.blockOpts(q.block || "") + "</select></div>" +
      '<div class="field"><label for="pf-d">' + esc(t("Department")) + '</label><select class="input" id="pf-d">' + App.deptOpts(q.dept || "") + "</select></div>" +
      '<div class="field"><label for="pf-s">' + esc(t("Status")) + '</label><select class="input" id="pf-s">' + App.opts([["ongoing", t("Ongoing")], ["completed", t("Completed")], ["other", t("Other")]], q.status || "", t("All works")) + "</select></div>" +
      '<div class="field"><label for="pf-f">' + esc(t("Financial Year")) + '</label><select class="input" id="pf-f">' + App.fyOpts(q.fy || "") + "</select></div></div>" +
      '<p class="small muted" id="pubCount" aria-live="polite"></p><div class="pcards" id="pubCards"></div><div class="center" style="margin-top:16px"><button class="btn secondary" type="button" id="pubMore">' + esc(t("Show more")) + "</button></div></div></section>";

    // Completed works
    completed.sort(function (a, b) { return (b.sf[10].handoverDate || "") < (a.sf[10].handoverDate || "") ? -1 : 1; });
    h += '<section class="pub-section" id="sec-completed" aria-labelledby="compT"><div class="container"><div class="section-head"><div><p class="eyebrow">' + esc(t("Completed works")) + '</p><h2 id="compT">' + esc(t("Recently completed works")) + '</h2></div><span class="small muted">' + esc(t("Completed and handed over to the concerned department")) + '</span></div><div class="pcards">' +
      completed.slice(0, 4).map(function (p) { return card(p, true); }).join("") + "</div></div></section>";

    // How it works
    var steps = [["file", t("Request and recommendation")], ["users", t("Gram Sabha, approvals and DPR")], ["tender", t("Tender and execution")], ["camera", t("Geo-tagged progress and inspection")], ["check", t("Handover to department")]];
    h += '<section class="pub-section" style="padding-top:0"><div class="container"><div class="card"><div class="split-head"><h2 style="margin:0">' + esc(t("How the portal works")) + '</h2><a class="btn" href="#/login">' + App.icon("lock") + esc(t("Officer login")) + '</a></div><ol class="grid g4" style="list-style:none;padding:0;margin:14px 0 0;grid-template-columns:repeat(5,minmax(0,1fr))">' +
      steps.map(function (s, i) { return '<li class="hl-box"><div class="small muted">' + (i + 1) + "</div><strong>" + App.icon(s[0] === "tender" ? "clipboard" : s[0]) + " " + esc(s[1]) + "</strong></li>"; }).join("") + "</ol></div></div></section>";
    main.innerHTML = h;

    // Map in hero + full map
    var hm = App.makeMap(document.getElementById("heroMap"), { publicLinks: true, legend: false, scroll: false }); if (hm) hm.setProjects(list);
    var pm = App.makeMap(document.getElementById("pubMap"), { publicLinks: true, scroll: false }); if (pm) pm.setProjects(list);

    // Charts
    var bl = DM.BLOCKS.map(function (b) { var x = list.filter(function (p) { return p.block === b.code; }); return { l: App.L(b), c: x.filter(function (p) { return DM.status(p) === "completed"; }).length, o: x.filter(function (p) { return DM.status(p) === "ongoing"; }).length, r: x.filter(function (p) { var s = DM.status(p); return s !== "completed" && s !== "ongoing"; }).length }; });
    App.chart(document.getElementById("chBlock"), { type: "bar", data: { labels: bl.map(function (x) { return x.l; }), datasets: [
      { label: t("Completed"), data: bl.map(function (x) { return x.c; }), backgroundColor: "#2F8A4E" }, { label: t("Ongoing"), data: bl.map(function (x) { return x.o; }), backgroundColor: "#2F5FAF" }, { label: t("Other"), data: bl.map(function (x) { return x.r; }), backgroundColor: "#A9BEDB" }] },
      options: { scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, beginAtZero: true, ticks: { precision: 0 } } } } });
    tableFor("tblBlock", [t("Block"), t("Completed"), t("Ongoing"), t("Other")], bl.map(function (x) { return [x.l, x.c, x.o, x.r]; }));
    var sec = DM.SECTORS.map(function (s) { var a = 0; list.forEach(function (p) { if (p.sector === s.code) a += DM.amount(p); }); return { l: App.L(s), a: Math.round(a / 1e5) }; }).filter(function (x) { return x.a > 0; }).sort(function (a, b) { return b.a - a.a; });
    App.chart(document.getElementById("chSector"), { type: "bar", data: { labels: sec.map(function (x) { return x.l; }), datasets: [{ label: t("Rs lakh"), data: sec.map(function (x) { return x.a; }), backgroundColor: "#2F5FAF" }] },
      options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: "#EEF1F4" } }, y: { grid: { display: false }, ticks: { autoSkip: false, font: { size: 11 }, callback: function (v) { var l = this.getLabelForValue(v); return l.length > 30 ? l.slice(0, 28) + "..." : l; } } } } } });
    tableFor("tblSector", [t("Sector"), t("Rs lakh")], sec.map(function (x) { return [x.l, App.n(x.a)]; }));
    App.qsa("[data-tt]", main).forEach(function (b) { b.addEventListener("click", function () { var tb = document.getElementById(b.getAttribute("data-tt")), cv = document.getElementById(b.getAttribute("data-cv")).parentNode, show = tb.hidden; tb.hidden = !show; cv.hidden = show; b.setAttribute("aria-pressed", String(show)); b.querySelector("span").textContent = show ? t("View as chart") : t("View as table"); }); });

    // Project cards with filters
    var shown = 12;
    function filtered() {
      var f = { q: val("pf-q"), block: val("pf-b"), dept: val("pf-d"), fy: val("pf-f") }, s = val("pf-s");
      var arr = App.filterProjects(list, f).filter(function (p) { var st = DM.status(p); return !s || (s === "other" ? (st !== "ongoing" && st !== "completed") : st === s); });
      arr.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.physical - a.physical; });
      return arr;
    }
    function draw() {
      var arr = filtered(), box = document.getElementById("pubCards");
      box.innerHTML = arr.length ? arr.slice(0, shown).map(function (p) { return card(p, false); }).join("") : '<p class="empty" style="grid-column:1/-1">' + esc(t("No works match your search.")) + "</p>";
      document.getElementById("pubCount").textContent = Math.min(shown, arr.length) + " " + t("of") + " " + arr.length + " " + t("works shown");
      document.getElementById("pubMore").hidden = arr.length <= shown;
      if (pm) pm.setProjects(arr);
    }
    ["pf-q", "pf-b", "pf-d", "pf-s", "pf-f"].forEach(function (id) { document.getElementById(id).addEventListener(id === "pf-q" ? "input" : "change", App.debounce(function () { shown = 12; draw(); }, 150)); });
    document.getElementById("pubMore").addEventListener("click", function () { shown += 12; draw(); });
    document.getElementById("heroSearch").addEventListener("submit", function (e) { e.preventDefault(); document.getElementById("pf-q").value = document.getElementById("heroQ").value; shown = 12; draw(); document.getElementById("sec-projects").scrollIntoView(); });
    draw();
    if (q.sec) { var el = document.getElementById("sec-" + q.sec); if (el) setTimeout(function () { el.scrollIntoView(); }, 60); }
    function val(id) { return document.getElementById(id).value; }
  } });

  function kpi(ic, label, value, sub, color) {
    return '<div class="kpi" style="--k:' + color + '"><dt>' + esc(label) + App.icon(ic) + "</dt><dd>" + value + '</dd><div class="k-sub">' + esc(sub) + "</div></div>";
  }
  function chartCard(id, title, sub, tbl) {
    return '<div class="card"><div class="card-head"><div><h3>' + esc(title) + '</h3><p class="ch-sub">' + esc(sub) + '</p></div><button type="button" class="btn ghost sm" data-tt="' + tbl + '" data-cv="' + id + '" aria-pressed="false">' + App.icon("table", "sm") + "<span>" + esc(t("View as table")) + '</span></button></div><div class="chart-box"><canvas id="' + id + '" role="img" aria-label="' + esc(title) + '"></canvas></div><div id="' + tbl + '" hidden></div><p class="small muted mb0" style="margin-top:8px">' + esc(t("Sample data")) + "</p></div>";
  }
  function tableFor(id, head, rows) {
    document.getElementById(id).innerHTML = '<div class="table-wrap"><table class="data"><thead><tr>' + head.map(function (x, i) { return '<th scope="col"' + (i ? ' class="num"' : "") + ">" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return i ? '<td class="num">' + esc(c) + "</td>" : '<th scope="row" style="background:none;position:static">' + esc(c) + "</th>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function card(p, done) {
    var st = DM.status(p), chipKey = st === "ongoing" || st === "completed" ? DM.dstatus(p) : st;
    var img = App.coverPhoto(p);
    return '<article class="pcard"><img src="' + img + '" alt="' + esc(t("Sample site photo") + ": " + App.pname(p)) + '" loading="lazy">' +
      '<div class="pc-b"><div class="pc-top"><span class="pc-id">' + esc(DM.displayId(p)) + "</span>" + App.statusChip(chipKey) + '</div><h3><a href="#/p/' + p.id + '">' + esc(App.pname(p)) + "</a></h3>" +
      '<div class="pc-meta">' + App.icon("location", "sm") + esc(App.villageName(p) + ", " + App.blockName(p.block)) + " | " + esc(App.deptShort(p.dept)) + "</div>" +
      (done ? '<div class="pc-meta">' + App.icon("check", "sm") + esc(t("Handed over on")) + " " + App.date(p.sf[10].handoverDate) + "</div>" : App.bar(p.physical || 0)) +
      '<div class="pc-row"><span class="muted small">' + esc(t("Approved amount")) + '</span><span class="pc-amt">' + App.money(DM.amount(p)) + "</span></div></div></article>";
  }

  // ---------- Public project page ----------
  App.view("publicProject", { kind: "public", title: function (r) { var p = DM.byId(App.db, r.params.id); return p ? App.pname(p) : t("Project details"); }, render: function (main, route) {
    var p = DM.byId(App.db, route.params.id);
    if (!p || !DM.approved(p)) { main.innerHTML = '<div class="container" style="padding:40px 24px"><h1>' + esc(t("Project details")) + '</h1><div class="note warn">' + App.icon("info") + "<span>" + esc(t("This project is not published on the public dashboard.")) + '</span></div><p style="margin-top:16px"><a href="#/">' + esc(t("Back to public dashboard")) + "</a></p></div>"; return; }
    var s5 = p.sf[5] || {}, s10 = p.sf[10] || {};
    var h = '<div class="container" style="padding-top:18px;padding-bottom:32px">' + App.crumbs([[t("Home"), "#/"], [t("Projects"), "#/?sec=projects"], [App.pname(p), ""]]) +
      '<div class="page-head"><div><p class="small muted mb0">' + esc(DM.displayId(p)) + "</p><h1>" + esc(App.pname(p)) + '</h1><p class="ph-sub">' + App.icon("location", "sm") + " " + esc(App.villageName(p) + ", " + App.panchayatName(p) + " " + t("Panchayat") + ", " + App.blockName(p.block)) + '</p></div><div class="ph-actions">' + App.pStatusChip(p) + App.sampleTag() + "</div></div>";
    h += '<div class="grid g-2-1"><div class="stack">';
    h += '<div class="card"><div class="card-head"><h2>' + esc(t("Site photographs")) + '</h2><span class="small muted">' + esc(t("Geo-tagged, time-stamped photographs uploaded from the field app.")) + '</span></div><div class="photo-grid">';
    var hist = p.progress || [], shots = [];
    shots.push({ ph: "before", o: { date: s5.commencementDate || p.sf[4].aaDate, time: "10:05" }, lab: t("Before") });
    hist.slice(-4).forEach(function (x) { shots.push({ ph: App.phaseOf(x.pct), o: x, lab: (x.pct >= 100 ? t("After") : t("During")) + " - " + x.pct + "%" }); });
    shots.slice(-4).forEach(function (s, i) { h += '<figure class="photo"><img src="' + App.photo(p, i, s.ph, s.o) + '" alt="' + esc(t("Sample site photo") + " - " + s.lab) + '"><figcaption><strong>' + esc(s.lab) + "</strong>" + App.date(s.o.date) + "</figcaption></figure>"; });
    h += "</div></div>";
    h += '<div class="card"><div class="card-head"><h2>' + esc(t("Lifecycle")) + '</h2></div><div class="stepper">' + DM.STAGES.map(function (s) { var cls = s.n < p.stage || DM.status(p) === "completed" ? "done" : s.n === p.stage ? "cur" : ""; return '<div class="step ' + cls + '"><span class="dot">' + (cls === "done" ? App.icon("tick", "sm") : s.n) + '</span><span class="sl">' + esc(App.L(s.s)) + "</span></div>"; }).join("") + '</div><p class="small muted mb0" style="margin-top:10px">' + App.icon("lock", "sm") + " " + esc(t("Internal remarks, file notes and officer details are visible only to authorised officers.")) + "</p></div>";
    h += '<div class="card"><div class="card-head"><h2>' + esc(t("Project locations")) + '</h2></div><div id="ppMap" class="map sm"></div></div>';
    h += '</div><div class="stack"><div class="card"><div class="card-head"><h2>' + esc(t("Work details")) + '</h2></div><dl class="kv">' +
      kv(t("Approved amount"), App.money(DM.amount(p))) + kv(t("Financial Year"), p.fy) + kv(t("Executing department"), App.deptName(p.dept)) + kv(t("Sector"), App.sectorName(p.sector)) +
      kv(t("Executing agency"), s5.contractor ? App.contractorName(s5.contractor) : "-") + kv(t("Work type"), App.L(p.sf[1].workType)) + "</dl>" +
      '<div style="margin-top:12px"><div class="small muted">' + esc(t("Physical progress")) + "</div>" + App.bar(p.physical || 0) + '<div class="small muted" style="margin-top:6px">' + esc(t("Financial progress")) + "</div>" + App.bar(DM.finPct(p), true) + "</div></div>";
    h += '<div class="card"><div class="card-head"><h2>' + esc(t("Key dates")) + '</h2></div><dl class="kv">' + kv(t("Administrative approval"), App.date(p.sf[4].aaDate)) + kv(t("Work commenced"), App.date(s5.commencementDate)) + kv(t("Scheduled completion"), App.date(s5.plannedCompletion)) + kv(t("Actual completion"), App.date(s10.completionDate)) + kv(t("Handed over on"), App.date(s10.handoverDate)) + "</dl></div>";
    var pub = (p.docs || []).filter(function (d) { return d.access === "public"; });
    h += '<div class="card"><div class="card-head"><h2>' + esc(t("Public documents")) + "</h2></div>" + (pub.length ? '<ul class="mini-list">' + pub.map(function (d) { var v = d.versions[d.versions.length - 1]; var cat = DM.DOC_CATS.filter(function (c) { return c.k === d.cat; })[0]; return "<li><span>" + App.icon("file", "sm") + " " + esc(App.L(cat)) + '<br><span class="small muted">' + esc(d.type.toUpperCase()) + " | " + Math.round(v.size / 1024) + " KB | " + App.date(v.date) + "</span></span></li>"; }).join("") + "</ul>" : '<p class="muted small">' + esc(t("No public documents yet.")) + "</p>") + "</div>";
    h += '<a class="btn secondary" href="#/">' + App.icon("arrow-left") + esc(t("Back to public dashboard")) + "</a></div></div></div>";
    main.innerHTML = h;
    var m = App.makeMap(document.getElementById("ppMap"), { publicLinks: true, legend: false, scroll: false }); if (m) { m.setProjects([p]); m.focus(p, 12); }
  } });
  function kv(k, v) { return "<div><dt>" + esc(k) + "</dt><dd>" + v + "</dd></div>"; }

  // ---------- GIGW pages ----------
  var PAGES = {
    "website-policies": { t: ["Website Policies", "वेबसाइट नीतियाँ"], b: [
      ["This portal follows the Guidelines for Indian Government Websites (GIGW 3.0). The policies below govern content, privacy, hyperlinking, copyright, accessibility and content review.", "यह पोर्टल भारतीय सरकारी वेबसाइटों हेतु दिशानिर्देश (जीआईजीडब्ल्यू 3.0) का पालन करता है। सामग्री, गोपनीयता, हाइपरलिंकिंग, कॉपीराइट, सुलभता एवं सामग्री समीक्षा निम्न नीतियों से शासित हैं।"],
      ["Content Review Policy: project data is updated by the authorised departments through the portal workflow; public dashboard figures are refreshed every 15 minutes and reviewed monthly by the DMFT Cell.", "सामग्री समीक्षा नीति: परियोजना डाटा अधिकृत विभागों द्वारा पोर्टल वर्कफ़्लो के माध्यम से अद्यतन किया जाता है; सार्वजनिक डैशबोर्ड के आँकड़े प्रत्येक 15 मिनट में रीफ़्रेश होते हैं एवं डीएमएफटी सेल द्वारा मासिक समीक्षा की जाती है।"],
      ["Content Archival Policy: completed projects remain published; superseded documents are retained with version history.", "सामग्री संग्रह नीति: पूर्ण परियोजनाएँ प्रकाशित रहती हैं; प्रतिस्थापित दस्तावेज़ संस्करण इतिहास सहित सुरक्षित रखे जाते हैं।"]] },
    terms: { t: ["Terms & Conditions", "नियम एवं शर्तें"], b: [
      ["This portal is owned by the District Mineral Foundation Trust, Ramgarh. Information is provided for public transparency; for any official purpose refer to the orders issued by the District Administration.", "यह पोर्टल जिला खनिज फाउंडेशन ट्रस्ट, रामगढ़ के स्वामित्व में है। जानकारी सार्वजनिक पारदर्शिता हेतु दी गई है; किसी भी आधिकारिक प्रयोजन हेतु जिला प्रशासन द्वारा जारी आदेशों को देखें।"],
      ["These terms are governed by the laws of India; disputes are subject to the jurisdiction of the courts at Ramgarh, Jharkhand.", "ये शर्तें भारत के कानूनों से शासित हैं; विवाद रामगढ़, झारखंड के न्यायालयों के क्षेत्राधिकार के अधीन हैं।"]] },
    privacy: { t: ["Privacy Policy", "गोपनीयता नीति"], b: [
      ["The public dashboard does not collect personal information. Officer accounts store designation, official e-mail and mobile number only for login, OTP and alerts.", "सार्वजनिक डैशबोर्ड कोई व्यक्तिगत जानकारी एकत्र नहीं करता। अधिकारी खातों में केवल लॉगिन, ओटीपी एवं अलर्ट हेतु पदनाम, आधिकारिक ई-मेल एवं मोबाइल नंबर संग्रहीत होते हैं।"],
      ["All data is hosted in India, encrypted in transit and at rest, and owned by the District Administration. Access is role-based and every action is audit-logged.", "सम्पूर्ण डाटा भारत में होस्ट किया जाता है, ट्रांज़िट एवं भंडारण में एन्क्रिप्टेड है, एवं जिला प्रशासन के स्वामित्व में है। पहुँच भूमिका-आधारित है एवं प्रत्येक कार्रवाई का ऑडिट लॉग रखा जाता है।"]] },
    copyright: { t: ["Copyright Policy", "कॉपीराइट नीति"], b: [["Material on this portal may be reproduced free of charge with due acknowledgement to DMFT, Ramgarh. It may not be used in a derogatory manner or in a misleading context.", "इस पोर्टल की सामग्री डीएमएफटी, रामगढ़ को उचित आभार सहित निःशुल्क पुनरुत्पादित की जा सकती है। इसका अपमानजनक या भ्रामक संदर्भ में उपयोग नहीं किया जा सकता।"]] },
    hyperlinking: { t: ["Hyperlinking Policy", "हाइपरलिंकिंग नीति"], b: [["Links to external websites are provided for convenience and open in a new window. DMFT, Ramgarh is not responsible for their content. Prior permission is not required to link to this portal.", "बाहरी वेबसाइटों के लिंक सुविधा हेतु दिए गए हैं एवं नई विंडो में खुलते हैं। उनकी सामग्री हेतु डीएमएफटी, रामगढ़ उत्तरदायी नहीं है। इस पोर्टल से लिंक करने हेतु पूर्व अनुमति आवश्यक नहीं है।"]] },
    accessibility: { t: ["Accessibility Statement", "सुलभता विवरण"], b: [
      ["The DMFT Work Monitoring Portal, Ramgarh is designed to meet the Guidelines for Indian Government Websites (GIGW 3.0) and WCAG 2.1 Level AA so that it can be used by everyone, including persons with disabilities.", "डीएमएफटी कार्य अनुश्रवण पोर्टल, रामगढ़ को भारतीय सरकारी वेबसाइट दिशानिर्देश (जीआईजीडब्ल्यू 3.0) एवं डब्ल्यूसीएजी 2.1 स्तर एए के अनुरूप बनाया गया है ताकि दिव्यांगजन सहित सभी इसका उपयोग कर सकें।"],
      ["Features: skip to main content; keyboard navigation with visible focus; text size controls (A-, A, A+); high-contrast mode; English and Hindi (Unicode) throughout; text alternatives for images and a table view for every chart; responsive layout from 360 px phones to large screens.", "सुविधाएँ: मुख्य सामग्री पर जाएँ; दृश्य फ़ोकस सहित कीबोर्ड नेविगेशन; टेक्स्ट आकार नियंत्रण (A-, A, A+); उच्च कंट्रास्ट मोड; सम्पूर्ण अंग्रेज़ी एवं हिन्दी (यूनिकोड); चित्रों हेतु पाठ विकल्प एवं प्रत्येक चार्ट हेतु तालिका दृश्य; 360 पिक्सेल फ़ोन से बड़ी स्क्रीन तक उत्तरदायी लेआउट।"],
      ["If you face any difficulty in accessing the portal, please contact the District Planning Office, Ramgarh (06553-231359).", "पोर्टल के उपयोग में कोई कठिनाई होने पर कृपया जिला योजना कार्यालय, रामगढ़ (06553-231359) से संपर्क करें।"]] },
    "screen-reader": { t: ["Screen Reader Access", "स्क्रीन रीडर एक्सेस"], b: [
      ["The portal works with screen readers. Free and commercial screen readers include: NVDA (free, Windows), JAWS (commercial, Windows), Orca (free, Linux), VoiceOver (built into macOS and iOS) and TalkBack (built into Android).", "पोर्टल स्क्रीन रीडर के साथ कार्य करता है। निःशुल्क एवं व्यावसायिक स्क्रीन रीडर: एनवीडीए (निःशुल्क, विंडोज़), जॉज़ (व्यावसायिक, विंडोज़), ओर्का (निःशुल्क, लिनक्स), वॉयसओवर (मैकओएस एवं आईओएस में अंतर्निर्मित) तथा टॉकबैक (एंड्रॉइड में अंतर्निर्मित)।"]] },
    help: { t: ["Help", "सहायता"], b: [
      ["Citizens: use the Public Dashboard to search any approved work by ID, name, village or block, view it on the map, and open its page for photographs, progress and key dates.", "नागरिक: किसी भी स्वीकृत कार्य को आईडी, नाम, ग्राम या प्रखंड से खोजने, मानचित्र पर देखने तथा फोटो, प्रगति एवं मुख्य तिथियों हेतु उसका पृष्ठ खोलने के लिए सार्वजनिक डैशबोर्ड का उपयोग करें।"],
      ["Officers: sign in with username, password and OTP. Your dashboard and lists are limited to your role and jurisdiction. Use the file-movement panel on a project to forward, return, revert, resubmit or approve, always with remarks.", "अधिकारी: उपयोगकर्ता नाम, पासवर्ड एवं ओटीपी से लॉगिन करें। आपका डैशबोर्ड एवं सूचियाँ आपकी भूमिका एवं क्षेत्राधिकार तक सीमित हैं। किसी परियोजना पर अग्रसारित, वापस, पूर्वावस्था, पुनः प्रस्तुत या स्वीकृत करने हेतु फ़ाइल संचलन पैनल का उपयोग करें - सदैव टिप्पणी सहित।"],
      ["Field teams: open the Field App on a phone to update progress, capture geo-tagged photos and record inspections, even without network; entries sync when the app is next opened with network.", "क्षेत्र दल: प्रगति अद्यतन, जियो-टैग फोटो एवं निरीक्षण दर्ज करने हेतु फ़ोन पर फील्ड ऐप खोलें, नेटवर्क न होने पर भी; नेटवर्क के साथ ऐप अगली बार खुलने पर प्रविष्टियाँ सिंक होती हैं।"],
      ["Helpdesk: 10:00 to 18:00, Monday to Saturday, through e-mail, phone and WhatsApp. Portal-down and security incidents are attended at any time.", "हेल्पडेस्क: सोमवार से शनिवार, 10:00 से 18:00, ई-मेल, फ़ोन एवं व्हाट्सऐप द्वारा। पोर्टल बंद होने एवं सुरक्षा घटनाओं पर किसी भी समय सहायता।"]] },
    faq: { t: ["FAQ", "सामान्य प्रश्न"], b: [
      ["Q. Which projects are shown publicly? A. All works that have received administrative approval, with location, approved amount, physical progress and photographs.", "प्र. सार्वजनिक रूप से कौन-सी परियोजनाएँ दिखाई जाती हैं? उ. प्रशासनिक स्वीकृति प्राप्त सभी कार्य, स्थान, स्वीकृत राशि, भौतिक प्रगति एवं फोटो सहित।"],
      ["Q. How is the Unique Project ID formed? A. DMFT / district / financial year / block code / serial number, for example DMFT/RMG/2026-27/MND/0042.", "प्र. विशिष्ट परियोजना आईडी कैसे बनती है? उ. डीएमएफटी / जिला / वित्तीय वर्ष / प्रखंड कोड / क्रम संख्या, उदाहरण DMFT/RMG/2026-27/MND/0042।"],
      ["Q. How often is progress updated? A. Field teams update physical progress with geo-tagged photographs; the portal raises an alert when an update is overdue.", "प्र. प्रगति कितनी बार अद्यतन होती है? उ. क्षेत्र दल जियो-टैग फोटो सहित भौतिक प्रगति अद्यतन करते हैं; अद्यतन लंबित होने पर पोर्टल अलर्ट भेजता है।"]] },
    contact: { t: ["Contact Us", "संपर्क करें"], b: [["District Planning Office, Block-B, Collectorate Building (DC Office), Chhatarmaru, Ramgarh, Jharkhand 825101. Phone: 06553-231359. E-mail: ddc-ramgarh@jharkhandmail.gov.in", "जिला योजना कार्यालय, ब्लॉक-बी, समाहरणालय भवन (उपायुक्त कार्यालय), छत्तरमारू, रामगढ़, झारखंड 825101। फ़ोन: 06553-231359। ई-मेल: ddc-ramgarh@jharkhandmail.gov.in"]] },
    feedback: { t: ["Feedback", "प्रतिक्रिया"], b: [["Feedback on the portal can be sent to the District Planning Office at the e-mail address on the Contact Us page. In the live portal, a feedback form with acknowledgement number is provided here.", "पोर्टल पर प्रतिक्रिया संपर्क पृष्ठ पर दिए ई-मेल पते पर जिला योजना कार्यालय को भेजी जा सकती है। लाइव पोर्टल में यहाँ पावती संख्या सहित प्रतिक्रिया प्रपत्र उपलब्ध होगा।"]] },
    related: { t: ["Related Sites", "संबंधित साइटें"], b: [["Government of Jharkhand, District Ramgarh and the Ministry of Mines (PMKKKY) websites are linked from the live portal and open in a new window. External links are not opened in this offline prototype.", "झारखंड सरकार, जिला रामगढ़ एवं खान मंत्रालय (पीएमकेकेकेवाई) की वेबसाइटें लाइव पोर्टल से लिंक हैं एवं नई विंडो में खुलती हैं। इस ऑफ़लाइन प्रोटोटाइप में बाहरी लिंक नहीं खोले जाते।"]] }
  };
  App.view("page", { kind: "public", title: function (r) { var pg = PAGES[r.params.slug]; return pg ? pg.t[App.lang === "hi" ? 1 : 0] : t("Page not found"); }, render: function (main, route) {
    var slug = route.params.slug, pg = PAGES[slug], L = App.lang === "hi" ? 1 : 0;
    if (slug === "sitemap") { main.innerHTML = '<div class="container" style="padding-top:18px;padding-bottom:40px">' + App.crumbs([[t("Home"), "#/"], [t("Sitemap"), ""]]) + "<h1>" + esc(t("Sitemap")) + "</h1>" + sitemap() + "</div>"; return; }
    if (!pg) { App.views.notfound.render(main); return; }
    main.innerHTML = '<div class="container" style="padding-top:18px;padding-bottom:40px"><div class="doc-page">' + App.crumbs([[t("Home"), "#/"], [pg.t[L], ""]]) + "<h1>" + esc(pg.t[L]) + "</h1>" + pg.b.map(function (x) { return "<p>" + esc(x[L]) + "</p>"; }).join("") +
      '<p class="small muted">' + esc(t("Last updated")) + ": " + App.date(App.today()) + "</p></div></div>";
  } });
  function sitemap() {
    var groups = [
      [t("Public Dashboard"), [["#/", t("Home")], ["#/?sec=projects", t("Projects")], ["#/?sec=map", t("Project Map")], ["#/?sec=completed", t("Completed Works")], ["#/login", t("Officer Login")]]],
      [t("Officer modules"), [["#/dashboard", t("Dashboard")], ["#/projects", t("All Projects")], ["#/projects/new", t("New Work Request")], ["#/map", t("GIS Map")], ["#/inspections", t("Inspections")], ["#/pendency", t("Delay & Pendency")], ["#/contractors", t("Contractors")], ["#/ai", t("Ask DMFT AI")], ["#/reports", t("Reports & MIS")], ["#/import", t("Data Import")], ["#/users", t("Users & Roles")], ["#/field", t("Field App")]]],
      [t("Policies") + " & " + t("Help"), Object.keys(PAGES).map(function (k) { return ["#/page/" + k, PAGES[k].t[App.lang === "hi" ? 1 : 0]]; })]
    ];
    return '<div class="sitemap-grid">' + groups.map(function (g) { return '<div class="card"><h2>' + esc(g[0]) + '</h2><ul class="mini-list">' + g[1].map(function (l) { return '<li><a href="' + l[0] + '">' + esc(l[1]) + "</a></li>"; }).join("") + "</ul></div>"; }).join("") + "</div>";
  }
  App.addHi({ "Officer modules": "अधिकारी मॉड्यूल" });
})();
