
const swiper = new Swiper('.swiper-restaurant', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 5,
  slidesPerView: 2,

    breakpoints: {
    // при ширине экрана больше или равной 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 32,
    }
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper-s', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  slidesPerView: 2,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});