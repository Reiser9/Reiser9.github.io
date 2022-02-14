$(document).ready(function(){

	// Слайдеры
	$(".location__slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: 2500,
		prevArrow: '<img src="img/prev.svg" alt="назад" class="arrow prev__arrow">',
		nextArrow: '<img src="img/next.svg" alt="вперед" class="arrow next__arrow">'
	});

	$(".top__slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: 2500,
		responsive: [
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 3,
		        }
		    },
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 2,
		        }
		    }
		]
	});

	// Видеофон
	$(".main__bg").prop("muted", true);

});