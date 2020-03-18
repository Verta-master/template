//Info slider
var breakpoint = window.matchMedia('(min-width: 1200px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.info__slider', {
    pagination: {
      el: '.info__pagination',
      clickable: true,
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    spaceBetween: 30,
      breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      1022: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
