/* Concatenate all the scripts! 
(...using Prepros. You could also use Gulp, which renders this file irrelevant.) */

//@prepros-prepend vendor/skip-link-focus-fix.js
//@prepros-prepend navigation.js
//@prepros-prepend vendor/inview.js

jQuery(document).ready(function($) {
	
	"use strict";

	// Clear empty paragraphs
	$('p').each(function() {
		var para = $(this);
		if(para.html().replace(/\s|&nbsp;/g, '').length === 0) {
			para.remove();
		}
	});

	// Add classes when stuff becomes visible - uses inview.js
	// See scss/layout/_layout-animation.scss for more information 
	$('.animate').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('visible');
			$(this).removeClass('not-yet-visible');
		} else {
			$(this).off('inview'); // don't repeat
		}
	});

});