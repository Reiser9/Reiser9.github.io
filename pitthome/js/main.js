$(document).ready(function(){

	const imageSlider = new Swiper(".main__item--img--slider", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".main__item--img--next",
            prevEl: ".main__item--img--prev",
        },
    });

});