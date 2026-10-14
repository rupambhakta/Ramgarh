/* Delay & pendency monitor (scope item 5) + alerts via e-mail / SMS / WhatsApp (scope item 9) + SLA configuration. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Delay & Pendency Monitor": "विलंब एवं लंबितता अनुश्रवण", "Every pending file and activity, aged against the configured SLA. Breaches trigger e-mail, SMS and WhatsApp alerts.": "प्रत्येक लंबित फ़ाइल एवं गतिविधि, निर्धारित एसएलए के सापेक्ष आयु सहित। उल्लंघन पर ई-मेल, एसएमएस एवं व्हाट्सऐप अलर्ट।",
    "Overview": "सारांश", "Pending items": "लंबित मद", "Alerts log": "अलर्ट लॉग", "SLA configuration": "एसएलए विन्यास",
    "Over SLA": "एसएलए से अधिक", "Escalated": "वरिष्ठ को प्रेषित", "Alerts (last 7 days)": "अलर्ट (पिछले 7 दिन)", "Pendency by category": "श्रेणीवार लंबितता",
    "Category": "श्रेणी", "Pending": "लंबित", "Ageing": "आयु", "SLA (days)": "एसएलए (दिन)", "Age (days)": "आयु (दिन)", "Over by": "अधिक", "Since": "कब से",
    "Run alert check now": "अभी अलर्ट जाँच चलाएँ", "View full log": "पूरा लॉग देखें", "E-mail": "ई-मेल", "SMS": "एसएमएस", "WhatsApp": "व्हाट्सऐप",
    "Sent (simulated)": "भेजा गया (सिमुलेटेड)", "Queued (simulated)": "कतार में (सिमुलेटेड)", "Escalated to next officer": "अगले अधिकारी को प्रेषित", "Recipient": "प्राप्तकर्ता", "Message": "संदेश", "Channel": "माध्यम", "Alert type": "अलर्ट प्रकार", "Time": "समय",
    "{n} alerts queued for SLA breaches (simulated, not actually sent).": "एसएलए उल्लंघन हेतु {n} अलर्ट कतार में (सिमुलेटेड, वास्तव में नहीं भेजे गए)।", "No new breaches since the last check.": "पिछली जाँच के बाद कोई नया उल्लंघन नहीं।",
    "Prototype note: notifications are simulated. The live portal sends e-mail, DLT-registered SMS templates and WhatsApp Business utility templates.": "प्रोटोटाइप टिप्पणी: सूचनाएँ सिमुलेटेड हैं। लाइव पोर्टल ई-मेल, डीएलटी-पंजीकृत एसएमएस टेम्पलेट एवं व्हाट्सऐप बिज़नेस यूटिलिटी टेम्पलेट भेजेगा।",
    "SLA days per pendency category": "लंबितता श्रेणीवार एसएलए दिवस", "Escalation and digest": "प्रेषण एवं दैनिक सार", "Escalate to the next officer when SLA is exceeded twice over": "एसएलए दोगुना पार होने पर अगले अधिकारी को प्रेषित करें",
    "Daily digest e-mail time": "दैनिक सार ई-मेल समय", "Alert channels by alert type": "अलर्ट प्रकार अनुसार माध्यम", "Save configuration": "विन्यास सहेजें", "SLA configuration saved. Ageing and alerts now use the new timelines.": "एसएलए विन्यास सहेजा गया। आयु एवं अलर्ट अब नई समय-सीमा अनुसार।",
    "All channels": "सभी माध्यम", "All types": "सभी प्रकार", "All categories": "सभी श्रेणियाँ", "No pending items for the selected filters.": "चयनित फ़िल्टर हेतु कोई लंबित मद नहीं।",
    "0-15 days": "0-15 दिन", "16-30 days": "16-30 दिन", "31-60 days": "31-60 दिन", "Over 60 days": "60 दिन से अधिक", "Escalation": "प्रेषण", "Digest": "सार",
    "SLA days must be between 1 and 365.": "एसएलए दिवस 1 से 365 के बीच होने चाहिए।", "Open item list": "मद सूची खोलें", "items": "मद", "Within SLA": "एसएलए के भीतर"
  });
  var MSG = {
    approval: { en: "Approval pending: {id} ({name}) awaits action at {to} for {d} days. Please clear the file.", hi: "स्वीकृति लंबित: {id} ({name}) {d} दिनों से {to} के स्तर पर लंबित। कृपया फ़ाइल निष्पादित करें।" },
    file: { en: "File pending: {id} ({name}) is pending with {to} for {d} days.", hi: "फ़ाइल लंबित: {id} ({name}) {d} दिनों से {to} के पास लंबित।" },
    notstarted: { en: "Work not started: {id} ({name}) - agreement signed but work not commenced.", hi: "कार्य प्रारंभ नहीं: {id} ({name}) - एकरारनामा हो चुका किंतु कार्य प्रारंभ नहीं।" },
    progress: { en: "Progress not updated: {id} ({name}) - no geo-tagged progress update within the SLA.", hi: "प्रगति अद्यतन नहीं: {id} ({name}) - एसएलए अवधि में जियो-टैग प्रगति अद्यतन नहीं।" },
    inspection: { en: "Inspection pending: {id} ({name}) - inspection or inspection action awaited from {to}.", hi: "निरीक्षण लंबित: {id} ({name}) - {to} से निरीक्षण या निरीक्षण कार्रवाई अपेक्षित।" },
    payment: { en: "Payment pending: requisition for {id} ({name}) awaits action at {to}.", hi: "भुगतान लंबित: {id} ({name}) की अधियाचना {to} के स्तर पर लंबित।" },
    duesoon: { en: "Completion date approaching: {id} ({name}) is due on {due}.", hi: "पूर्णता तिथि निकट: {id} ({name}) की नियत तिथि {due}।" },
    delayed: { en: "Project delayed: {id} ({name}) is behind schedule. Review and submit an action plan.", hi: "परियोजना विलंबित: {id} ({name}) समय-सारणी से पीछे। समीक्षा कर कार्य-योजना प्रस्तुत करें।" },
    handover: { en: "Handover pending: {id} ({name}) is complete; handover to the user department is awaited.", hi: "हस्तांतरण लंबित: {id} ({name}) पूर्ण; उपयोगकर्ता विभाग को हस्तांतरण अपेक्षित।" }
  };
  var CH = { email: ["E-mail", "mail", "ch-email"], sms: ["SMS", "sms", "ch-sms"], whatsapp: ["WhatsApp", "whatsapp", "ch-wa"] };
  var AGE = [["0-15 days", "#2F8A4E", 0, 15], ["16-30 days", "#B88A00", 16, 30], ["31-60 days", "#C2650A", 31, 60], ["Over 60 days", "#C0392B", 61, 99999]];
  function cfg() {
    var c = App.db.alertCfg;
    if (!c) { c = App.db.alertCfg = { escalate: true, digest: "09:30", ch: {} }; Object.keys(DM.ALERT_TYPES).forEach(function (k) { c.ch[k] = { email: true, sms: true, whatsapp: k === "delayed" || k === "payment" || k === "approval" }; }); }
    return c;
  }
  App.alertMessage = function (a) {
    var p = DM.byId(App.db, a.pid); if (!p) return "";
    var m = MSG[a.type] || MSG.file, d = p.pendingSince ? App.ago(p.pendingSince) : "";
    var s = App.L(m); if (!(d >= 1)) s = s.replace(" for {d} days", "").replace("{d} दिनों से ", "");
    s = s.replace("{id}", DM.displayId(p)).replace("{name}", App.pname(p)).replace("{to}", App.desig(a.to, p)).replace("{d}", d).replace("{due}", App.date(p.sf[5] && p.sf[5].plannedCompletion));
    return (a.channel === "sms" ? "DMFT-RMG: " : "") + s;
  };
  function chChip(c) { var x = CH[c] || CH.email; return '<span class="chip plain ' + x[2] + '">' + App.icon(x[1], "sm") + " " + App.esc(App.t(x[0])) + "</span>"; }

  App.view("pendency", {
    kind: "officer", perm: "dashboard",
    title: function () { return App.t("Delay & Pendency Monitor"); },
    render: function (main, route) {
      var q = route.query, tab = q.tab || "overview";
      function draw() {
        var scope = {}; App.scoped().forEach(function (p) { scope[p.id] = p; });
        var items = DM.pendency(App.db).filter(function (x) { return scope[x.pid]; });
        var alerts = App.db.alerts.filter(function (a) { return scope[a.pid]; });
        var over = items.filter(function (x) { return x.over; }), esc = items.filter(function (x) { return x.age > x.sla * 2; });
        var wk = DM.util.addDays(App.today(), -7), recent = alerts.filter(function (a) { return a.ts.slice(0, 10) >= wk; });
        var h = App.pageHead(App.t("Delay & Pendency Monitor"), App.esc(App.t("Every pending file and activity, aged against the configured SLA. Breaches trigger e-mail, SMS and WhatsApp alerts.")),
          App.can("dashboard", "view") ? '<button class="btn" type="button" id="pdRun">' + App.icon("bell", "sm") + App.esc(App.t("Run alert check now")) + "</button>" : "", [[App.t("Home"), "#/dashboard"], [App.t("Delay & Pendency"), ""]]);
        var tabs = [["overview", "Overview"], ["items", "Pending items"], ["alerts", "Alerts log"], ["sla", "SLA configuration"]];
        h += '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<a role="tab" href="#/pendency?tab=' + t[0] + '" aria-selected="' + (tab === t[0]) + '">' + App.esc(App.t(t[1])) + (t[0] === "items" ? ' <span class="pill-n">' + items.length + "</span>" : t[0] === "alerts" ? ' <span class="pill-n">' + alerts.length + "</span>" : "") + "</a>"; }).join("") + "</div>";
        if (tab === "overview") h += overview(items, over, esc, recent, alerts);
        else if (tab === "items") h += itemsTab(items, scope);
        else if (tab === "alerts") h += alertsTab(alerts);
        else h += slaTab();
        main.innerHTML = h;
        bind(items, scope);
      }
      function k(label, n, icon, color, href) { return '<a class="kpi" href="' + href + '" style="--k:' + color + '"><dl style="margin:0"><dt>' + App.esc(App.t(label)) + App.icon(icon) + "</dt><dd>" + n + "</dd></dl></a>"; }
      function overview(items, over, esc, recent, alerts) {
        var h = '<div class="kpis small-k" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-bottom:14px">' + k("Pending items", items.length, "pending", "#123B73", "#/pendency?tab=items") + k("Over SLA", over.length, "warning", "#C0392B", "#/pendency?tab=items&over=1") +
          k("Escalated", esc.length, "flag", "#7B4FB5", "#/pendency?tab=items&over=1") + k("Alerts (last 7 days)", recent.length, "bell", "#C2650A", "#/pendency?tab=alerts") + "</div>";
        h += '<div class="pd-grid"><div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Pendency by category")) + '</h2></div><div class="pd-legend">' + AGE.map(function (a) { return '<span><i style="background:' + a[1] + '"></i>' + App.esc(App.t(a[0])) + "</span>"; }).join("") + "</div></div>" +
          '<div class="table-wrap" tabindex="0"><table class="data pd-cat"><caption class="sr-only">' + App.esc(App.t("Pendency by category")) + '</caption><thead><tr><th scope="col">' + App.esc(App.t("Category")) + '</th><th scope="col" class="num">' + App.esc(App.t("Pending")) + '</th><th scope="col" class="num">' + App.esc(App.t("Over SLA")) + '</th><th scope="col">' + App.esc(App.t("Ageing")) + '</th><th scope="col" class="num">' + App.esc(App.t("SLA (days)")) + "</th></tr></thead><tbody>";
        DM.PEND_CATS.forEach(function (c) {
          var its = items.filter(function (x) { return x.cat === c.k; }), ov = its.filter(function (x) { return x.over; }).length;
          var bars = AGE.map(function (a) { var n = its.filter(function (x) { return x.age >= a[2] && x.age <= a[3]; }).length; return n ? '<i style="background:' + a[1] + ";flex:" + n + '" title="' + App.esc(App.t(a[0])) + ": " + n + '"></i>' : ""; }).join("");
          h += '<tr><td><a href="#/pendency?tab=items&cat=' + c.k + '">' + App.esc(App.L(c)) + '</a></td><td class="num">' + its.length + '</td><td class="num' + (ov ? " pd-over" : "") + '">' + ov + '</td><td><div class="pd-age" role="img" aria-label="' + App.esc(App.L(c)) + '">' + bars + '</div></td><td class="num">' + App.db.sla[c.k] + "</td></tr>";
        });
        h += "</tbody></table></div></div>";
        h += '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Alerts log")) + '</h2><p class="ch-sub">' + App.esc(App.t("E-mail")) + " / " + App.esc(App.t("SMS")) + " / " + App.esc(App.t("WhatsApp")) + '</p></div><a class="small" href="#/pendency?tab=alerts">' + App.esc(App.t("View full log")) + " &rarr;</a></div>" +
          '<ul class="al-list">' + alerts.slice(0, 7).map(alertItem).join("") + "</ul></div></div>";
        h += '<p class="note" style="margin-top:14px">' + App.icon("info") + "<span>" + App.esc(App.t("Prototype note: notifications are simulated. The live portal sends e-mail, DLT-registered SMS templates and WhatsApp Business utility templates.")) + "</span></p>";
        return h;
      }
      function alertItem(a) {
        var p = DM.byId(App.db, a.pid), x = CH[a.channel] || CH.email;
        return '<li><span class="al-ic ' + a.channel + '">' + App.icon(x[1]) + '</span><div><div class="al-h"><strong>' + App.esc(App.L(DM.ALERT_TYPES[a.type] || DM.ALERT_TYPES.file)) + "</strong>" + chChip(a.channel) + (a.escalated ? '<span class="chip esc plain">' + App.esc(App.t("Escalated")) + "</span>" : "") + '</div><div class="al-msg">' + App.esc(App.alertMessage(a)) + '</div><div class="al-meta">' + App.esc(App.t("Recipient")) + ": " + App.esc(App.desig(a.to, p)) + " &middot; " + App.dt(a.ts) + " &middot; " + App.esc(App.t(a.status === "queued" ? "Queued (simulated)" : "Sent (simulated)")) + "</div></div></li>";
      }
      function itemsTab(items, scope) {
        var cat = q.cat || "", bl = q.block || "", dp = q.dept || "", ov = q.over === "1";
        var list = items.filter(function (x) { var p = scope[x.pid]; return (!cat || x.cat === cat) && (!bl || p.block === bl) && (!dp || p.dept === dp) && (!ov || x.over); }).sort(function (a, b) { return (b.age - b.sla) - (a.age - a.sla); });
        var h = '<form class="filters" id="pdF" style="grid-template-columns:repeat(5,minmax(0,1fr))"><div class="field span2"><label for="pc">' + App.esc(App.t("Category")) + '</label><select class="input" id="pc" name="cat">' + App.opts(DM.PEND_CATS.map(function (c) { return [c.k, App.L(c)]; }), cat, App.t("All categories")) + "</select></div>" +
          '<div class="field"><label for="pb">' + App.esc(App.t("Block")) + '</label><select class="input" id="pb" name="block">' + App.blockOpts(bl) + '</select></div><div class="field"><label for="pdd">' + App.esc(App.t("Department")) + '</label><select class="input" id="pdd" name="dept">' + App.deptOpts(dp) + "</select></div>" +
          '<div class="field" style="justify-content:flex-end"><label class="check"><input type="checkbox" name="over"' + (ov ? " checked" : "") + "> " + App.esc(App.t("Over SLA")) + "</label></div></form>";
        h += '<div class="split-head" style="margin-bottom:8px"><span class="small muted">' + list.length + " " + App.esc(App.t("items")) + '</span><button class="btn secondary sm" type="button" id="pdX">' + App.icon("download", "sm") + App.esc(App.t("Export Excel")) + "</button></div>";
        if (!list.length) return h + '<div class="card"><p class="empty">' + App.esc(App.t("No pending items for the selected filters.")) + "</p></div>";
        h += '<div class="table-wrap tbl-scroll" tabindex="0"><table class="data"><caption class="sr-only">' + App.esc(App.t("Pending items")) + "</caption><thead><tr>" + ["Category", "Project", "Block", "Stage", "Pending at", "Since", "Age (days)", "SLA (days)", "Over by"].map(function (x, i) { return '<th scope="col"' + (i >= 6 ? ' class="num"' : "") + ">" + App.esc(App.t(x)) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          list.slice(0, 300).map(function (x) {
            var p = scope[x.pid], c = DM.pendCat(x.cat), pend = x.cat === "inspection" || x.cat === "inspaction" ? "insp" : (p.pendingAt || "ee");
            return "<tr><td>" + App.esc(App.L(c)) + '</td><td><a class="pname" href="#/project/' + p.id + '">' + App.esc(App.pname(p)) + '</a><br><span class="pid">' + App.esc(DM.displayId(p)) + "</span></td><td>" + App.esc(App.blockName(p.block)) + "</td><td>" + App.esc(App.stageShort(p.stage)) + "</td><td>" + App.esc(App.desig(pend, p)) + '</td><td class="nowrap">' + App.date(x.since) + '</td><td class="num"><span class="age ' + (x.over ? "over" : x.age > x.sla * 0.75 ? "near" : "ok") + '">' + x.age + '</span></td><td class="num">' + x.sla + '</td><td class="num">' + (x.over ? '<span class="pd-over">+' + (x.age - x.sla) + "</span>" : '<span class="small muted">' + App.esc(App.t("Within SLA")) + "</span>") + "</td></tr>";
          }).join("") + "</tbody></table></div>";
        return h;
      }
      function alertsTab(alerts) {
        var ch = q.ch || "", ty = q.type || "";
        var list = alerts.filter(function (a) { return (!ch || a.channel === ch) && (!ty || a.type === ty); });
        var h = '<form class="filters" id="alF" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div class="field"><label for="ac">' + App.esc(App.t("Channel")) + '</label><select class="input" id="ac" name="ch">' + App.opts([["email", App.t("E-mail")], ["sms", App.t("SMS")], ["whatsapp", App.t("WhatsApp")]], ch, App.t("All channels")) + "</select></div>" +
          '<div class="field span2"><label for="at">' + App.esc(App.t("Alert type")) + '</label><select class="input" id="at" name="type">' + App.opts(Object.keys(DM.ALERT_TYPES).map(function (k) { return [k, App.L(DM.ALERT_TYPES[k])]; }), ty, App.t("All types")) + "</select></div></form>";
        h += '<div class="table-wrap tbl-scroll" tabindex="0"><table class="data"><caption class="sr-only">' + App.esc(App.t("Alerts log")) + "</caption><thead><tr>" + ["Time", "Channel", "Alert type", "Recipient", "Message", "Status"].map(function (x) { return '<th scope="col">' + App.esc(App.t(x)) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          (list.length ? list.slice(0, 300).map(function (a) { var p = DM.byId(App.db, a.pid); return '<tr><td class="nowrap">' + App.dt(a.ts) + "</td><td>" + chChip(a.channel) + "</td><td>" + App.esc(App.L(DM.ALERT_TYPES[a.type] || DM.ALERT_TYPES.file)) + (a.escalated ? '<br><span class="chip esc plain">' + App.esc(App.t("Escalated")) + "</span>" : "") + "</td><td>" + App.esc(App.desig(a.to, p)) + '</td><td style="max-width:480px">' + App.esc(App.alertMessage(a)) + '</td><td><span class="chip sim plain">' + App.esc(App.t(a.status === "queued" ? "Queued (simulated)" : "Sent (simulated)")) + "</span></td></tr>"; }).join("") : '<tr><td colspan="6" class="empty">' + App.esc(App.t("No records match the selected filters.")) + "</td></tr>") +
          "</tbody></table></div>";
        return h;
      }
      function slaTab() {
        var c = cfg(), edit = App.can("users", "full") || App.can("request", "full");
        var h = '<div class="grid g-2"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("SLA days per pendency category")) + '</h2></div><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Category")) + '</th><th scope="col" class="num">' + App.esc(App.t("SLA (days)")) + "</th></tr></thead><tbody>" +
          DM.PEND_CATS.map(function (x) { return '<tr><td><label for="sla_' + x.k + '">' + App.esc(App.L(x)) + '</label></td><td class="num"><input class="input sla-in" type="number" min="1" max="365" id="sla_' + x.k + '" data-sla="' + x.k + '" aria-describedby="slaE_' + x.k + '" value="' + App.db.sla[x.k] + '"' + (edit ? "" : " disabled") + '><span class="err sla-err" id="slaE_' + x.k + '" role="alert"></span></td></tr>'; }).join("") + "</tbody></table></div>";
        h += '<div class="stack"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("Escalation and digest")) + '</h2></div><label class="check" style="margin-bottom:12px"><input type="checkbox" id="cEsc"' + (c.escalate ? " checked" : "") + (edit ? "" : " disabled") + "> " + App.esc(App.t("Escalate to the next officer when SLA is exceeded twice over")) + '</label><div class="field" style="max-width:220px"><label for="cDig">' + App.esc(App.t("Daily digest e-mail time")) + '</label><input class="input" type="time" id="cDig" value="' + App.esc(c.digest) + '"' + (edit ? "" : " disabled") + "></div></div>";
        h += '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Alert channels by alert type")) + '</h2></div><div class="table-wrap"><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Alert type")) + '</th><th scope="col" class="center">' + App.esc(App.t("E-mail")) + '</th><th scope="col" class="center">' + App.esc(App.t("SMS")) + '</th><th scope="col" class="center">' + App.esc(App.t("WhatsApp")) + "</th></tr></thead><tbody>" +
          Object.keys(DM.ALERT_TYPES).map(function (t) { return "<tr><td>" + App.esc(App.L(DM.ALERT_TYPES[t])) + "</td>" + ["email", "sms", "whatsapp"].map(function (ch) { return '<td class="center"><input type="checkbox" aria-label="' + App.esc(App.L(DM.ALERT_TYPES[t]) + " - " + App.t(CH[ch][0])) + '" data-ch="' + t + "|" + ch + '"' + (c.ch[t] && c.ch[t][ch] ? " checked" : "") + (edit ? "" : " disabled") + "></td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div></div>" +
          (edit ? '<div><button class="btn" type="button" id="cSave">' + App.icon("check", "sm") + App.esc(App.t("Save configuration")) + '</button></div>' : "") + "</div></div>";
        return h;
      }
      function bind(items, scope) {
        var run = main.querySelector("#pdRun");
        if (run) run.addEventListener("click", function () {
          var c = cfg(), today = App.today(), n = 0;
          function chans(type) { return ["email", "sms", "whatsapp"].filter(function (ch) { return c.ch[type] && c.ch[type][ch]; }); }
          // Only items over SLA, plus works whose completion date falls within the next 7 days; App.notify skips same-day duplicates.
          items.filter(function (x) { return x.over && x.age > 0; }).forEach(function (x) {
            var p = scope[x.pid], type = DM.CAT_TO_ALERT[x.cat];
            var to = x.cat === "inspection" || x.cat === "inspaction" ? "insp" : (p.pendingAt || "ee"), escd = c.escalate && x.age > x.sla * 2;
            n += App.notify(type, p, escd ? nextUp(p, to) : to, chans(type), { reason: "sla", escalated: escd }) || 0;
          });
          Object.keys(scope).forEach(function (id) {
            var p = scope[id], pc = p.sf[5] && p.sf[5].plannedCompletion; if (DM.status(p) !== "ongoing" || !pc) return;
            var dl = DM.util.diff(today, pc); if (dl >= 0 && dl <= 7) n += App.notify("duesoon", p, "ee", chans("duesoon"), { reason: "due" }) || 0;
          });
          App.log("alerts", { en: "Alert check run: " + n + " alerts queued", hi: "अलर्ट जाँच: " + n + " अलर्ट कतार में" });
          App.save(); App.toast(n ? App.tf("{n} alerts queued for SLA breaches (simulated, not actually sent).", { n: n }) : App.t("No new breaches since the last check."), !!n);
          draw();
        });
        var pf = main.querySelector("#pdF");
        if (pf) pf.addEventListener("change", function () { q = { tab: "items", cat: pf.elements.cat.value, block: pf.elements.block.value, dept: pf.elements.dept.value, over: pf.elements.over.checked ? "1" : "" }; App.setQuery(q); draw(); });
        var af = main.querySelector("#alF");
        if (af) af.addEventListener("change", function () { q = { tab: "alerts", ch: af.elements.ch.value, type: af.elements.type.value }; App.setQuery(q); draw(); });
        var x = main.querySelector("#pdX");
        if (x) x.addEventListener("click", function () {
          var rows = [[App.t("Category"), App.t("Project ID"), App.t("Project name"), App.t("Block"), App.t("Department"), App.t("Stage"), App.t("Pending at"), App.t("Since"), App.t("Age (days)"), App.t("SLA (days)"), App.t("Over SLA")]];
          items.forEach(function (it) { var p = scope[it.pid]; rows.push([App.L(DM.pendCat(it.cat)), DM.displayId(p), App.pname(p), App.blockName(p.block), App.deptName(p.dept), App.stageName(p.stage), App.desig(p.pendingAt || "ee", p), it.since, it.age, it.sla, it.over ? App.t("Yes") : App.t("No")]); });
          App.exportXlsx("DMFT-Ramgarh_Pendency_" + App.today() + ".xlsx", [{ name: "Pendency", rows: rows }], App.t("Delay & Pendency Monitor"));
        });
        var sv = main.querySelector("#cSave");
        if (sv) sv.addEventListener("click", function () {
          var c = cfg(), bad = false, nv = {};
          App.qsa("[data-sla]", main).forEach(function (inp) { var v = parseInt(inp.value, 10); var e = main.querySelector("#slaE_" + inp.getAttribute("data-sla")); if (!(v >= 1 && v <= 365) || String(v) !== String(inp.value).trim()) { bad = bad || inp; inp.setAttribute("aria-invalid", "true"); e.textContent = App.t("SLA days must be between 1 and 365."); } else { inp.removeAttribute("aria-invalid"); e.textContent = ""; nv[inp.getAttribute("data-sla")] = v; } });
          if (bad) { bad.focus(); return; }
          for (var k in nv) App.db.sla[k] = nv[k];
          c.escalate = main.querySelector("#cEsc").checked; c.digest = main.querySelector("#cDig").value || "09:30";
          App.qsa("[data-ch]", main).forEach(function (cb) { var a = cb.getAttribute("data-ch").split("|"); c.ch[a[0]] = c.ch[a[0]] || {}; c.ch[a[0]][a[1]] = cb.checked; });
          App.log("config", { en: "SLA configuration updated", hi: "एसएलए विन्यास अद्यतन" });
          App.save(); App.toast(App.t("SLA configuration saved. Ageing and alerts now use the new timelines.")); draw();
        });
      }
      function nextUp(p, to) { if (p.wf) { var ch = DM.CHAIN[p.wf.stage], i = ch.indexOf(to); if (i >= 0 && i < ch.length - 1) return ch[i + 1]; } return to === "dpo" ? "ddc" : "dpo"; }
      draw();
    }
  });
})();
