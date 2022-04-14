"use strict";
/*----------------
	TOOLTIP
----------------*/
$('.tooltip').tooltipster({
	content: 'Add to WishList',
	animation: 'grow',
	position: 'top'
});
/*-----------------
	MAIN SLIDER
-----------------*/
$('#main-slider').bxSlider({
	pager: false,
	prevSelector: '#previous',
	prevText: '<img src="images/arrow-left.png">',
	nextSelector: '#next',
	nextText: '<img src="images/arrow-right.png">',
	easing: 'ease-in',
	speed: 800,
	auto: true
});

/*-----------------
   REVIEW SLIDER
-----------------*/
$('#review-slider').bxSlider({
	pager: false,
	controls: false,
	easing: 'ease-in',
	speed: 800,
	auto: true
});



$(function() {

	/*--------------
	   WAYPOINTS
	--------------*/
	// SPECIALS
	$('#specials').waypoint(function() {
		$('#specials span.ribbon').slideDown(600);
	}, {triggerOnce: true}
	);
});