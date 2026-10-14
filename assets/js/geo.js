/* DMFT Work Monitoring Portal, Ramgarh - shared Leaflet map helper.
   Default base layer is an offline schematic of the six blocks (approximate, for demonstration). An OpenStreetMap layer
   can be switched on when the machine is online. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  var TINT = { RGH: "#DCE6F2", PTR: "#E6EFE0", MND: "#F3E9DA", GOL: "#EDE5F3", CTP: "#E0F0F2", DLM: "#F4E3E1" };
  App.addHi({
    "Schematic block boundaries (offline, sample)": "योजनाबद्ध प्रखंड सीमाएँ (ऑफ़लाइन, नमूना)", "OpenStreetMap (needs internet)": "ओपनस्ट्रीटमैप (इंटरनेट आवश्यक)",
    "Projects": "परियोजनाएँ", "Panchayat distribution": "पंचायत वितरण", "Block boundaries": "प्रखंड सीमाएँ",
    "Schematic boundaries - sample. Block outlines are approximate and drawn for demonstration; the live portal uses official district / block / panchayat GIS layers.": "योजनाबद्ध सीमाएँ - नमूना। प्रखंड रूपरेखा अनुमानित है एवं प्रदर्शन हेतु बनाई गई है; लाइव पोर्टल में आधिकारिक जिला / प्रखंड / पंचायत जीआईएस परतों का उपयोग होगा।",
    "Open project": "परियोजना खोलें", "Fit district": "पूरा जिला दिखाएँ", "block": "प्रखंड", "Damodar river (approximate)": "दामोदर नदी (अनुमानित)", "Block HQ": "प्रखंड मुख्यालय", "projects": "परियोजनाएँ", "Map could not be loaded.": "मानचित्र लोड नहीं हो सका।"
  });

  App.statusColor = function (p) { return DM.STATUS[DM.dstatus(p)].color; };

  // opts: { publicLinks: bool, panchayatLayer: bool, legend: bool, fit: bool, zoom }
  App.makeMap = function (el, opts) {
    opts = opts || {};
    if (!window.L) { el.innerHTML = '<div class="empty">' + App.esc(App.t("Map could not be loaded.")) + "</div>"; return null; }
    var L = window.L;
    var map = L.map(el, { zoomControl: true, attributionControl: true, scrollWheelZoom: false, zoomSnap: 0.25 });
    // Wheel zoom only after the map is clicked or focused, or while Ctrl is held; the page scrolls normally otherwise.
    map.on("click focus", function () { map.scrollWheelZoom.enable(); });
    map.on("mouseout blur", function () { map.scrollWheelZoom.disable(); });
    el.addEventListener("wheel", function (e) { if (e.ctrlKey && !map.scrollWheelZoom.enabled()) { e.preventDefault(); map.setZoom(map.getZoom() + (e.deltaY < 0 ? 0.5 : -0.5)); } }, { passive: false });
    var schematic = L.layerGroup();
    L.polygon(DM.DISTRICT_OUTLINE, { color: "#0B2545", weight: 2.5, fill: false, interactive: false }).addTo(schematic);
    DM.BLOCKS.forEach(function (b) {
      L.polygon(b.poly, { color: "#16345F", weight: 1.2, dashArray: "5 4", fillColor: TINT[b.code], fillOpacity: 0.85 }).bindTooltip(App.L(b) + " " + App.t("block"), { sticky: true }).addTo(schematic);
    });
    if (DM.RIVER) L.polyline(DM.RIVER, { color: "#5F9BC9", weight: 3.5, opacity: 0.85, interactive: true }).bindTooltip(App.t("Damodar river (approximate)"), { sticky: true }).addTo(schematic);
    var hqLayer = L.layerGroup();
    DM.BLOCKS.forEach(function (b) {
      L.marker(b.center, { interactive: false, keyboard: false, icon: L.divIcon({ className: "hq-mark", iconSize: [10, 10], iconAnchor: [5, 5], html: '<span class="hq-dot"></span><span class="hq-lbl">' + App.esc(App.L(b)) + "</span>" }) }).addTo(hqLayer);
    });
    hqLayer.addTo(schematic);
    var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" });
    var osmOverlay = L.layerGroup();
    DM.BLOCKS.forEach(function (b) { L.polygon(b.poly, { color: "#0B2545", weight: 1.5, dashArray: "5 4", fill: false, interactive: false }).addTo(osmOverlay); L.marker(b.center, { interactive: false, keyboard: false, icon: L.divIcon({ className: "hq-mark", iconSize: [10, 10], iconAnchor: [5, 5], html: '<span class="hq-dot"></span><span class="hq-lbl">' + App.esc(App.L(b)) + "</span>" }) }).addTo(osmOverlay); });
    schematic.addTo(map);
    var markers = L.layerGroup().addTo(map), panch = L.layerGroup();
    var base = {}; base[App.t("Schematic block boundaries (offline, sample)")] = schematic; base[App.t("OpenStreetMap (needs internet)")] = osm;
    var over = {}; over[App.t("Projects")] = markers; over[App.t("Block boundaries")] = osmOverlay; over[App.t("Panchayat distribution")] = panch;
    L.control.layers(base, over, { collapsed: true }).addTo(map);
    map.on("baselayerchange", function (e) { if (e.layer === osm) osmOverlay.addTo(map); else map.removeLayer(osmOverlay); });
    map.attributionControl.setPrefix(false);
    map.attributionControl.addAttribution(App.t("Sample data"));
    if (opts.legend !== false) {
      var lg = L.control({ position: "bottomleft" });
      lg.onAdd = function () { var d = L.DomUtil.create("div", "map-legend"); d.innerHTML = ["ongoing", "delayed", "completed", "handover", "notstarted", "tender", "approval", "proposed"].map(function (k) { return '<div><i style="background:' + DM.STATUS[k].color + '"></i>' + App.esc(App.L(DM.STATUS[k])) + "</div>"; }).join("") + '<div><i style="background:#0B2545;border-radius:0"></i>' + App.esc(App.t("Block HQ")) + '</div><div><i style="background:#5F9BC9;border-radius:0;height:4px;vertical-align:2px"></i>' + App.esc(App.t("Damodar river (approximate)")) + "</div>"; return d; };
      lg.addTo(map);
    }
    var withLegend = opts.legend !== false;
    function fitDistrict() { map.fitBounds(L.latLngBounds(DM.DISTRICT_OUTLINE), withLegend ? { paddingTopLeft: [Math.min(200, el.clientWidth * 0.3), 12], paddingBottomRight: [12, 12] } : { padding: [12, 12] }); }
    fitDistrict();
    var rc = L.control({ position: "topleft" });
    rc.onAdd = function () { var d = L.DomUtil.create("div", "leaflet-bar map-reset"); d.innerHTML = '<a href="#" role="button" title="' + App.esc(App.t("Fit district")) + '" aria-label="' + App.esc(App.t("Fit district")) + '">&#x2922;</a>'; L.DomEvent.disableClickPropagation(d); d.firstChild.addEventListener("click", function (e) { e.preventDefault(); fitDistrict(); }); return d; };
    rc.addTo(map);
    var api = {
      map: map,
      setProjects: function (list, fit) {
        markers.clearLayers(); panch.clearLayers();
        var byP = {};
        list.forEach(function (p) {
          var m = L.circleMarker(p.loc, { radius: p.featured ? 9 : 7, color: "#fff", weight: 2, fillColor: App.statusColor(p), fillOpacity: 0.95 });
          m.bindPopup(function () { return App.mapPopup(p, opts.publicLinks); }, { maxWidth: 280, minWidth: 240 });
          m.bindTooltip(App.esc(App.pname(p)), { direction: "top", offset: [0, -6] });
          m.addTo(markers);
          var k = p.block + "|" + p.panchayat; (byP[k] = byP[k] || []).push(p);
        });
        Object.keys(byP).forEach(function (k) {
          var arr = byP[k], la = 0, lo = 0; arr.forEach(function (p) { la += p.loc[0]; lo += p.loc[1]; });
          var b = DM.block(k.split("|")[0]), pp = b.panchayats.filter(function (x) { return x.en === k.split("|")[1]; })[0];
          L.circleMarker([la / arr.length, lo / arr.length], { radius: 8 + Math.sqrt(arr.length) * 4, color: "#0B2545", weight: 1, fillColor: "#C2650A", fillOpacity: 0.35 })
            .bindTooltip(App.esc(App.L(pp)) + ": " + arr.length + " " + App.t("projects"), { permanent: false }).addTo(panch);
        });
        if (fit && list.length) { try { map.fitBounds(L.latLngBounds(list.map(function (p) { return p.loc; })), { padding: [40, 40], maxZoom: 13 }); } catch (e) { /* single point */ } }
      },
      focus: function (p, z) { map.setView(p.loc, z || 13); },
      invalidate: function () { setTimeout(function () { map.invalidateSize(); }, 60); }
    };
    App.cleanupMaps = (App.cleanupMaps || []).concat([map]);
    return api;
  };
  App.mapPopup = function (p, pub) {
    var href = pub ? "#/p/" + p.id : "#/project/" + p.id;
    return '<img src="' + App.coverPhoto(p) + '" alt="' + App.esc(App.t("Sample site photo") + ": " + App.pname(p)) + '">' +
      "<h4>" + App.esc(App.pname(p)) + '</h4><div class="small muted">' + App.esc(DM.displayId(p)) + "</div>" +
      '<div style="margin:4px 0">' + App.pStatusChip(p) + "</div>" +
      '<div class="small">' + App.esc(App.blockName(p.block)) + " | " + App.esc(App.panchayatName(p)) + " | " + App.esc(App.deptShort(p.dept)) + "</div>" +
      '<div class="small">' + App.esc(App.t("Approved amount")) + ": <strong>" + App.money(DM.amount(p)) + "</strong></div>" +
      '<div class="small" style="margin-top:4px">' + App.esc(App.t("Physical progress")) + "</div>" + App.bar(p.physical || 0) +
      '<p style="margin:8px 0 0"><a href="' + href + '">' + App.esc(App.t("Open project")) + " &rarr;</a></p>";
  };
  App.addHi({ "Sample site photo": "नमूना स्थल फोटो" });
})();
