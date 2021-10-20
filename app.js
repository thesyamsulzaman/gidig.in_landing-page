// Change navbar background color on scroll
(function () {
  const header = document.querySelector("header");
  const sectionOne = document.querySelector(".hero");

  const sectionOneOptions = {
    rootMargin: "-100% 0px 0px 0px",
  };
  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
})();

// Reveal About Section On Scroll
(function () {
  const aboutSection = document.querySelector(".about");
  const aboutCardHeader = document.querySelector(".about__card__header");
  const aboutCardContent = document.querySelector(".about__card__content");

  const options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("about__card--fadein");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(aboutCardHeader);
  observer.observe(aboutCardContent);
})();

// Reveal Features Section On Scroll
(function () {
  const features = document.querySelector(".features");
  const featuresCardImages = document.querySelectorAll(".features__card__img");
  const featuresCardDescHeaders = document.querySelectorAll(
    ".features__card__desc__header"
  );
  const featuresCardDescContents = document.querySelectorAll(
    ".features__card__desc__content"
  );

  const options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("features__card--fadein");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  featuresCardImages.forEach((featuresCardImage) =>
    observer.observe(featuresCardImage)
  );
  featuresCardDescHeaders.forEach((featuresCardDescHeader) =>
    observer.observe(featuresCardDescHeader)
  );
  featuresCardDescContents.forEach((featuresCardDescContent) =>
    observer.observe(featuresCardDescContent)
  );
})();

// Navbar Toggle
(function () {
  let navListOne = document.querySelector(".nav__list--one");
  let navListTwo = document.querySelector(".nav__list--two");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  const nav = document.querySelector("header");

  // Navbar Toggle Event
  navBarToggle.addEventListener("click", function () {
    navListOne.classList.toggle("nav__list--toggle");
    navListTwo.classList.toggle("nav__list--toggle");
  });
})();

// Testimonial Slider
(function () {
  const slider = document.querySelector(".testimonial__cards");
  const cards = document.querySelectorAll(".testimonial__card");

  const prevButton = document.querySelector(".prevButton");
  const nextButton = document.querySelector(".nextButton");
  console.log(nextButton);
  console.log(prevButton);

  let counter = 0;
  const cardSize = cards[0].clientWidth;
  console.log(cardSize);

  slider.style.transform = `translateX(${-cardSize * counter}px)`;

  nextButton.addEventListener("click", () => {
    nextSlide();
  });
  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  function nextSlide() {
    if (counter >= cards.length - 1) return;
    counter++;
    slider.style.transform = `translateX(${-cardSize * counter}px)`;
  }

  function prevSlide() {
    if (counter <= 0) return;
    counter--;
    slider.style.transform = `translateX(${-cardSize * counter}px)`;
  }

})();

// Image Carousel
(function () {
  const slider = document.querySelector(".slider__container");
  const images = document.querySelectorAll(".slider__container__item img");

  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  const indicators = document.querySelectorAll(".slider__indicator");

  let counter = 2;
  const size = images[2].clientWidth;

  slider.style.transform = `translateX(${-size * counter}px)`;
  indicators[2].classList.add("slider__indicator--active");

  nextButton.addEventListener("click", () => {
    nextSlide();
  });
  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  function nextSlide() {
    if (counter >= images.length - 1) return;
    slider.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;
    dotIndicate();
  }

  function prevSlide() {
    if (counter <= 0) return;
    slider.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
    dotIndicate();
  }

  function autoPlay() {
    nextSlide();
  }

  function dotIndicate() {
    indicators.forEach((indicator) =>
      indicator.classList.remove("slider__indicator--active")
    );
    indicators[counter].classList.add("slider__indicator--active");
  }
})();

document.addEventListener("DOMContentLoaded", function () {});
