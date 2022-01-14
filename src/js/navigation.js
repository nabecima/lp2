const header = document.querySelector(".l-header");
const burger = document.querySelector(".l-header__burger");
const nav = document.querySelector(".l-nav__links");
const body = document.querySelector("#body");
const active = "is-active";

burger.addEventListener("click", function () {
  this.classList.toggle(active);
  header.classList.toggle("shadow");
  nav.classList.toggle(active);
  body.classList.toggle(active);
});
