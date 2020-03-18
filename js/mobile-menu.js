//Mobile menu
$('.header__menu').click(function() {
  $('.mobile--menu').addClass('mobile--opened');
});

$('.mobile__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});

$('.mobile__nav-btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('mobile__nav-btn--up');
});

$('.mobile__city').click(function() {
  $('.mobile--city').addClass('mobile--opened');
  $('.mobile--menu').removeClass('mobile--opened');
});

$('.nav__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});
