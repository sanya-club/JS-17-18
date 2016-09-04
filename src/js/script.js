$(function () {
  $('.carousel-wrapper').myCarousel(1500);
});

document.addEventListener("DOMContentLoaded", function () {
  var results = document.querySelector('.temp-wrap');
  results.innerHTML = tmpl("user", profile);

});