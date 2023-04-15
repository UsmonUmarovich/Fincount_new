const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

menuIcon = document.querySelector(".menu-icon");
menuIcon.onclick = function () {
  menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("active");
  blurscreen = document.querySelector(".blur");
  blurscreen.classList.toggle("active");
  menu = document.querySelector(".menu");
  menu.classList.toggle("active");
};

TranslateMenuIcon = document.querySelector(".translate-menu-icon");
TranslateMenuIcon.onclick = function () {
  TranslateMenuIcon.classList.toggle("active");
};
