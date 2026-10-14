/* DMFT Work Monitoring Portal, Ramgarh - master data, sample dataset generator and shared calculations.
   Everything here is SAMPLE DATA FOR DEMONSTRATION. Project names, amounts, firms, PAN/GSTIN and dates are fictional.
   Officers are referred to by designation only. */
(function () {
  "use strict";
  var DM = window.DM = {};

  DM.DISTRICT = { code: "RMG", en: "Ramgarh", hi: "रामगढ़" };

  // ---------- Geography (schematic, approximate; for demonstration only) ----------
  // Approximate block boundaries traced to the district's general shape (Damodar valley, Patratu in the west, Mandu in the
  // north, Chitarpur and Dulmi in the east, Gola in the south-east). Schematic and for demonstration only; the live portal
  // loads official district / block / panchayat GIS layers.
  var V = { // shared polygon vertices [lat, lng]
    W1: [23.640, 85.215], W2: [23.700, 85.230], W3: [23.745, 85.262], N1: [23.790, 85.300], N2: [23.835, 85.345], N3: [23.880, 85.390], N4: [23.915, 85.440],
    N5: [23.905, 85.500], N6: [23.880, 85.555], N7: [23.862, 85.610], N8: [23.830, 85.650], E1: [23.790, 85.690], E2: [23.752, 85.735], E3: [23.735, 85.800],
    E4: [23.705, 85.860], E5: [23.660, 85.905], E6: [23.610, 85.920], E7: [23.565, 85.900], S1: [23.530, 85.860], S2: [23.488, 85.820], S3: [23.445, 85.775],
    S4: [23.420, 85.720], S5: [23.440, 85.660], S6: [23.478, 85.615], S7: [23.512, 85.570], S8: [23.540, 85.520], S9: [23.548, 85.470], S10: [23.555, 85.420],
    S11: [23.565, 85.370], S12: [23.582, 85.310], S13: [23.605, 85.255],
    J1: [23.700, 85.415], J2: [23.700, 85.600], J3: [23.700, 85.760], J4: [23.610, 85.745], J5: [23.560, 85.610], J6: [23.575, 85.800],
    a1: [23.640, 85.430], a2: [23.770, 85.380], b1: [23.690, 85.470], b2: [23.695, 85.540], c1: [23.775, 85.650], d1: [23.640, 85.600], e1: [23.565, 85.680], f1: [23.520, 85.600]
  };
  function poly(keys) { return keys.map(function (k) { return V[k]; }); }
  function vil(en, hi) { return { en: en, hi: hi }; }
  DM.BLOCKS = [
    { code: "RGH", en: "Ramgarh", hi: "रामगढ़", center: [23.630, 85.515], poly: poly(["S10", "a1", "J1", "b1", "b2", "J2", "d1", "J5", "f1", "S6", "S7", "S8", "S9"]),
      panchayats: [
        { en: "Marar", hi: "मरार", villages: [vil("Marar", "मरार"), vil("Chutupalu", "चुटूपालू"), vil("Hesla", "हेसला")] },
        { en: "Sondimra", hi: "सोनडीमरा", villages: [vil("Sondimra", "सोनडीमरा"), vil("Kaitha", "कैथा"), vil("Bariatu", "बरियातू")] },
        { en: "Bijulia", hi: "बिजुलिया", villages: [vil("Bijulia", "बिजुलिया"), vil("Dohakatu", "दोहाकातू"), vil("Pundag", "पुंडाग")] },
        { en: "Sirka", hi: "सिरका", villages: [vil("Sirka", "सिरका"), vil("Argadda", "अरगड्डा"), vil("Kundru", "कुंदरू")] }] },
    { code: "PTR", en: "Patratu", hi: "पतरातू", center: [23.668, 85.290], poly: poly(["S13", "W1", "W2", "W3", "N1", "N2", "a2", "J1", "a1", "S10", "S11", "S12"]),
      panchayats: [
        { en: "Bhurkunda", hi: "भुरकुंडा", villages: [vil("Bhurkunda", "भुरकुंडा"), vil("Deoria", "देवरिया"), vil("Salgo", "सालगो")] },
        { en: "Sayal", hi: "सयाल", villages: [vil("Sayal", "सयाल"), vil("Urimari", "उरीमारी"), vil("Hesalong", "हेसालौंग")] },
        { en: "Patratu", hi: "पतरातू", villages: [vil("Patratu", "पतरातू"), vil("Lapanga", "लपंगा"), vil("Jabra", "जबरा")] },
        { en: "Basal", hi: "बासल", villages: [vil("Basal", "बासल"), vil("Chikor", "चिकोर"), vil("Kurse", "कुरसे")] }] },
    { code: "MND", en: "Mandu", hi: "मांडू", center: [23.795, 85.470], poly: poly(["N2", "N3", "N4", "N5", "N6", "N7", "N8", "E1", "c1", "J2", "b2", "b1", "J1", "a2"]),
      panchayats: [
        { en: "Kuju", hi: "कुजू", villages: [vil("Kuju", "कुजू"), vil("Topa", "टोपा"), vil("Karma", "करमा")] },
        { en: "Mandu", hi: "मांडू", villages: [vil("Mandu", "मांडू"), vil("Ghatotand", "घाटोटांड़"), vil("Laiyo", "लईयो")] },
        { en: "Hehal", hi: "हेहल", villages: [vil("Hehal", "हेहल"), vil("Pindra", "पिंडरा"), vil("Ara", "आरा")] },
        { en: "Dighwar", hi: "दिघवार", villages: [vil("Dighwar", "दिघवार"), vil("Bongabar", "बोंगाबार"), vil("Kedla", "केदला")] }] },
    { code: "GOL", en: "Gola", hi: "गोला", center: [23.500, 85.690], poly: poly(["J5", "e1", "J4", "J6", "E7", "S1", "S2", "S3", "S4", "S5", "S6", "f1"]),
      panchayats: [
        { en: "Gola", hi: "गोला", villages: [vil("Gola", "गोला"), vil("Sangrampur", "संग्रामपुर"), vil("Barlanga", "बरलंगा")] },
        { en: "Hesapodi", hi: "हेसापोड़ी", villages: [vil("Hesapodi", "हेसापोड़ी"), vil("Saragdih", "सरगडीह"), vil("Pundi", "पुंडी")] },
        { en: "Chokad", hi: "चोकाद", villages: [vil("Chokad", "चोकाद"), vil("Bandha", "बांधा"), vil("Uparbarga", "ऊपरबरगा")] },
        { en: "Koyanbera", hi: "कोयनबेड़ा", villages: [vil("Koyanbera", "कोयनबेड़ा"), vil("Murpa", "मुरपा"), vil("Hutpa", "हुटपा")] }] },
    { code: "CTP", en: "Chitarpur", hi: "चितरपुर", center: [23.585, 85.655], poly: poly(["J2", "c1", "E1", "E2", "J3", "J4", "e1", "J5", "d1"]),
      panchayats: [
        { en: "Chitarpur", hi: "चितरपुर", villages: [vil("Chitarpur", "चितरपुर"), vil("Majhla Chutu", "मझला चुटू"), vil("Bhuchungdih", "भुचुंगडीह")] },
        { en: "Sukrigarha", hi: "सुकरीगढ़ा", villages: [vil("Sukrigarha", "सुकरीगढ़ा"), vil("Lari", "लारी"), vil("Barkichumbha", "बड़कीचुम्बा")] },
        { en: "Mayal", hi: "मायल", villages: [vil("Mayal", "मायल"), vil("Bargaon", "बड़गांव"), vil("Rajrappa", "रजरप्पा")] },
        { en: "Badki Pona", hi: "बड़की पोना", villages: [vil("Badki Pona", "बड़की पोना"), vil("Chhotki Pona", "छोटकी पोना"), vil("Golhar", "गोलहर")] }] },
    { code: "DLM", en: "Dulmi", hi: "दुलमी", center: [23.645, 85.835], poly: poly(["E2", "E3", "E4", "E5", "E6", "E7", "J6", "J4", "J3"]),
      panchayats: [
        { en: "Dulmi", hi: "दुलमी", villages: [vil("Dulmi", "दुलमी"), vil("Sikni", "सिकनी"), vil("Herhanj", "हेरहंज")] },
        { en: "Usra", hi: "उसरा", villages: [vil("Usra", "उसरा"), vil("Jamira", "जमीरा"), vil("Kulhi", "कुल्ही")] },
        { en: "Bhaya", hi: "भाया", villages: [vil("Bhaya", "भाया"), vil("Sosokala", "सोसोकला"), vil("Kudlong", "कुदलौंग")] },
        { en: "Sondih", hi: "सोनडीह", villages: [vil("Sondih", "सोनडीह"), vil("Dulmi Tand", "दुलमी टांड"), vil("Hulsu", "हुलसु")] }] }
  ];
  DM.DISTRICT_OUTLINE = poly(["W1", "W2", "W3", "N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13"]);
  DM.RIVER = [[23.655, 85.215], [23.650, 85.300], [23.640, 85.380], [23.626, 85.450], [23.618, 85.520], [23.622, 85.600], [23.633, 85.705], [23.660, 85.780], [23.690, 85.850], [23.702, 85.905]];
  DM.blockCentroid = function (b) { var la = 0, lo = 0; b.poly.forEach(function (p) { la += p[0]; lo += p[1]; }); return [la / b.poly.length, lo / b.poly.length]; };

  DM.DEPTS = [
    { code: "RWD", en: "Rural Works Department", hi: "ग्रामीण कार्य विभाग", short: { en: "RWD", hi: "ग्रा.का.वि." } },
    { code: "DWSD", en: "Drinking Water & Sanitation Department", hi: "पेयजल एवं स्वच्छता विभाग", short: { en: "DWSD", hi: "पे.स्व.वि." } },
    { code: "BCD", en: "Building Construction Department", hi: "भवन निर्माण विभाग", short: { en: "BCD", hi: "भ.नि.वि." } },
    { code: "HLT", en: "Health Department", hi: "स्वास्थ्य विभाग", short: { en: "Health", hi: "स्वास्थ्य" } },
    { code: "EDU", en: "Education Department", hi: "शिक्षा विभाग", short: { en: "Education", hi: "शिक्षा" } },
    { code: "RDSD", en: "Rural Development (Special Division)", hi: "ग्रामीण विकास (विशेष प्रमंडल)", short: { en: "RD (SD)", hi: "ग्रा.वि. (वि.प्र.)" } },
    { code: "WCD", en: "Women & Child Development", hi: "महिला एवं बाल विकास", short: { en: "WCD", hi: "म.बा.वि." } },
    { code: "AGR", en: "Agriculture Department", hi: "कृषि विभाग", short: { en: "Agriculture", hi: "कृषि" } },
    { code: "JBVNL", en: "Electricity (JBVNL)", hi: "विद्युत (जेबीवीएनएल)", short: { en: "JBVNL", hi: "जेबीवीएनएल" } }
  ];

  DM.SECTORS = [
    { code: "water", pr: "high", en: "Drinking water supply", hi: "पेयजल आपूर्ति" },
    { code: "environment", pr: "high", en: "Environment preservation & pollution control", hi: "पर्यावरण संरक्षण एवं प्रदूषण नियंत्रण" },
    { code: "health", pr: "high", en: "Health care", hi: "स्वास्थ्य सेवा" },
    { code: "education", pr: "high", en: "Education", hi: "शिक्षा" },
    { code: "women_child", pr: "high", en: "Welfare of women & children", hi: "महिला एवं बाल कल्याण" },
    { code: "aged", pr: "high", en: "Welfare of aged & disabled", hi: "वृद्ध एवं दिव्यांग कल्याण" },
    { code: "skill", pr: "high", en: "Skill development & livelihood", hi: "कौशल विकास एवं आजीविका" },
    { code: "sanitation", pr: "high", en: "Sanitation", hi: "स्वच्छता" },
    { code: "agriculture", pr: "high", en: "Agriculture & animal husbandry", hi: "कृषि एवं पशुपालन" },
    { code: "infra", pr: "other", en: "Physical infrastructure", hi: "भौतिक अवसंरचना" },
    { code: "irrigation", pr: "other", en: "Irrigation", hi: "सिंचाई" },
    { code: "watershed", pr: "other", en: "Watershed development", hi: "जलछाजन विकास" }
  ];

  // Work types: dept, sector, photo scene, name templates, amount range (lakh), execution duration (days), weight
  DM.WORKS = [
    { k: "pcc_road", d: "RWD", s: "infra", sc: "road", w: 14, a: [25, 140], du: [150, 300], t: { en: "Road", hi: "पथ" }, en: "PCC road from {v} to {v2}", hi: "{v} से {v2} तक पीसीसी पथ निर्माण" },
    { k: "bridge", d: "RWD", s: "infra", sc: "bridge", w: 5, a: [70, 240], du: [240, 420], t: { en: "Bridge / culvert", hi: "पुल / पुलिया" }, en: "High-level bridge over local nala near {v}", hi: "{v} के निकट नाला पर उच्च स्तरीय पुल निर्माण" },
    { k: "mvs", d: "DWSD", s: "water", sc: "water", w: 12, a: [12, 45], du: [90, 180], t: { en: "Water supply", hi: "जलापूर्ति" }, en: "Solar-powered mini water supply scheme, {v}", hi: "सौर ऊर्जा आधारित लघु जलापूर्ति योजना, {v}" },
    { k: "pipe", d: "DWSD", s: "water", sc: "water", w: 6, a: [35, 120], du: [180, 300], t: { en: "Water supply", hi: "जलापूर्ति" }, en: "Piped water supply extension, {v}", hi: "{v} में पाइप जलापूर्ति विस्तार" },
    { k: "toilet", d: "DWSD", s: "sanitation", sc: "building", w: 5, a: [8, 22], du: [90, 150], t: { en: "Sanitation", hi: "स्वच्छता" }, en: "Community sanitary complex, {v}", hi: "सामुदायिक स्वच्छता परिसर, {v}" },
    { k: "hall", d: "BCD", s: "infra", sc: "building", w: 6, a: [22, 55], du: [180, 300], t: { en: "Building", hi: "भवन" }, en: "Multipurpose community hall, {v}", hi: "बहुउद्देशीय सामुदायिक भवन, {v}" },
    { k: "oldage", d: "BCD", s: "aged", sc: "building", w: 3, a: [30, 65], du: [210, 330], t: { en: "Building", hi: "भवन" }, en: "Day-care centre for the elderly and persons with disabilities, {v}", hi: "वृद्धजन एवं दिव्यांगजन डे-केयर केंद्र, {v}" },
    { k: "hsc", d: "HLT", s: "health", sc: "building", w: 6, a: [35, 75], du: [210, 330], t: { en: "Health facility", hi: "स्वास्थ्य सुविधा" }, en: "Health sub-centre building, {v}", hi: "स्वास्थ्य उप-केंद्र भवन, {v}" },
    { k: "equip", d: "HLT", s: "health", sc: "equip", w: 3, a: [18, 60], du: [60, 120], t: { en: "Equipment supply", hi: "उपकरण आपूर्ति" }, en: "Medical equipment for Community Health Centre, {b}", hi: "सामुदायिक स्वास्थ्य केंद्र, {b} हेतु चिकित्सा उपकरण" },
    { k: "classrooms", d: "EDU", s: "education", sc: "building", w: 7, a: [18, 48], du: [150, 270], t: { en: "School infrastructure", hi: "विद्यालय अवसंरचना" }, en: "Additional classrooms, Govt. Middle School {v}", hi: "राजकीय मध्य विद्यालय {v} में अतिरिक्त कक्षा-कक्ष" },
    { k: "smartclass", d: "EDU", s: "education", sc: "building", w: 4, a: [15, 40], du: [90, 180], t: { en: "School infrastructure", hi: "विद्यालय अवसंरचना" }, en: "Smart classrooms and science lab, Govt. High School {v}", hi: "राजकीय उच्च विद्यालय {v} में स्मार्ट क्लास एवं विज्ञान प्रयोगशाला" },
    { k: "checkdam", d: "RDSD", s: "watershed", sc: "dam", w: 5, a: [12, 40], du: [120, 240], t: { en: "Watershed", hi: "जलछाजन" }, en: "Check dam on local stream at {v}", hi: "{v} में स्थानीय नाले पर चेक डैम निर्माण" },
    { k: "pond", d: "RDSD", s: "irrigation", sc: "dam", w: 4, a: [6, 22], du: [60, 150], t: { en: "Irrigation", hi: "सिंचाई" }, en: "Renovation and deepening of pond, {v}", hi: "{v} में तालाब जीर्णोद्धार एवं गहरीकरण" },
    { k: "skillctr", d: "RDSD", s: "skill", sc: "building", w: 3, a: [40, 90], du: [240, 360], t: { en: "Livelihood", hi: "आजीविका" }, en: "Skill development and livelihood centre, {v}", hi: "कौशल विकास एवं आजीविका केंद्र, {v}" },
    { k: "plant", d: "RDSD", s: "environment", sc: "farm", w: 2, a: [8, 25], du: [90, 180], t: { en: "Environment", hi: "पर्यावरण" }, en: "Green belt plantation along mining-affected road, {v}", hi: "{v} में खनन प्रभावित पथ के किनारे हरित पट्टी वृक्षारोपण" },
    { k: "anganwadi", d: "WCD", s: "women_child", sc: "building", w: 6, a: [9, 15], du: [120, 210], t: { en: "Anganwadi", hi: "आंगनबाड़ी" }, en: "Anganwadi centre building, {v}", hi: "आंगनबाड़ी केंद्र भवन, {v}" },
    { k: "poshan", d: "WCD", s: "women_child", sc: "building", w: 2, a: [15, 35], du: [150, 240], t: { en: "Women & child", hi: "महिला एवं बाल" }, en: "Nutrition and women's facilitation centre, {v}", hi: "पोषण एवं महिला सुविधा केंद्र, {v}" },
    { k: "coldstore", d: "AGR", s: "agriculture", sc: "farm", w: 2, a: [60, 140], du: [240, 360], t: { en: "Agriculture", hi: "कृषि" }, en: "Farmers' facilitation centre with cold storage, {v}", hi: "शीत भंडारण सहित किसान सुविधा केंद्र, {v}" },
    { k: "drip", d: "AGR", s: "agriculture", sc: "farm", w: 3, a: [10, 30], du: [90, 150], t: { en: "Agriculture", hi: "कृषि" }, en: "Drip and sprinkler irrigation for farmer groups, {v}", hi: "{v} के कृषक समूहों हेतु ड्रिप एवं स्प्रिंकलर सिंचाई" },
    { k: "solarlight", d: "JBVNL", s: "infra", sc: "solar", w: 5, a: [5, 18], du: [60, 120], t: { en: "Electrification", hi: "विद्युतीकरण" }, en: "Solar street lights, {v}", hi: "सोलर स्ट्रीट लाइट, {v}" },
    { k: "transformer", d: "JBVNL", s: "infra", sc: "solar", w: 3, a: [8, 25], du: [60, 120], t: { en: "Electrification", hi: "विद्युतीकरण" }, en: "Distribution transformer augmentation, {v}", hi: "{v} में वितरण ट्रांसफार्मर क्षमता वृद्धि" }
  ];

  DM.STAGES = [
    { n: 1, k: "request", en: "Work Request / Recommendation", hi: "कार्य अनुरोध / अनुशंसा", s: { en: "Request", hi: "अनुरोध" } },
    { n: 2, k: "acceptance", en: "Work Request Acceptance", hi: "कार्य अनुरोध स्वीकृति", s: { en: "Acceptance", hi: "स्वीकृति" } },
    { n: 3, k: "ta", en: "Technical Approval", hi: "तकनीकी स्वीकृति", s: { en: "Technical approval", hi: "तकनीकी स्वीकृति" } },
    { n: 4, k: "aa", en: "Administrative Approval", hi: "प्रशासनिक स्वीकृति", s: { en: "Admin. approval", hi: "प्रशासनिक स्वीकृति" } },
    { n: 5, k: "execution", en: "Work Execution", hi: "कार्य निष्पादन", s: { en: "Execution", hi: "निष्पादन" } },
    { n: 6, k: "physical", en: "Physical Progress", hi: "भौतिक प्रगति", s: { en: "Physical progress", hi: "भौतिक प्रगति" } },
    { n: 7, k: "payment", en: "Payment Requisition", hi: "भुगतान अधियाचना", s: { en: "Payment", hi: "भुगतान" } },
    { n: 8, k: "inspection", en: "Work Inspection", hi: "कार्य निरीक्षण", s: { en: "Inspection", hi: "निरीक्षण" } },
    { n: 9, k: "financial", en: "Financial Progress", hi: "वित्तीय प्रगति", s: { en: "Financial progress", hi: "वित्तीय प्रगति" } },
    { n: 10, k: "handover", en: "Handover", hi: "हस्तांतरण", s: { en: "Handover", hi: "हस्तांतरण" } }
  ];

  // Captured fields per stage (scope item 1). t: text | date | money | num | file | pct | select
  function F(k, en, hi, t) { return { k: k, en: en, hi: hi, t: t || "text" }; }
  DM.STAGE_FIELDS = {
    1: [F("block", "Block", "प्रखंड"), F("panchayat", "Panchayat / ward", "पंचायत / वार्ड"), F("village", "Village", "ग्राम"), F("workType", "Work type", "कार्य का प्रकार"), F("workName", "Name of work", "कार्य का नाम"),
        F("recBy", "Recommended by", "अनुशंसाकर्ता"), F("recDesig", "Designation", "पदनाम"), F("letterNo", "Letter number", "पत्रांक"), F("letterDate", "Letter date", "पत्र दिनांक", "date"), F("letterFile", "Received letter", "प्राप्त पत्र", "file")],
    2: [F("gramSabhaDate", "Gram Sabha date", "ग्राम सभा दिनांक", "date"), F("gramSabhaFile", "Gram Sabha resolution", "ग्राम सभा प्रस्ताव", "file"), F("gcDate", "Governing Council meeting", "शासी परिषद बैठक", "date"),
        F("mcDate", "Managing Committee meeting", "प्रबंध समिति बैठक", "date"), F("mcItem", "Proceedings / agenda item", "कार्यवाही / एजेंडा मद"), F("procFile", "Meeting proceedings", "बैठक की कार्यवाही", "file")],
    3: [F("dprDept", "Department selected for DPR", "डीपीआर हेतु चयनित विभाग"), F("dprDate", "DPR prepared on", "डीपीआर तैयार दिनांक", "date"), F("dprFile", "DPR document", "डीपीआर दस्तावेज़", "file"),
        F("estAmount", "Estimated amount", "प्राक्कलित राशि", "money"), F("taNo", "Technical approval no.", "तकनीकी स्वीकृति संख्या"), F("taDate", "Technical approval date", "तकनीकी स्वीकृति दिनांक", "date"), F("taFile", "Approved letter", "स्वीकृति पत्र", "file")],
    4: [F("aaNo", "Administrative approval no.", "प्रशासनिक स्वीकृति संख्या"), F("aaDate", "AA date", "प्रशासनिक स्वीकृति दिनांक", "date"), F("approvedAmount", "Approved amount", "स्वीकृत राशि", "money"),
        F("fy", "Financial year", "वित्तीय वर्ष"), F("uid", "Unique Project ID", "विशिष्ट परियोजना आईडी"), F("commDate", "Communicated to execution dept. on", "निष्पादन विभाग को संसूचित", "date"), F("aaFile", "AA letter", "प्रशासनिक स्वीकृति पत्र", "file")],
    5: [F("tenderFloat", "Tender floating date", "निविदा प्रकाशन दिनांक", "date"), F("tenderClose", "Tender closing date", "निविदा समाप्ति दिनांक", "date"), F("bidOpen", "Bid opening date", "बिड खुलने की तिथि", "date"),
        F("agreementNo", "Agreement no.", "एकरारनामा संख्या"), F("agreementDate", "Agreement date", "एकरारनामा दिनांक", "date"), F("agreementAmount", "Agreement amount", "एकरारनामा राशि", "money"), F("contractor", "Contractor / agency", "संवेदक / एजेंसी"),
        F("shilanyasDate", "Shilanyas (foundation) date", "शिलान्यास दिनांक", "date"), F("commencementDate", "Work commencement date", "कार्य प्रारंभ दिनांक", "date"), F("plannedCompletion", "Scheduled completion date", "निर्धारित पूर्णता दिनांक", "date")],
    6: [F("physicalPct", "Physical progress", "भौतिक प्रगति", "pct"), F("lastUpdate", "Last progress update", "अंतिम प्रगति अद्यतन", "date"), F("photoCount", "Geo-tagged photographs", "जियो-टैग फोटो", "num"), F("fieldObs", "Latest field observation", "नवीनतम क्षेत्र अवलोकन")],
    7: [F("reqDate", "Requisition date", "अधियाचना दिनांक", "date"), F("reqLetter", "Requisition letter no.", "अधियाचना पत्रांक"), F("reqAmount", "Requisition amount", "अधियाचना राशि", "money"), F("reqDocs", "Supporting documents", "सहायक दस्तावेज़", "file")],
    8: [F("inspDate", "Last inspection date", "अंतिम निरीक्षण दिनांक", "date"), F("inspReport", "Inspection report", "निरीक्षण प्रतिवेदन", "file"), F("findings", "Findings", "निष्कर्ष"), F("actionTaken", "Action taken", "की गई कार्रवाई"), F("pendingActions", "Pending actions", "लंबित कार्रवाई", "num")],
    9: [F("expenditure", "Expenditure (payments released)", "व्यय (जारी भुगतान)", "money"), F("lastPayDate", "Last payment date", "अंतिम भुगतान दिनांक", "date"), F("ucStatus", "Utilisation certificate", "उपयोगिता प्रमाण-पत्र"), F("finPct", "Financial progress", "वित्तीय प्रगति", "pct")],
    10: [F("completionStatus", "Completion status", "पूर्णता स्थिति"), F("completionDate", "Completion date", "पूर्णता दिनांक", "date"), F("handoverDate", "Handover date", "हस्तांतरण दिनांक", "date"), F("handoverDept", "Handed over to", "किसे हस्तांतरित"),
        F("handoverLetter", "Handover letter no.", "हस्तांतरण पत्रांक"), F("finalDocs", "Final documents", "अंतिम दस्तावेज़", "file")]
  };

  // ---------- Designations (no personal names anywhere) ----------
  DM.DESIG = {
    deo: { en: "Data Entry Operator, DMFT Cell", hi: "डाटा एंट्री ऑपरेटर, डीएमएफटी सेल" },
    cell: { en: "Section Officer, DMFT Cell", hi: "प्रशाखा पदाधिकारी, डीएमएफटी सेल" },
    nodal: { en: "Nodal Officer, DMFT", hi: "नोडल पदाधिकारी, डीएमएफटी" },
    dpo: { en: "District Planning Officer", hi: "जिला योजना पदाधिकारी" },
    ddc: { en: "Deputy Development Commissioner", hi: "उप विकास आयुक्त" },
    dc: { en: "Deputy Commissioner-cum-Chairperson, DMFT", hi: "उपायुक्त-सह-अध्यक्ष, डीएमएफटी" },
    accounts: { en: "Accounts Officer, DMFT", hi: "लेखा पदाधिकारी, डीएमएफटी" },
    insp: { en: "District Inspection Team", hi: "जिला निरीक्षण दल" },
    mis: { en: "MIS Officer, District Planning Office", hi: "एमआईएस पदाधिकारी, जिला योजना कार्यालय" },
    sysadmin: { en: "System Administrator", hi: "सिस्टम प्रशासक" },
    ee: { en: "Executive Engineer, {d}", hi: "कार्यपालक अभियंता, {d}" },
    ae: { en: "Assistant Engineer, {d}", hi: "सहायक अभियंता, {d}" },
    je: { en: "Junior Engineer, {d}", hi: "कनीय अभियंता, {d}" },
    bdo: { en: "BDO, {b}", hi: "प्रखंड विकास पदाधिकारी, {b}" }
  };
  DM.RECOMMENDERS = [
    { en: "Mukhiya, {p} Panchayat", hi: "मुखिया, {p} पंचायत" },
    { en: "BDO, {b}", hi: "प्रखंड विकास पदाधिकारी, {b}" },
    { en: "Gram Sabha, {v}", hi: "ग्राम सभा, {v}" },
    { en: "Hon'ble MLA (constituency covering {b})", hi: "माननीय विधायक ({b} क्षेत्र)" },
    { en: "Zila Parishad Member, {b}", hi: "जिला परिषद सदस्य, {b}" },
    { en: "Circle Officer, {b}", hi: "अंचल अधिकारी, {b}" }
  ];
  // Configured file-movement chain per stage (workflow engine configuration)
  DM.CHAIN = { 1: ["deo", "cell", "nodal"], 2: ["cell", "nodal", "dpo", "ddc"], 3: ["ee", "nodal", "dpo"], 4: ["dpo", "ddc", "dc"], 5: ["ee", "nodal"],
    6: ["je", "ee"], 7: ["ee", "accounts", "dpo"], 8: ["insp", "nodal"], 9: ["accounts", "dpo"], 10: ["ee", "dpo", "ddc"] };

  DM.ROLES = [
    { k: "district", en: "District Administration", hi: "जिला प्रशासन", desig: "ddc", user: "ddc.ramgarh", scope: { en: "Entire district", hi: "संपूर्ण जिला" } },
    { k: "dmftcell", en: "DMFT Cell", hi: "डीएमएफटी सेल", desig: "cell", user: "dmftcell.rmg", scope: { en: "Entire district", hi: "संपूर्ण जिला" } },
    { k: "nodal", en: "Nodal Officer", hi: "नोडल पदाधिकारी", desig: "nodal", user: "nodal.dmft", scope: { en: "Entire district", hi: "संपूर्ण जिला" } },
    { k: "senior", en: "Designated Senior Officer", hi: "नामित वरिष्ठ पदाधिकारी", desig: "dpo", user: "dpo.ramgarh", scope: { en: "Entire district", hi: "संपूर्ण जिला" } },
    { k: "exec", en: "Execution Department", hi: "निष्पादन विभाग", desig: "ee", dept: "RWD", user: "ee.rwd.rmg", scope: { en: "Rural Works Department projects", hi: "ग्रामीण कार्य विभाग की परियोजनाएँ" } },
    { k: "field", en: "Field / Inspection Team", hi: "क्षेत्र / निरीक्षण दल", desig: "je", dept: "RWD", block: "MND", user: "je.mandu", scope: { en: "Mandu block, assigned works", hi: "मांडू प्रखंड, आवंटित कार्य" } },
    { k: "deo", en: "Data Entry Operator", hi: "डाटा एंट्री ऑपरेटर", desig: "deo", user: "deo.dmft", scope: { en: "Data entry, entire district", hi: "डाटा एंट्री, संपूर्ण जिला" } },
    { k: "monitor", en: "Monitoring / Reporting User", hi: "अनुश्रवण / रिपोर्टिंग उपयोगकर्ता", desig: "mis", user: "mis.dpo", scope: { en: "Read-only, entire district", hi: "केवल पठन, संपूर्ण जिला" } },
    { k: "admin", en: "System Administrator", hi: "सिस्टम प्रशासक", desig: "sysadmin", user: "sysadmin", scope: { en: "Configuration and users", hi: "कॉन्फ़िगरेशन एवं उपयोगकर्ता" } }
  ];
  // Permission matrix: F = full, V = view, A = approve/act, N = none
  DM.MODULES = [
    { k: "dashboard", en: "Dashboard & GIS", hi: "डैशबोर्ड एवं जीआईएस" }, { k: "request", en: "Work request entry", hi: "कार्य अनुरोध प्रविष्टि" },
    { k: "movement", en: "File movement / approvals", hi: "फ़ाइल संचलन / स्वीकृतियाँ" }, { k: "execution", en: "Execution & contractor", hi: "निष्पादन एवं संवेदक" },
    { k: "progress", en: "Physical progress & photos", hi: "भौतिक प्रगति एवं फोटो" }, { k: "payment", en: "Payment & financial", hi: "भुगतान एवं वित्तीय" },
    { k: "inspection", en: "Inspection module", hi: "निरीक्षण मॉड्यूल" }, { k: "documents", en: "Document repository", hi: "दस्तावेज़ भंडार" },
    { k: "ai", en: "Ask DMFT AI", hi: "आस्क डीएमएफटी एआई" }, { k: "reports", en: "Reports & export", hi: "रिपोर्ट एवं निर्यात" },
    { k: "import", en: "Data import", hi: "डाटा आयात" }, { k: "users", en: "Users, roles & SLA config", hi: "उपयोगकर्ता, भूमिका एवं एसएलए" }
  ];
  DM.PERMS = {
    district: "VVAVVAVVFFNV", dmftcell: "FFAFVFFFFFFV", nodal: "FVAVVAAFFFNV", senior: "FVAVVAAVFFNV", exec: "VVAFFFVFVVNN",
    field: "VNNVFNFVNNNN", deo: "VFVVFVVFNVFN", monitor: "VNNVVVVVFFNN", admin: "VNNNNNNVNVFF"
  };

  // SLA days per pendency category (configurable in the Delay & Pendency screen)
  DM.PEND_CATS = [
    { k: "approval", en: "Request acceptance pending", hi: "अनुरोध स्वीकृति लंबित", sla: 30, stage: 2 },
    { k: "dpr", en: "DPR pending", hi: "डीपीआर लंबित", sla: 30, stage: 3 },
    { k: "ta", en: "Technical approval pending", hi: "तकनीकी स्वीकृति लंबित", sla: 15, stage: 3 },
    { k: "aa", en: "Administrative approval pending", hi: "प्रशासनिक स्वीकृति लंबित", sla: 21, stage: 4 },
    { k: "tender", en: "Tender pending", hi: "निविदा लंबित", sla: 30, stage: 5 },
    { k: "agreement", en: "Agreement pending", hi: "एकरारनामा लंबित", sla: 15, stage: 5 },
    { k: "commencement", en: "Work commencement pending", hi: "कार्य प्रारंभ लंबित", sla: 15, stage: 5 },
    { k: "progress", en: "Progress update pending", hi: "प्रगति अद्यतन लंबित", sla: 30, stage: 6 },
    { k: "inspection", en: "Inspection pending", hi: "निरीक्षण लंबित", sla: 45, stage: 8 },
    { k: "inspaction", en: "Inspection action pending", hi: "निरीक्षण कार्रवाई लंबित", sla: 15, stage: 8 },
    { k: "payment", en: "Payment requisition pending", hi: "भुगतान अधियाचना लंबित", sla: 15, stage: 7 },
    { k: "handover", en: "Handover pending", hi: "हस्तांतरण लंबित", sla: 30, stage: 10 }
  ];

  DM.STATUS = {
    proposed: { en: "Under scrutiny", hi: "जाँचाधीन", cls: "st-proposed", color: "#8A94A3" },
    approval: { en: "Awaiting approval", hi: "स्वीकृति हेतु लंबित", cls: "st-approval", color: "#C2650A" },
    tender: { en: "Tender stage", hi: "निविदा चरण", cls: "st-tender", color: "#0B8BA3" },
    notstarted: { en: "Not commenced", hi: "कार्य प्रारंभ नहीं", cls: "st-notstarted", color: "#5B6573" },
    ongoing: { en: "Ongoing", hi: "प्रगतिरत", cls: "st-ongoing", color: "#2F5FAF" },
    delayed: { en: "Delayed", hi: "विलंबित", cls: "st-delayed", color: "#C0392B" },
    handover: { en: "Awaiting handover", hi: "हस्तांतरण लंबित", cls: "st-handover", color: "#7B4FB5" },
    completed: { en: "Completed", hi: "पूर्ण", cls: "st-completed", color: "#2F8A4E" }
  };
  DM.STATUS_ORDER = ["proposed", "approval", "tender", "notstarted", "ongoing", "delayed", "handover", "completed"];

  DM.DOC_CATS = [
    { k: "rec", en: "Recommendation letter", hi: "अनुशंसा पत्र", st: 1 }, { k: "gs", en: "Gram Sabha documents", hi: "ग्राम सभा दस्तावेज़", st: 2 },
    { k: "proc", en: "Meeting proceedings", hi: "बैठक की कार्यवाही", st: 2 }, { k: "dpr", en: "DPR", hi: "डीपीआर", st: 3 },
    { k: "ta", en: "Technical approval", hi: "तकनीकी स्वीकृति", st: 3 }, { k: "aa", en: "Administrative approval", hi: "प्रशासनिक स्वीकृति", st: 4 },
    { k: "tender", en: "Tender documents", hi: "निविदा दस्तावेज़", st: 5 }, { k: "agr", en: "Agreement", hi: "एकरारनामा", st: 5 },
    { k: "photo", en: "Progress photographs", hi: "प्रगति फोटो", st: 6 }, { k: "payreq", en: "Payment requisitions", hi: "भुगतान अधियाचना", st: 7 },
    { k: "insp", en: "Inspection reports", hi: "निरीक्षण प्रतिवेदन", st: 8 }, { k: "fin", en: "Financial documents", hi: "वित्तीय दस्तावेज़", st: 9 },
    { k: "ho", en: "Handover documents", hi: "हस्तांतरण दस्तावेज़", st: 10 }
  ];

  DM.CHECKLIST = [
    { en: "Work as per approved DPR and drawings", hi: "स्वीकृत डीपीआर एवं ड्राइंग के अनुरूप कार्य" },
    { en: "Material quality as per specification (test reports seen)", hi: "विनिर्देश अनुसार सामग्री गुणवत्ता (जाँच प्रतिवेदन देखा गया)" },
    { en: "Measurement book updated", hi: "मापी पुस्त अद्यतन" },
    { en: "DMFT project display board at site", hi: "स्थल पर डीएमएफटी परियोजना सूचना पट्ट" },
    { en: "Site safety and worker facilities", hi: "स्थल सुरक्षा एवं श्रमिक सुविधाएँ" },
    { en: "Geo-tagged photographs uploaded", hi: "जियो-टैग फोटो अपलोड" }
  ];
  DM.DEFICIENCIES = [
    { en: "Curing of PCC not adequate in 120 m stretch", hi: "120 मीटर खंड में पीसीसी की तराई अपर्याप्त" },
    { en: "Project display board not installed at site", hi: "स्थल पर परियोजना सूचना पट्ट स्थापित नहीं" },
    { en: "Measurement book entries pending for last two weeks", hi: "पिछले दो सप्ताह की मापी पुस्त प्रविष्टियाँ लंबित" },
    { en: "Plaster thickness below specification on east wall", hi: "पूर्वी दीवार पर प्लास्टर की मोटाई विनिर्देश से कम" },
    { en: "Labour safety helmets not in use", hi: "श्रमिकों द्वारा सुरक्षा हेलमेट का उपयोग नहीं" },
    { en: "Water tank staging bolts to be re-tightened", hi: "जल टंकी स्टेजिंग बोल्ट पुनः कसने हैं" },
    { en: "Side drain alignment deviates from drawing", hi: "साइड ड्रेन का संरेखण ड्राइंग से भिन्न" }
  ];
  DM.OBS_OK = [
    { en: "Work progressing as per schedule; quality satisfactory.", hi: "कार्य समय-सारणी अनुसार प्रगति पर; गुणवत्ता संतोषजनक।" },
    { en: "Material stacked properly; cube test results within limits.", hi: "सामग्री उचित रूप से संग्रहीत; क्यूब जाँच परिणाम सीमा में।" },
    { en: "Foundation work complete; superstructure started.", hi: "नींव कार्य पूर्ण; अधिरचना प्रारंभ।" }
  ];
  DM.PROGRESS_REMARKS = [
    { en: "Earthwork and site clearance completed", hi: "मिट्टी कार्य एवं स्थल सफाई पूर्ण" },
    { en: "Foundation / sub-base work in progress", hi: "नींव / सब-बेस कार्य प्रगति पर" },
    { en: "Superstructure / base course in progress", hi: "अधिरचना / बेस कोर्स कार्य प्रगति पर" },
    { en: "Major civil work complete; finishing in progress", hi: "मुख्य सिविल कार्य पूर्ण; फिनिशिंग प्रगति पर" },
    { en: "Finishing, fittings and testing in progress", hi: "फिनिशिंग, फिटिंग एवं परीक्षण प्रगति पर" },
    { en: "Work completed; site cleared for inspection", hi: "कार्य पूर्ण; निरीक्षण हेतु स्थल तैयार" }
  ];
  DM.MOVE_REMARKS = {
    fw: [{ en: "Examined and found in order. Forwarded for further action.", hi: "जाँचोपरांत सही पाया गया। आगे की कार्रवाई हेतु अग्रसारित।" },
         { en: "Documents verified with the received letter. Put up for approval.", hi: "प्राप्त पत्र से दस्तावेज़ों का सत्यापन किया गया। स्वीकृति हेतु प्रस्तुत।" },
         { en: "Recommended as per PMKKKY 2024 priority sector norms.", hi: "पीएमकेकेकेवाई 2024 प्राथमिकता क्षेत्र मानकों के अनुसार अनुशंसित।" }],
    ap: [{ en: "Approved.", hi: "स्वीकृत।" }, { en: "Approved. Communicate to the execution department.", hi: "स्वीकृत। निष्पादन विभाग को संसूचित करें।" }],
    rt: [{ en: "Estimate to be revised as per current Schedule of Rates. Returned.", hi: "प्राक्कलन वर्तमान दर अनुसूची के अनुसार संशोधित करें। वापस।" },
         { en: "Gram Sabha resolution copy not legible. Please re-upload.", hi: "ग्राम सभा प्रस्ताव की प्रति पठनीय नहीं। कृपया पुनः अपलोड करें।" }],
    rs: [{ en: "Revised as directed and resubmitted.", hi: "निर्देशानुसार संशोधित कर पुनः प्रस्तुत।" }]
  };

  // Text registry: generated records store short codes, resolved at render time (keeps the saved demo state small)
  DM.TXT = { rs0: DM.MOVE_REMARKS.rs[0], reg: { en: "Work request registered from the received recommendation letter.", hi: "प्राप्त अनुशंसा पत्र के आधार पर कार्य अनुरोध पंजीकृत।" },
    sc7: { en: "Second instalment requisition for 30% of agreement value. MB extract and geo-tagged photos attached.", hi: "एकरारनामा मूल्य के 30% की द्वितीय किस्त अधियाचना। मापी पुस्त उद्धरण एवं जियो-टैग फोटो संलग्न।" },
    cmp: { en: "Rectified; photographs attached.", hi: "सुधार किया गया; फोटो संलग्न।" }, up: { en: "Uploaded", hi: "अपलोड किया गया" }, rev: { en: "Revised version uploaded", hi: "संशोधित संस्करण अपलोड" },
    na: { en: "Not applicable", hi: "लागू नहीं" }, nw: { en: "New version uploaded", hi: "नया संस्करण अपलोड" } };
  [["fw", DM.MOVE_REMARKS.fw], ["rt", DM.MOVE_REMARKS.rt], ["ap", DM.MOVE_REMARKS.ap], ["pr", DM.PROGRESS_REMARKS], ["ob", DM.OBS_OK], ["df", DM.DEFICIENCIES]].forEach(function (g) { g[1].forEach(function (o, i) { DM.TXT[g[0] + i] = o; }); });
  DM.txt = function (x) { if (x == null) return null; if (typeof x === "object") return x; if (DM.TXT[x]) return DM.TXT[x]; return { en: String(x), hi: String(x) }; };

  // ---------- Utilities ----------
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  var rnd = Math.random;
  function ri(a, b) { return Math.floor(a + rnd() * (b - a + 1)); }
  function rf(a, b) { return a + rnd() * (b - a); }
  function pc(prefix, arr) { return prefix + Math.floor(rnd() * arr.length); }
  function pick(arr) { return arr[Math.floor(rnd() * arr.length)]; }
  function wpick(arr) { var tot = 0, i; for (i = 0; i < arr.length; i++) tot += arr[i].w; var r = rnd() * tot; for (i = 0; i < arr.length; i++) { r -= arr[i].w; if (r <= 0) return arr[i]; } return arr[arr.length - 1]; }
  function pad(n, w) { n = String(n); while (n.length < w) n = "0" + n; return n; }
  function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1, 2) + "-" + pad(d.getDate(), 2); }
  function parse(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(s, n) { var d = parse(s); d.setDate(d.getDate() + Math.round(n)); return iso(d); }
  function diff(a, b) { return Math.round((parse(b) - parse(a)) / 86400000); }
  function ts(dateIso, hh, mm) { return dateIso + "T" + pad(hh == null ? ri(10, 17) : hh, 2) + ":" + pad(mm == null ? ri(0, 59) : mm, 2) + ":00"; }
  DM.util = { iso: iso, parse: parse, addDays: addDays, diff: diff, pad: pad };
  DM.todayISO = function () { return iso(new Date()); };
  DM.fyOf = function (s) { var d = parse(s), y = d.getFullYear(), m = d.getMonth(); var a = m >= 3 ? y : y - 1; return a + "-" + String(a + 1).slice(2); };
  DM.FYS = function () { var cur = DM.fyOf(DM.todayISO()); var a = +cur.slice(0, 4); return [(a - 2) + "-" + String(a - 1).slice(2), (a - 1) + "-" + String(a).slice(2), cur]; };

  DM.block = function (c) { for (var i = 0; i < DM.BLOCKS.length; i++) if (DM.BLOCKS[i].code === c) return DM.BLOCKS[i]; return null; };
  DM.dept = function (c) { for (var i = 0; i < DM.DEPTS.length; i++) if (DM.DEPTS[i].code === c) return DM.DEPTS[i]; return null; };
  DM.sector = function (c) { for (var i = 0; i < DM.SECTORS.length; i++) if (DM.SECTORS[i].code === c) return DM.SECTORS[i]; return null; };
  DM.work = function (k) { for (var i = 0; i < DM.WORKS.length; i++) if (DM.WORKS[i].k === k) return DM.WORKS[i]; return null; };
  DM.role = function (k) { for (var i = 0; i < DM.ROLES.length; i++) if (DM.ROLES[i].k === k) return DM.ROLES[i]; return null; };
  DM.stage = function (n) { return DM.STAGES[n - 1]; };
  DM.pendCat = function (k) { for (var i = 0; i < DM.PEND_CATS.length; i++) if (DM.PEND_CATS[i].k === k) return DM.PEND_CATS[i]; return null; };

  // Designation label {en, hi} for a key in the context of a project
  DM.desig = function (key, p) {
    var d = DM.DESIG[key]; if (!d) return { en: key, hi: key };
    var dep = p ? DM.dept(p.dept) : null, blk = p ? DM.block(p.block) : null;
    function fill(s, lang) { return s.replace("{d}", dep ? (lang === "hi" ? dep.short.hi : dep.short.en) : "").replace("{b}", blk ? blk[lang] : ""); }
    return { en: fill(d.en, "en"), hi: fill(d.hi, "hi") };
  };

  function inPoly(pt, pg) { var x = pt[1], y = pt[0], inside = false; for (var i = 0, j = pg.length - 1; i < pg.length; j = i++) { var xi = pg[i][1], yi = pg[i][0], xj = pg[j][1], yj = pg[j][0]; if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside; } return inside; }
  DM.inPoly = inPoly;
  function pointIn(blk) {
    var la = blk.poly.map(function (p) { return p[0]; }), lo = blk.poly.map(function (p) { return p[1]; });
    var minA = Math.min.apply(null, la), maxA = Math.max.apply(null, la), minO = Math.min.apply(null, lo), maxO = Math.max.apply(null, lo);
    for (var k = 0; k < 400; k++) { var pt = [rf(minA, maxA), rf(minO, maxO)]; if (inPoly(pt, blk.poly)) { var c = blk.center, dd = Math.hypot(pt[0] - c[0], pt[1] - c[1]); if (dd < 0.012) continue; return [+pt[0].toFixed(5), +pt[1].toFixed(5)]; } }
    return blk.center.slice();
  }

  // ---------- Status and calculations ----------
  DM.status = function (p) {
    if (p.stage <= 2) return "proposed";
    if (p.stage <= 4) return "approval";
    if (p.stage === 5) { var s5 = p.sf[5] || {}; if (!s5.agreementDate) return "tender"; if (!s5.commencementDate) return "notstarted"; return "ongoing"; }
    if (p.stage === 10) return (p.sf[10] && p.sf[10].handoverDate) ? "completed" : "handover";
    return "ongoing";
  };
  DM.isDelayed = function (p, today) {
    today = typeof today === "string" ? today : DM.todayISO();
    var st = DM.status(p);
    if (st !== "ongoing") return false;
    var s5 = p.sf[5] || {}; if (!s5.commencementDate || !s5.plannedCompletion) return false;
    if (p.physical >= 100) return false;
    if (today > s5.plannedCompletion) return true;
    var dur = diff(s5.commencementDate, s5.plannedCompletion), el = diff(s5.commencementDate, today);
    var exp = dur > 0 ? Math.min(100, el / dur * 100) : 0;
    return exp - p.physical > 25;
  };
  DM.dstatus = function (p) { return DM.isDelayed(p) ? "delayed" : DM.status(p); };
  DM.approved = function (p) { return p.stage > 4 || (p.sf[4] && !!p.sf[4].aaDate); };
  DM.amount = function (p) { return (p.sf[4] && p.sf[4].approvedAmount) || (p.sf[3] && p.sf[3].estAmount) || p.estimate; };
  DM.expenditure = function (p) { var t = 0; (p.payments || []).forEach(function (x) { if (x.status === "released") t += x.released; }); return t; };
  DM.finPct = function (p) { var a = DM.amount(p); return a ? Math.min(100, Math.round(DM.expenditure(p) / a * 1000) / 10) : 0; };
  DM.lastProgressDate = function (p) { var h = p.progress || []; return h.length ? h[h.length - 1].date : null; };
  DM.displayId = function (p) { return p.uid || p.reqNo; };

  // Average physical progress, one definition used everywhere: simple (unweighted) mean of physical % over works that
  // have commenced (ongoing, awaiting handover or completed), rounded to a whole percent.
  DM.avgPhysical = function (list) {
    var n = 0, t = 0;
    list.forEach(function (p) { var st = DM.status(p); if (st === "ongoing" || st === "handover" || st === "completed") { n++; t += p.physical || 0; } });
    return n ? Math.round(t / n) : 0;
  };
  DM.AVG_PHYS_DEF = { en: "Average physical progress = simple mean of physical % across works that have commenced (ongoing, awaiting handover, completed).", hi: "औसत भौतिक प्रगति = प्रारंभ हो चुके कार्यों (प्रगतिरत, हस्तांतरण लंबित, पूर्ण) के भौतिक % का साधारण औसत।" };
  DM.kpis = function (list, db) {
    var k = { total: list.length, approved: 0, ongoing: 0, completed: 0, pending: 0, delayed: 0, awaitApproval: 0, awaitTender: 0, notCommenced: 0, pendingInsp: 0, pendingInspActions: 0, awaitHandover: 0, amount: 0, approvedAmount: 0, expenditure: 0, physAvg: 0 };
    var ids = {}, physN = 0, physT = 0;
    list.forEach(function (p) {
      ids[p.id] = 1;
      var st = DM.status(p);
      if (DM.approved(p)) { k.approved++; k.approvedAmount += DM.amount(p); }
      k.amount += DM.amount(p);
      if (st === "ongoing") k.ongoing++;
      if (st === "completed") k.completed++;
      if (st === "proposed" || st === "approval") k.pending++;
      if (st === "approval") k.awaitApproval++;
      if (st === "tender") k.awaitTender++;
      if (st === "notstarted") k.notCommenced++;
      if (st === "handover") k.awaitHandover++;
      if (DM.isDelayed(p)) k.delayed++;
      k.expenditure += DM.expenditure(p);
      if (st === "ongoing" || st === "handover" || st === "completed") { physN++; physT += p.physical; }
    });
    (db ? db.inspections : []).forEach(function (i) { if (!ids[i.pid]) return; if (i.status === "scheduled") k.pendingInsp++; if (i.status === "action") k.pendingInspActions++; });
    k.physAvg = DM.avgPhysical(list);
    return k;
  };

  // Pendency items with ageing against SLA (scope item 5)
  DM.pendency = function (db, today) {
    today = today || DM.todayISO();
    var sla = db.sla, out = [];
    function add(cat, p, since, extra) { var age = Math.max(0, diff(since, today)); out.push({ cat: cat, pid: p.id, since: since, age: age, sla: sla[cat], over: age > sla[cat], extra: extra || null }); }
    db.projects.forEach(function (p) {
      var st = DM.status(p), s = p.sf, since = p.pendingSince ? p.pendingSince.slice(0, 10) : today;
      if (p.stage <= 2) add("approval", p, since);
      else if (p.stage === 3) add(s[3] && s[3].dprDate ? "ta" : "dpr", p, since);
      else if (p.stage === 4) add("aa", p, since);
      else if (p.stage === 5) {
        var s5 = s[5] || {};
        if (!s5.bidOpen) add("tender", p, s[4] && s[4].commDate || since);
        else if (!s5.agreementDate) add("agreement", p, s5.bidOpen);
        else if (!s5.commencementDate) add("commencement", p, s5.agreementDate);
      }
      if (st === "ongoing" && p.stage >= 5) { var lp = DM.lastProgressDate(p) || (s[5] && s[5].commencementDate); if (lp && diff(lp, today) > sla.progress) add("progress", p, lp); }
      (p.payments || []).forEach(function (x) { if (x.status === "pending") add("payment", p, x.date, x.no); });
      if (st === "handover") add("handover", p, (s[10] && s[10].completionDate) || since);
    });
    db.inspections.forEach(function (i) {
      var p = DM.byId(db, i.pid); if (!p) return;
      if (i.status === "scheduled" && i.date <= today) add("inspection", p, i.date, i.id);
      if (i.status === "action") add("inspaction", p, i.actionDate || i.date, i.id);
    });
    return out;
  };
  DM.byId = function (db, id) {
    var ix = db.__idx;
    if (!ix || ix.n !== db.projects.length || ix.src !== db.projects) { ix = { n: db.projects.length, src: db.projects, m: {} }; db.projects.forEach(function (p) { ix.m[p.id] = p; }); Object.defineProperty(db, "__idx", { value: ix, enumerable: false, configurable: true, writable: true }); }
    return ix.m[id] || null;
  };

  // ---------- Sample dataset generator ----------
  DM.generate = function () {
    rnd = mulberry32(20261013);
    var today = DM.todayISO(), fys = DM.FYS();
    var db = { meta: { version: 6, generated: new Date().toISOString(), anchor: today }, projects: [], contractors: [], inspections: [], users: [], loginHistory: [], activity: [], alerts: [], sla: {}, seq: {}, reqSeq: 0, inspSeq: 0 };
    DM.PEND_CATS.forEach(function (c) { db.sla[c.k] = c.sla; });

    // Contractors master (fictional firms, dummy PAN/GSTIN)
    var firms = [["Suryodaya Constructions", "सूर्योदय कंस्ट्रक्शंस"], ["Nilanchal Infra Projects", "नीलांचल इंफ्रा प्रोजेक्ट्स"], ["Shivam Buildcon", "शिवम बिल्डकॉन"], ["Karmabhumi Engineering Works", "कर्मभूमि इंजीनियरिंग वर्क्स"],
      ["Damodar Valley Civil Works", "दामोदर वैली सिविल वर्क्स"], ["Jal Jeevan Hydro Systems", "जल जीवन हाइड्रो सिस्टम्स"], ["Prakash Electricals & Solar", "प्रकाश इलेक्ट्रिकल्स एंड सोलर"], ["Gramin Nirman Sahyog Samiti", "ग्रामीण निर्माण सहयोग समिति"],
      ["Vasundhara Agro Infra", "वसुंधरा एग्रो इंफ्रा"], ["Shree Ganesh Builders", "श्री गणेश बिल्डर्स"], ["Chhotanagpur Road Developers", "छोटानागपुर रोड डेवलपर्स"], ["Medicare Equipment Suppliers", "मेडिकेयर इक्विपमेंट सप्लायर्स"],
      ["Sahyadri Structural Works", "सह्याद्रि स्ट्रक्चरल वर्क्स"], ["Kalyani Enterprises", "कल्याणी एंटरप्राइजेज"], ["Mahamaya Infratech", "महामाया इंफ्राटेक"]];
    var firmDepts = [["RWD", "BCD"], ["RWD", "RDSD"], ["BCD", "EDU", "HLT"], ["RWD", "BCD", "WCD"], ["RDSD", "RWD"], ["DWSD"], ["JBVNL"], ["RDSD", "WCD", "DWSD"], ["AGR", "RDSD"], ["BCD", "EDU", "WCD"], ["RWD"], ["HLT"], ["RWD", "BCD"], ["EDU", "WCD", "HLT", "DWSD"], ["DWSD", "BCD", "AGR"]];
    firms.forEach(function (f, i) {
      var n = pad(i + 1, 4);
      db.contractors.push({ id: "C" + pad(i + 1, 2), name: { en: f[0], hi: f[1] }, cls: pick(["Class I", "Class II", "Class III"]), regNo: "JH/SAMPLE/REG/" + n, pan: "AAAAA" + n + "A", gstin: "20AAAAA" + n + "A1Z" + (i % 9 + 1),
        phone: "98000 0" + pad(i + 1, 4), email: "contact" + (i + 1) + "@sample-firm.example", address: { en: pick(DM.BLOCKS).en + ", Ramgarh, Jharkhand", hi: "" }, depts: firmDepts[i], since: (2008 + ri(0, 12)) + "", status: i === 13 ? "watch" : "active" });
      var c = db.contractors[i]; c.address.hi = c.address.en.split(",")[0] === "Ramgarh" ? "रामगढ़, झारखंड" : DM.BLOCKS.filter(function (b) { return b.en === c.address.en.split(",")[0]; })[0].hi + ", रामगढ़, झारखंड";
    });
    function contractorFor(dep) { var c = db.contractors.filter(function (x) { return x.depts.indexOf(dep) >= 0; }); return pick(c.length ? c : db.contractors).id; }

    var N = 162;
    var fyW = [{ v: fys[0], w: 46 }, { v: fys[1], w: 62 }, { v: fys[2], w: 62 }];
    var blockW = [{ v: "RGH", w: 30 }, { v: "PTR", w: 31 }, { v: "MND", w: 32 }, { v: "GOL", w: 23 }, { v: "CTP", w: 22 }, { v: "DLM", w: 24 }];
    for (var i = 0; i < N; i++) {
      var fy = wpick(fyW).v, bcode = wpick(blockW).v, blk = DM.block(bcode), pan = pick(blk.panchayats), v = pick(pan.villages);
      var other = pick(pick(blk.panchayats).villages); if (other.en === v.en) other = pan.villages[(pan.villages.indexOf(v) + 1) % 3];
      var w = wpick(DM.WORKS);
      makeProject(db, { i: i, fy: fy, blk: blk, pan: pan, v: v, v2: other, w: w, today: today, contractorFor: contractorFor });
    }
    // Showcase project used in the demo script (deterministic): DMFT/RMG/<current FY>/MND/0042
    showcase(db, today, fys[2], contractorFor);
    // Demo coverage: Mandu (the block used in the demo script) always has a few overdue works under execution
    var mnd = db.projects.filter(function (p) { return p.block === "MND" && !p.featured && DM.status(p) === "ongoing" && p.physical < 100 && p.sf[5] && p.sf[5].commencementDate; });
    var lateN = mnd.filter(function (p) { return DM.isDelayed(p, today); }).length;
    mnd.forEach(function (p) { if (lateN >= 3 || DM.isDelayed(p, today)) return; var pc = addDays(today, -ri(12, 45)); if (pc > addDays(p.sf[5].commencementDate, 60)) { p.sf[5].plannedCompletion = pc; lateN++; } });
    genInspections(db, today);
    genUsers(db, today);
    genAlerts(db, today);
    rnd = Math.random;
    return db;
  };

  function nameOf(w, v, v2, blk) {
    return { en: w.en.replace("{v}", v.en).replace("{v2}", v2.en).replace("{b}", blk.en), hi: w.hi.replace("{v}", v.hi).replace("{v2}", v2.hi).replace("{b}", blk.hi) };
  }
  function fyRange(fy, today) { var a = +fy.slice(0, 4); var s = a + "-04-01", e = (a + 1) + "-03-31"; if (e > today) e = addDays(today, -12); return [s, e]; }

  function nextUid(db, fy, bcode) { var key = fy + "/" + bcode; db.seq[key] = (db.seq[key] || 0) + 1; return "DMFT/RMG/" + fy + "/" + bcode + "/" + pad(db.seq[key], 4); }
  DM.nextUid = nextUid;
  DM.nextReq = function (db, fy) { db.reqSeq = (db.reqSeq || 0) + 1; return "WR/RMG/" + fy + "/" + pad(db.reqSeq, 4); };

  function move(p, stage, action, fromKey, toKey, at, remarks) {
    p.movements.push({ id: p.movements.length + 1, ts: at, stage: stage, action: action, f: fromKey, t: toKey || null, r: remarks });
  }
  // Walk a stage's chain to completion; returns end timestamp date
  function runChain(p, stage, startDate, endDate, withReturn) {
    var ch = DM.CHAIN[stage], span = Math.max(2, diff(startDate, endDate)), n = ch.length, t = startDate;
    for (var j = 0; j < n - 1; j++) {
      t = addDays(startDate, span * (j + 1) / (n + (withReturn ? 1 : 0)));
      move(p, stage, "forward", ch[j], ch[j + 1], ts(t), pc("fw", DM.MOVE_REMARKS.fw));
      if (withReturn && j === n - 2) {
        var t2 = addDays(t, Math.max(1, span / (n + 2)));
        move(p, stage, "return", ch[j + 1], ch[j], ts(t2), pc("rt", DM.MOVE_REMARKS.rt));
        move(p, stage, "resubmit", ch[j], ch[j + 1], ts(addDays(t2, 2)), "rs0");
      }
    }
    move(p, stage, "approve", ch[n - 1], null, ts(endDate), pc("ap", DM.MOVE_REMARKS.ap));
  }
  // Partial chain for the current (pending) stage
  function partialChain(p, stage, startDate, today) {
    var ch = DM.CHAIN[stage], age = Math.max(0, diff(startDate, today));
    var idx = Math.min(ch.length - 1, Math.floor(rnd() * ch.length));
    for (var j = 0; j < idx; j++) {
      var t = addDays(startDate, age * (j + 1) / (idx + 1.5)), first = (j === 0 && stage === 1);
      move(p, stage, first ? "submit" : "forward", ch[j], ch[j + 1], ts(t), first ? "reg" : pc("fw", DM.MOVE_REMARKS.fw));
    }
    p.wf = { stage: stage, idx: idx, returnedFrom: null };
    p.pendingAt = ch[idx];
    p.pendingSince = idx > 0 ? p.movements[p.movements.length - 1].ts : ts(startDate, 10, 0);
  }

  function addDoc(p, cat, name, date, by, ext, versions) {
    var d = { id: "D" + (p.docs.length + 1), cat: cat, name: name, type: ext || "pdf", access: (cat === "photo" || cat === "aa" || cat === "ho") ? "public" : "internal", versions: [] };
    var vv = versions || 1;
    for (var k = 1; k <= vv; k++) d.versions.push({ v: k, date: addDays(date, (k - 1) * ri(3, 12)), by: by, size: ri(180, 4200) * 1024, note: k === 1 ? "up" : "rev" });
    p.docs.push(d);
  }

  function makeProject(db, o) {
    var today = o.today, w = o.w, blk = o.blk, dep = w.d;
    var rng = fyRange(o.fy, today);
    var span0 = Math.max(1, diff(rng[0], rng[1])), start = addDays(rng[0], (o.fy === DM.FYS()[2] ? Math.pow(rnd(), 0.7) : rnd()) * span0);
    if (o.i % 37 === 9) { o.fy = DM.FYS()[2]; start = addDays(today, -ri(2, 12)); }
    var est = Math.round(rf(w.a[0], w.a[1]) * 100) * 1000; // rupees, rounded to Rs 1,000
    var rec = pick(DM.RECOMMENDERS);
    var p = { id: "P" + pad(o.i + 1, 3), reqNo: DM.nextReq(db, o.fy), uid: null, fy: o.fy, block: blk.code, panchayat: o.pan.en, village: o.v.en, workKey: w.k, dept: dep, sector: w.s,
      name: nameOf(w, o.v, o.v2, blk), estimate: est, loc: pointIn(blk), stage: 1, sf: {}, movements: [], progress: [], payments: [], docs: [], wf: null, pendingAt: null, pendingSince: null, created: start };
    var recBy = { en: rec.en.replace("{p}", o.pan.en).replace("{b}", blk.en).replace("{v}", o.v.en), hi: rec.hi.replace("{p}", o.pan.hi).replace("{b}", blk.hi).replace("{v}", o.v.hi) };
    var bcodeL = blk.code;
    p.sf[1] = { block: { en: blk.en, hi: blk.hi }, panchayat: { en: o.pan.en, hi: o.pan.hi }, village: { en: o.v.en, hi: o.v.hi }, workType: w.t, workName: p.name, recBy: recBy, recDesig: recBy,
      letterNo: (100 + ri(1, 899)) + "/" + bcodeL + "/" + start.slice(0, 4), letterDate: start, letterFile: "Recommendation_" + p.reqNo.replace(/\//g, "-") + ".pdf" };
    addDoc(p, "rec", p.sf[1].letterFile, start, "deo", "pdf");

    var stuck = rnd() < 0.22, stuckStage = ri(2, 5);
    var dur = { 1: [8, 25], 2: [15, 45], 3: [20, 50], 4: [10, 30], 5: [35, 75] };
    var cur = start, stage = 1;
    while (stage <= 4) {
      var d = ri(dur[stage][0], dur[stage][1]); if (stuck && stage === stuckStage) d *= rf(2.2, 3.5);
      var end = addDays(cur, d);
      if (end > today) break;
      runChain(p, stage, cur, end, rnd() < 0.12);
      completeStage(db, p, stage, cur, end, o);
      cur = end; stage++;
    }
    if (stage <= 4) { p.stage = stage; partialStageFields(p, stage, cur, today); partialChain(p, stage, cur, today); db.projects.push(p); return p; }

    // Stage 5: execution
    var s5 = p.sf[5] = {};
    var aa = p.sf[4].aaDate;
    s5.tenderFloat = addDays(aa, ri(5, 15)); s5.tenderClose = addDays(s5.tenderFloat, ri(15, 21)); s5.bidOpen = addDays(s5.tenderClose, ri(1, 4));
    var stall5 = stuck && stuckStage === 5;
    var agrD = addDays(s5.bidOpen, ri(10, 25) * (stall5 ? 3 : 1));
    if (s5.tenderFloat > today) { delete s5.tenderFloat; delete s5.tenderClose; delete s5.bidOpen; return pend5(); }
    if (s5.tenderClose > today) { delete s5.tenderClose; delete s5.bidOpen; return pend5(); }
    if (s5.bidOpen > today) { delete s5.bidOpen; return pend5(); }
    addDoc(p, "tender", "NIT_and_Bid_Document_" + p.uid.split("/").slice(-2).join("-") + ".pdf", s5.tenderFloat, "ee", "pdf");
    if (agrD > today) return pend5();
    s5.agreementNo = "AGR/" + DM.dept(dep).code + "/" + agrD.slice(0, 4) + "/" + ri(10, 199);
    s5.agreementDate = agrD;
    s5.agreementAmount = Math.round(p.sf[4].approvedAmount * rf(0.88, 0.99) / 1000) * 1000;
    s5.contractor = o.contractorFor(dep);
    addDoc(p, "agr", "Agreement_" + s5.agreementNo.replace(/\//g, "-") + ".pdf", agrD, "ee", "pdf");
    var com = addDays(agrD, ri(5, 20) * (stall5 ? 3 : 1));
    s5.shilanyasDate = addDays(agrD, ri(2, 8));
    if (s5.shilanyasDate > today) delete s5.shilanyasDate;
    var execDur = ri(w.du[0], w.du[1]);
    s5.plannedCompletion = addDays(agrD, execDur + 15);
    if (com > today) return pend5();
    s5.commencementDate = com;
    runChain(p, 5, aa, com, false);

    // Physical progress
    var speed = rnd() < 0.24 ? rf(0.45, 0.7) : rf(0.9, 1.15);
    var full = diff(com, s5.plannedCompletion), physToday = Math.min(100, Math.round(diff(com, today) / full * 100 * speed));
    var dDone = physToday >= 100 ? addDays(com, full / speed) : null;
    var t = com, lastPct = 0, k = 0;
    while (true) {
      t = addDays(t, ri(14, 32)); if (t > today) break;
      if (dDone && t > dDone) t = dDone;
      var pct = Math.min(100, Math.round(diff(com, t) / full * 100 * speed));
      if (pct <= lastPct) { if (t === dDone) break; continue; }
      lastPct = pct; k++;
      p.progress.push({ date: t, pct: pct, remark: "pr" + Math.min(5, Math.floor(pct / 20)), by: "je", lat: +(p.loc[0] + rf(-0.0008, 0.0008)).toFixed(5), lng: +(p.loc[1] + rf(-0.0008, 0.0008)).toFixed(5), time: pad(ri(9, 16), 2) + ":" + pad(ri(0, 59), 2), photo: true, verified: rnd() < 0.8 });
      if (pct >= 100) break;
    }
    // stale updates for some ongoing projects (progress update pending)
    if (!dDone && rnd() < 0.18 && p.progress.length > 2) { p.progress.pop(); p.progress.pop(); }
    p.physical = p.progress.length ? p.progress[p.progress.length - 1].pct : 0;
    if (p.progress.length) addDoc(p, "photo", "Site_photos_" + p.progress[p.progress.length - 1].date + ".zip", p.progress[p.progress.length - 1].date, "je", "zip");

    // Payments: instalments at 30/60/90/100 percent
    var share = [0.3, 0.3, 0.3, 0.1], marks = [30, 60, 90, 100], amt = s5.agreementAmount, pendingPay = false;
    marks.forEach(function (m, idx) {
      var hit = p.progress.filter(function (h) { return h.pct >= m; })[0]; if (!hit) return;
      var rd = addDays(hit.date, ri(3, 10)); if (rd > today) return;
      var relD = addDays(rd, ri(9, 30));
      var pay = { no: idx + 1, date: rd, letter: "PR/" + DM.dept(dep).code + "/" + rd.slice(0, 4) + "/" + ri(100, 999), amount: Math.round(amt * share[idx]), status: "pending", released: 0, releasedOn: null, uc: null };
      var recent = diff(rd, today) < 40;
      if (relD <= today && !(recent && rnd() < 0.55)) { pay.status = "released"; pay.released = pay.amount; pay.releasedOn = relD; pay.uc = diff(relD, today) > 30 ? { status: "submitted", date: addDays(relD, ri(15, 28)) } : { status: "pending", date: null }; }
      else pendingPay = true;
      p.payments.push(pay);
      addDoc(p, "payreq", "Payment_Requisition_" + (idx + 1) + ".pdf", rd, "ee", "pdf");
      if (pay.status === "released") addDoc(p, "fin", "Payment_Release_Order_" + (idx + 1) + ".pdf", relD, "accounts", "pdf");
    });

    if (dDone && p.physical >= 100) {
      var s10 = p.sf[10] = { completionStatus: { en: "Completed", hi: "पूर्ण" }, completionDate: p.progress[p.progress.length - 1].date };
      var ho = addDays(s10.completionDate, ri(15, 60));
      runChain(p, 6, com, s10.completionDate, false);
      // Final payment, final inspection and financial closure are cleared (stages 7-9) before handover (stage 10)
      var cd = s10.completionDate, room = Math.max(3, diff(cd, today)), step = Math.max(1, Math.min(6, Math.floor(room / 4)));
      var t7 = addDays(cd, step), t8 = addDays(t7, step), t9 = addDays(t8, step);
      if (t9 > today) { t7 = cd; t8 = cd; t9 = cd; }
      runChain(p, 7, cd, t7, false); runChain(p, 8, t7, t8, false); runChain(p, 9, t8, t9, false);
      s10.closureDate = t9;
      if (ho <= t9) ho = addDays(t9, ri(6, 20));
      if (ho <= today && !(diff(s10.completionDate, today) < 75 && rnd() < 0.5)) {
        p.payments.forEach(function (x) { if (x.status === "pending") { x.status = "released"; x.released = x.amount; x.releasedOn = addDays(x.date, 12); x.uc = { status: "submitted", date: addDays(x.date, 30) }; } });
        s10.handoverDate = ho; s10.handoverDept = { en: DM.dept(dep).en + " / " + o.pan.en + " Panchayat", hi: DM.dept(dep).hi + " / " + o.pan.hi + " पंचायत" };
        s10.handoverLetter = "HO/" + DM.dept(dep).code + "/" + ho.slice(0, 4) + "/" + ri(10, 99); s10.finalDocs = "Completion_Certificate_and_As-built.pdf";
        runChain(p, 10, t9, ho, false);
        addDoc(p, "ho", "Handover_" + s10.handoverLetter.replace(/\//g, "-") + ".pdf", ho, "ee", "pdf");
        p.stage = 10; p.wf = null; p.pendingAt = null; p.pendingSince = null;
      } else { p.stage = 10; partialChain(p, 10, t9, today); }
    } else {
      // ongoing: stage pointer reflects what is pending now
      var st = 6, rr = rnd();
      if (pendingPay) st = 7;
      else if (rr < 0.3) st = 8;
      else if (p.payments.length && rr < 0.55) st = 9;
      if (st === 8) p.needInsp = true;
      p.stage = st;
      var since = st === 7 ? p.payments.filter(function (x) { return x.status === "pending"; })[0].date : (DM.lastProgressDate(p) || com);
      partialChain(p, st, since, today);
    }
    finishFields(p, today);
    db.projects.push(p); return p;

    function pend5() { p.stage = 5; partialChain(p, 5, p.sf[4].commDate || aa, today); p.physical = 0; db.projects.push(p); return p; }
  }

  function completeStage(db, p, stage, from, to, o) {
    var s = p.sf;
    if (stage === 1) return;
    if (stage === 2) {
      var gs = addDays(from, ri(2, 8));
      s[2] = { gramSabhaDate: gs, gramSabhaFile: "Gram_Sabha_Resolution_" + p.village.replace(/ /g, "_") + ".pdf", gcDate: addDays(to, -ri(3, 6)), mcDate: addDays(to, -ri(0, 2)),
        mcItem: { en: "Agenda item " + ri(3, 28) + " - approved for DPR", hi: "एजेंडा मद " + ri(3, 28) + " - डीपीआर हेतु स्वीकृत" }, procFile: "MC_Proceedings_" + to + ".pdf" };
      addDoc(p, "gs", s[2].gramSabhaFile, gs, "deo", "pdf");
      addDoc(p, "proc", s[2].procFile, to, "cell", "pdf");
    }
    if (stage === 3) {
      var dprD = addDays(from, Math.max(3, diff(from, to) - ri(4, 10)));
      var estA = Math.round(p.estimate * rf(0.95, 1.08) / 1000) * 1000;
      s[3] = { dprDept: { en: DM.dept(p.dept).en, hi: DM.dept(p.dept).hi }, dprDate: dprD, dprFile: "DPR_" + p.reqNo.replace(/\//g, "-") + ".pdf", estAmount: estA, taNo: "TA/" + DM.dept(p.dept).code + "/" + to.slice(0, 4) + "/" + ri(10, 300), taDate: to, taFile: "Technical_Approval_" + to + ".pdf" };
      addDoc(p, "dpr", s[3].dprFile, dprD, "ee", "pdf", rnd() < 0.45 ? 2 : 1);
      addDoc(p, "ta", s[3].taFile, to, "ee", "pdf");
    }
    if (stage === 4) {
      p.uid = nextUid(db, p.fy, p.block);
      s[4] = { aaNo: "AA/DMFT/" + to.slice(0, 4) + "/" + ri(100, 999), aaDate: to, approvedAmount: s[3].estAmount, fy: p.fy, uid: p.uid, commDate: addDays(to, ri(1, 4)), aaFile: "Administrative_Approval_" + p.uid.split("/").slice(-2).join("-") + ".pdf" };
      if (s[4].commDate > DM.todayISO()) s[4].commDate = to;
      addDoc(p, "aa", s[4].aaFile, to, "dpo", "pdf");
    }
  }
  function partialStageFields(p, stage, from, today) {
    if (stage === 3 && rnd() < 0.5) { var dd = addDays(from, ri(5, 20)); if (dd < today) { p.sf[3] = { dprDept: { en: DM.dept(p.dept).en, hi: DM.dept(p.dept).hi }, dprDate: dd, dprFile: "DPR_" + p.reqNo.replace(/\//g, "-") + ".pdf", estAmount: p.estimate }; addDoc(p, "dpr", p.sf[3].dprFile, dd, "ee", "pdf"); } }
    if (stage === 2 && rnd() < 0.5) { var g = addDays(from, ri(2, 8)); if (g < today) { p.sf[2] = { gramSabhaDate: g, gramSabhaFile: "Gram_Sabha_Resolution_" + p.village.replace(/ /g, "_") + ".pdf" }; addDoc(p, "gs", p.sf[2].gramSabhaFile, g, "deo", "pdf"); } }
    p.physical = 0;
  }
  function finishFields(p, today) {
    var lp = p.progress[p.progress.length - 1];
    p.sf[6] = { physicalPct: p.physical, lastUpdate: lp ? lp.date : null, photoCount: p.progress.length * 3, fieldObs: lp ? lp.remark : null };
    var pend = p.payments.filter(function (x) { return x.status === "pending"; })[0], lastPay = p.payments[p.payments.length - 1];
    if (lastPay) p.sf[7] = { reqDate: (pend || lastPay).date, reqLetter: (pend || lastPay).letter, reqAmount: (pend || lastPay).amount, reqDocs: "Bill_and_MB_extract.pdf" };
    var rel = p.payments.filter(function (x) { return x.status === "released"; });
    if (rel.length) p.sf[9] = { expenditure: DM.expenditure(p), lastPayDate: rel[rel.length - 1].releasedOn, ucStatus: rel[rel.length - 1].uc && rel[rel.length - 1].uc.status === "submitted" ? { en: "Submitted", hi: "जमा" } : { en: "Pending", hi: "लंबित" }, finPct: DM.finPct(p) };
  }

  function showcase(db, today, fy, contractorFor) {
    // Find or build a Mandu drinking-water project in the current FY and give it a rich, coherent history
    var blk = DM.block("MND"), pan = blk.panchayats[0], v = pan.villages[0], w = DM.work("mvs");
    var base = DM.util.parse(today); base.setDate(base.getDate() - 182); var start = iso(base);
    if (DM.fyOf(start) !== fy) start = fy.slice(0, 4) + "-04-06";
    var saved = rnd; var r2 = mulberry32(42); rnd = r2;
    var p = { id: "P" + pad(db.projects.length + 1, 3), reqNo: DM.nextReq(db, fy), uid: null, fy: fy, block: "MND", panchayat: pan.en, village: v.en, workKey: "mvs", dept: "DWSD", sector: "water",
      name: { en: "Solar-powered mini water supply scheme, Kuju (Tola Bhitri)", hi: "सौर ऊर्जा आधारित लघु जलापूर्ति योजना, कुजू (टोला भीतरी)" }, estimate: 3865000, loc: [23.7342, 85.5129], stage: 1, sf: {}, movements: [], progress: [], payments: [], docs: [], featured: true, created: start };
    var recBy = { en: "Mukhiya, Kuju Panchayat", hi: "मुखिया, कुजू पंचायत" };
    p.sf[1] = { block: { en: blk.en, hi: blk.hi }, panchayat: { en: pan.en, hi: pan.hi }, village: { en: v.en, hi: v.hi }, workType: w.t, workName: p.name, recBy: recBy, recDesig: recBy, letterNo: "214/KUJU/" + start.slice(0, 4), letterDate: start, letterFile: "Recommendation_Kuju_Panchayat.pdf" };
    addDoc(p, "rec", p.sf[1].letterFile, start, "deo", "pdf");
    var d1 = addDays(start, 9), d2 = addDays(d1, 21), d3 = addDays(d2, 26), d4 = addDays(d3, 14);
    runChain(p, 1, start, d1, false); completeStage(db, p, 1, start, d1, {});
    runChain(p, 2, d1, d2, false); completeStage(db, p, 2, d1, d2, {});
    runChain(p, 3, d2, d3, true); completeStage(db, p, 3, d2, d3, {});
    runChain(p, 4, d3, d4, false);
    p.uid = "DMFT/RMG/" + fy + "/MND/0042";
    p.sf[3].estAmount = 3865000;
    p.sf[4] = { aaNo: "AA/DMFT/" + d4.slice(0, 4) + "/611", aaDate: d4, approvedAmount: 3865000, fy: fy, uid: p.uid, commDate: addDays(d4, 2), aaFile: "Administrative_Approval_MND-0042.pdf" };
    addDoc(p, "aa", p.sf[4].aaFile, d4, "dpo", "pdf");
    var s5 = p.sf[5] = { tenderFloat: addDays(d4, 6), tenderClose: addDays(d4, 24), bidOpen: addDays(d4, 26), agreementNo: "AGR/DWSD/" + d4.slice(0, 4) + "/87", agreementDate: addDays(d4, 38), agreementAmount: 3712000, contractor: "C06" };
    s5.shilanyasDate = addDays(s5.agreementDate, 4); s5.commencementDate = addDays(s5.agreementDate, 9); s5.plannedCompletion = addDays(s5.agreementDate, 150);
    addDoc(p, "tender", "NIT_and_Bid_Document_MND-0042.pdf", s5.tenderFloat, "ee", "pdf");
    addDoc(p, "agr", "Agreement_AGR-DWSD-87.pdf", s5.agreementDate, "ee", "pdf");
    runChain(p, 5, d4, s5.commencementDate, false);
    var pcts = [8, 19, 31, 44, 52], t = s5.commencementDate;
    pcts.forEach(function (pc, i) { t = addDays(t, i === 0 ? 12 : 16); if (t > today) return; p.progress.push({ date: t, pct: pc, remark: "pr" + Math.min(5, Math.floor(pc / 20)), by: "je", lat: +(p.loc[0] + (i - 2) * 0.0002).toFixed(5), lng: +(p.loc[1] + (2 - i) * 0.00015).toFixed(5), time: "1" + i + ":2" + i, photo: true, verified: i < 4 }); });
    p.physical = p.progress.length ? p.progress[p.progress.length - 1].pct : 0;
    var hit = p.progress.filter(function (h) { return h.pct >= 30; })[0];
    if (hit) {
      p.payments.push({ no: 1, date: addDays(hit.date, 4), letter: "PR/DWSD/" + hit.date.slice(0, 4) + "/412", amount: 1113600, status: "released", released: 1113600, releasedOn: addDays(hit.date, 15), uc: { status: "pending", date: null } });
      addDoc(p, "payreq", "Payment_Requisition_1.pdf", addDays(hit.date, 4), "ee", "pdf");
      addDoc(p, "fin", "Payment_Release_Order_1.pdf", addDays(hit.date, 15), "accounts", "pdf");
    }
    var lastP = p.progress[p.progress.length - 1];
    var reqD = lastP ? addDays(lastP.date, 3) : today; if (reqD > today) reqD = today;
    p.payments.push({ no: p.payments.length + 1, date: reqD, letter: "PR/DWSD/" + reqD.slice(0, 4) + "/538", amount: 1113600, status: "pending", released: 0, releasedOn: null, uc: null });
    addDoc(p, "payreq", "Payment_Requisition_" + p.payments.length + ".pdf", reqD, "ee", "pdf");
    addDoc(p, "photo", "Site_photos_" + (lastP ? lastP.date : today) + ".zip", lastP ? lastP.date : today, "je", "zip");
    p.stage = 7;
    p.movements.push({ id: p.movements.length + 1, ts: ts(reqD, 11, 5), stage: 7, action: "submit", f: "ee", t: "accounts", r: "sc7" });
    p.wf = { stage: 7, idx: 1, returnedFrom: null }; p.pendingAt = "accounts"; p.pendingSince = ts(reqD, 11, 5);
    finishFields(p, today);
    p.contractorNote = null;
    rnd = saved;
    db.projects.push(p);
    db.showcase = p.id;
  }

  function genInspections(db, today) {
    var teams = [["insp", "ae"], ["insp", "je"], ["insp", "ae", "je"]];
    db.projects.forEach(function (p) {
      var s5 = p.sf[5]; if (!s5 || !s5.commencementDate) return;
      var end = (p.sf[10] && p.sf[10].completionDate) || today, d = addDays(s5.commencementDate, ri(30, 55));
      var list = [];
      while (d <= end) { list.push(d); d = addDays(d, ri(80, 130)); }
      list.forEach(function (dt, j) {
        var last = j === list.length - 1;
        var st0 = DM.status(p), hasDef = rnd() < (last && st0 === "ongoing" ? 0.45 : 0.3);
        var ins = { id: "INS-" + pad(++db.inspSeq, 4), pid: p.id, date: dt, team: (pick(teams)),
          checklist: DM.CHECKLIST.map(function (c, ci) { return !(hasDef && ci === (j % 5)); }), photos: 3,
          observation: pc("ob", DM.OBS_OK), deficiency: hasDef ? pc("df", DM.DEFICIENCIES) : null, assignedTo: hasDef ? "ee" : null,
          dueDate: hasDef ? addDays(dt, 15) : null, compliance: null, verification: null, reinspection: null, status: "closed", reportFile: "Inspection_Report_" + dt + ".pdf", lat: p.loc[0], lng: p.loc[1] };
        if (hasDef) {
          if (last && st0 === "ongoing" && rnd() < 0.75) { ins.status = "action"; ins.actionDate = dt; if (rnd() < 0.4) { ins.compliance = { date: addDays(dt, ri(5, 12)), file: "Compliance_Report.pdf", note: "cmp" }; if (ins.compliance.date > today) ins.compliance = null; } }
          else { ins.compliance = { date: addDays(dt, ri(5, 12)), file: "Compliance_Report.pdf", note: "cmp" }; ins.verification = { date: addDays(ins.compliance.date, ri(2, 7)), result: "verified", by: "insp" }; ins.reinspection = rnd() < 0.5 ? addDays(ins.verification.date, 1) : null; }
        }
        db.inspections.push(ins);
        p.docs.push({ id: "D" + (p.docs.length + 1), cat: "insp", name: ins.reportFile, type: "pdf", access: "internal", versions: [{ v: 1, date: dt, by: "insp", size: ri(300, 1800) * 1024, note: "up" }] });
      });
      var st = DM.status(p);
      if (st === "ongoing" && (p.needInsp || rnd() < 0.25)) {
        delete p.needInsp;
        var nd = addDays(today, ri(-25, 12));
        db.inspections.push({ id: "INS-" + pad(++db.inspSeq, 4), pid: p.id, date: nd, team: ["insp", "ae"], checklist: DM.CHECKLIST.map(function () { return null; }), photos: 0, observation: null, deficiency: null, assignedTo: null, dueDate: null, compliance: null, verification: null, reinspection: null, status: "scheduled", reportFile: null, lat: p.loc[0], lng: p.loc[1] });
      }
      var li = db.inspections.filter(function (x) { return x.pid === p.id && x.status !== "scheduled"; });
      if (li.length) { var l = li[li.length - 1]; p.sf[8] = { inspDate: l.date, inspReport: l.reportFile, findings: l.deficiency || l.observation, actionTaken: l.compliance ? l.compliance.note : "na", pendingActions: li.filter(function (x) { return x.status === "action"; }).length }; }
    });
  }

  function genUsers(db, today) {
    var U = [["district", "ddc.ramgarh", "ddc", null, null], ["district", "dc.ramgarh", "dc", null, null], ["dmftcell", "dmftcell.rmg", "cell", null, null], ["dmftcell", "accounts.dmft", "accounts", null, null], ["nodal", "nodal.dmft", "nodal", null, null],
      ["senior", "dpo.ramgarh", "dpo", null, null], ["exec", "ee.rwd.rmg", "ee", "RWD", null], ["exec", "ee.dwsd.rmg", "ee", "DWSD", null], ["exec", "ee.bcd.rmg", "ee", "BCD", null], ["exec", "ee.rdsd.rmg", "ee", "RDSD", null],
      ["field", "je.mandu", "je", "RWD", "MND"], ["field", "je.patratu", "je", "DWSD", "PTR"], ["field", "ae.gola", "ae", "BCD", "GOL"], ["field", "insp.team1", "insp", null, null], ["deo", "deo.dmft", "deo", null, null], ["deo", "deo.dmft2", "deo", null, null],
      ["monitor", "mis.dpo", "mis", null, null], ["admin", "sysadmin", "sysadmin", null, null]];
    U.forEach(function (u, i) {
      var fake = { dept: u[3], block: u[4] };
      var dsg = DM.desig(u[2], fake);
      if (u[4]) { dsg = { en: dsg.en + " (" + DM.block(u[4]).en + ")", hi: dsg.hi + " (" + DM.block(u[4]).hi + ")" }; }
      db.users.push({ id: "U" + pad(i + 1, 2), role: u[0], username: u[1], desig: dsg, dept: u[3], block: u[4], mobile: "98XXXXXX" + pad(10 + i, 2), email: u[1].replace(/\./g, "-") + "@sample.gov.example", twoFA: true, status: i === 15 ? "locked" : "active", lastLogin: ts(addDays(today, -ri(0, 4))) });
    });
    var ips = ["10.24.8.", "10.24.12.", "117.247.", "10.24.3."], br = ["Chrome 141 / Windows", "Edge 141 / Windows", "Chrome / Android", "Firefox 143 / Windows"];
    for (var k = 0; k < 46; k++) {
      var u = pick(db.users), d = addDays(today, -ri(0, 13)), fail = rnd() < 0.16;
      db.loginHistory.push({ ts: ts(d, ri(8, 19)), user: u.username, role: u.role, ip: pick(ips) + ri(2, 250), device: pick(br), result: fail ? (rnd() < 0.5 ? "fail-pass" : "fail-otp") : "ok" });
    }
    db.loginHistory.push({ ts: ts(addDays(today, -1), 9, 12), user: "deo.dmft2", role: "deo", ip: "117.247.61.20", device: "Chrome / Android", result: "fail-pass" });
    db.loginHistory.push({ ts: ts(addDays(today, -1), 9, 14), user: "deo.dmft2", role: "deo", ip: "117.247.61.20", device: "Chrome / Android", result: "locked" });
    db.loginHistory.sort(function (a, b) { return a.ts < b.ts ? 1 : -1; });
    // Activity log from recent file movements
    var mv = [];
    db.projects.forEach(function (p) { p.movements.forEach(function (m) { if (diff(m.ts.slice(0, 10), today) <= 14) mv.push({ ts: m.ts, pid: p.id, m: m }); }); });
    mv.sort(function (a, b) { return a.ts < b.ts ? 1 : -1; });
    mv.slice(0, 60).forEach(function (x) { db.activity.push({ ts: x.ts, user: x.m.f, action: x.m.action, pid: x.pid, stage: x.m.stage }); });
  }

  DM.ALERT_TYPES = {
    approval: { en: "Approval pending", hi: "स्वीकृति लंबित" }, file: { en: "File pending", hi: "फ़ाइल लंबित" }, notstarted: { en: "Work not started", hi: "कार्य प्रारंभ नहीं" },
    progress: { en: "Progress not updated", hi: "प्रगति अद्यतन नहीं" }, inspection: { en: "Inspection pending", hi: "निरीक्षण लंबित" }, payment: { en: "Payment pending", hi: "भुगतान लंबित" },
    duesoon: { en: "Completion date approaching", hi: "पूर्णता तिथि निकट" }, delayed: { en: "Project delayed", hi: "परियोजना विलंबित" }, handover: { en: "Handover pending", hi: "हस्तांतरण लंबित" }
  };
  DM.CAT_TO_ALERT = { approval: "approval", dpr: "file", ta: "approval", aa: "approval", tender: "file", agreement: "file", commencement: "notstarted", progress: "progress", inspection: "inspection", inspaction: "inspection", payment: "payment", handover: "handover" };

  function genAlerts(db, today) {
    var items = DM.pendency(db, today).filter(function (x) { return x.over; });
    items.sort(function (a, b) { return b.age - a.age; });
    var chans = ["email", "sms", "whatsapp"], n = 0;
    items.slice(0, 26).forEach(function (it) {
      var p = DM.byId(db, it.pid), to = p.pendingAt || "ee";
      chans.forEach(function (c, ci) { if (c === "whatsapp" && it.age - it.sla < 10) return; db.alerts.push({ id: "AL" + pad(++n, 4), ts: ts(addDays(today, -ri(0, 6)), 9, 30 + ci), channel: c, type: DM.CAT_TO_ALERT[it.cat], pid: p.id, to: to, escalated: it.age > it.sla * 2, status: "sent" }); });
    });
    db.projects.forEach(function (p) {
      if (DM.status(p) !== "ongoing") return; var pc = p.sf[5] && p.sf[5].plannedCompletion; if (!pc) return;
      var dl = diff(today, pc);
      if (dl >= 0 && dl <= 30) db.alerts.push({ id: "AL" + pad(++n, 4), ts: ts(addDays(today, -ri(0, 3)), 9, 15), channel: "email", type: "duesoon", pid: p.id, to: "ee", escalated: false, status: "sent" });
      else if (DM.isDelayed(p) && rnd() < 0.5) db.alerts.push({ id: "AL" + pad(++n, 4), ts: ts(addDays(today, -ri(0, 5)), 9, 20), channel: "sms", type: "delayed", pid: p.id, to: "ee", escalated: true, status: "sent" });
    });
    db.alerts.sort(function (a, b) { return a.ts < b.ts ? 1 : -1; });
  }
})();
