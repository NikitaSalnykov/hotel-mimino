
const swiper = new Swiper('.swiper-restaurant', {
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