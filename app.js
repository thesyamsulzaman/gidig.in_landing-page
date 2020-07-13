document.addEventListener("DOMContentLoaded", function () {
  //let mainNav = document.getElementById("js-menu");
  let navListOne = document.querySelector(".nav__list--one");
  let navListTwo = document.querySelector(".nav__list--two");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function () {
    navListOne.classList.toggle("nav__list--toggle");
    navListTwo.classList.toggle("nav__list--toggle");
  });
});
