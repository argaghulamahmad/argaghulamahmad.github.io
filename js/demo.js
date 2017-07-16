document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	particleground(document.getElementById('particles'), {
		minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#666666',
        lineColor: '#666666',
        particleRadius: 9, // Dot size
        lineWidth: 1,
        curvedLines: true,
        proximity: 100, // How close two dots need to be before they join
        parallax: false
	});
	var body = document.getElementById('body');
	body.style.marginTop = - (body.offsetHeight) + 'px';
}, false);