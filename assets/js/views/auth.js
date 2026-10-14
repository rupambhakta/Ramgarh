/* Officer sign-in (scope 8): username + password, OTP second factor (simulated for the demo), failed-attempt logging, password reset. */
(function () {
  "use strict";
  var App = window.App, DM = window.DM, t = App.t, esc = App.esc;
  var DEMO_PASS = "Demo@2026";
  App.addHi({
    "Officer sign-in": "अधिकारी लॉगिन", "Secure access for DMFT officers, departments and field teams": "डीएमएफटी अधिकारियों, विभागों एवं क्षेत्र दलों हेतु सुरक्षित पहुँच",
    "Select your role (demo)": "अपनी भूमिका चुनें (डेमो)", "In the live portal the role comes from your account; the selector is provided only for this demonstration.": "लाइव पोर्टल में भूमिका आपके खाते से निर्धारित होती है; यह चयनकर्ता केवल इस प्रदर्शन हेतु है।",
    "Username": "उपयोगकर्ता नाम", "Password": "पासवर्ड", "Show": "दिखाएँ", "Hide": "छिपाएँ", "Security check": "सुरक्षा जाँच", "What is {a} + {b}?": "{a} + {b} कितना है?",
    "Continue": "जारी रखें", "Forgot password?": "पासवर्ड भूल गए?", "Demo password": "डेमो पासवर्ड",
    "Step 1 of 2": "चरण 1 / 2", "Step 2 of 2": "चरण 2 / 2", "Verify OTP": "ओटीपी सत्यापित करें", "Enter the 6-digit OTP": "6 अंकों का ओटीपी दर्ज करें",
    "OTP sent to your registered e-mail {m}. You can also enter the code from your authenticator app (SMS optional).": "आपके पंजीकृत ई-मेल {m} पर ओटीपी भेजा गया। आप अपने ऑथेंटिकेटर ऐप का कोड भी दर्ज कर सकते हैं (एसएमएस वैकल्पिक)।",
    "Demo: simulated OTP (in the live portal it comes by e-mail or from an authenticator app; SMS optional)": "डेमो: सिम्युलेटेड ओटीपी (लाइव पोर्टल में ई-मेल या ऑथेंटिकेटर ऐप से; एसएमएस वैकल्पिक)",
    "Resend OTP in {s} s": "{s} सेकंड में ओटीपी पुनः भेजें", "Resend OTP": "ओटीपी पुनः भेजें", "Change user": "उपयोगकर्ता बदलें", "Verify and sign in": "सत्यापित कर लॉगिन करें",
    "Enter your username.": "उपयोगकर्ता नाम दर्ज करें।", "Incorrect username or password. Attempt {n} of 5; the account locks after 5 failed attempts.": "गलत उपयोगकर्ता नाम या पासवर्ड। प्रयास {n} / 5; 5 असफल प्रयासों के बाद खाता लॉक हो जाता है।",
    "Incorrect answer to the security check.": "सुरक्षा जाँच का उत्तर गलत है।", "Incorrect OTP. Please try again.": "गलत ओटीपी। कृपया पुनः प्रयास करें।", "Enter all 6 digits.": "सभी 6 अंक दर्ज करें।",
    "This account is locked after repeated failed attempts. Contact the System Administrator.": "बार-बार असफल प्रयासों के कारण यह खाता लॉक है। सिस्टम प्रशासक से संपर्क करें।",
    "Security": "सुरक्षा", "Two-factor sign-in for all officers: OTP by e-mail or authenticator app (SMS optional)": "सभी अधिकारियों हेतु द्वि-चरणीय लॉगिन: ई-मेल या ऑथेंटिकेटर ऐप से ओटीपी (एसएमएस वैकल्पिक)", "Auto sign-out after 15 minutes of inactivity": "15 मिनट निष्क्रियता पर स्वतः लॉगआउट",
    "Account lock after 5 failed attempts; login history visible to the administrator": "5 असफल प्रयासों पर खाता लॉक; लॉगिन इतिहास प्रशासक को दृश्य", "Role-wise dashboard and jurisdiction-scoped data": "भूमिकावार डैशबोर्ड एवं क्षेत्राधिकार-सीमित डाटा",
    "Every action is time-stamped and audit-logged": "प्रत्येक कार्रवाई समय-अंकित एवं ऑडिट-लॉग", "Reset password": "पासवर्ड रीसेट करें",
    "Enter your username. A reset link valid for 15 minutes is sent to the registered e-mail; confirm it with an OTP from e-mail or your authenticator app.": "अपना उपयोगकर्ता नाम दर्ज करें। 15 मिनट हेतु मान्य रीसेट लिंक पंजीकृत ई-मेल पर भेजा जाता है; इसकी पुष्टि ई-मेल या ऑथेंटिकेटर ऐप के ओटीपी से करें।",
    "Send reset link": "रीसेट लिंक भेजें", "Reset link sent (simulated) to the registered e-mail of {u}.": "{u} के पंजीकृत ई-मेल पर रीसेट लिंक भेजा गया (सिम्युलेटेड)।",
    "Password policy: minimum 10 characters with upper case, lower case, number and symbol; last 5 passwords cannot be reused; expires every 90 days.": "पासवर्ड नीति: न्यूनतम 10 अक्षर जिनमें बड़े अक्षर, छोटे अक्षर, अंक एवं चिह्न हों; पिछले 5 पासवर्ड पुनः उपयोग नहीं हो सकते; प्रत्येक 90 दिन में समाप्त।",
    "Signed in. Welcome, {d}.": "लॉगिन सफल। स्वागत है, {d}।", "10-stage project lifecycle": "10-चरणीय परियोजना जीवनचक्र", "Public users do not need to sign in.": "सार्वजनिक उपयोगकर्ताओं को लॉगिन की आवश्यकता नहीं है।"
  });

  var state = { role: "dmftcell", step: 1, otp: null, fails: 0, a: 4, b: 3, user: "" };

  App.view("login", { kind: "public", title: function () { return t("Officer sign-in"); }, render: function (main, route) {
    var q = route.query;
    if (q.role && DM.role(q.role)) state.role = q.role;
    if (q.step === "otp") { state.step = 2; state.user = DM.role(state.role).user; if (!state.otp) state.otp = genOtp(); }
    if (!state.user) state.user = DM.role(state.role).user;
    var h = '<div class="container"><div class="login-wrap"><div class="login-art"><p class="small" style="color:#9FB3CF;margin:0">' + esc(t("DMFT Work Monitoring Portal, Ramgarh")) + "</p><h2>" + esc(t("Officer sign-in")) + '</h2><p style="color:#C9D6E8;margin:0">' + esc(t("Secure access for DMFT officers, departments and field teams")) + "</p>" +
      '<h3 style="color:#fff;margin-top:12px;font-size:.9375rem">' + esc(t("Security")) + "</h3><ul>" +
      [["key", "Two-factor sign-in for all officers: OTP by e-mail or authenticator app (SMS optional)"], ["clock", "Auto sign-out after 15 minutes of inactivity"], ["lock", "Account lock after 5 failed attempts; login history visible to the administrator"], ["users", "Role-wise dashboard and jurisdiction-scoped data"], ["history", "Every action is time-stamped and audit-logged"]].map(function (x) { return "<li>" + App.icon(x[0]) + "<span>" + esc(t(x[1])) + "</span></li>"; }).join("") +
      '</ul><h3 style="color:#fff;margin-top:12px;font-size:.9375rem">' + esc(t("10-stage project lifecycle")) + '</h3><ol style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:6px 14px">' +
      DM.STAGES.map(function (s) { return '<li style="display:flex;gap:8px;align-items:center;color:#DCE6F2;font-size:.8125rem"><span style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.1);display:grid;place-items:center;font-size:.6875rem;font-weight:700;flex:none">' + s.n + "</span>" + esc(App.L(s)) + "</li>"; }).join("") +
      '</ol><p class="small" style="color:#9FB3CF;margin-top:auto">' + esc(t("Public users do not need to sign in.")) + ' <a href="#/" style="color:#FFD54A">' + esc(t("Public Dashboard")) + '</a></p></div><div class="login-form" id="loginForm"></div></div></div>';
    main.innerHTML = h;
    draw();
  } });

  function genOtp() { var s = ""; for (var i = 0; i < 6; i++) s += Math.floor(Math.random() * 10); if (s.charAt(0) === "0") s = "4" + s.slice(1); return s; }
  function userRec(u) { return App.db.users.filter(function (x) { return x.username === u; })[0]; }

  function draw() {
    var box = document.getElementById("loginForm"); if (!box) return;
    if (state.step === 1) {
      state.a = 2 + Math.floor(Math.random() * 7); state.b = 1 + Math.floor(Math.random() * 8);
      box.innerHTML = '<p class="small muted mb0">' + esc(t("Step 1 of 2")) + "</p><h1 style=\"font-size:1.375rem\">" + esc(t("Officer sign-in")) + "</h1>" +
        '<form id="f1" novalidate><fieldset style="border:0;padding:0;margin:0 0 12px"><legend class="lbl" style="font-weight:600;font-size:.8125rem;margin-bottom:6px">' + esc(t("Select your role (demo)")) + '</legend><div class="role-grid">' +
        DM.ROLES.map(function (r) { return '<label class="role-opt"><input type="radio" name="role" value="' + r.k + '"' + (r.k === state.role ? " checked" : "") + '><span><strong>' + esc(App.L(r)) + "</strong>" + esc(App.desig(r.desig, { dept: r.dept, block: r.block })) + "</span></label>"; }).join("") +
        '</div><p class="hint small muted" style="margin:6px 0 0">' + esc(t("In the live portal the role comes from your account; the selector is provided only for this demonstration.")) + "</p></fieldset>" +
        '<div class="form-grid" style="grid-template-columns:1fr 1fr"><div class="field"><label for="lu">' + esc(t("Username")) + ' <span class="req">*</span></label><input class="input" id="lu" autocomplete="username" value="' + esc(state.user) + '"></div>' +
        '<div class="field"><label for="lp">' + esc(t("Password")) + ' <span class="req">*</span></label><div style="display:flex;gap:6px"><input class="input" id="lp" type="password" autocomplete="current-password" value="' + DEMO_PASS + '"><button class="btn secondary sm" type="button" id="lpShow" aria-pressed="false">' + esc(t("Show")) + "</button></div></div>" +
        '<div class="field"><label for="lc">' + esc(t("Security check")) + ": " + esc(App.tf("What is {a} + {b}?", { a: state.a, b: state.b })) + ' <span class="req">*</span></label><input class="input" id="lc" inputmode="numeric" value="' + (state.a + state.b) + '"></div>' +
        '<div class="field" style="justify-content:flex-end"><div class="sim-otp">' + esc(t("Demo password")) + ": <b style=\"letter-spacing:0;font-size:.9375rem\">" + DEMO_PASS + "</b></div></div></div>" +
        '<div id="lerr" role="alert"></div><div style="display:flex;gap:10px;align-items:center;margin-top:14px;flex-wrap:wrap"><button class="btn lg" type="submit">' + esc(t("Continue")) + App.icon("arrow-right") + '</button><a href="#" id="forgot">' + esc(t("Forgot password?")) + "</a></div>" +
        '<p class="small muted" style="margin-top:12px">' + esc(t("Password policy: minimum 10 characters with upper case, lower case, number and symbol; last 5 passwords cannot be reused; expires every 90 days.")) + "</p></form>";
      App.qsa("input[name=role]", box).forEach(function (r) { r.addEventListener("change", function () { state.role = r.value; state.user = DM.role(r.value).user; document.getElementById("lu").value = state.user; }); });
      document.getElementById("lpShow").addEventListener("click", function () { var i = document.getElementById("lp"), sh = i.type === "password"; i.type = sh ? "text" : "password"; this.textContent = sh ? t("Hide") : t("Show"); this.setAttribute("aria-pressed", String(sh)); });
      document.getElementById("forgot").addEventListener("click", function (e) { e.preventDefault(); forgot(); });
      document.getElementById("f1").addEventListener("submit", function (e) {
        e.preventDefault();
        var u = document.getElementById("lu").value.trim(), pw = document.getElementById("lp").value, c = document.getElementById("lc").value.trim(), err = document.getElementById("lerr");
        state.user = u;
        if (!u) return showErr(err, t("Enter your username."));
        var rec = userRec(u);
        if (rec && rec.status === "locked") { log(u, "locked"); return showErr(err, t("This account is locked after repeated failed attempts. Contact the System Administrator.")); }
        if (+c !== state.a + state.b) return showErr(err, t("Incorrect answer to the security check."));
        if (pw !== DEMO_PASS || !rec) { state.fails++; log(u, "fail-pass"); if (state.fails >= 5 && rec) { rec.status = "locked"; log(u, "locked"); } App.save(); return showErr(err, App.tf("Incorrect username or password. Attempt {n} of 5; the account locks after 5 failed attempts.", { n: state.fails })); }
        if (rec.role !== state.role) { state.role = rec.role; }
        state.step = 2; state.otp = genOtp(); draw();
      });
    } else {
      var rec = userRec(state.user) || {}, em = rec.email || "officer@sample.gov.example", m = em.slice(0, 2) + "*****" + em.slice(em.indexOf("@"));
      box.innerHTML = '<p class="small muted mb0">' + esc(t("Step 2 of 2")) + '</p><h1 style="font-size:1.375rem">' + esc(t("Verify OTP")) + "</h1>" +
        '<p class="muted">' + esc(App.tf("OTP sent to your registered e-mail {m}. You can also enter the code from your authenticator app (SMS optional).", { m: m })) + "</p>" +
        '<div class="sim-otp" style="margin-bottom:14px">' + App.icon("info", "sm") + " " + esc(t("Demo: simulated OTP (in the live portal it comes by e-mail or from an authenticator app; SMS optional)")) + ': <b>' + state.otp + "</b></div>" +
        '<form id="f2" novalidate><fieldset style="border:0;padding:0;margin:0"><legend class="lbl" style="font-weight:600;font-size:.8125rem;margin-bottom:6px">' + esc(t("Enter the 6-digit OTP")) + '</legend><div class="otp-boxes">' +
        [0, 1, 2, 3, 4, 5].map(function (i) { return '<input inputmode="numeric" maxlength="1" aria-label="OTP digit ' + (i + 1) + '" data-o="' + i + '">'; }).join("") + "</div></fieldset>" +
        '<div id="oerr" role="alert" style="margin-top:8px"></div><p class="small muted" id="resend" style="margin:10px 0 0"></p>' +
        '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap"><button class="btn lg" type="submit">' + App.icon("lock") + esc(t("Verify and sign in")) + '</button><button class="btn secondary lg" type="button" id="back1">' + esc(t("Change user")) + "</button></div>" +
        '<p class="small muted" style="margin-top:14px">' + App.icon("users", "sm") + " " + esc(App.L(DM.role(state.role))) + " | " + esc(state.user) + "</p></form>";
      var boxes = App.qsa("[data-o]", box);
      boxes.forEach(function (b, i) {
        b.addEventListener("input", function () { b.value = b.value.replace(/\D/g, "").slice(0, 1); if (b.value && boxes[i + 1]) boxes[i + 1].focus(); });
        b.addEventListener("keydown", function (e) { if (e.key === "Backspace" && !b.value && boxes[i - 1]) boxes[i - 1].focus(); });
        b.addEventListener("paste", function (e) { var d = (e.clipboardData.getData("text") || "").replace(/\D/g, ""); if (d.length >= 6) { e.preventDefault(); boxes.forEach(function (x, j) { x.value = d.charAt(j); }); } });
      });
      setTimeout(function () { boxes[0].focus(); }, 30);
      var secs = 30, rs = document.getElementById("resend");
      var tick = function () { if (!document.body.contains(rs)) return; if (secs > 0) { rs.textContent = App.tf("Resend OTP in {s} s", { s: secs }); secs--; setTimeout(tick, 1000); } else { rs.innerHTML = '<a href="#" id="rsl">' + esc(t("Resend OTP")) + "</a>"; document.getElementById("rsl").addEventListener("click", function (e) { e.preventDefault(); state.otp = genOtp(); draw(); }); } };
      tick();
      document.getElementById("back1").addEventListener("click", function () { state.step = 1; draw(); });
      document.getElementById("f2").addEventListener("submit", function (e) {
        e.preventDefault();
        var v = boxes.map(function (b) { return b.value; }).join(""), err = document.getElementById("oerr");
        if (v.length < 6) return showErr(err, t("Enter all 6 digits."));
        if (v !== state.otp) { log(state.user, "fail-otp"); App.save(); return showErr(err, t("Incorrect OTP. Please try again.")); }
        App.signIn(state.role, state.user);
        state.step = 1; state.otp = null; state.fails = 0;
        App.toast(App.tf("Signed in. Welcome, {d}.", { d: App.L(App.session.desig) }));
        var nx = App.parseHash().query.next;
        location.hash = nx ? "#/" + nx : (state.role === "field" ? "#/field" : state.role === "admin" ? "#/users" : "#/dashboard");
      });
    }
  }
  function showErr(el, msg) { el.innerHTML = '<div class="note err" style="margin-top:10px">' + App.icon("warning") + "<span>" + esc(msg) + "</span></div>"; return false; }
  function log(u, result) { App.db.loginHistory.unshift({ ts: App.nowTs(), user: u || "-", role: state.role, ip: "10.24.8.17", device: "Chrome / Windows", result: result }); }
  function forgot() {
    App.modal({ title: t("Reset password"), body: "<p>" + esc(t("Enter your username. A reset link valid for 15 minutes is sent to the registered e-mail; confirm it with an OTP from e-mail or your authenticator app.")) + '</p><div class="field"><label for="fu">' + esc(t("Username")) + '</label><input class="input" id="fu" value="' + esc(state.user) + '"></div><div id="fmsg" role="status" style="margin-top:10px"></div>',
      foot: '<button class="btn secondary" type="button" data-close>' + esc(t("Close")) + '</button><button class="btn" type="button" id="fsend">' + esc(t("Send reset link")) + "</button>",
      onOpen: function (el) { el.querySelector("#fsend").addEventListener("click", function () { var u = el.querySelector("#fu").value.trim(); if (!u) return; el.querySelector("#fmsg").innerHTML = '<div class="note ok">' + App.icon("check") + "<span>" + esc(App.tf("Reset link sent (simulated) to the registered e-mail of {u}.", { u: u })) + "</span></div>"; App.log("password-reset", { en: "Password reset requested for " + u, hi: u + " हेतु पासवर्ड रीसेट अनुरोध" }); App.save(); }); } });
  }
})();
