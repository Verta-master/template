//Sliders
var mySwiper = new Swiper ('.catalog__slider--01', {
  pagination: {
    el: '.catalog__pagination--01',
    clickable: true,
  },
  navigation: {
    nextEl: '.catalog__next--01',
    prevEl: '.catalog__prev--01',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1022: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }
  }
});

var mySwiper = new Swiper ('.catalog__slider--02', {
  pagination: {
    el: '.catalog__pagination--02',
    clickable: true,
  },
  navigation: {
    nextEl: '.catalog__next--02',
    prevEl: '.catalog__prev--02',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1022: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }
  }
});
