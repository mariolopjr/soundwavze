// Check position of scroll, and if it's greater than 80px, add the scrolled
// class to the nav
function nav() {
	var yPos = $(window).scrollTop();

	if (yPos >= 80) {
		$('.nav').addClass('scrolled');
	}
	else {
		$('.nav').removeClass('scrolled');
	}
}

nav();

$(window).scroll(function() {
	nav();
});
