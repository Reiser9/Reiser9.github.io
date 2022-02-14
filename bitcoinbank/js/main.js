$(document).ready(function(){

	const close = () => {
		$("html").removeClass("scroll");
		$(".modal").removeClass("active");
	}

	const close2 = () => {
		$("html").removeClass("scroll2");
		$(".sidebar").removeClass("active");
	}

	$(".menu").on('click', function(){
		$("html").addClass("scroll");
		$(".modal").addClass("active");
	});

	$(".menu2").on('click', function(){
		$("html").addClass("scroll2");
		$(".sidebar").addClass("active");
	});

	$(".modal__close").on('click', function(){
		close();
	});

	$(".sidebar__cross").on('click', function(){
		close2();
	});

	$(".connect__button").on("click", function(){
		$(".default").addClass("active");
		$("html").addClass("scroll");
	});

	$(".modal__mask--cross").on("click", function(){
		$(".default").removeClass("active");
		$("html").removeClass("scroll");
	});

	$(".success__button").on("click", function(){
		$(".success").addClass("active");
		$("html").addClass("scroll");
	});

	$(".success__cross").on("click", function(){
		$(".success").removeClass("active");
		$("html").removeClass("scroll");
	});

	$(".error__button").on("click", function(){
		$(".error").addClass("active");
		$("html").addClass("scroll");
	});

	$(".error__cross").on("click", function(){
		$(".error").removeClass("active");
		$("html").removeClass("scroll");
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
		if($(window).width() > 768){
			close2();
		}
	});

	$(".deposit__choose--item").on("click", function(){
		if(!$(this).hasClass("active")){
			$(this).siblings(".deposit__choose--item").removeClass("active");
			$(this).addClass("active");
		}
	});

	$(".graph__value").on('click', function(){
		if(!$(this).hasClass("active")){
			$(this).parent(".graph__button").siblings(".graph__button").children(".graph__value").removeClass("active");
			$(this).addClass("active");
		}
	});

	const rotate = () => {
		if($(window).width() > 768){
			let items = $(".road__item");
			let sc = $(window).scrollTop();
			for(let i = 0; i < items.length; i++){
				if(sc >= items[i].offsetTop - 500){
					$(items[i]).children(".road__item--circle").addClass("big")
				}
				else{
					$(items[i]).children(".road__item--circle").removeClass("big")
				}
			}
		}
	}

	rotate();
	$(document).scroll(function(){
		rotate();
	});

});