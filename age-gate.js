(function () {
  if (sessionStorage.getItem("295-age-confirmed") === "yes") return;
  const copy = {
    en: { eyebrow: "IMPORTANT NOTICE", title: "Are you 18 or older?", text: "You must be at least 18 years old to enter this website.", enter: "I am 18+ · Enter", leave: "Leave website" },
    zh: { eyebrow: "重要须知", title: "您是否已满18岁？", text: "您必须年满18岁才可以进入本网站。", enter: "我已满18岁 · 进入", leave: "离开网站" },
    vi: { eyebrow: "THÔNG BÁO QUAN TRỌNG", title: "Bạn đã đủ 18 tuổi?", text: "Bạn phải từ 18 tuổi trở lên để truy cập trang web này.", enter: "Tôi đã đủ 18 · Vào trang", leave: "Rời trang web" },
    ar: { eyebrow: "تنبيه مهم", title: "هل عمرك 18 عاماً أو أكثر؟", text: "يجب أن يكون عمرك 18 عاماً على الأقل لدخول هذا الموقع.", enter: "عمري 18+ · دخول", leave: "مغادرة الموقع" },
    ja: { eyebrow: "重要なお知らせ", title: "18歳以上ですか？", text: "このウェブサイトをご利用いただくには18歳以上である必要があります。", enter: "18歳以上です · 入る", leave: "サイトを離れる" },
    ko: { eyebrow: "중요 안내", title: "만 18세 이상입니까?", text: "이 웹사이트에 입장하려면 만 18세 이상이어야 합니다.", enter: "만 18세 이상 · 입장", leave: "사이트 나가기" }
  };
  const words = copy[localStorage.getItem("295-language") || "en"] || copy.en;
  document.body.classList.add("age-gate-locked");
  const gate = document.createElement("div");
  gate.className = "age-gate";
  gate.setAttribute("role", "dialog");
  gate.setAttribute("aria-modal", "true");
  gate.setAttribute("aria-labelledby", "age-gate-title");
  gate.innerHTML = `<div class="age-gate-card"><span>${words.eyebrow}</span><div class="age-gate-mark">18+</div><h2 id="age-gate-title">${words.title}</h2><p>${words.text}</p><div class="age-gate-actions"><button class="age-gate-enter" type="button">${words.enter}</button><button class="age-gate-leave" type="button">${words.leave}</button></div></div>`;
  document.body.appendChild(gate);
  const enter = gate.querySelector(".age-gate-enter");
  enter.focus();
  enter.addEventListener("click", function () {
    sessionStorage.setItem("295-age-confirmed", "yes");
    document.body.classList.remove("age-gate-locked");
    gate.remove();
  });
  gate.querySelector(".age-gate-leave").addEventListener("click", function () {
    if (document.referrer && !document.referrer.startsWith(location.origin)) history.back();
    else location.replace("https://www.google.com.au/");
  });
})();
