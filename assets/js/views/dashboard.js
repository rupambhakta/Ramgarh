/* Officer dashboard (scope item 2): KPI tiles, filters, charts by block / department / FY, physical vs financial progress, drill-down. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Officer Dashboard": "अधिकारी डैशबोर्ड", "As on": "दिनांक", "Total projects": "कुल परियोजनाएँ", "Approved": "स्वीकृत", "Ongoing": "प्रगतिरत",
    "Completed": "पूर्ण", "Pending": "लंबित", "Delayed": "विलंबित", "Awaiting approval": "स्वीकृति हेतु लंबित", "Awaiting tender": "निविदा हेतु लंबित",
    "Not commenced": "कार्य प्रारंभ नहीं", "Pending inspections": "लंबित निरीक्षण", "Pending inspection actions": "लंबित निरीक्षण कार्रवाई", "Awaiting handover": "हस्तांतरण हेतु लंबित",
    "with administrative approval": "प्रशासनिक स्वीकृति सहित", "in execution": "निष्पादनाधीन", "handed over": "हस्तांतरित", "before administrative approval": "प्रशासनिक स्वीकृति से पूर्व",
    "behind schedule": "समय-सारणी से पीछे", "TA / AA files": "तकनीकी / प्रशासनिक स्वीकृति फ़ाइलें", "tender not finalised": "निविदा अंतिम नहीं", "agreement signed, work not started": "एकरारनामा हो चुका, कार्य प्रारंभ नहीं",
    "scheduled or overdue": "निर्धारित या अतिदेय", "deficiencies open": "खुली कमियाँ", "work complete": "कार्य पूर्ण",
    "More filters": "अधिक फ़िल्टर", "Fewer filters": "कम फ़िल्टर", "Reset filters": "फ़िल्टर रीसेट करें", "Search projects": "परियोजनाएँ खोजें",
    "Village": "ग्राम", "Approval no.": "स्वीकृति सं.", "Agreement no.": "एकरारनामा सं.", "Physical status": "भौतिक स्थिति", "Financial status": "वित्तीय स्थिति",
    "Any": "कोई भी", "Not started (0%)": "प्रारंभ नहीं (0%)", "Below 30%": "30% से कम", "30% - 60%": "30% - 60%", "60% - 99%": "60% - 99%", "100%": "100%",
    "Projects by block and status": "प्रखंड एवं स्थिति अनुसार परियोजनाएँ", "Projects by department": "विभाग अनुसार परियोजनाएँ", "Projects by financial year": "वित्तीय वर्ष अनुसार परियोजनाएँ",
    "Physical vs financial progress by department": "विभागवार भौतिक बनाम वित्तीय प्रगति", "Average %, projects in execution or completed.": "औसत %, निष्पादनाधीन या पूर्ण परियोजनाएँ।",
    "Click a bar to open the matching projects.": "संबंधित परियोजनाएँ खोलने हेतु बार पर क्लिक करें।",
    "Pre-approval": "स्वीकृति-पूर्व", "Tender / not commenced": "निविदा / प्रारंभ नहीं", "Awaiting handover ": "हस्तांतरण लंबित",
    "Block summary": "प्रखंड सारांश", "Panchayat-wise distribution": "पंचायतवार वितरण", "Projects": "परियोजनाएँ", "Avg. physical": "औसत भौतिक",
    "Needs attention": "ध्यान देने योग्य", "Most delayed works": "सर्वाधिक विलंबित कार्य", "Oldest pending files": "सबसे पुरानी लंबित फ़ाइलें",
    "days past schedule": "दिन निर्धारित तिथि से अधिक", "behind plan": "योजना से पीछे", "days": "दिन", "day": "दिन", "View all": "सभी देखें",
    "No delayed works in this selection.": "इस चयन में कोई विलंबित कार्य नहीं।", "No pending files in this selection.": "इस चयन में कोई लंबित फ़ाइल नहीं।",
    "Physical": "भौतिक", "Financial": "वित्तीय", "Approved amount": "स्वीकृत राशि", "Expenditure": "व्यय", "Utilisation": "उपयोग",
    "Showing {n} of {t} projects": "{t} में से {n} परियोजनाएँ", "Role": "भूमिका", "Approved value": "स्वीकृत मूल्य", "Spent": "व्यय",
    "View as table": "तालिका के रूप में देखें", "Hide table": "तालिका छिपाएँ", "Open projects list": "परियोजना सूची खोलें"
  });

  var BUCKETS = [
    { k: "completed", keys: ["completed"], label: "Completed", color: "#2F8A4E", q: "completed" },
    { k: "handover", keys: ["handover"], label: "Awaiting handover ", color: "#7B4FB5", q: "handover" },
    { k: "ongoing", keys: ["ongoing"], label: "Ongoing", color: "#2F5FAF", q: "ongoing" },
    { k: "delayed", keys: ["delayed"], label: "Delayed", color: "#C0392B", q: "delayed" },
    { k: "tender", keys: ["tender", "notstarted"], label: "Tender / not commenced", color: "#0B8BA3", q: "tender" },
    { k: "pre", keys: ["proposed", "approval"], label: "Pre-approval", color: "#C2650A", q: "pending" }
  ];
  function bucketOf(p) { var s = DM.dstatus(p); for (var i = 0; i < BUCKETS.length; i++) if (BUCKETS[i].keys.indexOf(s) >= 0) return i; return 5; }

  var FKEYS = ["block", "dept", "fy", "contractor", "q", "panchayat", "village", "aaNo", "agrNo", "phys", "fin"];
  function rangeOpts(sel) {
    return App.opts([["0-0", App.t("Not started (0%)")], ["0-29.99", App.t("Below 30%")], ["30-60", App.t("30% - 60%")], ["60.01-99.99", App.t("60% - 99%")], ["100-100", App.t("100%")]], sel, App.t("Any"));
  }
  function qstr(o) { var a = []; for (var k in o) if (o[k] !== "" && o[k] != null) a.push(k + "=" + encodeURIComponent(o[k])); return a.length ? "?" + a.join("&") : ""; }

  App.view("dashboard", {
    kind: "officer", perm: "dashboard",
    title: function () { return App.t("Officer Dashboard"); },
    render: function (main, route) {
      var q = route.query, f = {}; FKEYS.forEach(function (k) { f[k] = q[k] || ""; });
      var more = !!(f.panchayat || f.village || f.aaNo || f.agrNo || f.phys || f.fin);
      var r = App.role();
      var sub = App.esc(App.t("Role")) + ": <strong>" + App.esc(App.L(r)) + "</strong> &middot; " + App.esc(App.t("Jurisdiction")) + ": " + App.esc(App.scopeLabel()) + " &middot; " + App.esc(App.t("As on")) + " " + App.date(App.today()) + " &middot; <span id=\"dbCount\" aria-live=\"polite\"></span>";
      main.innerHTML = App.pageHead(App.t("Officer Dashboard"), sub, "", [[App.t("Home"), "#/dashboard"], [App.t("Dashboard"), ""]]) +
        '<form class="filters db-filters" id="dbF" aria-label="' + App.esc(App.t("Search projects")) + '">' +
        '<div class="field"><label for="f_q">' + App.esc(App.t("Search projects")) + '</label><input class="input" id="f_q" name="q" type="search" value="' + App.esc(f.q) + '" placeholder="' + App.esc(App.t("Search project ID, name, village")) + '"></div>' +
        '<div class="field"><label for="f_block">' + App.esc(App.t("Block")) + '</label><select class="input" id="f_block" name="block">' + App.blockOpts(f.block) + "</select></div>" +
        '<div class="field"><label for="f_dept">' + App.esc(App.t("Department")) + '</label><select class="input" id="f_dept" name="dept">' + App.deptOpts(f.dept) + "</select></div>" +
        '<div class="field"><label for="f_fy">' + App.esc(App.t("Financial Year")) + '</label><select class="input" id="f_fy" name="fy">' + App.fyOpts(f.fy) + "</select></div>" +
        '<div class="field"><label for="f_contractor">' + App.esc(App.t("Contractor")) + '</label><select class="input" id="f_contractor" name="contractor">' + App.contractorOpts(f.contractor) + "</select></div>" +
        '<div class="db-factions">' +
        '<button type="button" class="btn ghost sm" id="dbMoreBtn" aria-expanded="' + more + '" aria-controls="dbMore">' + App.icon("filter", "sm") + '<span>' + App.esc(App.t(more ? "Fewer filters" : "More filters")) + "</span></button>" +
        '<button type="button" class="btn secondary sm" id="dbReset" title="' + App.esc(App.t("Reset filters")) + '">' + App.esc(App.t("Reset")) + "</button></div>" +
        '<div class="db-more span-all" id="dbMore"' + (more ? "" : " hidden") + ">" +
        '<div class="field"><label for="f_panchayat">' + App.esc(App.t("Panchayat")) + '</label><select class="input" id="f_panchayat" name="panchayat">' + App.panchayatOpts(f.block, f.panchayat) + "</select></div>" +
        '<div class="field"><label for="f_village">' + App.esc(App.t("Village")) + '</label><input class="input" id="f_village" name="village" value="' + App.esc(f.village) + '"></div>' +
        '<div class="field"><label for="f_aaNo">' + App.esc(App.t("Approval no.")) + '</label><input class="input" id="f_aaNo" name="aaNo" value="' + App.esc(f.aaNo) + '" placeholder="AA/DMFT/..."></div>' +
        '<div class="field"><label for="f_agrNo">' + App.esc(App.t("Agreement no.")) + '</label><input class="input" id="f_agrNo" name="agrNo" value="' + App.esc(f.agrNo) + '" placeholder="AGR/..."></div>' +
        '<div class="field"><label for="f_phys">' + App.esc(App.t("Physical status")) + '</label><select class="input" id="f_phys" name="phys">' + rangeOpts(f.phys) + "</select></div>" +
        '<div class="field"><label for="f_fin">' + App.esc(App.t("Financial status")) + '</label><select class="input" id="f_fin" name="fin">' + rangeOpts(f.fin) + "</select></div></div>" +
        "</form>" +
        '<div id="dbBody"></div>';
      var form = main.querySelector("#dbF");
      function read() { var o = {}; FKEYS.forEach(function (k) { var el = form.elements[k]; o[k] = el ? el.value.trim() : ""; }); return o; }
      function apply() { var o = read(); App.setQuery(o); draw(o); }
      form.addEventListener("change", function (e) {
        if (e.target.name === "block") { var ps = form.elements.panchayat; ps.innerHTML = App.panchayatOpts(e.target.value, ""); }
        apply();
      });
      form.addEventListener("input", App.debounce(function (e) { if (e.target.tagName === "INPUT") apply(); }, 350));
      form.addEventListener("submit", function (e) { e.preventDefault(); apply(); });
      main.querySelector("#dbMoreBtn").addEventListener("click", function () {
        var box = main.querySelector("#dbMore"), open = box.hidden; box.hidden = !open; this.setAttribute("aria-expanded", String(open));
        this.querySelector("span").textContent = App.t(open ? "Fewer filters" : "More filters");
      });
      main.querySelector("#dbReset").addEventListener("click", function () { FKEYS.forEach(function (k) { if (form.elements[k]) form.elements[k].value = ""; }); form.elements.panchayat.innerHTML = App.panchayatOpts("", ""); apply(); });
      draw(f);

      function draw(fv) {
        App.destroyCharts();
        var all = App.scoped(), list = App.filterProjects(all, fv), k = DM.kpis(list, App.db);
        main.querySelector("#dbCount").textContent = App.tf("Showing {n} of {t} projects", { n: list.length, t: all.length });
        var base = {}; ["block", "dept", "fy", "contractor", "q"].forEach(function (x) { if (fv[x]) base[x] = fv[x]; });
        function link(extra) { var o = {}; for (var a in base) o[a] = base[a]; for (var b in extra) o[b] = extra[b]; return "#/projects" + qstr(o); }
        function vlink(extra) { return '<p class="db-vlink"><a href="' + link(extra) + '">' + App.icon("table", "sm") + App.esc(App.t("Open projects list")) + "</a></p>"; }
        function tile(label, val, sub, icon, color, href, cls) {
          return '<a class="kpi' + (cls ? " " + cls : "") + '" href="' + href + '" style="--k:' + color + '"><dl style="margin:0"><dt>' + App.esc(App.t(label)) + App.icon(icon) + "</dt><dd>" + App.n(val) + "</dd></dl>" + (sub ? '<div class="k-sub">' + sub + "</div>" : "") + "</a>";
        }
        var pctOf = function (a) { return k.total ? Math.round(a / k.total * 100) + "% " : ""; };
        var h = '<div class="kpis db-k1">' +
          tile("Total projects", k.total, App.moneyT(k.amount), "folder", "#123B73", link({})) +
          tile("Approved", k.approved, App.esc(App.t("with administrative approval")) + " &middot; " + App.moneyT(k.approvedAmount), "check", "#2F5FAF", link({ status: "approved" })) +
          tile("Ongoing", k.ongoing, App.esc(App.t("in execution")) + " &middot; " + pctOf(k.ongoing), "trend", "#0B8BA3", link({ status: "ongoing" })) +
          tile("Completed", k.completed, App.esc(App.t("handed over")) + " &middot; " + pctOf(k.completed), "flag", "#2F8A4E", link({ status: "completed" })) +
          tile("Pending", k.pending, App.esc(App.t("before administrative approval")), "pending", "#C2650A", link({ status: "pending" })) +
          tile("Delayed", k.delayed, App.esc(App.t("behind schedule")), "warning", "#C0392B", link({ status: "delayed" }), k.delayed ? "kpi-alert" : "") +
          "</div>";
        h += '<div class="kpis db-k2">' +
          tile("Awaiting approval", k.awaitApproval, App.esc(App.t("TA / AA files")), "file", "#C2650A", link({ status: "approval" })) +
          tile("Awaiting tender", k.awaitTender, App.esc(App.t("tender not finalised")), "notice", "#0B8BA3", link({ status: "tender" })) +
          tile("Not commenced", k.notCommenced, App.esc(App.t("agreement signed, work not started")), "clock", "#5B6573", link({ status: "notstarted" })) +
          tile("Pending inspections", k.pendingInsp, App.esc(App.t("scheduled or overdue")), "clipboard", "#7B4FB5", "#/inspections?tab=schedule") +
          tile("Pending inspection actions", k.pendingInspActions, App.esc(App.t("deficiencies open")), "warning", "#C0392B", "#/inspections?tab=actions") +
          tile("Awaiting handover", k.awaitHandover, App.esc(App.t("work complete")), "building", "#7B4FB5", link({ status: "handover" })) +
          "</div>";
        h += '<div class="grid g-3-2 db-row"><div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Projects by block and status")) + '</h2><p class="ch-sub">' + App.esc(App.t("Click a bar to open the matching projects.")) + '</p></div></div><div class="chart-box"><canvas id="chBlock" role="img" aria-label="' + App.esc(App.t("Projects by block and status")) + '"></canvas></div>' + vlink({}) + '</div>' +
          '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Projects by department")) + '</h2><p class="ch-sub">' + App.esc(App.t("Click a bar to open the matching projects.")) + '</p></div></div><div class="chart-box"><canvas id="chDept" role="img" aria-label="' + App.esc(App.t("Projects by department")) + '"></canvas></div>' + vlink({}) + '</div></div>';
        h += '<div class="grid g-1-2 db-row"><div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Projects by financial year")) + '</h2><p class="ch-sub">' + App.esc(App.t("Click a bar to open the matching projects.")) + '</p></div></div><div class="chart-box"><canvas id="chFy" role="img" aria-label="' + App.esc(App.t("Projects by financial year")) + '"></canvas></div>' + vlink({}) + '</div>' +
          '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Physical vs financial progress by department")) + '</h2><p class="ch-sub">' + App.esc(App.t("Average %, projects in execution or completed.")) + '</p></div></div><div class="chart-box"><canvas id="chPF" role="img" aria-label="' + App.esc(App.t("Physical vs financial progress by department")) + '"></canvas></div>' + vlink({ status: "ongoing" }) + '</div></div>';
        // Block summary + attention
        var bl = DM.BLOCKS.map(function (b) {
          var ps = list.filter(function (p) { return p.block === b.code; }), kk = DM.kpis(ps, App.db);
          return { b: b, n: ps.length, amt: kk.approvedAmount, exp: kk.expenditure, phys: DM.avgPhysical(ps), del: kk.delayed, done: kk.completed };
        });
        var tot = bl.reduce(function (a, x) { a.n += x.n; a.amt += x.amt; a.exp += x.exp; a.del += x.del; a.done += x.done; return a; }, { n: 0, amt: 0, exp: 0, del: 0, done: 0 });
        h += '<div class="grid g-3-2 db-row"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("Block summary")) + '</h2><a class="small" href="#/reports">' + App.esc(App.t("Reports & MIS")) + ' &rarr;</a></div><div class="table-wrap" tabindex="0"><table class="data db-bs"><caption class="sr-only">' + App.esc(App.t("Block summary")) + '</caption><thead><tr><th scope="col">' + App.esc(App.t("Block")) + '</th><th scope="col" class="num">' + App.esc(App.t("Projects")) + '</th><th scope="col" class="num">' + App.esc(App.t("Approved amount")) + '</th><th scope="col" class="num">' + App.esc(App.t("Expenditure")) + '</th><th scope="col" title="' + App.esc(App.L(DM.AVG_PHYS_DEF)) + '">' + App.esc(App.t("Avg. physical")) + '*</th><th scope="col" class="num">' + App.esc(App.t("Completed")) + '</th><th scope="col" class="num">' + App.esc(App.t("Delayed")) + "</th></tr></thead><tbody>" +
          bl.map(function (x) { return '<tr><td><a href="' + link({ block: x.b.code }) + '">' + App.esc(App.L(x.b)) + '</a></td><td class="num">' + x.n + '</td><td class="num">' + App.moneyT(x.amt) + '</td><td class="num">' + App.moneyT(x.exp) + "</td><td>" + App.bar(x.phys) + '</td><td class="num">' + x.done + '</td><td class="num">' + (x.del ? '<a href="' + link({ block: x.b.code, status: "delayed" }) + '" class="db-del">' + x.del + "</a>" : "0") + "</td></tr>"; }).join("") +
          '</tbody><tfoot><tr><td>' + App.esc(App.t("Total")) + '</td><td class="num">' + tot.n + '</td><td class="num">' + App.moneyT(tot.amt) + '</td><td class="num">' + App.moneyT(tot.exp) + "</td><td>" + App.bar(k.physAvg) + '</td><td class="num">' + tot.done + '</td><td class="num">' + tot.del + "</td></tr></tfoot></table></div><p class=\"db-def\">* " + App.esc(App.L(DM.AVG_PHYS_DEF)) + "</p></div>";
        // attention
        var today = App.today();
        var delayed = list.filter(function (p) { return DM.isDelayed(p); }).map(function (p) {
          var pc = p.sf[5] && p.sf[5].plannedCompletion, over = pc ? DM.util.diff(pc, today) : 0;
          var dur = DM.util.diff(p.sf[5].commencementDate, pc), el = DM.util.diff(p.sf[5].commencementDate, today), exp = Math.min(100, Math.round(el / Math.max(1, dur) * 100));
          return { p: p, over: over, gap: exp - p.physical };
        }).sort(function (a, b) { return (b.over - a.over) || (b.gap - a.gap); }).slice(0, 5);
        var files = list.filter(function (p) { return p.pendingAt && p.pendingSince; }).map(function (p) { return { p: p, age: App.ago(p.pendingSince) }; }).sort(function (a, b) { return b.age - a.age; }).slice(0, 5);
        h += '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Needs attention")) + "</h2></div>" +
          '<h3 class="db-sub">' + App.icon("warning", "sm") + App.esc(App.t("Most delayed works")) + "</h3>" +
          (delayed.length ? '<ul class="mini-list">' + delayed.map(function (x) { return '<li><span><a class="db-pn" href="#/project/' + x.p.id + '">' + App.esc(App.pname(x.p)) + '</a><span class="small muted db-id">' + App.esc(DM.displayId(x.p)) + " &middot; " + App.esc(App.blockName(x.p.block)) + "</span></span>" + '<span class="age over nowrap">' + (x.over > 0 ? x.over + " " + App.esc(App.t(x.over === 1 ? "day" : "days")) : x.gap + "% " + App.esc(App.t("behind plan"))) + "</span></li>"; }).join("") + "</ul>" : '<p class="small muted">' + App.esc(App.t("No delayed works in this selection.")) + "</p>") +
          '<h3 class="db-sub">' + App.icon("pending", "sm") + App.esc(App.t("Oldest pending files")) + "</h3>" +
          (files.length ? '<ul class="mini-list">' + files.map(function (x) { return '<li><span><a class="db-pn" href="#/project/' + x.p.id + '?tab=movement">' + App.esc(App.pname(x.p)) + '</a><span class="small muted db-id">' + App.esc(App.stageName(x.p.stage)) + " &middot; " + App.esc(App.t("Pending at")) + ": " + App.esc(App.desig(x.p.pendingAt, x.p)) + "</span></span>" + '<span class="age ' + (x.age > 30 ? "over" : x.age > 15 ? "near" : "ok") + ' nowrap">' + x.age + " " + App.esc(App.t(x.age === 1 ? "day" : "days")) + "</span></li>"; }).join("") + "</ul>" : '<p class="small muted">' + App.esc(App.t("No pending files in this selection.")) + "</p>") +
          "</div></div>";
        // Panchayat table
        var pr = [];
        DM.BLOCKS.forEach(function (b) { b.panchayats.forEach(function (pp) {
          var ps = list.filter(function (p) { return p.block === b.code && p.panchayat === pp.en; }); if (!ps.length) return;
          var kk = DM.kpis(ps, App.db); pr.push({ b: b, pp: pp, n: ps.length, ongoing: kk.ongoing, done: kk.completed, del: kk.delayed, pend: kk.pending, amt: kk.approvedAmount });
        }); });
        pr.sort(function (a, b) { return b.n - a.n; });
        h += '<div class="card db-row"><div class="card-head"><div><h2>' + App.esc(App.t("Panchayat-wise distribution")) + '</h2></div></div><div class="table-wrap tbl-scroll" style="max-height:360px" tabindex="0"><table class="data"><caption class="sr-only">' + App.esc(App.t("Panchayat-wise distribution")) + '</caption><thead><tr><th scope="col">' + App.esc(App.t("Panchayat")) + '</th><th scope="col">' + App.esc(App.t("Block")) + '</th><th scope="col" class="num">' + App.esc(App.t("Projects")) + '</th><th scope="col" class="num">' + App.esc(App.t("Pending")) + '</th><th scope="col" class="num">' + App.esc(App.t("Ongoing")) + '</th><th scope="col" class="num">' + App.esc(App.t("Completed")) + '</th><th scope="col" class="num">' + App.esc(App.t("Delayed")) + '</th><th scope="col" class="num">' + App.esc(App.t("Approved amount")) + "</th></tr></thead><tbody>" +
          pr.map(function (x) { return '<tr><td><a href="' + link({ block: x.b.code, panchayat: x.pp.en }) + '">' + App.esc(App.L(x.pp)) + "</a></td><td>" + App.esc(App.L(x.b)) + '</td><td class="num">' + x.n + '</td><td class="num">' + x.pend + '</td><td class="num">' + x.ongoing + '</td><td class="num">' + x.done + '</td><td class="num">' + x.del + '</td><td class="num">' + App.moneyT(x.amt) + "</td></tr>"; }).join("") + "</tbody></table></div></div>";
        main.querySelector("#dbBody").innerHTML = h;
        charts(list, link);
      }
    }
  });

  function charts(list, link) {
    var C = window.Chart; if (!C) return;
    // One navigation per drill-down, even if a click is delivered twice (double click or a late throttled event).
    var going = false;
    function go(h) { if (going) return; going = true; App.chartGo(h); }
    var blocks = DM.BLOCKS, depts = DM.DEPTS, fys = DM.FYS();
    function stackData(groups, keyFn) {
      return BUCKETS.map(function (b, bi) {
        return { label: App.t(b.label), backgroundColor: b.color, borderColor: "#fff", borderWidth: { top: 1, bottom: 0, left: 1, right: 1 }, data: groups.map(function (g) { return list.filter(function (p) { return keyFn(p) === g && bucketOf(p) === bi; }).length; }) };
      });
    }
    var stacked = { x: { stacked: true, grid: { display: false } }, y: { stacked: true, beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#EEF0F3" } } };
    App.chart(document.getElementById("chBlock"), {
      type: "bar", data: { labels: blocks.map(function (b) { return App.L(b); }), datasets: stackData(blocks.map(function (b) { return b.code; }), function (p) { return p.block; }) },
      options: { scales: stacked, plugins: { legend: { position: "bottom" } }, onHover: hov,
        onClick: function (e, els) { if (!els.length) return; go(link({ block: blocks[els[0].index].code, status: BUCKETS[els[0].datasetIndex].q })); } }
    });
    var dcount = depts.map(function (d) { return { d: d, n: list.filter(function (p) { return p.dept === d.code; }).length }; }).sort(function (a, b) { return b.n - a.n; });
    App.chart(document.getElementById("chDept"), {
      type: "bar", data: { labels: dcount.map(function (x) { return App.L(x.d.short); }), datasets: [{ label: App.t("Projects"), data: dcount.map(function (x) { return x.n; }), backgroundColor: "#2F5FAF" }] },
      options: { indexAxis: "y", scales: { x: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#EEF0F3" } }, y: { grid: { display: false } } }, plugins: { legend: { display: false }, tooltip: { callbacks: { title: function (it) { return App.L(dcount[it[0].dataIndex].d); } } } }, onHover: hov,
        onClick: function (e, els) { if (!els.length) return; go(link({ dept: dcount[els[0].index].d.code })); } }
    });
    App.chart(document.getElementById("chFy"), {
      type: "bar", data: { labels: fys, datasets: stackData(fys, function (p) { return p.fy; }) },
      options: { scales: stacked, plugins: { legend: { position: "bottom" } }, onHover: hov,
        onClick: function (e, els) { if (!els.length) return; go(link({ fy: fys[els[0].index], status: BUCKETS[els[0].datasetIndex].q })); } }
    });
    var pf = depts.map(function (d) {
      var ps = list.filter(function (p) { var st = DM.status(p); return p.dept === d.code && (st === "ongoing" || st === "handover" || st === "completed"); });
      return { d: d, n: ps.length, ph: DM.avgPhysical(ps), fi: ps.length ? Math.round(ps.reduce(function (s, p) { return s + DM.finPct(p); }, 0) / ps.length) : 0 };
    }).filter(function (x) { return x.n; });
    App.chart(document.getElementById("chPF"), {
      type: "bar", data: { labels: pf.map(function (x) { return App.L(x.d.short); }), datasets: [
        { label: App.t("Physical") + " %", data: pf.map(function (x) { return x.ph; }), backgroundColor: "#2F5FAF", borderColor: "#fff", borderWidth: 1 },
        { label: App.t("Financial") + " %", data: pf.map(function (x) { return x.fi; }), backgroundColor: "#C2650A", borderColor: "#fff", borderWidth: 1 }] },
      options: { scales: { y: { beginAtZero: true, max: 100, ticks: { callback: function (v) { return v + "%"; } }, grid: { color: "#EEF0F3" } }, x: { grid: { display: false } } },
        plugins: { tooltip: { callbacks: { title: function (it) { return App.L(pf[it[0].dataIndex].d); }, label: function (c) { return c.dataset.label + ": " + c.parsed.y + "%"; } } } }, onHover: hov,
        onClick: function (e, els) { if (!els.length) return; go(link({ dept: pf[els[0].index].d.code })); } }
    });
  }
  function hov(e, els) { var t = e.native && e.native.target; if (t) t.style.cursor = els.length ? "pointer" : "default"; }
})();
