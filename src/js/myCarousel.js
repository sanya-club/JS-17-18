(function ($) {

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

}(jQuery));