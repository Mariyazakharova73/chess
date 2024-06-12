const sliderItems = document.querySelectorAll('.stages__item');
const sliderLine = document.querySelector('.stages__list');
const sliderDots = document.querySelectorAll('.slider__dots-item');
const btnNext = document.querySelector('.slider__bth_right');
const btnPrev = document.querySelector('.slider__bth_left');

let count = 0;
let sliderWidth;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

function showSlide() {
	sliderLine.style.width = (5 * 335) `px`;
	sliderItems.forEach(item => (item.style.width = 335 `px`));
	rollSlide();
}

showSlide();

function nextSlide() {
	count++;
	if (count >= sliderItems.length) {
		count = 0;
	}
	rollSlide();
}

function prevSlide() {
	count--;
	if (count < 0) {
		count = sliderItems.length - 1;
	}
	rollSlide();
}

function rollSlide() {
	sliderLine.style.transform = `translateX(${-count * sliderWidth}px)`;
}
