const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.slider__btn_right',
		prevEl: '.slider__btn_left',
	},
	breakpoints: {
		500: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1366: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},
});
