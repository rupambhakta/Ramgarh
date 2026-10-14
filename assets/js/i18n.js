/* DMFT Work Monitoring Portal, Ramgarh - bilingual strings (English is the key, Hindi in Unicode Devanagari).
   Views add their own strings with App.addHi({...}). */
(function () {
  "use strict";
  var App = window.App = window.App || {};
  App.HI = {};
  App.missingHi = {};
  App.addHi = function (o) { for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) App.HI[k] = o[k]; };
  App.lang = "en";
  App.t = function (s) {
    if (App.lang !== "hi") return s;
    if (Object.prototype.hasOwnProperty.call(App.HI, s)) return App.HI[s];
    App.missingHi[s] = 1; return s;
  };
  // Format helper: App.tf("{n} projects", {n: 5})
  App.tf = function (s, o) { var r = App.t(s); for (var k in o) r = r.split("{" + k + "}").join(o[k]); return r; };
  App.L = function (o) { if (o == null) return ""; if (typeof o === "string") return o; return (App.lang === "hi" ? o.hi : o.en) || o.en || ""; };

  App.addHi({
    // Shell and GIGW
    "Skip to main content": "मुख्य सामग्री पर जाएँ", "Screen Reader Access": "स्क्रीन रीडर एक्सेस", "Government of Jharkhand": "झारखंड सरकार",
    "District Administration, Ramgarh": "जिला प्रशासन, रामगढ़", "Decrease text size": "टेक्स्ट का आकार घटाएँ", "Reset text size": "टेक्स्ट का आकार सामान्य करें",
    "Increase text size": "टेक्स्ट का आकार बढ़ाएँ", "High contrast": "उच्च कंट्रास्ट", "Language": "भाषा",
    "DMFT Work Monitoring Portal, Ramgarh": "डीएमएफटी कार्य अनुश्रवण पोर्टल, रामगढ़",
    "District Mineral Foundation Trust, Ramgarh": "जिला खनिज फाउंडेशन ट्रस्ट, रामगढ़",
    "District Mineral Foundation Trust": "जिला खनिज फाउंडेशन ट्रस्ट",
    "Government of Jharkhand | PMKKKY 2024": "झारखंड सरकार | पीएमकेकेकेवाई 2024",
    "Bid prototype for the District Level Proposal Evaluation Committee, Ramgarh. All projects, firms, amounts and records shown are sample data for demonstration.": "जिला स्तरीय प्रस्ताव मूल्यांकन समिति, रामगढ़ हेतु बिड प्रोटोटाइप। प्रदर्शित सभी परियोजनाएँ, फर्म, राशि एवं अभिलेख प्रदर्शन हेतु नमूना डाटा हैं।",
    "Sample data for demonstration": "प्रदर्शन हेतु नमूना डाटा", "Sample data": "नमूना डाटा",
    "Search project ID, name, village": "परियोजना आईडी, नाम, ग्राम खोजें", "Search": "खोजें",
    "Home": "मुख पृष्ठ", "Public Dashboard": "सार्वजनिक डैशबोर्ड", "Projects": "परियोजनाएँ", "Project Map": "परियोजना मानचित्र",
    "Completed Works": "पूर्ण कार्य", "Help": "सहायता", "Officer Login": "अधिकारी लॉगिन", "Login": "लॉगिन", "Logout": "लॉगआउट",
    "Main": "मुख्य", "Monitoring": "अनुश्रवण", "Administration": "प्रशासन", "Analytics": "विश्लेषण",
    "Dashboard": "डैशबोर्ड", "All Projects": "सभी परियोजनाएँ", "New Work Request": "नया कार्य अनुरोध", "Contractors": "संवेदक",
    "Inspections": "निरीक्षण", "GIS Map": "जीआईएस मानचित्र", "Delay & Pendency": "विलंब एवं लंबितता", "Ask DMFT AI": "आस्क डीएमएफटी एआई",
    "Reports & MIS": "रिपोर्ट एवं एमआईएस", "Data Import": "डाटा आयात", "Users & Roles": "उपयोगकर्ता एवं भूमिकाएँ", "Field App": "फील्ड ऐप",
    "Signed in as": "लॉगिन उपयोगकर्ता", "Jurisdiction": "क्षेत्राधिकार", "Session": "सत्र",
    "Auto sign-out after 15 min idle": "15 मिनट निष्क्रियता पर स्वतः लॉगआउट",
    "Your session is about to expire": "आपका सत्र समाप्त होने वाला है",
    "For security, you will be signed out after 15 minutes of inactivity.": "सुरक्षा हेतु 15 मिनट की निष्क्रियता के बाद आप स्वतः लॉगआउट हो जाएँगे।",
    "Stay signed in": "लॉगिन बनाए रखें", "Session expired. Please sign in again.": "सत्र समाप्त। कृपया पुनः लॉगिन करें।",
    "Reset demo data": "डेमो डाटा रीसेट करें", "Demo data reset to the original sample set.": "डेमो डाटा मूल नमूना सेट पर रीसेट किया गया।",
    "Reset all demo changes and restore the original sample data?": "सभी डेमो परिवर्तन हटाकर मूल नमूना डाटा पुनः स्थापित करें?",
    "Reset": "रीसेट", "Cancel": "रद्द करें", "Close": "बंद करें", "Save": "सहेजें", "Submit": "जमा करें", "Apply": "लागू करें", "Clear": "साफ़ करें",
    "Export Excel": "एक्सेल निर्यात", "Export PDF": "पीडीएफ निर्यात", "Print / PDF": "प्रिंट / पीडीएफ", "Download": "डाउनलोड", "Upload": "अपलोड", "View": "देखें", "Edit": "संपादित करें",
    "Back": "वापस", "Next": "आगे", "Previous": "पिछला", "Open": "खोलें", "All": "सभी", "Yes": "हाँ", "No": "नहीं", "Total": "कुल", "Actions": "कार्रवाई",
    "Showing {a}-{b} of {n}": "{n} में से {a}-{b} प्रदर्शित", "No records match the selected filters.": "चयनित फ़िल्टर से कोई रिकॉर्ड मेल नहीं खाता।",
    // Footer
    "Website Policies": "वेबसाइट नीतियाँ", "Terms & Conditions": "नियम एवं शर्तें", "Privacy Policy": "गोपनीयता नीति", "Copyright Policy": "कॉपीराइट नीति",
    "Hyperlinking Policy": "हाइपरलिंकिंग नीति", "Accessibility Statement": "सुलभता विवरण", "Sitemap": "साइटमैप", "Contact Us": "संपर्क करें", "Feedback": "प्रतिक्रिया", "FAQ": "सामान्य प्रश्न",
    "Quick Links": "त्वरित लिंक", "Policies": "नीतियाँ", "Related Sites": "संबंधित साइटें",
    "Ministry of Mines - PMKKKY": "खान मंत्रालय - पीएमकेकेकेवाई", "District Ramgarh": "जिला रामगढ़",
    "Content owned and maintained by DMFT, Ramgarh": "सामग्री का स्वामित्व एवं रखरखाव: डीएमएफटी, रामगढ़",
    "Working prototype submitted by Nevaeh Technology Pvt. Ltd.": "नेवाह टेक्नोलॉजी प्रा. लि. द्वारा प्रस्तुत कार्यशील प्रोटोटाइप",
    "Last updated": "अंतिम अद्यतन", "Visitors": "आगंतुक", "illustrative": "उदाहरणार्थ",
    "Best viewed in current Chrome, Edge, Firefox and Safari": "नवीनतम क्रोम, एज, फ़ायरफ़ॉक्स एवं सफ़ारी में सर्वोत्तम",
    "Block-B, District Planning Office, Collectorate Building, Chhatarmaru, Ramgarh, Jharkhand 825101": "ब्लॉक-बी, जिला योजना कार्यालय, समाहरणालय भवन, छत्तरमारू, रामगढ़, झारखंड 825101",
    "opens in a new window": "नई विंडो में खुलता है", "External link - not opened in the offline prototype": "बाहरी लिंक - ऑफ़लाइन प्रोटोटाइप में नहीं खुलता",
    // Status and common data
    "Status": "स्थिति", "Stage": "चरण", "Block": "प्रखंड", "Panchayat": "पंचायत", "Village": "ग्राम", "Department": "विभाग", "Contractor": "संवेदक",
    "Financial Year": "वित्तीय वर्ष", "FY": "वि.व.", "Sector": "क्षेत्र", "Work type": "कार्य का प्रकार", "Project ID": "परियोजना आईडी", "Project name": "परियोजना का नाम", "Project": "परियोजना",
    "Approved amount": "स्वीकृत राशि", "Estimated amount": "प्राक्कलित राशि", "Expenditure": "व्यय", "Physical progress": "भौतिक प्रगति", "Financial progress": "वित्तीय प्रगति",
    "Pending at": "लंबित", "Pending since": "कब से लंबित", "Days": "दिन", "days": "दिन", "Date": "दिनांक", "Remarks": "टिप्पणी", "Location": "स्थान",
    "Lakh": "लाख", "Crore": "करोड़", "L": "लाख", "Cr": "करोड़",
    "Request No.": "अनुरोध सं.", "Unique Project ID": "विशिष्ट परियोजना आईडी", "Not yet assigned": "अभी आवंटित नहीं",
    "High priority": "उच्च प्राथमिकता", "Other priority": "अन्य प्राथमिकता",
    "Action recorded": "कार्रवाई दर्ज की गई", "Saved": "सहेजा गया",
    "Page not found": "पृष्ठ नहीं मिला", "The page you requested does not exist in this prototype.": "अनुरोधित पृष्ठ इस प्रोटोटाइप में उपलब्ध नहीं है।",
    "Go to home": "मुख पृष्ठ पर जाएँ", "You do not have access to this module.": "आपको इस मॉड्यूल की अनुमति नहीं है।",
    "Your role": "आपकी भूमिका", "Switch role": "भूमिका बदलें",
    "Data saved on this device (demo state)": "डाटा इस डिवाइस पर सहेजा गया (डेमो स्थिति)",
    "Browser storage is unavailable; changes will last only until the page is reloaded.": "ब्राउज़र स्टोरेज उपलब्ध नहीं है; परिवर्तन केवल पृष्ठ पुनः लोड होने तक रहेंगे।",
    "Menu": "मेनू", "Open menu": "मेनू खोलें", "Close menu": "मेनू बंद करें", "Notifications": "सूचनाएँ",
    "Breadcrumb": "ब्रेडक्रंब", "Main navigation": "मुख्य नेविगेशन", "Officer navigation": "अधिकारी नेविगेशन"
  });
})();
