'use strict'

let arrows = document.body.querySelectorAll('.arrow');
let gallery = document.body.querySelector('.gallery');

let position = 0;
let imagesTotal = gallery.querySelectorAll('li').length;

function clickLeft() {
	position = position <= 2 ? 0 : position - 3;
	gallery.scrollLeft = position * 130;
}

function clickRight() {
	if (position > imagesTotal - 2) return;
	position += 3;

	gallery.scrollLeft = position * 130;
}


arrows[0].addEventListener('click', clickLeft);
arrows[1].addEventListener('click', clickRight);
