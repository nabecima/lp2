const burger = document.querySelector(".l-header__burger");
const nav = document.querySelector(".l-nav__links");
const active = "is-active";

burger.addEventListener("click", function () {
  this.classList.toggle(active);
  nav.classList.toggle(active);
});
