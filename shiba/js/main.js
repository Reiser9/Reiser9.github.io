$(document).ready(function(){
	const close = () => {
		$(".menu").removeClass("active");
		$(".menu").attr("src", "img/menu.svg");
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	const check = () => {
		let s_top = $("html").scrollTop();
		let yes = $(".total__value").offset().top;

		if(s_top > yes - 800 && s_top < yes){
		    $(".total__value").spincrement({
		    	to: 1000000000000,
		    	duration: 2000
		    });
		}
	}

	$(".faq__item").on('click', function(){
		$(this).children('.faq__item--title').toggleClass('active');
		$(this).children('.faq__item--text').slideToggle(100);
	});

	$(".footer__up").on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 500);
	});

	$(".menu").on('click', function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			$(this).attr("src", "img/cross.svg");
		}
		else{
			$(this).attr("src", "img/menu.svg");
		}

		$("body").toggleClass("scroll");
		$(".modal__menu").toggleClass("active");
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	$(".ankor__link").on('click', function(e){
		e.preventDefault();
		let href = $(this).attr('data-point');
		let top = $("#"+href).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
		close();
	});

	$(document).scroll(function(){
	    check();
	});

	check();

});