//Filter
$('.filter__option').click(function(e) {
  e.stopPropagation();
  $('.filter__option').not(this).next().slideUp();
  $(this).next().slideToggle();
})

$('body').keydown(function(e) {
  if (e.keyCode == 27) {
    $('.filter__drop').slideUp();
  }
})
