/* Reports & MIS (scope item 7): catalogue of standard reports with common filters, totals, Excel (.xlsx) and PDF (print) export. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Reports & MIS": "रिपोर्ट एवं एमआईएस", "Standard MIS reports with filters. Export to Excel or PDF.": "फ़िल्टर सहित मानक एमआईएस रिपोर्ट। एक्सेल या पीडीएफ में निर्यात करें।",
    "Status reports": "स्थिति रिपोर्ट", "Progress reports": "प्रगति रिपोर्ट", "Exception reports": "अपवाद रिपोर्ट", "Process reports": "प्रक्रिया रिपोर्ट", "Summary": "सारांश",
    "Project status report": "परियोजना स्थिति रिपोर्ट", "Block-wise report": "प्रखंडवार रिपोर्ट", "Department-wise report": "विभागवार रिपोर्ट", "FY-wise report": "वित्तीय वर्षवार रिपोर्ट",
    "Physical progress report": "भौतिक प्रगति रिपोर्ट", "Financial progress report": "वित्तीय प्रगति रिपोर्ट", "Delayed projects report": "विलंबित परियोजना रिपोर्ट",
    "Pending approval report": "लंबित स्वीकृति रिपोर्ट", "Tender status report": "निविदा स्थिति रिपोर्ट", "Inspection report": "निरीक्षण रिपोर्ट", "Payment requisition report": "भुगतान अधियाचना रिपोर्ट",
    "Completed projects report": "पूर्ण परियोजना रिपोर्ट", "Handover report": "हस्तांतरण रिपोर्ट", "Executive summary": "कार्यकारी सारांश",
    "Every project with stage, status, amount and progress.": "प्रत्येक परियोजना का चरण, स्थिति, राशि एवं प्रगति।",
    "Counts, amounts and progress aggregated by block.": "प्रखंडवार संख्या, राशि एवं प्रगति।", "Counts, amounts and progress aggregated by execution department.": "निष्पादन विभागवार संख्या, राशि एवं प्रगति।",
    "Counts, amounts and progress aggregated by financial year of sanction.": "स्वीकृति के वित्तीय वर्षवार संख्या, राशि एवं प्रगति।",
    "Target vs actual, previous vs current month, geo-tag, photographs and field verification.": "लक्ष्य बनाम वास्तविक, पिछला बनाम वर्तमान माह, जियो-टैग, फोटो एवं क्षेत्र सत्यापन।",
    "AA, agreement, bills, releases, balance, UC and instalments; physical vs financial.": "प्रशासनिक स्वीकृति, एकरारनामा, बिल, भुगतान, शेष, उपयोगिता प्रमाण-पत्र एवं किस्तें; भौतिक बनाम वित्तीय।",
    "Works past scheduled completion or behind the expected progress curve.": "निर्धारित पूर्णता तिथि से आगे या अपेक्षित प्रगति से पीछे कार्य।",
    "Requests and files at stages 1-4 with ageing against SLA.": "चरण 1-4 पर अनुरोध एवं फ़ाइलें, एसएलए के सापेक्ष अवधि सहित।",
    "Tender, bid opening, agreement and contractor for approved works.": "स्वीकृत कार्यों हेतु निविदा, बिड खुलना, एकरारनामा एवं संवेदक।",
    "Inspections with findings, actions, compliance and verification.": "निष्कर्ष, कार्रवाई, अनुपालन एवं सत्यापन सहित निरीक्षण।",
    "Instalment-wise requisitions, release status and turnaround.": "किस्तवार अधियाचना, भुगतान स्थिति एवं निष्पादन अवधि।",
    "Works completed and handed over.": "पूर्ण एवं हस्तांतरित कार्य।", "Completion, handover date, receiving department and letters.": "पूर्णता, हस्तांतरण दिनांक, प्राप्तकर्ता विभाग एवं पत्र।",
    "One-page position for the District Administration.": "जिला प्रशासन हेतु एक पृष्ठ की स्थिति।",
    "Search in report": "रिपोर्ट में खोजें", "Rows": "पंक्तियाँ", "Generated on": "तैयार दिनांक", "Report": "रिपोर्ट", "Filters": "फ़िल्टर",
    "Approved works": "स्वीकृत कार्य", "Avg. physical": "औसत भौतिक", "Utilisation": "उपयोग",
    "Component": "घटक", "Milestone": "माइलस्टोन", "Target %": "लक्ष्य %", "Actual %": "वास्तविक %", "Previous month %": "पिछला माह %", "Current month %": "वर्तमान माह %", "Change": "परिवर्तन",
    "Geo-tag": "जियो-टैग", "Photos (B / D / A)": "फोटो (पहले / दौरान / बाद)", "Field verification": "क्षेत्र सत्यापन", "Mobile update": "मोबाइल अद्यतन", "Verified": "सत्यापित", "Pending": "लंबित",
    "Field app": "फील्ड ऐप", "AA amount": "प्रशासनिक स्वीकृति राशि", "Agreement amount": "एकरारनामा राशि", "Bill amount": "बिल राशि", "Payment released": "जारी भुगतान", "Payment date": "भुगतान दिनांक",
    "Balance": "शेष", "UC status": "उ.प्र.प. स्थिति", "UC date": "उ.प्र.प. दिनांक", "Instalments": "किस्तें", "Financial %": "वित्तीय %", "Physical %": "भौतिक %", "Phys. - Fin.": "भौतिक - वित्तीय",
    "Submitted": "जमा", "Scheduled completion": "निर्धारित पूर्णता", "Delay": "विलंब", "Expected %": "अपेक्षित %", "Days": "दिन", "SLA": "एसएलए",
    "Tender floated": "निविदा प्रकाशित", "Tender closing": "निविदा समाप्ति", "Bid opening": "बिड खुलना", "Agreement no.": "एकरारनामा सं.", "Agreement date": "एकरारनामा दिनांक", "Tender status": "निविदा स्थिति",
    "Not floated": "प्रकाशित नहीं", "Floated": "प्रकाशित", "Bids opened": "बिड खुली", "Agreement signed": "एकरारनामा हस्ताक्षरित", "Work commenced": "कार्य प्रारंभ",
    "Inspection ID": "निरीक्षण आईडी", "Team": "दल", "Checklist": "जाँच सूची", "Compliance": "अनुपालन", "Verification": "सत्यापन", "Scheduled": "निर्धारित", "Action pending": "कार्रवाई लंबित", "Closed": "बंद",
    "Instalment": "किस्त", "Letter no.": "पत्रांक", "Released on": "भुगतान दिनांक", "Released": "जारी", "Days taken / pending": "लगे / लंबित दिन",
    "Completion date": "पूर्णता दिनांक", "Handover date": "हस्तांतरण दिनांक", "Handed over to": "किसे हस्तांतरित", "Handover letter": "हस्तांतरण पत्र", "Handed over": "हस्तांतरित",
    "Approved": "स्वीकृत", "Ongoing": "प्रगतिरत", "Delayed": "विलंबित", "Completed": "पूर्ण", "Pending approval": "स्वीकृति लंबित", "Avg. physical %": "औसत भौतिक %",
    "Top delayed works": "प्रमुख विलंबित कार्य", "Pendency against SLA": "एसएलए के सापेक्ष लंबितता", "Beyond SLA": "एसएलए से अधिक", "Category": "श्रेणी",
    "PDF export uses the browser's print dialog (Save as PDF). Excel export creates a .xlsx file.": "पीडीएफ निर्यात ब्राउज़र के प्रिंट डायलॉग (पीडीएफ के रूप में सहेजें) से होता है। एक्सेल निर्यात .xlsx फ़ाइल बनाता है।",
    "Report exported": "रिपोर्ट निर्यात की गई", "Physical / financial": "भौतिक / वित्तीय", "Name": "नाम", "Total projects": "कुल परियोजनाएँ", "Expenditure": "व्यय"
  });

  function sum(l, f) { var t = 0; l.forEach(function (x) { t += +f(x) || 0; }); return t; }
  function pctOf(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function delayInfo(p) { return App.ai && App.ai.delayInfo ? App.ai.delayInfo(p) : { overdue: 0, expected: 0, txt: "-" }; }
  function prevMonthPct(p) { var cut = DM.util.addDays(App.today(), -30), v = 0; (p.progress || []).forEach(function (h) { if (h.date <= cut) v = h.pct; }); return v; }
  function lastProg(p) { var h = p.progress || []; return h[h.length - 1] || null; }
  var yes = function (b) { return b ? '<span class="yes">' + App.icon("tick", "sm") + "</span>" : '<span class="no-t">-</span>'; };

  // Column helpers
  function C(h, v, o) { o = o || {}; o.h = h; o.v = v; return o; }
  var colId = C("Project ID", function (p) { return DM.displayId(p); }, { html: function (p) { return App.pidLink(p); } });
  var colName = C("Project name", function (p) { return App.pname(p); }, { wrap: true });
  var colBlock = C("Block", function (p) { return App.blockName(p.block); });
  var colDept = C("Department", function (p) { return App.deptShort(p.dept); }, { x: function (p) { return App.deptName(p.dept); } });
  var colStatus = C("Status", function (p) { return App.L(DM.STATUS[DM.dstatus(p)]); }, { html: function (p) { return App.pStatusChip(p); } });
  var colAmt = C("Approved amount", function (p) { return DM.amount(p); }, { money: true, sum: true });
  var colPhys = C("Physical %", function (p) { return p.physical || 0; }, { num: true, html: function (p) { return App.bar(p.physical || 0); } });
  var colFin = C("Financial %", function (p) { return DM.finPct(p); }, { num: true, html: function (p) { return App.bar(DM.finPct(p), true); } });

  function groupCols(label) {
    return [C(label, function (r) { return r.name; }),
      C("Total", function (r) { return r.k.total; }, { num: true, sum: true }), C("Approved", function (r) { return r.k.approved; }, { num: true, sum: true }),
      C("Ongoing", function (r) { return r.k.ongoing; }, { num: true, sum: true }), C("Delayed", function (r) { return r.k.delayed; }, { num: true, sum: true }),
      C("Completed", function (r) { return r.k.completed; }, { num: true, sum: true }), C("Pending approval", function (r) { return r.k.pending; }, { num: true, sum: true }),
      C("Approved amount", function (r) { return r.k.approvedAmount; }, { money: true, sum: true }), C("Expenditure", function (r) { return r.k.expenditure; }, { money: true, sum: true }),
      C("Utilisation", function (r) { return pctOf(r.k.expenditure, r.k.approvedAmount); }, { num: true, suffix: "%", total: function (rows) { return pctOf(sum(rows, function (r) { return r.k.expenditure; }), sum(rows, function (r) { return r.k.approvedAmount; })); } }),
      C("Avg. physical %", function (r) { return r.k.physAvg; }, { num: true, suffix: "%", total: function (rows, list) { return DM.avgPhysical(list); } })];
  }
  function groups(list, keys, keyFn, labelFn) { return keys.map(function (k) { var l = list.filter(function (p) { return keyFn(p) === k; }); return { name: labelFn(k), k: DM.kpis(l, App.db), n: l.length }; }).filter(function (r) { return r.n; }); }
  var ISTAT = { scheduled: "Scheduled", action: "Action pending", closed: "Closed" };

  var REPORTS = [
    { g: "Status reports", k: "status", t: "Project status report", d: "Every project with stage, status, amount and progress.", icon: "list",
      rows: function (l) { return l; }, cols: [colId, C("Project name", function (p) { return App.pname(p); }, { wrap: true, html: function (p) { return App.esc(App.pname(p)) + '<div class="small muted">' + App.esc(App.blockName(p.block)) + " | " + App.esc(App.panchayatName(p)) + "</div>"; } }), C("Block", function (p) { return App.blockName(p.block); }, { xonly: true }), C("Panchayat", function (p) { return App.panchayatName(p); }, { xonly: true }), colDept, C("Stage", function (p) { return p.stage + ". " + App.stageShort(p.stage); }), colStatus, colAmt, C("Physical / financial", function (p) { return (p.physical || 0) + "% / " + DM.finPct(p) + "%"; }, { html: function (p) { return '<div class="pf-bars">' + App.bar(p.physical || 0) + App.bar(DM.finPct(p), true) + "</div>"; } })] },
    { g: "Status reports", k: "block", t: "Block-wise report", d: "Counts, amounts and progress aggregated by block.", icon: "map", grouped: true,
      rows: function (l) { return groups(l, DM.BLOCKS.map(function (b) { return b.code; }), function (p) { return p.block; }, App.blockName); }, cols: groupCols("Block") },
    { g: "Status reports", k: "dept", t: "Department-wise report", d: "Counts, amounts and progress aggregated by execution department.", icon: "building", grouped: true,
      rows: function (l) { return groups(l, DM.DEPTS.map(function (d) { return d.code; }), function (p) { return p.dept; }, App.deptName); }, cols: groupCols("Department") },
    { g: "Status reports", k: "fy", t: "FY-wise report", d: "Counts, amounts and progress aggregated by financial year of sanction.", icon: "calendar", grouped: true,
      rows: function (l) { return groups(l, DM.FYS(), function (p) { return p.fy; }, function (f) { return f; }); }, cols: groupCols("Financial Year") },
    { g: "Progress reports", k: "physical", t: "Physical progress report", d: "Target vs actual, previous vs current month, geo-tag, photographs and field verification.", icon: "trend",
      rows: function (l) { return l.filter(function (p) { return p.sf[5] && p.sf[5].commencementDate; }); },
      cols: [colId, colName, C("Component", function (p) { var w = DM.work(p.workKey); return w ? App.L(w.t) : "-"; }), C("Milestone", function (p) { var h = lastProg(p); return h ? App.tx(h.remark) : "-"; }, { wrap: true }),
        C("Target %", function (p) { return p.physical >= 100 ? 100 : delayInfo(p).expected; }, { num: true, suffix: "%" }), C("Actual %", function (p) { return p.physical || 0; }, { num: true, suffix: "%" }),
        C("Previous month %", prevMonthPct, { num: true, suffix: "%" }), C("Current month %", function (p) { return p.physical || 0; }, { num: true, suffix: "%" }),
        C("Change", function (p) { return (p.physical || 0) - prevMonthPct(p); }, { num: true, html: function (p) { var c = (p.physical || 0) - prevMonthPct(p); return (c > 0 ? "+" : "") + c; } }),
        C("Last update", function (p) { var h = lastProg(p); return h ? App.date(h.date) + " " + (h.time || "") : "-"; }), C("Geo-tag", function (p) { var h = lastProg(p); return h ? h.lat.toFixed(4) + ", " + h.lng.toFixed(4) : "-"; }),
        C("Photos (B / D / A)", function (p) { var h = p.progress || []; return "Y / " + (h.length ? "Y" : "-") + " / " + (p.physical >= 100 ? "Y" : "-"); }, { html: function (p) { var h = p.progress || []; return yes(true) + " " + yes(h.length) + " " + yes(p.physical >= 100); } }),
        C("Field verification", function (p) { var h = lastProg(p); return h && h.verified ? App.t("Verified") : App.t("Pending"); }, { html: function (p) { var h = lastProg(p); return h && h.verified ? '<span class="chip st-completed">' + App.esc(App.t("Verified")) + "</span>" : '<span class="chip st-approval">' + App.esc(App.t("Pending")) + "</span>"; } }),
        C("Mobile update", function (p) { return lastProg(p) ? App.t("Field app") : "-"; })] },
    { g: "Progress reports", k: "financial", t: "Financial progress report", d: "AA, agreement, bills, releases, balance, UC and instalments; physical vs financial.", icon: "rupee",
      rows: function (l) { return l.filter(function (p) { return DM.approved(p); }); },
      cols: [colId, colName, C("AA amount", function (p) { return DM.amount(p); }, { money: true, sum: true }), C("Agreement amount", function (p) { return (p.sf[5] && p.sf[5].agreementAmount) || 0; }, { money: true, sum: true }),
        C("Bill amount", function (p) { return sum(p.payments || [], function (x) { return x.amount; }); }, { money: true, sum: true }), C("Payment released", function (p) { return DM.expenditure(p); }, { money: true, sum: true }),
        C("Payment date", function (p) { var r = (p.payments || []).filter(function (x) { return x.releasedOn; }); return r.length ? App.date(r[r.length - 1].releasedOn) : "-"; }),
        C("Expenditure", function (p) { return DM.expenditure(p); }, { money: true, sum: true }), C("Balance", function (p) { return DM.amount(p) - DM.expenditure(p); }, { money: true, sum: true }),
        C("UC status", function (p) { var r = (p.payments || []).filter(function (x) { return x.uc; }); if (!r.length) return "-"; var u = r[r.length - 1].uc; return u.status === "submitted" ? App.t("Submitted") : App.t("Pending"); }),
        C("UC date", function (p) { var r = (p.payments || []).filter(function (x) { return x.uc && x.uc.date; }); return r.length ? App.date(r[r.length - 1].uc.date) : "-"; }),
        C("Instalments", function (p) { var a = p.payments || []; return a.filter(function (x) { return x.status === "released"; }).length + " / " + a.length; }),
        C("Financial %", function (p) { return DM.finPct(p); }, { num: true, suffix: "%" }), C("Physical %", function (p) { return p.physical || 0; }, { num: true, suffix: "%" }),
        C("Phys. - Fin.", function (p) { return Math.round((p.physical || 0) - DM.finPct(p)); }, { num: true })] },
    { g: "Exception reports", k: "delayed", t: "Delayed projects report", d: "Works past scheduled completion or behind the expected progress curve.", icon: "warning",
      rows: function (l) { return l.filter(function (p) { return DM.isDelayed(p); }).sort(function (a, b) { return delayInfo(b).sev - delayInfo(a).sev; }); },
      cols: [colId, colName, colBlock, colDept, C("Contractor", function (p) { return App.contractorName(p.sf[5] && p.sf[5].contractor); }), C("Scheduled completion", function (p) { return App.date(p.sf[5].plannedCompletion); }),
        C("Expected %", function (p) { return delayInfo(p).expected; }, { num: true, suffix: "%" }), C("Actual %", function (p) { return p.physical || 0; }, { num: true, suffix: "%" }), C("Delay", function (p) { return delayInfo(p).txt; }), colAmt] },
    { g: "Exception reports", k: "pending", t: "Pending approval report", d: "Requests and files at stages 1-4 with ageing against SLA.", icon: "pending",
      rows: function (l) { return l.filter(function (p) { return p.stage <= 4 && p.pendingAt; }).sort(function (a, b) { return a.pendingSince < b.pendingSince ? -1 : 1; }); },
      cols: [colId, colName, colBlock, colDept, C("Stage", function (p) { return p.stage + ". " + App.stageName(p.stage); }), C("Pending at", function (p) { return App.desig(p.pendingAt, p); }, { wrap: true }), C("Pending since", function (p) { return App.date(p.pendingSince); }),
        C("Days", function (p) { return App.ago(p.pendingSince); }, { num: true, html: function (p) { var a = App.ago(p.pendingSince), s = slaFor(p); return '<span class="age ' + (a > s ? "over" : a > s * 0.75 ? "near" : "ok") + '">' + a + "</span>"; } }),
        C("SLA", function (p) { return slaFor(p); }, { num: true }), C("Estimated amount", function (p) { return DM.amount(p); }, { money: true, sum: true })] },
    { g: "Process reports", k: "tender", t: "Tender status report", d: "Tender, bid opening, agreement and contractor for approved works.", icon: "file",
      rows: function (l) { return l.filter(function (p) { return p.stage >= 5 && p.sf[5]; }); },
      cols: [colId, colName, colDept, C("Tender floated", function (p) { return App.date(p.sf[5].tenderFloat); }), C("Tender closing", function (p) { return App.date(p.sf[5].tenderClose); }), C("Bid opening", function (p) { return App.date(p.sf[5].bidOpen); }),
        C("Agreement no.", function (p) { return p.sf[5].agreementNo || "-"; }), C("Agreement date", function (p) { return App.date(p.sf[5].agreementDate); }), C("Agreement amount", function (p) { return p.sf[5].agreementAmount || 0; }, { money: true, sum: true }),
        C("Contractor", function (p) { return App.contractorName(p.sf[5].contractor); }), C("Tender status", tenderStatus)] },
    { g: "Process reports", k: "inspection", t: "Inspection report", d: "Inspections with findings, actions, compliance and verification.", icon: "clipboard", src: "insp",
      cols: [C("Inspection ID", function (i) { return i.id; }), C("Project ID", function (i) { return DM.displayId(i.p); }, { html: function (i) { return App.pidLink(i.p); } }), C("Project name", function (i) { return App.pname(i.p); }, { wrap: true }),
        C("Date", function (i) { return App.date(i.date); }), C("Team", function (i) { return (i.team || []).map(function (k) { return App.desig(k, i.p); }).join("; "); }, { wrap: true }),
        C("Checklist", function (i) { var c = i.checklist || []; return c.filter(function (x) { return x === true; }).length + " / " + c.length; }), C("Deficiency", function (i) { return i.deficiency ? App.tx(i.deficiency) : "-"; }, { wrap: true }),
        C("Assigned to", function (i) { return i.assignedTo ? App.desig(i.assignedTo, i.p) : "-"; }), C("Due date", function (i) { return App.date(i.dueDate); }), C("Compliance", function (i) { return i.compliance ? App.date(i.compliance.date) : "-"; }),
        C("Verification", function (i) { return i.verification ? App.t("Verified") : "-"; }), C("Status", function (i) { return App.t(ISTAT[i.status] || i.status); }, { html: function (i) { return '<span class="chip ' + (i.status === "closed" ? "st-completed" : i.status === "action" ? "st-delayed" : "st-tender") + '">' + App.esc(App.t(ISTAT[i.status] || i.status)) + "</span>"; } })] },
    { g: "Process reports", k: "payment", t: "Payment requisition report", d: "Instalment-wise requisitions, release status and turnaround.", icon: "wallet", src: "pay",
      cols: [C("Project ID", function (x) { return DM.displayId(x.p); }, { html: function (x) { return App.pidLink(x.p); } }), C("Project name", function (x) { return App.pname(x.p); }, { wrap: true }), C("Instalment", function (x) { return x.no; }, { num: true }),
        C("Requisition date", function (x) { return App.date(x.date); }), C("Letter no.", function (x) { return x.letter; }), C("Amount", function (x) { return x.amount; }, { money: true, sum: true }),
        C("Status", function (x) { return x.status === "released" ? App.t("Released") : App.t("Pending"); }, { html: function (x) { return '<span class="chip ' + (x.status === "released" ? "st-completed" : "st-approval") + '">' + App.esc(x.status === "released" ? App.t("Released") : App.t("Pending")) + "</span>"; } }),
        C("Released on", function (x) { return App.date(x.releasedOn); }), C("Released", function (x) { return x.released || 0; }, { money: true, sum: true }),
        C("Days taken / pending", function (x) { return DM.util.diff(x.date, x.releasedOn || App.today()); }, { num: true })] },
    { g: "Process reports", k: "completed", t: "Completed projects report", d: "Works completed and handed over.", icon: "check",
      rows: function (l) { return l.filter(function (p) { return DM.status(p) === "completed"; }); },
      cols: [colId, colName, colBlock, colDept, colAmt, C("Expenditure", function (p) { return DM.expenditure(p); }, { money: true, sum: true }), C("Completion date", function (p) { return App.date(p.sf[10].completionDate); }), C("Handover date", function (p) { return App.date(p.sf[10].handoverDate); })] },
    { g: "Process reports", k: "handover", t: "Handover report", d: "Completion, handover date, receiving department and letters.", icon: "flag",
      rows: function (l) { return l.filter(function (p) { return p.stage === 10; }); },
      cols: [colId, colName, colBlock, C("Completion date", function (p) { return App.date(p.sf[10] && p.sf[10].completionDate); }), C("Handover date", function (p) { return App.date(p.sf[10] && p.sf[10].handoverDate); }),
        C("Handed over to", function (p) { return p.sf[10] && p.sf[10].handoverDept ? App.L(p.sf[10].handoverDept) : "-"; }, { wrap: true }), C("Handover letter", function (p) { return (p.sf[10] && p.sf[10].handoverLetter) || "-"; }),
        C("Status", function (p) { return DM.status(p) === "completed" ? App.t("Handed over") : App.t("Pending"); }, { html: function (p) { return App.pStatusChip(p); } }), C("Pending at", function (p) { return p.pendingAt ? App.desig(p.pendingAt, p) : "-"; })] },
    { g: "Summary", k: "exec", t: "Executive summary", d: "One-page position for the District Administration.", icon: "dashboard", custom: true }
  ];
  function slaFor(p) { var s = App.db.sla; if (p.stage <= 2) return s.approval; if (p.stage === 3) return p.sf[3] && p.sf[3].dprDate ? s.ta : s.dpr; return s.aa; }
  function tenderStatus(p) { var s = p.sf[5]; if (s.commencementDate) return App.t("Work commenced"); if (s.agreementDate) return App.t("Agreement signed"); if (s.bidOpen) return App.t("Bids opened"); if (s.tenderFloat) return App.t("Floated"); return App.t("Not floated"); }
  App.REPORTS = REPORTS;

  function sourceRows(rep, list) {
    if (rep.src === "insp") { var ids = {}; list.forEach(function (p) { ids[p.id] = p; }); return App.db.inspections.filter(function (i) { return ids[i.pid]; }).map(function (i) { var o = Object.create(i); o.p = ids[i.pid]; return o; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; }); }
    if (rep.src === "pay") { var out = []; list.forEach(function (p) { (p.payments || []).forEach(function (x) { var o = Object.create(x); o.p = p; out.push(o); }); }); return out.sort(function (a, b) { return a.date < b.date ? 1 : -1; }); }
    return rep.rows(list);
  }
  function fmt(c, v) { if (c.money) return v ? App.money(v) : '<span class="no-t">-</span>'; if (c.suffix) return v + c.suffix; return App.esc(v); }
  function plain(c, r) { var v = c.v(r); if (c.x) return c.x(r); return v == null ? "" : v; }

  function execSummary(list) {
    var k = DM.kpis(list, App.db), ids = {}; list.forEach(function (p) { ids[p.id] = 1; });
    var pend = DM.pendency(App.db).filter(function (x) { return ids[x.pid]; });
    var tiles = [["Total projects", App.n(k.total), "folder", "#123B73"], ["Approved", App.n(k.approved), "check", "#2F5FAF"], ["Ongoing", App.n(k.ongoing), "trend", "#0B8BA3"], ["Delayed", App.n(k.delayed), "warning", "#C0392B"], ["Completed", App.n(k.completed), "flag", "#2F8A4E"],
      ["Pending approval", App.n(k.pending), "pending", "#C2650A"], ["Approved amount", App.money(k.approvedAmount), "rupee", "#123B73"], ["Expenditure", App.money(k.expenditure), "wallet", "#7B4FB5"], ["Utilisation", pctOf(k.expenditure, k.approvedAmount) + "%", "chart", "#2F5FAF"], ["Avg. physical %", k.physAvg + "%", "trend", "#0B8BA3"]];
    var h = '<div class="kpis" style="grid-template-columns:repeat(5,minmax(0,1fr));margin-bottom:14px">' + tiles.map(function (t) { return '<dl class="kpi" style="--k:' + t[3] + '"><dt>' + App.esc(App.t(t[0])) + App.icon(t[2]) + "</dt><dd>" + t[1] + "</dd></dl>"; }).join("") + "</div>";
    var bl = groups(list, DM.BLOCKS.map(function (b) { return b.code; }), function (p) { return p.block; }, App.blockName);
    var del = list.filter(function (p) { return DM.isDelayed(p); }).sort(function (a, b) { return delayInfo(b).sev - delayInfo(a).sev; }).slice(0, 6);
    h += '<div class="exec-grid"><div class="card"><h3>' + App.esc(App.t("Block-wise report")) + '</h3><div class="table-wrap"><table class="data compact"><thead><tr><th>' + App.esc(App.t("Block")) + '</th><th class="num">' + App.esc(App.t("Total")) + '</th><th class="num">' + App.esc(App.t("Ongoing")) + '</th><th class="num">' + App.esc(App.t("Delayed")) + '</th><th class="num">' + App.esc(App.t("Completed")) + '</th><th class="num">' + App.esc(App.t("Approved amount")) + "</th></tr></thead><tbody>" +
      bl.map(function (r) { return "<tr><td>" + App.esc(r.name) + '</td><td class="num">' + r.k.total + '</td><td class="num">' + r.k.ongoing + '</td><td class="num">' + r.k.delayed + '</td><td class="num">' + r.k.completed + '</td><td class="num">' + App.money(r.k.approvedAmount) + "</td></tr>"; }).join("") + "</tbody></table></div></div>";
    h += '<div class="card"><h3>' + App.esc(App.t("Pendency against SLA")) + '</h3><div class="table-wrap"><table class="data compact"><thead><tr><th>' + App.esc(App.t("Category")) + '</th><th class="num">' + App.esc(App.t("Pending")) + '</th><th class="num">' + App.esc(App.t("Beyond SLA")) + "</th></tr></thead><tbody>" +
      DM.PEND_CATS.map(function (c) { var it = pend.filter(function (x) { return x.cat === c.k; }); return it.length ? "<tr><td>" + App.esc(App.L(c)) + '</td><td class="num">' + it.length + '</td><td class="num"><span class="age ' + (it.filter(function (x) { return x.over; }).length ? "over" : "ok") + '">' + it.filter(function (x) { return x.over; }).length + "</span></td></tr>" : ""; }).join("") + "</tbody></table></div></div></div>";
    h += '<div class="card" style="margin-top:14px"><h3>' + App.esc(App.t("Top delayed works")) + '</h3><div class="table-wrap"><table class="data compact"><thead><tr><th>' + App.esc(App.t("Project ID")) + "</th><th>" + App.esc(App.t("Project name")) + "</th><th>" + App.esc(App.t("Department")) + '</th><th class="num">' + App.esc(App.t("Physical %")) + "</th><th>" + App.esc(App.t("Delay")) + "</th></tr></thead><tbody>" +
      del.map(function (p) { return "<tr><td>" + App.pidLink(p) + "</td><td>" + App.esc(App.pname(p)) + "</td><td>" + App.esc(App.deptShort(p.dept)) + '</td><td class="num">' + (p.physical || 0) + "%</td><td>" + App.esc(delayInfo(p).txt) + "</td></tr>"; }).join("") + "</tbody></table></div></div>";
    var sheets = [{ name: "Summary", rows: [[App.t("Indicator"), App.t("Value")]].concat(tiles.map(function (t) { return [App.t(t[0]), t[1]]; })) },
      { name: "Block-wise", rows: [[App.t("Block"), App.t("Total"), App.t("Ongoing"), App.t("Delayed"), App.t("Completed"), App.t("Approved amount") + " (Rs)"]].concat(bl.map(function (r) { return [r.name, r.k.total, r.k.ongoing, r.k.delayed, r.k.completed, r.k.approvedAmount]; })) },
      { name: "Delayed", rows: [[App.t("Project ID"), App.t("Project name"), App.t("Department"), App.t("Physical %"), App.t("Delay")]].concat(del.map(function (p) { return [DM.displayId(p), App.pname(p), App.deptName(p.dept), p.physical || 0, delayInfo(p).txt]; })) }];
    return { html: h, sheets: sheets };
  }

  var state = { f: {} };
  App.view("reports", {
    perm: "reports",
    title: function () { return App.t("Reports & MIS"); },
    render: function (main, route) {
      var rk = route.query.r && REPORTS.some(function (r) { return r.k === route.query.r; }) ? route.query.r : "status";
      ["block", "dept", "fy", "status"].forEach(function (k) { if (route.query[k] != null) state.f[k] = route.query[k]; });
      var rep = REPORTS.filter(function (r) { return r.k === rk; })[0];
      var nav = '<nav class="rpt-nav" aria-label="' + App.esc(App.t("Reports & MIS")) + '">', lastG = "";
      REPORTS.forEach(function (r) { if (r.g !== lastG) { nav += '<div class="rn-g">' + App.esc(App.t(r.g)) + "</div>"; lastG = r.g; } nav += '<a href="#/reports?r=' + r.k + '"' + (r.k === rk ? ' aria-current="page"' : "") + ">" + App.icon(r.icon) + App.esc(App.t(r.t)) + "</a>"; });
      nav += "</nav>";
      main.innerHTML = App.pageHead(App.t("Reports & MIS"), App.esc(App.t("Standard MIS reports with filters. Export to Excel or PDF.")), "", [[App.t("Dashboard"), "#/dashboard"], [App.t("Reports & MIS"), ""]]) +
        '<div class="rpt-grid">' + nav + '<section aria-labelledby="rptT"><div class="rpt-head"><div><h2 id="rptT">' + App.esc(App.t(rep.t)) + "</h2><p>" + App.esc(App.t(rep.d)) + '</p></div><div class="rpt-actions"><button class="btn secondary sm" type="button" id="rXls">' + App.icon("download", "sm") + App.esc(App.t("Export Excel")) + '</button><button class="btn secondary sm" type="button" id="rPdf">' + App.icon("print", "sm") + App.esc(App.t("Export PDF")) + "</button></div></div>" +
        '<div class="rpt-print-head"><strong>' + App.esc(App.t("DMFT Work Monitoring Portal, Ramgarh")) + "</strong> | " + App.esc(App.t(rep.t)) + " | " + App.esc(App.t("Generated on")) + " " + App.dt(App.nowTs()) + " | " + App.esc(App.t("Sample data for demonstration")) + "</div>" +
        '<form class="filters rpt-filters" id="rF" aria-label="' + App.esc(App.t("Filters")) + '">' +
        '<div class="field"><label for="rfB">' + App.esc(App.t("Block")) + '</label><select class="input" id="rfB" name="block">' + App.blockOpts(state.f.block) + "</select></div>" +
        '<div class="field"><label for="rfD">' + App.esc(App.t("Department")) + '</label><select class="input" id="rfD" name="dept">' + App.deptOpts(state.f.dept) + "</select></div>" +
        '<div class="field"><label for="rfY">' + App.esc(App.t("Financial Year")) + '</label><select class="input" id="rfY" name="fy">' + App.fyOpts(state.f.fy) + "</select></div>" +
        '<div class="field"><label for="rfS">' + App.esc(App.t("Status")) + '</label><select class="input" id="rfS" name="status">' + App.statusOpts(state.f.status) + "</select></div>" +
        '<div class="field"><label for="rfQ">' + App.esc(App.t("Search in report")) + '</label><input class="input" id="rfQ" name="q" type="search" value="' + App.esc(state.f.q || "") + '"></div></form>' +
        '<div id="rBody"></div><p class="rpt-meta no-print">' + App.icon("info", "sm") + App.esc(App.t("PDF export uses the browser's print dialog (Save as PDF). Excel export creates a .xlsx file.")) + " " + App.sampleTag() + '</p><p class="rpt-meta rpt-def">' + App.icon("info", "sm") + App.esc(App.L(DM.AVG_PHYS_DEF)) + "</p></section></div>";
      var body = main.querySelector("#rBody"), current = null;
      function draw() {
        var list = App.filterProjects(App.scoped(), { block: state.f.block, dept: state.f.dept, fy: state.f.fy, status: state.f.status, q: state.f.q });
        if (rep.custom) { current = execSummary(list); body.innerHTML = current.html; return; }
        var rows = sourceRows(rep, list), k = DM.kpis(rep.src || rep.grouped ? list : rows, App.db);
        var sumHtml = '<div class="rpt-sum">' + [["Projects", App.n(rep.src || rep.grouped ? list.length : rows.length), "folder", "#123B73"], ["Approved amount", App.money(k.approvedAmount), "rupee", "#2F5FAF"], ["Expenditure", App.money(k.expenditure), "wallet", "#7B4FB5"], ["Avg. physical", k.physAvg + "%", "trend", "#0B8BA3"], ["Delayed", App.n(k.delayed), "warning", "#C0392B"]]
          .map(function (t) { return '<dl class="kpi" style="--k:' + t[3] + '"><dt>' + App.esc(App.t(t[0])) + App.icon(t[2]) + "</dt><dd>" + t[1] + "</dd></dl>"; }).join("") + "</div>";
        var cols = rep.cols.filter(function (c) { return !c.xonly; }), foot = cols.some(function (c) { return c.sum; });
        var h = '<div class="table-wrap tbl-scroll rpt-table" tabindex="0" aria-label="' + App.esc(App.t(rep.t)) + '"><table class="data"><caption class="sr-only">' + App.esc(App.t(rep.t)) + "</caption><thead><tr>" +
          cols.map(function (c) { return '<th scope="col"' + (c.num || c.money ? ' class="num"' : "") + ">" + App.esc(App.t(c.h)) + "</th>"; }).join("") + "</tr></thead><tbody>";
        if (!rows.length) h += '<tr><td colspan="' + cols.length + '"><div class="empty">' + App.esc(App.t("No records match the selected filters.")) + "</div></td></tr>";
        rows.forEach(function (r) { h += "<tr>" + cols.map(function (c) { return "<td" + (c.num || c.money ? ' class="num"' : c.wrap ? ' class="wrap"' : "") + ">" + (c.html ? c.html(r) : fmt(c, c.v(r))) + "</td>"; }).join("") + "</tr>"; });
        h += "</tbody>";
        if (foot && rows.length) h += "<tfoot><tr>" + cols.map(function (c, i) { return "<td" + (c.num || c.money ? ' class="num"' : "") + ">" + (i === 0 ? App.esc(App.t("Total")) + " (" + rows.length + ")" : c.sum ? fmt(c, sum(rows, c.v)) : c.total ? fmt(c, c.total(rows, list)) : "") + "</td>"; }).join("") + "</tr></tfoot>";
        h += "</table></div>";
        body.innerHTML = (rep.grouped ? "" : sumHtml) + h;
        current = { rows: rows, list: list };
      }
      draw();
      main.querySelector("#rF").addEventListener("input", App.debounce(function (e) { var t = e.target; state.f[t.name] = t.value; draw(); }, 150));
      main.querySelector("#rF").addEventListener("submit", function (e) { e.preventDefault(); });
      main.querySelector("#rPdf").addEventListener("click", function () { App.log("export", { en: "Printed " + rep.t, hi: App.t(rep.t) + " प्रिंट" }); App.print(); });
      main.querySelector("#rXls").addEventListener("click", function () {
        var name = "DMFT-Ramgarh_" + rep.t.replace(/[^A-Za-z]+/g, "-") + "_" + App.today() + ".xlsx", sheets;
        if (rep.custom) sheets = current.sheets;
        else {
          var aoa = [rep.cols.map(function (c) { return App.t(c.h) + (c.money ? " (Rs)" : ""); })];
          current.rows.forEach(function (r) { aoa.push(rep.cols.map(function (c) { return plain(c, r); })); });
          if (rep.cols.some(function (c) { return c.sum; })) aoa.push(rep.cols.map(function (c, i) { return i === 0 ? App.t("Total") : c.sum ? sum(current.rows, c.v) : c.total ? c.total(current.rows, current.list) : ""; }));
          sheets = [{ name: App.t(rep.t).slice(0, 31), rows: aoa }];
        }
        App.exportXlsx(name, sheets, App.t(rep.t));
        App.toast(App.t("Report exported"));
      });
    }
  });
})();
