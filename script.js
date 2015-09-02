// Credit

$(function () {
	$('.scroll a').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 800, 'easeInOutExpo');
		event.preventDefault();
	});
});
