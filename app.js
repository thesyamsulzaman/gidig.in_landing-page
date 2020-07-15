document.addEventListener("DOMContentLoaded", function () {
  let navListOne = document.querySelector(".nav__list--one");
  let navListTwo = document.querySelector(".nav__list--two");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  const nav = document.querySelector("header");
  let body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight;

  const slider = document.querySelector(".slider__container");
  const images = document.querySelectorAll(".slider__container__item img");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");
  let index = 0;
  const size = images[0].clientWidth;
  slider.style.transform = `translateX(${-size * index}px)`;

  // Image Slider
  prevButton.addEventListener("click", () => {
    console.log(index);
    slider.style.transition = "transform 0.4s ease-in-out";
    index--;
    slider.style.transform = `translateX(${-size * index}px)`;
  });
  nextButton.addEventListener("click", () => {
    console.log(index);
    slider.style.transition = "transform 0.4s ease-in-out";
    index++;
    slider.style.transform = `translateX(${-size * index}px)`;
  });

  // Scroll Event
  window.addEventListener("scroll", function () {
    nav.className = docElem.scrollTop > 22 ? "nav--background" : "";
  });

  // Navbar Toggle Event
  navBarToggle.addEventListener("click", function () {
    navListOne.classList.toggle("nav__list--toggle");
    navListTwo.classList.toggle("nav__list--toggle");
  });
});
