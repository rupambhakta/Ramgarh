/* DMFT Work Monitoring Portal, Ramgarh - project register (scope 2 filters) and New Work Request (scope 1, stage 1). */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;

  App.addHi({
    "Project Register": "परियोजना पंजी", "All DMFT works in your jurisdiction with lifecycle stage, status and progress.": "आपके क्षेत्राधिकार के सभी डीएमएफटी कार्य - जीवनचक्र चरण, स्थिति एवं प्रगति सहित।",
    "Search": "खोजें", "Search by ID, name, village, contractor, AA or agreement no.": "आईडी, नाम, ग्राम, संवेदक, प्रशासनिक स्वीकृति या एकरारनामा सं. से खोजें",
    "More filters": "अधिक फ़िल्टर", "Fewer filters": "कम फ़िल्टर", "Clear all": "सभी हटाएँ", "AA no.": "प्रशासनिक स्वीकृति सं.", "Agreement no.": "एकरारनामा सं.",
    "Physical status": "भौतिक स्थिति", "Physical / financial": "भौतिक / वित्तीय", "Block / department": "प्रखंड / विभाग", "Financial status": "वित्तीय स्थिति", "Not started (0%)": "प्रारंभ नहीं (0%)", "Below 30%": "30% से कम", "30% to 59%": "30% से 59%", "60% to 99%": "60% से 99%", "Complete (100%)": "पूर्ण (100%)",
    "Approved (AA granted)": "स्वीकृत (प्रशासनिक स्वीकृति प्राप्त)", "Pending (before AA)": "लंबित (प्रशासनिक स्वीकृति से पूर्व)",
    "{n} projects": "{n} परियोजनाएँ", "Total value": "कुल राशि", "Applied filters": "लागू फ़िल्टर", "Remove filter": "फ़िल्टर हटाएँ",
    "Rows per page": "प्रति पृष्ठ पंक्तियाँ", "Sort by": "क्रमबद्ध करें", "Amount": "राशि", "Physical": "भौतिक", "Financial": "वित्तीय",
    "Project register": "परियोजना पंजी", "Projects list": "परियोजनाओं की सूची", "Page": "पृष्ठ", "Pagination": "पृष्ठांकन",
    // New work request
    "Register a work request received from a recommending authority. On submission it moves to the DMFT Cell for scrutiny.": "अनुशंसाकर्ता प्राधिकारी से प्राप्त कार्य अनुरोध पंजीकृत करें। जमा करने पर यह जाँच हेतु डीएमएफटी सेल को भेजा जाएगा।",
    "Location of work": "कार्य का स्थान", "Work details": "कार्य विवरण", "Recommendation": "अनुशंसा", "Movement remarks": "संचलन टिप्पणी",
    "Select block": "प्रखंड चुनें", "Select panchayat": "पंचायत चुनें", "Select village": "ग्राम चुनें", "Select work type": "कार्य का प्रकार चुनें",
    "Name of work (English)": "कार्य का नाम (अंग्रेज़ी)", "Name of work (Hindi)": "कार्य का नाम (हिन्दी)", "Suggested from work type and village; you may edit.": "कार्य के प्रकार एवं ग्राम से सुझाया गया; संपादित कर सकते हैं।",
    "Department (execution)": "विभाग (निष्पादन)", "PMKKKY sector": "पीएमकेकेकेवाई क्षेत्र", "Auto-selected from work type.": "कार्य के प्रकार से स्वतः चयनित।",
    "Estimated amount (Rs lakh)": "प्राक्कलित राशि (रु. लाख)", "Recommended by": "अनुशंसाकर्ता", "Designation of recommending authority": "अनुशंसाकर्ता का पदनाम",
    "Other (type below)": "अन्य (नीचे लिखें)", "Recommending authority": "अनुशंसाकर्ता प्राधिकारी", "Letter number": "पत्रांक", "Letter date": "पत्र दिनांक",
    "Received letter (scan)": "प्राप्त पत्र (स्कैन)", "PDF or image, up to 10 MB. Only the file details are stored in this prototype.": "पीडीएफ या छवि, अधिकतम 10 एमबी। इस प्रोटोटाइप में केवल फ़ाइल विवरण सहेजे जाते हैं।",
    "Remarks for the DMFT Cell": "डीएमएफटी सेल हेतु टिप्पणी", "required": "आवश्यक", "Submit work request": "कार्य अनुरोध जमा करें", "Save draft": "ड्राफ्ट सहेजें",
    "Please correct the following:": "कृपया निम्न सुधार करें:", "Select a block.": "प्रखंड चुनें।", "Select a panchayat.": "पंचायत चुनें।", "Select a village.": "ग्राम चुनें।",
    "Select a work type.": "कार्य का प्रकार चुनें।", "Enter the name of work.": "कार्य का नाम दर्ज करें।", "Enter the recommending authority.": "अनुशंसाकर्ता दर्ज करें।",
    "Enter the letter number.": "पत्रांक दर्ज करें।", "Enter a valid letter date (not in the future).": "मान्य पत्र दिनांक दर्ज करें (भविष्य की नहीं)।", "Enter an estimated amount above zero.": "शून्य से अधिक प्राक्कलित राशि दर्ज करें।",
    "Attach the received letter.": "प्राप्त पत्र संलग्न करें।", "File is larger than 10 MB.": "फ़ाइल 10 एमबी से बड़ी है।", "Enter remarks.": "टिप्पणी दर्ज करें।",
    "Work request {id} registered and forwarded to {to}.": "कार्य अनुरोध {id} पंजीकृत कर {to} को अग्रसारित किया गया।",
    "Draft saved on this device.": "ड्राफ्ट इस डिवाइस पर सहेजा गया।",
    "What happens next": "आगे क्या होगा", "Request number is generated on submission (WR/RMG/<FY>/<NNNN>).": "जमा करने पर अनुरोध संख्या बनेगी (WR/RMG/<वि.व.>/<NNNN>)।",
    "The file moves to the DMFT Cell; every movement is time-stamped with remarks.": "फ़ाइल डीएमएफटी सेल को जाएगी; प्रत्येक संचलन टिप्पणी एवं समय सहित दर्ज होगा।",
    "Unique Project ID is generated at Administrative Approval (DMFT/RMG/<FY>/<BLOCK>/<NNNN>).": "विशिष्ट परियोजना आईडी प्रशासनिक स्वीकृति पर बनेगी (DMFT/RMG/<वि.व.>/<प्रखंड>/<NNNN>)।",
    "E-mail and SMS alerts go to the officer at whom the file is pending.": "जिस पदाधिकारी के पास फ़ाइल लंबित है उसे ई-मेल एवं एसएमएस अलर्ट जाएगा।",
    "Workflow route for this stage": "इस चरण का कार्यप्रवाह मार्ग", "Illustrative site photo": "उदाहरणार्थ स्थल फोटो", "Recommendation received and verified. Forwarded for scrutiny.": "अनुशंसा प्राप्त एवं सत्यापित। जाँच हेतु अग्रसारित।"
  });

  var WT = { pcc_road: ["PCC road", "पीसीसी पथ"], bridge: ["High-level bridge / culvert", "उच्च स्तरीय पुल / पुलिया"], mvs: ["Solar-powered mini water supply scheme", "सौर ऊर्जा आधारित लघु जलापूर्ति योजना"],
    pipe: ["Piped water supply extension", "पाइप जलापूर्ति विस्तार"], toilet: ["Community sanitary complex", "सामुदायिक स्वच्छता परिसर"], hall: ["Multipurpose community hall", "बहुउद्देशीय सामुदायिक भवन"],
    oldage: ["Day-care centre for the elderly and persons with disabilities", "वृद्धजन एवं दिव्यांगजन डे-केयर केंद्र"], hsc: ["Health sub-centre building", "स्वास्थ्य उप-केंद्र भवन"], equip: ["Medical equipment for Community Health Centre", "सामुदायिक स्वास्थ्य केंद्र हेतु चिकित्सा उपकरण"],
    classrooms: ["Additional classrooms", "अतिरिक्त कक्षा-कक्ष"], smartclass: ["Smart classrooms and science lab", "स्मार्ट क्लास एवं विज्ञान प्रयोगशाला"], checkdam: ["Check dam", "चेक डैम"],
    pond: ["Pond renovation and deepening", "तालाब जीर्णोद्धार एवं गहरीकरण"], skillctr: ["Skill development and livelihood centre", "कौशल विकास एवं आजीविका केंद्र"], plant: ["Green belt plantation", "हरित पट्टी वृक्षारोपण"],
    anganwadi: ["Anganwadi centre building", "आंगनबाड़ी केंद्र भवन"], poshan: ["Nutrition and women's facilitation centre", "पोषण एवं महिला सुविधा केंद्र"], coldstore: ["Farmers' facilitation centre with cold storage", "शीत भंडारण सहित किसान सुविधा केंद्र"],
    drip: ["Drip and sprinkler irrigation", "ड्रिप एवं स्प्रिंकलर सिंचाई"], solarlight: ["Solar street lights", "सोलर स्ट्रीट लाइट"], transformer: ["Distribution transformer augmentation", "वितरण ट्रांसफार्मर क्षमता वृद्धि"] };
  App.workLabel = function (k) { var w = WT[k]; return w ? (App.lang === "hi" ? w[1] : w[0]) : k; };

  var PHYS = [["0-0", "Not started (0%)"], ["0-29.99", "Below 30%"], ["30-59.99", "30% to 59%"], ["60-99.99", "60% to 99%"], ["100-100", "Complete (100%)"]];
  var STATUS_F = function () { return [["approved", App.t("Approved (AA granted)")], ["pending", App.t("Pending (before AA)")]].concat(DM.STATUS_ORDER.map(function (k) { return [k, App.L(DM.STATUS[k])]; })); };
  var MORE = ["pid", "name", "village", "panchayat", "contractor", "aaNo", "agrNo", "stage", "phys", "fin", "sector"];

  function field(id, label, ctl, cls) { return '<div class="field' + (cls ? " " + cls : "") + '"><label for="' + id + '">' + App.esc(App.t(label)) + "</label>" + ctl + "</div>"; }
  function sel(id, opts) { return '<select class="input" id="f_' + id + '" data-f="' + id + '">' + opts + "</select>"; }
  function txt(id, val, ph) { return '<input class="input" type="search" id="f_' + id + '" data-f="' + id + '" value="' + App.esc(val || "") + '"' + (ph ? ' placeholder="' + App.esc(ph) + '"' : "") + ">"; }

  App.view("projects", {
    kind: "officer", perm: "dashboard",
    title: function () { return App.t("Project Register"); },
    render: function (main, route) {
      var q = route.query, f = {};
      App.FILTER_KEYS.forEach(function (k) { if (q[k]) f[k] = q[k]; });
      var more = MORE.some(function (k) { return !!f[k]; }) || q.more === "1";
      var newBtn = App.can("request", "full") ? '<a class="btn" href="#/projects/new">' + App.icon("plus") + App.esc(App.t("New Work Request")) + "</a>" : "";
      main.innerHTML = App.pageHead(App.t("Project Register"), App.esc(App.t("All DMFT works in your jurisdiction with lifecycle stage, status and progress.")),
        '<button class="btn secondary" type="button" data-x="xlsx">' + App.icon("download") + App.esc(App.t("Export Excel")) + '</button><button class="btn secondary" type="button" data-x="print">' + App.icon("print") + App.esc(App.t("Print / PDF")) + "</button>" + newBtn,
        [[App.t("Dashboard"), "#/dashboard"], [App.t("All Projects")]]) +
        '<form class="filters" id="pf" role="search" aria-label="' + App.esc(App.t("Search")) + '">' +
        field("f_q", "Search", txt("q", f.q, App.t("Search by ID, name, village, contractor, AA or agreement no.")), "span2") +
        field("f_block", "Block", sel("block", App.blockOpts(f.block))) +
        field("f_dept", "Department", sel("dept", App.deptOpts(f.dept))) +
        field("f_fy", "Financial Year", sel("fy", App.fyOpts(f.fy))) +
        field("f_status", "Status", sel("status", App.opts(STATUS_F(), f.status))) +
        '<div class="more-f span-all" ' + (more ? "" : "hidden") + ' id="moreF"><div class="filters-inner">' +
        field("f_pid", "Project ID", txt("pid", f.pid)) +
        field("f_name", "Project name", txt("name", f.name)) +
        field("f_village", "Village", txt("village", f.village)) +
        field("f_panchayat", "Panchayat", sel("panchayat", App.panchayatOpts(f.block, f.panchayat))) +
        field("f_contractor", "Contractor", sel("contractor", App.contractorOpts(f.contractor))) +
        field("f_sector", "Sector", sel("sector", App.sectorOpts(f.sector))) +
        field("f_aaNo", "AA no.", txt("aaNo", f.aaNo)) +
        field("f_agrNo", "Agreement no.", txt("agrNo", f.agrNo)) +
        field("f_stage", "Stage", sel("stage", App.stageOpts(f.stage))) +
        field("f_phys", "Physical status", sel("phys", App.opts(PHYS.map(function (x) { return [x[0], App.t(x[1])]; }), f.phys))) +
        field("f_fin", "Financial status", sel("fin", App.opts(PHYS.map(function (x) { return [x[0], App.t(x[1])]; }), f.fin))) +
        "</div></div>" +
        '<div class="f-actions span-all"><button type="button" class="btn ghost sm" id="moreBtn" aria-expanded="' + more + '" aria-controls="moreF">' + App.icon("filter", "sm") + App.esc(App.t(more ? "Fewer filters" : "More filters")) + '</button><button type="button" class="btn ghost sm" id="clrBtn">' + App.esc(App.t("Clear all")) + "</button></div></form>" +
        '<div id="pChips"></div><div id="pRes"></div>';

      var form = main.querySelector("#pf"), state = { sort: q.sort || "", dir: q.dir || "asc", page: +(q.page || 1), size: +(q.size || 20) };
      function read() { var o = {}; App.qsa("[data-f]", form).forEach(function (el) { if (el.value) o[el.getAttribute("data-f")] = el.value; }); return o; }
      function sync() {
        var o = read(); if (state.sort) { o.sort = state.sort; o.dir = state.dir; } if (state.page > 1) o.page = state.page; if (state.size !== 20) o.size = state.size;
        if (!main.querySelector("#moreF").hidden) o.more = "1";
        App.setQuery(o); draw(o);
      }
      var deb = App.debounce(function () { state.page = 1; sync(); }, 250);
      form.addEventListener("input", function (e) { if (e.target.matches("input")) deb(); });
      form.addEventListener("change", function (e) {
        if (e.target.matches("select")) {
          if (e.target.id === "f_block") main.querySelector("#f_panchayat").innerHTML = App.panchayatOpts(e.target.value, "");
          state.page = 1; sync();
        }
      });
      form.addEventListener("submit", function (e) { e.preventDefault(); sync(); });
      main.querySelector("#moreBtn").addEventListener("click", function () {
        var m = main.querySelector("#moreF"); m.hidden = !m.hidden; this.setAttribute("aria-expanded", String(!m.hidden));
        this.innerHTML = App.icon("filter", "sm") + App.esc(App.t(m.hidden ? "More filters" : "Fewer filters"));
      });
      main.querySelector("#clrBtn").addEventListener("click", function () { App.qsa("[data-f]", form).forEach(function (el) { el.value = ""; }); state.page = 1; sync(); });
      main.querySelector("[data-x=xlsx]").addEventListener("click", function () { exportList(App.filterProjects(App.scoped(), read())); });
      main.querySelector("[data-x=print]").addEventListener("click", App.print);

      function label(k, v) {
        if (k === "block") return App.blockName(v); if (k === "dept") return App.deptShort(v); if (k === "contractor") return App.contractorName(v);
        if (k === "sector") return App.sectorName(v); if (k === "stage") return App.stageName(+v);
        if (k === "status") { var s = STATUS_F().filter(function (x) { return x[0] === v; })[0]; return s ? s[1] : v; }
        if (k === "phys" || k === "fin") { var r = PHYS.filter(function (x) { return x[0] === v; })[0]; return r ? App.t(r[1]) : v; }
        return v;
      }
      var LBL = { q: "Search", pid: "Project ID", name: "Project name", village: "Village", panchayat: "Panchayat", block: "Block", dept: "Department", contractor: "Contractor", fy: "Financial Year", aaNo: "AA no.", agrNo: "Agreement no.", status: "Status", phys: "Physical status", fin: "Financial status", sector: "Sector", stage: "Stage" };

      function draw(o) {
        var list = App.filterProjects(App.scoped(), o);
        var keys = Object.keys(o).filter(function (k) { return LBL[k]; });
        main.querySelector("#pChips").innerHTML = keys.length ? '<div class="chips-row"><span>' + App.esc(App.t("Applied filters")) + ":</span>" + keys.map(function (k) { return '<button type="button" class="chip plain fchip" data-rm="' + k + '" aria-label="' + App.esc(App.t("Remove filter")) + ": " + App.esc(App.t(LBL[k])) + '">' + App.esc(App.t(LBL[k])) + ": " + App.esc(label(k, o[k])) + " " + App.icon("close", "sm") + "</button>"; }).join("") + "</div>" : "";
        App.qsa("[data-rm]", main).forEach(function (b) { b.addEventListener("click", function () { var el = main.querySelector('[data-f="' + b.getAttribute("data-rm") + '"]'); if (el) el.value = ""; state.page = 1; sync(); }); });
        sortList(list, state.sort, state.dir);
        var total = 0; list.forEach(function (p) { total += DM.amount(p); });
        var pages = Math.max(1, Math.ceil(list.length / state.size)); if (state.page > pages) state.page = pages;
        var a = (state.page - 1) * state.size, slice = list.slice(a, a + state.size);
        function th(k, lbl, cls) {
          var cur = state.sort === k, srt = cur ? (state.dir === "asc" ? "ascending" : "descending") : "none";
          return '<th scope="col"' + (cls ? ' class="' + cls + '"' : "") + ' aria-sort="' + srt + '"><button type="button" class="th-sort" data-sort="' + k + '">' + App.esc(App.t(lbl)) + '<span class="sort-ic" aria-hidden="true">' + (cur ? (state.dir === "asc" ? "▲" : "▼") : "↕") + "</span></button></th>";
        }
        var h = '<div class="res-head"><p class="mb0" aria-live="polite"><strong>' + App.esc(App.tf("{n} projects", { n: App.n(list.length) })) + '</strong> <span class="muted">| ' + App.esc(App.t("Total value")) + ": " + App.moneyT(total) + "</span></p></div>";
        h += '<div class="table-wrap" tabindex="0" aria-label="' + App.esc(App.t("Projects list")) + '"><table class="data"><caption class="sr-only">' + App.esc(App.t("Project register")) + "</caption><thead><tr>" +
          th("id", "Project ID") + th("name", "Project name") + th("block", "Block / department") + th("stage", "Stage") + th("status", "Status") + th("amount", "Amount", "num") + th("phys", "Physical / financial") + th("pending", "Pending at") + "</tr></thead><tbody>";
        if (!slice.length) h += '<tr><td colspan="8" class="empty">' + App.esc(App.t("No records match the selected filters.")) + "</td></tr>";
        slice.forEach(function (p) {
          var age = p.pendingSince ? App.ago(p.pendingSince) : null;
          h += "<tr><td>" + App.pidLink(p) + '</td><td class="pn"><a class="pname" href="#/project/' + p.id + '">' + App.esc(App.pname(p)) + '</a><div class="small muted">' + App.esc(App.villageName(p)) + ", " + App.esc(App.panchayatName(p)) + "</div></td><td class=\"bd\">" + App.esc(App.blockName(p.block)) + '<div class="small muted">' + App.esc(App.deptShort(p.dept)) + '</div></td><td class="small stg-c"><span class="stg-n">' + p.stage + "</span> " + App.esc(App.stageShort(p.stage)) + "</td><td>" + App.pStatusChip(p) + '</td><td class="num">' + App.moneyT(DM.amount(p)) + '</td><td class="bc"><span class="bl">' + App.esc(App.t("Physical")) + "</span>" + App.bar(p.physical || 0) + '<span class="bl">' + App.esc(App.t("Financial")) + "</span>" + App.bar(DM.finPct(p), true) + '</td><td class="small pa">' + (p.pendingAt ? App.esc(App.desig(p.pendingAt, p)) + '<div class="muted">' + age + " " + App.esc(App.t("days")) + "</div>" : '<span class="muted">-</span>') + "</td></tr>";
        });
        h += "</tbody></table></div>";
        h += '<nav class="pager" aria-label="' + App.esc(App.t("Pagination")) + '"><span>' + App.esc(App.tf("Showing {a}-{b} of {n}", { a: list.length ? a + 1 : 0, b: Math.min(a + state.size, list.length), n: list.length })) + '</span><span class="pg-btns">' +
          '<label class="small" for="pgSize">' + App.esc(App.t("Rows per page")) + '</label> <select id="pgSize" class="input" style="width:auto;min-height:30px;padding:2px 6px">' + [10, 20, 50, 100].map(function (n) { return "<option" + (n === state.size ? " selected" : "") + ">" + n + "</option>"; }).join("") + "</select>" +
          '<button type="button" class="btn secondary sm" data-pg="prev"' + (state.page <= 1 ? " disabled" : "") + ">" + App.icon("chev-left", "sm") + App.esc(App.t("Previous")) + "</button>" +
          '<span class="small" style="align-self:center">' + App.esc(App.t("Page")) + " " + state.page + " / " + pages + "</span>" +
          '<button type="button" class="btn secondary sm" data-pg="next"' + (state.page >= pages ? " disabled" : "") + ">" + App.esc(App.t("Next")) + App.icon("chev-right", "sm") + "</button></span></nav>";
        var res = main.querySelector("#pRes"); res.innerHTML = h;
        App.qsa("[data-sort]", res).forEach(function (b) { b.addEventListener("click", function () { var k = b.getAttribute("data-sort"); if (state.sort === k) state.dir = state.dir === "asc" ? "desc" : "asc"; else { state.sort = k; state.dir = (k === "amount" || k === "phys" || k === "fin" || k === "pending") ? "desc" : "asc"; } sync(); var nb = main.querySelector('[data-sort="' + k + '"]'); if (nb) nb.focus(); }); });
        App.qsa("[data-pg]", res).forEach(function (b) { b.addEventListener("click", function () { state.page += b.getAttribute("data-pg") === "next" ? 1 : -1; sync(); }); });
        res.querySelector("#pgSize").addEventListener("change", function () { state.size = +this.value; state.page = 1; sync(); });
      }
      draw(f);
    }
  });

  var ORDER = {}; DM.STATUS_ORDER.forEach(function (k, i) { ORDER[k] = i; });
  function sortList(list, k, dir) {
    if (!k) return list;
    var m = dir === "desc" ? -1 : 1;
    function v(p) {
      switch (k) {
        case "id": return DM.displayId(p); case "name": return App.pname(p); case "block": return App.blockName(p.block); case "dept": return App.deptShort(p.dept);
        case "fy": return p.fy; case "stage": return p.stage; case "status": return ORDER[DM.dstatus(p)]; case "amount": return DM.amount(p);
        case "phys": return p.physical || 0; case "fin": return DM.finPct(p); case "pending": return p.pendingSince ? -Date.parse(p.pendingSince) : -Infinity;
      }
      return 0;
    }
    return list.sort(function (a, b) { var x = v(a), y = v(b); return (x < y ? -1 : x > y ? 1 : 0) * m; });
  }

  function exportList(list) {
    var rows = [[App.t("Project ID"), App.t("Request No."), App.t("Project name"), App.t("Block"), App.t("Panchayat"), App.t("Village"), App.t("Department"), App.t("Sector"), App.t("FY"), App.t("Stage"), App.t("Status"),
      App.t("Approved amount") + " (Rs)", App.t("Expenditure") + " (Rs)", App.t("Physical progress") + " %", App.t("Financial progress") + " %", App.t("Contractor"), App.t("AA no."), App.t("Agreement no."), App.t("Pending at"), App.t("Pending since")]];
    list.forEach(function (p) {
      rows.push([p.uid || "", p.reqNo, App.pname(p), App.blockName(p.block), App.panchayatName(p), App.villageName(p), App.deptName(p.dept), App.sectorName(p.sector), p.fy, p.stage + ". " + App.stageName(p.stage), App.L(DM.STATUS[DM.dstatus(p)]),
        DM.amount(p), DM.expenditure(p), p.physical || 0, DM.finPct(p), p.sf[5] && p.sf[5].contractor ? App.contractorName(p.sf[5].contractor) : "", (p.sf[4] && p.sf[4].aaNo) || "", (p.sf[5] && p.sf[5].agreementNo) || "", p.pendingAt ? App.desig(p.pendingAt, p) : "", p.pendingSince ? p.pendingSince.replace("T", " ").slice(0, 16) : ""]);
    });
    App.exportXlsx("DMFT-Ramgarh_Project-Register_" + App.today() + ".xlsx", [{ name: App.t("Project register"), rows: rows }], App.t("Project register"));
  }

  // ---------------- New Work Request (stage 1) ----------------
  App.view("newRequest", {
    kind: "officer", perm: "request",
    title: function () { return App.t("New Work Request"); },
    render: function (main) {
      var today = App.today();
      var wOpts = '<option value="">' + App.esc(App.t("Select work type")) + "</option>";
      DM.DEPTS.forEach(function (d) {
        var ws = DM.WORKS.filter(function (w) { return w.d === d.code; }); if (!ws.length) return;
        wOpts += '<optgroup label="' + App.esc(App.L(d)) + '">' + ws.map(function (w) { return '<option value="' + w.k + '">' + App.esc(App.workLabel(w.k)) + "</option>"; }).join("") + "</optgroup>";
      });
      var recOpts = '<option value="">' + App.esc(App.t("Recommending authority")) + "</option>" + DM.RECOMMENDERS.map(function (r, i) { return '<option value="' + i + '">' + App.esc(App.L(r).replace(/\{[pbv]\}/g, "...")) + "</option>"; }).join("") + '<option value="other">' + App.esc(App.t("Other (type below)")) + "</option>";
      var req = ' <span class="req">(' + App.esc(App.t("required")) + ")</span>";
      function F(id, label, ctl, cls, hint) { return '<div class="field' + (cls ? " " + cls : "") + '"><label for="' + id + '">' + App.esc(App.t(label)) + (ctl.indexOf("data-req") >= 0 ? req : "") + "</label>" + ctl + (hint ? '<span class="hint" id="' + id + '_h">' + App.esc(App.t(hint)) + "</span>" : "") + '<span class="err" id="' + id + '_e" hidden></span></div>'; }
      var chain = DM.CHAIN[1].map(function (k) { return App.esc(App.desig(k)); }).join(' <span aria-hidden="true">&rarr;</span> ');
      main.innerHTML = App.pageHead(App.t("New Work Request"), App.esc(App.t("Register a work request received from a recommending authority. On submission it moves to the DMFT Cell for scrutiny.")), "",
        [[App.t("Dashboard"), "#/dashboard"], [App.t("All Projects"), "#/projects"], [App.t("New Work Request")]]) +
        '<div class="grid g-3-2 nr-grid"><form id="wr" novalidate><div id="errSum" class="note err" role="alert" tabindex="-1" hidden></div>' +
        '<fieldset class="fs"><legend>' + App.esc(App.t("Location of work")) + '</legend><div class="form-grid">' +
        F("wBlock", "Block", '<select class="input" id="wBlock" data-req>' + App.blockOpts("", App.t("Select block")) + "</select>") +
        F("wPan", "Panchayat", '<select class="input" id="wPan" data-req disabled><option value="">' + App.esc(App.t("Select panchayat")) + "</option></select>") +
        F("wVil", "Village", '<select class="input" id="wVil" data-req disabled><option value="">' + App.esc(App.t("Select village")) + "</option></select>") +
        "</div></fieldset>" +
        '<fieldset class="fs"><legend>' + App.esc(App.t("Work details")) + '</legend><div class="form-grid">' +
        F("wType", "Work type", '<select class="input" id="wType" data-req>' + wOpts + "</select>") +
        F("wDept", "Department (execution)", '<select class="input" id="wDept">' + App.deptOpts("", "-") + "</select>", "", "Auto-selected from work type.") +
        F("wSec", "PMKKKY sector", '<select class="input" id="wSec">' + App.sectorOpts("", "-") + "</select>") +
        F("wName", "Name of work (English)", '<input class="input" id="wName" data-req maxlength="200">', "span2", "Suggested from work type and village; you may edit.") +
        F("wAmt", "Estimated amount (Rs lakh)", '<input class="input" id="wAmt" type="number" min="0.1" step="0.01" data-req inputmode="decimal">') +
        F("wNameHi", "Name of work (Hindi)", '<input class="input" id="wNameHi" lang="hi" maxlength="200">', "span3") +
        "</div></fieldset>" +
        '<fieldset class="fs"><legend>' + App.esc(App.t("Recommendation")) + '</legend><div class="form-grid">' +
        F("wRec", "Recommended by", '<select class="input" id="wRec" data-req>' + recOpts + "</select>") +
        F("wRecD", "Designation of recommending authority", '<input class="input" id="wRecD" data-req maxlength="160">', "span2") +
        F("wLno", "Letter number", '<input class="input" id="wLno" data-req maxlength="60" placeholder="214/KUJU/' + today.slice(0, 4) + '">') +
        F("wLdt", "Letter date", '<input class="input" id="wLdt" type="date" data-req max="' + today + '" value="' + today + '">') +
        F("wFile", "Received letter (scan)", '<input class="input" id="wFile" type="file" data-req accept=".pdf,.jpg,.jpeg,.png">', "", "PDF or image, up to 10 MB. Only the file details are stored in this prototype.") +
        "</div></fieldset>" +
        '<fieldset class="fs"><legend>' + App.esc(App.t("Movement remarks")) + '</legend><div class="form-grid">' +
        F("wRem", "Remarks for the DMFT Cell", '<textarea class="input" id="wRem" data-req maxlength="500">' + App.esc(App.t("Recommendation received and verified. Forwarded for scrutiny.")) + "</textarea>", "span3") +
        '</div></fieldset><div class="form-actions"><a class="btn secondary" href="#/projects">' + App.esc(App.t("Cancel")) + '</a><button class="btn lg" type="submit">' + App.icon("send") + App.esc(App.t("Submit work request")) + "</button></div></form>" +
        '<aside class="stack"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("What happens next")) + '</h2></div><ol class="next-list">' +
        ["Request number is generated on submission (WR/RMG/<FY>/<NNNN>).", "The file moves to the DMFT Cell; every movement is time-stamped with remarks.", "Unique Project ID is generated at Administrative Approval (DMFT/RMG/<FY>/<BLOCK>/<NNNN>).", "E-mail and SMS alerts go to the officer at whom the file is pending."].map(function (s) { return "<li>" + App.esc(App.t(s)) + "</li>"; }).join("") +
        '</ol></div><div class="card"><div class="card-head"><h2>' + App.esc(App.t("Workflow route for this stage")) + '</h2></div><p class="small mb0">' + chain + "</p></div>" +
        '<div class="card nr-preview" id="nrPrev" hidden><img id="nrImg" alt="" hidden><div class="small muted" id="nrPrevT"></div></div></aside></div>';

      var $ = function (id) { return main.querySelector("#" + id); };
      $("wBlock").addEventListener("change", function () {
        var b = DM.block(this.value);
        $("wPan").innerHTML = '<option value="">' + App.esc(App.t("Select panchayat")) + "</option>" + (b ? b.panchayats.map(function (p) { return '<option value="' + App.esc(p.en) + '">' + App.esc(App.L(p)) + "</option>"; }).join("") : "");
        $("wPan").disabled = !b; $("wVil").innerHTML = '<option value="">' + App.esc(App.t("Select village")) + "</option>"; $("wVil").disabled = true; suggest();
      });
      $("wPan").addEventListener("change", function () {
        var pn = pan();
        $("wVil").innerHTML = '<option value="">' + App.esc(App.t("Select village")) + "</option>" + (pn ? pn.villages.map(function (v) { return '<option value="' + App.esc(v.en) + '">' + App.esc(App.L(v)) + "</option>"; }).join("") : "");
        $("wVil").disabled = !pn; suggest();
      });
      function pan() { var b = DM.block($("wBlock").value); return b ? b.panchayats.filter(function (p) { return p.en === $("wPan").value; })[0] : null; }
      function vil() { var p = pan(); return p ? p.villages.filter(function (v) { return v.en === $("wVil").value; })[0] : null; }
      var userEdited = false, userEditedHi = false;
      $("wName").addEventListener("input", function () { userEdited = true; });
      $("wNameHi").addEventListener("input", function () { userEditedHi = true; });
      function suggest() {
        var w = DM.work($("wType").value), b = DM.block($("wBlock").value), v = vil(), p = pan();
        if (w) { $("wDept").value = w.d; $("wSec").value = w.s; if (!$("wAmt").value) $("wAmt").value = Math.round((w.a[0] + w.a[1]) / 2 * 100) / 100; }
        if (w && v && b) {
          var other = p.villages.filter(function (x) { return x.en !== v.en; })[0] || v;
          if (!userEdited) $("wName").value = w.en.replace("{v}", v.en).replace("{v2}", other.en).replace("{b}", b.en);
          if (!userEditedHi) $("wNameHi").value = w.hi.replace("{v}", v.hi).replace("{v2}", other.hi).replace("{b}", b.hi);
          $("nrImg").src = App.photo({ id: "NEW", workKey: w.k, loc: b.center, uid: null, reqNo: "WR/RMG/" + DM.FYS()[2] + "/----" }, 0, "before", {}); $("nrImg").hidden = false; $("nrPrev").hidden = false;
          $("nrImg").alt = App.t("Sample site photo");
          $("nrPrevT").textContent = App.t("Illustrative site photo") + " - " + App.workLabel(w.k);
        }
        recFill();
      }
      function recFill() {
        var r = $("wRec").value, b = DM.block($("wBlock").value), p = pan(), v = vil();
        if (r === "" || r === "other") { if (r === "other" && !$("wRecD").dataset.touched) $("wRecD").value = ""; return; }
        var t = DM.RECOMMENDERS[+r];
        if (!$("wRecD").dataset.touched) $("wRecD").value = App.L(t).replace("{p}", p ? App.L(p) : "...").replace("{b}", b ? App.L(b) : "...").replace("{v}", v ? App.L(v) : "...");
      }
      $("wType").addEventListener("change", suggest); $("wVil").addEventListener("change", suggest);
      $("wRec").addEventListener("change", function () { $("wRecD").dataset.touched = ""; recFill(); });
      $("wRecD").addEventListener("input", function () { this.dataset.touched = "1"; });

      $("wr").addEventListener("submit", function (e) {
        e.preventDefault();
        var errs = [];
        function chk(id, ok, msg) { var el = $(id), er = $(id + "_e"); el.setAttribute("aria-invalid", ok ? "false" : "true"); if (er) { er.hidden = ok; er.textContent = ok ? "" : App.t(msg); } if (er) el.setAttribute("aria-describedby", id + "_e" + ($(id + "_h") ? " " + id + "_h" : "")); if (!ok) errs.push([id, App.t(msg)]); }
        chk("wBlock", !!$("wBlock").value, "Select a block.");
        chk("wPan", !!$("wPan").value, "Select a panchayat.");
        chk("wVil", !!$("wVil").value, "Select a village.");
        chk("wType", !!$("wType").value, "Select a work type.");
        chk("wName", $("wName").value.trim().length > 4, "Enter the name of work.");
        chk("wAmt", +$("wAmt").value > 0, "Enter an estimated amount above zero.");
        chk("wRec", !!$("wRec").value, "Enter the recommending authority.");
        chk("wRecD", $("wRecD").value.trim().length > 2, "Enter the recommending authority.");
        chk("wLno", $("wLno").value.trim().length > 0, "Enter the letter number.");
        chk("wLdt", /^\d{4}-\d{2}-\d{2}$/.test($("wLdt").value) && $("wLdt").value <= today, "Enter a valid letter date (not in the future).");
        var file = $("wFile").files && $("wFile").files[0];
        chk("wFile", !!file && file.size <= 10 * 1024 * 1024, !file ? "Attach the received letter." : "File is larger than 10 MB.");
        chk("wRem", $("wRem").value.trim().length > 0, "Enter remarks.");
        var sum = $("errSum");
        if (errs.length) {
          sum.hidden = false;
          sum.innerHTML = App.icon("warning") + "<div><strong>" + App.esc(App.t("Please correct the following:")) + "</strong><ul>" + errs.map(function (x) { return '<li><a href="#' + x[0] + '" data-jump="' + x[0] + '">' + App.esc(x[1]) + "</a></li>"; }).join("") + "</ul></div>";
          App.qsa("[data-jump]", sum).forEach(function (a) { a.addEventListener("click", function (ev) { ev.preventDefault(); $(a.getAttribute("data-jump")).focus(); }); });
          sum.focus(); return;
        }
        sum.hidden = true;
        var p = create(file);
        App.toast(App.tf("Work request {id} registered and forwarded to {to}.", { id: p.reqNo, to: App.desig(p.pendingAt, p) }));
        App.go("#/project/" + p.id + "?tab=movement");
      });

      function create(file) {
        var db = App.db, fy = DM.FYS()[2], b = DM.block($("wBlock").value), pn = pan(), v = vil(), w = DM.work($("wType").value), now = App.nowTs();
        var maxN = 0; db.projects.forEach(function (x) { var n = +String(x.id).slice(1); if (n > maxN) maxN = n; });
        var id = "P" + DM.util.pad(maxN + 1, 3), loc = b.center.slice();
        for (var k = 0; k < 60; k++) { var c = [b.center[0] + (Math.random() - 0.5) * 0.09, b.center[1] + (Math.random() - 0.5) * 0.09]; if (DM.inPoly(c, b.poly)) { loc = [+c[0].toFixed(5), +c[1].toFixed(5)]; break; } }
        var recD = $("wRecD").value.trim(), nameEn = $("wName").value.trim(), nameHi = $("wNameHi").value.trim() || nameEn, est = Math.round(+$("wAmt").value * 1e5);
        var p = { id: id, reqNo: DM.nextReq(db, fy), uid: null, fy: fy, block: b.code, panchayat: pn.en, village: v.en, workKey: w.k, dept: $("wDept").value || w.d, sector: $("wSec").value || w.s,
          name: { en: nameEn, hi: nameHi }, estimate: est, loc: loc, stage: 1, sf: {}, movements: [], progress: [], payments: [], docs: [], physical: 0, created: App.today(), userCreated: true };
        p.sf[1] = { block: { en: b.en, hi: b.hi }, panchayat: { en: pn.en, hi: pn.hi }, village: { en: v.en, hi: v.hi }, workType: w.t, workName: p.name, recBy: { en: recD, hi: recD }, recDesig: { en: recD, hi: recD },
          letterNo: $("wLno").value.trim(), letterDate: $("wLdt").value, letterFile: file.name };
        var ch = DM.CHAIN[1];
        p.wf = { stage: 1, idx: 1, returnedFrom: null }; p.pendingAt = ch[1]; p.pendingSince = now;
        p.movements.push({ id: 1, ts: now, stage: 1, action: "submit", f: ch[0], t: ch[1], r: $("wRem").value.trim(), u: App.session ? App.session.username : "-" });
        var ext = (file.name.split(".").pop() || "pdf").toLowerCase();
        p.docs.push({ id: "D1", cat: "rec", name: file.name, type: ext, mime: file.type, access: "internal", versions: [{ v: 1, date: App.today(), by: "deo", size: file.size, note: "up", u: App.session ? App.session.username : "-" }] });
        db.projects.push(p);
        App.notify("file", p, p.pendingAt, ["email", "sms"]);
        App.log("submit", { en: "New work request " + p.reqNo, hi: "नया कार्य अनुरोध " + p.reqNo }, p.id);
        App.save();
        return p;
      }
    }
  });
})();
