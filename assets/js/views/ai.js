/* Ask DMFT AI (scope item 6) - natural-language questions answered deterministically from the portal's data.
   The question is mapped to an intent and parameters (block, department, FY, stage, percentage, project), then computed
   over the user's role-scoped project list. No network calls. Every question is audit-logged. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  var A = App.ai = {};

  App.addHi({
    "Ask DMFT AI": "आस्क डीएमएफटी एआई",
    "Ask questions in English or Hindi. Answers are computed from the portal's project data (sample data in this prototype), scoped to your role.": "अंग्रेज़ी या हिंदी में प्रश्न पूछें। उत्तर पोर्टल के परियोजना डाटा (इस प्रोटोटाइप में नमूना डाटा) से, आपकी भूमिका के दायरे में, तैयार किए जाते हैं।",
    "Type your question": "अपना प्रश्न लिखें", "Ask": "पूछें", "Try these questions": "ये प्रश्न आज़माएँ", "More examples": "अन्य उदाहरण",
    "How Ask DMFT AI works": "आस्क डीएमएफटी एआई कैसे काम करता है", "Clear conversation": "बातचीत साफ़ करें", "You": "आप", "AI": "एआई",
    "Namaste. I can answer questions about DMFT works in Ramgarh: counts, delays, pendency, progress, payments, inspections, and draft the monthly status report or a review meeting brief.": "नमस्ते। मैं रामगढ़ के डीएमएफटी कार्यों से जुड़े प्रश्नों के उत्तर दे सकता हूँ: संख्या, विलंब, लंबितता, प्रगति, भुगतान, निरीक्षण, तथा मासिक स्थिति रिपोर्ट या समीक्षा बैठक नोट का प्रारूप भी तैयार कर सकता हूँ।",
    "Generated from the portal's data, scoped to your role and jurisdiction ({s}). Question and answer are audit-logged.": "पोर्टल के डाटा से तैयार, आपकी भूमिका एवं क्षेत्राधिकार ({s}) तक सीमित। प्रश्न एवं उत्तर ऑडिट-लॉग किए जाते हैं।",
    "Results limited to your role and jurisdiction; no free-text access to personal data.": "परिणाम आपकी भूमिका एवं क्षेत्राधिकार तक सीमित; व्यक्तिगत डाटा तक मुक्त पहुँच नहीं।",
    "Every question and answer is audit-logged; DMFT can switch the module off.": "प्रत्येक प्रश्न एवं उत्तर ऑडिट-लॉग होता है; डीएमएफटी इस मॉड्यूल को बंद कर सकता है।",
    "Reports and briefs are generated as editable drafts for officer approval.": "रिपोर्ट एवं नोट अधिकारी अनुमोदन हेतु संपादन योग्य प्रारूप के रूप में बनते हैं।",
    "Project context": "परियोजना संदर्भ", "Source projects": "स्रोत परियोजनाएँ", "Show all {n}": "सभी {n} दिखाएँ", "Show fewer": "कम दिखाएँ",
    "Physical": "भौतिक", "Financial": "वित्तीय", "Detail": "विवरण", "Rank": "क्रम", "Delayed": "विलंबित", "Under execution": "निष्पादनाधीन", "Delayed share": "विलंबित अनुपात",
    "Projects": "परियोजनाएँ", "Approved": "स्वीकृत", "Utilisation": "उपयोग", "Last update": "अंतिम अद्यतन", "Gap": "अंतर",
    "Inspection": "निरीक्षण", "Deficiency": "कमी", "Assigned to": "किसे सौंपा", "Due date": "नियत तिथि", "Overdue": "अतिदेय", "Within time": "समय सीमा में",
    "{d} days overdue": "{d} दिन अतिदेय", "Expected {e}% vs actual {a}%": "अपेक्षित {e}% बनाम वास्तविक {a}%", "{d} days (SLA {s})": "{d} दिन (एसएलए {s})",
    "Amount": "राशि", "Requisition date": "अधियाचना दिनांक", "Contractor / agency": "संवेदक / एजेंसी", "Completion date": "पूर्णता दिनांक",
    "Draft for officer approval": "अधिकारी अनुमोदन हेतु प्रारूप", "Monthly DMFT Project Status Report": "मासिक डीएमएफटी परियोजना स्थिति रिपोर्ट",
    "Review Meeting Brief - DMFT Works": "समीक्षा बैठक नोट - डीएमएफटी कार्य", "As on": "दिनांक", "Scope": "दायरा",
    "1. Summary": "1. सारांश", "2. Block-wise position": "2. प्रखंडवार स्थिति", "3. Department-wise position": "3. विभागवार स्थिति", "4. Delayed projects": "4. विलंबित परियोजनाएँ",
    "5. Pending approvals and files": "5. लंबित स्वीकृतियाँ एवं फ़ाइलें", "6. Payments": "6. भुगतान", "7. Inspections": "7. निरीक्षण", "8. Action points": "8. कार्रवाई बिंदु",
    "Highlights this month": "इस माह की मुख्य बातें", "Total projects": "कुल परियोजनाएँ", "Ongoing": "प्रगतिरत", "Completed": "पूर्ण", "Pending approval": "स्वीकृति लंबित",
    "Approved amount": "स्वीकृत राशि", "Expenditure": "व्यय", "Category": "श्रेणी", "Pending": "लंबित", "Beyond SLA": "एसएलए से अधिक", "Oldest (days)": "सबसे पुराना (दिन)",
    "Prepared by Ask DMFT AI from portal data. To be reviewed and approved by the District Planning Officer before circulation.": "आस्क डीएमएफटी एआई द्वारा पोर्टल डाटा से तैयार। परिचालन से पूर्व जिला योजना पदाधिकारी द्वारा समीक्षा एवं अनुमोदन आवश्यक।",
    "Agenda": "कार्यसूची", "Overall position": "समग्र स्थिति", "Department-wise review points": "विभागवार समीक्षा बिंदु", "Block-wise hotspots": "प्रखंडवार प्राथमिक क्षेत्र",
    "Decisions required": "आवश्यक निर्णय", "Follow-up and responsibility": "अनुवर्ती कार्रवाई एवं उत्तरदायित्व",
    "Open draft as document": "प्रारूप दस्तावेज़ के रूप में खोलें", "Key facts": "मुख्य तथ्य", "Next action": "अगली कार्रवाई",
    "Field": "विवरण", "Value": "मान", "Not applicable": "लागू नहीं", "None": "कोई नहीं",
    "I could not match this question to the portal's data yet. I can answer questions like:": "मैं इस प्रश्न को अभी पोर्टल डाटा से मिला नहीं सका। मैं ऐसे प्रश्नों के उत्तर दे सकता हूँ:",
    "Open a project and use \"Ask DMFT AI about this project\", or mention its project ID (for example MND/0042).": "किसी परियोजना को खोलकर \"इस परियोजना के बारे में पूछें\" का उपयोग करें, या उसकी परियोजना आईडी लिखें (जैसे MND/0042)।",
    "Answer exported": "उत्तर निर्यात किया गया",
    "In this prototype, answers are computed by rule-based intent matching over the sample data. In the production portal, a language model hosted in an Indian region converts the question into a query over approved reporting views, scoped to your role; every answer shows its source records.": "इस प्रोटोटाइप में उत्तर नमूना डाटा पर नियम-आधारित आशय मिलान से तैयार होते हैं। उत्पादन पोर्टल में भारतीय क्षेत्र में होस्ट किया गया भाषा मॉडल प्रश्न को स्वीकृत रिपोर्टिंग व्यू पर क्वेरी में बदलता है, जो आपकी भूमिका तक सीमित है; प्रत्येक उत्तर में उसके स्रोत अभिलेख दिखते हैं।",
    "In the production portal": "उत्पादन पोर्टल में",
    "No data retention or training by the model provider; an on-premise open-source model is an option.": "मॉडल प्रदाता द्वारा डाटा का प्रतिधारण या प्रशिक्षण नहीं; ऑन-प्रिमाइस ओपन-सोर्स मॉडल का विकल्प उपलब्ध।"
  });

  // ---------------- Parsing ----------------
  function norm(s) { return " " + String(s || "").toLowerCase().replace(/[?!,।"]/g, " ").replace(/\s+/g, " ").trim() + " "; }
  function has(q, arr) { for (var i = 0; i < arr.length; i++) if (q.indexOf(arr[i]) >= 0) return true; return false; }
  var DEPT_KW = { RWD: ["rwd", "rural works", "ग्रामीण कार्य", "road dep"], DWSD: ["dwsd", "drinking water", "पेयजल", "sanitation dep", "water dep"], BCD: ["bcd", "building construction", "भवन निर्माण", "building dep"],
    HLT: ["health", "स्वास्थ्य"], EDU: ["education", "शिक्षा"], RDSD: ["rdsd", "rural development", "special division", "ग्रामीण विकास", "विशेष प्रमंडल"], WCD: ["wcd", "women", "महिला", "child dev", "बाल विकास"],
    AGR: ["agriculture", "कृषि"], JBVNL: ["jbvnl", "electricity", "विद्युत", "बिजली"] };
  // Work-type keywords (map to DM.WORKS keys) and sector keywords
  var WORK_KW = [
    [["pcc road", " road ", " roads ", "सड़क", " पथ"], ["pcc_road"]], [["bridge", "culvert", "पुल"], ["bridge"]],
    [["water supply", "water scheme", "jalapurti", "जलापूर्ति"], ["mvs", "pipe"]], [["toilet", "sanitary", "शौचालय"], ["toilet"]],
    [["community hall", "सामुदायिक भवन"], ["hall"]], [["day-care", "day care", "elderly", "old age", "वृद्ध"], ["oldage"]],
    [["hospital", "clinic", "health centre", "health center", "phc", "chc", "अस्पताल", "स्वास्थ्य केंद्र"], ["hsc", "equip"]], [["sub-centre", "sub centre", "subcentre", "उप-केंद्र"], ["hsc"]], [["medical equipment", "चिकित्सा उपकरण"], ["equip"]],
    [["school", "classroom", "विद्यालय", "कक्षा"], ["classrooms", "smartclass"]], [["check dam", "checkdam", "चेक डैम"], ["checkdam"]],
    [["pond", "तालाब"], ["pond"]], [["skill centre", "livelihood centre", "कौशल"], ["skillctr"]], [["plantation", "green belt", "वृक्षारोपण"], ["plant"]],
    [["anganwadi", "आंगनबाड़ी"], ["anganwadi"]], [["nutrition", "पोषण"], ["poshan"]], [["cold storage", "शीत भंडारण"], ["coldstore"]],
    [["drip", "sprinkler", "ड्रिप"], ["drip"]], [["street light", "streetlight", "solar light", "स्ट्रीट लाइट"], ["solarlight"]], [["transformer", "ट्रांसफार्मर"], ["transformer"]]
  ];
  var SECT_KW = { water: ["drinking water", "पेयजल"], environment: ["environment", "pollution", "पर्यावरण"], health: ["health", "स्वास्थ्य"], education: ["education", "शिक्षा"],
    women_child: ["women", "child", "महिला", "बाल"], aged: ["aged", "disabled", "elderly", "वृद्ध", "दिव्यांग"], skill: ["skill", "livelihood", "कौशल", "आजीविका"], sanitation: ["sanitation", "स्वच्छता"],
    agriculture: ["agriculture", "animal husbandry", "कृषि"], infra: ["infrastructure", "अवसंरचना"], irrigation: ["irrigation", "सिंचाई"], watershed: ["watershed", "जलछाजन"] };
  function wordIn(q, name) { var n = " " + name.toLowerCase(); var i = q.indexOf(n); if (i < 0) return false; var c = q.charAt(i + n.length); return c === " " || c === "-" || c === "'" || c === "/"; }
  function hiIn(raw, name) { return String(raw).indexOf(name) >= 0; }
  A.parse = function (raw, ctx) {
    var q = norm(raw), o = { q: q, raw: raw };
    var wantsVillage = has(q, ["village", " gram ", "ग्राम", "गांव", "गाँव"]), wantsPan = has(q, ["panchayat", "पंचायत"]);
    // block (Ramgarh is also the district name, so the Ramgarh block needs an explicit "block" qualifier)
    DM.BLOCKS.forEach(function (b) {
      if (o.block) return;
      if (b.code === "RGH") { if (has(q, ["ramgarh block", "ramgarh prakhand", "रामगढ़ प्रखंड", "रामगढ़ ब्लॉक", "block ramgarh"])) o.block = b.code; return; }
      if (wordIn(q, b.en) || hiIn(raw, b.hi)) o.block = b.code;
    });
    // panchayat / village (an unqualified block name stays a block; "panchayat" / "village" narrows it)
    var panHit = null, vilHit = null;
    DM.BLOCKS.forEach(function (b) { b.panchayats.forEach(function (pp) {
      if (!panHit && (wordIn(q, pp.en) || hiIn(raw, pp.hi))) panHit = { b: b, p: pp };
      pp.villages.forEach(function (v) { if (!vilHit && (wordIn(q, v.en) || hiIn(raw, v.hi))) vilHit = { b: b, p: pp, v: v }; });
    }); });
    var blockNamed = !!o.block && !!panHit && panHit.p.en === DM.block(o.block).en;
    if (wantsVillage && vilHit) { o.village = vilHit.v; o.vblock = vilHit.b.code; o.block = vilHit.b.code; }
    else if (wantsPan && panHit) { o.panchayat = panHit.p; o.pblock = panHit.b.code; o.block = panHit.b.code; }
    else if (!blockNamed && panHit && (!o.block || panHit.b.code === o.block)) { o.panchayat = panHit.p; o.pblock = panHit.b.code; o.block = panHit.b.code; }
    else if (!blockNamed && !panHit && vilHit) { o.village = vilHit.v; o.vblock = vilHit.b.code; o.block = vilHit.b.code; }
    Object.keys(DEPT_KW).forEach(function (k) { if (!o.dept && has(q, DEPT_KW[k])) o.dept = k; });
    // "health" / "education" are both a sector and a department; read them as a sector when "sector" is used
    if (has(q, ["sector", "क्षेत्र"])) { Object.keys(SECT_KW).forEach(function (k) { if (!o.sector && has(q, SECT_KW[k])) o.sector = k; }); if (o.sector) o.dept = null; }
    if (has(q, ["high priority", "high-priority", "उच्च प्राथमिकता"])) o.prio = "high"; else if (has(q, ["other priority", "low priority", "other-priority", "अन्य प्राथमिकता"])) o.prio = "other";
    WORK_KW.forEach(function (w) { if (!o.works && has(q, w[0])) o.works = w[1]; });
    // contractor named in the question
    (App.db.contractors || []).forEach(function (c) { if (!o.contractor && (q.indexOf(c.name.en.toLowerCase().split(" ").slice(0, 2).join(" ")) >= 0 || hiIn(raw, c.name.hi))) o.contractor = c.id; });
    var fy = q.match(/(20\d\d)\s*[-–\/]\s*(\d{2,4})/);
    if (fy) { var a = +fy[1]; o.fy = a + "-" + String(a + 1).slice(2); }
    else if (has(q, ["this year", "current year", "current fy", "this fy", "चालू वर्ष", "इस वर्ष", "चालू वित्तीय"])) o.fy = DM.FYS()[2];
    else if (has(q, ["last year", "previous year", "last fy", "previous fy", "पिछले वर्ष", "गत वर्ष"])) o.fy = DM.FYS()[1];
    var pc = q.match(/(\d{1,3})\s*(%|percent|per cent|प्रतिशत|फीसदी)/) || q.match(/(?:below|under|less than|above|more than|over|greater than|<|>)\s*(\d{1,3})\b(?!\s*days)/);
    if (pc) o.pct = Math.min(100, +pc[1]);
    o.cmp = has(q, ["above", "more than", "greater", "over ", "exceed", ">", "अधिक", "ऊपर", "ज़्यादा", "ज्यादा"]) && !has(q, ["below", "less", "under ", "<", "कम", "नीचे"]) ? "gt" : "lt";
    var nd = q.match(/(?:next|within|in)\s+(\d{1,3})\s*days/) || q.match(/(\d{1,3})\s*दिन/); if (nd) o.days = +nd[1];
    var tn = q.match(/top\s+(\d{1,2})/); if (tn) o.top = +tn[1];
    // project reference
    var pid = null, m;
    if ((m = raw.match(/DMFT\/RMG\/\d{4}-\d{2}\/[A-Z]{3}\/\d{4}/i))) pid = find(function (p) { return p.uid && p.uid.toLowerCase() === m[0].toLowerCase(); });
    if (!pid && (m = raw.match(/WR\/RMG\/\d{4}-\d{2}\/\d{4}/i))) pid = find(function (p) { return p.reqNo.toLowerCase() === m[0].toLowerCase(); });
    if (!pid && (m = raw.match(/\b([A-Z]{3})\s*[\/-]\s*(\d{3,4})\b/i))) { var bc = m[1].toUpperCase(), sq = ("000" + m[2]).slice(-4); pid = find(function (p) { return p.uid && p.uid.slice(-8) === bc + "/" + sq; }); }
    if (!pid && (m = raw.match(/\bP\d{3}\b/))) pid = find(function (p) { return p.id === m[0]; });
    var WITH = [["ddc", ["ddc", "deputy development", "उप विकास आयुक्त"]], ["dpo", ["dpo", "district planning officer", "planning officer", "जिला योजना पदाधिकारी"]], ["nodal", ["nodal", "नोडल"]], ["accounts", ["accounts", "लेखा"]],
      ["dc", ["deputy commissioner", " dc ", "उपायुक्त"]], ["ee", ["executive engineer", " ee ", " ees ", "कार्यपालक अभियंता"]], ["je", ["junior engineer", " je ", "कनीय अभियंता"]], ["cell", ["dmft cell", "section officer", "प्रशाखा", "डीएमएफटी सेल"]],
      ["deo", ["data entry", " deo ", "डाटा एंट्री"]], ["insp", ["inspection team", "निरीक्षण दल"]]];
    WITH.forEach(function (w) { if (!o.withKey && has(q, w[1]) && !(w[0] === "dc" && has(q, ["deputy development"]))) o.withKey = w[0]; });
    o.pid = pid ? pid.id : null;
    o.pidAsked = !!raw.match(/DMFT\/RMG\/|WR\/RMG\/|\b[A-Z]{3}\s*\/\s*\d{3,4}\b/);
    o.thisProject = has(q, ["this project", "this work", "इस परियोजना", "इस कार्य", "summar", "सारांश"]);
    if (!o.pid && o.thisProject && ctx && ctx.pid) o.pid = ctx.pid;
    return o;
  };
  function find(fn) { var l = App.db.projects; for (var i = 0; i < l.length; i++) if (fn(l[i])) return l[i]; return null; }

  A.classify = function (o) {
    var q = o.q;
    var isPending = has(q, ["pending", "awaiting", "await ", "waiting", "stuck", "लंबित", "बाकी", "प्रतीक्षा"]);
    var isDelay = has(q, ["delay", " late", "behind schedule", "overdue", "slipp", "विलंब", "देरी", "देर से", "पिछड़"]);
    var money = has(q, ["amount", "expenditure", "fund", "spent", "spend", "budget", "utilis", "utiliz", "money", "crore", "lakh", "sanctioned", "released", "how much", "value of", "राशि", "व्यय", "खर्च", "निधि", "करोड़", "लाख", "जारी"]);
    if (has(q, ["monthly", "मासिक", "month's", "status report", "mis report", "स्थिति रिपोर्ट"]) && has(q, ["report", "रिपोर्ट"])) return "monthly";
    if (has(q, ["review meeting", "meeting brief", " brief", "briefing", "समीक्षा बैठक", "बैठक नोट", "बैठक हेतु"])) return "brief";
    if (has(q, ["why ", "reason", "responsible", "who is holding", "holding the file", "who has the file", "who holds", "whose desk", "क्यों", "कारण", "जिम्मेदार", "ज़िम्मेदार", "किसके पास"])) return "why";
    if (o.pid && (o.thisProject || !has(q, ["delay", "how many", "list"]))) return "summary";
    if (o.pidAsked) return "notFound";
    if (o.withKey && (isPending || has(q, ["files with", "file with", "with the", "के पास"]))) return "pendingWith";
    if (o.thisProject) return "summaryNoCtx";
    if (has(q, ["utilisation certificate", "utilization certificate", " uc ", " ucs ", "uc pending", "pending uc", "उपयोगिता प्रमाण"])) return "ucPending";
    if (has(q, ["contractor", "agency", "agencies", " firm", "संवेदक", "ठेकेदार", "एजेंसी"]) && !o.contractor) return "contractorDelayed";
    if (has(q, ["department", "dept", "विभाग"]) && isDelay && !o.dept) return "deptDelayed";
    if (has(q, ["average", "avg", "औसत", "mean "]) && has(q, ["progress", "प्रगति", "physical", "financial"])) return "avgProgress";
    if (has(q, ["stage-wise", "stage wise", "stagewise", "by stage", "each stage", "per stage", "every stage", "चरणवार", "हर चरण", "प्रत्येक चरण"]) || (has(q, ["stage", "चरण"]) && has(q, ["how many", "count", "कितनी", "कितने"]) && !A.category(q))) return "stageCount";
    if (has(q, ["inspection", "निरीक्षण"]) && has(q, ["action", "deficien", "compliance", "open", "कार्रवाई", "कमी", "अनुपालन"])) return "inspActions";
    if (has(q, ["largest", "biggest", "highest value", "costliest", "high value", "top projects", "most expensive", "सबसे बड़ी", "सबसे बड़े", "बड़ी परियोजना"]) || (o.top && !isDelay)) return "largest";
    if (has(q, ["sector", "priority", "pmkkky", "क्षेत्रवार", "प्राथमिकता"])) return "sector";
    if (has(q, ["due for completion", "due to complete", "scheduled for completion", "scheduled to complete", "deadline", "completion date", " due ", "complete by", "finish by", "पूर्णता तिथि", "पूर्ण होने वाली", "पूर्ण होने वाले", "पूरे होने", "पूरी होने"])) return "dueSoon";
    if (has(q, ["completed", "complete ", "finished", "handed over", "पूर्ण", "पूरी", "पूरे"]) && has(q, ["this month", "last month", "इस माह", "इस महीने", "पिछले माह"])) return "completedMonth";
    if (money && !isPending && !isDelay) return "amounts";
    var cat = A.category(q);
    if (cat && (cat !== "anyapproval" || isPending)) return "pending:" + cat;
    if (o.pct != null && has(q, ["financial", "वित्तीय", "expenditure", "व्यय"])) return "finPct";
    if (o.pct != null && has(q, ["physical", "progress", "प्रगति", "complete"])) return "physPct";
    if (has(q, ["physical vs", "physical versus", "vs financial", "versus financial", "gap", "mismatch", "भौतिक बनाम", "अंतर"])) return "gap";
    if (isDelay) return "delayed";
    if (has(q, ["execution", "ongoing", "in progress", "under construction", "running", "being executed", "निष्पादन", "प्रगतिरत", "चल रही", "चल रहे", "चालू", "निर्माणाधीन"])) return "execution";
    if (has(q, ["completed", "complete ", "finished", "handed over", "पूर्ण", "पूरी", "पूरे"])) return "completed";
    if (money) return "amounts";
    if (cat === "anyapproval") return "pending:anyapproval";
    if (has(q, ["how many", "count", "number of", "total", "kitne", "कितनी", "कितने", "कुल", "संख्या", "status of", "overview", "स्थिति", "list ", "show ", "projects in", "works in", "सूची", "दिखाएँ", "दिखाओ"]) || o.block || o.dept || o.panchayat || o.village || o.works || o.contractor || o.fy || o.sector) return "counts";
    return "help";
  };
  // Pendency category from keywords (order matters)
  A.category = function (q) {
    if (has(q, ["administrative approval", "admin approval", "administrative sanction", " aa ", "aa pending", "pending aa", "प्रशासनिक"])) return "aa";
    if (has(q, ["technical approval", "technical sanction", " ta ", "तकनीकी"])) return "ta";
    if (has(q, ["dpr", "डीपीआर", "detailed project report"])) return "dpr";
    if (has(q, ["tender", "निविदा"])) return "tender";
    if (has(q, ["agreement", "एकरारनामा", "अनुबंध"])) return "agreement";
    if (has(q, ["not started", "not commenced", "commencement", "yet to start", "not begun", "प्रारंभ नहीं", "शुरू नहीं"])) return "commencement";
    if (has(q, ["payment", "requisition", " bill", "भुगतान", "अधियाचना"])) return "payment";
    if (has(q, ["handover", "hand over", "हस्तांतरण"])) return "handover";
    if (has(q, ["inspection", "निरीक्षण"])) return "inspection";
    if (has(q, ["progress update", "not updated", "update pending", "no update", "no progress", "अद्यतन"])) return "progress";
    if (has(q, ["acceptance", "gram sabha", "स्वीकृति", "approval", "approve", "मंज़ूरी"])) return "anyapproval";
    return null;
  };

  // ---------------- Helpers ----------------
  function scopeList(o, all) {
    var l = App.scoped();
    if (all) return l;
    return l.filter(function (p) {
      return (!o.block || p.block === o.block) && (!o.dept || p.dept === o.dept) && (!o.fy || p.fy === o.fy) &&
        (!o.panchayat || (p.panchayat === o.panchayat.en && p.block === o.pblock)) && (!o.village || (p.village === o.village.en && p.block === o.vblock)) &&
        (!o.works || o.works.indexOf(p.workKey) >= 0) && (!o.contractor || (p.sf[5] && p.sf[5].contractor === o.contractor)) &&
        (!o.sector || p.sector === o.sector) && (!o.prio || (DM.sector(p.sector) || {}).pr === o.prio);
    });
  }
  function where(o) {
    var parts = [];
    if (o.village) parts.push(App.tf("in {v} village ({b} block)", { v: App.L(o.village), b: App.blockName(o.vblock) }));
    else if (o.panchayat) parts.push(App.tf("in {p} Panchayat ({b} block)", { p: App.L(o.panchayat), b: App.blockName(o.pblock) }));
    else if (o.block) parts.push(App.tf("in {b} block", { b: App.blockName(o.block) }));
    if (o.dept) parts.push(App.tf("under {d}", { d: App.deptName(o.dept) }));
    if (o.works) parts.push(App.tf("for {t} works", { t: App.lang === "hi" ? App.L(DM.work(o.works[0]).t) : App.L(DM.work(o.works[0]).t).toLowerCase() }));
    if (o.sector) parts.push(App.tf("in the {s} sector", { s: App.L(DM.sector(o.sector)) }));
    if (o.prio) parts.push(App.t(o.prio === "high" ? "in high-priority sectors" : "in other-priority sectors"));
    if (o.contractor) parts.push(App.tf("awarded to {c}", { c: App.contractorName(o.contractor) }));
    if (o.fy) parts.push(App.tf("in FY {f}", { f: o.fy }));
    return parts.length ? " " + parts.join(", ") : "";
  }
  App.addHi({ "in {b} block": "{b} प्रखंड में", "under {d}": "{d} के अंतर्गत", "in FY {f}": "वित्तीय वर्ष {f} में",
    "in {v} village ({b} block)": "ग्राम {v} ({b} प्रखंड) में", "in {p} Panchayat ({b} block)": "{p} पंचायत ({b} प्रखंड) में", "for {t} works": "{t} कार्यों हेतु",
    "in the {s} sector": "{s} क्षेत्र में", "in high-priority sectors": "उच्च प्राथमिकता क्षेत्रों में", "in other-priority sectors": "अन्य प्राथमिकता क्षेत्रों में", "awarded to {c}": "{c} को आवंटित" });
  A.delayInfo = function (p) {
    var s5 = p.sf[5] || {}, today = App.today();
    if (!s5.plannedCompletion || !s5.commencementDate) return { overdue: 0, expected: 0, gap: 0, txt: "-" };
    var overdue = DM.util.diff(s5.plannedCompletion, today), dur = DM.util.diff(s5.commencementDate, s5.plannedCompletion), el = DM.util.diff(s5.commencementDate, today);
    var exp = Math.max(0, Math.min(100, Math.round(dur > 0 ? el / dur * 100 : 0))), gap = exp - (p.physical || 0);
    var txt = overdue > 0 ? App.tf("{d} days overdue", { d: overdue }) : App.tf("Expected {e}% vs actual {a}%", { e: exp, a: p.physical || 0 });
    return { overdue: overdue, expected: exp, gap: gap, txt: txt, sev: overdue > 0 ? 1000 + overdue : gap };
  };
  function countBy(list, keyFn) { var m = {}; list.forEach(function (p) { var k = keyFn(p); m[k] = (m[k] || 0) + 1; }); return m; }
  function sortedCounts(m) { return Object.keys(m).map(function (k) { return [k, m[k]]; }).sort(function (a, b) { return b[1] - a[1]; }); }
  function sum(list, fn) { var t = 0; list.forEach(function (x) { t += fn(x) || 0; }); return t; }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function b(s) { return "<strong>" + s + "</strong>"; }
  function joinCounts(pairs, labelFn, n) { return pairs.slice(0, n || 6).map(function (x) { return App.esc(labelFn(x[0])) + " " + x[1]; }).join(", "); }

  // Generic project table result
  function projResult(list, extra, html, title) { return { html: html, list: list, extra: extra || null, title: title }; }
  function statusX(p) { return App.L(DM.STATUS[DM.dstatus(p)]); }

  // ---------------- Intents ----------------
  var I = {};
  I.execution = function (o) {
    var base = scopeList(o), list = base.filter(function (p) { return DM.status(p) === "ongoing"; });
    var del = list.filter(function (p) { return DM.isDelayed(p); }).length, avg = DM.avgPhysical(list);
    var byB = sortedCounts(countBy(list, function (p) { return p.block; }));
    var html = "<p>" + App.tf("{n} projects are currently under execution{w} (work commenced, not yet completed). {d} of them are delayed. Average physical progress is {a}% and their approved value is {v}.", { n: b(App.n(list.length)), w: where(o), d: b(del), a: avg, v: b(App.money(sum(list, DM.amount))) }) + "</p>" +
      (o.block ? "" : "<p>" + App.t("Block-wise") + ": " + joinCounts(byB, App.blockName) + ".</p>");
    list.sort(function (a, c) { return (a.physical || 0) - (c.physical || 0); });
    var r0 = projResult(list, { h: App.t("Last update"), v: function (p) { var d = DM.lastProgressDate(p); return d ? App.date(d) : "-"; } }, html, App.t("Projects under execution")); r0.note = App.L(DM.AVG_PHYS_DEF); return r0;
  };
  App.addHi({ "{n} projects are currently under execution{w} (work commenced, not yet completed). {d} of them are delayed. Average physical progress is {a}% and their approved value is {v}.": "{w} {n} परियोजनाएँ वर्तमान में निष्पादनाधीन हैं (कार्य प्रारंभ, अभी पूर्ण नहीं)। इनमें से {d} विलंबित हैं। औसत भौतिक प्रगति {a}% है एवं इनकी स्वीकृत राशि {v} है।",
    "Block-wise": "प्रखंडवार", "Projects under execution": "निष्पादनाधीन परियोजनाएँ" });

  I.delayed = function (o) {
    var base = scopeList(o), list = base.filter(function (p) { return DM.isDelayed(p); }), ong = base.filter(function (p) { return DM.status(p) === "ongoing"; }).length;
    list.sort(function (a, c) { return A.delayInfo(c).sev - A.delayInfo(a).sev; });
    var allN = list.length; if (o.top) list = list.slice(0, o.top);
    var html;
    if (!list.length) html = "<p>" + App.tf("No delayed projects{w}. All {n} works under execution are on schedule.", { w: where(o), n: ong }) + "</p>";
    else {
      var top = list[0], di = A.delayInfo(top), byD = sortedCounts(countBy(list, function (p) { return p.dept; }));
      html = "<p>" + App.tf(allN === 1 ? "{n} delayed project{w}, out of {m} under execution: {p} ({x})." : "{n} delayed projects{w}, out of {m} under execution. The most behind is {p} ({x}).", { n: b(allN), w: where(o), m: ong, p: "<a href=\"#/project/" + top.id + "\">" + App.esc(App.pname(top)) + "</a>", x: App.esc(di.txt) }) + "</p>" +
        "<p>" + App.t("By department") + ": " + joinCounts(byD, App.deptShort) + ". " + App.tf("Value at risk: {v}.", { v: b(App.money(sum(list, DM.amount))) }) + "</p>";
    }
    return projResult(list, { h: App.t("Detail"), v: function (p) { return A.delayInfo(p).txt; } }, html, App.t("Delayed projects") + where(o));
  };
  App.addHi({ "No delayed projects{w}. All {n} works under execution are on schedule.": "{w} कोई विलंबित परियोजना नहीं। निष्पादनाधीन सभी {n} कार्य समय-सारणी पर हैं।",
    "{n} delayed projects{w}, out of {m} under execution. The most behind is {p} ({x}).": "{w} निष्पादनाधीन {m} में से {n} परियोजनाएँ विलंबित हैं। सबसे अधिक पिछड़ी परियोजना {p} ({x}) है।",
    "By department": "विभागवार", "{n} delayed project{w}, out of {m} under execution: {p} ({x}).": "{w} निष्पादनाधीन {m} में से {n} परियोजना विलंबित है: {p} ({x})।", "Value at risk: {v}.": "जोखिम में राशि: {v}।", "Delayed projects": "विलंबित परियोजनाएँ" });

  var CAT_NAMES = { anyapproval: { en: "approval (request acceptance, DPR, technical or administrative approval)", hi: "स्वीकृति (अनुरोध स्वीकृति, डीपीआर, तकनीकी या प्रशासनिक स्वीकृति)" },
    approval: { en: "request acceptance", hi: "अनुरोध स्वीकृति" }, dpr: { en: "DPR preparation", hi: "डीपीआर तैयारी" }, ta: { en: "technical approval", hi: "तकनीकी स्वीकृति" }, aa: { en: "administrative approval", hi: "प्रशासनिक स्वीकृति" },
    tender: { en: "tender", hi: "निविदा" }, agreement: { en: "agreement", hi: "एकरारनामा" }, commencement: { en: "work commencement", hi: "कार्य प्रारंभ" }, progress: { en: "progress update", hi: "प्रगति अद्यतन" },
    inspection: { en: "inspection", hi: "निरीक्षण" }, inspaction: { en: "inspection action", hi: "निरीक्षण कार्रवाई" }, payment: { en: "payment release", hi: "भुगतान" }, handover: { en: "handover", hi: "हस्तांतरण" } };
  I.pending = function (o, cat) {
    var scopeIds = {}; scopeList(o).forEach(function (p) { scopeIds[p.id] = 1; });
    var cats = cat === "anyapproval" ? ["approval", "dpr", "ta", "aa"] : [cat];
    var items = DM.pendency(App.db).filter(function (x) { return cats.indexOf(x.cat) >= 0 && scopeIds[x.pid]; });
    items.sort(function (a, c) { return c.age - a.age; });
    var seen = {}, list = [], itemBy = {};
    items.forEach(function (x) { if (!seen[x.pid]) { seen[x.pid] = 1; list.push(DM.byId(App.db, x.pid)); itemBy[x.pid] = x; } });
    var label = App.L(CAT_NAMES[cat]);
    var over = items.filter(function (x) { return x.over; }), html;
    if (!list.length) html = "<p>" + App.tf("Nothing is pending for {c}{w}.", { c: App.esc(label), w: where(o) }) + "</p>";
    else {
      var old = items[0], op = DM.byId(App.db, old.pid);
      html = "<p>" + App.tf("{n} projects{w} are pending for {c}. SLA breached in {o}. The oldest has been pending {d} days at {at}.", { n: b(list.length), w: where(o), c: App.esc(label), o: b(over.length), d: b(old.age), at: App.esc(op.pendingAt ? App.desig(op.pendingAt, op) : App.desig("ee", op)) }) + "</p>" +
        "<p>" + App.tf("Total value involved: {v}.", { v: b(App.money(cat === "payment" ? sum(items, function (x) { var p = DM.byId(App.db, x.pid); var pay = (p.payments || []).filter(function (y) { return y.status === "pending"; })[0]; return pay ? pay.amount : 0; }) : sum(list, DM.amount))) }) + "</p>";
    }
    return projResult(list, { h: App.t("Pending at") + " / " + App.t("Days"), v: function (p) { var x = itemBy[p.id]; var who = p.pendingAt ? App.desig(p.pendingAt, p) : App.desig("ee", p); return who + " | " + App.tf("{d} days (SLA {s})", { d: x.age, s: x.sla }); },
      html: function (p) { var x = itemBy[p.id]; var who = p.pendingAt ? App.desig(p.pendingAt, p) : App.desig("ee", p); return App.esc(who) + '<br><span class="age ' + (x.over ? "over" : x.age > x.sla * 0.75 ? "near" : "ok") + '">' + App.esc(App.tf("{d} days (SLA {s})", { d: x.age, s: x.sla })) + "</span>"; } }, html, App.t("Pending") + ": " + label);
  };
  App.addHi({ "Nothing is pending for {c}{w}.": "{w} {c} हेतु कुछ भी लंबित नहीं है।",
    "{n} projects{w} are pending for {c}. SLA breached in {o}. The oldest has been pending {d} days at {at}.": "{w} {n} परियोजनाएँ {c} हेतु लंबित हैं। {o} में एसएलए का उल्लंघन। सबसे पुराना मामला {d} दिनों से {at} के पास लंबित है।",
    "Total value involved: {v}.": "संबद्ध कुल राशि: {v}।" });

  I.deptDelayed = function (o) {
    var base = scopeList(o), rows = DM.DEPTS.map(function (d) {
      var ong = base.filter(function (p) { return p.dept === d.code && DM.status(p) === "ongoing"; }), del = ong.filter(function (p) { return DM.isDelayed(p); });
      return { d: d.code, ong: ong.length, del: del.length, share: ong.length ? Math.round(del.length / ong.length * 100) : 0 };
    }).filter(function (r) { return r.ong > 0; }).sort(function (a, c) { return c.del - a.del || c.share - a.share; });
    var maxv = rows.length ? rows[0].del : 0, tops = rows.filter(function (r) { return r.del === maxv && maxv > 0; }), html;
    if (!maxv) html = "<p>" + App.tf("No department has delayed projects{w}.", { w: where(o) }) + "</p>";
    else if (tops.length === 1) html = "<p>" + App.tf("{d} has the highest number of delayed projects{w}: {n} of its {m} works under execution ({s}%).", { d: b(App.esc(App.deptName(tops[0].d))), w: where(o), n: b(maxv), m: tops[0].ong, s: tops[0].share }) + "</p>";
    else html = "<p>" + App.tf("{d} are tied for the highest number of delayed projects{w}, with {n} each.", { d: b(tops.map(function (r) { return App.esc(App.deptName(r.d)); }).join(App.lang === "hi" ? " एवं " : " and ")), w: where(o), n: b(maxv) }) + "</p>";
    var list = base.filter(function (p) { return DM.isDelayed(p); }).sort(function (a, c) { return (c.dept === (tops[0] || {}).d) - (a.dept === (tops[0] || {}).d) || A.delayInfo(c).sev - A.delayInfo(a).sev; });
    return { html: html, table: { head: [App.t("Rank"), App.t("Department"), App.t("Delayed"), App.t("Under execution"), App.t("Delayed share")], num: [0, 0, 1, 1, 1],
      rows: rows.map(function (r, i) { return [String(i + 1), App.deptName(r.d), r.del, r.ong, r.share + "%"]; }) }, list: list, extra: { h: App.t("Detail"), v: function (p) { return A.delayInfo(p).txt; } }, title: App.t("Delayed projects by department") };
  };
  App.addHi({ "No department has delayed projects{w}.": "{w} किसी विभाग की कोई परियोजना विलंबित नहीं है।",
    "{d} has the highest number of delayed projects{w}: {n} of its {m} works under execution ({s}%).": "{w} {d} में सबसे अधिक विलंबित परियोजनाएँ हैं: निष्पादनाधीन {m} में से {n} ({s}%)।",
    "{d} are tied for the highest number of delayed projects{w}, with {n} each.": "{w} {d} में सबसे अधिक विलंबित परियोजनाएँ हैं, प्रत्येक में {n}।", "Delayed projects by department": "विभागवार विलंबित परियोजनाएँ" });

  I.physPct = function (o) {
    var x = o.pct == null ? 30 : o.pct, gt = o.cmp === "gt", base = scopeList(o);
    var list = base.filter(function (p) { return DM.status(p) === "ongoing" && (gt ? (p.physical || 0) > x : (p.physical || 0) < x); });
    var nc = base.filter(function (p) { return DM.status(p) === "notstarted"; }).length;
    list.sort(function (a, c) { return gt ? c.physical - a.physical : a.physical - c.physical; });
    var html = "<p>" + App.tf(gt ? "{n} projects under execution{w} have physical progress above {x}%." : "{n} projects under execution{w} have physical progress below {x}%.", { n: b(list.length), w: where(o), x: x }) + " " +
      (list.length ? App.tf("Also flagged as delayed: {d}.", { d: b(list.filter(function (p) { return DM.isDelayed(p); }).length) }) : "") + "</p>" +
      (!gt && nc ? "<p>" + App.tf("In addition, {n} works have a signed agreement but have not commenced (0%).", { n: nc }) + "</p>" : "");
    return projResult(list, { h: App.t("Last update"), v: function (p) { var d = DM.lastProgressDate(p); return d ? App.date(d) : "-"; } }, html, App.tf(gt ? "Physical progress above {x}%" : "Physical progress below {x}%", { x: x }));
  };
  App.addHi({ "{n} projects under execution{w} have physical progress above {x}%.": "{w} निष्पादनाधीन {n} परियोजनाओं की भौतिक प्रगति {x}% से अधिक है।",
    "{n} projects under execution{w} have physical progress below {x}%.": "{w} निष्पादनाधीन {n} परियोजनाओं की भौतिक प्रगति {x}% से कम है।",
    "Also flagged as delayed: {d}.": "इनमें से विलंबित भी: {d}।", "In addition, {n} works have a signed agreement but have not commenced (0%).": "इसके अतिरिक्त, {n} कार्यों का एकरारनामा हो चुका है पर कार्य प्रारंभ नहीं हुआ (0%)।",
    "Physical progress above {x}%": "भौतिक प्रगति {x}% से अधिक", "Physical progress below {x}%": "भौतिक प्रगति {x}% से कम" });

  I.finPct = function (o) {
    var x = o.pct == null ? 30 : o.pct, gt = o.cmp === "gt";
    var list = scopeList(o).filter(function (p) { var s = DM.status(p); return (s === "ongoing" || s === "handover") && (gt ? DM.finPct(p) > x : DM.finPct(p) < x); }).sort(function (a, c) { return DM.finPct(a) - DM.finPct(c); });
    var html = "<p>" + App.tf(gt ? "{n} works{w} have financial progress above {x}%." : "{n} works{w} have financial progress below {x}%.", { n: b(list.length), w: where(o), x: x }) + "</p>";
    return projResult(list, { h: App.t("Financial"), v: function (p) { return DM.finPct(p) + "%"; } }, html, App.t("Financial progress"));
  };
  App.addHi({ "{n} works{w} have financial progress above {x}%.": "{w} {n} कार्यों की वित्तीय प्रगति {x}% से अधिक है।", "{n} works{w} have financial progress below {x}%.": "{w} {n} कार्यों की वित्तीय प्रगति {x}% से कम है।" });

  I.gap = function (o) {
    var base = scopeList(o).filter(function (p) { var s = DM.status(p); return s === "ongoing" || s === "handover"; });
    var avgP = DM.avgPhysical(base), avgF = base.length ? Math.round(sum(base, DM.finPct) / base.length) : 0;
    var list = base.filter(function (p) { return Math.abs((p.physical || 0) - DM.finPct(p)) >= 25; }).sort(function (a, c) { return Math.abs(c.physical - DM.finPct(c)) - Math.abs(a.physical - DM.finPct(a)); });
    var ahead = list.filter(function (p) { return p.physical > DM.finPct(p); }).length;
    var html = "<p>" + App.tf("Across {n} works under execution or awaiting handover{w}, average physical progress is {p}% against financial progress of {f}%.", { n: b(base.length), w: where(o), p: b(avgP), f: b(avgF) }) + "</p><p>" +
      App.tf("{m} works show a gap of 25 points or more: in {a} the work is ahead of payments (bills likely pending), in {c} payments are ahead of work (verify measurement).", { m: b(list.length), a: ahead, c: list.length - ahead }) + "</p>";
    var r1 = projResult(list, { h: App.t("Physical") + " / " + App.t("Financial"), v: function (p) { return (p.physical || 0) + "% / " + DM.finPct(p) + "%"; } }, html, App.t("Physical vs financial progress")); r1.note = App.L(DM.AVG_PHYS_DEF); return r1;
  };
  App.addHi({ "Across {n} works under execution or awaiting handover{w}, average physical progress is {p}% against financial progress of {f}%.": "{w} निष्पादनाधीन या हस्तांतरण हेतु लंबित {n} कार्यों में औसत भौतिक प्रगति {p}% है जबकि वित्तीय प्रगति {f}% है।",
    "{m} works show a gap of 25 points or more: in {a} the work is ahead of payments (bills likely pending), in {c} payments are ahead of work (verify measurement).": "{m} कार्यों में 25 अंक या अधिक का अंतर है: {a} में कार्य भुगतान से आगे है (बिल संभवतः लंबित), {c} में भुगतान कार्य से आगे है (मापी का सत्यापन करें)।",
    "Physical vs financial progress": "भौतिक बनाम वित्तीय प्रगति" });

  I.completed = function (o) {
    var list = scopeList(o).filter(function (p) { return DM.status(p) === "completed"; }), ho = scopeList(o).filter(function (p) { return DM.status(p) === "handover"; }).length;
    list.sort(function (a, c) { return (c.sf[10].handoverDate || "") < (a.sf[10].handoverDate || "") ? -1 : 1; });
    var html = "<p>" + App.tf("{n} projects{w} are completed and handed over, with a total approved value of {v} and expenditure of {e}.", { n: b(list.length), w: where(o), v: b(App.money(sum(list, DM.amount))), e: App.money(sum(list, DM.expenditure)) }) + (ho ? " " + App.tf("Another {h} works are physically complete and awaiting handover.", { h: ho }) : "") + "</p>";
    return projResult(list, { h: App.t("Completion date"), v: function (p) { return App.date(p.sf[10] && p.sf[10].completionDate); } }, html, App.t("Completed projects"));
  };
  App.addHi({ "{n} projects{w} are completed and handed over, with a total approved value of {v} and expenditure of {e}.": "{w} {n} परियोजनाएँ पूर्ण एवं हस्तांतरित हैं, कुल स्वीकृत राशि {v} एवं व्यय {e}।", "Another {h} works are physically complete and awaiting handover.": "अन्य {h} कार्य भौतिक रूप से पूर्ण हैं एवं हस्तांतरण हेतु लंबित हैं।", "Completed projects": "पूर्ण परियोजनाएँ" });

  I.amounts = function (o) {
    var byFY = has(o.q, ["year-wise", "year wise", "yearwise", "fy-wise", "fy wise", "by fy", "by year", "each year", "per year", "financial year wise", "वर्षवार", "वित्तीय वर्षवार", "हर वर्ष"]) && !o.fy;
    var byDept = !byFY && has(o.q, ["department", "dept", "विभाग"]) && !o.dept, base = scopeList(o), keys = byFY ? DM.FYS() : byDept ? DM.DEPTS.map(function (d) { return d.code; }) : DM.BLOCKS.map(function (x) { return x.code; });
    var rows = keys.map(function (k) {
      var l = base.filter(function (p) { return (byFY ? p.fy : byDept ? p.dept : p.block) === k && DM.approved(p); }), ap = sum(l, DM.amount), ex = sum(l, DM.expenditure);
      return [byFY ? k : byDept ? App.deptName(k) : App.blockName(k), l.length, ap, ex, ap ? Math.round(ex / ap * 100) + "%" : "0%"];
    }).filter(function (r) { return r[1] > 0; });
    var tA = sum(rows, function (r) { return r[2]; }), tE = sum(rows, function (r) { return r[3]; });
    var byExp = has(o.q, ["expenditure", "spent", "spend", "released", "utilis", "utiliz", "खर्च", "व्यय", "जारी"]), mi = byExp ? 3 : 2;
    var top = rows.slice().sort(function (a, c) { return c[mi] - a[mi]; })[0], nP = sum(rows, function (r) { return r[1]; });
    var html = "<p>" + App.tf("{n} approved works{w} total {a}, of which {e} has been released ({u}% utilisation).", { n: b(nP), w: where(o), a: b(App.money(tA)), e: b(App.money(tE)), u: tA ? Math.round(tE / tA * 100) : 0 }) +
      (rows.length > 1 && top ? " " + App.tf(byExp ? "{t} has the highest expenditure ({v})." : "{t} has the largest approved value ({v}).", { t: b(App.esc(top[0])), v: App.money(top[mi]) }) : "") + "</p>";
    return { html: html, table: { head: [byFY ? App.t("Financial Year") : byDept ? App.t("Department") : App.t("Block"), App.t("Projects"), App.t("Approved amount"), App.t("Expenditure"), App.t("Utilisation")], num: [0, 1, 1, 1, 1], money: [2, 3],
      rows: rows, foot: [App.t("Total"), sum(rows, function (r) { return r[1]; }), tA, tE, tA ? Math.round(tE / tA * 100) + "%" : "0%"] }, list: null, title: App.t("Approved amount and expenditure") };
  };
  App.addHi({ "{n} approved works{w} total {a}, of which {e} has been released ({u}% utilisation).": "{w} {n} स्वीकृत कार्यों की कुल राशि {a} है, जिसमें से {e} जारी किया गया है ({u}% उपयोग)।", "{t} has the largest approved value ({v}).": "सर्वाधिक स्वीकृत राशि {t} की है ({v})।", "{t} has the highest expenditure ({v}).": "सर्वाधिक व्यय {t} का है ({v})।", "Approved amount and expenditure": "स्वीकृत राशि एवं व्यय" });

  I.inspActions = function (o) {
    var ids = {}; scopeList(o).forEach(function (p) { ids[p.id] = 1; });
    var ins = App.db.inspections.filter(function (i) { return i.status === "action" && ids[i.pid]; }).sort(function (a, c) { return (a.dueDate || "") < (c.dueDate || "") ? -1 : 1; });
    var today = App.today(), over = ins.filter(function (i) { return i.dueDate && i.dueDate < today; }).length;
    var html = "<p>" + App.tf("{n} inspection findings{w} have open actions; {o} are past their due date. {c} have compliance uploaded and await verification.", { n: b(ins.length), w: where(o), o: b(over), c: ins.filter(function (i) { return i.compliance; }).length }) + "</p>";
    return { html: html, table: { head: [App.t("Inspection"), App.t("Project ID"), App.t("Date"), App.t("Deficiency"), App.t("Assigned to"), App.t("Due date")],
      rows: ins.map(function (i) { var p = DM.byId(App.db, i.pid); return [i.id, { link: p.id, t: DM.displayId(p) }, App.date(i.date), App.tx(i.deficiency), App.desig(i.assignedTo, p), (i.dueDate < today ? "! " : "") + App.date(i.dueDate)]; }) }, list: null, title: App.t("Open inspection actions") };
  };
  App.addHi({ "{n} inspection findings{w} have open actions; {o} are past their due date. {c} have compliance uploaded and await verification.": "{w} {n} निरीक्षण निष्कर्षों पर कार्रवाई लंबित है; {o} की नियत तिथि बीत चुकी है। {c} में अनुपालन अपलोड है एवं सत्यापन प्रतीक्षित है।", "Open inspection actions": "लंबित निरीक्षण कार्रवाई" });

  I.counts = function (o) {
    var list = scopeList(o), k = DM.kpis(list, App.db);
    var html = "<p>" + App.tf("{w}: {t} projects in total, {a} with administrative approval ({v}). {o} are under execution ({d} delayed), {c} completed, {h} awaiting handover, and {p} are pending approval.", { w: cap(where(o).trim()) || App.t("Your jurisdiction"), t: b(k.total), a: k.approved, v: App.money(k.approvedAmount), o: b(k.ongoing), d: k.delayed, c: b(k.completed), h: k.awaitHandover, p: k.pending }) + "</p>";
    var rows = DM.STATUS_ORDER.map(function (s) { return [App.L(DM.STATUS[s]), list.filter(function (p) { return DM.dstatus(p) === s; }).length]; }).filter(function (r) { return r[1]; });
    return { html: html, table: { head: [App.t("Status"), App.t("Projects")], num: [0, 1], rows: rows, foot: [App.t("Total"), list.length] }, list: list.slice().sort(function (a, c) { return c.stage - a.stage; }), title: App.t("Project count") };
  };
  App.addHi({ "{w}: {t} projects in total, {a} with administrative approval ({v}). {o} are under execution ({d} delayed), {c} completed, {h} awaiting handover, and {p} are pending approval.": "{w}: कुल {t} परियोजनाएँ, {a} को प्रशासनिक स्वीकृति ({v})। {o} निष्पादनाधीन ({d} विलंबित), {c} पूर्ण, {h} हस्तांतरण हेतु लंबित, एवं {p} स्वीकृति हेतु लंबित हैं।", "Your jurisdiction": "आपका क्षेत्राधिकार", "Project count": "परियोजना संख्या" });

  I.summary = function (o) {
    var p = DM.byId(App.db, o.pid);
    if (!p) return I.summaryNoCtx(o);
    if (App.scoped().indexOf(p) < 0) return { html: "<p>" + App.t("This project is outside your role's jurisdiction, so it cannot be summarised for you.") + "</p>", list: null, title: "" };
    var s = p.sf, st = DM.dstatus(p), s5 = s[5] || {}, di = A.delayInfo(p), ins = App.db.inspections.filter(function (i) { return i.pid === p.id; });
    var pendPay = (p.payments || []).filter(function (x) { return x.status === "pending"; }), openA = ins.filter(function (i) { return i.status === "action"; }).length;
    var parts = [];
    parts.push(App.tf("{n} ({id}) is located in {v}, {pa} Panchayat, {b} block, and is executed through the {d}.", { n: b(App.esc(App.pname(p))), id: App.esc(DM.displayId(p)), v: App.esc(App.villageName(p)), pa: App.esc(App.panchayatName(p)), b: App.esc(App.blockName(p.block)), d: App.esc(App.deptName(p.dept)) }));
    if (DM.approved(p)) parts.push(App.tf("Administrative approval {no} dated {dt} was granted for {a}.", { no: App.esc(s[4].aaNo), dt: App.date(s[4].aaDate), a: b(App.money(DM.amount(p))) }));
    else parts.push(App.tf("It is at the {st} stage with an estimate of {a}; administrative approval is not yet granted.", { st: App.esc(App.stageName(p.stage)), a: App.money(DM.amount(p)) }));
    if (s5.agreementDate) parts.push(App.tf("Agreement {no} for {a} was signed with {c} on {dt}; scheduled completion is {pc}.", { no: App.esc(s5.agreementNo), a: App.money(s5.agreementAmount), c: App.esc(App.contractorName(s5.contractor)), dt: App.date(s5.agreementDate), pc: App.date(s5.plannedCompletion) }));
    if (s5.commencementDate) parts.push(App.tf("Physical progress is {p}% (last updated {d}) and financial progress is {f}% ({e} released).", { p: b(p.physical || 0), d: App.date(DM.lastProgressDate(p)), f: b(DM.finPct(p)), e: App.money(DM.expenditure(p)) }));
    if (st === "delayed") parts.push(App.tf("The project is flagged as delayed: {x}.", { x: App.esc(di.txt) }));
    if (p.pendingAt) parts.push(App.tf("Current stage: {st}. The file is pending with {at} since {d} ({n} days).", { st: App.esc(p.stage + ". " + App.stageName(p.stage)), at: b(App.esc(App.desig(p.pendingAt, p))), d: App.date(p.pendingSince), n: App.ago(p.pendingSince) }));
    else if (st === "completed") parts.push(App.tf("Work completed on {c} and handed over on {h}.", { c: App.date(s[10].completionDate), h: App.date(s[10].handoverDate) }));
    if (ins.length) parts.push(App.tf("{n} inspections recorded; {o} with open actions.", { n: ins.length, o: openA }));
    var next = p.pendingAt ? App.tf("{at} to act on the pending {st} file.", { at: App.desig(p.pendingAt, p), st: App.stageName(p.stage) }) : App.t("No action pending.");
    if (pendPay.length) next = App.tf("Accounts to process payment requisition {no} for {a}.", { no: pendPay[0].letter, a: App.money(pendPay[0].amount) });
    var html = "<p>" + parts.join(" ") + "</p><p><strong>" + App.t("Next action") + ":</strong> " + App.esc(next) + "</p>";
    var kv = [[App.t("Status"), App.L(DM.STATUS[st])], [App.t("Stage"), p.stage + ". " + App.stageName(p.stage)], [App.t("Approved amount"), App.money(DM.amount(p))], [App.t("Physical progress"), (p.physical || 0) + "%"], [App.t("Financial progress"), DM.finPct(p) + "%"], [App.t("Contractor"), App.contractorName(s5.contractor)], [App.t("Pending at"), p.pendingAt ? App.desig(p.pendingAt, p) : "-"]];
    return { html: html, table: { head: [App.t("Field"), App.t("Value")], rows: kv }, list: [p], title: App.t("Project summary") + " " + DM.displayId(p) };
  };
  App.addHi({ "This project is outside your role's jurisdiction, so it cannot be summarised for you.": "यह परियोजना आपकी भूमिका के क्षेत्राधिकार से बाहर है, अतः इसका सारांश उपलब्ध नहीं है।",
    "{n} ({id}) is located in {v}, {pa} Panchayat, {b} block, and is executed through the {d}.": "{n} ({id}) ग्राम {v}, {pa} पंचायत, {b} प्रखंड में स्थित है एवं {d} द्वारा निष्पादित है।",
    "Administrative approval {no} dated {dt} was granted for {a}.": "दिनांक {dt} को प्रशासनिक स्वीकृति {no} द्वारा {a} स्वीकृत।",
    "It is at the {st} stage with an estimate of {a}; administrative approval is not yet granted.": "यह {st} चरण पर है, प्राक्कलन {a}; प्रशासनिक स्वीकृति अभी प्राप्त नहीं।",
    "Agreement {no} for {a} was signed with {c} on {dt}; scheduled completion is {pc}.": "{dt} को {c} के साथ {a} का एकरारनामा {no} हुआ; निर्धारित पूर्णता तिथि {pc} है।",
    "Physical progress is {p}% (last updated {d}) and financial progress is {f}% ({e} released).": "भौतिक प्रगति {p}% (अंतिम अद्यतन {d}) एवं वित्तीय प्रगति {f}% ({e} जारी) है।",
    "The project is flagged as delayed: {x}.": "परियोजना विलंबित चिह्नित है: {x}।",
    "Current stage: {st}. The file is pending with {at} since {d} ({n} days).": "वर्तमान चरण: {st}। फ़ाइल {d} से ({n} दिन) {at} के पास लंबित है।",
    "Work completed on {c} and handed over on {h}.": "कार्य {c} को पूर्ण एवं {h} को हस्तांतरित।", "{n} inspections recorded; {o} with open actions.": "{n} निरीक्षण दर्ज; {o} पर कार्रवाई लंबित।",
    "{at} to act on the pending {st} file.": "{at} लंबित {st} फ़ाइल पर कार्रवाई करें।", "No action pending.": "कोई कार्रवाई लंबित नहीं।",
    "Accounts to process payment requisition {no} for {a}.": "लेखा शाखा {a} की भुगतान अधियाचना {no} का निष्पादन करे।", "Project summary": "परियोजना सारांश" });

  I.summaryNoCtx = function () { return { html: "<p>" + App.esc(App.t("Open a project and use \"Ask DMFT AI about this project\", or mention its project ID (for example MND/0042).")) + "</p>", list: null, title: "" }; };

  // ---------------- Additional intents ----------------
  I.contractorDelayed = function (o) {
    var base = scopeList(o), m = {}, byDelay = has(o.q, ["delay", " late", "behind", "overdue", "विलंब", "देरी"]);
    base.forEach(function (p) { var c = p.sf[5] && p.sf[5].contractor; if (!c) return; m[c] = m[c] || { c: c, n: 0, ong: 0, del: 0, val: 0 }; m[c].n++; m[c].val += p.sf[5].agreementAmount || 0; if (DM.status(p) === "ongoing") m[c].ong++; if (DM.isDelayed(p)) m[c].del++; });
    var rows = Object.keys(m).map(function (k) { return m[k]; }).sort(byDelay ? function (a, c) { return c.del - a.del || c.ong - a.ong; } : function (a, c) { return c.n - a.n || c.val - a.val; });
    var top = rows[0], html;
    if (!top) html = "<p>" + App.t("No contractor has works in your jurisdiction yet.") + "</p>";
    else if (byDelay) html = top.del ? "<p>" + App.tf("{c} has the most delayed works{w}: {n} of {m} ongoing works.", { c: b(App.esc(App.contractorName(top.c))), w: where(o), n: b(top.del), m: top.ong }) + "</p>" : "<p>" + App.t("No contractor has delayed works in your jurisdiction.") + "</p>";
    else html = "<p>" + App.tf("{c} holds the most works{w}: {n} agreements worth {v} ({m} under execution, {d} delayed). {k} contractors hold agreements in all.", { c: b(App.esc(App.contractorName(top.c))), w: where(o), n: b(top.n), v: App.money(top.val), m: top.ong, d: top.del, k: rows.length }) + "</p>";
    var topId = top ? top.c : null;
    var list = base.filter(function (p) { return p.sf[5] && p.sf[5].contractor === topId && (!byDelay || DM.isDelayed(p)); });
    return { html: html, table: { head: [App.t("Rank"), App.t("Contractor / agency"), App.t("Works"), App.t("Under execution"), App.t("Delayed"), App.t("Agreement value")], num: [0, 0, 1, 1, 1, 1], money: [5],
      rows: rows.slice(0, 8).map(function (r, i) { return [String(i + 1), App.contractorName(r.c), r.n, r.ong, r.del, r.val]; }) },
      list: list, extra: { h: App.t("Detail"), v: function (p) { return DM.isDelayed(p) ? A.delayInfo(p).txt : App.L(DM.STATUS[DM.status(p)]); } }, title: App.t("Contractor-wise works") };
  };
  App.addHi({ "No contractor has works in your jurisdiction yet.": "आपके क्षेत्राधिकार में अभी किसी संवेदक के कार्य नहीं हैं।",
    "{c} holds the most works{w}: {n} agreements worth {v} ({m} under execution, {d} delayed). {k} contractors hold agreements in all.": "{w} सर्वाधिक कार्य {c} के पास हैं: {v} के {n} एकरारनामे ({m} निष्पादनाधीन, {d} विलंबित)। कुल {k} संवेदकों के एकरारनामे हैं।",
    "Works": "कार्य", "Agreement value": "एकरारनामा मूल्य", "Contractor-wise works": "संवेदकवार कार्य",
    "{c} has the most delayed works{w}: {n} of {m} ongoing works.": "{w} {c} के सर्वाधिक कार्य विलंबित हैं: {m} प्रगतिरत कार्यों में से {n}।", "No contractor has delayed works in your jurisdiction.": "आपके क्षेत्राधिकार में किसी संवेदक का कोई कार्य विलंबित नहीं है।" });

  I.dueSoon = function (o) {
    var today = App.today(), end, label;
    if (has(o.q, ["this month", "इस माह", "इस महीने"])) { var d = DM.util.parse(today); end = DM.util.iso(new Date(d.getFullYear(), d.getMonth() + 1, 0)); label = App.t("by the end of this month"); }
    else { var n = o.days || 30; end = DM.util.addDays(today, n); label = App.tf("in the next {n} days", { n: n }); }
    var list = scopeList(o).filter(function (p) { var pc = p.sf[5] && p.sf[5].plannedCompletion; return DM.status(p) === "ongoing" && pc && pc >= today && pc <= end; }).sort(function (a, c) { return a.sf[5].plannedCompletion < c.sf[5].plannedCompletion ? -1 : 1; });
    var risk = list.filter(function (p) { return (p.physical || 0) < 75; }).length, over = scopeList(o).filter(function (p) { var pc = p.sf[5] && p.sf[5].plannedCompletion; return DM.status(p) === "ongoing" && pc && pc < today; }).length;
    var html = "<p>" + App.tf("{n} works under execution{w} are scheduled to complete {l} (by {d}). {r} of them are below 75% physical progress and at risk of missing the date. A further {o} works are already past their scheduled completion.", { n: b(list.length), w: where(o), l: label, d: App.date(end), r: b(risk), o: over }) + "</p>";
    return projResult(list, { h: App.t("Scheduled completion"), v: function (p) { return App.date(p.sf[5].plannedCompletion); } }, html, App.t("Works due for completion"));
  };
  App.addHi({ "by the end of this month": "इस माह के अंत तक", "in the next {n} days": "अगले {n} दिनों में",
    "{n} works under execution{w} are scheduled to complete {l} (by {d}). {r} of them are below 75% physical progress and at risk of missing the date. A further {o} works are already past their scheduled completion.": "{w} निष्पादनाधीन {n} कार्यों की निर्धारित पूर्णता {l} ({d} तक) है। इनमें से {r} की भौतिक प्रगति 75% से कम है एवं तिथि चूकने का जोखिम है। अन्य {o} कार्य निर्धारित पूर्णता तिथि पार कर चुके हैं।",
    "Scheduled completion": "निर्धारित पूर्णता", "Works due for completion": "पूर्णता हेतु देय कार्य" });

  I.completedMonth = function (o) {
    var d = DM.util.parse(App.today()); if (has(o.q, ["last month", "पिछले माह", "पिछले महीने"])) d = new Date(d.getFullYear(), d.getMonth() - 1, 1);
    var mon = DM.util.iso(d).slice(0, 7), mName = MONTHS[App.lang === "hi" ? "hi" : "en"][d.getMonth()] + " " + d.getFullYear();
    var list = scopeList(o).filter(function (p) { return p.sf[10] && p.sf[10].completionDate && p.sf[10].completionDate.slice(0, 7) === mon; });
    var ho = list.filter(function (p) { return p.sf[10].handoverDate; }).length;
    var html = "<p>" + App.tf("{n} works{w} were physically completed in {m}, with an approved value of {v}. {h} of them have already been handed over.", { n: b(list.length), w: where(o), m: mName, v: App.money(sum(list, DM.amount)), h: ho }) + "</p>";
    return projResult(list, { h: App.t("Completion date"), v: function (p) { return App.date(p.sf[10].completionDate); } }, html, App.t("Completed projects") + " - " + mName);
  };
  App.addHi({ "{n} works{w} were physically completed in {m}, with an approved value of {v}. {h} of them have already been handed over.": "{w} {m} में {n} कार्य भौतिक रूप से पूर्ण हुए, स्वीकृत राशि {v}। इनमें से {h} हस्तांतरित हो चुके हैं।" });

  I.ucPending = function (o) {
    var list = [], amt = 0, cnt = 0, info = {};
    scopeList(o).forEach(function (p) { var pend = (p.payments || []).filter(function (x) { return x.status === "released" && x.uc && x.uc.status !== "submitted"; }); if (pend.length) { list.push(p); cnt += pend.length; var a = sum(pend, function (x) { return x.released; }); amt += a; info[p.id] = { n: pend.length, a: a, d: pend[0].releasedOn }; } });
    list.sort(function (a, c) { return info[a.id].d < info[c.id].d ? -1 : 1; });
    var html = "<p>" + App.tf("Utilisation certificates are pending for {c} released instalments across {n} projects{w}, covering {a}. The oldest release without a UC was on {d}.", { c: b(cnt), n: b(list.length), w: where(o), a: b(App.money(amt)), d: list.length ? App.date(info[list[0].id].d) : "-" }) + "</p>";
    return projResult(list, { h: App.t("UC pending for"), v: function (p) { return App.money(info[p.id].a) + " (" + App.date(info[p.id].d) + ")"; } }, html, App.t("Utilisation certificates pending"));
  };
  App.addHi({ "Utilisation certificates are pending for {c} released instalments across {n} projects{w}, covering {a}. The oldest release without a UC was on {d}.": "{w} {n} परियोजनाओं की {c} जारी किस्तों ({a}) के उपयोगिता प्रमाण-पत्र लंबित हैं। बिना उपयोगिता प्रमाण-पत्र का सबसे पुराना भुगतान {d} को हुआ।",
    "UC pending for": "उ.प्र.प. लंबित राशि", "Utilisation certificates pending": "लंबित उपयोगिता प्रमाण-पत्र" });

  I.avgProgress = function (o) {
    var byBlock = has(o.q, ["block", "प्रखंड"]) && !o.block, base = scopeList(o).filter(function (p) { var s = DM.status(p); return s === "ongoing" || s === "handover" || s === "completed"; });
    var keys = byBlock ? DM.BLOCKS.map(function (x) { return x.code; }) : DM.DEPTS.map(function (x) { return x.code; });
    var rows = keys.map(function (k) { var l = base.filter(function (p) { return (byBlock ? p.block : p.dept) === k; }); if (!l.length) return null; var ph = DM.avgPhysical(l), fi = Math.round(sum(l, DM.finPct) / l.length); return [byBlock ? App.blockName(k) : App.deptName(k), l.length, ph + "%", fi + "%", (ph - fi) + ""]; }).filter(Boolean).sort(function (a, c) { return parseInt(c[2], 10) - parseInt(a[2], 10); });
    var avgP = DM.avgPhysical(base), avgFin = base.length ? Math.round(sum(base, DM.finPct) / base.length) : 0;
    var html = "<p>" + App.tf("Average physical progress of works that have commenced{w} is {p}%. Highest: {h} ({hv}); lowest: {l} ({lv}).", { w: where(o), p: b(avgP), h: b(App.esc(rows[0] ? rows[0][0] : "-")), hv: rows[0] ? rows[0][2] : "-", l: b(App.esc(rows.length ? rows[rows.length - 1][0] : "-")), lv: rows.length ? rows[rows.length - 1][2] : "-" }) + "</p>";
    return { html: html, table: { head: [byBlock ? App.t("Block") : App.t("Department"), App.t("Works"), App.t("Avg. physical"), App.t("Avg. financial"), App.t("Gap")], num: [0, 1, 1, 1, 1], rows: rows, foot: [App.t("Total"), base.length, avgP + "%", avgFin + "%", (avgP - avgFin) + ""] }, list: null, note: App.L(DM.AVG_PHYS_DEF), title: App.t("Average progress") };
  };
  App.addHi({ "Average physical progress of works that have commenced{w} is {p}%. Highest: {h} ({hv}); lowest: {l} ({lv}).": "{w} प्रारंभ हो चुके कार्यों की औसत भौतिक प्रगति {p}% है। सर्वाधिक: {h} ({hv}); न्यूनतम: {l} ({lv})।",
    "Avg. physical": "औसत भौतिक", "Avg. financial": "औसत वित्तीय", "Average progress": "औसत प्रगति" });

  I.stageCount = function (o) {
    var base = scopeList(o), rows = DM.STAGES.map(function (s) { var l = base.filter(function (p) { return p.stage === s.n && !(s.n === 10 && DM.status(p) === "completed"); }); return [s.n + ". " + App.L(s), l.length, sum(l, DM.amount)]; });
    rows.push([App.L(DM.STATUS.completed), base.filter(function (p) { return DM.status(p) === "completed"; }).length, sum(base.filter(function (p) { return DM.status(p) === "completed"; }), DM.amount)]);
    var top = rows.slice(0, 10).slice().sort(function (a, c) { return c[1] - a[1]; })[0];
    var html = "<p>" + App.tf("Stage-wise position of {n} projects{w}. The largest group is at \"{s}\" ({c} projects).", { n: b(base.length), w: where(o), s: App.esc(top[0]), c: top[1] }) + "</p>";
    return { html: html, table: { head: [App.t("Stage"), App.t("Projects"), App.t("Amount")], num: [0, 1, 1], money: [2], rows: rows, foot: [App.t("Total"), base.length, sum(base, DM.amount)] }, list: null, title: App.t("Stage-wise count") };
  };
  App.addHi({ "Stage-wise position of {n} projects{w}. The largest group is at \"{s}\" ({c} projects).": "{w} {n} परियोजनाओं की चरणवार स्थिति। सर्वाधिक परियोजनाएँ \"{s}\" चरण पर हैं ({c})।", "Stage-wise count": "चरणवार संख्या" });

  I.largest = function (o) {
    var n = o.top || 10, base = scopeList(o), list = base.slice().sort(function (a, c) { return DM.amount(c) - DM.amount(a); }).slice(0, n), tot = sum(base, DM.amount), top = sum(list, DM.amount);
    var html = list.length ? "<p>" + App.tf("The {n} largest projects{w} by approved / estimated value total {t}, which is {s}% of the {a} portfolio. The largest is {p} at {v}.", { n: b(list.length), w: where(o), t: b(App.money(top)), s: tot ? Math.round(top / tot * 100) : 0, a: App.money(tot), p: "<a href=\"#/project/" + list[0].id + "\">" + App.esc(App.pname(list[0])) + "</a>", v: App.money(DM.amount(list[0])) }) + "</p>" : "<p>" + App.t("No records match the selected filters.") + "</p>";
    return projResult(list, { h: App.t("Amount"), v: function (p) { return App.money(DM.amount(p)); } }, html, App.t("Largest projects"));
  };
  App.addHi({ "The {n} largest projects{w} by approved / estimated value total {t}, which is {s}% of the {a} portfolio. The largest is {p} at {v}.": "{w} स्वीकृत / प्राक्कलित राशि के अनुसार {n} सबसे बड़ी परियोजनाओं का कुल मूल्य {t} है, जो {a} के कुल पोर्टफोलियो का {s}% है। सबसे बड़ी परियोजना {p} ({v}) है।", "Largest projects": "सबसे बड़ी परियोजनाएँ" });

  I.sector = function (o) {
    var base = scopeList(o);
    if (o.sector || o.prio) {
      var list = base.slice().sort(function (a, c) { return DM.amount(c) - DM.amount(a); });
      var html = "<p>" + App.tf("{n} projects{w}, approved / estimated value {v}; {o} under execution and {c} completed.", { n: b(list.length), w: where(o), v: b(App.money(sum(list, DM.amount))), o: list.filter(function (p) { return DM.status(p) === "ongoing"; }).length, c: list.filter(function (p) { return DM.status(p) === "completed"; }).length }) + "</p>";
      return projResult(list, { h: App.t("Sector"), v: function (p) { return App.sectorName(p.sector); } }, html, App.t("Sector-wise projects"));
    }
    var rows = DM.SECTORS.map(function (s) { var l = base.filter(function (p) { return p.sector === s.code; }); return [App.L(s), App.t(s.pr === "high" ? "High priority" : "Other priority"), l.length, sum(l, DM.amount), sum(l, DM.expenditure)]; }).filter(function (r) { return r[2]; }).sort(function (a, c) { return c[3] - a[3]; });
    var hi = base.filter(function (p) { return (DM.sector(p.sector) || {}).pr === "high"; }), tot = sum(base, DM.amount), ha = sum(hi, DM.amount);
    var html2 = "<p>" + App.tf("Under PMKKKY 2024, high-priority sectors account for {h} projects ({ha}, {hp}% of value){w}; other-priority sectors (physical infrastructure, irrigation, watershed) account for {o} projects ({oa}).", { h: b(hi.length), ha: App.money(ha), hp: b(tot ? Math.round(ha / tot * 100) : 0), w: where(o), o: base.length - hi.length, oa: App.money(tot - ha) }) + "</p>";
    return { html: html2, table: { head: [App.t("Sector"), App.t("Priority"), App.t("Projects"), App.t("Amount"), App.t("Expenditure")], num: [0, 0, 1, 1, 1], money: [3, 4], rows: rows, foot: [App.t("Total"), "", base.length, tot, sum(base, DM.expenditure)] }, list: null, title: App.t("Sector-wise projects") };
  };
  App.addHi({ "{n} projects{w}, approved / estimated value {v}; {o} under execution and {c} completed.": "{w} {n} परियोजनाएँ, स्वीकृत / प्राक्कलित राशि {v}; {o} निष्पादनाधीन एवं {c} पूर्ण।",
    "Under PMKKKY 2024, high-priority sectors account for {h} projects ({ha}, {hp}% of value){w}; other-priority sectors (physical infrastructure, irrigation, watershed) account for {o} projects ({oa}).": "{w} पीएमकेकेकेवाई 2024 के अंतर्गत उच्च प्राथमिकता क्षेत्रों में {h} परियोजनाएँ ({ha}, मूल्य का {hp}%) हैं; अन्य प्राथमिकता क्षेत्रों (भौतिक अवसंरचना, सिंचाई, जलछाजन) में {o} परियोजनाएँ ({oa}) हैं।",
    "Priority": "प्राथमिकता", "Sector-wise projects": "क्षेत्रवार परियोजनाएँ" });

  I.notFound = function (o) {
    return { html: "<p>" + App.tf("No project with the ID \"{id}\" was found in your jurisdiction. Check the Unique Project ID (for example DMFT/RMG/2026-27/MND/0042, or MND/0042) or the request number (WR/RMG/...).", { id: App.esc((o.raw.match(/DMFT\/RMG\/[^\s?]+|WR\/RMG\/[^\s?]+|[A-Z]{3}\s*\/\s*\d{3,4}/i) || [""])[0]) }) + "</p>" + suggestHtml(o), list: null, title: "", noExport: true };
  };
  App.addHi({ "No project with the ID \"{id}\" was found in your jurisdiction. Check the Unique Project ID (for example DMFT/RMG/2026-27/MND/0042, or MND/0042) or the request number (WR/RMG/...).": "आपके क्षेत्राधिकार में \"{id}\" आईडी वाली कोई परियोजना नहीं मिली। विशिष्ट परियोजना आईडी (जैसे DMFT/RMG/2026-27/MND/0042 या MND/0042) या अनुरोध संख्या (WR/RMG/...) जाँचें।" });

  I.pendingWith = function (o) {
    var list = scopeList(o).filter(function (p) { return p.pendingAt === o.withKey; }).sort(function (a, c) { return a.pendingSince < c.pendingSince ? -1 : 1; });
    var who = App.L(DM.desig(o.withKey, o.dept ? { dept: o.dept } : null)).replace(/,s*$/, "");
    var over = list.filter(function (p) { return App.ago(p.pendingSince) > 30; }).length;
    var html = "<p>" + App.tf("{n} files{w} are pending with {at}; {o} of them for more than 30 days. The oldest has been waiting {d} days.", { n: b(list.length), w: where(o), at: b(App.esc(who)), o: b(over), d: list.length ? App.ago(list[0].pendingSince) : 0 }) + "</p>";
    return projResult(list, { h: App.t("Stage") + " / " + App.t("Days"), v: function (p) { return p.stage + ". " + App.stageShort(p.stage) + " | " + App.ago(p.pendingSince) + " " + App.t("days"); } }, html, App.t("Pending with") + " " + who);
  };
  App.addHi({ "{n} files{w} are pending with {at}; {o} of them for more than 30 days. The oldest has been waiting {d} days.": "{w} {n} फ़ाइलें {at} के पास लंबित हैं; इनमें से {o} 30 दिनों से अधिक से। सबसे पुरानी {d} दिनों से प्रतीक्षारत है।", "Pending with": "लंबित -" });

  // "Why is X late / who is responsible / who holds the file" - explain one specific work from its record
  var STOP = ["why", "is", "the", "a", "an", "of", "for", "in", "at", "to", "and", "or", "on", "this", "that", "what", "which", "who", "whose", "has", "have", "been", "being", "be", "it", "its",
    "project", "projects", "work", "works", "scheme", "late", "delayed", "delay", "delays", "behind", "schedule", "slow", "responsible", "holding", "holds", "file", "files", "reason", "reasons",
    "block", "panchayat", "village", "not", "complete", "completed", "yet", "still", "pending", "stuck", "with", "desk", "there", "so", "taking", "long", "status", "tell", "me", "about", "please",
    "क्यों", "है", "हैं", "की", "का", "के", "में", "से", "को", "कौन", "किसके", "पास", "फ़ाइल", "फाइल", "परियोजना", "कार्य", "देरी", "विलंब", "हो", "रही", "रहा", "रहे", "कारण", "जिम्मेदार", "ज़िम्मेदार", "प्रखंड", "पंचायत", "ग्राम", "क्या", "और"];
  function nameTokens(o) {
    var drop = {}; STOP.forEach(function (w) { drop[w] = 1; });
    var named = [o.block && DM.block(o.block).en, o.block && DM.block(o.block).hi, o.panchayat && o.panchayat.en, o.panchayat && o.panchayat.hi, o.village && o.village.en, o.village && o.village.hi].filter(Boolean).map(function (x) { return x.toLowerCase(); });
    return o.q.replace(/[^\wऀ-ॿ\s-]/g, " ").split(/\s+/).filter(function (w) { return w.length >= 3 && !drop[w] && named.indexOf(w) < 0 && !/^\d+$/.test(w) && !/^(dmft|rmg|wr)$/.test(w); });
  }
  function rankWhy(list) {
    return list.slice().sort(function (a, c) {
      var da = DM.isDelayed(a) ? 1 : 0, dc = DM.isDelayed(c) ? 1 : 0; if (da !== dc) return dc - da;
      if (da) return A.delayInfo(c).sev - A.delayInfo(a).sev;
      return (a.pendingSince || "9") < (c.pendingSince || "9") ? -1 : 1;
    });
  }
  I.why = function (o) {
    var cand, toks = [];
    if (o.pid) cand = [DM.byId(App.db, o.pid)];
    else {
      cand = scopeList(o);
      if (!o.works) {
        toks = nameTokens(o);
        if (toks.length) cand = cand.filter(function (p) { var h = (p.name.en + " " + p.name.hi + " " + p.village + " " + App.L(DM.work(p.workKey).t)).toLowerCase(); return toks.some(function (t) { return h.indexOf(t) >= 0; }); });
      }
      var cur = cand.filter(function (p) { return DM.status(p) !== "completed"; });
      if (cur.length) cand = cur;
    }
    cand = rankWhy(cand.filter(Boolean));
    if (!cand.length) {
      var score = function (p) { return (o.works && o.works.indexOf(p.workKey) >= 0 ? 4 : 0) + (o.panchayat && p.panchayat === o.panchayat.en ? 3 : 0) + (o.village && p.village === o.village.en ? 3 : 0) + (toks.some(function (t) { return p.name.en.toLowerCase().indexOf(t) >= 0; }) ? 2 : 0) + (DM.isDelayed(p) ? 1 : 0); };
      var near = rankWhy(scopeList({ block: o.block, dept: o.dept, fy: o.fy }).filter(function (p) { var s = DM.status(p); return s !== "completed" && (DM.isDelayed(p) || p.pendingAt || score(p) > 1); })).sort(function (a, c) { return score(c) - score(a); }).slice(0, 5);
      var html0 = "<p>" + App.tf("I could not find a current work matching \"{t}\"{w}. I can explain the delay, the pending officer and the open issues of any specific work from its record. The closest works with delays or pending files are listed below; ask, for example, \"Why is {x} delayed?\".", { t: App.esc((o.works ? App.L(DM.work(o.works[0]).t) : toks.join(" ")) || o.raw), w: where({ block: o.block, dept: o.dept, panchayat: o.panchayat, pblock: o.pblock, village: o.village, vblock: o.vblock }), x: near[0] ? App.esc(DM.displayId(near[0])) : "MND/0042" }) + "</p>";
      return { html: html0, list: near, extra: { h: App.t("Detail"), v: function (p) { return DM.isDelayed(p) ? A.delayInfo(p).txt : App.t("Pending at") + ": " + App.desig(p.pendingAt, p); } }, title: App.t("Closest works") };
    }
    var p = cand[0], s5 = p.sf[5] || {}, di = A.delayInfo(p), today = App.today(), st = DM.dstatus(p);
    var lu = DM.lastProgressDate(p), luAge = lu ? DM.util.diff(lu, today) : null;
    var ins = App.db.inspections.filter(function (i) { return i.pid === p.id && i.status === "action"; });
    var pay = (p.payments || []).filter(function (x) { return x.status === "pending"; })[0];
    var proj = null;
    if (s5.commencementDate && (p.physical || 0) > 0 && p.physical < 100) { var el = Math.max(1, DM.util.diff(s5.commencementDate, today)); proj = DM.util.addDays(today, (100 - p.physical) / (p.physical / el)); }
    var head = "<p><a href=\"#/project/" + p.id + "\"><strong>" + App.esc(App.pname(p)) + "</strong></a> (" + App.esc(DM.displayId(p)) + "), " + App.esc(App.villageName(p)) + ", " + App.esc(App.blockName(p.block)) + " " + App.esc(App.t("block")) + " - " + App.esc(App.L(DM.STATUS[st])) + ".</p>";
    var facts;
    if (st === "delayed") facts = App.tf("It is {x}. Scheduled completion was {pc}{proj}. Physical progress is {a}% against {e}% expected by now; the last progress update was {lu}.", { x: b(App.esc(di.overdue > 0 ? di.txt : App.tf("behind schedule: {e}% expected vs {a}% achieved", { e: di.expected, a: p.physical || 0 }))), pc: App.date(s5.plannedCompletion), proj: proj ? App.tf("; at the current pace it would finish around {d}", { d: App.date(proj) }) : "", a: p.physical || 0, e: di.expected, lu: lu ? App.tf("{d} ({n} days ago)", { d: App.date(lu), n: luAge }) : App.t("not recorded") });
    else if (s5.commencementDate) facts = App.tf("It is not flagged as delayed: physical progress is {a}% against {e}% expected, scheduled completion {pc}; the last progress update was {lu}.", { a: p.physical || 0, e: di.expected, pc: App.date(s5.plannedCompletion), lu: lu ? App.tf("{d} ({n} days ago)", { d: App.date(lu), n: luAge }) : App.t("not recorded") });
    else if (DM.status(p) === "completed") facts = App.tf("This work is completed: physical completion on {c}, handed over on {h}.", { c: App.date(p.sf[10].completionDate), h: App.date(p.sf[10].handoverDate) });
    else facts = App.tf("Work has not started. It is at stage {s}.", { s: App.esc(p.stage + ". " + App.stageName(p.stage)) });
    var reasons = [];
    ins.forEach(function (i) { reasons.push(App.tf("Open inspection deficiency from {d}: \"{t}\" - action assigned to {a}, due {due}{od}.", { d: App.date(i.date), t: App.tx(i.deficiency), a: App.desig(i.assignedTo, p), due: App.date(i.dueDate), od: i.dueDate && i.dueDate < today ? " (" + App.t("overdue") + ")" : "" })); });
    if (pay) reasons.push(App.tf("Payment requisition {l} for {a} pending since {d} ({n} days); contractor cash flow may be affected.", { l: pay.letter, a: App.money(pay.amount), d: App.date(pay.date), n: DM.util.diff(pay.date, today) }));
    if (luAge != null && luAge > App.db.sla.progress && DM.status(p) === "ongoing") reasons.push(App.tf("No physical progress update for {n} days (SLA {s} days).", { n: luAge, s: App.db.sla.progress }));
    if (p.pendingAt && p.pendingSince) { var pa = App.ago(p.pendingSince), slaP = p.stage <= 4 ? App.db.sla.aa : 15; if (pa > slaP) reasons.push(App.tf("The {st} file has been with {at} for {n} days.", { st: App.stageName(p.stage), at: App.desig(p.pendingAt, p), n: pa })); }
    if (DM.status(p) === "tender") reasons.push(App.t("Tender / agreement not yet finalised."));
    if (DM.status(p) === "notstarted") reasons.push(App.tf("Agreement signed on {d} but work has not commenced.", { d: App.date(s5.agreementDate) }));
    if (!reasons.length) reasons.push(st === "delayed" ? App.tf("No blocking item is recorded; slow site progress by the agency ({a}% achieved vs {e}% expected).", { a: p.physical || 0, e: di.expected }) : App.t("No blocking item is recorded against this work."));
    var resp = App.tf("Execution: {ee}{ag}. File currently with: {at}.", { ee: App.desig("ee", p), ag: s5.contractor ? "; " + App.t("agency") + ": " + App.contractorName(s5.contractor) : "", at: p.pendingAt ? App.tf("{x}, since {d} (stage {s})", { x: App.desig(p.pendingAt, p), d: App.date(p.pendingSince), s: p.stage + ". " + App.stageShort(p.stage) }) : App.t("no file pending") });
    var html = head + "<p>" + facts + "</p><p><strong>" + App.esc(App.t("Likely reasons, from the record")) + ":</strong></p><ul class=\"ai-ul\">" + reasons.map(function (r) { return "<li>" + App.esc(r) + "</li>"; }).join("") + "</ul><p><strong>" + App.esc(App.t("Responsibility as per portal records")) + ":</strong> " + App.esc(resp) + "</p>" +
      (cand.length > 1 ? '<p class="small muted">' + App.esc(App.t("Other matching works")) + ": " + cand.slice(1, 4).map(function (x) { return App.pidLink(x) + " " + App.esc(App.pname(x)); }).join("; ") + "</p>" : "");
    var kv = [[App.t("Status"), App.L(DM.STATUS[st])], [App.t("Scheduled completion"), App.date(s5.plannedCompletion)], [App.t("Projected completion at current pace"), proj ? App.date(proj) : "-"], [App.t("Physical progress"), (p.physical || 0) + "% / " + App.t("expected") + " " + di.expected + "%"],
      [App.t("Last update"), lu ? App.date(lu) : "-"], [App.t("Pending at"), p.pendingAt ? App.desig(p.pendingAt, p) + " (" + App.date(p.pendingSince) + ")" : "-"], [App.t("Open inspection actions"), String(ins.length)], [App.t("Payment pending"), pay ? App.money(pay.amount) : "-"]];
    return { html: html, table: { head: [App.t("Field"), App.t("Value")], rows: kv }, list: cand.slice(0, 4), extra: { h: App.t("Detail"), v: function (x) { return DM.isDelayed(x) ? A.delayInfo(x).txt : App.L(DM.STATUS[DM.dstatus(x)]); } }, title: App.t("Delay explanation") + " " + DM.displayId(p) };
  };
  App.addHi({
    "I could not find a current work matching \"{t}\"{w}. I can explain the delay, the pending officer and the open issues of any specific work from its record. The closest works with delays or pending files are listed below; ask, for example, \"Why is {x} delayed?\".": "{w} \"{t}\" से मेल खाता कोई वर्तमान कार्य नहीं मिला। मैं किसी भी विशिष्ट कार्य का विलंब, लंबित पदाधिकारी एवं खुले मुद्दे उसके अभिलेख से बता सकता हूँ। विलंब या लंबित फ़ाइल वाले निकटतम कार्य नीचे हैं; उदाहरण: \"{x} में विलंब क्यों है?\"।",
    "Closest works": "निकटतम कार्य", "behind schedule: {e}% expected vs {a}% achieved": "समय-सारणी से पीछे: {e}% अपेक्षित बनाम {a}% प्राप्त", "block": "प्रखंड",
    "It is {x}. Scheduled completion was {pc}{proj}. Physical progress is {a}% against {e}% expected by now; the last progress update was {lu}.": "यह {x} है। निर्धारित पूर्णता {pc} थी{proj}। भौतिक प्रगति {a}% है जबकि अब तक {e}% अपेक्षित थी; अंतिम प्रगति अद्यतन {lu} को हुआ।",
    "; at the current pace it would finish around {d}": "; वर्तमान गति से लगभग {d} तक पूर्ण होगा", "{d} ({n} days ago)": "{d} ({n} दिन पहले)", "not recorded": "दर्ज नहीं",
    "It is not flagged as delayed: physical progress is {a}% against {e}% expected, scheduled completion {pc}; the last progress update was {lu}.": "यह विलंबित चिह्नित नहीं है: भौतिक प्रगति {a}% है जबकि {e}% अपेक्षित, निर्धारित पूर्णता {pc}; अंतिम प्रगति अद्यतन {lu} को हुआ।",
    "Work has not started. It is at stage {s}.": "कार्य प्रारंभ नहीं हुआ है। यह चरण {s} पर है।", "This work is completed: physical completion on {c}, handed over on {h}.": "यह कार्य पूर्ण है: भौतिक पूर्णता {c}, हस्तांतरण {h}।",
    "Open inspection deficiency from {d}: \"{t}\" - action assigned to {a}, due {due}{od}.": "{d} के निरीक्षण की खुली कमी: \"{t}\" - कार्रवाई {a} को सौंपी गई, नियत तिथि {due}{od}।", "overdue": "अतिदेय",
    "Payment requisition {l} for {a} pending since {d} ({n} days); contractor cash flow may be affected.": "{a} की भुगतान अधियाचना {l} {d} से लंबित ({n} दिन); संवेदक का नकदी प्रवाह प्रभावित हो सकता है।",
    "No physical progress update for {n} days (SLA {s} days).": "{n} दिनों से भौतिक प्रगति अद्यतन नहीं (एसएलए {s} दिन)।",
    "The {st} file has been with {at} for {n} days.": "{st} फ़ाइल {n} दिनों से {at} के पास है।", "Tender / agreement not yet finalised.": "निविदा / एकरारनामा अभी अंतिम नहीं।",
    "Agreement signed on {d} but work has not commenced.": "{d} को एकरारनामा हुआ पर कार्य प्रारंभ नहीं हुआ।",
    "No blocking item is recorded; slow site progress by the agency ({a}% achieved vs {e}% expected).": "कोई अवरोध दर्ज नहीं; एजेंसी द्वारा स्थल पर धीमी प्रगति ({a}% प्राप्त बनाम {e}% अपेक्षित)।",
    "No blocking item is recorded against this work.": "इस कार्य पर कोई अवरोध दर्ज नहीं है।",
    "Execution: {ee}{ag}. File currently with: {at}.": "निष्पादन: {ee}{ag}। फ़ाइल वर्तमान में: {at}।", "agency": "एजेंसी", "{x}, since {d} (stage {s})": "{x}, {d} से (चरण {s})", "no file pending": "कोई फ़ाइल लंबित नहीं",
    "Likely reasons, from the record": "अभिलेख के अनुसार संभावित कारण", "Responsibility as per portal records": "पोर्टल अभिलेख के अनुसार उत्तरदायित्व", "Other matching works": "अन्य मिलते कार्य",
    "Projected completion at current pace": "वर्तमान गति से अनुमानित पूर्णता", "expected": "अपेक्षित", "Payment pending": "भुगतान लंबित", "Delay explanation": "विलंब विवरण", "Open inspection actions": "लंबित निरीक्षण कार्रवाई"
  });

  // Related questions built from the words the user used (for unmatched questions)
  A.suggestFor = function (o) {
    var s = [], q = o.q, bn = o.block ? App.blockName(o.block) : null, dn = o.dept ? App.deptShort(o.dept) : null;
    if (o.village || o.panchayat) { var nm = App.L(o.village || o.panchayat); s.push(App.tf(o.village ? "Show projects in {x} village" : "Show projects in {x} panchayat", { x: nm })); }
    if (bn) s.push(App.tf("Show delayed projects in {b} Block.", { b: bn }), App.tf("How many projects are in {b} block?", { b: bn }), App.tf("Approved amount and expenditure in {b} block", { b: bn }), App.tf("Which payments are pending in {b} block?", { b: bn }));
    if (dn) s.push(App.tf("Show delayed projects of {d}", { d: dn }), App.tf("Average progress of {d} works", { d: dn }), App.tf("Which payments are pending under {d}?", { d: dn }));
    if (has(q, ["money", "fund", "rupee", "cost", "budget", "पैसा", "राशि", "खर्च"])) s.push(App.t("Approved amount and expenditure by block"), App.t("Expenditure by department"), App.t("Year-wise sanctioned and released amount"));
    if (has(q, ["inspect", "visit", "quality", "निरीक्षण", "गुणवत्ता"])) s.push(App.t("Show open inspection actions."), App.t("Which inspections are overdue?"));
    if (has(q, ["contract", "firm", "agency", "संवेदक", "ठेकेदार"])) s.push(App.t("Which contractor has the most delayed works?"), App.t("Which contractor holds the most works?"));
    if (has(q, ["photo", "progress", "update", "प्रगति", "फोटो"])) s.push(App.t("Show projects where physical progress is below 30%."), App.t("Which works have no progress update for 30 days?"));
    if (has(q, ["approv", "file", "sanction", "स्वीकृति", "फ़ाइल"])) s.push(App.t("Which projects are pending for administrative approval?"), App.t("Which projects are awaiting technical approval?"));
    A.EXAMPLES.slice(0, 6).forEach(function (e) { s.push(App.t(e)); });
    var seen = {}; return s.filter(function (x) { if (seen[x]) return false; seen[x] = 1; return true; }).slice(0, 5);
  };
  App.addHi({ "Show projects in {x} village": "ग्राम {x} की परियोजनाएँ दिखाएँ", "Show projects in {x} panchayat": "{x} पंचायत की परियोजनाएँ दिखाएँ",
    "Show delayed projects in {b} Block.": "{b} प्रखंड की विलंबित परियोजनाएँ दिखाएँ।", "How many projects are in {b} block?": "{b} प्रखंड में कुल कितनी परियोजनाएँ हैं?",
    "Approved amount and expenditure in {b} block": "{b} प्रखंड में स्वीकृत राशि एवं व्यय", "Which payments are pending in {b} block?": "{b} प्रखंड में कौन से भुगतान लंबित हैं?",
    "Show delayed projects of {d}": "{d} की विलंबित परियोजनाएँ दिखाएँ", "Average progress of {d} works": "{d} कार्यों की औसत प्रगति", "Which payments are pending under {d}?": "{d} के अंतर्गत कौन से भुगतान लंबित हैं?",
    "Expenditure by department": "विभागवार व्यय", "Year-wise sanctioned and released amount": "वर्षवार स्वीकृत एवं जारी राशि", "Which inspections are overdue?": "कौन से निरीक्षण अतिदेय हैं?",
    "Which contractor holds the most works?": "किस संवेदक के पास सर्वाधिक कार्य हैं?", "Which works have no progress update for 30 days?": "किन कार्यों का 30 दिनों से प्रगति अद्यतन नहीं हुआ?",
    "Which projects are awaiting technical approval?": "कौन सी परियोजनाएँ तकनीकी स्वीकृति हेतु लंबित हैं?",
    "I could not match this question exactly. Related questions you can ask:": "मैं इस प्रश्न का सटीक मिलान नहीं कर सका। आप ये संबंधित प्रश्न पूछ सकते हैं:" });
  function suggestHtml(o) { return '<div class="suggest" style="margin-top:6px">' + A.suggestFor(o).map(function (e) { return '<button type="button" data-ask="' + App.esc(e) + '">' + App.esc(e) + "</button>"; }).join("") + "</div>"; }
  I.help = function (o) {
    return { html: "<p>" + App.esc(App.t("I could not match this question exactly. Related questions you can ask:")) + "</p>" + suggestHtml(o), list: null, title: "", noExport: true };
  };

  // ---------------- Monthly report and review brief ----------------
  var MONTHS = { en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"] };
  function monthName() { var d = new Date(); return MONTHS[App.lang === "hi" ? "hi" : "en"][d.getMonth()] + " " + d.getFullYear(); }
  function groupRows(list, keyArr, keyFn, labelFn) {
    return keyArr.map(function (k) {
      var l = list.filter(function (p) { return keyFn(p) === k; }), kk = DM.kpis(l, App.db);
      return [labelFn(k), kk.total, kk.ongoing, kk.delayed, kk.completed, kk.pending, kk.approvedAmount, kk.expenditure];
    }).filter(function (r) { return r[1] > 0; });
  }
  var GH = function () { return [App.t("Name"), App.t("Total"), App.t("Ongoing"), App.t("Delayed"), App.t("Completed"), App.t("Pending approval"), App.t("Approved amount"), App.t("Expenditure")]; };
  App.addHi({ "Name": "नाम" });
  function htmlTable(head, rows, money, foot) {
    money = money || [];
    return '<div class="table-wrap"><table class="data"><thead><tr>' + head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : "") + ">" + App.esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return "<td" + (i ? ' class="num"' : "") + ">" + (money.indexOf(i) >= 0 ? App.money(c) : App.esc(c)) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody>" +
      (foot ? "<tfoot><tr>" + foot.map(function (c, i) { return "<td" + (i ? ' class="num"' : "") + ">" + (money.indexOf(i) >= 0 ? App.money(c) : App.esc(c)) + "</td>"; }).join("") + "</tr></tfoot>" : "") + "</table></div>";
  }
  function totalsOf(rows) { var f = [App.t("Total")]; for (var i = 1; i < rows[0].length; i++) f.push(sum(rows, function (r) { return r[i]; })); return f; }

  I.monthly = function (o) {
    var list = scopeList(o), k = DM.kpis(list, App.db), today = App.today(), mon = today.slice(0, 7), ids = {}; list.forEach(function (p) { ids[p.id] = 1; });
    var pend = DM.pendency(App.db).filter(function (x) { return ids[x.pid]; });
    var progThis = 0, aaThis = 0, compThis = 0, relThis = 0, relAmt = 0;
    list.forEach(function (p) {
      (p.progress || []).forEach(function (h) { if (h.date.slice(0, 7) === mon) progThis++; });
      if (p.sf[4] && p.sf[4].aaDate && p.sf[4].aaDate.slice(0, 7) === mon) aaThis++;
      if (p.sf[10] && p.sf[10].completionDate && p.sf[10].completionDate.slice(0, 7) === mon) compThis++;
      (p.payments || []).forEach(function (x) { if (x.releasedOn && x.releasedOn.slice(0, 7) === mon) { relThis++; relAmt += x.released; } });
    });
    var bRows = groupRows(list, DM.BLOCKS.map(function (x) { return x.code; }), function (p) { return p.block; }, App.blockName);
    var dRows = groupRows(list, DM.DEPTS.map(function (x) { return x.code; }), function (p) { return p.dept; }, App.deptName);
    var delayed = list.filter(function (p) { return DM.isDelayed(p); }).sort(function (a, c) { return A.delayInfo(c).sev - A.delayInfo(a).sev; });
    var catRows = DM.PEND_CATS.map(function (c) { var it = pend.filter(function (x) { return x.cat === c.k; }); return [App.L(c), it.length, it.filter(function (x) { return x.over; }).length, it.length ? Math.max.apply(null, it.map(function (x) { return x.age; })) : 0]; }).filter(function (r) { return r[1]; });
    var payPend = pend.filter(function (x) { return x.cat === "payment"; }), payAmt = sum(payPend, function (x) { var p = DM.byId(App.db, x.pid); var y = p.payments.filter(function (z) { return z.no === x.extra; })[0]; return y ? y.amount : 0; });
    var insAll = App.db.inspections.filter(function (i) { return ids[i.pid]; }), insThis = insAll.filter(function (i) { return i.status !== "scheduled" && i.date.slice(0, 7) === mon; }).length;
    var insSched = insAll.filter(function (i) { return i.status === "scheduled"; }).length, insOpen = insAll.filter(function (i) { return i.status === "action"; }).length;
    var aaOver = pend.filter(function (x) { return x.cat === "aa" && x.over; }).length, payOver = payPend.filter(function (x) { return x.over; }).length;
    var insOver = pend.filter(function (x) { return x.cat === "inspection"; }).length, hoP = pend.filter(function (x) { return x.cat === "handover"; }).length;
    var topDept = sortedCounts(countBy(delayed, function (p) { return p.dept; }))[0];
    var acts = [];
    if (aaOver) acts.push(App.tf("Deputy Development Commissioner to dispose of {n} administrative approval files pending beyond the SLA.", { n: aaOver }));
    if (topDept) acts.push(App.tf("{d} to submit a catch-up plan for its {n} delayed works within 7 days.", { d: App.deptName(topDept[0]), n: topDept[1] }));
    if (payPend.length) acts.push(App.tf("Accounts Officer, DMFT to clear {n} pending payment requisitions ({a}); {o} are beyond the SLA.", { n: payPend.length, a: App.money(payAmt), o: payOver }));
    if (insOver || insOpen) acts.push(App.tf("District Inspection Team to complete {n} overdue inspections and close {m} open inspection actions.", { n: insOver, m: insOpen }));
    if (hoP) acts.push(App.tf("Execution departments to complete handover of {n} physically completed works.", { n: hoP }));
    var util = k.approvedAmount ? Math.round(k.expenditure / k.approvedAmount * 100) : 0;
    var title = App.t("Monthly DMFT Project Status Report") + " - " + monthName();
    var doc = '<article class="report-doc ai-doc"><div class="doc-flag">' + App.esc(App.t("Draft for officer approval")) + "</div><h1>" + App.esc(title) + '</h1><p class="muted small">' + App.esc(App.t("District Mineral Foundation Trust, Ramgarh")) + " | " + App.esc(App.t("As on")) + " " + App.date(today) + " | " + App.esc(App.t("Scope")) + ": " + App.esc(App.scopeLabel()) + " | " + App.esc(App.t("Sample data")) + "</p>" +
      "<h2>" + App.esc(App.t("1. Summary")) + '</h2><div class="doc-kpis">' + [[App.t("Total projects"), App.n(k.total)], [App.t("Approved"), App.n(k.approved)], [App.t("Ongoing"), App.n(k.ongoing)], [App.t("Delayed"), App.n(k.delayed)], [App.t("Completed"), App.n(k.completed)], [App.t("Pending approval"), App.n(k.pending)], [App.t("Approved amount"), App.money(k.approvedAmount)], [App.t("Expenditure"), App.money(k.expenditure) + " (" + util + "%)"]].map(function (x) { return "<div><span>" + App.esc(x[0]) + "</span><strong>" + App.esc(x[1]) + "</strong></div>"; }).join("") + "</div>" +
      "<h3>" + App.esc(App.t("Highlights this month")) + "</h3><ul>" +
      "<li>" + App.tf("{n} physical progress updates with geo-tagged photographs were received.", { n: progThis }) + "</li>" +
      "<li>" + App.tf("{n} works received administrative approval; {c} works were physically completed.", { n: aaThis, c: compThis }) + "</li>" +
      "<li>" + App.tf("{n} payments totalling {a} were released.", { n: relThis, a: App.money(relAmt) }) + "</li>" +
      "<li>" + App.tf("{n} inspections were conducted; {s} are scheduled and {o} inspection actions are open.", { n: insThis, s: insSched, o: insOpen }) + "</li></ul>" +
      "<h2>" + App.esc(App.t("2. Block-wise position")) + "</h2>" + htmlTable(GH().map(function (h, i) { return i ? h : App.t("Block"); }), bRows, [6, 7], totalsOf(bRows)) +
      "<h2>" + App.esc(App.t("3. Department-wise position")) + "</h2>" + htmlTable(GH().map(function (h, i) { return i ? h : App.t("Department"); }), dRows, [6, 7], totalsOf(dRows)) +
      "<h2>" + App.esc(App.t("4. Delayed projects")) + "</h2>" + (delayed.length ? '<div class="table-wrap"><table class="data"><thead><tr><th>' + App.esc(App.t("Project ID")) + "</th><th>" + App.esc(App.t("Project name")) + "</th><th>" + App.esc(App.t("Department")) + '</th><th class="num">' + App.esc(App.t("Physical")) + "</th><th>" + App.esc(App.t("Detail")) + "</th></tr></thead><tbody>" + delayed.slice(0, 10).map(function (p) { return "<tr><td>" + App.pidLink(p) + "</td><td>" + App.esc(App.pname(p)) + "</td><td>" + App.esc(App.deptShort(p.dept)) + '</td><td class="num">' + (p.physical || 0) + "%</td><td>" + App.esc(A.delayInfo(p).txt) + "</td></tr>"; }).join("") + "</tbody></table></div>" + (delayed.length > 10 ? '<p class="small muted">' + App.tf("{n} more in the Excel export.", { n: delayed.length - 10 }) + "</p>" : "") : "<p>" + App.t("None") + "</p>") +
      "<h2>" + App.esc(App.t("5. Pending approvals and files")) + "</h2>" + htmlTable([App.t("Category"), App.t("Pending"), App.t("Beyond SLA"), App.t("Oldest (days)")], catRows) +
      "<h2>" + App.esc(App.t("6. Payments")) + "</h2><p>" + App.tf("{n} payment requisitions are pending ({a}); {o} are beyond the 15-day SLA. Cumulative expenditure is {e} against approved works of {v}.", { n: payPend.length, a: App.money(payAmt), o: payOver, e: App.money(k.expenditure), v: App.money(k.approvedAmount) }) + "</p>" +
      "<h2>" + App.esc(App.t("7. Inspections")) + "</h2><p>" + App.tf("{t} inspections on record; {n} conducted this month, {s} scheduled, {o} with open actions.", { t: insAll.length, n: insThis, s: insSched, o: insOpen }) + "</p>" +
      "<h2>" + App.esc(App.t("8. Action points")) + "</h2><ol>" + acts.map(function (a) { return "<li>" + App.esc(a) + "</li>"; }).join("") + "</ol>" +
      '<p class="small muted doc-foot">' + App.esc(App.t("Prepared by Ask DMFT AI from portal data. To be reviewed and approved by the District Planning Officer before circulation.")) + "</p></article>";
    var html = "<p>" + App.tf("Here is the draft monthly status report for {m}: {t} projects, {o} under execution ({d} delayed), {c} completed, utilisation {u}%. Review and edit before approval.", { m: monthName(), t: b(k.total), o: k.ongoing, d: k.delayed, c: k.completed, u: util }) + "</p>";
    var sheets = [
      { name: "Summary", rows: [[App.t("Indicator"), App.t("Value")], [App.t("Total projects"), k.total], [App.t("Approved"), k.approved], [App.t("Ongoing"), k.ongoing], [App.t("Delayed"), k.delayed], [App.t("Completed"), k.completed], [App.t("Pending approval"), k.pending], [App.t("Approved amount") + " (Rs)", k.approvedAmount], [App.t("Expenditure") + " (Rs)", k.expenditure]].concat(acts.map(function (a, i) { return [App.t("Action point") + " " + (i + 1), a]; })) },
      { name: "Block-wise", rows: [GH()].concat(bRows) }, { name: "Department-wise", rows: [GH()].concat(dRows) },
      { name: "Delayed", rows: [[App.t("Project ID"), App.t("Project name"), App.t("Block"), App.t("Department"), App.t("Physical") + " %", App.t("Detail")]].concat(delayed.map(function (p) { return [DM.displayId(p), App.pname(p), App.blockName(p.block), App.deptName(p.dept), p.physical || 0, A.delayInfo(p).txt]; })) },
      { name: "Pendency", rows: [[App.t("Category"), App.t("Pending"), App.t("Beyond SLA"), App.t("Oldest (days)")]].concat(catRows) }];
    return { html: html, doc: doc, list: null, sheets: sheets, title: title };
  };
  App.addHi({ "{n} physical progress updates with geo-tagged photographs were received.": "जियो-टैग फोटो सहित {n} भौतिक प्रगति अद्यतन प्राप्त हुए।",
    "{n} works received administrative approval; {c} works were physically completed.": "{n} कार्यों को प्रशासनिक स्वीकृति मिली; {c} कार्य भौतिक रूप से पूर्ण हुए।",
    "{n} payments totalling {a} were released.": "कुल {a} के {n} भुगतान जारी किए गए।",
    "{n} inspections were conducted; {s} are scheduled and {o} inspection actions are open.": "{n} निरीक्षण किए गए; {s} निर्धारित हैं एवं {o} निरीक्षण कार्रवाइयाँ लंबित हैं।",
    "{n} more in the Excel export.": "{n} और एक्सेल निर्यात में।",
    "{n} payment requisitions are pending ({a}); {o} are beyond the 15-day SLA. Cumulative expenditure is {e} against approved works of {v}.": "{n} भुगतान अधियाचनाएँ लंबित हैं ({a}); {o} 15-दिवसीय एसएलए से अधिक हैं। कुल व्यय {e} है जबकि स्वीकृत कार्य {v} के हैं।",
    "{t} inspections on record; {n} conducted this month, {s} scheduled, {o} with open actions.": "कुल {t} निरीक्षण दर्ज; इस माह {n} किए गए, {s} निर्धारित, {o} पर कार्रवाई लंबित।",
    "Deputy Development Commissioner to dispose of {n} administrative approval files pending beyond the SLA.": "उप विकास आयुक्त एसएलए से अधिक लंबित {n} प्रशासनिक स्वीकृति फ़ाइलों का निष्पादन करें।",
    "{d} to submit a catch-up plan for its {n} delayed works within 7 days.": "{d} अपने {n} विलंबित कार्यों हेतु 7 दिनों में कार्य योजना प्रस्तुत करे।",
    "Accounts Officer, DMFT to clear {n} pending payment requisitions ({a}); {o} are beyond the SLA.": "लेखा पदाधिकारी, डीएमएफटी {n} लंबित भुगतान अधियाचनाओं ({a}) का निष्पादन करें; {o} एसएलए से अधिक हैं।",
    "District Inspection Team to complete {n} overdue inspections and close {m} open inspection actions.": "जिला निरीक्षण दल {n} अतिदेय निरीक्षण पूर्ण करे एवं {m} लंबित निरीक्षण कार्रवाइयाँ बंद करे।",
    "Execution departments to complete handover of {n} physically completed works.": "निष्पादन विभाग भौतिक रूप से पूर्ण {n} कार्यों का हस्तांतरण पूर्ण करें।",
    "Here is the draft monthly status report for {m}: {t} projects, {o} under execution ({d} delayed), {c} completed, utilisation {u}%. Review and edit before approval.": "{m} की मासिक स्थिति रिपोर्ट का प्रारूप: {t} परियोजनाएँ, {o} निष्पादनाधीन ({d} विलंबित), {c} पूर्ण, उपयोग {u}%। अनुमोदन से पूर्व समीक्षा एवं संपादन करें।",
    "Indicator": "संकेतक", "Action point": "कार्रवाई बिंदु" });

  I.brief = function (o) {
    var list = scopeList(o), k = DM.kpis(list, App.db), ids = {}; list.forEach(function (p) { ids[p.id] = 1; });
    var pend = DM.pendency(App.db).filter(function (x) { return ids[x.pid]; });
    var deptPts = DM.DEPTS.map(function (d) {
      var l = list.filter(function (p) { return p.dept === d.code; }), del = l.filter(function (p) { return DM.isDelayed(p); }), pp = pend.filter(function (x) { return DM.byId(App.db, x.pid).dept === d.code && x.over; });
      var ins = App.db.inspections.filter(function (i) { return i.status === "action" && ids[i.pid] && DM.byId(App.db, i.pid).dept === d.code; }).length;
      return { d: d.code, n: l.length, del: del.length, over: pp.length, ins: ins, worst: del.sort(function (a, c) { return A.delayInfo(c).sev - A.delayInfo(a).sev; })[0] };
    }).filter(function (x) { return x.del || x.over || x.ins; }).sort(function (a, c) { return (c.del * 2 + c.over + c.ins) - (a.del * 2 + a.over + a.ins); });
    var blk = DM.BLOCKS.map(function (bb) { var l = list.filter(function (p) { return p.block === bb.code; }); return { b: bb.code, del: l.filter(function (p) { return DM.isDelayed(p); }).length, over: pend.filter(function (x) { return x.over && DM.byId(App.db, x.pid).block === bb.code; }).length }; })
      .sort(function (a, c) { return (c.del + c.over) - (a.del + a.over); }).slice(0, 3);
    var aaP = pend.filter(function (x) { return x.cat === "aa"; }).map(function (x) { return DM.byId(App.db, x.pid); }).sort(function (a, c) { return DM.amount(c) - DM.amount(a); }).slice(0, 5);
    var title = App.t("Review Meeting Brief - DMFT Works") + " - " + App.date(App.today());
    var doc = '<article class="report-doc ai-doc"><div class="doc-flag">' + App.esc(App.t("Draft for officer approval")) + "</div><h1>" + App.esc(title) + '</h1><p class="muted small">' + App.esc(App.t("District Mineral Foundation Trust, Ramgarh")) + " | " + App.esc(App.t("Scope")) + ": " + App.esc(App.scopeLabel()) + " | " + App.esc(App.t("Sample data")) + "</p>" +
      "<h2>1. " + App.esc(App.t("Overall position")) + "</h2><p>" + App.tf("{t} projects ({v} approved). {o} under execution, of which {d} are delayed; {c} completed; {h} awaiting handover; {p} pending approval. Expenditure {e}.", { t: k.total, v: App.money(k.approvedAmount), o: k.ongoing, d: k.delayed, c: k.completed, h: k.awaitHandover, p: k.pending, e: App.money(k.expenditure) }) + "</p>" +
      "<h2>2. " + App.esc(App.t("Department-wise review points")) + "</h2><ul>" + deptPts.map(function (x) { return "<li><strong>" + App.esc(App.deptName(x.d)) + ":</strong> " + App.tf("{d} delayed, {o} items beyond SLA, {i} open inspection actions.", { d: x.del, o: x.over, i: x.ins }) + (x.worst ? " " + App.tf("Discuss {p} ({x}).", { p: App.esc(App.pname(x.worst)) + " - " + App.esc(DM.displayId(x.worst)), x: App.esc(A.delayInfo(x.worst).txt) }) : "") + "</li>"; }).join("") + "</ul>" +
      "<h2>3. " + App.esc(App.t("Block-wise hotspots")) + "</h2><ul>" + blk.map(function (x) { return "<li>" + App.tf("{b} block: {d} delayed works and {o} files beyond SLA.", { b: App.esc(App.blockName(x.b)), d: x.del, o: x.over }) + "</li>"; }).join("") + "</ul>" +
      "<h2>4. " + App.esc(App.t("Decisions required")) + "</h2><ul>" + (aaP.length ? aaP.map(function (p) { return "<li>" + App.tf("Administrative approval: {p}, {a}, pending {d} days.", { p: App.esc(App.pname(p)) + " (" + App.esc(DM.displayId(p)) + ")", a: App.money(DM.amount(p)), d: App.ago(p.pendingSince) }) + "</li>"; }).join("") : "<li>" + App.t("None") + "</li>") + "</ul>" +
      "<h2>5. " + App.esc(App.t("Follow-up and responsibility")) + "</h2><ol><li>" + App.t("Execution departments to update physical progress with geo-tagged photographs before the next review.") + "</li><li>" + App.t("DMFT Cell to circulate the minutes and track action taken in the portal.") + "</li></ol>" +
      '<p class="small muted doc-foot">' + App.esc(App.t("Prepared by Ask DMFT AI from portal data. To be reviewed and approved by the District Planning Officer before circulation.")) + "</p></article>";
    var html = "<p>" + App.tf("Draft review meeting brief prepared with {n} department review points, the top block hotspots and {a} administrative approval decisions.", { n: deptPts.length, a: aaP.length }) + "</p>";
    var sheets = [{ name: "Department points", rows: [[App.t("Department"), App.t("Delayed"), App.t("Beyond SLA"), App.t("Open inspection actions")]].concat(deptPts.map(function (x) { return [App.deptName(x.d), x.del, x.over, x.ins]; })) },
      { name: "AA decisions", rows: [[App.t("Project ID"), App.t("Project name"), App.t("Approved amount") + " (Rs)", App.t("Days")]].concat(aaP.map(function (p) { return [DM.displayId(p), App.pname(p), DM.amount(p), App.ago(p.pendingSince)]; })) }];
    return { html: html, doc: doc, list: null, sheets: sheets, title: title };
  };
  App.addHi({ "{t} projects ({v} approved). {o} under execution, of which {d} are delayed; {c} completed; {h} awaiting handover; {p} pending approval. Expenditure {e}.": "{t} परियोजनाएँ ({v} स्वीकृत)। {o} निष्पादनाधीन, जिनमें {d} विलंबित; {c} पूर्ण; {h} हस्तांतरण हेतु लंबित; {p} स्वीकृति हेतु लंबित। व्यय {e}।",
    "{d} delayed, {o} items beyond SLA, {i} open inspection actions.": "{d} विलंबित, {o} मामले एसएलए से अधिक, {i} निरीक्षण कार्रवाइयाँ लंबित।", "Discuss {p} ({x}).": "{p} पर चर्चा ({x})।",
    "{b} block: {d} delayed works and {o} files beyond SLA.": "{b} प्रखंड: {d} विलंबित कार्य एवं {o} फ़ाइलें एसएलए से अधिक।",
    "Administrative approval: {p}, {a}, pending {d} days.": "प्रशासनिक स्वीकृति: {p}, {a}, {d} दिनों से लंबित।",
    "Execution departments to update physical progress with geo-tagged photographs before the next review.": "निष्पादन विभाग अगली समीक्षा से पूर्व जियो-टैग फोटो सहित भौतिक प्रगति अद्यतन करें।",
    "DMFT Cell to circulate the minutes and track action taken in the portal.": "डीएमएफटी सेल कार्यवृत्त परिचालित करे एवं पोर्टल में की गई कार्रवाई का अनुश्रवण करे।",
    "Draft review meeting brief prepared with {n} department review points, the top block hotspots and {a} administrative approval decisions.": "समीक्षा बैठक नोट का प्रारूप तैयार: {n} विभागीय समीक्षा बिंदु, प्रमुख प्रखंड एवं {a} प्रशासनिक स्वीकृति निर्णय।",
    "Open inspection actions": "लंबित निरीक्षण कार्रवाई" });

  // ---------------- Dispatcher ----------------
  A.answer = function (q, ctx) {
    var o = A.parse(q, ctx || {}), intent = A.classify(o), r;
    if (intent.indexOf("pending:") === 0) r = I.pending(o, intent.slice(8));
    else r = (I[intent] || I.help)(o);
    r.intent = intent; r.parsed = o;
    r.count = r.list ? r.list.length : (r.table ? r.table.rows.length : 0);
    return r;
  };

  A.EXAMPLES = ["How many projects are currently under execution?", "Show delayed projects in Mandu Block.", "Which projects are pending for administrative approval?",
    "Which department has the highest number of delayed projects?", "Show projects where physical progress is below 30%.", "Generate the monthly DMFT project status report.", "Summarize the status of this project."];
  A.MORE = ["Prepare a review meeting brief.", "Which payment requisitions are pending?", "Show open inspection actions.", "Compare physical vs financial progress.",
    "Approved amount and expenditure by block", "Which contractor has the most delayed works?", "Show completed projects in FY 2024-25"];
  App.addHi({ "How many projects are currently under execution?": "वर्तमान में कितनी परियोजनाएँ निष्पादनाधीन हैं?", "Show delayed projects in Mandu Block.": "मांडू प्रखंड की विलंबित परियोजनाएँ दिखाएँ।",
    "Which projects are pending for administrative approval?": "कौन सी परियोजनाएँ प्रशासनिक स्वीकृति हेतु लंबित हैं?", "Which department has the highest number of delayed projects?": "किस विभाग में सबसे अधिक विलंबित परियोजनाएँ हैं?",
    "Show projects where physical progress is below 30%.": "30% से कम भौतिक प्रगति वाली परियोजनाएँ दिखाएँ।", "Generate the monthly DMFT project status report.": "मासिक डीएमएफटी परियोजना स्थिति रिपोर्ट तैयार करें।",
    "Summarize the status of this project.": "इस परियोजना की स्थिति का सारांश दें।", "Prepare a review meeting brief.": "समीक्षा बैठक नोट तैयार करें।",
    "Which payment requisitions are pending?": "कौन सी भुगतान अधियाचनाएँ लंबित हैं?", "Show open inspection actions.": "लंबित निरीक्षण कार्रवाई दिखाएँ।",
    "Compare physical vs financial progress.": "भौतिक बनाम वित्तीय प्रगति की तुलना करें।", "Approved amount and expenditure by block": "प्रखंडवार स्वीकृत राशि एवं व्यय",
    "Which contractor has the most delayed works?": "किस संवेदक के सर्वाधिक कार्य विलंबित हैं?", "Show completed projects in FY 2024-25": "वित्तीय वर्ष 2024-25 में पूर्ण परियोजनाएँ दिखाएँ" });

  // ---------------- Rendering ----------------
  var LIMIT = 8;
  function cellHtml(c) { if (c && typeof c === "object" && c.link) return '<a class="pid" href="#/project/' + c.link + '">' + App.esc(c.t) + "</a>"; return App.esc(c); }
  function cellPlain(c) { return c && typeof c === "object" && c.link ? c.t : c; }
  function renderAnswer(r, idx) {
    var h = '<div class="ai-ans">' + r.html;
    if (r.doc) h += r.doc;
    if (r.note) h += '<p class="ai-note small muted">' + App.icon("info", "sm") + " " + App.esc(r.note) + "</p>";
    if (r.table) {
      var money = r.table.money || [];
      h += '<div class="table-wrap"><table class="data compact"><thead><tr>' + r.table.head.map(function (x, i) { return '<th scope="col"' + (r.table.num && r.table.num[i] ? ' class="num"' : "") + ">" + App.esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        r.table.rows.map(function (row) { return "<tr>" + row.map(function (c, i) { return "<td" + (r.table.num && r.table.num[i] ? ' class="num"' : "") + ">" + (money.indexOf(i) >= 0 ? App.money(c) : cellHtml(c)) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody>" +
        (r.table.foot ? "<tfoot><tr>" + r.table.foot.map(function (c, i) { return "<td" + (r.table.num && r.table.num[i] ? ' class="num"' : "") + ">" + (money.indexOf(i) >= 0 ? App.money(c) : App.esc(c)) + "</td>"; }).join("") + "</tr></tfoot>" : "") + "</table></div>";
    }
    if (r.list && r.list.length && !(r.intent === "summary")) {
      var ex = r.extra;
      h += '<p class="ai-src">' + App.icon("table", "sm") + " " + App.esc(App.t("Source projects")) + " (" + r.list.length + ")</p>";
      h += '<div class="table-wrap"><table class="data compact ai-src-t"><thead><tr><th scope="col">' + App.esc(App.t("Project ID")) + '</th><th scope="col">' + App.esc(App.t("Project name")) + '</th><th scope="col">' + App.esc(App.t("Block")) + '</th><th scope="col">' + App.esc(App.t("Department")) + '</th><th scope="col">' + App.esc(App.t("Status")) + '</th><th scope="col" class="num">' + App.esc(App.t("Physical")) + "</th>" + (ex ? '<th scope="col">' + App.esc(ex.h) + "</th>" : "") + "</tr></thead><tbody>" +
        r.list.map(function (p, i) { return "<tr" + (i >= LIMIT ? ' class="ai-more" hidden' : "") + "><td>" + App.pidLink(p) + "</td><td>" + App.esc(App.pname(p)) + "</td><td>" + App.esc(App.blockName(p.block)) + "</td><td>" + App.esc(App.deptShort(p.dept)) + "</td><td>" + App.pStatusChip(p) + '</td><td class="num">' + (p.physical || 0) + "%</td>" + (ex ? "<td>" + (ex.html ? ex.html(p) : App.esc(ex.v(p))) + "</td>" : "") + "</tr>"; }).join("") + "</tbody></table></div>";
      if (r.list.length > LIMIT) h += '<button type="button" class="btn ghost sm" data-more="' + idx + '">' + App.esc(App.tf("Show all {n}", { n: r.list.length })) + "</button>";
    }
    if (!r.noExport) {
      h += '<div class="ai-actions"><button type="button" class="btn secondary sm" data-export="' + idx + '">' + App.icon("download", "sm") + App.esc(App.t("Export Excel")) + "</button>" + (r.doc ? '<button type="button" class="btn secondary sm" data-printdoc="' + idx + '">' + App.icon("print", "sm") + App.esc(App.t("Print / PDF")) + "</button>" : "") + "</div>";
      h += '<div class="ai-meta">' + App.icon("shield", "sm") + "<span>" + App.esc(App.tf("Generated from the portal's data, scoped to your role and jurisdiction ({s}). Question and answer are audit-logged.", { s: App.scopeLabel() })) + "</span></div>";
    }
    return h + "</div>";
  }
  A.exportSheets = function (r, q) {
    if (r.sheets) return r.sheets;
    var sheets = [];
    if (r.table) sheets.push({ name: "Answer", rows: [r.table.head].concat(r.table.rows.map(function (row) { return row.map(cellPlain); })).concat(r.table.foot ? [r.table.foot] : []) });
    if (r.list && r.list.length) {
      var ex = r.extra;
      sheets.push({ name: "Source projects", rows: [[App.t("Project ID"), App.t("Project name"), App.t("Block"), App.t("Panchayat"), App.t("Village"), App.t("Department"), App.t("Status"), App.t("Stage"), App.t("Approved amount") + " (Rs)", App.t("Physical progress") + " %", App.t("Financial progress") + " %"].concat(ex ? [ex.h] : [])]
        .concat(r.list.map(function (p) { return [DM.displayId(p), App.pname(p), App.blockName(p.block), App.panchayatName(p), App.villageName(p), App.deptName(p.dept), App.L(DM.STATUS[DM.dstatus(p)]), p.stage + ". " + App.stageName(p.stage), DM.amount(p), p.physical || 0, DM.finPct(p)].concat(ex ? [ex.v(p)] : []); })) });
    }
    if (!sheets.length) sheets.push({ name: "Answer", rows: [[App.t("Question")], [q]] });
    return sheets;
  };
  App.addHi({ "Question": "प्रश्न" });

  // Print a generated document only (not the whole page)
  A.printDoc = function (html) {
    var pa = document.getElementById("printArea"); if (!pa) { pa = document.createElement("div"); pa.id = "printArea"; document.body.appendChild(pa); }
    pa.innerHTML = html; document.body.classList.add("print-doc");
    var done = function () { document.body.classList.remove("print-doc"); window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done);
    window.print();
    setTimeout(done, 1500);
  };

  // Conversation kept for the browser session (re-answered on language switch)
  A.history = A.history || [];
  App.view("ai", {
    perm: "ai",
    title: function () { return App.t("Ask DMFT AI"); },
    render: function (main, route) {
      var ctxPid = route.query.pid && DM.byId(App.db, route.query.pid) ? route.query.pid : null;
      var q0 = route.query.q;
      if (q0) { var last = A.history[A.history.length - 1]; if (!last || last.q !== q0 || last.pid !== ctxPid) ask(q0, ctxPid, true); }
      var cp = ctxPid ? DM.byId(App.db, ctxPid) : null;
      main.innerHTML = App.pageHead(App.t("Ask DMFT AI"), App.esc(App.t("Ask questions in English or Hindi. Answers are computed from the portal's project data (sample data in this prototype), scoped to your role.")), "", [[App.t("Dashboard"), "#/dashboard"], [App.t("Ask DMFT AI"), ""]]) +
        '<div class="ai-grid"><section class="chat ai-chat" aria-label="' + App.esc(App.t("Ask DMFT AI")) + '">' +
        (cp ? '<div class="ai-ctx">' + App.icon("folder", "sm") + " " + App.esc(App.t("Project context")) + ': <a href="#/project/' + cp.id + '">' + App.esc(App.pname(cp)) + "</a> (" + App.esc(DM.displayId(cp)) + ")</div>" : "") +
        '<div class="chat-log" id="aiLog" role="log" aria-live="polite" tabindex="0"></div>' +
        '<form class="chat-input" id="aiForm"><label class="sr-only" for="aiQ">' + App.esc(App.t("Type your question")) + '</label><input class="input" id="aiQ" autocomplete="off" placeholder="' + App.esc(App.t("Type your question")) + '"><button class="btn" type="submit">' + App.icon("send", "sm") + App.esc(App.t("Ask")) + "</button></form></section>" +
        '<aside class="ai-side"><p class="ai-proto">' + App.esc(App.t("In this prototype, answers are computed by rule-based intent matching over the sample data. In the production portal, a language model hosted in an Indian region converts the question into a query over approved reporting views, scoped to your role; every answer shows its source records.")) + '</p><div class="card"><h2 class="h-sm">' + App.icon("sparkle") + " " + App.esc(App.t("Try these questions")) + '</h2><div class="suggest col">' + A.EXAMPLES.map(function (e) { return '<button type="button" data-ask="' + App.esc(App.t(e)) + '">' + App.esc(App.t(e)) + "</button>"; }).join("") + "</div>" +
        '<h3 class="h-xs">' + App.esc(App.t("More examples")) + '</h3><div class="suggest col">' + A.MORE.map(function (e) { return '<button type="button" data-ask="' + App.esc(App.t(e)) + '">' + App.esc(App.t(e)) + "</button>"; }).join("") + "</div></div>" +
        '<div class="card"><h2 class="h-sm">' + App.icon("shield") + " " + App.esc(App.t("How Ask DMFT AI works")) + '</h2><h3 class="h-xs" style="margin-top:0">' + App.esc(App.t("In the production portal")) + '</h3><ul class="ai-how">' + ["Results limited to your role and jurisdiction; no free-text access to personal data.", "Reports and briefs are generated as editable drafts for officer approval.", "Every question and answer is audit-logged; DMFT can switch the module off.", "No data retention or training by the model provider; an on-premise open-source model is an option."].map(function (x) { return "<li>" + App.esc(App.t(x)) + "</li>"; }).join("") + "</ul>" +
        '<button type="button" class="btn ghost sm" id="aiClear">' + App.icon("close", "sm") + App.esc(App.t("Clear conversation")) + "</button></div></aside></div>";
      var log = main.querySelector("#aiLog");
      var results = [];
      function draw(scrollToLast) {
        results = [];
        var h = '<div class="msg bot"><span class="mav" aria-hidden="true">' + App.esc(App.t("AI")) + '</span><div class="mb"><p class="mb0">' + App.esc(App.t("Namaste. I can answer questions about DMFT works in Ramgarh: counts, delays, pendency, progress, payments, inspections, and draft the monthly status report or a review meeting brief.")) + "</p>" +
          (cp ? '<div class="suggest" style="margin-top:8px"><button type="button" data-ask="' + App.esc(App.t("Summarize the status of this project.")) + '">' + App.esc(App.t("Summarize the status of this project.")) + "</button></div>" : "") + "</div></div>";
        A.history.forEach(function (m, i) {
          var r = A.answer(m.q, { pid: m.pid }); results.push(r);
          h += '<div class="msg user" data-u="' + i + '"><span class="mav" aria-hidden="true">' + App.esc(App.t("You")) + '</span><div class="mb">' + App.esc(m.q) + "</div></div>";
          h += '<div class="msg bot"><span class="mav" aria-hidden="true">' + App.esc(App.t("AI")) + '</span><div class="mb">' + renderAnswer(r, i) + "</div></div>";
        });
        log.innerHTML = h;
        if (scrollToLast && A.history.length) { var u = log.querySelector('[data-u="' + (A.history.length - 1) + '"]'); if (u) setTimeout(function () { var r = u.getBoundingClientRect(); if (r.top > window.innerHeight * 0.55) window.scrollTo(0, window.scrollY + r.top - 90); }, 0); }
      }
      function ask(q, pid, silent) {
        q = String(q || "").trim(); if (!q) return;
        A.history.push({ q: q, pid: pid || null });
        var r = A.answer(q, { pid: pid });
        App.log("ai", { en: "Ask DMFT AI: \"" + q + "\" -> " + r.intent + " (" + r.count + " records)", hi: "आस्क डीएमएफटी एआई: \"" + q + "\" -> " + r.intent + " (" + r.count + " रिकॉर्ड)" }, pid || null);
        App.save();
        if (!silent) draw(true);
      }
      draw(true);
      main.querySelector("#aiForm").addEventListener("submit", function (e) { e.preventDefault(); var inp = main.querySelector("#aiQ"); ask(inp.value, ctxPid); inp.value = ""; inp.focus(); });
      main.addEventListener("click", function (e) {
        var t = e.target.closest("[data-ask],[data-export],[data-printdoc],[data-more],#aiClear"); if (!t) return;
        if (t.id === "aiClear") { A.history.length = 0; App.setQuery({}); draw(false); return; }
        if (t.hasAttribute("data-ask")) { ask(t.getAttribute("data-ask"), ctxPid); return; }
        var idx = +(t.getAttribute("data-export") || t.getAttribute("data-printdoc") || t.getAttribute("data-more")), r = results[idx], m = A.history[idx];
        if (t.hasAttribute("data-export")) { App.exportXlsx("Ask-DMFT-AI_" + (r.intent || "answer").replace(/[^a-z]/gi, "-") + "_" + App.today() + ".xlsx", A.exportSheets(r, m.q), m.q); App.toast(App.t("Answer exported")); }
        if (t.hasAttribute("data-printdoc")) A.printDoc(r.doc);
        if (t.hasAttribute("data-more")) { var tb = t.previousElementSibling; var hid = tb.querySelectorAll(".ai-more"); var showing = t.getAttribute("aria-expanded") === "true"; hid.forEach(function (x) { x.hidden = showing; }); t.setAttribute("aria-expanded", String(!showing)); t.textContent = showing ? App.tf("Show all {n}", { n: r.list.length }) : App.t("Show fewer"); }
      });
    }
  });
})();
