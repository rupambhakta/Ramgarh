/* GIS map (scope item 3): district map with status-coloured markers, filters, block / panchayat distribution, project-wise view. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Project locations on the district map, coloured by status. Click a marker for details and the latest geo-tagged photo.": "जिला मानचित्र पर परियोजना स्थान, स्थिति अनुसार रंगीन। विवरण एवं नवीनतम जियो-टैग फोटो हेतु मार्कर पर क्लिक करें।",
    "Work category": "कार्य श्रेणी", "Blocks": "प्रखंड", "Panchayats": "पंचायतें", "Project list": "परियोजना सूची", "On map": "मानचित्र पर",
    "Approved value": "स्वीकृत मूल्य", "Delayed": "विलंबित", "Completed": "पूर्ण", "Ongoing": "प्रगतिरत", "Projects": "परियोजनाएँ",
    "Block-wise distribution": "प्रखंडवार वितरण", "Panchayat-wise distribution": "पंचायतवार वितरण", "Select a project to locate it on the map.": "मानचित्र पर देखने हेतु परियोजना चुनें।",
    "Project-wise map view": "परियोजनावार मानचित्र दृश्य", "Show all": "सभी दिखाएँ", "Search": "खोजें", "Use the layer button (top right of the map) to switch base map or show the panchayat distribution layer.": "बेस मानचित्र बदलने या पंचायत वितरण परत दिखाने हेतु मानचित्र के ऊपर दाईं ओर परत बटन का उपयोग करें।"
  });
  var FK = ["block", "sector", "dept", "status", "q"];

  App.view("map", {
    kind: "officer", perm: "dashboard",
    title: function () { return App.t("GIS Map"); },
    render: function (main, route) {
      var q = route.query, f = {}; FK.forEach(function (k) { f[k] = q[k] || ""; });
      var focusP = q.pid ? DM.byId(App.db, q.pid) : null;
      if (focusP && !f.block && !f.q) { /* project-wise view keeps all markers but focuses the chosen one */ }
      var tab = q.side || (focusP ? "list" : "blocks");
      main.innerHTML = App.pageHead(App.t("GIS Map"), App.esc(App.t("Project locations on the district map, coloured by status. Click a marker for details and the latest geo-tagged photo.")), "", [[App.t("Home"), "#/dashboard"], [App.t("GIS Map"), ""]]) +
        '<form class="filters gis-filters" id="gF">' +
        '<div class="field"><label for="g_block">' + App.esc(App.t("Block")) + '</label><select class="input" id="g_block" name="block">' + App.blockOpts(f.block) + "</select></div>" +
        '<div class="field"><label for="g_sector">' + App.esc(App.t("Work category")) + '</label><select class="input" id="g_sector" name="sector">' + App.sectorOpts(f.sector) + "</select></div>" +
        '<div class="field"><label for="g_dept">' + App.esc(App.t("Department")) + '</label><select class="input" id="g_dept" name="dept">' + App.deptOpts(f.dept) + "</select></div>" +
        '<div class="field"><label for="g_status">' + App.esc(App.t("Status")) + '</label><select class="input" id="g_status" name="status">' + App.statusOpts(f.status) + "</select></div>" +
        '<div class="field"><label for="g_q">' + App.esc(App.t("Search")) + '</label><input class="input" type="search" id="g_q" name="q" value="' + App.esc(f.q) + '" placeholder="' + App.esc(App.t("Search project ID, name, village")) + '"></div></form>' +
        '<div class="gis-grid"><div><div class="map gis-map" id="gMap" role="region" aria-label="' + App.esc(App.t("GIS Map")) + '"></div>' +
        '<p class="map-cap">' + App.icon("info", "sm") + "<span>" + App.esc(App.t("Schematic boundaries - sample. Block outlines are approximate and drawn for demonstration; the live portal uses official district / block / panchayat GIS layers.")) + " " + App.esc(App.t("Use the layer button (top right of the map) to switch base map or show the panchayat distribution layer.")) + "</span></p></div>" +
        '<div class="card gis-side"><div class="tabs" role="tablist">' +
        tabBtn("blocks", "Blocks") + tabBtn("panch", "Panchayats") + tabBtn("list", "Project list") + '</div><div class="gs-body" id="gSide"></div></div></div>';
      function tabBtn(k, l) { return '<button type="button" role="tab" data-tab="' + k + '" aria-selected="' + (tab === k) + '">' + App.esc(App.t(l)) + (k === "list" ? ' <span class="pill-n" id="gN"></span>' : "") + "</button>"; }
      var api = App.makeMap(main.querySelector("#gMap"), {});
      var form = main.querySelector("#gF"), list = [];
      function read() { var o = {}; FK.forEach(function (k) { o[k] = form.elements[k].value.trim(); }); return o; }
      function update(fit) {
        var fv = read(); list = App.filterProjects(App.scoped(), fv);
        var qq = {}; FK.forEach(function (k) { if (fv[k]) qq[k] = fv[k]; }); if (tab !== "blocks") qq.side = tab; App.setQuery(qq);
        if (api) api.setProjects(list, fit);
        main.querySelector("#gN").textContent = list.length;
        side();
      }
      function side() {
        var box = main.querySelector("#gSide"), h = "";
        if (tab === "blocks") {
          var k = DM.kpis(list, App.db);
          h += '<div class="gis-stat"><div><b>' + k.total + "</b><span>" + App.esc(App.t("On map")) + "</span></div><div><b>" + App.money(k.approvedAmount) + "</b><span>" + App.esc(App.t("Approved value")) + '</span></div><div><b style="color:var(--danger)">' + k.delayed + "</b><span>" + App.esc(App.t("Delayed")) + "</span></div></div>";
          h += '<h2 class="gis-h">' + App.esc(App.t("Block-wise distribution")) + '</h2><table class="data gis-dist"><thead><tr><th scope="col">' + App.esc(App.t("Block")) + '</th><th class="num" scope="col">' + App.esc(App.t("Projects")) + '</th><th class="num" scope="col">' + App.esc(App.t("Ongoing")) + '</th><th class="num" scope="col">' + App.esc(App.t("Completed")) + '</th><th class="num" scope="col">' + App.esc(App.t("Delayed")) + "</th></tr></thead><tbody>";
          DM.BLOCKS.forEach(function (b) {
            var ps = list.filter(function (p) { return p.block === b.code; }), kk = DM.kpis(ps, App.db);
            h += '<tr><td><a href="#" data-blk="' + b.code + '">' + App.esc(App.L(b)) + '</a></td><td class="num">' + ps.length + '</td><td class="num">' + kk.ongoing + '</td><td class="num">' + kk.completed + '</td><td class="num' + (kk.delayed ? ' pd-over' : "") + '">' + kk.delayed + "</td></tr>";
          });
          h += "</tbody></table>";
          h += '<h2 class="gis-h">' + App.esc(App.t("Status")) + '</h2><ul class="mini-list">' + DM.STATUS_ORDER.map(function (s) { var n = list.filter(function (p) { return DM.dstatus(p) === s; }).length; return n ? '<li><span><i class="sw-dot" style="background:' + DM.STATUS[s].color + '"></i>' + App.esc(App.L(DM.STATUS[s])) + "</span><strong>" + n + "</strong></li>" : ""; }).join("") + "</ul>";
        } else if (tab === "panch") {
          var rows = [];
          DM.BLOCKS.forEach(function (b) { b.panchayats.forEach(function (pp) { var ps = list.filter(function (p) { return p.block === b.code && p.panchayat === pp.en; }); if (ps.length) { var kk = DM.kpis(ps, App.db); rows.push([b, pp, ps.length, kk.ongoing, kk.completed, kk.delayed]); } }); });
          rows.sort(function (a, c) { return c[2] - a[2]; });
          h += '<h2 class="gis-h">' + App.esc(App.t("Panchayat-wise distribution")) + '</h2><table class="data gis-dist"><thead><tr><th scope="col">' + App.esc(App.t("Panchayat")) + '</th><th class="num" scope="col">' + App.esc(App.t("Projects")) + '</th><th class="num" scope="col">' + App.esc(App.t("Ongoing")) + '</th><th class="num" scope="col">' + App.esc(App.t("Completed")) + '</th><th class="num" scope="col">' + App.esc(App.t("Delayed")) + "</th></tr></thead><tbody>" +
            rows.map(function (r) { return "<tr><td><strong>" + App.esc(App.L(r[1])) + '</strong><br><span class="small muted">' + App.esc(App.L(r[0])) + '</span></td><td class="num">' + r[2] + '</td><td class="num">' + r[3] + '</td><td class="num">' + r[4] + '</td><td class="num' + (r[5] ? " pd-over" : "") + '">' + r[5] + "</td></tr>"; }).join("") + "</tbody></table>";
        } else {
          if (!list.length) h = '<p class="empty">' + App.esc(App.t("No records match the selected filters.")) + "</p>";
          else {
            var sorted = list.slice().sort(function (a, c) { return (focusP && a.id === focusP.id ? -1 : focusP && c.id === focusP.id ? 1 : 0) || (DM.isDelayed(c) - DM.isDelayed(a)) || a.block.localeCompare(c.block); });
            h += '<p class="small muted" style="margin:10px 0 4px">' + App.esc(App.t("Select a project to locate it on the map.")) + '</p><ul class="gis-plist">' + sorted.map(function (p) {
              return '<li><button type="button" data-pid="' + p.id + '"' + (focusP && focusP.id === p.id ? ' aria-current="true"' : "") + '><span class="dot" style="background:' + App.statusColor(p) + '"></span><span><strong>' + App.esc(App.pname(p)) + '</strong><span class="small muted">' + App.esc(DM.displayId(p)) + " &middot; " + App.esc(App.blockName(p.block)) + " &middot; " + App.esc(App.L(DM.STATUS[DM.dstatus(p)])) + "</span></span></button></li>";
            }).join("") + "</ul>";
          }
        }
        box.innerHTML = h;
      }
      function locate(id) {
        var p = DM.byId(App.db, id); if (!p || !api) return;
        focusP = p; api.map.setView([p.loc[0] + 0.04, p.loc[1]], 12.5, { animate: false });
        api.map.eachLayer(function (l) { if (l.getPopup && l.getPopup() && l.getLatLng && l.getLatLng().lat === p.loc[0] && l.getLatLng().lng === p.loc[1]) l.openPopup(); });
        App.qsa("#gSide [data-pid]").forEach(function (b) { b.setAttribute("aria-current", String(b.getAttribute("data-pid") === id)); });
      }
      form.addEventListener("change", function () { update(true); });
      form.addEventListener("input", App.debounce(function (e) { if (e.target.name === "q") update(true); }, 350));
      form.addEventListener("submit", function (e) { e.preventDefault(); update(true); });
      main.querySelector(".gis-side .tabs").addEventListener("click", function (e) {
        var b = e.target.closest("[data-tab]"); if (!b) return; tab = b.getAttribute("data-tab");
        App.qsa("[data-tab]", main).forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); }); update(false);
      });
      main.querySelector("#gSide").addEventListener("click", function (e) {
        var b = e.target.closest("[data-pid]"); if (b) { locate(b.getAttribute("data-pid")); return; }
        var bl = e.target.closest("[data-blk]"); if (bl) { e.preventDefault(); form.elements.block.value = bl.getAttribute("data-blk"); update(true); }
      });
      update(!!(f.block || f.q || f.dept || f.sector || f.status));
      if (focusP) setTimeout(function () { locate(focusP.id); }, 250);
      if (api) api.invalidate();
    }
  });
})();
