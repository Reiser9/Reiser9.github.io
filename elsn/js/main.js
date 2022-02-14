$(document).ready(function(){

	$("#phone").mask("+7(999)-999-99-99");
	$("#phone2").mask("+7(999)-999-99-99");

	$(".footer__button--up").on("click", function (event) {
		event.preventDefault();

		$('body,html').animate({scrollTop: 0}, 1500);
	});

	$(window).on("scroll", function(){
		var set = $(window).scrollTop();
		if(set > 137 && $(window).width() > 751){
			$(".nav__top").fadeIn(100);
			$(".footer__button--up").css("display", "flex");
		}
		else{
			$(".nav__top").fadeOut(100);
			$(".footer__button--up").fadeOut(100);
		}
	});


	var child = $(".slider__item").length;
	$(".slides__of").text(child);

	var slides = $(".slides__val").text().trim();
	$(document).on("click", ".slider__arrow--next", function(){
		if(parseInt(slides) != parseInt(child)){
			slides++;
			$(".slides__val").text(slides);
		}
	});



	$(".header__data--inner").on("click", function(e){
		e.preventDefault();

		$(".header__data--text").fadeOut(0);
		$(".header__absolute--text").fadeOut(0);
		$(this).children(".header__data--text").fadeIn(0);
		$(this).children(".header__absolute--text").fadeIn(0);
	});



	$(window).resize(function(){
		if($(window).width() >= 768){
			$(".modal").fadeOut(100);
			$("body").removeClass("scroll");
		}
	});

	$(".online__item--text").on("click", function(){
		$(this).toggleClass("online__item--text--active");
		if($(this).hasClass("online__item--text--active")){
			$(this).siblings(".online__item--flex").fadeIn(0).css("display", "flex");
		}
		else{
			$(this).siblings(".online__item--flex").slideUp(0);
		}
	});

	$(document).on("click", ".slider__arrow--prev", function(){
		if(parseInt(slides) != 1){
			slides--;
			$(".slides__val").text(slides);
		}
	});

	$("a[data-accar='true']").on("click", function(){
		$(".modal__menu--nav--inner").slideToggle(100);
	});

	$(".header__mobile--menu--inner").on("click", function(){
		$("body").addClass("scroll");
		$(".modal").fadeIn(200);
	});

	$(".modal__cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal").fadeOut(200);
	});

	$('.slider__carousel').slick({
	  	infinite: false,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	prevArrow: '<div class="slider__arrow slider__arrow--prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
	  	nextArrow: '<div class="slider__arrow slider__arrow--next"><i class="fas fa-long-arrow-alt-right"></i></div>'
	});
});