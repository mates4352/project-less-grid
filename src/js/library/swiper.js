const swiper = new Swiper('.header__slider-container', {
	loop: true,

	navigation: {
	nextEl: '.header__slider-next',
	prevEl: '.header__slider-prev',
	},

	grabCursor: true,

	slidesPerView: 2,
	freeMode:true,
	
	hashNavigation: {
		watchState:true,
	},
	mousewheel:{
		sensitivity:1,
		eventsTarget: ".header__slider-container" 
	},
	centeredSlides:true,
	freeModeMomentumBounce: true,
	spaceBetween: 45,
	
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		didableOnInteraction:false
	},

	speed:1000,

});