/* DMFT Work Monitoring Portal, Ramgarh - project detail: 10-stage lifecycle, file movement, progress, payments,
   inspections, financial progress, document repository, handover and project map (scope items 1, 3, 4). */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;

  App.addHi({
    "Project not found": "परियोजना नहीं मिली", "No project exists with this ID.": "इस आईडी से कोई परियोजना उपलब्ध नहीं है।", "Back to project register": "परियोजना पंजी पर वापस",
    "This project is outside your jurisdiction. Shown read-only for the demonstration.": "यह परियोजना आपके क्षेत्राधिकार से बाहर है। प्रदर्शन हेतु केवल पठन रूप में।",
    "Ask DMFT AI about this project": "इस परियोजना के बारे में डीएमएफटी एआई से पूछें",
    "Stage {n} of 10": "चरण {n} / 10", "Stage {n}": "चरण {n}", "Lifecycle": "जीवनचक्र", "Project lifecycle (10 stages)": "परियोजना जीवनचक्र (10 चरण)",
    "Click a stage to see the details captured at that stage.": "किसी चरण पर क्लिक कर उस चरण में दर्ज विवरण देखें।",
    "Overview": "सारांश", "File movement": "फ़ाइल संचलन", "Progress & photos": "प्रगति एवं फोटो", "Payments": "भुगतान", "Financial": "वित्तीय", "Documents": "दस्तावेज़", "Handover": "हस्तांतरण", "Map": "मानचित्र",
    "Project tabs": "परियोजना टैब", "Completed on {d}": "{d} को पूर्ण", "In progress": "प्रगति पर", "Not yet reached": "अभी नहीं पहुँचा", "Not yet recorded": "अभी दर्ज नहीं",
    "Details captured at this stage": "इस चरण में दर्ज विवरण", "Movements in this stage": "इस चरण के संचलन", "No file movement recorded for this stage.": "इस चरण में कोई फ़ाइल संचलन दर्ज नहीं।",
    "View full file movement": "पूर्ण फ़ाइल संचलन देखें", "Key facts": "मुख्य तथ्य", "Geo-location": "भौगोलिक स्थिति", "Commencement": "प्रारंभ", "Scheduled completion": "निर्धारित पूर्णता",
    "Latest site photo": "नवीनतम स्थल फोटो", "Expenditure {x}": "व्यय {x}", "Agreement {x}": "एकरारनामा {x}", "Estimate {x}": "प्राक्कलन {x}",
    "All stages completed and handed over. No file is pending.": "सभी चरण पूर्ण एवं हस्तांतरित। कोई फ़ाइल लंबित नहीं।", "Completed and handed over": "पूर्ण एवं हस्तांतरित",
    "since {d}": "{d} से", "{a} days (SLA {s} days)": "{a} दिन (एसएलए {s} दिन)", "SLA breached": "एसएलए उल्लंघन", "Within SLA": "एसएलए के भीतर",
    // movement
    "File movement panel": "फ़ाइल संचलन पैनल", "Approval history": "स्वीकृति इतिहास", "Configured route for stage {n}": "चरण {n} हेतु निर्धारित मार्ग",
    "Remarks (mandatory)": "टिप्पणी (अनिवार्य)", "Remarks are recorded with the date-time stamp and shown in the approval history.": "टिप्पणी दिनांक-समय सहित दर्ज होकर स्वीकृति इतिहास में दिखती है।",
    "Forward to {x}": "{x} को अग्रसारित करें", "Return to {x}": "{x} को वापस करें", "Revert to originator": "मूल प्रस्तुतकर्ता को लौटाएँ", "Resubmit to {x}": "{x} को पुनः प्रस्तुत करें",
    "Approve and complete stage": "स्वीकृत कर चरण पूर्ण करें", "Forward": "अग्रसारित", "Return": "वापस", "Revert": "लौटाएँ", "Resubmit": "पुनः प्रस्तुत", "Approve": "स्वीकृत करें",
    "Submitted": "प्रस्तुत", "Forwarded": "अग्रसारित", "Returned": "वापस किया", "Reverted": "मूल प्रस्तुतकर्ता को लौटाया", "Resubmitted": "पुनः प्रस्तुत", "Approved": "स्वीकृत",
    "Recorded by": "दर्ज कर्ता", "Demo: you act on behalf of the officer at whom the file is pending. Every action is stored with your user ID, date and time.": "डेमो: आप उस पदाधिकारी की ओर से कार्य कर रहे हैं जिनके पास फ़ाइल लंबित है। प्रत्येक कार्रवाई आपकी उपयोगकर्ता आईडी, दिनांक एवं समय सहित दर्ज होती है।",
    "Your role can view the file movement but cannot act on it.": "आपकी भूमिका फ़ाइल संचलन देख सकती है पर कार्रवाई नहीं कर सकती।",
    "Not available at this step": "इस चरण पर उपलब्ध नहीं", "Enter remarks before moving the file.": "फ़ाइल आगे बढ़ाने से पहले टिप्पणी दर्ज करें।",
    "File {a} to {b}.": "फ़ाइल {b} को {a}।", "forwarded": "अग्रसारित", "returned": "वापस", "reverted": "लौटाई गई", "resubmitted": "पुनः प्रस्तुत",
    "Approve stage {n}: {s}": "चरण {n} स्वीकृत करें: {s}", "Capture the details of this stage before approval. Values are prefilled for the demonstration and can be edited.": "स्वीकृति से पहले इस चरण का विवरण दर्ज करें। प्रदर्शन हेतु मान पहले से भरे हैं एवं संपादित किए जा सकते हैं।",
    "These values are computed from the progress, inspection and payment records.": "ये मान प्रगति, निरीक्षण एवं भुगतान अभिलेखों से गणना किए जाते हैं।",
    "Will be generated on approval": "स्वीकृति पर बनेगा", "Approval remarks": "स्वीकृति टिप्पणी", "Approve and move to next stage": "स्वीकृत कर अगले चरण में भेजें",
    "Stage {n} approved. The project moved to stage {m}: {s}.": "चरण {n} स्वीकृत। परियोजना चरण {m} में गई: {s}।", "Unique Project ID generated: {id}": "विशिष्ट परियोजना आईडी बनी: {id}",
    "Handover recorded. The project is now complete.": "हस्तांतरण दर्ज। परियोजना अब पूर्ण है।", "Progress is below 100%, so the cycle returns to Physical Progress (stages 6 to 9 repeat until completion).": "प्रगति 100% से कम है, अतः चक्र भौतिक प्रगति पर लौटता है (पूर्णता तक चरण 6 से 9 दोहराए जाते हैं)।",
    "Current file": "वर्तमान फ़ाइल", "Select contractor": "संवेदक चुनें", "Chosen file": "चयनित फ़ाइल", "Uploaded": "अपलोड",
    // progress
    "Physical progress history": "भौतिक प्रगति इतिहास", "Add progress update": "प्रगति अद्यतन जोड़ें", "Progress (%)": "प्रगति (%)", "Increment": "वृद्धि", "Recorded by ": "दर्ज कर्ता ",
    "Geo-tag": "जियो-टैग", "Verified": "सत्यापित", "Not verified": "असत्यापित", "Geo-tagged photographs": "जियो-टैग फोटो", "Before": "पूर्व", "During": "दौरान", "After": "पश्चात",
    "Progress trend": "प्रगति प्रवृत्ति", "Expected by time elapsed": "बीते समय अनुसार अपेक्षित", "Last update": "अंतिम अद्यतन",
    "Physical progress is recorded after work commencement (stage 5).": "भौतिक प्रगति कार्य प्रारंभ (चरण 5) के बाद दर्ज होती है।",
    "Progress date": "प्रगति दिनांक", "Field observation": "क्षेत्र अवलोकन", "Site photograph": "स्थल फोटो", "Capture GPS location": "जीपीएस स्थान लें", "Location captured": "स्थान प्राप्त",
    "GPS not available; project location used as sample coordinate.": "जीपीएस उपलब्ध नहीं; परियोजना स्थान को नमूना निर्देशांक के रूप में लिया गया।",
    "Progress must be between the last recorded value and 100.": "प्रगति अंतिम दर्ज मान एवं 100 के बीच होनी चाहिए।", "Enter a field observation.": "क्षेत्र अवलोकन दर्ज करें।",
    "Progress updated to {p}%.": "प्रगति {p}% पर अद्यतन की गई।", "Save progress": "प्रगति सहेजें", "Sample photo generated from site data": "स्थल डाटा से बनी नमूना फोटो",
    "Captured on device": "डिवाइस पर ली गई", "Physical progress (%)": "भौतिक प्रगति (%)", "Financial progress (%)": "वित्तीय प्रगति (%)",
    // payments
    "Payment requisitions": "भुगतान अधियाचनाएँ", "Raise payment requisition": "भुगतान अधियाचना करें", "Requisition date": "अधियाचना दिनांक", "Letter no.": "पत्रांक",
    "Requisition amount (Rs)": "अधियाचना राशि (रु.)", "Supporting documents": "सहायक दस्तावेज़", "Release": "जारी करें", "Released": "जारी", "Pending": "लंबित", "Released on": "जारी दिनांक",
    "UC": "उपयोगिता प्रमाण-पत्र", "UC submitted": "उपयोगिता प्रमाण-पत्र जमा", "UC pending": "उपयोगिता प्रमाण-पत्र लंबित", "Mark UC submitted": "उपयोगिता प्रमाण-पत्र जमा दर्ज करें",
    "Release payment": "भुगतान जारी करें", "Release date": "जारी करने की तिथि", "Amount released (Rs)": "जारी राशि (रु.)", "No payment requisition yet.": "अभी कोई भुगतान अधियाचना नहीं।",
    "Payment requisition {n} raised and sent to the Accounts Officer.": "भुगतान अधियाचना {n} की गई एवं लेखा पदाधिकारी को भेजी गई।", "Payment of {x} released.": "{x} का भुगतान जारी किया गया।",
    "Enter an amount within the agreement balance.": "एकरारनामा शेष के भीतर राशि दर्ज करें।", "Payments start after the agreement is signed (stage 5).": "भुगतान एकरारनामा (चरण 5) के बाद प्रारंभ होते हैं।",
    "Requisitioned": "अधियाचित", "Balance": "शेष", "Agreement amount": "एकरारनामा राशि", "Instalment": "किस्त", "Bill amount": "बिल राशि",
    // inspections
    "Inspections of this project": "इस परियोजना के निरीक्षण", "Open inspection module": "निरीक्षण मॉड्यूल खोलें", "Team": "दल", "Observation": "अवलोकन", "Deficiency": "कमी",
    "Action assigned to": "कार्रवाई हेतु नामित", "Due date": "नियत तिथि", "Compliance": "अनुपालन", "Verification": "सत्यापन", "Scheduled": "निर्धारित", "Action pending": "कार्रवाई लंबित", "Closed": "बंद",
    "No inspection recorded yet.": "अभी कोई निरीक्षण दर्ज नहीं।", "None": "कोई नहीं",
    // financial
    "AA amount": "प्रशासनिक स्वीकृति राशि", "Bills submitted": "प्रस्तुत बिल", "Payment released": "जारी भुगतान", "Instalment-wise payments": "किस्तवार भुगतान", "Physical vs financial progress": "भौतिक बनाम वित्तीय प्रगति",
    "Physical {a}% vs financial {b}%.": "भौतिक {a}% बनाम वित्तीय {b}%।", "UC date": "उपयोगिता प्रमाण-पत्र दिनांक",
    // documents
    "Document repository": "दस्तावेज़ भंडार", "Upload document": "दस्तावेज़ अपलोड करें", "Document category": "दस्तावेज़ श्रेणी", "File": "फ़ाइल", "Access": "पहुँच", "Public": "सार्वजनिक", "Internal": "आंतरिक",
    "Version": "संस्करण", "Updated": "अद्यतन", "Size": "आकार", "History": "इतिहास", "New version": "नया संस्करण", "No document uploaded yet": "अभी कोई दस्तावेज़ अपलोड नहीं",
    "Version history": "संस्करण इतिहास", "Note": "टिप्पणी", "User": "उपयोगकर्ता",
    "Access control: Public documents (AA, progress photos, handover) appear on the public dashboard. Internal documents are visible only to roles with Document repository permission within their jurisdiction. Every upload and view is recorded in the audit log.": "पहुँच नियंत्रण: सार्वजनिक दस्तावेज़ (प्रशासनिक स्वीकृति, प्रगति फोटो, हस्तांतरण) सार्वजनिक डैशबोर्ड पर दिखते हैं। आंतरिक दस्तावेज़ केवल दस्तावेज़ भंडार अनुमति वाली भूमिकाओं को उनके क्षेत्राधिकार में दिखते हैं। प्रत्येक अपलोड एवं अवलोकन ऑडिट लॉग में दर्ज होता है।",
    "Choose a file to upload.": "अपलोड हेतु फ़ाइल चुनें।", "File type not allowed. Use PDF, Word, Excel, JPG, PNG or ZIP.": "फ़ाइल प्रकार अनुमत नहीं। पीडीएफ, वर्ड, एक्सेल, जेपीजी, पीएनजी या ज़िप उपयोग करें।",
    "File is larger than 25 MB.": "फ़ाइल 25 एमबी से बड़ी है।", "{f} uploaded as version {v}.": "{f} संस्करण {v} के रूप में अपलोड।", "{n} documents in {c} categories": "{c} श्रेणियों में {n} दस्तावेज़",
    "Allowed: PDF, Word, Excel, JPG, PNG, ZIP up to 25 MB. Only file details are stored in this prototype.": "अनुमत: पीडीएफ, वर्ड, एक्सेल, जेपीजी, पीएनजी, ज़िप (25 एमबी तक)। इस प्रोटोटाइप में केवल फ़ाइल विवरण सहेजे जाते हैं।",
    "Category": "श्रेणी", "Document": "दस्तावेज़", "Uploaded by": "अपलोडकर्ता",
    // handover
    "Handover details": "हस्तांतरण विवरण", "Handover is recorded after the work reaches 100% physical progress.": "कार्य की भौतिक प्रगति 100% होने के बाद हस्तांतरण दर्ज होता है।",
    "Handover is pending at {x}.": "हस्तांतरण {x} के पास लंबित है।", "Go to file movement": "फ़ाइल संचलन पर जाएँ",
    // map
    "Project location": "परियोजना स्थान", "to": "को", "Requisition pending": "अधियाचना लंबित", "{n} paid": "{n} भुगतान", "Not yet": "अभी नहीं", "Inspection open": "निरीक्षण खुला",
    "Approve handover and close the project": "हस्तांतरण स्वीकृत कर परियोजना बंद करें",
    "Request details were captured at registration. Approval accepts the request for Gram Sabha and committee consideration.": "अनुरोध का विवरण पंजीकरण के समय दर्ज हुआ। स्वीकृति से अनुरोध ग्राम सभा एवं समिति के विचार हेतु स्वीकार होता है।",
    "Physical progress is taken from the geo-tagged progress records. Approval confirms physical completion (100%).": "भौतिक प्रगति जियो-टैग प्रगति अभिलेखों से ली जाती है। स्वीकृति भौतिक पूर्णता (100%) की पुष्टि करती है।",
    "These values are taken from the inspection records.": "ये मान निरीक्षण अभिलेखों से लिए गए हैं।", "These values are taken from the payment and utilisation records.": "ये मान भुगतान एवं उपयोगिता अभिलेखों से लिए गए हैं।",
    "Stage 6 can be approved only when physical progress reaches 100% (now {p}%). While the work is in execution, stages 6 to 9 run together: progress updates, payment requisitions, inspections and expenditure are recorded in their tabs.": "भौतिक प्रगति 100% होने पर ही चरण 6 स्वीकृत हो सकता है (अभी {p}%)। कार्य निष्पादन के दौरान चरण 6 से 9 साथ-साथ चलते हैं: प्रगति अद्यतन, भुगतान अधियाचना, निरीक्षण एवं व्यय अपने-अपने टैब में दर्ज होते हैं।", "Other works in this panchayat": "इस पंचायत के अन्य कार्य", "Latitude": "अक्षांश", "Longitude": "देशांतर"
  });

  var ACT = { submit: ["send", "fw", "Submitted"], forward: ["arrow-right", "fw", "Forwarded"], "return": ["return", "rt", "Returned"], revert: ["undo", "rv", "Reverted"], resubmit: ["redo", "rs", "Resubmitted"], approve: ["tick", "ap", "Approved"] };
  var DOC_FOR = { gramSabhaFile: "gs", procFile: "proc", dprFile: "dpr", taFile: "ta", aaFile: "aa", reqDocs: "payreq", finalDocs: "ho", inspReport: "insp", letterFile: "rec" };
  var TABS = [["overview", "Overview", "dashboard"], ["movement", "File movement", "send"], ["progress", "Progress & photos", "camera"], ["payments", "Payments", "rupee"], ["inspections", "Inspections", "clipboard"], ["financial", "Financial", "wallet"], ["documents", "Documents", "folder"], ["handover", "Handover", "flag"], ["map", "Map", "map"]];
  var INS_ST = { scheduled: ["Scheduled", "st-tender"], action: ["Action pending", "st-delayed"], closed: ["Closed", "st-completed"] };

  function slaCat(p) {
    var s = p.stage, sf = p.sf;
    if (s <= 2) return "approval"; if (s === 3) return sf[3] && sf[3].dprDate ? "ta" : "dpr"; if (s === 4) return "aa";
    if (s === 5) { var s5 = sf[5] || {}; return !s5.bidOpen ? "tender" : !s5.agreementDate ? "agreement" : "commencement"; }
    if (s === 6) return "progress"; if (s === 7 || s === 9) return "payment"; if (s === 8) return "inspection"; return "handover";
  }
  function ageInfo(p) {
    if (!p.pendingSince) return null;
    var age = App.ago(p.pendingSince), sla = App.db.sla[slaCat(p)] || 30;
    return { age: age, sla: sla, cls: age > sla ? "over" : age > sla * 0.75 ? "near" : "ok" };
  }
  // Key date of a stage, used when no approve movement exists
  function keyDate(p, n) {
    var sf = p.sf, pays = (p.payments || []).filter(function (x) { return x.releasedOn; }), lastP = (p.progress || [])[p.progress.length - 1];
    switch (n) {
      case 1: return sf[1] && sf[1].letterDate; case 2: return sf[2] && (sf[2].mcDate || sf[2].gramSabhaDate); case 3: return sf[3] && sf[3].taDate; case 4: return sf[4] && sf[4].aaDate;
      case 5: return sf[5] && sf[5].commencementDate; case 6: return (sf[10] && sf[10].completionDate) || (lastP && lastP.pct >= 100 ? lastP.date : null);
      case 7: return p.payments.length ? p.payments[p.payments.length - 1].date : null; case 8: return sf[8] && sf[8].inspDate;
      case 9: return (sf[9] && sf[9].lastPayDate) || (pays.length ? pays[pays.length - 1].releasedOn : null); case 10: return sf[10] && sf[10].handoverDate;
    }
    return null;
  }
  // st: done | cur | act (runs concurrently during execution) | todo
  function stageState(p, n) {
    var a = p.movements.filter(function (m) { return m.stage === n && m.action === "approve"; });
    var appr = a.length ? a[a.length - 1].ts.slice(0, 10) : null;
    var executing = p.stage >= 6 && p.stage <= 9 && DM.status(p) === "ongoing";
    if (executing && n >= 6 && n <= 9) {
      var cur = !!(p.wf && p.wf.stage === n), out = { st: cur ? "cur" : "act", note: "" };
      if (n === 6) out.note = (p.physical || 0) + "%";
      if (n === 7) { var pend = p.payments.filter(function (x) { return x.status === "pending"; }).length; out.note = pend ? App.t("Requisition pending") : p.payments.length ? App.tf("{n} paid", { n: p.payments.length }) : App.t("Not yet"); if (!pend && !p.payments.length && !cur) out.st = "todo"; }
      if (n === 8) { var open = App.db.inspections.filter(function (i) { return i.pid === p.id && (i.status === "scheduled" || i.status === "action"); }).length, any = App.db.inspections.some(function (i) { return i.pid === p.id; }); out.note = open ? App.t("Inspection open") : any ? App.t("In progress") : App.t("Not yet"); if (!open && !any && !cur) out.st = "todo"; }
      if (n === 9) { var ex = DM.expenditure(p); out.note = ex ? DM.finPct(p) + "%" : App.t("Not yet"); if (!ex && !cur) out.st = "todo"; }
      return out;
    }
    if (p.wf && p.wf.stage === n) return { st: "cur", note: App.t("In progress") };
    var done = n < p.stage || (n === 10 && !p.wf && p.sf[10] && p.sf[10].handoverDate);
    if (done) return { st: "done", date: appr || keyDate(p, n) };
    return { st: "todo" };
  }
  function fileSize(b) { b = +b || 0; return b >= 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB"; }
  function extOf(n) { return (String(n).split(".").pop() || "").toUpperCase().slice(0, 4); }

  function fmtField(p, n, f) {
    var v = p.sf[n] ? p.sf[n][f.k] : null;
    if (n === 6 && f.k === "physicalPct" && v == null && p.stage >= 6) v = p.physical || 0;
    if (v == null || v === "") return '<span class="muted">' + App.esc(App.t("Not yet recorded")) + "</span>";
    if (f.k === "contractor") return '<a href="#/contractor/' + App.esc(v) + '">' + App.esc(App.contractorName(v)) + "</a>";
    if (f.t === "date") return App.esc(App.date(v));
    if (f.t === "money") return App.moneyT(v);
    if (f.t === "pct") return App.esc(v) + "%";
    if (f.t === "file") return '<button type="button" class="doc-chip" data-gotab="documents">' + App.icon("file", "sm") + "<span>" + App.esc(v) + "</span></button>";
    if (typeof v === "object") return App.esc(App.L(v));
    if (typeof v === "string" && DM.TXT[v]) return App.esc(App.tx(v));
    return App.esc(String(v));
  }

  App.view("project", {
    kind: "officer", perm: "dashboard",
    title: function (r) { var p = find(r.params.id); return p ? DM.displayId(p) : App.t("Project not found"); },
    render: function (main, route) { draw(main, route); }
  });
  function find(id) { if (id === "showcase") id = App.db.showcase; return DM.byId(App.db, id); }

  function draw(main, route) {
    var p = find(route.params.id);
    if (!p) {
      main.innerHTML = App.pageHead(App.t("Project not found"), "", "", [[App.t("Dashboard"), "#/dashboard"], [App.t("All Projects"), "#/projects"], [App.t("Project not found")]]) +
        '<div class="note warn">' + App.icon("info") + "<div>" + App.esc(App.t("No project exists with this ID.")) + ' <a href="#/projects">' + App.esc(App.t("Back to project register")) + "</a></div></div>";
      return;
    }
    var tab = route.query.tab || "overview"; if (!TABS.some(function (t) { return t[0] === tab; })) tab = "overview";
    var selStage = +(route.query.stage || p.stage); if (!(selStage >= 1 && selStage <= 10)) selStage = p.stage;
    var inScope = App.scoped().indexOf(p) >= 0;
    var ds = DM.dstatus(p), ai = ageInfo(p), s5 = p.sf[5] || {};
    var sub = '<span class="id-line"><span>' + App.esc(App.t("Request No.")) + ": <strong>" + App.esc(p.reqNo) + "</strong></span><span>" + App.esc(App.t("Unique Project ID")) + ": <strong>" + (p.uid ? App.esc(p.uid) : '<em class="muted">' + App.esc(App.t("Not yet assigned")) + "</em>") + "</strong></span><span>" +
      App.esc(App.blockName(p.block)) + " / " + App.esc(App.panchayatName(p)) + " / " + App.esc(App.villageName(p)) + "</span><span>" + App.esc(App.deptName(p.dept)) + "</span></span>";
    var actions = (App.can("ai", "view") ? '<a class="btn secondary sm" href="#/ai?pid=' + p.id + "&q=" + encodeURIComponent("Summarize the status of this project") + '">' + App.icon("sparkle") + App.esc(App.t("Ask DMFT AI about this project")) + "</a>" : "") +
      '<button type="button" class="btn secondary sm" data-print>' + App.icon("print") + App.esc(App.t("Print / PDF")) + "</button>";
    var h = '<div class="pd-top">' + App.crumbs([[App.t("Dashboard"), "#/dashboard"], [App.t("All Projects"), "#/projects"], [DM.displayId(p)]]) + '<div class="ph-actions">' + App.sampleTag() + actions + "</div></div>" +
      '<h1 class="pd-h1">' + App.esc(App.pname(p)) + '</h1><p class="ph-sub pd-sub">' + sub + "</p>";
    if (!inScope) h += '<div class="note warn" style="margin-bottom:12px">' + App.icon("lock") + "<span>" + App.esc(App.t("This project is outside your jurisdiction. Shown read-only for the demonstration.")) + "</span></div>";

    // Summary strip
    var amtSub = s5.agreementAmount ? App.tf("Agreement {x}", { x: App.money(s5.agreementAmount) }) : App.tf("Estimate {x}", { x: App.money(p.estimate) });
    var pend = p.pendingAt ? '<div class="ps-pend ' + (ai ? ai.cls : "") + '">' + App.icon("pending") + '<div><span class="ps-l">' + App.esc(App.t("Pending at")) + "</span><strong>" + App.esc(App.desig(p.pendingAt, p)) + '</strong><span class="small">' + App.esc(App.tf("since {d}", { d: App.dt(p.pendingSince) })) + (ai ? ' | <span class="age ' + ai.cls + '">' + App.esc(App.tf("{a} days (SLA {s} days)", { a: ai.age, s: ai.sla })) + "</span>" : "") + "</span></div></div>"
      : '<div class="ps-pend ok">' + App.icon("check") + '<div><span class="ps-l">' + App.esc(App.t("Status")) + "</span><strong>" + App.esc(App.t("Completed and handed over")) + "</strong></div></div>";
    h += '<section class="card pd-sum" aria-label="' + App.esc(App.t("Key facts")) + '">' +
      '<div><span class="ps-l">' + App.esc(App.t("Status")) + '</span><div class="ps-chips">' + App.statusChip(ds) + (ds === "delayed" ? App.statusChip(DM.status(p)) : "") + '</div><span class="small muted">' + App.esc(App.tf("Stage {n} of 10", { n: p.stage })) + ": " + App.esc(App.stageName(p.stage)) + "</span></div>" +
      '<div><span class="ps-l">' + App.esc(App.t(DM.approved(p) ? "Approved amount" : "Estimated amount")) + '</span><span class="ps-v">' + App.moneyT(DM.amount(p)) + '</span><span class="small muted">' + App.esc(amtSub) + "</span></div>" +
      '<div><span class="ps-l">' + App.esc(App.t("Physical progress")) + "</span>" + App.bar(p.physical || 0) + '<span class="small muted">' + App.esc(App.t("Last update")) + ": " + App.esc(App.date(DM.lastProgressDate(p))) + "</span></div>" +
      '<div><span class="ps-l">' + App.esc(App.t("Financial progress")) + "</span>" + App.bar(DM.finPct(p), true) + '<span class="small muted">' + App.esc(App.tf("Expenditure {x}", { x: App.money(DM.expenditure(p)) })) + "</span></div>" +
      pend + "</section>";

    // Stepper
    h += '<section class="card pd-steps" aria-labelledby="stTitle"><div class="card-head"><h2 id="stTitle">' + App.esc(App.t("Project lifecycle (10 stages)")) + ' <span class="ch-sub st-hint">' + App.esc(App.t("Click a stage to see the details captured at that stage.")) + '</span></h2></div><ol class="stepper">';
    DM.STAGES.forEach(function (s) {
      var ss = stageState(p, s.n), done = ss.st === "done", cur = ss.st === "cur", late = cur && ai && ai.cls === "over";
      var cls = "step" + (done ? " done" : "") + (cur ? " cur" : "") + (ss.st === "act" ? " act" : "") + (late ? " late" : "") + (s.n === selStage && tab === "overview" ? " sel" : "");
      var when = done ? (ss.date ? App.date(String(ss.date).slice(0, 10)) : "") : (cur || ss.st === "act") ? (ss.note || App.t("In progress")) : "";
      h += '<li class="' + cls + '"><button type="button" class="step-btn" data-stage="' + s.n + '"' + (cur ? ' aria-current="step"' : "") + ' aria-label="' + App.esc(App.tf("Stage {n}", { n: s.n }) + ": " + App.L(s) + (when ? " - " + when : "")) + '"><span class="dot">' + (done ? App.icon("tick", "sm") : s.n) + '</span><span class="sl">' + App.esc(App.L(s.s)) + '</span><span class="sw">' + App.esc(when) + "</span></button></li>";
    });
    h += "</ol></section>";

    // Tabs
    h += '<div class="tabs pd-tabs" role="tablist" aria-label="' + App.esc(App.t("Project tabs")) + '">' + TABS.map(function (t) {
      var n = t[0] === "documents" ? p.docs.length : t[0] === "inspections" ? App.db.inspections.filter(function (i) { return i.pid === p.id; }).length : t[0] === "movement" ? p.movements.length : 0;
      return '<button type="button" role="tab" id="tab-' + t[0] + '" aria-controls="pdTab" aria-selected="' + (t[0] === tab) + '" tabindex="' + (t[0] === tab ? 0 : -1) + '" data-tab="' + t[0] + '">' + App.icon(t[2], "sm") + App.esc(App.t(t[1])) + (n ? ' <span class="pill-n">' + n + "</span>" : "") + "</button>";
    }).join("") + '</div><div id="pdTab" role="tabpanel" aria-labelledby="tab-' + tab + '" tabindex="0"></div>';
    main.innerHTML = h;

    var panel = main.querySelector("#pdTab");
    function go(t, extra) {
      App.destroyCharts(); (App.cleanupMaps || []).forEach(function (m) { try { m.remove(); } catch (e) { /* detached */ } }); App.cleanupMaps = [];
      var q = { tab: t }; if (extra) for (var k in extra) q[k] = extra[k];
      App.setQuery(q); draw(main, App.route);
      var tb = main.querySelector('[data-tab="' + t + '"]'); if (tb) tb.focus();
    }
    App.qsa("[data-tab]", main).forEach(function (b) { b.addEventListener("click", function () { go(b.getAttribute("data-tab")); }); });
    main.querySelector('[role="tablist"]').addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var bs = App.qsa("[data-tab]", main), i = bs.indexOf(document.activeElement); if (i < 0) return;
      var n = bs[(i + (e.key === "ArrowRight" ? 1 : bs.length - 1)) % bs.length]; n.focus(); e.preventDefault();
    });
    App.qsa("[data-stage]", main).forEach(function (b) { b.addEventListener("click", function () { go("overview", { stage: b.getAttribute("data-stage") }); }); });
    main.querySelector("[data-print]").addEventListener("click", App.print);
    var ctx = { p: p, main: main, route: route, go: go, refresh: function (t) { var y = window.scrollY; App.destroyCharts(); draw(main, App.route); window.scrollTo(0, y); if (t) App.toast(t); } };
    RENDER[tab](panel, ctx, selStage);
    panel.addEventListener("click", function (e) { var g = e.target.closest("[data-gotab]"); if (g) go(g.getAttribute("data-gotab")); });
  }

  // ---------------- Tab renderers ----------------
  var RENDER = {};

  RENDER.overview = function (el, c, n) {
    var p = c.p, st = DM.stage(n), ss = stageState(p, n), done = ss.st === "done" ? (ss.date || true) : null, cur = ss.st === "cur" || ss.st === "act";
    var state = cur ? '<span class="chip st-ongoing">' + App.esc(App.t("In progress")) + "</span>" : done ? '<span class="chip st-completed">' + App.esc(done === true ? App.t("Approved") : App.tf("Completed on {d}", { d: App.date(String(done).slice(0, 10)) })) + "</span>" : '<span class="chip st-proposed">' + App.esc(App.t("Not yet reached")) + "</span>";
    var fields = DM.STAGE_FIELDS[n].map(function (f) { return "<div><dt>" + App.esc(App.L(f)) + "</dt><dd>" + fmtField(p, n, f) + "</dd></div>"; }).join("");
    var mv = p.movements.filter(function (m) { return m.stage === n; }).slice(-4).reverse();
    var s5 = p.sf[5] || {}, last = (p.progress || [])[p.progress.length - 1];
    var h = '<div class="grid g-3-2"><div class="card"><div class="card-head"><div><h2>' + App.esc(App.tf("Stage {n}", { n: n })) + ": " + App.esc(App.L(st)) + '</h2><p class="ch-sub">' + App.esc(App.t("Details captured at this stage")) + "</p></div>" + state + '</div><dl class="kv k3">' + fields + "</dl>" +
      '<h3 class="sub-h">' + App.esc(App.t("Movements in this stage")) + "</h3>" + (mv.length ? timeline(p, mv, false) : '<p class="muted small">' + App.esc(App.t("No file movement recorded for this stage.")) + "</p>") +
      '<button type="button" class="btn ghost sm" data-gotab="movement">' + App.esc(App.t("View full file movement")) + App.icon("arrow-right", "sm") + "</button></div>" +
      '<div class="card"><figure class="photo pd-cover"><img src="' + App.coverPhoto(p) + '" alt="' + App.esc(App.t("Latest site photo") + ": " + App.pname(p)) + '"><figcaption><strong>' + App.esc(App.t("Latest site photo")) + "</strong>" + App.esc(App.t("Sample photo generated from site data")) + (last ? " | " + App.esc(App.date(last.date)) : "") + "</figcaption></figure>" +
      '<h3 class="sub-h">' + App.esc(App.t("Key facts")) + '</h3><dl class="kv">' +
      kv("Sector", App.esc(App.sectorName(p.sector))) + kv("Work type", App.esc(App.L((DM.work(p.workKey) || {}).t || { en: "-", hi: "-" }))) + kv("Financial Year", App.esc(p.fy)) + kv("Department", App.esc(App.deptName(p.dept))) +
      kv("Contractor", s5.contractor ? '<a href="#/contractor/' + s5.contractor + '">' + App.esc(App.contractorName(s5.contractor)) + "</a>" : "-") + kv("Recommended by", App.esc(App.L(p.sf[1] && p.sf[1].recBy) || "-")) +
      kv("Commencement", App.esc(App.date(s5.commencementDate))) + kv("Scheduled completion", App.esc(App.date(s5.plannedCompletion))) +
      kv("Geo-location", App.esc(p.loc[0].toFixed(5) + " N, " + p.loc[1].toFixed(5) + " E") + ' <button type="button" class="btn ghost sm" data-gotab="map">' + App.icon("map", "sm") + App.esc(App.t("Map")) + "</button>") + "</dl></div></div>";
    el.innerHTML = h;
  };
  function kv(l, v) { return "<div><dt>" + App.esc(App.t(l)) + "</dt><dd>" + v + "</dd></div>"; }

  function timeline(p, list, stageHeads) {
    var h = '<ol class="timeline">', lastStage = null;
    list.forEach(function (m) {
      if (stageHeads && m.stage !== lastStage) { h += '<li class="tl-stage"><span>' + App.esc(App.tf("Stage {n}", { n: m.stage })) + ": " + App.esc(App.stageName(m.stage)) + "</span></li>"; lastStage = m.stage; }
      var a = ACT[m.action] || ACT.forward;
      h += '<li><span class="tdot ' + a[1] + '">' + App.icon(a[0]) + '</span><div class="th">' + App.esc(App.t(a[2])) + ": " + App.esc(App.desig(m.f, p)) + (m.t ? ' <span aria-hidden="true">&rarr;</span><span class="sr-only">' + App.esc(App.t("to")) + '</span> ' + App.esc(App.desig(m.t, p)) : "") + "</div>" +
        '<div class="tm">' + App.icon("clock", "sm") + " " + App.esc(App.dt(m.ts)) + (stageHeads ? "" : " | " + App.esc(App.stageShort(m.stage))) + (m.u ? " | " + App.esc(App.t("Recorded by")) + " " + App.esc(m.u) : "") + "</div>" +
        (m.r ? '<div class="tr">' + App.esc(App.tx(m.r)) + "</div>" : "") + "</li>";
    });
    return h + "</ol>";
  }

  RENDER.movement = function (el, c) {
    var p = c.p, ai = ageInfo(p);
    var left = '<div class="card mv-panel"><div class="card-head"><h2>' + App.icon("send") + " " + App.esc(App.t("File movement panel")) + "</h2></div>";
    if (!p.wf) left += '<div class="note ok">' + App.icon("check") + "<span>" + App.esc(App.t("All stages completed and handed over. No file is pending.")) + "</span></div>";
    else {
      var ch = DM.CHAIN[p.wf.stage], idx = p.wf.idx;
      left += '<div class="pending-at">' + App.icon("pending", "lg") + '<div><div class="small muted">' + App.esc(App.t("Pending at")) + " | " + App.esc(App.tf("Stage {n}", { n: p.wf.stage })) + ": " + App.esc(App.stageName(p.wf.stage)) + "</div><strong>" + App.esc(App.desig(p.pendingAt, p)) + '</strong><div class="small">' + App.esc(App.tf("since {d}", { d: App.dt(p.pendingSince) })) + (ai ? ' | <span class="age ' + ai.cls + '">' + App.esc(App.tf("{a} days (SLA {s} days)", { a: ai.age, s: ai.sla })) + "</span> " + (ai.cls === "over" ? '<span class="chip st-delayed">' + App.esc(App.t("SLA breached")) + "</span>" : '<span class="chip st-completed">' + App.esc(App.t("Within SLA")) + "</span>") : "") + "</div></div></div>";
      if (!App.can("movement", "act")) left += '<div class="note">' + App.icon("lock") + "<span>" + App.esc(App.t("Your role can view the file movement but cannot act on it.")) + "</span></div>";
      else {
        var gate6 = p.wf.stage === 6 && (p.physical || 0) < 100;
        var btn = function (act, label, cls, icon) { var ok = App.wf.can(p, act) && !(act === "approve" && gate6); return '<button type="button" class="btn ' + cls + '" data-act="' + act + '"' + (ok ? "" : ' disabled title="' + App.esc(App.t("Not available at this step")) + '"') + ">" + App.icon(icon) + App.esc(label) + "</button>"; };
        var rf = p.wf.returnedFrom;
        left += '<div class="field"><label for="mvRem">' + App.esc(App.t("Remarks (mandatory)")) + ' <span class="req">*</span></label><textarea class="input" id="mvRem" maxlength="500" aria-describedby="mvRemH mvRemE"></textarea><span class="hint" id="mvRemH">' + App.esc(App.t("Remarks are recorded with the date-time stamp and shown in the approval history.")) + '</span><span class="err" id="mvRemE" hidden></span></div>' +
          '<div class="mv-btns">' +
          btn("forward", idx < ch.length - 1 ? App.tf("Forward to {x}", { x: App.desig(ch[idx + 1], p) }) : App.t("Forward"), "", "arrow-right") +
          btn("approve", App.t(p.wf.stage === 10 ? "Approve handover and close the project" : "Approve and complete stage"), "success", "tick") +
          btn("return", idx > 0 ? App.tf("Return to {x}", { x: App.desig(ch[idx - 1], p) }) : App.t("Return"), "warn", "return") +
          btn("revert", App.t("Revert to originator"), "warn", "undo") +
          btn("resubmit", rf != null ? App.tf("Resubmit to {x}", { x: App.desig(ch[rf], p) }) : App.t("Resubmit"), "secondary", "redo") +
          '</div>' + (gate6 ? '<p class="note warn mv-gate">' + App.icon("info") + "<span>" + App.esc(App.tf("Stage 6 can be approved only when physical progress reaches 100% (now {p}%). While the work is in execution, stages 6 to 9 run together: progress updates, payment requisitions, inspections and expenditure are recorded in their tabs.", { p: p.physical || 0 })) + "</span></p>" : "") + '<p class="small muted mv-demo">' + App.icon("info", "sm") + " " + App.esc(App.t("Demo: you act on behalf of the officer at whom the file is pending. Every action is stored with your user ID, date and time.")) + "</p>";
      }
      left += '<p class="small muted mv-route-h">' + App.esc(App.tf("Configured route for stage {n}", { n: p.wf.stage })) + '</p><ol class="mv-route">' + ch.map(function (k, i) {
        return '<li class="' + (i < idx ? "done" : i === idx ? "cur" : "") + '"' + (i === idx ? ' aria-current="step"' : "") + "><span>" + (i < idx ? App.icon("tick", "sm") : i + 1) + "</span>" + App.esc(App.desig(k, p)) + "</li>";
      }).join("") + "</ol>";

    }
    left += "</div>";
    var all = p.movements.slice().reverse();
    var right = '<div class="card"><div class="card-head"><h2>' + App.icon("history") + " " + App.esc(App.t("Approval history")) + '</h2><span class="pill-n">' + all.length + '</span></div><div class="mv-hist" tabindex="0" aria-label="' + App.esc(App.t("Approval history")) + '">' + timeline(p, all, true) + "</div></div>";
    el.innerHTML = '<div class="grid mv-grid">' + left + right + "</div>";

    App.qsa("[data-act]", el).forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-act"), rem = el.querySelector("#mvRem"), er = el.querySelector("#mvRemE");
        if (act === "approve") { approveModal(c, rem.value.trim()); return; }
        if (!rem.value.trim()) { er.hidden = false; er.textContent = App.t("Enter remarks before moving the file."); rem.setAttribute("aria-invalid", "true"); rem.focus(); return; }
        var err = App.wf.act(p, act, rem.value.trim());
        if (err) { er.hidden = false; er.textContent = err; return; }
        var verb = { forward: "forwarded", "return": "returned", revert: "reverted", resubmit: "resubmitted" }[act];
        c.refresh(App.tf("File {a} to {b}.", { a: App.t(verb), b: App.desig(p.pendingAt, p) }));
      });
    });
  };

  function suggest(p, st, k) {
    var t = App.today(), y = t.slice(0, 4), dc = DM.dept(p.dept).code, add = DM.util.addDays, w = DM.work(p.workKey) || { du: [120, 240] };
    var appr = (p.sf[4] && p.sf[4].approvedAmount) || (p.sf[3] && p.sf[3].estAmount) || p.estimate;
    var S = {
      gramSabhaDate: add(t, -7), gcDate: add(t, -2), mcDate: t, mcItem: "Agenda item 12 - approved for DPR", dprDate: add(t, -5), estAmount: p.estimate, taNo: "TA/" + dc + "/" + y + "/" + (100 + p.movements.length), taDate: t,
      aaNo: "AA/DMFT/" + y + "/" + (600 + p.movements.length), aaDate: t, approvedAmount: appr, commDate: t,
      tenderFloat: add(t, -35), tenderClose: add(t, -15), bidOpen: add(t, -13), agreementNo: "AGR/" + dc + "/" + y + "/" + (50 + p.movements.length), agreementDate: add(t, -5), agreementAmount: Math.round(appr * 0.955 / 1000) * 1000,
      shilanyasDate: add(t, -2), commencementDate: t, plannedCompletion: add(t, w.du[1]), reqDate: t, reqLetter: "PR/" + dc + "/" + y + "/" + (300 + p.movements.length),
      reqAmount: Math.round(((p.sf[5] && p.sf[5].agreementAmount) || appr) * 0.3), completionDate: t, handoverDate: t, handoverLetter: "HO/" + dc + "/" + y + "/" + (20 + p.movements.length),
      handoverDept: App.deptName(p.dept) + " / " + App.panchayatName(p) + " " + App.t("Panchayat")
    };
    return S[k];
  }

  function approveModal(c, remarks) {
    var p = c.p, st = p.wf.stage, fields = DM.STAGE_FIELDS[st], computed = st === 1 || st === 6 || st === 8 || st === 9;
    var help = { 1: "Request details were captured at registration. Approval accepts the request for Gram Sabha and committee consideration.", 6: "Physical progress is taken from the geo-tagged progress records. Approval confirms physical completion (100%).", 8: "These values are taken from the inspection records.", 9: "These values are taken from the payment and utilisation records." }[st] || "Capture the details of this stage before approval. Values are prefilled for the demonstration and can be edited.";
    var body = '<p class="small muted">' + App.esc(App.t(help)) + '</p><div id="apErr" class="note err" role="alert" hidden></div><div class="form-grid ap-grid">';
    fields.forEach(function (f) {
      var ex = p.sf[st] ? p.sf[st][f.k] : null, id = "ap_" + f.k, lbl = '<label for="' + id + '">' + App.esc(App.L(f)) + "</label>";
      if (computed || (ex && typeof ex === "object") || f.k === "fy" || f.k === "dprDept" || f.k === "completionStatus") {
        var shown = f.k === "fy" ? p.fy : f.k === "dprDept" ? App.deptName(p.dept) : f.k === "completionStatus" ? App.t("Completed") : null;
        body += '<div class="field"><span class="lbl">' + App.esc(App.L(f)) + '</span><div class="ro">' + (shown ? App.esc(shown) : fmtField(p, st, f)) + "</div></div>"; return;
      }
      if (f.k === "uid") {
        var nxt = p.uid || ("DMFT/RMG/" + p.fy + "/" + p.block + "/" + DM.util.pad((App.db.seq[p.fy + "/" + p.block] || 0) + 1, 4));
        body += '<div class="field span2"><span class="lbl">' + App.esc(App.L(f)) + '</span><div class="ro uid-prev">' + App.icon("key", "sm") + " <strong>" + App.esc(nxt) + "</strong> <span class=\"small muted\">(" + App.esc(App.t("Will be generated on approval")) + ")</span></div></div>"; return;
      }
      var v = ex != null && ex !== "" ? ex : suggest(p, st, f.k);
      if (f.k === "contractor") {
        var cs = App.db.contractors.slice().sort(function (a, b) { return (b.depts.indexOf(p.dept) >= 0) - (a.depts.indexOf(p.dept) >= 0); });
        if (!v) v = cs[0].id;
        body += '<div class="field">' + lbl + '<select class="input" id="' + id + '" data-k="' + f.k + '" data-t="sel">' + cs.map(function (x) { return '<option value="' + x.id + '"' + (x.id === v ? " selected" : "") + ">" + App.esc(App.L(x.name)) + "</option>"; }).join("") + "</select></div>"; return;
      }
      if (f.t === "file") { body += '<div class="field">' + lbl + '<input class="input" type="file" id="' + id + '" data-k="' + f.k + '" data-t="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.zip">' + (ex ? '<span class="hint">' + App.esc(App.t("Current file")) + ": " + App.esc(ex) + "</span>" : "") + "</div>"; return; }
      var type = f.t === "date" ? "date" : (f.t === "money" || f.t === "num" || f.t === "pct") ? "number" : "text";
      body += '<div class="field' + (f.k === "handoverDept" || f.k === "mcItem" ? " span2" : "") + '">' + lbl + (f.t === "money" ? '<span class="hint">Rs</span>' : "") + '<input class="input" type="' + type + '" id="' + id + '" data-k="' + f.k + '" data-t="' + f.t + '" value="' + App.esc(v == null ? "" : v) + '"' + (type === "number" ? ' min="0" step="1"' : "") + "></div>";
    });
    body += '</div><div class="field" style="margin-top:12px"><label for="apRem">' + App.esc(App.t("Approval remarks")) + ' <span class="req">*</span></label><textarea class="input" id="apRem" maxlength="500">' + App.esc(remarks || App.tx("ap1")) + "</textarea></div>";
    App.modal({
      title: App.tf("Approve stage {n}: {s}", { n: st, s: App.stageName(st) }), wide: true, body: body,
      foot: '<button type="button" class="btn secondary" data-close>' + App.esc(App.t("Cancel")) + '</button><button type="button" class="btn success" data-ok>' + App.icon("tick") + App.esc(App.t(st === 10 ? "Approve handover and close the project" : "Approve and move to next stage")) + "</button>",
      onOpen: function (m, api) {
        m.querySelector("[data-ok]").addEventListener("click", function () {
          var vals = {}, newDocs = [], err = m.querySelector("#apErr");
          App.qsa("[data-k]", m).forEach(function (inp) {
            var k = inp.getAttribute("data-k"), t = inp.getAttribute("data-t");
            if (t === "file") { var fl = inp.files && inp.files[0]; if (fl) { vals[k] = fl.name; newDocs.push([k, fl]); } return; }
            if (t === "money" || t === "num" || t === "pct") { if (inp.value !== "") vals[k] = Math.round(+inp.value); return; }
            if (k === "handoverDept") { vals[k] = inp.value === suggest(p, st, k) ? { en: DM.dept(p.dept).en + " / " + p.panchayat + " Panchayat", hi: DM.dept(p.dept).hi + " / " + (p.sf[1] && p.sf[1].panchayat ? p.sf[1].panchayat.hi : p.panchayat) + " पंचायत" } : { en: inp.value, hi: inp.value }; return; }
            vals[k] = inp.value;
          });
          if (st === 3 && !(p.sf[3] && p.sf[3].dprDept)) vals.dprDept = { en: DM.dept(p.dept).en, hi: DM.dept(p.dept).hi };
          var stBefore = st, hadUid = !!p.uid;
          var e = App.wf.act(p, "approve", m.querySelector("#apRem").value, vals);
          if (e) { err.hidden = false; err.innerHTML = App.icon("warning") + "<span>" + App.esc(e) + "</span>"; return; }
          newDocs.forEach(function (d) { addDoc(p, DOC_FOR[d[0]] || "fin", d[1], "internal"); });
          App.save(); api.close();
          var msg = !p.wf ? App.t("Handover recorded. The project is now complete.") : App.tf("Stage {n} approved. The project moved to stage {m}: {s}.", { n: stBefore, m: p.stage, s: App.stageName(p.stage) });
          if (!hadUid && p.uid) msg = App.tf("Unique Project ID generated: {id}", { id: p.uid }) + " " + msg;
          if (stBefore === 9 && p.stage === 6) msg += " " + App.t("Progress is below 100%, so the cycle returns to Physical Progress (stages 6 to 9 repeat until completion).");
          c.refresh(msg);
        });
      }
    });
  }

  function addDoc(p, cat, file, access) {
    var ex = p.docs.filter(function (d) { return d.cat === cat && d.name === file.name; })[0], user = App.session ? App.session.username : "-", by = App.session ? DM.role(App.session.role).desig : "deo";
    if (ex) { ex.versions.push({ v: ex.versions.length + 1, date: App.today(), by: by, size: file.size, note: "nw", u: user, mime: file.type }); return ex; }
    var d = { id: "D" + (p.docs.length + 1) + "-" + Date.now().toString(36), cat: cat, name: file.name, type: (file.name.split(".").pop() || "").toLowerCase(), mime: file.type, access: access || "internal", versions: [{ v: 1, date: App.today(), by: by, size: file.size, note: "up", u: user }] };
    p.docs.push(d); return d;
  }

  // Progress
  App.fieldPhotos = App.fieldPhotos || {};
  RENDER.progress = function (el, c) {
    var p = c.p, s5 = p.sf[5] || {}, hist = p.progress || [];
    if (!s5.commencementDate) { el.innerHTML = '<div class="note">' + App.icon("info") + "<span>" + App.esc(App.t("Physical progress is recorded after work commencement (stage 5).")) + "</span></div>"; return; }
    var canAdd = App.can("progress", "act") && p.physical < 100;
    var expected = 0; if (s5.plannedCompletion) { var dur = DM.util.diff(s5.commencementDate, s5.plannedCompletion), elp = DM.util.diff(s5.commencementDate, App.today()); expected = Math.max(0, Math.min(100, Math.round(elp / dur * 100))); }
    var rows = hist.slice().reverse().map(function (h, i) {
      var prev = hist[hist.length - 2 - i]; var inc = h.pct - (prev ? prev.pct : 0);
      return '<tr><td class="nowrap">' + App.esc(App.date(h.date)) + " " + App.esc(h.time || "") + '</td><td class="num"><strong>' + h.pct + '%</strong></td><td class="num">+' + inc + "</td><td>" + App.esc(App.tx(h.remark)) + '</td><td class="small">' + App.esc(App.desig(h.by, p)) + (h.u ? '<div class="muted">' + App.esc(h.u) + "</div>" : "") + '</td><td class="small nowrap">' + App.icon("location", "sm") + " " + (+h.lat).toFixed(5) + ", " + (+h.lng).toFixed(5) + "</td><td>" + (h.verified ? '<span class="chip st-completed">' + App.esc(App.t("Verified")) + "</span>" : '<span class="chip st-notstarted">' + App.esc(App.t("Not verified")) + "</span>") + "</td></tr>";
    }).join("");
    var h = '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Physical progress history")) + '</h2></div>' + (canAdd ? '<button type="button" class="btn sm" data-add>' + App.icon("plus", "sm") + App.esc(App.t("Add progress update")) + "</button>" : "") + '</div><div class="table-wrap tbl-scroll" tabindex="0"><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Date")) + '</th><th scope="col" class="num">' + App.esc(App.t("Progress (%)")) + '</th><th scope="col" class="num">' + App.esc(App.t("Increment")) + '</th><th scope="col">' + App.esc(App.t("Field observation")) + '</th><th scope="col">' + App.esc(App.t("Recorded by")) + '</th><th scope="col">' + App.esc(App.t("Geo-tag")) + '</th><th scope="col">' + App.esc(App.t("Verification")) + "</th></tr></thead><tbody>" + (rows || '<tr><td colspan="7" class="empty">-</td></tr>') + "</tbody></table></div></div>" +
      '<div class="grid g-1-2 pg-row"><div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Progress trend")) + '</h2><p class="ch-sub">' + App.esc(App.t("Physical progress")) + ": <strong>" + (p.physical || 0) + "%</strong> | " + App.esc(App.t("Expected by time elapsed")) + ": <strong>" + expected + '%</strong></p></div></div><div class="chart-box"><canvas id="pgChart" role="img" aria-label="' + App.esc(App.t("Progress trend")) + '"></canvas></div></div>';
    var photos = '<figure class="photo"><img src="' + App.photo(p, 0, "before", { date: s5.commencementDate, time: "10:05" }) + '" alt="' + App.esc(App.t("Before") + " - " + App.pname(p)) + '"><figcaption><strong>' + App.esc(App.t("Before")) + " | " + App.esc(App.date(s5.commencementDate)) + "</strong>" + App.esc(App.t("Sample photo generated from site data")) + "</figcaption></figure>";
    hist.slice().reverse().slice(0, 11).forEach(function (x, i) {
      var idx = hist.length - i, real = App.fieldPhotos[p.id + ":" + (idx - 1)];
      var src = real || App.photo(p, idx, x.pct >= 100 ? "after" : "during", { lat: x.lat, lng: x.lng, date: x.date, time: x.time });
      photos += '<figure class="photo"><img src="' + src + '" alt="' + App.esc(App.t(x.pct >= 100 ? "After" : "During") + " " + x.pct + "% - " + App.date(x.date)) + '"><figcaption><strong>' + App.esc(App.t(x.pct >= 100 ? "After" : "During")) + " | " + x.pct + "% | " + App.esc(App.date(x.date)) + "</strong>" + App.icon("location", "sm") + " " + (+x.lat).toFixed(5) + ", " + (+x.lng).toFixed(5) + " | " + App.esc(x.time || "") + (real ? " | " + App.esc(App.t("Captured on device")) : "") + "</figcaption></figure>";
    });
    h += '<div class="card"><div class="card-head"><h2>' + App.icon("camera") + " " + App.esc(App.t("Geo-tagged photographs")) + '</h2></div><div class="photo-grid">' + photos + "</div></div></div>";
    el.innerHTML = h;
    var lbl = hist.map(function (x) { return App.date(x.date); });
    App.chart(el.querySelector("#pgChart"), { type: "line", data: { labels: lbl, datasets: [{ label: App.t("Physical progress (%)"), data: hist.map(function (x) { return x.pct; }), borderColor: App.PAL[0], backgroundColor: "rgba(47,95,175,.10)", fill: true, tension: 0.25, pointRadius: 4, borderWidth: 2 }] },
      options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { callback: function (v) { return v + "%"; } } }, x: { grid: { display: false } } } } });
    var add = el.querySelector("[data-add]"); if (add) add.addEventListener("click", function () { progressModal(c); });
  };

  function progressModal(c) {
    var p = c.p, cur = p.physical || 0, gps = null, photoData = null, photoName = null;
    var body = '<div id="prErr" class="note err" role="alert" hidden></div><div class="form-grid">' +
      '<div class="field"><label for="prPct">' + App.esc(App.t("Progress (%)")) + ' <span class="req">*</span></label><input class="input" id="prPct" type="number" min="' + cur + '" max="100" value="' + Math.min(100, cur + 8) + '"><input type="range" min="' + cur + '" max="100" value="' + Math.min(100, cur + 8) + '" id="prRange" aria-label="' + App.esc(App.t("Progress (%)")) + '"></div>' +
      '<div class="field"><label for="prDate">' + App.esc(App.t("Progress date")) + '</label><input class="input" id="prDate" type="date" max="' + App.today() + '" value="' + App.today() + '"></div>' +
      '<div class="field"><span class="lbl">' + App.esc(App.t("Geo-tag")) + '</span><button type="button" class="btn secondary" id="prGps">' + App.icon("gps") + App.esc(App.t("Capture GPS location")) + '</button><span class="hint" id="prGpsT" aria-live="polite"></span></div>' +
      '<div class="field span3"><label for="prObs">' + App.esc(App.t("Field observation")) + ' <span class="req">*</span></label><textarea class="input" id="prObs" maxlength="400">' + App.esc(App.tx("pr" + Math.min(5, Math.floor(Math.min(100, cur + 8) / 20)))) + "</textarea></div>" +
      '<div class="field span2"><label for="prPhoto">' + App.esc(App.t("Site photograph")) + '</label><input class="input" id="prPhoto" type="file" accept="image/*" capture="environment"></div><div class="field"><img id="prPrev" class="pr-prev" alt="" hidden></div></div>';
    App.modal({ title: App.t("Add progress update"), body: body, wide: true,
      foot: '<button type="button" class="btn secondary" data-close>' + App.esc(App.t("Cancel")) + '</button><button type="button" class="btn" data-ok>' + App.icon("check") + App.esc(App.t("Save progress")) + "</button>",
      onOpen: function (m, api) {
        var pct = m.querySelector("#prPct"), rg = m.querySelector("#prRange");
        pct.addEventListener("input", function () { rg.value = pct.value; }); rg.addEventListener("input", function () { pct.value = rg.value; });
        m.querySelector("#prGps").addEventListener("click", function () {
          var out = m.querySelector("#prGpsT"), done = false;
          function fallback() { if (done) return; done = true; gps = { lat: +(p.loc[0] + (Math.random() - 0.5) * 0.001).toFixed(5), lng: +(p.loc[1] + (Math.random() - 0.5) * 0.001).toFixed(5), src: "sample" }; out.textContent = App.t("GPS not available; project location used as sample coordinate.") + " " + gps.lat + ", " + gps.lng; }
          if (navigator.geolocation) { out.textContent = "..."; navigator.geolocation.getCurrentPosition(function (pos) { if (done) return; done = true; gps = { lat: +pos.coords.latitude.toFixed(5), lng: +pos.coords.longitude.toFixed(5), src: "device" }; out.textContent = App.t("Location captured") + ": " + gps.lat + ", " + gps.lng; }, fallback, { timeout: 5000, maximumAge: 60000 }); setTimeout(fallback, 5500); }
          else fallback();
        });
        m.querySelector("#prPhoto").addEventListener("change", function () {
          var f = this.files && this.files[0]; if (!f) return; photoName = f.name;
          var rd = new FileReader(); rd.onload = function () { photoData = rd.result; var im = m.querySelector("#prPrev"); im.src = photoData; im.hidden = false; im.alt = f.name; }; rd.readAsDataURL(f);
        });
        m.querySelector("[data-ok]").addEventListener("click", function () {
          var v = +pct.value, obs = m.querySelector("#prObs").value.trim(), er = m.querySelector("#prErr");
          if (!(v >= cur && v <= 100) || pct.value === "") { er.hidden = false; er.innerHTML = App.icon("warning") + "<span>" + App.esc(App.t("Progress must be between the last recorded value and 100.")) + "</span>"; return; }
          if (!obs) { er.hidden = false; er.innerHTML = App.icon("warning") + "<span>" + App.esc(App.t("Enter a field observation.")) + "</span>"; return; }
          var g = gps || { lat: +(p.loc[0] + 0.0003).toFixed(5), lng: +(p.loc[1] - 0.0002).toFixed(5) }, now = new Date();
          p.progress.push({ date: m.querySelector("#prDate").value || App.today(), pct: v, remark: obs, by: App.session && DM.role(App.session.role).desig === "je" ? "je" : "je", u: App.session ? App.session.username : "-", lat: g.lat, lng: g.lng, time: DM.util.pad(now.getHours(), 2) + ":" + DM.util.pad(now.getMinutes(), 2), photo: true, photoName: photoName, verified: false });
          if (photoData) App.fieldPhotos[p.id + ":" + (p.progress.length - 1)] = photoData;
          p.physical = v;
          p.sf[6] = { physicalPct: v, lastUpdate: p.progress[p.progress.length - 1].date, photoCount: ((p.sf[6] && p.sf[6].photoCount) || 0) + 1, fieldObs: obs };
          if (photoName) addDoc(p, "photo", { name: photoName, size: 0, type: "image/jpeg" }, "public");
          App.log("progress", { en: "Physical progress updated to " + v + "%", hi: "भौतिक प्रगति " + v + "% अद्यतन" }, p.id);
          App.save(); api.close(); c.refresh(App.tf("Progress updated to {p}%.", { p: v }));
        });
      } });
  }

  // Payments
  RENDER.payments = function (el, c) {
    var p = c.p, s5 = p.sf[5] || {};
    if (!s5.agreementDate) { el.innerHTML = '<div class="note">' + App.icon("info") + "<span>" + App.esc(App.t("Payments start after the agreement is signed (stage 5).")) + "</span></div>"; return; }
    var req = 0, rel = 0; p.payments.forEach(function (x) { req += x.amount; rel += x.released || 0; });
    var canAct = App.can("payment", "act");
    var k = '<div class="kpis small-k pay-k">' + tile("Agreement amount", App.moneyT(s5.agreementAmount), "#2F5FAF", "file") + tile("Requisitioned", App.moneyT(req), "#C2650A", "send") + tile("Released", App.moneyT(rel), "#2F8A4E", "rupee") + tile("Balance", App.moneyT(s5.agreementAmount - rel), "#7B4FB5", "wallet") + "</div>";
    var rows = p.payments.map(function (x, i) {
      var st = x.status === "released" ? '<span class="chip st-completed">' + App.esc(App.t("Released")) + "</span>" : '<span class="chip st-approval">' + App.esc(App.t("Pending")) + "</span>";
      var uc = x.uc ? (x.uc.status === "submitted" ? '<span class="chip st-completed">' + App.esc(App.t("UC submitted")) + "</span><div class=\"small muted\">" + App.esc(App.date(x.uc.date)) + "</div>" : '<span class="chip st-notstarted">' + App.esc(App.t("UC pending")) + "</span>") : "-";
      var act = !canAct ? "" : x.status === "pending" ? '<button type="button" class="btn sm success" data-rel="' + i + '">' + App.esc(App.t("Release")) + "</button>" : x.uc && x.uc.status !== "submitted" ? '<button type="button" class="btn sm secondary" data-uc="' + i + '">' + App.esc(App.t("Mark UC submitted")) + "</button>" : "";
      return '<tr><td class="num">' + x.no + '</td><td class="nowrap">' + App.esc(App.date(x.date)) + '</td><td class="nowrap">' + App.esc(x.letter) + '</td><td class="num">' + App.moneyT(x.amount) + '</td><td class="small">' + App.icon("file", "sm") + " " + App.esc(x.docs || "Bill_and_MB_extract.pdf") + "</td><td>" + st + '</td><td class="nowrap">' + App.esc(App.date(x.releasedOn)) + '</td><td class="num">' + (x.released ? App.moneyT(x.released) : "-") + "</td><td>" + uc + "</td><td>" + act + "</td></tr>";
    }).join("");
    el.innerHTML = k + '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Payment requisitions")) + "</h2>" + (canAct ? '<button type="button" class="btn sm" data-raise>' + App.icon("plus", "sm") + App.esc(App.t("Raise payment requisition")) + "</button>" : "") + '</div><div class="table-wrap" tabindex="0"><table class="data"><thead><tr><th scope="col" class="num">#</th><th scope="col">' + App.esc(App.t("Requisition date")) + '</th><th scope="col">' + App.esc(App.t("Letter no.")) + '</th><th scope="col" class="num">' + App.esc(App.t("Amount")) + '</th><th scope="col">' + App.esc(App.t("Supporting documents")) + '</th><th scope="col">' + App.esc(App.t("Status")) + '</th><th scope="col">' + App.esc(App.t("Released on")) + '</th><th scope="col" class="num">' + App.esc(App.t("Released")) + '</th><th scope="col">' + App.esc(App.t("UC")) + '</th><th scope="col"><span class="sr-only">' + App.esc(App.t("Actions")) + "</span></th></tr></thead><tbody>" + (rows || '<tr><td colspan="10" class="empty">' + App.esc(App.t("No payment requisition yet.")) + "</td></tr>") + "</tbody></table></div></div>";
    var r = el.querySelector("[data-raise]");
    if (r) r.addEventListener("click", function () {
      var bal = s5.agreementAmount - req;
      App.modal({ title: App.t("Raise payment requisition"), body: '<div id="rqErr" class="note err" role="alert" hidden></div><div class="form-grid">' +
        '<div class="field"><label for="rqD">' + App.esc(App.t("Requisition date")) + '</label><input class="input" type="date" id="rqD" value="' + App.today() + '" max="' + App.today() + '"></div>' +
        '<div class="field"><label for="rqL">' + App.esc(App.t("Letter no.")) + '</label><input class="input" id="rqL" value="PR/' + DM.dept(p.dept).code + "/" + App.today().slice(0, 4) + "/" + (400 + p.payments.length) + '"></div>' +
        '<div class="field"><label for="rqA">' + App.esc(App.t("Requisition amount (Rs)")) + '</label><input class="input" type="number" id="rqA" min="1" value="' + Math.max(0, Math.min(bal, Math.round(s5.agreementAmount * 0.3))) + '"></div>' +
        '<div class="field span3"><label for="rqF">' + App.esc(App.t("Supporting documents")) + '</label><input class="input" type="file" id="rqF" accept=".pdf,.jpg,.png,.xlsx"></div></div>',
        foot: '<button type="button" class="btn secondary" data-close>' + App.esc(App.t("Cancel")) + '</button><button type="button" class="btn" data-ok>' + App.esc(App.t("Submit")) + "</button>",
        onOpen: function (m, api) { m.querySelector("[data-ok]").addEventListener("click", function () {
          var a = Math.round(+m.querySelector("#rqA").value), f = m.querySelector("#rqF").files[0];
          if (!(a > 0 && a <= bal)) { var e = m.querySelector("#rqErr"); e.hidden = false; e.textContent = App.t("Enter an amount within the agreement balance."); return; }
          var x = { no: p.payments.length + 1, date: m.querySelector("#rqD").value || App.today(), letter: m.querySelector("#rqL").value, amount: a, status: "pending", released: 0, releasedOn: null, uc: null, docs: f ? f.name : "Bill_and_MB_extract.pdf" };
          p.payments.push(x); p.sf[7] = { reqDate: x.date, reqLetter: x.letter, reqAmount: a, reqDocs: x.docs };
          addDoc(p, "payreq", f || { name: "Payment_Requisition_" + x.no + ".pdf", size: 240000, type: "application/pdf" }, "internal");
          App.notify("payment", p, "accounts", ["email", "sms"]); App.log("payment", { en: "Payment requisition " + x.no + " raised", hi: "भुगतान अधियाचना " + x.no + " की गई" }, p.id);
          App.save(); api.close(); c.refresh(App.tf("Payment requisition {n} raised and sent to the Accounts Officer.", { n: x.no }));
        }); } });
    });
    App.qsa("[data-rel]", el).forEach(function (b) { b.addEventListener("click", function () {
      var x = p.payments[+b.getAttribute("data-rel")];
      App.modal({ title: App.t("Release payment") + " #" + x.no, body: '<div class="form-grid"><div class="field"><label for="rlD">' + App.esc(App.t("Release date")) + '</label><input class="input" type="date" id="rlD" value="' + App.today() + '" max="' + App.today() + '"></div><div class="field"><label for="rlA">' + App.esc(App.t("Amount released (Rs)")) + '</label><input class="input" type="number" id="rlA" min="1" max="' + x.amount + '" value="' + x.amount + '"></div></div>',
        foot: '<button type="button" class="btn secondary" data-close>' + App.esc(App.t("Cancel")) + '</button><button type="button" class="btn success" data-ok>' + App.esc(App.t("Release payment")) + "</button>",
        onOpen: function (m, api) { m.querySelector("[data-ok]").addEventListener("click", function () {
          var a = Math.min(x.amount, Math.max(1, Math.round(+m.querySelector("#rlA").value || x.amount)));
          x.status = "released"; x.released = a; x.releasedOn = m.querySelector("#rlD").value || App.today(); x.uc = { status: "pending", date: null };
          p.sf[9] = { expenditure: DM.expenditure(p), lastPayDate: x.releasedOn, ucStatus: { en: "Pending", hi: "लंबित" }, finPct: DM.finPct(p) };
          addDoc(p, "fin", { name: "Payment_Release_Order_" + x.no + ".pdf", size: 180000, type: "application/pdf" }, "internal");
          App.log("payment", { en: "Payment " + x.no + " released", hi: "भुगतान " + x.no + " जारी" }, p.id); App.save(); api.close(); c.refresh(App.tf("Payment of {x} released.", { x: App.money(a) }));
        }); } });
    }); });
    App.qsa("[data-uc]", el).forEach(function (b) { b.addEventListener("click", function () {
      var x = p.payments[+b.getAttribute("data-uc")]; x.uc = { status: "submitted", date: App.today() };
      if (p.sf[9]) p.sf[9].ucStatus = { en: "Submitted", hi: "जमा" };
      App.log("uc", { en: "UC submitted for instalment " + x.no, hi: "किस्त " + x.no + " हेतु उपयोगिता प्रमाण-पत्र जमा" }, p.id); App.save(); c.refresh(App.t("UC submitted"));
    }); });
  };
  function tile(l, v, col, ic) { return '<dl class="kpi" style="--k:' + col + '"><dt>' + App.esc(App.t(l)) + App.icon(ic) + "</dt><dd>" + v + "</dd></dl>"; }

  // Inspections
  RENDER.inspections = function (el, c) {
    var p = c.p, list = App.db.inspections.filter(function (i) { return i.pid === p.id; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var rows = list.map(function (i) {
      var s = INS_ST[i.status] || INS_ST.closed;
      return '<tr><td class="nowrap"><strong>' + App.esc(i.id) + '</strong></td><td class="nowrap">' + App.esc(App.date(i.date)) + '</td><td class="small">' + i.team.map(function (k) { return App.esc(App.desig(k, p)); }).join("<br>") + '</td><td class="small">' + App.esc(App.tx(i.observation) || "-") + '</td><td class="small">' + (i.deficiency ? App.esc(App.tx(i.deficiency)) : '<span class="muted">' + App.esc(App.t("None")) + "</span>") + '</td><td class="small">' + (i.assignedTo ? App.esc(App.desig(i.assignedTo, p)) : "-") + '</td><td class="nowrap">' + App.esc(App.date(i.dueDate)) + '</td><td class="small">' + (i.compliance ? App.icon("file", "sm") + " " + App.esc(App.date(i.compliance.date)) : "-") + '</td><td class="small">' + (i.verification ? App.esc(App.t("Verified")) + " " + App.esc(App.date(i.verification.date)) : "-") + '</td><td><span class="chip ' + s[1] + '">' + App.esc(App.t(s[0])) + "</span></td></tr>";
    }).join("");
    el.innerHTML = '<div class="card"><div class="card-head"><h2>' + App.esc(App.t("Inspections of this project")) + '</h2><a class="btn sm secondary" href="#/inspections?pid=' + p.id + '">' + App.icon("clipboard", "sm") + App.esc(App.t("Open inspection module")) + '</a></div><div class="table-wrap" tabindex="0"><table class="data"><thead><tr><th scope="col">ID</th><th scope="col">' + App.esc(App.t("Date")) + '</th><th scope="col">' + App.esc(App.t("Team")) + '</th><th scope="col">' + App.esc(App.t("Observation")) + '</th><th scope="col">' + App.esc(App.t("Deficiency")) + '</th><th scope="col">' + App.esc(App.t("Action assigned to")) + '</th><th scope="col">' + App.esc(App.t("Due date")) + '</th><th scope="col">' + App.esc(App.t("Compliance")) + '</th><th scope="col">' + App.esc(App.t("Verification")) + '</th><th scope="col">' + App.esc(App.t("Status")) + "</th></tr></thead><tbody>" + (rows || '<tr><td colspan="10" class="empty">' + App.esc(App.t("No inspection recorded yet.")) + "</td></tr>") + "</tbody></table></div></div>";
  };

  // Financial
  RENDER.financial = function (el, c) {
    var p = c.p, s5 = p.sf[5] || {}, aa = (p.sf[4] && p.sf[4].approvedAmount) || 0, bills = 0, rel = 0;
    p.payments.forEach(function (x) { bills += x.amount; rel += x.released || 0; });
    var fp = DM.finPct(p);
    var k = '<div class="kpis small-k">' + tile("AA amount", aa ? App.moneyT(aa) : "-", "#2F5FAF", "bank") + tile("Agreement amount", s5.agreementAmount ? App.moneyT(s5.agreementAmount) : "-", "#0B8BA3", "file") + tile("Bills submitted", App.moneyT(bills), "#C2650A", "send") +
      tile("Payment released", App.moneyT(rel), "#2F8A4E", "rupee") + tile("Balance", s5.agreementAmount ? App.moneyT(s5.agreementAmount - rel) : "-", "#7B4FB5", "wallet") + tile("Financial progress", fp + "%", "#C0392B", "trend") + "</div>";
    var tot = 0, totR = 0;
    var rows = p.payments.map(function (x) { tot += x.amount; totR += x.released || 0; return '<tr><td>' + App.esc(App.t("Instalment")) + " " + x.no + '</td><td class="nowrap">' + App.esc(App.date(x.date)) + '</td><td class="num">' + App.moneyT(x.amount) + '</td><td class="num">' + (x.released ? App.moneyT(x.released) : "-") + '</td><td class="nowrap">' + App.esc(App.date(x.releasedOn)) + "</td><td>" + (x.uc ? App.esc(App.t(x.uc.status === "submitted" ? "UC submitted" : "UC pending")) : "-") + '</td><td class="nowrap">' + App.esc(App.date(x.uc && x.uc.date)) + "</td></tr>"; }).join("");
    el.innerHTML = k + '<div class="grid g-3-2"><div class="card"><div class="card-head"><h2>' + App.esc(App.t("Instalment-wise payments")) + '</h2></div><div class="table-wrap" tabindex="0"><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Instalment")) + '</th><th scope="col">' + App.esc(App.t("Date")) + '</th><th scope="col" class="num">' + App.esc(App.t("Bill amount")) + '</th><th scope="col" class="num">' + App.esc(App.t("Released")) + '</th><th scope="col">' + App.esc(App.t("Released on")) + '</th><th scope="col">' + App.esc(App.t("UC")) + '</th><th scope="col">' + App.esc(App.t("UC date")) + "</th></tr></thead><tbody>" + (rows || '<tr><td colspan="7" class="empty">' + App.esc(App.t("No payment requisition yet.")) + "</td></tr>") + "</tbody>" + (rows ? '<tfoot><tr><td colspan="2">' + App.esc(App.t("Total")) + '</td><td class="num">' + App.moneyT(tot) + '</td><td class="num">' + App.moneyT(totR) + '</td><td colspan="3"></td></tr></tfoot>' : "") + "</table></div></div>" +
      '<div class="card"><div class="card-head"><div><h2>' + App.esc(App.t("Physical vs financial progress")) + '</h2><p class="ch-sub">' + App.esc(App.tf("Physical {a}% vs financial {b}%.", { a: p.physical || 0, b: fp })) + '</p></div></div><div class="chart-box"><canvas id="pfChart" role="img" aria-label="' + App.esc(App.t("Physical vs financial progress")) + '"></canvas></div></div></div>';
    // cumulative series over the union of dates
    var pts = {}; (p.progress || []).forEach(function (h) { pts[h.date] = 1; }); p.payments.forEach(function (x) { if (x.releasedOn) pts[x.releasedOn] = 1; });
    var dates = Object.keys(pts).sort(), base = aa || s5.agreementAmount || 1;
    var phys = dates.map(function (d) { var v = 0; p.progress.forEach(function (h) { if (h.date <= d) v = h.pct; }); return v; });
    var fin = dates.map(function (d) { var v = 0; p.payments.forEach(function (x) { if (x.releasedOn && x.releasedOn <= d) v += x.released; }); return Math.round(v / base * 1000) / 10; });
    App.chart(el.querySelector("#pfChart"), { type: "line", data: { labels: dates.map(App.date), datasets: [
      { label: App.t("Physical progress (%)"), data: phys, borderColor: App.PAL[0], backgroundColor: App.PAL[0], stepped: true, borderWidth: 2, pointRadius: 3 },
      { label: App.t("Financial progress (%)"), data: fin, borderColor: App.PAL[1], backgroundColor: App.PAL[1], stepped: true, borderWidth: 2, pointRadius: 3, borderDash: [6, 4] }] },
      options: { scales: { y: { min: 0, max: 100, ticks: { callback: function (v) { return v + "%"; } } }, x: { grid: { display: false } } } } });
  };

  // Documents
  RENDER.documents = function (el, c) {
    var p = c.p, canUp = App.can("documents", "full") || App.can("documents", "act");
    var cats = {}; p.docs.forEach(function (d) { (cats[d.cat] = cats[d.cat] || []).push(d); });
    var nCats = Object.keys(cats).length;
    var h = '<div class="card doc-card"><div class="card-head"><h2>' + App.icon("folder") + " " + App.esc(App.t("Document repository")) + ' <span class="ch-sub st-hint">' + App.esc(App.tf("{n} documents in {c} categories", { n: p.docs.length, c: nCats })) + "</span></h2></div>";
    if (canUp) h += '<form class="doc-up" id="docUp" novalidate><div class="field"><label for="duCat">' + App.esc(App.t("Document category")) + '</label><select class="input" id="duCat">' + DM.DOC_CATS.map(function (d) { return '<option value="' + d.k + '"' + (d.st === p.stage ? " selected" : "") + ">" + App.esc(App.L(d)) + "</option>"; }).join("") + '</select></div><div class="field du-file"><label for="duFile">' + App.esc(App.t("File")) + '</label><input class="input" type="file" id="duFile" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip" aria-describedby="duHint"></div><div class="field"><label for="duAcc">' + App.esc(App.t("Access")) + '</label><select class="input" id="duAcc"><option value="internal">' + App.esc(App.t("Internal")) + '</option><option value="public">' + App.esc(App.t("Public")) + '</option></select></div><div class="field du-btn"><span class="lbl">&nbsp;</span><button class="btn" type="submit">' + App.icon("upload") + App.esc(App.t("Upload")) + '</button></div><span class="hint du-hint" id="duHint">' + App.esc(App.t("Allowed: PDF, Word, Excel, JPG, PNG, ZIP up to 25 MB. Only file details are stored in this prototype.")) + '</span><span class="err" id="duErr" role="alert" hidden></span></form>';
    var accNote = '<div class="note doc-note">' + App.icon("shield") + "<span>" + App.esc(App.t("Access control: Public documents (AA, progress photos, handover) appear on the public dashboard. Internal documents are visible only to roles with Document repository permission within their jurisdiction. Every upload and view is recorded in the audit log.")) + "</span></div>";
    h += '<div class="table-wrap" tabindex="0" aria-label="' + App.esc(App.t("Document repository")) + '"><table class="data doc-table"><thead><tr><th scope="col">' + App.esc(App.t("Document")) + '</th><th scope="col">' + App.esc(App.t("Version")) + '</th><th scope="col">' + App.esc(App.t("Updated")) + '</th><th scope="col">' + App.esc(App.t("Uploaded by")) + '</th><th scope="col" class="num">' + App.esc(App.t("Size")) + '</th><th scope="col">' + App.esc(App.t("Access")) + '</th><th scope="col"><span class="sr-only">' + App.esc(App.t("Actions")) + "</span></th></tr></thead><tbody>";
    DM.DOC_CATS.forEach(function (dc) {
      var ds = cats[dc.k] || [];
      h += '<tr class="cat-row"><th scope="rowgroup" colspan="7"><span class="cat-st">' + dc.st + "</span>" + App.esc(App.L(dc)) + ' <span class="pill-n">' + ds.length + "</span></th></tr>";
      if (!ds.length) h += '<tr><td colspan="7" class="small muted doc-empty">' + App.esc(App.t("No document uploaded yet")) + "</td></tr>";
      ds.forEach(function (d) {
        var v = d.versions[d.versions.length - 1];
        h += '<tr><td><span class="ft ft-' + App.esc(d.type) + '">' + App.esc(extOf(d.name)) + '</span> <span class="doc-n">' + App.esc(d.name) + '</span></td><td><span class="chip plain st-ongoing">v' + v.v + '</span></td><td class="nowrap">' + App.esc(App.date(v.date)) + '</td><td class="small">' + App.esc(App.desig(v.by, p)) + '</td><td class="num">' + (v.size ? fileSize(v.size) : "-") + '</td><td><span class="chip plain ' + (d.access === "public" ? "st-completed" : "st-notstarted") + '">' + App.icon(d.access === "public" ? "globe" : "lock", "sm") + App.esc(App.t(d.access === "public" ? "Public" : "Internal")) + '</span></td><td class="nowrap"><button type="button" class="btn ghost sm" data-hist="' + App.esc(d.id) + '">' + App.icon("history", "sm") + App.esc(App.t("History")) + "</button>" + (canUp ? '<label class="btn ghost sm nv-btn">' + App.icon("upload", "sm") + App.esc(App.t("New version")) + '<input type="file" class="sr-only" data-nv="' + App.esc(d.id) + '" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"></label>' : "") + "</td></tr>";
      });
    });
    h += "</tbody></table></div>" + accNote + "</div>";
    el.innerHTML = h;
    var ALLOWED = ["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "png", "zip"];
    function validate(f) { if (!f) return App.t("Choose a file to upload."); var e = (f.name.split(".").pop() || "").toLowerCase(); if (ALLOWED.indexOf(e) < 0) return App.t("File type not allowed. Use PDF, Word, Excel, JPG, PNG or ZIP."); if (f.size > 25 * 1048576) return App.t("File is larger than 25 MB."); return null; }
    var form = el.querySelector("#docUp");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault(); var f = el.querySelector("#duFile").files[0], er = el.querySelector("#duErr"), msg = validate(f);
      if (msg) { er.hidden = false; er.textContent = msg; el.querySelector("#duFile").setAttribute("aria-invalid", "true"); el.querySelector("#duFile").value = ""; return; }
      var d = addDoc(p, el.querySelector("#duCat").value, f, el.querySelector("#duAcc").value);
      App.log("upload", { en: "Uploaded " + f.name, hi: f.name + " अपलोड किया" }, p.id); App.save();
      c.refresh(App.tf("{f} uploaded as version {v}.", { f: f.name, v: d.versions.length }));
    });
    App.qsa("[data-nv]", el).forEach(function (inp) { inp.addEventListener("change", function () {
      var f = inp.files[0], d = p.docs.filter(function (x) { return x.id === inp.getAttribute("data-nv"); })[0], msg = validate(f);
      if (msg) { App.toast(msg, false); inp.value = ""; return; }
      var user = App.session ? App.session.username : "-";
      d.name = f.name; d.type = (f.name.split(".").pop() || "").toLowerCase(); d.mime = f.type;
      d.versions.push({ v: d.versions.length + 1, date: App.today(), by: App.session ? DM.role(App.session.role).desig : "deo", size: f.size, note: "nw", u: user, file: f.name });
      App.log("upload", { en: "New version of " + d.name, hi: d.name + " का नया संस्करण" }, p.id); App.save();
      c.refresh(App.tf("{f} uploaded as version {v}.", { f: d.name, v: d.versions.length }));
    }); });
    App.qsa("[data-hist]", el).forEach(function (b) { b.addEventListener("click", function () {
      var d = p.docs.filter(function (x) { return x.id === b.getAttribute("data-hist"); })[0];
      App.modal({ title: App.t("Version history") + ": " + d.name, wide: true, body: '<div class="table-wrap"><table class="data"><thead><tr><th scope="col">' + App.esc(App.t("Version")) + '</th><th scope="col">' + App.esc(App.t("Date")) + '</th><th scope="col">' + App.esc(App.t("Uploaded by")) + '</th><th scope="col">' + App.esc(App.t("User")) + '</th><th scope="col" class="num">' + App.esc(App.t("Size")) + '</th><th scope="col">' + App.esc(App.t("Note")) + "</th></tr></thead><tbody>" +
        d.versions.slice().reverse().map(function (v) { return "<tr><td><strong>v" + v.v + "</strong>" + (v.file && v.file !== d.name ? '<div class="small muted">' + App.esc(v.file) + "</div>" : "") + '</td><td class="nowrap">' + App.esc(App.date(v.date)) + '</td><td class="small">' + App.esc(App.desig(v.by, p)) + '</td><td class="small">' + App.esc(v.u || "-") + '</td><td class="num">' + (v.size ? fileSize(v.size) : "-") + "</td><td>" + App.esc(App.tx(v.note)) + "</td></tr>"; }).join("") + "</tbody></table></div>",
        foot: '<button type="button" class="btn" data-close>' + App.esc(App.t("Close")) + "</button>" });
    }); });
  };

  // Handover
  RENDER.handover = function (el, c) {
    var p = c.p;
    if (p.stage < 10) { el.innerHTML = '<div class="note">' + App.icon("info") + "<span>" + App.esc(App.t("Handover is recorded after the work reaches 100% physical progress.")) + "</span></div>"; return; }
    var h = '<div class="card"><div class="card-head"><h2>' + App.icon("flag") + " " + App.esc(App.t("Handover details")) + "</h2>" + App.pStatusChip(p) + '</div><dl class="kv k3">' + DM.STAGE_FIELDS[10].map(function (f) { return "<div><dt>" + App.esc(App.L(f)) + "</dt><dd>" + fmtField(p, 10, f) + "</dd></div>"; }).join("") + "</dl>";
    if (p.wf) h += '<div class="note warn" style="margin-top:12px">' + App.icon("pending") + "<span>" + App.esc(App.tf("Handover is pending at {x}.", { x: App.desig(p.pendingAt, p) })) + ' <button type="button" class="btn sm" data-gotab="movement">' + App.esc(App.t("Go to file movement")) + "</button></span></div>";
    el.innerHTML = h + "</div>";
  };

  // Map
  RENDER.map = function (el, c) {
    var p = c.p, others = App.scoped().filter(function (x) { return x.panchayat === p.panchayat && x.block === p.block && x.id !== p.id; });
    el.innerHTML = '<div class="grid g-3-2"><div class="card"><div class="card-head"><h2>' + App.icon("map") + " " + App.esc(App.t("Project location")) + '</h2></div><div class="map md" id="pdMap" role="region" aria-label="' + App.esc(App.t("Project location")) + '"></div><p class="map-cap">' + App.icon("info", "sm") + App.esc(App.t("Schematic boundaries - sample. Block outlines are approximate and drawn for demonstration; the live portal uses official district / block / panchayat GIS layers.")) + "</p></div>" +
      '<div class="card"><dl class="kv">' + kv("Latitude", p.loc[0].toFixed(5) + " N") + kv("Longitude", p.loc[1].toFixed(5) + " E") + kv("Block", App.esc(App.blockName(p.block))) + kv("Panchayat", App.esc(App.panchayatName(p))) + kv("Village", App.esc(App.villageName(p))) + kv("Sector", App.esc(App.sectorName(p.sector))) + "</dl>" +
      '<h3 class="sub-h">' + App.esc(App.t("Other works in this panchayat")) + '</h3><ul class="mini-list">' + (others.length ? others.slice(0, 8).map(function (o) { return '<li><a href="#/project/' + o.id + '">' + App.esc(App.pname(o)) + "</a>" + App.pStatusChip(o) + "</li>"; }).join("") : '<li class="muted">' + App.esc(App.t("None")) + "</li>") + "</ul></div></div>";
    var api = App.makeMap(el.querySelector("#pdMap"), { scroll: false });
    if (api) { api.setProjects([p].concat(others), false); api.focus(p, 12.5); api.invalidate(); }
  };
})();
