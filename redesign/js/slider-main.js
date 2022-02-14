/*=== Слайдеры ===*/

let gameSlider = $(".main__like--games--carousel");

gameSlider.owlCarousel({
	margin: 35,
	responsiveClass:true,
     responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
	    1745:{
	        items:3,
        }
	} 
});

$('.main__arrow--next').click(function () {
    gameSlider.trigger('next.owl.carousel');
});
$('.main__arrow--prev').click(function () {
    gameSlider.trigger('prev.owl.carousel');
});