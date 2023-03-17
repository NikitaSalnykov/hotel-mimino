var swiper = new Swiper('.swiper2', {
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
