/* User & role management (scope item 8): users, roles and permissions matrix, jurisdiction, login history with
   failed attempts and lockouts, and the user activity log. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM;
  App.addHi({
    "Users & Roles": "उपयोगकर्ता एवं भूमिकाएँ", "Users, the nine portal roles, jurisdiction scoping, login history and the audit trail of user activity.": "उपयोगकर्ता, पोर्टल की नौ भूमिकाएँ, क्षेत्राधिकार, लॉगिन इतिहास एवं उपयोगकर्ता गतिविधि का ऑडिट ट्रेल।",
    "Users": "उपयोगकर्ता", "Roles & permissions": "भूमिकाएँ एवं अनुमतियाँ", "Login history": "लॉगिन इतिहास", "Activity log": "गतिविधि लॉग",
    "Username": "उपयोगकर्ता नाम", "Designation": "पदनाम", "Role": "भूमिका", "Mobile": "मोबाइल", "OTP": "ओटीपी", "Last login": "अंतिम लॉगिन", "Active": "सक्रिय", "Locked": "लॉक", "Disabled": "निष्क्रिय",
    "Add user": "उपयोगकर्ता जोड़ें", "Reset password": "पासवर्ड रीसेट", "Unlock": "अनलॉक करें", "Enable OTP": "ओटीपी सक्षम करें", "Disable OTP": "ओटीपी अक्षम करें", "OTP mandatory": "ओटीपी अनिवार्य", "On": "चालू", "Off": "बंद",
    "Search users": "उपयोगकर्ता खोजें", "Entire district": "संपूर्ण जिला", "E-mail": "ई-मेल",
    "A one-time password reset link, valid for 30 minutes, has been sent to the registered e-mail (simulated in the prototype).": "30 मिनट के लिए मान्य एक बार का पासवर्ड रीसेट लिंक पंजीकृत ई-मेल पर भेजा गया है (प्रोटोटाइप में सिम्युलेटेड)।",
    "The user must set a new password at next sign-in. The reset is recorded in the activity log.": "उपयोगकर्ता को अगले लॉगिन पर नया पासवर्ड सेट करना होगा। रीसेट गतिविधि लॉग में दर्ज है।",
    "Account unlocked": "खाता अनलॉक किया गया", "OTP is mandatory for officer and administrator roles.": "अधिकारी एवं प्रशासक भूमिकाओं हेतु ओटीपी अनिवार्य है।", "OTP setting updated": "ओटीपी सेटिंग अद्यतन",
    "User created. Login credentials and OTP enrolment link sent (simulated).": "उपयोगकर्ता बनाया गया। लॉगिन विवरण एवं ओटीपी नामांकन लिंक भेजा गया (अनुकरण)।",
    "Username already exists": "उपयोगकर्ता नाम पहले से मौजूद है", "Enter a valid 10-digit mobile number": "मान्य 10 अंकों का मोबाइल नंबर दर्ज करें", "Enter a valid e-mail": "मान्य ई-मेल दर्ज करें",
    "Use lowercase letters, digits and dots (4-30 characters)": "छोटे अक्षर, अंक एवं बिंदु का प्रयोग करें (4-30 अक्षर)", "Create user": "उपयोगकर्ता बनाएँ", "(required)": "(अनिवार्य)",
    "Full": "पूर्ण", "Approve / act": "स्वीकृति / कार्रवाई", "View": "देखें", "None": "कोई नहीं", "Module": "मॉड्यूल", "users": "उपयोगकर्ता",
    "Roles are finalised with the District Administration; permissions and file-movement chains are configurable without code changes.": "भूमिकाएँ जिला प्रशासन के साथ अंतिम की जाएँगी; अनुमतियाँ एवं फ़ाइल-संचलन श्रृंखला बिना कोड परिवर्तन के कॉन्फ़िगर योग्य हैं।",
    "Security policy": "सुरक्षा नीति", "Password: minimum 10 characters with upper and lower case, a digit and a special character; expires every 90 days; last 5 cannot be reused.": "पासवर्ड: न्यूनतम 10 अक्षर, बड़े एवं छोटे अक्षर, एक अंक एवं एक विशेष चिह्न सहित; हर 90 दिन में समाप्त; पिछले 5 पुनः उपयोग नहीं।",
    "OTP (6 digits, valid 5 minutes) by e-mail or authenticator app (SMS optional) is mandatory for officers and administrators.": "अधिकारियों एवं प्रशासकों हेतु ई-मेल या ऑथेंटिकेटर ऐप द्वारा ओटीपी (6 अंक, 5 मिनट मान्य; एसएमएस वैकल्पिक) अनिवार्य।",
    "Account locks for 30 minutes after 5 consecutive failed attempts; administrators can unlock.": "लगातार 5 असफल प्रयासों के बाद खाता 30 मिनट हेतु लॉक; प्रशासक अनलॉक कर सकते हैं।",
    "Session ends after 15 minutes of inactivity (with a warning at 13 minutes) and after 8 hours in any case.": "15 मिनट की निष्क्रियता पर सत्र समाप्त (13 मिनट पर चेतावनी) एवं किसी भी स्थिति में 8 घंटे बाद।",
    "Every sign-in, failed attempt, file movement, approval, export and AI question is written to a tamper-evident audit log.": "प्रत्येक लॉगिन, असफल प्रयास, फ़ाइल संचलन, स्वीकृति, निर्यात एवं एआई प्रश्न छेड़छाड़-प्रमाणित ऑडिट लॉग में दर्ज होता है।",
    "Sign-ins (14 days)": "लॉगिन (14 दिन)", "Successful": "सफल", "Failed password": "गलत पासवर्ड", "Failed OTP": "गलत ओटीपी", "Lockouts": "लॉकआउट",
    "Time": "समय", "IP address": "आईपी पता", "Device / browser": "डिवाइस / ब्राउज़र", "Signed in": "लॉगिन सफल", "Wrong password": "गलत पासवर्ड", "Wrong OTP": "गलत ओटीपी", "Account locked": "खाता लॉक",
    "All results": "सभी परिणाम", "Failed only": "केवल असफल", "User": "उपयोगकर्ता", "Action": "कार्रवाई", "Detail": "विवरण", "Showing latest {n} entries": "नवीनतम {n} प्रविष्टियाँ",
    "Forwarded": "अग्रसारित", "Returned": "वापस", "Reverted": "प्रत्यावर्तित", "Resubmitted": "पुनः प्रस्तुत", "Approved": "स्वीकृत", "Submitted": "प्रस्तुत", "Signed out": "लॉगआउट",
    "Exported": "निर्यात", "AI question": "एआई प्रश्न", "Data import": "डाटा आयात", "Progress update": "प्रगति अद्यतन", "Updated": "अद्यतन", "Password reset": "पासवर्ड रीसेट", "User created": "उपयोगकर्ता बनाया",
    "Uploaded": "अपलोड", "Inspection": "निरीक्षण", "Payment": "भुगतान", "Configuration": "कॉन्फ़िगरेशन"
  });

  var ACT = { forward: ["Forwarded", "send"], "return": ["Returned", "return"], revert: ["Reverted", "undo"], resubmit: ["Resubmitted", "redo"], approve: ["Approved", "check"], submit: ["Submitted", "file"],
    login: ["Signed in", "lock"], logout: ["Signed out", "logout"], "export": ["Exported", "download"], ai: ["AI question", "sparkle"], "import": ["Data import", "upload"], progress: ["Progress update", "trend"],
    reset: ["Password reset", "key"], usercreate: ["User created", "person"], user: ["Updated", "users"], upload: ["Uploaded", "upload"], inspection: ["Inspection", "clipboard"], payment: ["Payment", "rupee"], sla: ["Configuration", "settings"] };
  function actLabel(a) { var x = ACT[a]; return x ? App.t(x[0]) : String(a || "-"); }
  function jur(u) {
    var parts = [];
    if (u.dept) parts.push(App.deptShort(u.dept));
    if (u.block) parts.push(App.blockName(u.block));
    return parts.length ? parts.join(" | ") : App.t("Entire district");
  }
  var OTP_OPTIONAL = ["deo", "monitor"];
  var S = { tab: "users", q: "", lf: "" };

  App.view("users", {
    perm: "users",
    title: function () { return App.t("Users & Roles"); },
    render: function (main, route) {
      if (route.query.tab && ["users", "roles", "logins", "activity"].indexOf(route.query.tab) >= 0) S.tab = route.query.tab;
      var admin = App.can("users", "full");
      var tabs = [["users", "Users", "users", App.db.users.length], ["roles", "Roles & permissions", "shield", DM.ROLES.length], ["logins", "Login history", "lock", App.db.loginHistory.length], ["activity", "Activity log", "history", App.db.activity.length]];
      main.innerHTML = App.pageHead(App.t("Users & Roles"), App.esc(App.t("Users, the nine portal roles, jurisdiction scoping, login history and the audit trail of user activity.")), admin ? '<button class="btn" type="button" id="uAdd">' + App.icon("plus", "sm") + App.esc(App.t("Add user")) + "</button>" : "", [[App.t("Dashboard"), "#/dashboard"], [App.t("Users & Roles"), ""]]) +
        '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" role="tab" data-tab="' + t[0] + '" aria-selected="' + (S.tab === t[0]) + '">' + App.icon(t[2], "sm") + App.esc(App.t(t[1])) + ' <span class="pill-n">' + t[3] + "</span></button>"; }).join("") + '</div><div id="uBody"></div>';
      var body = main.querySelector("#uBody");
      main.querySelector(".tabs").addEventListener("click", function (e) { var b = e.target.closest("[data-tab]"); if (!b) return; S.tab = b.getAttribute("data-tab"); App.setQuery({ tab: S.tab }); App.render(); });
      var add = main.querySelector("#uAdd"); if (add) add.addEventListener("click", addUser);
      ({ users: drawUsers, roles: drawRoles, logins: drawLogins, activity: drawActivity })[S.tab](body, admin);
    }
  });

  function drawUsers(body, admin) {
    var q = S.q.toLowerCase();
    var list = App.db.users.filter(function (u) { return !q || (u.username + " " + App.L(u.desig) + " " + App.L(DM.role(u.role))).toLowerCase().indexOf(q) >= 0; });
    var h = '<div><div><div class="users-tools"><label class="sr-only" for="uQ">' + App.esc(App.t("Search users")) + '</label><input class="input" id="uQ" type="search" placeholder="' + App.esc(App.t("Search users")) + '" value="' + App.esc(S.q) + '"><span class="small muted">' + list.length + " " + App.esc(App.t("users")) + "</span></div>" +
      '<div class="table-wrap" tabindex="0" aria-label="' + App.esc(App.t("Users")) + '"><table class="data"><thead><tr><th>' + App.esc(App.t("Username")) + "</th><th>" + App.esc(App.t("Designation")) + "</th><th>" + App.esc(App.t("Role")) + "</th><th>" + App.esc(App.t("Jurisdiction")) + "</th><th>" + App.esc(App.t("Mobile")) + "</th><th>" + App.esc(App.t("OTP")) + "</th><th>" + App.esc(App.t("Status")) + "</th><th>" + App.esc(App.t("Last login")) + "</th>" + (admin ? "<th>" + App.esc(App.t("Actions")) + "</th>" : "") + "</tr></thead><tbody>";
    list.forEach(function (u) {
      var st = u.status === "locked" ? '<span class="chip st-delayed">' + App.esc(App.t("Locked")) + "</span>" : u.status === "disabled" ? '<span class="chip st-notstarted">' + App.esc(App.t("Disabled")) + "</span>" : '<span class="chip st-completed">' + App.esc(App.t("Active")) + "</span>";
      h += '<tr><td><strong class="code">' + App.esc(u.username) + "</strong></td><td>" + App.esc(App.L(u.desig)) + "</td><td>" + App.esc(App.L(DM.role(u.role))) + "</td><td>" + App.esc(jur(u)) + '</td><td class="nowrap">' + App.esc(u.mobile) + "</td><td>" + (u.twoFA ? '<span class="chip st-completed plain">' + App.esc(App.t("On")) + "</span>" : '<span class="chip st-approval plain">' + App.esc(App.t("Off")) + "</span>") + "</td><td>" + st + '</td><td class="nowrap">' + App.dt(u.lastLogin) + "</td>" +
        (admin ? '<td class="nowrap"><button class="btn ghost sm" type="button" data-reset="' + u.id + '" title="' + App.esc(App.t("Reset password")) + '">' + App.icon("key", "sm") + '<span class="sr-only">' + App.esc(App.t("Reset password")) + "</span></button>" +
          (u.status === "locked" ? '<button class="btn warn sm" type="button" data-unlock="' + u.id + '">' + App.icon("lock", "sm") + App.esc(App.t("Unlock")) + "</button>" : "") +
          (u.twoFA && OTP_OPTIONAL.indexOf(u.role) < 0 ? '<span class="small muted">' + App.esc(App.t("OTP mandatory")) + "</span>" : '<button class="btn ghost sm" type="button" data-otp="' + u.id + '">' + App.esc(u.twoFA ? App.t("Disable OTP") : App.t("Enable OTP")) + "</button>") + "</td>" : "") + "</tr>";
    });
    h += "</tbody></table></div></div>";
    h += '<div class="card" style="margin-top:16px"><h2 class="h-sm">' + App.icon("shield") + " " + App.esc(App.t("Security policy")) + '</h2><ul class="policy-list policy-cols">' +
      ["Password: minimum 10 characters with upper and lower case, a digit and a special character; expires every 90 days; last 5 cannot be reused.", "OTP (6 digits, valid 5 minutes) by e-mail or authenticator app (SMS optional) is mandatory for officers and administrators.", "Account locks for 30 minutes after 5 consecutive failed attempts; administrators can unlock.", "Session ends after 15 minutes of inactivity (with a warning at 13 minutes) and after 8 hours in any case.", "Every sign-in, failed attempt, file movement, approval, export and AI question is written to a tamper-evident audit log."]
        .map(function (x) { return "<li>" + App.esc(App.t(x)) + "</li>"; }).join("") + "</ul></div></div>";
    body.innerHTML = h;
    var qi = body.querySelector("#uQ");
    qi.addEventListener("input", App.debounce(function () { S.q = qi.value; drawUsers(body, admin); var n = body.querySelector("#uQ"); n.focus(); n.setSelectionRange(n.value.length, n.value.length); }, 200));
    body.onclick = function (e) {
      var t = e.target.closest("[data-reset],[data-unlock],[data-otp]"); if (!t) return;
      var id = t.getAttribute("data-reset") || t.getAttribute("data-unlock") || t.getAttribute("data-otp"), u = App.db.users.filter(function (x) { return x.id === id; })[0]; if (!u) return;
      if (t.hasAttribute("data-reset")) {
        App.log("reset", { en: "Password reset link sent to " + u.username, hi: u.username + " को पासवर्ड रीसेट लिंक भेजा गया" }); App.save();
        App.modal({ title: App.t("Reset password") + " - " + u.username, body: '<div class="note ok">' + App.icon("check") + "<div><p class=\"mb0\">" + App.esc(App.t("A one-time password reset link, valid for 30 minutes, has been sent to the registered e-mail (simulated in the prototype).")) + "</p><p class=\"mb0 small\">" + App.esc(u.mobile) + " | " + App.esc(u.email) + "</p></div></div><p style=\"margin-top:10px\">" + App.esc(App.t("The user must set a new password at next sign-in. The reset is recorded in the activity log.")) + "</p>", foot: '<button class="btn" data-close type="button">' + App.esc(App.t("Close")) + "</button>" });
      } else if (t.hasAttribute("data-unlock")) {
        u.status = "active"; App.db.loginHistory.unshift({ ts: App.nowTs(), user: u.username, role: u.role, ip: "-", device: App.t("Unlock"), result: "unlock" });
        App.log("user", { en: "Account unlocked: " + u.username, hi: "खाता अनलॉक: " + u.username }); App.save(); App.toast(App.t("Account unlocked")); drawUsers(body, admin);
      } else {
        if (u.twoFA && OTP_OPTIONAL.indexOf(u.role) < 0) { App.toast(App.t("OTP is mandatory for officer and administrator roles."), false); return; }
        u.twoFA = !u.twoFA; App.log("user", { en: "OTP " + (u.twoFA ? "enabled" : "disabled") + " for " + u.username, hi: u.username + " हेतु ओटीपी " + (u.twoFA ? "सक्षम" : "अक्षम") }); App.save(); App.toast(App.t("OTP setting updated")); drawUsers(body, admin);
      }
    };
  }

  function addUser() {
    var body = '<form id="nuF" novalidate><div class="form-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">' +
      '<div class="field"><label for="nuU">' + App.esc(App.t("Username")) + ' <span class="req">' + App.esc(App.t("(required)")) + '</span></label><input class="input" id="nuU" autocomplete="off" aria-describedby="nuUe"><span class="err" id="nuUe"></span></div>' +
      '<div class="field"><label for="nuR">' + App.esc(App.t("Role")) + '</label><select class="input" id="nuR">' + App.opts(DM.ROLES.map(function (r) { return [r.k, App.L(r)]; }), "exec", false) + "</select></div>" +
      '<div class="field"><label for="nuD">' + App.esc(App.t("Department")) + '</label><select class="input" id="nuD">' + App.deptOpts("", App.t("Entire district")) + "</select></div>" +
      '<div class="field"><label for="nuB">' + App.esc(App.t("Block")) + '</label><select class="input" id="nuB">' + App.blockOpts("", App.t("Entire district")) + "</select></div>" +
      '<div class="field"><label for="nuM">' + App.esc(App.t("Mobile")) + ' <span class="req">' + App.esc(App.t("(required)")) + '</span></label><input class="input" id="nuM" inputmode="numeric" maxlength="10" aria-describedby="nuMe"><span class="err" id="nuMe"></span></div>' +
      '<div class="field"><label for="nuE">' + App.esc(App.t("E-mail")) + ' <span class="req">' + App.esc(App.t("(required)")) + '</span></label><input class="input" id="nuE" type="email" aria-describedby="nuEe"><span class="err" id="nuEe"></span></div>' +
      "</div></form>";
    App.modal({ title: App.t("Add user"), body: body, foot: '<button class="btn secondary" type="button" data-close>' + App.esc(App.t("Cancel")) + '</button><button class="btn" type="button" id="nuGo">' + App.esc(App.t("Create user")) + "</button>",
      onOpen: function (el, api) {
        el.querySelector("#nuGo").addEventListener("click", function () {
          var u = el.querySelector("#nuU").value.trim().toLowerCase(), m = el.querySelector("#nuM").value.trim(), em = el.querySelector("#nuE").value.trim(), ok = true;
          function err(id, msg) { var i = el.querySelector("#" + id); i.setAttribute("aria-invalid", msg ? "true" : "false"); el.querySelector("#" + id + "e").textContent = msg || ""; if (msg && ok) { i.focus(); ok = false; } }
          err("nuU", !/^[a-z0-9.]{4,30}$/.test(u) ? App.t("Use lowercase letters, digits and dots (4-30 characters)") : App.db.users.some(function (x) { return x.username === u; }) ? App.t("Username already exists") : "");
          err("nuM", /^[6-9]\d{9}$/.test(m) ? "" : App.t("Enter a valid 10-digit mobile number"));
          err("nuE", /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(em) ? "" : App.t("Enter a valid e-mail"));
          if (!ok) return;
          var role = el.querySelector("#nuR").value, dept = el.querySelector("#nuD").value || null, block = el.querySelector("#nuB").value || null, r = DM.role(role);
          var d = DM.desig(r.desig, { dept: dept, block: block }); d = { en: d.en.replace(/, $/, ""), hi: d.hi.replace(/, $/, "") };
          if (block && role !== "field") { /* jurisdiction carried separately */ }
          App.db.users.push({ id: "U" + DM.util.pad(App.db.users.length + 1, 2), role: role, username: u, desig: d, dept: dept, block: block, mobile: m.slice(0, 2) + "XXXXXX" + m.slice(8), email: em, twoFA: true, status: "active", lastLogin: null });
          App.log("usercreate", { en: "User created: " + u + " (" + r.en + ")", hi: "उपयोगकर्ता बनाया: " + u + " (" + r.hi + ")" }); App.save();
          api.close(); App.toast(App.t("User created. Login credentials and OTP enrolment link sent (simulated).")); S.tab = "users"; App.render();
        });
      } });
  }

  function drawRoles(body) {
    var lvl = { F: ["Full", "F"], A: ["Approve / act", "A"], V: ["View", "V"], N: ["None", "–"] };
    var h = '<div class="note" style="margin-bottom:12px">' + App.icon("info") + "<span>" + App.esc(App.t("Roles are finalised with the District Administration; permissions and file-movement chains are configurable without code changes.")) + "</span></div>";
    h += '<div class="legend-inline" style="margin-bottom:8px">' + ["F", "A", "V", "N"].map(function (k) { return '<span><span class="mx-badge mx-' + k + '">' + lvl[k][1] + "</span> " + App.esc(App.t(lvl[k][0])) + "</span>"; }).join("") + "</div>";
    h += '<div class="table-wrap" tabindex="0" aria-label="' + App.esc(App.t("Roles & permissions")) + '"><table class="data matrix"><caption class="sr-only">' + App.esc(App.t("Roles & permissions")) + "</caption><thead><tr><th scope=\"col\">" + App.esc(App.t("Module")) + "</th>" + DM.ROLES.map(function (r) { return '<th scope="col" class="rot">' + App.esc(App.L(r)) + "</th>"; }).join("") + "</tr></thead><tbody>";
    DM.MODULES.forEach(function (m, i) {
      h += '<tr><th scope="row" style="position:static;background:#fff;font-weight:600">' + App.esc(App.L(m)) + "</th>" + DM.ROLES.map(function (r) { var c = (DM.PERMS[r.k] || "").charAt(i) || "N"; return '<td class="mx"><span class="mx-badge mx-' + c + '" title="' + App.esc(App.t(lvl[c][0])) + '">' + lvl[c][1] + '</span><span class="sr-only">' + App.esc(App.t(lvl[c][0])) + "</span></td>"; }).join("") + "</tr>";
    });
    h += "</tbody></table></div>";
    h += '<div class="role-cards">' + DM.ROLES.map(function (r) {
      var n = App.db.users.filter(function (u) { return u.role === r.k; }).length;
      return '<div class="role-card"><h3><span>' + App.esc(App.L(r)) + '</span><span class="pill-n">' + n + "</span></h3><p>" + App.esc(App.t("Designation")) + ": " + App.esc(App.L(DM.desig(r.desig, { dept: r.dept, block: r.block }))) + "</p><p>" + App.esc(App.t("Jurisdiction")) + ": " + App.esc(App.L(r.scope)) + "</p><p>" + App.esc(App.t("OTP")) + ": " + App.esc(OTP_OPTIONAL.indexOf(r.k) >= 0 ? App.t("Off") + " / " + App.t("On") : App.t("On")) + "</p></div>";
    }).join("") + "</div>";
    body.innerHTML = h;
  }

  function resChip(r) {
    var m = { ok: ["res-ok", "Signed in"], "fail-pass": ["res-fail", "Wrong password"], "fail-otp": ["res-fail", "Wrong OTP"], locked: ["res-lock", "Account locked"], unlock: ["res-ok", "Unlock"] }[r] || ["act-chip", r];
    return '<span class="chip ' + m[0] + '">' + App.esc(App.t(m[1])) + "</span>";
  }
  function drawLogins(body) {
    var L = App.db.loginHistory, cnt = function (f) { return L.filter(f).length; };
    var tiles = [["Sign-ins (14 days)", L.length, "lock", "#123B73"], ["Successful", cnt(function (x) { return x.result === "ok"; }), "check", "#2F8A4E"], ["Failed password", cnt(function (x) { return x.result === "fail-pass"; }), "warning", "#C0392B"], ["Failed OTP", cnt(function (x) { return x.result === "fail-otp"; }), "key", "#C2650A"], ["Lockouts", cnt(function (x) { return x.result === "locked"; }), "shield", "#7B4FB5"]];
    var list = S.lf === "fail" ? L.filter(function (x) { return x.result !== "ok" && x.result !== "unlock"; }) : L;
    var h = '<div class="kpis" style="grid-template-columns:repeat(5,minmax(0,1fr));margin-bottom:14px">' + tiles.map(function (t) { return '<dl class="kpi" style="--k:' + t[3] + '"><dt>' + App.esc(App.t(t[0])) + App.icon(t[2]) + "</dt><dd>" + t[1] + "</dd></dl>"; }).join("") + "</div>";
    h += '<div class="users-tools"><div class="field" style="flex-direction:row;align-items:center;gap:8px"><label for="lF">' + App.esc(App.t("Result")) + '</label><select class="input" id="lF" style="max-width:200px">' + App.opts([["", App.t("All results")], ["fail", App.t("Failed only")]], S.lf, false) + '</select></div><span class="small muted">' + App.esc(App.tf("Showing latest {n} entries", { n: Math.min(list.length, 80) })) + "</span></div>";
    h += '<div class="table-wrap tbl-scroll" tabindex="0" aria-label="' + App.esc(App.t("Login history")) + '"><table class="data"><thead><tr><th>' + App.esc(App.t("Time")) + "</th><th>" + App.esc(App.t("Username")) + "</th><th>" + App.esc(App.t("Role")) + "</th><th>" + App.esc(App.t("IP address")) + "</th><th>" + App.esc(App.t("Device / browser")) + "</th><th>" + App.esc(App.t("Result")) + "</th></tr></thead><tbody>" +
      list.slice(0, 80).map(function (x) { return "<tr" + (x.result !== "ok" && x.result !== "unlock" ? ' class="row-err"' : "") + '><td class="nowrap">' + App.dt(x.ts) + '</td><td><span class="code">' + App.esc(x.user) + "</span></td><td>" + App.esc(App.L(DM.role(x.role))) + '</td><td class="nowrap">' + App.esc(x.ip) + "</td><td>" + App.esc(x.device) + "</td><td>" + resChip(x.result) + "</td></tr>"; }).join("") + "</tbody></table></div>";
    body.innerHTML = h;
    body.querySelector("#lF").addEventListener("change", function (e) { S.lf = e.target.value; drawLogins(body); });
  }

  function drawActivity(body) {
    var list = App.db.activity.slice(0, 120);
    var h = '<div class="table-wrap tbl-scroll" tabindex="0" aria-label="' + App.esc(App.t("Activity log")) + '"><table class="data"><thead><tr><th>' + App.esc(App.t("Time")) + "</th><th>" + App.esc(App.t("User")) + "</th><th>" + App.esc(App.t("Action")) + "</th><th>" + App.esc(App.t("Project")) + "</th><th>" + App.esc(App.t("Detail")) + "</th></tr></thead><tbody>";
    list.forEach(function (a) {
      var p = a.pid ? DM.byId(App.db, a.pid) : null, who = typeof a.user === "object" && a.user ? App.L(a.user) : a.user === "public" ? "-" : App.desig(a.user, p);
      var det = a.text ? App.L(a.text) : a.stage ? App.stageName(a.stage) : "-";
      var ic = (ACT[a.action] || [0, "info"])[1];
      h += '<tr><td class="nowrap">' + App.dt(a.ts) + "</td><td>" + App.esc(who) + (a.username && a.username !== "-" ? ' <span class="small muted">(' + App.esc(a.username) + ")</span>" : "") + '</td><td class="nowrap"><span class="chip act-chip plain">' + App.icon(ic, "sm") + " " + App.esc(actLabel(a.action)) + "</span></td><td>" + (p ? App.pidLink(p) : "-") + "</td><td>" + App.esc(det) + "</td></tr>";
    });
    h += "</tbody></table></div><p class=\"small muted\" style=\"margin-top:8px\">" + App.esc(App.tf("Showing latest {n} entries", { n: list.length })) + "</p>";
    body.innerHTML = h;
  }
})();
