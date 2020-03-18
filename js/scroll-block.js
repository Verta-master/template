//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.about__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.about__item a').each(function () {
        $(this).parent().removeClass('about__item--active');
    })
    $(this).parent().addClass('about__item--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() + 100;
  $('.about__item a').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.about__item').removeClass("about__item--active");
          $(this).parent().addClass("about__item--active");
      }
  });
};

//scroll to payment anchor
  $('.card__link').click(function() {
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top - 100;
    $('body, html').animate({scrollTop: top}, 500);
  });
