$(document).ready(function(){

	const close = () => {
		$(".modal__menu").removeClass("active");
		$(".header").removeClass("menuOpen");
		$(".menu__icon").addClass("active");
		$(".close__icon").removeClass("active");
	}

	$(".menu__button").on("click", function(){
		$(".modal__menu").toggleClass("active");

		if($(".modal__menu").hasClass("active")){
			$(".header").addClass("menuOpen");
			$(".menu__icon").removeClass("active");
			$(".close__icon").addClass("active");
		}
		else{
			$(".header").removeClass("menuOpen");
			$(".menu__icon").addClass("active");
			$(".close__icon").removeClass("active");
		}
	});
	
    $(".go").on("click", function(e){
		e.preventDefault();
		close();

		let point = $(this).attr("data-point");

		if($("#"+point).length){
			$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
		}
	});

	$(".main__scroll").on("click", function(e){
		e.preventDefault();

		$('body,html').animate({scrollTop: $("#block1").offset().top}, 500);
	});

	const isEndOfBlock = (className) => {
		var block = $('.' + className);
		var scrollHeight = block[0].scrollHeight;
		var windowScroll = $(window).scrollTop();
		var headerHeight = $(".header").height();

		return windowScroll + headerHeight + 8 >= scrollHeight;
	}

	const checkMain = () => {
		var mainIsEnded = isEndOfBlock("main");

		if(mainIsEnded){
			$(".header").addClass("active");
			$(".modal__menu").addClass("dark");
		}
		else{
			$(".header").removeClass("active");
			$(".modal__menu").removeClass("dark");
		}
	}

	$(window).on("scroll", function(){
		checkMain();

		var block = $('.animate');
		var blockOffsetTop = block.offset().top;
		var windowScroll = $(window).scrollTop();
		var blockHeight = block.outerHeight();
		var clientWindowHeight = $(window).innerHeight();

		var progressScroll = (windowScroll - blockOffsetTop + (clientWindowHeight / 2)) / blockHeight * 100;
		
		if(progressScroll >= 10){
			$(".vor1").addClass("active");
		}
		else{
			$(".vor1").removeClass("active");
		}

		if(progressScroll >= 40){
			$(".vor2").addClass("active");
		}
		else{
			$(".vor2").removeClass("active");
		}

		if(progressScroll >= 80){
			$(".vor3").addClass("active");
		}
		else{
			$(".vor3").removeClass("active");
		}

		if(progressScroll >= 10 && progressScroll < 40){
			$(".animText2").removeClass("active");
			$(".animText1").removeClass("prev");

			$(".animText1").addClass("active");
		}
		else if(progressScroll >= 40 && progressScroll < 80){
			$(".animText3").removeClass("active");
			$(".animText2").removeClass("prev");

			$(".animText1").addClass("prev");
			$(".animText1").removeClass("active");
			$(".animText2").addClass("active");
		}
		else if(progressScroll >= 80){
			$(".animText2").addClass("prev");
			$(".animText2").removeClass("active");
			$(".animText3").addClass("active");
		}
	});

	checkMain();
});