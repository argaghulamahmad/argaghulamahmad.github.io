document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	particleground(document.getElementById('particles-ground'), {
		density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#666666',
        lineColor: '#666666',
        particleRadius: 10, // Dot size
        lineWidth: 1,
        curvedLines: false,
        proximity: 100, // How close two dots need to be before they join
        parallax: true
	});
}, false);