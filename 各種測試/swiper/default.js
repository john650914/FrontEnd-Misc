if (true) {
	const swiper = new Swiper('.swiper', {
		speed: 400,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		loop: true
	});
} else {
	//alert(123);
}
var greeting = 'Hello World';
console.log(greeting);