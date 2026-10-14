/* DMFT Work Monitoring Portal, Ramgarh - Contractor / Agency master and contractor-wise status (scope 1, stage 5). */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;

  App.addHi({
    "Contractor / Agency Master": "संवेदक / एजेंसी मास्टर", "Registered firms with agreements, work orders and contractor-wise project status.": "पंजीकृत फर्म - एकरारनामा, कार्यादेश एवं संवेदकवार परियोजना स्थिति सहित।",
    "Add contractor": "संवेदक जोड़ें", "Registered contractors": "पंजीकृत संवेदक", "Active agreements": "सक्रिय एकरारनामे", "Total agreement value": "कुल एकरारनामा राशि", "Firms with delayed works": "विलंबित कार्य वाली फर्म",
    "Firm": "फर्म", "Class": "श्रेणी", "PAN": "पैन", "GSTIN": "जीएसटीआईएन", "Contact": "संपर्क", "Departments": "विभाग", "Agreements": "एकरारनामे", "Agreement value": "एकरारनामा राशि",
    "Ongoing": "प्रगतिरत", "Completed": "पूर्ण", "Delayed": "विलंबित", "Active": "सक्रिय", "Watch list": "निगरानी सूची", "Registration no.": "पंजीकरण सं.",
    "Contractors list": "संवेदकों की सूची", "Search firm, PAN, GSTIN": "फर्म, पैन, जीएसटीआईएन खोजें", "All departments": "सभी विभाग", "All statuses": "सभी स्थितियाँ",
    "{n} firms": "{n} फर्म", "Class I": "श्रेणी I", "Class II": "श्रेणी II", "Class III": "श्रेणी III", "Sample firm data; PAN and GSTIN are dummy values.": "नमूना फर्म डाटा; पैन एवं जीएसटीआईएन काल्पनिक मान हैं।",
    "Firm name (English)": "फर्म का नाम (अंग्रेज़ी)", "Firm name (Hindi)": "फर्म का नाम (हिन्दी)", "Mobile": "मोबाइल", "E-mail": "ई-मेल", "Address": "पता", "Working with departments": "संबद्ध विभाग",
    "Enter the firm name.": "फर्म का नाम दर्ज करें।", "PAN must be in the format AAAAA9999A.": "पैन AAAAA9999A प्रारूप में होना चाहिए।",
    "GSTIN must be 15 characters (state code + PAN + entity + Z + check digit).": "जीएसटीआईएन 15 अक्षरों का हो (राज्य कोड + पैन + इकाई + Z + चेक अंक)।",
    "GSTIN must contain the same PAN.": "जीएसटीआईएन में वही पैन होना चाहिए।", "GSTIN state code 20 (Jharkhand) expected.": "जीएसटीआईएन राज्य कोड 20 (झारखंड) अपेक्षित।",
    "Enter a 10-digit mobile number.": "10 अंकों का मोबाइल नंबर दर्ज करें।", "Enter a valid e-mail address.": "मान्य ई-मेल पता दर्ज करें।", "Select at least one department.": "कम से कम एक विभाग चुनें।",
    "A contractor with this PAN already exists.": "इस पैन से संवेदक पहले से उपलब्ध है।", "Contractor {n} added to the master.": "संवेदक {n} मास्टर में जोड़ा गया।",
    "Contractor not found": "संवेदक नहीं मिला", "Firm profile": "फर्म विवरण", "Registered since": "पंजीकरण वर्ष से", "Projects": "परियोजनाएँ", "Released to firm": "फर्म को जारी राशि",
    "Agreements and work orders": "एकरारनामे एवं कार्यादेश", "Pending and delayed works": "लंबित एवं विलंबित कार्य", "Project status of this firm": "इस फर्म की परियोजना स्थिति",
    "Delay (days)": "विलंब (दिन)", "No pending or delayed works.": "कोई लंबित या विलंबित कार्य नहीं।", "No agreements yet.": "अभी कोई एकरारनामा नहीं।",
    "Contractual completion": "अनुबंधित पूर्णता", "Contractor master": "संवेदक मास्टर", "Projects by status": "स्थितिवार परियोजनाएँ", "behind schedule": "समय-सारणी से पीछे",
    "Agreement date": "एकरारनामा दिनांक"
  });

  function stats(c, list) {
    var ps = list.filter(function (p) { return p.sf[5] && p.sf[5].contractor === c.id; });
    var s = { projects: ps, n: ps.length, ongoing: 0, completed: 0, delayed: 0, handover: 0, notstarted: 0, value: 0, released: 0 };
    ps.forEach(function (p) {
      var st = DM.status(p); s.value += p.sf[5].agreementAmount || 0; s.released += DM.expenditure(p);
      if (st === "ongoing") s.ongoing++; if (st === "completed") s.completed++; if (st === "handover") s.handover++; if (st === "notstarted") s.notstarted++;
      if (DM.isDelayed(p)) s.delayed++;
    });
    return s;
  }
  function clsLabel(c) { return App.t(c.cls); }
  function deptChips(c) { return c.depts.map(function (d) { return '<span class="chip plain dchip">' + App.esc(App.deptShort(d)) + "</span>"; }).join(" "); }
  function tile(l, v, col, ic, sub) { return '<dl class="kpi" style="--k:' + col + '"><dt>' + App.esc(App.t(l)) + App.icon(ic) + "</dt><dd>" + v + "</dd>" + (sub ? '<div class="k-sub">' + sub + "</div>" : "") + "</dl>"; }

  App.view("contractors", {
    kind: "officer", perm: "execution",
    title: function () { return App.t("Contractor / Agency Master"); },
    render: function (main, route) {
      var q = route.query, list = App.scoped();
      var all = App.db.contractors.map(function (c) { return { c: c, s: stats(c, list) }; });
      var agr = 0, val = 0, del = 0; all.forEach(function (x) { agr += x.s.ongoing + x.s.notstarted; val += x.s.value; if (x.s.delayed) del++; });
      var canAdd = App.can("execution", "full");
      main.innerHTML = App.pageHead(App.t("Contractor / Agency Master"), App.esc(App.t("Registered firms with agreements, work orders and contractor-wise project status.")),
        '<button type="button" class="btn secondary" data-x>' + App.icon("download") + App.esc(App.t("Export Excel")) + "</button>" + (canAdd ? '<button type="button" class="btn" data-add>' + App.icon("plus") + App.esc(App.t("Add contractor")) + "</button>" : ""),
        [[App.t("Dashboard"), "#/dashboard"], [App.t("Contractors")]]) +
        '<div class="kpis k4c">' + tile("Registered contractors", App.n(all.length), "#2F5FAF", "building") + tile("Active agreements", App.n(agr), "#0B8BA3", "file") + tile("Total agreement value", App.moneyT(val), "#C2650A", "rupee") + tile("Firms with delayed works", App.n(del), "#C0392B", "warning") + "</div>" +
        '<form class="filters c-filters" role="search" id="cf"><div class="field span2"><label for="cq">' + App.esc(App.t("Search")) + '</label><input class="input" type="search" id="cq" value="' + App.esc(q.q || "") + '" placeholder="' + App.esc(App.t("Search firm, PAN, GSTIN")) + '"></div>' +
        '<div class="field"><label for="cd">' + App.esc(App.t("Department")) + '</label><select class="input" id="cd">' + App.deptOpts(q.dept, App.t("All departments")) + "</select></div>" +
        '<div class="field"><label for="cs">' + App.esc(App.t("Status")) + '</label><select class="input" id="cs">' + App.opts([["active", App.t("Active")], ["watch", App.t("Watch list")], ["delayed", App.t("Firms with delayed works")]], q.st, App.t("All statuses")) + "</select></div></form>" +
        '<p class="small muted">' + App.icon("info", "sm") + " " + App.esc(App.t("Sample firm data; PAN and GSTIN are dummy values.")) + '</p><div id="cRes"></div>';
      function draw() {
        var qq = main.querySelector("#cq").value.trim().toLowerCase(), d = main.querySelector("#cd").value, st = main.querySelector("#cs").value;
        App.setQuery({ q: qq, dept: d, st: st });
        var rows = all.filter(function (x) {
          if (d && x.c.depts.indexOf(d) < 0) return false;
          if (st === "active" && x.c.status !== "active") return false; if (st === "watch" && x.c.status !== "watch") return false; if (st === "delayed" && !x.s.delayed) return false;
          if (qq && (x.c.name.en + " " + x.c.name.hi + " " + x.c.pan + " " + x.c.gstin + " " + x.c.regNo).toLowerCase().indexOf(qq) < 0) return false;
          return true;
        }).sort(function (a, b) { return b.s.value - a.s.value; });
        var h = '<div class="table-wrap" tabindex="0" aria-label="' + App.esc(App.t("Contractors list")) + '"><table class="data"><caption class="sr-only">' + App.esc(App.t("Contractor master")) + "</caption><thead><tr><th scope=\"col\">" + App.esc(App.t("Firm")) + '</th><th scope="col">' + App.esc(App.t("Class")) + '</th><th scope="col">' + App.esc(App.t("PAN")) + " / " + App.esc(App.t("GSTIN")) + '</th><th scope="col">' + App.esc(App.t("Contact")) + '</th><th scope="col">' + App.esc(App.t("Departments")) + '</th><th scope="col" class="num">' + App.esc(App.t("Agreements")) + '</th><th scope="col" class="num">' + App.esc(App.t("Agreement value")) + '</th><th scope="col" class="num">' + App.esc(App.t("Ongoing")) + '</th><th scope="col" class="num">' + App.esc(App.t("Completed")) + '</th><th scope="col" class="num">' + App.esc(App.t("Delayed")) + '</th><th scope="col">' + App.esc(App.t("Status")) + "</th></tr></thead><tbody>";
        if (!rows.length) h += '<tr><td colspan="11" class="empty">' + App.esc(App.t("No records match the selected filters.")) + "</td></tr>";
        rows.forEach(function (x) {
          var c = x.c, s = x.s;
          h += '<tr><td class="cf-n"><a class="pname" href="#/contractor/' + c.id + '">' + App.esc(App.L(c.name)) + '</a><div class="small muted">' + App.esc(c.regNo) + "</div></td><td class=\"nowrap\">" + App.esc(clsLabel(c)) + '</td><td class="small nowrap"><span class="code">' + App.esc(c.pan) + '</span><div><span class="code">' + App.esc(c.gstin) + '</span></div></td><td class="small nowrap">' + App.icon("phone", "sm") + " " + App.esc(c.phone) + '<div class="muted">' + App.esc(c.email) + "</div></td><td class=\"cf-d\">" + deptChips(c) + '</td><td class="num">' + s.n + '</td><td class="num">' + App.moneyT(s.value) + '</td><td class="num">' + s.ongoing + '</td><td class="num">' + s.completed + '</td><td class="num">' + (s.delayed ? '<strong class="age over">' + s.delayed + "</strong>" : "0") + "</td><td>" + (c.status === "watch" ? '<span class="chip st-delayed">' + App.esc(App.t("Watch list")) + "</span>" : '<span class="chip st-completed">' + App.esc(App.t("Active")) + "</span>") + "</td></tr>";
        });
        main.querySelector("#cRes").innerHTML = h + '</tbody></table></div><p class="small muted" aria-live="polite">' + App.esc(App.tf("{n} firms", { n: rows.length })) + "</p>";
        return rows;
      }
      var cur = draw();
      main.querySelector("#cf").addEventListener("input", App.debounce(function () { cur = draw(); }, 200));
      main.querySelector("#cf").addEventListener("submit", function (e) { e.preventDefault(); });
      main.querySelector("[data-x]").addEventListener("click", function () {
        var rows = [[App.t("Firm"), App.t("Registration no."), App.t("Class"), App.t("PAN"), App.t("GSTIN"), App.t("Mobile"), App.t("E-mail"), App.t("Departments"), App.t("Agreements"), App.t("Agreement value") + " (Rs)", App.t("Ongoing"), App.t("Completed"), App.t("Delayed"), App.t("Status")]];
        cur.forEach(function (x) { rows.push([App.L(x.c.name), x.c.regNo, clsLabel(x.c), x.c.pan, x.c.gstin, x.c.phone, x.c.email, x.c.depts.map(App.deptShort).join(", "), x.s.n, x.s.value, x.s.ongoing, x.s.completed, x.s.delayed, App.t(x.c.status === "watch" ? "Watch list" : "Active")]); });
        App.exportXlsx("DMFT-Ramgarh_Contractor-Master_" + App.today() + ".xlsx", [{ name: App.t("Contractor master"), rows: rows }], App.t("Contractor master"));
      });
      var add = main.querySelector("[data-add]"); if (add) add.addEventListener("click", function () { addModal(function () { App.render(); }); });
    }
  });

  function addModal(done) {
    var body = '<div id="acErr" class="note err" role="alert" tabindex="-1" hidden></div><div class="form-grid">' +
      fld("acN", "Firm name (English)", '<input class="input" id="acN" maxlength="120">', "span2", true) + fld("acC", "Class", '<select class="input" id="acC">' + ["Class I", "Class II", "Class III"].map(function (x) { return '<option value="' + x + '">' + App.esc(App.t(x)) + "</option>"; }).join("") + "</select>") +
      fld("acNh", "Firm name (Hindi)", '<input class="input" id="acNh" lang="hi" maxlength="120">', "span2") + fld("acR", "Registration no.", '<input class="input" id="acR" value="JH/SAMPLE/REG/' + DM.util.pad(App.db.contractors.length + 1, 4) + '">') +
      fld("acP", "PAN", '<input class="input" id="acP" maxlength="10" placeholder="AAAAA0016A" style="text-transform:uppercase">', "", true) + fld("acG", "GSTIN", '<input class="input" id="acG" maxlength="15" placeholder="20AAAAA0016A1Z5" style="text-transform:uppercase">', "", true) +
      fld("acM", "Mobile", '<input class="input" id="acM" inputmode="numeric" maxlength="10" placeholder="9800000016">', "", true) + fld("acE", "E-mail", '<input class="input" id="acE" type="email" placeholder="contact16@sample-firm.example">', "span2", true) +
      fld("acA", "Address", '<input class="input" id="acA" placeholder="Ramgarh, Jharkhand">') +
      '<div class="field span3"><span class="lbl">' + App.esc(App.t("Working with departments")) + ' <span class="req">*</span></span><div class="dept-checks">' + DM.DEPTS.map(function (d) { return '<label class="check"><input type="checkbox" value="' + d.code + '">' + App.esc(App.L(d)) + "</label>"; }).join("") + "</div></div></div>";
    App.modal({ title: App.t("Add contractor"), wide: true, body: body,
      foot: '<button type="button" class="btn secondary" data-close>' + App.esc(App.t("Cancel")) + '</button><button type="button" class="btn" data-ok>' + App.icon("check") + App.esc(App.t("Save")) + "</button>",
      onOpen: function (m, api) {
        m.querySelector("[data-ok]").addEventListener("click", function () {
          var v = function (id) { return m.querySelector("#" + id).value.trim(); }, errs = [];
          var pan = v("acP").toUpperCase(), gst = v("acG").toUpperCase(), depts = App.qsa(".dept-checks input:checked", m).map(function (i) { return i.value; });
          if (v("acN").length < 3) errs.push("Enter the firm name.");
          if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) errs.push("PAN must be in the format AAAAA9999A.");
          if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(gst)) errs.push("GSTIN must be 15 characters (state code + PAN + entity + Z + check digit).");
          else { if (gst.slice(2, 12) !== pan) errs.push("GSTIN must contain the same PAN."); if (gst.slice(0, 2) !== "20") errs.push("GSTIN state code 20 (Jharkhand) expected."); }
          if (!/^[6-9][0-9]{9}$/.test(v("acM"))) errs.push("Enter a 10-digit mobile number.");
          if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("acE"))) errs.push("Enter a valid e-mail address.");
          if (!depts.length) errs.push("Select at least one department.");
          if (App.db.contractors.some(function (c) { return c.pan === pan; })) errs.push("A contractor with this PAN already exists.");
          var er = m.querySelector("#acErr");
          if (errs.length) { er.hidden = false; er.innerHTML = App.icon("warning") + "<div><strong>" + App.esc(App.t("Please correct the following:")) + "</strong><ul>" + errs.map(function (e) { return "<li>" + App.esc(App.t(e)) + "</li>"; }).join("") + "</ul></div>"; er.focus(); return; }
          var id = "C" + DM.util.pad(App.db.contractors.length + 1, 2), addr = v("acA") || "Ramgarh, Jharkhand";
          App.db.contractors.push({ id: id, name: { en: v("acN"), hi: v("acNh") || v("acN") }, cls: v("acC"), regNo: v("acR"), pan: pan, gstin: gst, phone: v("acM").replace(/^(\d{5})/, "$1 "), email: v("acE"), address: { en: addr, hi: addr }, depts: depts, since: App.today().slice(0, 4), status: "active" });
          App.log("contractor", { en: "Contractor added: " + v("acN"), hi: "संवेदक जोड़ा गया: " + v("acN") });
          App.save(); api.close(); App.toast(App.tf("Contractor {n} added to the master.", { n: v("acN") })); done();
        });
      } });
  }
  function fld(id, l, ctl, cls, req) { return '<div class="field' + (cls ? " " + cls : "") + '"><label for="' + id + '">' + App.esc(App.t(l)) + (req ? ' <span class="req">*</span>' : "") + "</label>" + ctl + "</div>"; }

  App.view("contractor", {
    kind: "officer", perm: "execution",
    title: function (r) { var c = App.contractor(r.params.id); return c ? App.L(c.name) : App.t("Contractor not found"); },
    render: function (main, route) {
      var c = App.contractor(route.params.id);
      if (!c) { main.innerHTML = App.pageHead(App.t("Contractor not found"), "", "", [[App.t("Contractors"), "#/contractors"], [App.t("Contractor not found")]]); return; }
      var s = stats(c, App.scoped()), today = App.today();
      var pend = s.projects.filter(function (p) { var st = DM.status(p); return DM.isDelayed(p) || st === "notstarted" || st === "handover" || (p.payments || []).some(function (x) { return x.status === "pending"; }); });
      main.innerHTML = App.pageHead(App.L(c.name), App.esc(c.regNo) + " | " + App.esc(clsLabel(c)) + " | " + (c.status === "watch" ? '<span class="chip st-delayed">' + App.esc(App.t("Watch list")) + "</span>" : '<span class="chip st-completed">' + App.esc(App.t("Active")) + "</span>"), "",
        [[App.t("Dashboard"), "#/dashboard"], [App.t("Contractors"), "#/contractors"], [App.L(c.name)]]) +
        '<div class="kpis">' + tile("Projects", App.n(s.n), "#2F5FAF", "folder") + tile("Ongoing", App.n(s.ongoing), "#0B8BA3", "trend") + tile("Completed", App.n(s.completed), "#2F8A4E", "check") + tile("Delayed", App.n(s.delayed), "#C0392B", "warning") + tile("Agreement value", App.moneyT(s.value), "#C2650A", "file") + tile("Released to firm", App.moneyT(s.released), "#7B4FB5", "rupee") + "</div>" +
        '<div class="grid g-1-2" style="margin-top:16px"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("Firm profile")) + '</h2></div><dl class="kv">' +
        kv("Registration no.", App.esc(c.regNo)) + kv("Class", App.esc(clsLabel(c))) + kv("PAN", '<span class="code">' + App.esc(c.pan) + "</span>") + kv("GSTIN", '<span class="code">' + App.esc(c.gstin) + "</span>") + kv("Mobile", App.esc(c.phone)) + kv("E-mail", App.esc(c.email)) + kv("Address", App.esc(App.L(c.address))) + kv("Registered since", App.esc(c.since)) +
        '</dl><p class="small" style="margin-top:10px"><strong>' + App.esc(App.t("Departments")) + ":</strong> " + deptChips(c) + '</p><p class="small muted">' + App.esc(App.t("Sample firm data; PAN and GSTIN are dummy values.")) + "</p></div>" +
        '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Project status of this firm")) + '</h2></div><div class="chart-box short"><canvas id="ctChart" role="img" aria-label="' + App.esc(App.t("Projects by status")) + '"></canvas></div></div></div>' +
        '<div class="card"><div class="card-head"><h2>' + App.icon("warning") + " " + App.esc(App.t("Pending and delayed works")) + '</h2><span class="pill-n">' + pend.length + "</span></div>" + table(pend, true, today) + "</div>" +
        '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Agreements and work orders")) + '</h2><span class="pill-n">' + s.n + "</span></div>" + table(s.projects, false, today) + "</div>";
      var keys = ["notstarted", "ongoing", "delayed", "handover", "completed"], counts = keys.map(function (k) { return s.projects.filter(function (p) { return DM.dstatus(p) === k; }).length; });
      App.chart(main.querySelector("#ctChart"), { type: "bar", data: { labels: keys.map(function (k) { return App.L(DM.STATUS[k]); }), datasets: [{ label: App.t("Projects"), data: counts, backgroundColor: keys.map(function (k) { return DM.STATUS[k].color; }) }] },
        options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { precision: 0 } }, y: { grid: { display: false } } } } });
    }
  });
  function kv(l, v) { return "<div><dt>" + App.esc(App.t(l)) + "</dt><dd>" + v + "</dd></div>"; }
  function table(ps, delayCol, today) {
    if (!ps.length) return '<p class="empty">' + App.esc(App.t(delayCol ? "No pending or delayed works." : "No agreements yet.")) + "</p>";
    var h = '<div class="table-wrap" tabindex="0"><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Agreement no.")) + '</th><th scope="col">' + App.esc(App.t("Project")) + '</th><th scope="col">' + App.esc(App.t("Block")) + '</th><th scope="col">' + App.esc(App.t("Agreement date")) + '</th><th scope="col" class="num">' + App.esc(App.t("Amount")) + '</th><th scope="col">' + App.esc(App.t("Contractual completion")) + '</th><th scope="col">' + App.esc(App.t("Physical")) + "</th>" + (delayCol ? '<th scope="col" class="num">' + App.esc(App.t("Delay (days)")) + '</th><th scope="col">' + App.esc(App.t("Pending at")) + "</th>" : "") + '<th scope="col">' + App.esc(App.t("Status")) + "</th></tr></thead><tbody>";
    ps.slice().sort(function (a, b) { return (b.sf[5].agreementDate || "") < (a.sf[5].agreementDate || "") ? -1 : 1; }).forEach(function (p) {
      var s5 = p.sf[5], dl = s5.plannedCompletion && today > s5.plannedCompletion && DM.status(p) === "ongoing" ? DM.util.diff(s5.plannedCompletion, today) : 0;
      h += '<tr><td class="nowrap small">' + App.esc(s5.agreementNo) + '</td><td><a class="pname" href="#/project/' + p.id + '">' + App.esc(App.pname(p)) + '</a><div class="small">' + App.pidLink(p) + "</div></td><td>" + App.esc(App.blockName(p.block)) + '</td><td class="nowrap">' + App.esc(App.date(s5.agreementDate)) + '</td><td class="num">' + App.moneyT(s5.agreementAmount) + '</td><td class="nowrap">' + App.esc(App.date(s5.plannedCompletion)) + '</td><td style="min-width:110px">' + App.bar(p.physical || 0) + "</td>" +
        (delayCol ? '<td class="num">' + (dl ? '<strong class="age over">' + dl + "</strong>" : DM.isDelayed(p) ? '<span class="age near">' + App.esc(App.t("behind schedule")) + "</span>" : "-") + '</td><td class="small">' + (p.pendingAt ? App.esc(App.desig(p.pendingAt, p)) : "-") + "</td>" : "") + "<td>" + App.pStatusChip(p) + "</td></tr>";
    });
    return h + "</tbody></table></div>";
  }
})();
