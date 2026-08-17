/* =====================================================
   WEEKLY ROSTER DATA
   每周排班资料
===================================================== */

/* =====================================================
   HOVER PHOTO BACKEND FIELDS
   Add each person's B/C/D paths here. Both the homepage
   and Gallery page use this single configuration.
===================================================== */
const hoverPhotoData = {
  ai: ["images/Ai1.jpg", "images/Ai2.jpg", "images/Ai3.jpg"],
  amber: ["images/amber1.jpg", "images/amber2.jpg"],
  amy: ["images/Amy1.jpg", "images/Amy2.jpg", "images/Amy3.jpg", "images/Amy4.jpg", "images/Amy5.jpg"],
  andie: ["images/Andie1.jpg", "images/Andie2.jpg", "images/Andie3.jpg"],
  ayumi: ["images/Ayumi1.jpg", "images/Ayumi2.jpg", "images/Ayumi3.jpg", "images/Ayumi4.jpg", "images/Ayumi5.jpg"],
  candice: ["images/candice1.jpg", "images/candice2.jpg"],
  claire: ["images/Claire1.jpg", "images/Claire2.jpg"],
  domi: ["images/domi1.jpg"],
  bb: ["images/BB1.jpg", "images/BB2.jpg", "images/BB2-1.jpg", "images/BB3.jpg"],
  christy: ["images/Christy1.jpg", "images/Christy2.jpg"],
  doris: ["images/Doris1.jpg", "images/Doris2.jpg", "images/Doris3.jpg", "images/Doris4.jpg", "images/Doris5.jpg"],
  isabella: ["images/Isabella1.jpg", "images/Isabella2.jpg"],
  jade: ["images/Jade1.jpg", "images/Jade2.jpg", "images/Jade3.jpg"],
  jasmine: ["images/Jasmine2.jpg", "images/Jasmine3.jpg", "images/Jasmine4.jpg"],
  jenifer: ["images/Jenifer1.jpg", "images/Jenifer2.jpg", "images/Jenifer3.jpg"],
  jeniffer: ["images/Jenifer1.jpg", "images/Jenifer2.jpg", "images/Jenifer3.jpg"],
  jennifer: ["images/Jennifer1.jpg", "images/Jennifer2.jpg", "images/Jennifer3.jpg"],
  lina: ["images/lina1.jpg", "images/lina2.jpg", "images/lina3.jpg", "images/lina4.jpg", "images/lina5.jpg"],
  lucy: ["images/lucy1.jpg", "images/lucy2.jpg", "images/lucy3.jpg"],
  may: ["images/May1.jpg", "images/May2.jpg"],
  melody: ["images/Melody1.jpg", "images/Melody2.jpg", "images/Melody3.jpg", "images/Melody4.jpg"],
  mickey: ["images/Mickey1.jpg", "images/Mickey2.jpg", "images/Mickey3.jpg"],
  mina: ["images/Mina1.jpg", "images/Mina2.jpg", "images/Mina3.jpg"],
  rina: ["images/Rina1.jpg", "images/Rina2.jpg", "images/Rina3.jpg"],
  selina: ["images/selina1.jpg"],
  sky: ["images/sky1.jpg", "images/sky2.jpg", "images/sky3.jpg", "images/sky4.jpg", "images/sky5.jpg"],
  sofia: ["images/sofia1.jpg"],
  tia: ["images/tia1.jpg", "images/tia2.jpg", "images/tia3.jpg", "images/tia4.jpg"],
  wendy: ["images/Wendy1.jpg", "images/Wendy2.jpg"]
};

function hoverPhotoKey(name) {
  return name.toLowerCase().trim().split(/\s+/)[0];
}

function getHoverImages(person) {
  return (person.hoverImages || hoverPhotoData[hoverPhotoKey(person.name)] || []).slice(0, 5);
}

const legacyRosterSource = String.raw`
  monday: [
    {
      name: "Sky",
      role: "Massage Therapist",
      image: "images/sky.jpg",
      hours: "Thai"
    },
    {
      name: "Domi",
      role: "Wellness Practitioner",
      image: "images/domi.jpg",
      hours: "Chinese"
    },
    {
      name: "Claire",
      role: "Massage Therapist",
      image: "images/claire.jpg",
      hours: "Taiwan"
    },
    {
      name: "lucy",
      role: "Massage Therapist",
      image: "images/lucy.jpg",
      hours: "Chinese"
    },
    {
      name: "Doris",
      role: "Wellness Practitioner",
      image: "images/doris.jpg",
      hours: "Chinese"
    },
   {
      name: "tia",
      role: "Wellness Practitioner",
      image: "images/tia.jpg",
      hours: "vietnamese"
    },
  ],

  tuesday: [
    {
      name: "Ayumi",
      role: "Massage Therapist",
      image: "images/ayumi.jpg",
      hours: "Japanese"
    },
    {
      name: "Melody 12-5PM",
      role: "Massage Therapist",
      image: "images/Melody.jpg",
      hours: "Brazil"
    },
{
      name: "Jasmine",
      role: "Massage Therapist",
      image: "images/jasmine.jpg",
      hours: "Thai"

    },
    
    {
      name: "selina",
      role: "Massage Therapist",
      image: "images/selina.jpg",
      hours: "Japanese"

    },

    {
      name: "Lucy",
      role: "Massage Therapist",
      image: "images/lucy.jpg",
      hours: "Chinese"
    },
{
      name: "sofia",
      role: "Massage Therapist",
      image: "images/sofia.jpg",
      hours: "Philippines"
    },
    {
      name: "tia",
      role: "Wellness Practitioner",
      image: "images/tia.jpg",
      hours: "vietnamese"
    }
  ],

  wednesday: [ 
    {
      name: "Jenifer",
      role: "Massage Therapist",
      image: "images/Jenifer.jpg",
      hours: "Singapore"
    },
    {
      name: "lina",
      role: "Massage Therapist",
      image: "images/lina.jpg",
      hours: "korea"
    },
      {
      name: "Lucy",
      role: "Massage Therapist",
      image: "images/lucy.jpg",
      hours: "Chinese"
    },
   {
    name: "Ayumi",
      role: "Massage Therapist",
      image: "images/ayumi.jpg",
      hours: "Japanese"
    },  

    {
      name: "Mina ",
      role: "Wellness Practitioner",
      image: "images/mina.jpg",
      hours: "Thai"
    },
    {
      name: "Melody  11-8PM",
      role: "Massage Therapist",
      image: "images/Melody.jpg",
      hours: "Brazil"
    },
    {
      name: "sofia",
      role: "Massage Therapist",
      image: "images/sofia.jpg",
      hours: "Philippines"
    }
   
    
  ],
{
  "thursday": [
    {
      "name": "Lucy",
      "role": "Massage Therapist",
      "image": "images/lucy.jpg",
      "nationality": "Chinese"
    },
    {
      "name": "Angela",
      "role": "Massage Therapist",
      "image": "images/Angela.jpg",
      "nationality": "Chinese"
    },
    {
      "name": "Candice",
      "role": "Massage Therapist",
      "image": "images/Candice.jpg",
      "nationality": "Taiwan"
    },
    {
      "name": "Ayumi",
      "role": "Massage Therapist",
      "image": "images/ayumi.jpg",
      "nationality": "Japanese"
    },
    {
      "name": "Isabella",
      "role": "Massage Therapist",
      "image": "images/Isabella.jpg",
      "nationality": "Singapore"
    },
    {
      "name": "Tia",
      "role": "Massage Therapist",
      "image": "images/tia.jpg",
      "nationality": "Vietnamese"
    },
    {
      "name": "May",
      "role": "Massage Therapist",
      "image": "images/May.jpg",
      "nationality": "Chinese"
    },
    {
      "name": "Andie",
      "role": "Wellness Practitioner",
      "image": "images/Andie.jpg",
      "nationality": "Chinese"
    }
  ]
}


  friday: [
    {
      name: "selina",
      role: "Massage Therapist",
      image: "images/selina.jpg",
      hours: "Chinese"
    }, 
    {name: "Ayumi",
      role: "Massage Therapist",
      image: "images/ayumi.jpg",
      hours: "Japanese"
    },
  
    {
      name: "AI 8pm-3am",
      role: "Massage Therapist",
      image: "images/ai.jpg",
      hours: "Japanese"
    },
    {
      name: "Tia",
      role: "Massage Therapist",
      image: "images/tia.jpg",
      hours: "vietnamese"
    

    },
    
    {
      name: "Melody 1-8PM",
      role: "Massage Therapist",
      image: "images/melody.jpg",
      hours: "Brazil"
    }
    
  ],

saturday: [
  {
    name: "Mickey",
    role: "Massage Therapist",
    image: "images/Mickey.jpg",
    hours: "Chinese"
  },
  {
      name: "Rina",
      role: "Massage Therapist",
      image: "images/Rina.jpg",
      hours: "Chinese"
    },
{
    name: "Jade",
    role: "Massage Therapist",
    image: "images/Jade.jpg",
    hours: "Chinese"
  },
  {
    name: "Ayumi ",
    role: "Wellness Practitioner",
    image: "images/2.1.jpg",
    hours: "Japanese"
  },
  {
    name: "Melody 1-8PM",
    role: "Massage Therapist",
    image: "images/3.1.jpg",
    hours: "Brazil"
  },
  {
    name: "Tia",
    role: "Massage Therapist",
    image: "images/tia.jpg",
    hours: "vietnamese"
  },
{
    name: "Wendy",
    role: "Massage Therapist",
    image: "images/wendy.jpg",
    hours: "Chinese"
  },
  
  {
    name: "ai",
    role: "Massage Therapist",
    image: "images/ai.jpg",
    hours: "Japanese"
  }

],


  sunday: [
    {
      name: "Ayumi",
      role: "Wellness Practitioner",
      image: "images/sun3.jpg",
      hours: "Japanese"
    },
     {
      name: "Sky",
      role: "Massage Therapist",
      image: "images/sky.jpg",
      hours: "Thai"
    },
    {
      name: "Ai 8pm-3am",
      role: "Massage Therapist",
      image: "images/ai.jpg",
      hours: "Japanese"

    },
    {
      name: "Melody",
      role: "Massage Therapist",
      image: "images/sun4.jpg",
      hours: "Brazil 12-5pm"
    },
    {
      name: "Tia",
      role: "Massage Therapist",
      image: "images/tia.jpg",
      hours: "vietnamese"
    },
    {
      name: "Lucy",
      role: "Massage Therapist",
      image: "images/lucy.jpg",
      hours: "Chinese"
    

    }
    
  ]
`;

const rosterData = window.ORIGINAL_ROSTER || {};


/* =====================================================
   DAY LABELS
===================================================== */

const dayLabels = {
  monday: {
    english: "Monday Roster",
    chinese: "周一治疗师"
  },
  tuesday: {
    english: "Tuesday Roster",
    chinese: "周二治疗师"
  },
  wednesday: {
    english: "Wednesday Roster",
    chinese: "周三治疗师"
  },
  thursday: {
    english: "Thursday Roster",
    chinese: "周四治疗师"
  },
  friday: {
    english: "Friday Roster",
    chinese: "周五治疗师"
  },
  saturday: {
    english: "Saturday Roster",
    chinese: "周六治疗师"
  },
  sunday: {
    english: "Sunday Roster",
    chinese: "周日治疗师"
  }
};


/* =====================================================
   ROSTER ELEMENTS
===================================================== */

const scheduleContent = document.querySelector("#schedule-content");
const dayTabs = [...document.querySelectorAll(".day-tab")];
const rosterDayLabel = document.querySelector("#roster-day-label");
const rosterDayTitle = document.querySelector("#roster-day-title");
const previousButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

const additionalGalleryPeople = [
  { name: "Anna", image: "images/anna.jpg", hours: "" },
  { name: "Bobo", image: "images/bobo.jpg", hours: "" },
  { name: "Lulu", image: "images/lulu.jpg", hours: "" },
  { name: "Sara", image: "images/Sara.jpg", hours: "" },
  { name: "KK", image: "images/kk.jpg", hours: "" },
  { name: "Angela", image: "images/Angela.jpg", hours: "" },
  { name: "Andie", image: "images/andie.jpg", hours: "" },
  { name: "Enaya", image: "images/Enaya.jpg", hours: "" }
];

/* Gallery priority list. Edit this array to change the first cards. */
const featuredGalleryPeople = [
  { name: "Jennifer", nationality: "Singaporean", height: "168 cm", weight: "50 kg", age: 26, cup: "D", description: "Glamorous Singaporean team member", image: "images/Jennifer.jpg", hoverImages: ["images/Jennifer1.jpg", "images/Jennifer2.jpg", "images/Jennifer3.jpg"] },
  { name: "Selina", nationality: "Chinese", height: "164 cm", weight: "48 kg", age: 22, cup: "C", description: "Attractive Chinese beauty", image: "images/Selina-new.jpg", hoverImages: ["images/selina.jpg", "images/selina1.jpg"] },
  { name: "Christy", description: "Meet Christy", image: "images/Christy.jpg", hoverImages: ["images/Christy1.jpg", "images/Christy2.jpg"] },
  { name: "BB", description: "Meet BB", image: "images/BB.jpg", hoverImages: ["images/BB1.jpg", "images/BB2.jpg", "images/BB2-1.jpg", "images/BB3.jpg"] },
  { name: "Domi", nationality: "Chinese", height: "160 cm", weight: "44 kg", age: 21, cup: "B", description: "New young Chinese team member", image: "images/domi.jpg", hoverImages: ["images/domi1.jpg"] },
  { name: "Sky", nationality: "Thai", height: "168 cm", weight: "48 kg", age: 22, cup: "B", description: "New tall and slim Thai team member", image: "images/sky.jpg" },
  { name: "Doris", nationality: "Chinese", height: "164 cm", weight: "52 kg", age: 23, cup: "D", description: "Adorable Chinese team member", image: "images/doris.jpg" },
  { name: "Lucy", nationality: "Chinese", height: "162 cm", weight: "54 kg", age: 23, cup: "D", description: "Excellent Chinese massage practitioner", image: "images/lucy.jpg" },
  { name: "Aya", nationality: "Chinese", height: "169 cm", weight: "50 kg", age: 24, cup: "C", description: "Friendly Chinese team member", image: "images/aya.jpg" }
];

function normalisePersonKey(name = "") {
  const key = name
    .trim()
    .toLowerCase()
    .replace(/\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?(?:\s*[-–]\s*\d{1,2}(?::\d{2})?\s*(?:am|pm)?)?$/i, "")
    .trim();
  if (["jenifer", "jeniffer", "jennifer"].includes(key)) return "jennifer";
  return key;
}

function getCompleteTeamData() {
  const unique = new Map();
  const addPeople = people => people.forEach(person => {
    const key = normalisePersonKey(person.name);
    if (key && !unique.has(key)) unique.set(key, person);
  });

  addPeople(featuredGalleryPeople);
  addPeople(Object.values(window.WEEKLY_ROSTER?.days || {}).flat());
  addPeople(Object.values(rosterData).flat());
  addPeople(additionalGalleryPeople);

  return [...unique.values()];
}


/* =====================================================
   RENDER ROSTER
===================================================== */

function renderSchedule(day) {
  if (!scheduleContent) return;

  const people = rosterData[day] || [];
  const label = dayLabels[day];

  scheduleContent.style.opacity = "0";

  window.setTimeout(() => {
    if (rosterDayLabel && label) {
      rosterDayLabel.textContent = label.english;
    }

    if (rosterDayTitle && label) {
      rosterDayTitle.textContent = label.chinese;
    }

    if (people.length === 0) {
      scheduleContent.innerHTML = `
        <div class="empty-roster">
          <p>No practitioner availability has been published for this day.</p>
        </div>
      `;

      scheduleContent.style.opacity = "1";
      return;
    }

    scheduleContent.innerHTML = people.map(person => {
      const hoverImages = getHoverImages(person);

      return `
      <article class="therapist-card">

        <div class="therapist-image hover-gallery" data-hover-images='${JSON.stringify(hoverImages)}'>
          <img
            src="${person.image}"
            data-original-src="${person.image}"
            alt="${person.name} — ${person.role}"
            loading="lazy"
          >
        </div>

        <div class="therapist-info">
          <h4>${person.name}</h4>
          <p>${person.role}</p>
          <p>${person.hours}</p>
        </div>

      </article>
    `;
    }).join("");

    initialiseHoverGalleries(scheduleContent);
    if (typeof applySiteLanguage === "function") {
      applySiteLanguage(localStorage.getItem("295-language") || "en");
    }

    scheduleContent.scrollLeft = 0;
    scheduleContent.style.opacity = "1";
    restartRosterAutoplay();
  }, 120);
}

function renderTeamGallery() {
  if (!scheduleContent) return;

  const people = getCompleteTeamData();
  scheduleContent.innerHTML = people.map(person => {
    const hoverImages = getHoverImages(person);
    const nationality = person.nationality || person.hours || "";
    const role = person.role || "";
    const facts = [
      person.height,
      person.weight,
      person.age ? `${person.age} yo` : "",
      person.cup ? `${person.cup} cup` : ""
    ].filter(Boolean);

    return `
      <article class="therapist-card team-profile-card" tabindex="0">
        <div class="therapist-image hover-gallery" data-hover-images='${JSON.stringify(hoverImages)}'>
          <img src="${person.image}" data-original-src="${person.image}" alt="${person.name}" loading="lazy">
          <div class="gallery-profile-overlay team-profile-overlay">
            <h3>${person.name}</h3>
            ${person.description ? `<p>${person.description}</p>` : ""}
            <div>
              ${[nationality, role, ...facts].filter(Boolean).map(fact => `<span>${fact}</span>`).join("")}
            </div>
          </div>
        </div>
        <div class="therapist-info">
          <h4>${person.name}</h4>
          ${nationality ? `<p>${nationality}</p>` : ""}
          ${facts.length ? `<p class="team-card-facts">${facts.join(" · ")}</p>` : ""}
        </div>
      </article>
    `;
  }).join("");

  initialiseHoverGalleries(scheduleContent);
  scheduleContent.scrollLeft = 0;
  scheduleContent.style.opacity = "1";
}

/* =====================================================
   PHOTO HOVER GALLERIES
   A is the normal image. While hovered, available -b,
   -c and -d files rotate every 2 seconds.
===================================================== */

const HOVER_ROTATION_MS = 2000;

function initialiseHoverGalleries(scope = document) {
  scope.querySelectorAll(".hover-gallery").forEach(gallery => {
    if (gallery.dataset.hoverReady === "true") return;
    gallery.dataset.hoverReady = "true";

    const image = gallery.querySelector("img");
    if (!image) return;

    const original = image.dataset.originalSrc || image.currentSrc || image.src;
    let requested = [];
    try { requested = JSON.parse(gallery.dataset.hoverImages || "[]"); } catch (_) { requested = []; }

    const available = [];
    requested.forEach(src => {
      const probe = new Image();
      probe.onload = () => available.push(src);
      probe.src = src;
    });

    let timer = null;
    let index = 0;

    const showNext = () => {
      if (!available.length) return;
      image.classList.add("is-changing");
      window.setTimeout(() => {
        image.src = available[index % available.length];
        index += 1;
        image.classList.remove("is-changing");
      }, 180);
    };

    gallery.addEventListener("mouseenter", () => {
      showNext();
      timer = window.setInterval(showNext, HOVER_ROTATION_MS);
    });

    gallery.addEventListener("mouseleave", () => {
      window.clearInterval(timer);
      timer = null;
      index = 0;
      image.src = original;
      image.classList.remove("is-changing");
    });
  });
}

// Also enable the same 2-second hover rotation on standalone feature images.
initialiseHoverGalleries(document);


/* =====================================================
   DAY TAB CONTROLS
===================================================== */

// The homepage section is an all-staff carousel. The weekly announcement
// remains a separate, date-based section managed by weekly-roster.js.


/* =====================================================
   SLIDER CONTROLS
===================================================== */

let rosterAutoplayTimer = null;

function rosterCardStep() {
  const firstCard = scheduleContent?.querySelector(".therapist-card");
  if (!firstCard) return 242;
  const styles = window.getComputedStyle(scheduleContent);
  const gap = parseFloat(styles.columnGap || styles.gap || "14") || 14;
  return firstCard.getBoundingClientRect().width + gap;
}

function moveRosterCarousel(direction = 1) {
  if (!scheduleContent) return;
  const step = rosterCardStep();
  const maxScroll = Math.max(0, scheduleContent.scrollWidth - scheduleContent.clientWidth);
  const atEnd = scheduleContent.scrollLeft >= maxScroll - 8;
  const atStart = scheduleContent.scrollLeft <= 8;
  if ((direction > 0 && atEnd) || (direction < 0 && atStart)) {
    scheduleContent.scrollTo({ left: direction > 0 ? 0 : maxScroll, behavior: "smooth" });
  } else {
    scheduleContent.scrollBy({ left: direction * step, behavior: "smooth" });
  }
}

function stopRosterAutoplay() {
  window.clearInterval(rosterAutoplayTimer);
  rosterAutoplayTimer = null;
}

function restartRosterAutoplay() {
  if (!scheduleContent || scheduleContent.children.length < 2) return;
  stopRosterAutoplay();
  rosterAutoplayTimer = window.setInterval(() => moveRosterCarousel(1), 6000);
}

if (previousButton && scheduleContent) {
  previousButton.addEventListener("click", () => {
    moveRosterCarousel(-1);
    restartRosterAutoplay();
  });
}

if (nextButton && scheduleContent) {
  nextButton.addEventListener("click", () => {
    moveRosterCarousel(1);
    restartRosterAutoplay();
  });
}

const rosterSliderWrap = document.querySelector(".roster-slider-wrap");
rosterSliderWrap?.addEventListener("mouseenter", stopRosterAutoplay);
rosterSliderWrap?.addEventListener("mouseleave", restartRosterAutoplay);
rosterSliderWrap?.addEventListener("focusin", stopRosterAutoplay);
rosterSliderWrap?.addEventListener("focusout", restartRosterAutoplay);

if (scheduleContent) {
  renderTeamGallery();
  restartRosterAutoplay();
}


/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}


/* =====================================================
   CONTACT FORM
===================================================== */

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    if (formStatus) {
      const language = localStorage.getItem("295-language") || "en";
      const messages = {
        en: "Your enquiry has been recorded. Please connect this form to your booking system before publishing.",
        zh: "您的咨询已记录。发布网站前，请将此表单连接到预约系统。",
        vi: "Yêu cầu của bạn đã được ghi nhận. Vui lòng kết nối biểu mẫu với hệ thống đặt lịch trước khi xuất bản.",
        ar: "تم تسجيل استفسارك. يرجى ربط النموذج بنظام الحجز قبل نشر الموقع.",
        ja: "お問い合わせを受け付けました。公開前にフォームを予約システムへ接続してください。",
        ko: "문의가 기록되었습니다. 게시 전에 이 양식을 예약 시스템에 연결해 주세요."
      };
      formStatus.textContent = messages[language] || messages.en;
    }

    form.reset();
  });
}


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =====================================================
   FLOATING IMAGE PREVIEW
===================================================== */

const floatingPhotoButton = document.querySelector("#floating-photo-button");
const floatingPhotoModal = document.querySelector("#floating-photo-modal");
const floatingPhotoClose = document.querySelector("#floating-photo-close");

function openFloatingPhoto() {
  if (!floatingPhotoModal) return;
  floatingPhotoModal.classList.add("open");
  floatingPhotoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  floatingPhotoClose?.focus();
}

function closeFloatingPhoto() {
  if (!floatingPhotoModal) return;
  floatingPhotoModal.classList.remove("open");
  floatingPhotoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  floatingPhotoButton?.focus();
}

floatingPhotoButton?.addEventListener("click", openFloatingPhoto);
floatingPhotoClose?.addEventListener("click", closeFloatingPhoto);

floatingPhotoModal?.addEventListener("click", event => {
  if (event.target === floatingPhotoModal) closeFloatingPhoto();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && floatingPhotoModal?.classList.contains("open")) {
    closeFloatingPhoto();
  }
});


/* =====================================================
   REUSABLE IMAGE LIGHTBOX
===================================================== */
const imageLightbox = document.querySelector('#image-lightbox');
const imageLightboxImg = imageLightbox?.querySelector('img');
const imageLightboxClose = imageLightbox?.querySelector('.image-lightbox-close');

document.querySelectorAll('[data-image-open]').forEach(button => {
  button.addEventListener('click', () => {
    if (!imageLightbox || !imageLightboxImg) return;
    imageLightboxImg.src = button.querySelector('img')?.src || button.dataset.imageOpen;
    imageLightbox.classList.add('open');
    imageLightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
});

function closeImageLightbox(){
  if (!imageLightbox) return;
  imageLightbox.classList.remove('open');
  imageLightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}
imageLightboxClose?.addEventListener('click', closeImageLightbox);
imageLightbox?.addEventListener('click', event => {
  if (event.target === imageLightbox) closeImageLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeImageLightbox();
});
