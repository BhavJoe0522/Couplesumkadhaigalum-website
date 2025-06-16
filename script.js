const navLinks = document.querySelectorAll(".nav-catalogue .nav-link");
const catalogueOpenButton = document.querySelector("#catalogue-open-button");
const catalogueCloseButton = document.querySelector("#catalogue-close-button");
catalogueOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
    });

catalogueCloseButton.addEventListener("click", () => catalogueOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => catalogueOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },

    768: {
        slidesPerView: 2
    },

    1024: {
        slidesPerView: 3
    }
  }

});
