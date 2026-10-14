/* Inspection module (scope item 1 stage 8 + inspection module): schedule, team, checklist, geo-tagged photos, observation,
   deficiency, action assigned to, due date, compliance upload, verification, re-inspection, history. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Inspection Module": "निरीक्षण मॉड्यूल", "Schedule, record and close site inspections with geo-tagged evidence and tracked compliance.": "जियो-टैग साक्ष्य एवं अनुश्रवित अनुपालन के साथ स्थल निरीक्षण निर्धारित, दर्ज एवं बंद करें।",
    "Schedule inspection": "निरीक्षण निर्धारित करें", "Scheduled": "निर्धारित", "Upcoming": "आगामी", "Overdue": "अतिदेय", "Records": "अभिलेख", "Action pending": "कार्रवाई लंबित", "History": "इतिहास",
    "Compliance submitted": "अनुपालन जमा", "Closed": "बंद", "Inspections recorded": "दर्ज निरीक्षण", "Awaiting verification": "सत्यापन हेतु लंबित",
    "Inspection ID": "निरीक्षण आईडी", "Inspection date": "निरीक्षण दिनांक", "Team": "दल", "Findings": "निष्कर्ष", "Photos": "फोटो", "Record inspection": "निरीक्षण दर्ज करें",
    "Deficiency": "कमी", "Action assigned to": "कार्रवाई हेतु जिम्मेदार", "Due date": "नियत तिथि", "Compliance": "अनुपालन", "Upload compliance": "अनुपालन अपलोड करें",
    "Verify": "सत्यापित करें", "Re-inspect": "पुनः निरीक्षण", "Not uploaded": "अपलोड नहीं", "Verification": "सत्यापन", "Re-inspection": "पुनः निरीक्षण",
    "Checklist": "जाँच सूची", "Observation": "अवलोकन", "Geo-tagged photographs": "जियो-टैग फोटो", "Capture GPS": "जीपीएस प्राप्त करें", "Inspection team": "निरीक्षण दल",
    "Select project": "परियोजना चुनें", "Inspection scheduled": "निरीक्षण निर्धारित", "Inspection recorded": "निरीक्षण दर्ज", "Compliance uploaded": "अनुपालन अपलोड किया गया",
    "Compliance verified and inspection closed": "अनुपालन सत्यापित एवं निरीक्षण बंद", "Compliance rejected - returned to the assignee": "अनुपालन अस्वीकृत - जिम्मेदार अधिकारी को वापस",
    "Re-inspection scheduled": "पुनः निरीक्षण निर्धारित", "Verify compliance": "अनुपालन सत्यापित करें", "Result": "परिणाम", "Verified - close inspection": "सत्यापित - निरीक्षण बंद करें",
    "Rejected - return for rectification": "अस्वीकृत - सुधार हेतु वापस", "Remarks (mandatory)": "टिप्पणी (अनिवार्य)", "Enter remarks.": "टिप्पणी दर्ज करें।",
    "Enter the observation.": "अवलोकन दर्ज करें।", "Select at least one team member.": "कम से कम एक दल सदस्य चुनें।", "Select a project.": "परियोजना चुनें।",
    "Inspection details": "निरीक्षण विवरण", "No inspections in this view.": "इस दृश्य में कोई निरीक्षण नहीं।", "Project inspection history": "परियोजना निरीक्षण इतिहास",
    "Deficiency found (leave blank if none)": "पाई गई कमी (न हो तो रिक्त छोड़ें)", "Choose photos or take with camera": "फोटो चुनें या कैमरे से लें",
    "Location captured": "स्थान प्राप्त", "Sample coordinate used (device location unavailable)": "नमूना निर्देशांक प्रयुक्त (डिवाइस स्थान अनुपलब्ध)",
    "Inspection report": "निरीक्षण प्रतिवेदन", "Recorded by": "दर्जकर्ता", "Re-inspection of": "पुनः निरीक्षण", "Scheduled for": "निर्धारित तिथि",
    "Rectification due": "सुधार नियत", "No deficiency": "कोई कमी नहीं", "photos": "फोटो", "Due in {n} days": "{n} दिन में नियत", "Overdue by {n} days": "{n} दिन अतिदेय",
    "Compliance report": "अनुपालन प्रतिवेदन", "Activity": "गतिविधि", "Satisfactory": "संतोषजनक", "Not satisfactory": "असंतोषजनक", "Not checked": "जाँच नहीं",
    "Inspections pending for this project are listed under Schedule.": "इस परियोजना के लंबित निरीक्षण 'निर्धारित' टैब में सूचीबद्ध हैं।",
    "Locating...": "स्थान प्राप्त हो रहा है...", "Filter by project": "परियोजना द्वारा फ़िल्टर", "All projects": "सभी परियोजनाएँ",
    "Inspection photos are geo-tagged and time-stamped on capture.": "निरीक्षण फोटो कैप्चर के समय जियो-टैग एवं समय-अंकित होते हैं।"
  });

  // ---------- Shared helpers (also used by the field app) ----------
  var I = App.insp = {};
  I.state = function (i) {
    if (i.status === "scheduled") return i.date < App.today() ? "overdue" : "scheduled";
    if (i.status === "action") return i.compliance ? "compliance" : "action";
    return "closed";
  };
  var ST = { scheduled: ["Scheduled", "st-tender"], overdue: ["Overdue", "st-delayed"], action: ["Action pending", "st-approval"], compliance: ["Compliance submitted", "st-handover"], closed: ["Closed", "st-completed"] };
  I.chip = function (i) { var s = ST[I.state(i)]; return '<span class="chip ' + s[1] + '">' + App.esc(App.t(s[0])) + "</span>"; };
  I.team = function (i, p) { return (i.team || []).map(function (k) { return App.desig(k, p); }).join(", "); };
  I.syncSf8 = function (p) {
    var li = App.db.inspections.filter(function (x) { return x.pid === p.id && x.status !== "scheduled"; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    if (!li.length) return;
    var l = li[li.length - 1];
    p.sf[8] = { inspDate: l.date, inspReport: l.reportFile, findings: l.deficiency || l.observation, actionTaken: l.compliance ? l.compliance.note : "na", pendingActions: li.filter(function (x) { return x.status === "action"; }).length };
  };
  I.nextId = function () { App.db.inspSeq = (App.db.inspSeq || App.db.inspections.length) + 1; return "INS-" + DM.util.pad(App.db.inspSeq, 4); };
  I.addLog = function (i, text) { i.log = i.log || []; i.log.push({ ts: App.nowTs(), by: App.session ? App.session.desig : "insp", text: text }); };
  I.gps = function (p, cb) {
    var done = false;
    function fallback() { if (done) return; done = true; cb({ lat: +(p.loc[0] + (Math.random() - 0.5) * 0.001).toFixed(5), lng: +(p.loc[1] + (Math.random() - 0.5) * 0.001).toFixed(5), ts: App.nowTs(), sample: true }); }
    try {
      if (!navigator.geolocation) return fallback();
      navigator.geolocation.getCurrentPosition(function (pos) { if (done) return; done = true; cb({ lat: +pos.coords.latitude.toFixed(5), lng: +pos.coords.longitude.toFixed(5), acc: Math.round(pos.coords.accuracy), ts: App.nowTs(), sample: false }); }, fallback, { timeout: 5000, maximumAge: 60000 });
      setTimeout(fallback, 6000);
    } catch (e) { fallback(); }
  };
  I.gpsText = function (g) { return g ? App.esc(App.t(g.sample ? "Sample coordinate used (device location unavailable)" : "Location captured")) + ": " + g.lat.toFixed(5) + " N, " + g.lng.toFixed(5) + " E | " + App.dt(g.ts) : ""; };
  I.photos = function (i, p, n) {
    var h = "", ph = p.physical >= 100 ? "after" : "during";
    for (var k = 0; k < (n || Math.min(3, i.photos || 0)); k++) h += '<figure class="photo"><img src="' + App.photo(p, 100 + k + (+i.id.slice(-3) || 0), ph, { lat: (i.lat || p.loc[0]) + k * 0.0002, lng: (i.lng || p.loc[1]) - k * 0.00015, date: i.date, time: "1" + (k + 1) + ":0" + (k * 3) }) + '" alt="' + App.esc(App.t("Geo-tagged photographs") + " " + (k + 1)) + '"><figcaption><strong>' + App.esc(i.id) + " / " + (k + 1) + "</strong>" + App.date(i.date) + "</figcaption></figure>";
    return h;
  };

  function teamKeys(p) { var keys = ["insp", "nodal", "ae", "je"]; if (p) keys.push("bdo"); return keys; }

  App.view("inspections", {
    kind: "officer", perm: "inspection",
    title: function () { return App.t("Inspection Module"); },
    render: function (main, route) {
      var q = route.query, tab = q.tab || "schedule", pidF = q.pid || "";
      var canAct = App.can("inspection", "act");
      function draw() {
        var scope = {}; App.scoped().forEach(function (p) { scope[p.id] = p; });
        var all = App.db.inspections.filter(function (i) { return scope[i.pid]; });
        var list = pidF ? all.filter(function (i) { return i.pid === pidF; }) : all;
        var cnt = { scheduled: 0, overdue: 0, action: 0, compliance: 0, closed: 0 };
        all.forEach(function (i) { cnt[I.state(i)]++; });
        var h = App.pageHead(App.t("Inspection Module"), App.esc(App.t("Schedule, record and close site inspections with geo-tagged evidence and tracked compliance.")),
          canAct ? '<button class="btn" type="button" id="insNew">' + App.icon("plus", "sm") + App.esc(App.t("Schedule inspection")) + "</button>" : "", [[App.t("Home"), "#/dashboard"], [App.t("Inspections"), ""]]);
        function k(label, n, icon, color, t) { return '<a class="kpi" href="#/inspections?tab=' + t + '" style="--k:' + color + '"><dl style="margin:0"><dt>' + App.esc(App.t(label)) + App.icon(icon) + "</dt><dd>" + n + "</dd></dl></a>"; }
        h += '<div class="kpis small-k ins-k" style="grid-template-columns:repeat(5,minmax(0,1fr))">' + k("Upcoming", cnt.scheduled, "calendar", "#0B8BA3", "schedule") + k("Overdue", cnt.overdue, "warning", "#C0392B", "schedule") +
          k("Action pending", cnt.action, "flag", "#C2650A", "actions") + k("Awaiting verification", cnt.compliance, "shield", "#7B4FB5", "actions") + k("Inspections recorded", cnt.closed + cnt.action + cnt.compliance, "clipboard", "#2F8A4E", "records") + "</div>";
        var tabs = [["schedule", "Scheduled", cnt.scheduled + cnt.overdue], ["records", "Records", cnt.closed + cnt.action + cnt.compliance], ["actions", "Action pending", cnt.action + cnt.compliance], ["history", "History", null]];
        h += '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<a role="tab" href="#/inspections?tab=' + t[0] + (pidF ? "&pid=" + pidF : "") + '" aria-selected="' + (tab === t[0]) + '">' + App.esc(App.t(t[1])) + (t[2] != null ? ' <span class="pill-n">' + t[2] + "</span>" : "") + "</a>"; }).join("") + "</div>";
        var pids = Object.keys(all.reduce(function (o, i) { o[i.pid] = 1; return o; }, {}));
        var histPid = pidF || (pids.indexOf(App.db.showcase) >= 0 ? App.db.showcase : pids[0]);
        h += '<div class="split-head" style="margin-bottom:12px"><div class="field" style="min-width:320px;max-width:520px;flex:1"><label for="insP">' + App.esc(App.t("Filter by project")) + '</label><select class="input" id="insP">' +
          App.opts(pids.map(function (id) { var p = scope[id]; return [id, DM.displayId(p) + " - " + App.pname(p)]; }).sort(function (a, b) { return a[1] < b[1] ? -1 : 1; }), tab === "history" ? histPid : pidF, tab === "history" ? false : App.t("All projects")) + "</select></div></div>";
        var rows;
        if (tab === "schedule") {
          rows = list.filter(function (i) { return i.status === "scheduled"; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
          h += table(["Inspection ID", "Scheduled for", "Project", "Block", "Inspection team", "Status", "Actions"], rows.map(function (i) {
            var p = scope[i.pid], d = DM.util.diff(App.today(), i.date);
            return [App.esc(i.id), App.date(i.date) + '<br><span class="small ' + (d < 0 ? "pd-over" : "muted") + '">' + App.esc(d < 0 ? App.tf("Overdue by {n} days", { n: -d }) : App.tf("Due in {n} days", { n: d })) + "</span>", pcell(p), App.esc(App.blockName(p.block)), App.esc(I.team(i, p)), I.chip(i),
              '<div class="ins-actions">' + (canAct ? '<button class="btn sm" type="button" data-rec="' + i.id + '">' + App.esc(App.t("Record inspection")) + "</button>" : "") + "</div>"];
          }));
        } else if (tab === "records") {
          rows = list.filter(function (i) { return i.status !== "scheduled"; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
          h += table(["Inspection ID", "Inspection date", "Project", "Findings", "Photos", "Status", ""], rows.map(function (i) {
            var p = scope[i.pid];
            return [App.esc(i.id), App.date(i.date), pcell(p), (i.deficiency ? '<span class="no-t">' + App.esc(App.t("Deficiency")) + ":</span> " + App.esc(App.tx(i.deficiency)) : '<span class="ok-t">' + App.esc(App.t("No deficiency")) + "</span> - " + App.esc(App.tx(i.observation))), '<span class="nowrap">' + App.icon("image", "sm") + " " + (i.photos || 0) + "</span>", I.chip(i), '<button class="btn secondary sm" type="button" data-view="' + i.id + '">' + App.esc(App.t("View")) + "</button>"];
          }));
        } else if (tab === "actions") {
          rows = list.filter(function (i) { return i.status === "action"; }).sort(function (a, b) { return (a.dueDate || a.date) < (b.dueDate || b.date) ? -1 : 1; });
          h += table(["Inspection ID", "Project", "Deficiency", "Action assigned to", "Due date", "Compliance", "Actions"], rows.map(function (i) {
            var p = scope[i.pid], d = i.dueDate ? DM.util.diff(App.today(), i.dueDate) : 0;
            var comp = i.compliance ? App.icon("file", "sm") + " " + App.esc(i.compliance.file) + '<br><span class="small muted">' + App.date(i.compliance.date) + "</span>" : '<span class="muted">' + App.esc(App.t("Not uploaded")) + "</span>";
            var act = '<div class="ins-actions">';
            if (canAct && !i.compliance) act += '<label class="btn secondary sm" style="cursor:pointer">' + App.icon("upload", "sm") + App.esc(App.t("Upload compliance")) + '<input type="file" class="sr-only" data-comp="' + i.id + '" accept=".pdf,.jpg,.jpeg,.png"></label>';
            if (canAct && i.compliance) act += '<button class="btn sm" type="button" data-verify="' + i.id + '">' + App.esc(App.t("Verify")) + "</button>";
            if (canAct) act += '<button class="btn ghost sm" type="button" data-reins="' + i.id + '">' + App.esc(App.t("Re-inspect")) + "</button>";
            act += '<button class="btn ghost sm" type="button" data-view="' + i.id + '">' + App.esc(App.t("View")) + "</button></div>";
            return [App.esc(i.id) + "<br>" + I.chip(i), pcell(p), App.esc(App.tx(i.deficiency)), App.esc(App.desig(i.assignedTo, p)), (i.dueDate ? App.date(i.dueDate) + '<br><span class="small ' + (d < 0 ? "pd-over" : "muted") + '">' + App.esc(d < 0 ? App.tf("Overdue by {n} days", { n: -d }) : App.tf("Due in {n} days", { n: d })) + "</span>" : "-"), comp, act];
          }));
        } else {
          var pid = histPid;
          var p = scope[pid];
          rows = all.filter(function (i) { return i.pid === pid; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
          h += '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Project inspection history")) + '</h2><p class="ch-sub">' + (p ? App.pidLink(p) + " &middot; " + App.esc(App.pname(p)) : "") + "</p></div>" + (p ? App.pStatusChip(p) : "") + "</div>";
          h += rows.length ? '<ol class="timeline">' + rows.map(function (i) {
            var st = I.state(i), cls = st === "closed" ? "ap" : st === "scheduled" ? "fw" : st === "overdue" ? "rv" : "rt";
            return '<li><span class="tdot ' + cls + '">' + App.icon(st === "closed" ? "tick" : st === "scheduled" ? "calendar" : "warning") + '</span><div class="th">' + App.esc(i.id) + " &middot; " + App.date(i.date) + " " + I.chip(i) + '</div><div class="tm">' + App.esc(App.t("Team")) + ": " + App.esc(I.team(i, p)) + "</div>" +
              (i.status !== "scheduled" ? '<div class="tr">' + (i.deficiency ? "<strong>" + App.esc(App.t("Deficiency")) + ":</strong> " + App.esc(App.tx(i.deficiency)) + "<br>" + App.esc(App.t("Action assigned to")) + ": " + App.esc(App.desig(i.assignedTo, p)) + " &middot; " + App.esc(App.t("Due date")) + ": " + App.date(i.dueDate) : App.esc(App.tx(i.observation))) +
                (i.compliance ? "<br><strong>" + App.esc(App.t("Compliance")) + ":</strong> " + App.esc(i.compliance.file) + " (" + App.date(i.compliance.date) + ")" : "") +
                (i.verification ? "<br><strong>" + App.esc(App.t("Verification")) + ":</strong> " + App.esc(App.t(i.verification.result === "verified" ? "Satisfactory" : "Not satisfactory")) + " (" + App.date(i.verification.date) + ")" : "") +
                (i.reinspection ? "<br><strong>" + App.esc(App.t("Re-inspection")) + ":</strong> " + App.date(i.reinspection) : "") + "</div>" : "") +
              '<div style="margin-top:6px"><button class="btn ghost sm" type="button" data-view="' + i.id + '">' + App.esc(App.t("Inspection details")) + "</button></div></li>";
          }).join("") + "</ol>" : '<p class="empty">' + App.esc(App.t("No inspections in this view.")) + "</p>";
          h += "</div>";
        }
        main.innerHTML = h;
        bind();
      }
      function pcell(p) { return '<a class="pname" href="#/project/' + p.id + '">' + App.esc(App.pname(p)) + '</a><br><span class="pid">' + App.esc(DM.displayId(p)) + "</span>"; }
      function table(heads, rows) {
        if (!rows.length) return '<div class="card"><p class="empty">' + App.esc(App.t("No inspections in this view.")) + "</p></div>";
        return '<div class="table-wrap" tabindex="0"><table class="data"><caption class="sr-only">' + App.esc(App.t("Inspections")) + "</caption><thead><tr>" + heads.map(function (x) { return '<th scope="col">' + App.esc(x ? App.t(x) : "") + "</th>"; }).join("") + "</tr></thead><tbody>" +
          rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      }
      function find(id) { return App.db.inspections.filter(function (x) { return x.id === id; })[0]; }
      function bind() {
        var sel = main.querySelector("#insP");
        if (sel) sel.addEventListener("change", function () { pidF = sel.value; App.setQuery({ tab: tab, pid: pidF }); draw(); });
        var nb = main.querySelector("#insNew"); if (nb) nb.addEventListener("click", function () { scheduleModal(null); });
        App.qsa("[data-comp]", main).forEach(function (inp) { inp.addEventListener("change", function () {
          var f = inp.files && inp.files[0]; if (!f) return;
          var i = find(inp.getAttribute("data-comp")), p = DM.byId(App.db, i.pid);
          i.compliance = { date: App.today(), file: f.name, size: f.size, type: f.type || "file", note: "cmp" };
          I.addLog(i, { en: "Compliance uploaded: " + f.name, hi: "अनुपालन अपलोड: " + f.name });
          App.notify("inspection", p, "insp", ["email", "sms"]); App.log("compliance", { en: "Compliance uploaded " + i.id, hi: "अनुपालन अपलोड " + i.id }, p.id);
          App.save(); App.toast(App.t("Compliance uploaded")); draw();
        }); });
      }
      function onClick(e) {
        var b = e.target.closest("[data-rec],[data-view],[data-verify],[data-reins]"); if (!b) return;
        if (b.hasAttribute("data-rec")) recordModal(find(b.getAttribute("data-rec")));
        else if (b.hasAttribute("data-view")) detailModal(find(b.getAttribute("data-view")));
        else if (b.hasAttribute("data-verify")) verifyModal(find(b.getAttribute("data-verify")));
        else if (b.hasAttribute("data-reins")) scheduleModal(find(b.getAttribute("data-reins")));
      }
      function scheduleModal(orig) {
        var ps = App.scoped().filter(function (p) { var s = DM.status(p); return s === "ongoing" || s === "handover" || s === "notstarted"; }).sort(function (a, b) { return DM.displayId(a) < DM.displayId(b) ? -1 : 1; });
        var p0 = orig ? DM.byId(App.db, orig.pid) : DM.byId(App.db, pidF) || ps[0];
        var body = '<div class="form-grid" style="grid-template-columns:1fr 1fr">' +
          '<div class="field span2"><label for="sP">' + App.esc(App.t("Select project")) + ' <span class="req">*</span></label><select class="input" id="sP"' + (orig ? " disabled" : "") + ">" + App.opts(ps.map(function (p) { return [p.id, DM.displayId(p) + " - " + App.pname(p)]; }), p0 ? p0.id : "", false) + "</select></div>" +
          '<div class="field"><label for="sD">' + App.esc(App.t("Inspection date")) + ' <span class="req">*</span></label><input class="input" type="date" id="sD" value="' + DM.util.addDays(App.today(), 3) + '"></div><div></div>' +
          '<fieldset class="field span2" style="border:0;padding:0;margin:0"><legend class="lbl">' + App.esc(App.t("Inspection team")) + ' <span class="req">*</span></legend><div class="ins-team" id="sTeam"></div></fieldset></div>' +
          (orig ? '<p class="note" style="margin-top:12px">' + App.icon("info") + "<span>" + App.esc(App.t("Re-inspection of")) + " " + App.esc(orig.id) + ": " + App.esc(App.tx(orig.deficiency)) + "</span></p>" : "") + '<p class="err" id="sErr" role="alert"></p>';
        App.modal({ title: App.t(orig ? "Re-inspect" : "Schedule inspection"), body: body,
          foot: '<button class="btn secondary" type="button" data-close>' + App.esc(App.t("Cancel")) + '</button><button class="btn" type="button" id="sOk">' + App.esc(App.t("Schedule inspection")) + "</button>",
          onOpen: function (el, api) {
            function team() { var p = DM.byId(App.db, el.querySelector("#sP").value); el.querySelector("#sTeam").innerHTML = teamKeys(p).map(function (k, ix) { return '<label class="check" style="border:1px solid var(--rule);border-radius:6px;padding:6px 10px"><input type="checkbox" value="' + k + '"' + (ix < 2 ? " checked" : "") + "> " + App.esc(App.desig(k, p)) + "</label>"; }).join(""); }
            team(); el.querySelector("#sP").addEventListener("change", team);
            el.querySelector("#sOk").addEventListener("click", function () {
              var p = DM.byId(App.db, el.querySelector("#sP").value), d = el.querySelector("#sD").value, tm = App.qsa("#sTeam input:checked", el).map(function (x) { return x.value; });
              var err = !p ? "Select a project." : !tm.length ? "Select at least one team member." : !d ? "Inspection date" : "";
              if (err) { el.querySelector("#sErr").textContent = App.t(err); return; }
              var ni = { id: I.nextId(), pid: p.id, date: d, team: tm, checklist: DM.CHECKLIST.map(function () { return null; }), photos: 0, observation: null, deficiency: null, assignedTo: null, dueDate: null, compliance: null, verification: null, reinspection: null, status: "scheduled", reportFile: null, lat: p.loc[0], lng: p.loc[1] };
              if (orig) { ni.reOf = orig.id; orig.reinspection = d; I.addLog(orig, { en: "Re-inspection scheduled on " + d + " (" + ni.id + ")", hi: "पुनः निरीक्षण निर्धारित " + d + " (" + ni.id + ")" }); }
              I.addLog(ni, { en: "Inspection scheduled", hi: "निरीक्षण निर्धारित" });
              App.db.inspections.push(ni);
              tm.forEach(function (k) { App.notify("inspection", p, k, ["email", "sms"]); });
              App.log("inspection", { en: "Inspection scheduled " + ni.id, hi: "निरीक्षण निर्धारित " + ni.id }, p.id);
              App.save(); api.close(); App.toast(App.t(orig ? "Re-inspection scheduled" : "Inspection scheduled") + " - " + ni.id);
              tab = "schedule"; App.setQuery({ tab: tab, pid: pidF }); draw();
            });
          } });
      }
      function recordModal(i) {
        var p = DM.byId(App.db, i.pid), gps = null, files = [];
        var body = '<p class="small muted" style="margin-top:0">' + App.pidLink(p) + " &middot; " + App.esc(App.pname(p)) + " &middot; " + App.esc(App.t("Team")) + ": " + App.esc(I.team(i, p)) + "</p>" +
          '<h3 class="ins-sec">' + App.esc(App.t("Checklist")) + '</h3><ul class="ins-check">' + DM.CHECKLIST.map(function (c, ix) {
            return "<li><span>" + App.esc(App.L(c)) + '</span><span class="yn" role="radiogroup" aria-label="' + App.esc(App.L(c)) + '"><label><input type="radio" name="ck' + ix + '" value="1"> ' + App.esc(App.t("Yes")) + '</label><label><input type="radio" name="ck' + ix + '" value="0"> ' + App.esc(App.t("No")) + "</label></span></li>";
          }).join("") + "</ul>" +
          '<h3 class="ins-sec">' + App.esc(App.t("Geo-tagged photographs")) + '</h3><div class="split-head"><label class="btn secondary sm" style="cursor:pointer">' + App.icon("camera", "sm") + App.esc(App.t("Choose photos or take with camera")) + '<input type="file" class="sr-only" id="rF" accept="image/*" capture="environment" multiple></label><button class="btn secondary sm" type="button" id="rG">' + App.icon("gps", "sm") + App.esc(App.t("Capture GPS")) + '</button></div><div class="gps-out" id="rGo">' + App.esc(App.t("Inspection photos are geo-tagged and time-stamped on capture.")) + '</div><div class="ins-photos" id="rPv" style="margin-top:8px"></div>' +
          '<div class="form-grid" style="grid-template-columns:1fr 1fr;margin-top:14px"><div class="field span2"><label for="rO">' + App.esc(App.t("Observation")) + ' <span class="req">*</span></label><textarea class="input" id="rO"></textarea></div>' +
          '<div class="field span2"><label for="rD">' + App.esc(App.t("Deficiency found (leave blank if none)")) + '</label><textarea class="input" id="rD"></textarea></div>' +
          '<div class="field"><label for="rA">' + App.esc(App.t("Action assigned to")) + '</label><select class="input" id="rA">' + App.opts(["ee", "ae", "je", "bdo"].map(function (k) { return [k, App.desig(k, p)]; }), "ee", false) + "</select></div>" +
          '<div class="field"><label for="rDue">' + App.esc(App.t("Due date")) + '</label><input class="input" type="date" id="rDue" value="' + DM.util.addDays(App.today(), 15) + '"></div></div><p class="err" id="rErr" role="alert"></p>';
        App.modal({ title: App.t("Record inspection") + " - " + i.id, wide: true, body: body,
          foot: '<button class="btn secondary" type="button" data-close>' + App.esc(App.t("Cancel")) + '</button><button class="btn" type="button" id="rOk">' + App.esc(App.t("Save")) + "</button>",
          onOpen: function (el, api) {
            el.querySelector("#rG").addEventListener("click", function () { el.querySelector("#rGo").textContent = App.t("Locating..."); I.gps(p, function (g) { gps = g; el.querySelector("#rGo").innerHTML = I.gpsText(g); }); });
            el.querySelector("#rF").addEventListener("change", function () {
              files = Array.prototype.slice.call(this.files || []); var pv = el.querySelector("#rPv"); pv.innerHTML = "";
              files.slice(0, 6).forEach(function (f) { var r = new FileReader(); r.onload = function () { pv.insertAdjacentHTML("beforeend", '<figure class="photo"><img src="' + r.result + '" alt="' + App.esc(f.name) + '"><figcaption>' + App.esc(f.name) + "</figcaption></figure>"); }; r.readAsDataURL(f); });
              if (!gps) I.gps(p, function (g) { gps = g; el.querySelector("#rGo").innerHTML = I.gpsText(g); });
            });
            el.querySelector("#rOk").addEventListener("click", function () {
              var obs = el.querySelector("#rO").value.trim(), def = el.querySelector("#rD").value.trim();
              var unans = DM.CHECKLIST.some(function (c, ix) { return !el.querySelector('input[name="ck' + ix + '"]:checked'); });
              if (unans) { el.querySelector("#rErr").textContent = App.t("Answer every checklist item (Yes or No) before saving."); return; }
              if (!obs) { el.querySelector("#rErr").textContent = App.t("Enter the observation."); el.querySelector("#rO").setAttribute("aria-invalid", "true"); el.querySelector("#rO").focus(); return; }
              i.checklist = DM.CHECKLIST.map(function (c, ix) { var r = el.querySelector('input[name="ck' + ix + '"]:checked'); return r ? r.value === "1" : null; });
              i.date = App.today(); i.observation = obs; i.photos = Math.max(files.length, 1); i.reportFile = "Inspection_Report_" + i.date + ".pdf";
              if (gps) { i.lat = gps.lat; i.lng = gps.lng; }
              if (def) { i.deficiency = def; i.assignedTo = el.querySelector("#rA").value; i.dueDate = el.querySelector("#rDue").value; i.status = "action"; i.actionDate = i.date; App.notify("inspection", p, i.assignedTo, ["email", "sms", "whatsapp"]); }
              else i.status = "closed";
              I.addLog(i, { en: "Inspection recorded" + (def ? " with deficiency" : ""), hi: "निरीक्षण दर्ज" + (def ? " (कमी सहित)" : "") });
              p.docs.push({ id: "D" + (p.docs.length + 1), cat: "insp", name: i.reportFile, type: "pdf", access: "internal", versions: [{ v: 1, date: i.date, by: App.session.desig, size: 640 * 1024, note: "up" }] });
              I.syncSf8(p); App.log("inspection", { en: "Inspection recorded " + i.id, hi: "निरीक्षण दर्ज " + i.id }, p.id);
              App.save(); api.close(); App.toast(App.t("Inspection recorded") + " - " + i.id); tab = def ? "actions" : "records"; App.setQuery({ tab: tab, pid: pidF }); draw();
            });
          } });
      }
      function verifyModal(i) {
        var p = DM.byId(App.db, i.pid);
        App.modal({ title: App.t("Verify compliance") + " - " + i.id,
          body: '<dl class="kv" style="margin-bottom:12px"><div><dt>' + App.esc(App.t("Deficiency")) + "</dt><dd>" + App.esc(App.tx(i.deficiency)) + "</dd></div><div><dt>" + App.esc(App.t("Compliance report")) + "</dt><dd>" + App.esc(i.compliance.file) + " (" + App.date(i.compliance.date) + ")</dd></div></dl>" +
            '<fieldset style="border:0;padding:0;margin:0 0 12px"><legend class="lbl" style="font-weight:600;font-size:.8125rem">' + App.esc(App.t("Result")) + '</legend><label class="check"><input type="radio" name="vR" value="verified" checked> ' + App.esc(App.t("Verified - close inspection")) + '</label><label class="check"><input type="radio" name="vR" value="rejected"> ' + App.esc(App.t("Rejected - return for rectification")) + "</label></fieldset>" +
            '<div class="field"><label for="vRm">' + App.esc(App.t("Remarks (mandatory)")) + '</label><textarea class="input" id="vRm"></textarea><span class="err" id="vErr" role="alert"></span></div>',
          foot: '<button class="btn secondary" type="button" data-close>' + App.esc(App.t("Cancel")) + '</button><button class="btn" type="button" id="vOk">' + App.esc(App.t("Save")) + "</button>",
          onOpen: function (el, api) {
            el.querySelector("#vOk").addEventListener("click", function () {
              var rm = el.querySelector("#vRm").value.trim(), res = el.querySelector('input[name="vR"]:checked').value;
              if (!rm) { el.querySelector("#vErr").textContent = App.t("Enter remarks."); el.querySelector("#vRm").focus(); return; }
              if (res === "verified") { i.verification = { date: App.today(), result: "verified", by: App.session.desig, remarks: rm }; i.status = "closed"; I.addLog(i, { en: "Compliance verified: " + rm, hi: "अनुपालन सत्यापित: " + rm }); App.toast(App.t("Compliance verified and inspection closed")); }
              else { I.addLog(i, { en: "Compliance rejected: " + rm, hi: "अनुपालन अस्वीकृत: " + rm }); i.compliance = null; App.notify("inspection", p, i.assignedTo, ["email", "sms"]); App.toast(App.t("Compliance rejected - returned to the assignee"), false); }
              I.syncSf8(p); App.log("verify", { en: "Compliance " + res + " " + i.id, hi: "अनुपालन " + (res === "verified" ? "सत्यापित" : "अस्वीकृत") + " " + i.id }, p.id);
              App.save(); api.close(); draw();
            });
          } });
      }
      function detailModal(i) {
        var p = DM.byId(App.db, i.pid);
        var ck = '<ul class="ins-check">' + DM.CHECKLIST.map(function (c, ix) { var v = (i.checklist || [])[ix]; return "<li><span>" + App.esc(App.L(c)) + "</span>" + (v === true ? '<span class="ok-t">' + App.icon("tick", "sm") + " " + App.esc(App.t("Satisfactory")) + "</span>" : v === false ? '<span class="no-t">' + App.icon("close", "sm") + " " + App.esc(App.t("Not satisfactory")) + "</span>" : '<span class="na-t">' + App.esc(App.t("Not checked")) + "</span>") + "</li>"; }).join("") + "</ul>";
        var body = '<div class="split-head" style="margin-bottom:10px"><div>' + App.pidLink(p) + ' &middot; <strong>' + App.esc(App.pname(p)) + "</strong></div>" + I.chip(i) + "</div>" +
          '<dl class="kv k3"><div><dt>' + App.esc(App.t("Inspection date")) + "</dt><dd>" + App.date(i.date) + "</dd></div><div><dt>" + App.esc(App.t("Team")) + "</dt><dd>" + App.esc(I.team(i, p)) + "</dd></div><div><dt>" + App.esc(App.t("Location")) + "</dt><dd>" + (i.lat || p.loc[0]).toFixed(5) + " N, " + (i.lng || p.loc[1]).toFixed(5) + " E</dd></div>" +
          "<div><dt>" + App.esc(App.t("Observation")) + "</dt><dd>" + App.esc(App.tx(i.observation) || "-") + "</dd></div><div><dt>" + App.esc(App.t("Deficiency")) + "</dt><dd>" + App.esc(i.deficiency ? App.tx(i.deficiency) : App.t("No deficiency")) + "</dd></div><div><dt>" + App.esc(App.t("Action assigned to")) + "</dt><dd>" + App.esc(i.assignedTo ? App.desig(i.assignedTo, p) : "-") + "</dd></div>" +
          "<div><dt>" + App.esc(App.t("Due date")) + "</dt><dd>" + App.date(i.dueDate) + "</dd></div><div><dt>" + App.esc(App.t("Compliance")) + "</dt><dd>" + (i.compliance ? App.esc(i.compliance.file) + " (" + App.date(i.compliance.date) + ")" : "-") + "</dd></div><div><dt>" + App.esc(App.t("Verification")) + "</dt><dd>" + (i.verification ? App.esc(App.t(i.verification.result === "verified" ? "Satisfactory" : "Not satisfactory")) + " (" + App.date(i.verification.date) + ")" : "-") + "</dd></div>" +
          "<div><dt>" + App.esc(App.t("Re-inspection")) + "</dt><dd>" + App.date(i.reinspection) + "</dd></div><div><dt>" + App.esc(App.t("Inspection report")) + "</dt><dd>" + App.esc(i.reportFile || "-") + "</dd></div></dl>" +
          (i.status !== "scheduled" ? '<h3 class="ins-sec">' + App.esc(App.t("Geo-tagged photographs")) + '</h3><div class="ins-photos">' + I.photos(i, p, 3) + "</div>" : "") +
          '<h3 class="ins-sec">' + App.esc(App.t("Checklist")) + "</h3>" + ck +
          ((i.log || []).length ? '<h3 class="ins-sec">' + App.esc(App.t("Activity")) + '</h3><ul class="mini-list">' + i.log.map(function (l) { return "<li><span>" + App.esc(App.L(l.text)) + '</span><span class="small muted nowrap">' + App.dt(l.ts) + "</span></li>"; }).join("") + "</ul>" : "");
        App.modal({ title: App.t("Inspection details") + " - " + i.id, wide: true, body: body, foot: '<button class="btn" type="button" data-close>' + App.esc(App.t("Close")) + "</button>" });
      }
      main.addEventListener("click", onClick);
      draw();
      if (q.view && find(q.view)) detailModal(find(q.view));
      App.cleanup = function () { main.removeEventListener("click", onClick); };
    }
  });
})();
