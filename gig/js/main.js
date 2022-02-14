$(document).ready(function(){

	$(".portfolio__link").on("click", function(e){
		$('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 800);
		e.preventDefault();
	});

	$(".uslugi__link").on("click", function(e){
		$('html,body').stop().animate({ scrollTop: $('#uslugi').offset().top }, 800);
		e.preventDefault();
	});

	$(".menu__icon").on("click", function(){
		$(".mobile__menu").removeClass("transform__menu");
	});

	$(".mobile__menu--cross").on("click", function(){
		$(".mobile__menu").addClass("transform__menu");
	});

	$(".zakaz").on("click", function(){
		$(".modal__anket--inner").fadeIn(300).css("display", "flex");
	});

	$(".modal__anket--cross").on("click", function(){
		$(".modal__anket--inner").fadeOut(300);
	});

});