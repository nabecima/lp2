const header = document.getElementById("header");
const nav = document.getElementById("nav");
const headerBtn = document.querySelector(".l-header__contact-btn");
const heroBtn = document.querySelector(".p-hero__btn");
const campaignBtns = document.querySelectorAll(".p-campaign__button--web");
// const buttons = [headerBtn, heroBtn, campaignBtns];

// buttons.forEach((btn) => {
//   console.log(btn instanceof Array);
// });
headerBtn.addEventListener("click", function () {
  scroll("contact");
});

heroBtn.addEventListener("click", function () {
  scroll("contact");
});

campaignBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    scroll("contact");
  });
});

function scroll(element) {
  const contact = document.getElementById(element);
  const rect = contact.getBoundingClientRect();
  document.documentElement.scrollTop =
    rect.top + scrollY - headerBtn.clientHeight - nav.clientHeight;
  console.log(rect, scrollY);
}
