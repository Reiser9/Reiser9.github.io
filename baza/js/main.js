$(document).ready(function(){


	$(".card__month--accardeon--button").on("click", function(){
		$(".card__month--accardeon--button").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("five")){
			$(".card__day").text("5 дней/4 ночи");
		}
		else if($(this).hasClass("six")){
			$(".card__day").text("6 дней/5 ночей");
		}
		else if($(this).hasClass("seven")){
			$(".card__day").text("7 дней/6 ночей");
		}
		else if($(this).hasClass("eight")){
			$(".card__day").text("8 дней/7 ночей");
		}
		else if($(this).hasClass("ten")){
			$(".card__day").text("10 дней/9 ночей");
		}
	});



	$(".zayavka").on("click", function(){
		$("body").addClass("scroll");
		$(".modal").css("display", "flex");
	});

	$(".modal__cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal").css("display", "none");
	});

	$(".header__date--input--input").datepicker();
	$(".c").datepicker();

	$(".header__full--seacrh").on("click", function(e){
		e.preventDefault();
		$(".full__search--inner").toggleClass("active");
	});

	$(".card__top").on("click", function(e){
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: $('#card__point').offset().top }, 500);
	});

	$(".card__razm").on("click", function(e){
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: $('#razm').offset().top }, 500);
	});

	$(".map__off--text--text").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			if($(window).width() > 768){
				$(".map__map").attr("height", "600");
			}
			else{
				$(".map__map").attr("height", "200");
			}
			$(".main__map").css("padding", "0");
		}
		else{
			$(".map__map").attr("height", "0");
			$(".main__map").css("padding", "2rem 0");
		}
	});

	$(".map__off--text--t").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			$(".map__map--2").attr("height", "360");
			$(".main__map--2").css("padding", "0");
		}
		else{
			$(".map__map--2").attr("height", "0");
			$(".main__map--2").css("padding", "2rem 0");
		}
	});

	$(".register__add").on("click", function(){
		$(".register__phone--inner").after('<input type="text" class="input register__input mt1">');
	});

	$(".b-calendar__day").on("click", function(){
		$(this).toggleClass("active")
	});

	$(".card__info--bron--button").on("click", function(){
		$(this).parent(".card__info--title--inner").siblings(".bron__contain").fadeIn(0).css("display", "flex");
	});

	$(".card__info--full").on("click", function(){
		$(".card__option--item").fadeIn(0).css("display", "flex");
		$('html,body').stop().animate({ scrollTop: $('#desc').offset().top }, 500);
	});

	$(".card__info--rule").on("click", function(){
		$(".card__option--item").fadeIn(0).css("display", "flex");
		$('html,body').stop().animate({ scrollTop: $('#rule').offset().top }, 500);
	});

	$(".register__file").change(function(){
	    var filename = $(this).val().replace(/.*\\/, "");
	    $(this).parent(".label__for").siblings(".filel__name").html(filename);
	});

	// рейтинг

	$(".reviews__star--img").on("mouseenter", function(){
		$(this).attr("src", "img/star.png");
	});

	$(".reviews__star--img").on("mouseleave", function(){
		if(!$(this).hasClass("active")){
			$(this).attr("src", "img/staropacity.png");
		}
	});

	$(".reviews__star--img").on("click", function(){
		var num = $(this).attr("data-s");
		if(num == "4"){
			$(".reviews__star--img").attr("src", "img/staropacity.png").removeClass("active");
			$(".reviews__star--img").attr("src", "img/star.png").addClass("active");
		}
		else if(num == "3"){
			$(".reviews__star--img").attr("src", "img/staropacity.png").removeClass("active");
			$(".star1").attr("src", "img/star.png").addClass("active");
			$(".star2").attr("src", "img/star.png").addClass("active");
			$(".star3").attr("src", "img/star.png").addClass("active");
		}
		else if(num == "2"){
			$(".reviews__star--img").attr("src", "img/staropacity.png").removeClass("active");
			$(".star1").attr("src", "img/star.png").addClass("active");
			$(".star2").attr("src", "img/star.png").addClass("active");
		}
		else if(num == "1"){
			$(".reviews__star--img").attr("src", "img/staropacity.png").removeClass("active");
			$(".star1").attr("src", "img/star.png").addClass("active");
		}
	});

	// Слайдеры

	$(".cg1").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.cm1'
	});

	$(".cm1").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cg1',
		focusOnSelect: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next"><i class="fas fa-chevron-right"></i></div>'
	});

	$(".cg2").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.cm2'
	});

	$(".cm2").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cg2',
		focusOnSelect: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next"><i class="fas fa-chevron-right"></i></div>'
	});

	$(".cg3").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.cm3'
	});

	$(".cm3").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cg3',
		focusOnSelect: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next"><i class="fas fa-chevron-right"></i></div>'
	});

	$(".cg4").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.cm4'
	});

	$(".cm4").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cg4',
		focusOnSelect: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next"><i class="fas fa-chevron-right"></i></div>'
	});

});