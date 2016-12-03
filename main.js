// Check position of scroll, and if it's greater than 80px, add the scrolled
// class to the nav
$(function() {
  return $(window).on('scroll', function() {
    var yPos = $(window).scrollTop();

  	if (yPos >= 80) {
  		$('.nav').addClass('scrolled');
  	}
  	else {
  		$('.nav').removeClass('scrolled');
  	}
  });
});

// Check position of scroll, and if it's greater than 150px, remove the hidden
// class from the to-top button
$(function() {
  return $(window).on('scroll', function() {
    var yPos = $(window).scrollTop();

  	if (yPos >= 150) {
  		$('.to-top').removeClass('hidden');
  	}
  	else {
  		$('.to-top').addClass('hidden');
  	}
  });
});

// Checks if an element is in the viewport
var isElementInViewport = function($e, yPos) {

	// Hold the top and bottom for the element
  var yTop, yBottom;

  yTop = $e.offset().top - yPos;
	yBottom = $e.offset().top + $e.outerHeight();

  if (yTop <= $(window).height() && yBottom - yPos >= 0) {
    return true;
  } else {
    return false;
  }
};

// Checks the element position in relation to the viewport
$(function() {

	// Hidden sections
	var $sections;

	$sections = $('.hidden-section');

  return $(window).on('scroll', function() {
    return $sections.each(function() {
      var elementInViewport = isElementInViewport($(this), $(window).scrollTop() - 150);
      if (elementInViewport && !$(this).hasClass('visible-section')) {
        return $(this).addClass('visible-section');
      }
    });
  });
});

// Execute when clicking on the back to top button
$(".to-top").on('click', function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});
