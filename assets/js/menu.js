jQuery("document").ready(function($){

	var nav = $('.header');

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('#main').height()) {
			nav.addClass("header_fixed");
		} else {
			nav.removeClass("header_fixed");
		}
	});

});
