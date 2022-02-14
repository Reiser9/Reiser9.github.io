$(document).ready(function(){

	$(".phone").mask('+7 (000) 000-00-00');

	$(".header__nav--link").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");

		let top = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// Мобильное меню
	$(".mobile__menu").on("click", function(e){
		$(".modal__menu").addClass("active");
		$("body").addClass("scroll");
	});

	$(".mobile__menu--close").on("click", function(e){
		$(".modal__menu").removeClass("active");
		$("body").removeClass("scroll");
	});

	$(".footer__nav--link").on("click", function(e){
		e.preventDefault();

		$(".modal__menu").removeClass("active");
		$("body").removeClass("scroll");

		let point2 = $(this).attr("data-point");

		let top2 = $("#"+point2).offset().top;
		$('body,html').animate({scrollTop: top2}, 1000);
	});

	$(".work__region, .work__area").hover(function() {
        var e = $(this),
            i = e.attr("data-area");
        $(".work__area").attr("class", "work__area"), $(".work__area[data-area=" + i).attr("class", "work__area active"), $(".work__region").removeClass("active"), $(".work__region[data-area=" + i).addClass("active")
    }, function() {
        $(".work__region").removeClass("active"), $(".work__area").attr("class", "work__area");
    });

	// Слайдеры
	$(".review__content").slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow next__arrow"><img src="img/next.png" /></div>',
		prevArrow: '<div class="arrow prev__arrow"><img src="img/prev.png" /></div>',
		responsive: [
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 2
		      }
		    },
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1
		      }
		    }
		]
	});

	$(".slider__inner").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow__next"><img src="img/next.png" /></div>',
		prevArrow: '<div class="arrow arrow__prev"><img src="img/prev.png" /></div>',
		responsive: [
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1
		      }
		    }
		]
	});

});