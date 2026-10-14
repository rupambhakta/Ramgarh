/* Mobile field app (scope item 8, mobile): assigned works, progress update with camera + GPS geo-tag, inspection checklist,
   offline queue with sync. Installable PWA in the live portal; here it runs as a responsive route. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "DMFT Field App": "डीएमएफटी फील्ड ऐप", "My works": "मेरे कार्य", "Update": "अद्यतन", "Inspect": "निरीक्षण", "Queue": "कतार",
    "Assigned": "आवंटित", "Delayed": "विलंबित", "Update due": "अद्यतन देय", "My assigned works": "मेरे आवंटित कार्य", "Last update": "अंतिम अद्यतन",
    "{n} days ago": "{n} दिन पहले", "today": "आज", "yesterday": "कल", "No update yet": "अभी कोई अद्यतन नहीं", "Due": "नियत",
    "Online - all synced": "ऑनलाइन - सब सिंक", "Offline - {n} queued": "ऑफ़लाइन - {n} कतार में", "Online - {n} to sync": "ऑनलाइन - {n} सिंक हेतु", "Sync now": "अभी सिंक करें",
    "Selected work": "चयनित कार्य", "Change work": "कार्य बदलें", "Physical progress (%)": "भौतिक प्रगति (%)", "Work stage remark": "कार्य चरण टिप्पणी", "Field observation": "क्षेत्र अवलोकन",
    "Take photo": "फोटो लें", "Capture GPS": "जीपीएस प्राप्त करें", "Photo attached": "फोटो संलग्न", "Location captured": "स्थान प्राप्त", "Retake": "पुनः लें",
    "Save update": "अद्यतन सहेजें", "Save to offline queue": "ऑफ़लाइन कतार में सहेजें", "Recent updates": "हाल के अद्यतन", "Verified": "सत्यापित", "Not verified": "असत्यापित",
    "Progress cannot be lower than the last recorded value ({n}%).": "प्रगति अंतिम दर्ज मान ({n}%) से कम नहीं हो सकती।", "Attach a geo-tagged photo before saving.": "सहेजने से पहले जियो-टैग फोटो संलग्न करें।",
    "Progress update saved and synced.": "प्रगति अद्यतन सहेजा एवं सिंक किया गया।", "Saved offline. It syncs when the app is next opened with network.": "ऑफ़लाइन सहेजा गया। नेटवर्क के साथ ऐप अगली बार खुलने पर सिंक होगा।",
    "Site inspection": "स्थल निरीक्षण", "Deficiency (if any)": "कमी (यदि हो)", "Save inspection": "निरीक्षण सहेजें", "Inspection saved and synced.": "निरीक्षण सहेजा एवं सिंक किया गया।",
    "Enter the observation.": "अवलोकन दर्ज करें।", "Offline queue": "ऑफ़लाइन कतार", "Simulate offline (no network)": "ऑफ़लाइन सिमुलेट करें (नेटवर्क नहीं)",
    "Updates captured without network are stored on the phone and sync when the app is next opened with network.": "बिना नेटवर्क के लिए गए अद्यतन फ़ोन में सहेजे जाते हैं एवं नेटवर्क के साथ ऐप अगली बार खुलने पर सिंक होते हैं।",
    "Nothing waiting to sync.": "सिंक हेतु कुछ लंबित नहीं।", "Progress update": "प्रगति अद्यतन", "Inspection": "निरीक्षण", "{n} items synced to the portal.": "{n} मद पोर्टल पर सिंक किए गए।",
    "Turn off offline mode to sync.": "सिंक हेतु ऑफ़लाइन मोड बंद करें।", "Last sync": "अंतिम सिंक", "Waiting": "प्रतीक्षारत",
    "Field app for engineers and inspection teams": "अभियंताओं एवं निरीक्षण दलों हेतु फील्ड ऐप",
    "Installable web app (PWA) for Android phones; works on low bandwidth.": "एंड्रॉइड फ़ोन हेतु इंस्टॉल योग्य वेब ऐप (पीडब्ल्यूए); कम बैंडविड्थ पर कार्य करता है।",
    "Assigned works only, scoped to the officer's block and department.": "केवल आवंटित कार्य, अधिकारी के प्रखंड एवं विभाग तक सीमित।",
    "Camera capture with automatic GPS geo-tag and time-stamp on every photo.": "प्रत्येक फोटो पर स्वचालित जीपीएस जियो-टैग एवं समय-अंकन के साथ कैमरा कैप्चर।",
    "Progress %, field observations and inspection checklist in two taps.": "दो टैप में प्रगति %, क्षेत्र अवलोकन एवं निरीक्षण जाँच सूची।",
    "Offline queue: entries saved without network sync when the app is next opened with network.": "ऑफ़लाइन कतार: बिना नेटवर्क सहेजी प्रविष्टियाँ नेटवर्क के साथ ऐप अगली बार खुलने पर सिंक होती हैं।",
    "Updates appear instantly on the dashboard, project page and GIS map.": "अद्यतन तुरंत डैशबोर्ड, परियोजना पृष्ठ एवं जीआईएस मानचित्र पर दिखते हैं।",
    "Mobile field app": "मोबाइल फील्ड ऐप", "Open on a phone, or narrow the browser below 768 px, for the full-screen app.": "पूर्ण-स्क्रीन ऐप हेतु फ़ोन पर खोलें या ब्राउज़र की चौड़ाई 768 px से कम करें।",
    "No ongoing works are assigned in your jurisdiction.": "आपके क्षेत्राधिकार में कोई चालू कार्य आवंटित नहीं।", "Select a work": "कार्य चुनें", "Status and history": "स्थिति एवं इतिहास",
    "Open in portal": "पोर्टल में खोलें", "Tap a work to update progress": "प्रगति अद्यतन हेतु कार्य पर टैप करें", "Locating...": "स्थान प्राप्त हो रहा है...", "Sample data": "नमूना डाटा", "Sample coordinate used": "नमूना निर्देशांक प्रयुक्त", "Current: {n}%. Move the slider to the new progress.": "वर्तमान: {n}%। नई प्रगति हेतु स्लाइडर खिसकाएँ।", "Move the slider above the current progress before saving.": "सहेजने से पहले स्लाइडर को वर्तमान प्रगति से ऊपर खिसकाएँ।", "Answer every checklist item (Yes or No) before saving.": "सहेजने से पहले प्रत्येक जाँच मद का उत्तर (हाँ या नहीं) दें।"
  });

  var S = App.fieldState = App.fieldState || { offline: false, photo: null, photoName: null, gps: null, pid: null, lastSync: null, ck: null };
  App.fieldPhotos = App.fieldPhotos || {};
  function queue() { App.db.fieldQueue = App.db.fieldQueue || []; return App.db.fieldQueue; }
  function myKey() { var r = App.role(); return r ? r.desig : "je"; }
  function works() {
    var sla = App.db.sla.progress;
    return App.scoped().filter(function (p) { return DM.status(p) === "ongoing"; }).map(function (p) {
      var lp = DM.lastProgressDate(p) || (p.sf[5] && p.sf[5].commencementDate); return { p: p, age: lp ? App.ago(lp) : 0, del: DM.isDelayed(p), due: lp ? App.ago(lp) > sla : false };
    }).sort(function (a, b) { return (b.del - a.del) || (b.age - a.age); });
  }
  function nowHM() { return App.nowTs().slice(11, 16); }

  function applyProgress(it) {
    var p = DM.byId(App.db, it.pid); if (!p) return;
    p.progress.push({ date: it.ts.slice(0, 10), pct: it.pct, remark: it.remark, by: it.by, lat: it.gps.lat, lng: it.gps.lng, time: it.ts.slice(11, 16), photo: true, verified: false, field: true, key: it.key });
    p.physical = it.pct;
    p.sf[6] = { physicalPct: it.pct, lastUpdate: it.ts.slice(0, 10), photoCount: ((p.sf[6] && p.sf[6].photoCount) || 0) + 1, fieldObs: it.remark };
    p.docs.push({ id: "D" + (p.docs.length + 1), cat: "photo", name: (it.photoName || "Site_photo") + "", type: "jpg", access: "public", versions: [{ v: 1, date: it.ts.slice(0, 10), by: it.by, size: it.size || 820 * 1024, note: "up" }] });
    App.log("progress", { en: "Field progress update " + it.pct + "%", hi: "क्षेत्र प्रगति अद्यतन " + it.pct + "%" }, p.id);
  }
  function applyInspection(it) {
    var p = DM.byId(App.db, it.pid); if (!p) return;
    var ex = App.db.inspections.filter(function (i) { return i.pid === p.id && i.status === "scheduled"; })[0];
    var i = ex || { id: App.insp.nextId(), pid: p.id, team: [it.by] };
    i.date = it.ts.slice(0, 10); i.checklist = it.checklist; i.photos = 1; i.observation = it.obs; i.deficiency = it.def || null;
    i.assignedTo = it.def ? "ee" : null; i.dueDate = it.def ? DM.util.addDays(i.date, 15) : null; i.status = it.def ? "action" : "closed"; i.actionDate = it.def ? i.date : null;
    i.compliance = null; i.verification = null; i.reinspection = null; i.reportFile = "Field_Inspection_" + i.date + ".pdf"; i.lat = it.gps.lat; i.lng = it.gps.lng;
    App.insp.addLog(i, { en: "Recorded from the field app", hi: "फील्ड ऐप से दर्ज" });
    if (!ex) App.db.inspections.push(i);
    if (it.def) App.notify("inspection", p, "ee", ["email", "sms", "whatsapp"]);
    App.insp.syncSf8(p);
    App.log("inspection", { en: "Field inspection " + i.id, hi: "क्षेत्र निरीक्षण " + i.id }, p.id);
  }
  function sync() {
    var q = queue(), n = q.length;
    q.forEach(function (it) { if (it.type === "progress") applyProgress(it); else applyInspection(it); });
    App.db.fieldQueue = []; S.lastSync = App.nowTs(); App.save(); return n;
  }

  App.view("field", {
    kind: "officer", perm: "progress",
    title: function () { return App.t("Field App"); },
    render: function (main, route) {
      var q = route.query, tab = q.tab || "works", full = window.innerWidth < 768;
      if (q.pid && DM.byId(App.db, q.pid)) S.pid = q.pid;
      var W = works(); if (!S.pid || !W.some(function (w) { return w.p.id === S.pid; })) S.pid = W.length ? W[0].p.id : null;
      document.body.classList.toggle("field-full", full);
      if (full) main.innerHTML = '<div class="fa fa-full" id="fa"></div>';
      else {
        var r = App.role();
        main.innerHTML = App.pageHead(App.t("Mobile field app"), App.esc(App.t("Field app for engineers and inspection teams")) + " &middot; " + App.esc(App.L(r)) + " &middot; " + App.esc(App.scopeLabel()), "", [[App.t("Home"), "#/dashboard"], [App.t("Field App"), ""]]) +
          '<div class="field-wrap"><div class="phone" role="region" aria-label="' + App.esc(App.t("DMFT Field App")) + '"><div class="fa" id="fa"></div></div><div class="field-intro card"><h2>' + App.esc(App.t("DMFT Field App")) + "</h2><ul>" +
          [["phone", "Installable web app (PWA) for Android phones; works on low bandwidth."], ["person", "Assigned works only, scoped to the officer's block and department."], ["camera", "Camera capture with automatic GPS geo-tag and time-stamp on every photo."],
           ["clipboard", "Progress %, field observations and inspection checklist in two taps."], ["sync", "Offline queue: entries saved without network sync when the app is next opened with network."], ["dashboard", "Updates appear instantly on the dashboard, project page and GIS map."]]
            .map(function (x) { return "<li>" + App.icon(x[0]) + "<span>" + App.esc(App.t(x[1])) + "</span></li>"; }).join("") +
          '</ul><p class="note">' + App.icon("info") + "<span>" + App.esc(App.t("Open on a phone, or narrow the browser below 768 px, for the full-screen app.")) + "</span></p></div></div>";
      }
      var fa = main.querySelector("#fa");
      function go(t) { tab = t; App.setQuery({ tab: t, pid: S.pid || "" }); draw(); var b = fa.querySelector(".fa-body"); if (b) b.scrollTop = 0; }
      function draw() {
        W = works();
        var qn = queue().length, r = App.role();
        var sync = S.offline ? App.tf("Offline - {n} queued", { n: qn }) : qn ? App.tf("Online - {n} to sync", { n: qn }) : App.t("Online - all synced");
        var h = '<div class="fa-top"><div class="fa-row"><div><div class="fa-t">' + App.esc(App.t("DMFT Field App")) + '</div><div class="fa-s">' + App.esc(App.L(App.session.desig)) + '</div></div><span class="fa-tag">' + App.esc(App.t("Sample data")) + "</span></div>" +
          '<div class="fa-sync' + (S.offline ? " off" : "") + '" role="status"><i aria-hidden="true"></i>' + App.esc(sync) + (qn && !S.offline ? ' <button type="button" data-sync>' + App.esc(App.t("Sync now")) + "</button>" : "") + "</div></div>";
        h += '<div class="fa-body">' + body() + "</div>";
        var nav = [["works", "list", "My works"], ["update", "edit", "Update"], ["inspect", "clipboard", "Inspect"], ["queue", "sync", "Queue"]];
        h += '<nav class="fa-nav" aria-label="' + App.esc(App.t("DMFT Field App")) + '">' + nav.map(function (n) { return '<button type="button" data-tab="' + n[0] + '"' + (tab === n[0] ? ' aria-current="true"' : "") + '><span class="nb">' + App.icon(n[1]) + (n[0] === "queue" && qn ? '<span class="qn">' + qn + "</span>" : "") + "</span>" + App.esc(App.t(n[2])) + "</button>"; }).join("") + "</nav>";
        fa.innerHTML = h;
      }
      function selBox() {
        return '<div class="fa-sel-work"><label class="small muted" for="faSel">' + App.esc(App.t("Selected work")) + '</label><select class="input" id="faSel">' + App.opts(W.map(function (w) { return [w.p.id, DM.displayId(w.p).split("/").slice(-2).join("/") + " - " + App.pname(w.p)]; }), S.pid, false) + "</select></div>";
      }
      function capBlock(p) {
        var g = S.gps && S.gps.pid === p.id ? S.gps : null;
        return '<div class="fa-btns"><label class="fa-cap' + (S.photo ? " done" : "") + '">' + App.icon("camera") + App.esc(App.t(S.photo ? "Photo attached" : "Take photo")) + (S.photo ? "<small>" + App.esc(S.photoName || "") + "</small>" : "") + '<input type="file" accept="image/*" capture="environment" id="faPh"></label>' +
          '<button type="button" class="fa-cap' + (g ? " done" : "") + '" id="faG">' + App.icon("gps") + App.esc(App.t(g ? (g.sample ? "Sample coordinate used" : "Location captured") : "Capture GPS")) + (g ? "<small>" + g.lat.toFixed(5) + ", " + g.lng.toFixed(5) + "</small>" : "") + "</button></div>" +
          (S.photo ? '<div class="fa-prev"><img src="' + S.photo + '" alt="' + App.esc(App.t("Photo attached")) + '"></div>' : "") +
          (g ? '<p class="gps-out">' + App.insp.gpsText(g) + "</p>" : "");
      }
      function body() {
        if (!W.length) return '<div class="fa-empty">' + App.esc(App.t("No ongoing works are assigned in your jurisdiction.")) + "</div>";
        var p = DM.byId(App.db, S.pid), h = "";
        if (tab === "works") {
          var del = W.filter(function (w) { return w.del; }).length, due = W.filter(function (w) { return w.due; }).length;
          h += '<div class="fa-sum"><div><b>' + W.length + "</b><span>" + App.esc(App.t("Assigned")) + '</span></div><div class="d"><b>' + del + "</b><span>" + App.esc(App.t("Delayed")) + "</span></div><div><b>" + due + "</b><span>" + App.esc(App.t("Update due")) + "</span></div></div>";
          h += '<h2 class="fa-h2"><span>' + App.esc(App.t("My assigned works")) + '</span></h2><p class="fa-hint">' + App.esc(App.t("Tap a work to update progress")) + "</p>";
          h += W.slice(0, 25).map(function (w) {
            var x = w.p, lp = DM.lastProgressDate(x);
            return '<button type="button" class="fa-card tap" data-work="' + x.id + '"><div class="split-head"><span class="fa-id">' + App.esc(DM.displayId(x)) + "</span>" + App.pStatusChip(x) + "</div><h3>" + App.esc(App.pname(x)) + '</h3><div class="small muted">' + App.esc(App.villageName(x)) + " &middot; " + App.esc(App.blockName(x.block)) + " &middot; " + App.esc(App.deptShort(x.dept)) + "</div>" + App.bar(x.physical) +
              '<div class="fa-meta"><span>' + App.icon("clock", "sm") + " " + App.esc(App.t("Last update")) + ": " + (lp ? (App.ago(lp) ? App.esc(App.ago(lp) === 1 ? App.t("yesterday") : App.tf("{n} days ago", { n: App.ago(lp) })) : App.esc(App.t("today"))) : App.esc(App.t("No update yet"))) + "</span><span" + (w.due ? ' class="pd-over"' : "") + ">" + App.esc(App.t("Due")) + ": " + App.date(x.sf[5] && x.sf[5].plannedCompletion) + "</span></div></button>";
          }).join("");
        } else if (tab === "update") {
          var last = p.physical || 0;
          h += selBox();
          h += '<div class="fa-card"><div class="fa-field"><label for="faPct">' + App.esc(App.t("Physical progress (%)")) + '</label><div class="fa-pct"><input type="range" id="faPct" min="0" max="100" step="1" value="' + last + '" aria-describedby="faPctO faPctH"><output id="faPctO">' + last + "%</output></div>" + '<p class="fa-hint" id="faPctH" style="margin:2px 0 6px">' + App.esc(App.tf("Current: {n}%. Move the slider to the new progress.", { n: last })) + "</p>" + App.bar(last) + "</div>" +
            '<div class="fa-field"><label for="faRm">' + App.esc(App.t("Work stage remark")) + '</label><select class="input" id="faRm">' + App.opts(DM.PROGRESS_REMARKS.map(function (x, i) { return ["pr" + i, App.L(x)]; }), "pr" + Math.min(5, Math.floor(last / 20)), false) + "</select></div>" +
            '<div class="fa-field"><label for="faObs">' + App.esc(App.t("Field observation")) + '</label><textarea class="input" id="faObs" rows="2"></textarea></div>' +
            capBlock(p) + '<p class="err" id="faErr" role="alert"></p><button type="button" class="btn fa-save" id="faSave">' + App.icon(S.offline ? "download" : "upload", "sm") + App.esc(App.t(S.offline ? "Save to offline queue" : "Save update")) + "</button></div>";
          h += '<h2 class="fa-h2"><span>' + App.esc(App.t("Recent updates")) + "</span></h2><div class=\"fa-card\"><ul class=\"fa-hist\">" + p.progress.slice(-5).reverse().map(function (x, i) {
            var img = x.key && App.fieldPhotos[x.key] ? App.fieldPhotos[x.key] : App.photo(p, p.progress.length - i, App.phaseOf(x.pct), { lat: x.lat, lng: x.lng, date: x.date, time: x.time });
            return '<li><img src="' + img + '" alt="' + App.esc(App.t("Sample site photo")) + '"><div><strong>' + x.pct + "%</strong> &middot; " + App.date(x.date) + '<br><span class="muted">' + App.esc(App.tx(x.remark)) + "</span></div><span class=\"chip plain " + (x.verified ? "st-completed" : "st-notstarted") + '">' + App.esc(App.t(x.verified ? "Verified" : "Not verified")) + "</span></li>";
          }).join("") + "</ul></div>";
        } else if (tab === "inspect") {
          S.ck = S.ck && S.ck.pid === S.pid ? S.ck : { pid: S.pid, v: DM.CHECKLIST.map(function () { return null; }) };
          h += selBox();
          h += '<div class="fa-card"><h3>' + App.esc(App.t("Site inspection")) + " &middot; " + App.date(App.today()) + '</h3><ul class="fa-chk">' + DM.CHECKLIST.map(function (c, i) {
            var v = S.ck.v[i];
            return "<li><span>" + App.esc(App.L(c)) + '</span><span class="fa-seg" role="radiogroup" aria-label="' + App.esc(App.L(c)) + '"><label class="y"><input type="radio" name="fck' + i + '" value="1" data-ck="' + i + '"' + (v === true ? " checked" : "") + ">" + App.esc(App.t("Yes")) + '</label><label class="n"><input type="radio" name="fck' + i + '" value="0" data-ck="' + i + '"' + (v === false ? " checked" : "") + ">" + App.esc(App.t("No")) + "</label></span></li>";
          }).join("") + "</ul></div>";
          h += '<div class="fa-card">' + capBlock(p) + '<div class="fa-field" style="margin-top:12px"><label for="fiObs">' + App.esc(App.t("Observation")) + ' <span class="req">*</span></label><textarea class="input" id="fiObs" rows="2"></textarea></div><div class="fa-field"><label for="fiDef">' + App.esc(App.t("Deficiency (if any)")) + '</label><textarea class="input" id="fiDef" rows="2"></textarea></div>' +
            '<p class="err" id="faErr" role="alert"></p><button type="button" class="btn fa-save" id="faIns">' + App.icon("check", "sm") + App.esc(App.t(S.offline ? "Save to offline queue" : "Save inspection")) + "</button></div>";
        } else {
          var qq = queue();
          h += '<div class="fa-card"><div class="fa-off"><div><strong>' + App.esc(App.t("Simulate offline (no network)")) + '</strong><div class="small muted">' + App.esc(App.t("Updates captured without network are stored on the phone and sync when the app is next opened with network.")) + '</div></div><span class="fa-toggle"><input type="checkbox" id="faOff" aria-label="' + App.esc(App.t("Simulate offline (no network)")) + '"' + (S.offline ? " checked" : "") + '><span aria-hidden="true"></span></span></div></div>';
          h += '<h2 class="fa-h2"><span>' + App.esc(App.t("Offline queue")) + "</span><span>" + qq.length + '</span></h2><div class="fa-card">' + (qq.length ? '<ul class="fa-q">' + qq.map(function (it) {
            var x = DM.byId(App.db, it.pid);
            return '<li><span class="qi">' + App.icon(it.type === "progress" ? "edit" : "clipboard") + "</span><div><strong>" + App.esc(App.t(it.type === "progress" ? "Progress update" : "Inspection")) + (it.type === "progress" ? " - " + it.pct + "%" : "") + '</strong><br><span class="small muted">' + App.esc(DM.displayId(x)) + " &middot; " + App.dt(it.ts) + '</span></div><span class="chip plain st-approval" style="margin-left:auto">' + App.esc(App.t("Waiting")) + "</span></li>";
          }).join("") + "</ul>" : '<div class="fa-empty">' + App.icon("check") + "<br>" + App.esc(App.t("Nothing waiting to sync.")) + "</div>") + "</div>";
          h += '<button type="button" class="btn fa-save" data-sync' + (qq.length ? "" : " disabled") + ">" + App.icon("sync", "sm") + App.esc(App.t("Sync now")) + "</button>";
          if (S.lastSync) h += '<p class="small muted center" style="margin-top:8px">' + App.esc(App.t("Last sync")) + ": " + App.dt(S.lastSync) + "</p>";
          h += '<h2 class="fa-h2" style="margin-top:16px"><span>' + App.esc(App.t("Status and history")) + '</span></h2><div class="fa-card">' + W.slice(0, 4).map(function (w) { return '<div class="split-head" style="padding:6px 0;border-bottom:1px solid var(--rule-2)"><span class="small"><strong>' + App.esc(DM.displayId(w.p).split("/").slice(-2).join("/")) + "</strong> " + App.esc(App.pname(w.p)) + "</span>" + App.pStatusChip(w.p) + "</div>"; }).join("") + "</div>";
        }
        return h;
      }
      function err(m) { var e = fa.querySelector("#faErr"); if (e) e.textContent = m; }
      function onClick(e) {
        var t = e.target.closest("[data-tab],[data-work],[data-sync],#faG,#faSave,#faIns"); if (!t) return;
        if (t.hasAttribute("data-tab")) return go(t.getAttribute("data-tab"));
        if (t.hasAttribute("data-work")) { S.pid = t.getAttribute("data-work"); S.photo = null; S.gps = null; return go("update"); }
        if (t.hasAttribute("data-sync")) { if (S.offline) { App.toast(App.t("Turn off offline mode to sync."), false); return; } var n = sync(); App.toast(App.tf("{n} items synced to the portal.", { n: n })); return draw(); }
        var p = DM.byId(App.db, S.pid);
        if (t.id === "faG") { t.innerHTML = App.icon("gps") + App.esc(App.t("Locating...")); App.insp.gps(p, function (g) { g.pid = p.id; S.gps = g; draw(); }); return; }
        if (t.id === "faSave") {
          var pct = +fa.querySelector("#faPct").value;
          if (pct === (p.physical || 0)) return err(App.t("Move the slider above the current progress before saving."));
          if (pct < (p.physical || 0)) return err(App.tf("Progress cannot be lower than the last recorded value ({n}%).", { n: p.physical }));
          if (!S.photo) return err(App.t("Attach a geo-tagged photo before saving."));
          finish(function (g) {
            var obs = fa.querySelector("#faObs").value.trim(), rm = fa.querySelector("#faRm").value;
            var key = p.id + "|" + Date.now(); App.fieldPhotos[key] = S.photo;
            var it = { type: "progress", pid: p.id, pct: pct, remark: obs || rm, by: myKey(), ts: App.nowTs(), gps: g, photoName: S.photoName, size: S.photoSize, key: key };
            done(it, "Progress update saved and synced.");
          });
        }
        if (t.id === "faIns") {
          var obs2 = fa.querySelector("#fiObs").value.trim(), def = fa.querySelector("#fiDef").value.trim();
          if (S.ck.v.some(function (x) { return x === null; })) return err(App.t("Answer every checklist item (Yes or No) before saving."));
          if (!obs2) { fa.querySelector("#fiObs").setAttribute("aria-invalid", "true"); return err(App.t("Enter the observation.")); }
          finish(function (g) { done({ type: "inspection", pid: p.id, checklist: S.ck.v.slice(), obs: obs2, def: def, by: myKey(), ts: App.nowTs(), gps: g, photoName: S.photoName }, "Inspection saved and synced."); });
        }
        function finish(cb) { if (S.gps && S.gps.pid === p.id) cb(S.gps); else App.insp.gps(p, function (g) { g.pid = p.id; S.gps = g; cb(g); }); }
        function done(it, okMsg) {
          if (S.offline) { queue().push(it); App.save(); App.toast(App.t("Saved offline. It syncs when the app is next opened with network."), false); }
          else { if (it.type === "progress") applyProgress(it); else applyInspection(it); App.save(); App.toast(App.t(okMsg)); }
          S.photo = null; S.photoName = null; S.ck = null; draw();
        }
      }
      function onChange(e) {
        var t = e.target;
        if (t.id === "faSel") { S.pid = t.value; S.photo = null; S.gps = null; App.setQuery({ tab: tab, pid: S.pid }); return draw(); }
        if (t.id === "faOff") { S.offline = t.checked; return draw(); }
        if (t.hasAttribute && t.hasAttribute("data-ck")) { S.ck.v[+t.getAttribute("data-ck")] = t.value === "1"; return; }
        if (t.id === "faPh") {
          var f = t.files && t.files[0]; if (!f) return;
          var rd = new FileReader(); rd.onload = function () { S.photo = rd.result; S.photoName = f.name; S.photoSize = f.size; var p = DM.byId(App.db, S.pid); if (!(S.gps && S.gps.pid === p.id)) App.insp.gps(p, function (g) { g.pid = p.id; S.gps = g; draw(); }); else draw(); };
          rd.readAsDataURL(f);
        }
      }
      function onInput(e) { if (e.target.id === "faPct") { var o = fa.querySelector("#faPctO"); if (o) o.textContent = e.target.value + "%"; } }
      fa.addEventListener("click", onClick); fa.addEventListener("change", onChange); fa.addEventListener("input", onInput);
      var rz = App.debounce(function () { if ((window.innerWidth < 768) !== full) App.render(); }, 250);
      window.addEventListener("resize", rz);
      App.cleanup = function () { window.removeEventListener("resize", rz); document.body.classList.remove("field-full"); };
      draw();
    }
  });
})();
