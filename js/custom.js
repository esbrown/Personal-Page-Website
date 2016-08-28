$(document).ready(function(){ "use strict";
	$("#github").click(function(e) {
		$("#github-popup").fadeIn(300);
		e.stopImmediatePropagation();
	});
	$("#headshot").click(function() {
		if ($("#headshot").attr('src') === "images/ethan.jpg") {
			$("#headshot").hide();
			$("#headshot").attr('src', 'images/ethan-cartoon.png').fadeIn();
		}
		else {
			$("#headshot").hide();
			$("#headshot").attr('src', 'images/ethan.jpg').fadeIn();
		}
	});
	$("#gmail").click(function(e) {
		$("#gmail-popup").fadeIn(300);
		e.stopImmediatePropagation();
	});
	$(".close-popup-button").click(function() {
		$(".popup-window").fadeOut(300);
	});
	$(document).click(function (e) {
    	if($(".popup-window").is(":visible") && !$(".popup-content").is(e.target)) {
        	$(".popup-window").fadeOut(300);
    	}
	});
	$(function() {
    	$('.box').matchHeight();
	});
});