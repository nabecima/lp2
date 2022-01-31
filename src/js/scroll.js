const header = document.getElementById("header");
const nav = document.getElementById("nav");
const headerBtn = document.querySelector(".l-header__contact-btn");
const heroBtn = document.querySelector(".p-hero__btn");
const campaignBtns = document.querySelectorAll(".p-campaign__button--web");
const navBtns = document.querySelectorAll(".l-nav__link");
const targets = ["hero", "notice", "services", "cost", "faq", "contact"];

headerBtn.addEventListener("click", function () {
  scroll("contact");
});

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function () {
    scroll(targets[i]);
  });
}

heroBtn.addEventListener("click", function () {
  scroll("contact");
});

campaignBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    scroll("contact");
  });
});

function scroll(element) {
  const target = document.getElementById(element);
  const rect = target.getBoundingClientRect();
  document.documentElement.scrollTop =
    rect.top + scrollY - headerBtn.clientHeight - nav.clientHeight;
}
