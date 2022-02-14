$(document).ready(function(){


	// Нажатие на мобильное меню
	$(".mobile__menu--icon").on("click", function(){
		$("body").addClass("scroll");
		$(".mobile__menu").addClass("mobile__menu--fade")
	})

	// Нажатие на крестик закрытия мобильного меню
	$(".mobile__menu--cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("mobile__menu--fade")
	})

	// Нажатие вне мобильного меню
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".mobile__menu").length === 0) {
	        $("body").removeClass("scroll");
			$(".mobile__menu").removeClass("mobile__menu--fade")
	    }
	});

	// Нажатие на +/- в корзине
	$(".cart__number--minus").on("click", function(){
		var a = $(this).siblings(".cart__number--text").text();
		a = parseInt(a);

		if(a > 1){
			a--;
			$(this).siblings(".cart__number--text").text(a);
		}
	});


	$(".cart__number--plus").on("click", function(){
		var a = $(this).siblings(".cart__number--text").text();
		a = parseInt(a);

		if(a < 50){
			a++;
			$(this).siblings(".cart__number--text").text(a);
		}
	});

	// Клик по галлереии пункту

	$(".gallery__point--inner").on("click", function(){
		$(this).toggleClass("gallery__point--bg");
		$(this).children('.gallery__point--icon').toggleClass("gallery__point--icon--transform");
		$(this).siblings('.gallery__point--text--inner').fadeToggle(100).toggleClass("gallery__toggle--flex");
	});


	// Карусельки

	$(".tovar__carousel--min").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		adaptiveHeight: true,
		asNavFor: '.tovar__carousel--max',
		focusOnSelect: true,
		nextArrow: '<i class="fas fa-angle-down carousel__min--arrow carousel__min--arrow--next"></i>',
		prevArrow: '<i class="fas fa-angle-up carousel__min--arrow carousel__min--arrow--prev"></i>',
		responsive: [
		    {
		    	breakpoint: 998,
		    	settings: {
		    		slidesToShow: 3
		      	}
		    }
		  ]
	});

	$(".tovar__carousel--max").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		asNavFor: '.tovar__carousel--min',
		fade: true,
		cssEase: 'linear',
		focusOnSelect: true
	});


	$(".popular__carousel").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '100px',
		prevArrow: '<div class="popular__arrow popular__arrow--prev"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="popular__arrow popular__arrow--next"><i class="fas fa-angle-right"></i></div>',
		responsive: [
		    {
		    	breakpoint: 1200,
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

	$(".gallery__inner--max").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="gallery__arrow--inner gallery__arrow--right"><i class="fas fa-chevron-right gallery__arrow"></i></div>',
		nextArrow: '<div class="gallery__arrow--inner gallery__arrow--left"><i class="fas fa-chevron-left gallery__arrow"></i></div>',
		asNavFor: '.gallery__inner--min',
	});

	$(".gallery__inner--min").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.gallery__inner--max',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
			  	}
			},
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


});