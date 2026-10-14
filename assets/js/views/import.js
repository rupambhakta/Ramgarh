/* Data import / bulk upload (scope item 7): template download, Excel upload, validation preview with duplicate
   detection and error report, then import. Also bulk progress update and bulk document upload. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Data Import": "डाटा आयात", "Bulk upload of existing DMFT projects and updates from Excel, with validation before anything is saved.": "मौजूदा डीएमएफटी परियोजनाओं एवं अद्यतनों का एक्सेल से बल्क अपलोड, सहेजने से पूर्व सत्यापन सहित।",
    "Bulk project upload": "बल्क परियोजना अपलोड", "Bulk progress update": "बल्क प्रगति अद्यतन", "Bulk document upload": "बल्क दस्तावेज़ अपलोड",
    "Download template": "टेम्पलेट डाउनलोड करें", "Excel template with mandatory columns, two example rows and instructions.": "अनिवार्य कॉलम, दो उदाहरण पंक्तियों एवं निर्देशों सहित एक्सेल टेम्पलेट।",
    "Upload filled file": "भरी हुई फ़ाइल अपलोड करें", "Excel (.xlsx) or CSV. Every row is validated before import.": "एक्सेल (.xlsx) या सीएसवी। आयात से पूर्व प्रत्येक पंक्ति का सत्यापन।",
    "Load sample file (with errors)": "नमूना फ़ाइल लोड करें (त्रुटियों सहित)", "Review and import": "समीक्षा एवं आयात",
    "Only valid rows are imported. Download the error report, correct and re-upload the rest.": "केवल मान्य पंक्तियाँ आयात होंगी। त्रुटि रिपोर्ट डाउनलोड कर सुधारें एवं शेष पुनः अपलोड करें।",
    "Validation preview": "सत्यापन पूर्वावलोकन", "Row": "पंक्ति", "Result": "परिणाम", "Messages": "संदेश", "Valid": "मान्य", "Error": "त्रुटि", "Duplicate": "डुप्लिकेट",
    "Download error report": "त्रुटि रिपोर्ट डाउनलोड करें", "Import {n} valid rows": "{n} मान्य पंक्तियाँ आयात करें", "rows read": "पंक्तियाँ पढ़ी गईं",
    "Upload a file or load the sample file to see the validation preview.": "सत्यापन पूर्वावलोकन देखने हेतु फ़ाइल अपलोड करें या नमूना फ़ाइल लोड करें।",
    "Choose file": "फ़ाइल चुनें", "File": "फ़ाइल", "Imported {n} projects as new work requests (stage 1).": "{n} परियोजनाएँ नए कार्य अनुरोध (चरण 1) के रूप में आयात की गईं।",
    "View imported projects": "आयातित परियोजनाएँ देखें", "No valid rows to import.": "आयात हेतु कोई मान्य पंक्ति नहीं।",
    "The file could not be read. Use the template (.xlsx or .csv).": "फ़ाइल पढ़ी नहीं जा सकी। टेम्पलेट (.xlsx या .csv) का उपयोग करें।",
    "Missing mandatory value: {f}": "अनिवार्य मान अनुपलब्ध: {f}", "Block \"{v}\" not in Ramgarh district": "प्रखंड \"{v}\" रामगढ़ जिले में नहीं",
    "Panchayat \"{v}\" not found in {b} block": "{b} प्रखंड में पंचायत \"{v}\" नहीं मिली", "Village \"{v}\" not found in {p} Panchayat": "{p} पंचायत में ग्राम \"{v}\" नहीं मिला",
    "Department \"{v}\" not in master": "विभाग \"{v}\" मास्टर में नहीं", "Work type \"{v}\" not in the work type master": "कार्य प्रकार \"{v}\" मास्टर में नहीं है",
    "Letter date \"{v}\" is not a valid date": "पत्र दिनांक \"{v}\" मान्य तिथि नहीं", "Letter date is in the future": "पत्र दिनांक भविष्य की है",
    "Amount \"{v}\" must be a number above zero": "राशि \"{v}\" शून्य से अधिक संख्या हो", "Estimated amount exceeds Rs 50 crore; check units (rupees)": "प्राक्कलित राशि 50 करोड़ से अधिक; इकाई (रुपये) जाँचें",
    "FY \"{v}\" must be between 2015-16 and {c}": "वि.व. \"{v}\" 2015-16 से {c} के बीच हो",
    "Current stage \"{v}\" must be a whole number 1 to 10": "वर्तमान चरण \"{v}\" 1 से 10 के बीच पूर्ण संख्या हो", "Current stage is required for legacy works (FY before": "पुराने कार्यों (वि.व. से पूर्व) हेतु वर्तमान चरण अनिवार्य है",
    "Physical progress \"{v}\" must be 0 to 100": "भौतिक प्रगति \"{v}\" 0 से 100 के बीच हो", "Physical progress % is required for works at stage 6-9": "चरण 6-9 के कार्यों हेतु भौतिक प्रगति % अनिवार्य है",
    "Current stage (1-10)": "वर्तमान चरण (1-10)", "Physical progress %": "भौतिक प्रगति %", "Stage": "चरण",
    "Duplicate of row {r} (same work and village)": "पंक्ति {r} का डुप्लिकेट (समान कार्य एवं ग्राम)",
    "Already in portal as {id} (same work and village)": "पोर्टल में पहले से {id} (समान कार्य एवं ग्राम)",
    "Letter {l} already registered as {id}": "पत्र {l} पहले से {id} में पंजीकृत",
    "Project ID": "परियोजना आईडी", "Progress %": "प्रगति %", "Project \"{v}\" not found": "परियोजना \"{v}\" नहीं मिली", "Progress \"{v}\" must be 0 to 100": "प्रगति \"{v}\" 0 से 100 के बीच होनी चाहिए",
    "Progress {v}% is lower than the last recorded {c}%": "प्रगति {v}% अंतिम दर्ज {c}% से कम है", "Work has not commenced; progress cannot be updated": "कार्य प्रारंभ नहीं हुआ; प्रगति अद्यतन संभव नहीं",
    "Apply {n} valid updates": "{n} मान्य अद्यतन लागू करें", "Updated progress for {n} projects.": "{n} परियोजनाओं की प्रगति अद्यतन की गई।",
    "Name files as <Project ID>__<category>.<ext>, for example DMFT-RMG-2026-27-MND-0042__dpr.pdf. Files are matched to projects and categories automatically.": "फ़ाइलों का नाम <परियोजना आईडी>__<श्रेणी>.<ext> रखें, जैसे DMFT-RMG-2026-27-MND-0042__dpr.pdf। फ़ाइलें स्वतः परियोजना एवं श्रेणी से मिलाई जाती हैं।",
    "Select files": "फ़ाइलें चुनें", "Load sample file names": "नमूना फ़ाइल नाम लोड करें", "Matched project": "मिलान परियोजना", "Size": "आकार", "Attach {n} matched files": "{n} मिलान फ़ाइलें संलग्न करें",
    "No project matches \"{v}\"": "\"{v}\" से कोई परियोजना मेल नहीं खाती", "Unknown category \"{v}\"": "अज्ञात श्रेणी \"{v}\"", "File type .{v} not allowed (PDF, JPG, PNG, XLSX, DOCX, ZIP)": "फ़ाइल प्रकार .{v} अनुमत नहीं (PDF, JPG, PNG, XLSX, DOCX, ZIP)",
    "File larger than 25 MB": "फ़ाइल 25 एमबी से बड़ी है", "Attached {n} documents to project repositories.": "{n} दस्तावेज़ परियोजना भंडार में संलग्न किए गए।",
    "Category codes": "श्रेणी कोड", "Instructions": "निर्देश", "Uploaded files are scanned for malware and checked for type and size before storage.": "भंडारण से पूर्व अपलोड फ़ाइलों की मैलवेयर जाँच एवं प्रकार/आकार सत्यापन होता है।",
    "Template downloaded": "टेम्पलेट डाउनलोड किया गया", "Error report downloaded": "त्रुटि रिपोर्ट डाउनलोड की गई", "Bulk update": "बल्क अद्यतन"
  });

  // Template columns for bulk project upload
  var COLS = [
    { k: "block", h: "Block", req: true }, { k: "panchayat", h: "Panchayat", req: true }, { k: "village", h: "Village", req: true },
    { k: "workType", h: "Work type", req: true }, { k: "name", h: "Name of work (English)", req: true }, { k: "nameHi", h: "Name of work (Hindi)" },
    { k: "dept", h: "Department", req: true }, { k: "recBy", h: "Recommended by", req: true }, { k: "letterNo", h: "Letter number", req: true },
    { k: "letterDate", h: "Letter date (DD-MM-YYYY)", req: true }, { k: "amount", h: "Estimated amount (Rs)", req: true }, { k: "fy", h: "Financial year", req: true },
    { k: "stage", h: "Current stage (1-10)" }, { k: "phys", h: "Physical progress %" }
  ];
  App.addHi({ "Name of work (English)": "कार्य का नाम (अंग्रेज़ी)", "Name of work (Hindi)": "कार्य का नाम (हिंदी)", "Recommended by": "अनुशंसाकर्ता", "Letter number": "पत्रांक",
    "Letter date (DD-MM-YYYY)": "पत्र दिनांक (DD-MM-YYYY)", "Estimated amount (Rs)": "प्राक्कलित राशि (रु.)", "Financial year": "वित्तीय वर्ष", "Date (DD-MM-YYYY)": "दिनांक (DD-MM-YYYY)", "Latitude": "अक्षांश", "Longitude": "देशांतर" });
  var PCOLS = [{ k: "pid", h: "Project ID", req: true }, { k: "pct", h: "Progress %", req: true }, { k: "date", h: "Date (DD-MM-YYYY)", req: true }, { k: "remarks", h: "Remarks" }, { k: "lat", h: "Latitude" }, { k: "lng", h: "Longitude" }];

  var lc = function (s) { return String(s == null ? "" : s).trim().toLowerCase(); };
  function findBlock(v) { v = lc(v); return DM.BLOCKS.filter(function (b) { return lc(b.en) === v || b.hi === String(v).trim() || lc(b.code) === v; })[0] || null; }
  function findDept(v) { v = lc(v); return DM.DEPTS.filter(function (d) { return lc(d.code) === v || lc(d.en) === v || lc(d.short.en) === v || d.hi === String(v).trim(); })[0] || null; }
  function findWork(v, dept) { v = lc(v); var m = DM.WORKS.filter(function (w) { return lc(w.k) === v || lc(w.t.en) === v || w.t.hi === String(v).trim(); }); if (dept) { var d = m.filter(function (w) { return w.d === dept; }); if (d.length) return d[0]; } return m[0] || null; }
  function parseDate(v) {
    if (v == null || v === "") return null;
    if (typeof v === "number") { var d0 = new Date(Math.round((v - 25569) * 86400000)); return DM.util.iso(new Date(d0.getUTCFullYear(), d0.getUTCMonth(), d0.getUTCDate())); }
    var s = String(v).trim(), m;
    if ((m = s.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/))) { var dd = +m[1], mm = +m[2], yy = +m[3]; var d = new Date(yy, mm - 1, dd); if (d.getMonth() !== mm - 1 || d.getDate() !== dd) return null; return DM.util.iso(d); }
    if ((m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/))) { var d2 = new Date(+m[1], +m[2] - 1, +m[3]); if (d2.getMonth() !== +m[2] - 1) return null; return s; }
    return null;
  }
  function fmtDate(iso) { return iso ? iso.split("-").reverse().join("-") : ""; }

  // ---------- Template workbooks ----------
  function templateRows() {
    var fy = DM.FYS()[2], t = DM.util.addDays(App.today(), -6);
    return [COLS.map(function (c) { return c.h; }),
      ["Mandu", "Hehal", "Pindra", "Anganwadi", "Anganwadi centre building, Pindra", "आंगनबाड़ी केंद्र भवन, पिंडरा", "WCD", "Mukhiya, Hehal Panchayat", "118/HEHAL/" + fy.slice(0, 4), fmtDate(t), 1240000, fy],
      ["Gola", "Chokad", "Bandha", "Water supply", "Solar-powered mini water supply scheme, Bandha", "सौर ऊर्जा आधारित लघु जलापूर्ति योजना, बांधा", "DWSD", "BDO, Gola", "402/GOL/" + fy.slice(0, 4), fmtDate(t), 2875000, fy]];
  }
  function instructions() {
    var r = [["DMFT Work Monitoring Portal, Ramgarh - bulk project upload template"], [""], ["Column", "Mandatory", "Allowed values / format"]];
    r.push(["Block", "Yes", DM.BLOCKS.map(function (b) { return b.en; }).join(", ")]);
    r.push(["Panchayat / Village", "Yes", "Must exist in the block / panchayat master (see Masters sheet)"]);
    r.push(["Work type", "Yes", DM.WORKS.map(function (w) { return w.t.en; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).join(", ")]);
    r.push(["Department", "Yes", DM.DEPTS.map(function (d) { return d.code + " (" + d.en + ")"; }).join(", ")]);
    r.push(["Letter date", "Yes", "DD-MM-YYYY, not in the future"]);
    r.push(["Estimated amount", "Yes", "Rupees, number greater than zero"]);
    r.push(["Financial year", "Yes", "2015-16 to " + DM.FYS()[2] + " (YYYY-YY). Works sanctioned before " + DM.FYS()[0] + " are legacy works"]);
    r.push(["Current stage (1-10)", "Legacy works only", "Lifecycle stage the work has reached today: 1 Request, 2 Acceptance, 3 Technical approval, 4 Administrative approval, 5 Execution (tender / agreement), 6 Physical progress, 7 Payment, 8 Inspection, 9 Financial progress, 10 Handover pending. Mandatory for legacy works; blank = 1 for current works"]);
    r.push(["Physical progress %", "Stages 6-10", "0-100. Mandatory for stages 6-9; defaults to 100 at stage 10"]);
    r.push(["Legacy works at stage 5 or later", "", "Get a Unique Project ID on import; administrative approval is recorded as LEGACY/<letter number>, to be completed from the physical file"]);
    r.push([""], ["Duplicates: a row with the same work name and village as an existing project, or as an earlier row, is flagged and not imported."]);
    r.push(["Imported rows become work requests at stage 1 and enter the configured file movement."]);
    return r;
  }
  function masters() { var r = [["Block", "Panchayat", "Village"]]; DM.BLOCKS.forEach(function (b) { b.panchayats.forEach(function (p) { p.villages.forEach(function (v) { r.push([b.en, p.en, v.en]); }); }); }); return r; }

  // Sample file with deliberate errors and duplicates (built in memory, no download needed)
  function sampleRows() {
    var fy = DM.FYS()[2], fy1 = DM.FYS()[1], d = function (n) { return fmtDate(DM.util.addDays(App.today(), -n)); };
    var ex = App.db.projects.filter(function (p) { return p.sf[1] && p.sf[1].letterNo; })[7], ex2 = App.db.projects.filter(function (p) { return p.sf[1] && p.sf[1].letterNo; })[21];
    var exW = DM.work(ex.workKey);
    return [COLS.map(function (c) { return c.h; }),
      ["Mandu", "Kuju", "Topa", "Road", "PCC road from Topa to Karma", "टोपा से करमा तक पीसीसी पथ निर्माण", "RWD", "Mukhiya, Kuju Panchayat", "231/KUJU/" + fy.slice(0, 4), d(9), 4860000, fy],
      ["Patratu", "Sayal", "Urimari", "Water supply", "Piped water supply extension, Urimari", "उरीमारी में पाइप जलापूर्ति विस्तार", "DWSD", "BDO, Patratu", "77/PTR/" + fy.slice(0, 4), d(14), 6120000, fy],
      ["Gola", "Hesapodi", "Pundi", "Anganwadi", "Anganwadi centre building, Pundi", "आंगनबाड़ी केंद्र भवन, पुंडी", "WCD", "Mukhiya, Hesapodi Panchayat", "19/HSP/" + fy.slice(0, 4), d(20), 1185000, fy],
      ["Ramgarh Town", "Marar", "Hesla", "Building", "Multipurpose community hall, Hesla", "", "BCD", "Ward Councillor", "88/RGH/" + fy.slice(0, 4), d(11), 3400000, fy],
      ["Dulmi", "Usra", "Jamira", "School infrastructure", "Additional classrooms, Govt. Middle School Jamira", "राजकीय मध्य विद्यालय जमीरा में अतिरिक्त कक्षा-कक्ष", "EDU", "Mukhiya, Usra Panchayat", "45/DLM/" + fy.slice(0, 4), d(8), 2950000, fy],
      ["Chitarpur", "Mayal", "Rajrappa", "Health facility", "Health sub-centre building, Rajrappa", "स्वास्थ्य उप-केंद्र भवन, रजरप्पा", "Health", "BDO, Chitarpur", "", d(16), 5275000, fy],
      [DM.block(ex.block).en, ex.panchayat, ex.village, exW.t.en, ex.name.en, ex.name.hi, ex.dept, "Mukhiya, " + ex.panchayat + " Panchayat", "990/" + ex.block + "/" + fy.slice(0, 4), d(12), ex.estimate, ex.fy],
      ["Mandu", "Dighwar", "Kedla", "Electrification", "Solar street lights, Kedla", "सोलर स्ट्रीट लाइट, केदला", "JBVNL", "Mukhiya, Dighwar Panchayat", "64/MND/" + fy.slice(0, 4), "31-02-" + fy.slice(0, 4), 960000, fy],
      ["Patratu", "Basal", "Chikor", "Watershed", "Check dam on local stream at Chikor", "चिकोर में स्थानीय नाले पर चेक डैम निर्माण", "Water Resources", "Gram Sabha, Chikor", "12/PTR/" + fy.slice(0, 4), d(25), 2240000, fy],
      ["Gola", "Gola", "Barlanga", "Agriculture", "Drip and sprinkler irrigation for farmer groups, Barlanga", "बरलंगा के कृषक समूहों हेतु ड्रिप एवं स्प्रिंकलर सिंचाई", "AGR", "Mukhiya, Gola Panchayat", "301/GOL/" + fy.slice(0, 4), d(5), "18,50,000 approx", fy],
      ["Mandu", "Kuju", "Topa", "Road", "PCC road from Topa to Karma", "टोपा से करमा तक पीसीसी पथ निर्माण", "RWD", "BDO, Mandu", "240/MND/" + fy.slice(0, 4), d(7), 4860000, fy],
      ["Dulmi", "Bhaya", "Sosokala", "Anganwadi", "Anganwadi centre building, Sosokala", "आंगनबाड़ी केंद्र भवन, सोसोकला", "WCD", "Mukhiya, Bhaya Panchayat", "56/DLM/" + fy.slice(0, 4), d(18), 1220000, "2019-20"],
      ["Chitarpur", "Sukrigarha", "Lari", "Sanitation", "Community sanitary complex, Lari", "सामुदायिक स्वच्छता परिसर, लारी", "DWSD", "Mukhiya, Sukrigarha Panchayat", ex2.sf[1].letterNo, d(22), 1475000, fy1],
      ["Ramgarh", "Sirka", "Kundru", "Sanitation", "Community sanitary complex, Kundru", "सामुदायिक स्वच्छता परिसर, कुंदरू", "DWSD", "BDO, Ramgarh", "17/RGH/2017", "12-08-2017", 1380000, "2017-18", 10, 100],
      ["Ramgarh", "Sirka", "Argadda", "Livelihood", "Skill development and livelihood centre, Argadda", "कौशल विकास एवं आजीविका केंद्र, अरगड्डा", "RDSD", "Zila Parishad Member, Ramgarh", "73/RGH/" + fy.slice(0, 4), d(30), 6540000, fy]];
  }
  App.addHi({ "Ward Councillor": "वार्ड पार्षद", "Amount (Rs)": "राशि (रु.)", "Dept.": "विभाग", "Name of work": "कार्य का नाम", "Letter date": "पत्र दिनांक" });

  // ---------- Validation ----------
  function rowsToObjs(aoa, cols) {
    var head = (aoa[0] || []).map(function (h) { return lc(h); }), out = [];
    var idx = cols.map(function (c) { var i = head.indexOf(lc(c.h)); if (i < 0) i = head.findIndex(function (h) { return h.indexOf(lc(c.h).split(" (")[0]) === 0; }); return i; });
    for (var r = 1; r < aoa.length; r++) {
      var row = aoa[r]; if (!row || !row.some(function (x) { return String(x == null ? "" : x).trim() !== ""; })) continue;
      var o = { _row: r + 1, _raw: row }; cols.forEach(function (c, i) { o[c.k] = idx[i] >= 0 ? row[idx[i]] : ""; }); out.push(o);
    }
    return out;
  }
  function validateProjects(objs) {
    var fys = DM.FYS(), seen = {}, today = App.today();
    var exist = {}, letters = {};
    App.db.projects.forEach(function (p) { exist[lc(p.name.en) + "|" + lc(p.village)] = p; if (p.sf[1] && p.sf[1].letterNo) letters[lc(p.sf[1].letterNo)] = p; });
    return objs.map(function (o) {
      var errs = [], dups = [], bad = {};
      COLS.forEach(function (c) { if (c.req && String(o[c.k] == null ? "" : o[c.k]).trim() === "") { errs.push(App.tf("Missing mandatory value: {f}", { f: App.t(c.h) })); bad[c.k] = 1; } });
      var blk = o.block !== "" ? findBlock(o.block) : null, pan = null, vil = null, dep = null, wk = null;
      if (o.block !== "" && !blk) { errs.push(App.tf("Block \"{v}\" not in Ramgarh district", { v: o.block })); bad.block = 1; }
      if (blk && o.panchayat !== "") { pan = blk.panchayats.filter(function (p) { return lc(p.en) === lc(o.panchayat) || p.hi === String(o.panchayat).trim(); })[0]; if (!pan) { errs.push(App.tf("Panchayat \"{v}\" not found in {b} block", { v: o.panchayat, b: App.L(blk) })); bad.panchayat = 1; } }
      if (pan && o.village !== "") { vil = pan.villages.filter(function (v) { return lc(v.en) === lc(o.village) || v.hi === String(o.village).trim(); })[0]; if (!vil) { errs.push(App.tf("Village \"{v}\" not found in {p} Panchayat", { v: o.village, p: App.L(pan) })); bad.village = 1; } }
      if (o.dept !== "") { dep = findDept(o.dept); if (!dep) { errs.push(App.tf("Department \"{v}\" not in master", { v: o.dept })); bad.dept = 1; } }
      if (o.workType !== "") { wk = findWork(o.workType, dep && dep.code); if (!wk) { errs.push(App.tf("Work type \"{v}\" not in the work type master", { v: o.workType })); bad.workType = 1; } }
      var dt = parseDate(o.letterDate);
      if (o.letterDate !== "" && !dt) { errs.push(App.tf("Letter date \"{v}\" is not a valid date", { v: o.letterDate })); bad.letterDate = 1; }
      else if (dt && dt > today) { errs.push(App.t("Letter date is in the future")); bad.letterDate = 1; }
      var amt = typeof o.amount === "number" ? o.amount : (/^[\d,.\s]+$/.test(String(o.amount)) ? +String(o.amount).replace(/[,\s]/g, "") : NaN);
      if (o.amount !== "" && !(amt > 0)) { errs.push(App.tf("Amount \"{v}\" must be a number above zero", { v: o.amount })); bad.amount = 1; }
      else if (amt > 5e8) { errs.push(App.t("Estimated amount exceeds Rs 50 crore; check units (rupees)")); bad.amount = 1; }
      var fyS = String(o.fy == null ? "" : o.fy).trim(), fm = fyS.match(/^(20[0-9][0-9])-([0-9][0-9])$/), fyOk = fm && +fm[2] === (+fm[1] + 1) % 100 && +fm[1] >= 2015 && fyS <= fys[2];
      if (fyS !== "" && !fyOk) { errs.push(App.tf("FY \"{v}\" must be between 2015-16 and {c}", { v: o.fy, c: fys[2] })); bad.fy = 1; }
      var legacy = fyOk && fyS < fys[0], stS = String(o.stage == null ? "" : o.stage).trim(), phS = String(o.phys == null ? "" : o.phys).trim(), stage = 1, phys = 0;
      if (stS !== "") { stage = +stS; if (!(stage >= 1 && stage <= 10 && Math.floor(stage) === stage)) { errs.push(App.tf("Current stage \"{v}\" must be a whole number 1 to 10", { v: stS })); bad.stage = 1; stage = 1; } }
      else if (legacy) { errs.push(App.t("Current stage is required for legacy works (FY before") + " " + fys[0] + ")"); bad.stage = 1; }
      if (phS !== "") { phys = +phS; if (!(phys >= 0 && phys <= 100)) { errs.push(App.tf("Physical progress \"{v}\" must be 0 to 100", { v: phS })); bad.phys = 1; phys = 0; } }
      else if (stage >= 6 && stage <= 9) { errs.push(App.t("Physical progress % is required for works at stage 6-9")); bad.phys = 1; }
      else if (stage === 10) phys = 100;
      var key = lc(o.name) + "|" + lc(o.village);
      if (o.name !== "" && seen[key]) dups.push(App.tf("Duplicate of row {r} (same work and village)", { r: seen[key] }));
      else if (o.name !== "") seen[key] = o._row;
      if (exist[key]) dups.push(App.tf("Already in portal as {id} (same work and village)", { id: DM.displayId(exist[key]) }));
      if (o.letterNo !== "" && letters[lc(o.letterNo)]) dups.push(App.tf("Letter {l} already registered as {id}", { l: o.letterNo, id: DM.displayId(letters[lc(o.letterNo)]) }));
      var status = errs.length ? "error" : dups.length ? "dup" : "ok";
      return { o: o, status: status, msgs: errs.concat(dups), bad: bad, ref: { blk: blk, pan: pan, vil: vil, dep: dep, wk: wk, dt: dt, amt: amt, stage: stage, phys: phys, legacy: legacy } };
    });
  }
  function validateProgress(objs) {
    var today = App.today();
    return objs.map(function (o) {
      var errs = [], bad = {};
      PCOLS.forEach(function (c) { if (c.req && String(o[c.k] == null ? "" : o[c.k]).trim() === "") { errs.push(App.tf("Missing mandatory value: {f}", { f: App.t(c.h) })); bad[c.k] = 1; } });
      var id = String(o.pid || "").trim(), p = App.db.projects.filter(function (x) { return (x.uid && x.uid.toLowerCase() === id.toLowerCase()) || x.reqNo.toLowerCase() === id.toLowerCase() || x.id === id; })[0];
      if (id && !p) { errs.push(App.tf("Project \"{v}\" not found", { v: id })); bad.pid = 1; }
      var pct = +o.pct;
      if (o.pct !== "" && !(pct >= 0 && pct <= 100)) { errs.push(App.tf("Progress \"{v}\" must be 0 to 100", { v: o.pct })); bad.pct = 1; }
      if (p && !(p.sf[5] && p.sf[5].commencementDate)) { errs.push(App.t("Work has not commenced; progress cannot be updated")); bad.pid = 1; }
      else if (p && pct < (p.physical || 0)) { errs.push(App.tf("Progress {v}% is lower than the last recorded {c}%", { v: pct, c: p.physical || 0 })); bad.pct = 1; }
      var dt = parseDate(o.date);
      if (o.date !== "" && !dt) { errs.push(App.tf("Date \"{v}\" is not a valid date (DD-MM-YYYY)", { v: o.date })); bad.date = 1; }
      else if (dt && dt > today) { errs.push(App.t("Date is in the future")); bad.date = 1; }
      return { o: o, status: errs.length ? "error" : "ok", msgs: errs, bad: bad, ref: { p: p, pct: pct, dt: dt } };
    });
  }
  App.addHi({ "Date \"{v}\" is not a valid date (DD-MM-YYYY)": "दिनांक \"{v}\" मान्य तिथि नहीं है (DD-MM-YYYY)", "Date is in the future": "दिनांक भविष्य की है" });

  // ---------- Import ----------
  function nextPid() { var mx = 0; App.db.projects.forEach(function (p) { var n = +p.id.slice(1); if (n > mx) mx = n; }); return "P" + DM.util.pad(mx + 1, 3); }
  function locIn(blk) {
    var c = blk.center;
    for (var k = 0; k < 60; k++) { var pt = [+(c[0] + (Math.random() - 0.5) * 0.12).toFixed(5), +(c[1] + (Math.random() - 0.5) * 0.14).toFixed(5)]; if (DM.inPoly(pt, blk.poly)) return pt; }
    return c.slice();
  }
  function importProjects(results, fileName) {
    var now = App.nowTs(), created = [];
    results.filter(function (r) { return r.status === "ok"; }).forEach(function (r) {
      var o = r.o, x = r.ref, fy = String(o.fy).trim(), nameEn = String(o.name).trim(), nameHi = String(o.nameHi || "").trim() || nameEn;
      var p = { id: nextPid(), reqNo: DM.nextReq(App.db, fy), uid: null, fy: fy, block: x.blk.code, panchayat: x.pan.en, village: x.vil.en, workKey: x.wk.k, dept: x.dep.code, sector: x.wk.s,
        name: { en: nameEn, hi: nameHi }, estimate: Math.round(x.amt), loc: locIn(x.blk), stage: 1, sf: {}, movements: [], progress: [], payments: [], docs: [], physical: 0, created: App.today(), imported: true };
      var rb = { en: String(o.recBy).trim(), hi: String(o.recBy).trim() };
      p.sf[1] = { block: { en: x.blk.en, hi: x.blk.hi }, panchayat: { en: x.pan.en, hi: x.pan.hi }, village: { en: x.vil.en, hi: x.vil.hi }, workType: x.wk.t, workName: p.name, recBy: rb, recDesig: rb, letterNo: String(o.letterNo).trim(), letterDate: x.dt, letterFile: null };
      var stg = x.stage || 1;
      if (stg === 1) {
        p.movements.push({ id: 1, ts: now, stage: 1, action: "submit", f: "deo", t: "cell", r: "Imported through bulk upload (" + fileName + ", row " + o._row + "). Recommendation letter to be attached.", u: App.session ? App.session.username : "-" });
        p.wf = { stage: 1, idx: 1, returnedFrom: null }; p.pendingAt = "cell"; p.pendingSince = now;
      } else {
        // Legacy / mid-lifecycle work migrated at the stage it has reached
        p.stage = stg; p.migrated = true;
        if (stg >= 3) p.sf[3] = { dprDept: { en: x.dep.en, hi: x.dep.hi }, estAmount: Math.round(x.amt), taNo: "LEGACY", taDate: x.dt };
        if (stg >= 5) { p.uid = DM.nextUid(App.db, fy, x.blk.code); p.sf[4] = { aaNo: "LEGACY/" + String(o.letterNo).trim(), aaDate: x.dt, approvedAmount: Math.round(x.amt), fy: fy, uid: p.uid, commDate: x.dt }; p.sf[5] = {}; }
        if (stg >= 6) {
          p.sf[5] = { commencementDate: x.dt, agreementDate: x.dt, agreementNo: "LEGACY" }; p.physical = x.phys;
          p.progress.push({ date: App.today(), pct: x.phys, remark: "Migrated from legacy records", by: "deo", lat: p.loc[0], lng: p.loc[1], time: now.slice(11, 16), photo: false, verified: false, migrated: true });
          p.sf[6] = { physicalPct: x.phys, lastUpdate: App.today(), photoCount: 0, fieldObs: "Migrated from legacy records" };
        }
        if (stg === 10) p.sf[10] = { completionDate: null };
        var ch = DM.CHAIN[stg];
        p.movements.push({ id: 1, ts: now, stage: stg, action: "submit", f: "deo", t: ch[0], r: "Migrated from legacy records through bulk upload (" + fileName + ", row " + o._row + ") at stage " + stg + ". Supporting documents to be attached.", u: App.session ? App.session.username : "-" });
        p.wf = { stage: stg, idx: 0, returnedFrom: null }; p.pendingAt = ch[0]; p.pendingSince = now;
      }
      App.db.projects.push(p); created.push(p);
    });
    if (created.length) { App.log("import", { en: "Bulk project upload: " + created.length + " rows from " + fileName, hi: "बल्क परियोजना अपलोड: " + fileName + " से " + created.length + " पंक्तियाँ" }); App.save(); }
    return created;
  }

  // ---------- View ----------
  var S = { tab: "projects", file: null, res: null, pres: null, docs: null, done: null };
  function readFile(file, cb) {
    var fr = new FileReader();
    fr.onload = function () {
      try { var wb = window.XLSX.read(new Uint8Array(fr.result), { type: "array" }); var ws = wb.Sheets[wb.SheetNames[0]]; cb(null, window.XLSX.utils.sheet_to_json(ws, { header: 1, defval: "", raw: true })); }
      catch (e) { cb(e); }
    };
    fr.onerror = function () { cb(fr.error || new Error("read")); };
    fr.readAsArrayBuffer(file);
  }
  var SHORT = { dept: "Dept.", stage: "Stage", letterDate: "Letter date", amount: "Amount (Rs)", fy: "FY", name: "Name of work", date: "Date", pct: "Progress %" };
  function chip(status) { var m = { ok: ["st-completed", "Valid"], error: ["st-delayed", "Error"], dup: ["st-approval", "Duplicate"] }[status]; return '<span class="chip ' + m[0] + '">' + App.esc(App.t(m[1])) + "</span>"; }
  function previewTable(res, cols, showCols) {
    var h = '<div class="table-wrap tbl-scroll imp-table" tabindex="0" aria-label="' + App.esc(App.t("Validation preview")) + '"><table class="data"><caption class="sr-only">' + App.esc(App.t("Validation preview")) + "</caption>" + (function () { var rest = (100 - 4 - 9 - 30) / showCols.length; return "<colgroup><col style=\"width:4%\"><col style=\"width:8.5%\">" + showCols.map(function (k) { var W = { block: 8.5, name: 18, dept: 6.5, letterDate: 8.5, amount: 9.5, fy: 6.5, stage: 5, pid: 20, pct: 8, date: 9, remarks: 20 }; return "<col style=\"width:" + (W[k] || rest) + "%\">"; }).join("") + "<col style=\"width:" + Math.max(20, 100 - 12.5 - showCols.reduce(function (t, k) { var W = { block: 8.5, name: 18, dept: 6.5, letterDate: 8.5, amount: 9.5, fy: 6.5, stage: 5, pid: 20, pct: 8, date: 9, remarks: 20 }; return t + (W[k] || rest); }, 0)) + "%\"></colgroup>"; })() + "<thead><tr><th scope=\"col\">" + App.esc(App.t("Row")) + "</th><th scope=\"col\">" + App.esc(App.t("Result")) + "</th>" +
      showCols.map(function (k) { var c = cols.filter(function (x) { return x.k === k; })[0]; return '<th scope="col">' + App.esc(App.t(SHORT[k] || c.h)) + "</th>"; }).join("") + '<th scope="col">' + App.esc(App.t("Messages")) + "</th></tr></thead><tbody>";
    res.forEach(function (r) {
      h += '<tr class="' + (r.status === "error" ? "row-err" : r.status === "dup" ? "row-dup" : "row-ok") + '"><td class="num">' + r.o._row + "</td><td>" + chip(r.status) + "</td>" +
        showCols.map(function (k) { var v = r.o[k]; if (k === "amount" && typeof v === "number") v = App.inr(v); return "<td" + (r.bad[k] ? ' class="bad"' : "") + (k === "name" ? ' title="' + App.esc(v) + '"' : "") + ">" + (k === "name" ? '<span class="trunc">' + App.esc(v === "" ? "-" : v) + "</span>" : App.esc(v === "" ? "-" : v)) + "</td>"; }).join("") +
        '<td class="msgs">' + (r.msgs.length ? "<ul>" + r.msgs.map(function (m) { return "<li>" + App.esc(m) + "</li>"; }).join("") + "</ul>" : '<span class="yes">' + App.icon("tick", "sm") + "</span>") + "</td></tr>";
    });
    return h + "</tbody></table></div>";
  }
  function summary(res) {
    var c = { ok: 0, error: 0, dup: 0 }; res.forEach(function (r) { c[r.status]++; });
    return { c: c, html: '<div class="imp-sum"><span class="file-pill">' + App.icon("file", "sm") + App.esc(S.file || "") + "</span><strong>" + res.length + " " + App.esc(App.t("rows read")) + '</strong><span class="chip st-completed">' + App.esc(App.t("Valid")) + ": " + c.ok + '</span><span class="chip st-delayed">' + App.esc(App.t("Error")) + ": " + c.error + '</span><span class="chip st-approval">' + App.esc(App.t("Duplicate")) + ": " + c.dup + "</span></div>" };
  }
  function errorReport(res, cols, name) {
    var rows = [[App.t("Row"), App.t("Result")].concat(cols.map(function (c) { return App.t(c.h); })).concat([App.t("Messages")])];
    res.filter(function (r) { return r.status !== "ok"; }).forEach(function (r) { rows.push([r.o._row, App.t(r.status === "dup" ? "Duplicate" : "Error")].concat(cols.map(function (c) { return r.o[c.k]; })).concat([r.msgs.join("; ")])); });
    App.exportXlsx(name, [{ name: "Error report", rows: rows }], App.t("Download error report"));
    App.toast(App.t("Error report downloaded"));
  }

  App.view("import", {
    perm: "import",
    title: function () { return App.t("Data Import"); },
    render: function (main, route) {
      if (route.query.tab && ["projects", "progress", "documents"].indexOf(route.query.tab) >= 0) S.tab = route.query.tab;
      if (route.query.sample === "1" && !S.res && S.tab === "projects") { S.file = "Sample_DMFT_projects_with_errors.xlsx"; S.res = validateProjects(rowsToObjs(sampleRows(), COLS)); S.done = null; }
      var tabs = [["projects", "Bulk project upload", "upload"], ["progress", "Bulk progress update", "trend"], ["documents", "Bulk document upload", "folder"]];
      main.innerHTML = App.pageHead(App.t("Data Import"), App.esc(App.t("Bulk upload of existing DMFT projects and updates from Excel, with validation before anything is saved.")), "", [[App.t("Dashboard"), "#/dashboard"], [App.t("Data Import"), ""]]) +
        '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-selected="' + (S.tab === t[0]) + '">' + App.icon(t[2], "sm") + App.esc(App.t(t[1])) + "</button>"; }).join("") + '</div><div id="impBody"></div>';
      var body = main.querySelector("#impBody");
      main.querySelector(".tabs").addEventListener("click", function (e) { var b = e.target.closest("[data-tab]"); if (!b) return; S.tab = b.getAttribute("data-tab"); App.setQuery({ tab: S.tab }); App.render(); });
      if (S.tab === "projects") drawProjects(body); else if (S.tab === "progress") drawProgress(body); else drawDocs(body);
    }
  });

  function steps(tplLabel, accept, sampleLabel, compact) {
    if (compact) return '<div class="imp-bar"><span class="n">1</span><button class="btn secondary sm" type="button" id="iTpl">' + App.icon("download", "sm") + App.esc(tplLabel) + '</button><span class="n">2</span><label class="sr-only" for="iFile">' + App.esc(App.t("Choose file")) + '</label><input class="imp-file-input" type="file" id="iFile" accept="' + accept + '"><button class="btn ghost sm" type="button" id="iSample">' + App.icon("table", "sm") + App.esc(sampleLabel) + '</button><span class="n">3</span><span class="small"><strong>' + App.esc(App.t("Review and import")) + "</strong></span></div>";
    return '<div class="imp-steps"><div class="imp-step"><span class="n">1</span><div><h3>' + App.esc(App.t("Download template")) + "</h3><p>" + App.esc(App.t("Excel template with mandatory columns, two example rows and instructions.")) + '</p><button class="btn secondary sm" type="button" id="iTpl">' + App.icon("download", "sm") + App.esc(tplLabel) + "</button></div></div>" +
      '<div class="imp-step"><span class="n">2</span><div><h3>' + App.esc(App.t("Upload filled file")) + "</h3><p>" + App.esc(App.t("Excel (.xlsx) or CSV. Every row is validated before import.")) + '</p><label class="sr-only" for="iFile">' + App.esc(App.t("Choose file")) + '</label><input class="imp-file-input" type="file" id="iFile" accept="' + accept + '"><br><button class="btn ghost sm" type="button" id="iSample" style="margin-top:6px;padding-left:0">' + App.icon("table", "sm") + App.esc(sampleLabel) + "</button></div></div>" +
      '<div class="imp-step"><span class="n">3</span><div><h3>' + App.esc(App.t("Review and import")) + "</h3><p>" + App.esc(App.t("Only valid rows are imported. Download the error report, correct and re-upload the rest.")) + "</p></div></div></div>";
  }

  function drawProjects(body) {
    var h = steps(App.t("Download template"), ".xlsx,.xls,.csv", App.t("Load sample file (with errors)"), !!(S.res || S.done));
    if (S.done) h += '<div class="note ok" style="margin-bottom:12px">' + App.icon("check") + "<div><strong>" + App.esc(App.tf("Imported {n} projects as new work requests (stage 1).", { n: S.done.length })) + '</strong> <a href="#/projects?stage=1">' + App.esc(App.t("View imported projects")) + "</a> | " + S.done.map(function (p) { return App.pidLink(p); }).join(", ") + "</div></div>";
    if (S.res) {
      var sm = summary(S.res);
      h += '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Validation preview")) + '</h2></div><div class="rpt-actions"><button class="btn secondary sm" type="button" id="iErr"' + (sm.c.error + sm.c.dup ? "" : " disabled") + ">" + App.icon("download", "sm") + App.esc(App.t("Download error report")) + '</button><button class="btn sm" type="button" id="iGo"' + (sm.c.ok ? "" : " disabled") + ">" + App.icon("upload", "sm") + App.esc(App.tf("Import {n} valid rows", { n: sm.c.ok })) + "</button></div></div>" + sm.html +
        previewTable(S.res, COLS, ["block", "name", "dept", "letterDate", "amount", "fy", "stage"]) + "</div>";
    } else if (!S.done) h += '<div class="card"><div class="empty">' + App.icon("upload", "lg") + "<br>" + App.esc(App.t("Upload a file or load the sample file to see the validation preview.")) + "</div></div>";
    body.innerHTML = h;
    body.querySelector("#iTpl").addEventListener("click", function () {
      App.exportXlsx("DMFT-Ramgarh_Bulk-Project-Upload_Template.xlsx", [{ name: "Projects", rows: templateRows() }, { name: "Instructions", rows: instructions() }, { name: "Masters", rows: masters() }]);
      App.toast(App.t("Template downloaded"));
    });
    body.querySelector("#iSample").addEventListener("click", function () { S.file = "Sample_DMFT_projects_with_errors.xlsx"; S.res = validateProjects(rowsToObjs(sampleRows(), COLS)); S.done = null; drawProjects(body); });
    body.querySelector("#iFile").addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      readFile(f, function (err, aoa) { if (err) { App.toast(App.t("The file could not be read. Use the template (.xlsx or .csv)."), false); return; } S.file = f.name; S.res = validateProjects(rowsToObjs(aoa, COLS)); S.done = null; drawProjects(body); });
    });
    var eb = body.querySelector("#iErr"); if (eb) eb.addEventListener("click", function () { errorReport(S.res, COLS, "DMFT-Ramgarh_Import-Error-Report_" + App.today() + ".xlsx"); });
    var gb = body.querySelector("#iGo"); if (gb) gb.addEventListener("click", function () {
      var created = importProjects(S.res, S.file || "upload"); if (!created.length) { App.toast(App.t("No valid rows to import."), false); return; }
      S.done = created; S.res = null; App.toast(App.tf("Imported {n} projects as new work requests (stage 1).", { n: created.length })); drawProjects(body);
    });
  }

  function progressSample() {
    var on = App.scoped().filter(function (p) { return DM.status(p) === "ongoing"; }).slice(0, 5), d = function (n) { return fmtDate(DM.util.addDays(App.today(), -n)); };
    var rows = [PCOLS.map(function (c) { return c.h; })];
    on.forEach(function (p, i) { rows.push([p.uid, Math.min(100, (p.physical || 0) + 6 + i * 2), d(1 + i), "Monthly progress verified at site", p.loc[0], p.loc[1]]); });
    if (on[0]) rows.push([on[0].uid, Math.max(0, (on[0].physical || 0) - 10), d(2), "Re-measured", on[0].loc[0], on[0].loc[1]]);
    rows.push(["DMFT/RMG/2026-27/XYZ/9999", 40, d(3), "", "", ""]);
    var nc = App.db.projects.filter(function (p) { return DM.status(p) === "tender"; })[0]; if (nc) rows.push([nc.uid, 10, d(2), "", "", ""]);
    if (on[1]) rows.push([on[1].uid, 135, d(1), "", "", ""]);
    return rows;
  }
  function drawProgress(body) {
    var h = steps(App.t("Download template"), ".xlsx,.xls,.csv", App.t("Load sample file (with errors)"), !!(S.pres || S.pdone));
    if (S.pdone) h += '<div class="note ok" style="margin-bottom:12px">' + App.icon("check") + "<div><strong>" + App.esc(App.tf("Updated progress for {n} projects.", { n: S.pdone })) + "</strong></div></div>";
    if (S.pres) {
      var sm = summary(S.pres);
      h += '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Validation preview")) + '</h2></div><div class="rpt-actions"><button class="btn secondary sm" type="button" id="pErr"' + (sm.c.error ? "" : " disabled") + ">" + App.icon("download", "sm") + App.esc(App.t("Download error report")) + '</button><button class="btn sm" type="button" id="pGo"' + (sm.c.ok ? "" : " disabled") + ">" + App.icon("upload", "sm") + App.esc(App.tf("Apply {n} valid updates", { n: sm.c.ok })) + "</button></div></div>" + sm.html + previewTable(S.pres, PCOLS, ["pid", "pct", "date", "remarks"]) + "</div>";
    } else if (!S.pdone) h += '<div class="card"><div class="empty">' + App.esc(App.t("Upload a file or load the sample file to see the validation preview.")) + "</div></div>";
    body.innerHTML = h;
    body.querySelector("#iTpl").addEventListener("click", function () { var r = progressSample().slice(0, 3); App.exportXlsx("DMFT-Ramgarh_Bulk-Progress-Update_Template.xlsx", [{ name: "Progress", rows: r }]); App.toast(App.t("Template downloaded")); });
    body.querySelector("#iSample").addEventListener("click", function () { S.file = "Sample_progress_update.xlsx"; S.pres = validateProgress(rowsToObjs(progressSample(), PCOLS)); S.pdone = null; drawProgress(body); });
    body.querySelector("#iFile").addEventListener("change", function (e) { var f = e.target.files[0]; if (!f) return; readFile(f, function (err, aoa) { if (err) { App.toast(App.t("The file could not be read. Use the template (.xlsx or .csv)."), false); return; } S.file = f.name; S.pres = validateProgress(rowsToObjs(aoa, PCOLS)); S.pdone = null; drawProgress(body); }); });
    var eb = body.querySelector("#pErr"); if (eb) eb.addEventListener("click", function () { errorReport(S.pres, PCOLS, "DMFT-Ramgarh_Progress-Error-Report_" + App.today() + ".xlsx"); });
    var gb = body.querySelector("#pGo"); if (gb) gb.addEventListener("click", function () {
      var n = 0;
      S.pres.filter(function (r) { return r.status === "ok"; }).forEach(function (r) {
        var p = r.ref.p, lat = +r.o.lat || p.loc[0], lng = +r.o.lng || p.loc[1];
        p.progress.push({ date: r.ref.dt, pct: r.ref.pct, remark: String(r.o.remarks || "").trim() || "Bulk update", by: "je", lat: +lat.toFixed(5), lng: +lng.toFixed(5), time: "10:00", photo: false, verified: false, bulk: true });
        p.physical = r.ref.pct; p.sf[6] = p.sf[6] || {}; p.sf[6].physicalPct = r.ref.pct; p.sf[6].lastUpdate = r.ref.dt; n++;
      });
      App.log("import", { en: "Bulk progress update: " + n + " projects", hi: "बल्क प्रगति अद्यतन: " + n + " परियोजनाएँ" }); App.save();
      S.pdone = n; S.pres = null; App.toast(App.tf("Updated progress for {n} projects.", { n: n })); drawProgress(body);
    });
  }

  var ALLOWED = ["pdf", "jpg", "jpeg", "png", "xlsx", "docx", "zip"];
  function matchDoc(name, size) {
    var errs = [], base = name.replace(/\.[^.]+$/, ""), ext = (name.match(/\.([^.]+)$/) || ["", ""])[1].toLowerCase(), parts = base.split("__");
    var idPart = (parts[0] || "").replace(/-/g, "/").toUpperCase(), catPart = lc(parts[1] || "");
    var p = App.db.projects.filter(function (x) { return (x.uid && x.uid.toUpperCase() === idPart.replace(/^DMFT\/RMG\/(\d{4})\/(\d{2})\//, "DMFT/RMG/$1-$2/")) || x.reqNo.toUpperCase() === idPart.replace(/^WR\/RMG\/(\d{4})\/(\d{2})\//, "WR/RMG/$1-$2/"); })[0];
    if (!p) errs.push(App.tf("No project matches \"{v}\"", { v: parts[0] }));
    var cat = DM.DOC_CATS.filter(function (c) { return c.k === catPart || lc(c.en) === catPart; })[0];
    if (!cat) errs.push(App.tf("Unknown category \"{v}\"", { v: parts[1] || "-" }));
    if (ALLOWED.indexOf(ext) < 0) errs.push(App.tf("File type .{v} not allowed (PDF, JPG, PNG, XLSX, DOCX, ZIP)", { v: ext || "?" }));
    if (size > 25 * 1024 * 1024) errs.push(App.t("File larger than 25 MB"));
    return { name: name, size: size, p: p, cat: cat, ext: ext, msgs: errs, status: errs.length ? "error" : "ok" };
  }
  function drawDocs(body) {
    var sp = DM.byId(App.db, App.db.showcase) || App.db.projects[0], sid = (sp.uid || sp.reqNo).replace(/\//g, "-");
    var h = '<div class="note" style="margin-bottom:12px">' + App.icon("info") + "<div>" + App.esc(App.t("Name files as <Project ID>__<category>.<ext>, for example DMFT-RMG-2026-27-MND-0042__dpr.pdf. Files are matched to projects and categories automatically.")) + "<br><strong>" + App.esc(App.t("Category codes")) + ":</strong> " + DM.DOC_CATS.map(function (c) { return '<span class="code">' + c.k + "</span> " + App.esc(App.L(c)); }).join(" | ") + "<br>" + App.esc(App.t("Uploaded files are scanned for malware and checked for type and size before storage.")) + "</div></div>";
    h += '<div class="card"><div class="card-head"><div><label class="btn secondary sm" for="dFiles">' + App.icon("upload", "sm") + App.esc(App.t("Select files")) + '</label><input type="file" id="dFiles" multiple class="sr-only"> <button class="btn ghost sm" type="button" id="dSample">' + App.icon("table", "sm") + App.esc(App.t("Load sample file names")) + "</button></div>" +
      (S.docs ? '<button class="btn sm" type="button" id="dGo"' + (S.docs.filter(function (d) { return d.status === "ok"; }).length ? "" : " disabled") + ">" + App.icon("upload", "sm") + App.esc(App.tf("Attach {n} matched files", { n: S.docs.filter(function (d) { return d.status === "ok"; }).length })) + "</button>" : "") + "</div>";
    if (S.ddone) h += '<div class="note ok" style="margin-bottom:10px">' + App.icon("check") + "<div>" + App.esc(App.tf("Attached {n} documents to project repositories.", { n: S.ddone })) + "</div></div>";
    if (S.docs) {
      h += '<div class="table-wrap imp-table"><table class="data"><thead><tr><th>' + App.esc(App.t("File")) + '</th><th class="num">' + App.esc(App.t("Size")) + "</th><th>" + App.esc(App.t("Matched project")) + "</th><th>" + App.esc(App.t("Category")) + "</th><th>" + App.esc(App.t("Result")) + "</th><th>" + App.esc(App.t("Messages")) + "</th></tr></thead><tbody>" +
        S.docs.map(function (d) { return '<tr class="' + (d.status === "ok" ? "row-ok" : "row-err") + '"><td>' + App.esc(d.name) + '</td><td class="num">' + (d.size / 1024 / 1024).toFixed(2) + " MB</td><td>" + (d.p ? App.pidLink(d.p) : "-") + "</td><td>" + (d.cat ? App.esc(App.L(d.cat)) : "-") + "</td><td>" + chip(d.status) + '</td><td class="msgs">' + (d.msgs.length ? "<ul>" + d.msgs.map(function (m) { return "<li>" + App.esc(m) + "</li>"; }).join("") + "</ul>" : '<span class="yes">' + App.icon("tick", "sm") + "</span>") + "</td></tr>"; }).join("") + "</tbody></table></div>";
    } else h += '<div class="empty">' + App.esc(App.t("Upload a file or load the sample file to see the validation preview.")) + "</div>";
    body.innerHTML = h + "</div>";
    body.querySelector("#dFiles").addEventListener("change", function (e) { S.docs = Array.prototype.map.call(e.target.files, function (f) { return matchDoc(f.name, f.size); }); S.ddone = null; drawDocs(body); });
    body.querySelector("#dSample").addEventListener("click", function () {
      var other = App.db.projects.filter(function (p) { return p.uid && p.id !== sp.id; })[3];
      S.docs = [[sid + "__dpr.pdf", 2.4], [sid + "__photo.jpg", 3.1], [sid + "__insp.pdf", 0.8], [(other.uid).replace(/\//g, "-") + "__agr.pdf", 1.2], [(other.uid).replace(/\//g, "-") + "__ho.pdf", 0.6], ["DMFT-RMG-2026-27-ABC-0001__dpr.pdf", 1.1], [sid + "__estimate.pdf", 0.9], [sid + "__aa.exe", 0.2]]
        .map(function (x) { return matchDoc(x[0], Math.round(x[1] * 1024 * 1024)); });
      S.ddone = null; drawDocs(body);
    });
    var gb = body.querySelector("#dGo"); if (gb) gb.addEventListener("click", function () {
      var n = 0, today = App.today(), by = App.session ? App.session.role === "deo" ? "deo" : "cell" : "deo";
      S.docs.filter(function (d) { return d.status === "ok"; }).forEach(function (d) {
        var p = d.p, ex = p.docs.filter(function (x) { return x.cat === d.cat.k && x.name === d.name; })[0];
        if (ex) ex.versions.push({ v: ex.versions.length + 1, date: today, by: by, size: d.size, note: "nw" });
        else p.docs.push({ id: "D" + (p.docs.length + 1), cat: d.cat.k, name: d.name, type: d.ext, access: "internal", versions: [{ v: 1, date: today, by: by, size: d.size, note: "up" }] });
        n++;
      });
      App.log("import", { en: "Bulk document upload: " + n + " files", hi: "बल्क दस्तावेज़ अपलोड: " + n + " फ़ाइलें" }); App.save();
      S.ddone = n; S.docs = null; App.toast(App.tf("Attached {n} documents to project repositories.", { n: n })); drawDocs(body);
    });
  }
  App.importTest = { validateProjects: validateProjects, rowsToObjs: rowsToObjs, sampleRows: sampleRows, COLS: COLS, importProjects: importProjects, templateRows: templateRows };
})();
