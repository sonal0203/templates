
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
var Wh = window.innerHeight;

//main padding top when header having fixed position
var header = $('header');
headerHeight = header.innerHeight();
var main = $('main');
main.css('padding-top', headerHeight);


//navbar toggler event
$('#navbarNav').on('shown.bs.collapse', function () {
  $('body').addClass('overflow-hidden');
  $('.overlay').fadeIn();
});
$('#navbarNav').on('hidden.bs.collapse', function () {
  $('body').removeClass('overflow-hidden');
  $('.overlay').fadeOut();
})

$('.overlay').click(function () {
  $('#navbarNav').collapse('hide');
})

// Preloader
  $(window).on('load', function () {
    $('#preloader')
      .delay(2000)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  });
