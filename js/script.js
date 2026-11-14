// function toggleProject(el, event) {
//   if (event) event.stopPropagation();

//   const card = el.classList.contains("project-card")
//     ? el
//     : el.closest(".project-card");

//   const detail = card.querySelector(".project-detail");
//   const btn = card.querySelector(".detail-btn");

//   const isOpen = detail.classList.contains("open");

//   if (isOpen) {
//     // ===== ปิด =====
//     detail.classList.remove("open");
//     if (btn) btn.style.display = "inline-block";

//   } else {
//     // ===== เปิด =====
//     detail.classList.add("open");
//     if (btn) btn.style.display = "none";
//   }
// }

function toggleLang() {
  document.body.classList.toggle("th-mode");

  const isTH = document.body.classList.contains("th-mode");
  localStorage.setItem("lang", isTH ? "th" : "en");

  document.getElementById("langFlag").src = isTH
    ? "icon/en.png"
    : "icon/th.png";
}

window.onload = function () {
  const lang = localStorage.getItem("lang");
  if (lang === "th") {
    document.body.classList.add("th-mode");
    document.getElementById("langFlag").src = "icon/en.png";
  }
};

function toggleProject(card) {
  document.querySelectorAll(".project-card").forEach((c) => {
    if (c !== card) {
      c.classList.remove("open");
    }
  });

  card.classList.toggle("open");
}

function toggleMore(e, btn) {
  e.stopPropagation();

  const detail = btn.closest(".project-detail");
  const more = detail.querySelector(".more-images");

  more.classList.toggle("show");

  if (btn.classList.contains("th")) {
    btn.innerText = more.classList.contains("show") ? "ซ่อน" : "แสดงเพิ่มเติม";
  } else {
    btn.innerText = more.classList.contains("show") ? "Show Less" : "Show More";
  }
}

function toggleProject(el, e) {
  if (e) {
    e.stopPropagation();
  }
  const card = el.classList.contains("project-card")
    ? el
    : el.closest(".project-card");

  document.querySelectorAll(".project-card").forEach((c) => {
    if (c !== card) {
      c.classList.remove("open");
    }
  });

  card.classList.toggle("open");
}
