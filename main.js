/* 
(function($) {
    
	// JS code goes here
	var header = $('#header'),  // jQuery ID
	h1 = $('h1'),    			// jQuery tag
	intro = $('.intro'), 		// jQuery class
	firstItem = $('li:first-child'), 	// jquery first item
	secondItem = $('li:nth-child(2)'),	// jquery second item
	lastItem = $('li:last-child'); 

})(jQuery);
*/

var header = document.getElementById('header'),
	h1 = document.getElementsByTagName('h1'),
	intro = document.getElementsByClassName('intro'),
	firstItem = document.getElementsByClassName('list')[0].firstElementChild,
	secondItem = document.getElementsByClassName('list')[0].children[1],
	lastItem = document.getElementsByClassName('list')[0].lastElementChild;

TweenLite.to(header, 1, {opacity: 0.4, y: 50});