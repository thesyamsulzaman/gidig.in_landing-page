document.addEventListener("DOMContentLoaded", function () {
  //let mainNav = document.getElementById("js-menu");
  let navListOne = document.querySelector(".nav__list--one");
  let navListTwo = document.querySelector(".nav__list--two");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  const nav = document.querySelector("header");
  let body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight;

  window.addEventListener("scroll", function () {
    nav.className = docElem.scrollTop > 22 ? "nav--background" : "";
  });

  navBarToggle.addEventListener("click", function () {
    navListOne.classList.toggle("nav__list--toggle");
    navListTwo.classList.toggle("nav__list--toggle");
  });
});
