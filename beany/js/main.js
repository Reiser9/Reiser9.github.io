$(document).ready(function(){

	$(".header__nav--link").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		let top = $("#"+point).offset().top;
		close();
		$('body,html').animate({scrollTop: top}, 500);
	});

	$(".up__button").on("click", function(){
		$('body,html').animate({scrollTop: 0}, 500);
	});

	function close(){
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".close").on("click", function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	// Карусели
	$(".photo__carousel").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		appendArrows: ".slick-list",
		prevArrow: '<div class="arrow prev__arrow"><img src="img/prev-arrow.svg" alt="Предыдущий слайд" class="arrow__img"></div>',
		nextArrow: '<div class="arrow next__arrow"><img src="img/next-arrow.svg" alt="Следующий слайд" class="arrow__img"></div>',
		responsive: [
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		        }
		    },
		    {
		        breakpoint: 480,
		        settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
		        }
		    }
		]
	});

});