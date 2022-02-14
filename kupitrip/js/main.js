$(document).ready(function(){

	if($(window).scrollTop() > 20){
		$('.header').addClass("active");
	}

	let scroll = $(".how__content").offset().top;

	function zero(){
		$(".first").addClass("active");
		$(".big .how__item--circle--img").addClass("active");
	}

	function first(){
		$(".big").addClass("active");
		$(".second .how__item--circle--img").addClass("active");
	}

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 20){
			$('.header').addClass("active");
		}
		else{
			$('.header').removeClass("active");
		}

		if($(window).scrollTop() > scroll - 900){
			$(".zero").addClass("active");
			$(".first .how__item--circle--img").addClass("active");
			if($(window).scrollTop() > scroll - 750){
				setTimeout(zero, 1500);
				if($(window).scrollTop() > scroll - 600){
					setTimeout(first, 3000);
				}
			}
		}
	});

	if($(window).scrollTop() > scroll - 900){
		$(".zero").addClass("active");
		$(".first .how__item--circle--img").addClass("active");
		if($(window).scrollTop() > scroll - 750){
			setTimeout(zero, 1500);
			if($(window).scrollTop() > scroll - 600){
				setTimeout(first, 3000);
			}
		}
	}

	$(window).resize(function(){
		if($(window).width() > 981){
			$(".modal__menu").removeClass("active");
			$(".header__menu").removeClass("active");
			$(".modal__menu--icon").removeClass("active");
		}
	});

	$(".header__menu").on("click", function(){
		$(".modal__menu").toggleClass("active");
		$(this).toggleClass("active");
	});

	$(".video__preview--inner").on("click", function(){
		$(this).addClass("disable");
		let src = $('#video').attr('src');
		src += '?autoplay=1';
		$('#video').attr('src', src);
	});

	// Карусели
	$(".reviews__carousel").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		adaptiveHeight: true,
		infinite: true,
		centerMode: true,
		prevArrow: '<div class="arrow__carousel prev__arrow"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L1 10M1 10L10 19M1 10H25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		nextArrow: '<div class="arrow__carousel next__arrow"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L25 10M25 10L16 19M25 10H1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		responsive: [
		    {
		      breakpoint: 1640,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 998,
		      settings: {
		        slidesToShow: 2,
		        centerMode: false
		      }
		    },
		    {
		      breakpoint: 690,
		      settings: {
		        slidesToShow: 1,
		    	centerMode: false
		      }
		    }
		  ]
	});

});