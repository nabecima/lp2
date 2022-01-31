const header = document.getElementById("header");
const nav = document.getElementById("nav");
const headerBtn = document.querySelector(".l-header__contact-btn");
const campaignBtns = document.querySelectorAll(".p-campaign__button--web");

headerBtn.addEventListener("click", function () {
  scroll("contact");
});

campaignBtns.forEach(function (btn) {
  // debugger;
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
