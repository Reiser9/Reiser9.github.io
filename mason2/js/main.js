$(document).ready(function(){

	$(".main__img").addClass("active");
	$(".main__img--abs").addClass("active");

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".opacity").addClass("active");

	$(".faq__item").on("click", function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).children(".faq__item--wrapper").children(".faq__item--open").text("+");
			$(this).children(".faq__item--text").slideUp(100);
		}
		else{
			$(this).addClass("active");
			$(this).children(".faq__item--wrapper").children(".faq__item--open").text("-");
			$(this).children(".faq__item--text").slideDown(100);
		}
	});

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on("click", function(){
		close();
	});

	$(".go").on("click", function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	if($(window).scrollTop > 20){
		$(".header").addClass("active");
	}

	$(document).on("scroll", function(){
		if($(window).scrollTop() > 20){
			$(".header").addClass("active");
		}
		else{
			$(".header").removeClass("active");
		}
	});

});