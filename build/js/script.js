// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function () {
  var cache = {};

  this.tmpl = function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
      tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'") + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
})();;(function ($) {

  $.fn.myCarousel = function (offset) {
    var $navButtons = $('.carousel-arrows');
    var $elementsList = $('.carousel-list');
    var $pixelsOffset = 225;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minOffset = -(($elementsCount - 3) * $pixelsOffset);
    var $maxOffset = 0;

    $navButtons.each(function () {
      $(this).on('click', function () {
        var $navButton = $(this);

        if ($navButton.hasClass('carousel-arrow-left')) {
          if ($currentLeftValue != $maxOffset) {
            $currentLeftValue += $pixelsOffset;

          }
        }
        if ($navButton.hasClass('carousel-arrow-right')) {
          if ($currentLeftValue != $minOffset) {
            $currentLeftValue -= $pixelsOffset;
          }
        }

        $elementsList.animate({
          left: $currentLeftValue + "px"
        }, 500);
      })

    });
    return this;
  };

}(jQuery));;var profile = {
  firstName: prompt('Введите Имя '),
  lastName: prompt('Введите Фамилию '),

  photo: 'img/jobs.jpg',
  status: prompt('Введите род занятий'),
  objectives: [
    prompt('почему Вы хотите изучать фронтенд'),
    prompt('еще вариант'),
    prompt('и еще один')
                ],
  phone: prompt('Введите контактный телефон'),
  fb: prompt('Вставте сюда адрес профиля фейсбук'),
  feedback: prompt('Введите фидбэк')

};;$(function () {
  $('.carousel-wrapper').myCarousel(1500);
});

document.addEventListener("DOMContentLoaded", function () {
  var results = document.querySelector('.temp-wrap');
  results.innerHTML = tmpl("user", profile);

});